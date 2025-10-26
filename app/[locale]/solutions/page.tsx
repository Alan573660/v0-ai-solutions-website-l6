"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Phone, Users, Building2, Zap, Target } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { useCTA } from "@/components/modals/cta-provider"

interface SolutionsPageProps {
  params: { locale: Locale } // Made params synchronous - Client Components can't be async
}

export default function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale } = params // No await needed - params is synchronous in client components
  const { t } = useTranslations(locale)
  const { openModal } = useCTA()

  const solutions = [
    {
      title: t("solutions.voiceSalesManager"),
      description: "Увеличьте продажи на 40% с голосовым AI-менеджером, который работает 24/7",
      icon: Phone,
      href: `/${locale}/solutions/voice-sales-manager`,
      metrics: ["40% рост продаж", "24/7 работа", "0 сек ожидания"],
      color: "bg-blue-500",
    },
    {
      title: t("solutions.hotelConcierge"),
      description: "AI-консьерж для отелей: заказы, бронирования и сервис без очередей",
      icon: Building2,
      href: `/${locale}/solutions/hotel-concierge`,
      metrics: ["95% удовлетворенность", "60% экономия времени", "Мультиязычность"],
      color: "bg-purple-500",
    },
    {
      title: t("solutions.smb"),
      description: "Готовые решения для малого и среднего бизнеса с быстрым запуском",
      icon: Users,
      href: `/${locale}/solutions/smb`,
      metrics: ["7 дней запуск", "Без интеграций", "Фиксированная цена"],
      color: "bg-green-500",
    },
    {
      title: t("solutions.enterprise"),
      description: "Корпоративные решения с высокой безопасностью и SLA",
      icon: Target,
      href: `/${locale}/solutions/enterprise`,
      metrics: ["99.9% SLA", "On-premise", "Полная кастомизация"],
      color: "bg-orange-500",
    },
    {
      title: t("solutions.custom"),
      description: "Индивидуальные AI-решения под любые бизнес-задачи",
      icon: Zap,
      href: `/${locale}/solutions/custom`,
      metrics: ["Любая сложность", "RAG + LLM", "Полный цикл"],
      color: "bg-red-500",
    },
  ]

  const implementationSteps = [
    {
      step: "01",
      title: "Анализ и планирование",
      description: "Изучаем ваши процессы, определяем точки автоматизации и составляем техническое задание",
    },
    {
      step: "02",
      title: "Разработка и настройка",
      description: "Создаем AI-ассистента, настраиваем интеграции с вашими системами и обучаем модель",
    },
    {
      step: "03",
      title: "Тестирование и запуск",
      description: "Проводим пилотное тестирование, дорабатываем по результатам и запускаем в продакшн",
    },
  ]

  const faq = [
    {
      question: "Сколько времени занимает внедрение?",
      answer:
        "Для готовых решений — от 7 дней. Для корпоративных проектов — от 4 недель в зависимости от сложности интеграций.",
    },
    {
      question: "Какие языки поддерживает система?",
      answer:
        "Поддерживаем русский, английский, испанский, немецкий, французский, голландский и другие языки по запросу.",
    },
    {
      question: "Можно ли интегрировать с нашей CRM?",
      answer:
        "Да, мы интегрируемся с популярными CRM (Salesforce, HubSpot, amoCRM, Битрикс24) и можем подключить любую систему через API.",
    },
    {
      question: "Как обеспечивается безопасность данных?",
      answer:
        "Используем шифрование данных, соблюдаем GDPR, можем развернуть решение на ваших серверах для максимальной безопасности.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <Badge variant="secondary" className="mb-4">
              Решения на базе голосовых AI-ассистентов
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Автоматизируйте бизнес-процессы с помощью голосового AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Выберите готовое решение или закажите индивидуальную разработку. Наши AI-ассистенты работают 24/7 и
              увеличивают эффективность бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => openModal("trial")} data-cta="cta-try-free">
                {t("cta.tryFree")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => openModal("demo")} data-cta="cta-request-demo">
                {t("cta.requestDemo")}
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Наши решения</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <Card key={solution.href} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${solution.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <CardDescription className="text-base">{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {solution.metrics.map((metric, index) => (
                          <Badge key={index} variant="secondary" className="mr-2">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full group-hover:bg-primary/90">
                        <Link href={solution.href}>
                          Подробнее
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* How We Implement */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Как мы внедряем решения</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Проверенная методология внедрения с гарантией результата
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
              Нам доверяют компании из разных отраслей
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-sm font-medium">Логотип {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Готовы автоматизировать ваш бизнес?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Получите персональную консультацию и расчет стоимости для вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button size="lg" variant="secondary" onClick={() => openModal("consultation")} data-cta="cta-calculate">
                {t("cta.calculate")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto h-11 sm:h-12"
                onClick={() => openModal("consultation")}
                data-cta="cta-contact"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
