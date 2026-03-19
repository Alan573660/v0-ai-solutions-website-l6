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
  Sparkles,
  Star,
  ChevronRight,
  Target,
  Layers,
  PieChart,
  Cpu,
  Workflow,
  ArrowUpRight
} from "lucide-react"

/* ══════════════════════════════════════════════════════════════════════════════
   ANIMATION COMPONENTS
═══════════════════════════════════════════════════════════════════════════════ */

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

function TypeWriter({ texts, className = "" }: { texts: string[]; className?: string }) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 30 : 80)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function FloatingCard({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <div 
      className={`animate-float ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: "4s"
      }}
    >
      {children}
    </div>
  )
}

function GlowOrb({ className = "", color = "violet" }: { className?: string; color?: string }) {
  const colorMap: Record<string, string> = {
    violet: "bg-violet-500/30",
    blue: "bg-blue-500/25",
    cyan: "bg-cyan-500/20",
    purple: "bg-purple-500/25",
    pink: "bg-pink-500/20"
  }
  return (
    <div className={`absolute rounded-full blur-[100px] pointer-events-none ${colorMap[color]} ${className}`} />
  )
}

/* ══════════════════════════════════════════════════════════════════════════════
   INTERACTIVE DEMO COMPONENT
═══════════════════════════════════════════════════════════════════════════════ */

function AIVoiceDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)

  const conversation = [
    { role: "ai", text: "Добрый день! Компания АйТиПро, чем могу помочь?" },
    { role: "client", text: "Здравствуйте, интересует стоимость внедрения CRM" },
    { role: "ai", text: "Конечно! Подскажите, сколько сотрудников будет работать в системе?" },
    { role: "client", text: "Около 15 человек в отделе продаж" },
    { role: "ai", text: "Отлично! Для 15 пользователей оптимальный тариф - Бизнес. Стоимость 45 000 руб/мес. Включает интеграцию с телефонией и обучение. Отправить коммерческое предложение на почту?" },
  ]

  useEffect(() => {
    if (isPlaying && currentLine < conversation.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 2500)
      return () => clearTimeout(timer)
    }
    if (currentLine >= conversation.length) {
      setTimeout(() => {
        setCurrentLine(0)
        setIsPlaying(false)
      }, 3000)
    }
  }, [isPlaying, currentLine, conversation.length])

  return (
    <div className="relative">
      {/* Main demo card */}
      <div className="relative rounded-3xl overflow-hidden"
        style={{ 
          background: "linear-gradient(145deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.05) 100%)",
          boxShadow: "0 0 0 1px rgba(139,92,246,0.2), 0 25px 50px -12px rgba(0,0,0,0.4)"
        }}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10"
          style={{ background: "rgba(139,92,246,0.1)" }}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/40">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-slate-900 shadow shadow-emerald-400/60" />
            </div>
            <div>
              <div className="font-bold text-white">AI-ассистент M2</div>
              <div className="text-sm text-emerald-400 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Онлайн
              </div>
            </div>
          </div>
          <button 
            onClick={() => { setIsPlaying(true); setCurrentLine(0) }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 hover:bg-violet-500/30 hover:text-white transition-all font-semibold text-sm"
          >
            <Play className="h-4 w-4" />
            Запустить демо
          </button>
        </div>

        {/* Conversation area */}
        <div className="h-72 p-5 space-y-4 overflow-y-auto">
          {!isPlaying && currentLine === 0 && (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-400/30 flex items-center justify-center">
                <Mic className="h-10 w-10 text-violet-400" />
              </div>
              <p className="text-slate-400 max-w-xs">
                Нажмите «Запустить демо» чтобы увидеть как AI ведёт реальный диалог с клиентом
              </p>
            </div>
          )}
          
          {conversation.slice(0, currentLine).map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "client" ? "flex-row-reverse" : ""}`}>
              <div className={`flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold ${
                msg.role === "ai" 
                  ? "bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md shadow-violet-500/30" 
                  : "bg-slate-600/60 text-slate-300"
              }`}>
                {msg.role === "ai" ? <Bot className="h-4 w-4" /> : "К"}
              </div>
              <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "ai" 
                  ? "bg-white/[0.08] text-white/90 rounded-tl-sm border border-white/10" 
                  : "bg-gradient-to-br from-violet-600/30 to-purple-500/20 text-white border border-violet-400/20 rounded-tr-sm"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {isPlaying && currentLine < conversation.length && (
            <div className={`flex gap-3 ${conversation[currentLine]?.role === "client" ? "flex-row-reverse" : ""}`}>
              <div className={`flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center ${
                conversation[currentLine]?.role === "ai" 
                  ? "bg-gradient-to-br from-violet-500 to-purple-600 text-white" 
                  : "bg-slate-600/60 text-slate-300"
              }`}>
                {conversation[currentLine]?.role === "ai" ? <Bot className="h-4 w-4" /> : "К"}
              </div>
              <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/10">
                {[0, 1, 2].map(i => (
                  <span key={i} className="h-2 w-2 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer status */}
        <div className="px-6 py-3 border-t border-white/10 flex items-center justify-between text-sm"
          style={{ background: "rgba(0,0,0,0.2)" }}>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-violet-400" />
              Среднее время: 45 сек
            </span>
          </div>
          <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="h-4 w-4" />
            Без участия человека
          </span>
        </div>
      </div>

      {/* Floating stats */}
      <FloatingCard delay={0} className="absolute -top-6 -right-6 z-10">
        <div className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">+87%</div>
              <div className="text-xs text-slate-400">Конверсия</div>
            </div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard delay={1.5} className="absolute -bottom-4 -left-6 z-10">
        <div className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-slate-400">Приём звонков</div>
            </div>
          </div>
        </div>
      </FloatingCard>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════════════════
   INDUSTRIES SECTION - Interactive Tabs
═══════════════════════════════════════════════════════════════════════════════ */

function IndustriesSection({ locale }: { locale: Locale }) {
  const [activeIndustry, setActiveIndustry] = useState(0)

  const industries = [
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: Truck,
      color: "from-blue-500 to-cyan-500",
      description: "Автоматизация обработки заказов, статусов доставки и возвратов",
      metrics: [
        { value: "95%", label: "Заказов обработано автоматически" },
        { value: "-60%", label: "Нагрузка на поддержку" },
        { value: "24/7", label: "Приём заказов" },
      ],
      features: ["Статус заказа по номеру", "Оформление возврата", "Консультация по товарам", "Upsell и cross-sell"]
    },
    {
      id: "healthcare",
      name: "Медицина",
      icon: Users,
      color: "from-emerald-500 to-teal-500",
      description: "Запись на приём, напоминания и консультации по услугам",
      metrics: [
        { value: "100%", label: "Дозвон до клиники" },
        { value: "2 мин", label: "Среднее время записи" },
        { value: "-40%", label: "Нагрузка на регистратуру" },
      ],
      features: ["Запись к врачу", "Напоминания о визите", "Результаты анализов", "Вызов врача на дом"]
    },
    {
      id: "realestate",
      name: "Недвижимость",
      icon: Building2,
      color: "from-violet-500 to-purple-500",
      description: "Квалификация лидов, презентация объектов и запись на показы",
      metrics: [
        { value: "+120%", label: "Конверсия в показы" },
        { value: "3x", label: "Больше обработанных заявок" },
        { value: "0", label: "Пропущенных звонков" },
      ],
      features: ["Подбор объектов", "Запись на показ", "Ответы на вопросы", "Квалификация покупателя"]
    },
    {
      id: "logistics",
      name: "Логистика",
      icon: Truck,
      color: "from-orange-500 to-red-500",
      description: "Расчёт стоимости доставки и трекинг грузов в реальном времени",
      metrics: [
        { value: "30 сек", label: "Расчёт стоимости" },
        { value: "+89%", label: "Конверсия в заказ" },
        { value: "50+", label: "Параметров расчёта" },
      ],
      features: ["Расчёт доставки", "Трекинг груза", "Оформление заявки", "Страхование"]
    },
    {
      id: "finance",
      name: "Финансы",
      icon: BarChart3,
      color: "from-indigo-500 to-blue-500",
      description: "Консультации по продуктам, заявки на кредиты и страховки",
      metrics: [
        { value: "85%", label: "Заявок без менеджера" },
        { value: "+67%", label: "Конверсия в заявку" },
        { value: "152-ФЗ", label: "Полное соответствие" },
      ],
      features: ["Консультация по продуктам", "Заявка на кредит", "Статус заявки", "Запись в отделение"]
    },
  ]

  const active = industries[activeIndustry]
  const Icon = active.icon

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fafafa 0%, #ffffff 50%, #f5f5f5 100%)" }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Отрасли
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">AI для вашей отрасли</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовые решения для разных сфер бизнеса
          </p>
        </Reveal>

        {/* Industry tabs */}
        <Reveal className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((ind, idx) => {
            const TabIcon = ind.icon
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeIndustry === idx
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30 scale-105"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-violet-500/50 hover:text-violet-600"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {ind.name}
              </button>
            )
          })}
        </Reveal>

        {/* Active industry content */}
        <Reveal key={activeIndustry}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left - Info */}
            <div className="order-2 lg:order-1">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${active.color} text-white text-sm font-semibold mb-4`}>
                <Icon className="w-4 h-4" />
                {active.name}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{active.description}</h3>
              
              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {active.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-xl shadow-lg shadow-violet-500/25"
              >
                Узнать подробнее
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Right - Metrics cards */}
            <div className="order-1 lg:order-2 grid grid-cols-3 gap-4">
              {active.metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className="group p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-violet-200 hover:-translate-y-1 text-center"
                >
                  <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${active.color} bg-clip-text text-transparent mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════════════════
   WHY US SECTION - 3D Cards
═══════════════════════════════════════════════════════════════════════════════ */

function WhyUsSection() {
  const reasons = [
    {
      icon: Zap,
      title: "Быстрый запуск",
      desc: "От идеи до работающего AI за 7-14 дней. Типовые сценарии запускаем за 3 дня.",
      gradient: "from-yellow-500 to-orange-500",
      stat: "7 дней"
    },
    {
      icon: Shield,
      title: "Безопасность",
      desc: "Соответствие 152-ФЗ и GDPR. Шифрование данных, аудит доступа, SLA 99.9%.",
      gradient: "from-emerald-500 to-teal-500",
      stat: "99.9%"
    },
    {
      icon: Users,
      title: "Экспертная команда",
      desc: "10+ лет опыта в AI и автоматизации. 500+ успешных проектов в 15 отраслях.",
      gradient: "from-blue-500 to-cyan-500",
      stat: "500+"
    },
    {
      icon: Settings,
      title: "Гибкая настройка",
      desc: "Адаптируем AI под ваши процессы. Любые интеграции и кастомные сценарии.",
      gradient: "from-violet-500 to-purple-500",
      stat: "100%"
    },
    {
      icon: Headphones,
      title: "Поддержка 24/7",
      desc: "Выделенный менеджер, техническая поддержка и регулярные обновления.",
      gradient: "from-pink-500 to-rose-500",
      stat: "24/7"
    },
    {
      icon: TrendingUp,
      title: "Гарантия результата",
      desc: "Фиксируем KPI в договоре. Если не достигнуты — возвращаем деньги.",
      gradient: "from-indigo-500 to-violet-500",
      stat: "+87%"
    },
  ]

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #302b63 60%, #24243e 100%)" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(139,92,246,0.2),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Почему мы
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Почему выбирают M2 AI Solutions</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            6 причин доверить автоматизацию профессионалам
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <Reveal key={idx} delay={idx * 80}>
                <div className="group relative h-full">
                  {/* 3D card effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
                  <div className="relative p-6 rounded-2xl border border-white/10 h-full"
                    style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}>
                    
                    {/* Stat badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-bold">
                      {reason.stat}
                    </div>

                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-violet-300 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════════════════ */

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
    { icon: Bot, title: "Голосовой AI-агент", desc: "Ведёт диалог неотличимо от человека", gradient: "from-violet-500 to-purple-600" },
    { icon: Brain, title: "Понимание контекста", desc: "Помнит историю разговора и клиента", gradient: "from-blue-500 to-cyan-600" },
    { icon: Database, title: "CRM интеграция", desc: "amoCRM, Bitrix24, 1C, Leadvertex", gradient: "from-emerald-500 to-teal-600" },
    { icon: BarChart3, title: "Расчёт цен", desc: "Калькуляция по прайсу в реальном времени", gradient: "from-orange-500 to-amber-600" },
    { icon: Shield, title: "Безопасность", desc: "152-ФЗ, GDPR, шифрование данных", gradient: "from-red-500 to-rose-600" },
    { icon: Zap, title: "Мгновенный ответ", desc: "Поднимает трубку за 0.3 секунды", gradient: "from-yellow-500 to-orange-600" },
    { icon: Clock, title: "24/7 работа", desc: "Без выходных, праздников, больничных", gradient: "from-indigo-500 to-violet-600" },
    { icon: Globe, title: "15+ языков", desc: "Мультиязычная поддержка клиентов", gradient: "from-pink-500 to-rose-600" },
  ]

  const solutions = [
    { id: "robot-operator", title: "Робот оператор", desc: "Автоматический приём всех входящих звонков", href: "/solutions/robot-operator", icon: Phone, gradient: "from-blue-600 to-cyan-600" },
    { id: "voice-sales", title: "Голосовой AI-менеджер", desc: "Автоматизация продаж от звонка до сделки", href: "/solutions/voice-sales-manager", icon: TrendingUp, gradient: "from-green-600 to-emerald-600", featured: true },
    { id: "virtual-operator", title: "Виртуальный оператор", desc: "Умная маршрутизация и распределение звонков", href: "/solutions/virtual-operator", icon: Headphones, gradient: "from-purple-600 to-pink-600" },
    { id: "automatic-operator", title: "Автоматический оператор", desc: "IVR нового поколения с AI-обработкой", href: "/solutions/automatic-operator", icon: Settings, gradient: "from-orange-600 to-red-600" },
    { id: "ai-business", title: "AI для бизнеса", desc: "Комплексная автоматизация процессов", href: "/solutions/ai-dlya-biznesa", icon: Building2, gradient: "from-indigo-600 to-purple-600" },
    { id: "automation-sales", title: "Автоматизация продаж", desc: "Увеличение конверсии и выручки", href: "/solutions/automation-sales", icon: BarChart3, gradient: "from-cyan-600 to-blue-600" },
  ]

  const cases = [
    { 
      company: "СтройМаркет", 
      industry: "Строительные материалы",
      task: "5000+ пропущенных звонков в месяц",
      result: "0 пропущенных, +156% продаж",
      metrics: [{ value: "0", label: "пропущенных" }, { value: "+156%", label: "продажи" }, { value: "80%", label: "без менеджера" }],
      gradient: "from-blue-600 to-cyan-600"
    },
    { 
      company: "ЛогистикПро", 
      industry: "Грузоперевозки",
      task: "Расчёт стоимости занимал 30 минут",
      result: "КП за 3 минуты во время звонка",
      metrics: [{ value: "3 мин", label: "расчёт КП" }, { value: "+89%", label: "конверсия" }, { value: "24/7", label: "приём заявок" }],
      gradient: "from-violet-600 to-purple-600"
    },
    { 
      company: "МедЦентр Плюс", 
      industry: "Медицина",
      task: "Пациенты не могли дозвониться",
      result: "100% дозвон, -40% нагрузки",
      metrics: [{ value: "100%", label: "дозвон" }, { value: "-40%", label: "нагрузка" }, { value: "2 мин", label: "запись" }],
      gradient: "from-emerald-600 to-teal-600"
    },
  ]

  const integrations = [
    { name: "amoCRM", category: "CRM" },
    { name: "Bitrix24", category: "CRM" },
    { name: "1C", category: "ERP" },
    { name: "Leadvertex", category: "CRM" },
    { name: "Мегаплан", category: "CRM" },
    { name: "Asterisk", category: "Телефония" },
    { name: "Mango Office", category: "Телефония" },
    { name: "Sipuni", category: "Телефония" },
    { name: "Telegram", category: "Мессенджер" },
    { name: "WhatsApp", category: "Мессенджер" },
    { name: "Viber", category: "Мессенджер" },
    { name: "Email", category: "Каналы" },
  ]

  const faqItems = [
    { q: "Как быстро можно запустить AI?", a: "Типовое внедрение занимает 7-14 дней. Это включает интеграцию с вашими системами, настройку сценариев и тестовый период. Для стандартных сценариев срок можно сократить до 3-5 дней." },
    { q: "Какие системы поддерживаются?", a: "Мы интегрируемся с amoCRM, Bitrix24, Leadvertex, 1С, Контур, Мегаплан. Телефония: Asterisk, Mango Office, Sipuni, Zadarma, любой SIP. Если вашей системы нет — разработаем интеграцию." },
    { q: "Сколько стоит?", a: "Цена зависит от объёма звонков и нужных интеграций. Стартовый пакет от 15 000 руб/мес за 500 минут. Для точного расчёта оставьте заявку — подготовим предложение за 24 часа." },
    { q: "Может ли AI общаться на разных языках?", a: "Да, поддерживается 15+ языков включая русский, английский, испанский, немецкий, французский. AI может переключаться между языками в одном разговоре." },
    { q: "Что если AI не поймёт клиента?", a: "При низком уровне уверенности AI переспрашивает или предлагает перевести на менеджера. Вероятность непонимания менее 2%. Все сложные кейсы автоматически передаются людям." },
    { q: "Есть ли тестовый период?", a: "Да, предоставляем 7 дней бесплатного тестирования с полным функционалом. Вы сможете оценить качество распознавания, интеграции и работу AI на реальных звонках." },
  ]

  const stats = [
    { value: 500, suffix: "+", label: "Проектов реализовано", icon: Layers },
    { value: 10, suffix: "+", label: "Лет на рынке AI", icon: Clock },
    { value: 87, suffix: "%", prefix: "+", label: "Средний рост конверсии", icon: TrendingUp },
    { value: 98, suffix: "%", label: "Клиентов довольны", icon: Star },
  ]

  const typewriterTexts = [
    "звонки и продажи",
    "обработку заявок",
    "выставление счетов",
    "клиентский сервис"
  ]

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION - Premium WOW Design
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0c0a1d 0%, #1a1040 25%, #0f172a 50%, #0c1929 100%)" }}>
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Glow orbs */}
        <GlowOrb className="w-[800px] h-[600px] top-0 left-1/4 -translate-x-1/2" color="violet" />
        <GlowOrb className="w-[600px] h-[500px] top-1/3 right-0" color="blue" />
        <GlowOrb className="w-[500px] h-[400px] bottom-0 left-1/3" color="cyan" />
        <GlowOrb className="w-[400px] h-[300px] top-1/4 right-1/4" color="purple" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 bg-violet-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left side - Text */}
            <div className="text-center lg:text-left">
              <Reveal>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-violet-500/30 text-sm font-semibold mb-8"
                  style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(99,102,241,0.1) 100%)" }}>
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-violet-300">AI-платформа нового поколения</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
                  Автоматизируем
                  <span className="block mt-2 bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    <TypeWriter texts={typewriterTexts} />
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-lg sm:text-xl text-slate-300/90 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  AI-ассистенты принимают звонки, ведут переговоры, создают заявки в CRM и выставляют счета. 
                  <span className="text-white font-medium"> Работают 24/7 без выходных.</span>
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button 
                    size="lg" 
                    onClick={() => openCTA()}
                    className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-2xl shadow-xl shadow-violet-500/25 border-0"
                  >
                    <span className="relative z-10 flex items-center">
                      Получить бесплатный аудит
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-6 text-lg rounded-2xl backdrop-blur-sm"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Послушать AI в деле
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Бесплатная консультация
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Расчёт ROI за 15 минут
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    7 дней бесплатно
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right side - Interactive Demo */}
            <div className="hidden lg:block">
              <Reveal delay={200}>
                <AIVoiceDemo />
              </Reveal>
            </div>
          </div>
        </div>

        {/* Stats bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10"
          style={{ background: "rgba(15,23,42,0.8)", backdropFilter: "blur(20px)" }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="text-center group">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl md:text-4xl font-bold text-white">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                      </div>
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════���════════════════════════════════════════════════════
          WHAT AI AUTOMATES
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-6xl relative">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm font-medium mb-6">
              <Workflow className="w-4 h-4" />
              Автоматизация процессов
            </div>
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
                  <Card className="group hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 border-0 bg-white dark:bg-slate-800/50 overflow-hidden h-full">
                    <CardContent className="p-6 relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"
                        style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          HOW AI WORKS - Timeline Style
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative"
        style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4" />
              Технология
            </div>
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
                    <div className="absolute -top-6 -left-2 text-[5rem] font-black text-violet-500/10 select-none z-0 group-hover:text-violet-500/20 transition-colors">
                      {step.num}
                    </div>
                    <div className="relative z-10 p-6 bg-white rounded-2xl shadow-lg group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-violet-500/30">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          AI CAPABILITIES - Dark Premium Section
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.15),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-6xl relative">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Возможности платформы
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Что умеет AI</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Передовые технологии для автоматизации вашего бизнеса
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon
              return (
                <Reveal key={idx} delay={idx * 50}>
                  <div className="group p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
                    style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{cap.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SOLUTIONS GRID
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Решения
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Выберите решение для вашего бизнеса</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовые продукты для разных задач или персональная разработка
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon
              return (
                <Reveal key={solution.id} delay={idx * 50}>
                  <Link href={`/${locale}${solution.href}`}>
                    <Card className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 h-full cursor-pointer ${
                      solution.featured 
                        ? "bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-2 border-violet-500/30" 
                        : "bg-white dark:bg-slate-800/50"
                    }`}>
                      {solution.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-violet-500 text-white text-xs font-semibold">
                          Популярное
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{solution.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{solution.desc}</p>
                        <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 text-sm font-medium">
                          Подробнее 
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={300} className="text-center mt-10">
            <Link href={`/${locale}/solutions`}>
              <Button variant="outline" size="lg" className="rounded-xl">
                Смотреть все 12 решений
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CASES
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-sm font-medium mb-6">
              <PieChart className="w-4 h-4" />
              Результаты
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Кейсы внедрения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="overflow-hidden h-full group hover:shadow-2xl transition-all duration-500">
                  <div className={`p-5 bg-gradient-to-r ${item.gradient}`}>
                    <p className="text-white/80 text-sm font-medium">{item.industry}</p>
                    <h3 className="text-xl font-bold text-white">{item.company}</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <p className="text-xs text-red-500 font-semibold uppercase mb-1 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Было
                      </p>
                      <p className="text-sm text-muted-foreground">{item.task}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-xs text-emerald-500 font-semibold uppercase mb-1 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Стало
                      </p>
                      <p className="text-sm font-medium">{item.result}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {item.metrics.map((m, i) => (
                        <div key={i} className="text-center p-3 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20 transition-colors">
                          <div className="text-lg font-bold text-violet-600 dark:text-violet-400">{m.value}</div>
                          <div className="text-xs text-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="text-center mt-10">
            <Link href={`/${locale}/cases`}>
              <Button variant="outline" size="lg" className="rounded-xl">
                Смотреть все кейсы
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          INDUSTRIES - Interactive Tabs
      ════════════════════════════════════════════════════════════════════════ */}
      <IndustriesSection locale={locale} />

      {/* ═══════════════════════════════════════════════════════════════════════
          WHY US - 3D Cards
      ════════════════════════════════════════════════════════════════════════ */}
      <WhyUsSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          INTEGRATIONS - Animated Marquee
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        
        <div className="container mx-auto px-4 max-w-6xl relative">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              Экосистема
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">50+ интеграций</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              CRM, телефония, мессенджеры, ERP — всё работает вместе
            </p>
          </Reveal>

          {/* Animated marquee rows */}
          <div className="space-y-4 overflow-hidden">
            <div className="flex animate-marquee">
              {[...integrations, ...integrations].map((item, idx) => (
                <div key={idx} className="flex-shrink-0 mx-2 px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:border-violet-500/50 hover:scale-105 transition-all duration-300 cursor-default">
                  <span className="font-semibold text-foreground">{item.name}</span>
                  <span className="ml-2 text-xs text-violet-500 font-medium">{item.category}</span>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee-reverse">
              {[...integrations.slice().reverse(), ...integrations.slice().reverse()].map((item, idx) => (
                <div key={idx} className="flex-shrink-0 mx-2 px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:border-violet-500/50 hover:scale-105 transition-all duration-300 cursor-default">
                  <span className="font-semibold text-foreground">{item.name}</span>
                  <span className="ml-2 text-xs text-violet-500 font-medium">{item.category}</span>
                </div>
              ))}
            </div>
          </div>

          <Reveal className="text-center mt-10">
            <p className="text-muted-foreground">
              Нужна интеграция с вашей системой? <span className="text-violet-600 dark:text-violet-400 font-semibold cursor-pointer hover:underline" onClick={() => openCTA()}>Свяжитесь с нами</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32"
        style={{ background: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)" }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="bg-white rounded-2xl px-6 border-0 shadow-sm data-[state=open]:shadow-md transition-shadow">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 hover:text-violet-600 transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FINAL CTA - Premium Design
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(139,92,246,0.2),transparent)]" />
        <GlowOrb className="w-[600px] h-[400px] top-0 left-1/4" color="violet" />
        <GlowOrb className="w-[500px] h-[300px] bottom-0 right-1/4" color="blue" />
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Начните сегодня
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Готовы автоматизировать
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                ваш бизнес?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Получите бесплатную консультацию и расчёт ROI для вашей компании. 
              Начните с 7-дневного тестового периода.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                onClick={() => openCTA()}
                className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-10 py-7 text-lg rounded-2xl shadow-xl shadow-violet-500/30"
              >
                Получить бесплатный аудит
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-7 text-lg rounded-2xl backdrop-blur-sm"
              >
                <Phone className="mr-2 w-5 h-5" />
                +7 (499) 123-45-67
              </Button>
            </div>
            <p className="text-sm text-slate-500">
              Первый месяц со скидкой 30% для новых клиентов
            </p>
          </Reveal>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.5); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </main>
  )
}
