import { NextResponse } from "next/server"
import { healthMonitor } from "@/lib/observability/health"

export async function GET() {
  const health = await healthMonitor.getHealth()

  return NextResponse.json(health, {
    status: health.status === "error" ? 503 : 200,
  })
}
