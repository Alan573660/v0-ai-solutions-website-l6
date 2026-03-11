"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight, Check, Phone, Zap, ChevronRight, Quote,
  Target, TrendingUp, FileText, CreditCard, Clock,
  BarChart3, Database, Building2, ShoppingBag, Briefcase,
  Home, AlertCircle, X, DollarSign,
} from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import { RelatedSolutions } from "@/components/related-solutions"
import type { Locale } from "@/lib/i18n/config"

interface RobotDlyaProdazhPageProps {
  locale: Locale
}

export function RobotDlyaProdazhPage({ locale }: RobotDlyaProdazhPageProps) {
  const { openModal } = useCTA()
  const [activeStep, setActiveStep] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { value: "+40%", label: "Конверсия в продажу" },
    { value: "24/7", label: "Работа без перерывов" },
    { value: "3 мин", label: "На оформление сделки" },
    { value: "-65%", label: "Стоимость продажи" },
  ]

  const salesSteps = [
    {
      icon: Phone,
      title: "Выявление потребности",
      description: "Задаёт квалифицирующие вопросы, определяет бюджет, сроки и потребности клиента",
      details: ["Вопросы по критериям отбора", "Выявление болей и задач", "Определение бюджета и сроков", "Скоринг по качеству лида"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "Презентация решения",
      description: "Подбирает оптимальный продукт или услугу, озвучивает преимущества и кейсы",
      details: ["Подбор продукта по критериям", "Презентация преимуществ", "Кейсы из вашей отрасли", "Ответы на возражения"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: DollarSign,
      title: "Расчёт и КП",
      description: "Рассчитывает стоимость с учётом скидок, формирует и отправляет коммерческое предложение",
      details: ["Расчёт цены по прайс-листу", "Применение скидок и акций", "Формирование КП автоматически", "Отправка на email клиента"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CreditCard,
      title: "Закрытие сделки",
      description: "Выставляет счёт, принимает оплату, создаёт сделку в CRM и передаёт в доставку",
      details: ["Выставление счёта на оплату", "Приём онлайн-платежей", "Автоматическое создание сделки в CRM", "Передача данных в логистику"],
      color: "from-orange-500 to-amber-500",
    },
  ]

  const benefits = [
    { icon: TrendingUp, title: "Рост конверсии на 40%", description: "Робот никогда не устаёт, не забывает про лиды и обрабатывает их по идеальному скрипту" },
    { icon: Clock, title: "Работа 24/7", description: "Принимает заявки ночью, в выходные и праздники — никогда не теряет клиентов" },
    { icon: Zap, title: "Мгновенная реакция", description: "Отвечает за секунды, не держит клиента в очереди, не переключает между отделами" },
    { icon: Check, title: "Нет человеческих ошибок", description: "Всегда озвучивает правильные цены, применяет актуальные скидки, не забывает follow-up" },
    { icon: Database, title: "Работа с большими данными", description: "Обрабатывает каталоги с 10 000+ SKU, помнит историю каждого клиента" },
    { icon: BarChart3, title: "Прозрачная аналитика", description: "Полная воронка продаж, записи разговоров, транскрипции и отчёты в реальном времени" },
  ]

  const industries = [
    { icon: Building2, name: "B2B продажи", description: "Квалификация входящих лидов, презентация решений, расчёт КП, согласование условий", metrics: { value: "+156%", label: "конверсия" }, gradient: "from-blue-500 to-indigo-600" },
    { icon: ShoppingBag, name: "Интернет-магазины", description: "Консультации по товарам, подбор, оформление заказа, up-sell и cross-sell", metrics: { value: "+82%", label: "AOV" }, gradient: "from-green-500 to-teal-600" },
    { icon: Briefcase, name: "Услуги и сервисы", description: "Квалификация, запись на консультацию, презентация тарифов, оформление договора", metrics: { value: "24/7", label: "приём заявок" }, gradient: "from-purple-500 to-violet-600" },
    { icon: Home, name: "Недвижимость", description: "Квалификация по критериям, подбор объектов, запись на просмотр, работа с возражениями", metrics: { value: "5x", label: "больше показов" }, gradient: "from-orange-500 to-amber-600" },
  ]

  const processSteps = [
    { number: "01", title: "Анализ воронки продаж", duration: "2-3 дня", description: "Разбираем текущую воронку, скрипты, частые возражения, структуру прайс-листа и критерии квалификации." },
    { number: "02", title: "Обучение робота", duration: "5-7 дней", description: "Настраиваем скрипты продаж, загружаем продукты, цены, интегрируем с CRM и платёжными системами." },
    { number: "03", title: "Тестовый запуск", duration: "3-5 дней", description: "Пилотируем на реальных клиентах, дорабатываем сценарии по фидбэку, тестируем платежи." },
    { number: "04", title: "Масштабирование", duration: "Постоянно", description: "Запускаем на весь трафик, анализируем конверсию, оптимизируем сценарии на основе данных." },
  ]

  const testimonials = [
    {
      quote: "Робот обрабатывает 200+ лидов в день, квалифицирует их по 7 критериям и передаёт менеджерам только тёплые. Наши продавцы теперь занимаются только закрытием, конверсия выросла с 12% до 34%.",
      author: "Алексей Морозов", position: "Руководитель отдела продаж", company: "ТехноСервис",
      metric: { value: "+183%", label: "��ост конверсии" },
    },
    {
      quote: "За первый месяц робот продал на 4.2 млн руб. При этом стоимость привлечения клиента снизилась на 40%, а средний чек вырос благодаря правильному up-sell.",
      author: "Мария Соколова", position: "Коммерческий директор", company: "ОфисМебель Плюс",
      metric: { value: "4.2M₽", label: "выручка за месяц" },
    },
  ]

  const pricing = {
    title: "Стоимость робота для продаж",
    subtitle: "Гибкое ценообразование под ваш объем",
    plans: [
      { name: "Старт", price: "от 45 000", period: "руб/мес", features: ["До 500 лидов", "Базовые продажи", "1 интеграция", "Email поддержка"], highlight: false },
      { name: "Бизнес", price: "от 95 000", period: "руб/мес", features: ["До 2000 лидов", "Сложные продажи + КП", "5 интеграций", "Приоритетная поддержка"], highlight: true },
      { name: "Enterprise", price: "Индивидуально", period: "", features: ["Неограниченно", "Кастомные сценарии", "Все интеграции", "24/7 поддержка", "SLA"], highlight: false },
    ],
    note: "Окупаемость за 2-4 месяца. Первые 14 дней бесплатно.",
  }

  const m2Benefits = [
    { title: "Собственная AI-платформа", description: "Полный контроль над технологией" },
    { title: "Обучение на ваших данных", description: "Знает ваши продукты и скрипты" },
    { title: "Быстрое внедрение", description: "Запуск за 10-14 дней" },
    { title: "Безопасность данных", description: "ISO 27001, GDPR, 152-ФЗ" },
    { title: "Экспертная команда", description: "10+ лет в AI и продажах" },
    { title: "Гарантия ROI", description: "Рассчитываем до старта" },
  ]

  const faqs = [
    { question: "Чем робот для продаж отличается от обычного call-бота?", answer: "Робот для продаж — это полноценный AI-агент, который ведёт естественный диалог, задаёт уточняющие вопросы, работает с возражениями, рассчитывает стоимость по сложным прайс-листам и формирует КП. Он обучен на лучших скриптах продаж и работает по методологиям SPIN, BANT." },
    { question: "Может ли робот работать со сложным прайс-листом?", answer: "Да, робот работает с ��аталогами до 10 000+ SKU. Он мгновенно находит нужный товар по характеристикам, рассчитывает цену с учётом скидок, акций, объёма заказа и персональных условий. Интегрируется с 1C, МойСклад, внутренними базами." },
    { question: "Как робот обрабатывает возражения?", answer: "Робот обучен на базе знаний ваших лучших менеджеров. Распознаёт типовые возражения (дорого, нужно подумать, есть дешевле) и отвечает по проработанным скриптам. В сложных случаях переключает на живого менеджера с полным контекстом разговора." },
    { question: "Как быстро окупается внедрение?", answer: "Типичная окупаемость — 2-4 месяца за счёт роста конверсии на 30-40% и снижения ФОТ отдела продаж на 50-70%. Считаем экономику индивидуально на первой консультации." },
    { question: "Можно ли протестировать перед запуском?", answer: "Да, мы обязательно делаем пилотный запуск на 50-100 реальных лидах. Вы слушаете записи, оцениваете качество, вносим правки. Переходим к полному запуску только после вашего одобрения." },
    { question: "Какие метрики показывает система?", answer: "В личном кабинете: количество обработанных лидов, конверсия на каждом этапе, средний чек, выручка, записи разговоров, транскрипции, причины отказов. Интеграция с Google Analytics, Яндекс.Метрика, CRM." },
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
              <span className="text-sm text-white/80">AI-менеджер по продажам</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Робот для продаж
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mt-2">
                который продаёт сам
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Квалифицирует лиды, презентует решения, рассчитывает стоимость, формирует КП и выставляет счета. От первого контакта до закрытия сделки — полностью автоматически.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 text-base bg-white text-slate-900 hover:bg-slate-100">
                Запустить тестовую продажу <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 bg-transparent">
                Послушать демо-звонок
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

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Почему па��ает конверсия продаж</h2>
            <p className="text-xl text-muted-foreground">Менеджеры перегружены, лиды теряются, скрипты не соблюдаются — всё это убивает продажи.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: X, title: "Менеджеры не успевают", desc: "До 80% лидов остаются необработанными, уходят к конкурентам или просто забываются" },
              { icon: AlertCircle, title: "Низкая конверсия", desc: "Средняя конверсия call-центров 5-15%. При идеальном скрипте можно 30-40%" },
              { icon: DollarSign, title: "Высокая стоимость продажи", desc: "Зарплата менеджеров, обучение, текучка кадров — каждая продажа обходится дорого" },
              { icon: Clock, title: "Потеря ночных заявок", desc: "До 30% лидов приходят ночью и в выходные, когда отдел продаж не работает" },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-red-100 dark:border-red-900/30 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Полный цикл продажи автоматически</h2>
            <p className="text-xl text-muted-foreground">Робот ведёт клиента через все этапы сделки — от знакомства до оплаты счёта.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              {salesSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <button key={step.title} onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer ${activeStep === idx ? "bg-gradient-to-r " + step.color + " text-white shadow-lg" : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"}`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${activeStep === idx ? "bg-white/20" : "bg-white dark:bg-slate-700"}`}>
                        <Icon className={`w-5 h-5 ${activeStep === idx ? "text-white" : ""}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{step.title}</h3>
                        <p className={`text-sm mt-1 ${activeStep === idx ? "text-white/80" : "text-muted-foreground"}`}>{step.description}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeStep === idx ? "rotate-90" : ""}`} />
                    </div>
                  </button>
                )
              })}
            </div>
            <div className={`rounded-2xl p-8 bg-gradient-to-br ${salesSteps[activeStep].color} text-white`}>
              {(() => { const Icon = salesSteps[activeStep].icon; return <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6"><Icon className="w-8 h-8" /></div> })()}
              <h3 className="text-2xl font-bold mb-4">{salesSteps[activeStep].title}</h3>
              <p className="text-white/80 mb-8">{salesSteps[activeStep].description}</p>
              <ul className="space-y-4">
                {salesSteps[activeStep].details.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => openModal("consultation")} className="w-full mt-8 bg-white text-slate-900 hover:bg-slate-100">
                Обсудить внедрение <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Преимущества робота для продаж</h2>
            <p className="text-xl text-muted-foreground">Почему компании переводят до 80% продаж на AI-менеджеров.</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Для каких бизнесов работает</h2>
            <p className="text-xl text-muted-foreground">Робот для продаж показывает лучшие результаты в этих отраслях.</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Как внедряем робота для продаж</h2>
            <p className="text-xl text-muted-foreground">Запуск за 10-14 дней от первой встречи до полноценных продаж.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-slate-200 dark:text-slate-800 mb-3">{step.number}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium mb-3">{step.duration}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Результаты клиентов</h2>
            <p className="text-xl text-slate-300">Реальные кейсы компаний, которые внедрили робота для продаж.</p>
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

      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Смежные решения</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Робот для звонков", href: "/solutions/robot-dlya-zvonkov", desc: "Обзвон базы и приём входящих" },
              { title: "Автоматизация продаж", href: "/solutions/automation-sales", desc: "Комплексная автоматизация процесса" },
              { title: "Обработка заявок", href: "/solutions/obrabotka-zayavok", desc: "Автоматическая квалификация" },
              { title: "Выставление счетов", href: "/solutions/vystavlenie-schetov", desc: "Формирование и отправка счетов" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group p-5 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-md transition-all">
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
                <ArrowRight className="w-4 h-4 mt-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{pricing.title}</h2>
            <p className="text-xl text-muted-foreground">{pricing.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {pricing.plans.map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.highlight ? 'border-purple-500 shadow-lg ring-2 ring-purple-500' : ''}`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                    Популярный
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-purple-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.highlight ? "default" : "outline"} onClick={() => openModal("consultation")}>
                    Получить консультацию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">{pricing.note}</p>
        </div>
      </section>

      {/* M2 Benefits */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Почему M2 AI Solutions</h2>
            <p className="text-xl text-muted-foreground">Технологическое лидерство в AI-продажах</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {m2Benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Запустите робота для продаж за 14 дней</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Бесплатная консультация, пилотный запуск и гарантия результата.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 bg-white text-purple-600 hover:bg-slate-100">
              Получить бесплатную консультацию <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent">
              Смотреть кейсы
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">Без обязательств · Тестовый запуск за 14 дней · NDA по запросу</p>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions locale={locale} currentSlug="robot-dlya-prodazh" />
    </div>
  )
}
