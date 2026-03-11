"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: { title: "Автоматизация продаж", subtitle: "Увеличивает конверсию в 2-3 раза. AI принимает заявки, звонит клиентам, рассчитывает стоимость, выставляет счета.", cta: "Запросить демонстрацию" },
  en: { title: "Sales Automation", subtitle: "Increases conversion 2-3x. AI takes orders, calls customers, calculates prices, issues invoices.", cta: "Request Demo" },
  es: { title: "Automatización de Ventas", subtitle: "Aumenta conversión 2-3x. IA toma pedidos, llama clientes, calcula precios.", cta: "Solicitar Demo" },
  de: { title: "Vertriebsautomatisierung", subtitle: "Erhöht Konversion 2-3x. KI nimmt Bestellungen, ruft Kunden an, berechnet Preise.", cta: "Demo Anfordern" },
  nl: { title: "Verkoopautomatisering", subtitle: "Verhoogt conversie 2-3x. AI neemt orders, belt klanten, berekent prijzen.", cta: "Demo Aanvragen" },
  fr: { title: "Automatisation des Ventes", subtitle: "Augmente la conversion 2-3x. L'IA prend les commandes, appelle les clients, calcule les prix.", cta: "Demander une Démo" },
}

export function AutomationSalesClientPage({ locale }: { locale: Locale }) {
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
