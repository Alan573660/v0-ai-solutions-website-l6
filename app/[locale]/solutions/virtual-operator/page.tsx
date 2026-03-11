import { VirtualOperatorClientPage } from "./VirtualOperatorClientPage"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const BASE_URL = "https://m2solutions.ai"

interface VirtualOperatorPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: VirtualOperatorPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Виртуальный оператор для бизнеса | 24/7 обработка звонков | AI Solutions",
    en: "Virtual Operator for Business | 24/7 Call Processing | AI Solutions",
    es: "Operador Virtual para Negocios | Procesamiento 24/7 | AI Solutions",
    de: "Virtueller Operator für Unternehmen | 24/7 Anrufbearbeitung | AI Solutions",
    nl: "Virtuele Operator voor Bedrijven | 24/7 Oproepverwerking | AI Solutions",
    fr: "Opérateur Virtuel pour Entreprises | Traitement 24/7 | AI Solutions",
  }

  const descriptions = {
    ru: "Виртуальный оператор работает 24/7 без выходных. Отвечает на все входящие звонки, работает с CRM, поддерживает множество языков, управляет сценариями поддержки и продаж.",
    en: "Virtual operator works 24/7 without breaks. Answers all incoming calls, works with CRM, supports multiple languages, manages support and sales scenarios.",
    es: "Operador virtual funciona 24/7 sin descansos. Responde todas las llamadas, trabaja con CRM, soporta idiomas, gestiona escenarios.",
    de: "Virtueller Operator arbeitet 24/7 ohne Unterbrechung. Beantwortet alle Anrufe, funktioniert mit CRM, unterstützt Sprachen.",
    nl: "Virtuele operator werkt 24/7 zonder pauzes. Beantwoordt alle oproepen, werkt met CRM, ondersteunt talen.",
    fr: "Opérateur virtuel fonctionne 24/7 sans interruption. Répond à tous les appels, fonctionne avec CRM, supporte les langues.",
  }

  const title = titles[locale] || titles.ru
  const description = descriptions[locale] || descriptions.ru

  return {
    title,
    description,
    openGraph: { title, description, url: `${BASE_URL}/${locale}/solutions/virtual-operator` },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}/solutions/virtual-operator`,
      languages: {
        ru: "https://m2solutions.ai/ru/solutions/virtual-operator",
        en: "https://m2solutions.ai/en/solutions/virtual-operator",
        es: "https://m2solutions.ai/es/solutions/virtual-operator",
        de: "https://m2solutions.ai/de/solutions/virtual-operator",
        nl: "https://m2solutions.ai/nl/solutions/virtual-operator",
        fr: "https://m2solutions.ai/fr/solutions/virtual-operator",
      },
    },
  }
}

export default async function VirtualOperatorPage({ params }: VirtualOperatorPageProps) {
  const { locale } = await params
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"Virtual Operator"}) }} />
      <VirtualOperatorClientPage locale={locale} />
    </>
  )
}
