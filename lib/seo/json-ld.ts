import { SITE } from "./config"

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.domain,
  logo: `${SITE.domain}${SITE.logo}`,
  sameAs: ["https://www.linkedin.com/company/aisolutions", "https://t.me/aisolutions"],
}

export function serviceJsonLd(localeUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Smart Home & Building Automation",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.domain,
    },
    areaServed: ["Europe", "Russia", "Spain", "Netherlands", "France", "Germany", "Italy"],
    url: localeUrl,
    description:
      "AI-driven smart home and building management systems with video intercoms, access control, and energy monitoring.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    inLanguage: ["ru", "en", "es", "nl", "fr", "de", "it"],
  }
}

export function buildFAQ(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }
}
