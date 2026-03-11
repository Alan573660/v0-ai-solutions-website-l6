"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: { title: "Искусственный интеллект для бизнеса", subtitle: "Автоматизирует продажи, звонки, заявки, счета и логистику. Увеличивает выручку, сокращает затраты, масштабирует без найма персонала.", cta: "Запросить демонстрацию" },
  en: { title: "Artificial Intelligence for Business", subtitle: "Automates sales, calls, requests, invoices and logistics. Increases revenue, cuts costs, scales business without hiring.", cta: "Request Demo" },
  es: { title: "Inteligencia Artificial para Negocios", subtitle: "Automatiza ventas, llamadas, solicitudes, facturas y logística. Aumenta ingresos, reduce costos.", cta: "Solicitar Demo" },
  de: { title: "Künstliche Intelligenz für Unternehmen", subtitle: "Automatisiert Vertrieb, Anrufe, Anfragen, Rechnungen und Logistik. Erhöht Umsatz, senkt Kosten.", cta: "Demo Anfordern" },
  nl: { title: "Kunstmatige Intelligentie voor Bedrijven", subtitle: "Automatiseert verkoop, oproepen, aanvragen, facturen en logistiek. Verhoogt omzet, verlaagt kosten.", cta: "Demo Aanvragen" },
  fr: { title: "Intelligence Artificielle pour Entreprises", subtitle: "Automatise les ventes, appels, demandes, factures et logistique. Augmente les revenus, réduit les coûts.", cta: "Demander une Démo" },
}

export function AIDlyaBiznesaClientPage({ locale }: { locale: Locale }) {
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
