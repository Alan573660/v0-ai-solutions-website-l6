'use client'

import { useState } from 'react'
import type { Locale } from '@/lib/i18n/config'
import { getSolutions, getCallExamples } from './home-data'
import { useCTA } from '@/components/modals/cta-provider'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Phone,
  PhoneIncoming,
  PhoneOutgoing,
  TrendingUp,
  FileText,
  Receipt,
  Truck,
  Zap,
  BarChart3,
  Database,
  Headphones,
  Check,
  CheckCircle2,
  Quote,
  Play,
  Pause,
  ArrowRight,
  Users,
  Bot,
} from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
    {children}
  </span>
)

const Reveal = ({ children }: { children: React.ReactNode }) => <div>{children}</div>

export default function HomeClientPage({ locale }: { locale: Locale }) {
  const { openCTA } = useCTA()
  const [playingId, setPlayingId] = useState<string | null>(null)
  const solutions = getSolutions(locale)
  const callExamples = getCallExamples(locale)

  const automationTypes = [
    { icon: PhoneIncoming, title: 'Входящие звонки', desc: 'Приём, квалификация лидов, создание заявок в CRM' },
    { icon: PhoneOutgoing, title: 'Исходящие звонки', desc: 'Обход, уточнение, follow-up и перепродажи' },
    { icon: TrendingUp, title: 'Продажи', desc: 'От первого звонка до сделки с расчётом цены' },
    { icon: FileText, title: 'Заявки', desc: 'Сбор, обработка, распределение между менеджерами' },
    { icon: Receipt, title: 'Счета', desc: 'Выставление, отправка, отслеживание оплаты' },
    { icon: Truck, title: 'Логистика', desc: 'Расчёт доставки, отслеживание, уведомления' },
  ]

  const howItWorks = [
    { num: '01', title: 'Слушает', desc: 'AI распознаёт речь клиента в реальном времени' },
    { num: '02', title: 'Понимает', desc: 'Анализирует контекст и потребности через LLM' },
    { num: '03', title: 'Отвечает', desc: 'Формирует ответ и озвучивает синтезатором' },
    { num: '04', title: 'Интегрирует', desc: 'Создаёт заявки, сделки, записи в системах' },
    { num: '05', title: 'Анализирует', desc: 'Собирает данные для аналитики и улучшений' },
    { num: '06', title: 'Передаёт', desc: 'При необходимости переводит на живого менеджера' },
  ]

  const capabilities = [
    { icon: Zap, title: 'Моментальные ответы', desc: 'Отвечает за 1-2 секунды, обрабатывает 100+ звонков одновременно' },
    { icon: BarChart3, title: 'Расчёты и прайсы', desc: 'Рассчитывает цены по формулам, применяет скидки, озвучивает точную стоимость' },
    { icon: Database, title: 'Интеграции', desc: 'Синхронизируется с amoCRM, Bitrix24, 1С, любыми API и CRM системами' },
    { icon: Phone, title: 'Гибкие сценарии', desc: 'Адаптируется к вашему бизнесу, а не наоборот. Полностью кастомизируемый' },
    { icon: CheckCircle2, title: 'Качество 98%+', desc: 'Понимает правильно в 98%+ случаев, автоматически переводит сложные вопросы' },
    { icon: Users, title: '24/7 работа', desc: 'Принимает звонки день и ночь, выходные и праздники - никогда не спит' },
    { icon: Quote, title: 'Естественная речь', desc: 'Говорит как человек: эмоции, паузы, правильная интонация' },
    { icon: TrendingUp, title: 'Аналитика', desc: 'Полная статистика: сколько заявок, конверсия, скрипт-покрытие, причины переводов' },
  ]

  const faqItems = [
    {
      q: 'Как быстро можно запустить AI?',
      a: 'Типовое внедрение занимает 7-14 дней. Это включает интеграцию с вашими системами, настройку сценариев и тестовый период.',
    },
    {
      q: 'Какие системы поддерживаются?',
      a: 'Интегрируемся с amoCRM, Bitrix24, 1С, Asterisk, SIP, WebRTC и другими. Если системы нет — разработаем интеграцию.',
    },
    {
      q: 'Сколько это стоит?',
      a: 'От $500/месяц за 100-500 звонков. Стоимость зависит от объёма звонков и интеграций. Считаем за минуту разговора с AI.',
    },
    {
      q: 'Может ли робот общаться на других языках?',
      a: 'Да, поддерживает 15+ языков. Один робот может переключаться между языками в одном разговоре.',
    },
    {
      q: 'Что если AI не поймёт клиента?',
      a: 'Система анализирует уверенность. При низкой уверенности робот просит повторить или переводит на менеджера. Ошибки в 2%.',
    },
    {
      q: 'Как считаются звонки?',
      a: 'Тарифицируется минута разговора с AI, включая переводы на менеджеров. Входящие и исходящие отдельно.',
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Reveal>
            <div className="text-center mb-12">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
                Business Automation
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  with AI
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                Автоматизируйте входящие и исходящие звонки, продажи, заявки, счета и логистику. 24/7 работа, интеграция с CRM, отчеты по звонкам.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => openCTA()}>
                  Получить консультацию <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  Послушать примеры
                </Button>
              </div>
              <p className="text-sm text-slate-400 mt-8">
                Первый месяц 30% скидка для новых клиентов • Без кредитной карты
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What Automates */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Label>Capabilities</Label>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-4">Что автоматизирует AI</h2>
              <p className="text-xl text-slate-300">От звонков до логистики — полная автоматизация бизнес-процессов</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationTypes.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={idx}>
                  <Card className="bg-slate-900 border-slate-700 hover:border-cyan-500 transition-colors">
                    <CardContent className="p-6">
                      <Icon className="w-10 h-10 text-cyan-400 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Label>Process</Label>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-4">Как работает AI</h2>
              <p className="text-xl text-slate-300">6 шагов от входящего звонка к результату</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step, idx) => (
              <Reveal key={idx}>
                <div className="relative">
                  <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-lg font-bold">
                    {step.num}
                  </div>
                  <Card className="bg-slate-900 border-slate-700 pt-8">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-slate-400">{step.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Label>Features</Label>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-4">Возможности платформы</h2>
              <p className="text-xl text-slate-300">Enterprise-grade функции из коробки</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon
              return (
                <Reveal key={idx}>
                  <Card className="bg-slate-900 border-slate-700 hover:border-blue-500 transition-colors">
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 text-blue-400 mb-3" />
                      <h3 className="font-semibold mb-2">{cap.title}</h3>
                      <p className="text-sm text-slate-400">{cap.desc}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Label>Solutions</Label>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-4">12 решений для вашего бизнеса</h2>
              <p className="text-xl text-slate-300">Все что нужно для полной автоматизации</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.slice(0, 12).map((solution) => {
              const Icon = solution.icon
              return (
                <Reveal key={solution.id}>
                  <a href={`/${locale}${solution.href}`}>
                    <Card className="bg-slate-900 border-slate-700 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20 h-full cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{solution.title}</h3>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm mb-4">{solution.description}</p>
                        <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                          Подробнее <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Audio Examples */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Label>Demos</Label>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-4">Послушайте AI в действии</h2>
              <p className="text-xl text-slate-300">Реальные примеры обработки звонков</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {callExamples.slice(0, 4).map((example) => (
              <Reveal key={example.id}>
                <Card className="bg-slate-900 border-slate-700 hover:border-cyan-500 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <button
                        onClick={() => setPlayingId(playingId === example.id ? null : example.id)}
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center hover:opacity-90 transition-opacity"
                      >
                        {playingId === example.id ? (
                          <Pause className="w-6 h-6 text-white" />
                        ) : (
                          <Play className="w-6 h-6 text-white" />
                        )}
                      </button>
                      <div>
                        <h3 className="font-semibold">{example.title}</h3>
                        <p className="text-sm text-slate-400">{example.description}</p>
                      </div>
                    </div>
                    {playingId === example.id && (
                      <div className="mt-4 p-3 bg-slate-800 rounded-lg text-sm text-slate-300">
                        🎵 {example.title} (симуляция)
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal>
            <div className="text-center mb-16">
              <Label>FAQ</Label>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-4">Частые вопросы</h2>
            </div>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-slate-900 border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-300">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal>
            <p className="text-center text-slate-300 mt-8">
              Ещё вопросы? <span className="text-cyan-400 font-semibold cursor-pointer hover:text-cyan-300" onClick={() => openCTA()}>Напишите нам</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 to-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal>
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Готовы автоматизировать
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  свой бизнес?
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Присоединитесь к 500+ компаниям, которые уже автоматизировали свои бизнес-процессы и сэкономили миллионы рублей.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white mb-8" onClick={() => openCTA()}>
                Получить консультацию <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-slate-400">
                🎁 Первый месяц 30% скидка • Без требований кредитной карты • Консультация в течение 24 часов
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
