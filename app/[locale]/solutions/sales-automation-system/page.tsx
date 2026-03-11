import { SalesAutomationSystemPage } from "@/components/pages/sales-automation-system-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface SalesAutomationSystemPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: SalesAutomationSystemPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Система автоматизации продаж для МСБ | AI Solutions",
    en: "Sales Automation System for SMB | AI Solutions",
    es: "Sistema de Automatización de Ventas para PYMES | AI Solutions",
    de: "Vertriebsautomatisierungssystem für KMU | AI Solutions",
    nl: "Verkoopautomatiseringssysteem voor MKB | AI Solutions",
    fr: "Système d'Automatisation des Ventes pour PME | AI Solutions",
  }

  const descriptions = {
    ru: "Система автоматизации продаж для малого и среднего бизнеса. Автоматизирует работу менеджера по продажам, увеличивает продактивность в 3-5 раз.",
    en: "Sales automation system for small and medium business. Automates sales manager work, increases productivity 3-5x.",
    es: "Sistema de automatización para pequeñas y medianas empresas. Automatiza trabajo del gerente de ventas, aumenta productividad 3-5x.",
    de: "Automatisierungssystem für kleine und mittlere Unternehmen. Automatisiert Vertriebsmanagerarbeit, erhöht Produktivität 3-5x.",
    nl: "Automatiseringssysteem voor kleine en middelgrote bedrijven. Automatiseert verkoopmanagerwerk, verhoogt productiviteit 3-5x.",
    fr: "Système d'automatisation pour les petites et moyennes entreprises. Automatise le travail du gestionnaire de ventes, augmente la productivité 3-5x.",
  }

  const title = titles[locale] || titles.ru

  return {
    title,
    description: descriptions[locale] || descriptions.ru,
    openGraph: { title, url: `${BASE_URL}/${locale}/solutions/sales-automation-system` },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/sales-automation-system`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/sales-automation-system",
        en: "https://m2solutions.ai/en/solutions/sales-automation-system",
        es: "https://m2solutions.ai/es/solutions/sales-automation-system",
        de: "https://m2solutions.ai/de/solutions/sales-automation-system",
        nl: "https://m2solutions.ai/nl/solutions/sales-automation-system",
        fr: "https://m2solutions.ai/fr/solutions/sales-automation-system",
      },
    },
  }
}

export default async function SalesAutomationSystemPageWrapper({ params }: SalesAutomationSystemPageProps) {
  const { locale } = await params
  return <SalesAutomationSystemPage locale={locale} />
}
