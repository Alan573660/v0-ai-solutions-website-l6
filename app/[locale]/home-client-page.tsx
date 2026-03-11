"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"
import { 
  Phone, 
  PhoneIncoming, 
  PhoneOutgoing, 
  TrendingUp, 
  FileText, 
  Receipt, 
  Truck,
  Bot,
  Brain,
  Mic,
  MessageSquare,
  Database,
  BarChart3,
  Shield,
  Zap,
  Clock,
  CheckCircle2,
  ArrowRight,
  Play,
  Pause,
  Users,
  Building2,
  Headphones,
  Settings,
  Globe,
  Home,
  Building,
  ChevronRight
} from "lucide-react"

/* ============================================================= */
/* Reveal Animation Component                                     */
/* ============================================================= */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  )
}

/* ============================================================= */
/* Animated Counter Component                                     */
/* ============================================================= */
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

/* ============================================================= */
/* Main Homepage Component                                        */
/* ============================================================= */
export default function HomeClientPage({ locale }: { locale: Locale }) {
  const { openCTA } = useCTA()
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // ===== DATA =====
  const automationTypes = [
    { icon: PhoneIncoming, title: "Входящие звонки", desc: "Приём, квалификация лидов, создание заявок в CRM", color: "from-blue-500 to-cyan-500" },
    { icon: PhoneOutgoing, title: "Исходящие звонки", desc: "Обзвон, напоминания, follow-up и реактивация", color: "from-cyan-500 to-teal-500" },
    { icon: TrendingUp, title: "Продажи", desc: "От первого контакта до закрытия сделки", color: "from-green-500 to-emerald-500" },
    { icon: FileText, title: "Заявки", desc: "Сбор, обработка, распределение по менеджерам", color: "from-purple-500 to-pink-500" },
    { icon: Receipt, title: "Счета", desc: "Выставление, отправка, контроль оплаты", color: "from-orange-500 to-red-500" },
    { icon: Truck, title: "Логистика", desc: "Расчёт доставки, трекинг, уведомления", color: "from-indigo-500 to-purple-500" },
  ]

  const processSteps = [
    { num: "01", title: "Слушает", desc: "AI распознаёт речь клиента в реальном времени с точностью 98%", icon: Mic },
    { num: "02", title: "Понимает", desc: "Анализирует контекст и намерение через LLM", icon: Brain },
    { num: "03", title: "Отвечает", desc: "Формирует естественный ответ голосом", icon: MessageSquare },
    { num: "04", title: "Действует", desc: "Создаёт заявки, сделки, записи в CRM", icon: Database },
    { num: "05", title: "Анализирует", desc: "Собирает данные для аналитики и улучшений", icon: BarChart3 },
    { num: "06", title: "Передаёт", desc: "При необходимости переводит на менеджера", icon: Headphones },
  ]

  const capabilities = [
    { icon: Bot, title: "Голосовой AI-агент", desc: "Ведёт диалог неотличимо от человека" },
    { icon: Brain, title: "Понимание контекста", desc: "Помнит историю разговора и клиента" },
    { icon: Database, title: "CRM интеграция", desc: "amoCRM, Bitrix24, 1C, Leadvertex" },
    { icon: BarChart3, title: "Расчёт цен", desc: "Калькуляция по прайсу в реальном времени" },
    { icon: Shield, title: "Безопасность", desc: "152-ФЗ, GDPR, шифрование данных" },
    { icon: Zap, title: "Мгновенный ответ", desc: "Поднимает трубку за 0.3 секунды" },
    { icon: Clock, title: "24/7 работа", desc: "Без выходных, праздников, больничных" },
    { icon: Globe, title: "15+ языков", desc: "Мультиязычная поддержка клиентов" },
  ]

  const solutions = [
    { id: "robot-operator", title: "Робот оператор", desc: "Автоматический приём всех входящих звонков", href: "/solutions/robot-operator", icon: Phone, gradient: "from-blue-600 to-cyan-600" },
    { id: "voice-sales", title: "Голосовой AI-менеджер", desc: "Автоматизация продаж от звонка до сделки", href: "/solutions/voice-sales-manager", icon: TrendingUp, gradient: "from-green-600 to-emerald-600" },
    { id: "virtual-operator", title: "Виртуальный оператор", desc: "Умная маршрутизация и распределение звонков", href: "/solutions/virtual-operator", icon: Headphones, gradient: "from-purple-600 to-pink-600" },
    { id: "automatic-operator", title: "Автоматический оператор", desc: "IVR нового поколения с AI-обработкой", href: "/solutions/automatic-operator", icon: Settings, gradient: "from-orange-600 to-red-600" },
    { id: "ai-business", title: "AI для бизнеса", desc: "Комплексная автоматизация процессов", href: "/solutions/ai-dlya-biznesa", icon: Building2, gradient: "from-indigo-600 to-purple-600" },
    { id: "automation-sales", title: "Автоматизация продаж", desc: "Увеличение конверсии и выручки", href: "/solutions/automation-sales", icon: BarChart3, gradient: "from-cyan-600 to-blue-600" },
    { id: "invoice-automation", title: "Автоматизация счетов", desc: "Выставление и контроль оплаты", href: "/solutions/invoice-automation", icon: Receipt, gradient: "from-amber-600 to-orange-600" },
    { id: "delivery-automation", title: "Автоматизация доставки", desc: "Логистика и уведомления клиентов", href: "/solutions/delivery-automation", icon: Truck, gradient: "from-teal-600 to-cyan-600" },
    { id: "smart-home", title: "Умный дом", desc: "Голосовое управление домом", href: "/solutions/smart-home", icon: Home, gradient: "from-pink-600 to-rose-600" },
    { id: "smb", title: "Для малого бизнеса", desc: "Быстрый старт за 1-2 недели", href: "/solutions/smb", icon: Building2, gradient: "from-lime-600 to-green-600" },
    { id: "enterprise", title: "Enterprise", desc: "Корпоративные решения и госсектор", href: "/solutions/enterprise", icon: Building, gradient: "from-slate-600 to-gray-600" },
    { id: "integrations", title: "Интеграции", desc: "CRM, телефония, учётные системы", href: "/integrations", icon: Database, gradient: "from-violet-600 to-purple-600" },
  ]

  const cases = [
    { 
      company: "СтройМаркет", 
      industry: "Строительные материалы",
      task: "5000+ пропущенных звонков в месяц",
      result: "0 пропущенных, +156% продаж",
      metrics: [{ value: "0", label: "пропущенных" }, { value: "+156%", label: "продажи" }, { value: "80%", label: "без менеджера" }]
    },
    { 
      company: "ЛогистикПро", 
      industry: "Грузоперевозки",
      task: "Расчёт стоимости занимал 30 минут",
      result: "КП за 3 минуты во время звонка",
      metrics: [{ value: "3 мин", label: "расчёт КП" }, { value: "+89%", label: "конверсия" }, { value: "24/7", label: "приём заявок" }]
    },
    { 
      company: "МедЦентр Плюс", 
      industry: "Медицина",
      task: "Пациенты не могли дозвониться",
      result: "100% дозвон, -40% нагрузки",
      metrics: [{ value: "100%", label: "дозвон" }, { value: "-40%", label: "нагрузка" }, { value: "2 мин", label: "запись" }]
    },
  ]

  const integrations = [
    "amoCRM", "Bitrix24", "1C", "Leadvertex", "Мегаплан", "Контур",
    "Asterisk", "Mango Office", "Sipuni", "Zadarma", "Telphin", "UIS",
    "Telegram", "WhatsApp", "Viber", "VK", "Email", "SMS"
  ]

  const faqItems = [
    { q: "Как быстро можно запустить AI?", a: "Типовое внедрение занимает 7-14 дней. Это включает интеграцию с вашими системами, настройку сценариев и тестовый период. Для стандартных сценариев срок можно сократить до 3-5 дней." },
    { q: "Какие системы поддерживаются?", a: "Мы интегрируемся с amoCRM, Bitrix24, Leadvertex, 1С, Контур, Мегаплан. Телефония: Asterisk, Mango Office, Sipuni, Zadarma, любой SIP. Если вашей системы нет — разработаем интеграцию." },
    { q: "Сколько стоит?", a: "Цена зависит от объёма звонков и нужных интеграций. Стартовый пакет от 15 000 ₽/месяц за 500 минут. Для точного расчёта оставьте заявку — подготовим предложение за 24 часа." },
    { q: "Может ли AI общаться на разных языках?", a: "Да, поддерживается 15+ языков включая русский, английский, испанский, немецкий, французский. AI может переключаться между языками в одном разговоре." },
    { q: "Что если AI не поймёт клиента?", a: "При низком уровне уверенности AI переспрашивает или предлагает перевести на менеджера. Вероятность непонимания менее 2%. Все сложные кейсы автоматически передаются людям." },
    { q: "Есть ли тестовый период?", a: "Да, предоставляем 7 дней бесплатного тестирования с полным функционалом. Вы сможете оценить качество распознавания, интеграции и работу AI на реальных звонках." },
  ]

  const audioExamples = [
    { id: "construction", title: "Расчёт кровли", desc: "AI рассчитал стоимость и создал сделку", duration: "2:15", category: "Строительство" },
    { id: "logistics", title: "Заказ доставки", desc: "Оформление с расчётом логистики", duration: "1:45", category: "Логистика" },
    { id: "medical", title: "Запись к врачу", desc: "Запись пациента с учётом предпочтений", duration: "1:30", category: "Медицина" },
  ]

  const stats = [
    { value: 500, suffix: "+", label: "Проектов реализовано" },
    { value: 10, suffix: "+", label: "Лет на рынке AI" },
    { value: 87, suffix: "%", prefix: "+", label: "Средний рост конверсии" },
    { value: 98, suffix: "%", label: "Клиентов довольны" },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                AI-платформа для автоматизации бизнеса
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
                AI-агенты, которые
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  работают за вас
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Автоматизируем входящие и исходящие звонки, продажи, заявки, счета и логистику. 
                24/7 без выходных. Интеграция с вашими системами за 7 дней.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  onClick={() => openCTA()}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25"
                >
                  Получить бесплатный аудит
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-slate-600 text-slate-200 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Послушать AI в деле
                </Button>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <p className="text-sm text-slate-500">
                Бесплатная консультация • Расчёт ROI за 15 минут • Без обязательств
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT AI AUTOMATES ========== */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Что автоматизирует AI</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл работы с клиентами — от первого звонка до повторных продаж
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationTypes.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={idx} delay={idx * 50}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-slate-800 overflow-hidden">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========== HOW AI WORKS ========== */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Как работает AI</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              6 шагов от звонка клиента до закрытия сделки
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="relative group">
                    <div className="absolute -top-4 -left-4 text-8xl font-bold text-slate-100 dark:text-slate-800 select-none z-0">
                      {step.num}
                    </div>
                    <div className="relative z-10 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========== AI CAPABILITIES ========== */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Что умеет AI</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Возможности платформы M2 AI Solutions
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon
              return (
                <Reveal key={idx} delay={idx * 50}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <Icon className="w-10 h-10 text-cyan-400 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                    <p className="text-slate-400 text-sm">{cap.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========== SOLUTIONS ========== */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">12 решений для вашего бизнеса</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовые модули для любых задач автоматизации
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon
              return (
                <Reveal key={solution.id} delay={idx * 40}>
                  <Link href={`/${locale}${solution.href}`}>
                    <Card className="group h-full hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/50 cursor-pointer overflow-hidden">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{solution.desc}</p>
                        <div className="flex items-center text-primary text-sm font-medium">
                          Подробнее <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========== CASES ========== */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Кейсы внедрения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((caseItem, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="h-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-1">{caseItem.industry}</div>
                    <h3 className="text-xl font-bold mb-4">{caseItem.company}</h3>
                    
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-1">Проблема</div>
                      <p className="text-sm text-muted-foreground">{caseItem.task}</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">Результат</div>
                      <p className="text-sm font-medium">{caseItem.result}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      {caseItem.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INTEGRATIONS ========== */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Интеграции</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Подключаем к вашим CRM, телефонии и мессенджерам
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap justify-center gap-3">
              {integrations.map((item, idx) => (
                <div 
                  key={idx} 
                  className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-border/50 text-sm font-medium hover:border-primary/50 hover:shadow-md transition-all"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== PRICING ========== */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Старт", price: "15 000", minutes: "500", features: ["1 AI-агент", "Базовые интеграции", "Email поддержка", "Аналитика звонков"] },
              { name: "Бизнес", price: "45 000", minutes: "2000", popular: true, features: ["3 AI-агента", "Все интеграции", "Приоритетная поддержка", "Расширенная аналитика", "Кастомные сценарии"] },
              { name: "Enterprise", price: "По запросу", minutes: "Безлимит", features: ["Неограниченно агентов", "Выделенная инфраструктура", "SLA 99.9%", "Персональный менеджер", "On-premise опция"] },
            ].map((plan, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className={`relative h-full ${plan.popular ? "border-2 border-primary shadow-xl" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Популярный
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "По запросу" && <span className="text-muted-foreground"> ₽/мес</span>}
                    </div>
                    <div className="text-sm text-muted-foreground mb-6">{plan.minutes} минут/месяц</div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? "bg-primary" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => openCTA()}
                    >
                      Выбрать тариф
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о платформе
            </p>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`faq-${idx}`}
                  className="bg-white dark:bg-slate-800 rounded-xl px-6 border border-border/50"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal className="mt-8 text-center">
            <p className="text-muted-foreground">
              Остались вопросы?{" "}
              <span 
                className="text-primary font-semibold cursor-pointer hover:underline"
                onClick={() => openCTA()}
              >
                Напишите нам
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Готовы автоматизировать
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                ваш бизнес?
              </span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Присоединяйтесь к 500+ компаниям, которые уже автоматизировали свои процессы. 
              Получите бесплатную консультацию и расчёт ROI.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                onClick={() => openCTA()}
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl font-semibold"
              >
                Получить консультацию
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-slate-500 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                <Phone className="mr-2 w-5 h-5" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-sm text-slate-400">
              Первый месяц скидка 30% для новых клиентов. 7 дней бесплатного тестирования.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
