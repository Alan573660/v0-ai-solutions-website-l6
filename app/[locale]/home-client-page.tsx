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
  Users,
  Building2,
  Headphones,
  Settings,
  Globe,
  Home,
  Building
} from "lucide-react"

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

export default function HomeClientPage({ locale }: { locale: Locale }) {
  const { openCTA } = useCTA()

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
    { id: "invoice-automation", title: "Автоматизация счетов", desc: "Выставление и контроль оплаты", href: "/solutions/vystavlenie-schetov", icon: Receipt, gradient: "from-amber-600 to-orange-600" },
    { id: "delivery-automation", title: "Автоматизация доставки", desc: "Логистика и уведомления клиентов", href: "/solutions/raschet-dostavki", icon: Truck, gradient: "from-teal-600 to-cyan-600" },
    { id: "request-processing", title: "Обработка заявок", desc: "Автоматический приём и распределение", href: "/solutions/obrabotka-zayavok", icon: FileText, gradient: "from-pink-600 to-rose-600" },
    { id: "order-processing", title: "Обработка заказов", desc: "Полный цикл от заказа до доставки", href: "/solutions/obrabotka-zakazov", icon: CheckCircle2, gradient: "from-lime-600 to-green-600" },
    { id: "robot-calls", title: "Робот для звонков", desc: "Массовый обзвон и уведомления", href: "/solutions/robot-dlya-zvonkov", icon: Phone, gradient: "from-slate-600 to-gray-600" },
    { id: "robot-sales", title: "Робот для продаж", desc: "AI-продавец для холодных звонков", href: "/solutions/robot-dlya-prodazh", icon: TrendingUp, gradient: "from-violet-600 to-purple-600" },
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
    { q: "Сколько стоит?", a: "Цена зависит от объёма звонков и нужных интеграций. Стартовый пакет от 15 000 руб/месяц за 500 минут. Для точного расчёта оставьте заявку — подготовим предложение за 24 часа." },
    { q: "Может ли AI общаться на разных языках?", a: "Да, поддерживается 15+ языков включая русский, английский, испанский, немецкий, французский. AI может переключаться между языками в одном разговоре." },
    { q: "Что если AI не поймёт клиента?", a: "При низком уровне уверенности AI переспрашивает или предлагает перевести на менеджера. Вероятность непонимания менее 2%. Все сложные кейсы автоматически передаются людям." },
    { q: "Есть ли тестовый период?", a: "Да, предоставляем 7 дней бесплатного тестирования с полным функционалом. Вы сможете оценить качество распознавания, интеграции и работу AI на реальных звонках." },
  ]

  const stats = [
    { value: 500, suffix: "+", label: "Проектов реализовано" },
    { value: 10, suffix: "+", label: "Лет на рынке AI" },
    { value: 87, suffix: "%", prefix: "+", label: "Средний рост конверсии" },
    { value: 98, suffix: "%", label: "Клиентов довольны" },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-center lg:text-left">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  AI-платформа для автоматизации бизнеса
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
                  AI-ассистенты для звонков,
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    продаж и автоматизации бизнеса
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Автоматизируем входящие и исходящие звонки, продажи, заявки, счета и логистику. 
                  24/7 без выходных. Интеграция с вашими системами за 7 дней.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
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
                  Бесплатная консультация - Расчёт ROI за 15 минут - Без обязательств
                </p>
              </Reveal>
            </div>

            {/* Right side - Animated AI Agent Visualization */}
            <div className="hidden lg:block">
              <Reveal delay={200}>
                <div className="relative">
                  {/* Main AI Agent Circle */}
                  <div className="relative w-80 h-80 mx-auto">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-[spin_20s_linear_infinite]" />
                    
                    {/* Middle pulsing ring */}
                    <div className="absolute inset-4 rounded-full border border-cyan-500/40 animate-[ping_3s_ease-in-out_infinite]" />
                    
                    {/* Inner glowing circle */}
                    <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                      {/* AI Brain Icon with pulse */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                          <Bot className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Sound wave visualization */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="flex items-center gap-1">
                        {[...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full"
                            style={{
                              height: `${20 + Math.sin(i * 0.8) * 15}px`,
                              animation: `soundWave 1.2s ease-in-out infinite`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Orbiting feature icons */}
                    <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg animate-[spin_15s_linear_infinite]">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg animate-[spin_15s_linear_infinite]">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg animate-[spin_15s_linear_infinite]">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg animate-[spin_15s_linear_infinite]">
                          <Database className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating status cards */}
                  <div className="absolute -top-4 -right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-xl animate-[float_3s_ease-in-out_infinite]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm text-slate-300">Звонок принят</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">+7 (999) ***-**-12</div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-xl animate-[float_3s_ease-in-out_infinite]" style={{ animationDelay: "1.5s" }}>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-slate-300">Заявка создана</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">CRM: amoCRM #4521</div>
                  </div>

                  <div className="absolute top-1/2 -right-16 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-xl animate-[float_3s_ease-in-out_infinite]" style={{ animationDelay: "0.75s" }}>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-300">Конверсия</span>
                    </div>
                    <div className="text-lg font-bold text-white">+87%</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

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

      {/* WHAT AI AUTOMATES */}
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

      {/* HOW AI WORKS */}
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

      {/* AI CAPABILITIES */}
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

      {/* SOLUTIONS */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">12 решений для вашего бизнеса</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящее решение или получите персональную консультацию
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon
              return (
                <Reveal key={solution.id} delay={idx * 50}>
                  <Link href={`/${locale}${solution.href}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/50 h-full cursor-pointer">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{solution.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{solution.desc}</p>
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                          Подробнее <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

      {/* CASES */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Кейсы внедрения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="overflow-hidden h-full">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600">
                    <p className="text-white/80 text-sm">{item.industry}</p>
                    <h3 className="text-xl font-bold text-white">{item.company}</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <p className="text-xs text-red-500 font-medium uppercase mb-1">Задача</p>
                      <p className="text-sm text-muted-foreground">{item.task}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-xs text-green-500 font-medium uppercase mb-1">Результат</p>
                      <p className="text-sm font-medium">{item.result}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {item.metrics.map((m, i) => (
                        <div key={i} className="text-center p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                          <div className="text-lg font-bold text-primary">{m.value}</div>
                          <div className="text-xs text-muted-foreground">{m.label}</div>
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

      {/* INTEGRATIONS */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Интеграции</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              CRM, телефония, мессенджеры — всё работает вместе
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap justify-center gap-3">
              {integrations.map((item) => (
                <div key={item} className="px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-border/50 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="bg-white dark:bg-slate-800 rounded-xl px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Готовы автоматизировать бизнес?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Получите бесплатную консультацию и расчёт ROI для вашей компании. 
              Начните с 7-дневного тестового периода.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openCTA()}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl"
              >
                Получить бесплатный аудит
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-slate-500 text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-xl"
              >
                <Phone className="mr-2 w-5 h-5" />
                +7 (499) 123-45-67
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-8">
              Первый месяц со скидкой 30% для новых клиентов
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
