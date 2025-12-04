"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Check,
  Play,
  ShoppingBag,
  Briefcase,
  Truck,
  Phone,
  Shield,
  Zap,
  ChevronRight,
  Quote,
  Calculator,
  Database,
  Brain,
  Settings,
  Globe,
  Receipt,
  UserCheck,
  Package,
  History,
  Layers,
  Mail,
  MessageSquare,
  Building,
  Home,
  Wrench,
  FileText,
  BarChart3,
  Users,
  Target,
  Cpu,
  Lock,
  Headphones,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface M2AgentsPageProps {
  locale: Locale
}

export function M2AgentsPage({ locale }: M2AgentsPageProps) {
  const { openModal } = useCTA()
  const [activeCapability, setActiveCapability] = useState(0)
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [activeIntegration, setActiveIntegration] = useState(0)

  const capabilities = [
    {
      icon: Calculator,
      title: "Работа с прайс-листами",
      description: "Мгновенный просчет из 5000+ позиций с учетом скидок, акций и персональных условий",
      features: [
        "Поиск по 5000+ товарных позиций за секунды",
        "Автоматический расчет скидок и наценок",
        "Учет остатков на складе в реальном времени",
        "Формирование коммерческих предложений",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Truck,
      title: "Логистика и доставка",
      description: "Полный расчет маршрутов, стоимости и подбор транспорта по габаритам груза",
      features: [
        "Расчет километража и оптимальных маршрутов",
        "Подбор транспорта по тоннажу и габаритам",
        "Интеграция с логистическими компаниями",
        "Отслеживание статуса доставки",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Receipt,
      title: "Счета и документы",
      description: "Автоматическое формирование счетов, КП и актов на основе диалога с клиентом",
      features: [
        "Парсинг реквизитов из входящих писем",
        "Генерация счетов в PDF за секунды",
        "Формирование коммерческих предложений",
        "Отправка документов на email клиента",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: UserCheck,
      title: "Узнавание клиентов",
      description: "AI помнит каждого клиента, его историю заказов и предпочтения",
      features: [
        "Идентификация по номеру телефона и email",
        "Полная история заказов и обращений",
        "Персональные рекомендации на основе истории",
        "Автоматическое обновление данных в CRM",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const industries = [
    {
      icon: Wrench,
      name: "Стройматериалы и кровля",
      description:
        "Сложнейшие расчеты: профнастил, металлочерепица, сайдинг, водосточные системы с учетом рабочей ширины",
      metrics: { value: "+183%", label: "рост конверсии" },
      cases: ["Расчет кровли по площади", "Калькуляция заборов", "Подбор доборных элементов", "Формирование счетов"],
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: Building,
      name: "Отели и гостиницы",
      description: "AI-консьерж для бронирования, заказа услуг, информирования гостей 24/7 на любом языке",
      metrics: { value: "24/7", label: "работа без выходных" },
      cases: ["Бронирование номеров", "Заказ room-service", "Информация о городе", "Обратная связь"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Home,
      name: "Недвижимость",
      description: "Квалификация лидов, подбор объектов по параметрам, запись на просмотры",
      metrics: { value: "3x", label: "больше просмотров" },
      cases: ["Подбор объектов", "Запись на показы", "Ответы на вопросы", "Напоминания"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: Truck,
      name: "Логистика",
      description: "Автоматический расчет маршрутов, подбор транспорта и оформление заявок за 3 минуты",
      metrics: { value: "3 мин", label: "на заявку" },
      cases: ["Расчет стоимости", "Подбор авто", "Построение маршрутов", "Отслеживание грузов"],
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: ShoppingBag,
      name: "Оптовая торговля",
      description: "Работа с каталогом 5000+ SKU, персональные цены и автоматизация заказов",
      metrics: { value: "100%", label: "автоматизация" },
      cases: ["Поиск по каталогу", "Персональные скидки", "Резерв на складе", "Повторные заказы"],
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Briefcase,
      name: "B2B услуги",
      description: "Квалификация лидов, запись на встречи и полное сопровождение сделки",
      metrics: { value: "-60%", label: "времени менеджера" },
      cases: ["Квалификация заявок", "Запись на демо", "Отправка КП", "Напоминания"],
      gradient: "from-cyan-500 to-blue-600",
    },
  ]

  const integrations = [
    {
      icon: Phone,
      title: "Телефония",
      description: "Входящие и исходящие звонки с распознаванием речи и синтезом голоса",
      providers: ["Asterisk", "Mango Office", "UIS", "Zadarma"],
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Обработка входящих писем, парсинг реквизитов, отправка документов",
      providers: ["Gmail", "Outlook", "Яндекс Почта", "Mail.ru"],
      color: "bg-blue-500",
    },
    {
      icon: MessageSquare,
      title: "Мессенджеры",
      description: "Единое окно для всех каналов общения с клиентами",
      providers: ["WhatsApp", "Telegram", "VK", "Viber"],
      color: "bg-purple-500",
    },
    {
      icon: Database,
      title: "CRM системы",
      description: "Двусторонняя синхронизация данных и автоматическое обновление",
      providers: ["amoCRM", "Bitrix24", "1C:CRM", "RetailCRM"],
      color: "bg-orange-500",
    },
    {
      icon: Package,
      title: "Складские системы",
      description: "Актуальные остатки, резервирование и автоматические заказы поставщикам",
      providers: ["МойСклад", "1C:УТ", "WMS", "SAP"],
      color: "bg-teal-500",
    },
    {
      icon: FileText,
      title: "Документооборот",
      description: "Генерация счетов, КП, договоров и актов на основе данных из диалога",
      providers: ["PDF", "1C", "Контур.Диадок", "СБИС"],
      color: "bg-red-500",
    },
  ]

  const roofingCaseDetails = {
    title: "Кейс: расчет кровельных материалов",
    subtitle: "Один из сложнейших кейсов внедрения агента",
    description:
      "Научили AI работать с профнастилом, металлочерепицей, сайдингом и водосточными системами. Агент понимает разницу между общей и рабочей шириной листа, рассчитывает количество материала с учетом нахлеста.",
    scenario: [
      {
        step: "Клиент звонит",
        action: "Мне нужно рассчитать забор на участок 150 метров",
        result: "Агент уточняет параметры: марку профлиста, толщину, покрытие, длину листа",
      },
      {
        step: "Сбор данных",
        action: "Профнастил С-8, 0.5 мм, полиэстер, длина 2 метра",
        result: "Агент обращается к прайс-листу и получает цену за м2",
      },
      {
        step: "Расчет",
        action: "Автоматический просчет",
        result: "Делит длину забора на рабочую ширину листа (1150 мм), считает количество и стоимость",
      },
      {
        step: "Доп. материалы",
        action: "Предложение комплектующих",
        result: "Предлагает столбы, лаги, саморезы, заглушки по нормативам расхода",
      },
      {
        step: "Логистика",
        action: "Расчет доставки",
        result: "Считает километраж от МКАД, подбирает машину по тоннажу груза",
      },
      {
        step: "Счет",
        action: "Формирование документов",
        result: "Генерирует счет в PDF, отправляет на email с расшифровкой позиций",
      },
    ],
    metrics: [
      { value: "3 мин", label: "полный расчет" },
      { value: "5000+", label: "позиций в прайсе" },
      { value: "0", label: "ошибок в расчетах" },
      { value: "+183%", label: "рост конверсии" },
    ],
  }

  const platformFeatures = [
    {
      icon: Brain,
      title: "Думающие модели",
      description: "GPT-4, Claude и собственные модели, обученные на вашей специфике",
    },
    {
      icon: Database,
      title: "Интеграция с базами",
      description: "1C, МойСклад, любые ERP и CRM системы через API",
    },
    {
      icon: Globe,
      title: "Омниканальность",
      description: "Телефония, WhatsApp, Telegram, email, сайт в одном окне",
    },
    {
      icon: Settings,
      title: "SaaS-платформа",
      description: "Конструктор для создания агентов без программирования",
    },
    {
      icon: History,
      title: "Память клиентов",
      description: "Полная история взаимодействий и персонализация",
    },
    {
      icon: Layers,
      title: "Масштабирование",
      description: "От 10 до 10 000 диалогов одновременно",
    },
  ]

  const stats = [
    { value: "5000+", label: "Позиций в прайсе", icon: Package },
    { value: "<3 сек", label: "Расчет стоимости", icon: Zap },
    { value: "100%", label: "Автоматизация возможна", icon: Target },
    { value: "99.9%", label: "Uptime", icon: Shield },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Погружение в бизнес",
      duration: "2-3 дня",
      description:
        "Изучаем вашу специфику: товары, услуги, скрипты продаж, частые вопросы клиентов, прайс-листы и бизнес-логику.",
    },
    {
      number: "02",
      title: "Настройка AI",
      duration: "5-7 дней",
      description: "Обучаем агента вашим товарам, ценам, условиям. Настраиваем интеграции с CRM, 1C, телефонией.",
    },
    {
      number: "03",
      title: "Тестовый запуск",
      duration: "3-5 дней",
      description: "Пилот на реальных клиентах с контролем качества. Доработка сценариев по результатам.",
    },
    {
      number: "04",
      title: "Полный запуск",
      duration: "Постоянно",
      description: "Передача в эксплуатацию, мониторинг, аналитика и постоянное улучшение на основе данных.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Агент за месяц обработал 3000+ заявок на расчет профлиста. Конверсия в продажу выросла с 12% до 34%. Менеджеры теперь занимаются только крупными сделками.",
      author: "Дмитрий Козлов",
      position: "Коммерческий директор",
      company: "МеталлПром",
      metric: { value: "+183%", label: "рост конверсии" },
    },
    {
      quote:
        "AI сам рассчитывает маршруты, подбирает машины по тоннажу и оформляет заявки. Время обработки заказа сократилось с 40 минут до 3.",
      author: "Елена Сидорова",
      position: "Руководитель логистики",
      company: "ТрансЛогистик",
      metric: { value: "3 мин", label: "на заявку" },
    },
    {
      quote:
        "Полностью заменили ночную смену операторов. AI-консьерж отвечает гостям 24/7 на 5 языках, бронирует услуги и собирает отзывы.",
      author: "Марина Волкова",
      position: "Управляющая",
      company: "Отель Премиум",
      metric: { value: "24/7", label: "без выходных" },
    },
  ]

  const fullAutomationCases = [
    {
      title: "Прием и обработка заявок",
      description: "100% входящих обращений обрабатываются без участия менеджера",
      icon: Headphones,
    },
    {
      title: "Расчет стоимости",
      description: "Мгновенный просчет из прайса с учетом всех параметров",
      icon: Calculator,
    },
    {
      title: "Формирование документов",
      description: "Счета, КП и договоры генерируются автоматически",
      icon: FileText,
    },
    {
      title: "Логистика",
      description: "Расчет доставки и подбор транспорта без участия логиста",
      icon: Truck,
    },
    {
      title: "Работа с CRM",
      description: "Создание сделок, задач и обновление данных клиентов",
      icon: Database,
    },
    {
      title: "Отчетность",
      description: "Автоматические отчеты по продажам и эффективности",
      icon: BarChart3,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/80">Платформа нового поколения</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              AI-агенты которые
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                продают за вас
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              До 100% автоматизации продаж. Мгновенный расчет из 5000+ позиций, формирование счетов, логистика. Есть
              кейсы полной замены отдела продаж.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => openModal("consultation")}
                className="h-14 px-8 text-base bg-white text-slate-900 hover:bg-slate-100 cursor-pointer"
              >
                Запросить демо
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 bg-transparent cursor-pointer"
              >
                <Play className="mr-2 h-5 w-5" />
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

      {/* Platform Features Grid */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium mb-4">
              <Wrench className="w-4 h-4" />
              Сложнейший кейс
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{roofingCaseDetails.title}</h2>
            <p className="text-lg text-muted-foreground">{roofingCaseDetails.description}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-900 rounded-xl p-6 text-white">
                <div className="text-sm text-slate-400 mb-4">Пример диалога с AI-агентом</div>
                <div className="space-y-4">
                  {roofingCaseDetails.scenario.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="text-cyan-400 text-sm font-medium mb-1">{item.step}</div>
                        <div className="text-slate-300 text-sm mb-1">{item.action}</div>
                        <div className="text-slate-500 text-xs">{item.result}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 text-white">
                <h4 className="font-semibold mb-4">Результаты внедрения</h4>
                <div className="grid grid-cols-2 gap-4">
                  {roofingCaseDetails.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-sm text-white/70">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
                <h4 className="font-semibold mb-3">Что умеет агент</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Различает общую и рабочую ширину листа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Считает количество листов с учетом нахлеста</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Предлагает доборные элементы по нормам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Рассчитывает доставку по километражу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Формирует счет и отправляет на email</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Есть кейсы полной автоматизации
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">До 100% автоматизации продаж</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Мы не просто помогаем менеджерам. В ряде бизнесов агенты полностью заменили отдел продаж без потери
              качества.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fullAutomationCases.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Интеграция в вашу инфраструктуру</h2>
            <p className="text-lg text-muted-foreground">
              Агент подключается к телефонии, почте, мессенджерам, CRM и складским системам. Все настраивается под вашу
              структуру бизнеса.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((integration) => {
              const Icon = integration.icon
              return (
                <Card key={integration.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${integration.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{integration.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{integration.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {integration.providers.map((provider) => (
                            <span
                              key={provider}
                              className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800"
                            >
                              {provider}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-slate-100 dark:bg-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold mb-1">Нужна кастомная интеграция?</h4>
              <p className="text-sm text-muted-foreground">Подключим агента к любым вашим системам через API</p>
            </div>
            <Button onClick={() => openModal("consultation")} className="cursor-pointer">
              Обсудить интеграцию
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что умеет AI-агент</h2>
            <p className="text-lg text-muted-foreground">
              Полная автоматизация продаж: от первого звонка до выставления счета и контроля оплаты.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon
                return (
                  <button
                    key={cap.title}
                    onClick={() => setActiveCapability(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer ${
                      activeCapability === idx
                        ? `bg-gradient-to-r ${cap.color} text-white shadow-lg`
                        : "bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg ${activeCapability === idx ? "bg-white/20" : "bg-slate-100 dark:bg-slate-700"}`}
                      >
                        <Icon className={`w-5 h-5 ${activeCapability === idx ? "text-white" : ""}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{cap.title}</h3>
                        <p
                          className={`text-sm mt-1 ${activeCapability === idx ? "text-white/80" : "text-muted-foreground"}`}
                        >
                          {cap.description}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${activeCapability === idx ? "rotate-90" : ""}`}
                      />
                    </div>
                  </button>
                )
              })}
            </div>

            <div className={`rounded-xl p-6 bg-gradient-to-br ${capabilities[activeCapability].color} text-white`}>
              {(() => {
                const Icon = capabilities[activeCapability].icon
                return (
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7" />
                  </div>
                )
              })()}
              <h3 className="text-xl font-bold mb-3">{capabilities[activeCapability].title}</h3>
              <p className="text-white/80 mb-6">{capabilities[activeCapability].description}</p>

              <ul className="space-y-3">
                {capabilities[activeCapability].features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => openModal("consultation")}
                className="w-full mt-6 bg-white text-slate-900 hover:bg-slate-100 cursor-pointer"
              >
                Обсудить внедрение
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовые решения для отраслей</h2>
            <p className="text-lg text-muted-foreground">
              AI-агенты с глубоким пониманием специфики вашего бизнеса, обученные на реальных кейсах.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Card key={industry.name} className="group overflow-hidden hover:shadow-lg transition-all">
                  <div className={`h-1.5 bg-gradient-to-r ${industry.gradient}`} />
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${industry.gradient}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">{industry.metrics.value}</div>
                        <div className="text-xs text-muted-foreground">{industry.metrics.label}</div>
                      </div>
                    </div>

                    <h3 className="font-semibold mb-1">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{industry.description}</p>

                    <div className="grid grid-cols-2 gap-1.5">
                      {industry.cases.map((useCase) => (
                        <div key={useCase} className="flex items-center gap-1.5 text-xs">
                          <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{useCase}</span>
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
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Запуск за 2-3 недели</h2>
            <p className="text-lg text-muted-foreground">
              Прозрачный процесс от первой встречи до работающего агента с гарантией результата.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-4xl font-bold text-slate-200 dark:text-slate-800 mb-2">{step.number}</div>
                <div className="inline-block px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium mb-2">
                  {step.duration}
                </div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Результаты клиентов</h2>
            <p className="text-lg text-slate-300">
              Реальные кейсы компаний, которые автоматизировали продажи с M2 Agents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10"
              >
                <Quote className="w-6 h-6 text-white/20 mb-3" />
                <blockquote className="text-sm leading-relaxed mb-4">{testimonial.quote}</blockquote>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-slate-400">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-cyan-400">{testimonial.metric.value}</div>
                    <div className="text-xs text-slate-400">{testimonial.metric.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                  <Settings className="w-4 h-4" />
                  Индивидуальная разработка
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Агент под вашу структуру бизнеса</h2>
                <p className="text-muted-foreground mb-6">
                  Мы знаем, какой агент, какая модель и какой стек технологий подойдет именно для вашей задачи. Все
                  решения индивидуальны и согласовываются на основе анализа вашего бизнеса.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span>Анализ бизнес-процессов и точек автоматизации</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span>Подбор оптимальной AI-модели под задачу</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span>Интеграция с вашими системами и базами данных</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span>Обучение на ваших скриптах и корпоративных стандартах</span>
                  </li>
                </ul>
                <Button size="lg" onClick={() => openModal("consultation")} className="cursor-pointer">
                  Обсудить проект
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-lg">
                    <Cpu className="w-8 h-8 text-blue-500 mb-2" />
                    <div className="font-semibold">GPT-4 / Claude</div>
                    <div className="text-xs text-muted-foreground">Лучшие языковые модели</div>
                  </div>
                  <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-lg">
                    <Lock className="w-8 h-8 text-green-500 mb-2" />
                    <div className="font-semibold">On-premise</div>
                    <div className="text-xs text-muted-foreground">Размещение на ваших серверах</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-lg">
                    <Database className="w-8 h-8 text-purple-500 mb-2" />
                    <div className="font-semibold">Ваши базы данных</div>
                    <div className="text-xs text-muted-foreground">Прямое подключение к 1C, CRM</div>
                  </div>
                  <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-lg">
                    <Users className="w-8 h-8 text-orange-500 mb-2" />
                    <div className="font-semibold">Команда экспертов</div>
                    <div className="text-xs text-muted-foreground">Сопровождение проекта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы автоматизировать продажи?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Оставьте заявку на бесплатную консультацию. Покажем демо и рассчитаем окупаемость для вашего бизнеса.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => openModal("consultation")}
              className="h-14 px-8 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
            >
              Получить консультацию
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent cursor-pointer">
              <Phone className="mr-2 h-5 w-5" />
              +7 (495) 123-45-67
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Бесплатная консультация</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Демо на ваших данных</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Расчет ROI</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default M2AgentsPage
