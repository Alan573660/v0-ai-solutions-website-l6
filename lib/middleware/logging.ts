import type { NextRequest, NextResponse } from "next/server"
import { log, generateCorrelationId } from "@/lib/logger"

// Middleware для логирования всех HTTP запросов
export async function loggingMiddleware(
  request: NextRequest,
  handler: () => Promise<NextResponse>,
): Promise<NextResponse> {
  const startTime = Date.now()
  const correlationId = generateCorrelationId()

  // Добавляем correlation ID в headers для трассировки
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-correlation-id", correlationId)

  const context = {
    correlationId,
    method: request.method,
    path: request.nextUrl.pathname,
    userAgent: request.headers.get("user-agent") || undefined,
  }

  log.info("Incoming request", context)

  try {
    const response = await handler()
    const duration = Date.now() - startTime

    log.http({
      ...context,
      statusCode: response.status,
      duration,
    })

    // Добавляем correlation ID в response headers
    response.headers.set("x-correlation-id", correlationId)

    return response
  } catch (error) {
    const duration = Date.now() - startTime

    log.error("Request failed", error, {
      ...context,
      duration,
    })

    throw error
  }
}

// Хелпер для оборачивания API route handlers
export function withLogging(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    return loggingMiddleware(req, () => handler(req))
  }
}
