import type { MetadataRoute } from "next"
import { locales } from "@/lib/i18n/config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://m2solutions.ai"
  const staticPaths = ["", "/about", "/contact", "/faq", "/blog"]
  const solutionPaths = ["/solutions/hotel-concierge", "/solutions/voice-sales-manager", "/solutions/smart-home"]

  const entries: MetadataRoute.Sitemap = []

  // Generate entries for all locales and paths
  for (const locale of locales) {
    // Main pages
    for (const path of staticPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "daily" : "weekly",
        priority: path === "" ? 1.0 : 0.8,
      })
    }

    // Solution pages
    for (const path of solutionPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      })
    }
  }

  return entries
}
