"use client"

import { useState, useRef, useEffect } from "react"
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
  Volume2,
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
  ChevronRight,
  ArrowUpRight,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { solutions, callExamples } from "./home-data"
import { useCTA } from "@/components/modals/cta-provider"

interface HomeClientPageProps {
  locale: Locale
}

/* ------------------------------------------------------------------ */
/*  Intersection Observer hook for reveal-on-scroll                   */
/* ------------------------------------------------------------------ */
function useReveal() {
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

/* ------------------------------------------------------------------ */
/*  Section wrapper with reveal animation                             */
/* ------------------------------------------------------------------ */
function Section({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode
  className?: string
  dark?: boolean
}) {
  const { ref, visible } = useReveal()
  return (
    <section
      ref={ref}
      className={`${dark ? "bg-foreground text-background" : "bg-background text-foreground"} ${className} transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                               */
/* ------------------------------------------------------------------ */
function HomeClientPage({ locale }: HomeClientPageProps) {
  const { t } = useTranslations(locale)
  const { openConsultation } = useCTA()
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const [audioProgress, setAudioProgress] = useState<Record<string, number>>({})

  const howWeWork = [
    {
      phase: "01",
      title: "Погружение в бизнес",
      description:
        "Глубокий анализ процессов, выявление точек роста, изучение целевой аудитории",
      duration: "2-3 дня",
    },
    {
      phase: "02",
      title: "Проектирование решения",
      description:
        "Разработка сценариев, выбор технологий, проектирование архитектуры",
      duration: "3-5 дней",
    },
    {
      phase: "03",
      title: "Обучение AI-агента",
      description:
        "Составление промптов, обучение на ваших данных, настройка интеграций",
      duration: "5-7 дней",
    },
    {
      phase: "04",
      title: "Запуск и поддержка",
      description:
        "Пилотный запуск, корректировка, полноценный деплой с круглосуточным мониторингом",
      duration: "2-3 дня",
    },
  ]

  const capabilities = [
    {
      icon: Settings,
      title: "Автоматическое формирование счетов",
      description:
        "AI-агент сам создает счета в PDF, распознает реквизиты после общения с клиентом.",
    },
    {
      icon: Target,
      title: "Полная воронка продаж",
      description:
        "Борьба с возражениями, квалификация клиентов, презентация товаров и услуг.",
    },
    {
      icon: Phone,
      title: "Работа с почтой и телефоном",
      description:
        "Прием входящих звонков, исходящие обзвоны, email и SMS. Все каналы в одном агенте.",
    },
    {
      icon: Zap,
      title: "Интеграция с CRM и системами",
      description:
        "amoCRM, Bitrix24, 1C, SAP. Автоматическая синхронизация данных в реальном времени.",
    },
    {
      icon: Building2,
      title: "Автоматизация поставщиков",
      description:
        "AI формирует и отправляет заказы поставщикам, отслеживает поставки автоматически.",
    },
    {
      icon: Award,
      title: "Корпоративная культура",
      description:
        "AI обучается вашему тону, ценностям и стандартам. Единообразный опыт для каждого клиента.",
    },
  ]

  const faqs = [
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
      a: "Нет. Мы интегрируемся с вашими системами: amoCRM, Bitrix24, 1C, SAP и другими. API-интеграции настраиваются без изменения инфраструктуры.",
    },
    {
      q: "Как обеспечивается безопасность данных?",
      a: "Соблюдаем 152-ФЗ, ISO 27001, GDPR. Шифрование AES-256, серверы в РФ. Аудит безопасности и NDA для корпоративных клиентов.",
    },
    {
      q: "Что если AI-менеджер не справится?",
      a: "Система эскалации: если AI не может решить задачу, звонок переводится на живого менеджера с полной историей диалога. Ни один клиент не теряется.",
    },
    {
      q: "Какая поддержка после запуска?",
      a: "Техподдержка 24/7, регулярные обновления AI-модели, корректировка сценариев. SLA 99.9% для enterprise-клиентов.",
    },
  ]

  const integrations = [
    { name: "amoCRM", logo: "/images/67cbfeaf-a5fb-4c38-ae6d.jpeg" },
    { name: "Bitrix24", logo: "/images/9af7d4d0-2a0f-4980-a59b.jpeg" },
    { name: "Telegram", logo: "/images/305c48f2-2bd0-4708-8ce9.jpeg" },
    { name: "WhatsApp", logo: "/images/49c7178f-6604-4243-a6cd.jpeg" },
  ]

  const solutionIcons: Record<string, typeof Phone> = {
    "voice-sales": Phone,
    "smart-home": Home,
    smb: Building2,
    enterprise: Building,
  }

  const stats = [
    { value: "500+", label: "Проектов реализовано" },
    { value: "10+", label: "Лет на рынке" },
    { value: "87%", label: "Рост конверсии" },
    { value: "98%", label: "Довольных клиентов" },
  ]

  /* ---------------------------------------------------------------- */

  return (
    <div className="bg-background">
      {/* ============================================================ */}
      {/*  HERO — dark section, centered, typographic                 */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-foreground text-background">
        {/* subtle grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* radial glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-24 text-center">
          <Badge className="mb-8 inline-flex border-primary/30 bg-primary/10 text-primary-foreground text-xs font-medium tracking-wide uppercase">
            AI-технологии для вашего бизнеса
          </Badge>

          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Полная автоматизация бизнеса с искусственным интеллектом
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-background/70 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Голосовые AI-менеджеры, умные дома, автоматизация процессов.
            Увеличьте продажи на 87%, сократите расходы на 60%.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={openConsultation}
            >
              Получить консультацию
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base font-semibold border-background/20 text-background hover:bg-background/10 bg-transparent"
              asChild
            >
              <Link href="#examples">
                Послушать примеры
              </Link>
            </Button>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/5 sm:grid-cols-4 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-6 py-6">
                <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {s.value}
                </span>
                <span className="text-xs text-background/60 font-medium uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SOLUTIONS — clean card grid                                 */}
      {/* ============================================================ */}
      <Section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Наши решения
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              AI-решения для любых задач
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              От автоматизации продаж до умного дома -- комплексные
              индивидуальные решения с прозрачными сроками
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solutionIcons[solution.id] || Phone
              return (
                <Link
                  key={solution.id}
                  href={solution.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* top row: icon + arrow */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>

                  {/* feature list */}
                  <div className="mt-auto space-y-2">
                    {solution.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* stats row */}
                  <div className="mt-6 flex gap-6 border-t border-border pt-6">
                    {solution.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-2xl font-bold tracking-tight text-foreground">
                          {stat.value}
                        </span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  HOW WE WORK — horizontal timeline                          */}
      {/* ============================================================ */}
      <Section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Наш подход
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Как мы автоматизируем ваш бизнес
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Полное погружение в ваш бизнес. Индивидуальная разработка.
              Прозрачный процесс от анализа до запуска.
            </p>
          </div>

          {/* Timeline cards */}
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((phase) => (
              <div
                key={phase.phase}
                className="flex flex-col bg-card p-8"
              >
                <span className="mb-4 font-mono text-sm font-semibold text-primary">
                  {phase.phase}
                </span>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">
                  {phase.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {phase.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  CAPABILITIES — 2-col grid, clean cards                     */}
      {/* ============================================================ */}
      <Section dark className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Уникальные возможности
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Кастомная разработка под ваш бизнес
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-background/60">
              Наши AI-агенты объединяют думающие модели последнего поколения и
              полностью обучаются специфике вашего бизнеса
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group rounded-2xl border border-background/10 bg-background/[.04] p-8 transition-all duration-300 hover:bg-background/[.07] hover:border-background/20"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <cap.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-background/60">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-background/50">
              Работаем с разными секторами экономики
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
                  className="rounded-full border border-background/15 px-4 py-2 text-sm text-background/70"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  TEAM & ECOSYSTEM                                           */}
      {/* ============================================================ */}
      <Section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Наша команда
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              6 компаний, объединенных в одну экосистему
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Погружаемся в ваш бизнес с головой. Знаем все болевые точки,
              можем подсказать, доработать и улучшить процессы.
            </p>
          </div>

          {/* team roles — horizontal cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Бизнес-консультанты",
                text: "Погружаются в ваш бизнес, анализируют процессы, выявляют точки роста и оптимизации",
              },
              {
                icon: Target,
                title: "Бизнес-аналитики",
                text: "Переводят бизнес-задачи на технический язык, структурируют требования для разработчиков",
              },
              {
                icon: Settings,
                title: "IT-специалисты",
                text: "ML-инженеры, backend/frontend разработчики, DevOps. Реализуют техническую часть",
              },
              {
                icon: Bot,
                title: "Проектные менеджеры",
                text: "Координируют работу команды, следят за сроками и качеством. Ваш единый контакт",
              },
              {
                icon: Headphones,
                title: "Техподдержка 24/7",
                text: "Круглосуточный мониторинг. Быстрая реакция на сбои, улучшения и консультации",
              },
              {
                icon: Award,
                title: "AI-тренеры",
                text: "Обучают AI-модели специфике вашего бизнеса, настраивают промпты и сценарии",
              },
            ].map((role) => (
              <div
                key={role.title}
                className="flex gap-4 rounded-xl border border-border p-6 transition-colors hover:border-primary/20 hover:bg-secondary/50"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <role.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{role.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {role.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key team members */}
          <div className="mt-16 rounded-2xl border border-border bg-secondary/30 p-8 md:p-12">
            <h3 className="mb-8 text-center text-xl font-semibold tracking-tight">
              Ключевые эксперты
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background text-lg font-bold">
                    {m.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                  <p className="mt-1 text-xs text-primary font-medium">
                    {m.exp}
                  </p>
                  <p className="text-xs text-muted-foreground">{m.bg}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  CALL EXAMPLES — audio demos                                 */}
      {/* ============================================================ */}
      <Section id="examples" className="py-24 md:py-32 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Реальные примеры
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Послушайте AI-менеджера
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Записи настоящих звонков AI-менеджера с клиентами из разных
              отраслей
            </p>
          </div>

          <div className="space-y-6">
            {callExamples.map((example) => (
              <div
                key={example.id}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                      {example.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">{example.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {example.description}
                    </p>
                  </div>
                  <span className="flex-shrink-0 font-mono text-sm text-muted-foreground">
                    {example.duration}
                  </span>
                </div>

                {/* Audio waveform */}
                <div className="flex items-center gap-4 rounded-xl bg-secondary/60 p-4">
                  <button
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
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
                    aria-label={playingAudio === example.id ? "Пауза" : "Воспроизвести"}
                  >
                    {playingAudio === example.id ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5 ml-0.5" />
                    )}
                  </button>
                  <div className="flex flex-1 items-end gap-[2px] h-10">
                    {Array.from({ length: 50 }).map((_, i) => {
                      const height =
                        Math.sin(i * 0.25) * 25 + 30 + Math.sin(i * 0.8) * 15
                      const isActive =
                        playingAudio === example.id &&
                        (audioProgress[example.id] || 0) > (i / 50) * 100
                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-full transition-colors duration-150 ${
                            isActive
                              ? "bg-primary"
                              : "bg-foreground/15"
                          }`}
                          style={{ height: `${height}%` }}
                        />
                      )
                    })}
                  </div>
                </div>

                {/* Result */}
                <div className="mt-4 flex items-start gap-2 rounded-lg bg-accent/10 border border-accent/20 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <p className="text-sm text-foreground/80">
                    <span className="font-semibold">Результат:</span>{" "}
                    {example.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  INTEGRATIONS — logo row                                     */}
      {/* ============================================================ */}
      <Section className="py-16 border-t border-border">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Работаем с вашими инструментами
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex h-16 w-28 items-center justify-center rounded-xl border border-border bg-card p-3 transition-all hover:border-primary/20 hover:shadow-sm"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  TESTIMONIALS                                                */}
      {/* ============================================================ */}
      <Section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Отзывы клиентов
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Что говорят наши клиенты
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                initials: "АМ",
                name: "Алексей Михайлов",
                company: 'Директор, ООО "СтройМастер"',
                text: "AI-менеджер обрабатывает все звонки по строительным материалам. За 2 месяца конверсия выросла на 73%, не потеряли ни одного звонка. Окупилось за 3 недели.",
                metric: "+73% продаж",
              },
              {
                initials: "ЕК",
                name: "Елена Кравцова",
                company: 'Руководитель IT, Банк "Финансы+"',
                text: 'Внедрили AI для call-центра на 500 мест. Соблюдение всех требований ЦБ РФ, интеграция с нашей CRM за 6 недель. Снизили нагрузку на операторов на 40%.',
                metric: "152-ФЗ, ISO 27001",
              },
              {
                initials: "ДС",
                name: "Дмитрий Соколов",
                company: 'CEO, "ТехноДом"',
                text: "Автоматизировали 15 отелей умным управлением. Экономия на энергии 45%, гости в восторге от технологий. ROI достигли за 8 месяцев вместо планируемых 18.",
                metric: "-45% энергии",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.company}
                    </p>
                  </div>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {`"${t.text}"`}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">
                    {t.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  RESULTS IN NUMBERS — dark section                          */}
      {/* ============================================================ */}
      <Section dark className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Результаты в цифрах
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-background/60">
              Реальные метрики наших клиентов после внедрения AI-решений
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/5 lg:grid-cols-4">
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
                value: "3 нед.",
                label: "Окупаемость",
                sub: "В среднем для МСБ",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-2 px-6 py-10 text-center"
              >
                <span className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {s.value}
                </span>
                <span className="text-sm font-semibold">{s.label}</span>
                <span className="text-xs text-background/50">{s.sub}</span>
              </div>
            ))}
          </div>

          {/* Certifications row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {["ISO 27001", "152-ФЗ", "GDPR", "ГОСТ Р"].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 rounded-full border border-background/15 px-5 py-2.5"
              >
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  FAQ — accordion                                             */}
      {/* ============================================================ */}
      <Section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              FAQ
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Часто задаваемые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  FINAL CTA — dark, clean                                    */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Готовы к трансформации бизнеса?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-background/70">
            Получите бесплатную консультацию, анализ процессов и расчет ROI.
            Без обязательств.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={openConsultation}
            >
              Получить консультацию
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base font-semibold border-background/20 text-background hover:bg-background/10 bg-transparent"
              onClick={openConsultation}
            >
              Рассчитать ROI
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-background/50">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              Ответ за 15 минут
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              Бесплатный аудит
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              ТЗ за 2 дня
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export { HomeClientPage }
export default HomeClientPage
