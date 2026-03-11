"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight, Check, ChevronDown, Zap,
  Phone, FileText, Package, Receipt, Truck, Target,
  Building2, ShoppingCart, Briefcase, Headphones, Users,
  Clock, Shield, TrendingUp, BarChart3, Globe, Cpu,
  Factory, Stethoscope, Warehouse, HardHat, Bot, MessageSquare,
} from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import { RelatedSolutions } from "@/components/related-solutions"
import type { Locale } from "@/lib/i18n/config"

interface AutomationBusinessPageProps {
  locale: Locale
}

export function AutomationBusinessPage({ locale }: AutomationBusinessPageProps) {
  const { openModal } = useCTA()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const isRu = locale === "ru"

  // Processes that can be automated - 6 cards
  const automationCards = [
    {
      icon: Phone,
      title: isRu ? "Автоматизация звонков" : "Call Automation",
      description: isRu
        ? "AI-операторы принимают входящие звонки, отвечают клиентам и выполняют автоматический обзвон."
        : "AI operators receive incoming calls, respond to customers and perform automatic dialing.",
      href: `/${locale}/solutions/automatic-operator`,
      color: "from-blue-500 to-cyan-500",
      stats: isRu ? "24/7 без выходных" : "24/7 availability",
    },
    {
      icon: FileText,
      title: isRu ? "Автоматизация обработки заявок" : "Request Processing Automation",
      description: isRu
        ? "AI обрабатывает заявки с сайта, CRM, мессенджеров и автоматически распределяет их между менеджерами."
        : "AI processes requests from website, CRM, messengers and automatically distributes them among managers.",
      href: `/${locale}/solutions/obrabotka-zayavok`,
      color: "from-green-500 to-emerald-500",
      stats: isRu ? "0 потерянных лидов" : "0 lost leads",
    },
    {
      icon: Package,
      title: isRu ? "Автоматизация обработки заказов" : "Order Processing Automation",
      description: isRu
        ? "Система автоматически принимает заказы, проверяет данные клиента и передает заказ в обработку."
        : "System automatically receives orders, verifies customer data and passes orders for processing.",
      href: `/${locale}/solutions/obrabotka-zakazov`,
      color: "from-orange-500 to-amber-500",
      stats: isRu ? "8x быстрее" : "8x faster",
    },
    {
      icon: Receipt,
      title: isRu ? "Автоматизация выставления счетов" : "Invoice Automation",
      description: isRu
        ? "Система автоматически формирует счета клиентам и отправляет их по email или CRM."
        : "System automatically generates invoices and sends them via email or CRM.",
      href: `/${locale}/solutions/vystavlenie-schetov`,
      color: "from-teal-500 to-cyan-500",
      stats: isRu ? "-95% ручной работы" : "-95% manual work",
    },
    {
      icon: Truck,
      title: isRu ? "Автоматизация расчета доставки" : "Delivery Calculation Automation",
      description: isRu
        ? "AI рассчитывает стоимость доставки по весу, расстоянию и тарифам."
        : "AI calculates delivery cost by weight, distance and rates.",
      href: `/${locale}/solutions/raschet-dostavki`,
      color: "from-indigo-500 to-purple-500",
      stats: isRu ? "-35% затрат" : "-35% costs",
    },
    {
      icon: Target,
      title: isRu ? "Автоматизация продаж" : "Sales Automation",
      description: isRu
        ? "AI-менеджеры ведут диалог с клиентами, квалифицируют лиды и помогают менеджерам закрывать сделки."
        : "AI managers conduct dialogues with customers, qualify leads and help managers close deals.",
      href: `/${locale}/solutions/automation-sales`,
      color: "from-purple-500 to-pink-500",
      stats: isRu ? "+40% конверсия" : "+40% conversion",
    },
  ]

  // Benefits of AI automation
  const benefits = [
    {
      icon: TrendingUp,
      title: isRu ? "Сокращение расходов на персонал" : "Staff Cost Reduction",
      description: isRu ? "Экономия до 70% ФОТ отдела продаж и поддержки" : "Save up to 70% on sales and support payroll",
    },
    {
      icon: Clock,
      title: isRu ? "Обработка клиентов 24/7" : "24/7 Customer Processing",
      description: isRu ? "AI работает круглосуточно без выходных и больничных" : "AI works around the clock without weekends or sick days",
    },
    {
      icon: Zap,
      title: isRu ? "Ускорение обработки заявок" : "Faster Request Processing",
      description: isRu ? "Время обработки заявки сокращается с часов до секунд" : "Request processing time reduced from hours to seconds",
    },
    {
      icon: BarChart3,
      title: isRu ? "Рост конверсии продаж" : "Sales Conversion Growth",
      description: isRu ? "Увеличение конверсии на 40-80% за счет мгновенной реакции" : "40-80% conversion increase due to instant response",
    },
    {
      icon: Shield,
      title: isRu ? "Снижение операционных ошибок" : "Operational Error Reduction",
      description: isRu ? "AI не забывает, не путает и не делает ошибок в рутине" : "AI doesn't forget, confuse or make routine errors",
    },
    {
      icon: Globe,
      title: isRu ? "Масштабирование бизнеса" : "Business Scaling",
      description: isRu ? "Рост объемов без пропорционального роста штата" : "Volume growth without proportional staff increase",
    },
  ]

  // How AI automation works - 6 steps
  const workflowSteps = [
    {
      step: 1,
      title: isRu ? "Подключение к CRM" : "CRM Connection",
      description: isRu ? "Интеграция с amoCRM, Bitrix24, Salesforce и другими системами" : "Integration with amoCRM, Bitrix24, Salesforce and other systems",
    },
    {
      step: 2,
      title: isRu ? "Интеграция с телефонией" : "Telephony Integration",
      description: isRu ? "Подключение к Mango Office, Sipuni, Asterisk и другим АТС" : "Connection to Mango Office, Sipuni, Asterisk and other PBX",
    },
    {
      step: 3,
      title: isRu ? "Подключение источников заявок" : "Lead Sources Connection",
      description: isRu ? "Сайты, мессенджеры, email, социальные сети" : "Websites, messengers, email, social networks",
    },
    {
      step: 4,
      title: isRu ? "Настройка сценариев AI" : "AI Scenarios Setup",
      description: isRu ? "Создание скриптов продаж, обработки заявок и поддержки" : "Creating sales scripts, request processing and support",
    },
    {
      step: 5,
      title: isRu ? "Автоматическая обработка запросов" : "Automatic Request Processing",
      description: isRu ? "AI обрабатывает звонки, заявки и заказы автоматически" : "AI processes calls, requests and orders automatically",
    },
    {
      step: 6,
      title: isRu ? "Передача данных в CRM" : "Data Transfer to CRM",
      description: isRu ? "Все данные и записи сохраняются в CRM для аналитики" : "All data and records saved in CRM for analytics",
    },
  ]

  // Who is automation suitable for
  const targetAudience = [
    { icon: ShoppingCart, title: isRu ? "Интернет-магазины" : "E-commerce", description: isRu ? "Обработка заказов и поддержка клиентов" : "Order processing and customer support" },
    { icon: Briefcase, title: isRu ? "Сервисные компании" : "Service Companies", description: isRu ? "Запись на услуги и консультации" : "Service booking and consultations" },
    { icon: Truck, title: isRu ? "Логистические компании" : "Logistics Companies", description: isRu ? "Расчет доставки и отслеживание" : "Delivery calculation and tracking" },
    { icon: Target, title: isRu ? "Отделы продаж" : "Sales Departments", description: isRu ? "Квалификация лидов и закрытие сделок" : "Lead qualification and deal closing" },
    { icon: Headphones, title: isRu ? "Call-центры" : "Call Centers", description: isRu ? "Прием и обработка звонков" : "Call reception and processing" },
    { icon: Building2, title: isRu ? "B2B компании" : "B2B Companies", description: isRu ? "Сложные продажи и поддержка" : "Complex sales and support" },
  ]

  // FAQ questions
  const faqItems = [
    {
      question: isRu ? "Что такое автоматизация бизнеса?" : "What is business automation?",
      answer: isRu
        ? "Автоматизация бизнеса — это использование программных систем и AI для автоматического выполнения бизнес-процессов: обработки звонков, заявок, заказов, выставления счетов и логистики. AI-агенты заменяют рутинную работу менеджеров, работают 24/7 и не допускают ошибок."
        : "Business automation is the use of software systems and AI to automatically execute business processes: calls, requests, orders, invoicing and logistics. AI agents replace routine manager work, operate 24/7 and don't make errors.",
    },
    {
      question: isRu ? "Какие процессы можно автоматизировать?" : "What processes can be automated?",
      answer: isRu
        ? "Можно автоматизировать: входящие и исходящие звонки, обработку заявок с сайта и мессенджеров, обработку заказов, выставление счетов и документов, расчет стоимости доставки, продажи и работу с клиентами. AI справляется с 80-95% рутинных задач."
        : "You can automate: inbound and outbound calls, request processing from website and messengers, order processing, invoicing and documents, delivery cost calculation, sales and customer service. AI handles 80-95% of routine tasks.",
    },
    {
      question: isRu ? "Можно ли автоматизировать отдел продаж?" : "Can sales department be automated?",
      answer: isRu
        ? "Да, AI-менеджеры могут принимать заявки, отвечать на вопросы клиентов, квалифицировать лиды по заданным критериям, презентовать продукт, рассчитывать стоимость и формировать коммерческие предложения. Конверсия увеличивается на 40-80%."
        : "Yes, AI managers can receive requests, answer customer questions, qualify leads by set criteria, present products, calculate costs and generate commercial proposals. Conversion increases by 40-80%.",
    },
    {
      question: isRu ? "Сколько стоит автоматизация бизнеса?" : "How much does business automation cost?",
      answer: isRu
        ? "Стоимость зависит от объема процессов, количества интеграций и сложности сценариев. Мы предоставляем бесплатный аудит и расчет ROI за 15 минут. Типичная окупаемость — 2-3 месяца."
        : "Cost depends on process volume, number of integrations and scenario complexity. We provide free audit and ROI calculation in 15 minutes. Typical payback — 2-3 months.",
    },
    {
      question: isRu ? "Как быстро можно внедрить автоматизацию?" : "How quickly can automation be implemented?",
      answer: isRu
        ? "Базовая интеграция с CRM и телефонией занимает 7 дней. Полная автоматизация всех процессов — от 2 до 4 недель в зависимости от сложности. Демо-версию можно запустить за 3 дня."
        : "Basic CRM and telephony integration takes 7 days. Full process automation — 2 to 4 weeks depending on complexity. Demo version can be launched in 3 days.",
    },
    {
      question: isRu ? "С какими системами есть интеграция?" : "What systems are integrated?",
      answer: isRu
        ? "Интегрируемся с популярными CRM (amoCRM, Bitrix24, Salesforce, HubSpot), телефонией (Mango Office, Sipuni, Asterisk), мессенджерами (WhatsApp, Telegram), 1С, и любыми системами через API."
        : "We integrate with popular CRMs (amoCRM, Bitrix24, Salesforce, HubSpot), telephony (Mango Office, Sipuni, Asterisk), messengers (WhatsApp, Telegram), 1C, and any systems via API.",
    },
  ]

  // Additional internal links for SEO
  const internalLinks = [
    { href: `/${locale}/solutions/robot-operator`, title: isRu ? "Робот оператор" : "Robot Operator" },
    { href: `/${locale}/solutions/robot-dlya-zvonkov`, title: isRu ? "Робот для звонков" : "Robot for Calls" },
    { href: `/${locale}/solutions/robot-dlya-prodazh`, title: isRu ? "Робот для продаж" : "Sales Robot" },
    { href: `/${locale}/solutions/virtual-operator`, title: isRu ? "Виртуальный оператор" : "Virtual Operator" },
    { href: `/${locale}/solutions/sales-automation-system`, title: isRu ? "Система автоматизации продаж" : "Sales Automation System" },
    { href: `/${locale}/solutions/ai-dlya-biznesa`, title: isRu ? "AI для бизнеса" : "AI for Business" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* HERO Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {isRu ? "Платформа AI-агентов для бизнеса" : "AI Agents Platform for Business"}
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
              {isRu ? "AI автоматизация" : "AI Business"}
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {isRu ? "бизнеса и бизнес-процессов" : "Automation"}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {isRu
                ? "Платформа AI-агентов для автоматизации звонков, продаж, обработки заявок, выставления счетов и логистики."
                : "AI agents platform for automating calls, sales, request processing, invoicing and logistics."}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                onClick={() => openModal()}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25"
              >
                {isRu ? "Получить бесплатный аудит автоматизации" : "Get Free Automation Audit"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <p className="text-sm text-slate-500">
              {isRu ? "Бесплатная консультация • Расчёт ROI за 15 минут • Без обязательств" : "Free consultation • ROI calculation in 15 minutes • No obligations"}
            </p>
          </div>
        </div>
      </section>

      {/* H2: Какие процессы бизнеса можно автоматизировать */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRu ? "Какие процессы бизнеса можно автоматизировать" : "What Business Processes Can Be Automated"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRu
                ? "AI-агенты берут на себя рутинные задачи и работают 24/7 без ошибок"
                : "AI agents take over routine tasks and work 24/7 without errors"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationCards.map((card, index) => {
              const Icon = card.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{card.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-sm">
                        {card.stats}
                      </Badge>
                      <Button asChild variant="ghost" size="sm" className="group-hover:text-primary">
                        <Link href={card.href}>
                          {isRu ? "Подробнее" : "Learn more"}
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* H2: Преимущества AI автоматизации бизнеса */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRu ? "Преимущества AI автоматизации бизнеса" : "Benefits of AI Business Automation"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRu
                ? "Технологии автоматизации бизнеса позволяют масштабировать компанию без пропорционального роста затрат"
                : "Business automation technologies allow scaling company without proportional cost increase"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* H2: Как работает AI автоматизация бизнес-процессов */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRu ? "Как работает AI автоматизация бизнес-процессов" : "How AI Business Process Automation Works"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRu
                ? "Система автоматизации бизнеса интегрируется с вашими инструментами за 7 дней"
                : "Business automation system integrates with your tools in 7 days"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {/* Connector line */}
                {index < workflowSteps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-slate-300 dark:border-slate-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Кому подходит автоматизация бизнеса */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRu ? "Кому подходит автоматизация бизнеса" : "Who Business Automation Is For"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRu
                ? "Автоматизация управления бизнесом подходит компаниям любого размера"
                : "Business management automation suits companies of any size"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* H2: FAQ - Часто задаваемые вопросы */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRu ? "Часто задаваемые вопросы" : "Frequently Asked Questions"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isRu ? "Ответы на популярные вопросы об автоматизации бизнеса" : "Answers to popular questions about business automation"}
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-semibold text-lg pr-4">{item.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional internal links section for SEO */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {isRu ? "Другие решения для автоматизации" : "Other Automation Solutions"}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {internalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isRu ? "Готовы автоматизировать бизнес?" : "Ready to Automate Your Business?"}
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {isRu
              ? "Получите бесплатный аудит и расчет ROI автоматизации за 15 минут"
              : "Get free audit and automation ROI calculation in 15 minutes"}
          </p>
          <Button
            size="lg"
            onClick={() => openModal()}
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl"
          >
            {isRu ? "Получить бесплатный аудит" : "Get Free Audit"}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="mt-6 text-sm text-white/60">
            {isRu ? "Без обязательств • Демо за 7 дней • NDA по запросу" : "No obligations • Demo in 7 days • NDA on request"}
          </p>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions locale={locale} currentSlug="automation-business" />
    </div>
  )
}
