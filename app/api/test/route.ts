import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "API is working",
    timestamp: new Date().toISOString(),
    env: {
      nodeEnv: process.env.NODE_ENV,
      hasBaseUrl: !!process.env.NEXT_PUBLIC_BASE_URL,
      hasHubspotKey: !!process.env.HUBSPOT_API_KEY,
      hasGaId: !!process.env.NEXT_PUBLIC_GA_ID,
      hasMetricsToken: !!process.env.METRICS_TOKEN,
    },
  })
}
