"use client"

interface ArticleSchemaProps {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  author: string
  image?: string
  keywords?: string[]
  articleSection?: string
  wordCount?: number
}

export default function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  author,
  image,
  keywords = [],
  articleSection = "Technology",
  wordCount,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image || "https://ai-solutions.ru/og-image.jpg",
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: "https://ai-solutions.ru/about",
    },
    publisher: {
      "@type": "Organization",
      name: "AI Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://ai-solutions.ru/logo.png",
      },
    },
    keywords: keywords.join(", "),
    articleSection,
    wordCount,
    inLanguage: "ru-RU",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": typeof window !== "undefined" ? window.location.href : "",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export { ArticleSchema }
