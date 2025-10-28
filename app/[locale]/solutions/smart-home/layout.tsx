import type React from "react"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = params

  const seoData = {
    ru: {
      title: "Умный дом под ключ | Заказать умный дом в Испании | AI Solutions",
      description:
        "Установка и интеграция умного дома в Испании. Работаем с застройщиками и частными клиентами. AI-консьерж, распознавание лиц, умные замки. Барселона, Моравира, Альтеа. Гарантия 3 года.",
      keywords:
        "умный дом, заказать умный дом, умный дом под ключ, интеграция умного дома, компании умный дом, умный дом Испания, умный дом Барселона, умный дом цена, установка умного дома, система умный дом, умный дом для застройщиков, AI консьерж, распознавание лиц, умные замки, автоматизация дома, голосовое управление домом",
    },
    en: {
      title: "Smart Home Turnkey | Order Smart Home in Spain | AI Solutions",
      description:
        "Smart home installation and integration in Spain. We work with developers and private clients. AI concierge, face recognition, smart locks. Barcelona, Moraira, Altea. 3-year warranty.",
      keywords:
        "smart home, order smart home, smart home turnkey, smart home integration, smart home companies, smart home Spain, smart home Barcelona, smart home price, smart home installation, smart home system, smart home for developers, AI concierge, face recognition, smart locks, home automation, voice control home",
    },
    es: {
      title: "Casa Inteligente Llave en Mano | Pedir Casa Inteligente en España | AI Solutions",
      description:
        "Instalación e integración de casa inteligente en España. Trabajamos con promotores y clientes privados. Conserje AI, reconocimiento facial, cerraduras inteligentes. Barcelona, Moraira, Altea. Garantía 3 años.",
      keywords:
        "casa inteligente, pedir casa inteligente, casa inteligente llave en mano, integración casa inteligente, empresas casa inteligente, casa inteligente España, casa inteligente Barcelona, precio casa inteligente, instalación casa inteligente, sistema casa inteligente, casa inteligente para promotores, conserje AI, reconocimiento facial, cerraduras inteligentes, automatización hogar, control por voz hogar",
    },
  }

  const data = seoData[locale] || seoData.en

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
      locale: locale,
      images: [
        {
          url: "/modern-smart-home-interior-luxury.jpg",
          width: 1200,
          height: 630,
          alt: "Smart Home Interior",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["/modern-smart-home-interior-luxury.jpg"],
    },
    alternates: {
      canonical: `/${locale}/solutions/smart-home`,
      languages: {
        ru: "/ru/solutions/smart-home",
        en: "/en/solutions/smart-home",
        es: "/es/solutions/smart-home",
      },
    },
  }
}

export default function SmartHomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
