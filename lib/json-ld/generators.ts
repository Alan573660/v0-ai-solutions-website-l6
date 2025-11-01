import type { Locale } from "@/lib/i18n/config"
import type { Organization, Product, Service, FAQItem, HowToStep, BreadcrumbItem } from "./types"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aisolutions-m2.com"

export function generateOrganizationSchema(locale: Locale, data: Partial<Organization>) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: data.name || "AI Solutions M2",
    alternateName: data.alternateName || "M2 Solutions",
    url: baseUrl,
    logo: data.logo || `${baseUrl}/logo.png`,
    description: data.description,
    foundingDate: data.foundingDate || "2020",
    founders: data.founders,
    address: data.address,
    contactPoint: data.contactPoint,
    sameAs: data.sameAs || [
      "https://linkedin.com/company/aisolutions-m2",
      "https://twitter.com/aisolutionsm2",
      "https://github.com/aisolutions-m2",
    ],
  }
}

export function generateWebSiteSchema(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "AI Solutions M2",
    url: `${baseUrl}/${locale}`,
    description,
    inLanguage: locale,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/${locale}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateProductSchema(locale: Locale, product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image || `${baseUrl}/og-image-${locale}.jpg`,
    brand: {
      "@type": "Brand",
      name: product.brand || "AI Solutions M2",
    },
    offers: product.offers
      ? {
          "@type": "Offer",
          price: product.offers.price,
          priceCurrency: product.offers.priceCurrency,
          availability: product.offers.availability || "https://schema.org/InStock",
          url: product.offers.url,
          validFrom: product.offers.validFrom,
          priceValidUntil: product.offers.priceValidUntil,
        }
      : undefined,
    aggregateRating: product.aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: product.aggregateRating.ratingValue,
          ratingCount: product.aggregateRating.ratingCount,
          bestRating: product.aggregateRating.bestRating || "5",
          worstRating: product.aggregateRating.worstRating || "1",
        }
      : undefined,
    review: product.review?.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author.name,
      },
      datePublished: r.datePublished,
      reviewBody: r.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.reviewRating.ratingValue,
        bestRating: r.reviewRating.bestRating || "5",
        worstRating: r.reviewRating.worstRating || "1",
      },
    })),
  }
}

export function generateServiceSchema(locale: Locale, service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: service.areaServed || "Worldwide",
    offers: service.offers
      ? {
          "@type": "Offer",
          price: service.offers.price,
          priceCurrency: service.offers.priceCurrency,
          availability: service.offers.availability || "https://schema.org/InStock",
          url: service.offers.url,
        }
      : undefined,
    aggregateRating: service.aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: service.aggregateRating.ratingValue,
          ratingCount: service.aggregateRating.ratingCount,
          bestRating: service.aggregateRating.bestRating || "5",
          worstRating: service.aggregateRating.worstRating || "1",
        }
      : undefined,
  }
}

export function generateFAQPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[],
  totalTime?: string,
  image?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    image: image || `${baseUrl}/how-to-default.jpg`,
    totalTime: totalTime || "PT30M",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url,
    })),
  }
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  publishedDate: string,
  modifiedDate?: string,
  image?: string,
  author?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image || `${baseUrl}/og-image-default.jpg`,
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    author: author
      ? {
          "@type": "Person",
          name: author,
        }
      : {
          "@id": `${baseUrl}/#organization`,
        },
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }
}
