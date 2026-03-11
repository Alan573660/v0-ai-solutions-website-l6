import type { MetadataRoute } from "next"
import { locales } from "@/lib/i18n/config"

const BASE_URL = "https://m2solutions.ai"

// All site pages (path after /[locale])
const pages = [
  "",
  "/about",
  "/about/team",
  "/blog",
  "/blog/ai-banking-security-speed",
  "/blog/ai-chatbots-customer-service-2025",
  "/blog/ai-delivery-reduce-errors",
  "/blog/ai-dlya-malogo-biznesa",
  "/blog/ai-powered-crm-sales-automation",
  "/blog/avtomatizaciya-otelej-ai",
  "/blog/bankovskij-sektor-ai",
  "/blog/golosovye-assistenty-prodazhi",
  "/blog/gosuslugi-ai-avtomatizaciya",
  "/blog/government-services-ai-assistants",
  "/blog/gpt5-claude4-gemini25-ai-models-2025",
  "/blog/hotel-automation-no-queues",
  "/blog/multilingual-assistants-future",
  "/blog/openai-deepseek-grok-technologies",
  "/blog/roi-ai-assistants-real-case",
  "/blog/small-business-ai-sales",
  "/blog/voice-ai-real-estate-property-sales",
  "/blog/voice-assistants-increase-sales-3x",
  "/blog/voice-search-seo-ai-optimization-2025",
  "/blog/voice-speakers-hotels-trend-2025",
  "/careers",
  "/cases",
  "/cases/aeroflot-customer-service",
  "/cases/gazprom-industrial-ai",
  "/cases/magnit-retail-revolution",
  "/cases/moscow-government-digital-services",
  "/cases/rostelecom-telecom",
  "/cases/sberbank-ai-assistant",
  "/cases/vtb-digital-banking",
  "/cases/x5-retail-group",
  "/contacts",
  "/docs",
  "/faq",
  "/knowledge-base",
  "/partners",
  "/platform",
  "/platform/architecture",
  "/platform/demo",
  "/platform/pricing-calculator",
  "/solutions",
  "/solutions/custom",
  "/solutions/enterprise",
  "/solutions/hotel-concierge",
  "/solutions/m2-agents",
  "/solutions/smart-home",
  "/solutions/smb",
  "/solutions/voice-sales-manager",
  "/solutions/voice-sales-manager/cases/dental-clinic",
  "/solutions/voice-sales-manager/cases/logistics",
  "/solutions/voice-sales-manager/cases/online-education",
  "/solutions/robot-operator",
  "/solutions/automatic-operator",
  "/solutions/virtual-operator",
  "/solutions/automation-sales",
  "/solutions/sales-automation-system",
  "/solutions/robot-dlya-zvonkov",
  "/solutions/robot-dlya-prodazh",
  "/solutions/obrabotka-zayavok",
  "/solutions/obrabotka-zakazov",
  "/solutions/vystavlenie-schetov",
  "/solutions/raschet-dostavki",
  "/solutions/ai-dlya-biznesa",
  "/status",
  "/support",
  "/privacy",
  "/terms",
  "/cookies",
  "/dpa",
  "/login",
] as const

const HIGH_PRIORITY = [
  "",
  "/solutions",
  "/solutions/enterprise",
  "/solutions/smb",
  "/solutions/hotel-concierge",
  "/solutions/voice-sales-manager",
  "/solutions/m2-agents",
  "/solutions/smart-home",
  "/solutions/robot-operator",
  "/solutions/automatic-operator",
  "/solutions/virtual-operator",
  "/solutions/automation-sales",
  "/solutions/sales-automation-system",
  "/solutions/robot-dlya-zvonkov",
  "/solutions/robot-dlya-prodazh",
  "/solutions/obrabotka-zayavok",
  "/solutions/obrabotka-zakazov",
  "/solutions/vystavlenie-schetov",
  "/solutions/raschet-dostavki",
  "/solutions/ai-dlya-biznesa",
  "/platform",
  "/cases",
  "/contacts",
  "/about",
]

const MEDIUM_PRIORITY = [
  "/blog",
  "/faq",
  "/partners",
  "/platform/demo",
  "/platform/pricing-calculator",
  "/careers",
  "/about/team",
  "/docs",
  "/knowledge-base",
  "/support",
]

function getPriority(page: string): number {
  if (page === "") return 1.0
  if (HIGH_PRIORITY.includes(page)) return 0.9
  if (MEDIUM_PRIORITY.includes(page)) return 0.7
  if (page.startsWith("/blog/")) return 0.6
  if (page.startsWith("/cases/")) return 0.7
  if (page.startsWith("/solutions/")) return 0.8
  return 0.5
}

function getChangeFrequency(
  page: string,
): "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" {
  if (page === "") return "daily"
  if (page === "/blog" || page === "/cases" || page === "/status") return "daily"
  if (page.startsWith("/blog/")) return "weekly"
  if (HIGH_PRIORITY.includes(page)) return "weekly"
  if (page === "/privacy" || page === "/terms" || page === "/cookies" || page === "/dpa") return "yearly"
  return "monthly"
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of locales) {
      const url = `${BASE_URL}/${locale}${page}`

      // Build hreflang alternates for every locale + x-default
      const languages: Record<string, string> = {}
      for (const altLocale of locales) {
        languages[altLocale] = `${BASE_URL}/${altLocale}${page}`
      }
      languages["x-default"] = `${BASE_URL}/ru${page}`

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: getChangeFrequency(page),
        priority: getPriority(page),
        alternates: {
          languages,
        },
      })
    }
  }

  return entries
}
