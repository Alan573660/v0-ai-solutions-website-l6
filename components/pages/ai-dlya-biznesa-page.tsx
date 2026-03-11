"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight, Check, Zap, ChevronRight, ChevronDown,
  Layers, Target, BarChart3, Clock, Shield, TrendingUp,
  Building2, ShoppingBag, Briefcase, Home, Truck, Package,
  Cpu, Workflow, Database, LineChart, Brain, Globe, Users,
  Phone, FileText, Calculator, Bot, Sparkles, 
  Play, ArrowUpRight, MessageSquare, Headphones, Receipt,
  Factory, Stethoscope, ShoppingCart, Warehouse, HardHat, Building,
} from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import { RelatedSolutions } from "@/components/related-solutions"
import type { Locale } from "@/lib/i18n/config"

interface AIDlyaBiznesaPageProps {
  locale: Locale
}

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true)
    }
  }, [startOnView])

  useEffect(() => {
    if (startOnView && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [startOnView, hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [hasStarted, end, duration])

  return { count, ref }
}

export function AIDlyaBiznesaPage({ locale }: AIDlyaBiznesaPageProps) {
  const { openModal } = useCTA()
  const [activeProcess, setActiveProcess] = useState(0)
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [hoveredModule, setHoveredModule] = useState<number | null>(null)

  // Animated stats
  const stat1 = useCountUp(70, 2000)
  const stat2 = useCountUp(12, 1500)
  const stat3 = useCountUp(50, 2500)
  const stat4 = useCountUp(24, 1000)

  // All solution modules for hub
  const allModules = [
    { icon: Phone, title: "Робот оператор", href: "/solutions/robot-operator", description: "Автоматический прием 100% входящих звонков 24/7", tag: "Популярное", color: "from-blue-500 to-cyan-500" },
    { icon: Target, title: "Робот для продаж", href: "/solutions/robot-dlya-prodazh", description: "Полный цикл продажи от звонка до счета", tag: "ROI +180%", color: "from-purple-500 to-pink-500" },
    { icon: Workflow, title: "Обработка заявок", href: "/solutions/obrabotka-zayavok", description: "Квалификация и маршрутизация лидов", tag: null, color: "from-green-500 to-emerald-500" },
    { icon: Package, title: "Обработка заказов", href: "/solutions/obrabotka-zakazov", description: "От приема до передачи в логистику", tag: null, color: "from-orange-500 to-amber-500" },
    { icon: Receipt, title: "Выставление счетов", href: "/solutions/vystavlenie-schetov", description: "Автоматическая генерация и отправка", tag: null, color: "from-teal-500 to-cyan-500" },
    { icon: Truck, title: "Расчет доставки", href: "/solutions/raschet-dostavki", description: "Оптимизация маршрутов и стоимости", tag: "-35% затрат", color: "from-indigo-500 to-purple-500" },
    { icon: Headphones, title: "Виртуальный оператор", href: "/solutions/virtual-operator", description: "Мультиязычная поддержка и продажи", tag: null, color: "from-rose-500 to-pink-500" },
    { icon: Bot, title: "Автоматический оператор", href: "/solutions/automatic-operator", description: "Обработка типовых запросов без человека", tag: null, color: "from-slate-500 to-zinc-500" },
    { icon: MessageSquare, title: "Робот для звонков", href: "/solutions/robot-dlya-zvonkov", description: "Входящие и исходящие автозвонки", tag: null, color: "from-sky-500 to-blue-500" },
    { icon: BarChart3, title: "Автоматизация продаж", href: "/solutions/sales-automation-system", description: "Полная система для отдела продаж", tag: "3-5x", color: "from-violet-500 to-purple-500" },
    { icon: Building, title: "AI-консьерж для отелей", href: "/solutions/hotel-concierge", description: "Бронирования и сервис без очередей", tag: null, color: "from-amber-500 to-orange-500" },
    { icon: Briefcase, title: "Enterprise решения", href: "/solutions/enterprise", description: "Корпоративные решения с SLA 99.9%", tag: "Enterprise", color: "from-slate-600 to-slate-800" },
  ]

  // Business processes that can be automated
  const processes = [
    { 
      icon: Phone, 
      title: "Входящие и исходящие звонки", 
      description: "AI отвечает на звонки за 3 секунды, квалифицирует клиента, озвучивает цены, записывает на встречу или переводит на менеджера. Исходящие звонки: напоминания, подтверждения, обзвон базы.",
      automation: "80-95%",
      savings: "до 70% ФОТ",
      examples: ["Прием звонков 24/7", "Квалификация лидов", "Информирование о ценах", "Запись на услуги", "Напоминания клиентам"],
    },
    { 
      icon: Target, 
      title: "Продажи и работа с клиентами", 
      description: "AI ведет клиента по воронке: от первого контакта до закрытия сделки. Задает квалифицирующие вопросы, презентует продукт, отрабатывает возражения, рассчитывает стоимость и формирует КП.",
      automation: "60-80%",
      savings: "+40% конверсия",
      examples: ["Квалификация лидов", "Презентация продукта", "Расчет стоимости", "Формирование КП", "Дожим до сделки"],
    },
    { 
      icon: Workflow, 
      title: "Обработка заявок и лидов", 
      description: "Автоматический сбор заявок из всех каналов: сайт, телефон, мессенджеры, email. AI анализирует, приоритизирует по вероятности конверсии и распределяет на нужных менеджеров.",
      automation: "95-100%",
      savings: "0 потерянных лидов",
      examples: ["Сбор из всех каналов", "Дед��пликация", "Скоринг и приоритизация", "Автораспределение", "Уведомления"],
    },
    { 
      icon: Package, 
      title: "Обработка заказов", 
      description: "От приема заказа до передачи в логистику за 5 минут. AI проверяет данные, наличие на складе, рассчитывает сроки, создает документы и синхронизирует с учетной системой.",
      automation: "90-100%",
      savings: "8x скорость",
      examples: ["Прием заказов", "Проверка наличия", "Расчет сроков", "Создание документов", "Синхронизация"],
    },
    { 
      icon: Receipt, 
      title: "Выставление счетов и документы", 
      description: "Автоматическая генерация счетов, актов, накладных из заявки или звонка. Проверка реквизитов, отправка на email и в CRM, контроль оплаты и напоминания.",
      automation: "100%",
      savings: "-95% ручной работы",
      examples: ["Генерация счетов", "Проверка реквизитов", "Отправка документов", "Контроль оплаты", "Напоминания"],
    },
    { 
      icon: Truck, 
      title: "Логистика и доставка", 
      description: "AI выбирает оптимальный маршрут и способ доставки с учетом веса, габаритов, срочности и стоимости. Интеграция с курьерскими службами, отслеживание, уведомления клиентам.",
      automation: "80-90%",
      savings: "-35% затрат",
      examples: ["Расчет маршрутов", "Выбор перевозчика", "Оптимизация стоимости", "Отслеживание", "Уведомления"],
    },
    { 
      icon: LineChart, 
      title: "Аналитика и отчетность", 
      description: "Автоматические дашборды с ключевыми метриками в реальном времени. AI выявляет аномалии, прогнозирует тренды, формирует отчеты и рекомендации по оптимизации.",
      automation: "100%",
      savings: "Real-time данные",
      examples: ["Дашборды KPI", "Прогноз продаж", "Аномалии и алерты", "Рекомендации AI", "Автоотчеты"],
    },
  ]

  // Industries
  const industries = [
    { 
      icon: ShoppingCart, 
      name: "E-commerce и ритейл", 
      description: "Обработка заказов, консультации по товарам, статус доставки, возвраты и обмены",
      metrics: [{ value: "-35%", label: "расходы на логистику" }, { value: "8x", label: "скорость обработки" }],
      useCases: ["Прием заказов 24/7", "Консультации по каталогу", "Отслеживание доставки", "Обработка возвратов"],
    },
    { 
      icon: HardHat, 
      name: "Строительство и ремонт", 
      description: "Расчет стоимости, запись на замеры, консультации по материалам, работа с подрядчиками",
      metrics: [{ value: "+156%", label: "рост продаж" }, { value: "0", label: "пропущенных" }],
      useCases: ["Расчет сметы", "Запись на замер", "Консультации", "Работа с прайсами"],
    },
    { 
      icon: Warehouse, 
      name: "Логистика и склад", 
      description: "Расчет доставки, отслеживание грузов, работа с перевозчиками, складской учет",
      metrics: [{ value: "-40%", label: "время на заявку" }, { value: "+89%", label: "конверсия" }],
      useCases: ["Расчет маршрутов", "Tracking грузов", "Работа с ТК", "Складской учет"],
    },
    { 
      icon: Stethoscope, 
      name: "Медицина и клиники", 
      description: "Запись на прием, напоминания, консультации по услугам, работа с документами",
      metrics: [{ value: "100%", label: "дозвон" }, { value: "-40%", label: "нагрузка" }],
      useCases: ["Запись на прием", "Напоминания", "Результаты анализов", "Консультации"],
    },
    { 
      icon: Factory, 
      name: "Производство и B2B", 
      description: "Работа с дилерами, прием заказов, расчет цен, документооборот, отгрузки",
      metrics: [{ value: "3-5x", label: "производительность" }, { value: "+50%", label: "конверсия" }],
      useCases: ["Прием заказов от дилеров", "Расчет по прайсу", "Документооборот", "Отгрузки"],
    },
    { 
      icon: Briefcase, 
      name: "Услуги и консалтинг", 
      description: "Квалификация лидов, запись на консультации, работа с проектами, счета",
      metrics: [{ value: "+180%", label: "выручка" }, { value: "2.5 мес", label: "окупаемость" }],
      useCases: ["Квалификация лидов", "Запись на консультации", "Ведение проектов", "Счета и акты"],
    },
  ]

  // Pricing factors
  const pricingFactors = [
    { factor: "Количество модулей", description: "Используйте 1-2 модуля или полный стек из 6+ модулей", range: "от 25 000 до 150 000 руб/мес" },
    { factor: "Объем операций", description: "Количество звонков, заявок, заказов в месяц", range: "тарифы от 1 000 до unlimited" },
    { factor: "Сложность интеграций", description: "Готовые коннекторы бесплатно, кастомные — отдельно", range: "от 0 до 200 000 руб единоразово" },
    { factor: "Уровень поддержки", description: "Email, приоритетная или 24/7 с выделенным менеджером", range: "включено в тариф или +20-50%" },
    { factor: "Кастомизация", description: "Стандартные сценарии или полная адаптация под процессы", range: "от 0 до 500 000 руб" },
  ]

  // FAQ
  const faqs = [
    { 
      question: "Что такое AI для бизнеса и чем отличается от обычной автоматизации?", 
      answer: "AI для бизнеса — это системы на базе машинного обучения и больших языковых моделей (LLM), которые понимают естественный язык, контекст и могут принимать решения. В отличие от обычных скриптов, AI адаптируется к новым ситуациям, учится на данных и ведет полноценные диалоги. Например, робот-оператор не просто п��оигрывает записанные фразы, а понимает вопрос клиента и формирует релевантный ответ." 
    },
    { 
      question: "Сколько времени занимает внедрение AI-платформы?", 
      answer: "Типовое внедрение одного модуля — 7-14 дней. Полный стек из 4-6 модулей — 20-30 дней. Enterprise-проекты с глубокой интеграцией — 1-3 месяца. Мы используем agile-подход: сначала запускаем MVP, затем дорабатываем на основе реальных данных." 
    },
    { 
      question: "Какие интеграции поддерживаются?", 
      answer: "Готовые коннекторы: amoCRM, Bitrix24, 1C, RetailCRM, МойСклад, СДЭК, Boxberry, ДеловыеЛинии, Яндекс.Доставка, все популярные SIP-провайдеры. API для любых кастомных интеграций. Webhook-и для real-time синхронизации." 
    },
    { 
      question: "Как обеспечивается безопасность данных?", 
      answer: "ISO 27001 сертификация, соответствие ФЗ-152 и GDPR. Данные хранятся в защищенных ЦОД в РФ и ЕС (по выбору). Шифрование в транспорте (TLS 1.3) и хранилище (AES-256). Ежедневные резервные копии. Опция on-premise для enterprise." 
    },
    { 
      question: "Можно ли использовать только часть платформы?", 
      answer: "Да, платформа полностью модульная. Начните с одного модуля (например, робота-оператора) и добавляйте другие по мере роста. Модули работают синергетически: данные из звонков автоматически попадают в заявки, заявки конвертируются в заказы и счета." 
    },
    { 
      question: "Какая окупаемость инвестиций?", 
      answer: "Средняя окупаемость — 2-3 месяца. Рассчитываем ROI до старта проекта на основе ваших текущих метрик. Типичные результаты: -70% ФОТ на рутинных операциях, +40-180% рост продаж, 0 потерянных заявок, 24/7 работа без дополнительных затрат." 
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero - Dark premium style inspired by OpenAI */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(100,100,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(150,100,255,0.08),transparent_50%)]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "2s" }} />
        
        <div className="container relative mx-auto px-4 max-w-6xl py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-white/70">Центральный хаб AI-решений для бизнеса</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
              <span className="block">Искусственный</span>
              <span className="block">интеллект</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">для бизнеса</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl leading-relaxed">
              Единая AI-платформа для автоматизации звонков, продаж, заявок, заказов, счетов и логистики. Сокращение ручного труда на 70%, рост продаж до 3x.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                size="lg" 
                onClick={() => openModal("demo")} 
                className="h-14 px-8 text-base bg-white text-black hover:bg-white/90 rounded-full"
              >
                Запросить демо <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/5 bg-transparent rounded-full"
              >
                <Play className="mr-2 h-5 w-5" /> Смотреть видео
              </Button>
            </div>
            
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
              <div ref={stat1.ref}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">-{stat1.count}%</div>
                <div className="text-sm text-white/50">ручного труда</div>
              </div>
              <div ref={stat2.ref}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat2.count}+</div>
                <div className="text-sm text-white/50">AI-модулей</div>
              </div>
              <div ref={stat3.ref}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat3.count}+</div>
                <div className="text-sm text-white/50">внедрений</div>
              </div>
              <div ref={stat4.ref}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat4.count}/7</div>
                <div className="text-sm text-white/50">работа системы</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* What is AI for Business - SEO block */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6">Определение</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance">
                Что та��ое искусственный интеллект для бизнеса
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">AI для бизнеса</strong> — это комплекс технологий машинного обучения и больших языковых моделей (LLM), которые автоматизируют рутинные операции и принимают решения без участия человека.
                </p>
                <p>
                  В отличие от классических скриптов и IVR-систем, бизнес-AI понимает естественный язык, адаптируется к контексту и учится на данных. Робот-оператор не проигрывает записи — он ведет полноценный диалог.
                </p>
                <p>
                  Наша платформа объединяет 12+ специализированных AI-модулей: от приема звонков до расчета доставки. Модули работают как единая экосистема, передавая данные друг другу автоматически.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-3xl border border-border/50 p-8 space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="font-semibold">Понимание языка</div>
                    <div className="text-sm text-muted-foreground">NLU + LLM для диалогов</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="font-semibold">Обучение на данных</div>
                    <div className="text-sm text-muted-foreground">Ваши прайсы, FAQ, записи</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="font-semibold">Автоматизация процессов</div>
                    <div className="text-sm text-muted-foreground">End-to-end без человека</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold">Самоулучшение</div>
                    <div className="text-sm text-muted-foreground">Учится на каждом диалоге</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Processes - Interactive */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <Badge variant="outline" className="mb-6">Автоматизация</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Какие бизнес-процессы можно автоматизировать с AI
            </h2>
            <p className="text-xl text-muted-foreground">
              От первого контакта до доставки — AI берет на себя до 95% рутинных операций
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Process tabs */}
            <div className="lg:col-span-2 space-y-2">
              {processes.map((process, idx) => {
                const Icon = process.icon
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveProcess(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeProcess === idx 
                        ? "bg-primary text-primary-foreground shadow-lg" 
                        : "bg-card hover:bg-muted border border-border/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${activeProcess === idx ? "" : "text-muted-foreground"}`} />
                      <span className="font-medium">{process.title}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Process details */}
            <div className="lg:col-span-3">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    {(() => { const Icon = processes[activeProcess].icon; return <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center"><Icon className="w-7 h-7 text-primary" /></div> })()}
                    <div>
                      <h3 className="text-2xl font-bold">{processes[activeProcess].title}</h3>
                      <div className="flex gap-4 mt-1">
                        <span className="text-sm text-green-600 font-medium">{processes[activeProcess].automation} автоматизация</span>
                        <span className="text-sm text-blue-600 font-medium">{processes[activeProcess].savings}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {processes[activeProcess].description}
                  </p>
                  
                  <div className="mb-8">
                    <div className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">Примеры автоматизации</div>
                    <div className="grid grid-cols-2 gap-3">
                      {processes[activeProcess].examples.map((example, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button onClick={() => openModal("consultation")} className="w-full">
                    Автоматизировать этот процесс <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules - Hub section */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-white/20 text-white/70">Платформа</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Из каких модулей состоит платформа
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              12+ специализированных AI-модулей. Используйте отдельно или вместе как единую экосистему.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allModules.map((module, idx) => {
              const Icon = module.icon
              return (
                <Link
                  key={idx}
                  href={module.href}
                  onMouseEnter={() => setHoveredModule(idx)}
                  onMouseLeave={() => setHoveredModule(null)}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                    hoveredModule === idx 
                      ? "bg-white/10 border-white/20 scale-[1.02]" 
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  {module.tag && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${module.color} text-white`}>
                        {module.tag}
                      </span>
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">{module.title}</h3>
                  <p className="text-sm text-white/50 mb-4">{module.description}</p>
                  <div className="flex items-center text-sm text-white/70 group-hover:text-white transition-colors">
                    Подробнее <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/solutions">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-full">
                Смотреть все решения <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <Badge variant="outline" className="mb-6">Отрасли</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Для каких отраслей подходит AI
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовые решения и отраслевые best practices
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Industry tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              {industries.map((industry, idx) => {
                const Icon = industry.icon
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndustry(idx)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      activeIndustry === idx 
                        ? "bg-primary text-primary-foreground shadow-lg" 
                        : "bg-card hover:bg-muted border border-border/50"
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-2 ${activeIndustry === idx ? "" : "text-muted-foreground"}`} />
                    <div className="font-medium text-sm">{industry.name}</div>
                  </button>
                )
              })}
            </div>

            {/* Industry details */}
            <Card className="h-full">
              <CardContent className="p-8">
                {(() => {
                  const ind = industries[activeIndustry]
                  const Icon = ind.icon
                  return (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{ind.name}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{ind.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-xl">
                        {ind.metrics.map((m, i) => (
                          <div key={i}>
                            <div className="text-2xl font-bold text-primary">{m.value}</div>
                            <div className="text-sm text-muted-foreground">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mb-6">
                        <div className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Сценарии использования</div>
                        <div className="space-y-2">
                          {ind.useCases.map((uc, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-500" />
                              <span>{uc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button onClick={() => openModal("consultation")} className="w-full">
                        Обсудить внедрение <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </>
                  )
                })()}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing transparency */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <Badge variant="outline" className="mb-6">Стоимость</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Сколько стоит внедрение AI для бизнеса
            </h2>
            <p className="text-xl text-muted-foreground">
              Прозрачное ценообразование. Платите только за то, что используете.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Starter */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="text-sm text-muted-foreground mb-2">Стартап</div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">от 25 000</span>
                  <span className="text-muted-foreground">руб/мес</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["1-2 модуля", "До 1000 операций", "Email поддержка", "Базовые интеграции", "14 дней бесплатно"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" onClick={() => openModal("consultation")} className="w-full">
                  Начать
                </Button>
              </CardContent>
            </Card>

            {/* Business */}
            <Card className="relative overflow-hidden border-primary shadow-lg ring-2 ring-primary">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Популярный
              </div>
              <CardContent className="p-8 pt-10">
                <div className="text-sm text-muted-foreground mb-2">Бизнес</div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">от 75 000</span>
                  <span className="text-muted-foreground">руб/мес</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["3-4 модуля", "До 5000 операций", "Приоритетная поддержка", "Все интеграции", "Выделенный менеджер", "Обучение команды"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => openModal("consultation")} className="w-full">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="relative overflow-hidden bg-[#0a0a0a] text-white border-white/10">
              <CardContent className="p-8">
                <div className="text-sm text-white/60 mb-2">Enterprise</div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">Индивидуально</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Все модули", "Неограниченно", "24/7 поддержка", "Кастомные интеграции", "SLA 99.9%", "On-premise опция"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 text-green-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" onClick={() => openModal("consultation")} className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent">
                  Связаться
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Pricing factors */}
          <div className="bg-card rounded-2xl border border-border/50 p-8">
            <h3 className="text-xl font-bold mb-6">От чего зависит стоимость</h3>
            <div className="space-y-4">
              {pricingFactors.map((pf, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-border/50 last:border-0">
                  <div className="mb-2 md:mb-0">
                    <div className="font-medium">{pf.factor}</div>
                    <div className="text-sm text-muted-foreground">{pf.description}</div>
                  </div>
                  <div className="text-sm font-medium text-primary">{pf.range}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why M2 */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">Почему мы</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Почему M2 AI Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Технологическое лидерство и экспертиза в AI-автоматизации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Собственная AI-платформа", description: "Не зависим от сторонних решений. Полный контроль над технологией, скоростью развития и данными." },
              { icon: Globe, title: "Мультиязычность", description: "Поддержка 6+ языков из коробки. Автоопределение языка собеседника и переключение на лету." },
              { icon: Zap, title: "Быстрое внедрение", description: "Полный запуск за 20-30 дней. Готовые интеграции с amoCRM, Bitrix24, 1C и 50+ другими системами." },
              { icon: Shield, title: "Безопасность данных", description: "ISO 27001, GDPR, 152-ФЗ. Данные на защищенных серверах в РФ и ЕС. Опция on-premise." },
              { icon: Users, title: "Экспертная команда", description: "10+ лет опыта в AI и автоматизации. 50+ успешных внедрений. Выделенный менеджер проекта." },
              { icon: TrendingUp, title: "Гарантия результата", description: "ROI рассчитываем до старта. Средняя окупаемость — 2-3 месяца. Пилот с измеримыми метриками." },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-6">FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Частые вопросы</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border rounded-xl overflow-hidden bg-card">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === idx ? "rotate-90" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,100,255,0.15),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="container relative mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Автоматизируйте бизнес
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">за 30 дней</span>
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Получите бесплатный аудит процессов, расчет ROI и демо всех модулей платформы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => openModal("demo")} 
              className="h-14 px-8 bg-white text-black hover:bg-white/90 rounded-full"
            >
              Запросить демо <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => openModal("consultation")}
              className="h-14 px-8 border-white/20 text-white hover:bg-white/10 bg-transparent rounded-full"
            >
              Рассчитать экономию
            </Button>
          </div>
          <p className="mt-8 text-sm text-white/40">
            Без обязательств · Демо всех модулей · NDA по запросу
          </p>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions locale={locale} currentSlug="ai-dlya-biznesa" />
    </div>
  )
}
