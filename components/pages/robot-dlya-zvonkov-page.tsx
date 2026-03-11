"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Check,
  Phone,
  Shield,
  Zap,
  ChevronRight,
  Quote,
  MessageSquare,
  Clock,
  Users,
  BarChart3,
  Target,
  TrendingUp,
  Bot,
  Layers,
  Building2,
  ShoppingBag,
  Briefcase,
  Truck,
  Settings,
  Globe,
  Database,
  CheckCircle2,
  CalendarCheck,
  MicOff,
  HeadphonesIcon,
  RefreshCw,
} from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import { RelatedSolutions } from "@/components/related-solutions"
import type { Locale } from "@/lib/i18n/config"

interface RobotDlyaZvonkovPageProps {
  locale: Locale
}

export function RobotDlyaZvonkovPage({ locale }: RobotDlyaZvonkovPageProps) {
  const { openModal } = useCTA()
  const [activeFeature, setActiveFeature] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { value: "100%", label: "Звонков обработано" },
    { value: "24/7", label: "Работает всегда" },
    { value: "-70%", label: "Экономия на ФОТ" },
    { value: "3 сек", label: "Время ответа" },
  ]

  const features = [
    {
      icon: Phone,
      title: "Входящие звонки",
      description: "Принимает 100% входящих звонков без очереди и ожидания, даже ночью и в выходные",
      details: [
        "Мгновенный ответ без очереди",
        "Обработка любого количества одновременных звонков",
        "Работа в выходные и праздничные дни",
        "Переключение на менеджера по запросу",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquare,
      title: "Исходящие звонки",
      description: "Автоматический массовый обзвон базы клиентов: напоминания, опросы, уведомления, возврат",
      details: [
        "Массовый обзвон до 10 000 контактов/день",
        "Персонализированные сценарии по сегментам",
        "Автоматические напоминания о встречах",
        "Возврат потерявшихся клиентов",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Квалификация лидов",
      description: "Автоматически определяет качество лида по заданным критериям и передает горячие заявки менеджерам",
      details: [
        "Скоринг по потребности, бюджету, срочности",
        "Горячие лиды — мгновенно менеджеру",
        "Холодные — в отдельную очередь",
        "Запись и транскрипция каждого звонка",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CalendarCheck,
      title: "Запись и напоминания",
      description: "Записывает на встречи, консультации и сервис, отправляет напоминания и подтверждения",
      details: [
        "Синхронизация с Google Calendar и CRM",
        "Автоматические SMS/email подтверждения",
        "Напоминания за 24 часа и 1 час",
        "Перенос и отмена записи голосом",
      ],
      color: "from-orange-500 to-amber-500",
    },
  ]

  const industries = [
    {
      icon: Building2,
      name: "Медицина и клиники",
      description: "Запись пациентов, напоминания о приёме, обзвон с результатами анализов",
      metrics: { value: "4x", label: "рост записей" },
      gradient: "from-blue-500 to-indigo-600",
      cases: ["Запись на приём 24/7", "Напоминания о визите", "Подтверждение записи", "Опросы после приёма"],
    },
    {
      icon: ShoppingBag,
      name: "Интернет-магазины",
      description: "Подтверждение заказов, уведомления о доставке, возврат брошенных корзин",
      metrics: { value: "+35%", label: "конверсия" },
      gradient: "from-green-500 to-teal-600",
      cases: ["Подтверждение заказа", "Уведомление о доставке", "Возврат корзины", "Сбор отзывов"],
    },
    {
      icon: Truck,
      name: "Логистика и доставка",
      description: "Координация водителей, уведомления получателей, подтверждение доставки",
      metrics: { value: "-50%", label: "пропущенных" },
      gradient: "from-orange-500 to-amber-600",
      cases: ["Звонок перед доставкой", "Координация водителя", "Подтверждение получения", "Маршрутизация"],
    },
    {
      icon: Briefcase,
      name: "B2B продажи",
      description: "Холодный обзвон, квалификация, назначение встреч с ЛПР",
      metrics: { value: "20+", label: "встреч/день" },
      gradient: "from-purple-500 to-violet-600",
      cases: ["Холодный обзвон базы", "Квалификация ЛПР", "Назначение встреч", "Follow-up после КП"],
    },
  ]

  const integrations = [
    { name: "amoCRM", category: "CRM" },
    { name: "Битрикс24", category: "CRM" },
    { name: "Asterisk", category: "Телефония" },
    { name: "Mango Office", category: "Телефония" },
    { name: "Telegram", category: "Мессенджер" },
    { name: "WhatsApp", category: "Мессенджер" },
    { name: "Google Calendar", category: "Календарь" },
    { name: "1C", category: "ERP" },
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "Roistat", category: "Аналитика" },
    { name: "Calltouch", category: "Аналитика" },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Аудит звонков",
      duration: "1-2 дня",
      description: "Анализируем текущие звонки, типовые сценарии, частые вопросы и точки потерь клиентов.",
    },
    {
      number: "02",
      title: "Настройка сценариев",
      duration: "3-5 дней",
      description: "Создаем скрипты под ваш бизнес, настраиваем голос, тональность и логику квалификации.",
    },
    {
      number: "03",
      title: "Интеграция систем",
      duration: "2-3 дня",
      description: "Подключаем к вашей телефонии, CRM и календарю. Тестируем все сценарии.",
    },
    {
      number: "04",
      title: "Запуск и оптимизация",
      duration: "Постоянно",
      description: "Запускаем в работу, анализируем результаты и постоянно улучшаем качество диалогов.",
    },
  ]

  const testimonials = [
    {
      quote: "Раньше мы теряли до 40% звонков в нерабочее время. Теперь робот отвечает 24/7, записывает клиентов на приём и утром передаёт нам готовый список. Загрузка клиники выросла на 60%.",
      author: "Ирина Волкова",
      position: "Главный врач",
      company: "Клиника «Здоровье+»",
      metric: { value: "+60%", label: "загрузка клиники" },
    },
    {
      quote: "Настроили исходящий обзвон для возврата клиентов, которые не покупали 3+ месяца. Из 5000 контактов 800 вернулись и совершили покупку. ROI за первый месяц — 400%.",
      author: "Андрей Смирнов",
      position: "Директор по маркетингу",
      company: "МебельГрупп",
      metric: { value: "400%", label: "ROI первый месяц" },
    },
  ]

  const pricing = {
    title: "Стоимость робота для звонков",
    subtitle: "Гибкое ценообразование под ваш объем",
    plans: [
      { name: "Старт", price: "от 25 000", period: "руб/мес", features: ["До 1000 звонков", "Входящие и исходящие", "1 интеграция", "Email поддержка"], highlight: false },
      { name: "Бизнес", price: "от 60 000", period: "руб/мес", features: ["До 5000 звонков", "Сложные сценарии", "5 интеграций", "Приоритетная поддержка"], highlight: true },
      { name: "Enterprise", price: "Индивидуально", period: "", features: ["Неограниченно", "Кастомные сценарии", "Все интеграции", "24/7 поддержка", "SLA"], highlight: false },
    ],
    note: "Первые 14 дней бесплатно. Внедрение и обучение включены.",
  }

  const m2Benefits = [
    { title: "Собственная AI-платформа", description: "Полный контроль над технологией" },
    { title: "Мультиязычность", description: "6+ языков из коробки" },
    { title: "Быстрое внедрение", description: "Запуск за 7-10 дней" },
    { title: "Безопасность данных", description: "ISO 27001, GDPR, 152-ФЗ" },
    { title: "Экспертная команда", description: "10+ лет в AI, 50+ внедрений" },
    { title: "Гарантия ROI", description: "Окупаемость за 1-2 месяца" },
  ]

  const faqs = [
    {
      question: "Как робот для звонков отличается от IVR-меню?",
      answer: "В отличие от IVR, робот ведет полноценный разговор голосом, понимает свободную речь, задает уточняющие вопросы и адаптирует диалог в реальном времени. Клиент не нажимает кнопки — он просто разговаривает как с живым оператором.",
    },
    {
      question: "Сколько звонков одновременно может обраб��тывать робот?",
      answer: "Система масштабируется горизонтально и обрабатывает неограниченное количество одновременных звонков. Типичные клиенты обрабатывают от 50 до 5000 звонков в день.",
    },
    {
      question: "Можно ли переключиться на живого оператора?",
      answer: "Да, в любой момент диалога клиент может попросить переключить на оператора или нажать определённую клавишу. Робот передаёт всю информацию о разговоре вместе с переключением.",
    },
    {
      question: "Как быстро можно запустить робота для звонков?",
      answer: "Стандартный запуск занимает 7-14 дней: аудит, настройка сценариев, интеграция с телефонией и CRM, тестирование. Для простых задач (подтверждения, напоминания) — от 3 дней.",
    },
    {
      question: "Поддерживает ли система несколько языков?",
      answer: "Да, поддерживаем русский, английский, испанский, немецкий, нидерландский и французский. Можно настроить определение языка клиента автоматически.",
    },
    {
      question: "Как измеряется эффективность робота?",
      answer: "В личном кабинете доступна полная аналитика: количество звонков, конверсия, среднее время диалога, записи разговоров, транскрипции, тепловые карты по часам. Еженедель��ые отчёты на email.",
    },
  ]

  const problems = [
    { icon: MicOff, title: "Пропущенные звонки", desc: "До 40% звонков остаются без ответа в нерабочее время и пиковую нагрузку" },
    { icon: Clock, title: "Долгое ожидание", desc: "Клиенты ждут по 3-5 минут на линии и вешают трубку, уходя к конкурентам" },
    { icon: HeadphonesIcon, title: "Рутина операторов", desc: "80% звонков — это одни и те же вопросы, которые отнимают время живых менеджеров" },
    { icon: RefreshCw, title: "Нет системы обзвона", desc: "Менеджеры не успевают перезванивать, лиды теряются и уходят без конвертации" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-500/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-cyan-500/10 to-transparent" />

        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/80">Автоматизация звонков 24/7</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Робот для звонков
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                который не устаёт
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Принимает входящие, делает исходящие, квалифицирует лидов и записывает клиентов. 
              Без пропущенных звонков, без очереди, без выходных. Экономия до 70% на ФОТ call-центра.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 text-base bg-white text-slate-900 hover:bg-slate-100">
                Получить демо
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 bg-transparent">
                Послушать пример звонка
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

      {/* Problem block */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Почему бизнес теряет деньги на звонках</h2>
            <p className="text-xl text-muted-foreground">
              Каждый пропущенный звонок — это потерянный клиент. Каждый час простоя call-центра — это упущенная выручка.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((item) => {
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

      {/* What it does */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Что умеет робот для звонков</h2>
            <p className="text-xl text-muted-foreground">
              Полная автоматизация голосовой коммуникации: от приёма до квалификации и передачи в CRM.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              {features.map((feat, idx) => {
                const Icon = feat.icon
                return (
                  <button
                    key={feat.title}
                    onClick={() => setActiveFeature(idx)}
                    className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer ${
                      activeFeature === idx
                        ? "bg-gradient-to-r " + feat.color + " text-white shadow-lg"
                        : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${activeFeature === idx ? "bg-white/20" : "bg-white dark:bg-slate-700"}`}>
                        <Icon className={`w-5 h-5 ${activeFeature === idx ? "text-white" : ""}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{feat.title}</h3>
                        <p className={`text-sm mt-1 ${activeFeature === idx ? "text-white/80" : "text-muted-foreground"}`}>
                          {feat.description}
                        </p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeFeature === idx ? "rotate-90" : ""}`} />
                    </div>
                  </button>
                )
              })}
            </div>

            <div className={`rounded-2xl p-8 bg-gradient-to-br ${features[activeFeature].color} text-white`}>
              {(() => {
                const Icon = features[activeFeature].icon
                return (
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                )
              })()}
              <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
              <p className="text-white/80 mb-8">{features[activeFeature].description}</p>
              <ul className="space-y-4">
                {features[activeFeature].details.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => openModal("consultation")} className="w-full mt-8 bg-white text-slate-900 hover:bg-slate-100">
                Обсудить внедрение
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Для каких бизнесов подходит</h2>
            <p className="text-xl text-muted-foreground">
              Робот для звонков работает в любой сфере, где есть телефонный контакт с клиентами.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Card key={industry.name} className="group overflow-hidden hover:shadow-xl transition-all">
                  <div className={`h-2 bg-gradient-to-r ${industry.gradient}`} />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${industry.gradient}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{industry.metrics.value}</div>
                        <div className="text-xs text-muted-foreground">{industry.metrics.label}</div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.cases.map((c) => (
                        <div key={c} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{c}</span>
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

      {/* How it works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Как работает робот для звонков</h2>
            <p className="text-xl text-muted-foreground">
              Запуск за 7-14 дней. Прозрачный процесс от аудита до работающей системы.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-slate-200 dark:text-slate-800 mb-3">{step.number}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium mb-3">
                  {step.duration}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Результаты клиентов</h2>
            <p className="text-xl text-slate-300">Реальные кейсы компаний, которые внедрили робота для звонков.</p>
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
                    <div className="text-2xl font-bold text-cyan-400">{t.metric.value}</div>
                    <div className="text-xs text-slate-400">{t.metric.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Интеграции</h2>
            <p className="text-xl text-muted-foreground">
              Робот работает с вашей существующей инфраструктурой. Подключаем за 1-3 дня.
            </p>
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

      {/* Internal links */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Смежные решения</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Робот для продаж", href: "/solutions/robot-dlya-prodazh", desc: "Ведёт клиента от вопроса до оплаты" },
              { title: "Робот оператор", href: "/solutions/robot-operator", desc: "Полная обработка входящих обращений" },
              { title: "Виртуальный оператор", href: "/solutions/virtual-operator", desc: "AI-оператор нового поколения" },
              { title: "Обработка заявок", href: "/solutions/obrabotka-zayavok", desc: "Автоматический приём и маршрутизация" },
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
              <Card key={idx} className={`relative ${plan.highlight ? 'border-blue-500 shadow-lg ring-2 ring-blue-500' : ''}`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
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
                        <Check className="w-4 h-4 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.highlight ? "default" : "outline"} onClick={() => openModal("consultation")}>
                    Получить консуль��ацию
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
            <p className="text-xl text-muted-foreground">Технологическое лидерство и экспертиза</p>
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
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === idx ? "rotate-90" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Начните автоматизацию звонков сегодня</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Бесплатная консультация и демо-запуск за 7 дней. Без скрытых платежей и обязательств.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 bg-white text-blue-600 hover:bg-slate-100">
              Получить бесплатную консультацию
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent">
              Смотреть примеры звонков
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">Без обязательств · Демо за 7 дней · NDA по запросу</p>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions locale={locale} currentSlug="robot-dlya-zvonkov" />
    </div>
  )
}
