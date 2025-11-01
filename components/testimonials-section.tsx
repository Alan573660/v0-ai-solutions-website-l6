"use client"

import { Star, ThumbsUp, MapPin } from "lucide-react"
import { useTranslations, type Locale } from "@/lib/i18n/translations"
import Image from "next/image"

export function TestimonialsSection({ locale }: { locale: Locale }) {
  const { t } = useTranslations(locale)

  const testimonials = [
    {
      name: "Алексей Петров",
      role: "Директор по развитию",
      company: "TechCorp",
      location: "Москва, Россия",
      avatar: "/business-man.jpg",
      content:
        "AI-ассистент M2 увеличил нашу конверсию на 40% и полностью автоматизировал обработку входящих звонков. Теперь мы не теряем ни одного лида. Команда поддержки всегда на связи, интеграция с нашей CRM прошла без проблем.",
      rating: 5,
      date: "2 недели назад",
      helpful: 24,
      platform: "Google",
    },
    {
      name: "Мария Соколова",
      role: "Управляющая отелем",
      company: "Grand Hotel",
      location: "Санкт-Петербург, Россия",
      avatar: "/business-woman.jpg",
      content:
        "Гости в восторге от AI-консьержа! Они могут заказать всё что нужно прямо из номера. Это значительно повысило уровень сервиса и освободило время персонала для более важных задач. Рекомендую всем отелям!",
      rating: 5,
      date: "1 месяц назад",
      helpful: 18,
      platform: "Yandex",
    },
    {
      name: "Дмитрий Волков",
      role: "Основатель",
      company: "StartupXYZ",
      location: "Казань, Россия",
      avatar: "/startup-founder.jpg",
      content:
        "Как стартап, мы не могли позволить себе большой отдел продаж. AI-ассистент решил эту проблему - работает как целая команда менеджеров. ROI окупился за первый месяц. Лучшее решение для малого бизнеса!",
      rating: 5,
      date: "3 недели назад",
      helpful: 31,
      platform: "Google",
    },
  ]

  const stats = [
    { value: "500+", label: "Довольных клиентов" },
    { value: "2M+", label: "Обработанных звонков" },
    { value: "35%", label: "Средний рост конверсии" },
    { value: "24/7", label: "Время работы" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Что говорят наши клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Реальные отзывы компаний, которые уже используют AI-ассистентов M2
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header with avatar and info */}
              <div className="flex items-start space-x-3 mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {testimonial.role} • {testimonial.company}
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate">{testimonial.location}</span>
                  </div>
                </div>
              </div>

              {/* Rating and date */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{testimonial.date}</span>
              </div>

              {/* Review content */}
              <p className="text-sm text-foreground leading-relaxed mb-4">{testimonial.content}</p>

              {/* Footer with helpful count and platform */}
              <div className="flex items-center justify-between pt-3 border-t">
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <ThumbsUp className="h-3.5 w-3.5" />
                  <span>Полезно ({testimonial.helpful})</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Отзыв с{" "}
                  <span className="font-medium">{testimonial.platform === "Google" ? "Google" : "Яндекс.Карт"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-background rounded-2xl p-8 border shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
