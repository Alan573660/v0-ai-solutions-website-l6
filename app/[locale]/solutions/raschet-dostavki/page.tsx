import { RaschetDostavkiPage } from "@/components/pages/raschet-dostavki-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface RaschetDostavkiPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: RaschetDostavkiPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "AI-расчет доставки и логистики для бизнеса | AI Solutions",
    en: "AI Delivery and Logistics Calculation for Business | AI Solutions",
    es: "Cálculo de Entrega y Logística con IA | AI Solutions",
    de: "KI-Lieferungs- und Logistikberechnung | AI Solutions",
    nl: "AI Bezorgings- en Logistiekberekening | AI Solutions",
    fr: "Calcul de Livraison et Logistique avec IA | AI Solutions",
  }

  const descriptions = {
    ru: "AI автоматически рассчитывает доставку: учёт веса, размера, расстояния, типа транспорта. Подбирает оптимальный способ доставки и цену.",
    en: "AI automatically calculates delivery considering weight, size, distance, transport type. Selects optimal delivery method and price.",
    es: "IA calcula automáticamente entrega considerando peso, tamaño, distancia. Selecciona método de entrega óptimo y precio.",
    de: "KI berechnet automatisch Lieferung unter Berücksichtigung von Gewicht, Größe, Entfernung. Wählt optimale Liefermethode und Preis.",
    nl: "AI berekent automatisch bezorging met gewicht, grootte, afstand. Selecteert optimale bezorgingsmethode en prijs.",
    fr: "L'IA calcule automatiquement la livraison en tenant compte du poids, de la taille, de la distance. Sélectionne la méthode de livraison optimale et le prix.",
  }

  const title = titles[locale] || titles.ru

  return {
    title,
    description: descriptions[locale] || descriptions.ru,
    openGraph: { title, url: `${BASE_URL}/${locale}/solutions/raschet-dostavki` },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/raschet-dostavki`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/raschet-dostavki",
        en: "https://m2solutions.ai/en/solutions/raschet-dostavki",
        es: "https://m2solutions.ai/es/solutions/raschet-dostavki",
        de: "https://m2solutions.ai/de/solutions/raschet-dostavki",
        nl: "https://m2solutions.ai/nl/solutions/raschet-dostavki",
        fr: "https://m2solutions.ai/fr/solutions/raschet-dostavki",
      },
    },
  }
}

export default async function RaschetDostavkiPageWrapper({ params }: RaschetDostavkiPageProps) {
  const { locale } = await params
  return <RaschetDostavkiPage />
}
