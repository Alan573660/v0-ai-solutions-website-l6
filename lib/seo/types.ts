import type { Locale } from "@/lib/i18n/config"

export interface SEOProps {
  title: string
  description: string
  locale: Locale
  path: string
  image?: string
  type?: "website" | "article" | "product"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  keywords?: string[]
  noindex?: boolean
  nofollow?: boolean
}

export interface AlternateLink {
  hreflang: string
  href: string
}
