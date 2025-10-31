"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

interface PlatformFeaturesSectionProps {
  locale: Locale
}

export function PlatformFeaturesSection({ locale }: PlatformFeaturesSectionProps) {
  const features = [
    "Мультиязычная поддержка",
    "Настройка и обучение менеджеров",
    "Загрузка данных компании",
    "Запись и анализ звонков",
    "Интеграция с CRM системами",
    "Email и чат интеграция",
    "Workflow автоматизация",
    "Аналитика и отчетность",
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E26] mb-4">
            Полнофункциональная SaaS-платформа
          </h2>
          <p className="text-lg text-[#8E8EA0] max-w-3xl mx-auto">
            Управляйте голосовыми AI-ассистентами через интуитивный интерфейс. Настраивайте, обучайте и анализируйте
            работу ваших виртуальных менеджеров.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1E26] mb-6">Визуальный конструктор workflow</h3>
            <p className="text-lg text-[#8E8EA0] mb-6">
              Создавайте сложные сценарии обработки звонков и заявок с помощью drag-and-drop интерфейса. Настраивайте
              логику работы AI-ассистента под ваш бизнес без программирования.
            </p>
            <ul className="space-y-3">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#22D3EE] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1E1E26]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative bg-white border border-[#E1E3EB] rounded-2xl p-4 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-faumQMrOgLysYaiixj3knXQS5GnJk7.png"
                alt="Workflow Builder - Visual Automation Constructor"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative bg-white border border-[#E1E3EB] rounded-2xl p-4 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7wGvCJuYhzr2pUKvjwa2t2pipQeu0x.png"
                alt="Analytics Dashboard - Real-time Statistics"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1E26] mb-6">Детальная аналитика и мониторинг</h3>
            <p className="text-lg text-[#8E8EA0] mb-6">
              Отслеживайте эффективность работы AI-ассистентов в реальном времени. Анализируйте звонки, конверсию, время
              ответа и другие ключевые метрики для оптимизации бизнес-процессов.
            </p>
            <ul className="space-y-3">
              {features.slice(4).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1E1E26]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#7C3AED]/10 to-[#22D3EE]/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1E26] mb-4">
              Интеграция с ведущими AI-провайдерами
            </h3>
            <p className="text-lg text-[#8E8EA0] mb-8">
              Наша платформа интегрирована с лучшими нейросетями и AI-моделями. Голосовые ассистенты практически
              неотличимы от живых менеджеров и справляются с задачами даже лучше человека.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tR7lB6uO1iZThgfpLQdZc6uEVSQWDN.png"
                  alt="OpenAI"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JBQm9vJDg6pVRXdl4yY21ft8buqMtQ.png"
                  alt="Google Gemini"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KgvwnRbZ6qzLthN5BPf69LLLU0UpMm.png"
                  alt="DeepSeek"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aerRzvWXjvP3pXM6zOB2aMghUA0K00.png"
                  alt="Yandex"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dtTJ7Y3X1IBT1pbU7H7mqTNLqTj0Kb.png"
                  alt="xAI Grok"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
