import { AutomaticOperatorPage as AutomaticOperatorClientPage } from "@/components/pages/automatic-operator-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface AutomaticOperatorPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: AutomaticOperatorPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Автоматический оператор для обработки звонков | AI Solutions",
    en: "Automatic Operator for Call Processing | AI Solutions",
    es: "Operador Automático para Procesamiento de Llamadas | AI Solutions",
    de: "Automatischer Operator zur Anrufbearbeitung | AI Solutions",
    nl: "Automatische Operator voor Oproepverwerking | AI Solutions",
    fr: "Opérateur Automatique pour Traitement d'Appels | AI Solutions",
  }

  const descriptions = {
    ru: "Автоматический оператор обрабатывает входящие звонки, квалифицирует клиентов и управляет заявками 24/7. Снижает нагрузку на операторов, увеличивает пропускную способность, сокращает затраты на персонал.",
    en: "Automatic operator processes incoming calls, qualifies customers and manages requests 24/7. Reduces operator workload, increases throughput, cuts personnel costs.",
    es: "Operador automático procesa llamadas entrantes, califica clientes y gestiona solicitudes 24/7. Reduce carga de operadores, aumenta capacidad, reduce costos.",
    de: "Automatischer Operator verarbeitet eingehende Anrufe, qualifiziert Kunden und verwaltet Anfragen 24/7. Reduziert Operatorbelastung, erhöht Durchsatz, senkt Kosten.",
    nl: "Automatische operator verwerkt inkomende oproepen, kwalificeert klanten en beheert verzoeken 24/7. Vermindert operatorbelasting, verhoogt capaciteit, verlaagt kosten.",
    fr: "Opérateur automatique traite les appels entrants, qualifie les clients et gère les demandes 24/7. Réduit la charge, augmente la capacité, réduit les coûts.",
  }

  const keywords = {
    ru: "автоматический оператор, система обработки звонков, голосовой IVR, система квалификации лидов, автоматизация входящих звонков",
    en: "automatic operator, call processing system, voice IVR, lead qualification system, incoming call automation",
    es: "operador automático, sistema procesamiento llamadas, IVR de voz, sistema calificación",
    de: "automatischer Operator, Anrufbearbeitungssystem, Sprach-IVR, Leadqualifizierungssystem",
    nl: "automatische operator, oproepverwerkingssysteem, spraak-IVR, leadkwalificatiesysteem",
    fr: "opérateur automatique, système traitement appels, IVR vocal, système qualification",
  }

  const title = titles[locale] || titles.ru
  const description = descriptions[locale] || descriptions.ru

  return {
    title,
    description,
    keywords: keywords[locale] || keywords.ru,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/solutions/automatic-operator`,
    },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/automatic-operator`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/automatic-operator",
        en: "https://m2solutions.ai/en/solutions/automatic-operator",
        es: "https://m2solutions.ai/es/solutions/automatic-operator",
        de: "https://m2solutions.ai/de/solutions/automatic-operator",
        nl: "https://m2solutions.ai/nl/solutions/automatic-operator",
        fr: "https://m2solutions.ai/fr/solutions/automatic-operator",
      },
    },
  }
}

export default async function AutomaticOperatorPage({ params }: AutomaticOperatorPageProps) {
  const { locale } = await params

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"Automatic Operator","description":"AI-powered automatic call processing system"}) }} />
      <AutomaticOperatorClientPage locale={locale} />
    </>
  )
}
