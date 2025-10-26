import { type NextRequest, NextResponse } from "next/server"
import { locales, type Locale } from "@/lib/i18n/config"
import { getAllRoutes, getRoutePriority, getRouteChangeFrequency } from "@/lib/sitemap/routes"

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const locale = pathname.replace("/sitemap-", "").replace(".xml", "") as Locale

  if (!locales.includes(locale)) {
    return new NextResponse("Not Found", { status: 404 })
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://m2solutions.ai"
  const routes = getAllRoutes()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes
  .map((route) => {
    const url = `${baseUrl}/${locale}${route}`
    const priority = getRoutePriority(route)
    const changeFreq = getRouteChangeFrequency(route)
    const lastMod = new Date().toISOString()

    // Generate hreflang links for all locales
    const hreflangLinks = locales
      .map((loc) => `    <xhtml:link rel="alternate" hreflang="${loc}" href="${baseUrl}/${loc}${route}" />`)
      .join("\n")

    // Add x-default hreflang
    const xDefaultLink = `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en${route}" />`

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
${hreflangLinks}
${xDefaultLink}
  </url>`
  })
  .join("\n")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}

export const dynamic = "force-static"
export const revalidate = 3600
