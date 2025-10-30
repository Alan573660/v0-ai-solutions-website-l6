import { HeroSection } from "@/components/hero-section"
import { TrustedCompanies } from "@/components/trusted-companies"
import { PlatformFeaturesSection } from "@/components/platform-features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CostComparisonSection } from "@/components/cost-comparison-section"
import { BenefitsSection } from "@/components/benefits-section"
import { SolutionsSection } from "@/components/solutions-section"
import dynamic from "next/dynamic"
import { locales, type Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

export const revalidate = 3600

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "AI Solutions - Голосовой AI-ассистент для бизнеса | Автоматизация продаж и клиентского сервиса",
    en: "AI Solutions - Voice AI Assistant for Business | Sales & Customer Service Automation",
    es: "AI Solutions - Asistente de IA de Voz para Negocios | Automatización de Ventas y Servicio al Cliente",
    de: "AI Solutions - Sprach-KI-Assistent für Unternehmen | Vertriebs- und Kundenservice-Automatisierung",
    nl: "AI Solutions - Stem AI-assistent voor Bedrijven | Verkoop- en Klantenservice Automatisering",
    fr: "AI Solutions - Assistant IA Vocal pour Entreprises | Automatisation des Ventes et du Service Client",
  }

  const descriptions = {
    ru: "Голосовой AI-ассистент для автоматизации продаж, клиентского сервиса и бизнес-процессов. Увеличьте конверсию в 3 раза, обрабатывайте 100% звонков 24/7. Интеграция с CRM, автоматизация звонков, виртуальный ассистент для отелей, банков, ритейла. Искусственный интеллект для бизнеса.",
    en: "Voice AI assistant for sales automation, customer service and business processes. Increase conversion 3x, handle 100% calls 24/7. CRM integration, call automation, virtual assistant for hotels, banks, retail. Artificial intelligence for business.",
    es: "Asistente de IA de voz para automatización de ventas, servicio al cliente y procesos empresariales. Aumente la conversión 3x, maneje el 100% de las llamadas 24/7. Integración CRM, automatización de llamadas, asistente virtual para hoteles, bancos, retail.",
    de: "Sprach-KI-Assistent für Vertriebsautomatisierung, Kundenservice und Geschäftsprozesse. Erhöhen Sie die Konversion um das 3-fache, bearbeiten Sie 100% der Anrufe 24/7. CRM-Integration, Anrufautomatisierung, virtueller Assistent für Hotels, Banken, Einzelhandel.",
    nl: "Stem AI-assistent voor verkoopautomatisering, klantenservice en bedrijfsprocessen. Verhoog conversie 3x, behandel 100% van de oproepen 24/7. CRM-integratie, oproepautomatisering, virtuele assistent voor hotels, banken, retail.",
    fr: "Assistant IA vocal pour l'automatisation des ventes, du service client et des processus métier. Augmentez la conversion de 3x, gérez 100% des appels 24/7. Intégration CRM, automatisation des appels, assistant virtuel pour hôtels, banques, retail.",
  }

  const keywords = {
    ru: "голосовой AI-ассистент, автоматизация продаж, AI для бизнеса, голосовой робот, виртуальный ассистент, CRM интеграция, автоматизация звонков, AI для отелей, AI для банков, AI для ритейла, искусственный интеллект для бизнеса, автоматизация клиентского сервиса, голосовые технологии, conversational AI, voice AI, speech recognition, natural language processing, AI automation, business automation, customer service automation, голосовой бот, AI-ассистент, автоматизация колл-центра, умный ассистент, голосовые продажи, AI менеджер, виртуальный менеджер продаж, автоматизация обслуживания клиентов",
    en: "voice AI assistant, sales automation, AI for business, voice robot, virtual assistant, CRM integration, call automation, AI for hotels, AI for banks, AI for retail, artificial intelligence for business, customer service automation, voice technologies, conversational AI, voice AI, speech recognition, natural language processing, AI automation, business automation, customer service automation, voice bot, AI assistant, call center automation, smart assistant, voice sales, AI manager, virtual sales manager, customer service automation",
    es: "asistente de IA de voz, automatización de ventas, IA para negocios, robot de voz, asistente virtual, integración CRM, automatización de llamadas, IA para hoteles, IA para bancos, IA para retail, inteligencia artificial para negocios, automatización de servicio al cliente, tecnologías de voz, IA conversacional",
    de: "Sprach-KI-Assistent, Vertriebsautomatisierung, KI für Unternehmen, Sprachroboter, virtueller Assistent, CRM-Integration, Anrufautomatisierung, KI für Hotels, KI für Banken, KI für Einzelhandel, künstliche Intelligenz für Unternehmen, Kundenservice-Automatisierung, Sprachtechnologien, konversationelle KI",
    nl: "stem AI-assistent, verkoopautomatisering, AI voor bedrijven, stemrobot, virtuele assistent, CRM-integratie, oproepautomatisering, AI voor hotels, AI voor banken, AI voor retail, kunstmatige intelligentie voor bedrijven, klantenservice automatisering, stemtechnologieën, conversationele AI",
    fr: "assistant IA vocal, automatisation des ventes, IA pour entreprises, robot vocal, assistant virtuel, intégration CRM, automatisation des appels, IA pour hôtels, IA pour banques, IA pour retail, intelligence artificielle pour entreprises, automatisation du service client, technologies vocales, IA conversationnelle",
  }

  const title = titles[locale] || titles.ru
  const description = descriptions[locale] || descriptions.ru
  const keywordList = keywords[locale] || keywords.ru

  const languages: Record<string, string> = {}
  locales.forEach((loc) => {
    languages[loc] = `https://m2solutions.ai/${loc}`
  })

  return {
    title,
    description,
    keywords: keywordList,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : `${locale}_${locale.toUpperCase()}`,
      url: `https://m2solutions.ai/${locale}`,
      siteName: "AI Solutions",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "AI Solutions - Voice AI Assistant",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}`,
      languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "google-site-verification": "your-verification-code",
      "yandex-verification": "your-verification-code",
    },
  }
}

const DemoSection = dynamic(() => import("@/components/demo-section").then((mod) => ({ default: mod.DemoSection })), {
  loading: () => <div className="min-h-[400px]" />,
})

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  {
    loading: () => <div className="min-h-[400px]" />,
  },
)

const CTASection = dynamic(() => import("@/components/cta-section").then((mod) => ({ default: mod.CTASection })), {
  loading: () => <div className="min-h-[200px]" />,
})

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params

  return (
    <div className="bg-background">
      <HeroSection locale={locale} />
      <TrustedCompanies locale={locale} />
      <PlatformFeaturesSection locale={locale} />
      <HowItWorksSection locale={locale} />
      <CostComparisonSection locale={locale} />
      <BenefitsSection locale={locale} />
      <SolutionsSection locale={locale} />
      <DemoSection locale={locale} />
      <TestimonialsSection locale={locale} />
      <CTASection locale={locale} />
    </div>
  )
}
