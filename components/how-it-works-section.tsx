"use client"

import { Phone, Database, Brain, Zap, FileText, CheckCircle, ArrowRight } from "lucide-react"
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
      description: "AI принимает обращение через любой канал связи — мгновенно и без очередей",
      details: [
        "Телефонные звонки с распознаванием речи",
        "Чаты и мессенджеры (WhatsApp, Telegram)",
        "Email и веб-формы на сайте",
        "Подтверждение личности и контекста",
      ],
      color: "bg-blue-500",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      number: 2,
      icon: Brain,
      title: "AI анализирует запрос",
      description: "Определяет суть обращения, намерение клиента и необходимые действия",
      details: [
        "Понимание контекста и эмоционального тона",
        "Распознавание ключевых данных и целей",
        "Определение типа запроса (продажа, консультация, поддержка)",
        "Выбор оптимального сценария обработки",
      ],
      color: "bg-purple-500",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      number: 3,
      icon: Database,
      title: "Обращается к базе знаний",
      description: "AI использует обученную базу данных, документы и бизнес-логику вашей компании",
      details: [
        "Доступ к продуктовому каталогу и прайс-листам",
        "Использование обучающих материалов и скриптов",
        "Проверка актуальных данных о наличии и сроках",
        "Применение правил и политик компании",
      ],
      color: "bg-teal-500",
      gradient: "from-teal-500/10 to-green-500/10",
    },
    {
      number: 4,
      icon: Zap,
      title: "Выполняет действия",
      description: "AI применяет бизнес-логику и выполняет необходимые операции автоматически",
      details: [
        "Расчёт стоимости, сроков и условий доставки",
        "Проверка логистики и доступности товара",
        "Создание коммерческих предложений и договоров",
        "Обновление данных в CRM и учётных системах",
      ],
      color: "bg-orange-500",
      gradient: "from-orange-500/10 to-red-500/10",
    },
    {
      number: 5,
      icon: FileText,
      title: "Выдаёт ответ клиенту",
      description: "AI формирует персонализированный ответ и отправляет его клиенту",
      details: [
        "Подготовка детального ответа с расчётами",
        "Отправка документов и коммерческих предложений",
        "Ответы на дополнительные вопросы клиента",
        "Фиксация всех договорённостей в системе",
      ],
      color: "bg-indigo-500",
      gradient: "from-indigo-500/10 to-purple-500/10",
    },
    {
      number: 6,
      icon: CheckCircle,
      title: "Доводит до сделки",
      description: "AI сопровождает клиента до завершения сделки и анализирует результаты",
      details: [
        "Напоминания и follow-up по договорённостям",
        "Обработка возражений и дополнительных запросов",
        "Оформление заказа и контроль оплаты",
        "Анализ диалога для улучшения конверсии",
      ],
      color: "bg-green-500",
      gradient: "from-green-500/10 to-emerald-500/10",
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#F7F7FA]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#1E1E26]">Как работает AI-ассистент</h2>
          <p className="text-lg sm:text-xl text-[#8E8EA0] leading-relaxed">
            Полный цикл обработки обращения — от первого контакта до закрытия сделки. Всё автоматически, без участия
            оператора.
          </p>
        </div>

        {/* Visual Flow */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Arrow - only show between steps, not after last */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-3 lg:-right-4 z-10">
                    <ArrowRight className="h-6 w-6 text-[#7C3AED]" />
                  </div>
                )}

                {/* Step Card */}
                <div
                  className={`relative p-6 rounded-xl border border-[#E0E0E7] bg-white hover:shadow-lg transition-all duration-300 h-full`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Number */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`flex-shrink-0 h-12 w-12 rounded-full ${step.color} flex items-center justify-center`}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-[#7C3AED]">{step.number}</span>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold text-[#1E1E26] mb-3">{step.title}</h3>
                    <p className="text-[#8E8EA0] mb-4 leading-relaxed text-sm">{step.description}</p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#8E8EA0]">
                          <div className={`flex-shrink-0 h-1.5 w-1.5 rounded-full ${step.color} mt-1.5`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#7C3AED]/10 to-[#22D3EE]/10 border border-[#7C3AED]/20">
            <p className="text-lg text-[#1E1E26] mb-4 font-medium">
              Весь процесс работает автоматически — AI обучен на ваших данных, документах и бизнес-процессах
            </p>
            <p className="text-[#8E8EA0] mb-6">
              Качество работы зависит от того, как вы настроите промпты, какие документы загрузите и как обучите
              ассистента — точно как реального менеджера
            </p>
            <button
              onClick={() => openModal("demo")}
              className="px-6 py-3 bg-[#7C3AED] text-white rounded-lg font-medium hover:bg-[#6D2FD4] transition-colors"
            >
              Посмотреть демо
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
