import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"
import { locales } from "@/lib/i18n/config"
import HotelConciergeClient from "./_components/HotelConciergeClient"

const BASE_URL = "https://m2solutions.ai"
const SLUG = "hotel-concierge"

interface HotelConciergePageProps {
  params: Promise<{ locale: Locale }>
}

// Full SEO data for all languages
const seoData = {
  ru: {
    title: "AI-консьерж для отелей | Автоматизация гостиничного сервиса 24/7 | M2 Solutions",
    description: "Премиальный AI-консьерж для отелей: автоматизация room service, заказ еды в номер, вызов такси, бронирование ресторанов. Голосовой ассистент для отелей на 10+ языках. Интеграция с Opera PMS, Fidelio. Повышение удовлетворенности гостей на 40%, экономия 60% времени персонала. Умная колонка для отеля.",
    keywords: "AI-консьерж для отелей, автоматизация отелей, голосовой ассистент для отелей, виртуальный консьерж, умная колонка для отеля, автоматизация гостиничного сервиса, AI для отелей, голосовой робот для отелей, автоматизация заказов, интеграция с PMS, Opera PMS, Fidelio, smart hotel, цифровой консьерж, автоматизация room service, заказ еды в номер, вызов такси, бронирование ресторанов, умный отель, автоматизация HoReCa, гостиничный бизнес AI",
    h1: "AI-консьерж для отелей",
  },
  en: {
    title: "AI Concierge for Hotels | Hotel Service Automation 24/7 | M2 Solutions",
    description: "Premium AI concierge for hotels: room service automation, in-room food ordering, taxi booking, restaurant reservations. Voice assistant for hotels in 10+ languages. Integration with Opera PMS, Fidelio. 40% increase in guest satisfaction, 60% staff time savings. Smart speaker for hotels.",
    keywords: "AI concierge for hotels, hotel automation, voice assistant for hotels, virtual concierge, smart speaker for hotel, hotel service automation, AI for hotels, voice robot for hotels, order automation, PMS integration, Opera PMS, Fidelio, smart hotel, digital concierge, room service automation, in-room food ordering, taxi booking, restaurant reservations",
    h1: "AI Concierge for Hotels",
  },
  es: {
    title: "Conserje IA para Hoteles | Automatización del Servicio Hotelero 24/7 | M2 Solutions",
    description: "Conserje IA premium para hoteles: automatización room service, pedidos de comida en habitación, reserva de taxi, reservas de restaurantes. Asistente de voz para hoteles en 10+ idiomas. Integración con Opera PMS, Fidelio. 40% más satisfacción de huéspedes, 60% ahorro de tiempo del personal.",
    keywords: "conserje IA hoteles, automatización hoteles, asistente voz hoteles, conserje virtual, altavoz inteligente hotel, automatización servicio hotelero, IA para hoteles, robot voz hoteles, automatización pedidos, integración PMS, Opera PMS, Fidelio, hotel inteligente, conserje digital, automatización room service",
    h1: "Conserje IA para Hoteles",
  },
  de: {
    title: "KI-Concierge für Hotels | Hotelservice-Automatisierung 24/7 | M2 Solutions",
    description: "Premium KI-Concierge für Hotels: Room-Service-Automatisierung, Zimmerservice-Bestellungen, Taxi-Buchung, Restaurantreservierungen. Sprachassistent für Hotels in 10+ Sprachen. Integration mit Opera PMS, Fidelio. 40% mehr Gästezufriedenheit, 60% Zeitersparnis für Personal.",
    keywords: "KI Concierge Hotels, Hotelautomatisierung, Sprachassistent Hotels, virtueller Concierge, Smart Speaker Hotel, Hotelservice Automatisierung, KI für Hotels, Sprach-Roboter Hotels, Bestellautomatisierung, PMS Integration, Opera PMS, Fidelio, Smart Hotel, digitaler Concierge",
    h1: "KI-Concierge für Hotels",
  },
  fr: {
    title: "Concierge IA pour Hôtels | Automatisation du Service Hôtelier 24/7 | M2 Solutions",
    description: "Concierge IA premium pour hôtels: automatisation room service, commandes en chambre, réservation taxi, réservations restaurants. Assistant vocal pour hôtels en 10+ langues. Intégration Opera PMS, Fidelio. 40% plus de satisfaction clients, 60% économie temps personnel.",
    keywords: "concierge IA hôtels, automatisation hôtels, assistant vocal hôtels, concierge virtuel, enceinte intelligente hôtel, automatisation service hôtelier, IA pour hôtels, robot vocal hôtels, automatisation commandes, intégration PMS, Opera PMS, Fidelio, hôtel intelligent, concierge digital",
    h1: "Concierge IA pour Hôtels",
  },
  nl: {
    title: "AI-Conciërge voor Hotels | Hotelservice Automatisering 24/7 | M2 Solutions",
    description: "Premium AI-conciërge voor hotels: roomservice automatisering, maaltijdbestellingen, taxi boeken, restaurantreserveringen. Spraakassistent voor hotels in 10+ talen. Integratie met Opera PMS, Fidelio. 40% meer gasttevredenheid, 60% tijdsbesparing personeel.",
    keywords: "AI conciërge hotels, hotelautomatisering, spraakassistent hotels, virtuele conciërge, slimme speaker hotel, hotelservice automatisering, AI voor hotels, spraakrobot hotels, bestelautomatisering, PMS integratie, Opera PMS, Fidelio, smart hotel, digitale conciërge",
    h1: "AI-Conciërge voor Hotels",
  },
  it: {
    title: "Concierge IA per Hotel | Automazione del Servizio Alberghiero 24/7 | M2 Solutions",
    description: "Concierge IA premium per hotel: automazione room service, ordini in camera, prenotazione taxi, prenotazioni ristoranti. Assistente vocale per hotel in 10+ lingue. Integrazione con Opera PMS, Fidelio. 40% più soddisfazione ospiti, 60% risparmio tempo personale.",
    keywords: "concierge IA hotel, automazione hotel, assistente vocale hotel, concierge virtuale, altoparlante intelligente hotel, automazione servizio alberghiero, IA per hotel, robot vocale hotel, automazione ordini, integrazione PMS, Opera PMS, Fidelio, smart hotel, concierge digitale",
    h1: "Concierge IA per Hotel",
  },
}

export async function generateMetadata({ params }: HotelConciergePageProps): Promise<Metadata> {
  const { locale } = await params
  const t = seoData[locale] || seoData.en

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
      images: [{ url: `${BASE_URL}/hotel-concierge-ai.jpg`, width: 1200, height: 630 }],
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

export default async function HotelConciergePage({ params }: HotelConciergePageProps) {
  const { locale } = await params
  const t = seoData[locale] || seoData.ru

  // JSON-LD Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.h1,
    description: t.description,
    provider: {
      "@type": "Organization",
      name: "M2 Solutions",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
    },
    serviceType: "AI Hotel Concierge",
    areaServed: ["RU", "ES", "DE", "FR", "IT", "NL", "US", "GB", "PT", "AE"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hotel AI Concierge Plans",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Small Hotel (up to 50 rooms)" }, price: "299", priceCurrency: "EUR" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medium Hotel (50-200 rooms)" }, price: "599", priceCurrency: "EUR" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Large Hotel (200+ rooms)" }, price: "999", priceCurrency: "EUR" },
      ],
    },
  }

  // JSON-LD FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: locale === "ru" ? "Что такое AI-консьерж для отелей?" : "What is an AI concierge for hotels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "ru" 
            ? "AI-консьерж — это голосовой ассистент для отелей, который автоматизирует обслуживание гостей 24/7: заказ еды в номер, вызов такси, бронирование ресторанов, уборка и другие услуги."
            : "AI concierge is a voice assistant for hotels that automates guest services 24/7: room service orders, taxi booking, restaurant reservations, cleaning and other services.",
        },
      },
      {
        "@type": "Question",
        name: locale === "ru" ? "С какими PMS системами интегрируется?" : "What PMS systems does it integrate with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "ru"
            ? "Интегрируемся с основными PMS: Opera, Fidelio, RoomMaster, Mews, Cloudbeds и другими через API."
            : "We integrate with major PMS: Opera, Fidelio, RoomMaster, Mews, Cloudbeds and others via API.",
        },
      },
      {
        "@type": "Question",
        name: locale === "ru" ? "Сколько стоит AI-консьерж?" : "How much does an AI concierge cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "ru"
            ? "От €299/мес для отелей до 50 номеров. Средние отели — от €599/мес. Крупные сети — индивидуально."
            : "From €299/mo for hotels up to 50 rooms. Medium hotels — from €599/mo. Large chains — custom pricing.",
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
      <HotelConciergeClient locale={locale} />
    </>
  )
}
