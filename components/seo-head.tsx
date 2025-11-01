import Head from "next/head"
import type { Locale } from "@/lib/i18n/config"

interface SEOHeadProps {
  title: string
  description: string
  locale: Locale
  path?: string
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
}

export function SEOHead({
  title,
  description,
  locale,
  path = "",
  image,
  type = "website",
  publishedTime,
  modifiedTime,
}: SEOHeadProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aisolutions-m2.com"
  const fullUrl = `${baseUrl}/${locale}${path}`
  const ogImage = image || `${baseUrl}/og-image.jpg`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="AI Solutions M2" />

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@aisolutionsm2" />

      {/* Additional SEO */}
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="format-detection" content="telephone=no" />
    </Head>
  )
}
