import { type NextRequest, NextResponse } from "next/server"
import { locales, type Locale } from "@/lib/i18n/config"

export async function GET(request: NextRequest, { params }: { params: { locale: Locale } }) {
  const locale = params.locale

  // Validate locale
  if (!locales.includes(locale)) {
    return NextResponse.json({ error: "Invalid locale" }, { status: 404 })
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://m2solutions.ai"

  // Generate ai-assets.json manifest
  const aiAssets = {
    version: "1.0",
    locale: locale,
    lastModified: new Date().toISOString(),
    organization: {
      name: "AI Solutions",
      description:
        locale === "ru"
          ? "Голосовые AI-ассистенты для бизнеса - автоматизация продаж, поддержки и сервиса"
          : "Voice AI Assistants for Business - Sales, Support & Service Automation",
      url: `${baseUrl}/${locale}`,
      logo: `${baseUrl}/placeholder-logo.png`,
      contactEmail: "info@m2solutions.ai",
    },
    content: {
      pages: [
        {
          url: `${baseUrl}/${locale}`,
          title: locale === "ru" ? "Главная" : "Home",
          description:
            locale === "ru" ? "AI-ассистенты для автоматизации бизнеса" : "AI Assistants for Business Automation",
          priority: 1.0,
          changeFrequency: "daily",
        },
        {
          url: `${baseUrl}/${locale}/solutions`,
          title: locale === "ru" ? "Решения" : "Solutions",
          description: locale === "ru" ? "AI-решения для различных отраслей" : "AI Solutions for Various Industries",
          priority: 0.9,
          changeFrequency: "weekly",
        },
        {
          url: `${baseUrl}/${locale}/solutions/voice-sales-manager`,
          title: locale === "ru" ? "Голосовой менеджер продаж" : "Voice Sales Manager",
          description:
            locale === "ru" ? "AI-ассистент для автоматизации продаж 24/7" : "AI Assistant for 24/7 Sales Automation",
          priority: 0.9,
          changeFrequency: "weekly",
        },
        {
          url: `${baseUrl}/${locale}/solutions/hotel-concierge`,
          title: locale === "ru" ? "AI-консьерж для отелей" : "AI Hotel Concierge",
          description: locale === "ru" ? "Автоматизация сервиса в отелях с AI" : "Hotel Service Automation with AI",
          priority: 0.9,
          changeFrequency: "weekly",
        },
        {
          url: `${baseUrl}/${locale}/cases`,
          title: locale === "ru" ? "Кейсы" : "Case Studies",
          description:
            locale === "ru" ? "Реальные истории внедрения AI-ассистентов" : "Real AI Assistant Implementation Stories",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          url: `${baseUrl}/${locale}/blog`,
          title: locale === "ru" ? "Блог" : "Blog",
          description: locale === "ru" ? "Статьи об AI и автоматизации" : "Articles about AI and Automation",
          priority: 0.7,
          changeFrequency: "weekly",
        },
        {
          url: `${baseUrl}/${locale}/faq`,
          title: locale === "ru" ? "FAQ" : "FAQ",
          description:
            locale === "ru" ? "Часто задаваемые вопросы об AI-ассистентах" : "Frequently Asked Questions about AI",
          priority: 0.7,
          changeFrequency: "monthly",
        },
      ],
      solutions: [
        {
          id: "voice-sales-manager",
          name: locale === "ru" ? "Голосовой менеджер продаж" : "Voice Sales Manager",
          description:
            locale === "ru"
              ? "AI-ассистент для квалификации лидов, презентации продукта и выставления счетов без участия человека"
              : "AI assistant for lead qualification, product presentation, and invoicing without human involvement",
          url: `${baseUrl}/${locale}/solutions/voice-sales-manager`,
          benefits: [
            locale === "ru" ? "Обрабатывает 100% входящих звонков" : "Handles 100% of incoming calls",
            locale === "ru" ? "Работает 24/7 без выходных" : "Works 24/7 without breaks",
            locale === "ru" ? "Увеличивает конверсию в 2-3 раза" : "Increases conversion 2-3x",
          ],
        },
        {
          id: "hotel-concierge",
          name: locale === "ru" ? "AI-консьерж для отелей" : "AI Hotel Concierge",
          description:
            locale === "ru"
              ? "Автоматизация сервиса в отелях через голосовых ассистентов и чат-ботов"
              : "Hotel service automation through voice assistants and chatbots",
          url: `${baseUrl}/${locale}/solutions/hotel-concierge`,
          benefits: [
            locale === "ru" ? "Мгновенный ответ на запросы гостей" : "Instant response to guest requests",
            locale === "ru" ? "Поддержка 50+ языков" : "Support for 50+ languages",
            locale === "ru" ? "Снижение нагрузки на персонал" : "Reduced staff workload",
          ],
        },
      ],
      faq: {
        url: `${baseUrl}/${locale}/faq`,
        description:
          locale === "ru"
            ? "Часто задаваемые вопросы об AI-ассистентах, внедрении и стоимости"
            : "Frequently asked questions about AI assistants, implementation, and pricing",
        totalQuestions: 50,
      },
    },
    technical: {
      languages: ["ru", "en", "es", "de", "nl", "fr"],
      hreflangSupport: true,
      structuredData: ["Organization", "Product", "FAQPage", "HowTo", "BreadcrumbList"],
      apiEndpoints: [
        `${baseUrl}/api/ai-assets/${locale}`,
        `${baseUrl}/api/products`,
        `${baseUrl}/api/solutions`,
        `${baseUrl}/api/faq`,
      ],
    },
    crawlingGuidelines: {
      rateLimit: "10 requests per second",
      respectRobotsTxt: true,
      useIfModifiedSince: true,
      followCanonical: true,
      followHreflang: true,
    },
  }

  // Return JSON with proper headers
  return NextResponse.json(aiAssets, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale,
  }))
}
