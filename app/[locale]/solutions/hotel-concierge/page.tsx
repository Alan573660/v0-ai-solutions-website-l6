import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"
import HotelConciergeClient from "./_components/HotelConciergeClient"

interface HotelConciergePageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: HotelConciergePageProps): Promise<Metadata> {
  const { locale } = params

  const titles = {
    ru: "AI-консьерж для отелей | Автоматизация гостиничного сервиса 24/7 | AI Solutions",
    en: "AI Concierge for Hotels | Hotel Service Automation 24/7 | AI Solutions",
  }

  const descriptions = {
    ru: "AI-консьерж для отелей обрабатывает запросы гостей 24/7: заказы еды, уборка, такси, бронирования. Повышает удовлетворенность гостей на 40%, экономит 60% времени персонала. Поддержка 10+ языков, интеграция с PMS системами. Голосовой ассистент для отелей.",
    en: "AI concierge for hotels handles guest requests 24/7: food orders, cleaning, taxi, bookings. Increases guest satisfaction by 40%, saves 60% staff time. Supports 10+ languages, integrates with PMS systems. Voice assistant for hotels.",
  }

  const keywords = {
    ru: "AI-консьерж для отелей, автоматизация отелей, голосовой ассистент для отелей, виртуальный консьерж, умная колонка для отеля, автоматизация гостиничного сервиса, AI для отелей, голосовой робот для отелей, автоматизация заказов, интеграция с PMS, Opera PMS, Fidelio, hotel automation, hotel AI assistant, smart hotel, цифровой консьерж, автоматизация room service, заказ еды в номер, вызов такси, бронирование ресторанов",
    en: "AI concierge for hotels, hotel automation, voice assistant for hotels, virtual concierge, smart speaker for hotel, hotel service automation, AI for hotels, voice robot for hotels, order automation, PMS integration, Opera PMS, Fidelio, hotel automation, hotel AI assistant, smart hotel, digital concierge, room service automation, in-room food ordering, taxi booking, restaurant reservations",
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
      url: `https://aisolutions.com/${locale}/solutions/hotel-concierge`,
      siteName: "AI Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://aisolutions.com/${locale}/solutions/hotel-concierge`,
      languages: {
        ru: "https://aisolutions.com/ru/solutions/hotel-concierge",
        en: "https://aisolutions.com/en/solutions/hotel-concierge",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function HotelConciergePage({ params }: HotelConciergePageProps) {
  return <HotelConciergeClient params={params} />
}
