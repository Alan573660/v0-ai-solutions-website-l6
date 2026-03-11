import { RobotDlyaZvonkovPage } from "@/components/pages/robot-dlya-zvonkov-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface RobotDlyaZvonkovPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: RobotDlyaZvonkovPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Робот для звонков: входящие, исходящие, квалификация | AI Solutions",
    en: "Robot for Calls: Inbound, Outbound, Qualification | AI Solutions",
    es: "Robot para Llamadas: Entrantes, Salientes, Calificación | AI Solutions",
    de: "Roboter für Anrufe: Eingehend, Ausgehend, Qualifizierung | AI Solutions",
    nl: "Robot voor Oproepen: Inkomend, Uitgaand, Kwalificatie | AI Solutions",
    fr: "Robot pour Appels: Entrants, Sortants, Qualification | AI Solutions",
  }

  const descriptions = {
    ru: "Робот для звонков автоматизирует входящие и исходящие звонки, напоминания, подтверждения, квалификацию лидов, обзвон и повторные касания.",
    en: "Call robot automates inbound and outbound calls, reminders, confirmations, lead qualification, outreach and follow-ups.",
    es: "Robot de llamadas automatiza llamadas entrantes y salientes, recordatorios, confirmaciones, calificación de leads.",
    de: "Anruf-Roboter automatisiert ein- und ausgehende Anrufe, Erinnerungen, Bestätigungen, Lead-Qualifizierung.",
    nl: "Oproep-robot automatiseert inkomende en uitgaande oproepen, herinneringen, bevestigingen, lead-kwalificatie.",
    fr: "Robot d'appel automatise les appels entrants et sortants, rappels, confirmations, qualification des prospects.",
  }

  const title = titles[locale] || titles.ru

  return {
    title,
    description: descriptions[locale] || descriptions.ru,
    openGraph: { title, url: `${BASE_URL}/${locale}/solutions/robot-dlya-zvonkov` },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/robot-dlya-zvonkov`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/robot-dlya-zvonkov",
        en: "https://m2solutions.ai/en/solutions/robot-dlya-zvonkov",
        es: "https://m2solutions.ai/es/solutions/robot-dlya-zvonkov",
        de: "https://m2solutions.ai/de/solutions/robot-dlya-zvonkov",
        nl: "https://m2solutions.ai/nl/solutions/robot-dlya-zvonkov",
        fr: "https://m2solutions.ai/fr/solutions/robot-dlya-zvonkov",
      },
    },
  }
}

export default async function RobotDlyaZvonkovPageWrapper({ params }: RobotDlyaZvonkovPageProps) {
  const { locale } = await params
  return <RobotDlyaZvonkovPage locale={locale} />
}
