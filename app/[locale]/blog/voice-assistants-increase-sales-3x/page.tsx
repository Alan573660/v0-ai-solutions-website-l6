import type { Metadata } from "next"
import VoiceAssistantsSalesArticleClient from "./VoiceAssistantsSalesArticleClient"
import type { Locale } from "@/lib/i18n/config"
import ArticleSchema from "@/components/article-schema"

export const metadata: Metadata = {
  title: "Как голосовые ассистенты увеличивают продажи в 3 раза | AI Solutions",
  description:
    "Узнайте, как голосовой AI-ассистент автоматизирует продажи, снижает издержки и повышает конверсию бизнеса в 3 раза. Реальные кейсы и практические советы по внедрению.",
  keywords: "голосовые ассистенты, увеличение продаж, AI для бизнеса, автоматизация продаж, конверсия, голосовой AI",
  openGraph: {
    title: "Как голосовые ассистенты увеличивают продажи в 3 раза",
    description: "Реальные кейсы и практические советы по внедрению голосовых AI-ассистентов для увеличения продаж",
    images: ["/voice-assistant-sales-increase-business-growth.jpg"],
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["AI Solutions Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Как голосовые ассистенты увеличивают продажи в 3 раза",
    description: "Реальные кейсы и практические советы по внедрению голосовых AI-ассистентов",
    images: ["/voice-assistant-sales-increase-business-growth.jpg"],
  },
  alternates: {
    canonical: "/blog/voice-assistants-increase-sales-3x",
    languages: {
      "ru-RU": "/ru/blog/voice-assistants-increase-sales-3x",
      "en-US": "/en/blog/voice-assistants-increase-sales-3x",
    },
  },
}

export default function VoiceAssistantsSalesArticlePage({ params }: { params: { locale: Locale } }) {
  return (
    <>
      <ArticleSchema
        headline="Как голосовые ассистенты увеличивают продажи в 3 раза"
        description="Узнайте, как голосовой AI-ассистент автоматизирует продажи, снижает издержки и повышает конверсию бизнеса в 3 раза"
        datePublished="2024-12-15T10:00:00Z"
        dateModified="2024-12-20T15:30:00Z"
        author="AI Solutions Team"
        image="/voice-assistant-sales-increase-business-growth.jpg"
        keywords={["голосовые ассистенты", "увеличение продаж", "AI для бизнеса", "автоматизация продаж", "конверсия"]}
        articleSection="Sales & Marketing"
        wordCount={2500}
      />
      <VoiceAssistantsSalesArticleClient params={params} />
    </>
  )
}
