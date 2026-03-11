"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight, Check, TrendingUp, ChevronRight, Quote,
  Phone, Users, Target, BarChart3, Clock, Zap,
  Building2, ShoppingBag, Briefcase, Home,
  CheckCircle2, AlertCircle, Settings, Database,
  LineChart, Lock,
} from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"

export function SalesAutomationSystemPage() {
  const { openModal } = useCTA()
  const [activeFeature, setActiveFeature] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { value: "3-5x", label: "Рост производительности" },
    { value: "+85%", label: "Конверсия" },
    { value: "7 дней", label: "Запуск" },
    { value: "24/7", label: "Работа без выходных" },
  ]

  const features = [
    {
      icon: Phone,
      title: "Робот для звонков",
      description: "AI совершает исходящие звонки, презентует товары, квалифицирует лидов, согласовывает встречи и передаёт в CRM",
      details: ["Звонки 24/7 без выходных", "Узнавание речи и диалоги", "Квалификация на лету", "Синхронизация с CRM"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Работа с лидами",
      description: "Собирает контакты из всех источников, квалифицирует по критериям, распределяет менеджерам и автоматически переследит",
      details: ["Сбор из всех каналов", "Автоквалификация", "Умное распределение", "Автоследящие цепочки"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Продажа на звонке",
      description: "Во время звонка AI помогает менеджеру: подсказывает аргументы, рассчитывает цену, готовит счёт, осуществляет разговор",
      details: ["Подсказки аргументов", "Расчёт в реальном времени", "Генерация счёта", "Сценарии по типам"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Полная аналитика",
      description: "Видите каждый шаг: сколько лидов получено, где они потеряны, какой менеджер лучше, что нужно улучшить",
      details: ["Воронка продаж в реальном времени", "Метрики по менеджерам", "Анализ разговоров", "Рекомендации по улучшению"],
      color: "from-orange-500 to-amber-500",
    },
  ]

  const benefits = [
    { icon: TrendingUp, title: "3-5x рост", description: "Тот же штат обрабатывает в 3-5 раз больше лидов и закрывает больше сделок благодаря автоматизации" },
    { icon: Clock, title: "Экономия времени", description: "Менеджеры сосредоточены только на закрытии. Вся рутина: звонки, поиск, квалификация — на AI" },
    { icon: Zap, title: "Запуск за 7 дней", description: "Быстрый запуск без сложных интеграций. Загружаете базу, настраиваете сценарий — и работает" },
    { icon: BarChart3, title: "Видимость метрик", description: "Первый раз вы видите реальные числа: сколько лидов, конверсия, стоимость привлечения, ROI каждого канала" },
    { icon: Lock, title: "Безопасность", description: "ISO 27001 сертифицированы. Соответствие антифрод-правилам. Все данные защищены, резервные копии ежедневно" },
    { icon: Database, title: "Интеграция", description: "Работает с amoCRM, Bitrix24, Pipedrive, HubSpot, Salesforce и любыми другими через API" },
  ]

  const modules = [
    { title: "Робот для звонков", desc: "Исходящие звонки 24/7, квалификация, календарь встреч", icon: Phone },
    { title: "CRM интеграция", desc: "Загрузка контактов, автораспределение, синхронизация", icon: Database },
    { title: "Аналитика", desc: "Воронка продаж, метрики, анализ разговоров", icon: BarChart3 },
    { title: "Поддержка", desc: "Обучение, консультации, оптимизация по результатам", icon: Users },
  ]

  const industries = [
    { icon: Building2, name: "B2B продажи", description: "Холодные звонки, квалификация, встречи. Увеличение базы оплачивающих клиентов", metrics: { value: "3-5x", label: "производительность" }, gradient: "from-blue-500 to-indigo-600" },
    { icon: ShoppingBag, name: "E-commerce", description: "Обработка звонков для заказов, кросс-сейл, расчёт доставки", metrics: { value: "+85%", label: "конверсия" }, gradient: "from-green-500 to-teal-600" },
    { icon: Briefcase, name: "Услуги (IT, маркетинг, право)", description: "Квалификация проектов, согласование встреч, прототипирование решений", metrics: { value: "-60%", label: "стоимость лида" }, gradient: "from-purple-500 to-violet-600" },
    { icon: Home, name: "Real Estate", description: "Обработка звонков покупателей, встречи на показы, закрытие сделок", metrics: { value: "+70%", label: "показов в день" }, gradient: "from-orange-500 to-amber-600" },
  ]

  const processSteps = [
    { number: "01", title: "Консультация", duration: "1 день", description: "Разбираемся в вашем бизнесе, процессе продаж, целевой аудитории, основных возражениях." },
    { number: "02", title: "Подготовка базы", duration: "1-2 дня", description: "Загружаем базу контактов, настраиваем фильтры по целевой аудитории, подготавливаем CRM." },
    { number: "03", title: "Обучение сценариев", duration: "2-3 дня", description: "Записываем удачные звонки ваших менеджеров, обучаем AI правильному диалогу, аргументам, возражениям." },
    { number: "04", title: "Запуск и тестирование", duration: "1-2 дня", description: "Запускаем на небольшой базе контактов, слушаем разговоры, вводим корректировки." },
    { number: "05", title: "Масштабирование", duration: "1-2 дня", description: "Добавляем весь объём контактов, настраиваем распределение между менеджерами." },
    { number: "06", title: "Постоянная оптимизация", duration: "Постоянно", description: "Анализируем метрики, улучшаем сценарий, адаптируем под сезонность и новые продукты." },
  ]

  const testimonials = [
    {
      quote: "Внедрили робота для звонков. За первый месяц количество лидов выросло на 300%, а менеджеры смогли сосредоточиться на закрытии. Конверсия поднялась с 10% до 28%. Инвестиции окупились за 1.5 месяца.",
      author: "Игорь Петров", position: "Директор по продажам", company: "БизнесТех",
      metric: { value: "28%", label: "конверсия" },
    },
    {
      quote: "AI-робот совершает холодные звонки, а менеджеры работают только с теплыми лидами. Нагрузка упала в 3 раза, а результаты выросли в 2.5 раза. Теперь ищем способ ещё больше масштабировать.",
      author: "Елена Смирнова", position: "VP Sales", company: "МедиаПро",
      metric: { value: "2.5x", label: "рост продаж" },
    },
  ]

  const faqs = [
    { question: "Как робот выглядит с точки зрения клиента?", answer: "Клиент получает звонок — голос человека, вежливый, профессиональный. Робот может рассказать о товаре, ответить на простые вопросы, пригласить на встречу. Звонок ничем не отличается от звонка обычного менеджера." },
    { question: "Какую конверсию можно ожидать?", answer: "Обычно 15-30% в зависимости от товара и аудитории. На некоторых ниш доходит до 50%. Первый месяц тестируем, оптимизируем, ко второму месяцу выходим на стабильные цифры." },
    { question: "Сколько звонков может сделать робот в день?", answer: "Зависит от объёма контактов. Если 1000 контактов — 500-700 звонков в день с учётом занятых номеров и отказов. Обычно 15-30% доходят до менеджера для встречи." },
    { question: "Интегрируется ли с нашей CRM?", answer: "Да, работаем с amoCRM, Bitrix24, Pipedrive, HubSpot, Salesforce и другие через API. Все лиды автоматически создаются в CRM, менеджеры видят историю звонков." },
    { question: "Нужно ли переобучать робота для новых продуктов?", answer: "Да, но это быстро. Записываете 3-5 успешных звонков про новый продукт, мы обновляем сценарий за день. Можно даже обновлять по частям: новые аргументы, возражения." },
    { question: "Какая цена?", answer: "Зависит от объёма. Обычно от 50-100k в месяц за базовый пакет на 1000-5000 контактов. Есть модели по количеству успешных звонков или сделок. На первой консультации посчитаем точно." },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-500/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-cyan-500/10 to-transparent" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/80">Система автоматизации продаж</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Sales Automation System
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-2">
                для рост в 3-5 раз
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI-робот совершает исходящие звонки, квалифицирует лидов, согласует встречи и передаёт менеджерам. Вся рутина на автомате, менеджеры занимаются только закрытием сделок.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 text-base bg-white text-slate-900 hover:bg-slate-100">
                Запросить демо <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 bg-transparent">
                Слушать пример звонка
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Проблема традиционной продажи</h2>
            <p className="text-xl text-muted-foreground">Менеджеры тратят 70% времени на холодные звонки вместо закрытия.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Неэффективность", desc: "Менеджер делает 30-50 звонков в день, из них 3-5 договариваются на встречу. Остальное — пустые разговоры" },
              { icon: AlertCircle, title: "Выгорание", desc: "Постоянные отказы, агрессия, оскорбления. За год 50-70% менеджеров уходят из отдела продаж" },
              { icon: TrendingUp, title: "Непредсказуемость", desc: "Результат зависит от настроения менеджера, времени, погоды. Нет системы, нет стабильности" },
              { icon: BarChart3, title: "Отсутствие данных", desc: "Непонятно сколько звонков, какая конверсия, почему одни менеджеры лучше, почему нет результатов" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Как работает система</h2>
            <p className="text-xl text-muted-foreground">Четыре компонента полной автоматизации продаж.</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Преимущества автоматизации</h2>
            <p className="text-xl text-muted-foreground">Что получает компания после внедрения.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Включено в пакет</h2>
            <p className="text-xl text-muted-foreground">Четыре модуля для полной автоматизации.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((mod) => {
              const Icon = mod.icon
              return (
                <Card key={mod.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{mod.title}</h3>
                    <p className="text-sm text-muted-foreground">{mod.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Для каких бизнесов подходит</h2>
            <p className="text-xl text-muted-foreground">Решение работает во всех отраслях с B2B и B2C продажами.</p>
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
            <p className="text-xl text-muted-foreground">Запуск за 7 дней без сложностей.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step) => (
              <div key={step.number}>
                <div className="text-3xl font-bold text-slate-200 dark:text-slate-800 mb-2">{step.number}</div>
                <div className="inline-block px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium mb-2">{step.duration}</div>
                <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Результаты клиентов</h2>
            <p className="text-xl text-slate-300">Реальные кейсы компаний, которые ускорили продажи в 3-5 раз.</p>
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
                    <div className="text-2xl font-bold text-blue-400">{t.metric.value}</div>
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
              { title: "Обработка заявок", href: "/solutions/obrabotka-zayavok", desc: "Квалификация входящих обращений" },
              { title: "Обработка заказов", href: "/solutions/obrabotka-zakazov", desc: "Полный цикл от заявки до доставки" },
              { title: "Выставление счетов", href: "/solutions/vystavlenie-schetov", desc: "Автоматическая генерация документов" },
              { title: "Расчёт доставки", href: "/solutions/raschet-dostavki", desc: "Оптимизация логистики" },
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

      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Увеличьте продажи в 3-5 раз</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Система запускается за 7 дней. Бесплатная консультация и демо звонка от робота.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 bg-white text-blue-600 hover:bg-slate-100">
              Получить бесплатную консультацию <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent">
              Слушать пример звонка
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">Без обязательств · Запуск за 7 дней · NDA по запросу</p>
        </div>
      </section>
    </div>
  )
}
