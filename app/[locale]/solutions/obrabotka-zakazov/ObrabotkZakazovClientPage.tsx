"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: { title: "Система обработки заказов", subtitle: "Автоматизирует приём заказов, проверку данных, создание счётов, отправку подтверждений и интеграцию с логистикой.", cta: "Запросить демонстрацию" },
  en: { title: "Order Processing System", subtitle: "Automates order intake, data validation, invoice creation, confirmation sending and logistics integration.", cta: "Request Demo" },
  es: { title: "Sistema de Procesamiento de Pedidos", subtitle: "Automatiza recepción, validación, creación de facturas, envío de confirmaciones.", cta: "Solicitar Demo" },
  de: { title: "Bestellverarbeitungssystem", subtitle: "Automatisiert Auftragsannahme, Validierung, Rechnungserstellung, Bestätigungsversand.", cta: "Demo Anfordern" },
  nl: { title: "Bestelverwerkingssysteem", subtitle: "Automatiseert orderinname, validatie, factuuraanmaak, bevestigingsverzending.", cta: "Demo Aanvragen" },
  fr: { title: "Système de Traitement des Commandes", subtitle: "Automatise la réception, la validation, la création de factures, l'envoi de confirmations.", cta: "Demander une Démo" },
}

export function ObrabotkZakazovClientPage({ locale }: { locale: Locale }) {
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
