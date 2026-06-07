import HomeClientPage from "./home-client-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    es: "AI Solutions - Automatización integral de negocios con IA | Gestor de ventas con IA de voz, Casa inteligente",
    en: "AI Solutions - Complete Business Automation with AI | Voice AI Manager, Smart Home",
    ru: "AI Solutions - Полная автоматизация бизнеса с искусственным интеллектом | Голосовой AI-менеджер, Умный дом",
  }

  const descriptions = {
    es: "Automatización integral de negocios con IA: gestores de ventas por voz 24/7, casas inteligentes, soluciones para pymes y empresas. Aumenta la conversión un 87%, reduce costes un 60%. Integración con CRM. Más de 10 años de experiencia, más de 500 proyectos.",
    en: "Complete business automation with AI: 24/7 voice sales managers, smart homes, SMB and Enterprise solutions. Increase conversion by 87%, reduce costs by 60%. Integration with amoCRM, Bitrix24. 10+ years experience, 500+ projects.",
    ru: "Комплексная автоматизация бизнеса с AI: голосовые менеджеры продаж 24/7, умные дома, решения для МСБ и Enterprise. Увеличьте конверсию на 87%, сократите расходы на 60%. Интеграция с amoCRM, Bitrix24. Опыт 10+ лет, 500+ проектов.",
  }

  const keywords = {
    es: "automatización de negocios, IA para empresas, gestor de ventas con IA de voz, casa inteligente, automatización de ventas, asistente IA, inteligencia artificial, aprendizaje automático, integración CRM, automatización de llamadas, IA para pymes, IA para empresas, robot de voz, asistente virtual, IA conversacional, automatización de atención al cliente, tecnologías IA, aumento de conversión, sistemas inteligentes, IoT, smart home, voice AI, AI solutions",
    en: "business automation, AI for business, voice AI manager, smart home, sales automation, AI assistant, artificial intelligence, machine learning, CRM integration, call automation, AI for SMB, AI for enterprise, voice robot, virtual assistant, conversational AI, customer service automation, AI technologies, business automation, conversion increase, smart systems, IoT, smart home, voice AI, AI solutions",
    ru: "автоматизация бизнеса, AI для бизнеса, голосовой AI-менеджер, умный дом, автоматизация продаж, AI ассистент, искусственный интеллект, машинное обучение, CRM интеграция, автоматизация звонков, AI для МСБ, AI для enterprise, голосовой робот, виртуальный ассистент, conversational AI, автоматизация клиентского сервиса, AI технологии, бизнес-автоматизация, увеличение конверсии, умные системы, IoT, smart home, voice AI, AI solutions",
  }

  const title = titles[locale as keyof typeof titles] || titles.es
  const description = descriptions[locale as keyof typeof descriptions] || descriptions.es
  const keywordList = keywords[locale as keyof typeof keywords] || keywords.es

  return {
    title,
    description,
    keywords: keywordList,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : "es_ES",
      url: `https://m2solutions.ai/${locale}`,
      siteName: "AI Solutions",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "AI Solutions - Complete Business Automation",
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
      languages: {
        ru: "https://m2solutions.ai/ru",
        en: "https://m2solutions.ai/en",
      },
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
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params

  return <HomeClientPage locale={locale} />
}
