import { NextResponse } from "next/server"
import { getAllFAQ } from "@/lib/api/faq-data"

export async function GET() {
  const faq = getAllFAQ()

  return NextResponse.json(
    {
      faq,
      meta: {
        generated: new Date().toISOString(),
        version: "1.0",
        format: "application/json",
        count: faq.length,
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
