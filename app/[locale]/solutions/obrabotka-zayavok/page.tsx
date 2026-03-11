import { ObrabotkZayavokPage } from "@/components/pages/obrabotka-zayavok-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface ObrabotkZayavokPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ObrabotkZayavokPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Система обработки заявок с AI | Автоматизация | AI Solutions",
    en: "Request Processing System with AI | Automation | AI Solutions",
    es: "Sistema de Procesamiento de Solicitudes con IA | AI Solutions",
    de: "Anfrageverarbeitungssystem mit KI | AI Solutions",
    nl: "Aanvraagverwerkingssysteem met AI | AI Solutions",
    fr: "Système de Traitement des Demandes avec IA | AI Solutions",
  }

  const descriptions = {
    ru: "Система обработки заявок автоматизирует приём, обработку и маршрутизацию входящих заявок. Анализирует содержание, приоритизирует, передаёт нужному отделу.",
    en: "Request processing system automates receiving, processing and routing of incoming requests. Analyzes content, prioritizes, routes to right department.",
    es: "Sistema automatiza recepción, procesamiento y enrutamiento. Analiza contenido, prioriza, enruta al departamento correcto.",
    de: "System automatisiert Empfang, Verarbeitung und Weiterleitung. Analysiert Inhalt, priorisiert, leitet an richtige Abteilung.",
    nl: "Systeem automatiseert ontvangst, verwerking en routering. Analyzeert inhoud, prioriseert, stuurt naar juiste afdeling.",
    fr: "Système automatise la réception, le traitement et l'acheminement. Analyse le contenu, hiérarchise, achemine au bon service.",
  }

  const title = titles[locale] || titles.ru

  return {
    title,
    description: descriptions[locale] || descriptions.ru,
    openGraph: { title, url: `${BASE_URL}/${locale}/solutions/obrabotka-zayavok` },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/obrabotka-zayavok`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/obrabotka-zayavok",
        en: "https://m2solutions.ai/en/solutions/obrabotka-zayavok",
        es: "https://m2solutions.ai/es/solutions/obrabotka-zayavok",
        de: "https://m2solutions.ai/de/solutions/obrabotka-zayavok",
        nl: "https://m2solutions.ai/nl/solutions/obrabotka-zayavok",
        fr: "https://m2solutions.ai/fr/solutions/obrabotka-zayavok",
      },
    },
  }
}

export default async function ObrabotkZayavokPageWrapper({ params }: ObrabotkZayavokPageProps) {
  const { locale } = await params
  return <ObrabotkZayavokPage />
}
