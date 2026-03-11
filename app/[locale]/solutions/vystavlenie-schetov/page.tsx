import { VystavlenieSchetovPage } from "@/components/pages/vystavlenie-schetov-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface VystavlenieSchetovPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: VystavlenieSchetovPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Автоматическое выставление счетов для бизнеса | AI Solutions",
    en: "Automatic Invoice Generation for Business | AI Solutions",
    es: "Generación Automática de Facturas | AI Solutions",
    de: "Automatische Rechnungserstellung | AI Solutions",
    nl: "Automatische Factuurgeneratie | AI Solutions",
    fr: "Génération Automatique de Factures | AI Solutions",
  }

  const descriptions = {
    ru: "Автоматическое выставление счетов из заявок и звонков. Генерирует счёт, отправляет на email/CRM, проверяет реквизиты, поддерживает B2B сценарии.",
    en: "Automatic invoice generation from requests and calls. Generates invoice, sends to email/CRM, validates details, supports B2B scenarios.",
    es: "Generación automática de facturas desde solicitudes y llamadas. Genera factura, envía a email/CRM, valida detalles.",
    de: "Automatische Rechnungserstellung aus Anfragen und Anrufen. Generiert Rechnung, versendet per E-Mail/CRM, validiert Details.",
    nl: "Automatische factuurgeneratie uit verzoeken en oproepen. Genereert factuur, verzendt per e-mail/CRM, valideert details.",
    fr: "Génération automatique de factures à partir de demandes et d'appels. Génère facture, envoie par email/CRM, valide les détails.",
  }

  const title = titles[locale] || titles.ru

  return {
    title,
    description: descriptions[locale] || descriptions.ru,
    openGraph: { title, url: `${BASE_URL}/${locale}/solutions/vystavlenie-schetov` },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/vystavlenie-schetov`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/vystavlenie-schetov",
        en: "https://m2solutions.ai/en/solutions/vystavlenie-schetov",
        es: "https://m2solutions.ai/es/solutions/vystavlenie-schetov",
        de: "https://m2solutions.ai/de/solutions/vystavlenie-schetov",
        nl: "https://m2solutions.ai/nl/solutions/vystavlenie-schetov",
        fr: "https://m2solutions.ai/fr/solutions/vystavlenie-schetov",
      },
    },
  }
}

export default async function VystavlenieSchetovPageWrapper({ params }: VystavlenieSchetovPageProps) {
  const { locale } = await params
  return <VystavlenieSchetovPage locale={locale} />
}
