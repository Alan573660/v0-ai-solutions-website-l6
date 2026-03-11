import { AIDlyaBiznesaPage } from "@/components/pages/ai-dlya-biznesa-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface AIDlyaBiznesaPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: AIDlyaBiznesaPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Искусственный интеллект для бизнеса: автоматизация продаж и звонков | AI Solutions",
    en: "Artificial Intelligence for Business: Sales and Call Automation | AI Solutions",
    es: "Inteligencia Artificial para Negocios: Automatización de Ventas | AI Solutions",
    de: "Künstliche Intelligenz für Unternehmen: Vertriebs- und Anrufautomatisierung | AI Solutions",
    nl: "Kunstmatige Intelligentie voor Bedrijven: Verkoop- en Oproepautomatisering | AI Solutions",
    fr: "Intelligence Artificielle pour Entreprises: Automatisation des Ventes et Appels | AI Solutions",
  }

  const descriptions = {
    ru: "Искусственный интеллект для автоматизации продаж, звонков, заявок и счетов. Увеличивает выручку, сокращает затраты, масштабирует бизнес без найма персонала.",
    en: "Artificial intelligence for sales, calls, requests and invoices automation. Increases revenue, cuts costs, scales business without hiring.",
    es: "Inteligencia artificial para automatización de ventas, llamadas, solicitudes y facturas. Aumenta ingresos, reduce costos, escala negocios.",
    de: "Künstliche Intelligenz für Vertriebs-, Anrufs-, Anfrage- und Rechnungsautomatisierung. Erhöht Umsatz, senkt Kosten, skaliert Business.",
    nl: "Kunstmatige intelligentie voor verkoop-, oproep-, aanvraag- en factuurautomatisering. Verhoogt omzet, verlaagt kosten, schaalt business.",
    fr: "Intelligence artificielle pour l'automatisation des ventes, appels, demandes et factures. Augmente les revenus, réduit les coûts, met à l'échelle.",
  }

  const title = titles[locale] || titles.ru

  return {
    title,
    description: descriptions[locale] || descriptions.ru,
    openGraph: { title, url: `${BASE_URL}/${locale}/solutions/ai-dlya-biznesa` },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/ai-dlya-biznesa`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/ai-dlya-biznesa",
        en: "https://m2solutions.ai/en/solutions/ai-dlya-biznesa",
        es: "https://m2solutions.ai/es/solutions/ai-dlya-biznesa",
        de: "https://m2solutions.ai/de/solutions/ai-dlya-biznesa",
        nl: "https://m2solutions.ai/nl/solutions/ai-dlya-biznesa",
        fr: "https://m2solutions.ai/fr/solutions/ai-dlya-biznesa",
      },
    },
  }
}

export default async function AIDlyaBiznesaPageWrapper({ params }: AIDlyaBiznesaPageProps) {
  const { locale } = await params
  return <AIDlyaBiznesaPage locale={locale} />
}
