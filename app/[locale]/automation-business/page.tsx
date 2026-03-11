import { AutomationBusinessPage } from "@/components/pages/automation-business-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface AutomationBusinessPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: AutomationBusinessPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<Locale, string> = {
    ru: "AI автоматизация бизнеса — автоматизация процессов, продаж и обработки заявок",
    en: "AI Business Automation — Process, Sales and Request Automation",
    es: "Automatización de Negocios con IA — Procesos, Ventas y Solicitudes",
    de: "KI-Geschäftsautomatisierung — Prozess-, Vertriebs- und Anfragenautomatisierung",
    nl: "AI Bedrijfsautomatisering — Proces-, Verkoop- en Aanvraagautomatisering",
    fr: "Automatisation d'Entreprise par IA — Processus, Ventes et Demandes",
  }

  const descriptions: Record<Locale, string> = {
    ru: "AI автоматизация бизнеса: автоматизация звонков, продаж, обработки заявок, выставления счетов и логистики. Платформа AI-агентов для автоматизации бизнес-процессов компании.",
    en: "AI business automation: calls, sales, requests, invoicing and logistics automation. AI agents platform for business process automation.",
    es: "Automatización empresarial con IA: llamadas, ventas, solicitudes, facturación y logística. Plataforma de agentes IA.",
    de: "KI-Geschäftsautomatisierung: Anrufe, Vertrieb, Anfragen, Rechnungsstellung und Logistik. KI-Agenten-Plattform.",
    nl: "AI bedrijfsautomatisering: oproepen, verkoop, aanvragen, facturering en logistiek. AI-agenten platform.",
    fr: "Automatisation d'entreprise par IA: appels, ventes, demandes, facturation et logistique. Plateforme d'agents IA.",
  }

  const title = titles[locale] || titles.ru
  const description = descriptions[locale] || descriptions.ru

  return {
    title,
    description,
    keywords: locale === "ru" 
      ? "автоматизация бизнеса, автоматизация бизнес процессов, система автоматизации бизнеса, автоматизация бизнеса ИИ, системы автоматизации бизнес процессов, автоматизация управления бизнесом, технологии автоматизации бизнеса"
      : "business automation, business process automation, AI business automation, automation systems",
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/automation-business`,
      siteName: "M2 AI Solutions",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/automation-business`,
      languages: {
        ru: `${BASE_URL}/ru/automation-business`,
        en: `${BASE_URL}/en/automation-business`,
        es: `${BASE_URL}/es/automation-business`,
        de: `${BASE_URL}/de/automation-business`,
        nl: `${BASE_URL}/nl/automation-business`,
        fr: `${BASE_URL}/fr/automation-business`,
      },
    },
  }
}

// JSON-LD Schema Markup
function generateJsonLd(locale: Locale) {
  const isRu = locale === "ru"
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": isRu ? "M2 AI Solutions - Автоматизация бизнеса" : "M2 AI Solutions - Business Automation",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "RUB",
          "description": isRu ? "Бесплатный аудит автоматизации" : "Free automation audit"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127"
        },
        "featureList": isRu 
          ? ["Автоматизация звонков", "Автоматизация продаж", "Обработка заявок", "Выставление счетов", "Расчет доставки"]
          : ["Call automation", "Sales automation", "Request processing", "Invoice generation", "Delivery calculation"]
      },
      {
        "@type": "Organization",
        "name": "M2 AI Solutions",
        "url": "https://m2solutions.ai",
        "logo": "https://m2solutions.ai/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+7-XXX-XXX-XXXX",
          "contactType": "sales",
          "availableLanguage": ["Russian", "English"]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": isRu ? "Что такое автоматизация бизнеса?" : "What is business automation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": isRu 
                ? "Автоматизация бизнеса — это использование программных систем и AI для автоматического выполнения бизнес-процессов: обработки звонков, заявок, заказов, выставления счетов и логистики."
                : "Business automation is the use of software systems and AI to automatically execute business processes: calls, requests, orders, invoicing and logistics."
            }
          },
          {
            "@type": "Question",
            "name": isRu ? "Какие процессы можно автоматизировать?" : "What processes can be automated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": isRu
                ? "Звонки (входящие и исходящие), обработку заявок, обработку заказов, выставление счетов, расчет доставки, продажи и работу с клиентами."
                : "Calls (inbound and outbound), request processing, order processing, invoicing, delivery calculation, sales and customer service."
            }
          },
          {
            "@type": "Question",
            "name": isRu ? "Можно ли автоматизировать отдел продаж?" : "Can sales department be automated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": isRu
                ? "Да. AI-менеджеры могут принимать заявки, отвечать на вопросы клиентов, квалифицировать лиды, презентовать продукт и помогать закрывать сделки."
                : "Yes. AI managers can receive requests, answer customer questions, qualify leads, present products and help close deals."
            }
          },
          {
            "@type": "Question",
            "name": isRu ? "Сколько стоит автоматизация бизнеса?" : "How much does business automation cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": isRu
                ? "Стоимость зависит от объема процессов и интеграций. Мы предоставляем бесплатный аудит и расчет ROI за 15 минут."
                : "Cost depends on process volume and integrations. We provide free audit and ROI calculation in 15 minutes."
            }
          },
          {
            "@type": "Question",
            "name": isRu ? "Как быстро можно внедрить автоматизацию?" : "How quickly can automation be implemented?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": isRu
                ? "Базовая интеграция занимает 7 дней. Полная автоматизация всех процессов — от 2 до 4 недель в зависимости от сложности."
                : "Basic integration takes 7 days. Full process automation — 2 to 4 weeks depending on complexity."
            }
          }
        ]
      }
    ]
  }
}

export default async function AutomationBusinessPageWrapper({ params }: AutomationBusinessPageProps) {
  const { locale } = await params
  const jsonLd = generateJsonLd(locale)
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AutomationBusinessPage locale={locale} />
    </>
  )
}
