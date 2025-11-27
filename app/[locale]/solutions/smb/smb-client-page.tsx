"use client"

import { useTranslations } from "@/lib/i18n/translations"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Zap,
  ArrowRight,
  Sparkles,
  Target,
  Rocket,
  Brain,
  Settings,
  HeadphonesIcon,
  Code,
  Shield,
  Award,
  Star,
  MessageSquare,
} from "lucide-react"
import { SkipLink } from "@/components/skip-link"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"
import Image from "next/image"

export function SMBClientPage({ params }: { params: { locale: Locale } }) {
  const { openModal } = useCTA()
  const { t } = useTranslations(params.locale as any)

  const team = [
    {
      name: "Алексей Иванов",
      role: "Технический директор",
      experience: "12 лет в AI/ML",
      image: "/professional-tech-director.jpg",
      achievements: "Запустил 50+ AI-проектов",
    },
    {
      name: "Мария Петрова",
      role: "Руководитель проектов",
      experience: "8 лет в автоматизации",
      image: "/professional-project-manager-woman.jpg",
      achievements: "Автоматизировала 30+ компаний",
    },
    {
      name: "Дмитрий Соколов",
      role: "Эксперт по интеграциям",
      experience: "10 лет в разработке",
      image: "/professional-software-engineer.jpg",
      achievements: "Интегрировал 100+ систем",
    },
  ]

  const clientCases = [
    {
      company: "Строительная компания",
      industry: "Строительство",
      size: "45 сотрудников",
      problem: "Менеджеры не успевали обрабатывать заявки на расчёт кровли",
      solution: "AI-менеджер принимает звонки 24/7, рассчитывает стоимость и создаёт сделки в CRM",
      results: ["+120% обработанных заявок", "+87% конверсия в сделку", "3 менеджера освобождены для сложных задач"],
      timeline: "2 недели внедрение",
      icon: "🏗️",
    },
    {
      company: "Интернет-магазин",
      industry: "E-commerce",
      size: "28 сотрудников",
      problem: "Клиенты уходили из-за долгого ожидания ответа оператора",
      solution: "AI-консультант отвечает мгновенно, консультирует по товарам и оформляет заказы",
      results: ["+340% скорость ответа", "+65% повторных покупок", "Снижение оттока на 42%"],
      timeline: "10 дней внедрение",
      icon: "🛍️",
    },
    {
      company: "Медицинский центр",
      industry: "Медицина",
      size: "72 сотрудника",
      problem: "Администраторы не справлялись с записью пациентов в пиковые часы",
      solution: "AI-ассистент записывает на приём, напоминает о визите и собирает обратную связь",
      results: [
        "-85% пропущенных звонков",
        "+95% заполненность расписания",
        "2 администратора переведены на другие задачи",
      ],
      timeline: "3 недели внедрение",
      icon: "⚕️",
    },
  ]

  const trustIndicators = [
    {
      icon: Shield,
      title: "Гарантия результата",
      description: "Если не увидите рост конверсии в первый месяц — вернём деньги",
    },
    {
      icon: Award,
      title: "10+ лет на рынке",
      description: "Команда экспертов с подтверждённым опытом в AI и автоматизации",
    },
    {
      icon: Users,
      title: "100+ довольных клиентов",
      description: "От малого бизнеса до крупных корпораций",
    },
    {
      icon: HeadphonesIcon,
      title: "Поддержка 24/7",
      description: "Всегда на связи для оперативного решения любых вопросов",
    },
  ]

  const automationProcess = [
    {
      phase: "Фаза 1",
      title: "Погружение в бизнес",
      duration: "3-5 дней",
      icon: Target,
      description: "Наши специалисты полностью погружаются в ваш бизнес",
      steps: [
        "Анализ бизнес-процессов и текущей воронки продаж",
        "Интервью с руководителем отдела продаж",
        "Изучение продуктовой матрицы и конкурентных преимуществ",
        "Анализ скриптов продаж и работы с возражениями",
        "Изучение корпоративной культуры и tone of voice",
      ],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50/50 to-cyan-50/50",
    },
    {
      phase: "Фаза 2",
      title: "Проектирование и выбор технологий",
      duration: "5-7 дней",
      icon: Code,
      description: "Разработка индивидуального решения под ваши задачи",
      steps: [
        "Составление детальных сценариев диалогов",
        "Выбор стека технологий (AI-модель, CRM, телефония)",
        "Проектирование интеграций с вашими системами",
        "Разработка логики обработки запросов",
        "Создание технического задания",
      ],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50/50 to-pink-50/50",
    },
    {
      phase: "Фаза 3",
      title: "Обучение AI-агента",
      duration: "7-10 дней",
      icon: Brain,
      description: "Передача знаний вашего бизнеса искусственному интеллекту",
      steps: [
        "Написание промптов и инструкций для AI",
        "Обучение работе с CRM и документооборотом",
        "Тренировка на типичных сценариях продаж",
        "Настройка обработки возражений",
        "Обучение расчетам, формированию счетов и КП",
        "Тестирование на реальных кейсах",
      ],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50/50 to-emerald-50/50",
    },
    {
      phase: "Фаза 4",
      title: "Запуск и оптимизация",
      duration: "3-5 дней",
      icon: Rocket,
      description: "Плавный переход к автоматизированной работе",
      steps: [
        "Пилотный запуск с ограниченным трафиком",
        "Мониторинг качества диалогов в реальном времени",
        "Оперативная корректировка сценариев",
        "Обучение вашей команды работе с системой",
        "Полный запуск и передача в эксплуатацию",
      ],
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50/50 to-red-50/50",
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Работа с вашей командой",
      description:
        "Руководитель отдела продаж участвует в процессе обучения AI, передавая свою экспертизу и лучшие практики",
    },
    {
      icon: Settings,
      title: "Индивидуальный подход",
      description:
        "Каждое решение разрабатывается под конкретные задачи вашего бизнеса — никаких шаблонов и универсальных решений",
    },
    {
      icon: HeadphonesIcon,
      title: "Постоянная поддержка",
      description:
        "Команда специалистов на связи 24/7 для оперативного решения любых вопросов и оптимизации работы системы",
    },
  ]

  const businessSizes = [
    {
      size: "Малый бизнес",
      description: "До 50 сотрудников",
      timeline: "1-2 недели",
      icon: "🏪",
      features: ["Базовые сценарии", "1-2 интеграции", "Простая аналитика"],
    },
    {
      size: "Средний бизнес",
      description: "50-250 сотрудников",
      timeline: "3-4 недели",
      icon: "🏢",
      features: ["Сложные сценарии", "Множественные интеграции", "Расширенная аналитика", "Обучение команды"],
    },
    {
      size: "Корпорация",
      description: "250+ сотрудников",
      timeline: "1-2 месяца",
      icon: "🏛️",
      features: ["Комплексные workflow", "Enterprise интеграции", "AI-аналитика", "Персональный менеджер проекта"],
    },
  ]

  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Увеличение продаж",
      description: "AI обрабатывает все входящие запросы мгновенно, не упуская ни одного лида",
      stat: "+87%",
      statLabel: "конверсия",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Экономия времени",
      description: "Освободите менеджеров от рутинных задач для работы со сложными клиентами",
      stat: "24/7",
      statLabel: "работа",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Снижение затрат",
      description: "Один AI-агент заменяет 3-5 операторов колл-центра",
      stat: "-60%",
      statLabel: "расходы",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Улучшение сервиса",
      description: "Единообразное качество обслуживания для каждого клиента",
      stat: "98%",
      statLabel: "удовлетворенность",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SkipLink />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AI Solutions для малого и среднего бизнеса",
            description:
              "Автоматизация продаж и обслуживания клиентов с помощью голосовых AI-ассистентов. Увеличение конверсии на 87%.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceRange: "$$",
            },
          }),
        }}
      />

      <main id="main-content" role="main" tabIndex={-1}>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 pt-24 sm:pt-32 pb-20 sm:pb-28 px-4">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Для МСБ
                </Badge>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI-решения для малого и среднего бизнеса
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Автоматизируйте обслуживание клиентов и увеличьте продажи с помощью голосовых AI-ассистентов. Полное
                  погружение в ваш бизнес, индивидуальная разработка и быстрое внедрение.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    onClick={() => openModal("trial")}
                    className="w-full sm:w-auto h-12 sm:h-14 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Попробовать бесплатно
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => openModal("consultation")}
                    className="w-full sm:w-auto h-12 sm:h-14 text-base"
                  >
                    Получить консультацию
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      1-4 нед
                    </div>
                    <div className="text-sm text-muted-foreground">Время внедрения</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground">Поддержка</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">Индивидуально</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/ai-assistant-analyzing-blueprints-and-calculations.jpg"
                    alt="AI ассистент анализирует бизнес процессы"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-12 px-4 bg-white dark:bg-slate-900 border-y">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIndicators.map((indicator) => {
                const Icon = indicator.icon
                return (
                  <div key={indicator.title} className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">{indicator.title}</div>
                      <div className="text-xs text-muted-foreground">{indicator.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Automation Process Section */}
        <section className="py-20 sm:py-28 px-4 bg-background">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-purple-500 text-purple-600">
                <Settings className="w-3 h-3 mr-2" />
                Процесс автоматизации
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Как мы автоматизируем ваш бизнес
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Полное погружение в ваши бизнес-процессы, индивидуальная разработка и обучение AI-агента вашей
                экспертизе
              </p>
            </div>

            <div className="space-y-8">
              {automationProcess.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <Card
                    key={phase.phase}
                    className={`relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br ${phase.bgGradient} dark:from-slate-900 dark:to-slate-800`}
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-10 blur-3xl" />

                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="w-fit">
                              {phase.phase}
                            </Badge>
                            <Badge variant="secondary" className="w-fit">
                              <Clock className="w-3 h-3 mr-1" />
                              {phase.duration}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl mb-2">{phase.title}</CardTitle>
                          <CardDescription className="text-base">{phase.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Timeline visual */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 border-2">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Сроки реализации</h3>
                <p className="text-muted-foreground">В зависимости от размера вашего бизнеса</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {businessSizes.map((business) => (
                  <Card key={business.size} className="text-center hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="text-4xl mb-3">{business.icon}</div>
                      <CardTitle className="text-xl mb-2">{business.size}</CardTitle>
                      <CardDescription>{business.description}</CardDescription>
                      <div className="mt-4 text-2xl font-bold text-primary">{business.timeline}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-left">
                        {business.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section for credibility */}
        <section className="py-20 sm:py-28 px-4 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-950 dark:to-purple-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-purple-500 text-purple-600">
                <Users className="w-3 h-3 mr-2" />
                Команда экспертов
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                С вами работают профессионалы
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Команда с совокупным опытом 30+ лет в AI, автоматизации и интеграциях. Мы знаем, как работает ваш
                бизнес.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card
                  key={member.name}
                  className="text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 relative">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-500 to-purple-500 shadow-xl">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={120}
                          height={120}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center border-4 border-background">
                        <Star className="h-5 w-5 text-white fill-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                    <CardDescription className="text-base font-semibold text-primary mb-2">
                      {member.role}
                    </CardDescription>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="text-xs">
                        {member.experience}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{member.achievements}</p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Личный менеджер проекта на всех этапах</h3>
              <p className="text-lg opacity-95 mb-6 max-w-2xl mx-auto">
                Вы не останетесь один на один с технологией. С первого дня и после запуска — ваш персональный эксперт
                всегда на связи.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 border-white/30 text-white text-sm py-2 px-4">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Telegram/WhatsApp поддержка
                </Badge>
                <Badge className="bg-white/20 border-white/30 text-white text-sm py-2 px-4">
                  <Clock className="w-4 h-4 mr-2" />
                  Ответ в течение часа
                </Badge>
                <Badge className="bg-white/20 border-white/30 text-white text-sm py-2 px-4">
                  <HeadphonesIcon className="w-4 h-4 mr-2" />
                  24/7 доступность
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Real Client Cases Section */}
        <section className="py-20 sm:py-28 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-green-500 text-green-600">
                <CheckCircle className="w-3 h-3 mr-2" />
                Реальные кейсы
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Они уже автоматизировали свой бизнес</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Реальные истории компаний, которые увеличили продажи и освободили время с помощью AI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {clientCases.map((caseStudy, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="absolute top-0 right-0 text-6xl opacity-10 group-hover:scale-110 transition-transform">
                    {caseStudy.icon}
                  </div>

                  <CardHeader className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{caseStudy.industry}</Badge>
                      <Badge variant="outline">{caseStudy.size}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{caseStudy.company}</CardTitle>
                    <CardDescription className="text-sm mb-4">
                      <strong className="text-red-600 dark:text-red-400">Проблема:</strong> {caseStudy.problem}
                    </CardDescription>
                    <CardDescription className="text-sm">
                      <strong className="text-green-600 dark:text-green-400">Решение:</strong> {caseStudy.solution}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        Результаты:
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="font-semibold">{caseStudy.timeline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" onClick={() => openModal("cases")} variant="outline" className="h-12 text-base">
                Посмотреть все кейсы
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-20 sm:py-28 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Для МСБ
                </Badge>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI-решения для малого и среднего бизнеса
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Автоматизируйте обслуживание клиентов и увеличьте продажи с помощью голосовых AI-ассистентов. Полное
                  погружение в ваш бизнес, индивидуальная разработка и быстрое внедрение.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    onClick={() => openModal("trial")}
                    className="w-full sm:w-auto h-12 sm:h-14 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Попробовать бесплатно
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => openModal("consultation")}
                    className="w-full sm:w-auto h-12 sm:h-14 text-base"
                  >
                    Получить консультацию
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      1-4 нед
                    </div>
                    <div className="text-sm text-muted-foreground">Время внедрения</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground">Поддержка</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">Индивидуально</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/ai-assistant-analyzing-blueprints-and-calculations.jpg"
                    alt="AI ассистент анализирует бизнес процессы"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
                <Sparkles className="w-3 h-3 mr-2" />
                Наш подход
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Почему с нами удобно работать</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Мы не просто внедряем технологии — мы становимся частью вашей команды
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <Card
                    key={benefit.title}
                    className="relative overflow-hidden border-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />

                    <CardHeader className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Готовы начать автоматизацию?</h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 leading-relaxed opacity-95">
              Запустите AI-ассистента для вашего бизнеса. Первая консультация и демо бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => openModal("trial")}
                className="w-full sm:w-auto h-12 sm:h-14 text-base bg-white text-blue-600 hover:bg-gray-100"
              >
                <Zap className="mr-2 h-5 w-5" />
                Попробовать бесплатно
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openModal("consultation")}
                className="w-full sm:w-auto h-12 sm:h-14 text-base border-white text-white hover:bg-white/10"
              >
                Получить консультацию
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
