import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://m2solutions.ai"

  return [
    {
      url: `${baseUrl}/sitemap-ru.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-en.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-es.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-de.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-nl.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-fr.xml`,
      lastModified: new Date(),
    },
  ]
}
