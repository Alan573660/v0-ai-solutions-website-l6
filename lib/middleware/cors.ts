import type { NextRequest, NextResponse } from "next/server"
import { config } from "@/lib/config"

export function handleCORS(request: NextRequest, response: NextResponse): NextResponse {
  const origin = request.headers.get("origin")
  const allowedOrigins = [
    config.siteUrl,
    "https://m2solutions.ai",
    "https://www.m2solutions.ai",
    "http://localhost:3000",
    "http://localhost:3001",
  ]

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin)
    response.headers.set("Access-Control-Allow-Credentials", "true")
  }

  if (request.method === "OPTIONS") {
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, X-Request-ID")
    response.headers.set("Access-Control-Max-Age", "86400")
  }

  return response
}
