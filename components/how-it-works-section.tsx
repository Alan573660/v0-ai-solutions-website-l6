"use client"

import { Phone, Brain, Zap, TrendingUp } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { useCTA } from "@/components/modals/cta-provider"

interface HowItWorksSectionProps {
  locale: Locale
}

export function HowItWorksSection({ locale }: HowItWorksSectionProps) {
  const { t } = useTranslations(locale)
  const { openModal } = useCTA()

  const steps = [
    {
      number: 1,
      icon: Phone,
      title: "Клиент обращается",
      description: "AI принимает звонки, сообщения и заявки — мгновенно и без очередей.",
      points: [
        "Любой канал: телефон, чат, мессенджер",
        "Распознавание речи и текстов",
        "Подтверждение личности клиента",
      ],
    },
    {
      number: 2,
      icon: Brain,
      title: "AI анализирует запрос",
      description: "Определяет суть обращения и намерение клиента.",
      points: ["Понимание контекста и эмоций", "Распознавание данных и целей", "Определение нужного сценария"],
    },
    {
      number: 3,
      icon: Zap,
      title: "Выполняет действия",
      description: "AI применяет бизнес-логику и выполняет нужные операции.",
      points: ["Расчёт стоимости и сроков", "Создание документов и КП", "Обновление CRM и отправка ответа"],
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Учится и улучшает",
      description: "Каждый диалог анализируется, чтобы повышать точность и скорость.",
      points: ["Автоматическое обучение на данных", "Оптимизация сценариев", "Рост конверсии и качества ответов"],
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#F7F7FA]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#1E1E26]">Как работает AI-ассистент</h2>
          <p className="text-lg sm:text-xl text-[#8E8EA0] leading-relaxed">
            Простая схема, как мы превращаем обращения клиентов в готовые решения — от звонка до аналитики.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="p-6 rounded-xl border border-[#E0E0E7] bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-[#7C3AED]">{step.number}</span>
                  </div>
                  <Icon className="h-8 w-8 text-[#7C3AED]" />
                </div>

                <h3 className="text-xl font-bold text-[#1E1E26] mb-3">{step.title}</h3>
                <p className="text-[#8E8EA0] mb-4 leading-relaxed">{step.description}</p>

                <ul className="space-y-2">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#8E8EA0]">
                      <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-[#7C3AED] mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-lg text-[#8E8EA0]">Всё работает автоматически — без участия оператора.</p>
        </div>
      </div>
    </section>
  )
}
