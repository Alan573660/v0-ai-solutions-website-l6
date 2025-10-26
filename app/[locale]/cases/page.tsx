import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Star, Building2, ShoppingCart, Banknote, Factory } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { CasesCTASection } from "@/components/cases/cases-cta-section"

interface CasesPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function CasesPage({ params }: CasesPageProps) {
  const { locale } = await params

  const cases = [
    {
      id: "sberbank-ai-assistant",
      title: "Сбербанк: Автоматизация 85% клиентских запросов",
      company: "ПАО Сбербанк",
      industry: "Банковский сектор",
      results: {
        efficiency: "+350%",
        satisfaction: "4.9/5",
        cost: "-70%",
      },
      description:
        "Как крупнейший банк России сократил время обработки запросов с часов до секунд и повысил удовлетворенность клиентов.",
      image: "/modern-bank-interior-with-ai-assistant-technology.jpg",
      tags: ["Банки", "Клиентский сервис", "Автоматизация"],
      featured: true,
      metrics: {
        calls: "2.5М звонков/месяц",
        savings: "₽180М экономии/год",
        time: "24/7 доступность",
      },
    },
    {
      id: "magnit-retail-revolution",
      title: "Магнит: Революция в розничной торговле с AI",
      company: "ПАО Магнит",
      industry: "Ритейл",
      results: {
        sales: "+42%",
        conversion: "+35%",
        support: "24/7",
      },
      description:
        "Голосовой ассистент обрабатывает заказы, консультирует по товарам и управляет программой лояльности.",
      image: "/modern-retail-store-with-ai-voice-assistant.jpg",
      tags: ["Ритейл", "Продажи", "Лояльность"],
      featured: true,
      metrics: {
        stores: "25,000+ магазинов",
        customers: "40М клиентов",
        orders: "500К заказов/день",
      },
    },
    {
      id: "moscow-government-digital-services",
      title: "Правительство Москвы: Цифровизация госуслуг",
      company: "Правительство Москвы",
      industry: "Государственный сектор",
      results: {
        requests: "+280%",
        wait: "-80%",
        satisfaction: "4.8/5",
      },
      description:
        "AI-ассистент помогает гражданам получать госуслуги, записываться на приём и получать справочную информацию.",
      image: "/modern-government-office-with-digital-services.jpg",
      tags: ["Госсектор", "Цифровизация", "Граждане"],
      featured: false,
      metrics: {
        citizens: "12М жителей",
        services: "300+ услуг",
        requests: "1М запросов/месяц",
      },
    },
    {
      id: "aeroflot-customer-service",
      title: "Аэрофлот: Умный помощник пассажиров",
      company: "ПАО Аэрофлот",
      industry: "Авиация",
      results: {
        bookings: "+190%",
        support: "24/7",
        languages: "15 языков",
      },
      description:
        "Многоязычный AI-ассистент обрабатывает бронирования, изменения рейсов и отвечает на вопросы пассажиров.",
      image: "/modern-airport-terminal-with-ai-assistant.jpg",
      tags: ["Авиация", "Бронирование", "Мультиязычность"],
      featured: false,
      metrics: {
        passengers: "35М пассажиров/год",
        routes: "146 направлений",
        fleet: "350+ самолётов",
      },
    },
    {
      id: "x5-retail-group",
      title: "X5 Retail Group: Омниканальный AI-помощник",
      company: "X5 Retail Group",
      industry: "Ритейл",
      results: {
        orders: "+320%",
        delivery: "-50%",
        retention: "+45%",
      },
      description:
        "Единый голосовой интерфейс для Пятёрочки, Перекрёстка и Карусели с персонализированными рекомендациями.",
      image: "/modern-retail-chain-store-with-ai-technology.jpg",
      tags: ["Омниканал", "Доставка", "Персонализация"],
      featured: false,
      metrics: {
        stores: "18,000+ магазинов",
        customers: "15М покупателей",
        cities: "3,000+ городов",
      },
    },
    {
      id: "rostelecom-telecom",
      title: "Ростелеком: Техподдержка нового поколения",
      company: "ПАО Ростелеком",
      industry: "Телекоммуникации",
      results: {
        resolution: "+85%",
        time: "-75%",
        cost: "-60%",
      },
      description:
        "AI-система диагностирует проблемы, управляет заявками и предоставляет техническую поддержку абонентам.",
      image: "/modern-telecom-support-center-with-ai-technology.jpg",
      tags: ["Телеком", "Техподдержка", "Диагностика"],
      featured: false,
      metrics: {
        subscribers: "42М абонентов",
        regions: "85 регионов",
        infrastructure: "500Км ВОЛС",
      },
    },
    {
      id: "gazprom-industrial-ai",
      title: "Газпром: Промышленная автоматизация с AI",
      company: "ПАО Газпром",
      industry: "Энергетика",
      results: {
        efficiency: "+180%",
        safety: "+95%",
        monitoring: "24/7",
      },
      description: "Голосовое управление промышленными процессами, мониторинг оборудования и система безопасности.",
      image: "/modern-industrial-facility-with-ai-monitoring-syst.jpg",
      tags: ["Энергетика", "Безопасность", "Мониторинг"],
      featured: false,
      metrics: {
        facilities: "150+ объектов",
        pipeline: "175К км газопроводов",
        production: "500 млрд м³/год",
      },
    },
    {
      id: "vtb-digital-banking",
      title: "ВТБ: Персональный банковский консультант",
      company: "Банк ВТБ",
      industry: "Банковский сектор",
      results: {
        transactions: "+250%",
        satisfaction: "4.7/5",
        products: "+120%",
      },
      description: "AI-консультант помогает клиентам с банковскими операциями, инвестициями и кредитными продуктами.",
      image: "/modern-bank-branch-with-ai-consultant-technology.jpg",
      tags: ["Банки", "Инвестиции", "Консультации"],
      featured: false,
      metrics: {
        clients: "20М клиентов",
        offices: "1,000+ офисов",
        assets: "₽18 трлн активов",
      },
    },
  ]

  const industries = [
    { name: "Все", icon: null },
    { name: "Банковский сектор", icon: Banknote },
    { name: "Ритейл", icon: ShoppingCart },
    { name: "Государственный сектор", icon: Building2 },
    { name: "Авиация", icon: TrendingUp },
    { name: "Телекоммуникации", icon: Users },
    { name: "Энергетика", icon: Factory },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white text-balance">
              Истории успеха наших клиентов
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100 text-pretty max-w-3xl mx-auto">
              Узнайте, как компании из разных отраслей трансформируют клиентский опыт с помощью AI-ассистентов
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <div className="flex items-center justify-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">+280%</div>
                    <div className="text-sm text-purple-200">Средний рост эффективности</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <div className="flex items-center justify-center space-x-3">
                  <Users className="h-6 w-6 text-blue-400" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">100+</div>
                    <div className="text-sm text-purple-200">Успешных внедрений</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <div className="flex items-center justify-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">4.8/5</div>
                    <div className="text-sm text-purple-200">Средняя оценка клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Button
                  key={industry.name}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={
                    index === 0
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                      : "border-purple-200 hover:bg-purple-50"
                  }
                >
                  {Icon && <Icon className="h-4 w-4 mr-2" />}
                  {industry.name}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Флагманские проекты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Самые впечатляющие результаты внедрения AI-решений в крупнейших компаниях России
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {cases
              .filter((case_) => case_.featured)
              .map((case_) => (
                <Card
                  key={case_.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={case_.image || "/placeholder.svg?height=300&width=500"}
                      alt={case_.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0">
                        {case_.industry}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-semibold text-lg">{case_.company}</div>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl lg:text-2xl text-gray-900">{case_.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {case_.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(case_.results).map(([key, value]) => (
                        <div
                          key={key}
                          className="text-center p-3 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg"
                        >
                          <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            {value}
                          </div>
                          <div className="text-sm text-gray-500 capitalize font-medium">{key}</div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 border-t pt-4">
                      {Object.entries(case_.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-semibold text-gray-700">{value}</div>
                          <div className="capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {case_.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-purple-200 text-purple-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    >
                      <Link href={`/${locale}/cases/${case_.id}`} className="flex items-center justify-center">
                        Читать полный кейс
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Cases Grid */}
      <section className="py-20 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Все кейсы внедрения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полная коллекция успешных проектов в различных отраслях экономики
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_) => (
              <Card
                key={case_.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={case_.image || "/placeholder.svg?height=200&width=350"}
                    alt={case_.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0 text-xs">
                      {case_.industry}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2 text-gray-900">{case_.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-gray-600">{case_.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(case_.results)
                      .slice(0, 3)
                      .map(([key, value]) => (
                        <div key={key} className="p-2 bg-gradient-to-br from-purple-50 to-indigo-50 rounded">
                          <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-200 hover:bg-purple-50 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent bg-transparent"
                  >
                    <Link href={`/${locale}/cases/${case_.id}`} className="flex items-center justify-center">
                      Подробнее
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CasesCTASection />
    </div>
  )
}
