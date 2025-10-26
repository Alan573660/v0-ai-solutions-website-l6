import { type NextRequest, NextResponse } from "next/server"
import { metrics } from "@/lib/observability/metrics"

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  const expectedToken = process.env.METRICS_TOKEN

  if (!expectedToken) {
    return NextResponse.json({ error: "Metrics endpoint not configured" }, { status: 503 })
  }

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const token = authHeader.substring(7)
  if (token !== expectedToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const allMetrics = metrics.getMetrics()

  // Group metrics by name
  const grouped = allMetrics.reduce(
    (acc, metric) => {
      if (!acc[metric.name]) {
        acc[metric.name] = []
      }
      acc[metric.name].push(metric)
      return acc
    },
    {} as Record<string, typeof allMetrics>,
  )

  return NextResponse.json({
    metrics: grouped,
    timestamp: Date.now(),
  })
}
