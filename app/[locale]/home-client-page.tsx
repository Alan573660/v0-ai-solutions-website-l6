"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Play,
  Pause,
  Volume2,
  CheckCircle2,
  Sparkles,
  Zap,
  Building2,
  Phone,
  Users,
  TrendingUp,
  Clock,
  Award,
  Settings,
  Bot,
  Lightbulb,
  Target,
  Headphones,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslation } from "react-i18next"
import { solutions, callExamples } from "./home-data"

interface HomeClientPageProps {
  locale: Locale
}

function HomeClientPage({ locale }: HomeClientPageProps) {
  const { t } = useTranslation()
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("voice-manager")
  const [audioProgress, setAudioProgress] = useState<Record<string, number>>({})

  // Removed solutions and callExamples arrays - now imported from home-data.ts

  // const solutions = [ ... ] // removed
  // const callExamples = [ ... ] // removed

  const howWeWork = [
    {
      phase: "1",
      title: "Погружение в бизнес",
      description: "Глубокий анализ процессов, выявление точек роста, изучение целевой аудитории",
      duration: "2-3 дня",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      phase: "2",
      title: "Проектирование решения",
      description: "Разработка сценариев, выбор технологий, проектирование архитектуры",
      duration: "3-5 дней",
      icon: Settings,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      phase: "3",
      title: "Обучение AI-агента",
      description: "Составление промптов, обучение на ваших данных, настройка интеграций",
      duration: "5-7 дней",
      icon: Bot,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      phase: "4",
      title: "Тестирование и запуск",
      description: "Пилотный запуск, корректировка, полноценный деплой с поддержкой",
      duration: "2-3 дня",
      icon: Zap,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const integrations = [
    { name: "amoCRM", logo: "/images/67cbfeaf-a5fb-4c38-ae6d.jpeg" },
    { name: "Bitrix24", logo: "/images/9af7d4d0-2a0f-4980-a59b.jpeg" },
    { name: "Telegram", logo: "/images/305c48f2-2bd0-4708-8ce9.jpeg" },
    { name: "WhatsApp", logo: "/images/49c7178f-6604-4243-a6cd.jpeg" },
  ]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 pt-20 pb-32">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />

        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <Badge className="w-fit bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-технологии для вашего бизнеса
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Полная автоматизация бизнеса с искусственным интеллектом
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Голосовые AI-менеджеры, умные дома, автоматизация процессов. Увеличьте продажи на 87%, сократите расходы
                на 60%.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Получить консультацию
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
                >
                  Смотреть примеры
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="group cursor-default">
                  <div className="text-4xl font-bold group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-sm text-white/80">Проектов</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-4xl font-bold group-hover:scale-110 transition-transform">10+</div>
                  <div className="text-sm text-white/80">Лет опыта</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-4xl font-bold group-hover:scale-110 transition-transform">98%</div>
                  <div className="text-sm text-white/80">Довольных клиентов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/modern-ai-technology-dashboard-with-charts-and-ana.jpg"
                  alt="AI Solutions dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">+87%</div>
                    <div className="text-sm text-muted-foreground">Конверсия</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-muted-foreground">Работа</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <Badge variant="outline" className="mb-4 border-purple-500 text-purple-600">
              <Sparkles className="w-3 h-3 mr-2" />
              Наши решения
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI-решения для любых задач
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              От автоматизации продаж до умного дома — комплексные индивидуальные решения с прозрачными сроками и
              результатами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
            {solutions.map((solution, idx) => (
              <Link key={solution.id} href={solution.href} className="group">
                <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white">
                  {/* Top gradient accent */}
                  <div
                    className={
                      solution.id === "voice-sales"
                        ? "h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600"
                        : solution.id === "smart-home"
                          ? "h-1.5 bg-gradient-to-r from-purple-600 to-pink-600"
                          : solution.id === "smb"
                            ? "h-1.5 bg-gradient-to-r from-green-600 to-emerald-600"
                            : "h-1.5 bg-gradient-to-r from-orange-600 to-red-600"
                    }
                  />

                  {/* Image Section - made more compact */}
                  <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${solution.bgGradient}`}>
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Floating icon badge - made smaller */}
                    <div className="absolute top-3 left-3">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* View arrow - added pulse animation */}
                    <div className="absolute top-3 right-3">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 transition-all group-hover:scale-110">
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="space-y-3 pb-3 pt-4">
                    <div>
                      <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                        {solution.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-snug line-clamp-2">
                        {solution.description}
                      </CardDescription>
                    </div>

                    {/* Features List - made more compact */}
                    <div className="space-y-1.5 pt-1">
                      {solution.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 pb-4 px-4">
                    {/* Stats - made more compact */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {solution.stats.map((stat, i) => (
                        <div
                          key={i}
                          className={`p-2.5 rounded-lg bg-gradient-to-br ${solution.bgGradient} border border-slate-200 group-hover:shadow-md group-hover:scale-105 transition-all`}
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <stat.icon className="w-3.5 h-3.5 text-primary" />
                            <div
                              className={`text-xl font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}
                            >
                              {stat.value}
                            </div>
                          </div>
                          <div className="text-[10px] text-muted-foreground font-medium leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button - made more compact */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all bg-transparent text-xs"
                    >
                      Подробнее
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4 border-purple-500 text-purple-600">
              <Lightbulb className="w-3 h-3 mr-2" />
              Наш подход
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Как мы автоматизируем ваш бизнес</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полное погружение в ваш бизнес. Индивидуальная разработка. Прозрачный процесс от анализа до запуска.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {howWeWork.map((phase) => (
              <Card key={phase.phase} className="relative border-2 hover:shadow-xl transition-all duration-300">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.gradient}`} />
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${phase.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground mb-2">
                    Этап {phase.phase} • {phase.duration}
                  </div>
                  <CardTitle className="text-xl mb-3">{phase.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{phase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Почему выбирают нас</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Опыт 10+ лет</h4>
                  <p className="text-sm text-muted-foreground">Реализовали 500+ проектов в 15 отраслях</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Команда профи</h4>
                  <p className="text-sm text-muted-foreground">ML-инженеры, аналитики, проектные менеджеры</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Поддержка 24/7</h4>
                  <p className="text-sm text-muted-foreground">Всегда на связи, быстрое решение проблем</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique AI Capabilities Section - NEW */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
              <Bot className="w-3 h-3 mr-2" />
              Уникальные возможности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Индивидуальная кастомная разработка под ваш бизнес</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Наши AI-агенты объединяют думающие модели последнего поколения и полностью обучаются специфике вашего
              бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Capability Cards */}
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg mb-2">Автоматическое формирование счетов</CardTitle>
                <CardDescription>
                  AI-агент сам создает счета в PDF, распознает реквизиты после общения с клиентом. Не нужны никакие
                  программы.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg mb-2">Полная воронка продаж</CardTitle>
                <CardDescription>
                  Борьба с возражениями, квалификация клиентов, презентация товаров и услуг. Обучен всем преимуществам
                  ваших продуктов.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg mb-2">Работа с почтой и телефоном</CardTitle>
                <CardDescription>
                  Прием входящих звонков, исходящие обзвоны, email-рассылки, SMS-уведомления. Все каналы коммуникации в
                  одном агенте.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg mb-2">Интеграция с CRM и системами</CardTitle>
                <CardDescription>
                  Подключение к amoCRM, Bitrix24, 1C, SAP и другим. Автоматическая синхронизация данных в реальном
                  времени.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg mb-2">Автоматизация поставщиков</CardTitle>
                <CardDescription>
                  Прямая интеграция с системами ваших поставщиков. AI самостоятельно формирует и отправляет заказы,
                  отслеживает поставки.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg mb-2">Корпоративная культура</CardTitle>
                <CardDescription>
                  AI обучается вашему тону общения, ценностям компании, стандартам обслуживания. Каждый клиент получает
                  единообразный опыт.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Industries We Serve */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Работаем с разными секторами экономики</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Строительство и застройщики",
                "Премиум-сегмент недвижимости",
                "Умные дома и автоматизация",
                "Государственный сектор",
                "Банки и финтех",
                "E-commerce",
                "Медицина",
                "Логистика",
              ].map((industry) => (
                <Badge key={industry} variant="outline" className="px-4 py-2 text-sm">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team & Structure Section - NEW */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4 border-purple-500 text-purple-600">
              <Users className="w-3 h-3 mr-2" />
              Наша команда
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">6 компаний, объединенных в одну экосистему</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы погружаемся в ваш бизнес с головой. Знаем все болевые точки, можем подсказать, доработать и улучшить
              процессы.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {/* Team Structure Cards */}
            <Card className="border-2 hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">Бизнес-консультанты</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Глубоко погружаются в ваш бизнес, анализируют процессы, выявляют точки роста и оптимизации. Опыт в
                  вашей отрасли.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">Бизнес-аналитики</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Анализируют ваши процессы и переводят бизнес-задачи на технический язык для разработчиков.
                  Структурируют требования.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 shadow-lg">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">IT-специалисты и разработчики</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  ML-инженеры, backend/frontend разработчики, DevOps. Реализуют техническую часть на основе требований
                  аналитиков.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 shadow-lg">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">Проектные менеджеры</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Координируют работу всей команды, следят за сроками и качеством. Ваш единый контакт по проекту.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center mb-4 shadow-lg">
                  <Headphones className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">Техническая поддержка 24/7</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Круглосуточный мониторинг систем. Быстро реагируем на сбои, вносим улучшения, консультируем по любым
                  вопросам.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">Специалисты по продажам</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Работаем с вашими менеджерами по продажам, обучаем AI вашим скриптам, методикам работы с возражениями.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* How Collaboration Works */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200 bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-center mb-6">
                  Как строится слаженная работа команды
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Бизнес-консультант погружается в ваш бизнес</h4>
                      <p className="text-muted-foreground">
                        Изучает процессы, общается с руководителем отдела продаж, выявляет болевые точки и возможности
                        для автоматизации
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Бизнес-аналитик переводит на технический язык</h4>
                      <p className="text-muted-foreground">
                        Структурирует требования, создает техническое задание, описывает сценарии работы AI-агента
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Разработчики создают решение</h4>
                      <p className="text-muted-foreground">
                        IT-специалисты реализуют систему на основе ТЗ, обучают AI-модели, настраивают интеграции
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Тестирование с вашей командой</h4>
                      <p className="text-muted-foreground">
                        Запускаем пилот, собираем обратную связь от руководителей, вносим корректировки, доводим до
                        идеала
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Постоянная поддержка и улучшения</h4>
                      <p className="text-muted-foreground">
                        За вами закреплен менеджер проекта. Мониторим работу системы 24/7, оперативно вносим изменения и
                        улучшения
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-lg">Наша главная цель</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Не просто автоматизировать процессы, а <strong>увеличить ваши продажи</strong> и{" "}
                    <strong>снизить расходы</strong>. Мы не продаем готовый продукт — мы создаем индивидуальное решение,
                    которое идеально подходит именно вашему бизнесу.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call Examples Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 text-sm px-4 py-2">Послушайте, как AI-менеджер продает в реальном бизнесе</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Реальные примеры звонков</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Записи настоящих звонков AI-менеджера с клиентами из разных отраслей
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white">
              {callExamples.map((example) => (
                <TabsTrigger key={example.id} value={example.id} className="text-sm">
                  {example.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {callExamples.map((example) => (
              <TabsContent key={example.id} value={example.id}>
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">{example.title}</CardTitle>
                    <CardDescription className="text-base">{example.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Audio Player */}
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <Button
                          size="lg"
                          className="rounded-full w-14 h-14 flex-shrink-0"
                          onClick={() => {
                            if (playingAudio === example.id) {
                              setPlayingAudio(null)
                            } else {
                              setPlayingAudio(example.id)
                              let progress = 0
                              const interval = setInterval(() => {
                                progress += 2
                                setAudioProgress((prev) => ({ ...prev, [example.id]: progress }))
                                if (progress >= 100) {
                                  clearInterval(interval)
                                  setPlayingAudio(null)
                                }
                              }, 200)
                            }
                          }}
                        >
                          {playingAudio === example.id ? (
                            <Pause className="h-6 w-6" />
                          ) : (
                            <Play className="h-6 w-6 ml-1" />
                          )}
                        </Button>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Volume2 className="h-5 w-5 text-blue-600" />
                              <span className="text-sm font-medium">Аудио звонка</span>
                            </div>
                            <span className="text-sm text-muted-foreground">2:35</span>
                          </div>
                          <div className="flex items-end gap-1 h-12 w-full">
                            {Array.from({ length: 40 }).map((_, i) => {
                              const height = Math.sin(i * 0.3) * 20 + 25
                              const isActive =
                                playingAudio === example.id && (audioProgress[example.id] || 0) > (i / 40) * 100
                              return (
                                <div
                                  key={i}
                                  className={`flex-1 rounded-full transition-all duration-200 ${
                                    isActive ? "bg-gradient-to-t from-blue-500 to-purple-500" : "bg-blue-200"
                                  }`}
                                  style={{ height: `${height}%` }}
                                />
                              )
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <span className="font-semibold text-green-900">Результат</span>
                        </div>
                        <p className="text-green-800">{example.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Работаем с вашими инструментами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовая интеграция с популярными CRM и мессенджерами
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex items-center justify-center p-6 bg-slate-50 rounded-xl border-2 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="relative w-full h-16">
                  <Image
                    src={integration.logo || "/placeholder.svg"}
                    alt={integration.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Нужна другая интеграция?
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
              <Users className="w-3 h-3 mr-2" />
              Отзывы клиентов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Что говорят наши клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные истории успеха компаний, которые доверились нам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                    АМ
                  </div>
                  <div>
                    <CardTitle className="text-lg">Алексей Михайлов</CardTitle>
                    <CardDescription>Директор, ООО "СтройМастер"</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "AI-менеджер обрабатывает все звонки по строительным материалам. За 2 месяца конверсия выросла на 73%,
                  не потеряли ни одного звонка. Окупилось за 3 недели."
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-semibold">+73% продаж</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300 border-purple-200 bg-purple-50/30">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                    ЕК
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Кравцова</CardTitle>
                    <CardDescription>Руководитель IT, Банк "Финансы+"</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Внедрили AI для call-центра на 500 мест. Соблюдение всех требований ЦБ РФ, интеграция с нашей CRM за
                  6 недель. Снизили нагрузку на операторов на 40%."
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-1 text-blue-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-semibold">152-ФЗ, ISO 27001</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                    ДС
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий Соколов</CardTitle>
                    <CardDescription>CEO, "ТехноДом"</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Автоматизировали 15 отелей умным управлением. Экономия на энергии 45%, гости в восторге от
                  технологий. ROI достигли за 8 месяцев вместо планируемых 18."
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-1 text-green-600">
                    <Zap className="w-4 h-4" />
                    <span className="font-semibold">-45% энергии</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team & Expertise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4 border-purple-500 text-purple-600">
              <Award className="w-3 h-3 mr-2" />
              Команда экспертов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Профессионалы мирового уровня</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Наша команда — это ML-инженеры, data scientists, проектные менеджеры с опытом в крупных tech-компаниях
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {[
              {
                name: "Сергей Волков",
                role: "CTO & ML Architect",
                exp: "15 лет в AI",
                companies: "ex-Яндекс, Mail.ru",
              },
              { name: "Анна Петрова", role: "Head of AI Development", exp: "12 лет в ML", companies: "ex-Сбер, VK" },
              {
                name: "Игорь Смирнов",
                role: "Lead Data Scientist",
                exp: "10 лет в Data",
                companies: "ex-Tinkoff, Ozon",
              },
              { name: "Мария Соколова", role: "Project Director", exp: "13 лет в IT", companies: "ex-Kaspersky, EPAM" },
            ].map((member, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                  <CardDescription className="text-sm mb-3">{member.role}</CardDescription>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="font-semibold text-blue-600">{member.exp}</div>
                    <div>{member.companies}</div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Certifications & Compliance */}
          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center mb-8">
                Сертификаты и соответствие стандартам
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white rounded-xl border-2 border-blue-200">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold mb-1">ISO 27001</div>
                  <div className="text-xs text-muted-foreground">Информационная безопасность</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl border-2 border-purple-200">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold mb-1">152-ФЗ</div>
                  <div className="text-xs text-muted-foreground">Персональные данные</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl border-2 border-green-200">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold mb-1">GDPR</div>
                  <div className="text-xs text-muted-foreground">Европейский стандарт</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl border-2 border-orange-200">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold mb-1">ГОСТ Р</div>
                  <div className="text-xs text-muted-foreground">Российские стандарты</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results & Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Результаты в цифрах</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Реальные метрики наших клиентов после внедрения AI-решений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { value: "87%", label: "Рост конверсии", description: "В среднем у клиентов" },
              { value: "100%", label: "Обработка звонков", description: "Без пропусков 24/7" },
              { value: "60%", label: "Снижение затрат", description: "На персонал и процессы" },
              { value: "3 недели", label: "Окупаемость", description: "В среднем для МСБ" },
            ].map((stat, idx) => (
              <Card
                key={idx}
                className="bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <CardHeader className="text-center pb-6">
                  <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <CardTitle className="text-xl mb-2">{stat.label}</CardTitle>
                  <CardDescription className="text-white/80">{stat.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ответы на ключевые вопросы о внедрении AI-решений в ваш бизнес
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "Сколько времени занимает внедрение?",
                a: "Для малого и среднего бизнеса — от 1 до 4 недель. Для крупных компаний и госсектора — от 2 до 6 месяцев. Сроки зависят от сложности интеграций и объема бизнес-процессов.",
              },
              {
                q: "Какая стоимость внедрения?",
                a: "Стоимость рассчитывается индивидуально в зависимости от задач, объема автоматизации и требуемых интеграций. Средний проект для МСБ окупается за 3-4 недели. Предоставляем бесплатную консультацию и расчет ROI.",
              },
              {
                q: "Нужно ли менять текущую CRM или инфраструктуру?",
                a: "Нет! Мы интегрируемся с вашими существующими системами: amoCRM, Bitrix24, 1C, SAP и другими. API-интеграции настраиваются без изменения вашей текущей инфраструктуры.",
              },
              {
                q: "Как обеспечивается безопасность данных?",
                a: "Мы соблюдаем 152-ФЗ, ISO 27001, GDPR. Все данные шифруются (AES-256), хранятся на защищенных серверах в РФ. Доступны аудит безопасности и NDA для корпоративных клиентов.",
              },
              {
                q: "Что если AI-менеджер не справится с задачей?",
                a: "У нас система эскалации: если AI не может решить задачу, звонок автоматически переводится на живого менеджера с полной историей диалога. Вы не теряете ни одного клиента.",
              },
              {
                q: "Какая поддержка после запуска?",
                a: "Круглосуточная техподдержка 24/7, регулярные обновления AI-модели, корректировка сценариев по вашим запросам, обучение команды. SLA 99.9% для enterprise-клиентов.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                      {idx + 1}
                    </span>
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed pl-11">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Начните автоматизацию уже сегодня
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Готовы к трансформации бизнеса?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Получите бесплатную консультацию, анализ ваших процессов и расчет ROI. Без обязательств.
          </p>

          {/* Trust badges to CTA */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm">Гарантия результата</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm">NDA и безопасность</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm">Поддержка 24/7</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-6">
              Получить консультацию
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent text-lg px-8 py-6"
            >
              Рассчитать ROI
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/70">
            Свяжемся в течение 15 минут • Бесплатный аудит процессов • Готовое ТЗ за 2 дня
          </p>
        </div>
      </section>
    </div>
  )
}

export { HomeClientPage }
export default HomeClientPage
