"use client"

import { Card } from "@/components/ui/card"
import { TrendingDown, Shield, Zap, Users, BarChart3, Leaf } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

interface SmartHomeBenefitsProps {
  locale: Locale
}

export function SmartHomeBenefits({ locale }: SmartHomeBenefitsProps) {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Экономия до 40%",
      description: "Снижение расходов на электроэнергию, отопление и кондиционирование за счет умной оптимизации",
      metric: "40%",
    },
    {
      icon: Shield,
      title: "Безопасность 24/7",
      description: "Круглосуточный мониторинг, мгновенные уведомления о любых инцидентах, запись всех событий",
      metric: "100%",
    },
    {
      icon: Zap,
      title: "Быстрая установка",
      description: "Монтаж и настройка системы от 2 недель, минимальное вмешательство в существующую инфраструктуру",
      metric: "2 нед",
    },
    {
      icon: Users,
      title: "Удобство для всех",
      description: "Интуитивное управление через приложение, голосовые команды, автоматические сценарии",
      metric: "5/5",
    },
    {
      icon: BarChart3,
      title: "Полная аналитика",
      description: "Детальные отчеты по всем системам, рекомендации по оптимизации, прогнозы потребления",
      metric: "∞",
    },
    {
      icon: Leaf,
      title: "Экологичность",
      description: "Снижение углеродного следа, эффективное использование ресурсов, поддержка зеленых технологий",
      metric: "CO₂↓",
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Преимущества умного дома</h2>
          <p className="text-lg text-muted-foreground">
            Измеримые результаты и реальная польза для вашего бизнеса или дома
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{benefit.metric}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
