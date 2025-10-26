import { type NextRequest, NextResponse } from "next/server"

import { log, generateCorrelationId } from "@/lib/logger"
import { AppError } from "@/lib/errors/app-error"
import { leadController } from "@/lib/modules/leads/controller"

export async function POST(request: NextRequest) {
  const correlationId = generateCorrelationId()

  try {
    const result = await leadController.handleLeadSubmission(request, correlationId)
    return NextResponse.json(result, {
      headers: { "x-correlation-id": correlationId },
    })
  } catch (error) {
    if (error instanceof AppError) {
      log.error("Application error in lead API", error, { correlationId })
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          details: error.details,
        },
        { status: error.statusCode, headers: { "x-correlation-id": correlationId } },
      )
    }

    log.error("Unhandled error in lead API", error, { correlationId })
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500, headers: { "x-correlation-id": correlationId } },
    )
  }
}
