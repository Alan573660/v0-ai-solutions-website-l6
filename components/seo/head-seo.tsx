import { hreflangs, SITE, ogDefaults, aiMetaTags } from "@/lib/seo/config"
import JsonLd from "./json-ld"
import type { Locale } from "@/lib/i18n/config"

export type HeadSEOProps = {
  locale: Locale
  path: string
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  langAlternates?: { hreflang: string; href: string }[]
  jsonLd?: object[]
}

export default function HeadSEO(props: HeadSEOProps) {
  const { locale, path, title, description, keywords = [], ogImage, langAlternates, jsonLd = [] } = props
  const alternates = langAlternates ?? hreflangs(path)
  const ogImg = ogImage ?? ogDefaults.image
  const canonicalUrl = `${SITE.domain}/${locale}${path}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang */}
      {alternates.map((a) => (
        <link key={a.hreflang} rel="alternate" href={a.href} hrefLang={a.hreflang} />
      ))}

      {/* Open Graph */}
      <meta property="og:type" content={ogDefaults.type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={`${locale}_${locale.toUpperCase()}`} />
      {alternates
        .filter((a) => a.hreflang !== "x-default" && a.hreflang !== locale)
        .map((a) => (
          <meta key={a.hreflang} property="og:locale:alternate" content={`${a.hreflang}_${a.hreflang.toUpperCase()}`} />
        ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />

      {/* AI-friendly meta */}
      <meta name="ai-topic" content={aiMetaTags.topic} />
      <meta name="ai-context" content={aiMetaTags.context} />
      <meta name="ai-summary" content={aiMetaTags.summary} />

      {/* JSON-LD blocks */}
      {jsonLd.map((block, i) => (
        <JsonLd key={i} data={block} />
      ))}
    </>
  )
}
