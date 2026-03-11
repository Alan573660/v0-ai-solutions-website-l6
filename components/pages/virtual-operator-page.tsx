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
  Clock,
  Users,
  Headphones,
  Settings,
  Heart,
  Sparkles,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface VirtualOperatorPageProps {
  locale: Locale
}

const content = {
  ru: {
    badge: "Виртуальный помощник для бизнеса",
    title: "Виртуальный оператор",
    titleHighlight: "на базе AI",
    subtitle: "Интеллектуальный виртуальный сотрудник, который принимает звонки, общается с клиентами, решает их вопросы и освобождает ваших менеджеров для более важных задач.",
    cta1: "Получить демо",
    cta2: "Послушать примеры",
    stats: [
      { value: "85%", label: "Вопросов решает сам" },
      { value: "24/7", label: "На связи" },
      { value: "∞", label: "Параллельных линий" },
      { value: "-50%", label: "Нагрузка на колл-центр" },
    ],
    whatIs: {
      title: "Что такое виртуальный оператор?",
      description: "Виртуальный оператор — это AI-сотрудник, который работает как настоящий оператор колл-центра, но никогда не устает, не болеет и может обрабатывать неограниченное количество звонков одновременно. Он понимает естественную речь, запоминает клиентов и решает их вопросы самостоятельно.",
      benefits: [
        "Неограниченное количество параллельных звонков",
        "Естественное общение без ощущения робота",
        "Запоминание клиентов и их истории",
        "Самостоятельное решение типовых вопросов",
        "Эмпатия и работа с негативом",
        "Передача сложных случаев живому оператору",
      ],
    },
    features: {
      title: "Возможности виртуального оператора",
      subtitle: "AI-сотрудник с человеческим подходом",
      items: [
        {
          icon: Heart,
          title: "Эмпатичное общение",
          description: "Понимает настроение клиента, проявляет заботу, работает с негативом и жалобами.",
        },
        {
          icon: Users,
          title: "Память о клиентах",
          description: "Помнит каждого клиента, его историю обращений, предпочтения и особенности.",
        },
        {
          icon: Sparkles,
          title: "Естественная речь",
          description: "Говорит как человек, без механических пауз. Не чувствуется, что общаешься с роботом.",
        },
        {
          icon: Target,
          title: "Решение вопросов",
          description: "Самостоятельно решает до 85% обращений: консультации, статусы, изменения заказов.",
        },
        {
          icon: Database,
          title: "Работа с базами",
          description: "Интегрируется с CRM, складом, базой знаний. Имеет доступ к актуальной информации.",
        },
        {
          icon: Clock,
          title: "Мгновенный ответ",
          description: "Отвечает сразу, без ожидания на линии. Работает круглосуточно.",
        },
        {
          icon: Globe,
          title: "Мультиязычность",
          description: "Общается на нескольких языках, автоматически определяя язык клиента.",
        },
        {
          icon: BarChart3,
          title: "Аналитика обращений",
          description: "Собирает данные о частых вопросах, проблемах, настроении клиентов.",
        },
      ],
    },
    howWorks: {
      title: "Как работает виртуальный оператор",
      subtitle: "Быстрое внедрение, быстрый результат",
      steps: [
        {
          number: "01",
          title: "Обучение на ваших данных",
          duration: "3-5 дней",
          description: "Загружаем базу знаний, скрипты, FAQ. Обучаем виртуального оператора вашей специфике.",
        },
        {
          number: "02",
          title: "Настройка голоса и стиля",
          duration: "1-2 дня",
          description: "Выбираем голос, настраиваем тон общения, добавляем фирменные фразы.",
        },
        {
          number: "03",
          title: "Интеграция с системами",
          duration: "2-3 дня",
          description: "Подключаем CRM, телефонию, склад, базу клиентов для полноценной работы.",
        },
        {
          number: "04",
          title: "Тестирование и запуск",
          duration: "3-5 дней",
          description: "Тестируем на реальных звонках, корректируем поведение, запускаем в работу.",
        },
      ],
    },
    industries: {
      title: "Где применяется",
      subtitle: "Виртуальный оператор полезен в любой сфере обслуживания клиентов",
      items: [
        {
          icon: ShoppingBag,
          name: "E-commerce",
          description: "Статус заказа, возвраты, консультации по товарам",
          metrics: { value: "85%", label: "автоматизация" },
        },
        {
          icon: Building2,
          name: "Банки и финансы",
          description: "Баланс, операции, блокировка карт, консультации",
          metrics: { value: "-60%", label: "нагрузка" },
        },
        {
          icon: Headphones,
          name: "Техподдержка",
          description: "Диагностика, инструкции, создание тикетов",
          metrics: { value: "24/7", label: "доступность" },
        },
        {
          icon: Heart,
          name: "Медицина",
          description: "Запись к врачу, результаты анализов, консультации",
          metrics: { value: "+40%", label: "охват" },
        },
      ],
    },
    benefits: {
      title: "Преимущества виртуального оператора",
      subtitle: "Почему компании выбирают виртуального оператора",
      items: [
        { value: "85%", label: "Вопросов решается", description: "Без участия живого оператора" },
        { value: "∞", label: "Параллельных звонков", description: "Нет ограничений по количеству" },
        { value: "0 сек", label: "Время ожидания", description: "Мгновенный ответ на звонок" },
        { value: "-50%", label: "Нагрузка на колл-центр", description: "Освобождение операторов" },
        { value: "99.9%", label: "Доступность", description: "Работа без сбоев и перерывов" },
        { value: "24/7", label: "Круглосуточно", description: "Без выходных и праздников" },
      ],
    },
    comparison: {
      title: "Виртуальный оператор vs Колл-центр",
      items: [
        { feature: "Время ожидания", virtual: "0 секунд", callcenter: "1-15 минут" },
        { feature: "Параллельные звонки", virtual: "Неограниченно", callcenter: "По числу операторов" },
        { feature: "Работа в выходные", virtual: "Да", callcenter: "За доплату" },
        { feature: "Запоминание клиента", virtual: "Всегда", callcenter: "Редко" },
        { feature: "Стоимость звонка", virtual: "От 5 руб", callcenter: "От 50 руб" },
        { feature: "Масштабирование", virtual: "Мгновенно", callcenter: "Найм + обучение" },
      ],
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Клиенты понимают, что общаются с роботом?",
          a: "Современные виртуальные операторы говорят настолько естественно, что большинство клиентов не замечают разницы. При этом мы рекомендуем честно предупреждать клиентов.",
        },
        {
          q: "Что если виртуальный оператор не может решить вопрос?",
          a: "Виртуальный оператор распознает сложные ситуации и мгновенно переводит звонок на живого специалиста, передавая ему всю информацию о клиенте.",
        },
        {
          q: "Как виртуальный оператор работает с негативом?",
          a: "Система обучена распознавать эмоции и реагировать с эмпатией. В особо сложных случаях переводит на опытного оператора.",
        },
        {
          q: "Можно ли настроить голос и манеру общения?",
          a: "Да, мы предлагаем выбор голосов, настройку темпа речи, добавление фирменных фраз и тона общения.",
        },
        {
          q: "Как происходит обучение виртуального оператора?",
          a: "Мы загружаем вашу базу знаний, FAQ, скрипты и обучаем AI на реальных диалогах вашего колл-центра.",
        },
        {
          q: "Сколько стоит виртуальный оператор?",
          a: "Стоимость зависит от объема звонков и сложности. Базовый тариф от 20 000 руб/мес с экономией до 70% по сравнению с колл-центром.",
        },
      ],
    },
    cta: {
      title: "Готовы получить виртуального сотрудника?",
      subtitle: "Запишитесь на демонстрацию и узнайте, сколько можно сэкономить",
      button: "Запросить демо",
      trust: "Бесплатная консультация · Расчет экономии · Без обязательств",
    },
    relatedLinks: {
      title: "Смотрите также",
      items: [
        { title: "Робот оператор", href: "/solutions/robot-operator" },
        { title: "Автоматический оператор", href: "/solutions/automatic-operator" },
        { title: "Робот для звонков", href: "/solutions/robot-dlya-zvonkov" },
        { title: "AI для бизнеса", href: "/solutions/ai-dlya-biznesa" },
        { title: "Все решения", href: "/solutions" },
        { title: "Кейсы", href: "/cases" },
      ],
    },
  },
  en: {
    badge: "Virtual Assistant for Business",
    title: "Virtual Operator",
    titleHighlight: "powered by AI",
    subtitle: "Intelligent virtual employee that takes calls, communicates with customers, solves their issues and frees your managers for more important tasks.",
    cta1: "Get Demo",
    cta2: "Listen to Examples",
    stats: [
      { value: "85%", label: "Issues solved alone" },
      { value: "24/7", label: "Available" },
      { value: "∞", label: "Parallel lines" },
      { value: "-50%", label: "Call center load" },
    ],
    whatIs: {
      title: "What is Virtual Operator?",
      description: "Virtual Operator is an AI employee that works like a real call center operator, but never gets tired, never gets sick and can handle unlimited calls simultaneously. It understands natural speech, remembers customers and solves their issues independently.",
      benefits: [
        "Unlimited parallel calls",
        "Natural communication without robot feeling",
        "Remembering customers and their history",
        "Independent resolution of typical issues",
        "Empathy and handling negativity",
        "Transferring complex cases to live operator",
      ],
    },
    features: {
      title: "Virtual Operator Capabilities",
      subtitle: "AI employee with human approach",
      items: [
        {
          icon: Heart,
          title: "Empathic Communication",
          description: "Understands customer mood, shows care, handles negativity and complaints.",
        },
        {
          icon: Users,
          title: "Customer Memory",
          description: "Remembers every customer, their inquiry history, preferences and specifics.",
        },
        {
          icon: Sparkles,
          title: "Natural Speech",
          description: "Speaks like a human, without mechanical pauses. Doesn't feel like talking to a robot.",
        },
        {
          icon: Target,
          title: "Issue Resolution",
          description: "Independently resolves up to 85% of inquiries: consultations, statuses, order changes.",
        },
        {
          icon: Database,
          title: "Database Integration",
          description: "Integrates with CRM, warehouse, knowledge base. Has access to current information.",
        },
        {
          icon: Clock,
          title: "Instant Response",
          description: "Answers immediately, without waiting on hold. Works around the clock.",
        },
        {
          icon: Globe,
          title: "Multilingual",
          description: "Communicates in multiple languages, automatically detecting customer language.",
        },
        {
          icon: BarChart3,
          title: "Inquiry Analytics",
          description: "Collects data on frequent questions, problems, customer sentiment.",
        },
      ],
    },
    howWorks: {
      title: "How Virtual Operator Works",
      subtitle: "Fast implementation, fast results",
      steps: [
        {
          number: "01",
          title: "Training on Your Data",
          duration: "3-5 days",
          description: "Load knowledge base, scripts, FAQ. Train virtual operator on your specifics.",
        },
        {
          number: "02",
          title: "Voice and Style Setup",
          duration: "1-2 days",
          description: "Choose voice, configure communication tone, add brand phrases.",
        },
        {
          number: "03",
          title: "System Integration",
          duration: "2-3 days",
          description: "Connect CRM, telephony, warehouse, customer base for full operation.",
        },
        {
          number: "04",
          title: "Testing and Launch",
          duration: "3-5 days",
          description: "Test on real calls, adjust behavior, launch into production.",
        },
      ],
    },
    industries: {
      title: "Where It's Applied",
      subtitle: "Virtual operator is useful in any customer service area",
      items: [
        {
          icon: ShoppingBag,
          name: "E-commerce",
          description: "Order status, returns, product consultations",
          metrics: { value: "85%", label: "automation" },
        },
        {
          icon: Building2,
          name: "Banks & Finance",
          description: "Balance, transactions, card blocking, consultations",
          metrics: { value: "-60%", label: "workload" },
        },
        {
          icon: Headphones,
          name: "Tech Support",
          description: "Diagnostics, instructions, ticket creation",
          metrics: { value: "24/7", label: "availability" },
        },
        {
          icon: Heart,
          name: "Healthcare",
          description: "Doctor appointments, test results, consultations",
          metrics: { value: "+40%", label: "coverage" },
        },
      ],
    },
    benefits: {
      title: "Virtual Operator Benefits",
      subtitle: "Why companies choose virtual operator",
      items: [
        { value: "85%", label: "Issues resolved", description: "Without live operator involvement" },
        { value: "∞", label: "Parallel calls", description: "No quantity limits" },
        { value: "0 sec", label: "Wait time", description: "Instant call answer" },
        { value: "-50%", label: "Call center load", description: "Freeing operators" },
        { value: "99.9%", label: "Availability", description: "Work without failures" },
        { value: "24/7", label: "Round the clock", description: "No weekends or holidays" },
      ],
    },
    comparison: {
      title: "Virtual Operator vs Call Center",
      items: [
        { feature: "Wait time", virtual: "0 seconds", callcenter: "1-15 minutes" },
        { feature: "Parallel calls", virtual: "Unlimited", callcenter: "By operator count" },
        { feature: "Weekend work", virtual: "Yes", callcenter: "Extra charge" },
        { feature: "Customer memory", virtual: "Always", callcenter: "Rarely" },
        { feature: "Cost per call", virtual: "From $0.05", callcenter: "From $0.50" },
        { feature: "Scaling", virtual: "Instant", callcenter: "Hiring + training" },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Do customers realize they're talking to a robot?",
          a: "Modern virtual operators speak so naturally that most customers don't notice the difference. However, we recommend honestly informing customers.",
        },
        {
          q: "What if virtual operator can't solve the issue?",
          a: "Virtual operator recognizes complex situations and instantly transfers the call to a live specialist, passing all customer information.",
        },
        {
          q: "How does virtual operator handle negativity?",
          a: "The system is trained to recognize emotions and respond with empathy. In particularly difficult cases, transfers to experienced operator.",
        },
        {
          q: "Can voice and communication style be customized?",
          a: "Yes, we offer voice selection, speech pace adjustment, adding brand phrases and communication tone.",
        },
        {
          q: "How is virtual operator trained?",
          a: "We load your knowledge base, FAQ, scripts and train AI on real dialogues from your call center.",
        },
        {
          q: "How much does virtual operator cost?",
          a: "Cost depends on call volume and complexity. Basic plan from $250/month with up to 70% savings vs call center.",
        },
      ],
    },
    cta: {
      title: "Ready to get a virtual employee?",
      subtitle: "Book a demo and find out how much you can save",
      button: "Request Demo",
      trust: "Free consultation · Savings calculation · No obligations",
    },
    relatedLinks: {
      title: "See Also",
      items: [
        { title: "Robot Operator", href: "/solutions/robot-operator" },
        { title: "Automatic Operator", href: "/solutions/automatic-operator" },
        { title: "Robot for Calls", href: "/solutions/robot-dlya-zvonkov" },
        { title: "AI for Business", href: "/solutions/ai-dlya-biznesa" },
        { title: "All Solutions", href: "/solutions" },
        { title: "Cases", href: "/cases" },
      ],
    },
  },
}

export function VirtualOperatorPage({ locale }: VirtualOperatorPageProps) {
  const { openModal } = useCTA()
  const t = content[locale as keyof typeof content] || content.ru

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-500/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm text-white/80">{t.badge}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              {t.title}
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
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
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-purple-500" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                  <Users className="w-24 h-24 text-purple-400/50" />
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
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
                <div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium mb-3">
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
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center">
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
                <div className="text-4xl font-bold text-purple-500 mb-2">{benefit.value}</div>
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
                  <th className="p-4 text-center font-semibold text-purple-600">Virtual</th>
                  <th className="p-4 text-center font-semibold">Call Center</th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.items.map((item, idx) => (
                  <tr key={idx} className="border-t border-border">
                    <td className="p-4 font-medium">{item.feature}</td>
                    <td className="p-4 text-center text-purple-600 font-medium">{item.virtual}</td>
                    <td className="p-4 text-center text-muted-foreground">{item.callcenter}</td>
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
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
