import { locales } from "@/lib/i18n/config"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()
  const basePaths = [
    "",
    "/platform",
    "/platform/architecture",
    "/platform/demo",
    "/pricing",
    "/blog",
    "/cases",
    "/contact",
    "/privacy",
    "/terms",
  ]

  const entries: MetadataRoute.Sitemap = []
  for (const l of locales) {
    for (const p of basePaths) {
      const url = `/${l}${p}`
      const alternates: Record<string, string> = {}
      for (const alt of locales) {
        alternates[alt] = `/${alt}${p}`
      }
      entries.push({
        url,
        lastModified: now,
        changeFrequency: "weekly",
        priority: p === "" ? 1 : 0.7,
        alternates: {
          languages: alternates,
        },
      })
    }
  }
  return entries
}
