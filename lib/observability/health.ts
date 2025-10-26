interface HealthCheck {
  name: string
  status: "healthy" | "unhealthy" | "degraded"
  message?: string
  timestamp: number
  responseTime?: number
}

interface HealthStatus {
  status: "ok" | "error" | "degraded"
  checks: Record<string, HealthCheck>
  timestamp: number
  uptime: number
  version: string
}

class HealthMonitor {
  private startTime: number = Date.now()
  private checks: Map<string, () => Promise<HealthCheck>> = new Map()

  registerCheck(name: string, checkFn: () => Promise<HealthCheck>): void {
    this.checks.set(name, checkFn)
  }

  async getHealth(): Promise<HealthStatus> {
    const checkResults = await Promise.all(
      Array.from(this.checks.entries()).map(async ([name, checkFn]) => {
        try {
          const start = Date.now()
          const result = await checkFn()
          return {
            name,
            ...result,
            responseTime: Date.now() - start,
          }
        } catch (error) {
          return {
            name,
            status: "unhealthy" as const,
            message: error instanceof Error ? error.message : "Unknown error",
            timestamp: Date.now(),
          }
        }
      }),
    )

    const hasUnhealthy = checkResults.some((check) => check.status === "unhealthy")
    const hasDegraded = checkResults.some((check) => check.status === "degraded")

    const checksObject = checkResults.reduce(
      (acc, check) => {
        acc[check.name] = check
        return acc
      },
      {} as Record<string, HealthCheck>,
    )

    return {
      status: hasUnhealthy ? "error" : hasDegraded ? "degraded" : "ok",
      checks: checksObject,
      timestamp: Date.now(),
      uptime: Math.floor((Date.now() - this.startTime) / 1000),
      version: process.env.npm_package_version || "1.0.0",
    }
  }

  async isHealthy(): Promise<boolean> {
    const health = await this.getHealth()
    return health.status === "ok"
  }
}

export const healthMonitor = new HealthMonitor()

// Register default health checks
healthMonitor.registerCheck("system", async () => ({
  name: "system",
  status: "healthy",
  message: "System is operational",
  timestamp: Date.now(),
}))

healthMonitor.registerCheck("memory", async () => {
  if (typeof process !== "undefined" && process.memoryUsage) {
    const usage = process.memoryUsage()
    const usedMB = Math.round(usage.heapUsed / 1024 / 1024)
    const totalMB = Math.round(usage.heapTotal / 1024 / 1024)
    const percentUsed = (usedMB / totalMB) * 100

    return {
      name: "memory",
      status: percentUsed > 90 ? "degraded" : "healthy",
      message: `Memory usage: ${usedMB}MB / ${totalMB}MB (${percentUsed.toFixed(1)}%)`,
      timestamp: Date.now(),
    }
  }

  return {
    name: "memory",
    status: "healthy",
    message: "Memory check not available",
    timestamp: Date.now(),
  }
})

import { getRedisClient } from "@/lib/cache/redis-client"
import { env } from "@/lib/config/env"

healthMonitor.registerCheck("redis", async () => {
  try {
    const redis = getRedisClient()
    const start = Date.now()
    await redis.ping()
    const responseTime = Date.now() - start

    return {
      name: "redis",
      status: responseTime > 1000 ? "degraded" : "healthy",
      message: `Redis responding in ${responseTime}ms`,
      timestamp: Date.now(),
      responseTime,
    }
  } catch (error) {
    return {
      name: "redis",
      status: "unhealthy",
      message: error instanceof Error ? error.message : "Redis connection failed",
      timestamp: Date.now(),
    }
  }
})

healthMonitor.registerCheck("hubspot", async () => {
  if (!env.HUBSPOT_API_KEY) {
    return {
      name: "hubspot",
      status: "degraded",
      message: "HubSpot API key not configured",
      timestamp: Date.now(),
    }
  }

  try {
    const start = Date.now()
    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts?limit=1", {
      headers: {
        Authorization: `Bearer ${env.HUBSPOT_API_KEY}`,
      },
    })
    const responseTime = Date.now() - start

    return {
      name: "hubspot",
      status: response.ok ? "healthy" : "degraded",
      message: `HubSpot API responding in ${responseTime}ms (status: ${response.status})`,
      timestamp: Date.now(),
      responseTime,
    }
  } catch (error) {
    return {
      name: "hubspot",
      status: "unhealthy",
      message: error instanceof Error ? error.message : "HubSpot API connection failed",
      timestamp: Date.now(),
    }
  }
})
