import type { Locale } from "@/lib/i18n/config"
import { getTranslations } from "next-intl/server"
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateArticleSchema,
  generateProductSchema,
  generateServiceSchema,
} from "@/lib/json-ld/generators"
import type { BreadcrumbItem } from "@/lib/json-ld/types"

interface StructuredDataProps {
  locale: Locale
  type?: "home" | "article" | "faq" | "product" | "service"
  data?: any
}

export async function StructuredData({ locale, type = "home", data }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aisolutions-m2.com"
  const t = await getTranslations({ locale })

  const organizationSchema = generateOrganizationSchema(locale, {
    name: "AI Solutions M2",
    alternateName: "M2 Solutions",
    logo: `${baseUrl}/logo.png`,
    description: t("hero.description"),
    foundingDate: "2020",
    address: [
      {
        streetAddress: "123 Market Street, Suite 500",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94105",
        addressCountry: "US",
      },
    ],
    contactPoint: [
      {
        telephone: "+1-555-123-4567",
        contactType: "sales",
        availableLanguage: ["English", "Russian", "Spanish", "German", "Dutch", "French"],
        areaServed: "Worldwide",
      },
    ],
    sameAs: [
      "https://linkedin.com/company/aisolutions-m2",
      "https://twitter.com/aisolutionsm2",
      "https://github.com/aisolutions-m2",
    ],
  })

  const websiteSchema = generateWebSiteSchema(locale, t("hero.description"))

  const breadcrumbItems: BreadcrumbItem[] = [
    {
      name: t("nav.home"),
      url: `${baseUrl}/${locale}`,
    },
  ]

  if (data?.breadcrumbs) {
    breadcrumbItems.push(...data.breadcrumbs)
  }

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)

  let faqSchema = null
  if (type === "faq" && data?.questions) {
    faqSchema = generateFAQPageSchema(data.questions)
  }

  let articleSchema = null
  if (type === "article" && data) {
    articleSchema = generateArticleSchema(
      data.title,
      data.description,
      data.url,
      data.publishedDate,
      data.modifiedDate,
      data.image,
      data.author,
    )
  }

  let productSchema = null
  if (type === "product" && data) {
    productSchema = generateProductSchema(locale, data)
  }

  let serviceSchema = null
  if (type === "service" && data) {
    serviceSchema = generateServiceSchema(locale, data)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
      )}
    </>
  )
}

export default StructuredData
