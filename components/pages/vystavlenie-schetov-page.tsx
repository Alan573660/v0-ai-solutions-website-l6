"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight, Check, FileText, ChevronRight, Quote,
  Mail, DollarSign, Clock, BarChart3, Shield, Database,
  Building2, ShoppingBag, Briefcase, Home,
  AlertCircle, Zap, CheckCircle2, Settings,
  Send, Receipt, Copy, Lock,
} from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"

export function VystavlenieSchetovPage() {
  const { openModal } = useCTA()
  const [activeFeature, setActiveFeature] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { value: "100%", label: "Автогенерация счётов" },
    { value: "<1 мин", label: "От заявки до счёта" },
    { value: "+85%", label: "Скорость оплаты" },
    { value: "24/7", label: "Без выходных" },
  ]

  const features = [
    {
      icon: FileText,
      title: "Автогенерация счётов",
      description: "Автоматически создаёт счёт из заявки, заказа или звонка с правильными реквизитами и суммой",
      details: ["Заполнение реквизитов вашей компании", "Расчёт налогов (НДС, УСН, ЕНВД)", "Подписание электронной подписью", "Нумерация и архивирование"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Отправка по каналам",
      description: "Отправляет счёт по email, в мессенджер, СМС или в CRM клиентом для удобства оплаты",
      details: ["Email с PDF и реквизитами", "Telegram/WhatsApp прямой ссылкой", "СМС с кодом для оплаты", "Загрузка в личный кабинет CRM"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Контроль оплаты",
      description: "Отслеживает оплату в реальном времени, отправляет напоминания и уведомляет при получении денег",
      details: ["Отслеживание статуса оплаты", "Автоматические напоминания перед сроком", "Уведомление при оплате", "Синхронизация с банком"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: DollarSign,
      title: "Интеграция с платёжами",
      description: "Принимает оплату через различные системы: банк, Яндекс.Касса, Stripe, PayPal",
      details: ["Приём банковских переводов", "Яндекс.Касса и 1С-Битрикс", "Stripe и другие международные платёжи", "Отложенные платежи и рассрочка"],
      color: "from-orange-500 to-amber-500",
    },
  ]

  const benefits = [
    { icon: Zap, title: "Экономия времени", description: "Менеджеры тратят <1 мин на счёт вместо 15-20 минут вручную" },
    { icon: CheckCircle2, title: "Нет ошибок", description: "Правильные суммы, реквизиты и налоги автоматически рассчитаны" },
    { icon: DollarSign, title: "Ускорение оплаты", description: "Счета отправляются мгновенно, оплату получаете в 2-3 раза быстрее" },
    { icon: BarChart3, title: "Полная аналитика", description: "Видите все счета, статус оплаты, просроченные, коэффициент конверсии" },
    { icon: Shield, title: "Безопасность", description: "ЭЦП, шифрование, соответствие налоговому законодательству" },
    { icon: Clock, title: "Автоматизм", description: "Забудьте о напоминаниях — система сама следит и напоминает" },
  ]

  const industries = [
    { icon: Building2, name: "B2B и консалтинг", description: "Выставление счётов за проекты, консультации, услуги с контролем оплаты", metrics: { value: "-80%", label: "просроченных счётов" }, gradient: "from-blue-500 to-indigo-600" },
    { icon: ShoppingBag, name: "E-commerce", description: "Автоматические счёта при заказе, интеграция со складом, напоминания об оплате", metrics: { value: "+65%", label: "скорость оплаты" }, gradient: "from-green-500 to-teal-600" },
    { icon: Briefcase, name: "Фриланс и агентства", description: "Счета за проекты и услуги, автоматический расчёт налогов, отправка клиентам", metrics: { value: "1 мин", label: "на счёт" }, gradient: "from-purple-500 to-violet-600" },
    { icon: Home, name: "SaaS и подписки", description: "Рекуррентные счета, автооплата подписок, контроль просрочек, автоматический дебит", metrics: { value: "24/7", label: "выставление счётов" }, gradient: "from-orange-500 to-amber-600" },
  ]

  const processSteps = [
    { number: "01", title: "Синхронизация данных", duration: "1 день", description: "Подключаем CRM, склад или базу клиентов. Данные синхронизируются в реальном времени." },
    { number: "02", title: "Настройка шаблонов", duration: "2-3 дня", description: "Создаём шаблоны счётов, установки налогов, реквизиты вашей компании." },
    { number: "03", title: "Интеграция платежей", duration: "1-2 дня", description: "Подключаем банк, Яндекс.Касса и другие платёжные системы для отслеживания." },
    { number: "04", title: "Запуск и поддержка", duration: "Постоянно", description: "Запускаем в боевых условиях, мониторим, добавляем новые функции." },
  ]

  const testimonials = [
    {
      quote: "Раньше выставляли счета вручную, каждый 40 минут. За день по 10-20 счетов. Теперь система делает это автоматически за секунды. Тот же менеджер теперь занимается только продажами, не бюрократией. Просроченных счетов стало в 5 раз меньше.",
      author: "Александр Волков", position: "Финансовый директор", company: "АБК Консалтинг",
      metric: { value: "-80%", label: "просроченных счётов" },
    },
    {
      quote: "Внедрили автоматическое выставление счётов во всей компании. Платежи поступают в 2-3 раза быстрее благодаря мгновенной отправке. Также появилась полная аналитика: какие клиенты платят в срок, кто просрочивает.",
      author: "Ольга Морозова", position: "Главный бухгалтер", company: "ТехноСервис",
      metric: { value: "+165%", label: "скорость поступления" },
    },
  ]

  const faqs = [
    { question: "Какие налоговые системы поддерживаются?", answer: "Поддерживаем все: ОСН, УСН доходы, УСН доходы-расходы, ЕНВД, патент. Налоги рассчитываются автоматически в зависимости от системы налогообложения." },
    { question: "Как счёты интегрируются с 1С и бухгалтерией?", answer: "Интегрируемся с 1С-Бухгалтерией и 1С-УТ. Все счета автоматически передаются в 1С для учёта. Можно также использовать API для других бухсистем." },
    { question: "Какие платёжные системы поддерживаются?", answer: "Банковские переводы, Яндекс.Касса, Sberbank Online, Stripe, PayPal, 2Checkout. Отслеживаем оплату и автоматически переводим статус счета." },
    { question: "Как работает отправка счётов по разным каналам?", answer: "Вы выбираете для каждого клиента предпочтительный канал (email, Telegram, WhatsApp, СМС). Система отправляет счёт туда и напоминает о нем." },
    { question: "Можно ли выставлять рекуррентные счета?", answer: "Да, поддерживаем периодические счета для подписок и контрактов. Система автоматически создаёт и отправляет их в установленный день месяца." },
    { question: "Как быстро внедрить систему?", answer: "Стандартное внедрение: 3-5 дней. Если уже есть CRM и платёжная система — 1-2 дня. Начинаете выставлять счета сразу после тестирования." },
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
              <span className="text-sm text-white/80">Автоматизация выставления счётов</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Выставление счётов
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-2">
                за одну секунду
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Система автоматически создаёт счета из заявок и заказов, отправляет клиентам, контролирует оплату и напоминает о просрочках. Вся документация с электронной подписью.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 text-base bg-white text-slate-900 hover:bg-slate-100">
                Запросить демо <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 bg-transparent">
                Смотреть как работает
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Проблемы с ручным выставлением счётов</h2>
            <p className="text-xl text-muted-foreground">Менеджеры тратят часы на рутину вместо продаж.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Медленно", desc: "Каждый счёт — 20-40 минут. По 50-100 счетов в день — это целый рабочий день на одного менеджера" },
              { icon: AlertCircle, title: "Ошибки", desc: "Неправильные суммы, реквизиты, налоги. Клиент не платит, потому что сумма не совпадает" },
              { icon: Zap, title: "Медленная оплата", desc: "Счета отправляют с опозданием. Клиент забывает, платит позже или не платит вообще" },
              { icon: BarChart3, title: "Нет видимости", desc: "Непонятно сколько счетов выставлено, сколько оплачено, кто просрочивает платёж" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Как работает система выставления счётов</h2>
            <p className="text-xl text-muted-foreground">От заявки до оплаты — полная автоматизация за секунды.</p>
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
            <p className="text-xl text-muted-foreground">Что получает бизнес после внедрения.</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Для каких бизнесов подходит</h2>
            <p className="text-xl text-muted-foreground">Любая компания, которая выставляет счета клиентам.</p>
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
            <p className="text-xl text-muted-foreground">Запуск за 3-5 дней без остановки работы.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number}>
                <div className="text-5xl font-bold text-slate-200 dark:text-slate-800 mb-3">{step.number}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium mb-3">{step.duration}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Результаты клиентов</h2>
            <p className="text-xl text-slate-300">Реальные кейсы компаний, которые автоматизировали выставление счётов.</p>
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
              { title: "Обработка заказов", href: "/solutions/obrabotka-zakazov", desc: "Полный цикл от заявки до доставки" },
              { title: "Обработка заявок", href: "/solutions/obrabotka-zayavok", desc: "Автоматическая квалификация" },
              { title: "Расчёт доставки", href: "/solutions/raschet-dostavki", desc: "Оптимизация логистики" },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Выставляйте счета за одну секунду</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Запустите автоматизацию за 3-5 дней. Бесплатная консультация и демо.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 bg-white text-blue-600 hover:bg-slate-100">
              Получить бесплатную консультацию <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent">
              Рассчитать ROI
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">Без обязательств · Запуск за 3-5 дней · NDA по запросу</p>
        </div>
      </section>
    </div>
  )
}
