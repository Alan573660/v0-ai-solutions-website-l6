import type React from "react"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = params

  const seoData = {
    ru: {
      title: "Умный дом под ключ | Заказать умный дом | AI Solutions",
      description:
        "AI Solutions — умные системы для домов, ЖКХ и застройщиков. Автоматизация зданий, видеодомофоны с ИИ, диспетчеризация и управление энергопотреблением. Работаем в России, Казахстане, Испании.",
      keywords:
        "умный дом, заказать умный дом, умный дом под ключ, интеграция умного дома, компании умный дом, автоматизация зданий, видеодомофоны AI, система диспетчеризации, контроль доступа, решения для ЖКХ, решения для бизнеса, решения для застройщиков",
    },
    en: {
      title: "Smart Home Turnkey | Order Smart Home | AI Solutions",
      description:
        "AI Solutions — smart systems for homes, housing and developers. Building automation, AI video intercoms, dispatching and energy management. We work in Russia, Kazakhstan, Spain.",
      keywords:
        "smart home, order smart home, smart home turnkey, smart home integration, smart home companies, building automation, AI video intercoms, dispatching system, access control, housing solutions, business solutions, developer solutions",
    },
    es: {
      title: "Casa Inteligente Llave en Mano | Pedir Casa Inteligente | AI Solutions",
      description:
        "AI Solutions — sistemas inteligentes para hogares, viviendas y promotores. Automatización de edificios, videoporteros AI, despacho y gestión energética. Trabajamos en Rusia, Kazajstán, España.",
      keywords:
        "casa inteligente, pedir casa inteligente, casa inteligente llave en mano, integración casa inteligente, empresas casa inteligente, automatización edificios, videoporteros AI, sistema despacho, control acceso, soluciones vivienda, soluciones negocios, soluciones promotores",
    },
    de: {
      title: "Smart Home Schlüsselfertig | Smart Home Bestellen | AI Solutions",
      description:
        "AI Solutions — intelligente Systeme für Häuser, Wohnungsverwaltung und Bauträger. Gebäudeautomation, KI-Video-Türsprechanlagen, Leitstelle und Energiemanagement. Wir arbeiten in Russland, Kasachstan, Spanien.",
      keywords:
        "smart home, smart home bestellen, smart home schlüsselfertig, smart home integration, smart home unternehmen, gebäudeautomation, KI videosprechanlage, leitstellensystem, zutrittskontrolle, wohnungslösungen, geschäftslösungen, bauträgerlösungen",
    },
    nl: {
      title: "Slim Huis Turnkey | Slim Huis Bestellen | AI Solutions",
      description:
        "AI Solutions — slimme systemen voor woningen, woningbeheer en ontwikkelaars. Gebouwautomatisering, AI video-intercoms, dispatching en energiebeheer. Wij werken in Rusland, Kazachstan, Spanje.",
      keywords:
        "slim huis, slim huis bestellen, slim huis turnkey, slim huis integratie, slim huis bedrijven, gebouwautomatisering, AI video-intercom, dispatchingsysteem, toegangscontrole, woningoplossingen, bedrijfsoplossingen, ontwikkelaarsoplossingen",
    },
    fr: {
      title: "Maison Intelligente Clé en Main | Commander Maison Intelligente | AI Solutions",
      description:
        "AI Solutions — systèmes intelligents pour maisons, gestion immobilière et promoteurs. Automatisation des bâtiments, interphones vidéo IA, dispatching et gestion énergétique. Nous travaillons en Russie, Kazakhstan, Espagne.",
      keywords:
        "maison intelligente, commander maison intelligente, maison intelligente clé en main, intégration maison intelligente, entreprises maison intelligente, automatisation bâtiments, interphones vidéo IA, système dispatching, contrôle accès, solutions logement, solutions entreprise, solutions promoteurs",
    },
    it: {
      title: "Casa Intelligente Chiavi in Mano | Ordinare Casa Intelligente | AI Solutions",
      description:
        "AI Solutions — sistemi intelligenti per case, gestione immobiliare e sviluppatori. Automazione edifici, videocitofoni AI, dispatching e gestione energetica. Lavoriamo in Russia, Kazakistan, Spagna.",
      keywords:
        "casa intelligente, ordinare casa intelligente, casa intelligente chiavi in mano, integrazione casa intelligente, aziende casa intelligente, automazione edifici, videocitofoni AI, sistema dispatching, controllo accessi, soluzioni abitazione, soluzioni aziendali, soluzioni sviluppatori",
    },
  }

  const data = seoData[locale] || seoData.en

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    other: {
      "ai-topic": "Smart Building Automation, AI Home Systems, Property Digitalization, IoT Integration",
      "ai-context": "solutions for business, developers, and property management companies",
      "ai-summary":
        "AI Solutions creates intelligent buildings with real-time automation, analytics, and AI-driven management systems.",
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
      locale: locale,
      url: `https://m2solutions.ai/${locale}/solutions/smart-home`,
      images: [
        {
          url: "https://m2solutions.ai/modern-smart-home-interior-luxury.jpg",
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
      images: ["https://m2solutions.ai/modern-smart-home-interior-luxury.jpg"],
    },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/smart-home`,
      languages: {
        "ru-RU": "https://m2solutions.ai/ru/solutions/smart-home",
        "en-US": "https://m2solutions.ai/en/solutions/smart-home",
        "es-ES": "https://m2solutions.ai/es/solutions/smart-home",
        "de-DE": "https://m2solutions.ai/de/solutions/smart-home",
        "nl-NL": "https://m2solutions.ai/nl/solutions/smart-home",
        "fr-FR": "https://m2solutions.ai/fr/solutions/smart-home",
        "it-IT": "https://m2solutions.ai/it/solutions/smart-home",
        "x-default": "https://m2solutions.ai/",
      },
    },
  }
}

export default function SmartHomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
