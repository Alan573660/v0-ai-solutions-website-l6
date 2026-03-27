import BusinessAutomationClientPage from "./BusinessAutomationClientPage"
import type { Locale } from "@/lib/i18n/config"
import { locales } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"
const SLUG = "business-automation"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

const seoData: Record<string, { title: string; description: string; keywords: string; h1: string }> = {
  ru: {
    title: "Автоматизация бизнеса с помощью ИИ | Программа автоматизации управления компанией",
    description: "Автоматизация управления бизнесом с помощью искусственного интеллекта. Технологии автоматизации бизнеса: AI для продаж, звонков, обработки заявок. Цифровая автоматизация организации бизнеса под ключ.",
    keywords: "автоматизация управления бизнесом, технологии автоматизации бизнеса, компания автоматизация бизнеса, автоматизация бизнеса ИИ, автоматизация организации бизнеса, автоматизация работы компании, программа автоматизации бизнеса, решения для автоматизации бизнеса, цифровая автоматизация бизнеса, ai автоматизация бизнеса, автоматизация бизнеса с помощью ии, искусственный интеллект автоматизация, автоматизация бизнес процессов",
    h1: "Автоматизация бизнеса с помощью искусственного интеллекта",
  },
  en: {
    title: "Business Automation with AI | Enterprise Process Automation Solutions",
    description: "Business management automation with artificial intelligence. Business automation technologies: AI for sales, calls, request processing. Digital business automation turnkey solutions.",
    keywords: "business management automation, business automation technologies, business automation company, AI business automation, business organization automation, company workflow automation, business automation software, business automation solutions, digital business automation, ai business automation, business automation with ai, artificial intelligence automation",
    h1: "Business Automation with Artificial Intelligence",
  },
  es: {
    title: "Automatización de Negocios con IA | Soluciones de Automatización Empresarial",
    description: "Automatización de gestión empresarial con inteligencia artificial. Tecnologías de automatización de negocios: IA para ventas, llamadas, procesamiento de solicitudes.",
    keywords: "automatización gestión empresarial, tecnologías automatización negocios, empresa automatización negocios, automatización negocios IA, automatización organización empresarial, automatización trabajo empresa, software automatización negocios, soluciones automatización empresarial, automatización digital negocios, automatización negocios inteligencia artificial",
    h1: "Automatización de Negocios con Inteligencia Artificial",
  },
  de: {
    title: "Geschäftsautomatisierung mit KI | Enterprise-Prozessautomatisierungslösungen",
    description: "Geschäftsmanagement-Automatisierung mit künstlicher Intelligenz. Geschäftsautomatisierungstechnologien: KI für Vertrieb, Anrufe, Anfragenbearbeitung.",
    keywords: "Geschäftsmanagement Automatisierung, Geschäftsautomatisierungstechnologien, Geschäftsautomatisierung Unternehmen, KI Geschäftsautomatisierung, Unternehmensorganisation Automatisierung, Workflow Automatisierung, Geschäftsautomatisierungssoftware, Geschäftsautomatisierungslösungen, digitale Geschäftsautomatisierung",
    h1: "Geschäftsautomatisierung mit Künstlicher Intelligenz",
  },
  nl: {
    title: "Bedrijfsautomatisering met AI | Enterprise Procesautomatiseringsoplossingen",
    description: "Bedrijfsmanagementautomatisering met kunstmatige intelligentie. Bedrijfsautomatiseringstechnologieën: AI voor verkoop, oproepen, aanvraagverwerking.",
    keywords: "bedrijfsmanagement automatisering, bedrijfsautomatiseringstechnologieën, bedrijfsautomatisering bedrijf, AI bedrijfsautomatisering, bedrijfsorganisatie automatisering, workflow automatisering, bedrijfsautomatiseringssoftware, bedrijfsautomatiseringsoplossingen, digitale bedrijfsautomatisering",
    h1: "Bedrijfsautomatisering met Kunstmatige Intelligentie",
  },
  fr: {
    title: "Automatisation d'Entreprise avec IA | Solutions d'Automatisation des Processus",
    description: "Automatisation de la gestion d'entreprise avec l'intelligence artificielle. Technologies d'automatisation: IA pour ventes, appels, traitement des demandes.",
    keywords: "automatisation gestion entreprise, technologies automatisation entreprise, entreprise automatisation, automatisation entreprise IA, automatisation organisation entreprise, automatisation workflow, logiciel automatisation entreprise, solutions automatisation entreprise, automatisation numérique entreprise",
    h1: "Automatisation d'Entreprise avec Intelligence Artificielle",
  },
  it: {
    title: "Automazione Aziendale con IA | Soluzioni di Automazione dei Processi Aziendali",
    description: "Automazione della gestione aziendale con intelligenza artificiale. Tecnologie di automazione aziendale: IA per vendite, chiamate, elaborazione richieste.",
    keywords: "automazione gestione aziendale, tecnologie automazione aziendale, azienda automazione, automazione aziendale IA, automazione organizzazione aziendale, automazione workflow, software automazione aziendale, soluzioni automazione aziendale, automazione digitale aziendale",
    h1: "Automazione Aziendale con Intelligenza Artificiale",
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = seoData[locale] || seoData.ru

  const alternateLanguages: Record<string, string> = {}
  for (const loc of locales) {
    alternateLanguages[loc] = `${BASE_URL}/${loc}/solutions/${SLUG}`
  }

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `${BASE_URL}/${locale}/solutions/${SLUG}`,
      languages: alternateLanguages,
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${BASE_URL}/${locale}/solutions/${SLUG}`,
      siteName: "M2 AI Solutions",
      locale: locale === "ru" ? "ru_RU" : locale === "es" ? "es_ES" : locale === "de" ? "de_DE" : locale === "fr" ? "fr_FR" : locale === "it" ? "it_IT" : locale === "nl" ? "nl_NL" : "en_US",
      type: "website",
      images: [{ url: `${BASE_URL}/business-automation-ai.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
  }
}

export default async function BusinessAutomationPage({ params }: PageProps) {
  const { locale } = await params
  const t = seoData[locale] || seoData.ru

  // JSON-LD Service structured data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.title,
    description: t.description,
    provider: {
      "@type": "Organization",
      name: "M2 Solutions",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      address: locale === "ru" 
        ? { "@type": "PostalAddress", addressLocality: "Москва", addressCountry: "RU" }
        : { "@type": "PostalAddress", addressLocality: "Barcelona", addressCountry: "ES" },
    },
    serviceType: "Business Automation",
    areaServed: ["RU", "ES", "DE", "FR", "IT", "NL", "US", "GB"],
    offers: {
      "@type": "Offer",
      price: locale === "ru" ? "30000" : "500",
      priceCurrency: locale === "ru" ? "RUB" : "EUR",
    },
  }

  // JSON-LD FAQ structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: locale === "ru" ? "Сколько стоит автоматизация бизнеса ИИ?" : "How much does AI business automation cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "ru" 
            ? "Базовые решения для автоматизации бизнеса от 30 000 ₽/мес. Полная автоматизация организации бизнеса — от 100 000 ₽/мес."
            : "Basic business automation solutions from €500/mo. Full business organization automation — from €1,500/mo.",
        },
      },
      {
        "@type": "Question",
        name: locale === "ru" ? "Как быстро внедряется программа автоматизации?" : "How quickly is automation implemented?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "ru"
            ? "Технологии автоматизации бизнеса внедряются за 2-4 недели."
            : "Business automation technologies are implemented in 2-4 weeks.",
        },
      },
      {
        "@type": "Question",
        name: locale === "ru" ? "Какие процессы можно автоматизировать?" : "What processes can be automated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "ru"
            ? "AI автоматизация бизнеса охватывает продажи, поддержку, маркетинг, HR, документооборот."
            : "AI business automation covers sales, support, marketing, HR, document management.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BusinessAutomationClientPage locale={locale} />
    </>
  )
}
