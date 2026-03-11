import { AutomationSalesPage } from "@/components/pages/automation-sales-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface AutomationSalesPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: AutomationSalesPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Автоматизация продаж с AI | Увеличение конверсии | AI Solutions",
    en: "Sales Automation with AI | Increase Conversion | AI Solutions",
    es: "Automatización de Ventas con IA | Aumentar Conversión | AI Solutions",
    de: "Vertriebsautomatisierung mit KI | Konversion Erhöhen | AI Solutions",
    nl: "Verkoopautomatisering met AI | Conversie Verhogen | AI Solutions",
    fr: "Automatisation des Ventes avec IA | Augmenter la Conversion | AI Solutions",
  }

  const descriptions = {
    ru: "Автоматизация продаж увеличивает конверсию в 2-3 раза. AI принимает заявки, звонит клиентам, считает стоимость, подбирает товары, выставляет счета, передаёт в CRM.",
    en: "Sales automation increases conversion 2-3x. AI takes orders, calls customers, calculates prices, selects products, issues invoices, sends to CRM.",
    es: "Automatización de ventas aumenta conversión 2-3x. IA toma pedidos, llama clientes, calcula precios, selecciona productos, emite facturas.",
    de: "Vertriebsautomatisierung erhöht Konversion 2-3x. KI nimmt Bestellungen auf, ruft Kunden an, berechnet Preise, wählt Produkte, stellt Rechnungen aus.",
    nl: "Verkoopautomatisering verhoogt conversie 2-3x. AI neemt bestellingen aan, belt klanten, berekent prijzen, selecteert producten, geeft facturen uit.",
    fr: "Automatisation des ventes augmente la conversion 2-3x. L'IA prend les commandes, appelle les clients, calcule les prix, sélectionne les produits, émet les factures.",
  }

  const title = titles[locale] || titles.ru
  const description = descriptions[locale] || descriptions.ru

  return {
    title,
    description,
    openGraph: { title, description, url: `${BASE_URL}/${locale}/solutions/automation-sales` },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/automation-sales`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/automation-sales",
        en: "https://m2solutions.ai/en/solutions/automation-sales",
        es: "https://m2solutions.ai/es/solutions/automation-sales",
        de: "https://m2solutions.ai/de/solutions/automation-sales",
        nl: "https://m2solutions.ai/nl/solutions/automation-sales",
        fr: "https://m2solutions.ai/fr/solutions/automation-sales",
      },
    },
  }
}

export default async function AutomationSalesPageWrapper({ params }: AutomationSalesPageProps) {
  const { locale } = await params
  return <AutomationSalesPage />
}
