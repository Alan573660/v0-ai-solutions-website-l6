import type React from "react"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = params

  const seoData = {
    ru: {
      title: "Умный дом под ключ с AI | Автоматизация зданий для бизнеса, ЖКХ и застройщиков | AI Solutions",
      description:
        "Комплексные решения умного дома с интеграцией AI (OpenAI, Grok, Gemini, DeepSeek) для бизнеса, ЖКХ и застройщиков. Автоматизация освещения, климата, безопасности. Проекты в России, Казахстане, Испании. Снижение расходов до 40%, ROI за 12-18 месяцев. Более 500 реализованных проектов.",
      keywords:
        "умный дом, умный дом под ключ, автоматизация зданий, умный дом для бизнеса, умный дом для ЖКХ, умный дом для застройщиков, AI умный дом, интеграция OpenAI, Grok умный дом, Google Gemini автоматизация, DeepSeek умный дом, биометрический доступ, AI консьерж, видеонаблюдение с AI, распознавание лиц, умное освещение, климат контроль, система безопасности, мобильное приложение умный дом, голосовое управление, энергоэффективность, снижение расходов, автоматизация офиса, управление многоквартирным домом, умный жилой комплекс, проекты Барселона, проекты Москва, проекты Алматы, умный дом Испания, умный дом Россия, умный дом Казахстан",
    },
    en: {
      title: "Turnkey Smart Home with AI | Building Automation for Business, Housing & Developers | AI Solutions",
      description:
        "Comprehensive smart home solutions with AI integration (OpenAI, Grok, Gemini, DeepSeek) for business, housing management, and developers. Lighting, climate, security automation. Projects in Russia, Kazakhstan, Spain. Cost reduction up to 40%, ROI in 12-18 months. 500+ completed projects.",
      keywords:
        "smart home, turnkey smart home, building automation, smart home for business, smart home for housing, smart home for developers, AI smart home, OpenAI integration, Grok smart home, Google Gemini automation, DeepSeek smart home, biometric access, AI concierge, AI video surveillance, facial recognition, smart lighting, climate control, security system, smart home mobile app, voice control, energy efficiency, cost reduction, office automation, apartment building management, smart residential complex, Barcelona projects, Moscow projects, Almaty projects, smart home Spain, smart home Russia, smart home Kazakhstan",
    },
    es: {
      title:
        "Casa Inteligente Llave en Mano con IA | Automatización de Edificios para Negocios, Viviendas y Promotores | AI Solutions",
      description:
        "Soluciones integrales de casa inteligente con integración de IA (OpenAI, Grok, Gemini, DeepSeek) para negocios, gestión de viviendas y promotores. Automatización de iluminación, clima, seguridad. Proyectos en Rusia, Kazajistán, España. Reducción de costos hasta 40%, ROI en 12-18 meses. Más de 500 proyectos completados.",
      keywords:
        "casa inteligente, casa inteligente llave en mano, automatización edificios, casa inteligente negocios, casa inteligente viviendas, casa inteligente promotores, IA casa inteligente, integración OpenAI, Grok casa inteligente, Google Gemini automatización, DeepSeek casa inteligente, acceso biométrico, conserje IA, videovigilancia IA, reconocimiento facial, iluminación inteligente, control climático, sistema seguridad, app móvil casa inteligente, control por voz, eficiencia energética, reducción costos, automatización oficina, gestión edificio apartamentos, complejo residencial inteligente, proyectos Barcelona, proyectos Moscú, proyectos Almaty, casa inteligente España, casa inteligente Rusia, casa inteligente Kazajistán",
    },
    de: {
      title:
        "Schlüsselfertiges Smart Home mit KI | Gebäudeautomation für Unternehmen, Wohnungsverwaltung & Bauträger | AI Solutions",
      description:
        "Umfassende Smart-Home-Lösungen mit KI-Integration (OpenAI, Grok, Gemini, DeepSeek) für Unternehmen, Wohnungsverwaltung und Bauträger. Beleuchtungs-, Klima-, Sicherheitsautomatisierung. Projekte in Russland, Kasachstan, Spanien. Kostensenkung bis 40%, ROI in 12-18 Monaten. Über 500 abgeschlossene Projekte.",
      keywords:
        "smart home, schlüsselfertiges smart home, gebäudeautomation, smart home unternehmen, smart home wohnungsverwaltung, smart home bauträger, KI smart home, OpenAI integration, Grok smart home, Google Gemini automatisierung, DeepSeek smart home, biometrischer zugang, KI concierge, KI videoüberwachung, gesichtserkennung, intelligente beleuchtung, klimakontrolle, sicherheitssystem, smart home mobile app, sprachsteuerung, energieeffizienz, kostensenkung, büroautomatisierung, wohngebäudeverwaltung, intelligenter wohnkomplex, Barcelona projekte, Moskau projekte, Almaty projekte, smart home Spanien, smart home Russland, smart home Kasachstan",
    },
    nl: {
      title:
        "Kant-en-klaar Smart Home met AI | Gebouwautomatisering voor Bedrijven, Woningbeheer & Ontwikkelaars | AI Solutions",
      description:
        "Uitgebreide smart home-oplossingen met AI-integratie (OpenAI, Grok, Gemini, DeepSeek) voor bedrijven, woningbeheer en ontwikkelaars. Verlichting, klimaat, beveiligingsautomatisering. Projecten in Rusland, Kazachstan, Spanje. Kostenbesparing tot 40%, ROI in 12-18 maanden. Meer dan 500 voltooide projecten.",
      keywords:
        "smart home, kant-en-klaar smart home, gebouwautomatisering, smart home bedrijven, smart home woningbeheer, smart home ontwikkelaars, AI smart home, OpenAI integratie, Grok smart home, Google Gemini automatisering, DeepSeek smart home, biometrische toegang, AI concierge, AI videobewaking, gezichtsherkenning, slimme verlichting, klimaatbeheersing, beveiligingssysteem, smart home mobiele app, spraakbesturing, energie-efficiëntie, kostenbesparing, kantoorautomatisering, appartementgebouwbeheer, slim wooncomplex, Barcelona projecten, Moskou projecten, Almaty projecten, smart home Spanje, smart home Rusland, smart home Kazachstan",
    },
    fr: {
      title:
        "Maison Intelligente Clé en Main avec IA | Automatisation de Bâtiments pour Entreprises, Logements & Promoteurs | AI Solutions",
      description:
        "Solutions complètes de maison intelligente avec intégration IA (OpenAI, Grok, Gemini, DeepSeek) pour entreprises, gestion immobilière et promoteurs. Automatisation éclairage, climat, sécurité. Projets en Russie, Kazakhstan, Espagne. Réduction des coûts jusqu'à 40%, ROI en 12-18 mois. Plus de 500 projets réalisés.",
      keywords:
        "maison intelligente, maison intelligente clé en main, automatisation bâtiments, maison intelligente entreprises, maison intelligente logements, maison intelligente promoteurs, IA maison intelligente, intégration OpenAI, Grok maison intelligente, Google Gemini automatisation, DeepSeek maison intelligente, accès biométrique, concierge IA, vidéosurveillance IA, reconnaissance faciale, éclairage intelligent, contrôle climatique, système sécurité, app mobile maison intelligente, contrôle vocal, efficacité énergétique, réduction coûts, automatisation bureau, gestion immeuble appartements, complexe résidentiel intelligent, projets Barcelone, projets Moscou, projets Almaty, maison intelligente Espagne, maison intelligente Russie, maison intelligente Kazakhstan",
    },
    it: {
      title:
        "Casa Intelligente Chiavi in Mano con IA | Automazione Edifici per Aziende, Gestione Immobiliare & Sviluppatori | AI Solutions",
      description:
        "Soluzioni complete di casa intelligente con integrazione IA (OpenAI, Grok, Gemini, DeepSeek) per aziende, gestione immobiliare e sviluppatori. Automazione illuminazione, clima, sicurezza. Progetti in Russia, Kazakistan, Spagna. Riduzione costi fino al 40%, ROI in 12-18 mesi. Oltre 500 progetti completati.",
      keywords:
        "casa intelligente, casa intelligente chiavi in mano, automazione edifici, casa intelligente aziende, casa intelligente gestione immobiliare, casa intelligente sviluppatori, IA casa intelligente, integrazione OpenAI, Grok casa intelligente, Google Gemini automazione, DeepSeek casa intelligente, accesso biometrico, concierge IA, videosorveglianza IA, riconoscimento facciale, illuminazione intelligente, controllo climatico, sistema sicurezza, app mobile casa intelligente, controllo vocale, efficienza energetica, riduzione costi, automazione ufficio, gestione edificio appartamenti, complesso residenziale intelligente, progetti Barcellona, progetti Mosca, progetti Almaty, casa intelligente Spagna, casa intelligente Russia, casa intelligente Kazakistan",
    },
  }

  const data = seoData[locale] || seoData.en

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    other: {
      "ai-topic":
        "Smart Building Automation, AI Home Systems, Property Digitalization, IoT Integration, Building Management Systems, Energy Efficiency, Biometric Security, Facial Recognition, Voice Control, Predictive Automation",
      "ai-context":
        "comprehensive smart home solutions for business offices, residential complexes, housing management companies, and property developers with AI integration including OpenAI GPT-4, xAI Grok, Google Gemini, and DeepSeek",
      "ai-summary":
        "AI Solutions provides turnkey smart home and building automation systems with advanced AI integration. Services include lighting automation, climate control, biometric security, facial recognition, AI concierge, video surveillance, mobile app control, and voice management. Proven ROI of 12-18 months with cost reduction up to 40%. Over 500 completed projects in Russia, Kazakhstan, and Spain including Barcelona, Moscow, Almaty, Saint Petersburg, Astana, Valencia, Marbella, and Moraira.",
      "ai-services":
        "building automation, smart lighting, climate control, biometric access control, AI video surveillance, facial recognition, AI concierge 24/7, mobile app development, voice control integration, energy management, security systems, parking automation, dispatch systems, resource monitoring",
      "ai-industries":
        "commercial real estate, residential complexes, housing management, property development, hotels, business centers, banks, office buildings",
      "ai-technologies": "OpenAI GPT-4, xAI Grok, Google Gemini, DeepSeek, Zigbee, Z-Wave, WiFi, Bluetooth, IoT",
      "ai-locations":
        "Spain, Russia, Kazakhstan, Barcelona, Madrid, Moscow, Saint Petersburg, Almaty, Astana, Valencia, Marbella, Moraira",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      googlebot: "index, follow",
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
      locale: locale,
      url: `https://m2solutions.ai/${locale}/solutions/smart-home`,
      siteName: "AI Solutions M2",
      images: [
        {
          url: "https://m2solutions.ai/modern-smart-home-interior-luxury.jpg",
          width: 1200,
          height: 630,
          alt: "Smart Home Interior with AI Automation",
          type: "image/jpeg",
        },
        {
          url: "https://m2solutions.ai/modern-residential-building-entrance-with-smart-co.jpg",
          width: 1200,
          height: 630,
          alt: "Modern Building with Smart Concierge System",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["https://m2solutions.ai/modern-smart-home-interior-luxury.jpg"],
      creator: "@aisolutionsm2",
      site: "@aisolutionsm2",
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
        "x-default": "https://m2solutions.ai/en/solutions/smart-home",
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
  }
}

export default function SmartHomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://m2solutions.ai/#organization",
                name: "AI Solutions M2",
                url: "https://m2solutions.ai",
                logo: {
                  "@type": "ImageObject",
                  url: "https://m2solutions.ai/logo.png",
                  width: 250,
                  height: 60,
                },
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+34-600-000-000",
                    contactType: "customer service",
                    areaServed: ["ES", "RU", "KZ"],
                    availableLanguage: ["Russian", "English", "Spanish"],
                  },
                ],
                sameAs: [
                  "https://www.linkedin.com/company/ai-solutions-m2",
                  "https://twitter.com/aisolutionsm2",
                  "https://www.facebook.com/aisolutionsm2",
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://m2solutions.ai/solutions/smart-home#webpage",
                url: "https://m2solutions.ai/solutions/smart-home",
                name: "Умный дом под ключ с AI | Автоматизация зданий | AI Solutions",
                description:
                  "Комплексные решения умного дома с интеграцией AI для бизнеса, ЖКХ и застройщиков. Более 500 реализованных проектов.",
                isPartOf: {
                  "@id": "https://m2solutions.ai/#website",
                },
                about: {
                  "@id": "https://m2solutions.ai/#organization",
                },
                breadcrumb: {
                  "@id": "https://m2solutions.ai/solutions/smart-home#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://m2solutions.ai/solutions/smart-home#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Главная",
                    item: "https://m2solutions.ai",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Решения",
                    item: "https://m2solutions.ai/solutions",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Умный дом",
                    item: "https://m2solutions.ai/solutions/smart-home",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": "https://m2solutions.ai/solutions/smart-home#service",
                name: "Умный дом под ключ с AI",
                description:
                  "Комплексная автоматизация зданий с интеграцией искусственного интеллекта для бизнеса, ЖКХ и застройщиков",
                provider: {
                  "@id": "https://m2solutions.ai/#organization",
                },
                areaServed: [
                  {
                    "@type": "Country",
                    name: "Spain",
                  },
                  {
                    "@type": "Country",
                    name: "Russia",
                  },
                  {
                    "@type": "Country",
                    name: "Kazakhstan",
                  },
                ],
                serviceType: "Smart Home Installation and Automation",
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "EUR",
                  lowPrice: "5000",
                  highPrice: "500000",
                  offerCount: "3",
                  offers: [
                    {
                      "@type": "Offer",
                      name: "Умный дом для бизнеса",
                      description: "Автоматизация офисов и коммерческих пространств",
                      priceCurrency: "EUR",
                      price: "50000",
                    },
                    {
                      "@type": "Offer",
                      name: "Умный дом для ЖКХ",
                      description: "Управление многоквартирными домами",
                      priceCurrency: "EUR",
                      price: "100000",
                    },
                    {
                      "@type": "Offer",
                      name: "Умный дом для застройщиков",
                      description: "Интеграция в новостройки",
                      priceCurrency: "EUR",
                      price: "200000",
                    },
                  ],
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "500",
                  bestRating: "5",
                  worstRating: "1",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Услуги умного дома",
                  itemListElement: [
                    {
                      "@type": "OfferCatalog",
                      name: "Автоматизация освещения",
                      itemListElement: [
                        {
                          "@type": "Offer",
                          itemOffered: {
                            "@type": "Service",
                            name: "Умное освещение",
                            description: "Автоматическое управление освещением с датчиками движения",
                          },
                        },
                      ],
                    },
                    {
                      "@type": "OfferCatalog",
                      name: "Климат-контроль",
                      itemListElement: [
                        {
                          "@type": "Offer",
                          itemOffered: {
                            "@type": "Service",
                            name: "Умный климат",
                            description: "Зональное управление температурой и влажностью",
                          },
                        },
                      ],
                    },
                    {
                      "@type": "OfferCatalog",
                      name: "Системы безопасности",
                      itemListElement: [
                        {
                          "@type": "Offer",
                          itemOffered: {
                            "@type": "Service",
                            name: "AI видеонаблюдение",
                            description: "Видеонаблюдение с распознаванием лиц и детекцией объектов",
                          },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://m2solutions.ai/#localbusiness",
                name: "AI Solutions M2",
                image: "https://m2solutions.ai/logo.png",
                "@id": "https://m2solutions.ai",
                url: "https://m2solutions.ai",
                telephone: "+34-600-000-000",
                email: "info@m2solutions.ai",
                address: [
                  {
                    "@type": "PostalAddress",
                    streetAddress: "Calle Example",
                    addressLocality: "Madrid",
                    addressRegion: "Madrid",
                    postalCode: "28001",
                    addressCountry: "ES",
                  },
                  {
                    "@type": "PostalAddress",
                    streetAddress: "Улица Примерная",
                    addressLocality: "Москва",
                    addressRegion: "Москва",
                    postalCode: "101000",
                    addressCountry: "RU",
                  },
                  {
                    "@type": "PostalAddress",
                    streetAddress: "Көше Мысал",
                    addressLocality: "Астана",
                    addressRegion: "Астана",
                    postalCode: "010000",
                    addressCountry: "KZ",
                  },
                ],
                geo: [
                  {
                    "@type": "GeoCoordinates",
                    latitude: 40.4168,
                    longitude: -3.7038,
                  },
                  {
                    "@type": "GeoCoordinates",
                    latitude: 55.7558,
                    longitude: 37.6173,
                  },
                  {
                    "@type": "GeoCoordinates",
                    latitude: 51.1694,
                    longitude: 71.4491,
                  },
                ],
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "€€€",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
