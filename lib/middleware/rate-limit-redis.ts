import { type NextRequest, NextResponse } from "next/server"
import { getRedisClient } from "@/lib/cache/redis-client"
import { log } from "@/lib/logger"

interface RateLimitConfig {
  windowMs: number // Time window in milliseconds
  maxRequests: number // Max requests per window
  keyPrefix?: string // Redis key prefix
  skipSuccessfulRequests?: boolean
  skipFailedRequests?: boolean
}

interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  resetTime: number
}

export class RedisRateLimiter {
  private config: Required<RateLimitConfig>

  constructor(config: RateLimitConfig) {
    this.config = {
      keyPrefix: "ratelimit",
      skipSuccessfulRequests: false,
      skipFailedRequests: false,
      ...config,
    }
  }

  async check(identifier: string): Promise<RateLimitResult> {
    const redis = getRedisClient()
    const key = `${this.config.keyPrefix}:${identifier}`
    const now = Date.now()
    const windowStart = now - this.config.windowMs

    try {
      // Use Redis sorted set for sliding window
      const multi = redis.multi()

      // Remove old entries
      multi.zremrangebyscore(key, 0, windowStart)

      // Count requests in current window
      multi.zcard(key)

      // Add current request
      multi.zadd(key, now, `${now}`)

      // Set expiry
      multi.expire(key, Math.ceil(this.config.windowMs / 1000))

      const results = await multi.exec()
      const count = (results?.[1] as number) || 0

      const remaining = Math.max(0, this.config.maxRequests - count - 1)
      const resetTime = now + this.config.windowMs

      return {
        success: count < this.config.maxRequests,
        limit: this.config.maxRequests,
        remaining,
        resetTime,
      }
    } catch (error) {
      log.error("Rate limit check failed", { error, identifier })
      // Fail open - allow request if Redis is down
      return {
        success: true,
        limit: this.config.maxRequests,
        remaining: this.config.maxRequests,
        resetTime: now + this.config.windowMs,
      }
    }
  }

  async reset(identifier: string): Promise<void> {
    const redis = getRedisClient()
    const key = `${this.config.keyPrefix}:${identifier}`
    await redis.del(key)
  }
}

// Middleware factory
export function createRateLimitMiddleware(config: RateLimitConfig) {
  const limiter = new RedisRateLimiter(config)

  return async (request: NextRequest) => {
    const identifier = request.ip || request.headers.get("x-forwarded-for") || "anonymous"

    const result = await limiter.check(identifier)

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Too many requests",
          message: "Rate limit exceeded. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": result.limit.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": new Date(result.resetTime).toISOString(),
            "Retry-After": Math.ceil(config.windowMs / 1000).toString(),
          },
        },
      )
    }

    // Add rate limit headers to response
    const response = NextResponse.next()
    response.headers.set("X-RateLimit-Limit", result.limit.toString())
    response.headers.set("X-RateLimit-Remaining", result.remaining.toString())
    response.headers.set("X-RateLimit-Reset", new Date(result.resetTime).toISOString())

    return response
  }
}

// Pre-configured limiters
export const apiRateLimiter = new RedisRateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 100,
  keyPrefix: "ratelimit:api",
})

export const leadRateLimiter = new RedisRateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 5,
  keyPrefix: "ratelimit:lead",
})
