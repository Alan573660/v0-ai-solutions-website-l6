import type { Metadata } from "next"
import { getFAQByLocale } from "@/lib/api/faq-data"
import type { Locale } from "@/lib/i18n/config"
import FAQClient from "./faq-client"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const locale = params.locale

  const metadataMap: Record<Locale, { title: string; description: string; keywords: string }> = {
    ru: {
      title: "Часто задаваемые вопросы | M2 Solutions",
      description: "Ответы на популярные вопросы о наших AI-решениях для бизнеса",
      keywords: "FAQ, вопросы, AI, искусственный интеллект, поддержка",
    },
    en: {
      title: "Frequently Asked Questions | M2 Solutions",
      description: "Answers to popular questions about our AI solutions for business",
      keywords: "FAQ, questions, AI, artificial intelligence, support",
    },
    es: {
      title: "Preguntas frecuentes | M2 Solutions",
      description: "Respuestas a preguntas populares sobre nuestras soluciones de IA para empresas",
      keywords: "FAQ, preguntas, IA, inteligencia artificial, soporte",
    },
    de: {
      title: "Häufig gestellte Fragen | M2 Solutions",
      description: "Antworten auf häufige Fragen zu unseren KI-Lösungen für Unternehmen",
      keywords: "FAQ, Fragen, KI, künstliche Intelligenz, Support",
    },
    nl: {
      title: "Veelgestelde vragen | M2 Solutions",
      description: "Antwoorden op veelgestelde vragen over onze AI-oplossingen voor bedrijven",
      keywords: "FAQ, vragen, AI, kunstmatige intelligentie, ondersteuning",
    },
    fr: {
      title: "Questions fréquemment posées | M2 Solutions",
      description: "Réponses aux questions populaires sur nos solutions d'IA pour les entreprises",
      keywords: "FAQ, questions, IA, intelligence artificielle, support",
    },
  }

  const metadata = metadataMap[locale] || metadataMap.en

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  }
}

export default async function FAQPage({ params }: { params: { locale: Locale } }) {
  const faqData = await getFAQByLocale(params.locale)

  return <FAQClient locale={params.locale} faqItems={faqData} />
}
