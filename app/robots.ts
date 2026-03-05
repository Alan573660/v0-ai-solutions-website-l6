import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://m2solutions.ai"

  return {
    rules: [
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/static/", "/private/", "/login"],
        crawlDelay: 2,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/static/", "/private/", "/login"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/static/", "/private/", "/login"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
