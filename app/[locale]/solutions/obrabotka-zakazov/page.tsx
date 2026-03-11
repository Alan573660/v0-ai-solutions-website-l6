import { ObrabotkZakazovPage } from "@/components/pages/obrabotka-zakazov-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface ObrabotkZakazovPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ObrabotkZakazovPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Система обработки заказов для бизнеса | AI Solutions",
    en: "Order Processing System for Business | AI Solutions",
    es: "Sistema de Procesamiento de Pedidos | AI Solutions",
    de: "Bestellverarbeitungssystem | AI Solutions",
    nl: "Bestelverwerkingssysteem | AI Solutions",
    fr: "Système de Traitement des Commandes | AI Solutions",
  }

  const descriptions = {
    ru: "Система обработки заказов автоматизирует приём заказов, проверку данных, создание счётов, отправку подтверждений и интеграцию с логистикой.",
    en: "Order processing system automates order intake, data validation, invoice creation, confirmation sending and logistics integration.",
    es: "Sistema automatiza recepción de pedidos, validación, creación de facturas, envío de confirmaciones e integración logística.",
    de: "System automatisiert Auftragsannahme, Validierung, Rechnungserstellung, Bestätigungsversand und Logistikintegration.",
    nl: "Systeem automatiseert orderinname, validatie, factuuraanmaak, bevestigingsverzending en logistieke integratie.",
    fr: "Système automatise la réception des commandes, la validation, la création de factures, l'envoi de confirmations et l'intégration logistique.",
  }

  const title = titles[locale] || titles.ru

  return {
    title,
    description: descriptions[locale] || descriptions.ru,
    openGraph: { title, url: `${BASE_URL}/${locale}/solutions/obrabotka-zakazov` },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/obrabotka-zakazov`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/obrabotka-zakazov",
        en: "https://m2solutions.ai/en/solutions/obrabotka-zakazov",
        es: "https://m2solutions.ai/es/solutions/obrabotka-zakazov",
        de: "https://m2solutions.ai/de/solutions/obrabotka-zakazov",
        nl: "https://m2solutions.ai/nl/solutions/obrabotka-zakazov",
        fr: "https://m2solutions.ai/fr/solutions/obrabotka-zakazov",
      },
    },
  }
}

export default async function ObrabotkZakazovPageWrapper({ params }: ObrabotkZakazovPageProps) {
  const { locale } = await params
  return <ObrabotkZakazovPage locale={locale} />
}
