"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Building2, Shield, Globe, Users, Zap, Phone } from "lucide-react"
import Link from "next/link"
import { SkipLink } from "@/components/skip-link"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

export default function EnterpriseSolutionsPage({ params }: { params: { locale: Locale } }) {
  const { openModal } = useCTA()

  const industries = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Государственный сектор",
      description: "Комплексные решения для государственных учреждений с соблюдением всех требований безопасности",
      features: [
        "Соответствие ГОСТ и ФЗ-152",
        "Многоуровневая система безопасности",
        "Интеграция с ГИС и СМЭВ",
        "Поддержка многоязычности",
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Банковский сектор",
      description: "Надежные финтех-решения для банков и финансовых организаций",
      features: [
        "Банковская безопасность",
        "Соответствие ЦБ РФ",
        "Система предотвращения мошенничества",
        "24/7 техническая поддержка",
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Корпоративные клиенты",
      description: "Масштабируемые решения для крупных компаний и холдингов",
      features: [
        "Горизонтальное масштабирование",
        "Интеграция с корп. системами",
        "Продвинутая аналитика",
        "Гибкая настройка под бизнес",
      ],
    },
  ]

  const capabilities = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Высокие нагрузки",
      description: "Обработка миллионов запросов в день с минимальной задержкой",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Корпоративная безопасность",
      description: "Многоуровневая защита данных и соответствие стандартам",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Системная интеграция",
      description: "Бесшовная интеграция с существующей IT-инфраструктурой",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Высокая производительность",
      description: "Оптимизированные алгоритмы для максимальной скорости работы",
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
              Enterprise решения
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
              Корпоративные AI-решения для крупного бизнеса
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
              Масштабируемые и безопасные решения для государственного сектора, банков и крупных корпораций.
              Соответствие всем требованиям безопасности и регулирования.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button size="lg" onClick={() => openModal("consultation")} className="w-full sm:w-auto h-11 sm:h-12">
                <Phone className="mr-2 h-5 w-5" />
                Консультация
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openModal("demo")}
                className="w-full sm:w-auto h-11 sm:h-12"
              >
                Демо-версия
              </Button>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Отраслевые решения</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Специализированные AI-решения для различных сфер деятельности с учетом отраслевой специфики
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="pb-4">
                    <div className="mb-3 sm:mb-4 p-3 bg-primary/10 rounded-full w-fit">{industry.icon}</div>
                    <CardTitle className="text-xl sm:text-2xl">{industry.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 sm:space-y-3">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-12 sm:py-16 px-4 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Корпоративные возможности</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Наши решения обеспечивают надежность, безопасность и производительность на корпоративном уровне
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {capabilities.map((capability, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-3">
                    <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">{capability.icon}</div>
                    <CardTitle className="text-lg sm:text-xl">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance Section */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Безопасность и соответствие
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Максимальная защита данных</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  Наши решения соответствуют самым строгим требованиям безопасности и регулирования, обеспечивая полную
                  защиту корпоративных данных.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">GDPR соответствие</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">ISO 27001</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">End-to-end шифрование</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Аудит безопасности</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8">
                <div className="text-center">
                  <Shield className="h-16 w-16 sm:h-24 sm:w-24 mx-auto mb-4 sm:mb-6 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">99.9% гарантия безопасности</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Мы гарантируем максимальный уровень защиты ваших данных с соблюдением всех международных стандартов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Готовы к внедрению?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Свяжитесь с нами для обсуждения корпоративного решения под ваши задачи
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button size="lg" onClick={() => openModal("consultation")} className="w-full sm:w-auto h-11 sm:h-12">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto h-11 sm:h-12 bg-transparent">
                <Link href={`/${params.locale}/cases`}>Посмотреть кейсы</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
