import { type NextRequest, NextResponse } from "next/server"
import { getFAQByLocale } from "@/lib/api/faq-data"
import type { Locale } from "@/lib/i18n/config"

export async function GET(request: NextRequest, { params }: { params: { locale: Locale } }) {
  const { locale } = params

  const faq = getFAQByLocale(locale)

  return NextResponse.json(
    {
      faq,
      locale,
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
