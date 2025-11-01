"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, TrendingUp, Clock, DollarSign, Zap } from "lucide-react"
import { SkipLink } from "@/components/skip-link"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

export default function SMBSolutionsPage({ params }: { params: { locale: Locale } }) {
  const { openModal } = useCTA()
  const t = useTranslations()

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Улучшение обслуживания клиентов",
      description: "AI-ассистент работает 24/7, обрабатывая запросы клиентов мгновенно и профессионально",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Увеличение продаж",
      description: "Автоматическая квалификация лидов и персонализированные предложения для каждого клиента",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Экономия времени",
      description: "Освободите сотрудников от рутинных задач для более важной работы",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Снижение затрат",
      description: "Сократите расходы на персонал и увеличьте эффективность бизнес-процессов",
    },
  ]

  const plans = [
    {
      name: "Стартер",
      price: "от 15 000 ₽/мес",
      description: "Идеально для начинающих компаний",
      features: ["До 500 звонков в месяц", "2 языка общения", "Базовая поддержка", "Простая аналитика"],
      popular: false,
    },
    {
      name: "Бизнес",
      price: "от 45 000 ₽/мес",
      description: "Для растущих компаний",
      features: [
        "До 2000 звонков в месяц",
        "5 языков общения",
        "Интеграция с CRM",
        "Настройка сценариев",
        "Приоритетная поддержка",
        "Расширенная аналитика",
      ],
      popular: true,
    },
    {
      name: "Рост",
      price: "от 85 000 ₽/мес",
      description: "Для масштабирования бизнеса",
      features: [
        "Неограниченные звонки",
        "Все языки",
        "Полная интеграция",
        "Индивидуальные сценарии",
        "Мультиканальность",
        "Персональный менеджер",
        "AI-аналитика",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SkipLink />

      <main id="main-content" role="main" tabIndex={-1}>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Для МСБ
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
              AI-решения для малого и среднего бизнеса
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
              Автоматизируйте обслуживание клиентов и увеличьте продажи с помощью голосовых AI-ассистентов. Доступные
              тарифы и быстрое внедрение.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button size="lg" onClick={() => openModal("trial")} className="w-full sm:w-auto h-11 sm:h-12">
                <Zap className="mr-2 h-5 w-5" />
                Попробовать бесплатно
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openModal("consultation")}
                className="w-full sm:w-auto h-11 sm:h-12"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Преимущества для вашего бизнеса
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Наши AI-ассистенты помогут вам улучшить обслуживание клиентов и увеличить прибыль
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-3">
                    <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">{feature.icon}</div>
                    <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 px-4 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Тарифные планы</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Выберите подходящий тариф для вашего бизнеса. Все планы включают бесплатный тестовый звонок.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg md:scale-105" : ""}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Популярный</Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl sm:text-4xl font-bold text-primary">{plan.price}</div>
                    <CardDescription className="text-sm sm:text-base">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 sm:space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full h-10 sm:h-11"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => openModal("consultation")}
                    >
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Готовы начать?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Запустите AI-ассистента для вашего бизнеса уже сегодня и увидьте результаты в первую неделю
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button size="lg" onClick={() => openModal("trial")} className="w-full sm:w-auto h-11 sm:h-12">
                Попробовать бесплатно
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openModal("consultation")}
                className="w-full sm:w-auto h-11 sm:h-12"
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
