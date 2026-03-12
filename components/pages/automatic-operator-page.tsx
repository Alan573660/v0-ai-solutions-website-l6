"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Check,
  Play,
  Building2,
  ShoppingBag,
  Briefcase,
  Phone,
  Shield,
  Zap,
  MessageSquare,
  Database,
  Globe,
  BarChart3,
  FileText,
  Target,
  Bot,
  Clock,
  Users,
  Headphones,
  Settings,
  TrendingUp,
  GitBranch,
  Layers,
  Network,
  Split,
  Timer,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  Workflow,
  CheckCircle2,
  XCircle,
  ArrowDown,
  Calendar,
  Package,
  HelpCircle,
  Building,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface AutomaticOperatorPageProps {
  locale: Locale
}

const content = {
  ru: {
    badge: "Инфраструктура обработки звонков",
    title: "Автоматический оператор",
    titleHighlight: "система маршрутизации",
    subtitle: "Умная система автоматической обработки и распределения входящих звонков. Очереди, маршрутизация по отделам, пиковые нагрузки, автоответы — все работает без участия человека.",
    cta1: "Запросить демо",
    cta2: "Как это работает",
    stats: [
      { value: "∞", label: "Параллельных линий" },
      { value: "0 сек", label: "Время ожидания" },
      { value: "99.9%", label: "Аптайм системы" },
      { value: "100%", label: "Звонков обработано" },
    ],
    difference: {
      title: "Чем автоматический оператор отличается от робота оператора",
      subtitle: "Два решения для разных задач",
      automatic: {
        title: "Автоматический оператор",
        subtitle: "Инфраструктура и потоки",
        description: "Система маршрутизации и распределения звонков. Фокус на телефонной инфраструктуре, очередях, правилах переадресации и работе в пиковые нагрузки.",
        items: [
          "Умная маршрутизация по правилам",
          "Очереди с приоритетами",
          "Распределение по отделам",
          "Пиковые нагрузки и overflow",
          "Автоответы по расписанию",
          "IVR нового поколения",
        ],
        useCases: "Колл-центры, службы поддержки, многоканальные номера",
      },
      robot: {
        title: "Робот оператор",
        subtitle: "AI-сотрудник",
        description: "Человекоподобный AI-ассистент для ведения диалогов. Фокус на понимании речи, квалификации клиентов и автоматизации продаж.",
        items: [
          "Естественные диалоги с клиентами",
          "Квалификация и скоринг лидов",
          "Расчет стоимости по прайсу",
          "Создание заявок и счетов",
          "Ответы на вопросы из FAQ",
          "Перевод на менеджера",
        ],
        useCases: "Продажи, консультации, прием заказов",
      },
      note: "Решения дополняют друг друга: автоматический оператор распределяет поток, робот оператор ведет диалоги.",
    },
    callFlow: {
      title: "Как система обрабатывает звонки",
      subtitle: "Визуализация потока входящего звонка",
      steps: [
        { icon: PhoneIncoming, title: "Входящий звонок", description: "Клиент звонит на ваш номер" },
        { icon: Target, title: "Определение темы", description: "Система определяет цель обращения" },
        { icon: GitBranch, title: "Маршрутизация", description: "Выбор правила переадресации" },
        { icon: Layers, title: "Очередь", description: "Если все заняты — очередь с приоритетом" },
        { icon: PhoneForwarded, title: "Соединение", description: "Перевод на нужного специалиста" },
      ],
    },
    scenarios: {
      title: "Типовые сценарии обработки",
      subtitle: "Автоматический оператор закрывает 80% входящих без участия человека",
      items: [
        {
          icon: Calendar,
          title: "Запись на услугу",
          description: "Система принимает запись, проверяет слоты, отправляет подтверждение. Интеграция с календарем.",
          auto: true,
          flow: ["Приветствие", "Выбор услуги", "Выбор времени", "Подтверждение", "SMS-напоминание"],
        },
        {
          icon: Package,
          title: "Статус заказа",
          description: "Клиент называет номер заказа, система озвучивает статус из базы. Без ожидания оператора.",
          auto: true,
          flow: ["Приветствие", "Запрос номера", "Проверка в базе", "Озвучивание статуса"],
        },
        {
          icon: Building,
          title: "Распределение по отделам",
          description: "Система определяет тему и переводит на нужный отдел. Продажи, поддержка, бухгалтерия.",
          auto: false,
          flow: ["Приветствие", "Определение темы", "Выбор отдела", "Перевод"],
        },
        {
          icon: Clock,
          title: "Прием обращений 24/7",
          description: "В нерабочее время система принимает заявку и создает тикет. Утром менеджер перезвонит.",
          auto: true,
          flow: ["Приветствие", "Информирование", "Сбор данных", "Создание тикета"],
        },
        {
          icon: HelpCircle,
          title: "Ответы на FAQ",
          description: "Типовые вопросы: режим работы, адрес, условия доставки. Ответ без участия оператора.",
          auto: true,
          flow: ["Приветствие", "Распознавание вопроса", "Ответ из базы"],
        },
        {
          icon: PhoneForwarded,
          title: "Перевод по правилам",
          description: "VIP-клиент? Персональный менеджер. Новый лид? Отдел продаж. Жалоба? Руководитель.",
          auto: false,
          flow: ["Определение клиента", "Проверка правил", "Маршрутизация"],
        },
      ],
    },
    routing: {
      title: "Маршрутизация и распределение",
      subtitle: "Умные правила для каждого сценария",
      items: [
        {
          title: "По теме обращения",
          description: "Система определяет тему звонка и направляет в соответствующий отдел",
          rules: ["Продажи → Отдел продаж", "Поддержка → Служба поддержки", "Оплата → Бухгалтерия", "Жалоба → Руководитель"],
        },
        {
          title: "По загрузке операторов",
          description: "Автоматическое распределение по наименее загруженным сотрудникам",
          rules: ["Равномерная нагрузка", "Учет компетенций", "Приоритет по скиллам", "Overflow на резерв"],
        },
        {
          title: "По времени и расписанию",
          description: "Разные правила для рабочего времени, обеда, выходных и праздников",
          rules: ["Рабочее время → Операторы", "Обед → Дежурный", "Выходные → Автоответ", "Праздники → Запись"],
        },
        {
          title: "По статусу клиента",
          description: "VIP-клиенты получают приоритет и персонального менеджера",
          rules: ["VIP → Персональный менеджер", "Новый → Отдел продаж", "Постоянный → История звонков", "Должник → Юридический"],
        },
      ],
    },
    queues: {
      title: "Очереди и пиковые нагрузки",
      subtitle: "Ни один звонок не будет потерян",
      features: [
        {
          icon: Layers,
          title: "Умные очереди",
          description: "Приоритизация по важности клиента, теме обращения и времени ожидания",
        },
        {
          icon: Timer,
          title: "Время ожидания",
          description: "Озвучивание позиции в очереди и примерного времени ответа",
        },
        {
          icon: PhoneForwarded,
          title: "Callback",
          description: "Предложение перезвонить, когда оператор освободится. Без ожидания на линии",
        },
        {
          icon: Network,
          title: "Overflow",
          description: "При перегрузке — автоматический перевод на резервную группу или аутсорс",
        },
        {
          icon: BarChart3,
          title: "Прогнозирование",
          description: "AI предсказывает пиковые часы и заранее масштабирует ресурсы",
        },
        {
          icon: Zap,
          title: "Мгновенное масштабирование",
          description: "Автоматическое увеличение каналов при росте нагрузки",
        },
      ],
    },
    closedVsTransfer: {
      title: "Какие звонки закрываются автоматически, а какие переводятся",
      autoTitle: "Закрываются автоматически",
      transferTitle: "Переводятся на оператора",
      autoItems: [
        "Статус заказа / доставки",
        "Режим работы, адрес, контакты",
        "Запись на услугу по расписанию",
        "Ответы на типовые вопросы (FAQ)",
        "Прием заявки в нерабочее время",
        "Информирование об акциях",
        "Напоминания и подтверждения",
      ],
      transferItems: [
        "Сложные технические вопросы",
        "Жалобы и претензии",
        "VIP-клиенты",
        "Нестандартные запросы",
        "Финансовые вопросы",
        "Срочные случаи",
      ],
      stats: { auto: "80%", transfer: "20%" },
    },
    integrations: {
      title: "Интеграции с телефонией",
      subtitle: "Работает с любой инфраструктурой",
      categories: [
        {
          title: "Виртуальные АТС",
          items: ["Asterisk", "FreePBX", "3CX", "Mango Office", "Zadarma", "UIS"],
        },
        {
          title: "Операторы связи",
          items: ["Мегафон", "Билайн", "МТС", "Ростелеком", "Tele2"],
        },
        {
          title: "CRM системы",
          items: ["amoCRM", "Bitrix24", "1C", "Salesforce", "HubSpot"],
        },
        {
          title: "Helpdesk",
          items: ["Zendesk", "Freshdesk", "Jira Service", "UseDesk"],
        },
      ],
    },
    pricing: {
      title: "Тарифы",
      subtitle: "Прозрачное ценообразование без скрытых платежей",
      plans: [
        {
          name: "Старт",
          price: "15 000",
          period: "руб/мес",
          description: "Для малого бизнеса",
          features: [
            "До 500 звонков/мес",
            "3 правила маршрутизации",
            "1 очередь",
            "Базовая аналитика",
            "Email поддержка",
          ],
          highlight: false,
        },
        {
          name: "Бизнес",
          price: "40 000",
          period: "руб/мес",
          description: "Для растущих компаний",
          features: [
            "До 3000 звонков/мес",
            "Неограниченные правила",
            "5 очередей с приоритетами",
            "Расширенная аналитика",
            "Callback и overflow",
            "Приоритетная поддержка",
          ],
          highlight: true,
        },
        {
          name: "Enterprise",
          price: "Индивидуально",
          period: "",
          description: "Для крупного бизнеса",
          features: [
            "Неограниченные звонки",
            "Кастомные сценарии",
            "Выделенная инфраструктура",
            "SLA 99.9%",
            "24/7 поддержка",
            "Персональный менеджер",
          ],
          highlight: false,
        },
      ],
      note: "Первые 14 дней бесплатно. Внедрение и настройка включены в стоимость.",
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Чем автоматический оператор отличается от обычного IVR?",
          a: "Классический IVR требует нажатия кнопок (1 — продажи, 2 — поддержка). Автоматический оператор понимает естественную речь, определяет тему автоматически и может решать вопросы без перевода на человека.",
        },
        {
          q: "Можно ли использовать вместе с роботом оператором?",
          a: "Да, решения дополняют друг друга. Автоматический оператор распределяет поток звонков, а робот оператор ведет диалоги в тех сценариях, где это эффективнее.",
        },
        {
          q: "Как быстро можно запустить систему?",
          a: "Базовая настройка занимает 3-5 дней. Сложные сценарии с множеством правил и интеграций — до 2 недель.",
        },
        {
          q: "Что происходит при пиковых нагрузках?",
          a: "Система автоматически масштабируется, клиенты ставятся в очередь с озвучиванием времени ожидания, при необходимости предлагается callback или overflow на резервную группу.",
        },
        {
          q: "Какие данные фиксируются по каждому звонку?",
          a: "Запись разговора, транскрипция, тема обращения, маршрут звонка, время в очереди, результат (решен/переведен), оценка качества.",
        },
        {
          q: "Работает ли система с несколькими номерами?",
          a: "Да, поддерживается неограниченное количество входящих номеров с разными правилами маршрутизации для каждого.",
        },
      ],
    },
    cta: {
      title: "Готовы оптимизировать обработку звонков?",
      subtitle: "Получите персональную демонстрацию системы и расчет стоимости под ваши задачи",
      button: "Запросить демо",
      trust: "Бесплатная консультация · Расчет ROI · Без обязательств",
    },
    relatedLinks: {
      title: "Смотрите также",
      items: [
        { title: "Робот оператор", href: "/solutions/robot-operator", description: "AI-сотрудник для ведения диалогов" },
        { title: "Виртуальный оператор", href: "/solutions/virtual-operator", description: "Облачное решение для звонков" },
        { title: "Все решения", href: "/solutions", description: "Полный каталог продуктов" },
      ],
    },
  },
  en: {
    badge: "Call Processing Infrastructure",
    title: "Automatic Operator",
    titleHighlight: "routing system",
    subtitle: "Smart system for automatic processing and distribution of incoming calls. Queues, department routing, peak loads, auto-responses — everything works without human involvement.",
    cta1: "Request Demo",
    cta2: "How It Works",
    stats: [
      { value: "∞", label: "Parallel Lines" },
      { value: "0 sec", label: "Wait Time" },
      { value: "99.9%", label: "System Uptime" },
      { value: "100%", label: "Calls Handled" },
    ],
    difference: {
      title: "How Automatic Operator Differs from Robot Operator",
      subtitle: "Two solutions for different tasks",
      automatic: {
        title: "Automatic Operator",
        subtitle: "Infrastructure & Flows",
        description: "Call routing and distribution system. Focus on telephony infrastructure, queues, forwarding rules and peak load handling.",
        items: [
          "Smart rule-based routing",
          "Priority queues",
          "Department distribution",
          "Peak loads and overflow",
          "Scheduled auto-responses",
          "Next-gen IVR",
        ],
        useCases: "Call centers, support services, multi-channel numbers",
      },
      robot: {
        title: "Robot Operator",
        subtitle: "AI Employee",
        description: "Human-like AI assistant for conversations. Focus on speech understanding, customer qualification and sales automation.",
        items: [
          "Natural customer dialogues",
          "Lead qualification and scoring",
          "Price calculation",
          "Request and invoice creation",
          "FAQ answers",
          "Manager transfer",
        ],
        useCases: "Sales, consultations, order intake",
      },
      note: "Solutions complement each other: automatic operator distributes flow, robot operator handles dialogues.",
    },
    callFlow: {
      title: "How System Processes Calls",
      subtitle: "Incoming call flow visualization",
      steps: [
        { icon: PhoneIncoming, title: "Incoming Call", description: "Customer calls your number" },
        { icon: Target, title: "Topic Detection", description: "System identifies call purpose" },
        { icon: GitBranch, title: "Routing", description: "Forwarding rule selection" },
        { icon: Layers, title: "Queue", description: "If all busy — priority queue" },
        { icon: PhoneForwarded, title: "Connection", description: "Transfer to right specialist" },
      ],
    },
    scenarios: {
      title: "Typical Processing Scenarios",
      subtitle: "Automatic operator handles 80% of incoming calls without human involvement",
      items: [
        {
          icon: Calendar,
          title: "Service Booking",
          description: "System accepts booking, checks slots, sends confirmation. Calendar integration.",
          auto: true,
          flow: ["Greeting", "Service selection", "Time selection", "Confirmation", "SMS reminder"],
        },
        {
          icon: Package,
          title: "Order Status",
          description: "Customer provides order number, system voices status from database. No operator wait.",
          auto: true,
          flow: ["Greeting", "Number request", "Database check", "Status voicing"],
        },
        {
          icon: Building,
          title: "Department Distribution",
          description: "System detects topic and transfers to right department. Sales, support, accounting.",
          auto: false,
          flow: ["Greeting", "Topic detection", "Department selection", "Transfer"],
        },
        {
          icon: Clock,
          title: "24/7 Request Intake",
          description: "After hours, system takes request and creates ticket. Manager calls back in morning.",
          auto: true,
          flow: ["Greeting", "Information", "Data collection", "Ticket creation"],
        },
        {
          icon: HelpCircle,
          title: "FAQ Answers",
          description: "Common questions: hours, address, delivery terms. Response without operator.",
          auto: true,
          flow: ["Greeting", "Question recognition", "Database answer"],
        },
        {
          icon: PhoneForwarded,
          title: "Rule-based Transfer",
          description: "VIP client? Personal manager. New lead? Sales. Complaint? Supervisor.",
          auto: false,
          flow: ["Customer identification", "Rule check", "Routing"],
        },
      ],
    },
    routing: {
      title: "Routing and Distribution",
      subtitle: "Smart rules for every scenario",
      items: [
        {
          title: "By Topic",
          description: "System detects call topic and routes to corresponding department",
          rules: ["Sales → Sales Dept", "Support → Support Service", "Payment → Accounting", "Complaint → Supervisor"],
        },
        {
          title: "By Operator Load",
          description: "Automatic distribution to least busy employees",
          rules: ["Even load", "Skill consideration", "Skill priority", "Reserve overflow"],
        },
        {
          title: "By Time & Schedule",
          description: "Different rules for work hours, lunch, weekends and holidays",
          rules: ["Work hours → Operators", "Lunch → On-duty", "Weekends → Auto-response", "Holidays → Recording"],
        },
        {
          title: "By Customer Status",
          description: "VIP customers get priority and personal manager",
          rules: ["VIP → Personal manager", "New → Sales", "Regular → Call history", "Debtor → Legal"],
        },
      ],
    },
    queues: {
      title: "Queues and Peak Loads",
      subtitle: "No call will be lost",
      features: [
        {
          icon: Layers,
          title: "Smart Queues",
          description: "Prioritization by customer importance, topic and wait time",
        },
        {
          icon: Timer,
          title: "Wait Time",
          description: "Voicing queue position and estimated response time",
        },
        {
          icon: PhoneForwarded,
          title: "Callback",
          description: "Offer to call back when operator is free. No waiting on line",
        },
        {
          icon: Network,
          title: "Overflow",
          description: "When overloaded — automatic transfer to reserve group or outsource",
        },
        {
          icon: BarChart3,
          title: "Forecasting",
          description: "AI predicts peak hours and scales resources in advance",
        },
        {
          icon: Zap,
          title: "Instant Scaling",
          description: "Automatic channel increase with load growth",
        },
      ],
    },
    closedVsTransfer: {
      title: "Which Calls Close Automatically vs Transfer",
      autoTitle: "Close Automatically",
      transferTitle: "Transfer to Operator",
      autoItems: [
        "Order / delivery status",
        "Hours, address, contacts",
        "Scheduled service booking",
        "FAQ answers",
        "After-hours request intake",
        "Promotion information",
        "Reminders and confirmations",
      ],
      transferItems: [
        "Complex technical questions",
        "Complaints and claims",
        "VIP customers",
        "Non-standard requests",
        "Financial questions",
        "Urgent cases",
      ],
      stats: { auto: "80%", transfer: "20%" },
    },
    integrations: {
      title: "Telephony Integrations",
      subtitle: "Works with any infrastructure",
      categories: [
        {
          title: "Virtual PBX",
          items: ["Asterisk", "FreePBX", "3CX", "RingCentral", "Vonage", "Twilio"],
        },
        {
          title: "Telecom Providers",
          items: ["AT&T", "Verizon", "T-Mobile", "BT", "Orange"],
        },
        {
          title: "CRM Systems",
          items: ["amoCRM", "Bitrix24", "1C", "Salesforce", "HubSpot"],
        },
        {
          title: "Helpdesk",
          items: ["Zendesk", "Freshdesk", "Jira Service", "UseDesk"],
        },
      ],
    },
    pricing: {
      title: "Pricing",
      subtitle: "Transparent pricing with no hidden fees",
      plans: [
        {
          name: "Start",
          price: "$200",
          period: "/month",
          description: "For small business",
          features: [
            "Up to 500 calls/month",
            "3 routing rules",
            "1 queue",
            "Basic analytics",
            "Email support",
          ],
          highlight: false,
        },
        {
          name: "Business",
          price: "$500",
          period: "/month",
          description: "For growing companies",
          features: [
            "Up to 3000 calls/month",
            "Unlimited rules",
            "5 priority queues",
            "Advanced analytics",
            "Callback and overflow",
            "Priority support",
          ],
          highlight: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          description: "For large business",
          features: [
            "Unlimited calls",
            "Custom scenarios",
            "Dedicated infrastructure",
            "99.9% SLA",
            "24/7 support",
            "Personal manager",
          ],
          highlight: false,
        },
      ],
      note: "First 14 days free. Implementation and setup included.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "How is automatic operator different from regular IVR?",
          a: "Classic IVR requires button presses (1 — sales, 2 — support). Automatic operator understands natural speech, detects topics automatically and can resolve issues without human transfer.",
        },
        {
          q: "Can it be used together with robot operator?",
          a: "Yes, solutions complement each other. Automatic operator distributes call flow, robot operator handles dialogues where it's more effective.",
        },
        {
          q: "How quickly can the system be launched?",
          a: "Basic setup takes 3-5 days. Complex scenarios with multiple rules and integrations — up to 2 weeks.",
        },
        {
          q: "What happens during peak loads?",
          a: "System scales automatically, customers are queued with wait time announcement, callback or overflow to reserve group offered if needed.",
        },
        {
          q: "What data is recorded for each call?",
          a: "Call recording, transcription, topic, call route, queue time, result (resolved/transferred), quality rating.",
        },
        {
          q: "Does system work with multiple numbers?",
          a: "Yes, unlimited incoming numbers supported with different routing rules for each.",
        },
      ],
    },
    cta: {
      title: "Ready to optimize call processing?",
      subtitle: "Get a personalized system demo and cost calculation for your needs",
      button: "Request Demo",
      trust: "Free consultation · ROI calculation · No obligations",
    },
    relatedLinks: {
      title: "See Also",
      items: [
        { title: "Robot Operator", href: "/solutions/robot-operator", description: "AI employee for dialogues" },
        { title: "Virtual Operator", href: "/solutions/virtual-operator", description: "Cloud solution for calls" },
        { title: "All Solutions", href: "/solutions", description: "Full product catalog" },
      ],
    },
  },
}

export function AutomaticOperatorPage({ locale }: AutomaticOperatorPageProps) {
  const { openModal } = useCTA()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = content[locale as keyof typeof content] || content.ru

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Unique Cyan/Teal Gradient */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a1628]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Network className="w-4 h-4" />
              {t.badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {t.title}
              <span className="block text-cyan-400">{t.titleHighlight}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                onClick={() => openModal('demo')}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 h-14 text-lg"
              >
                {t.cta1}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-600 text-white hover:bg-slate-800 h-14 text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                {t.cta2}
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section - Key Differentiator */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.difference.title}</h2>
            <p className="text-xl text-muted-foreground">{t.difference.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Automatic Operator */}
            <Card className="border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center">
                    <Network className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">{t.difference.automatic.title}</h3>
                    <p className="text-sm text-cyan-600 dark:text-cyan-500">{t.difference.automatic.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{t.difference.automatic.description}</p>
                <ul className="space-y-3 mb-6">
                  {t.difference.automatic.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-xl bg-cyan-100 dark:bg-cyan-900/30">
                  <span className="text-sm font-medium text-cyan-700 dark:text-cyan-400">Для кого: </span>
                  <span className="text-sm text-cyan-600 dark:text-cyan-300">{t.difference.automatic.useCases}</span>
                </div>
              </CardContent>
            </Card>
            
            {/* Robot Operator */}
            <Card className="border-2 border-slate-300 dark:border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-600 flex items-center justify-center">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{t.difference.robot.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.difference.robot.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{t.difference.robot.description}</p>
                <ul className="space-y-3 mb-6">
                  {t.difference.robot.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-slate-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
                  <span className="text-sm font-medium">Для кого: </span>
                  <span className="text-sm text-muted-foreground">{t.difference.robot.useCases}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-muted-foreground bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-4 border border-cyan-200 dark:border-cyan-800">
            {t.difference.note}
          </p>
        </div>
      </section>

      {/* Call Flow Visualization */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.callFlow.title}</h2>
            <p className="text-xl text-muted-foreground">{t.callFlow.subtitle}</p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 -translate-y-1/2 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {t.callFlow.steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={idx} className="relative flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-4 relative z-10 shadow-lg shadow-cyan-500/20">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    {idx < t.callFlow.steps.length - 1 && (
                      <ArrowDown className="w-6 h-6 text-cyan-500 mt-4 md:hidden" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.scenarios.title}</h2>
            <p className="text-xl text-muted-foreground">{t.scenarios.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.scenarios.items.map((scenario, idx) => {
              const Icon = scenario.icon
              return (
                <Card key={idx} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className={`p-4 ${scenario.auto ? 'bg-gradient-to-r from-cyan-500 to-teal-500' : 'bg-gradient-to-r from-slate-600 to-slate-700'}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className="w-6 h-6 text-white" />
                          <h3 className="font-semibold text-white">{scenario.title}</h3>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${scenario.auto ? 'bg-white/20 text-white' : 'bg-white/10 text-white'}`}>
                          {scenario.auto ? 'Авто' : 'Перевод'}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-muted-foreground mb-4">{scenario.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {scenario.flow.map((step, i) => (
                          <span key={i} className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                            {i > 0 && <ArrowRight className="w-3 h-3 text-cyan-500" />}
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Closed vs Transfer */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">{t.closedVsTransfer.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Auto Close */}
            <Card className="border-2 border-cyan-500/30">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400">{t.closedVsTransfer.autoTitle}</h3>
                  <span className="text-4xl font-bold text-cyan-500">{t.closedVsTransfer.stats.auto}</span>
                </div>
                <ul className="space-y-3">
                  {t.closedVsTransfer.autoItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* Transfer */}
            <Card className="border-2 border-slate-300 dark:border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">{t.closedVsTransfer.transferTitle}</h3>
                  <span className="text-4xl font-bold text-slate-500">{t.closedVsTransfer.stats.transfer}</span>
                </div>
                <ul className="space-y-3">
                  {t.closedVsTransfer.transferItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <PhoneForwarded className="w-5 h-5 text-slate-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Routing Rules */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.routing.title}</h2>
            <p className="text-xl text-muted-foreground">{t.routing.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {t.routing.items.map((item, idx) => (
              <Card key={idx} className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="space-y-2">
                    {item.rules.map((rule, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <GitBranch className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Queues */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.queues.title}</h2>
            <p className="text-xl text-muted-foreground">{t.queues.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.queues.features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.integrations.title}</h2>
            <p className="text-xl text-muted-foreground">{t.integrations.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.integrations.categories.map((category, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="font-semibold mb-4 text-cyan-600 dark:text-cyan-400">{category.title}</h3>
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.pricing.title}</h2>
            <p className="text-xl text-muted-foreground">{t.pricing.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {t.pricing.plans.map((plan, idx) => (
              <Card key={idx} className={`relative overflow-hidden ${plan.highlight ? 'border-2 border-cyan-500 shadow-lg shadow-cyan-500/10' : ''}`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500" />
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-cyan-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.highlight ? 'bg-cyan-500 hover:bg-cyan-600 text-white' : ''}`}
                    variant={plan.highlight ? 'default' : 'outline'}
                    onClick={() => openModal('demo')}
                  >
                    {t.cta1}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground">{t.pricing.note}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">{t.faq.title}</h2>
          
          <div className="space-y-4">
            {t.faq.items.map((item, idx) => (
              <Card key={idx} className="overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-semibold pr-4">{item.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{item.a}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-cyan-100 mb-8">{t.cta.subtitle}</p>
          <Button 
            size="lg" 
            onClick={() => openModal('demo')}
            className="bg-white text-cyan-600 hover:bg-cyan-50 font-semibold px-8 h-14 text-lg"
          >
            {t.cta.button}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-cyan-200 mt-6">{t.cta.trust}</p>
        </div>
      </section>

      {/* AI Automation Hub Link */}
      <section className="py-12 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Дополнительно</p>
              <h3 className="text-xl font-semibold">AI автоматизация бизнеса</h3>
            </div>
            <Button asChild variant="ghost" className="text-cyan-600 hover:text-cyan-700">
              <Link href={`/${locale}/automation-business`}>
                Подробнее <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">{t.relatedLinks.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.relatedLinks.items.map((item, idx) => (
              <Link key={idx} href={`/${locale}${item.href}`} className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 group-hover:text-cyan-600 transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <ArrowRight className="w-5 h-5 text-cyan-500 mt-4 group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
