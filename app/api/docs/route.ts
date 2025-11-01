import { NextResponse } from "next/server"

export async function GET() {
  try {
    const { openApiSpec } = await import("@/lib/api/openapi")
    return NextResponse.json(openApiSpec)
  } catch (error) {
    return NextResponse.json(
      {
        openapi: "3.0.0",
        info: {
          title: "AI Solutions API",
          version: "1.0.0",
          description: "API documentation temporarily unavailable",
        },
        paths: {},
      },
      { status: 503 },
    )
  }
}
