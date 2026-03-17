"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  ChevronDown,
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
  Headphones,
  Star,
  CheckCircle2,
  X,
  Minus,
  PhoneCall,
  RefreshCw,
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
    <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 ${light ? "border-white/20 text-white/60 bg-white/5" : "border-primary/20 text-primary bg-primary/5"}`}>
      {children}
    </div>
  )
}

// ─── Live dialog demo ────────────────────────────────────────────────────────
const dialogScript = [
  { role: "client", text: "Добрый день! Мне нужно заказать 50 квадратных метров ламината, артикул ЛМ-2024, и доставку в Подмосковье." },
  { role: "ai", text: "Здравствуйте! Нашёл артикул ЛМ-2024 — ламинат 32 класса, цена 890 руб/м². 50 м² = 44 500 руб. Доставка в Подмосковье — 2 500 руб. Итого 47 000 руб. Оформить счёт?" },
  { role: "client", text: "Да, выставьте счёт на ООО Стройторг, ИНН 7712345678." },
  { role: "ai", text: "Счёт сформирован и отправлен на почту. Номер заказа #4821. Доставка через 2 рабочих дня. Что-то ещё?" },
  { role: "client", text: "Всё отлично, спасибо!" },
  { role: "ai", text: "Отлично! Ваш заказ принят в работу. Хорошего дня!" },
]

function LiveDialog() {
  const [step, setStep] = useState(0)
  const [running, setRunning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!running) return
    if (step >= dialogScript.length) { setRunning(false); return }
    const delay = step === 0 ? 400 : dialogScript[step - 1].role === "client" ? 1200 : 1800
    const t = setTimeout(() => setStep(s => s + 1), delay)
    return () => clearTimeout(t)
  }, [running, step])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [step])

  const reset = () => { setStep(0); setRunning(false) }
  const start = () => { reset(); setTimeout(() => { setStep(0); setRunning(true) }, 50) }

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(124,58,237,0.2),0_20px_60px_rgba(0,0,0,0.4)] bg-[#111827]"
      style={{ background: "linear-gradient(145deg, #1e1b4b 0%, #1e293b 100%)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]"
        style={{ background: "rgba(124,58,237,0.08)" }}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <Mic className="h-4.5 w-4.5 text-white" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#1e1b4b] bg-emerald-400 shadow shadow-emerald-400/60" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">AI Голосовой менеджер</div>
            <div className="text-[11px] text-emerald-400 font-medium">● Онлайн · обрабатывает звонки</div>
          </div>
        </div>
        <button onClick={start} className="flex items-center gap-1.5 rounded-full bg-violet-500/20 border border-violet-400/30 px-4 py-2 text-[12px] font-semibold text-violet-300 hover:bg-violet-500/30 hover:text-white transition-all">
          <Play className="h-3 w-3" /> Запустить
        </button>
      </div>

      {/* Messages */}
      <div ref={containerRef} className="h-72 overflow-y-auto p-5 space-y-4 scroll-smooth">
        {step === 0 && !running && (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-400/30 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Play className="h-7 w-7 text-violet-400 ml-0.5" />
            </div>
            <p className="text-slate-400 text-sm text-center">Нажмите «Запустить» чтобы увидеть<br/>как AI ведёт реальный диалог</p>
          </div>
        )}
        {dialogScript.slice(0, step).map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === "client" ? "flex-row-reverse" : ""}`}>
            <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md ${msg.role === "ai" ? "bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-violet-500/30" : "bg-slate-600/60 text-slate-300"}`}>
              {msg.role === "ai" ? <Mic className="h-3.5 w-3.5" /> : "К"}
            </div>
            <div className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === "ai" ? "bg-white/[0.08] text-white rounded-tl-none border border-white/[0.06]" : "bg-gradient-to-br from-violet-600/30 to-purple-500/20 text-white border border-violet-400/20 rounded-tr-none"}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {running && step < dialogScript.length && (
          <div className={`flex gap-3 ${dialogScript[step]?.role === "client" ? "flex-row-reverse" : ""}`}>
            <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-xs ${dialogScript[step]?.role === "ai" ? "bg-gradient-to-br from-violet-500 to-cyan-400 text-white" : "bg-slate-600/60 text-slate-300"}`}>
              {dialogScript[step]?.role === "ai" ? <Mic className="h-3.5 w-3.5" /> : "К"}
            </div>
            <div className="flex items-center gap-1 px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/[0.06]">
              {[0, 1, 2].map(i => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3.5 border-t border-white/[0.06] flex items-center justify-between"
        style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="flex items-center gap-4 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5"><Clock className="h-3 w-3 text-violet-400" /> 47 сек</span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium"><CheckCircle2 className="h-3 w-3" /> Счёт выставлен</span>
        </div>
        <span className="text-[11px] text-slate-500">Без участия человека</span>
      </div>
    </div>
  )
}

// ─── ROI Calculator ──────────────────────────────────────────────────────────
function ROICalculator() {
  const [operators, setOperators] = useState(5)
  const [callsPerDay, setCallsPerDay] = useState(100)

  const operatorCostPerMonth = 65000
  const operatorCalls = 60
  const aiCostBase = 45000
  const aiCostPerCall = 12

  const currentCost = operators * operatorCostPerMonth
  const aiCost = aiCostBase + callsPerDay * 30 * aiCostPerCall
  const savings = currentCost - aiCost
  const roiMonths = savings > 0 ? Math.ceil(aiCostBase / savings) : 0
  const missedCalls = Math.max(0, callsPerDay - operators * operatorCalls)

  return (
    <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
      <div className="p-6 border-b border-border/50">
        <h3 className="text-lg font-bold mb-1">Калькулятор экономии</h3>
        <p className="text-sm text-muted-foreground">Рассчитайте выгоду для вашего бизнеса</p>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium">Количество операторов</label>
            <span className="text-sm font-bold text-primary">{operators}</span>
          </div>
          <input type="range" min={1} max={50} value={operators} onChange={e => setOperators(+e.target.value)}
            className="w-full accent-primary h-2 rounded-full" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>1</span><span>50</span></div>
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium">Звонков в день</label>
            <span className="text-sm font-bold text-primary">{callsPerDay}</span>
          </div>
          <input type="range" min={10} max={1000} step={10} value={callsPerDay} onChange={e => setCallsPerDay(+e.target.value)}
            className="w-full accent-primary h-2 rounded-full" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>10</span><span>1000</span></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-4">
            <div className="text-xs text-muted-foreground mb-1">Сейчас (операторы)</div>
            <div className="text-xl font-bold text-red-500">{(currentCost / 1000).toFixed(0)}к ₽/мес</div>
          </div>
          <div className="rounded-xl bg-green-500/5 border border-green-500/20 p-4">
            <div className="text-xs text-muted-foreground mb-1">С AI менеджером</div>
            <div className="text-xl font-bold text-green-500">{(aiCost / 1000).toFixed(0)}к ₽/мес</div>
          </div>
        </div>

        {missedCalls > 0 && (
          <div className="rounded-xl bg-orange-500/5 border border-orange-500/20 p-3 text-sm">
            <span className="text-orange-500 font-semibold">{missedCalls} звонков/день</span>
            <span className="text-muted-foreground"> теряется из-за нехватки операторов</span>
          </div>
        )}

        <div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Ежемесячная экономия</span>
            <span className={`text-2xl font-black ${savings > 0 ? "text-primary" : "text-muted-foreground"}`}>
              {savings > 0 ? `+${(savings / 1000).toFixed(0)}к ₽` : "Рассчитываем..."}
            </span>
          </div>
          {savings > 0 && roiMonths > 0 && (
            <div className="text-xs text-muted-foreground">Окупаемость: <span className="text-primary font-semibold">{roiMonths} мес.</span></div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Translations (RU focused, other locales minimal) ────────────────────────
const t = {
  badge: "Голосовой AI · Автоматизация продаж",
  heroTitle: "Голосовой AI-менеджер,",
  heroHighlight: " который продаёт",
  heroSubtitle: "Полностью автоматизированная система продаж. Принимает звонки, ведёт диалог, рассчитывает стоимость и выставляет счёт — за 30 секунд, без единого оператора.",
  heroCta: "Получить демо",
  heroCtaSecondary: "Смотреть пример диалога",

  // Stats
  stats: [
    { value: "50+", label: "компаний используют" },
    { value: "98%", label: "успешных звонков" },
    { value: "24/7", label: "без выходных" },
    { value: "30 сек", label: "от звонка до счёта" },
  ],

  // How it works - dialog steps
  howTitle: "Как это выглядит в реальности",
  howDesc: "Нажмите «Запустить» и посмотрите, как AI ведёт реальный диалог о продаже стройматериалов",

  // Features
  featuresTitle: "Что умеет AI-менеджер",
  featuresDesc: "Система не читает скрипты — она думает, считает и принимает решения как опытный продавец",
  features: [
    { icon: Brain, title: "Естественный диалог", desc: "Понимает суть разговора, задаёт уточняющие вопросы, отрабатывает возражения", color: "from-blue-500 to-cyan-400" },
    { icon: Calculator, title: "Сложные расчёты", desc: "Мгновенно считает площадь, объём, стоимость с коэффициентами и скидками", color: "from-purple-500 to-pink-400" },
    { icon: Package, title: "Работа с каталогом", desc: "Знает все товары, цены, наличие, сроки доставки в реальном времени", color: "from-orange-500 to-amber-400" },
    { icon: Truck, title: "Расчёт доставки", desc: "Определяет вес, габариты, подбирает транспорт, озвучивает стоимость", color: "from-green-500 to-emerald-400" },
    { icon: FileText, title: "Выставление счётов", desc: "Формирует счёт, акт, накладную автоматически и отправляет на почту", color: "from-teal-500 to-cyan-400" },
    { icon: PhoneForwarded, title: "Умная маршрутизация", desc: "Передаёт квалифицированных клиентов нужному менеджеру с контексто��", color: "from-red-500 to-rose-400" },
    { icon: UserCheck, title: "Помнит клиента", desc: "Хранит историю звонков, предпочтения и прошлые покупки", color: "from-violet-500 to-purple-400" },
    { icon: ShoppingCart, title: "Закрывает сделку", desc: "От первого звонка до получения оплаты — без участия человека", color: "from-sky-500 to-blue-400" },
  ],

  // Comparison
  compareTitle: "AI-менеджер vs. Оператор",
  compareDesc: "Прямое сравнение по ключевым метрикам",
  compareRows: [
    { metric: "Стоимость в месяц", ai: "от 45 000 ₽", human: "от 65 000 ₽ × N", winner: "ai" },
    { metric: "Время ответа", ai: "3 секунды", human: "20–40 секунд", winner: "ai" },
    { metric: "Параллельных звонков", ai: "Неограниченно", human: "1", winner: "ai" },
    { metric: "Режим работы", ai: "24/7/365", human: "8–10 ч. + выходные", winner: "ai" },
    { metric: "Ошибки в расчётах", ai: "Нет", human: "До 12%", winner: "ai" },
    { metric: "Скорость до счёта", ai: "30 секунд", human: "10–30 минут", winner: "ai" },
    { metric: "Обучение", ai: "1 раз настроить", human: "1–3 месяца", winner: "ai" },
    { metric: "Качество нестандартного", ai: "Ограничено", human: "Высокое", winner: "human" },
  ],

  // Industries
  industriesTitle: "Для каких отраслей подходит",
  industriesDesc: "Готовые сценарии и отраслевая экспертиза",
  industries: [
    { icon: Building2, name: "B2B оптовая торговля", desc: "Обработка входящих заявок, расчёт партий, оформление счетов для оптовых клиентов", metrics: [{ v: "500+", l: "заказов/день" }, { v: "−70%", l: "операторов" }] },
    { icon: Package, name: "Производство", desc: "Сложные конфигурации, расчёт по чертежам, согласование сроков и технических требований", metrics: [{ v: "1000+", l: "расчётов/день" }, { v: "+300%", l: "скорость" }] },
    { icon: Truck, name: "Логистика", desc: "Расчёт стоимости доставки, выбор маршрута, отслеживание и уведомление клиентов", metrics: [{ v: "200+", l: "заявок/день" }, { v: "+45%", l: "конверсия" }] },
    { icon: Globe, name: "E-commerce", desc: "Консультации, проверка наличия, апсейл и обработка возвратов по голосовому каналу", metrics: [{ v: "98%", l: "NPS" }, { v: "−60%", l: "CAC" }] },
    { icon: BarChart3, name: "Финансы и страхование", desc: "Квалификация лидов, первичная консультация, запись на встречу к менеджеру", metrics: [{ v: "3x", l: "конверсия" }, { v: "−50%", l: "стоимость лида" }] },
    { icon: Users, name: "Услуги и консалтинг", desc: "Запись на встречу, предварительная квалификация, отправка КП и расчётов", metrics: [{ v: "24/7", l: "доступность" }, { v: "+200%", l: "охват" }] },
  ],

  // Pricing
  pricingTitle: "Стоимость внедрения",
  pricingDesc: "Прозрачное ценообразование. Фиксированная ежемесячная плата, без скрытых комиссий",
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

  // Timeline
  timelineTitle: "Как проходит внедрение",
  timelineDesc: "От первого созвона до живых звонков — за 20–30 рабочих дней",
  phases: [
    { num: "01", title: "Аудит и анализ", duration: "1–2 нед.", desc: "Изучаем ваши продажи, типичные запросы, каталог, прайс и исключения. Формируем ТЗ.", icon: MessageSquare },
    { num: "02", title: "Проектирование", duration: "1–2 нед.", desc: "Строим сценарии диалогов, логику расчётов, интеграции с вашими системами.", icon: GitMerge },
    { num: "03", title: "Разработка и обучение", duration: "2–4 нед.", desc: "Обучаем AI на ваших данных, настраиваем интеграции, тестируем на реальных кейсах.", icon: Cpu },
    { num: "04", title: "Запуск и оптимизация", duration: "1 нед.", desc: "Пилотный запуск, контроль качества, обучение команды, перевод в продакшн.", icon: Zap },
  ],

  // Cases
  casesTitle: "Реальные результаты",
  casesDesc: "Что произошло у клиентов после внедрения",
  cases: [
    {
      company: "Оптовая торговля стройматериалами",
      industry: "B2B, Москва",
      before: "12 операторов, 40% пропущенных звонков",
      after: "2 операторы (для сложных), 0% пропущенных",
      metrics: [{ v: "−780k ₽", l: "экономия/мес" }, { v: "+68%", l: "конверсия" }, { v: "3 нед.", l: "внедрение" }],
      quote: "AI знает наш прайс лучше, чем половина менеджеров. Он не устаёт, не ошибается в расчётах и работает даже ночью.",
    },
    {
      company: "Производитель металлоконструкций",
      industry: "Производство, СПб",
      before: "Расчёт заявки — до 2 часов, потеря клиентов",
      after: "Расчёт за 40 секунд, счёт сразу на почте",
      metrics: [{ v: "×4", l: "скорость обработки" }, { v: "+120%", l: "выручка" }, { v: "1 мес.", l: "окупаемость" }],
      quote: "Конкуренты до сих пор звонят клиенту через час. Мы отправляем счёт пока они набирают номер.",
    },
    {
      company: "Транспортная компания",
      industry: "Логистика, Федеральная сеть",
      before: "Колл-центр 20 человек, пиковые нагрузки",
      after: "AI обрабатывает 85% запросов самостоятельно",
      metrics: [{ v: "−65%", l: "затраты на ФОТ" }, { v: "200+", l: "заявок/час" }, { v: "98%", l: "NPS" }],
      quote: "В пиковый сезон раньше нам не хватало людей. Теперь AI справляется с любым объёмом.",
    },
  ],

  // Why us
  whyTitle: "Почему M2 AI Solutions",
  whyDesc: "Не интегратор, а разработчик собственной платформы",
  why: [
    { icon: Cpu, title: "Собственная платформа", desc: "Разрабатываем технологию сами. Полный контроль над AI-моделями, скоростью развития и данными клиентов." },
    { icon: Globe, title: "Мультиязычность", desc: "6 языков из коробки. Автоопределение языка собеседника и переключение в реальном времени." },
    { icon: Zap, title: "Запуск за 20–30 дней", desc: "Готовые коннекторы к Bitrix24, amoCRM, 1C, Salesforce и 50+ другим системам." },
    { icon: Shield, title: "Безопасность данных", desc: "ISO 27001, GDPR, 152-ФЗ. Данные на защищённых серверах. Опция on-premise." },
    { icon: Database, title: "Обучение на ваших данных", desc: "AI обучается на ваших звонках, прайсах и FAQ. Говорит как ваш лучший менеджер." },
    { icon: TrendingUp, title: "Гарантия результата", desc: "ROI рассчитываем до старта. Средняя окупаемость — 1–2 месяца. Пилот с измеримыми KPI." },
  ],

  // FAQ
  faqTitle: "Частые вопросы",
  faq: [
    { q: "Чем AI-менеджер отличается от обычного голосового бота?", a: "Обычные боты работают по жёстким скриптам и не способны адаптироваться. Наш AI-менеджер понимает суть разговора, ведёт динамический диалог, выполняет сложные математические расчёты, работает с базами данных в реальном времени и может полностью закрыть сделку — от первого вопроса до выставления счёта." },
    { q: "Сколько времени занимает внедрение?", a: "Стандартный проект запускается за 20–30 рабочих дней. Это включает аудит процессов, разработку сценариев диалогов, обучение AI на ваших данных, настройку интеграций и тестирование. Сложные проекты с нестандартной логикой — 4–8 недель." },
    { q: "Может ли система полностью заменить операторов?", a: "В большинстве случаев AI обрабатывает 85–95% типовых звонков самостоятельно. Нестандартные ситуации и важные клиенты переводятся к живому менеджеру с полным контекстом разговора. Это позволяет сократить штат операторов на 70–80%, сохранив качество обслуживания." },
    { q: "Как система интегрируется с нашей CRM?", a: "Мы поддерживаем нативную интеграцию с Bitrix24, amoCRM, Salesforce, HubSpot, 1C и более 50 другими системами. Каждый звонок автоматически создаёт или обновляет карточку клиента, добавляет запись разговора и ставит задачи менеджерам." },
    { q: "Что происходит, если клиент задаёт нестандартный вопрос?", a: "AI сначала пытается ответить, используя базу знаний и логику. Если вопрос выходит за рамки — система корректно сообщает об этом и предлагает соединить с живым специалистом. Все такие случаи логируются для дообучения." },
    { q: "Сколько звонков может обрабатывать система одновременно?", a: "Система масштабируется горизонтально и технически не имеет ограничений на количество параллельных звонков. Пиковые нагрузки обрабатываются автоматически без потери качества." },
    { q: "Как быстро окупается внедрение?", a: "Средняя окупаемость — 1–2 месяца. Экономия складывается из: сокращение ФОТ операторов, снижение % пропущенных звонков, ускорение обработки заявок и рост конверсии. Перед стартом мы рассчитываем ROI конкретно для вашего бизнеса." },
  ],

  // CTA
  ctaTitle: "Готовы автоматизировать продажи?",
  ctaDesc: "Запустим AI-менеджер для вашего бизнеса. Первая консультация и расчёт ROI — бесплатно.",
  ctaBtn: "Получить демо",
  ctaBtnSecondary: "Рассчитать экономию",

  // Related links
  relatedTitle: "Связанные решения",
  related: [
    { name: "AI для бизнеса", href: "/solutions/ai-dlya-biznesa" },
    { name: "AI оператор", href: "/solutions/robot-operator" },
    { name: "Автоматизация продаж", href: "/solutions/automation-sales" },
    { name: "Обработка заявок", href: "/solutions/obrabotka-zayavok" },
    { name: "Выставление счетов", href: "/solutions/vystavlenie-schetov" },
    { name: "AI автоматизация", href: "/solutions/ai-avtomatizaciya-biznesa" },
  ],
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function VoiceSalesManagerClientPage({ locale }: { locale: Locale }) {
  const { openConsultation } = useCTA()
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [activeCase, setActiveCase] = useState(0)

  return (
    <div className="bg-background overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1060 30%, #24243e 60%, #0d1b4b 100%)" }}>
        {/* Grid bg */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Strong glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-violet-600/25 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[500px] rounded-full bg-blue-500/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[450px] rounded-full bg-cyan-500/15 blur-[110px] pointer-events-none" />
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[80px] pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-20 lg:pt-48 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-white/70">{t.badge}</span>
            </div>
          </div>

          {/* H1 */}
          <h1 className="mx-auto max-w-[960px] text-center text-balance text-[2.6rem] font-extrabold leading-[1.07] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            {t.heroTitle}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t.heroHighlight}
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-center text-pretty text-lg leading-[1.75] text-white/50">
            {t.heroSubtitle}
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-[54px] rounded-xl px-8 text-[15px] font-semibold shadow-[0_0_40px_rgba(56,130,255,.18)] hover:shadow-[0_0_70px_rgba(56,130,255,.28)] transition-all duration-300"
              onClick={openConsultation}
            >
              {t.heroCta} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-[54px] rounded-xl px-8 text-[15px] font-semibold border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.18] backdrop-blur-sm transition-all duration-300"
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="mr-2 h-4 w-4" /> {t.heroCtaSecondary}
            </Button>
          </div>

          {/* Stats bar */}
          <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.025] backdrop-blur-sm">
            {t.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5 py-8 lg:py-10 px-4">
                <span className="text-[2.2rem] font-extrabold tracking-tight text-white sm:text-[2.5rem]">{s.value}</span>
                <span className="text-[12px] text-center text-white/40">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (Live Dialog) ── */}
      <section id="how-it-works" className="py-28 lg:py-36 relative overflow-hidden bg-slate-950">
        {/* Subtle gradient top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(124,58,237,0.15),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-violet-300 mb-6">
              Демо
            </div>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {t.howTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-400">
              {t.howDesc}
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <LiveDialog />
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-4">
                {[
                  { icon: Mic, title: "Распознавание речи 98%", desc: "Понимает акценты, сленг, технические термины вашей отрасли", color: "from-violet-500 to-purple-400" },
                  { icon: Cpu, title: "Решения в реальном времени", desc: "Обращается к базам данных, каталогу и CRM прямо во время разговора", color: "from-blue-500 to-cyan-400" },
                  { icon: FileText, title: "Документы за 3 секунды", desc: "Счёт, накладная или акт — формируются и отправляются на почту моментально", color: "from-emerald-500 to-teal-400" },
                  { icon: PhoneCall, title: "Работает параллельно", desc: "Принимает тысячи звонков одновременно, без очереди и ожидания", color: "from-orange-500 to-amber-400" },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.14] transition-all">
                      <div className={`flex-shrink-0 h-11 w-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm mb-0.5">{item.title}</div>
                        <div className="text-sm text-slate-400 leading-relaxed">{item.desc}</div>
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
      <section className="py-28 lg:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <SectionBadge>Возможности</SectionBadge>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.featuresTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.featuresDesc}
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.map((f, idx) => {
              const Icon = f.icon
              return (
                <Reveal key={idx} delay={idx * 60}>
                  <div className="group relative rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} mb-5 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-base mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ROI CALCULATOR ── */}
      <section className="py-28 lg:py-36 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <SectionBadge>Экономика</SectionBadge>
              <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl mb-6">
                Сколько вы сэкономите с AI
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-muted-foreground mb-10">
                Средний клиент сокращает затраты на колл-центр на 60–70% уже в первый месяц. Рассчитайте экономию для вашего бизнеса прямо сейчас.
              </p>
              <div className="space-y-4">
                {[
                  { v: "−70%", l: "расходов на операторов" },
                  { v: "0%", l: "пропущенных звонков" },
                  { v: "+45%", l: "конверсия в сделку" },
                  { v: "1–2 мес.", l: "средняя окупаемость" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="text-2xl font-black text-primary w-24 flex-shrink-0">{item.v}</div>
                    <div className="text-muted-foreground">{item.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <ROICalculator />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <SectionBadge>Сравнение</SectionBadge>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.compareTitle}
            </h2>
            <p className="mx-auto mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.compareDesc}
            </p>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border/50 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-muted/50 border-b border-border/50">
                <div className="px-6 py-4 text-sm font-semibold text-muted-foreground">Параметр</div>
                <div className="px-6 py-4 text-sm font-semibold text-center text-primary border-x border-border/50 bg-primary/5">AI-менеджер</div>
                <div className="px-6 py-4 text-sm font-semibold text-center text-muted-foreground">Оператор</div>
              </div>
              {t.compareRows.map((row, idx) => (
                <div key={idx} className={`grid grid-cols-3 border-b border-border/30 last:border-0 ${idx % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                  <div className="px-6 py-4 text-sm font-medium">{row.metric}</div>
                  <div className={`px-6 py-4 text-sm text-center font-semibold border-x border-border/50 bg-primary/[0.02] ${row.winner === "ai" ? "text-primary" : "text-muted-foreground"}`}>
                    {row.winner === "ai" && <CheckCircle2 className="h-3.5 w-3.5 text-primary inline mr-1.5" />}
                    {row.ai}
                  </div>
                  <div className={`px-6 py-4 text-sm text-center ${row.winner === "human" ? "text-green-600 font-semibold" : "text-muted-foreground"}`}>
                    {row.winner === "human" && <CheckCircle2 className="h-3.5 w-3.5 text-green-500 inline mr-1.5" />}
                    {row.human}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-28 lg:py-36 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <SectionBadge>Отрасли</SectionBadge>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.industriesTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.industriesDesc}
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Tabs */}
            <div className="lg:col-span-2 space-y-2">
              {t.industries.map((ind, idx) => {
                const Icon = ind.icon
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndustry(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-3 ${activeIndustry === idx ? "bg-primary text-primary-foreground shadow-lg" : "bg-card hover:bg-muted border border-border/50"}`}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${activeIndustry === idx ? "" : "text-muted-foreground"}`} />
                    <span className="font-medium text-sm">{ind.name}</span>
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
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{ind.name}</h3>
                      </div>
                      <p className="text-muted-foreground mb-8 leading-relaxed">{ind.desc}</p>
                      <div className="grid grid-cols-2 gap-4 p-5 bg-muted/50 rounded-xl mb-8">
                        {ind.metrics.map((m, i) => (
                          <div key={i}>
                            <div className="text-2xl font-black text-primary">{m.v}</div>
                            <div className="text-sm text-muted-foreground">{m.l}</div>
                          </div>
                        ))}
                      </div>
                      <Button onClick={openConsultation} className="w-full">
                        Автоматизировать этот процесс <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="py-28 lg:py-36 text-white overflow-hidden relative" style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,rgba(124,58,237,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(59,130,246,0.15),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-violet-300 mb-6">Кейсы</div>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {t.casesTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-400">
              {t.casesDesc}
            </p>
          </Reveal>

          {/* Case selector */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {t.cases.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCase(idx)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCase === idx ? "bg-white text-black" : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"}`}
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
                <div className="rounded-2xl border border-white/[0.12] p-8 lg:p-12"
                  style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)" }}>
                  <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/15 border border-violet-400/25 px-3 py-1 text-[11px] font-semibold text-violet-300 uppercase tracking-wider mb-4">{c.industry}</div>
                      <h3 className="text-2xl font-bold text-white mb-8">{c.company}</h3>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="rounded-xl p-4" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                          <div className="text-xs text-slate-400 mb-2 flex items-center gap-1.5"><X className="h-3 w-3 text-red-400" /> Было</div>
                          <p className="text-sm text-slate-300">{c.before}</p>
                        </div>
                        <div className="rounded-xl p-4" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
                          <div className="text-xs text-slate-400 mb-2 flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-400" /> Стало</div>
                          <p className="text-sm text-slate-300">{c.after}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {c.metrics.map((m, i) => (
                          <div key={i} className="text-center p-4 rounded-xl"
                            style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)" }}>
                            <div className="text-xl font-black text-violet-300">{m.v}</div>
                            <div className="text-[11px] text-slate-400 mt-1">{m.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="rounded-2xl p-8 w-full"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <div className="flex gap-1 mb-5">
                          {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
                        </div>
                        <blockquote className="text-lg text-slate-200 leading-relaxed italic mb-6">
                          &ldquo;{c.quote}&rdquo;
                        </blockquote>
                        <div className="text-sm font-semibold text-slate-400">{c.company}</div>
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
      <section className="py-28 lg:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <SectionBadge>Внедрение</SectionBadge>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.timelineTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.timelineDesc}
            </p>
          </Reveal>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block" />

            {t.phases.map((phase, idx) => {
              const Icon = phase.icon
              return (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="relative rounded-2xl border border-border/50 bg-background p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary">{phase.num}</div>
                        <div className="text-xs text-muted-foreground">{phase.duration}</div>
                      </div>
                    </div>
                    <h3 className="font-bold text-base mb-2">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-28 lg:py-36 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <SectionBadge>Стоимость</SectionBadge>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.pricingTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.pricingDesc}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {t.plans.map((plan, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className={`relative rounded-2xl border p-8 h-full flex flex-col ${plan.popular ? "border-primary shadow-xl ring-2 ring-primary bg-card" : "border-border/50 bg-card"} ${idx === 2 ? "bg-[#0a0a0a] border-white/10 text-white" : ""}`}>
                  {plan.popular && (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap">
                        Популярный выбор
                      </div>
                    </>
                  )}
                  <div className={`text-sm mb-2 ${idx === 2 ? "text-white/50" : "text-muted-foreground"}`}>{plan.name}</div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className={`text-3xl font-black ${idx === 2 ? "text-white" : ""}`}>{plan.price}</span>
                    {plan.period && <span className={`text-sm ${idx === 2 ? "text-white/50" : "text-muted-foreground"}`}>{plan.period}</span>}
                  </div>
                  <div className={`text-sm mb-7 ${idx === 2 ? "text-white/50" : "text-muted-foreground"}`}>{plan.desc}</div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm">
                        <Check className={`h-4 w-4 flex-shrink-0 ${idx === 2 ? "text-green-400" : "text-green-500"}`} />
                        <span className={idx === 2 ? "text-white/70" : ""}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={openConsultation}
                    className={`w-full ${idx === 2 ? "border-white/20 text-white hover:bg-white/10 bg-transparent" : ""} ${plan.popular ? "" : "variant-outline"}`}
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
      <section className="py-28 lg:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <SectionBadge>Почему мы</SectionBadge>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.whyTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.whyDesc}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.why.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={idx} delay={idx * 70}>
                  <div className="group rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 lg:py-36 bg-muted/30">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-16 text-center">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.faqTitle}
            </h2>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {t.faq.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="rounded-xl border border-border/50 bg-card px-6 data-[state=open]:bg-muted/30"
                >
                  <AccordionTrigger className="py-5 hover:no-underline text-left font-semibold text-[15px]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ── INTERNAL LINKS (SEO) ── */}
      <section className="py-16 bg-background border-t border-border/30">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-xl font-bold mb-8 text-center">{t.relatedTitle}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {t.related.map((link, idx) => (
                <Link
                  key={idx}
                  href={`/${locale}${link.href}`}
                  className="flex items-center justify-between gap-2 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/40 hover:bg-muted/50 transition-all group text-sm font-medium"
                >
                  {link.name}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-28 overflow-hidden bg-[#060a16]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,130,255,0.12),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-0.025em] text-white mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
              {t.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-[54px] px-8 bg-white text-black hover:bg-white/90 rounded-full text-[15px] font-semibold"
                onClick={openConsultation}
              >
                {t.ctaBtn} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[54px] px-8 border-white/15 text-white hover:bg-white/8 bg-transparent rounded-full text-[15px] font-semibold"
                onClick={openConsultation}
              >
                {t.ctaBtnSecondary}
              </Button>
            </div>
            <p className="mt-8 text-sm text-white/30">Без обязательств · Демо за 24 часа · NDA по запросу</p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
