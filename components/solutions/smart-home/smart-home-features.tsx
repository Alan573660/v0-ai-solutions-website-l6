"use client"

import { Card } from "@/components/ui/card"
import {
  Thermometer,
  Lightbulb,
  Shield,
  Camera,
  Wind,
  Lock,
  Tv,
  Speaker,
  Wifi,
  Smartphone,
  Brain,
  Gauge,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

interface SmartHomeFeaturesProps {
  locale: Locale
}

export function SmartHomeFeatures({ locale }: SmartHomeFeaturesProps) {
  const features = [
    {
      icon: Thermometer,
      title: "Климат-контроль",
      description:
        "Автоматическое управление температурой, влажностью и вентиляцией с учетом погоды и присутствия людей",
    },
    {
      icon: Lightbulb,
      title: "Умное освещение",
      description: "Адаптивное освещение с учетом времени суток, естественного света и активности в помещении",
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Интегрированная система безопасности с видеонаблюдением, датчиками движения и контролем доступа",
    },
    {
      icon: Camera,
      title: "Видеонаблюдение",
      description:
        "AI-анализ видео в реальном времени, распознавание лиц, детекция аномалий и автоматические уведомления",
    },
    {
      icon: Wind,
      title: "Вентиляция",
      description: "Автоматическая система вентиляции с контролем качества воздуха и фильтрацией",
    },
    {
      icon: Lock,
      title: "Контроль доступа",
      description: "Биометрическая идентификация, мобильные ключи, временные доступы для гостей",
    },
    {
      icon: Tv,
      title: "Мультимедиа",
      description: "Централизованное управление аудио и видео системами во всех помещениях",
    },
    {
      icon: Speaker,
      title: "Голосовое управление",
      description: "AI-ассистент для голосового управления всеми системами умного дома на русском и английском",
    },
    {
      icon: Wifi,
      title: "Сетевая инфраструктура",
      description: "Надежная Wi-Fi сеть с покрытием всех зон, приоритизация трафика и гостевой доступ",
    },
    {
      icon: Smartphone,
      title: "Мобильное приложение",
      description: "Управление всеми системами из единого приложения с любой точки мира",
    },
    {
      icon: Brain,
      title: "AI-оптимизация",
      description: "Машинное обучение для автоматической оптимизации работы всех систем и предсказания потребностей",
    },
    {
      icon: Gauge,
      title: "Аналитика",
      description: "Детальная статистика потребления ресурсов, отчеты и рекомендации по оптимизации",
    },
  ]

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Возможности системы</h2>
          <p className="text-lg text-muted-foreground">
            Полный спектр функций для создания комфортного, безопасного и энергоэффективного пространства
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
