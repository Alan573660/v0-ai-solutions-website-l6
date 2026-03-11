import { RobotOperatorClientPage } from "./RobotOperatorClientPage"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface RobotOperatorPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: RobotOperatorPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Робот оператор для бизнеса | Автоматизация звонков 24/7 | AI Solutions",
    en: "Robot Operator for Business | Call Automation 24/7 | AI Solutions",
    es: "Robot Operador para Negocios | Automatización de Llamadas 24/7 | AI Solutions",
    de: "Roboter-Operator für Unternehmen | Anrufautomatisierung 24/7 | AI Solutions",
    nl: "Robot Operator voor Bedrijven | Oproepautomatisering 24/7 | AI Solutions",
    fr: "Robot Opérateur pour Entreprises | Automatisation des Appels 24/7 | AI Solutions",
  }

  const descriptions = {
    ru: "Робот оператор отвечает на 100% входящих звонков 24/7. Квалифицирует клиентов, озвучивает цены, формирует задачи и переводит на менеджера. Увеличивает конверсию в 2-3 раза. Интеграция с CRM, виртуальный оператор, голосовой помощник.",
    en: "Robot operator answers 100% of incoming calls 24/7. Qualifies customers, states prices, creates tasks and transfers to a manager. Increases conversion 2-3x. CRM integration, virtual operator, voice assistant.",
    es: "Robot operador responde el 100% de llamadas entrantes 24/7. Califica clientes, enuncia precios, crea tareas y transfiere a un gerente. Aumenta conversión 2-3x. Integración CRM, operador virtual, asistente de voz.",
    de: "Roboter-Operator beantwortet 100% der eingehenden Anrufe 24/7. Qualifiziert Kunden, nennt Preise, erstellt Aufgaben und leitet an einen Manager weiter. Erhöht die Konversion um das 2-3-Fache. CRM-Integration, virtueller Operator, Sprachassistent.",
    nl: "Robot operator beantwoordt 100% van de inkomende oproepen 24/7. Kwalificeert klanten, vermeldt prijzen, maakt taken aan en stuurt door naar een manager. Verhoogt conversie 2-3x. CRM-integratie, virtuele operator, spraakassistent.",
    fr: "Robot opérateur répond à 100% des appels entrants 24/7. Qualifie les clients, énonce les prix, crée des tâches et transfère à un responsable. Augmente la conversion de 2 à 3 fois. Intégration CRM, opérateur virtuel, assistant vocal.",
  }

  const keywords = {
    ru: "робот оператор, автоматический оператор, виртуальный оператор, робот отвечает на звонки, голосовой робот для бизнеса, голосовой помощник, AI оператор, автоматизация звонков, IVR система, виртуальный помощник, голосовой бот, AI для колл-центра, система обработки звонков, входящие звонки, автоматический ответ",
    en: "robot operator, automatic operator, virtual operator, robot answers calls, voice robot for business, voice assistant, AI operator, call automation, IVR system, virtual assistant, voice bot, AI for call center, call processing system, inbound calls, automatic answering",
    es: "robot operador, operador automático, operador virtual, robot responde llamadas, robot de voz para negocios, asistente de voz, operador AI, automatización de llamadas, sistema IVR, asistente virtual, bot de voz, IA para centro de llamadas, sistema de procesamiento de llamadas, llamadas entrantes, respuesta automática",
    de: "Roboter-Operator, automatischer Operator, virtueller Operator, Roboter beantwortet Anrufe, Sprachroboter für Unternehmen, Sprachassistent, KI-Operator, Anrufautomatisierung, IVR-System, virtueller Assistent, Sprachbot, KI für Call Center, Anrufverarbeitungssystem, eingehende Anrufe, automatische Antwort",
    nl: "robot operator, automatische operator, virtuele operator, robot beantwoordt oproepen, spraakrobot voor bedrijven, spraakassistent, AI operator, oproepautomatisering, IVR-systeem, virtuele assistent, spraakbot, AI voor callcenter, oproepverwerkingssysteem, inkomende oproepen, automatisch antwoord",
    fr: "robot opérateur, opérateur automatique, opérateur virtuel, robot répond aux appels, robot vocal pour entreprises, assistant vocal, opérateur IA, automatisation des appels, système IVR, assistant virtuel, bot vocal, IA pour centre d'appels, système de traitement des appels, appels entrants, réponse automatique",
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
      url: `${BASE_URL}/${locale}/solutions/robot-operator`,
      images: [
        {
          url: `${BASE_URL}/images/og/robot-operator.jpg`,
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
      canonical: `https://m2solutions.ai/${locale}/solutions/robot-operator`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/robot-operator",
        en: "https://m2solutions.ai/en/solutions/robot-operator",
        es: "https://m2solutions.ai/es/solutions/robot-operator",
        de: "https://m2solutions.ai/de/solutions/robot-operator",
        nl: "https://m2solutions.ai/nl/solutions/robot-operator",
        fr: "https://m2solutions.ai/fr/solutions/robot-operator",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

function generateJsonLd(locale: Locale) {
  const data = {
    ru: {
      name: "Робот оператор",
      description: "Искусственный интеллект, который отвечает на звонки, квалифицирует клиентов и управляет заявками 24/7 без перерывов.",
      faq: [
        { q: "Чем робот оператор отличается от обычного IVR?", a: "Обычный IVR - это меню вызовов. Робот оператор - это AI, который понимает естественный язык, может ответить на любой вопрос, квалифицировать клиента и даже продать." },
        { q: "Может ли робот обработать сложные вопросы?", a: "Да, робот обучен понимать контекст и давать качественные ответы на любые вопросы из вашей базы знаний." },
        { q: "Как робот интегрируется с нашей системой?", a: "Робот интегрируется с CRM, системой обработки заявок и другими сервисами через API." },
        { q: "Сколько стоит робот оператор?", a: "Стоимость зависит от сложности и объёма обработки. Минимум 500€/месяц для малого бизнеса." },
        { q: "Какая доля звонков робот может обработать?", a: "В среднем 60-80% входящих звонков обрабатываются роботом полностью, остальные переводятся оператору." },
      ],
    },
    en: {
      name: "Robot Operator",
      description: "Artificial intelligence that answers calls, qualifies customers and manages requests 24/7 without interruption.",
      faq: [
        { q: "How is a robot operator different from regular IVR?", a: "Regular IVR is a call menu. Robot operator is AI that understands natural language, can answer any question, qualify a customer and even make a sale." },
        { q: "Can the robot handle complex questions?", a: "Yes, the robot is trained to understand context and provide quality answers to any questions from your knowledge base." },
        { q: "How does the robot integrate with our system?", a: "The robot integrates with CRM, request processing system and other services via API." },
        { q: "How much does a robot operator cost?", a: "Cost depends on complexity and processing volume. Minimum €500/month for small business." },
        { q: "What share of calls can the robot handle?", a: "On average, 60-80% of incoming calls are fully handled by the robot, the rest are transferred to an operator." },
      ],
    },
    es: {
      name: "Robot Operador",
      description: "Inteligencia artificial que responde llamadas, califica clientes y gestiona solicitudes 24/7 sin interrupción.",
      faq: [
        { q: "¿En qué se diferencia el robot operador del IVR normal?", a: "El IVR normal es un menú de llamadas. El robot operador es IA que entiende el lenguaje natural, puede responder cualquier pregunta, calificar a un cliente e incluso realizar una venta." },
        { q: "¿Puede el robot manejar preguntas complejas?", a: "Sí, el robot está entrenado para entender el contexto y proporcionar respuestas de calidad a cualquier pregunta de su base de conocimientos." },
        { q: "¿Cómo se integra el robot con nuestro sistema?", a: "El robot se integra con CRM, sistema de procesamiento de solicitudes y otros servicios a través de API." },
        { q: "¿Cuánto cuesta un robot operador?", a: "El costo depende de la complejidad y el volumen de procesamiento. Mínimo €500/mes para pequeñas empresas." },
        { q: "¿Qué porcentaje de llamadas puede manejar el robot?", a: "En promedio, el 60-80% de las llamadas entrantes son manejadas completamente por el robot, el resto se transfieren a un operador." },
      ],
    },
    de: {
      name: "Roboter-Operator",
      description: "Künstliche Intelligenz, die Anrufe beantwortet, Kunden qualifiziert und Anfragen 24/7 ohne Unterbrechung verwaltet.",
      faq: [
        { q: "Wie unterscheidet sich ein Roboter-Operator von regulärem IVR?", a: "Reguläres IVR ist ein Anrufmenü. Roboter-Operator ist KI, die natürliche Sprache versteht, jede Frage beantworten kann, einen Kunden qualifizieren und sogar einen Verkauf tätigen kann." },
        { q: "Kann der Roboter komplexe Fragen handhaben?", a: "Ja, der Roboter ist trainiert, um Kontext zu verstehen und qualitativ hochwertige Antworten auf alle Fragen aus Ihrer Wissensdatenbank zu geben." },
        { q: "Wie integriert sich der Roboter mit unserem System?", a: "Der Roboter integriert sich mit CRM, Anfrageverarbeitungssystem und anderen Services über API." },
        { q: "Wie viel kostet ein Roboter-Operator?", a: "Die Kosten hängen von der Komplexität und dem Verarbeitungsvolumen ab. Minimum €500/Monat für Kleinunternehmen." },
        { q: "Welcher Anteil der Anrufe kann der Roboter handhaben?", a: "Im Durchschnitt werden 60-80% der eingehenden Anrufe vollständig vom Roboter bearbeitet, die restlichen werden an einen Operator weitergeleitet." },
      ],
    },
    nl: {
      name: "Robot Operator",
      description: "Kunstmatige intelligentie die oproepen beantwoordt, klanten kwalificeert en verzoeken 24/7 zonder onderbreking verwerkt.",
      faq: [
        { q: "Hoe verschilt een robot operator van normale IVR?", a: "Normale IVR is een oproepenmenu. Robot operator is AI die natuurlijke taal begrijpt, elke vraag kan beantwoorden, een klant kan kwalificeren en zelfs een verkoop kan doen." },
        { q: "Kan de robot complexe vragen afhandelen?", a: "Ja, de robot is getraind om context te begrijpen en kwaliteitsvolle antwoorden te geven op alle vragen uit uw kennisbank." },
        { q: "Hoe integreert de robot met ons systeem?", a: "De robot integreert met CRM, verzoekingsverwerkingssysteem en andere services via API." },
        { q: "Hoeveel kost een robot operator?", a: "De kosten zijn afhankelijk van de complexiteit en het verwerkingsvolume. Minimum €500/maand voor kleine bedrijven." },
        { q: "Welk deel van de oproepen kan de robot afhandelen?", a: "Gemiddeld worden 60-80% van de inkomende oproepen volledig door de robot afgehandeld, de rest wordt doorgestuurd naar een operator." },
      ],
    },
    fr: {
      name: "Robot Opérateur",
      description: "Intelligence artificielle qui répond aux appels, qualifie les clients et gère les demandes 24/7 sans interruption.",
      faq: [
        { q: "En quoi un robot opérateur diffère-t-il d'un IVR normal?", a: "L'IVR normal est un menu d'appels. Le robot opérateur est une IA qui comprend le langage naturel, peut répondre à n'importe quelle question, qualifier un client et même effectuer une vente." },
        { q: "Le robot peut-il gérer des questions complexes?", a: "Oui, le robot est entraîné pour comprendre le contexte et fournir des réponses de qualité à toutes les questions de votre base de connaissances." },
        { q: "Comment le robot s'intègre-t-il avec notre système?", a: "Le robot s'intègre avec CRM, système de traitement des demandes et autres services via API." },
        { q: "Combien coûte un robot opérateur?", a: "Le coût dépend de la complexité et du volume de traitement. Minimum €500/mois pour les petites entreprises." },
        { q: "Quel pourcentage d'appels le robot peut-il gérer?", a: "En moyenne, 60-80% des appels entrants sont entièrement traités par le robot, le reste est transféré à un opérateur." },
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
          price: "500",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "94",
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
          price: "500",
          priceCurrency: "EUR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "94",
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
            name: locale === "ru" ? "Главная" : locale === "en" ? "Home" : locale === "es" ? "Inicio" : locale === "de" ? "Startseite" : locale === "nl" ? "Home" : "Accueil",
            item: `${BASE_URL}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "ru" ? "Решения" : locale === "en" ? "Solutions" : locale === "es" ? "Soluciones" : locale === "de" ? "Lösungen" : locale === "nl" ? "Oplossingen" : "Solutions",
            item: `${BASE_URL}/${locale}/solutions`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: d.name,
            item: `${BASE_URL}/${locale}/solutions/robot-operator`,
          },
        ],
      },
    ],
  }
}

export default async function RobotOperatorPage({ params }: RobotOperatorPageProps) {
  const { locale } = await params
  const jsonLd = generateJsonLd(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RobotOperatorClientPage locale={locale} />
    </>
  )
}
