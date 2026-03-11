"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight, Check, Zap, ChevronRight, Quote,
  Layers, Target, BarChart3, Clock, Shield, TrendingUp,
  Building2, ShoppingBag, Briefcase, Home,
  Cpu, Workflow, Database, LineChart,
} from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"

export function AIDlyaBiznesaPage() {
  const { openModal } = useCTA()
  const [activeModule, setActiveModule] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { value: "6+", label: "Модулей AI" },
    { value: "-70%", label: "Ручного труда" },
    { value: "+3x", label: "Производительность" },
    { value: "1 платформа", label: "Для всего" },
  ]

  const modules = [
    {
      icon: Target,
      title: "Робот для продаж",
      description: "Ведёт полный цикл продажи: квалифицирует лиды, презентует, рассчитывает, закрывает сделку и выставляет счёт",
      benefits: ["Конверсия +40%", "Стоимость продажи -60%", "Работает 24/7", "Интеграция с CRM"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Workflow,
      title: "Обработка заявок",
      description: "Собирает заявки из всех каналов, квалифицирует, расставляет приоритеты и направляет правильному менеджеру",
      benefits: ["100% заявок обработано", "Время реакции <1 мин", "Нет потерь", "Полная аналитика"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Layers,
      title: "Обработка заказов",
      description: "Приём, проверка наличия, формирование счётов и передача в логистику за 5 минут без ошибок",
      benefits: ["8x скорость обработки", "Нет ошибок в данных", "Контроль SLA", "Синхронизация со складом"],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: BarChart3,
      title: "Расчёт доставки",
      description: "AI выбирает оптимальный маршрут и способ доставки, экономя 30-40% на логистике и ускоряя доставку",
      benefits: ["Экономия -35%", "Доставок +40%", "Оптимальные маршруты", "Интеграция с курьерами"],
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const benefits = [
    { icon: Zap, title: "Полная автоматизация", description: "Один инструмент для продаж, заявок, заказов, счётов, доставки — весь бизнес под контролем" },
    { icon: TrendingUp, title: "Рост на 3-5x", description: "Тот же штат обрабатывает в 3-5 раз больше заявок и закрывает больше сделок" },
    { icon: Clock, title: "Экономия времени", description: "Менеджеры занимаются только творческой работой, вся рутина на автомате" },
    { icon: LineChart, title: "Прозрачная аналитика", description: "Видите каждый этап: сколько лидов, сколько конверсия, где узкие места, что улучшить" },
    { icon: Shield, title: "Надёжность", description: "Система работает 24/7, никогда не болеет, не забывает про заявки, не теряет данные" },
    { icon: Database, title: "Единая база", description: "Все данные в одном месте: история клиента, статус заявки, результаты продаж, метрики" },
  ]

  const industries = [
    { icon: Building2, name: "B2B продажи", description: "Полная автоматизация от входящего звонка до счета и доставки", metrics: { value: "3-5x", label: "производительность" }, gradient: "from-blue-500 to-indigo-600" },
    { icon: ShoppingBag, name: "E-commerce", description: "От заказа до доставки: обработка, счета, маршруты, аналитика", metrics: { value: "-35%", label: "расходы логистики" }, gradient: "from-green-500 to-teal-600" },
    { icon: Briefcase, name: "Услуги и консалтинг", description: "Автоматизация клиентского цикла: заявка, квалификация, счёт, напоминание об оплате", metrics: { value: "+50%", label: "конверсия" }, gradient: "from-purple-500 to-violet-600" },
    { icon: Home, name: "Маркетплейсы и FMCG", description: "Высокие объёмы, полная автоматизация, интеграция со всеми системами", metrics: { value: "24/7", label: "обработка заказов" }, gradient: "from-orange-500 to-amber-600" },
  ]

  const processSteps = [
    { number: "01", title: "Аудит и планирование", duration: "3-5 дней", description: "Анализируем текущие процессы, выявляем узкие места, определяем приоритеты автоматизации." },
    { number: "02", title: "Импортируем ваши данные", duration: "2-3 дня", description: "Переносим базу клиентов, товаров, тарифов в AI-платформу с обеспечением безопасности." },
    { number: "03", title: "Настройка модулей", duration: "5-7 дней", description: "Конфигурируем каждый модуль под вашу логику: правила продаж, маршруты, скидки, налоги." },
    { number: "04", title: "Интеграция систем", duration: "3-5 дней", description: "Подключаем CRM, ERP, маркетплейсы, платёжные системы и курьеров. Тестируем каждый сценарий." },
    { number: "05", title: "Обучение команды", duration: "2-3 дня", description: "Обучаем менеджеров работать с платформой, как смотреть отчёты и анализировать метрики." },
    { number: "06", title: "Запуск и поддержка", duration: "Постоянно", description: "Запускаем на весь объём, мониторим, оптимизируем на основе реальных данных." },
  ]

  const testimonials = [
    {
      quote: "Внедрили полный стек AI: продажи, заявки, заказы, счета. За 3 месяца выручка выросла на 180%, ФОТ снизился. Менеджеры перестали заниматься рутиной и сосредоточились на закрытии сделок. Это просто масло.",
      author: "Виталий Гаврилов", position: "Генеральный директор", company: "БизнесГруппа",
      metric: { value: "+180%", label: "выручка за квартал" },
    },
    {
      quote: "Система очень быстро себя окупила. На каждого менеджера AI берёт на себя 10-15 часов рутины в неделю. Это как если бы мы наняли ещё 5-6 человек за половину цены. Вернулись инвестиции за 2.5 месяца.",
      author: "Наталья Белова", position: "Финансовый директор", company: "ТехноПро",
      metric: { value: "2.5 мес", label: "окупаемость" },
    },
  ]

  const faqs = [
    { question: "Чем отличается от купленные по отдельности решений?", answer: "Она экономит 50% на внедрении и 70% на ежемесячных расходах. Один API, одна база данных, одна поддержка. Модули работают синергетически: продажи информируют логистику, заявки передаются на продажу автоматически." },
    { question: "Можно ли использовать только часть платформы?", answer: "Да, платформа модульная. Начните с модуля продаж, затем добавьте заявки, потом заказы. Или наоборот. Платите только за то, что используете." },
    { question: "Как быстро мы почувствуем результаты?", answer: "Первые результаты видны через 2-3 недели после запуска. За 2-3 месяца выходите на полную окупаемость и получаете +50-100% на метриках." },
    { question: "Что если наши процессы очень специфичные?", answer: "Платформа очень гибкая. Поддерживаем кастомные правила, интеграции, расчёты. Первую консультацию делаем бесплатно, определяем что нужно кастомизировать." },
    { question: "Какая безопасность данных?", answer: "ISO 27001 сертифицированы. Все данные в защищённых ЦОД, шифрование в транспорте и хранилище. Резервные копии ежедневно. Соответствие ФЗ-152 (закон о защите ПД)." },
    { question: "Как происходит миграция с текущей системы?", answer: "Делаем неразрушающую миграцию: импортируем данные из старой системы, запускаем параллельно новую и старую, потом переходим на новую. Никакой потери данных и простоев." },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-500/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-pink-500/10 to-transparent" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/80">Полный стек AI для бизнеса</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              AI для бизнеса
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mt-2">
                полная автоматизация в одной платформе
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Единая AI-платформа для автоматизации всех процессов: продажи, заявки, заказы, счета, логистика. Вся рутина на автомате, менеджеры занимаются только творчеством.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 text-base bg-white text-slate-900 hover:bg-slate-100">
                Запросить полный дём <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 bg-transparent">
                Рассчитать ROI
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Модули платформы</h2>
            <p className="text-xl text-muted-foreground">Используйте отдельно или вместе для полной автоматизации.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              {modules.map((mod, idx) => {
                const Icon = mod.icon
                return (
                  <button key={mod.title} onClick={() => setActiveModule(idx)}
                    className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer ${activeModule === idx ? "bg-gradient-to-r " + mod.color + " text-white shadow-lg" : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"}`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${activeModule === idx ? "bg-white/20" : "bg-white dark:bg-slate-700"}`}>
                        <Icon className={`w-5 h-5 ${activeModule === idx ? "text-white" : ""}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{mod.title}</h3>
                        <p className={`text-sm mt-1 ${activeModule === idx ? "text-white/80" : "text-muted-foreground"}`}>{mod.description}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeModule === idx ? "rotate-90" : ""}`} />
                    </div>
                  </button>
                )
              })}
            </div>
            <div className={`rounded-2xl p-8 bg-gradient-to-br ${modules[activeModule].color} text-white`}>
              {(() => { const Icon = modules[activeModule].icon; return <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6"><Icon className="w-8 h-8" /></div> })()}
              <h3 className="text-2xl font-bold mb-4">{modules[activeModule].title}</h3>
              <p className="text-white/80 mb-8">{modules[activeModule].description}</p>
              <ul className="space-y-3 mb-8">
                {modules[activeModule].benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" /><span>{b}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => openModal("consultation")} className="w-full bg-white text-slate-900 hover:bg-slate-100">
                Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Почему одна платформа лучше, чем набор инструментов</h2>
            <p className="text-xl text-muted-foreground">Интеграция, экономия и синергия.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Для каких бизнесов подходит</h2>
            <p className="text-xl text-muted-foreground">От малого стартапа до крупной компании.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <Card key={ind.name} className="group overflow-hidden hover:shadow-xl transition-all">
                  <div className={`h-2 bg-gradient-to-r ${ind.gradient}`} />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${ind.gradient}`}><Icon className="w-6 h-6 text-white" /></div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{ind.metrics.value}</div>
                        <div className="text-xs text-muted-foreground">{ind.metrics.label}</div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{ind.name}</h3>
                    <p className="text-sm text-muted-foreground">{ind.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Как внедряем полный стек</h2>
            <p className="text-xl text-muted-foreground">6 этапов от планирования до полного запуска за 20-30 дней.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step) => (
              <div key={step.number}>
                <div className="text-3xl font-bold text-slate-200 dark:text-slate-800 mb-2">{step.number}</div>
                <div className="inline-block px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium mb-2">{step.duration}</div>
                <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Результаты клиентов</h2>
            <p className="text-xl text-slate-300">Реальные кейсы компаний, которые автоматизировали весь бизнес.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Quote className="w-8 h-8 text-white/20 mb-4" />
                <blockquote className="text-lg leading-relaxed mb-6">{t.quote}</blockquote>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <div className="font-semibold">{t.author}</div>
                    <div className="text-sm text-slate-400">{t.position}, {t.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">{t.metric.value}</div>
                    <div className="text-xs text-slate-400">{t.metric.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Частые вопросы</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === idx ? "rotate-90" : ""}`} />
                </button>
                {openFaq === idx && <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Автоматизируйте весь бизнес за 30 дней</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Получите полный ROI расчёт, консультацию и демо всех модулей.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 bg-white text-purple-600 hover:bg-slate-100">
              Получить бесплатную консультацию <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent">
              Рассчитать экономию
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">Без обязательств · Демо всех модулей · NDA по запросу</p>
        </div>
      </section>
    </div>
  )
}
