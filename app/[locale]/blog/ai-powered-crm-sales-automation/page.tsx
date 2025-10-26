import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, BookOpen, Brain, CheckCircle, Sparkles, BarChart3 } from "lucide-react"
import Link from "next/link"
import ArticleSchema from "@/components/article-schema"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "AI-powered CRM: Автоматизация продаж нового поколения | AI Solutions",
  description:
    "Интеллектуальная CRM с AI: автоматическое ведение сделок, предиктивная аналитика и персонализация коммуникаций. Увеличение продаж на 50%.",
  keywords:
    "AI CRM, автоматизация продаж, CRM система, искусственный интеллект, предиктивная аналитика, автоматизация бизнеса",
}

export default function AIPoweredCRMPage({ params }: { params: { locale: Locale } }) {
  const translations = {
    ru: {
      backToBlog: "Вернуться к блогу",
      category: "Продажи",
      title: "AI-powered CRM: Автоматизация продаж нового поколения",
      readTime: "11 мин чтения",
      author: "Мария Петрова",
      date: "24 января 2025",
      intro:
        "Интеллектуальные CRM-системы с AI автоматизируют ведение сделок, предсказывают вероятность закрытия, персонализируют коммуникации и увеличивают продажи на 50%. Компании с AI-powered CRM закрывают на 35% больше сделок при тех же ресурсах.",
      section1Title: "Что такое AI-powered CRM",
      section1Content:
        "AI-powered CRM — это интеллектуальная система управления взаимоотношениями с клиентами, которая использует машинное обучение для автоматизации рутинных задач, предсказания поведения клиентов и оптимизации процессов продаж. Система анализирует историю взаимодействий, выявляет паттерны и предлагает оптимальные действия.",
      section2Title: "Ключевые возможности AI-powered CRM",
      benefit1: "Автоматическое ведение сделок и обновление статусов",
      benefit2: "Предиктивная аналитика вероятности закрытия сделки",
      benefit3: "Персонализация коммуникаций на основе поведения",
      benefit4: "Автоматическая приоритизация лидов",
      benefit5: "Рекомендации по следующим действиям",
      benefit6: "Интеграция с голосовыми AI-ассистентами",
      section3Title: "Реальный кейс: Рост продаж на 50%",
      caseStudy:
        "B2B компания внедрила AI-powered CRM и за 6 месяцев увеличила количество закрытых сделок на 50%, сократила цикл продажи с 45 до 28 дней и повысила средний чек на 23% благодаря персонализированным предложениям.",
      ctaTitle: "Внедрите AI-powered CRM в вашей компании",
      ctaDescription: "Получите бесплатную консультацию по внедрению интеллектуальной CRM системы",
      ctaButton: "Получить консультацию",
    },
    en: {
      backToBlog: "Back to Blog",
      category: "Sales",
      title: "AI-powered CRM: Next-Generation Sales Automation",
      readTime: "11 min read",
      author: "Maria Petrova",
      date: "January 24, 2025",
      intro:
        "Intelligent AI-powered CRM systems automate deal management, predict closing probability, personalize communications, and increase sales by 50%. Companies with AI-powered CRM close 35% more deals with the same resources.",
      section1Title: "What is AI-powered CRM",
      section1Content:
        "AI-powered CRM is an intelligent customer relationship management system that uses machine learning to automate routine tasks, predict customer behavior, and optimize sales processes. The system analyzes interaction history, identifies patterns, and suggests optimal actions.",
      section2Title: "Key AI-powered CRM Capabilities",
      benefit1: "Automatic deal management and status updates",
      benefit2: "Predictive analytics of deal closing probability",
      benefit3: "Communication personalization based on behavior",
      benefit4: "Automatic lead prioritization",
      benefit5: "Next action recommendations",
      benefit6: "Integration with voice AI assistants",
      section3Title: "Real Case: 50% Sales Growth",
      caseStudy:
        "A B2B company implemented AI-powered CRM and in 6 months increased closed deals by 50%, reduced sales cycle from 45 to 28 days, and raised average check by 23% through personalized offers.",
      ctaTitle: "Implement AI-powered CRM in Your Company",
      ctaDescription: "Get free consultation on implementing intelligent CRM system",
      ctaButton: "Get Consultation",
    },
  }

  const t = translations[params.locale as keyof typeof translations] || translations.ru

  return (
    <>
      <ArticleSchema
        headline={t.title}
        description={t.intro}
        datePublished="2025-01-24T10:00:00Z"
        dateModified="2025-01-24T10:00:00Z"
        author={t.author}
        image="/ai-crm-sales-automation-analytics.jpg"
        keywords={["AI CRM", "sales automation", "predictive analytics", "machine learning", "personalization"]}
        articleSection="Sales"
        wordCount={3200}
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <Link
              href={`/${params.locale}/blog`}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t.backToBlog}
            </Link>

            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white mb-4 px-4 py-1">
                <Brain className="w-3 h-3 mr-1 inline" />
                {t.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                  {t.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-indigo-600" />
                  {t.readTime}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-indigo-600" />
                  {t.author}
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <img
                src="/ai-crm-sales-automation-analytics.jpg"
                alt="AI-powered CRM"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-indigo-100 mb-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">{t.intro}</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center">
                <Brain className="w-10 h-10 text-indigo-600 mr-4" />
                {t.section1Title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">{t.section1Content}</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center">
                <Sparkles className="w-10 h-10 text-purple-600 mr-4" />
                {t.section2Title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5, t.benefit6].map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-indigo-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
                <BarChart3 className="w-10 h-10 mr-4" />
                {t.section3Title}
              </h2>
              <p className="text-xl text-indigo-100 leading-relaxed">{t.caseStudy}</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.ctaTitle}</h2>
            <p className="text-xl text-indigo-100 mb-10">{t.ctaDescription}</p>
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-6">
              <BookOpen className="w-6 h-6 mr-2" />
              {t.ctaButton}
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
