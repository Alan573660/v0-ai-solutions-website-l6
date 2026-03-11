"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: { title: "Система автоматизации продаж", subtitle: "Для малого и среднего бизнеса. Автоматизирует работу менеджера по продажам, увеличивает продактивность в 3-5 раз.", cta: "Запросить демонстрацию" },
  en: { title: "Sales Automation System", subtitle: "For small and medium business. Automates sales manager work, increases productivity 3-5x.", cta: "Request Demo" },
  es: { title: "Sistema de Automatización de Ventas", subtitle: "Para PYMES. Automatiza trabajo del gerente, aumenta productividad 3-5x.", cta: "Solicitar Demo" },
  de: { title: "Vertriebsautomatisierungssystem", subtitle: "Für kleine und mittlere Unternehmen. Automatisiert Arbeit, erhöht Produktivität 3-5x.", cta: "Demo Anfordern" },
  nl: { title: "Verkoopautomatiseringssysteem", subtitle: "Voor kleine en middelgrote bedrijven. Automatiseert werk, verhoogt productiviteit 3-5x.", cta: "Demo Aanvragen" },
  fr: { title: "Système d'Automatisation des Ventes", subtitle: "Pour les petites et moyennes entreprises. Automatise le travail, augmente la productivité 3-5x.", cta: "Demander une Démo" },
}

export function SalesAutomationSystemClientPage({ locale }: { locale: Locale }) {
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
