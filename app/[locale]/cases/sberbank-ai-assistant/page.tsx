import type { Metadata } from "next"
import ClientSberbankCasePage from "./client-page"
import CaseStudySchema from "@/components/case-study-schema"

export const metadata: Metadata = {
  title: "Кейс Сбербанк: Автоматизация 85% клиентских запросов с AI | AI Solutions",
  description:
    "Узнайте, как Сбербанк сократил время обработки запросов с часов до секунд, повысил удовлетворенность клиентов на 350% и сэкономил ₽180М в год с помощью AI-ассистента.",
  keywords: "Сбербанк, AI ассистент, автоматизация банка, клиентский сервис, искусственный интеллект в банках",
  openGraph: {
    title: "Кейс Сбербанк: Автоматизация 85% клиентских запросов с AI",
    description: "Как крупнейший банк России трансформировал клиентский сервис с помощью AI-технологий",
    type: "article",
    publishedTime: "2024-11-20T10:00:00Z",
    images: ["/cases/sberbank-ai-transformation.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Кейс Сбербанк: Автоматизация с AI",
    description: "85% запросов автоматизировано, ₽180М экономии в год",
    images: ["/cases/sberbank-ai-transformation.jpg"],
  },
  alternates: {
    canonical: "/cases/sberbank-ai-assistant",
    languages: {
      "ru-RU": "/ru/cases/sberbank-ai-assistant",
      "en-US": "/en/cases/sberbank-ai-assistant",
    },
  },
}

export default function SberbankCasePage() {
  return (
    <>
      <CaseStudySchema
        name="Сбербанк: Автоматизация 85% клиентских запросов с AI"
        description="Как крупнейший банк России трансформировал клиентский сервис с помощью AI-технологий"
        client="Сбербанк"
        industry="Banking & Finance"
        datePublished="2024-11-20T10:00:00Z"
        results={[
          { metric: "Автоматизация запросов", value: "85%" },
          { metric: "Экономия в год", value: "₽180М" },
          { metric: "Рост удовлетворенности", value: "350%" },
          { metric: "Сокращение времени обработки", value: "от часов до секунд" },
        ]}
        image="/cases/sberbank-ai-transformation.jpg"
      />
      <ClientSberbankCasePage />
    </>
  )
}
