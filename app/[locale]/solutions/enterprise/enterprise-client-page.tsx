"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Building2,
  Shield,
  Globe,
  Users,
  Phone,
  Lock,
  Server,
  FileCheck,
  Clock,
  Award,
  Target,
  AlertTriangle,
  ArrowRight,
  Briefcase,
  ShieldCheck,
  Database,
  GitBranch,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { SkipLink } from "@/components/skip-link"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

export function EnterpriseClientPage({ params }: { params: { locale: Locale } }) {
  const { openModal } = useCTA()

  const trustIndicators = [
    { icon: <Award className="h-5 w-5" />, text: "Аккредитация Минцифры" },
    { icon: <ShieldCheck className="h-5 w-5" />, text: "ISO 27001 сертификация" },
    { icon: <FileCheck className="h-5 w-5" />, text: "Соответствие 152-ФЗ" },
    { icon: <Users className="h-5 w-5" />, text: "50+ корпоративных клиентов" },
  ]

  const sectors = [
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Государственный сектор",
      subtitle: "Федеральные и региональные учреждения",
      description:
        "Разрабатываем решения с учетом требований безопасности государственных структур: от министерств до муниципалитетов. Полное соответствие ГОСТ, 152-ФЗ, интеграция с СМЭВ 3.0 и ГИС.",
      challenges: [
        "Многоуровневая бюрократия и согласования",
        "Требования к локализации данных на территории РФ",
        "Необходимость работы с закрытыми контурами",
        "Длительные циклы закупок и внедрения",
      ],
      solutions: [
        "Соответствие ГОСТ Р 57580.1-2017",
        "Интеграция с СМЭВ 3.0, ЕПГУ, ГИС ЖКХ",
        "Развертывание в закрытых контурах",
        "Техническая документация по ЕСПД",
        "Поддержка российских СУБД (Postgres Pro, Tarantool)",
        "Многофакторная аутентификация ЕСИА",
      ],
      metrics: [
        { value: "до 70%", label: "снижение нагрузки на операторов" },
        { value: "24/7", label: "доступность для граждан" },
        { value: "99.9%", label: "uptime системы" },
      ],
      caseExample: {
        client: "Министерство здравоохранения региона",
        task: "Автоматизация записи на вакцинацию для 2.5 млн граждан",
        result: "Обработано 150,000+ обращений за 3 месяца без сбоев",
      },
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Банковский сектор",
      subtitle: "Коммерческие и государственные банки",
      description:
        "Создаем финтех-решения с банковским уровнем безопасности. Соответствие требованиям ЦБ РФ, защита от мошенничества, интеграция с АБС и CRM-системами банков.",
      challenges: [
        "Жесткие требования ЦБ РФ и финансового регулятора",
        "Необходимость защиты от фрод-атак",
        "Интеграция с legacy-системами (АБС)",
        "Высокие пиковые нагрузки",
      ],
      solutions: [
        "Соответствие требованиям ЦБ РФ (СТО БР ИББС)",
        "Anti-fraud система на базе ML",
        "Интеграция с АБС (Way4, Egar, Diasoft)",
        "PCI DSS Level 1 соответствие",
        "Голосовая биометрия для верификации",
        "Защита от социальной инженерии",
      ],
      metrics: [
        { value: "до 60%", label: "снижение нагрузки на колл-центр" },
        { value: "< 3 сек", label: "время ответа на запрос" },
        { value: "98%", label: "точность распознавания намерений" },
      ],
      caseExample: {
        client: "Топ-10 российский банк",
        task: "Автоматизация консультаций по кредитным продуктам",
        result: "1.2 млн обращений/мес, конверсия выросла на 34%",
      },
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Крупный бизнес и холдинги",
      subtitle: "Корпорации с оборотом 1+ млрд ₽",
      description:
        "Масштабируемые решения для крупного бизнеса: от производства до ритейла. Интеграция с SAP, 1C, Microsoft Dynamics. Поддержка распределенной географии и множественных подразделений.",
      challenges: [
        "Сложная организационная структура",
        "Разрозненные IT-системы в подразделениях",
        "Необходимость единого пространства данных",
        "Масштабирование на тысячи сотрудников",
      ],
      solutions: [
        "Интеграция с SAP ERP, 1C, Microsoft Dynamics",
        "Мультитенантная архитектура",
        "API для кастомной интеграции",
        "Горизонтальное масштабирование",
        "Advanced Analytics и BI-дашборды",
        "White-label и брендирование",
      ],
      metrics: [
        { value: "до 10,000+", label: "обращений в час" },
        { value: "50+", label: "одновременных интеграций" },
        { value: "< 100 мс", label: "задержка обработки" },
      ],
      caseExample: {
        client: "Федеральная ритейл-сеть (500+ магазинов)",
        task: "Единая система обработки заказов и клиентской поддержки",
        result: "Автоматизировано 80% типовых обращений, NPS +15 п.п.",
      },
    },
  ]

  const implementationProcess = [
    {
      phase: "1",
      title: "Аудит и стратегия",
      duration: "2-4 недели",
      description: "Глубокий анализ бизнес-процессов, IT-ландшафта и регуляторных требований",
      activities: [
        "Аудит текущих процессов и систем",
        "Анализ нормативных требований",
        "Оценка рисков информационной безопасности",
        "Формирование архитектуры решения",
        "Составление дорожной карты внедрения",
      ],
      deliverables: ["Технический проект", "План внедрения", "Оценка ROI"],
    },
    {
      phase: "2",
      title: "Разработка и интеграция",
      duration: "6-12 недель",
      description: "Создание кастомного решения с интеграцией в корпоративную инфраструктуру",
      activities: [
        "Разработка AI-моделей под специфику бизнеса",
        "Интеграция с корпоративными системами",
        "Настройка безопасности и контроля доступа",
        "Создание сценариев и диалоговых потоков",
        "Интеграция с телефонией и каналами связи",
      ],
      deliverables: ["Рабочий прототип", "Интеграционные адаптеры", "Документация"],
    },
    {
      phase: "3",
      title: "Тестирование и сертификация",
      duration: "3-6 недель",
      description: "Комплексное тестирование, аттестация безопасности, пилотное внедрение",
      activities: [
        "Функциональное и нагрузочное тестирование",
        "Аттестация по требованиям безопасности",
        "Пилотное внедрение в ограниченном контуре",
        "Обучение администраторов и пользователей",
        "Корректировка на основе обратной связи",
      ],
      deliverables: ["Отчет о тестировании", "Сертификаты соответствия", "Обученная команда"],
    },
    {
      phase: "4",
      title: "Запуск и поддержка",
      duration: "Постоянно",
      description: "Промышленная эксплуатация с гарантией SLA 99.9% и непрерывной оптимизацией",
      activities: [
        "Поэтапный rollout на все подразделения",
        "Мониторинг производительности 24/7",
        "Техническая поддержка уровня L1-L3",
        "Регулярные обновления и улучшения",
        "Quarterly Business Review (QBR)",
      ],
      deliverables: ["Система в продакшене", "SLA соглашение", "Отчеты по метрикам"],
    },
  ]

  const securityFeatures = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Шифрование данных",
      items: [
        "End-to-end шифрование всех каналов",
        "TLS 1.3 для транспортного уровня",
        "Шифрование данных в покое (AES-256)",
        "HSM для хранения ключей",
      ],
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Контроль доступа",
      items: [
        "Ролевая модель доступа (RBAC)",
        "Многофакторная аутентификация (MFA)",
        "Интеграция с Active Directory/LDAP",
        "Логирование всех действий пользователей",
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Защита персональных данных",
      items: [
        "Соответствие 152-ФЗ о персональных данных",
        "Псевдонимизация и анонимизация",
        "Контроль доступа к ПДн",
        "Регулярные аудиты безопасности",
      ],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Инфраструктура",
      items: [
        "Выделенные серверы или private cloud",
        "Географическая репликация данных",
        "Резервное копирование (RPO 15 мин)",
        "DDoS-защита и WAF",
      ],
    },
  ]

  const slaGuarantees = [
    { metric: "Uptime", value: "99.9%", description: "Гарантированная доступность системы" },
    {
      metric: "Время отклика",
      value: "< 2 сек",
      description: "Среднее время ответа на запрос",
    },
    {
      metric: "Восстановление",
      value: "< 4 часа",
      description: "RTO при критических инцидентах",
    },
    {
      metric: "Поддержка",
      value: "24/7/365",
      description: "Круглосуточная техническая поддержка",
    },
  ]

  const whyUs = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Опыт в enterprise",
      description: "10+ лет разработки для корпораций и госсектора. Знаем все подводные камни.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Выделенная команда",
      description: "Персональный проект-менеджер, архитектор решения и команда разработки.",
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Гибкость интеграций",
      description: "Работаем с любыми системами: от mainframe до современных микросервисов.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Прозрачная аналитика",
      description: "Детальные отчеты и дашборды для контроля эффективности и ROI.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Соблюдение сроков",
      description: "Фиксированные этапы и жесткий контроль дедлайнов. Гарантия в договоре.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Постпродажная поддержка",
      description: "Не бросаем после запуска. Развиваем и оптимизируем систему постоянно.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Внедрение заняло 4 месяца вместо планируемых 6. Команда AI Solutions показала глубокое понимание специфики госсектора и требований безопасности. Сейчас система обрабатывает 50,000+ обращений граждан в месяц.",
      author: "Андрей Михайлович К.",
      position: "Начальник управления цифровизации",
      company: "Министерство регионального развития",
      avatar: "/government-official.jpg",
    },
    {
      quote:
        "Впечатлила проработка вопросов информационной безопасности. Прошли все проверки ЦБ РФ с первого раза. Anti-fraud система на базе ML позволила снизить количество мошеннических операций на 43%.",
      author: "Елена Сергеевна П.",
      position: "Директор департамента ИТ",
      company: "Топ-15 российский банк",
      avatar: "/bank-executive-woman.jpg",
    },
    {
      quote:
        "Работали с 5 подрядчиками за последние 3 года. AI Solutions — единственные, кто смог интегрироваться с нашей устаревшей инфраструктурой без полной переработки. Поддержка 24/7 реально работает.",
      author: "Дмитрий Владимирович С.",
      position: "CTO",
      company: "Промышленный холдинг (12 предприятий)",
      avatar: "/cto-executive.jpg",
    },
  ]

  const teamMembers = [
    {
      name: "Александр Ковалев",
      position: "Главный архитектор решений",
      experience: "15+ лет в enterprise ИТ",
      expertise: "Проектирование высоконагруженных систем для госсектора и банков",
      achievements: [
        "Бывший архитектор решений в Сбербанке",
        "Сертификат AWS Solutions Architect Professional",
        "40+ успешных внедрений в enterprise",
      ],
      avatar: "/senior-architect-man.jpg",
    },
    {
      name: "Мария Соколова",
      position: "Руководитель направления безопасности",
      experience: "12+ лет в информационной безопасности",
      expertise: "Аттестация систем, аудит безопасности, соответствие 152-ФЗ",
      achievements: ["CISSP, CISM сертификации", "Эксперт ФСТЭК России", "Провела 50+ аттестаций систем обработки ПДн"],
      avatar: "/security-expert-woman.png",
    },
    {
      name: "Михаил Петров",
      position: "Технический директор",
      experience: "18+ лет разработки и управления",
      expertise: "AI/ML решения, интеграция с корпоративными системами",
      achievements: [
        "Бывший Tech Lead в Яндекс",
        "Автор 5 патентов в области ML",
        "Команда из 50+ инженеров под управлением",
      ],
      avatar: "/technical-director-man.jpg",
    },
  ]

  const faqs = [
    {
      question: "Как долго займет внедрение решения?",
      answer:
        "Средний срок полного внедрения для enterprise — от 3 до 6 месяцев. Конкретные сроки зависят от сложности интеграций, объема регуляторных требований и готовности инфраструктуры. Мы работаем по agile-методологии с двухнедельными спринтами, что позволяет демонстрировать результаты уже через месяц после старта.",
    },
    {
      question: "Как обеспечивается безопасность и соответствие требованиям?",
      answer:
        "Мы имеем все необходимые сертификаты (ISO 27001, соответствие 152-ФЗ) и опыт прохождения аудитов регуляторов. Архитектура решения проектируется с учетом требований безопасности с первого дня. Все данные шифруются (TLS 1.3, AES-256), применяется ролевая модель доступа, ведется полное логирование. Мы можем развернуть решение в вашем контуре (on-premise) или выделенном облаке.",
    },
    {
      question: "Какая стоимость внедрения и поддержки?",
      answer:
        "Стоимость зависит от объема задач, сложности интеграций и требований к производительности. Типичный проект начинается от 3-5 млн ₽ за внедрение. Поддержка — от 200,000 ₽/мес с гарантией SLA 99.9%. Мы предоставляем детальную смету после первичного аудита (бесплатно). Возможна поэтапная оплата по результатам спринтов.",
    },
    {
      question: "Можно ли интегрироваться с нашими legacy-системами?",
      answer:
        "Да, у нас большой опыт интеграции с устаревшими системами. Работали с mainframe, AS/400, старыми версиями SAP и 1C. Создаем адаптеры для любых протоколов и форматов данных. Если есть API (REST, SOAP, даже proprietary) — интегрируем. Если API нет — найдем другой путь (например, через БД или файловый обмен).",
    },
    {
      question: "Что делать, если проект не выстрелит?",
      answer:
        "Мы несем финансовую ответственность за результат. В договоре фиксируются KPI и метрики успеха. Если по итогам пилотного внедрения система не достигает согласованных показателей — возвращаем деньги или дорабатываем за свой счет. Также предусмотрена компенсация за нарушение SLA после запуска в production.",
    },
    {
      question: "Как организована техподдержка после запуска?",
      answer:
        "Поддержка 24/7/365 с трехуровневой эскалацией: L1 (первая линия) — ответ в течение 15 минут, L2 (инженеры) — в течение 1 часа, L3 (архитекторы и разработчики) — в течение 4 часов для критических инцидентов. Выделенный Slack/Teams-канал с вашей командой. Ежеквартальные QBR-встречи для оптимизации системы. Проактивный мониторинг с алертами.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SkipLink />

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AI Solutions Enterprise",
            description: "Корпоративные AI-решения для госсектора, банков и крупного бизнеса",
            areaServed: "RU",
            serviceType: "Enterprise AI Solutions",
            provider: {
              "@type": "Organization",
              name: "AI Solutions",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "RUB",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "50",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />

      <main id="main-content" role="main" tabIndex={-1}>
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-10">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full border shadow-sm text-sm"
                >
                  <div className="text-green-600">{indicator.icon}</div>
                  <span className="font-medium">{indicator.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center max-w-5xl mx-auto">
              <Badge variant="secondary" className="mb-4 sm:mb-6 text-sm sm:text-base px-4 py-2">
                <Shield className="h-4 w-4 mr-2 inline" />
                Enterprise-grade решения
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-balance leading-[1.1]">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AI-автоматизация
                </span>
                <br />
                для госсектора, банков
                <br />и крупного бизнеса
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed text-balance">
                Масштабируемые решения с гарантией безопасности, соответствием всем регуляторным требованиям и SLA
                99.9%. Полный цикл от аудита до промышленной эксплуатации.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto mb-12">
                <Button
                  size="lg"
                  onClick={() => openModal("consultation")}
                  className="w-full sm:w-auto h-14 text-lg px-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Получить консультацию
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => openModal("demo")}
                  className="w-full sm:w-auto h-14 text-lg px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                >
                  Запросить демо
                </Button>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {[
                  { value: "99.9%", label: "SLA uptime" },
                  { value: "50+", label: "Enterprise клиентов" },
                  { value: "10+ лет", label: "опыта в корпоративном ИТ" },
                  { value: "24/7", label: "техподдержка" },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border shadow-sm"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sectors in-depth */}
        <section className="py-16 sm:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Решения под специфику отрасли</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Мы понимаем уникальные вызовы каждого сектора и создаем решения, которые их закрывают
              </p>
            </div>

            <div className="space-y-16 sm:space-y-24">
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-start ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg">
                        {sector.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold">{sector.title}</h3>
                        <p className="text-sm text-muted-foreground">{sector.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                      {sector.description}
                    </p>

                    {/* Challenges */}
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
                        <AlertTriangle className="h-5 w-5 text-orange-500" />
                        Типичные вызовы
                      </h4>
                      <ul className="space-y-2">
                        {sector.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-orange-500 mt-1">▪</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Наши решения
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {sector.solutions.map((solution, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Case example */}
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                          <Target className="h-5 w-5 text-blue-600" />
                          Кейс: {sector.caseExample.client}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">Задача:</span> {sector.caseExample.task}
                        </p>
                        <p className="text-green-700 dark:text-green-400 font-medium">
                          <span className="font-bold">Результат:</span> {sector.caseExample.result}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Metrics card */}
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <Card className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2">
                      <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl">Ключевые метрики</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {sector.metrics.map((metric, i) => (
                          <div key={i}>
                            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{metric.value}</div>
                            <div className="text-sm text-muted-foreground">{metric.label}</div>
                            {i < sector.metrics.length - 1 && (
                              <div className="mt-4 border-b border-gray-300 dark:border-gray-700" />
                            )}
                          </div>
                        ))}

                        <Button className="w-full mt-6" variant="default" onClick={() => openModal("consultation")}>
                          Обсудить проект
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation process */}
        <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge variant="secondary" className="mb-4">
                Проверенный процесс
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Как мы внедряем enterprise-решения
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Полный цикл от аудита до запуска в production с фиксированными этапами и прозрачным контролем
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {implementationProcess.map((step, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-600" />
                  <CardHeader className="pl-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xl shadow-lg">
                        {step.phase}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl sm:text-2xl">{step.title}</CardTitle>
                        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <Clock className="h-4 w-4" />
                          {step.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardHeader>
                  <CardContent className="pl-6 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Активности:</h4>
                      <ul className="space-y-1.5">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t">
                      <h4 className="font-semibold mb-2 text-sm">Результаты:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Средний срок полного внедрения: <span className="font-bold text-primary">3-6 месяцев</span>
              </p>
              <Button size="lg" onClick={() => openModal("consultation")} className="shadow-lg">
                Запланировать встречу с архитектором
              </Button>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-16 sm:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge variant="secondary" className="mb-4">
                <ShieldCheck className="h-4 w-4 mr-2 inline" />
                Безопасность превыше всего
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Максимальный уровень защиты данных
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Мы обеспечиваем банковский уровень безопасности с соответствием всем российским и международным
                стандартам
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl w-fit text-white">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Compliance badges */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-center mb-8">Сертификаты и соответствия</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {[
                  { name: "ISO 27001", desc: "Информационная безопасность" },
                  { name: "152-ФЗ", desc: "Защита ПДн" },
                  { name: "GDPR", desc: "Европейский стандарт" },
                  { name: "PCI DSS", desc: "Платежные данные" },
                  { name: "ГОСТ", desc: "Российские стандарты" },
                  { name: "SOC 2", desc: "Аудит безопасности" },
                ].map((cert, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center border-2 border-blue-200 dark:border-blue-800">
                      <ShieldCheck className="h-10 w-10 text-blue-600" />
                    </div>
                    <div className="font-bold text-sm">{cert.name}</div>
                    <div className="text-xs text-muted-foreground">{cert.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SLA Guarantees */}
        <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Гарантии уровня обслуживания (SLA)</h2>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
                Мы несем финансовую ответственность за соблюдение SLA. Все метрики зафиксированы в договоре.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {slaGuarantees.map((guarantee, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader className="text-center pb-3">
                    <div className="text-4xl sm:text-5xl font-bold mb-2">{guarantee.value}</div>
                    <CardTitle className="text-lg text-blue-100">{guarantee.metric}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-blue-100">{guarantee.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl mb-6">💰 Компенсация при нарушении SLA: до 20% от стоимости месячного контракта</p>
              <Button size="lg" variant="secondary" onClick={() => openModal("consultation")} className="shadow-xl">
                Обсудить условия SLA
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge variant="secondary" className="mb-4">
                <Users className="h-4 w-4 mr-2 inline" />
                Команда экспертов
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">С вами работают профессионалы</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Наша команда — это топовые специалисты из ведущих технологических компаний с опытом в enterprise и
                госсекторе
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-lg">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{member.position}</p>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {member.experience}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground italic leading-relaxed">{member.expertise}</p>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Достижения:</h4>
                      <ul className="space-y-1.5">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs">
                            <Award className="h-3 w-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                + Команда из 50+ инженеров, аналитиков и специалистов поддержки
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge variant="secondary" className="mb-4">
                Отзывы клиентов
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Что говорят наши клиенты</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Реальные отзывы руководителей enterprise-проектов
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200 dark:border-blue-800 shadow-md flex-shrink-0">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                          crossOrigin="anonymous"
                        />
                      </div>
                      <div>
                        <div className="font-bold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                        <div className="text-xs text-blue-600 dark:text-blue-400">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-6xl text-blue-200 dark:text-blue-800 absolute top-4 right-4 opacity-50">"</div>
                    <p className="text-sm text-muted-foreground italic leading-relaxed relative z-10">
                      {testimonial.quote}
                    </p>
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-16 sm:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Почему выбирают нас</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Мы — не просто подрядчик, а долгосрочный технологический партнер
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUs.map((reason, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                        {reason.icon}
                      </div>
                      <CardTitle className="text-lg">{reason.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge variant="secondary" className="mb-4">
                Часто задаваемые вопросы
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">FAQ</h2>
              <p className="text-lg text-muted-foreground">Ответы на популярные вопросы о enterprise-внедрении</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                        ?
                      </span>
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-11">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">Не нашли ответ на свой вопрос?</p>
              <Button size="lg" onClick={() => openModal("consultation")} className="shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Задать вопрос экспертам
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Начните трансформацию уже сегодня
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
              Запишитесь на консультацию с нашим архитектором решений. Обсудим задачи, проведем аудит и предложим
              оптимальную архитектуру.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" onClick={() => openModal("consultation")} className="h-14 text-lg px-8 shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Заказать консультацию
              </Button>
              <Button variant="outline" size="lg" asChild className="h-14 text-lg px-8 bg-transparent">
                <Link href={`/${params.locale}/cases`}>
                  Посмотреть кейсы
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Бесплатная консультация</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>NDA подписываем в день обращения</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Ответ в течение 2 часов</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default EnterpriseClientPage
