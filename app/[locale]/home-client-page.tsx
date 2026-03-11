"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  Phone,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
  Zap,
  Shield,
  Bot,
  Headphones,
  Receipt,
  Truck,
  FileText,
  MessageSquare,
  Database,
  Check,
  Play,
  Pause,
  Volume2,
  ArrowUpRight,
  Sparkles,
  Brain,
  PhoneIncoming,
  PhoneOutgoing,
  BarChart3,
  Globe,
  Lock,
  Settings,
  type LucideIcon,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { getSolutions, getCallExamples } from "./home-data"
import { useCTA } from "@/components/modals/cta-provider"

/* ================================================================== */
/* Intersection Observer hook for reveal animations                   */
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

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  )
}

/* ================================================================== */
/*  Main Home Page Component                                          */
/* ================================================================== */
export default function HomeClientPage({ locale }: { locale: Locale }) {
  const { openCTA } = useCTA()
  const [playingId, setPlayingId] = useState<string | null>(null)
  const solutions = getSolutions(locale)
  const callExamples = getCallExamples(locale)

  const automationTypes = [
    { icon: PhoneIncoming, title: "Входящие звонки", desc: "Приём, квалификация лидов, создание заявок в CRM" },
    { icon: PhoneOutgoing, title: "Исходящие звонки", desc: "Обход, уточнение, follow-up и перепродажи" },
    { icon: TrendingUp, title: "Продажи", desc: "От первого звонка до сделки с расчётом цены" },
    { icon: FileText, title: "Заявки", desc: "Сбор, обработка, распределение между менеджерами" },
    { icon: Receipt, title: "Счета", desc: "Выставление, отправка, отслеживание оплаты" },
    { icon: Truck, title: "Логистика", desc: "Расчёт доставки, отслеживание, уведомления" },
  ]

  const howItWorks = [
    { num: "01", title: "Слушает", desc: "AI распознаёт речь клиента в реальном времени" },
    { num: "02", title: "Понимает", desc: "Анализирует контекст и потребности через LLM" },
    { num: "03", title: "Отвечает", desc: "Формирует ответ и озвучивает синтезатором" },
    { num: "04", title: "Интегрирует", desc: "Создаёт заявки, сделки, записи в системах" },
    { num: "05", title: "Анализирует", desc: "Собирает данные для аналитики и улучшений" },
    { num: "06", title: "Передаёт", desc: "При необходимости переводит на живого менеджера" },
  ]

  const abilities = [
    { icon: Brain, title: "Понимание контекста", desc: "Анализирует личную историю клиента и его потребности" },
    { icon: BarChart3, title: "Расчёты в реальном времени", desc: "Вычисляет цены, сроки доставки и другие параметры" },
    { icon: Database, title: "Интеграция с системами", desc: "Подключается к CRM, 1C, ERP и другим сервисам" },
    { icon: Headphones, title: "Перевод на менеджера", desc: "Автоматически определяет сложные ситуации" },
    { icon: Globe, title: "Многоязычность", desc: "Работает на 15+ языках в одной систем��" },
    { icon: Lock, title: "Безопасность данных", desc: "Шифрование, GDPR, 152-ФЗ, выделенные сервера" },
    { icon: Zap, title: "Высокая скорость", desc: "Отвечает за 1-3 секунды на любой вопрос" },
    { icon: Settings, title: "Легко настраивается", desc: "Обновляйте сценарии без кодирования через админку" },
  ]

  const faqItems: Array<{ q: string; a: string }> = [
    {
      q: "Как быстро можно запустить AI?",
      a: "Типовое внедрение занимает 7-14 дней. Это включает интеграцию с вашими системами, настройку сценариев и тестовый период. Срок можно сократить до 3-4 дней для типовых сценариев.",
    },
    {
      q: "Какие системы поддерживаются?",
      a: "Мы интегрируемся с amoCRM, Bitrix24, Leadvertex, 1С, Контур, Avaya, Asterisk, SIP, WebRTC. Если вашей системы нет в списке — разработаем интеграцию специально для вас.",
    },
    {
      q: "Сколько стоит?",
      a: "Цена зависит от количества звонков и нужных интеграций. Стартовый пакет с 100-500 звонками обходится от $500/месяц. Для точного расчета оставьте контакты — составим предложение за 24 часа.",
    },
    {
      q: "Может ли робот общаться на разных языках?",
      a: "Да, AI поддерживает 15+ языков. Один робот может переключаться между языками в одном разговоре или обслуживать разные страны под разные сценарии.",
    },
    {
      q: "Что если AI не поймёт клиента?",
      a: "Система автоматически анализирует степень уверенности. При низком уровне понимания робот просит повторить или предлагает перейти на менеджера. Вероятность ошибок менее 2%.",
    },
    {
      q: "Как считаются звонки?",
      a: "За звонок тарифицируется минута беседы с AI, включая все переводы на менеджеров. Входящие и исходящие звонки тарифицируются отдельно. Записи разговоров и аналитика не тарифицируются.",
    },
  ]

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* ================================================================ */}
      {/* HERO SECTION */}
      {/* ================================================================ */}
      <section className="relative min-h-screen w-full overflow-hidden pt-20 md:pt-32">
        {/* Animated background grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10 px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
            {/* Left side - Text */}
            <Reveal className="max-w-2xl">
              <Label>AI Platform</Label>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
                Business Automation
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">with AI Agents</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Автоматизируйте входящие и исходящие звонки, продажи, заявки, счета и логистику одной платформой. 24/7 работа, интеграция с вашими системами, прозрачное ценообразование.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => openCTA()} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg h-14 px-8">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg h-14 px-8 border-white/20 hover:bg-white/10">
                  Schedule Demo
                </Button>
              </div>
              <div className="mt-12 flex flex-col gap-3">
                {[
                  { icon: CheckCircle2, text: "3+ years in AI automation" },
                  { icon: CheckCircle2, text: "500+ companies using" },
                  { icon: CheckCircle2, text: "10M+ calls processed" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-300">
                    <item.icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    {item.text}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right side - Animated visualization */}
            <Reveal delay={200} className="relative h-[500px] md:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-white/10 backdrop-blur-sm" />
              <div className="absolute inset-4 rounded-xl overflow-hidden">
                {/* Floating cards animation */}
                <div className="absolute top-10 left-10 w-48 h-32 rounded-xl bg-gradient-to-br from-blue-600/80 to-cyan-600/80 backdrop-blur border border-white/20 p-4 animate-float shadow-2xl">
                  <div className="text-white/80 text-sm font-semibold mb-2">Incoming Calls</div>
                  <div className="text-2xl font-bold text-white">1,243</div>
                  <div className="text-xs text-white/60 mt-2">+15% today</div>
                </div>
                <div className="absolute top-32 right-8 w-48 h-32 rounded-xl bg-gradient-to-br from-purple-600/80 to-pink-600/80 backdrop-blur border border-white/20 p-4 animate-float shadow-2xl" style={{ animationDelay: "0.5s" }}>
                  <div className="text-white/80 text-sm font-semibold mb-2">Deals Created</div>
                  <div className="text-2xl font-bold text-white">847</div>
                  <div className="text-xs text-white/60 mt-2">87% conversion</div>
                </div>
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-56 h-28 rounded-xl bg-gradient-to-br from-green-600/80 to-emerald-600/80 backdrop-blur border border-white/20 p-4 animate-float shadow-2xl" style={{ animationDelay: "1s" }}>
                  <div className="text-white/80 text-sm font-semibold mb-2">Integration</div>
                  <div className="text-xl font-bold text-white">amoCRM • 1C • CMS</div>
                  <div className="text-xs text-white/60 mt-2">15+ systems connected</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT AI AUTOMATES SECTION */}
      {/* ================================================================ */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <Label>Platform Capabilities</Label>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              What AI Automates
            </h2>
            <p className="text-xl text-slate-300">
              From calls to logistics, manage every business process with AI
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationTypes.map((type, idx) => {
              const Icon = type.icon
              return (
                <Reveal key={idx} delay={idx * 100} className="group">
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full hover:shadow-xl hover:shadow-cyan-500/10">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                      <p className="text-sm text-slate-400">{type.desc}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW AI WORKS SECTION */}
      {/* ================================================================ */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="container mx-auto px-4 max-w-7xl">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <Label>Process</Label>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              How AI Works
            </h2>
            <p className="text-xl text-slate-300">
              6-step process from call to deal
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-3">
            {howItWorks.map((step, idx) => (
              <Reveal key={idx} delay={idx * 80} className="relative">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 text-center h-full flex flex-col justify-center hover:border-cyan-500/50 transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-slate-400">{step.desc}</p>
                  {idx < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute -right-1.5 top-1/2 -translate-y-1/2 text-slate-600">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* AI ABILITIES SECTION */}
      {/* ================================================================ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <Label>Capabilities</Label>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              AI Capabilities
            </h2>
            <p className="text-xl text-slate-300">
              Enterprise-grade features out of the box
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {abilities.map((ability, idx) => {
              const Icon = ability.icon
              return (
                <Reveal key={idx} delay={idx * 80} className="group">
                  <Card className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="font-bold text-white mb-2">{ability.title}</h3>
                      <p className="text-sm text-slate-400">{ability.desc}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SOLUTIONS GRID */}
      {/* ================================================================ */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="container mx-auto px-4 max-w-7xl">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <Label>Solutions</Label>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              12 AI Solutions
            </h2>
            <p className="text-xl text-slate-300">
              For every business process and industry
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon
              return (
                <Reveal key={solution.id} delay={idx * 80}>
                  <Link href={solution.href}>
                    <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full cursor-pointer group hover:shadow-xl hover:shadow-cyan-500/10">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.gradient} opacity-20 flex items-center justify-center mb-4`}>
                          <Icon className={`w-6 h-6 text-cyan-400`} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition">{solution.title}</h3>
                        <p className="text-sm text-slate-400 mb-4">{solution.description}</p>
                        <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                          Learn more <ArrowRight className="w-4 h-4 ml-2" />
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

      {/* ================================================================ */}
      {/* AUDIO EXAMPLES SECTION */}
      {/* ================================================================ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <Label>Voice Examples</Label>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Hear AI in Action
            </h2>
            <p className="text-xl text-slate-300">
              Real conversations with AI agents handling business processes
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {callExamples.map((example, idx) => (
              <Reveal key={example.id} delay={idx * 100}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">{example.title}</h3>
                        <p className="text-sm text-slate-400">{example.category}</p>
                      </div>
                      <div className="text-xs text-slate-500 font-mono">{example.duration}</div>
                    </div>

                    <p className="text-sm text-slate-400 mb-4">{example.description}</p>

                    <div className="mb-4 p-3 bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-600/20 rounded-lg">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-green-300">{example.result}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setPlayingId(playingId === example.id ? null : example.id)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600/50 to-cyan-600/50 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                    >
                      {playingId === example.id ? (
                        <>
                          <Pause className="w-4 h-4" /> Stop
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" /> Play
                        </>
                      )}
                    </button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FEATURES COMPARISON */}
      {/* ================================================================ */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="container mx-auto px-4 max-w-7xl">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <Label>Why M2</Label>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Choose M2 Platform
            </h2>
            <p className="text-xl text-slate-300">
              Best-in-class AI automation with proven results
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "3x Faster Deployment", desc: "7-14 days from start to production" },
              { icon: TrendingUp, title: "87% Avg Conversion", desc: "Proven results across 500+ businesses" },
              { icon: Clock, title: "24/7 Availability", desc: "AI never sleeps or takes vacation" },
              { icon: Shield, title: "Enterprise Security", desc: "GDPR, 152-ФЗ, ISO 27001 compliant" },
              { icon: Users, title: "Expert Support", desc: "Dedicated success manager for your account" },
              { icon: Globe, title: "15+ Languages", desc: "Works globally with auto-translation" },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <Card className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border-slate-700/50 h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-400">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PRICING SECTION */}
      {/* ================================================================ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <Label>Pricing</Label>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300">
              Pay only for what you use. No hidden fees.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "$599", features: ["100-500 calls/month", "1 integration", "Basic support", "Email + SMS"] },
              { name: "Professional", price: "$1,299", features: ["500-2000 calls/month", "5 integrations", "Priority support", "All channels"], highlighted: true },
              { name: "Enterprise", price: "Custom", features: ["Unlimited calls", "Unlimited integrations", "24/7 support", "Dedicated team"] },
            ].map((plan, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className={`bg-gradient-to-br ${plan.highlighted ? "from-blue-600/30 to-cyan-600/30 border-cyan-500/50" : "from-slate-800/50 to-slate-900/50 border-slate-700/50"} transition-all duration-300 h-full ${plan.highlighted ? "ring-2 ring-cyan-500/50 transform scale-105" : ""}`}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                      {plan.price}
                      {plan.price !== "Custom" && <span className="text-lg text-slate-400">/mo</span>}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-300">
                          <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => openCTA()}
                      className={`w-full ${plan.highlighted ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" : "border border-slate-600 hover:bg-slate-800"}`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FAQ SECTION */}
      {/* ================================================================ */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal className="text-center mb-16">
            <Label>FAQ</Label>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Common Questions
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to know about M2 Platform
            </p>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 rounded-xl px-6 overflow-hidden data-[state=open]:border-cyan-500/50 transition-all"
                >
                  <AccordionTrigger className="hover:no-underline text-white hover:text-cyan-400 transition py-4">
                    <span className="text-left font-semibold">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={300} className="mt-12 text-center">
            <p className="text-slate-300 mb-6">
              Have more questions? <span className="text-cyan-400 font-semibold cursor-pointer hover:text-cyan-300" onClick={() => openCTA()}>Let's talk</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FINAL CTA SECTION */}
      {/* ================================================================ */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Reveal className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to Automate
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Your Business?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join 500+ companies that have already automated their business processes. Get a free consultation and see how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => openCTA()}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg h-14 px-10"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg h-14 px-10 border-white/20 hover:bg-white/10 text-white">
                Book Demo Call
              </Button>
            </div>
            <p className="text-sm text-slate-400 mt-8">
              🎁 First month 30% off for new customers. No credit card required.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
