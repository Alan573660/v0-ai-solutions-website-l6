import { HomeClientPage } from "./home-client-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "AI Solutions - Полная автоматизация бизнеса с искусственным интеллектом | Голосовой AI-менеджер, Умный дом",
    en: "AI Solutions - Complete Business Automation with AI | Voice AI Manager, Smart Home",
  }

  const descriptions = {
    ru: "Комплексная автоматизация бизнеса с AI: голосовые менеджеры продаж 24/7, умные дома, решения для МСБ и Enterprise. Увеличьте конверсию на 87%, сократите расходы на 60%. Интеграция с amoCRM, Bitrix24. Опыт 10+ лет, 500+ проектов.",
    en: "Complete business automation with AI: 24/7 voice sales managers, smart homes, SMB and Enterprise solutions. Increase conversion by 87%, reduce costs by 60%. Integration with amoCRM, Bitrix24. 10+ years experience, 500+ projects.",
  }

  const keywords = {
    ru: "автоматизация бизнеса, AI для бизнеса, голосовой AI-менеджер, умный дом, автоматизация продаж, AI ассистент, искусственный интеллект, машинное обучение, CRM интеграция, автоматизация звонков, AI для МСБ, AI для enterprise, голосовой робот, виртуальный ассистент, conversational AI, автоматизация клиентского сервиса, AI технологии, бизнес-автоматизация, увеличение конверсии, умные системы, IoT, smart home, voice AI, AI solutions",
    en: "business automation, AI for business, voice AI manager, smart home, sales automation, AI assistant, artificial intelligence, machine learning, CRM integration, call automation, AI for SMB, AI for enterprise, voice robot, virtual assistant, conversational AI, customer service automation, AI technologies, business automation, conversion increase, smart systems, IoT, smart home, voice AI, AI solutions",
  }

  const title = titles[locale] || titles.ru
  const description = descriptions[locale] || descriptions.ru
  const keywordList = keywords[locale] || keywords.ru

  return {
    title,
    description,
    keywords: keywordList,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
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
