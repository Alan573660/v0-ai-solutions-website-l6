"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: { title: "Робот для звонков", subtitle: "Входящие, исходящие, квалификация лидов, напоминания, подтверждения, обзвон и повторные касания. Экономия ФОТ до 70%.", cta: "Запросить демонстрацию" },
  en: { title: "Robot for Calls", subtitle: "Inbound, outbound, lead qualification, reminders, confirmations, outreach and follow-ups. Save up to 70% on payroll.", cta: "Request Demo" },
  es: { title: "Robot para Llamadas", subtitle: "Entrantes, salientes, calificación, recordatorios, confirmaciones. Ahorra hasta 70% en nómina.", cta: "Solicitar Demo" },
  de: { title: "Roboter für Anrufe", subtitle: "Eingehend, ausgehend, Qualifizierung, Erinnerungen, Bestätigungen. Sparen bis zu 70% Lohnkosten.", cta: "Demo Anfordern" },
  nl: { title: "Robot voor Oproepen", subtitle: "Inkomend, uitgaand, kwalificatie, herinneringen, bevestigingen. Bespaar tot 70% op loonkosten.", cta: "Demo Aanvragen" },
  fr: { title: "Robot pour Appels", subtitle: "Entrants, sortants, qualification, rappels, confirmations. Économisez jusqu'à 70% sur la masse salariale.", cta: "Demander une Démo" },
}

export function RobotDlyaZvonkovClientPage({ locale }: { locale: Locale }) {
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
