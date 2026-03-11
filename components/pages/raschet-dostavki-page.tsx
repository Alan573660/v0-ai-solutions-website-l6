"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight, Check, Truck, ChevronRight, Quote,
  MapPin, Package, DollarSign, Clock, BarChart3, Zap,
  Building2, ShoppingBag, Briefcase, Home,
  AlertCircle, Route, Globe, Settings,
  Layers, Gauge, TrendingDown, ShieldAlert,
} from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import { RelatedSolutions } from "@/components/related-solutions"
import type { Locale } from "@/lib/i18n/config"

interface RaschetDostavkiPageProps {
  locale: Locale
}

export function RaschetDostavkiPage({ locale }: RaschetDostavkiPageProps) {
  const { openModal } = useCTA()
  const [activeFeature, setActiveFeature] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { value: "-35%", label: "Расходы на доставку" },
    { value: "15 сек", label: "Расчёт маршрута" },
    { value: "+40%", label: "Оптимизация маршрутов" },
    { value: "24/7", label: "Автоматический расчёт" },
  ]

  const features = [
    {
      icon: MapPin,
      title: "Расчёт по геолокации",
      description: "AI автоматически определяет оптимальный маршрут на основе адреса, веса, размера посылки и текущей загруженности курьеров",
      details: ["Анализ координат отправителя и получателя", "Учёт текущей нагрузки на каждого курьера", "Оптимизация порядка доставок", "Расчёт времени доставки в минутах"],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Truck,
      title: "Выбор оптимального вида доставки",
      description: "Система рекомендует самый дешёвый и быстрый способ: курьер, СДЭК, Boxberry или почта на основе параметров заказа",
      details: ["Сравнение цен всех служб доставки", "Учёт сроков доставки", "Автоматический выбор оптимальной опции", "Резервная служба при сбое"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Калькуляция стоимости",
      description: "Мгновенно рассчитывает стоимость доставки с учётом тарифов, весовых коэффициентов, расстояния и текущих скидок",
      details: ["Базовая ставка и льготы", "Вес и объём посылки", "Расстояние и зона доставки", "Премиум-опции (страховка, СМС)"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Route,
      title: "Оптимизация маршрутов",
      description: "Раскладывает заказы по курьерам и маршрутам так, чтобы минимизировать расходы и максимизировать количество доставок в день",
      details: ["Сбалансированная загрузка курьеров", "Минимизация пробок и расстояний", "Контроль времени доставки", "Динамическое перерпределение при сбое"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const benefits = [
    { icon: TrendingDown, title: "Снижение затрат", description: "Оптимизация маршрутов и выбор дешевых вариантов сокращает расходы на доставку на 30-40%" },
    { icon: Clock, title: "Ускорение доставки", description: "AI выбирает кратчайший и быстрейший маршрут, сокращая время доставки на 20-30%" },
    { icon: Zap, title: "Автоматизм", description: "Все расчеты происходят автоматически в момент оформления заказа, менеджер только смотрит результат" },
    { icon: BarChart3, title: "Полная аналитика", description: "Видите экономию по каждой доставке, маршруту и курьеру. Анализируете что можно улучшить" },
    { icon: Gauge, title: "Гибкие правила", description: "Настраиваете любые правила: мин/макс вес, зоны, время доставки, приоритеты, ограничения" },
    { icon: ShieldAlert, title: "Надёжность", description: "Если предпочитаемая служба недоступна, система автоматически выбирает резервную" },
  ]

  const industries = [
    { icon: ShoppingBag, name: "E-commerce и маркетплейсы", description: "Расчёт доставки для каждого заказа, интеграция с маркетплейсами, автопередача в логистику", metrics: { value: "-40%", label: "расходы доставки" }, gradient: "from-orange-500 to-amber-600" },
    { icon: Building2, name: "B2B поставки", description: "Расчёт для палет и крупных грузов, интеграция с 1С, управление производственным графиком", metrics: { value: "-30%", label: "время обработки" }, gradient: "from-blue-500 to-indigo-600" },
    { icon: Truck, name: "Логистические компании", description: "Многоуровневая оптимизация маршрутов, интеграция с GPS, диспетчеризация курьеров", metrics: { value: "+45%", label: "доставок в день" }, gradient: "from-green-500 to-teal-600" },
    { icon: Home, name: "Доставка еды и FMCG", description: "Высокоскоростной расчёт, учёт промежуточных депо, динамическое перерпределение", metrics: { value: "15 сек", label: "расчёт маршрута" }, gradient: "from-purple-500 to-violet-600" },
  ]

  const processSteps = [
    { number: "01", title: "Анализ текущих маршрутов", duration: "1-2 дня", description: "Собираем данные о всех доставках: адреса, веса, сроки, службы. Выявляем неоптимальные маршруты." },
    { number: "02", title: "Настройка правил и ограничений", duration: "2-3 дня", description: "Задаём правила маршрутизации: зоны доставки, максимальный вес, время, приоритеты для каждой службы." },
    { number: "03", title: "Интеграция служб доставки", duration: "2-3 дня", description: "Подключаем API СДЭК, Boxberry, Почты России и других служб, загружаем актуальные тарифы." },
    { number: "04", title: "Запуск и оптимизация", duration: "Постоянно", description: "Запускаем расчёты на реальных заказах, смотрим сэкономленные деньги, дорабатываем правила." },
  ]

  const testimonials = [
    {
      quote: "Внедрили систему расчёта доставки. На каждом заказе экономим 50-200 рублей благодаря оптимальному выбору служб. При 500 заказах в день — это 25-100 тыс. экономии. Менеджеры больше не выбирают на ощупь, система подсказывает лучший вариант.",
      author: "Дмитрий Орлов", position: "Директор e-commerce", company: "МегаМаркет",
      metric: { value: "100 K₽", label: "экономия в месяц" },
    },
    {
      quote: "Оптимизировали маршруты доставки для 50+ курьеров. Сразу нагрузка стала более равномерной, один курьер доставляет на 40% больше заказов. Время доставки сократилось на 25%, клиенты счастливы.",
      author: "Елена Морозова", position: "Руководитель логистики", company: "СитиДоставка",
      metric: { value: "+40%", label: "доставок за день" },
    },
  ]

  const pricing = {
    title: "Стоимость расчёта доставки",
    subtitle: "Гибкое ценообразование",
    plans: [
      { name: "Старт", price: "от 20 000", period: "руб/мес", features: ["До 1000 расчётов", "3 службы доставки", "Базовая оптимизация", "Email поддержка"], highlight: false },
      { name: "Бизнес", price: "от 55 000", period: "руб/мес", features: ["До 5000 расчётов", "Все службы", "AI-оптимизация маршрутов", "Приоритетная поддержка"], highlight: true },
      { name: "Enterprise", price: "Индивидуально", period: "", features: ["Неограниченно", "Свои курьеры + внешние", "Все интеграции", "24/7 поддержка", "SLA"], highlight: false },
    ],
    note: "Экономия 30-40% на доставке. Первые 14 дней бесплатно.",
  }

  const m2Benefits = [
    { title: "Экономия 30-40%", description: "Оптимизация всех маршрутов" },
    { title: "Все службы доставки", description: "СДЭК, Boxberry, Почта и др." },
    { title: "Быстрое внедрение", description: "Запуск за 7-10 дней" },
    { title: "Свои курьеры", description: "GPS-трекинг и балансировка" },
    { title: "Маркетплейсы", description: "WB, Ozon, Яндекс.Маркет" },
    { title: "Гарантия результата", description: "ROI за 1-2 месяца" },
  ]

  const faqs = [
    { question: "Какие службы доставки поддерживаются?", answer: "СДЭК, Boxberry, Почта России, Яндекс.Доставка, DPD, Деловые линии, региональные курьеры, собственная логистика. Можно добавить свои таможные тарифы." },
    { question: "Как система выбирает оптимальную доставку?", answer: "По алгоритму учитываются: стоимость, время доставки, вес/объём посылки, текущая нагрузка курьера, приоритет клиента. Вы задаёте веса для каждого фактора." },
    { question: "Можно ли учитывать собственные курьеры?", answer: "Да, интегрируем с GPS и личными курьерами. Система будет распределять заказы между собственными и внешними по оптимальности и стоимости." },
    { question: "Как это работает с маркетплейсами?", answer: "Интегрируемся с Wildberries, Ozon, Яндекс.Маркет. Система автоматически отправляет информацию о доставке в личный кабинет маркетплейса." },
    { question: "Какую экономию можно ожидать?", answer: "Обычно 25-40% экономии на расходах доставки. Плюс ускорение обработки на 30-50%. Считаем индивидуально на первой консультации." },
    { question: "Как быстро внедрить систему?", answer: "Стандартный запуск: 7-10 дней. Если уже есть интеграция с CRM и логистикой — 3-5 дней. Начинаете экономить сразу после тестирования." },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-500/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-amber-500/10 to-transparent" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/80">Оптимизация логистики AI</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Расчёт доставки
              <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent mt-2">
                и оптимизация маршрутов
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI анализирует параметры посылки, текущую нагрузку и тарифы всех служб доставки. Автоматически выбирает оптимальный маршрут и способ доставки, экономя 30-40% на логистике.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 text-base bg-white text-slate-900 hover:bg-slate-100">
                Запросить демо <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 bg-transparent">
                Рассчитать экономию
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Как компании переплачивают за доставку</h2>
            <p className="text-xl text-muted-foreground">Нет оптимизации = кровь деньгами.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertCircle, title: "Выбор наугад", desc: "Менеджер выбирает первую попавшуюся службу, не сравнивая цены. Переплата 20-50% на каждом заказе" },
              { icon: MapPin, title: "Неоптимальные маршруты", desc: "Курьеры ездят хаотично, нет оптимизации. Один ездит с одним заказом, другой простаивает" },
              { icon: Clock, title: "Ручной расчёт", desc: "Каждый заказ — новый расчёт вручную. На крупных объёмах это часы работы менеджеров" },
              { icon: BarChart3, title: "Нет видимости", desc: "Непонятно сколько тратится на доставку, почему цены растут, где можно сэкономить" },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-red-100 dark:border-red-900/30 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-red-500" /></div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Как работает система расчёта доставки</h2>
            <p className="text-xl text-muted-foreground">Четыре этапа оптимизации маршрутов.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              {features.map((feat, idx) => {
                const Icon = feat.icon
                return (
                  <button key={feat.title} onClick={() => setActiveFeature(idx)}
                    className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer ${activeFeature === idx ? "bg-gradient-to-r " + feat.color + " text-white shadow-lg" : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"}`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${activeFeature === idx ? "bg-white/20" : "bg-white dark:bg-slate-700"}`}>
                        <Icon className={`w-5 h-5 ${activeFeature === idx ? "text-white" : ""}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{feat.title}</h3>
                        <p className={`text-sm mt-1 ${activeFeature === idx ? "text-white/80" : "text-muted-foreground"}`}>{feat.description}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeFeature === idx ? "rotate-90" : ""}`} />
                    </div>
                  </button>
                )
              })}
            </div>
            <div className={`rounded-2xl p-8 bg-gradient-to-br ${features[activeFeature].color} text-white`}>
              {(() => { const Icon = features[activeFeature].icon; return <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6"><Icon className="w-8 h-8" /></div> })()}
              <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
              <p className="text-white/80 mb-8">{features[activeFeature].description}</p>
              <ul className="space-y-4">
                {features[activeFeature].details.map((d) => (
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Что даёт оптимизация</h2>
            <p className="text-xl text-muted-foreground">Результаты после внедрения системы.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
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
            <p className="text-xl text-muted-foreground">Система работает в любой отрасли с доставкой.</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Как внедряем</h2>
            <p className="text-xl text-muted-foreground">Запуск за 7-10 дней.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number}>
                <div className="text-5xl font-bold text-slate-200 dark:text-slate-800 mb-3">{step.number}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium mb-3">{step.duration}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Результаты клиентов</h2>
            <p className="text-xl text-slate-300">Реальные кейсы компаний, которые оптимизировали доставку.</p>
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
                    <div className="text-2xl font-bold text-orange-400">{t.metric.value}</div>
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
              { title: "Обработка заказов", href: "/solutions/obrabotka-zakazov", desc: "Полный цикл от заявки до доставки" },
              { title: "Обработка заявок", href: "/solutions/obrabotka-zayavok", desc: "Квалификация входящих обращений" },
              { title: "Выставление счетов", href: "/solutions/vystavlenie-schetov", desc: "Автоматическая генерация документов" },
              { title: "AI для бизнеса", href: "/solutions/ai-dlya-biznesa", desc: "Комплексная автоматизация" },
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
          <div className="max-w-3xl mb-12"><h2 className="text-3xl md:text-5xl font-bold mb-6">{pricing.title}</h2><p className="text-xl text-muted-foreground">{pricing.subtitle}</p></div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {pricing.plans.map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.highlight ? 'border-orange-500 shadow-lg ring-2 ring-orange-500' : ''}`}>
                {plan.highlight && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">Популярный</div>)}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6"><span className="text-3xl font-bold">{plan.price}</span><span className="text-muted-foreground">{plan.period}</span></div>
                  <ul className="space-y-3">{plan.features.map((f, i) => (<li key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-orange-500" />{f}</li>))}</ul>
                  <Button className="w-full mt-6" variant={plan.highlight ? "default" : "outline"} onClick={() => openModal("consultation")}>Получить консультацию</Button>
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
          <div className="max-w-3xl mb-16"><h2 className="text-3xl md:text-5xl font-bold mb-6">Почему M2 AI Solutions</h2><p className="text-xl text-muted-foreground">Технологическое лидерство</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {m2Benefits.map((item, idx) => (<div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg transition-all"><h3 className="font-semibold text-lg mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.description}</p></div>))}
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Экономьте на доставке уже сегодня</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Запустите оптимизацию за 7-10 дней. Бе��платная консультация и демо.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 bg-white text-orange-600 hover:bg-slate-100">
              Получить бесплатную консультацию <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent">
              Рассчитать экономию
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">Без обязательств · Запуск за 7-10 дней · NDA по запросу</p>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions locale={locale} currentSlug="raschet-dostavki" />
    </div>
  )
}
