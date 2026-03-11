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
  ChevronRight,
  Quote,
  MessageSquare,
  Database,
  Brain,
  Settings,
  Globe,
  Clock,
  Users,
  BarChart3,
  Headphones,
  FileText,
  Target,
  TrendingUp,
  Bot,
  Layers,
  CheckCircle2,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface RobotOperatorPageProps {
  locale: Locale
}

const content = {
  ru: {
    badge: "AI-оператор нового поколения",
    title: "Робот оператор",
    titleHighlight: "для вашего бизнеса",
    subtitle: "Отвечает на 100% входящих звонков 24/7. Квалифицирует клиентов, озвучивает цены, создает заявки в CRM и формирует счета автоматически. Без выходных, без больничных, без ошибок.",
    cta1: "Получить демо",
    cta2: "Послушать примеры",
    stats: [
      { value: "100%", label: "Входящих обработано" },
      { value: "24/7", label: "Без перерывов" },
      { value: "3 сек", label: "Время ответа" },
      { value: "-70%", label: "Экономия ФОТ" },
    ],
    whatIs: {
      title: "Что такое робот оператор?",
      description: "Робот оператор — это AI-система на базе голосовых технологий, которая принимает входящие звонки, ведет диалог с клиентом по заданным сценариям, квалифицирует лиды и передает горячие заявки менеджерам. Работает круглосуточно без перерывов.",
      benefits: [
        "Мгновенный ответ на каждый звонок без очереди",
        "Квалификация клиентов по заданным критериям",
        "Автоматическое создание заявок в CRM",
        "Озвучивание цен, условий, акций",
        "Запись и транскрипция всех разговоров",
        "Передача горячих лидов менеджерам в реальном времени",
      ],
    },
    features: {
      title: "Что умеет робот оператор",
      subtitle: "Полный цикл обработки входящих обращений",
      items: [
        {
          icon: Phone,
          title: "Прием звонков 24/7",
          description: "Отвечает на все входящие звонки мгновенно, без очереди и ожидания. Работает в выходные и праздники.",
        },
        {
          icon: MessageSquare,
          title: "Ведение диалога",
          description: "Ведет естественный разговор, задает уточняющие вопросы, отвечает на типовые вопросы клиентов.",
        },
        {
          icon: Target,
          title: "Квалификация лидов",
          description: "Определяет потребности клиента, бюджет, сроки. Присваивает приоритет и передает горячие лиды.",
        },
        {
          icon: FileText,
          title: "Формирование счетов",
          description: "Автоматически создает счета на основе диалога, отправляет на email или в мессенджер клиента.",
        },
        {
          icon: Database,
          title: "Интеграция с CRM",
          description: "Создает заявки, обновляет карточки клиентов, фиксирует историю обращений в amoCRM, Bitrix24, 1C.",
        },
        {
          icon: BarChart3,
          title: "Аналитика звонков",
          description: "Полная статистика: длительность, конверсия, причины отказов, популярные вопросы, тренды.",
        },
        {
          icon: Globe,
          title: "Мультиязычность",
          description: "Поддержка русского, английского и других языков. Автоопределение языка собеседника.",
        },
        {
          icon: Shield,
          title: "Запись разговоров",
          description: "Все разговоры записываются и транскрибируются. Полный контроль качества обслуживания.",
        },
      ],
    },
    howWorks: {
      title: "Как работает робот оператор",
      subtitle: "Простой процесс внедрения с гарантией результата",
      steps: [
        {
          number: "01",
          title: "Подключение номера",
          duration: "1 день",
          description: "Подключаем ваш номер телефона или выделяем новый. Настраиваем маршрутизацию звонков.",
        },
        {
          number: "02",
          title: "Настройка сценариев",
          duration: "3-5 дней",
          description: "Создаем скрипты диалогов под вашу специфику. Загружаем прайсы, условия, FAQ.",
        },
        {
          number: "03",
          title: "Интеграция с CRM",
          duration: "2-3 дня",
          description: "Подключаем amoCRM, Bitrix24, 1C или вашу систему. Настраиваем автоматическое создание заявок.",
        },
        {
          number: "04",
          title: "Тестовый запуск",
          duration: "3-5 дней",
          description: "Пилот на реальных звонках. Корректируем сценарии по результатам. Обучаем AI на ваших данных.",
        },
      ],
    },
    industries: {
      title: "Для каких компаний подходит",
      subtitle: "Робот оператор эффективен в любой отрасли с входящими звонками",
      items: [
        {
          icon: ShoppingBag,
          name: "Интернет-магазины",
          description: "Прием заказов, консультации по товарам, статус доставки",
          metrics: { value: "+45%", label: "конверсия" },
        },
        {
          icon: Building2,
          name: "Строительство",
          description: "Расчет материалов, консультации, запись на замер",
          metrics: { value: "24/7", label: "доступность" },
        },
        {
          icon: Truck,
          name: "Логистика",
          description: "Расчет доставки, отслеживание грузов, оформление заявок",
          metrics: { value: "3 мин", label: "на заявку" },
        },
        {
          icon: Briefcase,
          name: "Услуги B2B",
          description: "Квалификация лидов, запись на встречи, отправка КП",
          metrics: { value: "-60%", label: "времени" },
        },
      ],
    },
    benefits: {
      title: "Преимущества робота оператора",
      subtitle: "Измеримый результат для вашего бизнеса",
      items: [
        { value: "100%", label: "Входящих обработано", description: "Ни один звонок не останется без ответа" },
        { value: "24/7/365", label: "Круглосуточная работа", description: "Без выходных, праздников и больничных" },
        { value: "3 сек", label: "Время ответа", description: "Мгновенная реакция на каждый звонок" },
        { value: "-70%", label: "Экономия на ФОТ", description: "Снижение затрат на операторов" },
        { value: "+45%", label: "Рост конверсии", description: "Больше лидов доходит до сделки" },
        { value: "0", label: "Пропущенных звонков", description: "Полный контроль входящего потока" },
      ],
    },
    integrations: {
      title: "Интеграции",
      subtitle: "Робот оператор работает с вашими системами",
      items: ["amoCRM", "Bitrix24", "1C", "Salesforce", "HubSpot", "Telegram", "WhatsApp", "Email", "Asterisk", "Mango Office"],
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Как быстро можно запустить робота оператора?",
          a: "Типовое внедрение занимает 7-14 дней. Это включает настройку сценариев, интеграцию с CRM и тестовый период.",
        },
        {
          q: "Можно ли интегрировать с нашей CRM?",
          a: "Да, мы интегрируемся с любыми CRM: amoCRM, Bitrix24, 1C, Salesforce, HubSpot и другими через API.",
        },
        {
          q: "Сколько стоит робот оператор?",
          a: "Стоимость зависит от объема звонков и сложности сценариев. Базовый тариф от 15 000 руб/мес. Рассчитаем индивидуально.",
        },
        {
          q: "Как робот понимает сложные вопросы?",
          a: "Робот использует GPT-4 и собственные модели, обученные на вашей специфике. Сложные вопросы передаются менеджеру.",
        },
        {
          q: "Что если клиент хочет говорить с человеком?",
          a: "Робот мгновенно переводит звонок на менеджера по запросу клиента или при обнаружении сложной ситуации.",
        },
        {
          q: "Записываются ли разговоры?",
          a: "Да, все разговоры записываются и транскрибируются. Вы получаете полный контроль качества обслуживания.",
        },
      ],
    },
    cta: {
      title: "Готовы автоматизировать прием звонков?",
      subtitle: "Получите персональную демонстрацию и расчет ROI для вашего бизнеса",
      button: "Запросить демо",
      trust: "Бесплатная консультация · Расчет ROI за 15 минут · Без обязательств",
    },
    relatedLinks: {
      title: "Смотрите также",
      items: [
        { title: "Автоматический оператор", href: "/solutions/automatic-operator" },
        { title: "Виртуальный оператор", href: "/solutions/virtual-operator" },
        { title: "Робот для звонков", href: "/solutions/robot-dlya-zvonkov" },
        { title: "Автоматизация продаж", href: "/solutions/automation-sales" },
        { title: "Все решения", href: "/solutions" },
        { title: "Кейсы", href: "/cases" },
      ],
    },
  },
  en: {
    badge: "Next-generation AI Operator",
    title: "Robot Operator",
    titleHighlight: "for your business",
    subtitle: "Answers 100% of incoming calls 24/7. Qualifies customers, states prices, creates CRM requests and generates invoices automatically. No weekends, no sick days, no errors.",
    cta1: "Get Demo",
    cta2: "Listen to Examples",
    stats: [
      { value: "100%", label: "Calls Handled" },
      { value: "24/7", label: "Non-stop" },
      { value: "3 sec", label: "Response Time" },
      { value: "-70%", label: "Cost Savings" },
    ],
    whatIs: {
      title: "What is Robot Operator?",
      description: "Robot Operator is an AI system based on voice technologies that receives incoming calls, conducts dialogue with customers according to predefined scenarios, qualifies leads and passes hot requests to managers. Works around the clock without breaks.",
      benefits: [
        "Instant response to every call without waiting",
        "Customer qualification by specified criteria",
        "Automatic CRM request creation",
        "Voice pricing, terms, promotions",
        "Recording and transcription of all conversations",
        "Real-time hot lead transfer to managers",
      ],
    },
    features: {
      title: "What Robot Operator Can Do",
      subtitle: "Complete incoming request processing cycle",
      items: [
        {
          icon: Phone,
          title: "24/7 Call Reception",
          description: "Answers all incoming calls instantly, without queue or waiting. Works on weekends and holidays.",
        },
        {
          icon: MessageSquare,
          title: "Dialogue Management",
          description: "Conducts natural conversation, asks clarifying questions, answers typical customer questions.",
        },
        {
          icon: Target,
          title: "Lead Qualification",
          description: "Identifies customer needs, budget, timeline. Assigns priority and passes hot leads.",
        },
        {
          icon: FileText,
          title: "Invoice Generation",
          description: "Automatically creates invoices based on dialogue, sends to customer email or messenger.",
        },
        {
          icon: Database,
          title: "CRM Integration",
          description: "Creates requests, updates customer cards, records interaction history in amoCRM, Bitrix24, 1C.",
        },
        {
          icon: BarChart3,
          title: "Call Analytics",
          description: "Full statistics: duration, conversion, rejection reasons, popular questions, trends.",
        },
        {
          icon: Globe,
          title: "Multilingual",
          description: "Support for Russian, English and other languages. Auto-detection of speaker language.",
        },
        {
          icon: Shield,
          title: "Call Recording",
          description: "All conversations are recorded and transcribed. Full service quality control.",
        },
      ],
    },
    howWorks: {
      title: "How Robot Operator Works",
      subtitle: "Simple implementation process with guaranteed results",
      steps: [
        {
          number: "01",
          title: "Number Connection",
          duration: "1 day",
          description: "Connect your phone number or allocate a new one. Set up call routing.",
        },
        {
          number: "02",
          title: "Scenario Setup",
          duration: "3-5 days",
          description: "Create dialogue scripts for your specifics. Load prices, terms, FAQ.",
        },
        {
          number: "03",
          title: "CRM Integration",
          duration: "2-3 days",
          description: "Connect amoCRM, Bitrix24, 1C or your system. Set up automatic request creation.",
        },
        {
          number: "04",
          title: "Test Launch",
          duration: "3-5 days",
          description: "Pilot on real calls. Adjust scenarios based on results. Train AI on your data.",
        },
      ],
    },
    industries: {
      title: "Which Companies It's For",
      subtitle: "Robot Operator is effective in any industry with incoming calls",
      items: [
        {
          icon: ShoppingBag,
          name: "E-commerce",
          description: "Order intake, product consultations, delivery status",
          metrics: { value: "+45%", label: "conversion" },
        },
        {
          icon: Building2,
          name: "Construction",
          description: "Material calculations, consultations, measurement booking",
          metrics: { value: "24/7", label: "availability" },
        },
        {
          icon: Truck,
          name: "Logistics",
          description: "Delivery calculation, cargo tracking, request processing",
          metrics: { value: "3 min", label: "per request" },
        },
        {
          icon: Briefcase,
          name: "B2B Services",
          description: "Lead qualification, meeting scheduling, proposal sending",
          metrics: { value: "-60%", label: "time saved" },
        },
      ],
    },
    benefits: {
      title: "Robot Operator Benefits",
      subtitle: "Measurable results for your business",
      items: [
        { value: "100%", label: "Calls Handled", description: "No call goes unanswered" },
        { value: "24/7/365", label: "Round-the-clock", description: "No weekends, holidays or sick days" },
        { value: "3 sec", label: "Response Time", description: "Instant reaction to every call" },
        { value: "-70%", label: "Payroll Savings", description: "Reduced operator costs" },
        { value: "+45%", label: "Conversion Growth", description: "More leads reach the deal" },
        { value: "0", label: "Missed Calls", description: "Full incoming flow control" },
      ],
    },
    integrations: {
      title: "Integrations",
      subtitle: "Robot Operator works with your systems",
      items: ["amoCRM", "Bitrix24", "1C", "Salesforce", "HubSpot", "Telegram", "WhatsApp", "Email", "Asterisk", "Mango Office"],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "How quickly can Robot Operator be launched?",
          a: "Typical implementation takes 7-14 days. This includes scenario setup, CRM integration and test period.",
        },
        {
          q: "Can it integrate with our CRM?",
          a: "Yes, we integrate with any CRM: amoCRM, Bitrix24, 1C, Salesforce, HubSpot and others via API.",
        },
        {
          q: "How much does Robot Operator cost?",
          a: "Cost depends on call volume and scenario complexity. Basic plan from $200/month. We'll calculate individually.",
        },
        {
          q: "How does the robot understand complex questions?",
          a: "The robot uses GPT-4 and proprietary models trained on your specifics. Complex questions are passed to a manager.",
        },
        {
          q: "What if customer wants to speak with a human?",
          a: "The robot instantly transfers the call to a manager on customer request or when detecting a complex situation.",
        },
        {
          q: "Are conversations recorded?",
          a: "Yes, all conversations are recorded and transcribed. You get full service quality control.",
        },
      ],
    },
    cta: {
      title: "Ready to automate call reception?",
      subtitle: "Get a personalized demo and ROI calculation for your business",
      button: "Request Demo",
      trust: "Free consultation · ROI calculation in 15 min · No obligations",
    },
    relatedLinks: {
      title: "See Also",
      items: [
        { title: "Automatic Operator", href: "/solutions/automatic-operator" },
        { title: "Virtual Operator", href: "/solutions/virtual-operator" },
        { title: "Robot for Calls", href: "/solutions/robot-dlya-zvonkov" },
        { title: "Sales Automation", href: "/solutions/automation-sales" },
        { title: "All Solutions", href: "/solutions" },
        { title: "Cases", href: "/cases" },
      ],
    },
  },
}

export function RobotOperatorPage({ locale }: RobotOperatorPageProps) {
  const { openModal } = useCTA()
  const [activeFeature, setActiveFeature] = useState(0)
  const t = content[locale as keyof typeof content] || content.ru

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-500/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          {/* Grid pattern */}
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
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
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

            {/* Stats */}
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
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                  <Bot className="w-24 h-24 text-blue-400/50" />
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
            {t.features.items.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="group hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
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
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
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
                <div className="text-4xl font-bold text-primary mb-2">{benefit.value}</div>
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
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
