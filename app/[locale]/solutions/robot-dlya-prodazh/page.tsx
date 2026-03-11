import { RobotDlyaProdazhPage } from "@/components/pages/robot-dlya-prodazh-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface RobotDlyaProdazhPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: RobotDlyaProdazhPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Робот для продаж, который ведёт клиента до сделки | AI Solutions",
    en: "Sales Robot That Leads Customer to Deal | AI Solutions",
    es: "Robot de Ventas que Guía al Cliente | AI Solutions",
    de: "Verkaufsroboter, der Kunden zum Deal führt | AI Solutions",
    nl: "Verkoopbot die Klanten naar Deal Leidt | AI Solutions",
    fr: "Robot de Vente qui Guide le Client | AI Solutions",
  }

  const descriptions = {
    ru: "Робот для продаж ведёт диалог как опытный продавец. Задаёт правильные вопросы, считает стоимость, озвучивает предложение, формирует счёт, закрывает сделку.",
    en: "Sales robot conducts dialogue like experienced salesman. Asks right questions, calculates price, presents offer, generates invoice, closes deal.",
    es: "Robot de ventas conduce diálogo como vendedor experimentado. Hace preguntas, calcula precio, presenta oferta, genera factura.",
    de: "Verkaufsroboter führt Dialog wie erfahrener Verkäufer. Stellt Fragen, berechnet Preis, präsentiert Angebot, generiert Rechnung.",
    nl: "Verkoopbot voert dialoog als ervaren verkoper. Stelt vragen, berekent prijs, presenteert aanbod, genereert factuur.",
    fr: "Robot de vente mène le dialogue comme un vendeur expérimenté. Pose des questions, calcule le prix, présente l'offre, génère la facture.",
  }

  const title = titles[locale] || titles.ru

  return {
    title,
    description: descriptions[locale] || descriptions.ru,
    openGraph: { title, url: `${BASE_URL}/${locale}/solutions/robot-dlya-prodazh` },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/robot-dlya-prodazh`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/robot-dlya-prodazh",
        en: "https://m2solutions.ai/en/solutions/robot-dlya-prodazh",
        es: "https://m2solutions.ai/es/solutions/robot-dlya-prodazh",
        de: "https://m2solutions.ai/de/solutions/robot-dlya-prodazh",
        nl: "https://m2solutions.ai/nl/solutions/robot-dlya-prodazh",
        fr: "https://m2solutions.ai/fr/solutions/robot-dlya-prodazh",
      },
    },
  }
}

export default async function RobotDlyaProdazhPageWrapper({ params }: RobotDlyaProdazhPageProps) {
  const { locale } = await params
  return <RobotDlyaProdazhPage />
}
