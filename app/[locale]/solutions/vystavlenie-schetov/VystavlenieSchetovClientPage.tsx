"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: { title: "Автоматическое выставление счетов", subtitle: "Генерирует счёт из заявки или звонка, отправляет на email/CRM, проверяет реквизиты, поддерживает B2B сценарии.", cta: "Запросить демонстрацию" },
  en: { title: "Automatic Invoice Generation", subtitle: "Generates invoice from request or call, sends to email/CRM, validates details, supports B2B scenarios.", cta: "Request Demo" },
  es: { title: "Generación Automática de Facturas", subtitle: "Genera factura desde solicitud o llamada, envía a email/CRM, valida detalles.", cta: "Solicitar Demo" },
  de: { title: "Automatische Rechnungserstellung", subtitle: "Generiert Rechnung aus Anfrage oder Anruf, versendet per E-Mail/CRM, validiert Details.", cta: "Demo Anfordern" },
  nl: { title: "Automatische Factuurgeneratie", subtitle: "Genereert factuur uit verzoek of oproep, verzendt per e-mail/CRM, valideert details.", cta: "Demo Aanvragen" },
  fr: { title: "Génération Automatique de Factures", subtitle: "Génère facture à partir de demande ou appel, envoie par email/CRM, valide les détails.", cta: "Demander une Démo" },
}

export function VystavlenieSchetovClientPage({ locale }: { locale: Locale }) {
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
