"use client"

interface CaseStudySchemaProps {
  name: string
  description: string
  client: string
  industry: string
  datePublished: string
  results: {
    metric: string
    value: string
  }[]
  image?: string
}

export default function CaseStudySchema({
  name,
  description,
  client,
  industry,
  datePublished,
  results,
  image,
}: CaseStudySchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": typeof window !== "undefined" ? window.location.href : "",
    headline: name,
    description,
    image: image || "https://ai-solutions.ru/og-image.jpg",
    datePublished,
    author: {
      "@type": "Organization",
      name: "AI Solutions",
      url: "https://ai-solutions.ru",
    },
    publisher: {
      "@type": "Organization",
      name: "AI Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://ai-solutions.ru/logo.png",
      },
    },
    about: {
      "@type": "Organization",
      name: client,
      industry,
    },
    mentions: results.map((result) => ({
      "@type": "QuantitativeValue",
      name: result.metric,
      value: result.value,
    })),
    inLanguage: "ru-RU",
    articleSection: "Case Study",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export { CaseStudySchema }
