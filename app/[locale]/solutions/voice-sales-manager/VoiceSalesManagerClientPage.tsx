"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Play,
  PhoneCall,
  CheckCircle2,
  Brain,
  Calculator,
  Package,
  Truck,
  FileText,
  PhoneForwarded,
  UserCheck,
  ShoppingCart,
  Settings,
  Database,
  BarChart3,
  Building2,
  Factory,
  Warehouse,
  HardHat,
  ShoppingBag,
  Headphones,
  Clock,
  Zap,
  Shield,
  Globe,
  ArrowUpRight,
  ChevronRight,
  Server,
  Cpu,
  Network,
  Layers,
  Calendar,
  Users,
  Workflow,
  Target,
  TrendingUp,
  MessageSquare,
  Bot,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCTA } from "@/components/modals/cta-provider"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import type { Locale } from "@/lib/i18n/config"

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
/*  Full translations for all 6 languages                              */
/* ================================================================== */
const translations = {
  ru: {
    breadcrumb: { home: "Главная", solutions: "Решения", current: "AI-менеджер по продажам" },
    hero: {
      badge: "Цифровой сотрудник нового поколения",
      title1: "Не просто голосовой бот.",
      title2: "Полноценный AI-продавец.",
      subtitle: "Это не красивая болталка. Это система, которая ведёт диалог, считает стоимость, подбирает товары, формирует документы и закрывает сделки — от звонка до оплаты.",
      cta1: "Запросить демонстрацию",
      cta2: "Послушать примеры",
      stats: {
        s1: { value: "100%", label: "звонков обработано" },
        s2: { value: "24/7", label: "без выходных" },
        s3: { value: "∞", label: "одновременных линий" },
        s4: { value: "< 1с", label: "время ответа" },
      },
    },
    notBot: {
      label: "Почему мы — другие",
      title: "Это не чат-бот и не IVR-меню",
      subtitle: "Мы создали систему, которая действительно понимает бизнес-процессы и выполняет работу менеджера",
      comparison: {
        left: {
          title: "Обычные голосовые боты",
          items: [
            "Читают скрипт по шаблону",
            "Не понимают контекст",
            "Не умеют считать",
            "Не работают с базами данных",
            "Раздражают клиентов",
            "Просто переводят на оператора",
          ],
        },
        right: {
          title: "AI-менеджер M2 Solutions",
          items: [
            "Ведёт динамический диалог",
            "Понимает потребность клиента",
            "Выполняет сложные расчёты",
            "Работает с каталогами и CRM",
            "Закрывает сделки самостоятельно",
            "Формирует документы и счета",
          ],
        },
      },
    },
    capabilities: {
      label: "Возможности системы",
      title: "Что умеет AI-менеджер",
      subtitle: "Полный функционал для автоматизации продаж — от первого звонка до закрытия сделки",
      items: [
        {
          icon: "brain",
          title: "Ведёт полноценный диалог",
          desc: "Отвечает на входящие звонки, задаёт уточняющие вопросы, понимает потребность клиента и подбирает подходящий товар или услугу. Это не скрипт — это динамический диалог.",
        },
        {
          icon: "calculator",
          title: "Делает расчёты в реальном времени",
          desc: "Рассчитывает стоимость заказа, квадратные и погонные метры, учитывает толщину, длину, количество листов, коэффициенты и формулы. Сложная математика — за секунды.",
        },
        {
          icon: "package",
          title: "Работает с каталогами товаров",
          desc: "Ищет товары в базе, проверяет наличие, учитывает параметры и вариации: толщину, цвет, покрытие. Работает с каталогами, базами данных и прайс-листами.",
        },
        {
          icon: "truck",
          title: "Рассчитывает доставку",
          desc: "Определяет вес заказа, длину материалов, подбирает подходящий транспорт, рассчитывает стоимость доставки и предлагает оптимальный вариант клиенту.",
        },
        {
          icon: "fileText",
          title: "Формирует документы",
          desc: "Автоматически создаёт коммерческие предложения, счета, готовит документы и отправляет их на email клиента или в CRM. Полная автоматизация документооборота.",
        },
        {
          icon: "phoneForwarded",
          title: "Перенаправляет звонки",
          desc: "Если ситуация требует участия человека — переводит звонок менеджеру с полной информацией о клиенте и контекстом разговора. Менеджер получает подготовленного клиента.",
        },
        {
          icon: "userCheck",
          title: "Запоминает клиентов",
          desc: "Система помнит номер телефона, историю разговоров, предыдущие заказы и интересы клиента. Персонализированный диалог с каждым повторным обращением.",
        },
        {
          icon: "shoppingCart",
          title: "Закрывает сделки полностью",
          desc: "В определённых сценариях AI способен провести сделку от звонка до продажи: выяснить задачу, сделать расчёт, сформировать предложение, отправить документы и зафиксировать заказ.",
        },
      ],
    },
    fullCycle: {
      label: "Полный цикл продаж",
      title: "От звонка до оплаты — автоматически",
      subtitle: "AI-менеджер может полностью закрыть сделку без участия человека",
      steps: [
        { num: "01", title: "Клиент звонит", desc: "AI мгновенно отвечает, представляется и начинает диалог" },
        { num: "02", title: "Выясняет задачу", desc: "Задаёт вопросы, понимает потребность, уточняет параметры" },
        { num: "03", title: "Делает расчёт", desc: "Считает стоимость, подбирает товар, рассчитывает доставку" },
        { num: "04", title: "Формирует КП", desc: "Создаёт коммерческое предложение с расчётами" },
        { num: "05", title: "Отправляет документы", desc: "Высылает КП и счёт на email или в мессенджер" },
        { num: "06", title: "Фиксирует заказ", desc: "Создаёт сделку в CRM, передаёт данные в учётную систему" },
      ],
    },
    architecture: {
      label: "Архитектура системы",
      title: "Как это работает внутри",
      subtitle: "Многослойная архитектура для надёжной и масштабируемой работы",
      layers: [
        { icon: "headphones", title: "Слой телефонии", desc: "Интеграция с любыми АТС, SIP-провайдерами, виртуальными номерами" },
        { icon: "bot", title: "Слой распознавания", desc: "Speech-to-Text с точностью 98%+, понимание контекста и интонаций" },
        { icon: "brain", title: "Слой AI-логики", desc: "LLM + бизнес-правила + база знаний компании" },
        { icon: "database", title: "Слой данных", desc: "Интеграция с CRM, ERP, каталогами, складом, бухгалтерией" },
        { icon: "messageSquare", title: "Слой синтеза", desc: "Естественный голос, правильные интонации, паузы и эмоции" },
      ],
    },
    integrations: {
      label: "Интеграции",
      title: "Работает с вашими системами",
      subtitle: "AI-менеджер интегрируется с любой инфраструктурой",
      categories: [
        { title: "CRM системы", items: ["Bitrix24", "AmoCRM", "Salesforce", "HubSpot", "1C:CRM"] },
        { title: "Учётные системы", items: ["1C:Предприятие", "SAP", "Oracle", "Microsoft Dynamics"] },
        { title: "Телефония", items: ["Asterisk", "Mango Office", "Билайн", "МТТ", "Zadarma"] },
        { title: "Склад и логистика", items: ["МойСклад", "СДЭК", "Деловые Линии", "Яндекс.Доставка"] },
      ],
    },
    industries: {
      label: "Для кого подходит",
      title: "Отрасли и сценарии",
      subtitle: "AI-менеджер особенно эффективен там, где много расчётов и консультаций",
      items: [
        { icon: "hardHat", title: "Строительные материалы", desc: "Расчёт материалов, подбор по параметрам, доставка на объект" },
        { icon: "factory", title: "Производственные компании", desc: "Калькуляция заказов, работа с каталогом продукции" },
        { icon: "warehouse", title: "Дистрибьюторы", desc: "Работа с прайсами, проверка наличия, резервирование" },
        { icon: "truck", title: "Логистические компании", desc: "Расчёт доставки, подбор транспорта, трекинг" },
        { icon: "shoppingBag", title: "Интернет-магазины", desc: "Консультации по товарам, оформление заказов" },
        { icon: "building2", title: "B2B продажи", desc: "Сложные продажи с индивидуальным расчётом" },
      ],
    },
    implementation: {
      label: "Внедрение",
      title: "Как происходит запуск",
      subtitle: "Мы не продаём шаблонный продукт. Каждый AI-менеджер создаётся под конкретный бизнес.",
      disclaimer: "Сроки зависят от сложности проекта: от нескольких недель до 4-6 месяцев для enterprise-решений",
      phases: [
        {
          phase: "Фаза 1",
          title: "Анализ и проектирование",
          duration: "1-2 недели",
          tasks: ["Аудит бизнес-процессов", "Анализ скриптов продаж", "Проектирование диалогов", "Определение интеграций"],
        },
        {
          phase: "Фаза 2",
          title: "Разработка и интеграция",
          duration: "2-8 недель",
          tasks: ["Настройка AI-модели", "Интеграция с CRM/ERP", "Подключение телефонии", "Настройка бизнес-логики"],
        },
        {
          phase: "Фаза 3",
          title: "Обучение и тестирование",
          duration: "1-4 недели",
          tasks: ["Обучение на реальных данных", "Тестовые звонки", "Корректировка сценариев", "Оптимизация ответов"],
        },
        {
          phase: "Фаза 4",
          title: "Запуск и поддержка",
          duration: "Постоянно",
          tasks: ["Плавный запуск", "Мониторинг качества", "Аналитика и отчёты", "Постоянное улучшение"],
        },
      ],
    },
    future: {
      label: "Развитие платформы",
      title: "Что будет в ближайшем будущем",
      subtitle: "Мы активно работаем над расширением возможностей",
      features: [
        { icon: "settings", title: "Личный кабинет", desc: "Самостоятельное управление AI-менеджером" },
        { icon: "barChart3", title: "Аналитика продаж", desc: "Подробные отчёты и статистика" },
        { icon: "messageSquare", title: "Анализ разговоров", desc: "Транскрипция и оценка качества" },
        { icon: "target", title: "Оптимизация сценариев", desc: "Автоматическое улучшение конверсии" },
      ],
    },
    demo: {
      label: "Демонстрация",
      title: "Послушайте, как это работает",
      subtitle: "Реальные примеры звонков AI-менеджера в разных сценариях",
      samples: [
        { title: "Расчёт стоимости материалов", duration: "2:34", industry: "Стройматериалы" },
        { title: "Консультация по каталогу", duration: "1:48", industry: "Оптовые продажи" },
        { title: "Оформление заказа с доставкой", duration: "3:12", industry: "Интернет-магазин" },
      ],
    },
    faq: {
      label: "Вопросы и ответы",
      title: "Частые вопросы",
      items: [
        {
          q: "Чем AI-менеджер отличается от обычного голосового бота?",
          a: "Обычные боты читают скрипты и не умеют думать. Наш AI-менеджер ведёт динамический диалог, делает расчёты, работает с базами данных и может полностью закрыть сделку. Это не IVR-меню, а полноценный цифровой сотрудник.",
        },
        {
          q: "Сколько времени занимает внедрение?",
          a: "От нескольких недель для типовых сценариев до 4-6 месяцев для сложных enterprise-проектов. Срок зависит от количества интеграций, сложности бизнес-логики и объёма обучающих данных.",
        },
        {
          q: "Можно ли интегрировать с нашей CRM?",
          a: "Да, мы интегрируемся с любыми системами: Bitrix24, AmoCRM, Salesforce, HubSpot, 1C и другими. Также работаем с ERP, складскими системами, бухгалтерией и телефонией.",
        },
        {
          q: "Как AI справляется со сложными расчётами?",
          a: "AI выполняет математические операции мгновенно: расчёт площади, объёма, стоимости с учётом коэффициентов, скидок, доставки. Формулы настраиваются под вашу специфику.",
        },
        {
          q: "Что если клиент хочет поговорить с человеком?",
          a: "AI может в любой момент перевести звонок на менеджера, передав всю информацию о клиенте и контекст разговора. Менеджер получает уже подготовленного клиента.",
        },
        {
          q: "Это шаблонный продукт?",
          a: "Нет. Каждый AI-менеджер создаётся индивидуально под конкретный бизнес: обучается на ваших данных, интегрируется с вашими системами, настраивается под ваши процессы.",
        },
      ],
    },
    cta: {
      label: "Начать работу",
      title: "Готовы автоматизировать продажи?",
      subtitle: "Мы покажем демо, разберём ваш кейс и предложим архитектуру решения",
      btn1: "Запросить демонстрацию",
      btn2: "Связаться с нами",
      features: ["Бесплатная консультация", "Разбор вашего кейса", "Расчёт внедрения"],
    },
  },
  en: {
    breadcrumb: { home: "Home", solutions: "Solutions", current: "AI Sales Manager" },
    hero: {
      badge: "Next-generation digital employee",
      title1: "Not just a voice bot.",
      title2: "A full-fledged AI salesperson.",
      subtitle: "This is not a fancy chatbot. It's a system that conducts dialogues, calculates costs, selects products, generates documents, and closes deals — from call to payment.",
      cta1: "Request a demo",
      cta2: "Listen to examples",
      stats: {
        s1: { value: "100%", label: "calls processed" },
        s2: { value: "24/7", label: "availability" },
        s3: { value: "∞", label: "simultaneous lines" },
        s4: { value: "< 1s", label: "response time" },
      },
    },
    notBot: {
      label: "Why we're different",
      title: "This is not a chatbot or IVR menu",
      subtitle: "We've created a system that truly understands business processes and does a manager's job",
      comparison: {
        left: {
          title: "Regular voice bots",
          items: [
            "Read scripts from a template",
            "Don't understand context",
            "Can't do calculations",
            "Don't work with databases",
            "Frustrate customers",
            "Just transfer to an operator",
          ],
        },
        right: {
          title: "M2 Solutions AI Manager",
          items: [
            "Conducts dynamic dialogue",
            "Understands customer needs",
            "Performs complex calculations",
            "Works with catalogs and CRM",
            "Closes deals independently",
            "Generates documents and invoices",
          ],
        },
      },
    },
    capabilities: {
      label: "System capabilities",
      title: "What the AI manager can do",
      subtitle: "Full functionality for sales automation — from the first call to closing the deal",
      items: [
        {
          icon: "brain",
          title: "Conducts full conversations",
          desc: "Answers incoming calls, asks clarifying questions, understands customer needs, and selects appropriate products or services. Not a script — a dynamic dialogue.",
        },
        {
          icon: "calculator",
          title: "Makes real-time calculations",
          desc: "Calculates order cost, square and linear meters, considers thickness, length, quantity, coefficients, and formulas. Complex math — in seconds.",
        },
        {
          icon: "package",
          title: "Works with product catalogs",
          desc: "Searches products in the database, checks availability, considers parameters and variations: thickness, color, coating. Works with catalogs, databases, and price lists.",
        },
        {
          icon: "truck",
          title: "Calculates delivery",
          desc: "Determines order weight, material length, selects suitable transport, calculates delivery cost, and offers the optimal option to the customer.",
        },
        {
          icon: "fileText",
          title: "Generates documents",
          desc: "Automatically creates commercial proposals, invoices, prepares documents, and sends them to the customer's email or CRM. Full document automation.",
        },
        {
          icon: "phoneForwarded",
          title: "Redirects calls",
          desc: "If a situation requires human involvement — transfers the call to a manager with full customer information and conversation context. The manager receives a prepared customer.",
        },
        {
          icon: "userCheck",
          title: "Remembers customers",
          desc: "The system remembers phone numbers, conversation history, previous orders, and customer interests. Personalized dialogue with every repeat contact.",
        },
        {
          icon: "shoppingCart",
          title: "Closes deals completely",
          desc: "In certain scenarios, AI can conduct a deal from call to sale: clarify the task, make calculations, form a proposal, send documents, and record the order.",
        },
      ],
    },
    fullCycle: {
      label: "Full sales cycle",
      title: "From call to payment — automatically",
      subtitle: "The AI manager can completely close a deal without human involvement",
      steps: [
        { num: "01", title: "Customer calls", desc: "AI instantly answers, introduces itself, and starts the dialogue" },
        { num: "02", title: "Clarifies the task", desc: "Asks questions, understands the need, clarifies parameters" },
        { num: "03", title: "Makes calculations", desc: "Calculates cost, selects products, estimates delivery" },
        { num: "04", title: "Forms proposal", desc: "Creates a commercial proposal with calculations" },
        { num: "05", title: "Sends documents", desc: "Sends the proposal and invoice via email or messenger" },
        { num: "06", title: "Records the order", desc: "Creates a deal in CRM, transfers data to the accounting system" },
      ],
    },
    architecture: {
      label: "System architecture",
      title: "How it works inside",
      subtitle: "Multi-layer architecture for reliable and scalable operation",
      layers: [
        { icon: "headphones", title: "Telephony layer", desc: "Integration with any PBX, SIP providers, virtual numbers" },
        { icon: "bot", title: "Recognition layer", desc: "Speech-to-Text with 98%+ accuracy, context and intonation understanding" },
        { icon: "brain", title: "AI logic layer", desc: "LLM + business rules + company knowledge base" },
        { icon: "database", title: "Data layer", desc: "Integration with CRM, ERP, catalogs, warehouse, accounting" },
        { icon: "messageSquare", title: "Synthesis layer", desc: "Natural voice, correct intonations, pauses, and emotions" },
      ],
    },
    integrations: {
      label: "Integrations",
      title: "Works with your systems",
      subtitle: "The AI manager integrates with any infrastructure",
      categories: [
        { title: "CRM systems", items: ["Bitrix24", "AmoCRM", "Salesforce", "HubSpot", "Pipedrive"] },
        { title: "ERP systems", items: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"] },
        { title: "Telephony", items: ["Asterisk", "Twilio", "Vonage", "RingCentral", "Genesys"] },
        { title: "Warehouse & Logistics", items: ["ShipStation", "Shippo", "FedEx", "UPS", "DHL"] },
      ],
    },
    industries: {
      label: "Who it's for",
      title: "Industries and scenarios",
      subtitle: "The AI manager is especially effective where there are many calculations and consultations",
      items: [
        { icon: "hardHat", title: "Building materials", desc: "Material calculation, parameter-based selection, site delivery" },
        { icon: "factory", title: "Manufacturing companies", desc: "Order calculation, working with product catalog" },
        { icon: "warehouse", title: "Distributors", desc: "Working with price lists, checking availability, reservations" },
        { icon: "truck", title: "Logistics companies", desc: "Delivery calculation, transport selection, tracking" },
        { icon: "shoppingBag", title: "E-commerce", desc: "Product consultations, order processing" },
        { icon: "building2", title: "B2B sales", desc: "Complex sales with individual calculations" },
      ],
    },
    implementation: {
      label: "Implementation",
      title: "How the launch works",
      subtitle: "We don't sell a template product. Each AI manager is created for a specific business.",
      disclaimer: "Timelines depend on project complexity: from a few weeks to 4-6 months for enterprise solutions",
      phases: [
        {
          phase: "Phase 1",
          title: "Analysis and design",
          duration: "1-2 weeks",
          tasks: ["Business process audit", "Sales script analysis", "Dialogue design", "Integration definition"],
        },
        {
          phase: "Phase 2",
          title: "Development and integration",
          duration: "2-8 weeks",
          tasks: ["AI model configuration", "CRM/ERP integration", "Telephony connection", "Business logic setup"],
        },
        {
          phase: "Phase 3",
          title: "Training and testing",
          duration: "1-4 weeks",
          tasks: ["Training on real data", "Test calls", "Scenario adjustments", "Response optimization"],
        },
        {
          phase: "Phase 4",
          title: "Launch and support",
          duration: "Ongoing",
          tasks: ["Soft launch", "Quality monitoring", "Analytics and reports", "Continuous improvement"],
        },
      ],
    },
    future: {
      label: "Platform development",
      title: "What's coming soon",
      subtitle: "We're actively working on expanding capabilities",
      features: [
        { icon: "settings", title: "Personal dashboard", desc: "Self-service AI manager control" },
        { icon: "barChart3", title: "Sales analytics", desc: "Detailed reports and statistics" },
        { icon: "messageSquare", title: "Conversation analysis", desc: "Transcription and quality assessment" },
        { icon: "target", title: "Scenario optimization", desc: "Automatic conversion improvement" },
      ],
    },
    demo: {
      label: "Demonstration",
      title: "Listen to how it works",
      subtitle: "Real examples of AI manager calls in different scenarios",
      samples: [
        { title: "Material cost calculation", duration: "2:34", industry: "Building materials" },
        { title: "Catalog consultation", duration: "1:48", industry: "Wholesale" },
        { title: "Order with delivery", duration: "3:12", industry: "E-commerce" },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "How is the AI manager different from a regular voice bot?",
          a: "Regular bots read scripts and can't think. Our AI manager conducts dynamic dialogues, makes calculations, works with databases, and can completely close deals. It's not an IVR menu, but a full-fledged digital employee.",
        },
        {
          q: "How long does implementation take?",
          a: "From a few weeks for standard scenarios to 4-6 months for complex enterprise projects. The timeline depends on the number of integrations, business logic complexity, and training data volume.",
        },
        {
          q: "Can it integrate with our CRM?",
          a: "Yes, we integrate with any systems: Bitrix24, AmoCRM, Salesforce, HubSpot, SAP, and others. We also work with ERP, warehouse systems, accounting, and telephony.",
        },
        {
          q: "How does AI handle complex calculations?",
          a: "AI performs mathematical operations instantly: area, volume, cost calculations with coefficients, discounts, delivery. Formulas are customized to your specifics.",
        },
        {
          q: "What if a customer wants to talk to a human?",
          a: "AI can transfer the call to a manager at any time, passing all customer information and conversation context. The manager receives an already prepared customer.",
        },
        {
          q: "Is this a template product?",
          a: "No. Each AI manager is created individually for a specific business: trained on your data, integrated with your systems, configured for your processes.",
        },
      ],
    },
    cta: {
      label: "Get started",
      title: "Ready to automate sales?",
      subtitle: "We'll show you a demo, analyze your case, and propose a solution architecture",
      btn1: "Request a demo",
      btn2: "Contact us",
      features: ["Free consultation", "Case analysis", "Implementation estimate"],
    },
  },
  es: {
    breadcrumb: { home: "Inicio", solutions: "Soluciones", current: "Gerente de Ventas IA" },
    hero: {
      badge: "Empleado digital de nueva generación",
      title1: "No es solo un bot de voz.",
      title2: "Es un vendedor IA completo.",
      subtitle: "Esto no es un chatbot bonito. Es un sistema que conduce diálogos, calcula costos, selecciona productos, genera documentos y cierra ventas — desde la llamada hasta el pago.",
      cta1: "Solicitar demostración",
      cta2: "Escuchar ejemplos",
      stats: {
        s1: { value: "100%", label: "llamadas procesadas" },
        s2: { value: "24/7", label: "disponibilidad" },
        s3: { value: "∞", label: "líneas simultáneas" },
        s4: { value: "< 1s", label: "tiempo de respuesta" },
      },
    },
    notBot: {
      label: "Por qué somos diferentes",
      title: "Esto no es un chatbot ni un menú IVR",
      subtitle: "Hemos creado un sistema que realmente entiende los procesos de negocio y hace el trabajo de un gerente",
      comparison: {
        left: {
          title: "Bots de voz comunes",
          items: [
            "Leen guiones de plantilla",
            "No entienden el contexto",
            "No pueden calcular",
            "No trabajan con bases de datos",
            "Frustran a los clientes",
            "Solo transfieren al operador",
          ],
        },
        right: {
          title: "Gerente IA de M2 Solutions",
          items: [
            "Conduce diálogo dinámico",
            "Entiende las necesidades del cliente",
            "Realiza cálculos complejos",
            "Trabaja con catálogos y CRM",
            "Cierra ventas de forma independiente",
            "Genera documentos y facturas",
          ],
        },
      },
    },
    capabilities: {
      label: "Capacidades del sistema",
      title: "Qué puede hacer el gerente IA",
      subtitle: "Funcionalidad completa para automatizar ventas — desde la primera llamada hasta cerrar el trato",
      items: [
        {
          icon: "brain",
          title: "Conduce conversaciones completas",
          desc: "Responde llamadas entrantes, hace preguntas de aclaración, entiende las necesidades del cliente y selecciona productos o servicios apropiados. No es un guión — es un diálogo dinámico.",
        },
        {
          icon: "calculator",
          title: "Hace cálculos en tiempo real",
          desc: "Calcula el costo del pedido, metros cuadrados y lineales, considera espesor, longitud, cantidad, coeficientes y fórmulas. Matemáticas complejas — en segundos.",
        },
        {
          icon: "package",
          title: "Trabaja con catálogos de productos",
          desc: "Busca productos en la base de datos, verifica disponibilidad, considera parámetros y variaciones: espesor, color, recubrimiento. Trabaja con catálogos, bases de datos y listas de precios.",
        },
        {
          icon: "truck",
          title: "Calcula la entrega",
          desc: "Determina el peso del pedido, longitud de materiales, selecciona transporte adecuado, calcula el costo de entrega y ofrece la opción óptima al cliente.",
        },
        {
          icon: "fileText",
          title: "Genera documentos",
          desc: "Crea automáticamente propuestas comerciales, facturas, prepara documentos y los envía al email del cliente o al CRM. Automatización completa de documentos.",
        },
        {
          icon: "phoneForwarded",
          title: "Redirige llamadas",
          desc: "Si la situación requiere intervención humana — transfiere la llamada a un gerente con toda la información del cliente y contexto de la conversación.",
        },
        {
          icon: "userCheck",
          title: "Recuerda a los clientes",
          desc: "El sistema recuerda números de teléfono, historial de conversaciones, pedidos anteriores e intereses del cliente. Diálogo personalizado con cada contacto.",
        },
        {
          icon: "shoppingCart",
          title: "Cierra ventas completamente",
          desc: "En ciertos escenarios, la IA puede conducir un trato desde la llamada hasta la venta: aclarar la tarea, hacer cálculos, formar una propuesta, enviar documentos y registrar el pedido.",
        },
      ],
    },
    fullCycle: {
      label: "Ciclo de ventas completo",
      title: "Desde la llamada hasta el pago — automáticamente",
      subtitle: "El gerente IA puede cerrar completamente una venta sin intervención humana",
      steps: [
        { num: "01", title: "Cliente llama", desc: "La IA responde instantáneamente, se presenta e inicia el diálogo" },
        { num: "02", title: "Aclara la tarea", desc: "Hace preguntas, entiende la necesidad, aclara parámetros" },
        { num: "03", title: "Hace cálculos", desc: "Calcula costo, selecciona productos, estima entrega" },
        { num: "04", title: "Forma propuesta", desc: "Crea una propuesta comercial con cálculos" },
        { num: "05", title: "Envía documentos", desc: "Envía propuesta y factura por email o mensajero" },
        { num: "06", title: "Registra el pedido", desc: "Crea un trato en CRM, transfiere datos al sistema contable" },
      ],
    },
    architecture: {
      label: "Arquitectura del sistema",
      title: "Cómo funciona por dentro",
      subtitle: "Arquitectura multicapa para operación confiable y escalable",
      layers: [
        { icon: "headphones", title: "Capa de telefonía", desc: "Integración con cualquier PBX, proveedores SIP, números virtuales" },
        { icon: "bot", title: "Capa de reconocimiento", desc: "Speech-to-Text con 98%+ de precisión, comprensión de contexto e entonación" },
        { icon: "brain", title: "Capa de lógica IA", desc: "LLM + reglas de negocio + base de conocimiento de la empresa" },
        { icon: "database", title: "Capa de datos", desc: "Integración con CRM, ERP, catálogos, almacén, contabilidad" },
        { icon: "messageSquare", title: "Capa de síntesis", desc: "Voz natural, entonaciones correctas, pausas y emociones" },
      ],
    },
    integrations: {
      label: "Integraciones",
      title: "Funciona con sus sistemas",
      subtitle: "El gerente IA se integra con cualquier infraestructura",
      categories: [
        { title: "Sistemas CRM", items: ["Bitrix24", "AmoCRM", "Salesforce", "HubSpot", "Pipedrive"] },
        { title: "Sistemas ERP", items: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"] },
        { title: "Telefonía", items: ["Asterisk", "Twilio", "Vonage", "RingCentral", "Genesys"] },
        { title: "Almacén y Logística", items: ["ShipStation", "Shippo", "FedEx", "UPS", "DHL"] },
      ],
    },
    industries: {
      label: "Para quién es",
      title: "Industrias y escenarios",
      subtitle: "El gerente IA es especialmente efectivo donde hay muchos cálculos y consultas",
      items: [
        { icon: "hardHat", title: "Materiales de construcción", desc: "Cálculo de materiales, selección por parámetros, entrega en obra" },
        { icon: "factory", title: "Empresas manufactureras", desc: "Cálculo de pedidos, trabajo con catálogo de productos" },
        { icon: "warehouse", title: "Distribuidores", desc: "Trabajo con listas de precios, verificación de disponibilidad, reservas" },
        { icon: "truck", title: "Empresas logísticas", desc: "Cálculo de entrega, selección de transporte, seguimiento" },
        { icon: "shoppingBag", title: "E-commerce", desc: "Consultas de productos, procesamiento de pedidos" },
        { icon: "building2", title: "Ventas B2B", desc: "Ventas complejas con cálculo individual" },
      ],
    },
    implementation: {
      label: "Implementación",
      title: "Cómo funciona el lanzamiento",
      subtitle: "No vendemos un producto de plantilla. Cada gerente IA se crea para un negocio específico.",
      disclaimer: "Los plazos dependen de la complejidad del proyecto: desde unas semanas hasta 4-6 meses para soluciones enterprise",
      phases: [
        {
          phase: "Fase 1",
          title: "Análisis y diseño",
          duration: "1-2 semanas",
          tasks: ["Auditoría de procesos", "Análisis de guiones", "Diseño de diálogos", "Definición de integraciones"],
        },
        {
          phase: "Fase 2",
          title: "Desarrollo e integración",
          duration: "2-8 semanas",
          tasks: ["Configuración del modelo IA", "Integración CRM/ERP", "Conexión de telefonía", "Configuración de lógica"],
        },
        {
          phase: "Fase 3",
          title: "Entrenamiento y pruebas",
          duration: "1-4 semanas",
          tasks: ["Entrenamiento con datos reales", "Llamadas de prueba", "Ajustes de escenarios", "Optimización de respuestas"],
        },
        {
          phase: "Fase 4",
          title: "Lanzamiento y soporte",
          duration: "Continuo",
          tasks: ["Lanzamiento suave", "Monitoreo de calidad", "Analítica e informes", "Mejora continua"],
        },
      ],
    },
    future: {
      label: "Desarrollo de plataforma",
      title: "Qué viene próximamente",
      subtitle: "Estamos trabajando activamente en expandir capacidades",
      features: [
        { icon: "settings", title: "Panel personal", desc: "Control autoservicio del gerente IA" },
        { icon: "barChart3", title: "Analítica de ventas", desc: "Informes detallados y estadísticas" },
        { icon: "messageSquare", title: "Análisis de conversaciones", desc: "Transcripción y evaluación de calidad" },
        { icon: "target", title: "Optimización de escenarios", desc: "Mejora automática de conversión" },
      ],
    },
    demo: {
      label: "Demostración",
      title: "Escuche cómo funciona",
      subtitle: "Ejemplos reales de llamadas del gerente IA en diferentes escenarios",
      samples: [
        { title: "Cálculo de costo de materiales", duration: "2:34", industry: "Construcción" },
        { title: "Consulta de catálogo", duration: "1:48", industry: "Mayorista" },
        { title: "Pedido con entrega", duration: "3:12", industry: "E-commerce" },
      ],
    },
    faq: {
      label: "Preguntas frecuentes",
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿En qué se diferencia el gerente IA de un bot de voz común?",
          a: "Los bots comunes leen guiones y no pueden pensar. Nuestro gerente IA conduce diálogos dinámicos, hace cálculos, trabaja con bases de datos y puede cerrar ventas completamente. No es un menú IVR, sino un empleado digital completo.",
        },
        {
          q: "¿Cuánto tiempo toma la implementación?",
          a: "Desde unas semanas para escenarios estándar hasta 4-6 meses para proyectos enterprise complejos. El plazo depende del número de integraciones, complejidad de la lógica y volumen de datos de entrenamiento.",
        },
        {
          q: "¿Se puede integrar con nuestro CRM?",
          a: "Sí, nos integramos con cualquier sistema: Bitrix24, AmoCRM, Salesforce, HubSpot, SAP y otros. También trabajamos con ERP, sistemas de almacén, contabilidad y telefonía.",
        },
        {
          q: "¿Cómo maneja la IA cálculos complejos?",
          a: "La IA realiza operaciones matemáticas instantáneamente: cálculos de área, volumen, costo con coeficientes, descuentos, entrega. Las fórmulas se personalizan según su especificidad.",
        },
        {
          q: "¿Qué pasa si un cliente quiere hablar con una persona?",
          a: "La IA puede transferir la llamada a un gerente en cualquier momento, pasando toda la información del cliente y contexto de la conversación. El gerente recibe un cliente ya preparado.",
        },
        {
          q: "¿Es un producto de plantilla?",
          a: "No. Cada gerente IA se crea individualmente para un negocio específico: entrenado con sus datos, integrado con sus sistemas, configurado para sus procesos.",
        },
      ],
    },
    cta: {
      label: "Comenzar",
      title: "¿Listo para automatizar ventas?",
      subtitle: "Le mostraremos una demo, analizaremos su caso y propondremos una arquitectura de solución",
      btn1: "Solicitar demostración",
      btn2: "Contáctenos",
      features: ["Consulta gratuita", "Análisis de caso", "Estimación de implementación"],
    },
  },
  de: {
    breadcrumb: { home: "Startseite", solutions: "Lösungen", current: "KI-Vertriebsmanager" },
    hero: {
      badge: "Digitaler Mitarbeiter der neuen Generation",
      title1: "Nicht nur ein Sprachbot.",
      title2: "Ein vollwertiger KI-Verkäufer.",
      subtitle: "Das ist kein hübscher Chatbot. Es ist ein System, das Dialoge führt, Kosten berechnet, Produkte auswählt, Dokumente erstellt und Geschäfte abschließt — vom Anruf bis zur Zahlung.",
      cta1: "Demo anfordern",
      cta2: "Beispiele anhören",
      stats: {
        s1: { value: "100%", label: "Anrufe bearbeitet" },
        s2: { value: "24/7", label: "Verfügbarkeit" },
        s3: { value: "∞", label: "gleichzeitige Leitungen" },
        s4: { value: "< 1s", label: "Antwortzeit" },
      },
    },
    notBot: {
      label: "Warum wir anders sind",
      title: "Das ist kein Chatbot oder IVR-Menü",
      subtitle: "Wir haben ein System geschaffen, das Geschäftsprozesse wirklich versteht und die Arbeit eines Managers erledigt",
      comparison: {
        left: {
          title: "Gewöhnliche Sprachbots",
          items: [
            "Lesen Skripte von Vorlagen",
            "Verstehen keinen Kontext",
            "Können nicht rechnen",
            "Arbeiten nicht mit Datenbanken",
            "Frustrieren Kunden",
            "Leiten nur zum Operator weiter",
          ],
        },
        right: {
          title: "M2 Solutions KI-Manager",
          items: [
            "Führt dynamischen Dialog",
            "Versteht Kundenbedürfnisse",
            "Führt komplexe Berechnungen durch",
            "Arbeitet mit Katalogen und CRM",
            "Schließt Geschäfte selbstständig ab",
            "Erstellt Dokumente und Rechnungen",
          ],
        },
      },
    },
    capabilities: {
      label: "Systemfähigkeiten",
      title: "Was der KI-Manager kann",
      subtitle: "Volle Funktionalität für Vertriebsautomatisierung — vom ersten Anruf bis zum Geschäftsabschluss",
      items: [
        {
          icon: "brain",
          title: "Führt vollständige Gespräche",
          desc: "Beantwortet eingehende Anrufe, stellt klärende Fragen, versteht Kundenbedürfnisse und wählt passende Produkte oder Dienstleistungen aus. Kein Skript — ein dynamischer Dialog.",
        },
        {
          icon: "calculator",
          title: "Macht Echtzeit-Berechnungen",
          desc: "Berechnet Bestellkosten, Quadrat- und Laufmeter, berücksichtigt Dicke, Länge, Menge, Koeffizienten und Formeln. Komplexe Mathematik — in Sekunden.",
        },
        {
          icon: "package",
          title: "Arbeitet mit Produktkatalogen",
          desc: "Sucht Produkte in der Datenbank, prüft Verfügbarkeit, berücksichtigt Parameter und Variationen: Dicke, Farbe, Beschichtung. Arbeitet mit Katalogen, Datenbanken und Preislisten.",
        },
        {
          icon: "truck",
          title: "Berechnet Lieferung",
          desc: "Ermittelt Bestellgewicht, Materiallänge, wählt geeigneten Transport, berechnet Lieferkosten und bietet dem Kunden die optimale Option an.",
        },
        {
          icon: "fileText",
          title: "Erstellt Dokumente",
          desc: "Erstellt automatisch Angebote, Rechnungen, bereitet Dokumente vor und sendet sie an die E-Mail des Kunden oder ins CRM. Vollständige Dokumentenautomatisierung.",
        },
        {
          icon: "phoneForwarded",
          title: "Leitet Anrufe weiter",
          desc: "Wenn menschliche Beteiligung erforderlich ist — leitet den Anruf an einen Manager mit vollständigen Kundeninformationen und Gesprächskontext weiter.",
        },
        {
          icon: "userCheck",
          title: "Merkt sich Kunden",
          desc: "Das System merkt sich Telefonnummern, Gesprächsverlauf, frühere Bestellungen und Kundeninteressen. Personalisierter Dialog bei jedem Wiederholungskontakt.",
        },
        {
          icon: "shoppingCart",
          title: "Schließt Geschäfte vollständig ab",
          desc: "In bestimmten Szenarien kann KI ein Geschäft vom Anruf bis zum Verkauf durchführen: Aufgabe klären, Berechnungen machen, Angebot erstellen, Dokumente senden und Bestellung erfassen.",
        },
      ],
    },
    fullCycle: {
      label: "Vollständiger Vertriebszyklus",
      title: "Vom Anruf zur Zahlung — automatisch",
      subtitle: "Der KI-Manager kann ein Geschäft ohne menschliche Beteiligung vollständig abschließen",
      steps: [
        { num: "01", title: "Kunde ruft an", desc: "KI antwortet sofort, stellt sich vor und beginnt den Dialog" },
        { num: "02", title: "Klärt die Aufgabe", desc: "Stellt Fragen, versteht den Bedarf, klärt Parameter" },
        { num: "03", title: "Macht Berechnungen", desc: "Berechnet Kosten, wählt Produkte aus, schätzt Lieferung" },
        { num: "04", title: "Erstellt Angebot", desc: "Erstellt ein Angebot mit Berechnungen" },
        { num: "05", title: "Sendet Dokumente", desc: "Sendet Angebot und Rechnung per E-Mail oder Messenger" },
        { num: "06", title: "Erfasst Bestellung", desc: "Erstellt ein Geschäft im CRM, überträgt Daten ins Buchhaltungssystem" },
      ],
    },
    architecture: {
      label: "Systemarchitektur",
      title: "Wie es innen funktioniert",
      subtitle: "Mehrschichtige Architektur für zuverlässigen und skalierbaren Betrieb",
      layers: [
        { icon: "headphones", title: "Telefonie-Schicht", desc: "Integration mit jeder PBX, SIP-Anbietern, virtuellen Nummern" },
        { icon: "bot", title: "Erkennungsschicht", desc: "Speech-to-Text mit 98%+ Genauigkeit, Kontext- und Intonationsverständnis" },
        { icon: "brain", title: "KI-Logikschicht", desc: "LLM + Geschäftsregeln + Unternehmenswissensbasis" },
        { icon: "database", title: "Datenschicht", desc: "Integration mit CRM, ERP, Katalogen, Lager, Buchhaltung" },
        { icon: "messageSquare", title: "Syntheseschicht", desc: "Natürliche Stimme, korrekte Intonationen, Pausen und Emotionen" },
      ],
    },
    integrations: {
      label: "Integrationen",
      title: "Funktioniert mit Ihren Systemen",
      subtitle: "Der KI-Manager integriert sich mit jeder Infrastruktur",
      categories: [
        { title: "CRM-Systeme", items: ["Bitrix24", "Salesforce", "HubSpot", "Pipedrive", "SAP CRM"] },
        { title: "ERP-Systeme", items: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"] },
        { title: "Telefonie", items: ["Asterisk", "Twilio", "Sipgate", "Placetel", "Genesys"] },
        { title: "Lager & Logistik", items: ["SAP WM", "DHL", "UPS", "FedEx", "Hermes"] },
      ],
    },
    industries: {
      label: "Für wen es ist",
      title: "Branchen und Szenarien",
      subtitle: "Der KI-Manager ist besonders effektiv, wo es viele Berechnungen und Beratungen gibt",
      items: [
        { icon: "hardHat", title: "Baumaterialien", desc: "Materialberechnung, Parameterauswahl, Lieferung auf Baustelle" },
        { icon: "factory", title: "Fertigungsunternehmen", desc: "Auftragsberechnung, Arbeit mit Produktkatalog" },
        { icon: "warehouse", title: "Distributoren", desc: "Arbeit mit Preislisten, Verfügbarkeitsprüfung, Reservierungen" },
        { icon: "truck", title: "Logistikunternehmen", desc: "Lieferberechnung, Transportauswahl, Tracking" },
        { icon: "shoppingBag", title: "E-Commerce", desc: "Produktberatung, Auftragsabwicklung" },
        { icon: "building2", title: "B2B-Vertrieb", desc: "Komplexer Vertrieb mit individueller Kalkulation" },
      ],
    },
    implementation: {
      label: "Implementierung",
      title: "Wie der Start funktioniert",
      subtitle: "Wir verkaufen kein Vorlagenprodukt. Jeder KI-Manager wird für ein bestimmtes Unternehmen erstellt.",
      disclaimer: "Zeitrahmen hängen von der Projektkomplexität ab: von wenigen Wochen bis 4-6 Monate für Enterprise-Lösungen",
      phases: [
        {
          phase: "Phase 1",
          title: "Analyse und Design",
          duration: "1-2 Wochen",
          tasks: ["Geschäftsprozess-Audit", "Vertriebsskript-Analyse", "Dialog-Design", "Integrationsdefinition"],
        },
        {
          phase: "Phase 2",
          title: "Entwicklung und Integration",
          duration: "2-8 Wochen",
          tasks: ["KI-Modell-Konfiguration", "CRM/ERP-Integration", "Telefonie-Anbindung", "Geschäftslogik-Setup"],
        },
        {
          phase: "Phase 3",
          title: "Training und Test",
          duration: "1-4 Wochen",
          tasks: ["Training mit echten Daten", "Testanrufe", "Szenario-Anpassungen", "Antwortoptimierung"],
        },
        {
          phase: "Phase 4",
          title: "Start und Support",
          duration: "Fortlaufend",
          tasks: ["Sanfter Start", "Qualitätsüberwachung", "Analytik und Berichte", "Kontinuierliche Verbesserung"],
        },
      ],
    },
    future: {
      label: "Plattformentwicklung",
      title: "Was bald kommt",
      subtitle: "Wir arbeiten aktiv an der Erweiterung der Fähigkeiten",
      features: [
        { icon: "settings", title: "Persönliches Dashboard", desc: "Self-Service KI-Manager-Steuerung" },
        { icon: "barChart3", title: "Vertriebsanalytik", desc: "Detaillierte Berichte und Statistiken" },
        { icon: "messageSquare", title: "Gesprächsanalyse", desc: "Transkription und Qualitätsbewertung" },
        { icon: "target", title: "Szenario-Optimierung", desc: "Automatische Konversionsverbesserung" },
      ],
    },
    demo: {
      label: "Demonstration",
      title: "Hören Sie, wie es funktioniert",
      subtitle: "Echte Beispiele von KI-Manager-Anrufen in verschiedenen Szenarien",
      samples: [
        { title: "Materialkostenberechnung", duration: "2:34", industry: "Baumaterialien" },
        { title: "Katalogberatung", duration: "1:48", industry: "Großhandel" },
        { title: "Bestellung mit Lieferung", duration: "3:12", industry: "E-Commerce" },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Häufig gestellte Fragen",
      items: [
        {
          q: "Wie unterscheidet sich der KI-Manager von einem gewöhnlichen Sprachbot?",
          a: "Gewöhnliche Bots lesen Skripte und können nicht denken. Unser KI-Manager führt dynamische Dialoge, macht Berechnungen, arbeitet mit Datenbanken und kann Geschäfte vollständig abschließen. Es ist kein IVR-Menü, sondern ein vollwertiger digitaler Mitarbeiter.",
        },
        {
          q: "Wie lange dauert die Implementierung?",
          a: "Von wenigen Wochen für Standardszenarien bis 4-6 Monate für komplexe Enterprise-Projekte. Der Zeitrahmen hängt von der Anzahl der Integrationen, der Geschäftslogikkomplexität und dem Trainingsdatenvolumen ab.",
        },
        {
          q: "Kann es mit unserem CRM integriert werden?",
          a: "Ja, wir integrieren mit allen Systemen: Bitrix24, Salesforce, HubSpot, SAP und anderen. Wir arbeiten auch mit ERP, Lagersystemen, Buchhaltung und Telefonie.",
        },
        {
          q: "Wie geht KI mit komplexen Berechnungen um?",
          a: "KI führt mathematische Operationen sofort durch: Flächen-, Volumen-, Kostenberechnungen mit Koeffizienten, Rabatten, Lieferung. Formeln werden an Ihre Spezifika angepasst.",
        },
        {
          q: "Was wenn ein Kunde mit einer Person sprechen möchte?",
          a: "KI kann den Anruf jederzeit an einen Manager weiterleiten und dabei alle Kundeninformationen und den Gesprächskontext übergeben. Der Manager erhält einen bereits vorbereiteten Kunden.",
        },
        {
          q: "Ist das ein Vorlagenprodukt?",
          a: "Nein. Jeder KI-Manager wird individuell für ein bestimmtes Unternehmen erstellt: mit Ihren Daten trainiert, mit Ihren Systemen integriert, für Ihre Prozesse konfiguriert.",
        },
      ],
    },
    cta: {
      label: "Loslegen",
      title: "Bereit, den Vertrieb zu automatisieren?",
      subtitle: "Wir zeigen Ihnen eine Demo, analysieren Ihren Fall und schlagen eine Lösungsarchitektur vor",
      btn1: "Demo anfordern",
      btn2: "Kontaktieren Sie uns",
      features: ["Kostenlose Beratung", "Fallanalyse", "Implementierungsschätzung"],
    },
  },
  nl: {
    breadcrumb: { home: "Home", solutions: "Oplossingen", current: "AI Verkoopmanager" },
    hero: {
      badge: "Digitale medewerker van de nieuwe generatie",
      title1: "Niet zomaar een stembot.",
      title2: "Een volwaardige AI-verkoper.",
      subtitle: "Dit is geen mooie chatbot. Het is een systeem dat dialogen voert, kosten berekent, producten selecteert, documenten genereert en deals sluit — van gesprek tot betaling.",
      cta1: "Demo aanvragen",
      cta2: "Voorbeelden beluisteren",
      stats: {
        s1: { value: "100%", label: "oproepen verwerkt" },
        s2: { value: "24/7", label: "beschikbaarheid" },
        s3: { value: "∞", label: "gelijktijdige lijnen" },
        s4: { value: "< 1s", label: "reactietijd" },
      },
    },
    notBot: {
      label: "Waarom wij anders zijn",
      title: "Dit is geen chatbot of IVR-menu",
      subtitle: "We hebben een systeem gecreëerd dat bedrijfsprocessen echt begrijpt en het werk van een manager doet",
      comparison: {
        left: {
          title: "Gewone stembots",
          items: [
            "Lezen scripts van sjablonen",
            "Begrijpen geen context",
            "Kunnen niet rekenen",
            "Werken niet met databases",
            "Frustreren klanten",
            "Schakelen alleen door naar operator",
          ],
        },
        right: {
          title: "M2 Solutions AI Manager",
          items: [
            "Voert dynamische dialoog",
            "Begrijpt klantbehoeften",
            "Voert complexe berekeningen uit",
            "Werkt met catalogi en CRM",
            "Sluit deals zelfstandig",
            "Genereert documenten en facturen",
          ],
        },
      },
    },
    capabilities: {
      label: "Systeemmogelijkheden",
      title: "Wat de AI-manager kan",
      subtitle: "Volledige functionaliteit voor verkoopautomatisering — van het eerste gesprek tot het sluiten van de deal",
      items: [
        {
          icon: "brain",
          title: "Voert volledige gesprekken",
          desc: "Beantwoordt inkomende oproepen, stelt verhelderende vragen, begrijpt klantbehoeften en selecteert passende producten of diensten. Geen script — een dynamische dialoog.",
        },
        {
          icon: "calculator",
          title: "Maakt realtime berekeningen",
          desc: "Berekent orderkosten, vierkante en strekkende meters, houdt rekening met dikte, lengte, hoeveelheid, coëfficiënten en formules. Complexe wiskunde — in seconden.",
        },
        {
          icon: "package",
          title: "Werkt met productcatalogi",
          desc: "Zoekt producten in de database, controleert beschikbaarheid, houdt rekening met parameters en variaties: dikte, kleur, coating. Werkt met catalogi, databases en prijslijsten.",
        },
        {
          icon: "truck",
          title: "Berekent levering",
          desc: "Bepaalt ordergewicht, materiaallengte, selecteert geschikt transport, berekent leveringskosten en biedt de klant de optimale optie.",
        },
        {
          icon: "fileText",
          title: "Genereert documenten",
          desc: "Maakt automatisch offertes, facturen, bereidt documenten voor en stuurt ze naar de e-mail van de klant of naar CRM. Volledige documentautomatisering.",
        },
        {
          icon: "phoneForwarded",
          title: "Schakelt gesprekken door",
          desc: "Als menselijke betrokkenheid nodig is — schakelt het gesprek door naar een manager met volledige klantinformatie en gesprekscontext.",
        },
        {
          icon: "userCheck",
          title: "Onthoudt klanten",
          desc: "Het systeem onthoudt telefoonnummers, gespreksgeschiedenis, eerdere bestellingen en klantinteresses. Gepersonaliseerde dialoog bij elk herhaald contact.",
        },
        {
          icon: "shoppingCart",
          title: "Sluit deals volledig",
          desc: "In bepaalde scenario's kan AI een deal van gesprek tot verkoop uitvoeren: taak verduidelijken, berekeningen maken, voorstel vormen, documenten versturen en bestelling vastleggen.",
        },
      ],
    },
    fullCycle: {
      label: "Volledige verkoopcyclus",
      title: "Van gesprek tot betaling — automatisch",
      subtitle: "De AI-manager kan een deal volledig sluiten zonder menselijke betrokkenheid",
      steps: [
        { num: "01", title: "Klant belt", desc: "AI antwoordt direct, stelt zich voor en begint de dialoog" },
        { num: "02", title: "Verduidelijkt de taak", desc: "Stelt vragen, begrijpt de behoefte, verduidelijkt parameters" },
        { num: "03", title: "Maakt berekeningen", desc: "Berekent kosten, selecteert producten, schat levering" },
        { num: "04", title: "Vormt voorstel", desc: "Maakt een offerte met berekeningen" },
        { num: "05", title: "Verstuurt documenten", desc: "Stuurt offerte en factuur via e-mail of messenger" },
        { num: "06", title: "Legt bestelling vast", desc: "Maakt een deal aan in CRM, draagt gegevens over naar boekhoudsysteem" },
      ],
    },
    architecture: {
      label: "Systeemarchitectuur",
      title: "Hoe het van binnen werkt",
      subtitle: "Meerlaagse architectuur voor betrouwbare en schaalbare werking",
      layers: [
        { icon: "headphones", title: "Telefonielaag", desc: "Integratie met elke PBX, SIP-providers, virtuele nummers" },
        { icon: "bot", title: "Herkenningslaag", desc: "Speech-to-Text met 98%+ nauwkeurigheid, begrip van context en intonatie" },
        { icon: "brain", title: "AI-logicalaag", desc: "LLM + bedrijfsregels + kennisbank van het bedrijf" },
        { icon: "database", title: "Datalaag", desc: "Integratie met CRM, ERP, catalogi, magazijn, boekhouding" },
        { icon: "messageSquare", title: "Syntheselaag", desc: "Natuurlijke stem, correcte intonaties, pauzes en emoties" },
      ],
    },
    integrations: {
      label: "Integraties",
      title: "Werkt met uw systemen",
      subtitle: "De AI-manager integreert met elke infrastructuur",
      categories: [
        { title: "CRM-systemen", items: ["Bitrix24", "Salesforce", "HubSpot", "Pipedrive", "Microsoft Dynamics"] },
        { title: "ERP-systemen", items: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"] },
        { title: "Telefonie", items: ["Asterisk", "Twilio", "Vonage", "RingCentral", "Genesys"] },
        { title: "Magazijn & Logistiek", items: ["ShipStation", "PostNL", "DHL", "UPS", "FedEx"] },
      ],
    },
    industries: {
      label: "Voor wie het is",
      title: "Industrieën en scenario's",
      subtitle: "De AI-manager is vooral effectief waar veel berekeningen en consultaties zijn",
      items: [
        { icon: "hardHat", title: "Bouwmaterialen", desc: "Materiaalberekening, selectie op parameters, levering op locatie" },
        { icon: "factory", title: "Productiebedrijven", desc: "Orderberekening, werken met productcatalogus" },
        { icon: "warehouse", title: "Distributeurs", desc: "Werken met prijslijsten, beschikbaarheidscontrole, reserveringen" },
        { icon: "truck", title: "Logistieke bedrijven", desc: "Leveringsberekening, transportselectie, tracking" },
        { icon: "shoppingBag", title: "E-commerce", desc: "Productconsultaties, orderverwerking" },
        { icon: "building2", title: "B2B-verkoop", desc: "Complexe verkoop met individuele berekening" },
      ],
    },
    implementation: {
      label: "Implementatie",
      title: "Hoe de lancering werkt",
      subtitle: "We verkopen geen sjabloonproduct. Elke AI-manager wordt voor een specifiek bedrijf gemaakt.",
      disclaimer: "Tijdlijnen hangen af van projectcomplexiteit: van enkele weken tot 4-6 maanden voor enterprise-oplossingen",
      phases: [
        {
          phase: "Fase 1",
          title: "Analyse en ontwerp",
          duration: "1-2 weken",
          tasks: ["Bedrijfsproces-audit", "Verkoopscript-analyse", "Dialoogontwerp", "Integratiedefinitie"],
        },
        {
          phase: "Fase 2",
          title: "Ontwikkeling en integratie",
          duration: "2-8 weken",
          tasks: ["AI-modelconfiguratie", "CRM/ERP-integratie", "Telefonie-aansluiting", "Bedrijfslogica-setup"],
        },
        {
          phase: "Fase 3",
          title: "Training en testen",
          duration: "1-4 weken",
          tasks: ["Training met echte data", "Testgesprekken", "Scenario-aanpassingen", "Antwoordoptimalisatie"],
        },
        {
          phase: "Fase 4",
          title: "Lancering en ondersteuning",
          duration: "Doorlopend",
          tasks: ["Zachte lancering", "Kwaliteitsmonitoring", "Analyse en rapporten", "Continue verbetering"],
        },
      ],
    },
    future: {
      label: "Platformontwikkeling",
      title: "Wat er binnenkort komt",
      subtitle: "We werken actief aan het uitbreiden van mogelijkheden",
      features: [
        { icon: "settings", title: "Persoonlijk dashboard", desc: "Zelfbediening AI-managerbeheer" },
        { icon: "barChart3", title: "Verkoopanalyse", desc: "Gedetailleerde rapporten en statistieken" },
        { icon: "messageSquare", title: "Gespreksanalyse", desc: "Transcriptie en kwaliteitsbeoordeling" },
        { icon: "target", title: "Scenario-optimalisatie", desc: "Automatische conversieverbetering" },
      ],
    },
    demo: {
      label: "Demonstratie",
      title: "Luister hoe het werkt",
      subtitle: "Echte voorbeelden van AI-managergesprekken in verschillende scenario's",
      samples: [
        { title: "Materiaalkostenberekening", duration: "2:34", industry: "Bouwmaterialen" },
        { title: "Catalogusconsultatie", duration: "1:48", industry: "Groothandel" },
        { title: "Bestelling met levering", duration: "3:12", industry: "E-commerce" },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Veelgestelde vragen",
      items: [
        {
          q: "Hoe verschilt de AI-manager van een gewone stembot?",
          a: "Gewone bots lezen scripts en kunnen niet denken. Onze AI-manager voert dynamische dialogen, maakt berekeningen, werkt met databases en kan deals volledig sluiten. Het is geen IVR-menu, maar een volwaardige digitale medewerker.",
        },
        {
          q: "Hoe lang duurt de implementatie?",
          a: "Van enkele weken voor standaardscenario's tot 4-6 maanden voor complexe enterprise-projecten. De tijdlijn hangt af van het aantal integraties, complexiteit van bedrijfslogica en volume aan trainingsdata.",
        },
        {
          q: "Kan het integreren met ons CRM?",
          a: "Ja, we integreren met alle systemen: Bitrix24, Salesforce, HubSpot, SAP en andere. We werken ook met ERP, magazijnsystemen, boekhouding en telefonie.",
        },
        {
          q: "Hoe gaat AI om met complexe berekeningen?",
          a: "AI voert wiskundige operaties direct uit: oppervlakte-, volume-, kostenberekeningen met coëfficiënten, kortingen, levering. Formules worden aangepast aan uw specifieke situatie.",
        },
        {
          q: "Wat als een klant met een persoon wil praten?",
          a: "AI kan het gesprek op elk moment doorschakelen naar een manager, waarbij alle klantinformatie en gesprekscontext worden doorgegeven. De manager ontvangt een reeds voorbereide klant.",
        },
        {
          q: "Is dit een sjabloonproduct?",
          a: "Nee. Elke AI-manager wordt individueel gemaakt voor een specifiek bedrijf: getraind met uw data, geïntegreerd met uw systemen, geconfigureerd voor uw processen.",
        },
      ],
    },
    cta: {
      label: "Aan de slag",
      title: "Klaar om verkoop te automatiseren?",
      subtitle: "We laten u een demo zien, analyseren uw case en stellen een oplossingsarchitectuur voor",
      btn1: "Demo aanvragen",
      btn2: "Neem contact op",
      features: ["Gratis consultatie", "Case-analyse", "Implementatieschatting"],
    },
  },
  fr: {
    breadcrumb: { home: "Accueil", solutions: "Solutions", current: "Gestionnaire IA des Ventes" },
    hero: {
      badge: "Employé numérique de nouvelle génération",
      title1: "Pas qu'un simple bot vocal.",
      title2: "Un vendeur IA à part entière.",
      subtitle: "Ce n'est pas un chatbot élégant. C'est un système qui mène des dialogues, calcule les coûts, sélectionne les produits, génère des documents et conclut des ventes — de l'appel au paiement.",
      cta1: "Demander une démo",
      cta2: "Écouter des exemples",
      stats: {
        s1: { value: "100%", label: "appels traités" },
        s2: { value: "24/7", label: "disponibilité" },
        s3: { value: "∞", label: "lignes simultanées" },
        s4: { value: "< 1s", label: "temps de réponse" },
      },
    },
    notBot: {
      label: "Pourquoi nous sommes différents",
      title: "Ce n'est pas un chatbot ni un menu IVR",
      subtitle: "Nous avons créé un système qui comprend vraiment les processus métier et fait le travail d'un manager",
      comparison: {
        left: {
          title: "Bots vocaux ordinaires",
          items: [
            "Lisent des scripts de modèles",
            "Ne comprennent pas le contexte",
            "Ne peuvent pas calculer",
            "Ne travaillent pas avec les bases de données",
            "Frustrent les clients",
            "Transfèrent juste à l'opérateur",
          ],
        },
        right: {
          title: "Gestionnaire IA M2 Solutions",
          items: [
            "Mène un dialogue dynamique",
            "Comprend les besoins du client",
            "Effectue des calculs complexes",
            "Travaille avec les catalogues et CRM",
            "Conclut des ventes de manière autonome",
            "Génère documents et factures",
          ],
        },
      },
    },
    capabilities: {
      label: "Capacités du système",
      title: "Ce que le gestionnaire IA peut faire",
      subtitle: "Fonctionnalité complète pour l'automatisation des ventes — du premier appel à la conclusion de l'affaire",
      items: [
        {
          icon: "brain",
          title: "Mène des conversations complètes",
          desc: "Répond aux appels entrants, pose des questions de clarification, comprend les besoins du client et sélectionne les produits ou services appropriés. Pas un script — un dialogue dynamique.",
        },
        {
          icon: "calculator",
          title: "Fait des calculs en temps réel",
          desc: "Calcule le coût de commande, mètres carrés et linéaires, considère l'épaisseur, la longueur, la quantité, les coefficients et formules. Mathématiques complexes — en secondes.",
        },
        {
          icon: "package",
          title: "Travaille avec les catalogues de produits",
          desc: "Recherche des produits dans la base de données, vérifie la disponibilité, considère les paramètres et variations : épaisseur, couleur, revêtement. Travaille avec catalogues, bases de données et tarifs.",
        },
        {
          icon: "truck",
          title: "Calcule la livraison",
          desc: "Détermine le poids de commande, la longueur des matériaux, sélectionne le transport approprié, calcule le coût de livraison et propose l'option optimale au client.",
        },
        {
          icon: "fileText",
          title: "Génère des documents",
          desc: "Crée automatiquement des propositions commerciales, factures, prépare les documents et les envoie à l'email du client ou au CRM. Automatisation complète des documents.",
        },
        {
          icon: "phoneForwarded",
          title: "Redirige les appels",
          desc: "Si une situation nécessite une intervention humaine — transfère l'appel à un manager avec toutes les informations client et le contexte de conversation.",
        },
        {
          icon: "userCheck",
          title: "Se souvient des clients",
          desc: "Le système se souvient des numéros de téléphone, de l'historique des conversations, des commandes précédentes et des intérêts du client. Dialogue personnalisé à chaque contact répété.",
        },
        {
          icon: "shoppingCart",
          title: "Conclut entièrement les ventes",
          desc: "Dans certains scénarios, l'IA peut conduire une affaire de l'appel à la vente : clarifier la tâche, faire des calculs, former une proposition, envoyer des documents et enregistrer la commande.",
        },
      ],
    },
    fullCycle: {
      label: "Cycle de vente complet",
      title: "De l'appel au paiement — automatiquement",
      subtitle: "Le gestionnaire IA peut conclure complètement une affaire sans intervention humaine",
      steps: [
        { num: "01", title: "Client appelle", desc: "L'IA répond instantanément, se présente et commence le dialogue" },
        { num: "02", title: "Clarifie la tâche", desc: "Pose des questions, comprend le besoin, clarifie les paramètres" },
        { num: "03", title: "Fait des calculs", desc: "Calcule le coût, sélectionne les produits, estime la livraison" },
        { num: "04", title: "Forme la proposition", desc: "Crée une proposition commerciale avec calculs" },
        { num: "05", title: "Envoie les documents", desc: "Envoie proposition et facture par email ou messagerie" },
        { num: "06", title: "Enregistre la commande", desc: "Crée une affaire dans le CRM, transfère les données au système comptable" },
      ],
    },
    architecture: {
      label: "Architecture système",
      title: "Comment ça fonctionne à l'intérieur",
      subtitle: "Architecture multicouche pour un fonctionnement fiable et évolutif",
      layers: [
        { icon: "headphones", title: "Couche téléphonie", desc: "Intégration avec tout PBX, fournisseurs SIP, numéros virtuels" },
        { icon: "bot", title: "Couche reconnaissance", desc: "Speech-to-Text avec 98%+ de précision, compréhension du contexte et de l'intonation" },
        { icon: "brain", title: "Couche logique IA", desc: "LLM + règles métier + base de connaissances de l'entreprise" },
        { icon: "database", title: "Couche données", desc: "Intégration avec CRM, ERP, catalogues, entrepôt, comptabilité" },
        { icon: "messageSquare", title: "Couche synthèse", desc: "Voix naturelle, intonations correctes, pauses et émotions" },
      ],
    },
    integrations: {
      label: "Intégrations",
      title: "Fonctionne avec vos systèmes",
      subtitle: "Le gestionnaire IA s'intègre avec toute infrastructure",
      categories: [
        { title: "Systèmes CRM", items: ["Bitrix24", "Salesforce", "HubSpot", "Pipedrive", "Microsoft Dynamics"] },
        { title: "Systèmes ERP", items: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"] },
        { title: "Téléphonie", items: ["Asterisk", "Twilio", "Vonage", "RingCentral", "Genesys"] },
        { title: "Entrepôt & Logistique", items: ["ShipStation", "Chronopost", "DHL", "UPS", "FedEx"] },
      ],
    },
    industries: {
      label: "Pour qui c'est",
      title: "Industries et scénarios",
      subtitle: "Le gestionnaire IA est particulièrement efficace là où il y a beaucoup de calculs et de consultations",
      items: [
        { icon: "hardHat", title: "Matériaux de construction", desc: "Calcul de matériaux, sélection par paramètres, livraison sur site" },
        { icon: "factory", title: "Entreprises manufacturières", desc: "Calcul de commandes, travail avec catalogue de produits" },
        { icon: "warehouse", title: "Distributeurs", desc: "Travail avec tarifs, vérification de disponibilité, réservations" },
        { icon: "truck", title: "Entreprises logistiques", desc: "Calcul de livraison, sélection de transport, suivi" },
        { icon: "shoppingBag", title: "E-commerce", desc: "Consultations produits, traitement des commandes" },
        { icon: "building2", title: "Ventes B2B", desc: "Ventes complexes avec calcul individuel" },
      ],
    },
    implementation: {
      label: "Implémentation",
      title: "Comment fonctionne le lancement",
      subtitle: "Nous ne vendons pas un produit modèle. Chaque gestionnaire IA est créé pour une entreprise spécifique.",
      disclaimer: "Les délais dépendent de la complexité du projet : de quelques semaines à 4-6 mois pour les solutions enterprise",
      phases: [
        {
          phase: "Phase 1",
          title: "Analyse et conception",
          duration: "1-2 semaines",
          tasks: ["Audit des processus métier", "Analyse des scripts de vente", "Conception des dialogues", "Définition des intégrations"],
        },
        {
          phase: "Phase 2",
          title: "Développement et intégration",
          duration: "2-8 semaines",
          tasks: ["Configuration du modèle IA", "Intégration CRM/ERP", "Connexion téléphonie", "Configuration logique métier"],
        },
        {
          phase: "Phase 3",
          title: "Formation et tests",
          duration: "1-4 semaines",
          tasks: ["Formation sur données réelles", "Appels de test", "Ajustements de scénarios", "Optimisation des réponses"],
        },
        {
          phase: "Phase 4",
          title: "Lancement et support",
          duration: "Continu",
          tasks: ["Lancement progressif", "Surveillance qualité", "Analytique et rapports", "Amélioration continue"],
        },
      ],
    },
    future: {
      label: "Développement de la plateforme",
      title: "Ce qui arrive bientôt",
      subtitle: "Nous travaillons activement à l'expansion des capacités",
      features: [
        { icon: "settings", title: "Tableau de bord personnel", desc: "Contrôle en libre-service du gestionnaire IA" },
        { icon: "barChart3", title: "Analytique des ventes", desc: "Rapports détaillés et statistiques" },
        { icon: "messageSquare", title: "Analyse des conversations", desc: "Transcription et évaluation de la qualité" },
        { icon: "target", title: "Optimisation des scénarios", desc: "Amélioration automatique de la conversion" },
      ],
    },
    demo: {
      label: "Démonstration",
      title: "Écoutez comment ça fonctionne",
      subtitle: "Exemples réels d'appels du gestionnaire IA dans différents scénarios",
      samples: [
        { title: "Calcul du coût des matériaux", duration: "2:34", industry: "Construction" },
        { title: "Consultation catalogue", duration: "1:48", industry: "Grossiste" },
        { title: "Commande avec livraison", duration: "3:12", industry: "E-commerce" },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Questions fréquentes",
      items: [
        {
          q: "Comment le gestionnaire IA diffère-t-il d'un bot vocal ordinaire ?",
          a: "Les bots ordinaires lisent des scripts et ne peuvent pas penser. Notre gestionnaire IA mène des dialogues dynamiques, fait des calculs, travaille avec des bases de données et peut conclure des affaires complètement. Ce n'est pas un menu IVR, mais un employé numérique à part entière.",
        },
        {
          q: "Combien de temps prend l'implémentation ?",
          a: "De quelques semaines pour les scénarios standard à 4-6 mois pour les projets enterprise complexes. Le délai dépend du nombre d'intégrations, de la complexité de la logique métier et du volume de données d'entraînement.",
        },
        {
          q: "Peut-il s'intégrer avec notre CRM ?",
          a: "Oui, nous nous intégrons avec tous les systèmes : Bitrix24, Salesforce, HubSpot, SAP et autres. Nous travaillons aussi avec ERP, systèmes d'entrepôt, comptabilité et téléphonie.",
        },
        {
          q: "Comment l'IA gère-t-elle les calculs complexes ?",
          a: "L'IA effectue les opérations mathématiques instantanément : calculs de surface, volume, coût avec coefficients, remises, livraison. Les formules sont personnalisées selon votre spécificité.",
        },
        {
          q: "Que se passe-t-il si un client veut parler à une personne ?",
          a: "L'IA peut transférer l'appel à un manager à tout moment, en transmettant toutes les informations client et le contexte de conversation. Le manager reçoit un client déjà préparé.",
        },
        {
          q: "Est-ce un produit modèle ?",
          a: "Non. Chaque gestionnaire IA est créé individuellement pour une entreprise spécifique : entraîné sur vos données, intégré à vos systèmes, configuré pour vos processus.",
        },
      ],
    },
    cta: {
      label: "Commencer",
      title: "Prêt à automatiser les ventes ?",
      subtitle: "Nous vous montrerons une démo, analyserons votre cas et proposerons une architecture de solution",
      btn1: "Demander une démo",
      btn2: "Contactez-nous",
      features: ["Consultation gratuite", "Analyse de cas", "Estimation d'implémentation"],
    },
  },
}

/* ================================================================== */
/*  Icon mapper                                                        */
/* ================================================================== */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  calculator: Calculator,
  package: Package,
  truck: Truck,
  fileText: FileText,
  phoneForwarded: PhoneForwarded,
  userCheck: UserCheck,
  shoppingCart: ShoppingCart,
  settings: Settings,
  database: Database,
  barChart3: BarChart3,
  building2: Building2,
  factory: Factory,
  warehouse: Warehouse,
  hardHat: HardHat,
  shoppingBag: ShoppingBag,
  headphones: Headphones,
  bot: Bot,
  messageSquare: MessageSquare,
  target: Target,
}

/* ================================================================== */
/*  Main component                                                     */
/* ================================================================== */
interface Props {
  locale: Locale
}

export function VoiceSalesManagerClientPage({ locale }: Props) {
  const t = translations[locale] || translations.ru
  const { openModal } = useCTA()

  return (
    <main className="min-h-screen bg-background">
      {/* ==================== Breadcrumb ==================== */}
      <div className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href={`/${locale}`} className="hover:text-foreground transition-colors">{t.breadcrumb.home}</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/${locale}/solutions`} className="hover:text-foreground transition-colors">{t.breadcrumb.solutions}</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{t.breadcrumb.current}</span>
          </nav>
        </div>
      </div>

      {/* ==================== Hero ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 pt-16 pb-24 sm:pt-24 sm:pb-32">
        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-xs font-medium border-primary/30 bg-primary/5 text-primary">
              <Zap className="mr-1.5 h-3 w-3" />
              {t.hero.badge}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-foreground">{t.hero.title1}</span>
              <br />
              <span className="text-primary">{t.hero.title2}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" onClick={openModal} className="w-full sm:w-auto h-12 px-8 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                {t.hero.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base font-semibold rounded-xl hover:bg-accent/50">
                <Play className="mr-2 h-5 w-5" />
                {t.hero.cta2}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.values(t.hero.stats).map((stat, i) => (
                <div key={i} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== Not a Bot Section ==================== */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <Label>{t.notBot.label}</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.notBot.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.notBot.subtitle}</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - ordinary bots */}
            <Reveal delay={100}>
              <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold text-destructive">{t.notBot.comparison.left.title}</h3>
                </div>
                <ul className="space-y-3">
                  {t.notBot.comparison.left.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-destructive/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right - M2 Solutions */}
            <Reveal delay={200}>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 sm:p-8 h-full ring-1 ring-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{t.notBot.comparison.right.title}</h3>
                </div>
                <ul className="space-y-3">
                  {t.notBot.comparison.right.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== Capabilities ==================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <Label>{t.capabilities.label}</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.capabilities.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.capabilities.subtitle}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.capabilities.items.map((item, i) => {
              const IconComponent = iconMap[item.icon] || Brain
              return (
                <Reveal key={i} delay={i * 50}>
                  <div className="group bg-card border border-border/50 rounded-2xl p-6 h-full hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== Full Cycle ==================== */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <Label>{t.fullCycle.label}</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.fullCycle.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.fullCycle.subtitle}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.fullCycle.steps.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative bg-card border border-border/50 rounded-2xl p-6 h-full">
                  <div className="text-5xl font-bold text-primary/10 absolute top-4 right-4">{step.num}</div>
                  <div className="relative">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Architecture ==================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <Label>{t.architecture.label}</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.architecture.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.architecture.subtitle}</p>
          </Reveal>

          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {t.architecture.layers.map((layer, i) => {
              const IconComponent = iconMap[layer.icon] || Layers
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex items-center gap-4 bg-card border border-border/50 rounded-2xl p-4 sm:p-6">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{layer.title}</h3>
                      <p className="text-sm text-muted-foreground">{layer.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== Industries ==================== */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <Label>{t.industries.label}</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.industries.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.industries.subtitle}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.industries.items.map((item, i) => {
              const IconComponent = iconMap[item.icon] || Building2
              return (
                <Reveal key={i} delay={i * 50}>
                  <div className="bg-card border border-border/50 rounded-2xl p-6 h-full hover:border-primary/30 transition-colors">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== Implementation ==================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <Label>{t.implementation.label}</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.implementation.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-4">{t.implementation.subtitle}</p>
            <p className="text-sm text-muted-foreground/70 max-w-xl mx-auto italic">{t.implementation.disclaimer}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.implementation.phases.map((phase, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-card border border-border/50 rounded-2xl p-6 h-full">
                  <Badge variant="outline" className="mb-4 text-xs">{phase.phase}</Badge>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{phase.duration}</p>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Integrations ==================== */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <Label>{t.integrations.label}</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.integrations.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.integrations.subtitle}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.integrations.categories.map((category, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-card border border-border/50 rounded-2xl p-6 h-full">
                  <h3 className="font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, j) => (
                      <Badge key={j} variant="secondary" className="text-xs">{item}</Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Demo Audio ==================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <Label>{t.demo.label}</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.demo.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.demo.subtitle}</p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {t.demo.samples.map((sample, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-card border border-border/50 rounded-2xl p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">{sample.industry}</Badge>
                  <h3 className="font-semibold mb-1">{sample.title}</h3>
                  <p className="text-sm text-muted-foreground">{sample.duration}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Future ==================== */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <Label>{t.future.label}</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.future.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.future.subtitle}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.future.features.map((feature, i) => {
              const IconComponent = iconMap[feature.icon] || Settings
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="bg-card/50 border border-dashed border-border/50 rounded-2xl p-6 text-center">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <Label>{t.faq.label}</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.faq.title}</h2>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.items.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border/50 rounded-2xl px-6 overflow-hidden">
                  <AccordionTrigger className="text-left text-base font-medium py-5 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Label>{t.cta.label}</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.cta.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.cta.subtitle}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" onClick={openModal} className="w-full sm:w-auto h-12 px-8 text-base font-semibold rounded-xl shadow-lg shadow-primary/20">
                {t.cta.btn1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base font-semibold rounded-xl" asChild>
                <Link href={`/${locale}/contacts`}>
                  {t.cta.btn2}
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              {t.cta.features.map((feature, i) => (
                <span key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {feature}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
