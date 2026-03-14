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
    ru: "Голосовой AI-менеджер продаж — автоматизация звонков и продаж 24/7",
    en: "Voice AI Sales Manager — Call and Sales Automation 24/7",
    es: "Gerente de Ventas AI por Voz — Automatización de Llamadas y Ventas 24/7",
    de: "Sprach-KI-Vertriebsmanager — Anruf- und Vertriebsautomatisierung 24/7",
    nl: "Stem AI Verkoopmanager — Oproep- en Verkoopautomatisering 24/7",
    fr: "Gestionnaire des Ventes IA Vocal — Automatisation des Appels et Ventes 24/7",
  }

  const descriptions = {
    ru: "Голосовой AI-менеджер продаж автоматизирует звонки, квалифицирует лиды и выставляет счета. AI система продаж работает 24/7 и интегрируется с CRM. Увеличивает конверсию на 2-3x и сокращает расходы на 70%.",
    en: "Voice AI sales manager automates calls, qualifies leads and issues invoices. AI sales system works 24/7 and integrates with CRM. Increases conversion by 2-3x and cuts costs by 70%.",
    es: "El gerente de ventas IA por voz automatiza llamadas, califica leads y emite facturas. Sistema de ventas IA funciona 24/7 e integra con CRM. Aumenta conversión 2-3x y reduce costos 70%.",
    de: "Sprach-KI-Vertriebsmanager automatisiert Anrufe, qualifiziert Leads und stellt Rechnungen aus. KI-Verkaufssystem funktioniert 24/7 und integriert sich mit CRM. Erhöht Konversion um 2-3x und senkt Kosten um 70%.",
    nl: "Stem AI verkoopmanager automatiseert oproepen, kwalificeert leads en geeft facturen uit. AI-verkoopsysteem werkt 24/7 en integreert met CRM. Verhoogt conversie 2-3x en verlaagt kosten 70%.",
    fr: "Le gestionnaire des ventes IA vocal automatise les appels, qualifie les prospects et émet les factures. Système de vente IA fonctionne 24/7 et s'intègre avec CRM. Augmente la conversion 2-3x et réduit les coûts 70%.",
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
      intro: "Голосовой AI-менеджер — это интеллектуальная система автоматизации звонков, которая заменяет операторов колл-центра. Система работает круглосуточно �� способна обрабатывать тысячи звонков одновременно.",
      capabilities: [
        "Обрабатывать входящие и исходящие звонки",
        "Квалифицировать лиды и вести диалог",
        "Рассчитывать стоимость услуг",
        "Выставлять счета и документы",
        "Интегрироваться с CRM и системами",
        "Работать с каталогами и прайс-листами",
        "Запоминать историю клиента",
        "Делать простые и сложные расчеты"
      ],
      home: "Главная",
      solutions: "Решения",
      faq: [
        { q: "Чем AI-менеджер отличается от обычного голосового бота?", a: "Обычные боты читают скрипты и не могут адаптироваться. Наш AI-менеджер ведет динамический диалог, анализирует потребности клиента, выполняет сложные расчеты и может полностью закрыть сделку от звонка до счета." },
        { q: "Сколько стоит внедрение?", a: "Стоимость начинается от 990 EUR в месяц в зависимости от объема и сложности интеграции. Обычно система окупается за 1-2 месяца за счет сокращения расходов на персонал." },
        { q: "Может ли система работать 24/7?", a: "Да, AI-менеджер работает круглосуточно без выходных. Он может обрабатывать входящие звонки, консультировать клиентов, рассчитывать стоимость и выставлять счета в любое время суток." },
        { q: "Как система интегрируется с CRM?", a: "Мы поддерживаем интеграцию с популярными CRM-системами (Bitrix24, Salesforce, HubSpot и др.). Все данные автоматически синхронизируются, клиент не теряет информацию." },
        { q: "Какое качество распознавания речи?", a: "Система использует продвинутые модели AI для распознавания русской речи с точностью 95-98%. Система понимает местные акценты, сленг и может задавать уточняющие вопросы." },
        { q: "Можно ли настроить диалоги под мой бизнес?", a: "Полностью. Каждая система обучается на ваших данных, сценариях продаж и исключениях. Мы настраиваем логику под ваш специфический бизнес-процесс." },
      ],
    },
    en: {
      name: "Voice AI Sales Manager",
      description: "Sales automation with voice AI. Conducts dialogues, performs calculations, works with catalogs, generates documents, and closes deals 24/7.",
      intro: "A voice AI sales manager is an intelligent call automation system that replaces call center operators. The system works around the clock and can handle thousands of calls simultaneously.",
      capabilities: [
        "Handle incoming and outgoing calls",
        "Qualify leads and conduct dialogue",
        "Calculate service costs",
        "Generate invoices and documents",
        "Integrate with CRM and systems",
        "Work with catalogs and price lists",
        "Remember customer history",
        "Perform simple and complex calculations"
      ],
      home: "Home",
      solutions: "Solutions",
      faq: [
        { q: "How is the AI manager different from a regular voice bot?", a: "Regular bots read scripts and cannot adapt. Our AI manager conducts dynamic dialogues, analyzes customer needs, performs complex calculations, and can fully close a deal from call to invoice." },
        { q: "How much does implementation cost?", a: "Implementation costs start from 990 EUR per month depending on volume and integration complexity. The system typically pays for itself in 1-2 months through personnel cost savings." },
        { q: "Can the system work 24/7?", a: "Yes, the AI manager works around the clock without weekends. It can handle incoming calls, consult customers, calculate costs, and issue invoices at any time." },
        { q: "How does it integrate with CRM?", a: "We support integration with popular CRM systems (Bitrix24, Salesforce, HubSpot, etc.). All data is automatically synchronized, no information is lost." },
        { q: "What is the speech recognition quality?", a: "The system uses advanced AI models for speech recognition with 95-98% accuracy. The system understands local accents and slang and can ask clarifying questions." },
        { q: "Can dialogues be customized for my business?", a: "Completely. Each system is trained on your data, sales scenarios, and exceptions. We customize the logic for your specific business process." },
      ],
    },
    es: {
      name: "Gerente de Ventas AI por Voz",
      description: "Automatización de ventas con IA de voz. Conduce diálogos, realiza cálculos, trabaja con catálogos, genera documentos y cierra ventas 24/7.",
      intro: "Un gerente de ventas AI por voz es un sistema inteligente de automatización de llamadas que reemplaza a los operadores del centro de llamadas. El sistema funciona las 24 horas y puede manejar miles de llamadas simultáneamente.",
      capabilities: [
        "Manejar llamadas entrantes y salientes",
        "Calificar leads y conducir diálogos",
        "Calcular costos de servicios",
        "Generar facturas y documentos",
        "Integrar con CRM y sistemas",
        "Trabajar con catálogos y listas de precios",
        "Recordar historial del cliente",
        "Realizar cálculos simples y complejos"
      ],
      home: "Inicio",
      solutions: "Soluciones",
      faq: [
        { q: "¿Cómo es diferente el gerente IA de un bot de voz regular?", a: "Los bots regulares leen guiones y no pueden adaptarse. Nuestro gerente IA conduce diálogos dinámicos, analiza necesidades del cliente, realiza cálculos complejos y puede cerrar completamente una venta de llamada a factura." },
        { q: "¿Cuánto cuesta la implementación?", a: "Los costos de implementación comienzan desde 990 EUR al mes dependiendo del volumen y complejidad de integración. El sistema generalmente se amortiza en 1-2 meses a través de ahorros de personal." },
        { q: "¿Puede el sistema funcionar 24/7?", a: "Sí, el gerente IA funciona las 24 horas sin fin de semana. Puede manejar llamadas entrantes, consultar clientes, calcular costos y emitir facturas en cualquier momento." },
        { q: "¿Cómo se integra con CRM?", a: "Soportamos integración con sistemas CRM populares (Bitrix24, Salesforce, HubSpot, etc.). Todos los datos se sincronizan automáticamente, no se pierde información." },
        { q: "¿Cuál es la calidad del reconocimiento de voz?", a: "El sistema utiliza modelos IA avanzados para reconocimiento de voz con precisión del 95-98%. El sistema entiende acentos y argot locales y puede hacer preguntas aclaratorias." },
        { q: "¿Se pueden personalizar los diálogos para mi negocio?", a: "Completamente. Cada sistema se entrena con sus datos, escenarios de ventas y excepciones. Personalizamos la lógica para su proceso comercial específico." },
      ],
    },
    de: {
      name: "Sprach-KI-Vertriebsmanager",
      description: "Vertriebsautomatisierung mit Sprach-KI. Führt Dialoge, führt Berechnungen durch, arbeitet mit Katalogen, erstellt Dokumente und schließt Geschäfte 24/7 ab.",
      intro: "Ein Sprach-KI-Vertriebsmanager ist ein intelligentes Call-Automatisierungssystem, das Call-Center-Operatoren ersetzt. Das System arbeitet rund um die Uhr und kann Tausende von Anrufen gleichzeitig bearbeiten.",
      capabilities: [
        "Ein- und Ausgangsanrufe bearbeiten",
        "Leads qualifizieren und Dialoge führen",
        "Servicekosten berechnen",
        "Rechnungen und Dokumente erstellen",
        "Mit CRM und Systemen integrieren",
        "Mit Katalogen und Preislisten arbeiten",
        "Kundenhistorie merken",
        "Einfache und komplexe Berechnungen durchführen"
      ],
      home: "Startseite",
      solutions: "Lösungen",
      faq: [
        { q: "Wie unterscheidet sich der KI-Manager von einem normalen Sprachbot?", a: "Normale Bots lesen Skripte und können nicht angepasst werden. Unser KI-Manager führt dynamische Dialoge, analysiert Kundenbedürfnisse, führt komplexe Berechnungen durch und kann Geschäfte vom Anruf bis zur Rechnung vollständig abschließen." },
        { q: "Wie viel kostet die Implementierung?", a: "Implementierungskosten beginnen ab 990 EUR pro Monat, abhängig von Volumen und Integrationskomplexität. Das System amortisiert sich normalerweise in 1-2 Monaten durch Personalkosteneinsparungen." },
        { q: "Kann das System 24/7 funktionieren?", a: "Ja, der KI-Manager funktioniert rund um die Uhr ohne Wochenenden. Er kann Anrufe bearbeiten, Kunden beraten, Kosten berechnen und jederzeit Rechnungen ausstellen." },
        { q: "Wie wird es mit CRM integriert?", a: "Wir unterstützen Integration mit beliebten CRM-Systemen (Bitrix24, Salesforce, HubSpot usw.). Alle Daten werden automatisch synchronisiert, keine Informationen gehen verloren." },
        { q: "Welche Qualität hat die Spracherkennung?", a: "Das System nutzt fortgeschrittene KI-Modelle zur Spracherkennung mit 95-98% Genauigkeit. Das System versteht lokale Akzente und Umgangssprache und kann Fragen stellen." },
        { q: "Können Dialoge für mein Geschäft angepasst werden?", a: "Vollständig. Jedes System wird mit Ihren Daten, Verkaufsszenarien und Ausnahmen trainiert. Wir passen die Logik an Ihren spezifischen Geschäftsprozess an." },
      ],
    },
    nl: {
      name: "Stem AI Verkoopmanager",
      description: "Verkoopautomatisering met stem-AI. Voert dialogen, voert berekeningen uit, werkt met catalogi, genereert documenten en sluit deals 24/7 af.",
      intro: "Een stem AI verkoopmanager is een intelligent callautomatiseringssysteem dat callcenter-operators vervangt. Het systeem werkt rond de klok en kan duizenden oproepen tegelijk verwerken.",
      capabilities: [
        "Inkomende en uitgaande oproepen verwerken",
        "Leads kwalificeren en dialogen voeren",
        "Servicekosten berekenen",
        "Facturen en documenten genereren",
        "Met CRM en systemen integreren",
        "Met catalogi en prijslijsten werken",
        "Klantgeschiedenis onthouden",
        "Eenvoudige en complexe berekeningen uitvoeren"
      ],
      home: "Start",
      solutions: "Oplossingen",
      faq: [
        { q: "Hoe verschilt de AI-manager van een normale stembot?", a: "Normale bots lezen scripts en kunnen niet worden aangepast. Onze AI-manager voert dynamische dialogen, analyseert klantenbehoeften, voert complexe berekeningen uit en kan deals volledig afsluiten van oproep tot factuur." },
        { q: "Hoeveel kost de implementatie?", a: "Implementatiekosten beginnen bij 990 EUR per maand, afhankelijk van volume en integratiecomplexiteit. Het systeem betaalt zich meestal in 1-2 maanden terug door personeelskosten te besparen." },
        { q: "Kan het systeem 24/7 werken?", a: "Ja, de AI-manager werkt rond de klok zonder weekends. Het kan oproepen verwerken, klanten raadplegen, kosten berekenen en facturen op elk moment uitstellen." },
        { q: "Hoe wordt het met CRM geïntegreerd?", a: "We ondersteunen integratie met populaire CRM-systemen (Bitrix24, Salesforce, HubSpot, enz.). Alle gegevens worden automatisch gesynchroniseerd, geen verlies van informatie." },
        { q: "Wat is de kwaliteit van spraakherkenning?", a: "Het systeem maakt gebruik van geavanceerde AI-modellen voor spraakherkenning met 95-98% nauwkeurigheid. Het systeem begrijpt lokale accenten en slang en kan vragen stellen." },
        { q: "Kunnen dialogen voor mijn bedrijf worden aangepast?", a: "Volledig. Elk systeem wordt getraind met uw gegevens, verkoopscenario's en uitzonderingen. We passen de logica aan uw specifieke bedrijfsproces aan." },
      ],
    },
    fr: {
      name: "Gestionnaire des Ventes IA Vocal",
      description: "Automatisation des ventes avec IA vocale. Mène des dialogues, effectue des calculs, travaille avec les catalogues, génère des documents et conclut des ventes 24/7.",
      intro: "Un gestionnaire des ventes IA vocal est un système intelligent d'automatisation des appels qui remplace les opérateurs des centres d'appels. Le système fonctionne 24h/24 et peut gérer des milliers d'appels simultanément.",
      capabilities: [
        "Gérer les appels entrants et sortants",
        "Qualifier les prospects et mener des dialogues",
        "Calculer les coûts des services",
        "Générer des factures et des documents",
        "S'intégrer avec CRM et systèmes",
        "Travailler avec les catalogues et listes de prix",
        "Mémoriser l'historique des clients",
        "Effectuer des calculs simples et complexes"
      ],
      home: "Accueil",
      solutions: "Solutions",
      faq: [
        { q: "Comment le gestionnaire IA diffère-t-il d'un bot vocal ordinaire?", a: "Les bots ordinaires lisent des scripts et ne peuvent pas s'adapter. Notre gestionnaire IA mène des dialogues dynamiques, analyse les besoins des clients, effectue des calculs complexes et peut conclure complètement une vente de l'appel à la facture." },
        { q: "Combien coûte la mise en œuvre?", a: "Les coûts de mise en œuvre commencent à 990 EUR par mois selon le volume et la complexité de l'intégration. Le système se rembourse généralement en 1-2 mois grâce aux économies de personnel." },
        { q: "Le système peut-il fonctionner 24h/24?", a: "Oui, le gestionnaire IA fonctionne 24h/24 sans weekends. Il peut traiter les appels entrants, conseiller les clients, calculer les coûts et émettre des factures à tout moment." },
        { q: "Comment s'intègre-t-il avec le CRM?", a: "Nous supportons l'intégration avec les systèmes CRM populaires (Bitrix24, Salesforce, HubSpot, etc.). Toutes les données sont automatiquement synchronisées, aucune perte d'information." },
        { q: "Quelle est la qualité de la reconnaissance vocale?", a: "Le système utilise des modèles IA avancés pour la reconnaissance vocale avec une précision de 95-98%. Le système comprend les accents locaux et l'argot et peut poser des questions de clarification." },
        { q: "Les dialogues peuvent-ils être personnalisés pour mon entreprise?", a: "Complètement. Chaque système est entraîné avec vos données, scénarios de vente et exceptions. Nous personnalisons la logique pour votre processus métier spécifique." },
      ],
    },
  }

  const d = data[locale] || data.ru

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: d.name,
        description: d.description,
        image: `${BASE_URL}/images/og/voice-sales-manager.jpg`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Cloud",
        offers: {
          "@type": "Offer",
          price: "990",
          priceCurrency: "EUR",
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
        author: {
          "@type": "Organization",
          name: "M2 AI Solutions",
          url: BASE_URL,
        },
      },
      {
        "@type": "Article",
        headline: d.name,
        description: d.description,
        author: {
          "@type": "Organization",
          name: "M2 AI Solutions",
        },
        datePublished: "2024-01-01",
        articleBody: d.intro,
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
