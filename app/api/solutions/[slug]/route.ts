import { type NextRequest, NextResponse } from "next/server"
import { getSolutionBySlug } from "@/lib/api/solutions-data"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params

  const solution = getSolutionBySlug(slug)

  if (!solution) {
    return NextResponse.json({ error: "Solution not found" }, { status: 404 })
  }

  return NextResponse.json(
    {
      solution,
      meta: {
        generated: new Date().toISOString(),
        version: "1.0",
        format: "application/json",
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
