"use client"

import { Star, Quote } from "lucide-react"
import { useTranslations, type Locale } from "@/lib/i18n/translations"

export function TestimonialsSection({ locale }: { locale: Locale }) {
  const { t } = useTranslations(locale)

  const testimonials = [
    {
      name: "Алексей Петров",
      role: "Директор по развитию",
      company: "TechCorp",
      avatar: "/business-man-avatar.png",
      content:
        "AI-ассистент M2 увеличил нашу конверсию на 40% и полностью автоматизировал обработку входящих звонков. Теперь мы не теряем ни одного лида.",
      rating: 5,
      metrics: "+40% конверсия",
    },
    {
      name: "Мария Соколова",
      role: "Управляющая отелем",
      company: "Grand Hotel",
      avatar: "/business-woman-avatar.png",
      content:
        "Гости в восторге от AI-консьержа! Они могут заказать всё что нужно прямо из номера. Это значительно повысило уровень сервиса.",
      rating: 5,
      metrics: "95% довольных гостей",
    },
    {
      name: "Дмитрий Волков",
      role: "Основатель",
      company: "StartupXYZ",
      avatar: "/startup-founder-avatar.png",
      content:
        "Как стартап, мы не могли позволить себе большой отдел продаж. AI-ассистент решил эту проблему - работает как целая команда менеджеров.",
      rating: 5,
      metrics: "10x ROI",
    },
  ]

  const stats = [
    { value: "500+", label: "Довольных клиентов" },
    { value: "2M+", label: "Обработанных звонков" },
    { value: "35%", label: "Средний рост конверсии" },
    { value: "24/7", label: "Время работы" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Что говорят наши клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Реальные отзывы компаний, которые уже используют AI-ассистентов M2
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border rounded-xl p-6 relative">
              {/* Quote icon */}
              <div className="absolute -top-3 left-6">
                <div className="bg-primary rounded-full p-2">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>

                {/* Metrics */}
                <div className="bg-primary/5 rounded-lg p-3">
                  <div className="text-sm font-semibold text-primary">{testimonial.metrics}</div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-muted/30 rounded-2xl p-8">
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
