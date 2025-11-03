import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"
import { M2AgentsPage } from "@/components/pages/m2-agents-page"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params

  if (locale !== "ru") {
    return {
      title: "M2 Agents for Business | M2 Solutions",
      description: "AI agents for business automation",
    }
  }

  const title = "Агенты M2 для бизнеса: AI-автоматизация продаж, поддержки и операций 24/7 | M2 Solutions"

  const description =
    "Агенты M2 автоматизируют продажи, поддержку клиентов и бизнес-операции 24/7. Голосовые AI-ассистенты, чат-боты, email-автоматизация. Интеграция с CRM/ERP. Снижение затрат на 30-60%, рост конверсии на 10-25%. Запуск от 2-4 недель. Настройте сами или с помощью команды."

  const keywords =
    "AI агенты для бизнеса, автоматизация продаж AI, голосовой бот для продаж, чат-бот для бизнеса, AI ассистент продаж, автоматизация поддержки клиентов, CRM интеграция AI, AI для продаж, виртуальный менеджер продаж, автоматизация операций, AI для бизнеса, умный ассистент, автоматизация email, AI для поддержки клиентов, голосовой AI ассистент, омниканальный бот, AI агент для CRM, автоматизация бизнес-процессов, AI для малого бизнеса, корпоративный AI агент, настройка AI агента, обучение AI агента, интеграция AI с телефонией, AI workflow автоматизация, no-code AI агент, конструктор AI агентов, AI для строительства, AI для недвижимости, AI для HoReCa, AI для госсектора, AI для образования, AI для юридических услуг"

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ru_RU",
      siteName: "M2 Solutions",
      images: [
        {
          url: "/m2-platform-workflow-screenshot.png",
          width: 1920,
          height: 1080,
          alt: "M2 Platform - AI Workflow Builder Interface",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/m2-platform-workflow-screenshot.png"],
    },
    alternates: {
      canonical: `/${locale}/solutions/m2-agents`,
      languages: {
        ru: "/ru/solutions/m2-agents",
        en: "/en/solutions/m2-agents",
        es: "/es/solutions/m2-agents",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "ai:purpose":
        "Автоматизация бизнеса с помощью AI-агентов для продаж, поддержки клиентов и операций. Голосовые ассистенты, чат-боты, email-автоматизация с интеграцией CRM/ERP.",
      "ai:features":
        "Голосовые AI-агенты, чат-боты для бизнеса, email-автоматизация, интеграция с CRM (Bitrix24, amoCRM, Salesforce), визуальный конструктор workflow, настройка без программирования, омниканальность (телефон, WhatsApp, Telegram, email, веб-чат)",
      "ai:industries":
        "Строительство, Недвижимость, HoReCa (отели, рестораны), Госсектор, Образование, Юридические услуги, Малый и средний бизнес, Корпоративный сектор",
      "ai:deployment": "Запуск от 2-4 недель, самостоятельная настройка или с помощью команды, полное сопровождение",
      "ai:benefits":
        "Снижение затрат на 30-60%, рост конверсии на 10-25%, работа 24/7 без выходных, автоматизация рутинных задач, интеграция с существующими системами",
      "ai:use-cases":
        "Квалификация лидов, обработка заявок, подготовка коммерческих предложений, первая линия поддержки, диспетчеризация, RPA-операции в ERP/CRM, генерация документов, скрининг кандидатов, онбординг сотрудников",
      "ai:search-engines": "Оптимизировано для Яндекс, Google, ChatGPT, OpenAI Search, Perplexity, Claude",
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <M2AgentsPage locale={locale} />
}
