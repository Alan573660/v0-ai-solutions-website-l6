"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: { title: "Система обработки заявок", subtitle: "Автоматизирует приём, обработку и маршрутизацию заявок. Анализирует содержание, приоритизирует, передаёт нужному отделу.", cta: "Запросить демонстрацию" },
  en: { title: "Request Processing System", subtitle: "Automates receiving, processing and routing of requests. Analyzes content, prioritizes, routes to right department.", cta: "Request Demo" },
  es: { title: "Sistema de Procesamiento de Solicitudes", subtitle: "Automatiza recepción, procesamiento y enrutamiento. Analiza contenido, prioriza, enruta.", cta: "Solicitar Demo" },
  de: { title: "Anfrageverarbeitungssystem", subtitle: "Automatisiert Empfang, Verarbeitung und Weiterleitung. Analysiert Inhalt, priorisiert.", cta: "Demo Anfordern" },
  nl: { title: "Aanvraagverwerkingssysteem", subtitle: "Automatiseert ontvangst, verwerking en routering. Analyzeert inhoud, prioriseert.", cta: "Demo Aanvragen" },
  fr: { title: "Système de Traitement des Demandes", subtitle: "Automatise la réception, le traitement et l'acheminement. Analyse le contenu, hiérarchise.", cta: "Demander une Démo" },
}

export function ObrabotkZayavokClientPage({ locale }: { locale: Locale }) {
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
