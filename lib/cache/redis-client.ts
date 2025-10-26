/**
 * Redis client с connection pooling для production
 */

import Redis from "ioredis"
import { logger } from "@/lib/logger"

let redis: Redis | null = null

const REDIS_CONFIG = {
  maxRetriesPerRequest: 3,
  enableReadyCheck: true,
  enableOfflineQueue: true,
  connectTimeout: 10000,
  // Connection pool settings
  lazyConnect: false,
  keepAlive: 30000,
  family: 4,
  // Retry strategy
  retryStrategy: (times: number) => {
    const delay = Math.min(times * 50, 2000)
    logger.warn(`Redis retry attempt ${times}, delay: ${delay}ms`)
    return delay
  },
  // Reconnect on error
  reconnectOnError: (err: Error) => {
    const targetError = "READONLY"
    if (err.message.includes(targetError)) {
      logger.error("Redis READONLY error, reconnecting...")
      return true
    }
    return false
  },
}

export function getRedisClient(): Redis | null {
  if (redis) return redis

  const redisUrl = process.env.REDIS_URL || process.env.KV_REST_API_URL

  if (!redisUrl) {
    logger.warn("Redis URL not configured, caching disabled")
    return null
  }

  try {
    redis = new Redis(redisUrl, REDIS_CONFIG)

    // Event handlers
    redis.on("connect", () => {
      logger.info("Redis client connected")
    })

    redis.on("ready", () => {
      logger.info("Redis client ready")
    })

    redis.on("error", (err) => {
      logger.error("Redis client error", { error: err.message })
    })

    redis.on("close", () => {
      logger.warn("Redis connection closed")
    })

    redis.on("reconnecting", () => {
      logger.info("Redis client reconnecting...")
    })

    return redis
  } catch (error) {
    logger.error("Failed to initialize Redis client", error)
    return null
  }
}

export async function closeRedisConnection(): Promise<void> {
  if (redis) {
    try {
      await redis.quit()
      logger.info("Redis connection closed gracefully")
    } catch (error) {
      logger.error("Error closing Redis connection", error)
    }
  }
}

export async function checkRedisHealth(): Promise<boolean> {
  const client = getRedisClient()
  if (!client) return false

  try {
    const result = await client.ping()
    return result === "PONG"
  } catch (error) {
    logger.error("Redis health check failed", error)
    return false
  }
}

export { redis }
