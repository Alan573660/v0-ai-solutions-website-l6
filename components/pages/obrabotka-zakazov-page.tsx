"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight, Check, Zap, ChevronRight, Quote,
  Package, Truck, Clock, BarChart3, Shield, Database,
  Building2, ShoppingBag, FileText, CreditCard,
  AlertCircle, CheckCircle2, RefreshCw, Settings,
  Bell, Route, Warehouse, MapPin,
} from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"

export function ObrabotkZakazovPage() {
  const { openModal } = useCTA()
  const [activeStep, setActiveStep] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { value: "100%", label: "Заказов обработано" },
    { value: "<5 мин", label: "Полный цикл приёма" },
    { value: "-90%", label: "Ошибок в данных" },
    { value: "24/7", label: "Приём заказов" },
  ]

  const orderSteps = [
    {
      icon: Package,
      title: "Приём и валидация",
      description: "Принимает заказ из любого канала, проверяет полноту данных и корректность реквизитов",
      details: ["Заказ с сайта, телефона, email, мессенджеров", "Проверка обязательных полей", "Валидация адреса и контактных данных", "Определение типа и размера заказа"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Warehouse,
      title: "Проверка наличия",
      description: "Проверяет остатки на складе в реальном времени, резервирует товар или ставит в лист ожидания",
      details: ["Запрос остатков в реальном времени", "Резервирование товарных позиций", "Подбор замены при отсутствии", "Уведомление о листе ожидания"],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FileText,
      title: "Формирование документов",
      description: "Автоматически создаёт счёт, накладную, акт и отправляет клиенту по нужному каналу",
      details: ["Счёт на оплату с реквизитами", "Товарная накладная / акт", "Отправка на email или в мессенджер", "Хранение в архиве с поиском"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Truck,
      title: "Передача в логистику",
      description: "Передаёт заказ в службу доставки, рассчитывает стоимость и контролирует статус",
      details: ["Выбор оптимальной службы доставки", "Расчёт стоимости и сроков", "Создание заявки у перевозчика", "Трекинг и уведомление клиента"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const benefits = [
    { icon: Zap, title: "Скорость обработки", description: "От приёма до подтверждения заказа — менее 5 минут без участия менеджера" },
    { icon: CheckCircle2, title: "Нет ошибок в данных", description: "Автоматическая валидация устраняет 90% ошибок, которые возникают при ручном вводе" },
    { icon: Clock, title: "Работа 24/7", description: "Принимает и обрабатывает заказы в нерабочее время, без потерь и задержек" },
    { icon: BarChart3, title: "Полная аналитика", description: "Статус каждого заказа в реальном времени, воронка, конверсия, средний чек" },
    { icon: Shield, title: "Надёжность", description: "Резервирование товара, контроль дублей, защита от повторных заказов" },
    { icon: Settings, title: "Гибкая настройка", description: "Правила обработки под любую бизнес-логику: маршруты, скидки, условия доставки" },
  ]

  const industries = [
    { icon: ShoppingBag, name: "E-commerce и маркетплейсы", description: "Автоматическая обработка заказов с сайта и маркетплейсов, интеграция со складом и доставкой", metrics: { value: "10x", label: "скорость обработки" }, gradient: "from-blue-500 to-indigo-600" },
    { icon: Building2, name: "Оптовая торговля", description: "Обработка крупных B2B-заказов с проверкой остатков, персональных цен и лимитов кредита", metrics: { value: "-80%", label: "ручного труда" }, gradient: "from-green-500 to-teal-600" },
    { icon: Truck, name: "Производство и поставки", description: "Приём заявок от дилеров, контроль производственного плана, автоформирование спецификаций", metrics: { value: "24/7", label: "приём заказов" }, gradient: "from-orange-500 to-amber-600" },
    { icon: MapPin, name: "Доставка еды и FMCG", description: "Высокоскоростная обработка потока заказов, маршрутизация по зонам, расчёт времени доставки", metrics: { value: "<2 мин", label: "время реакции" }, gradient: "from-purple-500 to-violet-600" },
  ]

  const processSteps = [
    { number: "01", title: "Аудит процесса заказов", duration: "1-2 дня", description: "Анализируем текущий процесс, источники заказов, типичные ошибки и узкие места в обработке." },
    { number: "02", title: "Настройка правил", duration: "3-5 дней", description: "Конфигурируем правила валидации, резервирования, формирования документов под вашу логику." },
    { number: "03", title: "Интеграция систем", duration: "3-5 дней", description: "Подключаем CRM, склад, бухгалтерию и службы доставки. Тестируем каждый сценарий." },
    { number: "04", title: "Запуск и поддержка", duration: "Постоянно", description: "Запускаем, мониторим SLA, оптимизируем правила и добавляем новые каналы по мере роста." },
  ]

  const testimonials = [
    {
      quote: "Раньше менеджеры тратили по 40 минут на каждый крупный заказ: проверить наличие, выставить счёт, передать на склад. Теперь система делает это за 4 минуты. Обрабатываем в 8 раз больше заказов тем же штатом.",
      author: "Сергей Белов", position: "Директор по операциям", company: "ОптТрейд",
      metric: { value: "8x", label: "больше заказов" },
    },
    {
      quote: "Внедрили автоматическую обработку заказов с 4 маркетплейсов. Ошибки в адресах и данных клиентов снизились на 95%. Возвраты из-за неправильных данных упали на 70%.",
      author: "Ольга Кузнецова", position: "Руководитель e-com", company: "МодаОнлайн",
      metric: { value: "-95%", label: "ошибки в данных" },
    },
  ]

  const faqs = [
    { question: "С какими системами интегрируется обработка заказов?", answer: "Интегрируемся с любыми CRM, складскими системами (1C, МойСклад, Odoo), маркетплейсами (Wildberries, Ozon, Яндекс.Маркет), службами доставки (СДЭК, Boxberry, Почта России) через API или готовые коннекторы." },
    { question: "Как обрабатываются заказы при отсутствии товара на складе?", answer: "Система может автоматически: поставить заказ в лист ожидания, предложить замену из аналогов, разбить заказ на частичные поставки или отменить и уведомить клиента. Логика настраивается под ваши правила." },
    { question: "Что происходит при ошибках в данных клиента?", answer: "Система валидирует данные при поступлении: адрес, телефон, ИНН компании. При ошибках автоматически запрашивает уточнение у клиента через удобный для него канал перед передачей в обработку." },
    { question: "Можно ли обрабатывать B2B-заказы с персональными ценами?", answer: "Да, система поддерживает персональные прайс-листы, договорные скидки, кредитные лимиты и специальные условия для корпоративных клиентов. Интегрируется с вашей системой ценообразования." },
    { question: "Как контролируется статус каждого заказа?", answer: "В едином дашборде видны все заказы, их статус на каждом этапе, SLA и исполнители. Клиент получает автоуведомления при смене статуса. Просроченные заказы эскалируются менеджерам." },
    { question: "Как долго занимает запуск?", answer: "Стандартный запуск: 10-14 дней. Для простых случаев (1-2 канала, простая логика) — от 5-7 дней. Делаем поэтапно, не останавливая текущую работу." },
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
              <span className="text-sm text-white/80">Автоматизация обработки заказов</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Обработка заказов
              <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent mt-2">
                за минуты, не часы
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Полный цикл: приём, проверка наличия, формирование документов и передача в доставку. Без ошибок, без задержек, без участия менеджера.
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Где теряются деньги при ручной обработке</h2>
            <p className="text-xl text-muted-foreground">Каждый ручной шаг — это задержка, ошибка и недовольный клиент.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Медленная обработка", desc: "Ручная обработка одного заказа занимает 20-60 минут. Клиент ждёт и злится" },
              { icon: AlertCircle, title: "Ошибки в данных", desc: "До 15% заказов содержат ошибки в адресах, реквизитах или составе — приводят к возвратам" },
              { icon: RefreshCw, title: "Дубли и перепутанные заказы", desc: "Один заказ приходит из разных каналов, создаётся дубль и отгружается дважды" },
              { icon: BarChart3, title: "Нет видимости", desc: "Невозможно понять: сколько заказов в очереди, где каждый из них и когда будет доставлен" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Полный цикл обработки заказов</h2>
            <p className="text-xl text-muted-foreground">От поступления до отгрузки — каждый этап автоматизирован и контролируется.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              {orderSteps.map((step, idx) => {
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
            <div className={`rounded-2xl p-8 bg-gradient-to-br ${orderSteps[activeStep].color} text-white`}>
              {(() => { const Icon = orderSteps[activeStep].icon; return <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6"><Icon className="w-8 h-8" /></div> })()}
              <h3 className="text-2xl font-bold mb-4">{orderSteps[activeStep].title}</h3>
              <p className="text-white/80 mb-8">{orderSteps[activeStep].description}</p>
              <ul className="space-y-4">
                {orderSteps[activeStep].details.map((d) => (
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Преимущества автоматической обработки</h2>
            <p className="text-xl text-muted-foreground">Что получает бизнес после внедрения системы.</p>
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
            <p className="text-xl text-muted-foreground">Система адаптируется под любую модель обработки заказов.</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Как внедряем систему</h2>
            <p className="text-xl text-muted-foreground">Запуск за 10-14 дней без остановки работы.</p>
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
            <p className="text-xl text-slate-300">Реальные кейсы компаний, которые автоматизировали обработку заказов.</p>
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
              { title: "Обработка заявок", href: "/solutions/obrabotka-zayavok", desc: "Квалификация входящих обращений" },
              { title: "Выставление счетов", href: "/solutions/vystavlenie-schetov", desc: "Автоматическая генерация документов" },
              { title: "Расчёт доставки", href: "/solutions/raschet-dostavki", desc: "Оптимизация логистики и маршрутов" },
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

      <section className="py-20 md:py-28 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Автоматизируйте обработку заказов</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Запустите систему за 10-14 дней. Бесплатная консультация и демо.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => openModal("consultation")} className="h-14 px-8 bg-white text-orange-600 hover:bg-slate-100">
              Получить бесплатную консультацию <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent">
              Рассчитать ROI
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">Без обязательств · Запуск за 10-14 дней · NDA по запросу</p>
        </div>
      </section>
    </div>
  )
}
