"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Check,
  Play,
  Building2,
  ShoppingBag,
  Briefcase,
  Truck,
  Phone,
  Shield,
  Zap,
  ChevronRight,
  Quote,
  Calculator,
  Database,
  Brain,
  Settings,
  Globe,
  Receipt,
  UserCheck,
  Package,
  History,
  Layers,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface M2AgentsPageProps {
  locale: Locale
}

export function M2AgentsPage({ locale }: M2AgentsPageProps) {
  const { openModal } = useCTA()
  const [activeCapability, setActiveCapability] = useState(0)
  const [activeIndustry, setActiveIndustry] = useState(0)

  const capabilities = [
    {
      icon: Calculator,
      title: "Работа с прайс-листами",
      description: "Мгновенный просчет из 5000+ позиций с учетом скидок, акций и персональных условий",
      features: [
        "Поиск по 5000+ товарных позиций за секунды",
        "Автоматический расчет скидок и наценок",
        "Учет остатков на складе в реальном времени",
        "Формирование коммерческих предложений",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Truck,
      title: "Логистика и доставка",
      description: "Полный расчет маршрутов, стоимости и подбор транспорта по габаритам груза",
      features: [
        "Расчет километража и оптимальных маршрутов",
        "Подбор транспорта по тоннажу и габаритам",
        "Интеграция с логистическими компаниями",
        "Отслеживание статуса доставки",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Receipt,
      title: "Счета и документы",
      description: "Автоматическое формирование счетов, КП и актов на основе диалога с клиентом",
      features: [
        "Парсинг реквизитов из входящих писем",
        "Генерация счетов в PDF за секунды",
        "Формирование коммерческих предложений",
        "Отправка документов на email клиента",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: UserCheck,
      title: "Узнавание клиентов",
      description: "AI помнит каждого клиента, его историю заказов и предпочтения",
      features: [
        "Идентификация по номеру телефона и email",
        "Полная история заказов и обращений",
        "Персональные рекомендации на основе истории",
        "Автоматическое обновление данных в CRM",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const industries = [
    {
      icon: Building2,
      name: "Строительство и стройматериалы",
      description: "Расчет профлиста, кровли, ограждений с учетом всех параметров и доставки",
      metrics: { value: "+156%", label: "рост продаж" },
      cases: [
        "Расчет кровли по площади",
        "Подбор материалов по бюджету",
        "Калькуляция доставки",
        "Формирование счетов",
      ],
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: Truck,
      name: "Логистика и грузоперевозки",
      description: "Автоматический расчет маршрутов, подбор транспорта и оформление заявок",
      metrics: { value: "3 мин", label: "на заявку" },
      cases: ["Расчет стоимости перевозки", "Подбор авто по габаритам", "Построение маршрутов", "Отслеживание грузов"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: ShoppingBag,
      name: "Оптовая торговля",
      description: "Работа с каталогом 5000+ SKU, персональные цены и автоматизация заказов",
      metrics: { value: "24/7", label: "прием заказов" },
      cases: ["Поиск по каталогу", "Персональные скидки", "Резерв на складе", "Повторные заказы"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: Briefcase,
      name: "B2B услуги",
      description: "Квалификация лидов, запись на встречи и полное сопровождение сделки",
      metrics: { value: "-60%", label: "времени менеджера" },
      cases: ["Квалификация заявок", "Запись на демо", "Отправка КП", "Напоминания о встречах"],
      gradient: "from-purple-500 to-violet-600",
    },
  ]

  const platformFeatures = [
    {
      icon: Brain,
      title: "Думающие модели",
      description: "GPT-4, Claude и собственные модели, обученные на вашей специфике",
    },
    {
      icon: Database,
      title: "Интеграция с базами",
      description: "1C, МойСклад, любые ERP и CRM системы через API",
    },
    {
      icon: Globe,
      title: "Омниканальность",
      description: "Телефония, WhatsApp, Telegram, email, сайт в одном окне",
    },
    {
      icon: Settings,
      title: "SaaS-платформа",
      description: "Конструктор для создания агентов без программирования",
    },
    {
      icon: History,
      title: "Память клиентов",
      description: "Полная история взаимодействий и персонализация",
    },
    {
      icon: Layers,
      title: "Масштабирование",
      description: "От 10 до 10 000 диалогов одновременно",
    },
  ]

  const stats = [
    { value: "5000+", label: "Позиций в прайсе", icon: Package },
    { value: "<3 сек", label: "Расчет стоимости", icon: Zap },
    { value: "50+", label: "Интеграций", icon: Layers },
    { value: "99.9%", label: "Uptime", icon: Shield },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Погружение в бизнес",
      duration: "2-3 дня",
      description:
        "Изучаем вашу специфику: товары, услуги, скрипты продаж, частые вопросы клиентов, прайс-листы и бизнес-логику.",
    },
    {
      number: "02",
      title: "Настройка AI",
      duration: "5-7 дней",
      description: "Обучаем агента вашим товарам, ценам, условиям. Настраиваем интеграции с CRM, 1C, телефонией.",
    },
    {
      number: "03",
      title: "Тестовый запуск",
      duration: "3-5 дней",
      description: "Пилот на реальных клиентах с контролем качества. Доработка сценариев по результатам.",
    },
    {
      number: "04",
      title: "Полный запуск",
      duration: "Постоянно",
      description: "Передача в эксплуатацию, мониторинг, аналитика и постоянное улучшение на основе данных.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Агент за месяц обработал 3000+ заявок на расчет профлиста. Конверсия в продажу выросла с 12% до 34%. Менеджеры теперь занимаются только крупными сделками.",
      author: "Дмитрий Козлов",
      position: "Коммерческий директор",
      company: "МеталлПром",
      metric: { value: "+183%", label: "рост конверсии" },
    },
    {
      quote:
        "AI сам рассчитывает маршруты, подбирает машины по тоннажу и оформляет заявки. Время обработки заказа сократилось с 40 минут до 3.",
      author: "Елена Сидорова",
      position: "Руководитель логистики",
      company: "ТрансЛогистик",
      metric: { value: "3 мин", label: "на заявку" },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with gradient background */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/80">Платформа нового поколения</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              AI-агенты которые
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                продают за вас
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Мгновенный расчет из 5000+ позиций, формирование счетов, логистика и полная автоматизация продаж. Агент
              помнит каждого клиента.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => openModal("consultation")}
                className="h-14 px-8 text-base bg-white text-slate-900 hover:bg-slate-100"
              >
                Запросить демо
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Смотреть как работает
              </Button>
            </div>

            {/* Stats in hero */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section with colors */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Что умеет AI-агент</h2>
            <p className="text-xl text-muted-foreground">
              Полная автоматизация продаж: от первого звонка до выставления счета и контроля оплаты.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Capability tabs */}
            <div className="space-y-3">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon
                return (
                  <button
                    key={cap.title}
                    onClick={() => setActiveCapability(idx)}
                    className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer ${
                      activeCapability === idx
                        ? "bg-gradient-to-r " + cap.color + " text-white shadow-lg"
                        : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl ${activeCapability === idx ? "bg-white/20" : "bg-white dark:bg-slate-700"}`}
                      >
                        <Icon className={`w-5 h-5 ${activeCapability === idx ? "text-white" : ""}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{cap.title}</h3>
                        <p
                          className={`text-sm mt-1 ${activeCapability === idx ? "text-white/80" : "text-muted-foreground"}`}
                        >
                          {cap.description}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${activeCapability === idx ? "rotate-90" : ""}`}
                      />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Capability detail */}
            <div className={`rounded-2xl p-8 bg-gradient-to-br ${capabilities[activeCapability].color} text-white`}>
              {(() => {
                const Icon = capabilities[activeCapability].icon
                return (
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                )
              })()}
              <h3 className="text-2xl font-bold mb-4">{capabilities[activeCapability].title}</h3>
              <p className="text-white/80 mb-8">{capabilities[activeCapability].description}</p>

              <ul className="space-y-4">
                {capabilities[activeCapability].features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => openModal("consultation")}
                className="w-full mt-8 bg-white text-slate-900 hover:bg-slate-100"
              >
                Обсудить внедрение
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries with gradients */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Готовые решения для отраслей</h2>
            <p className="text-xl text-muted-foreground">
              AI-агенты с глубоким пониманием специфики вашего бизнеса, обученные на реальных кейсах.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Card key={industry.name} className="group overflow-hidden hover:shadow-xl transition-all">
                  <div className={`h-2 bg-gradient-to-r ${industry.gradient}`} />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${industry.gradient}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{industry.metrics.value}</div>
                        <div className="text-xs text-muted-foreground">{industry.metrics.label}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>

                    <div className="grid grid-cols-2 gap-2">
                      {industry.cases.map((useCase) => (
                        <div key={useCase} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works - compact */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Запуск за 2-3 недели</h2>
            <p className="text-xl text-muted-foreground">
              Прозрачный процесс от первой встречи до работающего агента с гарантией результата.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-slate-200 dark:text-slate-800 mb-3">{step.number}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium mb-3">
                  {step.duration}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with gradient */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Результаты клиентов</h2>
            <p className="text-xl text-slate-300">
              Реальные кейсы компаний, которые автоматизировали продажи с M2 Agents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <Quote className="w-8 h-8 text-white/20 mb-4" />
                <blockquote className="text-lg leading-relaxed mb-6">{testimonial.quote}</blockquote>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{testimonial.metric.value}</div>
                    <div className="text-xs text-slate-400">{testimonial.metric.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Готовы автоматизировать продажи?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Оставьте заявку на бесплатную консультацию. Покажем демо и рассчитаем окупаемость для вашего бизнеса.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => openModal("consultation")}
              className="h-14 px-8 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Получить консультацию
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              +7 (495) 123-45-67
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Бесплатная консультация</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Демо на ваших данных</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Расчет ROI</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default M2AgentsPage
