"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  Play,
  Pause,
  CheckCircle2,
  Zap,
  Phone,
  Users,
  TrendingUp,
  Clock,
  Award,
  Settings,
  Bot,
  Target,
  Headphones,
  Building2,
  Home,
  Building,
  Shield,
  ArrowUpRight,
  Sparkles,
  BarChart3,
  Globe,
  Lock,
  type LucideIcon,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { solutions, callExamples } from "./home-data"
import { useCTA } from "@/components/modals/cta-provider"

interface HomeClientPageProps {
  locale: Locale
}

/* ------------------------------------------------------------------ */
/*  Intersection Observer for scroll-triggered reveal                  */
/* ------------------------------------------------------------------ */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

/* ------------------------------------------------------------------ */
/*  Reveal wrapper                                                     */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section heading                                                    */
/* ------------------------------------------------------------------ */
function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}) {
  return (
    <Reveal className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
      <span
        className={`mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] ${
          light ? "text-primary/80" : "text-primary"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-lg leading-relaxed ${
            light ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
function HomeClientPage({ locale }: HomeClientPageProps) {
  const { t } = useTranslations(locale)
  const { openConsultation } = useCTA()
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const [audioProgress, setAudioProgress] = useState<Record<string, number>>({})

  const solutionIcons: Record<string, LucideIcon> = {
    "voice-sales": Phone,
    "smart-home": Home,
    smb: Building2,
    enterprise: Building,
  }

  /* ---------------------------------------------------------------- */
  return (
    <div className="bg-background overflow-x-hidden">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#080c18]">
        {/* Background image layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-ai-abstract.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080c18]/60 via-[#080c18]/80 to-[#080c18]" />
        </div>

        {/* Decorative grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-primary/8 blur-[150px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <Badge className="mb-8 border-white/10 bg-white/5 text-white/80 text-xs font-medium tracking-wider uppercase backdrop-blur-sm animate-fade-in">
              <Sparkles className="mr-1.5 h-3 w-3" />
              AI-Автоматизация нового поколения
            </Badge>

            {/* Main heading */}
            <h1 className="mx-auto max-w-5xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] animate-fade-in-up">
              {"Ваш бизнес работает "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  на автопилоте
                </span>
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/55 sm:text-xl animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              Голосовые AI-менеджеры принимают звонки, продают, формируют счета
              и ведут CRM. 24 часа в сутки, 365 дней в году.
            </p>

            {/* CTA buttons */}
            <div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fade-in-up"
              style={{ animationDelay: "0.25s" }}
            >
              <Button
                size="lg"
                className="h-13 px-8 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                onClick={openConsultation}
              >
                Получить бесплатный аудит
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base font-semibold border-white/15 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <Link href="#examples">
                  <Play className="mr-2 h-4 w-4" />
                  Послушать AI в деле
                </Link>
              </Button>
            </div>

            {/* Trust line */}
            <p
              className="mt-8 text-sm text-white/35 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Бесплатная консультация и расчет ROI за 15 минут
            </p>
          </div>

          {/* Stats strip */}
          <div
            className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            {[
              { value: "500+", label: "Проектов", sub: "реализовано" },
              { value: "10+", label: "Лет", sub: "на рынке AI" },
              { value: "87%", label: "Рост", sub: "конверсии" },
              { value: "98%", label: "Клиентов", sub: "довольны" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1 px-6 py-8 lg:py-10 text-center bg-white/[0.02]"
              >
                <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {s.value}
                </span>
                <span className="text-sm font-medium text-white/70">
                  {s.label}
                </span>
                <span className="text-xs text-white/40">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SOCIAL PROOF BAR                                            */}
      {/* ============================================================ */}
      <section className="border-b border-border bg-secondary/30 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              Интеграции:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {[
                { name: "amoCRM", logo: "/images/67cbfeaf-a5fb-4c38-ae6d.jpeg" },
                { name: "Bitrix24", logo: "/images/9af7d4d0-2a0f-4980-a59b.jpeg" },
                { name: "Telegram", logo: "/images/305c48f2-2bd0-4708-8ce9.jpeg" },
                { name: "WhatsApp", logo: "/images/49c7178f-6604-4243-a6cd.jpeg" },
              ].map((int) => (
                <div key={int.name} className="relative h-8 w-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image src={int.logo} alt={int.name} fill className="object-contain" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="h-3.5 w-3.5" /> ISO 27001
              </span>
              <span className="flex items-center gap-1">
                <Lock className="h-3.5 w-3.5" /> 152-ФЗ
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SOLUTIONS — Bento-inspired cards                            */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Решения"
            title="AI-решения, которые уже зарабатывают деньги"
            description="Каждое решение проектируется под вашу отрасль, интегрируется с текущими системами и приносит измеримый результат"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {solutions.map((solution, idx) => {
              const Icon = solutionIcons[solution.id] || Phone
              return (
                <Reveal key={solution.id} delay={idx * 80}>
                  <Link
                    href={solution.href}
                    className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/5"
                  >
                    {/* Top gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex flex-col p-8 lg:p-10">
                      {/* Icon + arrow */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary ring-1 ring-primary/10 group-hover:bg-primary/12 transition-colors duration-300">
                          <Icon className="h-7 w-7" />
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground/50 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>

                      <h3 className="mb-3 text-xl font-bold tracking-tight lg:text-2xl group-hover:text-primary transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                        {solution.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.features.slice(0, 4).map((f, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 text-sm"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-foreground/80">{f}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="mt-auto flex gap-8 border-t border-border pt-6">
                        {solution.stats.map((stat, i) => (
                          <div key={i}>
                            <span className="text-2xl font-bold tracking-tight lg:text-3xl">
                              {stat.value}
                            </span>
                            <span className="ml-1.5 text-xs text-muted-foreground uppercase tracking-wider">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW WE WORK — horizontal process                           */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Процесс"
            title="От анализа до запуска за 2-4 недели"
            description="Прозрачный процесс с четкими этапами, дедлайнами и ответственными. Вы видите прогресс на каждом шаге."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                phase: "01",
                title: "Погружение",
                description: "Глубокий анализ бизнес-процессов, выявление точек роста, изучение целевой аудитории и конкурентов",
                duration: "2-3 дня",
                icon: Target,
              },
              {
                phase: "02",
                title: "Архитектура",
                description: "Разработка сценариев, выбор моделей, проектирование интеграций с вашей инфраструктурой",
                duration: "3-5 дней",
                icon: Settings,
              },
              {
                phase: "03",
                title: "Обучение AI",
                description: "Составление промптов, обучение на ваших данных, тонкая настройка под тон и стиль бренда",
                duration: "5-7 дней",
                icon: Bot,
              },
              {
                phase: "04",
                title: "Запуск",
                description: "Пилотный запуск, A/B тесты, корректировка, полный деплой с мониторингом 24/7",
                duration: "2-3 дня",
                icon: Zap,
              },
            ].map((step, idx) => (
              <Reveal key={step.phase} delay={idx * 100}>
                <div className="group relative flex flex-col h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  {/* Phase number */}
                  <span className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {step.phase}
                  </span>

                  <div className="mt-2 mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <step.icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-lg font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {step.duration}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CAPABILITIES — Dark cinematic section                       */}
      {/* ============================================================ */}
      <section className="relative py-24 lg:py-32 bg-[#080c18] overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[150px]" />
        <div className="pointer-events-none absolute left-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Возможности"
            title="Кастомная AI-разработка под ваш бизнес"
            description="Наши агенты используют модели последнего поколения и полностью обучаются специфике вашей отрасли"
            light
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Settings,
                title: "Автоматическое формирование счетов",
                description: "AI-агент создает счета в PDF, распознает реквизиты и отправляет клиенту после разговора",
              },
              {
                icon: Target,
                title: "Полная воронка продаж",
                description: "Борьба с возражениями, квалификация лидов, презентация товаров. Конверсия до +87%",
              },
              {
                icon: Phone,
                title: "Все каналы связи",
                description: "Входящие/исходящие звонки, email, SMS, Telegram, WhatsApp. Единый агент на все каналы",
              },
              {
                icon: BarChart3,
                title: "Глубокая интеграция с CRM",
                description: "amoCRM, Bitrix24, 1C, SAP. Автоматическая синхронизация данных в реальном времени",
              },
              {
                icon: Globe,
                title: "Автоматизация поставщиков",
                description: "AI формирует заказы, отправляет их поставщикам и отслеживает статус поставок",
              },
              {
                icon: Award,
                title: "Обучение под ваш бренд",
                description: "AI перенимает тон, ценности и стандарты компании. Единый опыт для каждого клиента",
              },
            ].map((cap, idx) => (
              <Reveal key={cap.title} delay={idx * 70}>
                <div className="group relative flex flex-col h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-base font-bold tracking-tight text-white">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {cap.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Industries */}
          <Reveal delay={200}>
            <div className="mt-20 text-center">
              <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Отрасли
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Строительство",
                  "Недвижимость",
                  "Умные дома",
                  "Госсектор",
                  "Банки и финтех",
                  "E-commerce",
                  "Медицина",
                  "Логистика",
                ].map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm text-white/60 transition-colors hover:border-white/15 hover:text-white/80"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TEAM ECOSYSTEM                                              */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Команда"
            title="6 компаний в одной экосистеме"
            description="Погружаемся в ваш бизнес с головой. Полная команда специалистов под каждый проект."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Бизнес-консультанты",
                text: "Погружаются в бизнес, анализируют процессы, выявляют точки роста и оптимизации",
              },
              {
                icon: Target,
                title: "Бизнес-аналитики",
                text: "Переводят бизнес-задачи на технический язык, структурируют требования",
              },
              {
                icon: Settings,
                title: "ML-инженеры и разработчики",
                text: "Backend, frontend, DevOps, ML-инженеры. Реализуют техническую часть решений",
              },
              {
                icon: Bot,
                title: "Проектные менеджеры",
                text: "Координируют работу, следят за сроками и качеством. Ваш единый контакт",
              },
              {
                icon: Headphones,
                title: "Техподдержка 24/7",
                text: "Круглосуточный мониторинг, быстрая реакция на сбои, непрерывные улучшения",
              },
              {
                icon: Award,
                title: "AI-тренеры",
                text: "Обучают модели специфике вашего бизнеса, настраивают промпты и сценарии",
              },
            ].map((role, idx) => (
              <Reveal key={role.title} delay={idx * 60}>
                <div className="group flex h-full gap-5 rounded-2xl border border-border bg-card p-6 lg:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                    <role.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-bold tracking-tight">
                      {role.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {role.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Key experts */}
          <Reveal delay={100}>
            <div className="mt-16 rounded-2xl border border-border bg-secondary/50 p-8 lg:p-12">
              <h3 className="mb-10 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Ключевые эксперты
              </h3>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    name: "Сергей Волков",
                    role: "CTO & ML Architect",
                    exp: "15 лет в AI",
                    bg: "ex-Яндекс, Mail.ru",
                  },
                  {
                    name: "Анна Петрова",
                    role: "Head of AI",
                    exp: "12 лет в ML",
                    bg: "ex-Сбер, VK",
                  },
                  {
                    name: "Игорь Смирнов",
                    role: "Lead Data Scientist",
                    exp: "10 лет в Data",
                    bg: "ex-Tinkoff, Ozon",
                  },
                  {
                    name: "Мария Соколова",
                    role: "Project Director",
                    exp: "13 лет в IT",
                    bg: "ex-Kaspersky, EPAM",
                  },
                ].map((m) => (
                  <div key={m.name} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background text-lg font-bold ring-4 ring-background">
                      {m.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <p className="font-bold">{m.name}</p>
                    <p className="text-sm text-muted-foreground">{m.role}</p>
                    <p className="mt-1.5 text-xs font-semibold text-primary">
                      {m.exp}
                    </p>
                    <p className="text-xs text-muted-foreground">{m.bg}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AUDIO EXAMPLES                                              */}
      {/* ============================================================ */}
      <section id="examples" className="py-24 lg:py-32 border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Демо"
            title="Послушайте, как работает AI-менеджер"
            description="Записи настоящих звонков AI-менеджера с клиентами из разных отраслей"
          />

          <div className="flex flex-col gap-6">
            {callExamples.map((example, idx) => (
              <Reveal key={example.id} delay={idx * 100}>
                <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  {/* Header */}
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs font-medium">
                        {example.category}
                      </Badge>
                      <h3 className="text-lg font-bold tracking-tight">
                        {example.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {example.description}
                      </p>
                    </div>
                    <span className="flex-shrink-0 font-mono text-sm text-muted-foreground/70">
                      {example.duration}
                    </span>
                  </div>

                  {/* Waveform */}
                  <div className="flex items-center gap-4 rounded-xl bg-secondary/80 p-4">
                    <button
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
                      onClick={() => {
                        if (playingAudio === example.id) {
                          setPlayingAudio(null)
                        } else {
                          setPlayingAudio(example.id)
                          let progress = 0
                          const interval = setInterval(() => {
                            progress += 2
                            setAudioProgress((prev) => ({
                              ...prev,
                              [example.id]: progress,
                            }))
                            if (progress >= 100) {
                              clearInterval(interval)
                              setPlayingAudio(null)
                            }
                          }, 200)
                        }
                      }}
                      aria-label={
                        playingAudio === example.id ? "Пауза" : "Воспроизвести"
                      }
                    >
                      {playingAudio === example.id ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5 ml-0.5" />
                      )}
                    </button>
                    <div className="flex flex-1 items-end gap-[2px] h-10">
                      {Array.from({ length: 60 }).map((_, i) => {
                        const height =
                          Math.sin(i * 0.25) * 25 +
                          30 +
                          Math.sin(i * 0.8) * 15
                        const isActive =
                          playingAudio === example.id &&
                          (audioProgress[example.id] || 0) > (i / 60) * 100
                        return (
                          <div
                            key={i}
                            className={`flex-1 rounded-full transition-colors duration-150 ${
                              isActive ? "bg-primary" : "bg-foreground/10"
                            }`}
                            style={{ height: `${height}%` }}
                          />
                        )
                      })}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-accent/8 border border-accent/15 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        Результат
                      </span>
                      <p className="mt-1 text-sm text-foreground/75 leading-relaxed">
                        {example.result}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIALS                                                */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Отзывы"
            title="Реальные результаты наших клиентов"
            description="Каждый кейс подтвержден метриками и доступен для верификации"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                initials: "АМ",
                name: "Алексей Михайлов",
                company: 'Директор, ООО "СтройМастер"',
                text: "AI-менеджер обрабатывает все звонки по строительным материалам. За 2 месяца конверсия выросла на 73%, не потеряли ни одного звонка. Окупилось за 3 недели.",
                metric: "+73%",
                metricLabel: "продаж",
              },
              {
                initials: "ЕК",
                name: "Елена Кравцова",
                company: 'Руководитель IT, Банк "Финансы+"',
                text: 'Внедрили AI для call-центра на 500 мест. Соблюдение всех требований ЦБ РФ, интеграция с нашей CRM за 6 недель. Снизили нагрузку на операторов на 40%.',
                metric: "-40%",
                metricLabel: "нагрузки",
              },
              {
                initials: "ДС",
                name: "Дмитрий Соколов",
                company: 'CEO, "ТехноДом"',
                text: "Автоматизировали 15 отелей умным управлением. Экономия на энергии 45%, гости в восторге от технологий. ROI достигли за 8 месяцев вместо планируемых 18.",
                metric: "-45%",
                metricLabel: "затрат на энергию",
              },
            ].map((testimonial, idx) => (
              <Reveal key={testimonial.name} delay={idx * 100}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 lg:p-10 transition-all duration-300 hover:border-primary/15 hover:shadow-lg hover:shadow-primary/5">
                  {/* Quote mark */}
                  <div className="mb-6 text-5xl font-serif leading-none text-primary/20">
                    {'\u201C'}
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-foreground/75">
                    {testimonial.text}
                  </p>

                  {/* Author + metric */}
                  <div className="mt-8 flex items-end justify-between border-t border-border pt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold tracking-tight text-accent">
                        {testimonial.metric}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.metricLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  RESULTS — Dark stats section                                */}
      {/* ============================================================ */}
      <section className="relative py-24 lg:py-32 bg-[#080c18] overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-primary/6 blur-[200px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Результаты"
            title="Цифры, которые говорят за нас"
            description="Средние показатели наших клиентов после внедрения AI-решений"
            light
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                value: "87%",
                label: "Рост конверсии",
                sub: "В среднем у клиентов",
              },
              {
                value: "100%",
                label: "Обработка звонков",
                sub: "Без пропусков 24/7",
              },
              {
                value: "60%",
                label: "Снижение затрат",
                sub: "На персонал и процессы",
              },
              {
                value: "3 нед",
                label: "Окупаемость",
                sub: "В среднем для МСБ",
              },
            ].map((s, idx) => (
              <Reveal key={s.label} delay={idx * 80}>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-10 text-center">
                  <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {s.value}
                  </span>
                  <span className="text-sm font-semibold text-white/80">
                    {s.label}
                  </span>
                  <span className="text-xs text-white/40">{s.sub}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Certifications */}
          <Reveal delay={100}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              {["ISO 27001", "152-ФЗ", "GDPR", "ГОСТ Р"].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5"
                >
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-white/70">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                          */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Ответы на частые вопросы"
          />

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Сколько времени занимает внедрение?",
                a: "Для малого и среднего бизнеса -- от 1 до 4 недель. Для крупных компаний и госсектора -- от 2 до 6 месяцев. Сроки зависят от сложности интеграций и объема бизнес-процессов.",
              },
              {
                q: "Какая стоимость внедрения?",
                a: "Стоимость рассчитывается индивидуально. Средний проект для МСБ окупается за 3-4 недели. Предоставляем бесплатную консультацию и расчет ROI.",
              },
              {
                q: "Нужно ли менять текущую CRM?",
                a: "Нет. Мы интегрируемся с вашими системами: amoCRM, Bitrix24, 1C, SAP и другими. API-интеграции настраиваются без изменения вашей инфраструктуры.",
              },
              {
                q: "Как обеспечивается безопасность данных?",
                a: "Соблюдаем 152-ФЗ, ISO 27001, GDPR. Шифрование AES-256, серверы в РФ. Аудит безопасности и NDA для корпоративных клиентов.",
              },
              {
                q: "Что если AI-менеджер не справится?",
                a: "Система эскалации: если AI не может решить задачу, звонок автоматически переводится на живого менеджера с полной историей диалога. Ни один клиент не теряется.",
              },
              {
                q: "Какая поддержка после запуска?",
                a: "Техподдержка 24/7, регулярные обновления AI-модели, корректировка сценариев. SLA 99.9% для enterprise-клиентов.",
              },
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-bold hover:text-primary transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#080c18]">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/8 blur-[150px]" />

        <div className="relative mx-auto max-w-3xl px-6 py-24 lg:py-32 text-center">
          <Reveal>
            <Badge className="mb-8 border-white/10 bg-white/5 text-white/80 text-xs font-medium tracking-wider uppercase backdrop-blur-sm">
              <Sparkles className="mr-1.5 h-3 w-3" />
              Начните сегодня
            </Badge>

            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Готовы к трансформации бизнеса?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/55">
              Получите бесплатную консультацию, анализ процессов и расчет ROI.
              Без обязательств. Ответ за 15 минут.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="h-14 px-10 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300"
                onClick={openConsultation}
              >
                Получить бесплатный аудит
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-base font-semibold border-white/15 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                onClick={openConsultation}
              >
                Рассчитать ROI
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Ответ за 15 минут
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Бесплатный аудит
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                ТЗ за 2 дня
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export { HomeClientPage }
export default HomeClientPage
