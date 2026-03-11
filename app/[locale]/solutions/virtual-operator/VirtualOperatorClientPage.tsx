"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: { title: "Виртуальный оператор", subtitle: "Работает 24/7, работает с CRM, поддерживает все языки, управляет продажами и поддержкой.", cta: "Запросить демонстрацию" },
  en: { title: "Virtual Operator", subtitle: "Works 24/7, integrates with CRM, supports all languages, manages sales and support scenarios.", cta: "Request Demo" },
  es: { title: "Operador Virtual", subtitle: "Funciona 24/7, se integra con CRM, soporta idiomas, gestiona ventas.", cta: "Solicitar Demo" },
  de: { title: "Virtueller Operator", subtitle: "Arbeitet 24/7, integriert mit CRM, unterstützt Sprachen, verwaltet Verkauf.", cta: "Demo Anfordern" },
  nl: { title: "Virtuele Operator", subtitle: "Werkt 24/7, integreert met CRM, ondersteunt talen, beheert verkoop.", cta: "Demo Aanvragen" },
  fr: { title: "Opérateur Virtuel", subtitle: "Fonctionne 24/7, s'intègre avec CRM, supporte les langues, gère les ventes.", cta: "Demander une Démo" },
}

export function VirtualOperatorClientPage({ locale }: { locale: Locale }) {
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
