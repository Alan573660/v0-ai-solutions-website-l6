"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Globe, Lock, BarChart3, Headphones } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { PlatformCTAButtons } from "@/components/platform/platform-cta-buttons"

interface PlatformPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { locale } = await params
  const { t } = useTranslations(locale)

  const platformFeatures = [
    {
      title: "Архитектура платформы",
      description: "Масштабируемая инфраструктура с высокой доступностью",
      icon: Zap,
      href: `/${locale}/platform/architecture`,
      highlights: ["99.9% SLA", "Автомасштабирование", "Микросервисы"],
    },
    {
      title: "Демонстрация",
      description: "Интерактивные демо и примеры голосовых диалогов",
      icon: Headphones,
      href: `/${locale}/platform/demo`,
      highlights: ["Голосовой виджет", "Аудио примеры", "Живые звонки"],
    },
    {
      title: "Калькулятор стоимости",
      description: "Рассчитайте стоимость решения для ваших задач",
      icon: BarChart3,
      href: `/${locale}/platform/pricing-calculator`,
      highlights: ["Гибкая настройка", "Мгновенный расчет", "PDF отчет"],
    },
  ]

  const securityFeatures = [
    {
      title: "Шифрование данных",
      description: "End-to-end шифрование всех голосовых данных и метаданных",
      icon: Lock,
    },
    {
      title: "GDPR соответствие",
      description: "Полное соблюдение европейских требований по защите данных",
      icon: Shield,
    },
    {
      title: "Географическое размещение",
      description: "Данные хранятся в выбранном регионе согласно требованиям",
      icon: Globe,
    },
  ]

  const stats = [
    { value: "99.9%", label: "Время работы" },
    { value: "<100ms", label: "Задержка ответа" },
    { value: "50+", label: "Языков поддержки" },
    { value: "24/7", label: "Техподдержка" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <Badge variant="secondary" className="mb-4">
              Платформа AI Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Корпоративная платформа для голосовых AI-решений
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Масштабируемая, безопасная и надежная инфраструктура для развертывания голосовых AI-ассистентов любой
              сложности
            </p>
            <PlatformCTAButtons locale={locale} t={t} />
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Возможности платформы</h2>
              <p className="text-xl text-muted-foreground">
                Изучите архитектуру, попробуйте демо и рассчитайте стоимость
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {feature.highlights.map((highlight, highlightIndex) => (
                          <Badge key={highlightIndex} variant="secondary" className="mr-2">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full group-hover:bg-primary/90">
                        <Link href={feature.href}>
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

        {/* Security Section */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Безопасность и соответствие</h2>
              <p className="text-xl text-muted-foreground">
                Корпоративный уровень безопасности для критически важных систем
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index}>
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Architecture Preview */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Современная архитектура</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Микросервисная архитектура с автоматическим масштабированием и отказоустойчивостью
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <strong>Горизонтальное масштабирование:</strong> Автоматическое добавление ресурсов при росте
                      нагрузки
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <strong>Отказоустойчивость:</strong> Резервирование критических компонентов и быстрое
                      восстановление
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <strong>Мониторинг:</strong> Полная наблюдаемость системы с алертами и метриками
                    </div>
                  </li>
                </ul>
                <Button asChild data-cta="cta-architecture">
                  <Link href={`/${locale}/platform/architecture`}>
                    Изучить архитектуру
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Simplified architecture diagram */}
                    <div className="col-span-3 text-center mb-4">
                      <div className="bg-blue-500 text-white rounded-lg p-3 text-sm font-medium">Голосовой ввод</div>
                    </div>
                    <div className="bg-green-500 text-white rounded-lg p-3 text-center text-sm font-medium">ASR</div>
                    <div className="bg-purple-500 text-white rounded-lg p-3 text-center text-sm font-medium">LLM</div>
                    <div className="bg-orange-500 text-white rounded-lg p-3 text-center text-sm font-medium">TTS</div>
                    <div className="col-span-3 grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-500 text-white rounded-lg p-3 text-center text-sm font-medium">CRM</div>
                      <div className="bg-gray-500 text-white rounded-lg p-3 text-center text-sm font-medium">
                        Биллинг
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы изучить платформу подробнее?</h2>
            <p className="text-xl mb-8 opacity-90">
              Получите техническую документацию и персональную демонстрацию возможностей
            </p>
            <PlatformCTAButtons locale={locale} t={t} variant="footer" />
          </div>
        </section>
      </main>
    </div>
  )
}
