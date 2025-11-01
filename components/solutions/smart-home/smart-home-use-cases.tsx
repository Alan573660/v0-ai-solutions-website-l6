"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, Briefcase, Hotel, ArrowRight } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface SmartHomeUseCasesProps {
  locale: Locale
}

export function SmartHomeUseCases({ locale }: SmartHomeUseCasesProps) {
  const { openModal } = useCTA()

  const useCases = [
    {
      icon: Hotel,
      title: "Отели и гостиницы",
      description: "Автоматизация номеров, энергосбережение, персонализированный комфорт для гостей",
      features: [
        "Автоматическая подготовка номера к заселению",
        "Персональные настройки климата и освещения",
        "Голосовой консьерж на нескольких языках",
        "Интеграция с системой управления отелем",
      ],
    },
    {
      icon: Building2,
      title: "Жилые комплексы",
      description: "Умные квартиры, общие пространства, безопасность и комфорт для жильцов",
      features: [
        "Единая система безопасности комплекса",
        "Умное управление общими зонами",
        "Мобильный доступ для жильцов и гостей",
        "Мониторинг инженерных систем",
      ],
    },
    {
      icon: Briefcase,
      title: "Офисы и бизнес-центры",
      description: "Эффективное использование пространства, комфорт сотрудников, экономия ресурсов",
      features: [
        "Бронирование переговорных комнат",
        "Адаптивное освещение рабочих зон",
        "Контроль доступа сотрудников",
        "Аналитика использования пространства",
      ],
    },
    {
      icon: Home,
      title: "Частные дома",
      description: "Максимальный комфорт, безопасность семьи, экономия на коммунальных услугах",
      features: [
        "Сценарии для разных ситуаций",
        "Удаленный мониторинг и управление",
        "Интеграция с домашним кинотеатром",
        "Умный полив и ландшафт",
      ],
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Решения для любого объекта</h2>
          <p className="text-lg text-muted-foreground">Адаптируем систему под специфику вашего бизнеса или дома</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{useCase.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{useCase.description}</p>

                  <ul className="space-y-3">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-transparent"
                    onClick={() => openModal("consultation")}
                  >
                    Узнать подробнее
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
