"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Link from "next/link"
import {
  ArrowRight,
  Play,
  Brain,
  Calculator,
  Package,
  Truck,
  FileText,
  PhoneForwarded,
  UserCheck,
  ShoppingCart,
  Building2,
  Zap,
  Shield,
  Globe,
  ArrowUpRight,
  Check,
  Phone,
  Clock,
  TrendingUp,
  Users,
  BarChart3,
  MessageSquare,
  Mic,
  Cpu,
  Database,
  GitMerge,
  Star,
  CheckCircle2,
  X,
  PhoneCall,
  Pause,
  RotateCcw,
  Volume2,
  Home,
} from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"

type Locale = "ru" | "en" | "es" | "de" | "nl" | "fr"

// ─── Reveal animation ───────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.62s ease ${delay}ms, transform 0.62s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function SectionBadge({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6 ${light ? "border-white/20 text-white/60 bg-white/5" : "border-primary/20 text-primary bg-primary/5"}`}>
      {children}
    </div>
  )
}

// ─── Full i18n Translations ──────────────────────────────────────────────────
const translations = {
  ru: {
    badge: "Голосовой AI · Автоматизация продаж",
    heroTitle: "Голосовой AI-менеджер,",
    heroHighlight: " который продаёт",
    heroSubtitle: "Полностью автоматизированная система продаж. Принимает звонки, ведёт диалог, рассчитывает стоимость и выставляет счёт — за 30 секунд, без единого оператора.",
    heroCta: "Получить демо",
    heroCtaSecondary: "Смотреть пример диалога",
    stats: [
      { value: "50+", label: "компаний используют" },
      { value: "98%", label: "успешных звонков" },
      { value: "24/7", label: "без выходных" },
      { value: "30 сек", label: "от звонка до счёта" },
    ],
    howTitle: "Как это выглядит в реальности",
    howDesc: "Нажмите «Запустить» и посмотрите, как AI ведёт реальный диалог",
    demoStart: "Запустить",
    demoPause: "Пауза",
    demoRestart: "Заново",
    demoPlaceholder: "Нажмите «Запустить» чтобы увидеть как AI ведёт реальный диалог",
    demoStatus: "Онлайн · обрабатывает звонки",
    demoTime: "47 сек",
    demoResult: "Счёт выставлен",
    demoNoHuman: "Без участия человека",
    dialogScript: [
      { role: "client", text: "Добрый день! Мне нужно заказать 50 квадратных метров ламината, артикул ЛМ-2024, и доставку в Подмосковье." },
      { role: "ai", text: "Здравствуйте! Нашёл артикул ЛМ-2024 — ламинат 32 класса, цена 890 руб/м². 50 м² = 44 500 руб. Доставка в Подмосковье — 2 500 руб. Итого 47 000 руб. Оформить счёт?" },
      { role: "client", text: "Да, выставьте счёт на ООО Стройторг, ИНН 7712345678." },
      { role: "ai", text: "Счёт сформирован и отправлен на почту. Номер заказа #4821. Доставка через 2 рабочих дня. Что-то ещё?" },
      { role: "client", text: "Всё отлично, спасибо!" },
      { role: "ai", text: "Отлично! Ваш заказ принят в работу. Хорошего дня!" },
    ],
    demoFeatures: [
      { icon: Mic, title: "Распознавание речи 98%", desc: "Понимает акценты, сленг, технические термины", color: "from-violet-500 to-purple-400" },
      { icon: Cpu, title: "Решения в реальном времени", desc: "Обращается к базам данных и CRM во время разговора", color: "from-blue-500 to-cyan-400" },
      { icon: FileText, title: "Документы за 3 секунды", desc: "Счёт, накладная или акт — моментально", color: "from-emerald-500 to-teal-400" },
      { icon: PhoneCall, title: "Работает параллельно", desc: "Тысячи звонков одновременно, без очереди", color: "from-orange-500 to-amber-400" },
    ],
    featuresTitle: "Что умеет AI-менеджер",
    featuresDesc: "Система не читает скрипты — она думает, считает и принимает решения",
    features: [
      { icon: Brain, title: "Естественный диалог", desc: "Понимает суть разговора, задаёт уточняющие вопросы", color: "from-blue-500 to-cyan-400" },
      { icon: Calculator, title: "Сложные расчёты", desc: "Мгновенно считает площадь, объём, стоимость", color: "from-purple-500 to-pink-400" },
      { icon: Package, title: "Работа с каталогом", desc: "Знает все товары, цены, наличие в реальном времени", color: "from-orange-500 to-amber-400" },
      { icon: Truck, title: "Расчёт доставки", desc: "Определяет вес, габариты, подбирает транспорт", color: "from-green-500 to-emerald-400" },
      { icon: FileText, title: "Выставление счётов", desc: "Формирует счёт, акт, накладную автоматически", color: "from-teal-500 to-cyan-400" },
      { icon: PhoneForwarded, title: "Умная маршрутизация", desc: "Передаёт клиентов нужному менеджеру", color: "from-red-500 to-rose-400" },
      { icon: UserCheck, title: "Помнит клиента", desc: "Хранит историю звонков и покупки", color: "from-violet-500 to-purple-400" },
      { icon: ShoppingCart, title: "Закрывает сделку", desc: "От звонка до оплаты без человека", color: "from-sky-500 to-blue-400" },
    ],
    calcTitle: "Сколько вы сэкономите с AI",
    calcDesc: "Средний клиент сокращает затраты на колл-центр на 60–70% уже в первый месяц",
    calcMetrics: [
      { v: "−70%", l: "расходов на операторов" },
      { v: "0%", l: "пропущенных звонков" },
      { v: "+45%", l: "конверсия в сделку" },
      { v: "1–2 мес.", l: "средняя окупаемость" },
    ],
    calcOperators: "Количество операторов",
    calcCalls: "Звонков в день",
    calcNow: "Сейчас (операторы)",
    calcAI: "С AI менеджером",
    calcMissed: "звонков/день теряется из-за нехватки операторов",
    calcSavings: "Ежемесячная экономия",
    calcROI: "Окупаемость",
    calcMonths: "мес.",
    currency: "₽",
    operatorCostPerMonth: 65000,
    aiCostBase: 45000,
    aiCostPerCall: 12,
    compareTitle: "AI-менеджер vs. Оператор",
    compareDesc: "Прямое сравнение по ключевым метрикам",
    compareParam: "Параметр",
    compareAI: "AI-менеджер",
    compareHuman: "Оператор",
    compareRows: [
      { metric: "Стоимость в месяц", ai: "от 45 000 ₽", human: "от 65 000 ₽ × N", winner: "ai" },
      { metric: "Время ответа", ai: "3 секунды", human: "20–40 секунд", winner: "ai" },
      { metric: "Параллельных звонков", ai: "Неограниченно", human: "1", winner: "ai" },
      { metric: "Режим работы", ai: "24/7/365", human: "8–10 ч. + выходные", winner: "ai" },
      { metric: "Ошибки в расчётах", ai: "Нет", human: "До 12%", winner: "ai" },
      { metric: "Скорость до счёта", ai: "30 секунд", human: "10–30 минут", winner: "ai" },
      { metric: "Обучение", ai: "1 раз настроить", human: "1–3 месяца", winner: "ai" },
      { metric: "Нестандартные задачи", ai: "Ограничено", human: "Высокое", winner: "human" },
    ],
    industriesTitle: "Для каких отраслей подходит",
    industriesDesc: "Готовые сценарии и отраслевая экспертиза",
    industries: [
      { icon: Building2, name: "B2B оптовая торговля", desc: "Обработка заявок, расчёт партий, оформление счетов", metrics: [{ v: "500+", l: "заказов/день" }, { v: "−70%", l: "операторов" }] },
      { icon: Package, name: "Производство", desc: "Конфигурации, расчёт по чертежам, согласование сроков", metrics: [{ v: "1000+", l: "расчётов/день" }, { v: "+300%", l: "скорость" }] },
      { icon: Truck, name: "Логистика", desc: "Расчёт доставки, выбор маршрута, отслеживание", metrics: [{ v: "200+", l: "заявок/день" }, { v: "+45%", l: "конверсия" }] },
      { icon: Globe, name: "E-commerce", desc: "Консультации, проверка наличия, апсейл и возвраты", metrics: [{ v: "98%", l: "NPS" }, { v: "−60%", l: "CAC" }] },
      { icon: BarChart3, name: "Финансы и страхование", desc: "Квалификация лидов, консультация, запись на встречу", metrics: [{ v: "3x", l: "конверсия" }, { v: "−50%", l: "стоимость лида" }] },
      { icon: Users, name: "Услуги и консалтинг", desc: "Запись, квалификация, отправка КП и расчётов", metrics: [{ v: "24/7", l: "доступность" }, { v: "+200%", l: "охват" }] },
    ],
    automateBtn: "Автоматизировать этот процесс",
    pricingTitle: "Стоимость внедрения",
    pricingDesc: "Прозрачное ценообразование без скрытых комиссий",
    plans: [
      {
        name: "Старт",
        price: "от 45 000",
        period: "₽/мес",
        desc: "Для малого бизнеса и стартапов",
        features: ["До 500 звонков/мес", "1 сценарий диалога", "Интеграция с 1 CRM", "Email-поддержка", "14 дней бесплатно"],
        popular: false,
        cta: "Начать",
      },
      {
        name: "Бизнес",
        price: "от 120 000",
        period: "₽/мес",
        desc: "Для среднего бизнеса с высокой нагрузкой",
        features: ["До 3 000 звонков/мес", "3 сценария диалогов", "Все интеграции", "Выделенный менеджер", "Обучение команды", "SLA 99.5%"],
        popular: true,
        cta: "Выбрать",
      },
      {
        name: "Enterprise",
        price: "Индивидуально",
        period: "",
        desc: "Для крупного бизнеса и холдингов",
        features: ["Неограниченные звонки", "Любые сценарии", "Кастомные интеграции", "24/7 поддержка", "SLA 99.9%", "On-premise опция"],
        popular: false,
        cta: "Связаться",
      },
    ],
    popularChoice: "Популярный выбор",
    casesTitle: "Реальные результаты",
    casesDesc: "Что произошло у клиентов после внедрения",
    cases: [
      {
        company: "Оптовая торговля стройматериалами",
        industry: "B2B, Москва",
        before: "12 операторов, 40% пропущенных звонков",
        after: "2 оператора (для сложных), 0% пропущенных",
        metrics: [{ v: "−780k ₽", l: "экономия/мес" }, { v: "+68%", l: "конверсия" }, { v: "3 нед.", l: "внедрение" }],
        quote: "AI знает наш прайс лучше, чем половина менеджеров. Он не устаёт, не ошибается в расчётах и работает даже ночью.",
      },
      {
        company: "Производитель металлоконструкций",
        industry: "Производство, СПб",
        before: "Расчёт заявки — до 2 часов, потеря клиентов",
        after: "Расчёт за 40 секунд, счёт сразу на почте",
        metrics: [{ v: "×4", l: "скорость" }, { v: "+120%", l: "выручка" }, { v: "1 мес.", l: "окупаемость" }],
        quote: "Конкуренты до сих пор звонят клиенту через час. Мы отправляем счёт пока они набирают номер.",
      },
      {
        company: "Транспортная компания",
        industry: "Логистика, Федеральная сеть",
        before: "Колл-центр 20 человек, пиковые нагрузки",
        after: "AI обрабатывает 85% запросов самостоятельно",
        metrics: [{ v: "−65%", l: "затраты ФОТ" }, { v: "200+", l: "заявок/час" }, { v: "98%", l: "NPS" }],
        quote: "В пиковый сезон раньше нам не хватало людей. Теперь AI справляется с любым объёмом.",
      },
    ],
    before: "Было",
    after: "Стало",
    timelineTitle: "Как проходит внедрение",
    timelineDesc: "От первого созвона до живых звонков — за 20–30 рабочих дней",
    phases: [
      { num: "01", title: "Аудит и анализ", duration: "1–2 нед.", desc: "Изучаем продажи, типичные запросы, каталог и прайс.", icon: MessageSquare },
      { num: "02", title: "Проектирование", duration: "1–2 нед.", desc: "Строим сценарии диалогов и логику интеграций.", icon: GitMerge },
      { num: "03", title: "Разработка", duration: "2–4 нед.", desc: "Обучаем AI, настраиваем интеграции, тестируем.", icon: Cpu },
      { num: "04", title: "Запуск", duration: "1 нед.", desc: "Пилот, контроль качества, обучение команды.", icon: Zap },
    ],
    whyTitle: "Почему M2 AI Solutions",
    whyDesc: "Не интегратор, а разработчик собственной платформы",
    why: [
      { icon: Cpu, title: "Собственная платформа", desc: "Разрабатываем технологию сами. Полный контроль над AI-моделями." },
      { icon: Globe, title: "Мультиязычность", desc: "6 языков из коробки. Автоопределение языка собеседника." },
      { icon: Zap, title: "Запуск за 20–30 дней", desc: "Готовые коннекторы к Bitrix24, amoCRM, 1C, Salesforce и 50+ системам." },
      { icon: Shield, title: "Безопасность данных", desc: "ISO 27001, GDPR, 152-ФЗ. Опция on-premise." },
      { icon: Database, title: "Обучение на ваших данных", desc: "AI обучается на ваших звонках, прайсах и FAQ." },
      { icon: TrendingUp, title: "Гарантия результата", desc: "ROI рассчитываем до старта. Средняя окупаемость 1–2 месяца." },
    ],
    faqTitle: "Частые вопросы",
    faq: [
      { q: "Чем AI-менеджер отличается от обычного голосового бота?", a: "Обычные боты работают по жёстким скриптам и не способны адаптироваться. Наш AI-менеджер понимает суть разговора, ведёт динамический диалог, выполняет сложные расчёты и может полностью закрыть сделку." },
      { q: "Сколько времени занимает внедрение?", a: "Стандартный проект запускается за 20–30 рабочих дней. Сложные проекты с нестандартной логикой — 4–8 недель." },
      { q: "Может ли система полностью заменить операторов?", a: "AI обрабатывает 85–95% типовых звонков самостоятельно. Нестандартные ситуации переводятся к живому менеджеру с контекстом." },
      { q: "Как система интегрируется с CRM?", a: "Поддерживаем Bitrix24, amoCRM, Salesforce, HubSpot, 1C и 50+ систем. Данные синхронизируются автоматически." },
      { q: "Сколько звонков может обрабатывать система?", a: "Система масштабируется горизонтально и не имеет ограничений на параллельные звонки." },
      { q: "Как быстро окупается внедрение?", a: "Средняя окупаемость — 1–2 месяца. Экономия: ФОТ, 0% пропущенных, рост конверсии." },
    ],
    ctaTitle: "Готовы автоматизировать продажи?",
    ctaDesc: "Запустим AI-менеджер для вашего бизнеса. Первая консультация и расчёт ROI — бесплатно.",
    ctaBtn: "Получить демо",
    ctaBtnSecondary: "Рассчитать экономию",
    ctaFooter: "Без обязательств · Демо за 24 часа · NDA по запросу",
    relatedTitle: "Связанные решения",
    related: [
      { name: "AI для бизнеса", href: "/solutions/ai-dlya-biznesa" },
      { name: "AI оператор", href: "/solutions/robot-operator" },
      { name: "Автоматизация продаж", href: "/solutions/automation-sales" },
      { name: "Обработка заявок", href: "/solutions/obrabotka-zayavok" },
      { name: "Выставление счетов", href: "/solutions/vystavlenie-schetov" },
      { name: "AI автоматизация", href: "/solutions/ai-avtomatizaciya-biznesa" },
    ],
  },
  en: {
    badge: "Voice AI · Sales Automation",
    heroTitle: "Voice AI Manager",
    heroHighlight: " that sells",
    heroSubtitle: "Fully automated sales system. Takes calls, conducts dialogue, calculates costs and issues invoices — in 30 seconds, without a single operator.",
    heroCta: "Get Demo",
    heroCtaSecondary: "Watch Example Dialogue",
    stats: [
      { value: "50+", label: "companies use it" },
      { value: "98%", label: "successful calls" },
      { value: "24/7", label: "no holidays" },
      { value: "30 sec", label: "from call to invoice" },
    ],
    howTitle: "See how it works in reality",
    howDesc: "Click \"Start\" and watch how AI conducts a real estate consultation dialogue",
    demoStart: "Start",
    demoPause: "Pause",
    demoRestart: "Restart",
    demoPlaceholder: "Click \"Start\" to see how AI conducts a real dialogue",
    demoStatus: "Online · handling calls",
    demoTime: "52 sec",
    demoResult: "Viewing scheduled",
    demoNoHuman: "No human involved",
    dialogScript: [
      { role: "client", text: "Hi, I'm looking for a 2-bedroom apartment in Barcelona, preferably near the beach with a budget around 350,000 euros." },
      { role: "ai", text: "Hello! I found 12 properties matching your criteria in Barceloneta and Poblenou areas. The best match is a 75m² apartment with sea view at Passeig Marítim, priced at 340,000€. Would you like to schedule a viewing?" },
      { role: "client", text: "Yes, that sounds perfect. What about parking and community fees?" },
      { role: "ai", text: "This property includes a parking space and storage unit. Monthly community fees are 120€. The building has a swimming pool and 24h concierge. Available viewing slots this week: Thursday 10am or Saturday 2pm. Which works better?" },
      { role: "client", text: "Saturday at 2pm would be great." },
      { role: "ai", text: "Perfect! Viewing confirmed for Saturday at 2pm at Passeig Marítim 45, Barcelona. You'll receive a confirmation email with directions and agent contact. Anything else I can help with?" },
    ],
    demoFeatures: [
      { icon: Mic, title: "98% Speech Recognition", desc: "Understands accents, slang, technical terms", color: "from-violet-500 to-purple-400" },
      { icon: Cpu, title: "Real-time Decisions", desc: "Accesses databases and CRM during calls", color: "from-blue-500 to-cyan-400" },
      { icon: FileText, title: "Documents in 3 Seconds", desc: "Invoices, contracts — instantly", color: "from-emerald-500 to-teal-400" },
      { icon: PhoneCall, title: "Parallel Processing", desc: "Thousands of calls simultaneously", color: "from-orange-500 to-amber-400" },
    ],
    featuresTitle: "What AI Manager Can Do",
    featuresDesc: "The system doesn't read scripts — it thinks, calculates and makes decisions",
    features: [
      { icon: Brain, title: "Natural Dialogue", desc: "Understands context, asks clarifying questions", color: "from-blue-500 to-cyan-400" },
      { icon: Calculator, title: "Complex Calculations", desc: "Instantly calculates area, volume, cost", color: "from-purple-500 to-pink-400" },
      { icon: Package, title: "Catalog Management", desc: "Knows all products, prices, availability", color: "from-orange-500 to-amber-400" },
      { icon: Truck, title: "Delivery Calculation", desc: "Determines weight, dimensions, transport", color: "from-green-500 to-emerald-400" },
      { icon: FileText, title: "Invoice Generation", desc: "Creates invoices, acts, documents automatically", color: "from-teal-500 to-cyan-400" },
      { icon: PhoneForwarded, title: "Smart Routing", desc: "Transfers to the right manager", color: "from-red-500 to-rose-400" },
      { icon: UserCheck, title: "Customer Memory", desc: "Stores call history and purchases", color: "from-violet-500 to-purple-400" },
      { icon: ShoppingCart, title: "Closes Deals", desc: "From call to payment without humans", color: "from-sky-500 to-blue-400" },
    ],
    calcTitle: "How Much You'll Save with AI",
    calcDesc: "Average client reduces call center costs by 60–70% in the first month",
    calcMetrics: [
      { v: "−70%", l: "operator costs" },
      { v: "0%", l: "missed calls" },
      { v: "+45%", l: "conversion rate" },
      { v: "1–2 mo.", l: "average ROI" },
    ],
    calcOperators: "Number of operators",
    calcCalls: "Calls per day",
    calcNow: "Current (operators)",
    calcAI: "With AI Manager",
    calcMissed: "calls/day lost due to operator shortage",
    calcSavings: "Monthly savings",
    calcROI: "Payback period",
    calcMonths: "mo.",
    currency: "€",
    operatorCostPerMonth: 3500,
    aiCostBase: 990,
    aiCostPerCall: 0.5,
    compareTitle: "AI Manager vs. Human Operator",
    compareDesc: "Direct comparison by key metrics",
    compareParam: "Parameter",
    compareAI: "AI Manager",
    compareHuman: "Operator",
    compareRows: [
      { metric: "Monthly cost", ai: "from €990", human: "from €3,500 × N", winner: "ai" },
      { metric: "Response time", ai: "3 seconds", human: "20–40 seconds", winner: "ai" },
      { metric: "Parallel calls", ai: "Unlimited", human: "1", winner: "ai" },
      { metric: "Working hours", ai: "24/7/365", human: "8–10h + weekends", winner: "ai" },
      { metric: "Calculation errors", ai: "None", human: "Up to 12%", winner: "ai" },
      { metric: "Time to invoice", ai: "30 seconds", human: "10–30 minutes", winner: "ai" },
      { metric: "Training", ai: "One-time setup", human: "1–3 months", winner: "ai" },
      { metric: "Non-standard tasks", ai: "Limited", human: "High", winner: "human" },
    ],
    industriesTitle: "Which Industries Benefit",
    industriesDesc: "Ready-made scenarios and industry expertise",
    industries: [
      { icon: Building2, name: "B2B Wholesale", desc: "Request processing, batch calculations, invoicing", metrics: [{ v: "500+", l: "orders/day" }, { v: "−70%", l: "operators" }] },
      { icon: Home, name: "Real Estate", desc: "Property inquiries, viewing scheduling, qualification", metrics: [{ v: "200+", l: "leads/day" }, { v: "+85%", l: "conversion" }] },
      { icon: Truck, name: "Logistics", desc: "Delivery calculation, route selection, tracking", metrics: [{ v: "200+", l: "requests/day" }, { v: "+45%", l: "conversion" }] },
      { icon: Globe, name: "E-commerce", desc: "Consultations, availability check, upsell", metrics: [{ v: "98%", l: "NPS" }, { v: "−60%", l: "CAC" }] },
      { icon: BarChart3, name: "Finance & Insurance", desc: "Lead qualification, consultation, scheduling", metrics: [{ v: "3x", l: "conversion" }, { v: "−50%", l: "cost per lead" }] },
      { icon: Users, name: "Services & Consulting", desc: "Booking, qualification, proposal sending", metrics: [{ v: "24/7", l: "availability" }, { v: "+200%", l: "reach" }] },
    ],
    automateBtn: "Automate this process",
    pricingTitle: "Implementation Cost",
    pricingDesc: "Transparent pricing with no hidden fees",
    plans: [
      {
        name: "Starter",
        price: "from €990",
        period: "/mo",
        desc: "For small business and startups",
        features: ["Up to 500 calls/mo", "1 dialogue scenario", "1 CRM integration", "Email support", "14 days free trial"],
        popular: false,
        cta: "Start",
      },
      {
        name: "Business",
        price: "from €2,500",
        period: "/mo",
        desc: "For medium business with high load",
        features: ["Up to 3,000 calls/mo", "3 dialogue scenarios", "All integrations", "Dedicated manager", "Team training", "SLA 99.5%"],
        popular: true,
        cta: "Choose",
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        desc: "For large business and holdings",
        features: ["Unlimited calls", "Any scenarios", "Custom integrations", "24/7 support", "SLA 99.9%", "On-premise option"],
        popular: false,
        cta: "Contact",
      },
    ],
    popularChoice: "Most Popular",
    casesTitle: "Real Results",
    casesDesc: "What happened after implementation",
    cases: [
      {
        company: "Real Estate Agency",
        industry: "Real Estate, Barcelona",
        before: "8 agents, 35% missed inquiries",
        after: "2 agents (for complex cases), 0% missed",
        metrics: [{ v: "−€15k", l: "savings/mo" }, { v: "+85%", l: "conversion" }, { v: "3 weeks", l: "implementation" }],
        quote: "AI schedules viewings 24/7 and qualifies leads better than most junior agents. We've doubled our closing rate.",
      },
      {
        company: "Manufacturing Company",
        industry: "Manufacturing, Madrid",
        before: "Quote processing — up to 2 hours, lost clients",
        after: "Quote in 40 seconds, invoice immediately",
        metrics: [{ v: "×4", l: "speed" }, { v: "+120%", l: "revenue" }, { v: "1 mo.", l: "ROI" }],
        quote: "Competitors still call clients after an hour. We send quotes while they're dialing.",
      },
      {
        company: "Logistics Provider",
        industry: "Logistics, European Network",
        before: "Call center 20 people, peak load issues",
        after: "AI handles 85% of requests independently",
        metrics: [{ v: "−65%", l: "labor costs" }, { v: "200+", l: "requests/hr" }, { v: "98%", l: "NPS" }],
        quote: "During peak season we used to be understaffed. Now AI handles any volume.",
      },
    ],
    before: "Before",
    after: "After",
    timelineTitle: "Implementation Process",
    timelineDesc: "From first call to live operation — in 20–30 business days",
    phases: [
      { num: "01", title: "Audit & Analysis", duration: "1–2 weeks", desc: "Study your sales, typical requests, catalog and pricing.", icon: MessageSquare },
      { num: "02", title: "Design", duration: "1–2 weeks", desc: "Build dialogue scenarios and integration logic.", icon: GitMerge },
      { num: "03", title: "Development", duration: "2–4 weeks", desc: "Train AI, configure integrations, test.", icon: Cpu },
      { num: "04", title: "Launch", duration: "1 week", desc: "Pilot, quality control, team training.", icon: Zap },
    ],
    whyTitle: "Why M2 AI Solutions",
    whyDesc: "Not an integrator, but a platform developer",
    why: [
      { icon: Cpu, title: "Own Platform", desc: "We develop the technology ourselves. Full control over AI models." },
      { icon: Globe, title: "Multilingual", desc: "6 languages out of the box. Auto-detection of caller's language." },
      { icon: Zap, title: "Launch in 20–30 Days", desc: "Ready connectors to Bitrix24, amoCRM, Salesforce, HubSpot and 50+ systems." },
      { icon: Shield, title: "Data Security", desc: "ISO 27001, GDPR compliant. On-premise option available." },
      { icon: Database, title: "Training on Your Data", desc: "AI learns from your calls, pricing and FAQ." },
      { icon: TrendingUp, title: "Guaranteed Results", desc: "ROI calculated upfront. Average payback 1–2 months." },
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      { q: "How is AI manager different from a regular voice bot?", a: "Regular bots follow rigid scripts and can't adapt. Our AI manager understands conversation context, conducts dynamic dialogue, performs complex calculations and can fully close deals." },
      { q: "How long does implementation take?", a: "Standard project launches in 20–30 business days. Complex projects with custom logic — 4–8 weeks." },
      { q: "Can the system fully replace operators?", a: "AI handles 85–95% of standard calls independently. Non-standard situations are transferred to live managers with full context." },
      { q: "How does it integrate with CRM?", a: "We support Bitrix24, amoCRM, Salesforce, HubSpot, and 50+ systems. Data syncs automatically." },
      { q: "How many calls can the system handle?", a: "The system scales horizontally and has no limit on parallel calls." },
      { q: "How fast is the ROI?", a: "Average payback — 1–2 months. Savings from: reduced labor costs, 0% missed calls, increased conversion." },
    ],
    ctaTitle: "Ready to Automate Sales?",
    ctaDesc: "We'll launch an AI manager for your business. First consultation and ROI calculation — free.",
    ctaBtn: "Get Demo",
    ctaBtnSecondary: "Calculate Savings",
    ctaFooter: "No obligations · Demo in 24 hours · NDA on request",
    relatedTitle: "Related Solutions",
    related: [
      { name: "AI for Business", href: "/solutions/ai-dlya-biznesa" },
      { name: "AI Operator", href: "/solutions/robot-operator" },
      { name: "Sales Automation", href: "/solutions/automation-sales" },
      { name: "Request Processing", href: "/solutions/obrabotka-zayavok" },
      { name: "Invoice Generation", href: "/solutions/vystavlenie-schetov" },
      { name: "AI Automation", href: "/solutions/ai-avtomatizaciya-biznesa" },
    ],
  },
  es: {
    badge: "IA de Voz · Automatización de Ventas",
    heroTitle: "Gerente de IA de Voz",
    heroHighlight: " que vende",
    heroSubtitle: "Sistema de ventas totalmente automatizado. Atiende llamadas, conduce diálogos, calcula costos y emite facturas — en 30 segundos, sin operador.",
    heroCta: "Obtener Demo",
    heroCtaSecondary: "Ver ejemplo de diálogo",
    stats: [
      { value: "50+", label: "empresas lo usan" },
      { value: "98%", label: "llamadas exitosas" },
      { value: "24/7", label: "sin descanso" },
      { value: "30 seg", label: "de llamada a factura" },
    ],
    howTitle: "Vea cómo funciona en la realidad",
    howDesc: "Haga clic en \"Iniciar\" y vea cómo la IA conduce un diálogo de consulta inmobiliaria",
    demoStart: "Iniciar",
    demoPause: "Pausar",
    demoRestart: "Reiniciar",
    demoPlaceholder: "Haga clic en \"Iniciar\" para ver cómo la IA conduce un diálogo real",
    demoStatus: "En línea · atendiendo llamadas",
    demoTime: "52 seg",
    demoResult: "Visita programada",
    demoNoHuman: "Sin intervención humana",
    dialogScript: [
      { role: "client", text: "Hola, busco un piso de 2 habitaciones en Barcelona, preferiblemente cerca de la playa con un presupuesto de unos 350.000 euros." },
      { role: "ai", text: "¡Hola! He encontrado 12 propiedades que coinciden con sus criterios en Barceloneta y Poblenou. La mejor opción es un piso de 75m² con vistas al mar en Passeig Marítim, con precio de 340.000€. ¿Le gustaría programar una visita?" },
      { role: "client", text: "Sí, suena perfecto. ¿Qué hay del parking y los gastos de comunidad?" },
      { role: "ai", text: "Esta propiedad incluye plaza de parking y trastero. Los gastos de comunidad son 120€/mes. El edificio tiene piscina y portería 24h. Horarios disponibles esta semana: jueves 10h o sábado 14h. ¿Cuál le viene mejor?" },
      { role: "client", text: "El sábado a las 14h estaría bien." },
      { role: "ai", text: "¡Perfecto! Visita confirmada para el sábado a las 14h en Passeig Marítim 45, Barcelona. Recibirá un email de confirmación con indicaciones y contacto del agente. ¿Algo más en lo que pueda ayudarle?" },
    ],
    demoFeatures: [
      { icon: Mic, title: "98% Reconocimiento de Voz", desc: "Entiende acentos, argot, términos técnicos", color: "from-violet-500 to-purple-400" },
      { icon: Cpu, title: "Decisiones en Tiempo Real", desc: "Accede a bases de datos y CRM durante las llamadas", color: "from-blue-500 to-cyan-400" },
      { icon: FileText, title: "Documentos en 3 Segundos", desc: "Facturas, contratos — instantáneamente", color: "from-emerald-500 to-teal-400" },
      { icon: PhoneCall, title: "Procesamiento Paralelo", desc: "Miles de llamadas simultáneamente", color: "from-orange-500 to-amber-400" },
    ],
    featuresTitle: "Qué puede hacer el Gerente IA",
    featuresDesc: "El sistema no lee guiones — piensa, calcula y toma decisiones",
    features: [
      { icon: Brain, title: "Diálogo Natural", desc: "Entiende el contexto, hace preguntas clarificadoras", color: "from-blue-500 to-cyan-400" },
      { icon: Calculator, title: "Cálculos Complejos", desc: "Calcula instantáneamente área, volumen, costo", color: "from-purple-500 to-pink-400" },
      { icon: Package, title: "Gestión de Catálogo", desc: "Conoce todos los productos, precios, disponibilidad", color: "from-orange-500 to-amber-400" },
      { icon: Truck, title: "Cálculo de Entrega", desc: "Determina peso, dimensiones, transporte", color: "from-green-500 to-emerald-400" },
      { icon: FileText, title: "Generación de Facturas", desc: "Crea facturas, documentos automáticamente", color: "from-teal-500 to-cyan-400" },
      { icon: PhoneForwarded, title: "Enrutamiento Inteligente", desc: "Transfiere al gerente correcto", color: "from-red-500 to-rose-400" },
      { icon: UserCheck, title: "Memoria de Cliente", desc: "Guarda historial de llamadas y compras", color: "from-violet-500 to-purple-400" },
      { icon: ShoppingCart, title: "Cierra Ventas", desc: "De la llamada al pago sin humanos", color: "from-sky-500 to-blue-400" },
    ],
    calcTitle: "Cuánto ahorrará con IA",
    calcDesc: "El cliente promedio reduce los costos del call center en un 60–70% en el primer mes",
    calcMetrics: [
      { v: "−70%", l: "costos de operador" },
      { v: "0%", l: "llamadas perdidas" },
      { v: "+45%", l: "tasa de conversión" },
      { v: "1–2 meses", l: "ROI promedio" },
    ],
    calcOperators: "Número de operadores",
    calcCalls: "Llamadas por día",
    calcNow: "Actual (operadores)",
    calcAI: "Con Gerente IA",
    calcMissed: "llamadas/día perdidas por falta de operadores",
    calcSavings: "Ahorro mensual",
    calcROI: "Período de recuperación",
    calcMonths: "meses",
    currency: "€",
    operatorCostPerMonth: 2500,
    aiCostBase: 990,
    aiCostPerCall: 0.5,
    compareTitle: "Gerente IA vs. Operador Humano",
    compareDesc: "Comparación directa por métricas clave",
    compareParam: "Parámetro",
    compareAI: "Gerente IA",
    compareHuman: "Operador",
    compareRows: [
      { metric: "Costo mensual", ai: "desde €990", human: "desde €2.500 × N", winner: "ai" },
      { metric: "Tiempo de respuesta", ai: "3 segundos", human: "20–40 segundos", winner: "ai" },
      { metric: "Llamadas paralelas", ai: "Ilimitadas", human: "1", winner: "ai" },
      { metric: "Horario de trabajo", ai: "24/7/365", human: "8–10h + fines de semana", winner: "ai" },
      { metric: "Errores de cálculo", ai: "Ninguno", human: "Hasta 12%", winner: "ai" },
      { metric: "Tiempo hasta factura", ai: "30 segundos", human: "10–30 minutos", winner: "ai" },
      { metric: "Formación", ai: "Configuración única", human: "1–3 meses", winner: "ai" },
      { metric: "Tareas no estándar", ai: "Limitado", human: "Alto", winner: "human" },
    ],
    industriesTitle: "Qué industrias se benefician",
    industriesDesc: "Escenarios listos y experiencia sectorial",
    industries: [
      { icon: Building2, name: "Comercio B2B", desc: "Procesamiento de solicitudes, cálculos, facturación", metrics: [{ v: "500+", l: "pedidos/día" }, { v: "−70%", l: "operadores" }] },
      { icon: Home, name: "Inmobiliaria", desc: "Consultas de propiedades, programación de visitas", metrics: [{ v: "200+", l: "leads/día" }, { v: "+85%", l: "conversión" }] },
      { icon: Truck, name: "Logística", desc: "Cálculo de envío, selección de ruta, seguimiento", metrics: [{ v: "200+", l: "solicitudes/día" }, { v: "+45%", l: "conversión" }] },
      { icon: Globe, name: "E-commerce", desc: "Consultas, verificación de stock, upsell", metrics: [{ v: "98%", l: "NPS" }, { v: "−60%", l: "CAC" }] },
      { icon: BarChart3, name: "Finanzas y Seguros", desc: "Calificación de leads, consulta, citas", metrics: [{ v: "3x", l: "conversión" }, { v: "−50%", l: "costo por lead" }] },
      { icon: Users, name: "Servicios y Consultoría", desc: "Reservas, calificación, envío de propuestas", metrics: [{ v: "24/7", l: "disponibilidad" }, { v: "+200%", l: "alcance" }] },
    ],
    automateBtn: "Automatizar este proceso",
    pricingTitle: "Costo de Implementación",
    pricingDesc: "Precios transparentes sin comisiones ocultas",
    plans: [
      {
        name: "Starter",
        price: "desde €990",
        period: "/mes",
        desc: "Para pequeñas empresas y startups",
        features: ["Hasta 500 llamadas/mes", "1 escenario de diálogo", "1 integración CRM", "Soporte por email", "14 días gratis"],
        popular: false,
        cta: "Empezar",
      },
      {
        name: "Business",
        price: "desde €2.500",
        period: "/mes",
        desc: "Para empresas medianas con alta carga",
        features: ["Hasta 3.000 llamadas/mes", "3 escenarios de diálogo", "Todas las integraciones", "Gerente dedicado", "Formación de equipo", "SLA 99.5%"],
        popular: true,
        cta: "Elegir",
      },
      {
        name: "Enterprise",
        price: "Personalizado",
        period: "",
        desc: "Para grandes empresas y holdings",
        features: ["Llamadas ilimitadas", "Cualquier escenario", "Integraciones personalizadas", "Soporte 24/7", "SLA 99.9%", "Opción on-premise"],
        popular: false,
        cta: "Contactar",
      },
    ],
    popularChoice: "Más Popular",
    casesTitle: "Resultados Reales",
    casesDesc: "Qué pasó después de la implementación",
    cases: [
      {
        company: "Agencia Inmobiliaria",
        industry: "Inmobiliaria, Barcelona",
        before: "8 agentes, 35% consultas perdidas",
        after: "2 agentes (casos complejos), 0% perdidas",
        metrics: [{ v: "−€15k", l: "ahorro/mes" }, { v: "+85%", l: "conversión" }, { v: "3 semanas", l: "implementación" }],
        quote: "La IA programa visitas 24/7 y califica leads mejor que la mayoría de agentes junior. Hemos duplicado nuestra tasa de cierre.",
      },
      {
        company: "Empresa de Fabricación",
        industry: "Fabricación, Madrid",
        before: "Procesamiento de presupuestos — hasta 2 horas",
        after: "Presupuesto en 40 segundos, factura inmediata",
        metrics: [{ v: "×4", l: "velocidad" }, { v: "+120%", l: "ingresos" }, { v: "1 mes", l: "ROI" }],
        quote: "Los competidores aún llaman a clientes después de una hora. Nosotros enviamos presupuestos mientras ellos marcan.",
      },
      {
        company: "Proveedor Logístico",
        industry: "Logística, Red Europea",
        before: "Call center 20 personas, problemas en picos",
        after: "La IA maneja 85% de solicitudes independientemente",
        metrics: [{ v: "−65%", l: "costos laborales" }, { v: "200+", l: "solicitudes/hr" }, { v: "98%", l: "NPS" }],
        quote: "Durante la temporada alta solíamos tener falta de personal. Ahora la IA maneja cualquier volumen.",
      },
    ],
    before: "Antes",
    after: "Después",
    timelineTitle: "Proceso de Implementación",
    timelineDesc: "De la primera llamada a la operación en vivo — en 20–30 días hábiles",
    phases: [
      { num: "01", title: "Auditoría y Análisis", duration: "1–2 semanas", desc: "Estudiamos sus ventas, solicitudes típicas, catálogo.", icon: MessageSquare },
      { num: "02", title: "Diseño", duration: "1–2 semanas", desc: "Construimos escenarios de diálogo y lógica de integración.", icon: GitMerge },
      { num: "03", title: "Desarrollo", duration: "2–4 semanas", desc: "Entrenamos IA, configuramos integraciones, probamos.", icon: Cpu },
      { num: "04", title: "Lanzamiento", duration: "1 semana", desc: "Piloto, control de calidad, formación de equipo.", icon: Zap },
    ],
    whyTitle: "Por qué M2 AI Solutions",
    whyDesc: "No somos integradores, somos desarrolladores de plataforma",
    why: [
      { icon: Cpu, title: "Plataforma Propia", desc: "Desarrollamos la tecnología nosotros mismos. Control total sobre modelos IA." },
      { icon: Globe, title: "Multilingüe", desc: "6 idiomas incluidos. Detección automática del idioma del interlocutor." },
      { icon: Zap, title: "Lanzamiento en 20–30 Días", desc: "Conectores listos para Bitrix24, amoCRM, Salesforce, HubSpot y 50+ sistemas." },
      { icon: Shield, title: "Seguridad de Datos", desc: "ISO 27001, cumplimiento GDPR. Opción on-premise disponible." },
      { icon: Database, title: "Entrenamiento con Sus Datos", desc: "La IA aprende de sus llamadas, precios y FAQ." },
      { icon: TrendingUp, title: "Resultados Garantizados", desc: "ROI calculado por adelantado. Recuperación promedio 1–2 meses." },
    ],
    faqTitle: "Preguntas Frecuentes",
    faq: [
      { q: "¿Cómo es diferente el gerente IA de un bot de voz regular?", a: "Los bots regulares siguen guiones rígidos y no pueden adaptarse. Nuestro gerente IA entiende el contexto, conduce diálogos dinámicos, realiza cálculos complejos y puede cerrar ventas completamente." },
      { q: "¿Cuánto tiempo toma la implementación?", a: "Un proyecto estándar se lanza en 20–30 días hábiles. Proyectos complejos con lógica personalizada — 4–8 semanas." },
      { q: "¿Puede el sistema reemplazar completamente a los operadores?", a: "La IA maneja 85–95% de las llamadas estándar de forma independiente. Las situaciones no estándar se transfieren a gerentes humanos con contexto completo." },
      { q: "¿Cómo se integra con CRM?", a: "Soportamos Bitrix24, amoCRM, Salesforce, HubSpot y 50+ sistemas. Los datos se sincronizan automáticamente." },
      { q: "¿Cuántas llamadas puede manejar el sistema?", a: "El sistema escala horizontalmente y no tiene límite en llamadas paralelas." },
      { q: "¿Qué tan rápido es el ROI?", a: "Recuperación promedio — 1–2 meses. Ahorro por: reducción de costos laborales, 0% llamadas perdidas, mayor conversión." },
    ],
    ctaTitle: "¿Listo para automatizar ventas?",
    ctaDesc: "Lanzaremos un gerente IA para su negocio. Primera consulta y cálculo de ROI — gratis.",
    ctaBtn: "Obtener Demo",
    ctaBtnSecondary: "Calcular Ahorros",
    ctaFooter: "Sin obligaciones · Demo en 24 horas · NDA disponible",
    relatedTitle: "Soluciones Relacionadas",
    related: [
      { name: "IA para Negocios", href: "/solutions/ai-dlya-biznesa" },
      { name: "Operador IA", href: "/solutions/robot-operator" },
      { name: "Automatización de Ventas", href: "/solutions/automation-sales" },
      { name: "Procesamiento de Solicitudes", href: "/solutions/obrabotka-zayavok" },
      { name: "Generación de Facturas", href: "/solutions/vystavlenie-schetov" },
      { name: "Automatización IA", href: "/solutions/ai-avtomatizaciya-biznesa" },
    ],
  },
  de: {
    badge: "Sprach-KI · Vertriebsautomatisierung",
    heroTitle: "Sprach-KI-Manager",
    heroHighlight: " der verkauft",
    heroSubtitle: "Vollständig automatisiertes Verkaufssystem. Nimmt Anrufe entgegen, führt Dialoge, berechnet Kosten und stellt Rechnungen — in 30 Sekunden, ohne einen einzigen Operator.",
    heroCta: "Demo anfordern",
    heroCtaSecondary: "Beispieldialog ansehen",
    stats: [
      { value: "50+", label: "Unternehmen nutzen es" },
      { value: "98%", label: "erfolgreiche Anrufe" },
      { value: "24/7", label: "ohne Pause" },
      { value: "30 Sek", label: "vom Anruf zur Rechnung" },
    ],
    howTitle: "Sehen Sie, wie es in der Realität funktioniert",
    howDesc: "Klicken Sie auf \"Starten\" und sehen Sie, wie KI ein Immobilienberatungsgespräch führt",
    demoStart: "Starten",
    demoPause: "Pause",
    demoRestart: "Neustart",
    demoPlaceholder: "Klicken Sie auf \"Starten\" um zu sehen, wie KI einen echten Dialog führt",
    demoStatus: "Online · bearbeitet Anrufe",
    demoTime: "52 Sek",
    demoResult: "Besichtigung geplant",
    demoNoHuman: "Ohne menschliches Eingreifen",
    dialogScript: [
      { role: "client", text: "Hallo, ich suche eine 2-Zimmer-Wohnung in Barcelona, vorzugsweise in Strandnähe mit einem Budget von etwa 350.000 Euro." },
      { role: "ai", text: "Hallo! Ich habe 12 Immobilien gefunden, die Ihren Kriterien in Barceloneta und Poblenou entsprechen. Die beste Option ist eine 75m² Wohnung mit Meerblick am Passeig Marítim für 340.000€. Möchten Sie eine Besichtigung vereinbaren?" },
      { role: "client", text: "Ja, das klingt perfekt. Was ist mit Parkplatz und Nebenkosten?" },
      { role: "ai", text: "Diese Immobilie enthält einen Parkplatz und Abstellraum. Monatliche Nebenkosten sind 120€. Das Gebäude hat einen Pool und 24h Concierge. Verfügbare Termine diese Woche: Donnerstag 10 Uhr oder Samstag 14 Uhr. Welcher passt besser?" },
      { role: "client", text: "Samstag um 14 Uhr wäre super." },
      { role: "ai", text: "Perfekt! Besichtigung bestätigt für Samstag um 14 Uhr am Passeig Marítim 45, Barcelona. Sie erhalten eine Bestätigungs-E-Mail mit Wegbeschreibung und Kontakt des Maklers. Kann ich Ihnen noch bei etwas helfen?" },
    ],
    demoFeatures: [
      { icon: Mic, title: "98% Spracherkennung", desc: "Versteht Akzente, Slang, Fachbegriffe", color: "from-violet-500 to-purple-400" },
      { icon: Cpu, title: "Echtzeit-Entscheidungen", desc: "Greift während Anrufen auf Datenbanken und CRM zu", color: "from-blue-500 to-cyan-400" },
      { icon: FileText, title: "Dokumente in 3 Sekunden", desc: "Rechnungen, Verträge — sofort", color: "from-emerald-500 to-teal-400" },
      { icon: PhoneCall, title: "Parallele Verarbeitung", desc: "Tausende Anrufe gleichzeitig", color: "from-orange-500 to-amber-400" },
    ],
    featuresTitle: "Was der KI-Manager kann",
    featuresDesc: "Das System liest keine Skripte — es denkt, rechnet und entscheidet",
    features: [
      { icon: Brain, title: "Natürlicher Dialog", desc: "Versteht Kontext, stellt klärende Fragen", color: "from-blue-500 to-cyan-400" },
      { icon: Calculator, title: "Komplexe Berechnungen", desc: "Berechnet sofort Fläche, Volumen, Kosten", color: "from-purple-500 to-pink-400" },
      { icon: Package, title: "Katalogverwaltung", desc: "Kennt alle Produkte, Preise, Verfügbarkeit", color: "from-orange-500 to-amber-400" },
      { icon: Truck, title: "Lieferberechnung", desc: "Bestimmt Gewicht, Abmessungen, Transport", color: "from-green-500 to-emerald-400" },
      { icon: FileText, title: "Rechnungserstellung", desc: "Erstellt Rechnungen, Dokumente automatisch", color: "from-teal-500 to-cyan-400" },
      { icon: PhoneForwarded, title: "Intelligente Weiterleitung", desc: "Leitet an den richtigen Manager weiter", color: "from-red-500 to-rose-400" },
      { icon: UserCheck, title: "Kundengedächtnis", desc: "Speichert Anrufhistorie und Käufe", color: "from-violet-500 to-purple-400" },
      { icon: ShoppingCart, title: "Schließt Geschäfte ab", desc: "Vom Anruf zur Zahlung ohne Menschen", color: "from-sky-500 to-blue-400" },
    ],
    calcTitle: "Wie viel Sie mit KI sparen",
    calcDesc: "Der durchschnittliche Kunde reduziert Call-Center-Kosten um 60–70% im ersten Monat",
    calcMetrics: [
      { v: "−70%", l: "Operatorkosten" },
      { v: "0%", l: "verpasste Anrufe" },
      { v: "+45%", l: "Konversionsrate" },
      { v: "1–2 Mo.", l: "durchschnittlicher ROI" },
    ],
    calcOperators: "Anzahl der Operatoren",
    calcCalls: "Anrufe pro Tag",
    calcNow: "Aktuell (Operatoren)",
    calcAI: "Mit KI-Manager",
    calcMissed: "Anrufe/Tag verloren durch Operatormangel",
    calcSavings: "Monatliche Ersparnis",
    calcROI: "Amortisationszeit",
    calcMonths: "Mo.",
    currency: "€",
    operatorCostPerMonth: 3500,
    aiCostBase: 990,
    aiCostPerCall: 0.5,
    compareTitle: "KI-Manager vs. Menschlicher Operator",
    compareDesc: "Direkter Vergleich nach Schlüsselmetriken",
    compareParam: "Parameter",
    compareAI: "KI-Manager",
    compareHuman: "Operator",
    compareRows: [
      { metric: "Monatliche Kosten", ai: "ab €990", human: "ab €3.500 × N", winner: "ai" },
      { metric: "Antwortzeit", ai: "3 Sekunden", human: "20–40 Sekunden", winner: "ai" },
      { metric: "Parallele Anrufe", ai: "Unbegrenzt", human: "1", winner: "ai" },
      { metric: "Arbeitszeiten", ai: "24/7/365", human: "8–10h + Wochenenden", winner: "ai" },
      { metric: "Berechnungsfehler", ai: "Keine", human: "Bis zu 12%", winner: "ai" },
      { metric: "Zeit bis Rechnung", ai: "30 Sekunden", human: "10–30 Minuten", winner: "ai" },
      { metric: "Schulung", ai: "Einmalige Einrichtung", human: "1–3 Monate", winner: "ai" },
      { metric: "Nicht-Standardaufgaben", ai: "Begrenzt", human: "Hoch", winner: "human" },
    ],
    industriesTitle: "Welche Branchen profitieren",
    industriesDesc: "Fertige Szenarien und Branchenexpertise",
    industries: [
      { icon: Building2, name: "B2B-Großhandel", desc: "Anfragebearbeitung, Chargenberechnungen, Rechnungsstellung", metrics: [{ v: "500+", l: "Bestellungen/Tag" }, { v: "−70%", l: "Operatoren" }] },
      { icon: Home, name: "Immobilien", desc: "Immobilienanfragen, Besichtigungsplanung, Qualifizierung", metrics: [{ v: "200+", l: "Leads/Tag" }, { v: "+85%", l: "Konversion" }] },
      { icon: Truck, name: "Logistik", desc: "Lieferberechnung, Routenauswahl, Tracking", metrics: [{ v: "200+", l: "Anfragen/Tag" }, { v: "+45%", l: "Konversion" }] },
      { icon: Globe, name: "E-Commerce", desc: "Beratung, Verfügbarkeitsprüfung, Upselling", metrics: [{ v: "98%", l: "NPS" }, { v: "−60%", l: "CAC" }] },
      { icon: BarChart3, name: "Finanzen & Versicherung", desc: "Lead-Qualifizierung, Beratung, Terminplanung", metrics: [{ v: "3x", l: "Konversion" }, { v: "−50%", l: "Kosten pro Lead" }] },
      { icon: Users, name: "Dienstleistungen & Beratung", desc: "Buchung, Qualifizierung, Angebotsversand", metrics: [{ v: "24/7", l: "Verfügbarkeit" }, { v: "+200%", l: "Reichweite" }] },
    ],
    automateBtn: "Diesen Prozess automatisieren",
    pricingTitle: "Implementierungskosten",
    pricingDesc: "Transparente Preisgestaltung ohne versteckte Gebühren",
    plans: [
      {
        name: "Starter",
        price: "ab €990",
        period: "/Mo.",
        desc: "Für kleine Unternehmen und Startups",
        features: ["Bis zu 500 Anrufe/Mo.", "1 Dialogszenario", "1 CRM-Integration", "E-Mail-Support", "14 Tage kostenlos"],
        popular: false,
        cta: "Starten",
      },
      {
        name: "Business",
        price: "ab €2.500",
        period: "/Mo.",
        desc: "Für mittlere Unternehmen mit hoher Last",
        features: ["Bis zu 3.000 Anrufe/Mo.", "3 Dialogszenarien", "Alle Integrationen", "Dedizierter Manager", "Team-Training", "SLA 99.5%"],
        popular: true,
        cta: "Wählen",
      },
      {
        name: "Enterprise",
        price: "Individuell",
        period: "",
        desc: "Für große Unternehmen und Konzerne",
        features: ["Unbegrenzte Anrufe", "Beliebige Szenarien", "Individuelle Integrationen", "24/7-Support", "SLA 99.9%", "On-Premise-Option"],
        popular: false,
        cta: "Kontakt",
      },
    ],
    popularChoice: "Am beliebtesten",
    casesTitle: "Echte Ergebnisse",
    casesDesc: "Was nach der Implementierung passiert ist",
    cases: [
      {
        company: "Immobilienagentur",
        industry: "Immobilien, Barcelona",
        before: "8 Agenten, 35% verpasste Anfragen",
        after: "2 Agenten (für komplexe Fälle), 0% verpasst",
        metrics: [{ v: "−€15k", l: "Ersparnis/Mo." }, { v: "+85%", l: "Konversion" }, { v: "3 Wochen", l: "Implementierung" }],
        quote: "KI plant Besichtigungen 24/7 und qualifiziert Leads besser als die meisten Junior-Agenten. Wir haben unsere Abschlussrate verdoppelt.",
      },
      {
        company: "Fertigungsunternehmen",
        industry: "Fertigung, Madrid",
        before: "Angebotsbearbeitung — bis zu 2 Stunden, verlorene Kunden",
        after: "Angebot in 40 Sekunden, Rechnung sofort",
        metrics: [{ v: "×4", l: "Geschwindigkeit" }, { v: "+120%", l: "Umsatz" }, { v: "1 Mo.", l: "ROI" }],
        quote: "Wettbewerber rufen Kunden noch nach einer Stunde an. Wir senden Angebote, während sie noch wählen.",
      },
      {
        company: "Logistikanbieter",
        industry: "Logistik, Europäisches Netzwerk",
        before: "Call-Center 20 Personen, Spitzenlastprobleme",
        after: "KI bearbeitet 85% der Anfragen selbstständig",
        metrics: [{ v: "−65%", l: "Personalkosten" }, { v: "200+", l: "Anfragen/Std." }, { v: "98%", l: "NPS" }],
        quote: "In der Hochsaison waren wir früher unterbesetzt. Jetzt bewältigt KI jedes Volumen.",
      },
    ],
    before: "Vorher",
    after: "Nachher",
    timelineTitle: "Implementierungsprozess",
    timelineDesc: "Vom ersten Anruf bis zum Live-Betrieb — in 20–30 Werktagen",
    phases: [
      { num: "01", title: "Audit & Analyse", duration: "1–2 Wochen", desc: "Studieren Ihre Verkäufe, typische Anfragen, Katalog.", icon: MessageSquare },
      { num: "02", title: "Design", duration: "1–2 Wochen", desc: "Erstellen Dialogszenarien und Integrationslogik.", icon: GitMerge },
      { num: "03", title: "Entwicklung", duration: "2–4 Wochen", desc: "Trainieren KI, konfigurieren Integrationen, testen.", icon: Cpu },
      { num: "04", title: "Start", duration: "1 Woche", desc: "Pilot, Qualitätskontrolle, Team-Training.", icon: Zap },
    ],
    whyTitle: "Warum M2 AI Solutions",
    whyDesc: "Kein Integrator, sondern Plattform-Entwickler",
    why: [
      { icon: Cpu, title: "Eigene Plattform", desc: "Wir entwickeln die Technologie selbst. Volle Kontrolle über KI-Modelle." },
      { icon: Globe, title: "Mehrsprachig", desc: "6 Sprachen inklusive. Automatische Erkennung der Sprache des Anrufers." },
      { icon: Zap, title: "Start in 20–30 Tagen", desc: "Fertige Konnektoren zu Bitrix24, amoCRM, Salesforce, HubSpot und 50+ Systemen." },
      { icon: Shield, title: "Datensicherheit", desc: "ISO 27001, DSGVO-konform. On-Premise-Option verfügbar." },
      { icon: Database, title: "Training mit Ihren Daten", desc: "KI lernt aus Ihren Anrufen, Preisen und FAQ." },
      { icon: TrendingUp, title: "Garantierte Ergebnisse", desc: "ROI im Voraus berechnet. Durchschnittliche Amortisation 1–2 Monate." },
    ],
    faqTitle: "Häufig gestellte Fragen",
    faq: [
      { q: "Wie unterscheidet sich der KI-Manager von einem normalen Sprachbot?", a: "Normale Bots folgen starren Skripten und können sich nicht anpassen. Unser KI-Manager versteht den Kontext, führt dynamische Dialoge, führt komplexe Berechnungen durch und kann Geschäfte vollständig abschließen." },
      { q: "Wie lange dauert die Implementierung?", a: "Ein Standardprojekt startet in 20–30 Werktagen. Komplexe Projekte mit individueller Logik — 4–8 Wochen." },
      { q: "Kann das System Operatoren vollständig ersetzen?", a: "KI bearbeitet 85–95% der Standardanrufe selbstständig. Nicht-Standardsituationen werden mit vollem Kontext an Live-Manager übergeben." },
      { q: "Wie integriert es sich mit CRM?", a: "Wir unterstützen Bitrix24, amoCRM, Salesforce, HubSpot und 50+ Systeme. Daten werden automatisch synchronisiert." },
      { q: "Wie viele Anrufe kann das System bearbeiten?", a: "Das System skaliert horizontal und hat keine Begrenzung für parallele Anrufe." },
      { q: "Wie schnell ist der ROI?", a: "Durchschnittliche Amortisation — 1–2 Monate. Ersparnis durch: reduzierte Personalkosten, 0% verpasste Anrufe, erhöhte Konversion." },
    ],
    ctaTitle: "Bereit, den Vertrieb zu automatisieren?",
    ctaDesc: "Wir starten einen KI-Manager für Ihr Unternehmen. Erste Beratung und ROI-Berechnung — kostenlos.",
    ctaBtn: "Demo anfordern",
    ctaBtnSecondary: "Ersparnis berechnen",
    ctaFooter: "Keine Verpflichtungen · Demo in 24 Stunden · NDA auf Anfrage",
    relatedTitle: "Verwandte Lösungen",
    related: [
      { name: "KI für Unternehmen", href: "/solutions/ai-dlya-biznesa" },
      { name: "KI-Operator", href: "/solutions/robot-operator" },
      { name: "Vertriebsautomatisierung", href: "/solutions/automation-sales" },
      { name: "Anfrageverarbeitung", href: "/solutions/obrabotka-zayavok" },
      { name: "Rechnungserstellung", href: "/solutions/vystavlenie-schetov" },
      { name: "KI-Automatisierung", href: "/solutions/ai-avtomatizaciya-biznesa" },
    ],
  },
  nl: {
    badge: "Stem-AI · Verkoopautomatisering",
    heroTitle: "Stem AI Manager",
    heroHighlight: " die verkoopt",
    heroSubtitle: "Volledig geautomatiseerd verkoopsysteem. Neemt oproepen aan, voert dialogen, berekent kosten en stuurt facturen — in 30 seconden, zonder operator.",
    heroCta: "Demo aanvragen",
    heroCtaSecondary: "Voorbeeld dialoog bekijken",
    stats: [
      { value: "50+", label: "bedrijven gebruiken het" },
      { value: "98%", label: "succesvolle oproepen" },
      { value: "24/7", label: "geen pauze" },
      { value: "30 sec", label: "van oproep tot factuur" },
    ],
    howTitle: "Zie hoe het in werkelijkheid werkt",
    howDesc: "Klik op \"Starten\" en zie hoe AI een vastgoedconsultatiegesprek voert",
    demoStart: "Starten",
    demoPause: "Pauze",
    demoRestart: "Herstarten",
    demoPlaceholder: "Klik op \"Starten\" om te zien hoe AI een echte dialoog voert",
    demoStatus: "Online · verwerkt oproepen",
    demoTime: "52 sec",
    demoResult: "Bezichtiging gepland",
    demoNoHuman: "Zonder menselijke tussenkomst",
    dialogScript: [
      { role: "client", text: "Hallo, ik zoek een appartement met 2 slaapkamers in Barcelona, bij voorkeur dicht bij het strand met een budget van ongeveer 350.000 euro." },
      { role: "ai", text: "Hallo! Ik heb 12 woningen gevonden die aan uw criteria voldoen in Barceloneta en Poblenou. De beste optie is een appartement van 75m² met zeezicht aan Passeig Marítim voor €340.000. Wilt u een bezichtiging plannen?" },
      { role: "client", text: "Ja, dat klinkt perfect. Hoe zit het met parkeren en servicekosten?" },
      { role: "ai", text: "Dit pand heeft een parkeerplaats en berging. Maandelijkse servicekosten zijn €120. Het gebouw heeft een zwembad en 24-uurs conciërge. Beschikbare tijdslots deze week: donderdag 10u of zaterdag 14u. Welke past beter?" },
      { role: "client", text: "Zaterdag om 14u zou prima zijn." },
      { role: "ai", text: "Perfect! Bezichtiging bevestigd voor zaterdag om 14u aan Passeig Marítim 45, Barcelona. U ontvangt een bevestigingsmail met routebeschrijving en contact van de makelaar. Kan ik u nog ergens mee helpen?" },
    ],
    demoFeatures: [
      { icon: Mic, title: "98% Spraakherkenning", desc: "Begrijpt accenten, slang, vaktermen", color: "from-violet-500 to-purple-400" },
      { icon: Cpu, title: "Realtime Beslissingen", desc: "Raadpleegt databases en CRM tijdens oproepen", color: "from-blue-500 to-cyan-400" },
      { icon: FileText, title: "Documenten in 3 Seconden", desc: "Facturen, contracten — direct", color: "from-emerald-500 to-teal-400" },
      { icon: PhoneCall, title: "Parallelle Verwerking", desc: "Duizenden oproepen tegelijk", color: "from-orange-500 to-amber-400" },
    ],
    featuresTitle: "Wat de AI Manager kan",
    featuresDesc: "Het systeem leest geen scripts — het denkt, rekent en beslist",
    features: [
      { icon: Brain, title: "Natuurlijke Dialoog", desc: "Begrijpt context, stelt verduidelijkende vragen", color: "from-blue-500 to-cyan-400" },
      { icon: Calculator, title: "Complexe Berekeningen", desc: "Berekent direct oppervlakte, volume, kosten", color: "from-purple-500 to-pink-400" },
      { icon: Package, title: "Catalogusbeheer", desc: "Kent alle producten, prijzen, beschikbaarheid", color: "from-orange-500 to-amber-400" },
      { icon: Truck, title: "Leveringsberekening", desc: "Bepaalt gewicht, afmetingen, transport", color: "from-green-500 to-emerald-400" },
      { icon: FileText, title: "Factuurcreatie", desc: "Maakt facturen, documenten automatisch", color: "from-teal-500 to-cyan-400" },
      { icon: PhoneForwarded, title: "Slimme Doorschakeling", desc: "Schakelt door naar de juiste manager", color: "from-red-500 to-rose-400" },
      { icon: UserCheck, title: "Klantgeheugen", desc: "Slaat belgeschiedenis en aankopen op", color: "from-violet-500 to-purple-400" },
      { icon: ShoppingCart, title: "Sluit Deals", desc: "Van oproep tot betaling zonder mensen", color: "from-sky-500 to-blue-400" },
    ],
    calcTitle: "Hoeveel u bespaart met AI",
    calcDesc: "Gemiddelde klant vermindert callcenterkosten met 60–70% in de eerste maand",
    calcMetrics: [
      { v: "−70%", l: "operatorkosten" },
      { v: "0%", l: "gemiste oproepen" },
      { v: "+45%", l: "conversieratio" },
      { v: "1–2 mnd.", l: "gemiddelde ROI" },
    ],
    calcOperators: "Aantal operators",
    calcCalls: "Oproepen per dag",
    calcNow: "Huidig (operators)",
    calcAI: "Met AI Manager",
    calcMissed: "oproepen/dag verloren door operatortekort",
    calcSavings: "Maandelijkse besparing",
    calcROI: "Terugverdientijd",
    calcMonths: "mnd.",
    currency: "€",
    operatorCostPerMonth: 3500,
    aiCostBase: 990,
    aiCostPerCall: 0.5,
    compareTitle: "AI Manager vs. Menselijke Operator",
    compareDesc: "Directe vergelijking op kernmetrieken",
    compareParam: "Parameter",
    compareAI: "AI Manager",
    compareHuman: "Operator",
    compareRows: [
      { metric: "Maandelijkse kosten", ai: "vanaf €990", human: "vanaf €3.500 × N", winner: "ai" },
      { metric: "Reactietijd", ai: "3 seconden", human: "20–40 seconden", winner: "ai" },
      { metric: "Parallelle oproepen", ai: "Onbeperkt", human: "1", winner: "ai" },
      { metric: "Werkuren", ai: "24/7/365", human: "8–10u + weekenden", winner: "ai" },
      { metric: "Berekeningsfouten", ai: "Geen", human: "Tot 12%", winner: "ai" },
      { metric: "Tijd tot factuur", ai: "30 seconden", human: "10–30 minuten", winner: "ai" },
      { metric: "Training", ai: "Eenmalige setup", human: "1–3 maanden", winner: "ai" },
      { metric: "Niet-standaard taken", ai: "Beperkt", human: "Hoog", winner: "human" },
    ],
    industriesTitle: "Welke Industrieën Profiteren",
    industriesDesc: "Kant-en-klare scenario's en branche-expertise",
    industries: [
      { icon: Building2, name: "B2B Groothandel", desc: "Aanvraagverwerking, batchberekeningen, facturering", metrics: [{ v: "500+", l: "bestellingen/dag" }, { v: "−70%", l: "operators" }] },
      { icon: Home, name: "Vastgoed", desc: "Woningvragen, bezichtigingsplanning, kwalificatie", metrics: [{ v: "200+", l: "leads/dag" }, { v: "+85%", l: "conversie" }] },
      { icon: Truck, name: "Logistiek", desc: "Leveringsberekening, routeselectie, tracking", metrics: [{ v: "200+", l: "aanvragen/dag" }, { v: "+45%", l: "conversie" }] },
      { icon: Globe, name: "E-commerce", desc: "Consultatie, voorraadcontrole, upselling", metrics: [{ v: "98%", l: "NPS" }, { v: "−60%", l: "CAC" }] },
      { icon: BarChart3, name: "Financiën & Verzekering", desc: "Lead kwalificatie, consultatie, afspraken", metrics: [{ v: "3x", l: "conversie" }, { v: "−50%", l: "kosten per lead" }] },
      { icon: Users, name: "Diensten & Consulting", desc: "Boekingen, kwalificatie, offertes versturen", metrics: [{ v: "24/7", l: "beschikbaarheid" }, { v: "+200%", l: "bereik" }] },
    ],
    automateBtn: "Dit proces automatiseren",
    pricingTitle: "Implementatiekosten",
    pricingDesc: "Transparante prijzen zonder verborgen kosten",
    plans: [
      {
        name: "Starter",
        price: "vanaf €990",
        period: "/mnd",
        desc: "Voor kleine bedrijven en startups",
        features: ["Tot 500 oproepen/mnd", "1 dialoogscenario", "1 CRM integratie", "Email support", "14 dagen gratis"],
        popular: false,
        cta: "Starten",
      },
      {
        name: "Business",
        price: "vanaf €2.500",
        period: "/mnd",
        desc: "Voor middelgrote bedrijven met hoge belasting",
        features: ["Tot 3.000 oproepen/mnd", "3 dialoogscenario's", "Alle integraties", "Toegewijde manager", "Team training", "SLA 99.5%"],
        popular: true,
        cta: "Kiezen",
      },
      {
        name: "Enterprise",
        price: "Op maat",
        period: "",
        desc: "Voor grote bedrijven en holdings",
        features: ["Onbeperkte oproepen", "Elk scenario", "Aangepaste integraties", "24/7 support", "SLA 99.9%", "On-premise optie"],
        popular: false,
        cta: "Contact",
      },
    ],
    popularChoice: "Meest Populair",
    casesTitle: "Echte Resultaten",
    casesDesc: "Wat er gebeurde na implementatie",
    cases: [
      {
        company: "Makelaardij",
        industry: "Vastgoed, Barcelona",
        before: "8 makelaars, 35% gemiste aanvragen",
        after: "2 makelaars (complexe zaken), 0% gemist",
        metrics: [{ v: "−€15k", l: "besparing/mnd" }, { v: "+85%", l: "conversie" }, { v: "3 weken", l: "implementatie" }],
        quote: "AI plant bezichtigingen 24/7 en kwalificeert leads beter dan de meeste junior makelaars. We hebben ons sluitingspercentage verdubbeld.",
      },
      {
        company: "Productiebedrijf",
        industry: "Productie, Madrid",
        before: "Offerteproces — tot 2 uur, verloren klanten",
        after: "Offerte in 40 seconden, factuur direct",
        metrics: [{ v: "×4", l: "snelheid" }, { v: "+120%", l: "omzet" }, { v: "1 mnd.", l: "ROI" }],
        quote: "Concurrenten bellen klanten nog na een uur. Wij sturen offertes terwijl ze nog bellen.",
      },
      {
        company: "Logistiek Aanbieder",
        industry: "Logistiek, Europees Netwerk",
        before: "Callcenter 20 mensen, piekbelastingproblemen",
        after: "AI handelt 85% aanvragen zelfstandig af",
        metrics: [{ v: "−65%", l: "personeelskosten" }, { v: "200+", l: "aanvragen/uur" }, { v: "98%", l: "NPS" }],
        quote: "Tijdens het hoogseizoen hadden we altijd te weinig personeel. Nu verwerkt AI elk volume.",
      },
    ],
    before: "Voorheen",
    after: "Nu",
    timelineTitle: "Implementatieproces",
    timelineDesc: "Van eerste gesprek tot live operatie — in 20–30 werkdagen",
    phases: [
      { num: "01", title: "Audit & Analyse", duration: "1–2 weken", desc: "Bestuderen uw verkoop, typische vragen, catalogus.", icon: MessageSquare },
      { num: "02", title: "Ontwerp", duration: "1–2 weken", desc: "Bouwen dialoogscenario's en integratie-logica.", icon: GitMerge },
      { num: "03", title: "Ontwikkeling", duration: "2–4 weken", desc: "Trainen AI, configureren integraties, testen.", icon: Cpu },
      { num: "04", title: "Lancering", duration: "1 week", desc: "Pilot, kwaliteitscontrole, team training.", icon: Zap },
    ],
    whyTitle: "Waarom M2 AI Solutions",
    whyDesc: "Geen integrator, maar platformontwikkelaar",
    why: [
      { icon: Cpu, title: "Eigen Platform", desc: "We ontwikkelen de technologie zelf. Volledige controle over AI-modellen." },
      { icon: Globe, title: "Meertalig", desc: "6 talen inbegrepen. Automatische detectie van de taal van de beller." },
      { icon: Zap, title: "Start in 20–30 Dagen", desc: "Kant-en-klare connectoren naar Bitrix24, amoCRM, Salesforce, HubSpot en 50+ systemen." },
      { icon: Shield, title: "Gegevensbeveiliging", desc: "ISO 27001, AVG-conform. On-premise optie beschikbaar." },
      { icon: Database, title: "Training met Uw Data", desc: "AI leert van uw gesprekken, prijzen en FAQ." },
      { icon: TrendingUp, title: "Gegarandeerde Resultaten", desc: "ROI vooraf berekend. Gemiddelde terugverdientijd 1–2 maanden." },
    ],
    faqTitle: "Veelgestelde Vragen",
    faq: [
      { q: "Hoe verschilt de AI-manager van een gewone spraakbot?", a: "Gewone bots volgen starre scripts en kunnen niet aanpassen. Onze AI-manager begrijpt context, voert dynamische dialogen, doet complexe berekeningen en kan deals volledig afsluiten." },
      { q: "Hoe lang duurt de implementatie?", a: "Een standaardproject start in 20–30 werkdagen. Complexe projecten met aangepaste logica — 4–8 weken." },
      { q: "Kan het systeem operators volledig vervangen?", a: "AI verwerkt 85–95% van standaardgesprekken zelfstandig. Niet-standaard situaties worden met volledige context doorgestuurd naar live managers." },
      { q: "Hoe integreert het met CRM?", a: "We ondersteunen Bitrix24, amoCRM, Salesforce, HubSpot en 50+ systemen. Data synchroniseert automatisch." },
      { q: "Hoeveel oproepen kan het systeem verwerken?", a: "Het systeem schaalt horizontaal en heeft geen limiet op parallelle oproepen." },
      { q: "Hoe snel is de ROI?", a: "Gemiddelde terugverdientijd — 1–2 maanden. Besparing door: verlaagde personeelskosten, 0% gemiste oproepen, hogere conversie." },
    ],
    ctaTitle: "Klaar om verkoop te automatiseren?",
    ctaDesc: "We lanceren een AI-manager voor uw bedrijf. Eerste consultatie en ROI-berekening — gratis.",
    ctaBtn: "Demo aanvragen",
    ctaBtnSecondary: "Besparing berekenen",
    ctaFooter: "Geen verplichtingen · Demo in 24 uur · NDA op aanvraag",
    relatedTitle: "Gerelateerde Oplossingen",
    related: [
      { name: "AI voor Bedrijven", href: "/solutions/ai-dlya-biznesa" },
      { name: "AI Operator", href: "/solutions/robot-operator" },
      { name: "Verkoopautomatisering", href: "/solutions/automation-sales" },
      { name: "Aanvraagverwerking", href: "/solutions/obrabotka-zayavok" },
      { name: "Factuurcreatie", href: "/solutions/vystavlenie-schetov" },
      { name: "AI-automatisering", href: "/solutions/ai-avtomatizaciya-biznesa" },
    ],
  },
  fr: {
    badge: "IA Vocale · Automatisation des Ventes",
    heroTitle: "Gestionnaire IA Vocal",
    heroHighlight: " qui vend",
    heroSubtitle: "Système de vente entièrement automatisé. Prend les appels, mène des dialogues, calcule les coûts et émet des factures — en 30 secondes, sans opérateur.",
    heroCta: "Obtenir une Démo",
    heroCtaSecondary: "Voir un exemple de dialogue",
    stats: [
      { value: "50+", label: "entreprises l'utilisent" },
      { value: "98%", label: "appels réussis" },
      { value: "24/7", label: "sans pause" },
      { value: "30 sec", label: "de l'appel à la facture" },
    ],
    howTitle: "Voyez comment ça fonctionne en réalité",
    howDesc: "Cliquez sur \"Démarrer\" et regardez comment l'IA mène une consultation immobilière",
    demoStart: "Démarrer",
    demoPause: "Pause",
    demoRestart: "Redémarrer",
    demoPlaceholder: "Cliquez sur \"Démarrer\" pour voir comment l'IA mène un vrai dialogue",
    demoStatus: "En ligne · traite les appels",
    demoTime: "52 sec",
    demoResult: "Visite planifiée",
    demoNoHuman: "Sans intervention humaine",
    dialogScript: [
      { role: "client", text: "Bonjour, je cherche un appartement 2 pièces à Barcelone, de préférence près de la plage avec un budget d'environ 350 000 euros." },
      { role: "ai", text: "Bonjour ! J'ai trouvé 12 propriétés correspondant à vos critères dans les quartiers de Barceloneta et Poblenou. La meilleure option est un appartement de 75m² avec vue sur mer au Passeig Marítim, à 340 000€. Souhaitez-vous planifier une visite ?" },
      { role: "client", text: "Oui, ça semble parfait. Qu'en est-il du parking et des charges ?" },
      { role: "ai", text: "Cette propriété comprend une place de parking et un box. Les charges mensuelles sont de 120€. L'immeuble dispose d'une piscine et d'un concierge 24h. Créneaux disponibles cette semaine : jeudi 10h ou samedi 14h. Lequel vous convient ?" },
      { role: "client", text: "Samedi à 14h serait parfait." },
      { role: "ai", text: "Parfait ! Visite confirmée pour samedi à 14h au Passeig Marítim 45, Barcelone. Vous recevrez un email de confirmation avec l'itinéraire et le contact de l'agent. Puis-je vous aider pour autre chose ?" },
    ],
    demoFeatures: [
      { icon: Mic, title: "98% Reconnaissance Vocale", desc: "Comprend les accents, l'argot, les termes techniques", color: "from-violet-500 to-purple-400" },
      { icon: Cpu, title: "Décisions en Temps Réel", desc: "Accède aux bases de données et CRM pendant les appels", color: "from-blue-500 to-cyan-400" },
      { icon: FileText, title: "Documents en 3 Secondes", desc: "Factures, contrats — instantanément", color: "from-emerald-500 to-teal-400" },
      { icon: PhoneCall, title: "Traitement Parallèle", desc: "Des milliers d'appels simultanément", color: "from-orange-500 to-amber-400" },
    ],
    featuresTitle: "Ce que le Gestionnaire IA peut faire",
    featuresDesc: "Le système ne lit pas de scripts — il pense, calcule et prend des décisions",
    features: [
      { icon: Brain, title: "Dialogue Naturel", desc: "Comprend le contexte, pose des questions de clarification", color: "from-blue-500 to-cyan-400" },
      { icon: Calculator, title: "Calculs Complexes", desc: "Calcule instantanément surface, volume, coût", color: "from-purple-500 to-pink-400" },
      { icon: Package, title: "Gestion de Catalogue", desc: "Connaît tous les produits, prix, disponibilité", color: "from-orange-500 to-amber-400" },
      { icon: Truck, title: "Calcul de Livraison", desc: "Détermine poids, dimensions, transport", color: "from-green-500 to-emerald-400" },
      { icon: FileText, title: "Génération de Factures", desc: "Crée factures, documents automatiquement", color: "from-teal-500 to-cyan-400" },
      { icon: PhoneForwarded, title: "Routage Intelligent", desc: "Transfère au bon gestionnaire", color: "from-red-500 to-rose-400" },
      { icon: UserCheck, title: "Mémoire Client", desc: "Stocke l'historique d'appels et achats", color: "from-violet-500 to-purple-400" },
      { icon: ShoppingCart, title: "Conclut les Ventes", desc: "De l'appel au paiement sans humain", color: "from-sky-500 to-blue-400" },
    ],
    calcTitle: "Combien vous économiserez avec l'IA",
    calcDesc: "Le client moyen réduit les coûts du centre d'appels de 60–70% le premier mois",
    calcMetrics: [
      { v: "−70%", l: "coûts opérateur" },
      { v: "0%", l: "appels manqués" },
      { v: "+45%", l: "taux de conversion" },
      { v: "1–2 mois", l: "ROI moyen" },
    ],
    calcOperators: "Nombre d'opérateurs",
    calcCalls: "Appels par jour",
    calcNow: "Actuel (opérateurs)",
    calcAI: "Avec Gestionnaire IA",
    calcMissed: "appels/jour perdus par manque d'opérateurs",
    calcSavings: "Économies mensuelles",
    calcROI: "Période de récupération",
    calcMonths: "mois",
    currency: "€",
    operatorCostPerMonth: 3500,
    aiCostBase: 990,
    aiCostPerCall: 0.5,
    compareTitle: "Gestionnaire IA vs. Opérateur Humain",
    compareDesc: "Comparaison directe sur les métriques clés",
    compareParam: "Paramètre",
    compareAI: "Gestionnaire IA",
    compareHuman: "Opérateur",
    compareRows: [
      { metric: "Coût mensuel", ai: "à partir de €990", human: "à partir de €3 500 × N", winner: "ai" },
      { metric: "Temps de réponse", ai: "3 secondes", human: "20–40 secondes", winner: "ai" },
      { metric: "Appels parallèles", ai: "Illimités", human: "1", winner: "ai" },
      { metric: "Heures de travail", ai: "24/7/365", human: "8–10h + week-ends", winner: "ai" },
      { metric: "Erreurs de calcul", ai: "Aucune", human: "Jusqu'à 12%", winner: "ai" },
      { metric: "Temps jusqu'à facture", ai: "30 secondes", human: "10–30 minutes", winner: "ai" },
      { metric: "Formation", ai: "Configuration unique", human: "1–3 mois", winner: "ai" },
      { metric: "Tâches non-standard", ai: "Limité", human: "Élevé", winner: "human" },
    ],
    industriesTitle: "Quelles Industries en Bénéficient",
    industriesDesc: "Scénarios prêts à l'emploi et expertise sectorielle",
    industries: [
      { icon: Building2, name: "Commerce B2B", desc: "Traitement des demandes, calculs de lots, facturation", metrics: [{ v: "500+", l: "commandes/jour" }, { v: "−70%", l: "opérateurs" }] },
      { icon: Home, name: "Immobilier", desc: "Demandes de propriétés, planification de visites", metrics: [{ v: "200+", l: "prospects/jour" }, { v: "+85%", l: "conversion" }] },
      { icon: Truck, name: "Logistique", desc: "Calcul de livraison, sélection d'itinéraire, suivi", metrics: [{ v: "200+", l: "demandes/jour" }, { v: "+45%", l: "conversion" }] },
      { icon: Globe, name: "E-commerce", desc: "Consultations, vérification de stock, vente additionnelle", metrics: [{ v: "98%", l: "NPS" }, { v: "−60%", l: "CAC" }] },
      { icon: BarChart3, name: "Finance & Assurance", desc: "Qualification de prospects, consultation, rendez-vous", metrics: [{ v: "3x", l: "conversion" }, { v: "−50%", l: "coût par prospect" }] },
      { icon: Users, name: "Services & Conseil", desc: "Réservations, qualification, envoi de propositions", metrics: [{ v: "24/7", l: "disponibilité" }, { v: "+200%", l: "portée" }] },
    ],
    automateBtn: "Automatiser ce processus",
    pricingTitle: "Coût d'Implémentation",
    pricingDesc: "Tarification transparente sans frais cachés",
    plans: [
      {
        name: "Starter",
        price: "à partir de €990",
        period: "/mois",
        desc: "Pour les petites entreprises et startups",
        features: ["Jusqu'à 500 appels/mois", "1 scénario de dialogue", "1 intégration CRM", "Support email", "14 jours gratuits"],
        popular: false,
        cta: "Démarrer",
      },
      {
        name: "Business",
        price: "à partir de €2 500",
        period: "/mois",
        desc: "Pour les moyennes entreprises à forte charge",
        features: ["Jusqu'à 3 000 appels/mois", "3 scénarios de dialogue", "Toutes les intégrations", "Gestionnaire dédié", "Formation d'équipe", "SLA 99.5%"],
        popular: true,
        cta: "Choisir",
      },
      {
        name: "Enterprise",
        price: "Sur mesure",
        period: "",
        desc: "Pour les grandes entreprises et groupes",
        features: ["Appels illimités", "Tout scénario", "Intégrations personnalisées", "Support 24/7", "SLA 99.9%", "Option sur site"],
        popular: false,
        cta: "Contacter",
      },
    ],
    popularChoice: "Le Plus Populaire",
    casesTitle: "Résultats Réels",
    casesDesc: "Ce qui s'est passé après l'implémentation",
    cases: [
      {
        company: "Agence Immobilière",
        industry: "Immobilier, Barcelone",
        before: "8 agents, 35% demandes manquées",
        after: "2 agents (cas complexes), 0% manquées",
        metrics: [{ v: "−€15k", l: "économies/mois" }, { v: "+85%", l: "conversion" }, { v: "3 semaines", l: "implémentation" }],
        quote: "L'IA planifie des visites 24/7 et qualifie les prospects mieux que la plupart des agents juniors. Nous avons doublé notre taux de conclusion.",
      },
      {
        company: "Entreprise de Production",
        industry: "Production, Madrid",
        before: "Traitement des devis — jusqu'à 2h, clients perdus",
        after: "Devis en 40 secondes, facture immédiate",
        metrics: [{ v: "×4", l: "vitesse" }, { v: "+120%", l: "revenus" }, { v: "1 mois", l: "ROI" }],
        quote: "Les concurrents appellent encore les clients après une heure. Nous envoyons des devis pendant qu'ils composent.",
      },
      {
        company: "Fournisseur Logistique",
        industry: "Logistique, Réseau Européen",
        before: "Centre d'appels 20 personnes, problèmes de pic",
        after: "L'IA traite 85% des demandes de manière autonome",
        metrics: [{ v: "−65%", l: "coûts de personnel" }, { v: "200+", l: "demandes/h" }, { v: "98%", l: "NPS" }],
        quote: "Pendant la haute saison, nous manquions toujours de personnel. Maintenant l'IA gère n'importe quel volume.",
      },
    ],
    before: "Avant",
    after: "Après",
    timelineTitle: "Processus d'Implémentation",
    timelineDesc: "Du premier appel à l'opération en direct — en 20–30 jours ouvrables",
    phases: [
      { num: "01", title: "Audit & Analyse", duration: "1–2 semaines", desc: "Étudions vos ventes, demandes typiques, catalogue.", icon: MessageSquare },
      { num: "02", title: "Conception", duration: "1–2 semaines", desc: "Construisons les scénarios de dialogue et logique d'intégration.", icon: GitMerge },
      { num: "03", title: "Développement", duration: "2–4 semaines", desc: "Entraînons l'IA, configurons les intégrations, testons.", icon: Cpu },
      { num: "04", title: "Lancement", duration: "1 semaine", desc: "Pilote, contrôle qualité, formation d'équipe.", icon: Zap },
    ],
    whyTitle: "Pourquoi M2 AI Solutions",
    whyDesc: "Pas un intégrateur, mais un développeur de plateforme",
    why: [
      { icon: Cpu, title: "Plateforme Propre", desc: "Nous développons la technologie nous-mêmes. Contrôle total sur les modèles IA." },
      { icon: Globe, title: "Multilingue", desc: "6 langues incluses. Détection automatique de la langue de l'appelant." },
      { icon: Zap, title: "Lancement en 20–30 Jours", desc: "Connecteurs prêts pour Bitrix24, amoCRM, Salesforce, HubSpot et 50+ systèmes." },
      { icon: Shield, title: "Sécurité des Données", desc: "ISO 27001, conforme RGPD. Option sur site disponible." },
      { icon: Database, title: "Entraînement sur Vos Données", desc: "L'IA apprend de vos appels, tarifs et FAQ." },
      { icon: TrendingUp, title: "Résultats Garantis", desc: "ROI calculé à l'avance. Récupération moyenne 1–2 mois." },
    ],
    faqTitle: "Questions Fréquentes",
    faq: [
      { q: "En quoi le gestionnaire IA diffère-t-il d'un bot vocal classique ?", a: "Les bots classiques suivent des scripts rigides et ne s'adaptent pas. Notre gestionnaire IA comprend le contexte, mène des dialogues dynamiques, effectue des calculs complexes et peut conclure des ventes complètement." },
      { q: "Combien de temps prend l'implémentation ?", a: "Un projet standard démarre en 20–30 jours ouvrables. Projets complexes avec logique personnalisée — 4–8 semaines." },
      { q: "Le système peut-il remplacer complètement les opérateurs ?", a: "L'IA traite 85–95% des appels standards de manière autonome. Les situations non-standard sont transférées aux gestionnaires humains avec le contexte complet." },
      { q: "Comment s'intègre-t-il avec le CRM ?", a: "Nous supportons Bitrix24, amoCRM, Salesforce, HubSpot et 50+ systèmes. Les données se synchronisent automatiquement." },
      { q: "Combien d'appels le système peut-il traiter ?", a: "Le système évolue horizontalement et n'a pas de limite sur les appels parallèles." },
      { q: "Quelle est la rapidité du ROI ?", a: "Récupération moyenne — 1–2 mois. Économies grâce à : réduction des coûts de personnel, 0% d'appels manqués, conversion accrue." },
    ],
    ctaTitle: "Prêt à automatiser les ventes ?",
    ctaDesc: "Nous lancerons un gestionnaire IA pour votre entreprise. Première consultation et calcul de ROI — gratuit.",
    ctaBtn: "Obtenir une Démo",
    ctaBtnSecondary: "Calculer les Économies",
    ctaFooter: "Sans engagement · Démo en 24h · NDA sur demande",
    relatedTitle: "Solutions Associées",
    related: [
      { name: "IA pour Entreprises", href: "/solutions/ai-dlya-biznesa" },
      { name: "Opérateur IA", href: "/solutions/robot-operator" },
      { name: "Automatisation des Ventes", href: "/solutions/automation-sales" },
      { name: "Traitement des Demandes", href: "/solutions/obrabotka-zayavok" },
      { name: "Génération de Factures", href: "/solutions/vystavlenie-schetov" },
      { name: "Automatisation IA", href: "/solutions/ai-avtomatizaciya-biznesa" },
    ],
  },
}

// ─── Live dialog demo ────────────────────────────────────────────────────────
function LiveDialog({ locale }: { locale: Locale }) {
  const t = translations[locale] || translations.ru
  const [step, setStep] = useState(0)
  const [running, setRunning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!running) return
    if (step >= t.dialogScript.length) { setRunning(false); return }
    const delay = step === 0 ? 400 : t.dialogScript[step - 1].role === "client" ? 1200 : 1800
    const timer = setTimeout(() => setStep(s => s + 1), delay)
    return () => clearTimeout(timer)
  }, [running, step, t.dialogScript])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [step])

  const reset = () => { setStep(0); setRunning(false) }
  const start = () => { reset(); setTimeout(() => { setStep(0); setRunning(true) }, 50) }
  const togglePause = () => setRunning(!running)

  return (
    <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(124,58,237,0.2),0_20px_60px_rgba(0,0,0,0.4)] bg-[#111827]"
      style={{ background: "linear-gradient(145deg, #1e1b4b 0%, #1e293b 100%)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 border-b border-white/[0.08]"
        style={{ background: "rgba(124,58,237,0.08)" }}>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <Mic className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 rounded-full border-2 border-[#1e1b4b] bg-emerald-400 shadow shadow-emerald-400/60" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white">AI Voice Manager</div>
            <div className="text-[10px] sm:text-[11px] text-emerald-400 font-medium flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.demoStatus}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          {step > 0 && (
            <button onClick={reset} className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all">
              <RotateCcw className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          )}
          {running ? (
            <button onClick={togglePause} className="flex items-center gap-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-[12px] font-semibold text-orange-300 hover:bg-orange-500/30 hover:text-white transition-all">
              <Pause className="h-3 w-3" /> {t.demoPause}
            </button>
          ) : (
            <button onClick={start} className="flex items-center gap-1.5 rounded-full bg-violet-500/20 border border-violet-400/30 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-[12px] font-semibold text-violet-300 hover:bg-violet-500/30 hover:text-white transition-all">
              <Play className="h-3 w-3" /> {step > 0 ? t.demoRestart : t.demoStart}
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div ref={containerRef} className="h-56 sm:h-72 overflow-y-auto p-3 sm:p-5 space-y-3 sm:space-y-4 scroll-smooth">
        {step === 0 && !running && (
          <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-4">
            <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-400/30 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Volume2 className="h-5 w-5 sm:h-7 sm:w-7 text-violet-400" />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm text-center px-4">{t.demoPlaceholder}</p>
          </div>
        )}
        {t.dialogScript.slice(0, step).map((msg, i) => (
          <div key={i} className={`flex gap-2 sm:gap-3 ${msg.role === "client" ? "flex-row-reverse" : ""}`}>
            <div className={`flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-md ${msg.role === "ai" ? "bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-violet-500/30" : "bg-slate-600/60 text-slate-300"}`}>
              {msg.role === "ai" ? <Mic className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" /> : locale === "ru" ? "К" : "C"}
            </div>
            <div className={`max-w-[80%] sm:max-w-[78%] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-[11px] sm:text-sm leading-relaxed ${msg.role === "ai" ? "bg-white/[0.08] text-white rounded-tl-none border border-white/[0.06]" : "bg-gradient-to-br from-violet-600/30 to-purple-500/20 text-white border border-violet-400/20 rounded-tr-none"}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {running && step < t.dialogScript.length && (
          <div className={`flex gap-2 sm:gap-3 ${t.dialogScript[step]?.role === "client" ? "flex-row-reverse" : ""}`}>
            <div className={`flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs ${t.dialogScript[step]?.role === "ai" ? "bg-gradient-to-br from-violet-500 to-cyan-400 text-white" : "bg-slate-600/60 text-slate-300"}`}>
              {t.dialogScript[step]?.role === "ai" ? <Mic className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" /> : locale === "ru" ? "К" : "C"}
            </div>
            <div className="flex items-center gap-1 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-white/[0.06] border border-white/[0.06]">
              {[0, 1, 2].map(i => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-3 sm:px-5 py-2.5 sm:py-3.5 border-t border-white/[0.06] flex items-center justify-between"
        style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-slate-400">
          <span className="flex items-center gap-1 sm:gap-1.5"><Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-violet-400" /> {t.demoTime}</span>
          {step >= t.dialogScript.length && (
            <span className="flex items-center gap-1 sm:gap-1.5 text-emerald-400 font-medium"><CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> {t.demoResult}</span>
          )}
        </div>
        <span className="text-[10px] sm:text-[11px] text-slate-500">{t.demoNoHuman}</span>
      </div>
    </div>
  )
}

// ─── ROI Calculator ──────────────────────────────────────────────────────────
function ROICalculator({ locale }: { locale: Locale }) {
  const t = translations[locale] || translations.ru
  const [operators, setOperators] = useState(5)
  const [callsPerDay, setCallsPerDay] = useState(100)

  const operatorCalls = 60
  const currentCost = operators * t.operatorCostPerMonth
  const aiCost = t.aiCostBase + callsPerDay * 30 * t.aiCostPerCall
  const savings = currentCost - aiCost
  const roiMonths = savings > 0 ? Math.ceil(t.aiCostBase / savings) : 0
  const missedCalls = Math.max(0, callsPerDay - operators * operatorCalls)

  const formatCurrency = (value: number) => {
    if (locale === "ru") {
      return `${(value / 1000).toFixed(0)}к ${t.currency}`
    }
    return `${t.currency}${(value / 1000).toFixed(1)}k`
  }

  return (
    <div className="rounded-xl sm:rounded-2xl border border-border/50 bg-card overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-border/50">
        <h3 className="text-base sm:text-lg font-bold mb-1">{t.calcSavings}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">{t.calcDesc}</p>
      </div>
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <div>
          <div className="flex justify-between mb-2 sm:mb-3">
            <label className="text-xs sm:text-sm font-medium">{t.calcOperators}</label>
            <span className="text-xs sm:text-sm font-bold text-primary">{operators}</span>
          </div>
          <input type="range" min={1} max={50} value={operators} onChange={e => setOperators(+e.target.value)}
            className="w-full accent-primary h-2 rounded-full" />
          <div className="flex justify-between text-[10px] sm:text-xs text-muted-foreground mt-1"><span>1</span><span>50</span></div>
        </div>
        <div>
          <div className="flex justify-between mb-2 sm:mb-3">
            <label className="text-xs sm:text-sm font-medium">{t.calcCalls}</label>
            <span className="text-xs sm:text-sm font-bold text-primary">{callsPerDay}</span>
          </div>
          <input type="range" min={10} max={1000} step={10} value={callsPerDay} onChange={e => setCallsPerDay(+e.target.value)}
            className="w-full accent-primary h-2 rounded-full" />
          <div className="flex justify-between text-[10px] sm:text-xs text-muted-foreground mt-1"><span>10</span><span>1000</span></div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div className="rounded-lg sm:rounded-xl bg-red-500/5 border border-red-500/20 p-3 sm:p-4">
            <div className="text-[10px] sm:text-xs text-muted-foreground mb-1">{t.calcNow}</div>
            <div className="text-lg sm:text-xl font-bold text-red-500">{formatCurrency(currentCost)}</div>
          </div>
          <div className="rounded-lg sm:rounded-xl bg-green-500/5 border border-green-500/20 p-3 sm:p-4">
            <div className="text-[10px] sm:text-xs text-muted-foreground mb-1">{t.calcAI}</div>
            <div className="text-lg sm:text-xl font-bold text-green-500">{formatCurrency(aiCost)}</div>
          </div>
        </div>

        {missedCalls > 0 && (
          <div className="rounded-lg sm:rounded-xl bg-orange-500/5 border border-orange-500/20 p-2.5 sm:p-3 text-xs sm:text-sm">
            <span className="text-orange-500 font-semibold">{missedCalls} </span>
            <span className="text-muted-foreground">{t.calcMissed}</span>
          </div>
        )}

        <div className="rounded-lg sm:rounded-xl bg-primary/5 border border-primary/20 p-3 sm:p-4">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <span className="text-xs sm:text-sm font-semibold">{t.calcSavings}</span>
            <span className={`text-xl sm:text-2xl font-black ${savings > 0 ? "text-primary" : "text-muted-foreground"}`}>
              {savings > 0 ? `+${formatCurrency(savings)}` : "—"}
            </span>
          </div>
          {savings > 0 && roiMonths > 0 && (
            <div className="text-[10px] sm:text-xs text-muted-foreground">{t.calcROI}: <span className="text-primary font-semibold">{roiMonths} {t.calcMonths}</span></div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────
export function VoiceSalesManagerClientPage({ locale }: { locale: Locale }) {
  const { openConsultation } = useCTA()
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [activeCase, setActiveCase] = useState(0)
  
  const t = translations[locale] || translations.ru

  return (
    <div className="bg-background overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1060 30%, #24243e 60%, #0d1b4b 100%)" }}>
        {/* Grid bg - hidden on mobile */}
        <div className="hidden sm:block pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Strong glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[400px] sm:h-[700px] w-[500px] sm:w-[900px] rounded-full bg-violet-600/25 blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="hidden sm:block absolute top-1/2 left-1/4 h-[400px] w-[500px] rounded-full bg-blue-500/20 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 pt-24 sm:pt-36 pb-12 sm:pb-20 lg:pt-48 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 sm:px-5 py-1.5 sm:py-2 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] sm:text-[13px] font-medium text-white/70">{t.badge}</span>
            </div>
          </div>

          {/* H1 */}
          <h1 className="mx-auto max-w-[960px] text-center text-balance text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold leading-[1.1] sm:leading-[1.07] tracking-[-0.02em] sm:tracking-[-0.03em] text-white px-2">
            {t.heroTitle}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t.heroHighlight}
            </span>
          </h1>

          <p className="mx-auto mt-4 sm:mt-8 max-w-2xl text-center text-pretty text-sm sm:text-lg leading-relaxed sm:leading-[1.75] text-white/50 px-4">
            {t.heroSubtitle}
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center px-4">
            <Button
              size="lg"
              className="h-12 sm:h-[54px] w-full sm:w-auto rounded-xl px-6 sm:px-8 text-sm sm:text-[15px] font-semibold shadow-[0_0_40px_rgba(56,130,255,.18)] hover:shadow-[0_0_70px_rgba(56,130,255,.28)] transition-all duration-300"
              onClick={openConsultation}
            >
              {t.heroCta} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 sm:h-[54px] w-full sm:w-auto rounded-xl px-6 sm:px-8 text-sm sm:text-[15px] font-semibold border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.18] backdrop-blur-sm transition-all duration-300"
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="mr-2 h-4 w-4" /> {t.heroCtaSecondary}
            </Button>
          </div>

          {/* Stats bar */}
          <div className="mt-12 sm:mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06] rounded-xl sm:rounded-2xl border border-white/[0.06] bg-white/[0.025] backdrop-blur-sm">
            {t.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-0.5 sm:gap-1.5 py-4 sm:py-8 lg:py-10 px-2 sm:px-4">
                <span className="text-xl sm:text-[2.2rem] lg:text-[2.5rem] font-extrabold tracking-tight text-white">{s.value}</span>
                <span className="text-[10px] sm:text-[12px] text-center text-white/40">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (Live Dialog) ── */}
      <section id="how-it-works" className="py-16 sm:py-24 lg:py-36 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(124,58,237,0.15),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto mb-10 sm:mb-16 max-w-3xl text-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-violet-300 mb-4 sm:mb-6">
              Demo
            </div>
            <h2 className="text-balance text-xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight text-white px-2">
              {t.howTitle}
            </h2>
            <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-[1.0625rem] leading-relaxed text-slate-400 px-4">
              {t.howDesc}
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">
            <Reveal>
              <LiveDialog locale={locale} />
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-3 sm:space-y-4">
                {t.demoFeatures.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex gap-3 sm:gap-4 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.14] transition-all">
                      <div className={`flex-shrink-0 h-9 w-9 sm:h-11 sm:w-11 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs sm:text-sm mb-0.5">{item.title}</div>
                        <div className="text-[11px] sm:text-sm text-slate-400 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-16 sm:py-24 lg:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto mb-10 sm:mb-16 max-w-3xl text-center">
            <SectionBadge>{locale === "ru" ? "Возможности" : "Features"}</SectionBadge>
            <h2 className="text-balance text-xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight px-2">
              {t.featuresTitle}
            </h2>
            <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-[1.0625rem] leading-relaxed text-muted-foreground px-4">
              {t.featuresDesc}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {t.features.map((f, idx) => {
              const Icon = f.icon
              return (
                <Reveal key={idx} delay={idx * 40}>
                  <div className="group relative rounded-xl sm:rounded-2xl border border-border/50 bg-card p-3 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />
                    <div className={`inline-flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${f.color} mb-3 sm:mb-5 shadow-lg`}>
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-base mb-1 sm:mb-2">{f.title}</h3>
                    <p className="text-[10px] sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ROI CALCULATOR ── */}
      <section className="py-16 sm:py-24 lg:py-36 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-14 items-center">
            <Reveal>
              <SectionBadge>{locale === "ru" ? "Экономика" : "Economics"}</SectionBadge>
              <h2 className="text-balance text-xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6">
                {t.calcTitle}
              </h2>
              <p className="text-sm sm:text-[1.0625rem] leading-relaxed text-muted-foreground mb-6 sm:mb-10">
                {t.calcDesc}
              </p>
              <div className="space-y-3 sm:space-y-4">
                {t.calcMetrics.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4">
                    <div className="text-lg sm:text-2xl font-black text-primary w-16 sm:w-24 flex-shrink-0">{item.v}</div>
                    <div className="text-xs sm:text-base text-muted-foreground">{item.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <ROICalculator locale={locale} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-16 sm:py-24 lg:py-36 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="mx-auto mb-10 sm:mb-14 max-w-3xl text-center">
            <SectionBadge>{locale === "ru" ? "Сравнение" : "Comparison"}</SectionBadge>
            <h2 className="text-balance text-xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight px-2">
              {t.compareTitle}
            </h2>
            <p className="mx-auto mt-3 sm:mt-5 text-sm sm:text-[1.0625rem] leading-relaxed text-muted-foreground px-4">
              {t.compareDesc}
            </p>
          </Reveal>

          <Reveal>
            <div className="rounded-xl sm:rounded-2xl border border-border/50 overflow-hidden overflow-x-auto">
              {/* Header */}
              <div className="grid grid-cols-3 bg-muted/50 border-b border-border/50 min-w-[400px]">
                <div className="px-3 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-sm font-semibold text-muted-foreground">{t.compareParam}</div>
                <div className="px-3 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-sm font-semibold text-center text-primary border-x border-border/50 bg-primary/5">{t.compareAI}</div>
                <div className="px-3 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-sm font-semibold text-center text-muted-foreground">{t.compareHuman}</div>
              </div>
              {t.compareRows.map((row, idx) => (
                <div key={idx} className={`grid grid-cols-3 border-b border-border/30 last:border-0 ${idx % 2 === 0 ? "bg-background" : "bg-muted/20"} min-w-[400px]`}>
                  <div className="px-3 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-sm font-medium">{row.metric}</div>
                  <div className={`px-3 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-sm text-center font-semibold border-x border-border/50 bg-primary/[0.02] ${row.winner === "ai" ? "text-primary" : "text-muted-foreground"}`}>
                    {row.winner === "ai" && <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary inline mr-1" />}
                    {row.ai}
                  </div>
                  <div className={`px-3 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-sm text-center ${row.winner === "human" ? "text-green-600 font-semibold" : "text-muted-foreground"}`}>
                    {row.winner === "human" && <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500 inline mr-1" />}
                    {row.human}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-16 sm:py-24 lg:py-36 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto mb-10 sm:mb-16 max-w-3xl text-center">
            <SectionBadge>{locale === "ru" ? "Отрасли" : "Industries"}</SectionBadge>
            <h2 className="text-balance text-xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight px-2">
              {t.industriesTitle}
            </h2>
            <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-[1.0625rem] leading-relaxed text-muted-foreground px-4">
              {t.industriesDesc}
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-4 sm:gap-6">
            {/* Tabs - horizontal scroll on mobile */}
            <div className="lg:col-span-2 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:space-y-2 no-scrollbar">
              {t.industries.map((ind, idx) => {
                const Icon = ind.icon
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndustry(idx)}
                    className={`flex-shrink-0 text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all flex items-center gap-2 sm:gap-3 whitespace-nowrap ${activeIndustry === idx ? "bg-primary text-primary-foreground shadow-lg" : "bg-card hover:bg-muted border border-border/50"}`}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${activeIndustry === idx ? "" : "text-muted-foreground"}`} />
                    <span className="font-medium text-xs sm:text-sm">{ind.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Details */}
            <div className="lg:col-span-3">
              {(() => {
                const ind = t.industries[activeIndustry]
                const Icon = ind.icon
                return (
                  <Card className="h-full">
                    <CardContent className="p-4 sm:p-8">
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold">{ind.name}</h3>
                      </div>
                      <p className="text-xs sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">{ind.desc}</p>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-5 bg-muted/50 rounded-lg sm:rounded-xl mb-6 sm:mb-8">
                        {ind.metrics.map((m, i) => (
                          <div key={i}>
                            <div className="text-lg sm:text-2xl font-black text-primary">{m.v}</div>
                            <div className="text-[10px] sm:text-sm text-muted-foreground">{m.l}</div>
                          </div>
                        ))}
                      </div>
                      <Button onClick={openConsultation} className="w-full text-xs sm:text-base">
                        {t.automateBtn} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASES ── */}
      <section className="py-16 sm:py-24 lg:py-36 text-white overflow-hidden relative" style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,rgba(124,58,237,0.2),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
          <Reveal className="mx-auto mb-10 sm:mb-16 max-w-3xl text-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-violet-300 mb-4 sm:mb-6">{locale === "ru" ? "Кейсы" : "Cases"}</div>
            <h2 className="text-balance text-xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight text-white px-2">
              {t.casesTitle}
            </h2>
            <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-[1.0625rem] leading-relaxed text-slate-400 px-4">
              {t.casesDesc}
            </p>
          </Reveal>

          {/* Case selector */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-10">
            {t.cases.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCase(idx)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-medium transition-all ${activeCase === idx ? "bg-white text-black" : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"}`}
              >
                {c.industry}
              </button>
            ))}
          </div>

          {/* Active case */}
          <Reveal>
            {(() => {
              const c = t.cases[activeCase]
              return (
                <div className="rounded-xl sm:rounded-2xl border border-white/[0.12] p-4 sm:p-8 lg:p-12"
                  style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)" }}>
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/15 border border-violet-400/25 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-semibold text-violet-300 uppercase tracking-wider mb-3 sm:mb-4">{c.industry}</div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white mb-5 sm:mb-8">{c.company}</h3>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-8">
                        <div className="rounded-lg sm:rounded-xl p-3 sm:p-4" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                          <div className="text-[10px] sm:text-xs text-slate-400 mb-1 sm:mb-2 flex items-center gap-1"><X className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-red-400" /> {t.before}</div>
                          <p className="text-[11px] sm:text-sm text-slate-300">{c.before}</p>
                        </div>
                        <div className="rounded-lg sm:rounded-xl p-3 sm:p-4" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
                          <div className="text-[10px] sm:text-xs text-slate-400 mb-1 sm:mb-2 flex items-center gap-1"><Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-400" /> {t.after}</div>
                          <p className="text-[11px] sm:text-sm text-slate-300">{c.after}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        {c.metrics.map((m, i) => (
                          <div key={i} className="text-center p-2 sm:p-4 rounded-lg sm:rounded-xl"
                            style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)" }}>
                            <div className="text-sm sm:text-xl font-black text-violet-300">{m.v}</div>
                            <div className="text-[9px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1">{m.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="rounded-xl sm:rounded-2xl p-4 sm:p-8 w-full"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-5">
                          {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />)}
                        </div>
                        <blockquote className="text-sm sm:text-lg text-slate-200 leading-relaxed italic mb-4 sm:mb-6">
                          &ldquo;{c.quote}&rdquo;
                        </blockquote>
                        <div className="text-xs sm:text-sm font-semibold text-slate-400">{c.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
          </Reveal>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-16 sm:py-24 lg:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto mb-12 sm:mb-20 max-w-3xl text-center">
            <SectionBadge>{locale === "ru" ? "Внедрение" : "Implementation"}</SectionBadge>
            <h2 className="text-balance text-xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight px-2">
              {t.timelineTitle}
            </h2>
            <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-[1.0625rem] leading-relaxed text-muted-foreground px-4">
              {t.timelineDesc}
            </p>
          </Reveal>

          <div className="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {/* Connecting line - desktop only */}
            <div className="absolute top-6 sm:top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block" />

            {t.phases.map((phase, idx) => {
              const Icon = phase.icon
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="relative rounded-xl sm:rounded-2xl border border-border/50 bg-background p-3 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all h-full">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                      <div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-2xl bg-primary/10 border border-primary/20">
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-xs font-bold text-primary">{phase.num}</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground">{phase.duration}</div>
                      </div>
                    </div>
                    <h3 className="font-bold text-xs sm:text-base mb-1 sm:mb-2">{phase.title}</h3>
                    <p className="text-[10px] sm:text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16 sm:py-24 lg:py-36 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto mb-10 sm:mb-16 max-w-3xl text-center">
            <SectionBadge>{locale === "ru" ? "Стоимость" : "Pricing"}</SectionBadge>
            <h2 className="text-balance text-xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight px-2">
              {t.pricingTitle}
            </h2>
            <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-[1.0625rem] leading-relaxed text-muted-foreground px-4">
              {t.pricingDesc}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {t.plans.map((plan, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div className={`relative rounded-xl sm:rounded-2xl border p-4 sm:p-8 h-full flex flex-col ${plan.popular ? "border-primary shadow-xl ring-2 ring-primary bg-card" : "border-border/50 bg-card"} ${idx === 2 ? "bg-[#0a0a0a] border-white/10 text-white" : ""}`}>
                  {plan.popular && (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-0.5 sm:py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold rounded-full whitespace-nowrap">
                        {t.popularChoice}
                      </div>
                    </>
                  )}
                  <div className={`text-xs sm:text-sm mb-1 sm:mb-2 ${idx === 2 ? "text-white/50" : "text-muted-foreground"}`}>{plan.name}</div>
                  <div className="flex items-baseline gap-1 mb-1 sm:mb-2">
                    <span className={`text-xl sm:text-3xl font-black ${idx === 2 ? "text-white" : ""}`}>{plan.price}</span>
                    {plan.period && <span className={`text-[10px] sm:text-sm ${idx === 2 ? "text-white/50" : "text-muted-foreground"}`}>{plan.period}</span>}
                  </div>
                  <div className={`text-[10px] sm:text-sm mb-4 sm:mb-7 ${idx === 2 ? "text-white/50" : "text-muted-foreground"}`}>{plan.desc}</div>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-8 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] sm:text-sm">
                        <Check className={`h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 ${idx === 2 ? "text-green-400" : "text-green-500"}`} />
                        <span className={idx === 2 ? "text-white/70" : ""}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={openConsultation}
                    className={`w-full text-xs sm:text-base ${idx === 2 ? "border-white/20 text-white hover:bg-white/10 bg-transparent" : ""}`}
                    variant={idx === 2 ? "outline" : plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 sm:py-24 lg:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto mb-10 sm:mb-16 max-w-3xl text-center">
            <SectionBadge>{locale === "ru" ? "Почему мы" : "Why Us"}</SectionBadge>
            <h2 className="text-balance text-xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight px-2">
              {t.whyTitle}
            </h2>
            <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-[1.0625rem] leading-relaxed text-muted-foreground px-4">
              {t.whyDesc}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {t.why.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={idx} delay={idx * 50}>
                  <div className="group rounded-xl sm:rounded-2xl border border-border/50 bg-card p-3 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all h-full">
                    <div className="h-9 w-9 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-base mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-[10px] sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-24 lg:py-36 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal className="mb-10 sm:mb-16 text-center">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="text-balance text-xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight px-2">
              {t.faqTitle}
            </h2>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
              {t.faq.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="rounded-lg sm:rounded-xl border border-border/50 bg-card px-3 sm:px-6 data-[state=open]:bg-muted/30"
                >
                  <AccordionTrigger className="py-3 sm:py-5 hover:no-underline text-left font-semibold text-xs sm:text-[15px]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 sm:pb-5 text-[11px] sm:text-base text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ── INTERNAL LINKS (SEO) ── */}
      <section className="py-10 sm:py-16 bg-background border-t border-border/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-base sm:text-xl font-bold mb-4 sm:mb-8 text-center">{t.relatedTitle}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
              {t.related.map((link, idx) => (
                <Link
                  key={idx}
                  href={`/${locale}${link.href}`}
                  className="flex items-center justify-between gap-2 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/50 bg-card hover:border-primary/40 hover:bg-muted/50 transition-all group text-[11px] sm:text-sm font-medium"
                >
                  <span className="line-clamp-1">{link.name}</span>
                  <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-[#060a16]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,130,255,0.12),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="hidden sm:block pointer-events-none absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] sm:leading-[1.05] tracking-[-0.02em] sm:tracking-[-0.025em] text-white mb-4 sm:mb-6 px-2">
              {t.ctaTitle}
            </h2>
            <p className="text-sm sm:text-lg text-white/50 mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed px-4">
              {t.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                className="h-12 sm:h-[54px] px-6 sm:px-8 bg-white text-black hover:bg-white/90 rounded-full text-sm sm:text-[15px] font-semibold w-full sm:w-auto"
                onClick={openConsultation}
              >
                {t.ctaBtn} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 sm:h-[54px] px-6 sm:px-8 border-white/15 text-white hover:bg-white/8 bg-transparent rounded-full text-sm sm:text-[15px] font-semibold w-full sm:w-auto"
                onClick={openConsultation}
              >
                {t.ctaBtnSecondary}
              </Button>
            </div>
            <p className="mt-6 sm:mt-8 text-[11px] sm:text-sm text-white/30 px-4">{t.ctaFooter}</p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
