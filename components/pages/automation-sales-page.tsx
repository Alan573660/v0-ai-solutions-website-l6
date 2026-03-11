"use client"
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
  TrendingUp,
  Users,
  DollarSign,
  Mail,
  Calendar,
  Rocket,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface AutomationSalesPageProps {
  locale: Locale
}

const content = {
  ru: {
    badge: "AI для отдела продаж",
    title: "Автоматизация продаж",
    titleHighlight: "с помощью AI",
    subtitle: "Полная автоматизация воронки продаж: от первого контакта до закрытия сделки. AI квалифицирует лидов, ведет переговоры, формирует КП и счета, напоминает о следующих шагах.",
    cta1: "Получить демо",
    cta2: "Рассчитать ROI",
    stats: [
      { value: "+156%", label: "Рост конверсии" },
      { value: "3x", label: "Больше лидов" },
      { value: "-60%", label: "Время на рутину" },
      { value: "24/7", label: "Работа с лидами" },
    ],
    whatIs: {
      title: "Что такое автоматизация продаж?",
      description: "Автоматизация продаж — это внедрение AI-технологий в процесс продаж для увеличения конверсии и снижения нагрузки на менеджеров. AI берет на себя рутинные задачи: квалификацию лидов, первичные переговоры, формирование документов, напоминания и follow-up.",
      benefits: [
        "Автоматическая квалификация входящих лидов",
        "Мгновенная обработка заявок 24/7",
        "Формирование КП и счетов на основе диалога",
        "Автоматические follow-up и напоминания",
        "Интеграция с CRM и синхронизация данных",
        "Аналитика конверсии на каждом этапе",
      ],
    },
    features: {
      title: "Что автоматизирует AI",
      subtitle: "Весь цикл продаж от лида до сделки",
      items: [
        {
          icon: Target,
          title: "Квалификация лидов",
          description: "AI определяет потребности, бюджет, сроки и приоритет каждого лида автоматически.",
        },
        {
          icon: Phone,
          title: "Первичные переговоры",
          description: "Ведет диалог с клиентом, отвечает на вопросы, презентует продукт или услугу.",
        },
        {
          icon: FileText,
          title: "Формирование КП",
          description: "Автоматически создает коммерческие предложения на основе потребностей клиента.",
        },
        {
          icon: DollarSign,
          title: "Выставление счетов",
          description: "Формирует счета, парсит реквизиты, отправляет клиенту на email.",
        },
        {
          icon: Mail,
          title: "Follow-up",
          description: "Автоматические напоминания, повторные касания, подогрев холодных лидов.",
        },
        {
          icon: Calendar,
          title: "Запись на встречи",
          description: "Согласовывает время, отправляет приглашения, напоминает о встречах.",
        },
        {
          icon: Database,
          title: "Синхронизация CRM",
          description: "Все данные автоматически попадают в CRM, карточки клиентов всегда актуальны.",
        },
        {
          icon: BarChart3,
          title: "Аналитика продаж",
          description: "Детальная статистика по воронке, конверсии, причинам отказов.",
        },
      ],
    },
    howWorks: {
      title: "Как это работает",
      subtitle: "Внедрение за 2-3 недели с гарантией результата",
      steps: [
        {
          number: "01",
          title: "Анализ воронки",
          duration: "2-3 дня",
          description: "Изучаем текущий процесс продаж, точки потерь, скрипты и материалы.",
        },
        {
          number: "02",
          title: "Настройка AI",
          duration: "5-7 дней",
          description: "Обучаем AI вашим продуктам, ценам, условиям. Создаем сценарии диалогов.",
        },
        {
          number: "03",
          title: "Интеграция",
          duration: "3-5 дней",
          description: "Подключаем CRM, телефонию, email, мессенджеры. Настраиваем автоматизации.",
        },
        {
          number: "04",
          title: "Запуск и оптимизация",
          duration: "Постоянно",
          description: "Запускаем на реальных лидах, анализируем результаты, постоянно улучшаем.",
        },
      ],
    },
    industries: {
      title: "Кому подходит",
      subtitle: "Автоматизация продаж работает в любой B2B и B2C сфере",
      items: [
        {
          icon: Building2,
          name: "Недвижимость",
          description: "Квалификация покупателей, запись на просмотры, подготовка документов",
          metrics: { value: "+87%", label: "конверсия" },
        },
        {
          icon: Briefcase,
          name: "B2B услуги",
          description: "Обработка входящих, презентации, формирование КП",
          metrics: { value: "3x", label: "больше лидов" },
        },
        {
          icon: ShoppingBag,
          name: "E-commerce",
          description: "Консультации, допродажи, возврат клиентов",
          metrics: { value: "+45%", label: "средний чек" },
        },
        {
          icon: Truck,
          name: "Оптовая торговля",
          description: "Расчет цен, формирование счетов, работа с каталогом",
          metrics: { value: "24/7", label: "прием заказов" },
        },
      ],
    },
    benefits: {
      title: "Результаты автоматизации",
      subtitle: "Что получают наши клиенты",
      items: [
        { value: "+156%", label: "Рост конверсии", description: "В среднем по всем клиентам" },
        { value: "3x", label: "Больше обработанных лидов", description: "При том же штате" },
        { value: "-60%", label: "Времени на рутину", description: "Менеджеры занимаются продажами" },
        { value: "0", label: "Потерянных лидов", description: "Каждый лид обработан" },
        { value: "24/7", label: "Работа с клиентами", description: "Без выходных и праздников" },
        { value: "100%", label: "Данных в CRM", description: "Полная история взаимодействий" },
      ],
    },
    comparison: {
      title: "До и после автоматизации",
      items: [
        { feature: "Обработка заявки", before: "30-60 мин", after: "3 секунды" },
        { feature: "Квалификация лида", before: "Субъективно", after: "По критериям" },
        { feature: "Формирование КП", before: "1-2 часа", after: "5 минут" },
        { feature: "Follow-up", before: "Забывают", after: "100% автоматически" },
        { feature: "Работа в выходные", before: "Нет", after: "24/7" },
        { feature: "Данные в CRM", before: "50%", after: "100%" },
      ],
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "AI может полностью заменить менеджера по продажам?",
          a: "AI берет на себя рутину: квалификацию, первичные переговоры, документы. Сложные переговоры и закрытие крупных сделок остаются за менеджерами.",
        },
        {
          q: "Как AI понимает специфику нашего продукта?",
          a: "Мы обучаем AI на ваших материалах: прайсы, КП, скрипты, FAQ. AI знает ваш продукт так же хорошо, как лучший менеджер.",
        },
        {
          q: "Сколько времени занимает внедрение?",
          a: "Типовое внедрение занимает 2-3 недели. За это время мы анализируем процессы, настраиваем AI и запускаем на реальных лидах.",
        },
        {
          q: "С какими CRM работает система?",
          a: "Мы интегрируемся с amoCRM, Bitrix24, Salesforce, HubSpot, 1C и любыми другими системами через API.",
        },
        {
          q: "Какой ROI можно ожидать?",
          a: "В среднем клиенты видят рост конверсии на 50-150% и снижение времени на рутину на 60%. ROI обычно положительный уже в первый месяц.",
        },
        {
          q: "Что если клиент хочет говорить с человеком?",
          a: "AI мгновенно переводит разговор на менеджера, передавая всю собранную информацию о клиенте и его потребностях.",
        },
      ],
    },
    cta: {
      title: "Готовы увеличить продажи с AI?",
      subtitle: "Получите персональный расчет ROI и демонстрацию системы",
      button: "Запросить демо",
      trust: "Бесплатная консультация · Расчет ROI · Без обязательств",
    },
    relatedLinks: {
      title: "Смотрите также",
      items: [
        { title: "Система автоматизации продаж", href: "/solutions/sales-automation-system" },
        { title: "Робот для продаж", href: "/solutions/robot-dlya-prodazh" },
        { title: "Обработка заявок", href: "/solutions/obrabotka-zayavok" },
        { title: "Выставление счетов", href: "/solutions/vystavlenie-schetov" },
        { title: "Все решения", href: "/solutions" },
        { title: "Кейсы", href: "/cases" },
      ],
    },
  },
  en: {
    badge: "AI for Sales Team",
    title: "Sales Automation",
    titleHighlight: "with AI",
    subtitle: "Complete sales funnel automation: from first contact to deal closing. AI qualifies leads, conducts negotiations, creates proposals and invoices, reminds about next steps.",
    cta1: "Get Demo",
    cta2: "Calculate ROI",
    stats: [
      { value: "+156%", label: "Conversion Growth" },
      { value: "3x", label: "More Leads" },
      { value: "-60%", label: "Routine Time" },
      { value: "24/7", label: "Lead Processing" },
    ],
    whatIs: {
      title: "What is Sales Automation?",
      description: "Sales automation is the implementation of AI technologies in the sales process to increase conversion and reduce the load on managers. AI takes over routine tasks: lead qualification, initial negotiations, document creation, reminders and follow-ups.",
      benefits: [
        "Automatic incoming lead qualification",
        "Instant 24/7 request processing",
        "Creating proposals and invoices based on dialogue",
        "Automatic follow-ups and reminders",
        "CRM integration and data synchronization",
        "Conversion analytics at each stage",
      ],
    },
    features: {
      title: "What AI Automates",
      subtitle: "Complete sales cycle from lead to deal",
      items: [
        {
          icon: Target,
          title: "Lead Qualification",
          description: "AI identifies needs, budget, timeline and priority of each lead automatically.",
        },
        {
          icon: Phone,
          title: "Initial Negotiations",
          description: "Conducts dialogue with customer, answers questions, presents product or service.",
        },
        {
          icon: FileText,
          title: "Proposal Creation",
          description: "Automatically creates commercial proposals based on customer needs.",
        },
        {
          icon: DollarSign,
          title: "Invoice Generation",
          description: "Creates invoices, parses details, sends to customer email.",
        },
        {
          icon: Mail,
          title: "Follow-up",
          description: "Automatic reminders, repeat touches, warming cold leads.",
        },
        {
          icon: Calendar,
          title: "Meeting Scheduling",
          description: "Coordinates time, sends invitations, reminds about meetings.",
        },
        {
          icon: Database,
          title: "CRM Synchronization",
          description: "All data automatically goes to CRM, customer cards always up to date.",
        },
        {
          icon: BarChart3,
          title: "Sales Analytics",
          description: "Detailed funnel statistics, conversion, rejection reasons.",
        },
      ],
    },
    howWorks: {
      title: "How It Works",
      subtitle: "Implementation in 2-3 weeks with guaranteed results",
      steps: [
        {
          number: "01",
          title: "Funnel Analysis",
          duration: "2-3 days",
          description: "Study current sales process, loss points, scripts and materials.",
        },
        {
          number: "02",
          title: "AI Setup",
          duration: "5-7 days",
          description: "Train AI on your products, prices, terms. Create dialogue scenarios.",
        },
        {
          number: "03",
          title: "Integration",
          duration: "3-5 days",
          description: "Connect CRM, telephony, email, messengers. Configure automations.",
        },
        {
          number: "04",
          title: "Launch & Optimization",
          duration: "Ongoing",
          description: "Launch on real leads, analyze results, continuously improve.",
        },
      ],
    },
    industries: {
      title: "Who It's For",
      subtitle: "Sales automation works in any B2B and B2C sphere",
      items: [
        {
          icon: Building2,
          name: "Real Estate",
          description: "Buyer qualification, viewing appointments, document preparation",
          metrics: { value: "+87%", label: "conversion" },
        },
        {
          icon: Briefcase,
          name: "B2B Services",
          description: "Incoming processing, presentations, proposal creation",
          metrics: { value: "3x", label: "more leads" },
        },
        {
          icon: ShoppingBag,
          name: "E-commerce",
          description: "Consultations, upsells, customer return",
          metrics: { value: "+45%", label: "avg order" },
        },
        {
          icon: Truck,
          name: "Wholesale Trade",
          description: "Price calculation, invoice creation, catalog work",
          metrics: { value: "24/7", label: "order taking" },
        },
      ],
    },
    benefits: {
      title: "Automation Results",
      subtitle: "What our clients get",
      items: [
        { value: "+156%", label: "Conversion Growth", description: "Average across all clients" },
        { value: "3x", label: "More Processed Leads", description: "With the same staff" },
        { value: "-60%", label: "Routine Time", description: "Managers focus on selling" },
        { value: "0", label: "Lost Leads", description: "Every lead is processed" },
        { value: "24/7", label: "Customer Work", description: "No weekends or holidays" },
        { value: "100%", label: "Data in CRM", description: "Complete interaction history" },
      ],
    },
    comparison: {
      title: "Before and After Automation",
      items: [
        { feature: "Request processing", before: "30-60 min", after: "3 seconds" },
        { feature: "Lead qualification", before: "Subjective", after: "By criteria" },
        { feature: "Proposal creation", before: "1-2 hours", after: "5 minutes" },
        { feature: "Follow-up", before: "Forgotten", after: "100% automatic" },
        { feature: "Weekend work", before: "No", after: "24/7" },
        { feature: "CRM data", before: "50%", after: "100%" },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Can AI completely replace a sales manager?",
          a: "AI takes over routine: qualification, initial negotiations, documents. Complex negotiations and closing large deals remain with managers.",
        },
        {
          q: "How does AI understand our product specifics?",
          a: "We train AI on your materials: prices, proposals, scripts, FAQ. AI knows your product as well as your best manager.",
        },
        {
          q: "How long does implementation take?",
          a: "Typical implementation takes 2-3 weeks. During this time we analyze processes, set up AI and launch on real leads.",
        },
        {
          q: "Which CRMs does the system work with?",
          a: "We integrate with amoCRM, Bitrix24, Salesforce, HubSpot, 1C and any other systems via API.",
        },
        {
          q: "What ROI can be expected?",
          a: "On average, clients see conversion growth of 50-150% and routine time reduction of 60%. ROI is usually positive in the first month.",
        },
        {
          q: "What if customer wants to talk to a human?",
          a: "AI instantly transfers the conversation to a manager, passing all collected information about the customer and their needs.",
        },
      ],
    },
    cta: {
      title: "Ready to increase sales with AI?",
      subtitle: "Get a personalized ROI calculation and system demo",
      button: "Request Demo",
      trust: "Free consultation · ROI calculation · No obligations",
    },
    relatedLinks: {
      title: "See Also",
      items: [
        { title: "Sales Automation System", href: "/solutions/sales-automation-system" },
        { title: "Sales Robot", href: "/solutions/robot-dlya-prodazh" },
        { title: "Request Processing", href: "/solutions/obrabotka-zayavok" },
        { title: "Invoice Generation", href: "/solutions/vystavlenie-schetov" },
        { title: "All Solutions", href: "/solutions" },
        { title: "Cases", href: "/cases" },
      ],
    },
  },
}

export function AutomationSalesPage({ locale }: AutomationSalesPageProps) {
  const { openModal } = useCTA()
  const t = content[locale as keyof typeof content] || content.ru

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-500/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-sm text-white/80">{t.badge}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              {t.title}
              <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
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
                <TrendingUp className="mr-2 h-5 w-5" />
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
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-orange-500" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-1">
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                  <Rocket className="w-24 h-24 text-orange-400/50" />
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
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
                <div className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium mb-3">
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
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
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
                <div className="text-4xl font-bold text-orange-500 mb-2">{benefit.value}</div>
                <div className="font-semibold mb-1">{benefit.label}</div>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.comparison.title}</h2>

          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="p-4 text-left font-semibold"></th>
                  <th className="p-4 text-center font-semibold text-muted-foreground">{locale === "ru" ? "До" : "Before"}</th>
                  <th className="p-4 text-center font-semibold text-orange-600">{locale === "ru" ? "После" : "After"}</th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.items.map((item, idx) => (
                  <tr key={idx} className="border-t border-border">
                    <td className="p-4 font-medium">{item.feature}</td>
                    <td className="p-4 text-center text-muted-foreground">{item.before}</td>
                    <td className="p-4 text-center text-orange-600 font-medium">{item.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white">
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
