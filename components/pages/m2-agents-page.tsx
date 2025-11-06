"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Bot,
  Phone,
  MessageSquare,
  Mail,
  ShoppingCart,
  HeadphonesIcon,
  FileText,
  Users,
  Wrench,
  Shield,
  TrendingUp,
  Globe,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Building2,
  Hotel,
  Home,
  Briefcase,
  GraduationCap,
  Scale,
  Star,
  ChevronDown,
  Settings,
  Maximize2,
  Zap,
} from "lucide-react"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"
import { BenefitsSection } from "@/components/benefits-section"
import { CTASection } from "@/components/cta-section"
import { DemoSection } from "@/components/demo-section"

interface M2AgentsPageProps {
  locale: Locale
}

export function M2AgentsPage({ locale }: M2AgentsPageProps) {
  const { openModal } = useCTA()
  const [activeRole, setActiveRole] = useState("sales")
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    industry: "",
    channels: [] as string[],
    comment: "",
    consent: false,
  })

  const roles = [
    {
      id: "sales",
      name: "Продажи",
      icon: ShoppingCart,
      color: "from-blue-600 to-cyan-600",
      useCases: [
        {
          title: "Голосовой менеджер продаж",
          description:
            "Принимает звонки 24/7, квалифицирует лиды, отвечает на возражения, рассчитывает цену и доставку, создает сделки в CRM",
          channels: ["Телефон", "WhatsApp звонки"],
          metrics: ["+17% конверсия", "24/7 доступность", "-40% нагрузка на отдел"],
        },
        {
          title: "Чат-бот для продаж",
          description:
            "Отвечает на вопросы в WhatsApp, Telegram, VK, на сайте. Подбирает товары, консультирует, отправляет ссылки на оплату",
          channels: ["WhatsApp", "Telegram", "VK", "Веб-чат"],
          metrics: ["+25% конверсия в чате", "Мгновенные ответы", "Работа с 100+ чатами"],
        },
        {
          title: "Email-ассистент продаж",
          description:
            "Парсит входящие письма, создает черновики ответов с КП, ставит фоллоу-апы, обновляет CRM автоматически",
          channels: ["Email", "Gmail", "Outlook"],
          metrics: ["-50% время на email", "Нет пропущенных писем", "Автоматический CRM"],
        },
      ],
    },
    {
      id: "support",
      name: "Поддержка",
      icon: HeadphonesIcon,
      color: "from-purple-600 to-pink-600",
      useCases: [
        {
          title: "Голосовая поддержка 24/7",
          description:
            "Отвечает на FAQ по телефону, проверяет статус заказов, обрабатывает возвраты, эскалирует сложные запросы",
          channels: ["Телефон", "Обратный звонок"],
          metrics: ["-38% время ответа", "24/7 без выходных", "+25% удовлетворенность"],
        },
        {
          title: "Омниканальный чат-бот",
          description:
            "Единый агент для WhatsApp, Telegram, VK, веб-чата. Помнит историю клиента во всех каналах, передает контекст оператору",
          channels: ["WhatsApp", "Telegram", "VK", "Веб-чат"],
          metrics: ["70% автоматизация", "Единая история", "Бесшовная эскалация"],
        },
        {
          title: "Email-поддержка",
          description: "Автоматически отвечает на типовые запросы, создает тикеты, отслеживает SLA, отправляет статусы",
          channels: ["Email", "Тикет-система"],
          metrics: ["-60% время обработки", "100% фиксация", "Соблюдение SLA"],
        },
      ],
    },
    {
      id: "operations",
      name: "Операции",
      icon: Wrench,
      color: "from-green-600 to-emerald-600",
      useCases: [
        {
          title: "RPA-оператор",
          description:
            "Выполняет рутинные действия в ERP/CRM: создает заказы, счета, акты, отгрузки. Работает по расписанию или по триггерам",
          channels: ["API", "Интеграции", "Webhook"],
          metrics: ["-42% ручных действий", "0 ошибок", "Мгновенная обработка"],
        },
        {
          title: "Голосовой диспетчер",
          description:
            "Принимает заявки на доставку/монтаж по телефону, назначает слоты, отправляет подтверждения в SMS/email",
          channels: ["Телефон", "SMS", "Email"],
          metrics: ["-30% время назначения", "100% соблюдение SLA", "Автоматические уведомления"],
        },
        {
          title: "Чат-бот для логистики",
          description:
            "Отслеживает статус заказов, отправляет уведомления о доставке, принимает изменения адреса через чат",
          channels: ["WhatsApp", "Telegram", "SMS"],
          metrics: ["-50% звонков в поддержку", "Проактивные уведомления", "Самообслуживание"],
        },
      ],
    },
    {
      id: "finance",
      name: "Финансы",
      icon: FileText,
      color: "from-orange-600 to-red-600",
      useCases: [
        {
          title: "Автоматизация документов",
          description:
            "Генерирует и рассылает счета, акты, УПД по email, сверяет оплаты, отправляет напоминания через чат/email",
          channels: ["Email", "WhatsApp", "Telegram"],
          metrics: ["-70% время на документы", "100% точность", "Автонапоминания"],
        },
        {
          title: "Голосовой финансовый ассистент",
          description:
            "Отвечает на вопросы о задолженности по телефону, принимает обещания оплаты, отправляет реквизиты",
          channels: ["Телефон", "SMS", "Email"],
          metrics: ["+35% собираемость", "-60% нагрузка на бухгалтерию", "Вежливые напоминания"],
        },
        {
          title: "Извлечение данных из документов",
          description: "Парсит договоры, накладные, спецификации из email/чата и структурирует данные для учета",
          channels: ["Email", "Чат", "API"],
          metrics: ["-80% время обработки", "99% точность", "Любые форматы"],
        },
      ],
    },
    {
      id: "hr",
      name: "HR",
      icon: Users,
      color: "from-indigo-600 to-purple-600",
      useCases: [
        {
          title: "Голосовой скрининг кандидатов",
          description:
            "Звонит кандидатам, проводит первичное интервью, задает квалификационные вопросы, назначает встречи с HR",
          channels: ["Телефон", "Обратный звонок"],
          metrics: ["-60% время скрининга", "+30% качество отбора", "Автоматическое интервью"],
        },
        {
          title: "Чат-бот для сотрудников",
          description:
            "Отвечает на вопросы новичков в корпоративном чате, выдает доступы по правилам, контролирует прохождение обучения",
          channels: ["Slack", "Telegram", "MS Teams"],
          metrics: ["-50% нагрузка на HR", "100% выполнение чек-листов", "Быстрая адаптация"],
        },
        {
          title: "Email-ассистент HR",
          description:
            "Обрабатывает заявки на отпуск/больничный, отправляет напоминания о дедлайнах, собирает обратную связь",
          channels: ["Email", "Формы"],
          metrics: ["-40% время обработки", "Автоматические напоминания", "Структурированные данные"],
        },
      ],
    },
    {
      id: "it",
      name: "IT/DevOps",
      icon: Wrench,
      color: "from-cyan-600 to-blue-600",
      useCases: [
        {
          title: "Голосовой IT-хелпдеск",
          description:
            "Помогает сбросить пароль, настроить VPN, получить доступы по телефону. Заводит тикеты для сложных запросов",
          channels: ["Телефон", "Внутренний номер"],
          metrics: ["-45% тикетов в IT", "Мгновенное решение", "24/7 доступность"],
        },
        {
          title: "Чат-бот для IT-поддержки",
          description:
            "Отвечает на вопросы в корпоративном чате, выдает инструкции, собирает контекст проблемы, эскалирует критичные",
          channels: ["Slack", "Telegram", "MS Teams"],
          metrics: ["-35% время реакции", "100% фиксация", "Автоэскалация"],
        },
        {
          title: "Email-бот для инцидентов",
          description: "Парсит письма об ошибках, заводит тикеты в Jira/ServiceNow, сообщает статус, отправляет отчеты",
          channels: ["Email", "Jira", "ServiceNow"],
          metrics: ["-50% ручная работа", "Автоматическая приоритизация", "SLA-контроль"],
        },
      ],
    },
  ]

  const industries = [
    {
      name: "Строительство",
      icon: Building2,
      description: "Расчет смет, подбор материалов с учетом скидок и логистики, формирование КП",
      metrics: ["-40% время на КП", "+20% точность расчетов"],
    },
    {
      name: "Недвижимость",
      icon: Home,
      description: "Подбор объектов, ответы на вопросы, бронирование показов, рассылка подборок",
      metrics: ["+25% конверсия", "-50% нагрузка на агентов"],
    },
    {
      name: "Отели/HoReCa",
      icon: Hotel,
      description: "AI-консьерж 24/7 для уборки, room-service, рекомендаций, интеграция с PMS",
      metrics: ["+30% удовлетворенность", "-35% операционные расходы"],
    },
    {
      name: "Госсектор",
      icon: Briefcase,
      description: "Предзаполнение заявлений, навигация по услугам, маршрутизация обращений",
      metrics: ["-60% время обработки", "+40% доступность услуг"],
    },
    {
      name: "Образование",
      icon: GraduationCap,
      description: "Ответы на вопросы студентов, запись на консультации, проверка заданий",
      metrics: ["-50% нагрузка на преподавателей", "24/7 поддержка"],
    },
    {
      name: "Юридические услуги",
      icon: Scale,
      description: "Анализ договоров, юридические консультации, подготовка документов",
      metrics: ["-70% время на рутину", "+35% производительность"],
    },
  ]

  const integrations = [
    { name: "Телефония", icon: Phone, description: "Asterisk, FreePBX, Twilio, Zadarma" },
    { name: "CRM", icon: BarChart3, description: "Bitrix24, amoCRM, Salesforce, HubSpot" },
    { name: "Мессенджеры", icon: MessageSquare, description: "WhatsApp, Telegram, Viber, VK" },
    { name: "Email", icon: Mail, description: "Gmail, Outlook, Яндекс.Почта, Mail.ru" },
    { name: "ERP", icon: Briefcase, description: "1C, SAP, Microsoft Dynamics, Odoo" },
    { name: "Платежи", icon: ShoppingCart, description: "Stripe, PayPal, Яндекс.Касса, Сбербанк" },
  ]

  const testimonials = [
    {
      company: "Строительная компания",
      industry: "Строительство",
      quote:
        "Агент M2 сократил время на подготовку КП с 2 часов до 15 минут. Конверсия выросла на 18%, так как клиенты получают предложения мгновенно.",
      author: "Дмитрий К., директор по продажам",
      metrics: ["-85% время на КП", "+18% конверсия", "ROI за 4 месяца"],
    },
    {
      company: "Сеть отелей",
      industry: "HoReCa",
      quote:
        "AI-консьерж обрабатывает 70% запросов гостей без участия персонала. Удовлетворенность выросла на 32%, а операционные расходы снизились на 40%.",
      author: "Елена М., управляющая",
      metrics: ["70% автоматизация", "+32% удовлетворенность", "-40% расходы"],
    },
    {
      company: "Агентство недвижимости",
      industry: "Недвижимость",
      quote:
        "Голосовой агент квалифицирует лиды и назначает показы. Конверсия в показ выросла на 25%, а агенты тратят время только на реальных клиентов.",
      author: "Андрей П., руководитель отдела продаж",
      metrics: ["+25% конверсия", "-60% время на лиды", "24/7 доступность"],
    },
  ]

  const faqItems = [
    {
      question: "Сколько времени занимает внедрение агента M2?",
      answer:
        "Базовое внедрение занимает 2-4 недели: 1 неделя на настройку и обучение, 1-2 недели на интеграции с вашими системами, 1 неделя на тестирование и запуск. Для сложных проектов с множественными интеграциями срок может составить до 6-8 недель.",
    },
    {
      question: "Какие языки поддерживает агент M2?",
      answer:
        "Агент M2 поддерживает русский, английский, испанский, немецкий, французский, китайский и другие языки. Мультиязычность настраивается индивидуально под ваш проект. Агент автоматически определяет язык клиента и переключается.",
    },
    {
      question: "Как агент M2 интегрируется с нашими системами?",
      answer:
        "Мы предоставляем готовые интеграции с популярными CRM (Bitrix24, amoCRM, Salesforce), ERP (1C, SAP), телефонией (Asterisk, Twilio), мессенджерами (WhatsApp, Telegram) и email. Для кастомных систем разрабатываем API-интеграции под ключ.",
    },
    {
      question: "Какая стоимость агента M2?",
      answer:
        "Стоимость зависит от функционала и количества каналов. Базовый пакет (голос + чат) от 50,000₽/мес. Полный пакет (омниканал + интеграции + аналитика) от 150,000₽/мес. Предоставляем бесплатный расчет после консультации.",
    },
    {
      question: "Как обеспечивается безопасность данных?",
      answer:
        "Все данные шифруются (AES-256), хранятся на защищенных серверах с резервным копированием. Соответствие GDPR, DPA, ISO 27001. Ролевой доступ, аудит всех действий, возможность развертывания on-premise для максимальной безопасности.",
    },
    {
      question: "Что нужно от нас для запуска?",
      answer:
        "Для запуска нужны: доступы к вашим системам (CRM, телефония, email), база знаний (FAQ, прайсы, регламенты), примеры диалогов, описание бизнес-процессов. Мы проведем воркшоп для сбора требований и поможем подготовить все необходимое.",
    },
  ]

  const agentTypes = [
    {
      title: "Голосовые агенты",
      icon: Phone,
      color: "from-blue-600 to-cyan-600",
      description:
        "Принимают и совершают звонки, понимают естественную речь, отвечают на вопросы, квалифицируют лиды, назначают встречи",
      features: [
        "Распознавание речи на 15+ языках",
        "Естественная интонация и эмоции",
        "Обработка возражений и сложных вопросов",
        "Интеграция с телефонией (Asterisk, Twilio, Zadarma)",
      ],
      useCases: ["Продажи", "Поддержка", "Опросы", "Напоминания", "Скрининг кандидатов"],
    },
    {
      title: "Чат-боты",
      icon: MessageSquare,
      color: "from-purple-600 to-pink-600",
      description:
        "Работают в WhatsApp, Telegram, VK, на сайте. Отвечают мгновенно, помнят контекст, отправляют файлы и ссылки",
      features: [
        "Омниканальность (один агент для всех каналов)",
        "Память истории диалогов",
        "Отправка изображений, документов, кнопок",
        "Интеграция с мессенджерами и веб-чатом",
      ],
      useCases: ["Консультации", "Заказы", "Поддержка", "Уведомления", "Опросы"],
    },
    {
      title: "Email-агенты",
      icon: Mail,
      color: "from-green-600 to-emerald-600",
      description: "Парсят входящие письма, создают черновики ответов, отправляют КП и документы, ставят задачи в CRM",
      features: [
        "Анализ темы и содержания письма",
        "Генерация персонализированных ответов",
        "Извлечение данных из вложений",
        "Интеграция с Gmail, Outlook, Яндекс.Почта",
      ],
      useCases: ["Продажи", "Поддержка", "HR", "Финансы", "Закупки"],
    },
    {
      title: "RPA-агенты",
      icon: Zap,
      color: "from-orange-600 to-red-600",
      description:
        "Выполняют рутинные действия в ERP/CRM/других системах: создают документы, обновляют данные, запускают процессы",
      features: [
        "Работа с любыми системами через API или UI",
        "Запуск по расписанию или триггерам",
        "Обработка больших объемов данных",
        "Логирование всех действий",
      ],
      useCases: ["Операции", "Финансы", "Логистика", "Закупки", "Отчетность"],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] M2 Agents form submitted:", formData)
    openModal("consultation")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Агенты M2 для бизнеса",
            description:
              "AI-агенты для автоматизации продаж, поддержки клиентов и бизнес-операций 24/7. Голосовые ассистенты, чат-боты, email-автоматизация с интеграцией CRM/ERP. Настройте сами или с помощью команды.",
            provider: {
              "@type": "Organization",
              name: "M2 Solutions",
              url: "https://m2solutions.ai",
            },
            areaServed: ["RU", "KZ", "ES", "Worldwide"],
            availableChannel: [
              {
                "@type": "ServiceChannel",
                serviceType: "Голосовые агенты",
                availableLanguage: ["ru", "en", "es"],
              },
              {
                "@type": "ServiceChannel",
                serviceType: "Чат-боты",
                availableLanguage: ["ru", "en", "es"],
              },
              {
                "@type": "ServiceChannel",
                serviceType: "Email-автоматизация",
                availableLanguage: ["ru", "en", "es"],
              },
            ],
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "RUB",
                price: "50000",
                unitText: "MONTH",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
              bestRating: "5",
            },
          }),
        }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-4">
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href={`/${locale}`} className="hover:text-foreground transition-colors">
              <span itemProp="name">Главная</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <span>/</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href={`/${locale}/solutions`} className="hover:text-foreground transition-colors">
              <span itemProp="name">Решения</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
          <span>/</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-foreground font-medium">
              Агенты M2
            </span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      {/* Improved mobile padding and text sizes */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-6 sm:pt-8 md:pt-12 pb-12 sm:pb-16 md:pb-24 lg:pb-32">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />

        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <Badge className="w-fit" variant="secondary">
                <Bot className="w-3 h-3 mr-1" />
                AI-агенты для бизнеса
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Агенты M2: голос, чат, email — автоматизируют ваш бизнес 24/7
              </h1>

              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                Не только голосовые ассистенты — наши агенты работают в телефонии, WhatsApp, Telegram, email, на сайте.
                Интегрируются с CRM/ERP, автоматизируют продажи, поддержку и операции. Настройте сами или с помощью
                нашей команды.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button size="lg" onClick={() => openModal("demo")} className="w-full sm:w-auto">
                  Запросить демо
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                  <a href={`/${locale}/platform/pricing-calculator`}>
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Рассчитать эффект
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-8 border-t">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">-30-60%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Нагрузка на команды</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">+10-25%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Конверсия в заявку</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">2-4 нед</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Запуск</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Без выходных</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                onClick={() => setIsImageOpen(true)}
                className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              >
                <Image
                  src="/m2-platform-workflow-screenshot.png"
                  alt="M2 Platform - Визуальный конструктор AI-агентов с блоками для автоматизации продаж и поддержки"
                  width={1920}
                  height={1080}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 md:p-4">
                    <Maximize2 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                </div>
              </div>
              <div className="mt-3 md:mt-4 text-center text-xs md:text-sm text-muted-foreground">
                <Maximize2 className="inline h-3 w-3 md:h-4 md:w-4 mr-1" />
                Нажмите на изображение для увеличения
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Как это работает
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-3 sm:px-4">
              Простая схема работы агента M2: от запроса клиента через каналы связи до результата с интеграцией в ваши
              системы
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {[
              {
                step: "1",
                title: "Каналы",
                description:
                  "Клиент обращается через телефон, WhatsApp, Telegram, email или веб-чат. Агент M2 принимает запрос в любом канале.",
                icon: Phone,
                color: "from-blue-600 to-cyan-600",
              },
              {
                step: "2",
                title: "Агенты M2",
                description:
                  "AI-агент понимает запрос на естественном языке, анализирует контекст диалога и выбирает нужное действие из сценария.",
                icon: Bot,
                color: "from-purple-600 to-pink-600",
              },
              {
                step: "3",
                title: "Инструменты",
                description:
                  "Агент использует интеграции с CRM, базой знаний, прайсами, календарем для выполнения задачи.",
                icon: Wrench,
                color: "from-green-600 to-emerald-600",
              },
              {
                step: "4",
                title: "Результат",
                description:
                  "Клиент получает ответ, создается сделка в CRM, отправляется КП, назначается встреча — все логируется автоматически.",
                icon: CheckCircle2,
                color: "from-orange-600 to-red-600",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader className="text-center p-4 md:p-6">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold text-white`}
                    >
                      {item.step}
                    </div>
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 md:mb-4`}
                    >
                      <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <CardTitle className="text-base md:text-lg mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-xs md:text-sm leading-relaxed">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Визуальный конструктор workflow</h3>
            <div
              onClick={() => setIsImageOpen(true)}
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group max-w-5xl mx-auto"
            >
              <Image
                src="/m2-platform-workflow-screenshot.png"
                alt="M2 Platform - Конструктор workflow для настройки AI-агентов"
                width={1920}
                height={1080}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 md:p-4">
                  <Maximize2 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-3 md:mt-4 text-xs md:text-sm">
              <Maximize2 className="inline h-3 w-3 md:h-4 md:w-4 mr-1" />
              Нажмите на изображение для увеличения
            </p>
          </div>

          <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-4 md:p-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <CardTitle className="text-xl md:text-2xl mb-3">Настройте сами</CardTitle>
                <CardDescription className="text-sm md:text-base leading-relaxed space-y-3">
                  <p>
                    Если у вас простой бизнес-процесс, вы можете создать и настроить агента самостоятельно через удобный
                    веб-интерфейс:
                  </p>
                  <ul className="space-y-2 text-xs md:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Загрузите прайс-листы, скрипты продаж, базу знаний</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Настройте сценарии: "Если клиент спрашивает X, то делай Y"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Обучите агента на примерах диалогов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Подключите каналы и запустите в работу</span>
                    </li>
                  </ul>
                  <p className="pt-2 text-xs md:text-sm">
                    Агент помнит всю историю общения с клиентом, даже если он звонит повторно или пишет на email.
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-secondary/20 hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-4 md:p-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <CardTitle className="text-xl md:text-2xl mb-3">Помощь команды</CardTitle>
                <CardDescription className="text-sm md:text-base leading-relaxed space-y-3">
                  <p>
                    Если у вас сложный многоступенчатый бизнес-процесс, наши инженеры помогут вам разобраться и
                    настроить все под ключ:
                  </p>
                  <ul className="space-y-2 text-xs md:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Проведем воркшоп для сбора требований</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Разработаем сложные сценарии с ветвлениями</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Настроим интеграции с вашими системами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Обучим вашу команду работе с платформой</span>
                    </li>
                  </ul>
                  <p className="pt-2 text-xs md:text-sm">
                    Полное сопровождение от идеи до запуска и дальнейшая техническая поддержка 24/7.
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points → Solution */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Решаем реальные проблемы бизнеса</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Агенты M2 автоматизируют рутину и освобождают команду для важных задач
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                pain: "Очереди в поддержке",
                solution: "AI-агент обрабатывает 70% запросов мгновенно",
                icon: HeadphonesIcon,
                color: "from-blue-600 to-cyan-600",
              },
              {
                pain: "Потеря лидов ночью",
                solution: "Голосовой агент квалифицирует лиды 24/7",
                icon: Phone,
                color: "from-purple-600 to-pink-600",
              },
              {
                pain: "Ручные операции в ERP",
                solution: "RPA-агент создает заказы и документы автоматически",
                icon: Wrench,
                color: "from-green-600 to-emerald-600",
              },
              {
                pain: "Долгая подготовка КП",
                solution: "Агент формирует КП за 15 минут вместо 2 часов",
                icon: FileText,
                color: "from-orange-600 to-red-600",
              },
              {
                pain: "Пропущенные email",
                solution: "Email-ассистент парсит и отвечает на все письма",
                icon: Mail,
                color: "from-indigo-600 to-purple-600",
              },
              {
                pain: "Неудобные процессы",
                solution: "Омниканальный агент работает везде: голос, чат, email",
                icon: Globe,
                color: "from-cyan-600 to-blue-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardHeader className="p-4 md:p-6">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div className="space-y-3">
                    <div className="text-xs md:text-sm text-muted-foreground">
                      <span className="font-semibold text-red-600">Проблема:</span> {item.pain}
                    </div>
                    <div className="text-xs md:text-sm">
                      <span className="font-semibold text-green-600">Решение:</span> {item.solution}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Агенты M2 работают везде
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-3 sm:px-4">
              Голосовые ассистенты, чат-боты, email-агенты и RPA-роботы — выберите нужный тип или комбинируйте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {agentTypes.map((type, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardHeader className="p-6 md:p-8">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <type.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-3">{type.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base leading-relaxed mb-6">
                    {type.description}
                  </CardDescription>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-foreground">Возможности:</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-foreground">Применение:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.useCases.map((useCase, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6 md:p-8">
                <Globe className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-3">Омниканальность</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Один агент M2 может работать одновременно во всех каналах: принимать звонки, отвечать в чатах,
                  обрабатывать email. Клиент начинает диалог в WhatsApp, продолжает по телефону — агент помнит весь
                  контекст и историю общения.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases by Roles */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Решения для каждой роли
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-3 sm:px-4">
              Агенты M2 автоматизируют задачи в продажах, поддержке, операциях, финансах, HR и IT через голос, чат и
              email
            </p>
          </div>

          <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
            <div className="mb-6 sm:mb-8 md:mb-12 overflow-x-auto">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2 h-auto bg-transparent p-0 min-w-max lg:min-w-0">
                {roles.map((role) => (
                  <TabsTrigger
                    key={role.id}
                    value={role.id}
                    className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm py-2.5 sm:py-3 px-2 sm:px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg border-2 data-[state=active]:border-primary data-[state=inactive]:border-muted transition-all whitespace-nowrap"
                  >
                    <role.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-center leading-tight">{role.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {roles.map((role) => (
              <TabsContent key={role.id} value={role.id} className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="grid gap-4 sm:gap-6 md:gap-8">
                  {role.useCases.map((useCase, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 hover:border-primary/50"
                    >
                      <CardHeader className="p-4 sm:p-6 md:p-8">
                        <div className="flex flex-col gap-4 sm:gap-6">
                          <div
                            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 mx-auto sm:mx-0`}
                          >
                            <role.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                          </div>

                          <div className="flex-1 space-y-3 sm:space-y-4">
                            <div>
                              <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 text-center sm:text-left">
                                {useCase.title}
                              </CardTitle>
                              <CardDescription className="text-xs sm:text-sm md:text-base leading-relaxed text-center sm:text-left">
                                {useCase.description}
                              </CardDescription>
                            </div>

                            <div>
                              <h4 className="text-xs sm:text-sm font-semibold mb-2 text-foreground text-center sm:text-left">
                                Каналы:
                              </h4>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
                                {useCase.channels.map((channel, i) => (
                                  <Badge key={i} variant="outline" className="text-xs whitespace-nowrap">
                                    {channel}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t">
                              {useCase.metrics.map((metric, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 text-xs sm:text-sm p-2.5 sm:p-3 bg-muted/50 rounded-lg"
                                >
                                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                                  <span className="font-medium">{metric}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-8 sm:mt-12 md:mt-16 text-center px-3">
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4">
              Не нашли свой сценарий? Мы настроим агента под ваши задачи
            </p>
            <Button size="lg" onClick={() => openModal("consultation")} className="w-full sm:w-auto">
              Обсудить ваш сценарий
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Решения для вашей отрасли</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Агенты M2 адаптированы под специфику строительства, недвижимости, HoReCa, госсектора и других отраслей
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardHeader className="p-4 md:p-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <CardTitle className="text-base md:text-xl mb-3">{industry.name}</CardTitle>
                  <CardDescription className="text-xs md:text-sm leading-relaxed mb-4">
                    {industry.description}
                  </CardDescription>
                  <div className="space-y-2 pt-4 border-t">
                    {industry.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs md:text-sm">
                        <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-green-600 flex-shrink-0" />
                        <span className="font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection locale={locale} />

      {/* Integrations */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Интеграции с вашими системами</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Агенты M2 подключаются к телефонии, CRM, ERP, мессенджерам, email и платежным системам
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
              >
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <integration.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base md:text-lg">{integration.name}</CardTitle>
                  </div>
                  <CardDescription className="text-xs md:text-sm">{integration.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-sm md:text-base text-muted-foreground mb-4">Нужна кастомная интеграция?</p>
            <Button size="lg" variant="outline" onClick={() => openModal("consultation")} className="w-full sm:w-auto">
              Обсудить интеграцию
            </Button>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Безопасность и соответствие</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Шифрование, роли, аудит, соответствие GDPR/DPA/ISO 27001
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Шифрование AES-256",
                description: "Все данные шифруются при передаче и хранении",
              },
              {
                icon: Users,
                title: "Ролевой доступ",
                description: "Гибкая настройка прав доступа для команды",
              },
              {
                icon: FileText,
                title: "Полный аудит",
                description: "Логирование всех действий агента и пользователей",
              },
              {
                icon: CheckCircle2,
                title: "GDPR/DPA/ISO",
                description: "Соответствие международным стандартам безопасности",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <a href={`/${locale}/trust`}>
                Подробнее о безопасности
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ROI/Value */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Рассчитайте эффект от внедрения</h2>
            <p className="text-base md:text-xl text-muted-foreground px-4">
              Узнайте, сколько сэкономит ваш бизнес с агентами M2
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-2xl">
            <CardContent className="p-6 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold">Без агента M2</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-3 md:p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm md:text-base">5 менеджеров × ₽100,000</span>
                      <span className="font-bold text-base md:text-lg">₽500,000/мес</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-3 md:p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm md:text-base">Потеря лидов ночью</span>
                      <span className="font-bold text-red-600 text-base md:text-lg">-20%</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-3 md:p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm md:text-base">Ручные операции</span>
                      <span className="font-bold text-red-600 text-base md:text-lg">40 ч/нед</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary">С агентом M2</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-3 md:p-4 bg-primary/10 rounded-lg">
                      <span className="text-sm md:text-base">Агент M2 + 2 менеджера</span>
                      <span className="font-bold text-primary text-base md:text-lg">₽250,000/мес</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-3 md:p-4 bg-primary/10 rounded-lg">
                      <span className="text-sm md:text-base">Работа 24/7</span>
                      <span className="font-bold text-green-600 text-base md:text-lg">+25% лидов</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-3 md:p-4 bg-primary/10 rounded-lg">
                      <span className="text-sm md:text-base">Автоматизация</span>
                      <span className="font-bold text-green-600 text-base md:text-lg">5 ч/нед</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12 p-6 md:p-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl text-center">
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2">₽250,000/мес</div>
                <div className="text-base md:text-xl text-muted-foreground mb-4 md:mb-6">Экономия + рост выручки</div>
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <a href={`/${locale}/platform/pricing-calculator`}>
                    <BarChart3 className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Рассчитать для вашего бизнеса
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Истории успеха</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Реальные результаты компаний, которые внедрили агентов M2
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="p-4 md:p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.industry}
                    </Badge>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-base md:text-xl mb-4">{testimonial.company}</CardTitle>
                  <CardDescription className="text-xs md:text-sm leading-relaxed italic mb-6">
                    "{testimonial.quote}"
                  </CardDescription>
                  <div className="space-y-2 pt-4 border-t">
                    {testimonial.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs md:text-sm">
                        <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-green-600 flex-shrink-0" />
                        <span className="font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 md:mt-6 text-xs md:text-sm font-medium text-muted-foreground">
                    — {testimonial.author}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-base md:text-xl text-muted-foreground px-4">
              Ответы на популярные вопросы об агентах M2
            </p>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              }),
            }}
          />

          <div className="space-y-3 md:space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-4 md:p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <CardTitle className="text-sm md:text-lg pr-4">{item.question}</CardTitle>
                      <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <CardDescription className="mt-4 text-xs md:text-sm leading-relaxed">{item.answer}</CardDescription>
                  </details>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Начните автоматизацию сегодня</h2>
            <p className="text-base md:text-xl text-muted-foreground px-4">
              Оставьте заявку, и мы подберем решение для вашего бизнеса
            </p>
          </div>

          <Card className="shadow-2xl border-2">
            <CardContent className="p-6 md:p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm md:text-base">
                      Компания *
                    </Label>
                    <Input
                      id="company"
                      placeholder="ООО Ромашка"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm md:text-base">
                      Ваше имя *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm md:text-base">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm md:text-base">
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 900 000 00 00"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-sm md:text-base">
                    Отрасль
                  </Label>
                  <Input
                    id="industry"
                    placeholder="Строительство, Недвижимость, HoReCa..."
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="text-sm md:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm md:text-base">Интересующие каналы</Label>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {["Телефония", "Чат", "Email", "Мессенджеры"].map((channel) => (
                      <div key={channel} className="flex items-center space-x-2">
                        <Checkbox
                          id={channel}
                          checked={formData.channels.includes(channel)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({ ...formData, channels: [...formData.channels, channel] })
                            } else {
                              setFormData({
                                ...formData,
                                channels: formData.channels.filter((c) => c !== channel),
                              })
                            }
                          }}
                        />
                        <label htmlFor={channel} className="text-xs md:text-sm cursor-pointer">
                          {channel}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment" className="text-sm md:text-base">
                    Комментарий
                  </Label>
                  <Textarea
                    id="comment"
                    placeholder="Расскажите о ваших задачах..."
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="text-sm md:text-base"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    required
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  />
                  <label htmlFor="consent" className="text-xs md:text-sm text-muted-foreground cursor-pointer">
                    Я согласен с{" "}
                    <a href={`/${locale}/privacy`} className="underline hover:text-foreground">
                      политикой конфиденциальности
                    </a>{" "}
                    и обработкой персональных данных
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full text-base md:text-lg h-12 md:h-14">
                  Отправить заявку
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection locale={locale} />

      {/* CTA Section */}
      <CTASection locale={locale} />
    </div>
  )
}
