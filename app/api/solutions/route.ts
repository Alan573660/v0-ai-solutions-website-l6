import { NextResponse } from "next/server"
import { getAllSolutions } from "@/lib/api/solutions-data"

export async function GET() {
  const solutions = getAllSolutions()

  return NextResponse.json(
    {
      solutions,
      meta: {
        generated: new Date().toISOString(),
        version: "1.0",
        format: "application/json",
        count: solutions.length,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  )
}
