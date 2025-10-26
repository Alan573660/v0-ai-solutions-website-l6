import type { SEOProps } from "@/lib/seo/types"
import { getCanonicalUrl, getAlternateLinks, getOgLocale, getOgAlternateLocales } from "@/lib/seo/utils"

const SITE_NAME = "AI Solutions"
const DEFAULT_IMAGE = "/og-image.png"

export function SEO({
  title,
  description,
  locale,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  keywords = [],
  noindex = false,
  nofollow = false,
}: SEOProps) {
  const canonicalUrl = getCanonicalUrl(locale, path)
  const alternateLinks = getAlternateLinks(path)
  const ogLocale = getOgLocale(locale)
  const ogAlternateLocales = getOgAlternateLocales(locale)
  const fullTitle = `${title} | ${SITE_NAME}`
  const imageUrl = image.startsWith("http") ? image : `${process.env.NEXT_PUBLIC_BASE_URL || ""}${image}`

  // Robots meta
  const robotsContent = []
  if (noindex) robotsContent.push("noindex")
  if (nofollow) robotsContent.push("nofollow")
  if (!noindex && !nofollow) robotsContent.push("index", "follow")

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="robots" content={robotsContent.join(", ")} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Links */}
      {alternateLinks.map((link) => (
        <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} />
      ))}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={ogLocale} />
      {ogAlternateLocales.map((altLocale) => (
        <meta key={altLocale} property="og:locale:alternate" content={altLocale} />
      ))}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Article specific */}
      {type === "article" && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === "article" && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === "article" && author && <meta property="article:author" content={author} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional Meta */}
      <meta name="language" content={locale} />
      <meta httpEquiv="content-language" content={locale} />
    </>
  )
}
