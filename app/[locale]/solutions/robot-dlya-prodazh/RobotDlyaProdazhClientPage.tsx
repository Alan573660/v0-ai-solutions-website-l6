"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: { title: "Робот для продаж", subtitle: "Ведёт клиента от первого контакта до подписания контракта. Задаёт вопросы, считает стоимость, озвучивает предложение, формирует документы.", cta: "Запросить демонстрацию" },
  en: { title: "Sales Robot", subtitle: "Leads customer from first contact to contract signing. Asks questions, calculates price, presents offer, generates documents.", cta: "Request Demo" },
  es: { title: "Robot de Ventas", subtitle: "Guía cliente desde primer contacto hasta firma. Hace preguntas, calcula precio, presenta oferta.", cta: "Solicitar Demo" },
  de: { title: "Verkaufsroboter", subtitle: "Führt Kunde vom ersten Kontakt zur Unterzeichnung. Stellt Fragen, berechnet Preis, präsentiert Angebot.", cta: "Demo Anfordern" },
  nl: { title: "Verkoopbot", subtitle: "Leidt klant van eerste contact tot ondertekening. Stelt vragen, berekent prijs, presenteert aanbod.", cta: "Demo Aanvragen" },
  fr: { title: "Robot de Vente", subtitle: "Guide le client du premier contact à la signature. Pose des questions, calcule le prix, présente l'offre.", cta: "Demander une Démo" },
}

export function RobotDlyaProdazhClientPage({ locale }: { locale: Locale }) {
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
