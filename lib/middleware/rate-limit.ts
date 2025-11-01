import { type NextRequest, NextResponse } from "next/server"
import { config } from "@/lib/config"

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

const store: RateLimitStore = {}

interface RateLimitOptions {
  windowMs: number
  maxRequests: number
}

export function rateLimit(request: NextRequest): NextResponse | null {
  const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"
  const now = Date.now()
  const windowMs = config.rateLimit.windowMs
  const maxRequests = config.rateLimit.max

  // Clean up old entries
  Object.keys(store).forEach((key) => {
    if (store[key].resetTime < now) {
      delete store[key]
    }
  })

  // Check rate limit
  if (!store[ip]) {
    store[ip] = {
      count: 1,
      resetTime: now + windowMs,
    }
    return null
  }

  if (store[ip].count >= maxRequests) {
    return NextResponse.json(
      {
        error: "Too many requests",
        retryAfter: Math.ceil((store[ip].resetTime - now) / 1000),
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((store[ip].resetTime - now) / 1000)),
        },
      },
    )
  }

  store[ip].count++
  return null
}

export function createRateLimitMiddleware(options: RateLimitOptions) {
  const localStore: RateLimitStore = {}

  return async (request: NextRequest): Promise<NextResponse> => {
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"
    const now = Date.now()
    const { windowMs, maxRequests } = options

    // Clean up old entries
    Object.keys(localStore).forEach((key) => {
      if (localStore[key].resetTime < now) {
        delete localStore[key]
      }
    })

    // Check rate limit
    if (!localStore[ip]) {
      localStore[ip] = {
        count: 1,
        resetTime: now + windowMs,
      }
      return NextResponse.next()
    }

    if (localStore[ip].count >= maxRequests) {
      return NextResponse.json(
        {
          error: "Too many requests",
          retryAfter: Math.ceil((localStore[ip].resetTime - now) / 1000),
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((localStore[ip].resetTime - now) / 1000)),
          },
        },
      )
    }

    localStore[ip].count++
    return NextResponse.next()
  }
}
