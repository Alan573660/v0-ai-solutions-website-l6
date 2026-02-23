"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
  BarChart3,
  Globe,
  Lock,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { solutions, callExamples } from "./home-data"
import { useCTA } from "@/components/modals/cta-provider"

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
interface HomeClientPageProps { locale: Locale }

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

  /* ================================================================ */
  return (
    <div className="bg-background overflow-x-hidden">

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#060a16]">
        {/* BG image */}
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover opacity-40 mix-blend-lighten" priority />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(56,130,255,.07),transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060a16]/30 via-[#060a16]/60 to-[#060a16]" />
        </div>

        {/* Very subtle grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-20 lg:pt-44 lg:pb-24">
          {/* Top badge */}
          <div className="flex justify-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-white/70">{'AI-решения для бизнеса нового поколения'}</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-[920px] text-center text-balance text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] animate-fade-in-up">
            {'Голосовые AI-менеджеры, которые '}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {'продают за вас'}
            </span>
          </h1>

          {/* Sub */}
          <p className="mx-auto mt-7 max-w-2xl text-center text-pretty text-[1.125rem] leading-[1.7] text-white/50 animate-fade-in-up" style={{ animationDelay: "0.12s" }}>
            {'Принимают звонки, обрабатывают заявки, формируют счета и ведут CRM. Без выходных, без больничных, без ошибок. 24/7/365.'}
          </p>

          {/* CTA */}
          <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
            <Button size="lg" className="h-[52px] rounded-xl px-8 text-[15px] font-semibold shadow-[0_0_40px_rgba(56,130,255,.15)] hover:shadow-[0_0_60px_rgba(56,130,255,.25)] transition-all duration-300" onClick={openConsultation}>
              {'Получить бесплатный аудит'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-[52px] rounded-xl px-8 text-[15px] font-semibold border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.16] backdrop-blur-sm transition-all duration-300" asChild>
              <Link href="#examples">
                <Play className="mr-2 h-4 w-4" />
                {'Послушать AI в деле'}
              </Link>
            </Button>
          </div>

          {/* Trust micro-text */}
          <p className="mt-7 text-center text-[13px] text-white/30 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            {'Бесплатная консультация  \u00b7  Расчет ROI за 15 минут  \u00b7  Без обязательств'}
          </p>

          {/* Stats strip */}
          <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Проектов реализовано" },
              { value: "10+", label: "Лет на рынке AI" },
              { value: "+87%", label: "Средний рост конверсии" },
              { value: "98%", label: "Клиентов довольны" },
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
      {/*  INTEGRATIONS BAR                                            */}
      {/* ============================================================ */}
      <section className="border-b border-border/60 bg-background py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">{'Интеграции'}</span>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["amoCRM", "Bitrix24", "Telegram", "WhatsApp", "1C", "SAP"].map((name) => (
                <span key={name} className="text-sm font-semibold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default">{name}</span>
              ))}
            </div>
            <div className="flex items-center gap-5 text-xs text-muted-foreground/50">
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> ISO 27001</span>
              <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> 152-ФЗ</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SOLUTIONS                                                   */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{'Решения'}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {'AI-решения, которые уже зарабатывают деньги'}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {'Каждое решение проектируется под вашу отрасль, интегрируется с текущими системами и приносит измеримый результат'}
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution, idx) => {
              const Icon = solutionIcons[solution.id] || Phone
              return (
                <Reveal key={solution.id} delay={idx * 100}>
                  <Link href={solution.href} className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card transition-all duration-500 hover:border-primary/20 hover:shadow-[0_8px_60px_-12px_rgba(56,130,255,.08)]">
                    {/* Top line accent */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex flex-col p-8 lg:p-10">
                      <div className="flex items-start justify-between mb-7">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.07] text-primary ring-1 ring-primary/[0.1]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>

                      <h3 className="mb-2.5 text-xl font-bold tracking-tight lg:text-[1.375rem] group-hover:text-primary transition-colors duration-300">{solution.title}</h3>
                      <p className="mb-7 text-[0.9375rem] leading-relaxed text-muted-foreground">{solution.description}</p>

                      <div className="mb-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {solution.features.slice(0, 4).map((f, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-[0.875rem]">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500/70" />
                            <span className="text-foreground/75">{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex gap-8 border-t border-border/60 pt-6">
                        {solution.stats.map((stat, i) => (
                          <div key={i}>
                            <span className="text-[1.75rem] font-extrabold tracking-tight">{stat.value}</span>
                            <span className="ml-1.5 text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
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
      {/*  HOW WE WORK                                                 */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36 border-y border-border/50 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{'Процесс'}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {'От анализа до запуска за 2\u20134 недели'}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {'Прозрачный процесс с четкими этапами. Вы видите прогресс на каждом шаге.'}
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { phase: "01", title: "Погружение", desc: "Глубокий анализ бизнес-процессов, выявление точек роста и изучение целевой аудитории", dur: "2\u20133 дня", icon: Target },
              { phase: "02", title: "Архитектура", desc: "Разработка сценариев, выбор моделей, проектирование интеграций с инфраструктурой", dur: "3\u20135 дней", icon: Settings },
              { phase: "03", title: "Обучение AI", desc: "Составление промптов, обучение на ваших данных, настройка под тон бренда", dur: "5\u20137 дней", icon: Bot },
              { phase: "04", title: "Запуск", desc: "Пилот, A/B тесты, корректировка, полный деплой с мониторингом 24/7", dur: "2\u20133 дня", icon: Zap },
            ].map((step, idx) => (
              <Reveal key={step.phase} delay={idx * 100}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_8px_40px_-12px_rgba(56,130,255,.06)]">
                  {/* Phase pill */}
                  <div className="absolute -top-3 left-8 flex h-6 items-center rounded-full bg-foreground px-3 text-[11px] font-bold text-background tracking-wider">
                    {step.phase}
                  </div>

                  <div className="mt-3 mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-2.5 text-lg font-bold tracking-tight">{step.title}</h3>
                  <p className="mb-6 flex-1 text-[0.875rem] leading-relaxed text-muted-foreground">{step.desc}</p>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
                    <Clock className="h-3.5 w-3.5" />
                    {step.dur}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CAPABILITIES                                                */}
      {/* ============================================================ */}
      <section className="relative py-28 lg:py-36 bg-[#060a16] overflow-hidden">
        {/* Subtle ambient light */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-full max-w-5xl bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
        <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-sky-500/[0.03] blur-[140px]" />
        <div className="pointer-events-none absolute left-[-10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.03] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label light>{'Возможности'}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {'Что умеет AI-менеджер M2'}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-white/45">
              {'Модели последнего поколения, обученные специфике вашей отрасли'}
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Settings, title: "Формирование счетов", text: "AI создает счета в PDF, распознает реквизиты и отправляет клиенту автоматически" },
              { icon: Target, title: "Полная воронка продаж", text: "Квалификация лидов, борьба с возражениями, презентация. Конверсия до +87%" },
              { icon: Phone, title: "Все каналы связи", text: "Звонки, email, SMS, Telegram, WhatsApp. Единый агент на все каналы" },
              { icon: BarChart3, title: "Интеграция с CRM", text: "amoCRM, Bitrix24, 1C, SAP. Синхронизация данных в реальном времени" },
              { icon: Globe, title: "Автоматизация закупок", text: "AI формирует заказы поставщикам и отслеживает статус поставок" },
              { icon: Award, title: "Обучение под бренд", text: "AI перенимает тон, ценности и стандарты компании для каждого клиента" },
            ].map((cap, idx) => (
              <Reveal key={cap.title} delay={idx * 80}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.015] p-7 lg:p-8 transition-all duration-500 hover:bg-white/[0.035] hover:border-white/[0.1]">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/[0.08] text-sky-400 ring-1 ring-sky-500/[0.1]">
                    <cap.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2.5 text-[0.9375rem] font-bold tracking-tight text-white">{cap.title}</h3>
                  <p className="text-[0.875rem] leading-relaxed text-white/40">{cap.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Industries */}
          <Reveal delay={200}>
            <div className="mt-20 text-center">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">{'Отрасли'}</p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {["Строительство", "Недвижимость", "Умные дома", "Госсектор", "Банки", "E-commerce", "Медицина", "Логистика"].map((ind) => (
                  <span key={ind} className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-[13px] text-white/45 transition-colors hover:border-white/[0.12] hover:text-white/65">{ind}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TEAM                                                        */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{'Команда'}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {'6 компаний в одной экосистеме'}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {'Полная команда специалистов под каждый проект'}
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Users, title: "Бизнес-консультанты", text: "Погружаются в бизнес, анализируют процессы, выявляют точки роста" },
              { icon: Target, title: "Бизнес-аналитики", text: "Переводят бизнес-задачи на технический язык, структурируют требования" },
              { icon: Settings, title: "ML-инженеры", text: "Backend, frontend, DevOps, ML. Реализуют техническую часть решений" },
              { icon: Bot, title: "Проектные менеджеры", text: "Координируют работу, следят за сроками и качеством. Единый контакт" },
              { icon: Headphones, title: "Техподдержка 24/7", text: "Круглосуточный мониторинг, быстрая реакция, непрерывные улучшения" },
              { icon: Award, title: "AI-тренеры", text: "Обучают модели специфике бизнеса, настраивают промпты и сценарии" },
            ].map((role, idx) => (
              <Reveal key={role.title} delay={idx * 70}>
                <div className="group flex h-full items-start gap-4 rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/15 hover:shadow-[0_4px_30px_-8px_rgba(56,130,255,.06)]">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                    <role.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-[0.9375rem] font-bold tracking-tight">{role.title}</h3>
                    <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">{role.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Experts */}
          <Reveal delay={100}>
            <div className="mt-16 rounded-2xl border border-border/50 bg-muted/30 p-8 lg:p-12">
              <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/60">{'Ключевые эксперты'}</p>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "Сергей Волков", role: "CTO & ML Architect", exp: "15 лет в AI", bg: "ex-Яндекс, Mail.ru" },
                  { name: "Анна Петрова", role: "Head of AI", exp: "12 лет в ML", bg: "ex-Сбер, VK" },
                  { name: "Игорь Смирнов", role: "Lead Data Scientist", exp: "10 лет в Data", bg: "ex-Tinkoff, Ozon" },
                  { name: "Мария Соколова", role: "Project Director", exp: "13 лет в IT", bg: "ex-Kaspersky, EPAM" },
                ].map((m) => (
                  <div key={m.name} className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold ring-[3px] ring-background">
                      {m.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <p className="text-[0.9375rem] font-bold">{m.name}</p>
                    <p className="text-[0.8125rem] text-muted-foreground">{m.role}</p>
                    <p className="mt-1.5 text-xs font-semibold text-primary">{m.exp}</p>
                    <p className="text-xs text-muted-foreground/60">{m.bg}</p>
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
      <section id="examples" className="py-28 lg:py-36 border-y border-border/50 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{'Демо'}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {'Послушайте AI-менеджера в деле'}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {'Настоящие записи звонков из разных отраслей'}
            </p>
          </Reveal>

          <div className="flex flex-col gap-5">
            {callExamples.map((example, idx) => (
              <Reveal key={example.id} delay={idx * 100}>
                <div className="rounded-2xl border border-border/70 bg-card p-6 lg:p-8 transition-all duration-300 hover:shadow-[0_4px_30px_-8px_rgba(56,130,255,.06)]">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <span className="mb-2 inline-block rounded-md bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{example.category}</span>
                      <h3 className="text-lg font-bold tracking-tight">{example.title}</h3>
                      <p className="mt-1 text-[0.875rem] text-muted-foreground">{example.description}</p>
                    </div>
                    <span className="flex-shrink-0 font-mono text-[13px] text-muted-foreground/50">{example.duration}</span>
                  </div>

                  {/* Player */}
                  <div className="flex items-center gap-4 rounded-xl bg-muted/60 p-4">
                    <button
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_4px_20px_-4px_rgba(56,130,255,.3)] transition-transform hover:scale-105 active:scale-95"
                      onClick={() => {
                        if (playingAudio === example.id) {
                          setPlayingAudio(null)
                        } else {
                          setPlayingAudio(example.id)
                          let progress = 0
                          const interval = setInterval(() => {
                            progress += 2
                            setAudioProgress((prev) => ({ ...prev, [example.id]: progress }))
                            if (progress >= 100) { clearInterval(interval); setPlayingAudio(null) }
                          }, 200)
                        }
                      }}
                      aria-label={playingAudio === example.id ? "Пауза" : "Воспроизвести"}
                    >
                      {playingAudio === example.id ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                    </button>
                    <div className="flex flex-1 items-end gap-[2px] h-9">
                      {Array.from({ length: 60 }).map((_, i) => {
                        const height = Math.sin(i * 0.25) * 25 + 30 + Math.sin(i * 0.8) * 15
                        const isActive = playingAudio === example.id && (audioProgress[example.id] || 0) > (i / 60) * 100
                        return <div key={i} className={`flex-1 rounded-full transition-colors duration-150 ${isActive ? "bg-primary" : "bg-foreground/8"}`} style={{ height: `${height}%` }} />
                      })}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.04] p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">{'Результат'}</span>
                      <p className="mt-1 text-[0.875rem] leading-relaxed text-foreground/70">{example.result}</p>
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
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{'Отзывы'}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {'Результаты наших клиентов'}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {'Каждый кейс подтвержден метриками'}
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { initials: "АМ", name: "Алексей Михайлов", co: 'Директор, ООО "СтройМастер"', text: "AI-менеджер обрабатывает все звонки по стройматериалам. За 2 месяца конверсия выросла на 73%. Окупилось за 3 недели.", metric: "+73%", ml: "продаж" },
              { initials: "ЕК", name: "Елена Кравцова", co: 'Руководитель IT, Банк "Финансы+"', text: 'Внедрили AI для call-центра на 500 мест. Соблюдение всех требований ЦБ РФ, интеграция с CRM за 6 недель. Снизили нагрузку на 40%.', metric: "-40%", ml: "нагрузки" },
              { initials: "ДС", name: "Дмитрий Соколов", co: 'CEO, "ТехноДом"', text: "Автоматизировали 15 отелей умным управлением. Экономия на энергии 45%, гости в восторге. ROI за 8 месяцев вместо 18.", metric: "-45%", ml: "затрат" },
            ].map((t, idx) => (
              <Reveal key={t.name} delay={idx * 100}>
                <div className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-8 lg:p-10 transition-all duration-300 hover:border-primary/15 hover:shadow-[0_8px_40px_-12px_rgba(56,130,255,.06)]">
                  <div className="mb-5 text-4xl leading-none text-primary/15 font-serif select-none">{'\u201C'}</div>
                  <p className="flex-1 text-[0.9375rem] leading-[1.7] text-foreground/70">{t.text}</p>
                  <div className="mt-8 flex items-end justify-between border-t border-border/50 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">{t.initials}</div>
                      <div>
                        <p className="text-[0.875rem] font-bold">{t.name}</p>
                        <p className="text-xs text-muted-foreground/70">{t.co}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold tracking-tight text-emerald-500">{t.metric}</p>
                      <p className="text-[11px] text-muted-foreground/60">{t.ml}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  RESULTS STATS                                               */}
      {/* ============================================================ */}
      <section className="relative py-28 lg:py-36 bg-[#060a16] overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-full max-w-5xl bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-sky-500/[0.03] blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label light>{'Результаты'}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {'Цифры, которые говорят за нас'}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-white/40">
              {'Средние показатели клиентов после внедрения'}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {[
              { value: "+87%", label: "Рост конверсии", sub: "В среднем у клиентов" },
              { value: "100%", label: "Обработка звонков", sub: "Без пропусков 24/7" },
              { value: "-60%", label: "Снижение затрат", sub: "На персонал и процессы" },
              { value: "3 нед", label: "Окупаемость", sub: "В среднем для МСБ" },
            ].map((s, idx) => (
              <Reveal key={s.label} delay={idx * 80}>
                <div className="flex flex-col items-center gap-2.5 rounded-2xl border border-white/[0.06] bg-white/[0.015] px-6 py-10 text-center">
                  <span className="text-[2.5rem] font-extrabold tracking-tight text-white sm:text-5xl">{s.value}</span>
                  <span className="text-[0.875rem] font-semibold text-white/65">{s.label}</span>
                  <span className="text-xs text-white/30">{s.sub}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              {["ISO 27001", "152-ФЗ", "GDPR", "ГОСТ Р"].map((cert) => (
                <div key={cert} className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2">
                  <Shield className="h-3.5 w-3.5 text-sky-400/60" />
                  <span className="text-[13px] font-medium text-white/50">{cert}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                          */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <Label>{'FAQ'}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {'Ответы на частые вопросы'}
            </h2>
          </Reveal>

          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Сколько времени занимает внедрение?", a: "Для МСБ \u2014 от 1 до 4 недель. Для крупных компаний и госсектора \u2014 от 2 до 6 месяцев. Сроки зависят от сложности интеграций и объема бизнес-процессов." },
              { q: "Какая стоимость внедрения?", a: "Рассчитывается индивидуально. Средний проект для МСБ окупается за 3\u20134 недели. Предоставляем бесплатную консультацию и расчет ROI." },
              { q: "Нужно ли менять текущую CRM?", a: "Нет. Мы интегрируемся с вашими системами: amoCRM, Bitrix24, 1C, SAP и другими без изменения инфраструктуры." },
              { q: "Как обеспечивается безопасность данных?", a: "Соблюдаем 152-ФЗ, ISO 27001, GDPR. Шифрование AES-256, серверы в РФ. Аудит безопасности и NDA для корпоративных клиентов." },
              { q: "Что если AI-менеджер не справится?", a: "Система эскалации: звонок автоматически переводится на живого менеджера с полной историей диалога. Ни один клиент не теряется." },
              { q: "Какая поддержка после запуска?", a: "Техподдержка 24/7, регулярные обновления модели, корректировка сценариев. SLA 99.9% для enterprise-клиентов." },
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-border/50">
                <AccordionTrigger className="text-left text-[0.9375rem] font-bold hover:text-primary transition-colors py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-[0.875rem] text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#060a16]">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-full max-w-5xl bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-sky-500/[0.04] blur-[150px]" />

        <div className="relative mx-auto max-w-3xl px-6 py-28 lg:py-36 text-center">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-white/60">{'Начните сегодня'}</span>
            </div>

            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {'Готовы к трансформации бизнеса?'}
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-white/45">
              {'Получите бесплатную консультацию, анализ процессов и расчет ROI. Без обязательств. Ответ за 15 минут.'}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="h-[52px] rounded-xl px-10 text-[15px] font-semibold shadow-[0_0_40px_rgba(56,130,255,.15)] hover:shadow-[0_0_60px_rgba(56,130,255,.25)] transition-all duration-300" onClick={openConsultation}>
                {'Получить бесплатный аудит'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-[52px] rounded-xl px-10 text-[15px] font-semibold border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.16] backdrop-blur-sm transition-all duration-300" onClick={openConsultation}>
                {'Рассчитать ROI'}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-7 text-[13px] text-white/30">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500/50" />{'Ответ за 15 минут'}</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500/50" />{'Бесплатный аудит'}</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500/50" />{'ТЗ за 2 дня'}</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export { HomeClientPage }
export default HomeClientPage
