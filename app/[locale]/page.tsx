import { HeroSection } from "@/components/hero-section"
import { TrustedCompanies } from "@/components/trusted-companies"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { SolutionsSection } from "@/components/solutions-section"
import { DemoSection } from "@/components/demo-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "AI Solutions - Голосовой AI-ассистент для бизнеса | Автоматизация продаж и клиентского сервиса",
    en: "AI Solutions - Voice AI Assistant for Business | Sales & Customer Service Automation",
  }

  const descriptions = {
    ru: "Голосовой AI-ассистент для автоматизации продаж, клиентского сервиса и бизнес-процессов. Увеличьте конверсию в 3 раза, обрабатывайте 100% звонков 24/7. Интеграция с CRM, автоматизация звонков, виртуальный ассистент для отелей, банков, ритейла. Искусственный интеллект для бизнеса.",
    en: "Voice AI assistant for sales automation, customer service and business processes. Increase conversion 3x, handle 100% calls 24/7. CRM integration, call automation, virtual assistant for hotels, banks, retail. Artificial intelligence for business.",
  }

  const keywords = {
    ru: "голосовой AI-ассистент, автоматизация продаж, AI для бизнеса, голосовой робот, виртуальный ассистент, CRM интеграция, автоматизация звонков, AI для отелей, AI для банков, AI для ритейла, искусственный интеллект для бизнеса, автоматизация клиентского сервиса, голосовые технологии, conversational AI, voice AI, speech recognition, natural language processing, AI automation, business automation, customer service automation, голосовой бот, AI-ассистент, автоматизация колл-центра, умный ассистент, голосовые продажи, AI менеджер, виртуальный менеджер продаж, автоматизация обслуживания клиентов",
    en: "voice AI assistant, sales automation, AI for business, voice robot, virtual assistant, CRM integration, call automation, AI for hotels, AI for banks, AI for retail, artificial intelligence for business, customer service automation, voice technologies, conversational AI, voice AI, speech recognition, natural language processing, AI automation, business automation, customer service automation, voice bot, AI assistant, call center automation, smart assistant, voice sales, AI manager, virtual sales manager, customer service automation",
  }

  const title = titles[locale] || titles.ru
  const description = descriptions[locale] || descriptions.ru
  const keywordList = keywords[locale] || keywords.ru

  return {
    title,
    description,
    keywords: keywordList,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      url: `https://m2solutions.ai/${locale}`,
      siteName: "AI Solutions",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "AI Solutions - Voice AI Assistant",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `https://m2solutions.ai/${locale}`,
      languages: {
        ru: "https://m2solutions.ai/ru",
        en: "https://m2solutions.ai/en",
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
      "google-site-verification": "your-verification-code",
      "yandex-verification": "your-verification-code",
    },
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params

  return (
    <div className="bg-background">
      <HeroSection locale={locale} />
      <TrustedCompanies locale={locale} />
      <HowItWorksSection locale={locale} />
      <BenefitsSection locale={locale} />
      <SolutionsSection locale={locale} />
      <DemoSection locale={locale} />
      <TestimonialsSection locale={locale} />
      <CTASection locale={locale} />
    </div>
  )
}
