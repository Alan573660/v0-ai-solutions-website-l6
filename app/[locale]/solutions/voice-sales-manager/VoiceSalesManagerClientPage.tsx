"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Users,
  ArrowRight,
  Target,
  DollarSign,
  Play,
  Pause,
  PhoneCall,
  CheckCircle2,
  PhoneOff,
  Repeat,
  Frown,
  Bell,
  MessageSquare,
  Calculator,
  Phone,
  Zap,
  TrendingUp,
  Database,
  Sparkles,
  ClipboardList,
  Brain,
  GraduationCap,
  Rocket,
  Headphones,
  BarChart3,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCTA } from "@/components/modals/cta-provider"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

/* ================================================================== */
/*  Intersection Observer hook                                         */
/* ================================================================== */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ================================================================== */
/*  Reveal wrapper                                                     */
/* ================================================================== */
function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ================================================================== */
/*  Section label                                                      */
/* ================================================================== */
function Label({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "border-white/10 text-white/60" : "border-border text-muted-foreground"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-sky-400" : "bg-primary"}`} />
      {children}
    </div>
  )
}

/* ================================================================== */
/*  Main component                                                     */
/* ================================================================== */
export function VoiceSalesManagerClientPage() {
  const { openModal } = useCTA()
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const [audioProgress, setAudioProgress] = useState<Record<string, number>>({})

  const problems = [
    { icon: PhoneOff, title: "Пропущенные звонки", desc: "Клиенты не дозваниваются и уходят к конкурентам" },
    { icon: Clock, title: "Долгая обработка", desc: "Менеджеры не успевают обработать всю базу" },
    { icon: Target, title: "CRM пустая", desc: "Данные теряются, сделки не фиксируются" },
    { icon: Repeat, title: "Длинный цикл", desc: "Нет повторных касаний и дожима клиентов" },
    { icon: Frown, title: "Человеческий фактор", desc: "Усталость, настроение, больничные, ошибки" },
    { icon: DollarSign, title: "Дорогой ФОТ", desc: "3-5 менеджеров = 1 AI, работающий без выходных" },
  ]

  const solutions = [
    { problem: "Пропущенные звонки", solution: "0 пропусков", desc: "AI берёт трубку мгновенно. 24/7." },
    { problem: "Нет времени на прозвон", solution: "Авто-исходящие", desc: "AI сам прозванивает тёплую и холодную базы." },
    { problem: "CRM пустая", solution: "100% фиксация", desc: "Контакты, сделки, задачи — создаются автоматически." },
    { problem: "Длинный цикл", solution: "Авто-дожим", desc: "Звонки, напоминания, повторные касания." },
    { problem: "Медленный отклик", solution: "0.2 сек", desc: "Мгновенный ответ на любой звонок." },
    { problem: "Высокий ФОТ", solution: "−70%", desc: "Один AI закрывает объём 3-7 человек." },
  ]

  const processSteps = [
    { phase: "01", title: "Погружение в бизнес", duration: "1-2 недели", icon: Users, desc: "Изучаем ваши процессы, скрипты, продукты и болевые точки клиентов" },
    { phase: "02", title: "Проектирование", duration: "1 неделя", icon: Brain, desc: "Разрабатываем сценарии диалогов и интеграции с вашими системами" },
    { phase: "03", title: "Обучение AI", duration: "1-2 недели", icon: GraduationCap, desc: "Обучаем AI всему, что знают ваши лучшие менеджеры" },
    { phase: "04", title: "Запуск", duration: "3-5 дней", icon: Rocket, desc: "Тестируем, дорабатываем и запускаем на реальные звонки" },
  ]

  const callExamples = [
    { id: "construction", title: "Строительные материалы", desc: "Входящий: расчёт кровли", industry: "B2B" },
    { id: "realestate", title: "Недвижимость", desc: "Исходящий: запись на показ", industry: "Услуги" },
    { id: "hotel", title: "Отель / Апарт-отель", desc: "Бронирование номера", industry: "HoReCa" },
    { id: "b2b", title: "Интернет-магазин", desc: "Холодный прозвон базы", industry: "E-commerce" },
  ]

  const caseStudies = [
    {
      company: "Онлайн-школа английского",
      industry: "Образование",
      problem: "60% заявок терялись из-за нехватки менеджеров",
      results: ["+280%", "обработанных заявок"],
      image: "/online-education-classroom.jpg",
      href: "/ru/solutions/voice-sales-manager/cases/online-education",
    },
    {
      company: "Логистическая компания",
      industry: "Логистика",
      problem: "Операторы не справлялись в пиковые часы",
      results: ["+400%", "обработанных звонков"],
      image: "/logistics-warehouse-trucks.jpg",
      href: "/ru/solutions/voice-sales-manager/cases/logistics",
    },
    {
      company: "Сеть стоматологий",
      industry: "Медицина",
      problem: "Администраторы 70% времени на телефоне",
      results: ["+60%", "записей на приём"],
      image: "/modern-dental-clinic.png",
      href: "/ru/solutions/voice-sales-manager/cases/dental-clinic",
    },
  ]

  const integrations = [
    { name: "amoCRM", logo: "/images/67cbfeaf-a5fb-4c38-ae6d.jpeg" },
    { name: "Bitrix24", logo: "/images/9af7d4d0-2a0f-4980-a59b.jpeg" },
    { name: "Telegram", logo: "/images/305c48f2-2bd0-4708-8ce9.jpeg" },
    { name: "WhatsApp", logo: "/images/49c7178f-6604-4243-a6cd.jpeg" },
  ]

  const faq = [
    { q: "Как быстро можно запустить AI-менеджера?", a: "Запуск занимает от нескольких дней до 2 недель в зависимости от сложности интеграций. Мы настраиваем AI под ваш бизнес, интегрируем с CRM и телефонией." },
    { q: "Может ли AI работать с моей CRM?", a: "Да, мы интегрируем AI с amoCRM, Bitrix24, HubSpot, retailCRM и любой другой системой через API." },
    { q: "Что если клиент просит живого человека?", a: "AI переключает на сотрудника в любой момент. Вы настраиваете правила переключения." },
    { q: "Сколько стоит минута разговора?", a: "От $0.05 до $0.15 за минуту в зависимости от модели AI. Первоначальная настройка — от $2,000." },
    { q: "Можно протестировать перед покупкой?", a: "Да! Мы предоставляем демо с вашим сценарием. Вы послушаете, как AI общается с клиентами." },
    { q: "AI может выставлять счета?", a: "Да, через интеграцию с 1С или биллинговой системой. Также отправляет КП и договоры." },
  ]

  return (
    <div className="bg-background overflow-x-hidden">

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative flex min-h-[90svh] flex-col justify-center overflow-hidden bg-[#060a16]">
        {/* BG image */}
        <div className="absolute inset-0">
          <Image src="/ai-voice-assistant-business-sales-call-center-mode.jpg" alt="" fill className="object-cover opacity-30 mix-blend-lighten" priority />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(56,130,255,.07),transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060a16]/30 via-[#060a16]/60 to-[#060a16]" />
        </div>

        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:pt-40 lg:pb-24">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/40">
            <Link href="/ru" className="hover:text-white/60 transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/ru/solutions" className="hover:text-white/60 transition-colors">Решения</Link>
            <span>/</span>
            <span className="text-white/70">Голосовой AI-менеджер</span>
          </nav>

          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-white/70">Работает 24/7 без выходных</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-[920px] text-center text-balance text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] animate-fade-in-up">
            Голосовой AI-менеджер{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              по продажам
            </span>
          </h1>

          {/* Sub */}
          <p className="mx-auto mt-7 max-w-2xl text-center text-pretty text-[1.125rem] leading-[1.7] text-white/50 animate-fade-in-up" style={{ animationDelay: "0.12s" }}>
            Принимает звонки, консультирует клиентов, создаёт сделки в CRM и никогда не пропускает заявки. Увеличивает конверсию в 2-3 раза.
          </p>

          {/* CTA */}
          <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
            <Button size="lg" className="h-[52px] rounded-xl px-8 text-[15px] font-semibold shadow-[0_0_40px_rgba(56,130,255,.15)] hover:shadow-[0_0_60px_rgba(56,130,255,.25)] transition-all duration-300" onClick={() => openModal("consultation")}>
              <PhoneCall className="mr-2 h-4 w-4" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="h-[52px] rounded-xl px-8 text-[15px] font-semibold border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.16] backdrop-blur-sm transition-all duration-300" asChild>
              <Link href="#examples">
                <Play className="mr-2 h-4 w-4" />
                Послушать примеры
              </Link>
            </Button>
          </div>

          {/* Stats strip */}
          <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "0", label: "пропущенных звонков" },
              { value: "2-3x", label: "рост конверсии" },
              { value: "−70%", label: "расходы на ФОТ" },
              { value: "24/7", label: "доступность" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5 py-8 lg:py-10">
                <span className="text-[2rem] font-extrabold tracking-tight text-white sm:text-4xl">{s.value}</span>
                <span className="text-[13px] text-white/40">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROBLEMS & SOLUTIONS                                        */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>Проблемы и решения</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Почему компании теряют клиентов
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              Традиционный отдел продаж сталкивается с системными проблемами, которые AI-менеджер решает автоматически
            </p>
          </Reveal>

          {/* Problems grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {problems.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 80}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:border-red-500/20 hover:shadow-[0_8px_40px_-12px_rgba(239,68,68,.06)]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/[0.07] text-red-500 ring-1 ring-red-500/[0.1]">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Arrow */}
          <Reveal className="flex justify-center mb-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ArrowRight className="h-8 w-8" />
            </div>
          </Reveal>

          {/* Solutions grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, idx) => (
              <Reveal key={s.problem} delay={idx * 80}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:border-emerald-500/20 hover:shadow-[0_8px_40px_-12px_rgba(16,185,129,.06)]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-muted-foreground">{s.problem}</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/[0.1] text-emerald-500">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-extrabold text-foreground mb-2">{s.solution}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36 border-y border-border/50 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>Процесс внедрения</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Как мы запускаем AI-менеджера
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              От первой встречи до работающего AI — всего 3-5 недель. Погружаемся в ваш бизнес и создаём решение под вас.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <Reveal key={step.phase} delay={idx * 100}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_8px_40px_-12px_rgba(56,130,255,.06)]">
                  {/* Phase pill */}
                  <div className="absolute -top-3 left-8 flex h-6 items-center rounded-full bg-foreground px-3 text-[11px] font-bold text-background tracking-wider">
                    {step.phase}
                  </div>
                  
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.07] text-primary ring-1 ring-primary/[0.1] mb-5 mt-2">
                    <step.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                  
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">Срок: </span>
                    <span className="text-sm font-semibold">{step.duration}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CALL EXAMPLES                                               */}
      {/* ============================================================ */}
      <section id="examples" className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>Примеры звонков</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Послушайте, как AI продаёт
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              Реальные записи звонков AI-менеджера с клиентами из разных отраслей
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {callExamples.map((example, idx) => (
              <Reveal key={example.id} delay={idx * 100}>
                <div className="group relative flex flex-col rounded-2xl border border-border/70 bg-card overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-[0_8px_40px_-12px_rgba(56,130,255,.06)]">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">{example.industry}</Badge>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">
                        <Play className="h-4 w-4 ml-0.5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                    <p className="text-sm text-muted-foreground">{example.desc}</p>
                  </div>
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    {/* Audio progress bar placeholder */}
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-primary rounded-full transition-all duration-300" />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>0:00</span>
                      <span>2:15</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CASE STUDIES                                                */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36 border-y border-border/50 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>Кейсы клиентов</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Результаты наших клиентов
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              Реальные истории внедрения AI-менеджера в разных отраслях
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study, idx) => (
              <Reveal key={study.company} delay={idx * 100}>
                <Link href={study.href} className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-[0_8px_60px_-12px_rgba(56,130,255,.08)]">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image src={study.image} alt={study.company} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <Badge className="absolute bottom-4 left-4">{study.industry}</Badge>
                  </div>
                  
                  <div className="flex flex-col p-6 lg:p-8 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{study.company}</h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-6">{study.problem}</p>
                    
                    <div className="mt-auto pt-6 border-t border-border/50">
                      <div className="text-3xl font-extrabold text-primary">{study.results[0]}</div>
                      <div className="text-sm text-muted-foreground">{study.results[1]}</div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INTEGRATIONS                                                */}
      {/* ============================================================ */}
      <section className="py-20 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Интеграции с вашими системами</h3>
              <p className="text-muted-foreground">CRM, телефония, мессенджеры, 1С и любые API</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {integrations.map((integration) => (
                <div key={integration.name} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                  <div className="relative h-8 w-8 rounded-lg overflow-hidden">
                    <Image src={integration.logo} alt={integration.name} fill className="object-cover" />
                  </div>
                  <span className="font-medium text-sm">{integration.name}</span>
                </div>
              ))}
              <span className="text-muted-foreground text-sm">+50 интеграций</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <Label>Частые вопросы</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
              Ответы на ваши вопросы
            </h2>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="rounded-2xl border border-border/70 bg-card px-6 data-[state=open]:border-primary/20">
                  <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline">
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

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="relative py-28 lg:py-36 overflow-hidden bg-[#060a16]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(56,130,255,.1),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:72px_72px]" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <Label light>Готовы начать?</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
              Запустите AI-менеджера за 3 недели
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/50 mb-10">
              Получите бесплатную консультацию и демо AI-менеджера на примере вашего бизнеса
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-[52px] rounded-xl px-8 text-[15px] font-semibold shadow-[0_0_40px_rgba(56,130,255,.15)] hover:shadow-[0_0_60px_rgba(56,130,255,.25)] transition-all duration-300" onClick={() => openModal("consultation")}>
                Получить консультацию
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-[52px] rounded-xl px-8 text-[15px] font-semibold border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.16] backdrop-blur-sm transition-all duration-300" asChild>
                <Link href="/ru/contacts">
                  <Phone className="mr-2 h-4 w-4" />
                  Связаться с нами
                </Link>
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-white/30">
              Бесплатная консультация · Демо за 15 минут · Без обязательств
            </p>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
