"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Locale } from "@/lib/i18n/config"

interface SmartHomeTechnologyProps {
  locale: Locale
}

export function SmartHomeTechnology({ locale }: SmartHomeTechnologyProps) {
  const technologies = [
    {
      category: "Протоколы и стандарты",
      items: [
        { name: "KNX", description: "Международный стандарт автоматизации зданий" },
        { name: "Zigbee", description: "Беспроводная mesh-сеть для IoT устройств" },
        { name: "Z-Wave", description: "Надежный протокол для умного дома" },
        { name: "Matter", description: "Новый универсальный стандарт" },
      ],
    },
    {
      category: "AI и аналитика",
      items: [
        { name: "Машинное обучение", description: "Предсказание потребностей и оптимизация" },
        { name: "Компьютерное зрение", description: "Анализ видео и распознавание" },
        { name: "NLP", description: "Голосовое управление на естественном языке" },
        { name: "Предиктивная аналитика", description: "Прогнозирование и предотвращение проблем" },
      ],
    },
    {
      category: "Интеграции",
      items: [
        { name: "Alexa, Google Home", description: "Голосовые ассистенты" },
        { name: "Apple HomeKit", description: "Экосистема Apple" },
        { name: "IFTTT", description: "Автоматизация и сценарии" },
        { name: "Custom API", description: "Интеграция с любыми системами" },
      ],
    },
    {
      category: "Безопасность",
      items: [
        { name: "End-to-end шифрование", description: "Защита данных" },
        { name: "Локальное хранение", description: "Данные остаются у вас" },
        { name: "Двухфакторная аутентификация", description: "Дополнительная защита" },
        { name: "Регулярные обновления", description: "Актуальная защита" },
      ],
    },
  ]

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Технологии и стандарты</h2>
          <p className="text-lg text-muted-foreground">
            Используем проверенные решения и современные технологии для надежной работы системы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <Card key={index} className="p-8">
              <h3 className="text-xl font-bold mb-6">{tech.category}</h3>
              <div className="space-y-4">
                {tech.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 flex-shrink-0">
                      {item.name}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
