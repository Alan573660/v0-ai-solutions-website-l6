import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, BookOpen, Mic, Home, CheckCircle, Sparkles, BarChart3 } from "lucide-react"
import Link from "next/link"
import ArticleSchema from "@/components/article-schema"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Голосовой AI в недвижимости: Автоматизация продаж объектов | AI Solutions",
  description:
    "Как голосовые AI-ассистенты трансформируют рынок недвижимости: автоматизация показов, квалификация лидов 24/7 и увеличение конверсии на 45%.",
  keywords:
    "голосовой AI, недвижимость, автоматизация продаж, voice AI real estate, AI ассистент, продажа недвижимости",
}

export default function VoiceAIRealEstatePage({ params }: { params: { locale: Locale } }) {
  const translations = {
    ru: {
      backToBlog: "Вернуться к блогу",
      category: "Продажи",
      title: "Голосовой AI в недвижимости: Автоматизация продаж объектов",
      readTime: "10 мин чтения",
      author: "Андрей Соколов",
      date: "25 января 2025",
      intro:
        "Голосовые AI-ассистенты революционизируют рынок недвижимости, автоматизируя показы объектов, квалифицируя лидов 24/7 и увеличивая конверсию на 45%. Агентства недвижимости, внедрившие голосовой AI, обрабатывают в 5 раз больше заявок при тех же ресурсах.",
      section1Title: "Как голосовой AI трансформирует недвижимость",
      section1Content:
        "Голосовые AI-ассистенты автоматизируют первичную консультацию клиентов, запись на показы, квалификацию лидов и ответы на типовые вопросы. Они работают 24/7, говорят на 100+ языках и интегрируются с CRM системами.",
      section2Title: "Ключевые возможности голосового AI",
      benefit1: "Автоматическая запись на показы объектов",
      benefit2: "Квалификация лидов по бюджету и требованиям",
      benefit3: "Ответы на вопросы о характеристиках объектов",
      benefit4: "Напоминания о запланированных показах",
      benefit5: "Сбор обратной связи после показов",
      benefit6: "Интеграция с CRM и базами объектов",
      section3Title: "Реальный кейс: Рост конверсии на 45%",
      caseStudy:
        "Агентство недвижимости внедрило голосового AI-ассистента и за 4 месяца увеличило количество показов на 280%, сократило время обработки заявки с 2 часов до 5 минут и повысило конверсию в сделку с 12% до 17%.",
      ctaTitle: "Внедрите голосовой AI в вашем агентстве",
      ctaDescription: "Получите бесплатную демонстрацию голосового AI-ассистента для недвижимости",
      ctaButton: "Получить демо",
    },
    en: {
      backToBlog: "Back to Blog",
      category: "Sales",
      title: "Voice AI in Real Estate: Property Sales Automation",
      readTime: "10 min read",
      author: "Andrey Sokolov",
      date: "January 25, 2025",
      intro:
        "Voice AI assistants are revolutionizing real estate by automating property showings, qualifying leads 24/7, and increasing conversion by 45%. Real estate agencies with voice AI handle 5x more requests with the same resources.",
      section1Title: "How Voice AI Transforms Real Estate",
      section1Content:
        "Voice AI assistants automate initial client consultations, showing bookings, lead qualification, and answers to common questions. They work 24/7, speak 100+ languages, and integrate with CRM systems.",
      section2Title: "Key Voice AI Capabilities",
      benefit1: "Automatic property showing bookings",
      benefit2: "Lead qualification by budget and requirements",
      benefit3: "Answers about property characteristics",
      benefit4: "Reminders about scheduled showings",
      benefit5: "Feedback collection after showings",
      benefit6: "Integration with CRM and property databases",
      section3Title: "Real Case: 45% Conversion Growth",
      caseStudy:
        "A real estate agency implemented a voice AI assistant and in 4 months increased showings by 280%, reduced request processing time from 2 hours to 5 minutes, and raised deal conversion from 12% to 17%.",
      ctaTitle: "Implement Voice AI in Your Agency",
      ctaDescription: "Get free demo of voice AI assistant for real estate",
      ctaButton: "Get Demo",
    },
  }

  const t = translations[params.locale as keyof typeof translations] || translations.ru

  return (
    <>
      <ArticleSchema
        headline={t.title}
        description={t.intro}
        datePublished="2025-01-25T10:00:00Z"
        dateModified="2025-01-25T10:00:00Z"
        author={t.author}
        image="/voice-ai-real-estate-automation-sales.jpg"
        keywords={["voice AI", "real estate", "property sales", "automation", "lead qualification"]}
        articleSection="Sales"
        wordCount={3000}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <Link
              href={`/${params.locale}/blog`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t.backToBlog}
            </Link>

            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white mb-4 px-4 py-1">
                <Home className="w-3 h-3 mr-1 inline" />
                {t.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {t.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  {t.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  {t.readTime}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-blue-600" />
                  {t.author}
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <img
                src="/voice-ai-real-estate-automation-sales.jpg"
                alt="Voice AI Real Estate"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100 mb-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">{t.intro}</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center">
                <Mic className="w-10 h-10 text-blue-600 mr-4" />
                {t.section1Title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">{t.section1Content}</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center">
                <Sparkles className="w-10 h-10 text-green-600 mr-4" />
                {t.section2Title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5, t.benefit6].map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
                <BarChart3 className="w-10 h-10 mr-4" />
                {t.section3Title}
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">{t.caseStudy}</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.ctaTitle}</h2>
            <p className="text-xl text-blue-100 mb-10">{t.ctaDescription}</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              <BookOpen className="w-6 h-6 mr-2" />
              {t.ctaButton}
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
