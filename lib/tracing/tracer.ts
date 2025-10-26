import { NodeSDK } from "@opentelemetry/sdk-node"
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node"
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http"
import { Resource } from "@opentelemetry/resources"
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions"
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base"
import { trace, context, SpanStatusCode, type Span } from "@opentelemetry/api"
import { env } from "@/lib/config/env"

// Initialize OpenTelemetry SDK
let sdk: NodeSDK | null = null

export function initTracing() {
  if (sdk || env.NODE_ENV === "test") {
    return
  }

  const resource = Resource.default().merge(
    new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: "ai-solutions-website",
      [SemanticResourceAttributes.SERVICE_VERSION]: process.env.npm_package_version || "1.0.0",
      [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: env.NODE_ENV,
    }),
  )

  const traceExporter = new OTLPTraceExporter({
    url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT || "http://localhost:4318/v1/traces",
  })

  sdk = new NodeSDK({
    resource,
    spanProcessor: new BatchSpanProcessor(traceExporter),
    instrumentations: [
      getNodeAutoInstrumentations({
        "@opentelemetry/instrumentation-fs": { enabled: false },
        "@opentelemetry/instrumentation-http": {
          ignoreIncomingPaths: ["/health", "/metrics", "/_next"],
        },
      }),
    ],
  })

  sdk.start()

  process.on("SIGTERM", () => {
    sdk
      ?.shutdown()
      .then(() => console.log("Tracing terminated"))
      .catch((error) => console.error("Error terminating tracing", error))
  })
}

// Tracer instance
export const tracer = trace.getTracer("ai-solutions-website", "1.0.0")

// Helper to create spans
export async function withSpan<T>(
  name: string,
  fn: (span: Span) => Promise<T>,
  attributes?: Record<string, string | number | boolean>,
): Promise<T> {
  return tracer.startActiveSpan(name, async (span) => {
    try {
      if (attributes) {
        span.setAttributes(attributes)
      }
      const result = await fn(span)
      span.setStatus({ code: SpanStatusCode.OK })
      return result
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error instanceof Error ? error.message : "Unknown error",
      })
      span.recordException(error as Error)
      throw error
    } finally {
      span.end()
    }
  })
}

// Get current span
export function getCurrentSpan(): Span | undefined {
  return trace.getSpan(context.active())
}

// Add attributes to current span
export function addSpanAttributes(attributes: Record<string, string | number | boolean>) {
  const span = getCurrentSpan()
  if (span) {
    span.setAttributes(attributes)
  }
}
