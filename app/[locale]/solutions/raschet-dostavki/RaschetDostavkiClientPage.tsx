"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: { title: "AI-расчет доставки и логистики", subtitle: "Автоматически рассчитывает доставку с учётом веса, размера, расстояния и типа транспорта. Подбирает оптимальный способ и цену.", cta: "Запросить демонстрацию" },
  en: { title: "AI Delivery & Logistics Calculation", subtitle: "Automatically calculates delivery considering weight, size, distance and transport type. Selects optimal method and price.", cta: "Request Demo" },
  es: { title: "Cálculo de Entrega y Logística", subtitle: "Calcula automáticamente considerando peso, tamaño, distancia. Selecciona método óptimo.", cta: "Solicitar Demo" },
  de: { title: "KI-Lieferungs- und Logistikberechnung", subtitle: "Berechnet automatisch unter Berücksichtigung von Gewicht, Größe, Entfernung. Wählt optimale Methode.", cta: "Demo Anfordern" },
  nl: { title: "AI Bezorgings- en Logistiekberekening", subtitle: "Berekent automatisch met gewicht, grootte, afstand. Selecteert optimale methode.", cta: "Demo Aanvragen" },
  fr: { title: "Calcul de Livraison et Logistique avec IA", subtitle: "Calcule automatiquement en tenant compte du poids, de la taille, de la distance. Sélectionne la méthode optimale.", cta: "Demander une Démo" },
}

export function RaschetDostavkiClientPage({ locale }: { locale: Locale }) {
  const { openDemo } = useCTA()
  const t = translations[locale] || translations.ru

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold">{t.title}</h1>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          <Button size="lg" onClick={() => openDemo()} className="h-12 px-8">
            {t.cta}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
