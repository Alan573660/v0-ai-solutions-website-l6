import type { NextRequest } from "next/server"
import { ZodError } from "zod"

import { log } from "@/lib/logger"
import { AppError, ValidationError } from "@/lib/errors/app-error"
import { metrics, METRICS } from "@/lib/observability/metrics"
import { performanceMonitor } from "@/lib/utils/performance"
import { leadService } from "./service"
import { LeadFormSchema } from "./schemas"
import type { LeadData, LeadServiceResponse } from "./types"

export class LeadController {
  async handleLeadSubmission(request: NextRequest, correlationId: string): Promise<LeadServiceResponse> {
    const requestId = request.headers.get("x-request-id") || crypto.randomUUID()

    // Start performance monitoring
    performanceMonitor.start(`lead-submission-${requestId}`)

    try {
      // Parse request body
      const body = await request.json()

      // Validate with Zod
      const validatedData = LeadFormSchema.parse(body)

      // Check honeypot (anti-spam)
      const honeypot = request.headers.get("x-honeypot")
      if (honeypot) {
        log.warn("Honeypot triggered, potential spam", {
          email: validatedData.email,
          correlationId,
          requestId,
        })
        return { success: true }
      }

      // Prepare lead data
      const leadData: LeadData = {
        id: leadService.generateLeadId(),
        type: validatedData.type,
        locale: validatedData.locale,
        timestamp: new Date().toISOString(),
        contact: {
          name: validatedData.name,
          company: validatedData.company,
          email: validatedData.email,
          phone: validatedData.phone,
        },
        details: validatedData.details || {},
        message: validatedData.message,
        consents: validatedData.consents,
        utm: validatedData.utm,
        source: "website",
        ip: request.ip || request.headers.get("x-forwarded-for"),
        userAgent: request.headers.get("user-agent"),
      }

      log.info("Processing lead submission", {
        leadId: leadData.id,
        type: leadData.type,
        email: leadData.contact.email,
        correlationId,
        requestId,
      })

      // Process lead
      await leadService.processLead(leadData, correlationId)

      // Record metrics
      metrics.counter(METRICS.LEAD_SUBMISSION_TOTAL, 1, {
        type: leadData.type,
        locale: leadData.locale,
      })

      const duration = performanceMonitor.end(`lead-submission-${requestId}`)
      metrics.histogram(METRICS.HTTP_REQUEST_DURATION, duration, {
        endpoint: "/api/lead",
        method: "POST",
        status: "200",
      })

      return {
        success: true,
        leadId: leadData.id,
        message: leadService.getSuccessMessage(validatedData.type, validatedData.locale),
      }
    } catch (error) {
      // Record error metrics
      metrics.counter(METRICS.LEAD_SUBMISSION_ERRORS, 1)

      const duration = performanceMonitor.end(`lead-submission-${requestId}`)
      metrics.histogram(METRICS.HTTP_REQUEST_DURATION, duration, {
        endpoint: "/api/lead",
        method: "POST",
        status: error instanceof AppError ? String(error.statusCode) : "500",
      })

      if (error instanceof ZodError) {
        log.warn("Validation error", {
          errors: error.errors,
          correlationId,
          requestId,
        })
        throw new ValidationError("Invalid form data", error.errors)
      }

      if (error instanceof AppError) {
        log.error("Application error", error, { correlationId, requestId })
        throw error
      }

      log.error("Unexpected error processing lead", error, { correlationId, requestId })
      throw new AppError("Failed to process lead submission", 500)
    }
  }
}

export const leadController = new LeadController()
