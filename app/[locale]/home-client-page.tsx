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
  ArrowUpRight,
  Award,
  Rocket,
  Mail
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
   TESTIMONIALS CAROUSEL
═══════════════════════════════════════════════════════════════════════════════ */

function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const testimonials = [
    {
      name: "Алексей Петров",
      role: "CEO, СтройМаркет",
      avatar: "АП",
      text: "AI-менеджер полностью изменил наш подход к продажам. Раньше теряли 60% звонков, теперь обрабатываем 100%. Выручка выросла на 156% за 4 месяца.",
      rating: 5,
      metrics: { calls: "5000+", conversion: "+156%", time: "3 мес" },
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Мария Соколова",
      role: "Директор, МедЦентр Плюс",
      avatar: "МС",
      text: "Пациенты наконец-то могут записаться с первого раза. AI работает круглосуточно, отвечает мгновенно. Нагрузка на регистратуру снизилась на 40%.",
      rating: 5,
      metrics: { calls: "100%", conversion: "-40%", time: "2 мес" },
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      name: "Дмитрий Волков",
      role: "Коммерческий директор, ЛогистикПро",
      avatar: "ДВ",
      text: "Расчёт стоимости доставки теперь занимает 30 секунд вместо 30 минут. Клиент получает КП прямо во время ��вонка. Конверсия в заказ выросла на 89%.",
      rating: 5,
      metrics: { calls: "30 сек", conversion: "+89%", time: "1 мес" },
      gradient: "from-violet-500 to-purple-500"
    },
    {
      name: "Елена Кузнецова",
      role: "Владелец, ЮрисКонсульт",
      avatar: "ЕК",
      text: "AI квалифицирует лиды не хуже опытного менеджера. Теперь юристы работают только с горячими клиентами. Эффективность команды выросла в 3 раза.",
      rating: 5,
      metrics: { calls: "3x", conversion: "+120%", time: "2 мес" },
      gradient: "from-orange-500 to-amber-500"
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const active = testimonials[activeIndex]

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(139,92,246,0.06),transparent)]" />
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Отзывы клиентов
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные истории успеха от компаний, которые уже автоматизировались
          </p>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-white shadow-2xl shadow-violet-500/10 border border-slate-100">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 text-7xl text-violet-100 font-serif leading-none select-none">"</div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8 min-h-[100px]">
                "{active.text}"
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-slate-50">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${active.gradient} bg-clip-text text-transparent`}>
                    {active.metrics.calls}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Результат</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-50">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${active.gradient} bg-clip-text text-transparent`}>
                    {active.metrics.conversion}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Изменение</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-50">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${active.gradient} bg-clip-text text-transparent`}>
                    {active.metrics.time}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Срок</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${active.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {active.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{active.name}</div>
                  <div className="text-sm text-slate-500">{active.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? "w-8 bg-violet-500" 
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════════════════
   HOW TO START - Progress Stepper
═══════════════════════════════════════════════════════════════════════════════ */

function HowToStartSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      num: "01",
      title: "Бесплатная консультация",
      desc: "Обсуждаем ваши задачи, анализируем текущие процессы и определяем точки роста. Расчёт ROI за 15 минут.",
      duration: "30 мин",
      icon: Phone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      num: "02",
      title: "Техническое задание",
      desc: "Формируем детальный план внедрения: сценарии, интеграции, KPI. Согласуем сроки и бюджет.",
      duration: "1-2 дня",
      icon: FileText,
      color: "from-violet-500 to-purple-500"
    },
    {
      num: "03",
      title: "Разработка и настройка",
      desc: "Создаём AI-агента под ваши процессы, интегрируем с CRM и телефонией, обучаем на ваших данных.",
      duration: "7-14 дней",
      icon: Settings,
      color: "from-emerald-500 to-teal-500"
    },
    {
      num: "04",
      title: "Тестирование",
      desc: "7 дней бесплатного тестирования на реальных звонках. Анализируем результаты и дорабатываем.",
      duration: "7 дней",
      icon: Target,
      color: "from-orange-500 to-amber-500"
    },
    {
      num: "05",
      title: "Запуск и поддержка",
      desc: "Полноценный запуск в работу. Выделенный менеджер, техподдержка 24/7, регулярные обновления.",
      duration: "Постоянно",
      icon: Zap,
      color: "from-pink-500 to-rose-500"
    },
  ]

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)" }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-sm font-medium mb-6">
            <Workflow className="w-4 h-4" />
            Процесс работы
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Как начать работу</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            От первого звонка до работающего AI за 2-3 недели
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps list */}
          <div className="space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isActive = idx === activeStep
              const isPast = idx < activeStep
              
              return (
                <Reveal key={idx} delay={idx * 50}>
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                      isActive 
                        ? "bg-white border-violet-500 shadow-xl shadow-violet-500/10" 
                        : isPast
                          ? "bg-white/50 border-emerald-200"
                          : "bg-white/50 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isActive 
                          ? `bg-gradient-to-br ${step.color} shadow-lg` 
                          : isPast
                            ? "bg-emerald-100"
                            : "bg-slate-100"
                      }`}>
                        {isPast && !isActive ? (
                          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                        ) : (
                          <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-slate-400"}`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-semibold uppercase tracking-wider ${
                            isActive ? "text-violet-600" : "text-slate-400"
                          }`}>
                            Шаг {step.num}
                          </span>
                          <span className="text-xs text-slate-400">{step.duration}</span>
                        </div>
                        <h4 className={`text-lg font-semibold ${isActive ? "text-slate-800" : "text-slate-600"}`}>
                          {step.title}
                        </h4>
                      </div>
                    </div>
                  </button>
                </Reveal>
              )
            })}
          </div>

          {/* Active step details */}
          <Reveal className="sticky top-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-700 text-white shadow-2xl shadow-violet-500/30">
              <div className="text-[6rem] font-black opacity-10 absolute top-4 right-8">
                {steps[activeStep].num}
              </div>
              <div className="relative z-10">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-sm font-semibold mb-6`}>
                  {(() => { const Icon = steps[activeStep].icon; return <Icon className="w-4 h-4" /> })()}
                  {steps[activeStep].duration}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {steps[activeStep].desc}
                </p>
                <Button 
                  size="lg"
                  className="bg-white text-violet-600 hover:bg-white/90 rounded-xl shadow-lg"
                >
                  Начать с этого шага
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════════════════
   LIVE STATS TICKER
═══════════════════════════════════════════════════════════════════════════════ */

function LiveStatsTicker() {
  const [calls, setCalls] = useState(1247853)
  const [leads, setLeads] = useState(89234)
  const [savings, setSavings] = useState(4567890)

  useEffect(() => {
    const interval = setInterval(() => {
      setCalls(prev => prev + Math.floor(Math.random() * 3) + 1)
      setLeads(prev => prev + Math.floor(Math.random() * 2))
      setSavings(prev => prev + Math.floor(Math.random() * 1000) + 500)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-6 relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold tabular-nums">
              {calls.toLocaleString()}
            </div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Звонков обработано</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold tabular-nums">
              {leads.toLocaleString()}
            </div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Лидов создано</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold tabular-nums">
              ${savings.toLocaleString()}
            </div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Сэкономлено клиентами</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium">Live</span>
          </div>
        </div>
      </div>
    </section>
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

/* ═══════��══════════════════════════════════════════════════════════════════════
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
    { icon: Bot, title: "Голосовой AI-агент", desc: "Ведёт диалог неотличимо о�� человека", gradient: "from-violet-500 to-purple-600" },
    { icon: Brain, title: "Понимание контекста", desc: "Помнит историю разговора и клиента", gradient: "from-blue-500 to-cyan-600" },
    { icon: Database, title: "CRM интеграция", desc: "amoCRM, Bitrix24, 1C, Leadvertex", gradient: "from-emerald-500 to-teal-600" },
    { icon: BarChart3, title: "Расчёт цен", desc: "Калькуляция по прайсу в реальном времени", gradient: "from-orange-500 to-amber-600" },
    { icon: Shield, title: "Безопасность", desc: "152-ФЗ, GDPR, шифрование данных", gradient: "from-red-500 to-rose-600" },
    { icon: Zap, title: "Мгновенный ответ", desc: "Поднимает трубку за 0.3 секунды", gradient: "from-yellow-500 to-orange-600" },
    { icon: Clock, title: "24/7 работа", desc: "Без выходных, праздников, больничных", gradient: "from-indigo-500 to-violet-600" },
    { icon: Globe, title: "15+ языков", desc: "Мультиязычная поддержка клиентов", gradient: "from-pink-500 to-rose-600" },
  ]

  const solutions = [
    { id: "robot-operator", title: "Робот оператор", desc: "Автоматический приём вс��х входящих звонков", href: "/solutions/robot-operator", icon: Phone, gradient: "from-blue-600 to-cyan-600" },
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
      
      {/* ═══════════════════════════════��═══════════════════════════════════════
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

      {/* ═══════════════════════════════════════════════════════════════════════
          LIVE STATS TICKER
      ════════════════════════════════════════════════════════════════════════ */}
      <LiveStatsTicker />

      {/* ═══════════════════════════════════════════════════════════════════════
          WHAT AI AUTOMATES - Interactive Customer Journey
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-40 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #fafbff 0%, #f0f4ff 30%, #faf5ff 60%, #fefefe 100%)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(139,92,246,0.08),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-violet-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 max-w-7xl relative">
          <Reveal className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/25 text-violet-600 text-sm font-semibold mb-6 shadow-lg shadow-violet-500/5">
              <Workflow className="w-4 h-4" />
              Полный цикл автоматизации
              <span className="ml-1 h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-800 via-violet-800 to-purple-800 bg-clip-text text-transparent">
                Что автоматизирует AI
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              От первого контакта до повторных продаж — <span className="text-violet-600 font-semibold">без участия человека</span>
            </p>
          </Reveal>

          {/* Interactive Customer Journey Flow */}
          <div className="relative">
            {/* Center AI Brain Hub */}
            <Reveal className="flex justify-center mb-16">
              <div className="relative">
                {/* Pulsing rings */}
                <div className="absolute inset-0 animate-ping">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-violet-400/30" />
                </div>
                <div className="absolute inset-0 animate-pulse" style={{ animationDelay: "0.5s" }}>
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-violet-400/20 scale-125" />
                </div>
                
                {/* Main brain hub */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex items-center justify-center shadow-2xl shadow-violet-500/40">
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 opacity-50" />
                  <Brain className="w-14 h-14 md:w-16 md:h-16 text-white relative z-10" />
                </div>
                
                {/* Label */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="px-4 py-2 rounded-full bg-white shadow-lg text-sm font-bold text-violet-600 border border-violet-100">
                    AI-Центр управления
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Journey Steps - Circular Layout */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
              {[
                { 
                  icon: PhoneIncoming, 
                  title: "Входящий звонок", 
                  desc: "Мгновенный ответ 24/7, распознавание речи и намерений",
                  color: "from-blue-500 to-cyan-500",
                  shadow: "shadow-blue-500/30",
                  num: "01",
                  stat: "< 1 сек"
                },
                { 
                  icon: Users, 
                  title: "Квалификация", 
                  desc: "Определение потребностей и оценка потенциала клиента",
                  color: "from-violet-500 to-purple-500",
                  shadow: "shadow-violet-500/30",
                  num: "02",
                  stat: "98%"
                },
                { 
                  icon: MessageSquare, 
                  title: "Консультация", 
                  desc: "Ответы на вопросы, подбор товаров из каталога",
                  color: "from-emerald-500 to-teal-500",
                  shadow: "shadow-emerald-500/30",
                  num: "03",
                  stat: "500+ FAQ"
                },
                { 
                  icon: FileText, 
                  title: "Оформление", 
                  desc: "Создание заявки, расчёт стоимости, выставление счёта",
                  color: "from-orange-500 to-amber-500",
                  shadow: "shadow-orange-500/30",
                  num: "04",
                  stat: "3 сек"
                },
                { 
                  icon: Receipt, 
                  title: "Документы", 
                  desc: "Генерация КП, договоров, актов и отправка на почту",
                  color: "from-pink-500 to-rose-500",
                  shadow: "shadow-pink-500/30",
                  num: "05",
                  stat: "Auto"
                },
                { 
                  icon: TrendingUp, 
                  title: "Повторные продажи", 
                  desc: "Напоминания, допродажи и возврат ушедших клиентов",
                  color: "from-indigo-500 to-violet-500",
                  shadow: "shadow-indigo-500/30",
                  num: "06",
                  stat: "+47%"
                },
              ].map((step, idx) => {
                const Icon = step.icon
                return (
                  <Reveal key={idx} delay={idx * 100}>
                    <div className="group relative">
                      {/* Connecting line to next (hidden on mobile) */}
                      {idx < 5 && (
                        <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5">
                          <div className="h-full bg-gradient-to-r from-slate-300 to-slate-200" />
                          <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-violet-400 to-transparent animate-pulse" style={{ animationDelay: `${idx * 0.3}s` }} />
                        </div>
                      )}
                      
                      <div className="relative p-6 rounded-3xl bg-white border border-slate-100 hover:border-violet-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                        {/* Step number */}
                        <div className="absolute -top-3 -left-2 w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500 shadow-md">
                          {step.num}
                        </div>
                        
                        {/* Stat badge */}
                        <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 text-[10px] font-bold text-white shadow-lg">
                          {step.stat}
                        </div>
                        
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-xl ${step.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-violet-600 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {step.desc}
                        </p>
                        
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            {/* Bottom stats bar */}
            <Reveal className="mt-16">
              <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                  {[
                    { value: "100%", label: "Звонков обработано", icon: PhoneIncoming },
                    { value: "< 1 сек", label: "Время ответа", icon: Zap },
                    { value: "24/7", label: "Работа без выходных", icon: Clock },
                    { value: "+156%", label: "Рост конверсии", icon: TrendingUp },
                  ].map((stat, idx) => {
                    const Icon = stat.icon
                    return (
                      <div key={idx} className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Icon className="w-5 h-5 text-violet-400" />
                          <span className="text-2xl md:text-3xl font-black text-white">{stat.value}</span>
                        </div>
                        <span className="text-xs md:text-sm text-slate-400 font-medium">{stat.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════���════════════════════════════════════════════════════════════
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

      {/* ═════════════════════════════════════════════════════════��═════════════
          TESTIMONIALS CAROUSEL
      ════════════════════════════════════════════════════════════════════════ */}
      <TestimonialsCarousel />

      {/* ═══════════════════════════════════════════════════════════════════════
          INDUSTRIES - Interactive Tabs
      ════════════════════════════════════════════════════════════════════════ */}
      <IndustriesSection locale={locale} />

      {/* ═══════════════════════════════════════════════════════════════════════
          WHY US - 3D Cards
      ════════════════════════════════════════════════════════════════════════ */}
      <WhyUsSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          HOW TO START - Progress Stepper
      ════════════════════════════════════════════════════════════════════════ */}
      <HowToStartSection />

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
          FINAL CTA - Premium Design with WOW Effects
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1050 30%, #302b63 60%, #24243e 100%)" }}>
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Multiple glow orbs with animation */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(139,92,246,0.25),transparent)]" />
        <GlowOrb className="w-[700px] h-[500px] top-0 left-1/4 animate-pulse" color="violet" />
        <GlowOrb className="w-[600px] h-[400px] bottom-0 right-1/4" color="blue" />
        <GlowOrb className="w-[400px] h-[300px] top-1/3 right-1/3" color="purple" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1.5 w-1.5 bg-violet-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          {/* Floating feature cards */}
          <div className="hidden lg:block absolute -left-20 top-20">
            <FloatingCard delay={0}>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">7 дней</div>
                    <div className="text-slate-400 text-xs">Бесплатно</div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>
          
          <div className="hidden lg:block absolute -right-16 top-32">
            <FloatingCard delay={1}>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Быстрый старт</div>
                    <div className="text-slate-400 text-xs">за 3 дня</div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>

          <div className="hidden lg:block absolute -left-10 bottom-20">
            <FloatingCard delay={2}>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">-30%</div>
                    <div className="text-slate-400 text-xs">Первый месяц</div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>

          <Reveal className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-violet-400/40 bg-violet-500/15 text-violet-200 text-sm font-semibold mb-8 animate-pulse-glow">
              <Sparkles className="w-4 h-4" />
              Начните сегодня
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              Готовы автоматизировать
              <span className="block mt-2 bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                ваш бизнес?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Получите бесплатную консультацию и расчёт ROI для вашей компании. 
              <span className="text-white font-medium"> Начните с 7-дневного тестового периода.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
              <Button 
                size="lg" 
                onClick={() => openCTA()}
                className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-12 py-8 text-xl rounded-2xl shadow-2xl shadow-violet-500/40 border-0"
              >
                <span className="relative z-10 flex items-center font-semibold">
                  Получить бесплатный аудит
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button 
                size="lg" 
                className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 px-12 py-8 text-xl rounded-2xl backdrop-blur-sm transition-all"
              >
                <Phone className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                +7 (499) 123-45-67
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
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
                Без обязательств
              </span>
            </div>
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
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
        }
        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  )
}
