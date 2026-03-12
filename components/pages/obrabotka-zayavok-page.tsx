"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight, Check, Zap, ChevronRight, Quote,
  Target, Clock, BarChart3, Shield, Database,
  Building2, ShoppingBag, Briefcase, Truck,
  AlertCircle, Mail, MessageSquare, Globe, Settings,
  Filter, Route, Bell, FileCheck,
} from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import { RelatedSolutions } from "@/components/related-solutions"
import type { Locale } from "@/lib/i18n/config"

interface ObrabotkZayavokPageProps {
  locale: Locale
}

export function ObrabotkZayavokPage({ locale }: ObrabotkZayavokPageProps) {
  const { openModal } = useCTA()
  const [activeFeature, setActiveFeature] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { value: "100%", label: "Заявок обработано" },
    { value: "<1 мин", label: "Время реакции" },
    { value: "-80%", label: "Ручного труда" },
    { value: "24/7", label: "Без перерывов" },
  ]

  const features = [
    {
      icon: Filter,
      title: "Приём из всех каналов",
      description: "Собирает заявки с сайта, email, телефона, мессенджеров и CRM в одном потоке",
      details: ["Сайт, лендинги, pop-up формы", "Email и входящие письма", "Телефон и голосовые обращения", "Telegram, WhatsApp, Viber"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Квалификация и скоринг",
      description: "Автоматически оценивает каждую заявку по заданным критериям и присваивает приоритет",
      details: ["Скоринг по бюджету и срочности", "Определение стадии воронки", "Фильтрация нецелевых обращений", "Сегментация по типу клиента"],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Route,
      title: "Умная маршрутизация",
      description: "Направляет каждую заявку нужному специалисту по правилам, продукту или территории",
      details: ["Маршрутизация по продукту/услуге", "Распределение по территории", "Балансировка нагрузки между менеджерами", "Автоназначение по расписанию"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Bell,
      title: "Уведомления и контроль",
      description: "Оповещает менеджеров мгновенно, контролирует сроки обработки и эскалирует просроченные",
      details: ["Push/email уведомления мгновенно", "Контроль SLA по каждой заявке", "Эскалация просроченных руководителю", "Дашборд очереди в реальном времени"],
      color: "from-green-500 to-emerald-500",
    },
  ]

  const industries = [
    {
      icon: Building2, name: "B2B и оптовые продажи",
      description: "Квалификация корпоративных запросов, распределение по менеджерам, контроль сроков ответа",
      metrics: { value: "-72%", label: "время на обработку" }, gradient: "from-blue-500 to-indigo-600",
      cases: ["Фильтрация целевых запросов", "Назначение менеджера", "Контроль SLA", "Автоотправка КП"],
    },
    {
      icon: ShoppingBag, name: "E-commerce и ритейл",
      description: "Обработка заявок на возврат, обмен, консультацию, жалобы и специальные заказы",
      metrics: { value: "3 мин", label: "время ответа" }, gradient: "from-green-500 to-teal-600",
      cases: ["Классификация обращений", "Приоритет VIP-клиентов", "Возвраты и обмены", "Автоответы на типовые вопросы"],
    },
    {
      icon: Truck, name: "Логистика и доставка",
      description: "Заявки на перевозку, расчёт стоимости, подтверждение, маршрутизация к диспетчерам",
      metrics: { value: "5x", label: "скорость обработки" }, gradient: "from-orange-500 to-amber-600",
      cases: ["Приём заявок на перевозку", "Автоскоринг груза", "Назначение диспетчера", "Уведомление отправителя"],
    },
    {
      icon: Briefcase, name: "Профессиональные услуги",
      description: "Заявки на консультации, аудит, проекты — квалификация, запись, назначение специалиста",
      metrics: { value: "+45%", label: "конверсия заявок" }, gradient: "from-purple-500 to-violet-600",
      cases: ["Квалификация запроса", "Запись на консультацию", "Назначение эксперта", "Follow-up автоматически"],
    },
  ]

  const processSteps = [
    { number: "01", title: "Аудит потоков заявок", duration: "1-2 дня", description: "Анализируем откуда приходят заявки, как обрабатываются сейчас, где теряются и сколько времени занимает." },
    { number: "02", title: "Настройка правил", duration: "3-5 дней", description: "Создаём правила квалификации, скоринга, маршрутизации под вашу бизнес-логику и организационную структуру." },
    { number: "03", title: "Интеграция каналов", duration: "2-4 дня", description: "Подключаем все каналы поступления заявок и CRM-систему. Тестируем каждый маршрут." },
    { number: "04", title: "Запуск и оптимизация", duration: "Постоянно", description: "Запускаем в продакшн, мониторим качество маршрутизации, оптимизируем правила по данным." },
  ]

  const integrations = [
    { name: "amoCRM", category: "CRM" }, { name: "Битрикс24", category: "CRM" },
    { name: "HubSpot", category: "CRM" }, { name: "Salesforce", category: "CRM" },
    { name: "Gmail", category: "Email" }, { name: "Outlook", category: "Email" },
    { name: "Telegram", category: "Мессенджер" }, { name: "WhatsApp", category: "Мессенджер" },
    { name: "Jira", category: "Helpdesk" }, { name: "Zendesk", category: "Helpdesk" },
    { name: "1C", category: "ERP" }, { name: "Roistat", category: "Аналитика" },
  ]

  const testimonials = [
    {
      quote: "До автоматизации менеджеры тратили 2-3 часа в день на разбор почты и распределение заявок. Теперь система делает это за секунды. За месяц обработали на 40% больше заявок тем же штатом.",
      author: "Наталья Иванова", position: "Операционный директор", company: "СтройМаркет",
      metric: { value: "+40%", label: "заявок без найма" },
    },
    {
      quote: "Внедрили скоринг заявок и маршрутизацию по продуктам. Горячие лиды теперь попадают к менеджерам за 30 секунд, холодные — в автоворонку. Конверсия в сделку выросла на 28%.",
      author: "Дмитрий Петров", position: "Директор по продажам", company: "ИТ-Решения",
      metric: { value: "+28%", label: "конверсия в сделку" },
    },
  ]

  const pricing = {
    title: "Стоимость обработки заявок",
    subtitle: "Гибкое ценообразование",
    plans: [
      { name: "Старт", price: "от 20 000", period: "руб/мес", features: ["До 500 заявок", "2 канала", "Базовая квалификация", "Email поддержка"], highlight: false },
      { name: "Бизнес", price: "от 50 000", period: "руб/мес", features: ["До 2000 заявок", "Все каналы", "Сложная маршрутизация", "Приоритетная поддержка"], highlight: true },
      { name: "Enterprise", price: "Индивидуально", period: "", features: ["Неограниченно", "Кастомная логика", "Все интеграции", "24/7 поддержка", "SLA"], highlight: false },
    ],
    note: "Первые 14 дней бесплатно. Внедрение и обучение включены.",
  }

  const m2Benefits = [
    { title: "Собственная платформа", description: "Полный контроль над данными" },
    { title: "Любые каналы", description: "Email, телефон, мессенджеры, CRM" },
    { title: "Быстрое внедрение", description: "Запуск за 7-14 дней" },
    { title: "Безопасность", description: "ISO 27001, GDPR, 152-ФЗ" },
    { title: "Экспертная команда", description: "10+ лет опыта" },
    { title: "Гарантия результата", description: "100% заявок обработано" },
  ]

  const faqs = [
    { question: "Из каких каналов система принимает заявки?", answer: "Из любых: формы на сайте, email, входящие звонки, Telegram, WhatsApp, Viber, чат на сайте, CRM, мобильное приложение. Все заявки приходят в единую очередь с нормализацией данных." },
    { question: "Как настраивается скоринг заявок?", answer: "Вы задаёте критерии через интерфейс: бюджет, отрасль, должность, срочность, источник. Система оценивает каждую заявку от 0 до 100 и приоритизирует очередь. Модель самообучается на основе конверсии." },
    { question: "Можно ли назначать заявки по территориальному признаку?", answer: "Да, поддерживаем территориальную маршрутизацию по городу, региону, стране. Также по продукту, отрасли клиента, размеру сделки, языку общения и любым другим параметрам." },
    { question: "Что происходит, если менеджер не обработал заявку вовремя?", answer: "Система отслеживает SLA по каждой заявке. При просрочке сначала приходит напоминание менеджеру, затем — уведомление руководителю. Заявка автоматически переназначается или эскалируется." },
    { question: "Интегрируется ли с нашей CRM?", answer: "Интегрируемся с amoCRM, Битрикс24, HubSpot, Salesforce, Pipedrive и большинством других CRM через API. Данные синхронизируются двусторонне в реальном времени." },
    { question: "Как быстро запустить систему?", answer: "Стандартный запуск занимает 7-14 дней: аудит, настройка правил, интеграция каналов и CRM, тестирование маршрутов. Для простых случаев (1-2 канала, простая маршрутизация) — от 3-5 дней." },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-950 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-500/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-emerald-500/10 to-transparent" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/80">Автоматизация входящих заявок</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Обработка заявок
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mt-2">
                без потерь и задержек
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Собирает заявки из всех каналов, квалифицирует, расставляет приоритеты и направляет нужному специалисту за секунды. Ни одна заявка не теряется и не обрабатывается с опозданием.
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Почему бизнес теряет заявки</h2>
            <p className="text-xl text-muted-foreground">Ручная обработка заявок — главный источник потерь клиентов и выручки.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertCircle, title: "Заявки теряются", desc: "До 30% заявок из email и мессенджеров остаются без ответа из-за ручного разбора" },
              { icon: Clock, title: "Долгое время реакции", desc: "Среднее время ответа на заявку — 4-8 часов. Клиент уже ушёл к конкурентам" },
              { icon: Route, title: "Неправильная маршрутизация", desc: "Заявки попадают не к тому менеджеру, передаются по несколько раз, клиент злится" },
              { icon: BarChart3, title: "Нет аналитики", desc: "Непонятно сколько заявок, откуда они, сколько теряется, какой менеджер справляется" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Что умеет система обработки заявок</h2>
            <p className="text-xl text-muted-foreground">Полный цикл: от приёма до контроля исполнения по SLA.</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Для каких бизнесов подходит</h2>
            <p className="text-xl text-muted-foreground">Система работает в любой сфере, где есть входящие обращения клиентов.</p>
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
                    <p className="text-sm text-muted-foreground mb-4">{ind.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {ind.cases.map((c) => (
                        <div key={c} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Как работает внедрение</h2>
            <p className="text-xl text-muted-foreground">Запуск за 7-14 дней без остановки текущих процессов.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number}>
                <div className="text-5xl font-bold text-slate-200 dark:text-slate-800 mb-3">{step.number}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium mb-3">{step.duration}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Результаты клиентов</h2>
            <p className="text-xl text-slate-300">Компании, которые автоматизировали обработку заявок.</p>
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
                    <div className="text-2xl font-bold text-green-400">{t.metric.value}</div>
                    <div className="text-xs text-slate-400">{t.metric.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Интеграции</h2>
            <p className="text-xl text-muted-foreground">Подключаемся ко всем каналам и системам за 1-3 дня.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((int) => (
              <div key={int.name} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-md transition-shadow">
                <div className="text-xs text-muted-foreground mb-1">{int.category}</div>
                <div className="font-semibold text-sm">{int.name}</div>
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
              { title: "Робот для продаж", href: "/solutions/robot-dlya-prodazh", desc: "Ведёт клиента от заявки до сделки" },
              { title: "Выставление счетов", href: "/solutions/vystavlenie-schetov", desc: "Автоматическая генерация документов" },
              { title: "AI для бизнеса", href: "/solutions/ai-dlya-biznesa", desc: "Комплексная автоматизация всех процессов" },
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
              <Card key={idx} className={`relative ${plan.highlight ? 'border-green-500 shadow-lg ring-2 ring-green-500' : ''}`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">Популярный</div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6"><span className="text-3xl font-bold">{plan.price}</span><span className="text-muted-foreground">{plan.period}</span></div>
                  <ul className="space-y-3">
                    {plan.features.map((f, i) => (<li key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" />{f}</li>))}
                  </ul>
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
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Почему M2 AI Solutions</h2>
            <p className="text-xl text-muted-foreground">Технологическое лидерство</p>
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Перестаньте терять заявки</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Запустите автоматическую обработку всех входящих обращений за 7-14 дней.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 bg-white text-green-600 hover:bg-slate-100">
              Запросить бесплатное демо <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent">
              Рассчитать ROI
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">Без обязательств · Запуск за 7-14 дней · NDA по запросу</p>
        </div>
      </section>

      {/* AI Automation Hub Link */}
      <section className="py-12 bg-gradient-to-r from-orange-50/20 to-amber-50/20 dark:from-orange-950/20 dark:to-amber-950/20 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Смотрите также</p>
              <h3 className="text-lg font-semibold text-white">AI автоматизация бизнеса</h3>
            </div>
            <Button asChild variant="ghost" className="text-orange-400 hover:text-orange-300 shrink-0">
              <Link href={`/${locale}/automation-business`}>
                Подробнее <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions locale={locale} currentSlug="obrabotka-zayavok" />
    </div>
  )
}
