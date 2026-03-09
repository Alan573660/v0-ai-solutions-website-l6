import { VoiceSalesManagerClientPage } from "./VoiceSalesManagerClientPage"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface VoiceSalesManagerPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: VoiceSalesManagerPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Голосовой AI-менеджер продаж | Автоматизация продаж 24/7 | AI Solutions",
    en: "Voice AI Sales Manager | Sales Automation 24/7 | AI Solutions",
    es: "Gerente de Ventas AI por Voz | Automatización de Ventas 24/7 | AI Solutions",
    de: "Sprach-KI-Vertriebsmanager | Vertriebsautomatisierung 24/7 | AI Solutions",
    nl: "Stem AI Verkoopmanager | Verkoopautomatisering 24/7 | AI Solutions",
    fr: "Gestionnaire des Ventes IA Vocal | Automatisation des Ventes 24/7 | AI Solutions",
  }

  const descriptions = {
    ru: "Голосовой AI-менеджер продаж увеличивает конверсию в 2-3 раза. Квалифицирует лиды, презентует продукт, рассчитывает стоимость и выставляет счета автоматически. Обрабатывает 100% входящих звонков 24/7. Интеграция с CRM, автоматизация продаж, виртуальный менеджер по продажам.",
    en: "Voice AI sales manager increases conversion 2-3x. Qualifies leads, presents products, calculates costs and issues invoices automatically. Handles 100% incoming calls 24/7. CRM integration, sales automation, virtual sales manager.",
    es: "El gerente de ventas AI por voz aumenta la conversión 2-3x. Califica leads, presenta productos, calcula costos y emite facturas automáticamente. Maneja 100% de llamadas entrantes 24/7. Integración CRM, automatización de ventas, gerente de ventas virtual.",
    de: "Sprach-KI-Vertriebsmanager erhöht die Konversion um das 2-3-fache. Qualifiziert Leads, präsentiert Produkte, berechnet Kosten und stellt automatisch Rechnungen aus. Bearbeitet 100% der eingehenden Anrufe 24/7. CRM-Integration, Vertriebsautomatisierung, virtueller Vertriebsmanager.",
    nl: "Stem AI verkoopmanager verhoogt conversie 2-3x. Kwalificeert leads, presenteert producten, berekent kosten en geeft automatisch facturen uit. Behandelt 100% inkomende oproepen 24/7. CRM-integratie, verkoopautomatisering, virtuele verkoopmanager.",
    fr: "Le gestionnaire des ventes IA vocal augmente la conversion de 2 à 3 fois. Qualifie les prospects, présente les produits, calcule les coûts et émet des factures automatiquement. Traite 100% des appels entrants 24/7. Intégration CRM, automatisation des ventes, gestionnaire des ventes virtuel.",
  }

  const keywords = {
    ru: "голосовой менеджер продаж, AI менеджер продаж, автоматизация продаж, виртуальный менеджер, голосовой робот продаж, AI для продаж, автоматизация звонков, квалификация лидов, CRM интеграция, автоматическое выставление счетов, голосовой ассистент продаж, увеличение конверсии, автоматизация колл-центра, исходящие звонки, входящие звонки, обработка лидов, AI для бизнеса, conversational AI, voice sales automation",
    en: "voice sales manager, AI sales manager, sales automation, virtual manager, voice sales robot, AI for sales, call automation, lead qualification, CRM integration, automatic invoicing, voice sales assistant, conversion increase, call center automation, outbound calls, inbound calls, lead processing, AI for business, conversational AI, voice sales automation",
    es: "gerente de ventas por voz, gerente de ventas AI, automatización de ventas, gerente virtual, robot de ventas por voz, AI para ventas, automatización de llamadas, calificación de leads, integración CRM, facturación automática, asistente de ventas por voz, aumento de conversión, automatización de call center, llamadas salientes, llamadas entrantes, procesamiento de leads, AI para negocios, conversational AI, automatización de ventas por voz",
    de: "sprach-vertriebsmanager, KI-vertriebsmanager, vertriebsautomatisierung, virtueller manager, sprach-verkaufsroboter, KI für vertrieb, anrufautomatisierung, lead-qualifizierung, CRM-integration, automatische rechnungsstellung, sprach-vertriebsassistent, konversionssteigerung, call-center-automatisierung, ausgehende anrufe, eingehende anrufe, lead-verarbeitung, KI für unternehmen, conversational AI, sprach-vertriebsautomatisierung",
    nl: "stem verkoopmanager, AI verkoopmanager, verkoopautomatisering, virtuele manager, stem verkooprobot, AI voor verkoop, oproepautomatisering, lead kwalificatie, CRM integratie, automatische facturering, stem verkoopassistent, conversie verhoging, callcenter automatisering, uitgaande oproepen, inkomende oproepen, lead verwerking, AI voor bedrijven, conversational AI, stem verkoopautomatisering",
    fr: "gestionnaire des ventes vocal, gestionnaire des ventes IA, automatisation des ventes, gestionnaire virtuel, robot de vente vocal, IA pour les ventes, automatisation des appels, qualification des prospects, intégration CRM, facturation automatique, assistant de vente vocal, augmentation de conversion, automatisation du centre d'appels, appels sortants, appels entrants, traitement des prospects, IA pour les entreprises, conversational AI, automatisation des ventes vocales",
  }

  const localeMap = {
    ru: "ru_RU",
    en: "en_US",
    es: "es_ES",
    de: "de_DE",
    nl: "nl_NL",
    fr: "fr_FR",
  }

  const title = titles[locale] || titles.ru
  const description = descriptions[locale] || descriptions.ru
  const keywordList = keywords[locale] || keywords.ru
  const ogLocale = localeMap[locale] || "ru_RU"

  return {
    title,
    description,
    keywords: keywordList,
    openGraph: {
      title,
      description,
      type: "website",
      locale: ogLocale,
      url: `${BASE_URL}/${locale}/solutions/voice-sales-manager`,
      images: [
        {
          url: `${BASE_URL}/images/og/voice-sales-manager.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "AI Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/voice-sales-manager`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/voice-sales-manager",
        en: "https://m2solutions.ai/en/solutions/voice-sales-manager",
        es: "https://m2solutions.ai/es/solutions/voice-sales-manager",
        de: "https://m2solutions.ai/de/solutions/voice-sales-manager",
        nl: "https://m2solutions.ai/nl/solutions/voice-sales-manager",
        fr: "https://m2solutions.ai/fr/solutions/voice-sales-manager",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

// JSON-LD Structured Data
function generateJsonLd(locale: Locale) {
  const names = {
    ru: "Голосовой AI-менеджер по продажам",
    en: "Voice AI Sales Manager",
    es: "Gerente de Ventas AI por Voz",
    de: "Sprach-KI-Vertriebsmanager",
    nl: "Stem AI Verkoopmanager",
    fr: "Gestionnaire des Ventes IA Vocal",
  }

  const descriptions = {
    ru: "Автоматизация продаж с помощью голосового AI. Квалификация лидов, презентация продуктов, расчет стоимости и выставление счетов 24/7.",
    en: "Sales automation with voice AI. Lead qualification, product presentation, cost calculation and invoicing 24/7.",
    es: "Automatización de ventas con IA de voz. Calificación de leads, presentación de productos, cálculo de costos y facturación 24/7.",
    de: "Vertriebsautomatisierung mit Sprach-KI. Lead-Qualifizierung, Produktpräsentation, Kostenberechnung und Rechnungsstellung 24/7.",
    nl: "Verkoopautomatisering met stem-AI. Lead-kwalificatie, productpresentatie, kostenberekening en facturering 24/7.",
    fr: "Automatisation des ventes avec IA vocale. Qualification des prospects, présentation des produits, calcul des coûts et facturation 24/7.",
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: names[locale],
        description: descriptions[locale],
        brand: {
          "@type": "Brand",
          name: "M2 AI Solutions",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: "990",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: names[locale],
        applicationCategory: "BusinessApplication",
        operatingSystem: "Cloud",
        offers: {
          "@type": "Offer",
          price: "990",
          priceCurrency: "EUR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: locale === "ru" ? "Как быстро можно запустить AI-менеджера?" : "How quickly can you launch the AI manager?",
            acceptedAnswer: {
              "@type": "Answer",
              text: locale === "ru" 
                ? "Базовая настройка занимает 2-3 дня. Полная интеграция с CRM и обучение на ваших скриптах - 1-2 недели."
                : "Basic setup takes 2-3 days. Full CRM integration and training on your scripts - 1-2 weeks.",
            },
          },
          {
            "@type": "Question",
            name: locale === "ru" ? "Сколько звонков может обработать AI одновременно?" : "How many calls can AI handle simultaneously?",
            acceptedAnswer: {
              "@type": "Answer",
              text: locale === "ru"
                ? "Неограниченное количество. AI масштабируется автоматически под любую нагрузку."
                : "Unlimited. AI scales automatically for any load.",
            },
          },
          {
            "@type": "Question",
            name: locale === "ru" ? "Можно ли интегрировать с нашей CRM?" : "Can it integrate with our CRM?",
            acceptedAnswer: {
              "@type": "Answer",
              text: locale === "ru"
                ? "Да, поддерживаем интеграцию с Bitrix24, AmoCRM, Salesforce, HubSpot и любыми CRM через API."
                : "Yes, we support integration with Bitrix24, AmoCRM, Salesforce, HubSpot and any CRM via API.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "ru" ? "Главная" : "Home",
            item: `${BASE_URL}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "ru" ? "Решения" : "Solutions",
            item: `${BASE_URL}/${locale}/solutions`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: names[locale],
            item: `${BASE_URL}/${locale}/solutions/voice-sales-manager`,
          },
        ],
      },
    ],
  }
}

export default async function VoiceSalesManagerPage({ params }: VoiceSalesManagerPageProps) {
  const { locale } = await params
  const jsonLd = generateJsonLd(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VoiceSalesManagerClientPage locale={locale} />
    </>
  )
}
