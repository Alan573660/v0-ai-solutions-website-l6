"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Play,
  Pause,
  CheckCircle2,
  Zap,
  Phone,
  Users,
  TrendingUp,
  Clock,
  Award,
  Settings,
  Bot,
  Target,
  Headphones,
  Building2,
  Home,
  Building,
  Shield,
  BarChart3,
  Globe,
  Lock,
  ArrowUpRight,
  FileText,
  MessageSquare,
  Database,
  Send,
  Truck,
  Receipt,
  Brain,
  Sparkles,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  Check,
  type LucideIcon,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { getSolutions, getCallExamples } from "./home-data"
import { useCTA } from "@/components/modals/cta-provider"

/* ================================================================== */
/*  Intersection Observer hook                                         */
/* ================================================================== */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ================================================================== */
/*  Reveal wrapper                                                     */
/* ================================================================== */
function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ================================================================== */
/*  Section label                                                      */
/* ================================================================== */
function Label({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "border-white/10 text-white/60" : "border-border text-muted-foreground"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-sky-400" : "bg-primary"}`} />
      {children}
    </div>
  )
}

/* ================================================================== */
/*  Animated Counter                                                   */
/* ================================================================== */
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, visible } = useReveal()
  
  useEffect(() => {
    if (!visible) return
    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [visible, value])
  
  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

/* ================================================================== */
/*  Voice Waveform Animation                                           */
/* ================================================================== */
function VoiceWaveform({ isActive = true }: { isActive?: boolean }) {
  return (
    <div className="flex items-center gap-[3px] h-12">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className={`w-[3px] rounded-full bg-gradient-to-t from-sky-500 to-cyan-400 transition-all duration-150 ${isActive ? "animate-pulse" : ""}`}
          style={{
            height: `${Math.sin(i * 0.3) * 30 + 35 + Math.random() * 10}%`,
            animationDelay: `${i * 50}ms`,
            animationDuration: `${800 + Math.random() * 400}ms`,
          }}
        />
      ))}
    </div>
  )
}

/* ================================================================== */
/*  Floating Cards                                                     */
/* ================================================================== */
function FloatingCard({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div 
      className={`absolute ${className} animate-float`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ================================================================== */
/*  Content                                                            */
/* ================================================================== */
const content = {
  ru: {
    hero: {
      badge: "AI-платформа автоматизации",
      title: "AI-платформа автоматизации бизнеса",
      titleHighlight: "",
      subtitle: "Звонки, продажи, заявки и счета — без операторов. AI-агенты, которые продают, отвечают на звонки и обрабатывают заявки 24/7.",
      ctaPrimary: "Запросить демо",
      ctaSecondary: "Послушать AI-звонок",
      trustText: "Внедрение от 7 дней • ROI от 3 недель • 100+ клиентов",
    },
    stats: [
      { value: 100, suffix: "+", label: "Клиентов" },
      { value: 87, suffix: "%", label: "Рост конверсии" },
      { value: 3, suffix: " сек", label: "Время ответа" },
      { value: 24, suffix: "/7", label: "Работа AI" },
    ],
    whatAutomates: {
      label: "Что автоматизирует AI",
      title: "6 направлений автоматизации",
      subtitle: "Единая платформа для автоматизации всех бизнес-процессов",
      items: [
        { icon: PhoneIncoming, title: "AI для входящих звонков", desc: "Обработка 100% звонков без пропусков. Квалификация лидов, расчет стоимости, создание заявок.", href: "/solutions/robot-operator", stat: "0 пропущенных" },
        { icon: PhoneOutgoing, title: "AI для исходящих звонков", desc: "Автоматический обзвон базы, реактивация клиентов, напоминания и уведомления.", href: "/solutions/robot-dlya-zvonkov", stat: "+156% охват" },
        { icon: Target, title: "AI для обработки заявок", desc: "Мгновенная квалификация, распределение по менеджерам, контроль SLA.", href: "/solutions/obrabotka-zayavok", stat: "2 мин обработка" },
        { icon: TrendingUp, title: "AI для продаж", desc: "Полный цикл продаж от первого контакта до закрытия сделки в CRM.", href: "/solutions/automation-sales", stat: "+87% конверсия" },
        { icon: Receipt, title: "AI для выставления счетов", desc: "Автоматический расчет, формирование и отправка счетов клиентам.", href: "/solutions/vystavlenie-schetov", stat: "5 мин на счет" },
        { icon: Truck, title: "AI для расчета доставки", desc: "Мгновенный расчет стоимости и сроков доставки по всем ТК.", href: "/solutions/raschet-dostavki", stat: "50+ ТК" },
      ],
    },
    howWorks: {
      label: "Как работает AI",
      title: "От звонка до сделки за 3 минуты",
      steps: [
        { num: "01", title: "Клиент звонит", desc: "AI отвечает за 3 секунды, приветствует и определяет потребность" },
        { num: "02", title: "AI понимает запрос", desc: "Распознавание речи и определение намерения клиента" },
        { num: "03", title: "Обращение к базе", desc: "AI проверяет прайс, наличие, условия доставки" },
        { num: "04", title: "Расчет стоимости", desc: "Мгновенный расчет по формулам любой сложности" },
        { num: "05", title: "Отправка счета", desc: "Автоматическое формирование и отправка на email" },
        { num: "06", title: "Создание сделки", desc: "Все данные в CRM с записью разговора" },
      ],
    },
    capabilities: {
      label: "Возможности AI",
      title: "Что умеет AI-платформа",
      items: [
        { icon: MessageSquare, title: "Понимает речь", desc: "Распознавание естественной речи на русском языке с точностью 98%" },
        { icon: BarChart3, title: "Работает с прайсом", desc: "Загрузка прайс-листов любой сложности, формулы расчета" },
        { icon: Receipt, title: "Считает стоимость", desc: "Мгновенный расчет с учетом скидок, акций и условий" },
        { icon: FileText, title: "Выставляет счета", desc: "Автоматическое формирование и отправка документов" },
        { icon: Database, title: "Интегрируется с CRM", desc: "amoCRM, Bitrix24, 1C, SAP и любые системы по API" },
        { icon: Send, title: "Отправляет КП", desc: "Генерация и отправка коммерческих предложений" },
        { icon: Headphones, title: "Записывает разговоры", desc: "Полная запись и транскрипция всех диалогов" },
        { icon: TrendingUp, title: "Ведет аналитику", desc: "Дашборды, отчеты, воронка продаж в реальном времени" },
      ],
    },
    solutions: {
      label: "Решения",
      title: "12 готовых решений для автоматизации",
      subtitle: "Выберите решение под ваши задачи",
      items: [
        { title: "Робот оператор", href: "/solutions/robot-operator", desc: "Обработка входящих звонков 24/7", icon: Phone },
        { title: "Робот для звонков", href: "/solutions/robot-dlya-zvonkov", desc: "Входящие и исходящие звонки", icon: PhoneCall },
        { title: "Автоматический оператор", href: "/solutions/automatic-operator", desc: "Маршрутизация и распределение", icon: Settings },
        { title: "Виртуальный оператор", href: "/solutions/virtual-operator", desc: "AI-сотрудник в команде", icon: Bot },
        { title: "Робот для продаж", href: "/solutions/robot-dlya-prodazh", desc: "Автоматизация продаж", icon: TrendingUp },
        { title: "Автоматизация продаж", href: "/solutions/automation-sales", desc: "Полный цикл сделки", icon: Target },
        { title: "Обработка заявок", href: "/solutions/obrabotka-zayavok", desc: "Квалификация и распределение", icon: FileText },
        { title: "Обработка заказов", href: "/solutions/obrabotka-zakazov", desc: "От заявки до доставки", icon: Zap },
        { title: "Выставление счетов", href: "/solutions/vystavlenie-schetov", desc: "Автоматические счета", icon: Receipt },
        { title: "Расчет доставки", href: "/solutions/raschet-dostavki", desc: "50+ транспортных компаний", icon: Truck },
        { title: "AI для бизнеса", href: "/solutions/ai-dlya-biznesa", desc: "Комплексная автоматизация", icon: Brain },
        { title: "Все решения", href: "/solutions", desc: "Полный каталог решений", icon: BarChart3 },
      ],
    },
    cases: {
      label: "Кейсы",
      title: "Реальные результаты клиентов",
      items: [
        { company: "СтройМаркет", industry: "Строительные материалы", metric: "+73%", metricLabel: "конверсии", desc: "AI обрабатывает 5000+ звонков в месяц, рассчитывает стоимость материалов и создает сделки в CRM." },
        { company: "ЛогистикПро", industry: "Грузоперевозки", metric: "3000", metricLabel: "звонков/мес", desc: "Автоматический расчет стоимости доставки по 50+ ТК. Время обработки заявки — 3 минуты." },
        { company: "МедЦентр+", industry: "Медицина", metric: "-60%", metricLabel: "нагрузки", desc: "AI записывает пациентов 24/7, отправляет напоминания и интегрирован с МИС." },
      ],
    },
    integrations: {
      label: "Интеграции",
      title: "Работает с вашими системами",
      items: ["amoCRM", "Bitrix24", "1C", "SAP", "Telegram", "WhatsApp", "API", "Webhook"],
    },
    whyM2: {
      label: "Почему M2",
      title: "Преимущества платформы",
      items: [
        { icon: Brain, title: "Собственная AI-платформа", desc: "Не зависим от внешних API, полный контроль над технологией" },
        { icon: Zap, title: "Быстрое внедрение", desc: "Запуск от 7 дней для типовых решений, от 2 недель для кастома" },
        { icon: Globe, title: "Мультиязычность", desc: "Работа на русском, английском и других языках" },
        { icon: Shield, title: "Безопасность", desc: "Соответствие 152-ФЗ, ISO 27001, GDPR. Серверы в РФ" },
        { icon: TrendingUp, title: "Масштабируемость", desc: "От 100 до 100 000+ звонков в месяц без потери качества" },
        { icon: Database, title: "Интеграции", desc: "Готовые коннекторы ко всем популярным CRM и ERP" },
      ],
    },
    pricing: {
      label: "Стоимость",
      title: "Прозрачное ценообразование",
      subtitle: "Выберите тариф под ваши задачи",
      plans: [
        { name: "Старт", price: "от 15 000", period: "₽/мес", desc: "Для малого бизнеса", features: ["До 500 звонков/мес", "1 сценарий", "Базовая интеграция", "Email-поддержка"], cta: "Начать", popular: false },
        { name: "Бизнес", price: "от 45 000", period: "₽/мес", desc: "Для среднего бизнеса", features: ["До 3000 звонков/мес", "5 сценариев", "CRM-интеграция", "Приоритетная поддержка", "Аналитика"], cta: "Выбрать", popular: true },
        { name: "Enterprise", price: "Индивидуально", period: "", desc: "Для крупного бизнеса", features: ["Безлимит звонков", "Любые сценарии", "Выделенная инфраструктура", "SLA 99.9%", "Персональный менеджер"], cta: "Обсудить", popular: false },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Частые вопросы",
      items: [
        { q: "Сколько стоит AI-менеджер?", a: "Стоимость зависит от объема звонков и сложности сценариев. Тариф Старт — от 15 000 ₽/мес за 500 звонков. Для точного расчета оставьте заявку на консультацию." },
        { q: "Сколько времени занимает внедрение?", a: "Типовое внедрение — 7-14 дней. Включает настройку сценариев, интеграцию с CRM и тестовый период. Для сложных проектов — от 2 до 8 недель." },
        { q: "Можно ли обучить AI под наш бизнес?", a: "Да, AI обучается на ваших данных: прайсы, FAQ, записи звонков, база знаний. Чем больше данных — тем точнее работа." },
        { q: "Работает ли AI с CRM?", a: "Да, интегрируемся с amoCRM, Bitrix24, 1C, SAP и любыми системами по API. Автоматически создаем сделки, контакты, задачи." },
        { q: "Можно ли использовать для исходящих звонков?", a: "Да, AI совершает исходящие звонки: обзвон базы, напоминания, реактивация клиентов, подтверждение заказов." },
        { q: "Как AI справляется со сложными вопросами?", a: "При сложных ситуациях AI автоматически переводит звонок на менеджера с полным контекстом разговора. Ни один клиент не теряется." },
      ],
    },
    seo: {
      title: "AI для бизнеса: полное руководство по автоматизации",
      content: `
        <h3>Что такое AI для бизнеса</h3>
        <p><strong>AI для бизнеса</strong> — это комплекс технологий искусственного интеллекта для автоматизации бизнес-процессов: обработки звонков, продаж, заявок, счетов и логистики. В отличие от простых IVR-систем, современные AI-платформы ведут полноценный диалог, понимают контекст и принимают решения.</p>

        <h3>Автоматизация бизнеса с помощью AI</h3>
        <p><strong>Автоматизация бизнеса</strong> позволяет снизить затраты на персонал на 40-60%, увеличить конверсию на 50-100% и обеспечить работу 24/7 без выходных. AI-агенты обрабатывают входящие и исходящие звонки, квалифицируют лиды, рассчитывают стоимость, выставляют счета и создают сделки в CRM.</p>

        <h3>Голосовой AI-менеджер</h3>
        <p><strong>Голосовой AI-менеджер</strong> — это виртуальный сотрудник, который отвечает на звонки за 3 секунды, понимает естественную речь и ведет диалог по заданным сценариям. Средняя конверсия с AI-менеджером на 87% выше, чем с обычным колл-центром.</p>

        <h3>Робот оператор для входящих звонков</h3>
        <p><strong>Робот оператор</strong> обрабатывает 100% входящих звонков без пропусков. Типовые задачи: консультация по ценам, расчет стоимости, запись на услуги, прием заказов. Сложные вопросы автоматически переводятся на живого менеджера.</p>

        <h3>Автоматизация звонков и продаж</h3>
        <p><strong>Автоматизация звонков</strong> включает входящие и исходящие коммуникации. AI совершает до 1000 звонков в час, квалифицирует лиды по скриптам и передает горячих клиентов менеджерам. Конверсия в продажу увеличивается в 2-3 раза.</p>

        <h3>AI автоматизация продаж</h3>
        <p><strong>AI автоматизация продаж</strong> — это полный цикл от первого контакта до закрытия сделки. AI ведет клиента по воронке, отправляет КП и счета, напоминает о незавершенных сделках. Средний ROI внедрения — 300-500% в первый год.</p>
      `,
    },
    finalCta: {
      label: "Готовы начать?",
      title: "Получите аудит автоматизации бизнеса",
      desc: "Бесплатная консультация: разберем ваши процессы, посчитаем ROI и предложим решение под ваши задачи",
      button: "Запросить аудит",
      trust: "Бесплатно • Без обязательств • Ответ за 24 часа",
    },
  },
  en: {
    hero: {
      badge: "AI Automation Platform",
      title: "AI Business Automation Platform",
      titleHighlight: "",
      subtitle: "Calls, sales, requests and invoices — without operators. AI agents that sell, answer calls and process requests 24/7.",
      ctaPrimary: "Request Demo",
      ctaSecondary: "Listen to AI Call",
      trustText: "Implementation from 7 days • ROI from 3 weeks • 100+ clients",
    },
    stats: [
      { value: 100, suffix: "+", label: "Clients" },
      { value: 87, suffix: "%", label: "Conversion Growth" },
      { value: 3, suffix: " sec", label: "Response Time" },
      { value: 24, suffix: "/7", label: "AI Uptime" },
    ],
    whatAutomates: {
      label: "What AI Automates",
      title: "6 Automation Directions",
      subtitle: "Single platform for automating all business processes",
      items: [
        { icon: PhoneIncoming, title: "AI for Inbound Calls", desc: "Process 100% of calls without misses. Lead qualification, cost calculation, request creation.", href: "/solutions/robot-operator", stat: "0 missed" },
        { icon: PhoneOutgoing, title: "AI for Outbound Calls", desc: "Automatic database calls, customer reactivation, reminders and notifications.", href: "/solutions/robot-dlya-zvonkov", stat: "+156% reach" },
        { icon: Target, title: "AI for Request Processing", desc: "Instant qualification, manager distribution, SLA control.", href: "/solutions/obrabotka-zayavok", stat: "2 min processing" },
        { icon: TrendingUp, title: "AI for Sales", desc: "Full sales cycle from first contact to deal closure in CRM.", href: "/solutions/automation-sales", stat: "+87% conversion" },
        { icon: Receipt, title: "AI for Invoicing", desc: "Automatic calculation, generation and sending invoices to customers.", href: "/solutions/vystavlenie-schetov", stat: "5 min per invoice" },
        { icon: Truck, title: "AI for Delivery Calculation", desc: "Instant calculation of delivery cost and time across all carriers.", href: "/solutions/raschet-dostavki", stat: "50+ carriers" },
      ],
    },
    howWorks: {
      label: "How AI Works",
      title: "From Call to Deal in 3 Minutes",
      steps: [
        { num: "01", title: "Customer Calls", desc: "AI answers in 3 seconds, greets and identifies the need" },
        { num: "02", title: "AI Understands Request", desc: "Speech recognition and customer intent detection" },
        { num: "03", title: "Database Query", desc: "AI checks prices, availability, delivery terms" },
        { num: "04", title: "Cost Calculation", desc: "Instant calculation using formulas of any complexity" },
        { num: "05", title: "Invoice Sending", desc: "Automatic generation and email delivery" },
        { num: "06", title: "Deal Creation", desc: "All data in CRM with call recording" },
      ],
    },
    capabilities: {
      label: "AI Capabilities",
      title: "What AI Platform Can Do",
      items: [
        { icon: MessageSquare, title: "Understands Speech", desc: "Natural speech recognition with 98% accuracy" },
        { icon: BarChart3, title: "Works with Prices", desc: "Loading price lists of any complexity, calculation formulas" },
        { icon: Receipt, title: "Calculates Cost", desc: "Instant calculation considering discounts and promotions" },
        { icon: FileText, title: "Issues Invoices", desc: "Automatic document generation and delivery" },
        { icon: Database, title: "Integrates with CRM", desc: "amoCRM, Bitrix24, 1C, SAP and any systems via API" },
        { icon: Send, title: "Sends Proposals", desc: "Generation and delivery of commercial proposals" },
        { icon: Headphones, title: "Records Calls", desc: "Full recording and transcription of all dialogues" },
        { icon: TrendingUp, title: "Provides Analytics", desc: "Dashboards, reports, real-time sales funnel" },
      ],
    },
    solutions: {
      label: "Solutions",
      title: "12 Ready Solutions for Automation",
      subtitle: "Choose a solution for your tasks",
      items: [
        { title: "Robot Operator", href: "/solutions/robot-operator", desc: "24/7 inbound call processing", icon: Phone },
        { title: "Robot for Calls", href: "/solutions/robot-dlya-zvonkov", desc: "Inbound and outbound calls", icon: PhoneCall },
        { title: "Automatic Operator", href: "/solutions/automatic-operator", desc: "Routing and distribution", icon: Settings },
        { title: "Virtual Operator", href: "/solutions/virtual-operator", desc: "AI employee in team", icon: Bot },
        { title: "Sales Robot", href: "/solutions/robot-dlya-prodazh", desc: "Sales automation", icon: TrendingUp },
        { title: "Sales Automation", href: "/solutions/automation-sales", desc: "Full deal cycle", icon: Target },
        { title: "Request Processing", href: "/solutions/obrabotka-zayavok", desc: "Qualification and distribution", icon: FileText },
        { title: "Order Processing", href: "/solutions/obrabotka-zakazov", desc: "From request to delivery", icon: Zap },
        { title: "Invoice Generation", href: "/solutions/vystavlenie-schetov", desc: "Automatic invoices", icon: Receipt },
        { title: "Delivery Calculation", href: "/solutions/raschet-dostavki", desc: "50+ carriers", icon: Truck },
        { title: "AI for Business", href: "/solutions/ai-dlya-biznesa", desc: "Comprehensive automation", icon: Brain },
        { title: "All Solutions", href: "/solutions", desc: "Full solution catalog", icon: BarChart3 },
      ],
    },
    cases: {
      label: "Cases",
      title: "Real Client Results",
      items: [
        { company: "BuildMart", industry: "Construction Materials", metric: "+73%", metricLabel: "conversion", desc: "AI processes 5000+ calls per month, calculates material costs and creates deals in CRM." },
        { company: "LogisticsPro", industry: "Freight", metric: "3000", metricLabel: "calls/month", desc: "Automatic delivery cost calculation across 50+ carriers. Request processing time — 3 minutes." },
        { company: "MedCenter+", industry: "Healthcare", metric: "-60%", metricLabel: "load", desc: "AI books patients 24/7, sends reminders and integrates with MIS." },
      ],
    },
    integrations: {
      label: "Integrations",
      title: "Works with Your Systems",
      items: ["amoCRM", "Bitrix24", "1C", "SAP", "Telegram", "WhatsApp", "API", "Webhook"],
    },
    whyM2: {
      label: "Why M2",
      title: "Platform Advantages",
      items: [
        { icon: Brain, title: "Own AI Platform", desc: "No external API dependency, full technology control" },
        { icon: Zap, title: "Fast Implementation", desc: "Launch from 7 days for standard solutions, from 2 weeks for custom" },
        { icon: Globe, title: "Multilingual", desc: "Works in Russian, English and other languages" },
        { icon: Shield, title: "Security", desc: "GDPR, ISO 27001 compliant. Secure servers" },
        { icon: TrendingUp, title: "Scalability", desc: "From 100 to 100,000+ calls per month without quality loss" },
        { icon: Database, title: "Integrations", desc: "Ready connectors for all popular CRM and ERP" },
      ],
    },
    pricing: {
      label: "Pricing",
      title: "Transparent Pricing",
      subtitle: "Choose a plan for your needs",
      plans: [
        { name: "Start", price: "from $200", period: "/mo", desc: "For small business", features: ["Up to 500 calls/mo", "1 scenario", "Basic integration", "Email support"], cta: "Get Started", popular: false },
        { name: "Business", price: "from $600", period: "/mo", desc: "For medium business", features: ["Up to 3000 calls/mo", "5 scenarios", "CRM integration", "Priority support", "Analytics"], cta: "Choose", popular: true },
        { name: "Enterprise", price: "Custom", period: "", desc: "For large business", features: ["Unlimited calls", "Any scenarios", "Dedicated infrastructure", "99.9% SLA", "Personal manager"], cta: "Discuss", popular: false },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        { q: "How much does AI manager cost?", a: "Cost depends on call volume and scenario complexity. Start plan — from $200/mo for 500 calls. Request consultation for exact calculation." },
        { q: "How long does implementation take?", a: "Standard implementation — 7-14 days. Includes scenario setup, CRM integration and test period. For complex projects — 2-8 weeks." },
        { q: "Can AI be trained for our business?", a: "Yes, AI learns from your data: prices, FAQ, call recordings, knowledge base. More data — more accurate work." },
        { q: "Does AI work with CRM?", a: "Yes, we integrate with amoCRM, Bitrix24, 1C, SAP and any systems via API. Automatically create deals, contacts, tasks." },
        { q: "Can it be used for outbound calls?", a: "Yes, AI makes outbound calls: database calls, reminders, customer reactivation, order confirmations." },
        { q: "How does AI handle complex questions?", a: "For complex situations, AI automatically transfers the call to a manager with full conversation context. No customer is lost." },
      ],
    },
    seo: {
      title: "AI for Business: Complete Automation Guide",
      content: `
        <h3>What is AI for Business</h3>
        <p><strong>AI for business</strong> is a set of artificial intelligence technologies for automating business processes: call handling, sales, requests, invoices and logistics. Unlike simple IVR systems, modern AI platforms conduct full dialogues, understand context and make decisions.</p>

        <h3>Business Automation with AI</h3>
        <p><strong>Business automation</strong> reduces staffing costs by 40-60%, increases conversion by 50-100% and ensures 24/7 operation. AI agents handle inbound and outbound calls, qualify leads, calculate costs, issue invoices and create deals in CRM.</p>

        <h3>Voice AI Manager</h3>
        <p><strong>Voice AI manager</strong> is a virtual employee who answers calls in 3 seconds, understands natural speech and conducts dialogue according to given scenarios. Average conversion with AI manager is 87% higher than with a regular call center.</p>
      `,
    },
    finalCta: {
      label: "Ready to Start?",
      title: "Get a Business Automation Audit",
      desc: "Free consultation: analyze your processes, calculate ROI and propose a solution for your needs",
      button: "Request Audit",
      trust: "Free • No obligations • Response within 24 hours",
    },
  },
}

/* ================================================================== */
/*  Main component                                                     */
/* ================================================================== */
interface HomeClientPageProps { locale: Locale }

function HomeClientPage({ locale }: HomeClientPageProps) {
  const { t } = useTranslations(locale)
  const { openConsultation } = useCTA()
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const [audioProgress, setAudioProgress] = useState<Record<string, number>>({})
  
  const c = content[locale as keyof typeof content] || content.ru
  const callExamples = getCallExamples(locale)

  /* ================================================================ */
  return (
    <div className="bg-background overflow-x-hidden">

      {/* ============================================================ */}
      {/*  HERO - Flagship Dark Design                                 */}
      {/* ============================================================ */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#030712]">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(6,182,212,0.1),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_20%_80%,rgba(59,130,246,0.08),transparent)]" />
        </div>
        
        {/* Grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Floating UI elements */}
        <FloatingCard className="top-[20%] left-[8%] hidden lg:block" delay={0}>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <PhoneIncoming className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <div className="text-xs text-white/40">Входящий звонок</div>
              <div className="text-sm font-semibold text-white">+7 (495) ***-**-42</div>
            </div>
          </div>
        </FloatingCard>
        
        <FloatingCard className="top-[35%] right-[5%] hidden lg:block" delay={500}>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400">AI обрабатывает</span>
            </div>
            <VoiceWaveform />
          </div>
        </FloatingCard>
        
        <FloatingCard className="bottom-[25%] left-[10%] hidden lg:block" delay={1000}>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
            <div className="text-xs text-white/40 mb-1">Создана сделка</div>
            <div className="text-lg font-bold text-white">87 450 ₽</div>
            <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-3 h-3" /> В amoCRM
            </div>
          </div>
        </FloatingCard>
        
        <FloatingCard className="bottom-[30%] right-[8%] hidden lg:block" delay={1500}>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
            <div className="text-xs text-white/40 mb-2">Конверсия сегодня</div>
            <div className="flex items-end gap-1 h-8">
              {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                <div key={i} className="w-3 rounded-t bg-gradient-to-t from-sky-500 to-cyan-400" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="text-lg font-bold text-emerald-400 mt-2">+87%</div>
          </div>
        </FloatingCard>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:py-40">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-white/70">{c.hero.badge}</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-[1000px] text-center text-balance text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            {c.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-2xl text-center text-pretty text-lg leading-relaxed text-white/50 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {c.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <Button 
              size="lg" 
              className="h-14 rounded-xl px-10 text-base font-semibold bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 shadow-[0_0_40px_rgba(56,189,248,.25)] hover:shadow-[0_0_60px_rgba(56,189,248,.35)] transition-all duration-300 border-0" 
              onClick={openConsultation}
            >
              {c.hero.ctaPrimary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 rounded-xl px-10 text-base font-semibold border-white/[0.1] bg-white/[0.03] text-white hover:bg-white/[0.08] hover:border-white/[0.2] backdrop-blur-sm transition-all duration-300" 
              asChild
            >
              <Link href="#examples">
                <Play className="mr-2 h-5 w-5" />
                {c.hero.ctaSecondary}
              </Link>
            </Button>
          </div>

          {/* Trust text */}
          <p className="mt-8 text-center text-sm text-white/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {c.hero.trustText}
          </p>

          {/* Stats */}
          <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {c.stats.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 py-10 lg:py-12">
                <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-sm text-white/40">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ============================================================ */}
      {/*  INTEGRATIONS BAR                                            */}
      {/* ============================================================ */}
      <section className="border-b border-border/60 bg-background py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">{c.integrations.label}</span>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {c.integrations.items.slice(0, 6).map((name) => (
                <span key={name} className="text-sm font-semibold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default">{name}</span>
              ))}
            </div>
            <div className="flex items-center gap-5 text-xs text-muted-foreground/50">
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> ISO 27001</span>
              <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> 152-ФЗ</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHAT AI AUTOMATES                                           */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{c.whatAutomates.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {c.whatAutomates.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {c.whatAutomates.subtitle}
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.whatAutomates.items.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <Link 
                    href={item.href} 
                    className="group relative flex flex-col h-full rounded-2xl border border-border/70 bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_60px_-12px_rgba(56,189,248,.1)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/[0.08] text-primary ring-1 ring-primary/[0.1] group-hover:bg-primary/[0.12] transition-colors">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">{item.stat}</span>
                    </div>
                    
                    <h3 className="mb-3 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground flex-1">{item.desc}</p>
                    
                    <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW AI WORKS - Visual Flow                                  */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36 bg-muted/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{c.howWorks.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {c.howWorks.title}
            </h2>
          </Reveal>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block" />
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {c.howWorks.steps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="group relative flex flex-col items-center text-center">
                    {/* Step number */}
                    <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white font-bold text-xl shadow-[0_8px_30px_-4px_rgba(56,189,248,.3)]">
                      {step.num}
                    </div>
                    
                    {/* Arrow */}
                    {idx < c.howWorks.steps.length - 1 && (
                      <div className="absolute top-8 left-full w-full hidden xl:flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-muted-foreground/30" />
                      </div>
                    )}
                    
                    <h3 className="mb-2 font-bold text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CAPABILITIES                                                */}
      {/* ============================================================ */}
      <section className="relative py-28 lg:py-36 bg-[#030712] overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-full max-w-5xl bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
        <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-sky-500/[0.03] blur-[140px]" />
        <div className="pointer-events-none absolute left-[-10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.03] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label light>{c.capabilities.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {c.capabilities.title}
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.capabilities.items.map((cap, idx) => {
              const Icon = cap.icon
              return (
                <Reveal key={idx} delay={idx * 60}>
                  <div className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.12]">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/[0.1] text-sky-400 ring-1 ring-sky-500/[0.15]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-bold text-white">{cap.title}</h3>
                    <p className="text-sm text-white/40">{cap.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  12 SOLUTIONS                                                */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{c.solutions.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {c.solutions.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              {c.solutions.subtitle}
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.solutions.items.map((sol, idx) => {
              const Icon = sol.icon
              return (
                <Reveal key={idx} delay={idx * 50}>
                  <Link 
                    href={sol.href} 
                    className="group flex items-start gap-4 rounded-xl border border-border/70 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_4px_30px_-8px_rgba(56,189,248,.08)]"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/[0.08] text-primary group-hover:bg-primary/[0.12] transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[0.9375rem] group-hover:text-primary transition-colors truncate">{sol.title}</h3>
                      <p className="text-sm text-muted-foreground truncate">{sol.desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary flex-shrink-0 transition-all group-hover:translate-x-0.5" />
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CASES                                                       */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36 bg-muted/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{c.cases.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {c.cases.title}
            </h2>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {c.cases.items.map((caseItem, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="h-full overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6 bg-gradient-to-br from-sky-500 to-cyan-500">
                      <div className="text-white/70 text-sm mb-1">{caseItem.industry}</div>
                      <h3 className="text-2xl font-bold text-white">{caseItem.company}</h3>
                    </div>
                    <div className="p-6">
                      <div className="flex items-end gap-2 mb-4">
                        <span className="text-5xl font-extrabold tracking-tight text-primary">{caseItem.metric}</span>
                        <span className="text-lg text-muted-foreground mb-2">{caseItem.metricLabel}</span>
                      </div>
                      <p className="text-muted-foreground">{caseItem.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AUDIO EXAMPLES                                              */}
      {/* ============================================================ */}
      <section id="examples" className="py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{locale === "ru" ? "Примеры звонков" : "Call Examples"}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {locale === "ru" ? "Послушайте, как работает AI" : "Listen to AI in Action"}
            </h2>
          </Reveal>

          <div className="flex flex-col gap-6">
            {callExamples.map((example, idx) => (
              <Reveal key={example.id} delay={idx * 100}>
                <div className="rounded-2xl border border-border/70 bg-card p-6 lg:p-8 transition-all duration-300 hover:shadow-[0_4px_30px_-8px_rgba(56,189,248,.06)]">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <span className="mb-2 inline-block rounded-md bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{example.category}</span>
                      <h3 className="text-lg font-bold tracking-tight">{example.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{example.description}</p>
                    </div>
                    <span className="flex-shrink-0 font-mono text-sm text-muted-foreground/50">{example.duration}</span>
                  </div>

                  {/* Player */}
                  <div className="flex items-center gap-4 rounded-xl bg-muted/60 p-4">
                    <button
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_4px_20px_-4px_rgba(56,189,248,.4)] transition-transform hover:scale-105 active:scale-95"
                      onClick={() => {
                        if (playingAudio === example.id) {
                          setPlayingAudio(null)
                        } else {
                          setPlayingAudio(example.id)
                          let progress = 0
                          const interval = setInterval(() => {
                            progress += 2
                            setAudioProgress((prev) => ({ ...prev, [example.id]: progress }))
                            if (progress >= 100) { clearInterval(interval); setPlayingAudio(null) }
                          }, 200)
                        }
                      }}
                      aria-label={playingAudio === example.id ? "Пауза" : "Воспроизвести"}
                    >
                      {playingAudio === example.id ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                    </button>
                    <div className="flex flex-1 items-end gap-[2px] h-10">
                      {Array.from({ length: 60 }).map((_, i) => {
                        const height = Math.sin(i * 0.25) * 25 + 35 + Math.sin(i * 0.8) * 15
                        const isActive = playingAudio === example.id && (audioProgress[example.id] || 0) > (i / 60) * 100
                        return <div key={i} className={`flex-1 rounded-full transition-colors duration-150 ${isActive ? "bg-gradient-to-t from-sky-500 to-cyan-400" : "bg-foreground/8"}`} style={{ height: `${height}%` }} />
                      })}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.04] p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">{locale === "ru" ? "Результат" : "Result"}</span>
                      <p className="mt-1 text-sm text-foreground/70">{example.result}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHY M2                                                       */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36 bg-muted/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{c.whyM2.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {c.whyM2.title}
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.whyM2.items.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="flex items-start gap-5 rounded-xl border border-border/60 bg-card p-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRICING                                                     */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{c.pricing.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {c.pricing.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              {c.pricing.subtitle}
            </p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {c.pricing.plans.map((plan, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className={`relative h-full overflow-hidden ${plan.popular ? "border-primary shadow-[0_8px_40px_-12px_rgba(56,189,248,.15)]" : ""}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-cyan-500" />
                  )}
                  <CardContent className="p-8">
                    {plan.popular && (
                      <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {locale === "ru" ? "Популярный" : "Popular"}
                      </span>
                    )}
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                    
                    <div className="mb-8">
                      <span className="text-4xl font-extrabold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full h-12 ${plan.popular ? "bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                      onClick={openConsultation}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36 bg-muted/30 border-y border-border/50">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <Label>{c.faq.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {c.faq.title}
            </h2>
          </Reveal>

          <Accordion type="single" collapsible className="w-full">
            {c.faq.items.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-border/50">
                <AccordionTrigger className="text-left font-bold hover:text-primary transition-colors py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SEO TEXT                                                    */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold mb-10">{c.seo.title}</h2>
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-p:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: c.seo.content }}
            />
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                   */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#030712]">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-full max-w-5xl bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-sky-500/[0.05] blur-[150px]" />

        <div className="relative mx-auto max-w-3xl px-6 py-28 lg:py-36 text-center">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-white/60">{c.finalCta.label}</span>
            </div>

            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {c.finalCta.title}
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/45">
              {c.finalCta.desc}
            </p>

            <div className="mt-10">
              <Button 
                size="lg" 
                className="h-14 rounded-xl px-12 text-base font-semibold bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 shadow-[0_0_40px_rgba(56,189,248,.25)] hover:shadow-[0_0_60px_rgba(56,189,248,.35)] transition-all duration-300 border-0" 
                onClick={openConsultation}
              >
                {c.finalCta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="mt-10 text-sm text-white/30">
              {c.finalCta.trust}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export { HomeClientPage }
export default HomeClientPage
