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

// JSON-LD Structured Data with full i18n
function generateJsonLd(locale: Locale) {
  const data = {
    ru: {
      name: "Голосовой AI-менеджер по продажам",
      description: "Автоматизация продаж с помощью голосового AI. Ведёт диалоги, делает расчёты, работает с каталогами, формирует документы и закрывает сделки 24/7.",
      home: "Главная",
      solutions: "Решения",
      faq: [
        { q: "Чем AI-менеджер отличается от обычного голосового бота?", a: "Обычные боты читают скрипты и не умеют думать. Наш AI-менеджер ведёт динамический диалог, делает расчёты, работает с базами данных и может полностью закрыть сделку." },
        { q: "Сколько времени занимает внедрение?", a: "От нескольких недель для типовых сценариев до 4-6 месяцев для сложных enterprise-проектов. Срок зависит от интеграций и сложности бизнес-логики." },
        { q: "Можно ли интегрировать с нашей CRM?", a: "Да, мы интегрируемся с любыми системами: Bitrix24, AmoCRM, Salesforce, HubSpot, 1C и другими." },
        { q: "Как AI справляется со сложными расчётами?", a: "AI выполняет математические операции мгновенно: расчёт площади, объёма, стоимости с учётом коэффициентов, скидок, доставки." },
        { q: "Это шаблонный продукт?", a: "Нет. Каждый AI-менеджер создаётся индивидуально под конкретный бизнес: обучается на ваших данных, интегрируется с вашими системами." },
      ],
    },
    en: {
      name: "Voice AI Sales Manager",
      description: "Sales automation with voice AI. Conducts dialogues, makes calculations, works with catalogs, generates documents and closes deals 24/7.",
      home: "Home",
      solutions: "Solutions",
      faq: [
        { q: "How is the AI manager different from a regular voice bot?", a: "Regular bots read scripts and can't think. Our AI manager conducts dynamic dialogues, makes calculations, works with databases and can completely close deals." },
        { q: "How long does implementation take?", a: "From a few weeks for standard scenarios to 4-6 months for complex enterprise projects. Timeline depends on integrations and business logic complexity." },
        { q: "Can it integrate with our CRM?", a: "Yes, we integrate with any systems: Bitrix24, AmoCRM, Salesforce, HubSpot, SAP and others." },
        { q: "How does AI handle complex calculations?", a: "AI performs mathematical operations instantly: area, volume, cost calculations with coefficients, discounts, delivery." },
        { q: "Is this a template product?", a: "No. Each AI manager is created individually for a specific business: trained on your data, integrated with your systems." },
      ],
    },
    es: {
      name: "Gerente de Ventas AI por Voz",
      description: "Automatización de ventas con IA de voz. Conduce diálogos, hace cálculos, trabaja con catálogos, genera documentos y cierra ventas 24/7.",
      home: "Inicio",
      solutions: "Soluciones",
      faq: [
        { q: "¿En qué se diferencia el gerente IA de un bot de voz común?", a: "Los bots comunes leen guiones y no pueden pensar. Nuestro gerente IA conduce diálogos dinámicos, hace cálculos, trabaja con bases de datos y puede cerrar ventas completamente." },
        { q: "¿Cuánto tiempo toma la implementación?", a: "Desde unas semanas para escenarios estándar hasta 4-6 meses para proyectos enterprise complejos." },
        { q: "¿Se puede integrar con nuestro CRM?", a: "Sí, nos integramos con cualquier sistema: Bitrix24, AmoCRM, Salesforce, HubSpot, SAP y otros." },
        { q: "¿Cómo maneja la IA cálculos complejos?", a: "La IA realiza operaciones matemáticas instantáneamente: cálculos de área, volumen, costo con coeficientes, descuentos, entrega." },
        { q: "¿Es un producto de plantilla?", a: "No. Cada gerente IA se crea individualmente para un negocio específico: entrenado con sus datos, integrado con sus sistemas." },
      ],
    },
    de: {
      name: "Sprach-KI-Vertriebsmanager",
      description: "Vertriebsautomatisierung mit Sprach-KI. Führt Dialoge, macht Berechnungen, arbeitet mit Katalogen, erstellt Dokumente und schließt Geschäfte 24/7.",
      home: "Startseite",
      solutions: "Lösungen",
      faq: [
        { q: "Wie unterscheidet sich der KI-Manager von einem gewöhnlichen Sprachbot?", a: "Gewöhnliche Bots lesen Skripte und können nicht denken. Unser KI-Manager führt dynamische Dialoge, macht Berechnungen, arbeitet mit Datenbanken und kann Geschäfte vollständig abschließen." },
        { q: "Wie lange dauert die Implementierung?", a: "Von wenigen Wochen für Standardszenarien bis 4-6 Monate für komplexe Enterprise-Projekte." },
        { q: "Kann es mit unserem CRM integriert werden?", a: "Ja, wir integrieren mit allen Systemen: Bitrix24, Salesforce, HubSpot, SAP und anderen." },
        { q: "Wie geht KI mit komplexen Berechnungen um?", a: "KI führt mathematische Operationen sofort durch: Flächen-, Volumen-, Kostenberechnungen mit Koeffizienten, Rabatten, Lieferung." },
        { q: "Ist das ein Vorlagenprodukt?", a: "Nein. Jeder KI-Manager wird individuell für ein bestimmtes Unternehmen erstellt: mit Ihren Daten trainiert, mit Ihren Systemen integriert." },
      ],
    },
    nl: {
      name: "Stem AI Verkoopmanager",
      description: "Verkoopautomatisering met stem-AI. Voert dialogen, maakt berekeningen, werkt met catalogi, genereert documenten en sluit deals 24/7.",
      home: "Home",
      solutions: "Oplossingen",
      faq: [
        { q: "Hoe verschilt de AI-manager van een gewone stembot?", a: "Gewone bots lezen scripts en kunnen niet denken. Onze AI-manager voert dynamische dialogen, maakt berekeningen, werkt met databases en kan deals volledig sluiten." },
        { q: "Hoe lang duurt de implementatie?", a: "Van enkele weken voor standaardscenario's tot 4-6 maanden voor complexe enterprise-projecten." },
        { q: "Kan het integreren met ons CRM?", a: "Ja, we integreren met alle systemen: Bitrix24, Salesforce, HubSpot, SAP en andere." },
        { q: "Hoe gaat AI om met complexe berekeningen?", a: "AI voert wiskundige operaties direct uit: oppervlakte-, volume-, kostenberekeningen met coëfficiënten, kortingen, levering." },
        { q: "Is dit een sjabloonproduct?", a: "Nee. Elke AI-manager wordt individueel gemaakt voor een specifiek bedrijf: getraind met uw data, geïntegreerd met uw systemen." },
      ],
    },
    fr: {
      name: "Gestionnaire des Ventes IA Vocal",
      description: "Automatisation des ventes avec IA vocale. Mène des dialogues, fait des calculs, travaille avec les catalogues, génère des documents et conclut des ventes 24/7.",
      home: "Accueil",
      solutions: "Solutions",
      faq: [
        { q: "Comment le gestionnaire IA diffère-t-il d'un bot vocal ordinaire?", a: "Les bots ordinaires lisent des scripts et ne peuvent pas penser. Notre gestionnaire IA mène des dialogues dynamiques, fait des calculs, travaille avec des bases de données et peut conclure des affaires complètement." },
        { q: "Combien de temps prend l'implémentation?", a: "De quelques semaines pour les scénarios standard à 4-6 mois pour les projets enterprise complexes." },
        { q: "Peut-il s'intégrer avec notre CRM?", a: "Oui, nous nous intégrons avec tous les systèmes: Bitrix24, Salesforce, HubSpot, SAP et autres." },
        { q: "Comment l'IA gère-t-elle les calculs complexes?", a: "L'IA effectue les opérations mathématiques instantanément: calculs de surface, volume, coût avec coefficients, remises, livraison." },
        { q: "Est-ce un produit modèle?", a: "Non. Chaque gestionnaire IA est créé individuellement pour une entreprise spécifique: entraîné sur vos données, intégré à vos systèmes." },
      ],
    },
  }

  const d = data[locale] || data.ru

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: d.name,
        description: d.description,
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
        name: d.name,
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
        mainEntity: d.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: d.home,
            item: `${BASE_URL}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: d.solutions,
            item: `${BASE_URL}/${locale}/solutions`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: d.name,
            item: `${BASE_URL}/${locale}/solutions/voice-sales-manager`,
          },
        ],
      },
      {
        "@type": "Organization",
        name: "M2 AI Solutions",
        url: BASE_URL,
        logo: `${BASE_URL}/images/logo.svg`,
        sameAs: [
          "https://www.linkedin.com/company/m2-ai-solutions",
          "https://t.me/m2solutions",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+34-XXX-XXX-XXX",
          contactType: "sales",
          availableLanguage: ["Russian", "English", "Spanish", "German", "Dutch", "French"],
        },
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
