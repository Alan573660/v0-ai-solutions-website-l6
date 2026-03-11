"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: {
    badge: "Система обработки звонков",
    title: "Автоматический оператор",
    subtitle: "Обработка входящих звонков 24/7 без пропусков. Квалификация клиентов, управление заявками, интеграция с CRM.",
    cta: "Запросить демонстрацию",
    benefits: [
      { title: "100% входящих", desc: "Все звонки обработаны автоматически" },
      { title: "Квалификация", desc: "Определение готовности к покупке" },
      { title: "Интеграция", desc: "Работает с вашей CRM и системами" },
      { title: "24/7 работа", desc: "Без выходных и перекуров" },
    ],
    ctaSection: "Начните автоматизацию звонков",
    ctaButton: "Запросить демонстрацию",
  },
  en: {
    badge: "Call Processing System",
    title: "Automatic Operator",
    subtitle: "Process all incoming calls 24/7 without missing any. Customer qualification, request management, CRM integration.",
    cta: "Request Demo",
    benefits: [
      { title: "100% calls", desc: "All calls processed automatically" },
      { title: "Qualification", desc: "Determine buying readiness" },
      { title: "Integration", desc: "Works with your CRM and systems" },
      { title: "24/7 operation", desc: "Without breaks" },
    ],
    ctaSection: "Start call automation",
    ctaButton: "Request Demo",
  },
  es: {
    badge: "Sistema Procesamiento de Llamadas",
    title: "Operador Automático",
    subtitle: "Procesa todas las llamadas entrantes 24/7 sin perder ninguna. Calificación de clientes, gestión de solicitudes, integración CRM.",
    cta: "Solicitar Demo",
    benefits: [
      { title: "100% llamadas", desc: "Todas las llamadas procesadas" },
      { title: "Calificación", desc: "Determinar disposición de compra" },
      { title: "Integración", desc: "Funciona con tu CRM" },
      { title: "Operación 24/7", desc: "Sin interrupciones" },
    ],
    ctaSection: "Inicia automatización de llamadas",
    ctaButton: "Solicitar Demo",
  },
  de: {
    badge: "Anrufbearbeitungssystem",
    title: "Automatischer Operator",
    subtitle: "Alle eingehenden Anrufe 24/7 bearbeiten. Kundenqualifizierung, Anfrageverwaltung, CRM-Integration.",
    cta: "Demo Anfordern",
    benefits: [
      { title: "100% Anrufe", desc: "Alle Anrufe automatisch bearbeitet" },
      { title: "Qualifizierung", desc: "Kaufbereitschaft bestimmen" },
      { title: "Integration", desc: "Funktioniert mit Ihrem CRM" },
      { title: "24/7 Betrieb", desc: "Ohne Unterbrechung" },
    ],
    ctaSection: "Starten Sie die Anrufautomatisierung",
    ctaButton: "Demo Anfordern",
  },
  nl: {
    badge: "Oproepverwerkingssysteem",
    title: "Automatische Operator",
    subtitle: "Verwerk alle inkomende oproepen 24/7 zonder te missen. Klantenkwalificatie, verzoekbeheer, CRM-integratie.",
    cta: "Demo Aanvragen",
    benefits: [
      { title: "100% oproepen", desc: "Alle oproepen automatisch verwerkt" },
      { title: "Kwalificatie", desc: "Bepaal koopbereidheid" },
      { title: "Integratie", desc: "Werkt met uw CRM" },
      { title: "24/7 werking", desc: "Zonder onderbreking" },
    ],
    ctaSection: "Start oproepautomatisering",
    ctaButton: "Demo Aanvragen",
  },
  fr: {
    badge: "Système Traitement d'Appels",
    title: "Opérateur Automatique",
    subtitle: "Traitez tous les appels entrants 24/7 sans en manquer. Qualification client, gestion des demandes, intégration CRM.",
    cta: "Demander une Démo",
    benefits: [
      { title: "100% appels", desc: "Tous les appels traités automatiquement" },
      { title: "Qualification", desc: "Déterminer la volonté d'acheter" },
      { title: "Intégration", desc: "Fonctionne avec votre CRM" },
      { title: "Fonctionnement 24/7", desc: "Sans interruption" },
    ],
    ctaSection: "Commencez l'automatisation d'appels",
    ctaButton: "Demander une Démo",
  },
}

export function AutomaticOperatorClientPage({ locale }: { locale: Locale }) {
  const { openDemo } = useCTA()
  const t = translations[locale] || translations.ru

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {t.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => openDemo()} className="h-12 px-8">
              {t.cta}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Возможности</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-blue-500/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t.ctaSection}</h2>
          <Button size="lg" onClick={() => openDemo()} className="h-12 px-8">
            {t.ctaButton}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
