import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://m2solutions.ai"

  return {
    rules: [
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/", "/login"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/", "/login"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/", "/login"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
