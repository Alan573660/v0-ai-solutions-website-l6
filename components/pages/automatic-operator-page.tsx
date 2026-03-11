"use client"
import { useState } from "react"
import Link from "next/link"
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
  MessageSquare,
  Database,
  Globe,
  BarChart3,
  FileText,
  Target,
  Bot,
  Clock,
  Users,
  Headphones,
  Settings,
  TrendingUp,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface AutomaticOperatorPageProps {
  locale: Locale
}

const content = {
  ru: {
    badge: "Автоматизация входящих звонков",
    title: "Автоматический оператор",
    titleHighlight: "для бизнеса",
    subtitle: "AI-система, которая автоматически принимает и обрабатывает все входящие звонки. Квалифицирует клиентов, отвечает на вопросы, создает заявки в CRM и переводит на менеджера при необходимости.",
    cta1: "Получить демо",
    cta2: "Послушать примеры",
    stats: [
      { value: "100%", label: "Звонков обработано" },
      { value: "24/7", label: "Доступность" },
      { value: "<5 сек", label: "Время ответа" },
      { value: "60-80%", label: "Без оператора" },
    ],
    whatIs: {
      title: "Что такое автоматический оператор?",
      description: "Автоматический оператор — это AI-решение на базе голосовых технологий и машинного обучения, которое полностью автоматизирует прием входящих звонков. Система понимает естественную речь, ведет диалог по сценарию и выполняет действия: создает заявки, озвучивает информацию, переводит на специалиста.",
      benefits: [
        "Мгновенный ответ без ожидания на линии",
        "Понимание естественной речи клиентов",
        "Автоматическое создание заявок в CRM",
        "Квалификация и приоритизация лидов",
        "Озвучивание цен, условий, статусов заказов",
        "Интеллектуальный перевод на специалиста",
      ],
    },
    features: {
      title: "Возможности автоматического оператора",
      subtitle: "Полный цикл обработки входящих обращений без участия человека",
      items: [
        {
          icon: Phone,
          title: "Автоответ 24/7",
          description: "Мгновенно отвечает на все звонки в любое время суток без очередей и ожидания.",
        },
        {
          icon: MessageSquare,
          title: "Распознавание речи",
          description: "Понимает естественную речь, акценты, диалекты. Точность распознавания 95%+.",
        },
        {
          icon: Target,
          title: "Умная маршрутизация",
          description: "Направляет звонок нужному специалисту на основе темы обращения и загрузки.",
        },
        {
          icon: FileText,
          title: "Создание заявок",
          description: "Автоматически фиксирует обращение в CRM с полной информацией о клиенте.",
        },
        {
          icon: Database,
          title: "База знаний",
          description: "Отвечает на типовые вопросы из базы знаний: цены, условия, статусы заказов.",
        },
        {
          icon: BarChart3,
          title: "Аналитика в реальном времени",
          description: "Детальная статистика по звонкам, темам обращений, конверсии, времени обработки.",
        },
        {
          icon: Globe,
          title: "Мультиязычная поддержка",
          description: "Работа на русском, английском и других языках с автоопределением.",
        },
        {
          icon: Shield,
          title: "Запись и транскрипция",
          description: "Все разговоры записываются и преобразуются в текст для анализа.",
        },
      ],
    },
    howWorks: {
      title: "Как работает автоматический оператор",
      subtitle: "Простое внедрение с быстрым результатом",
      steps: [
        {
          number: "01",
          title: "Анализ процессов",
          duration: "1-2 дня",
          description: "Изучаем ваши бизнес-процессы, типы обращений, сценарии диалогов.",
        },
        {
          number: "02",
          title: "Настройка системы",
          duration: "3-5 дней",
          description: "Создаем сценарии, загружаем базу знаний, настраиваем интеграции.",
        },
        {
          number: "03",
          title: "Подключение номера",
          duration: "1 день",
          description: "Подключаем ваш номер или выделяем новый. Настраиваем переадресацию.",
        },
        {
          number: "04",
          title: "Тестирование и запуск",
          duration: "3-5 дней",
          description: "Тестируем на реальных звонках, корректируем сценарии, запускаем в работу.",
        },
      ],
    },
    industries: {
      title: "Отрасли применения",
      subtitle: "Автоматический оператор эффективен везде, где есть входящие звонки",
      items: [
        {
          icon: ShoppingBag,
          name: "Розничная торговля",
          description: "Прием заказов, консультации, статус доставки, возвраты",
          metrics: { value: "+35%", label: "продуктивность" },
        },
        {
          icon: Building2,
          name: "Недвижимость",
          description: "Запись на просмотр, информация об объектах, квалификация",
          metrics: { value: "24/7", label: "доступность" },
        },
        {
          icon: Headphones,
          name: "Служба поддержки",
          description: "Первая линия поддержки, маршрутизация, создание тикетов",
          metrics: { value: "-50%", label: "нагрузка" },
        },
        {
          icon: Briefcase,
          name: "Услуги B2B",
          description: "Квалификация лидов, запись на встречи, информация о услугах",
          metrics: { value: "2x", label: "конверсия" },
        },
      ],
    },
    benefits: {
      title: "Преимущества автоматического оператора",
      subtitle: "Измеримый результат для вашего бизнеса",
      items: [
        { value: "0", label: "Пропущенных звонков", description: "Каждый звонок будет обработан" },
        { value: "24/7/365", label: "Работа без перерывов", description: "Круглосуточно, без выходных" },
        { value: "60-80%", label: "Автоматизация", description: "Звонков без участия оператора" },
        { value: "-40%", label: "Снижение затрат", description: "На обработку звонков" },
        { value: "+35%", label: "Рост продуктивности", description: "Менеджеров отдела продаж" },
        { value: "95%+", label: "Точность распознавания", description: "Речи клиентов" },
      ],
    },
    integrations: {
      title: "Интеграции",
      subtitle: "Работает с вашими системами",
      items: ["amoCRM", "Bitrix24", "1C", "Salesforce", "HubSpot", "Мегафон", "Билайн", "МТС", "Asterisk", "FreePBX"],
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Чем автоматический оператор отличается от голосового меню (IVR)?",
          a: "IVR требует от клиента нажимать кнопки. Автоматический оператор понимает естественную речь и ведет полноценный диалог, как живой человек.",
        },
        {
          q: "Какой процент звонков система может обработать самостоятельно?",
          a: "В среднем 60-80% звонков обрабатываются полностью автоматически. Сложные случаи переводятся на живого оператора.",
        },
        {
          q: "Как быстро можно внедрить систему?",
          a: "Типовое внедрение занимает 7-14 дней включая настройку, интеграцию и тестирование.",
        },
        {
          q: "Можно ли настроить под специфику нашего бизнеса?",
          a: "Да, система полностью настраивается под ваши сценарии, терминологию и бизнес-процессы.",
        },
        {
          q: "Как происходит интеграция с CRM?",
          a: "Мы поддерживаем интеграцию с популярными CRM через API. Заявки создаются автоматически.",
        },
        {
          q: "Записываются ли разговоры?",
          a: "Да, все разговоры записываются и транскрибируются для контроля качества и анализа.",
        },
      ],
    },
    cta: {
      title: "Готовы автоматизировать обработку звонков?",
      subtitle: "Получите персональную демонстрацию и расчет экономии для вашего бизнеса",
      button: "Запросить демо",
      trust: "Бесплатная консультация · Расчет ROI · Без обязательств",
    },
    relatedLinks: {
      title: "Смотрите также",
      items: [
        { title: "Робот оператор", href: "/solutions/robot-operator" },
        { title: "Виртуальный оператор", href: "/solutions/virtual-operator" },
        { title: "Робот для звонков", href: "/solutions/robot-dlya-zvonkov" },
        { title: "Автоматизация продаж", href: "/solutions/automation-sales" },
        { title: "Все решения", href: "/solutions" },
        { title: "Кейсы", href: "/cases" },
      ],
    },
  },
  en: {
    badge: "Incoming Call Automation",
    title: "Automatic Operator",
    titleHighlight: "for business",
    subtitle: "AI system that automatically receives and processes all incoming calls. Qualifies customers, answers questions, creates CRM requests and transfers to manager when needed.",
    cta1: "Get Demo",
    cta2: "Listen to Examples",
    stats: [
      { value: "100%", label: "Calls Handled" },
      { value: "24/7", label: "Availability" },
      { value: "<5 sec", label: "Response Time" },
      { value: "60-80%", label: "Without Operator" },
    ],
    whatIs: {
      title: "What is Automatic Operator?",
      description: "Automatic Operator is an AI solution based on voice technologies and machine learning that fully automates incoming call reception. The system understands natural speech, conducts dialogue according to scenario and performs actions: creates requests, voices information, transfers to specialist.",
      benefits: [
        "Instant response without waiting on the line",
        "Understanding natural customer speech",
        "Automatic CRM request creation",
        "Lead qualification and prioritization",
        "Voicing prices, terms, order statuses",
        "Intelligent specialist transfer",
      ],
    },
    features: {
      title: "Automatic Operator Capabilities",
      subtitle: "Complete incoming request processing cycle without human involvement",
      items: [
        {
          icon: Phone,
          title: "24/7 Auto-answer",
          description: "Instantly answers all calls at any time without queues or waiting.",
        },
        {
          icon: MessageSquare,
          title: "Speech Recognition",
          description: "Understands natural speech, accents, dialects. 95%+ recognition accuracy.",
        },
        {
          icon: Target,
          title: "Smart Routing",
          description: "Routes call to right specialist based on topic and workload.",
        },
        {
          icon: FileText,
          title: "Request Creation",
          description: "Automatically logs inquiry in CRM with full customer information.",
        },
        {
          icon: Database,
          title: "Knowledge Base",
          description: "Answers typical questions from knowledge base: prices, terms, order statuses.",
        },
        {
          icon: BarChart3,
          title: "Real-time Analytics",
          description: "Detailed statistics on calls, topics, conversion, processing time.",
        },
        {
          icon: Globe,
          title: "Multilingual Support",
          description: "Works in Russian, English and other languages with auto-detection.",
        },
        {
          icon: Shield,
          title: "Recording & Transcription",
          description: "All conversations are recorded and converted to text for analysis.",
        },
      ],
    },
    howWorks: {
      title: "How Automatic Operator Works",
      subtitle: "Simple implementation with quick results",
      steps: [
        {
          number: "01",
          title: "Process Analysis",
          duration: "1-2 days",
          description: "We study your business processes, inquiry types, dialogue scenarios.",
        },
        {
          number: "02",
          title: "System Setup",
          duration: "3-5 days",
          description: "Create scenarios, load knowledge base, configure integrations.",
        },
        {
          number: "03",
          title: "Number Connection",
          duration: "1 day",
          description: "Connect your number or allocate new one. Set up forwarding.",
        },
        {
          number: "04",
          title: "Testing & Launch",
          duration: "3-5 days",
          description: "Test on real calls, adjust scenarios, launch into production.",
        },
      ],
    },
    industries: {
      title: "Application Industries",
      subtitle: "Automatic operator is effective wherever there are incoming calls",
      items: [
        {
          icon: ShoppingBag,
          name: "Retail",
          description: "Order intake, consultations, delivery status, returns",
          metrics: { value: "+35%", label: "productivity" },
        },
        {
          icon: Building2,
          name: "Real Estate",
          description: "Viewing appointments, property info, qualification",
          metrics: { value: "24/7", label: "availability" },
        },
        {
          icon: Headphones,
          name: "Support Service",
          description: "First line support, routing, ticket creation",
          metrics: { value: "-50%", label: "workload" },
        },
        {
          icon: Briefcase,
          name: "B2B Services",
          description: "Lead qualification, meeting scheduling, service info",
          metrics: { value: "2x", label: "conversion" },
        },
      ],
    },
    benefits: {
      title: "Automatic Operator Benefits",
      subtitle: "Measurable results for your business",
      items: [
        { value: "0", label: "Missed Calls", description: "Every call will be handled" },
        { value: "24/7/365", label: "Non-stop Operation", description: "Round the clock, no weekends" },
        { value: "60-80%", label: "Automation", description: "Calls without operator" },
        { value: "-40%", label: "Cost Reduction", description: "For call processing" },
        { value: "+35%", label: "Productivity Growth", description: "Of sales team" },
        { value: "95%+", label: "Recognition Accuracy", description: "Of customer speech" },
      ],
    },
    integrations: {
      title: "Integrations",
      subtitle: "Works with your systems",
      items: ["amoCRM", "Bitrix24", "1C", "Salesforce", "HubSpot", "Twilio", "Vonage", "RingCentral", "Asterisk", "FreePBX"],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "How is automatic operator different from voice menu (IVR)?",
          a: "IVR requires customer to press buttons. Automatic operator understands natural speech and conducts full dialogue like a real person.",
        },
        {
          q: "What percentage of calls can the system handle on its own?",
          a: "On average 60-80% of calls are processed fully automatically. Complex cases are transferred to live operator.",
        },
        {
          q: "How quickly can the system be implemented?",
          a: "Typical implementation takes 7-14 days including setup, integration and testing.",
        },
        {
          q: "Can it be customized for our business specifics?",
          a: "Yes, the system is fully customized to your scenarios, terminology and business processes.",
        },
        {
          q: "How does CRM integration work?",
          a: "We support integration with popular CRMs via API. Requests are created automatically.",
        },
        {
          q: "Are conversations recorded?",
          a: "Yes, all conversations are recorded and transcribed for quality control and analysis.",
        },
      ],
    },
    cta: {
      title: "Ready to automate call processing?",
      subtitle: "Get a personalized demo and savings calculation for your business",
      button: "Request Demo",
      trust: "Free consultation · ROI calculation · No obligations",
    },
    relatedLinks: {
      title: "See Also",
      items: [
        { title: "Robot Operator", href: "/solutions/robot-operator" },
        { title: "Virtual Operator", href: "/solutions/virtual-operator" },
        { title: "Robot for Calls", href: "/solutions/robot-dlya-zvonkov" },
        { title: "Sales Automation", href: "/solutions/automation-sales" },
        { title: "All Solutions", href: "/solutions" },
        { title: "Cases", href: "/cases" },
      ],
    },
  },
}

export function AutomaticOperatorPage({ locale }: AutomaticOperatorPageProps) {
  const { openModal } = useCTA()
  const t = content[locale as keyof typeof content] || content.ru

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-green-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-500/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/80">{t.badge}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              {t.title}
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => openModal("consultation")}
                className="h-14 px-8 text-base bg-white text-slate-900 hover:bg-slate-100"
              >
                {t.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                {t.cta2}
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
              {t.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.whatIs.title}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.whatIs.description}
              </p>
              <ul className="space-y-4">
                {t.whatIs.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-1">
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                  <Settings className="w-24 h-24 text-green-400/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.features.title}</h2>
            <p className="text-xl text-muted-foreground">{t.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="group hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.howWorks.title}</h2>
            <p className="text-xl text-muted-foreground">{t.howWorks.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {t.howWorks.steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-slate-200 dark:text-slate-800 mb-3">{step.number}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium mb-3">
                  {step.duration}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.industries.title}</h2>
            <p className="text-xl text-muted-foreground">{t.industries.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.industries.items.map((industry) => {
              const Icon = industry.icon
              return (
                <Card key={industry.name} className="group hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">{industry.metrics.value}</div>
                        <div className="text-xs text-muted-foreground">{industry.metrics.label}</div>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.benefits.title}</h2>
            <p className="text-xl text-muted-foreground">{t.benefits.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.benefits.items.map((benefit) => (
              <div key={benefit.label} className="p-6 rounded-2xl border border-border/50 bg-card">
                <div className="text-4xl font-bold text-green-500 mb-2">{benefit.value}</div>
                <div className="font-semibold mb-1">{benefit.label}</div>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.integrations.title}</h2>
            <p className="text-lg text-muted-foreground">{t.integrations.subtitle}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {t.integrations.items.map((item) => (
              <div key={item} className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-border/50 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.faq.title}</h2>

          <div className="space-y-4">
            {t.faq.items.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-border/50 bg-card">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-xl font-semibold mb-6">{t.relatedLinks.title}</h3>
          <div className="flex flex-wrap gap-3">
            {t.relatedLinks.items.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-border/50 text-sm hover:border-primary/50 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl text-slate-300 mb-10">{t.cta.subtitle}</p>

          <Button
            size="lg"
            onClick={() => openModal("consultation")}
            className="h-14 px-10 text-base bg-white text-slate-900 hover:bg-slate-100"
          >
            {t.cta.button}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="mt-6 text-sm text-slate-400">{t.cta.trust}</p>
        </div>
      </section>
    </div>
  )
}
