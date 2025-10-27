import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, XCircle, Clock, TrendingUp, Server, Globe, Zap } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Статус системы AI Solutions | Мониторинг сервисов",
  description:
    "Актуальный статус всех сервисов AI Solutions. Мониторинг работоспособности API, голосовых сервисов и инфраструктуры в реальном времени.",
  keywords: "статус системы AI Solutions, мониторинг сервисов, uptime API, работоспособность",
}

interface StatusPageProps {
  params: { locale: Locale }
}

export default function StatusPage({ params }: StatusPageProps) {
  const services = [
    {
      name: "API Gateway",
      description: "Основной API для интеграций",
      status: "operational",
      uptime: "99.98%",
      responseTime: "145ms",
    },
    {
      name: "Voice Recognition",
      description: "Сервис распознавания речи",
      status: "operational",
      uptime: "99.95%",
      responseTime: "320ms",
    },
    {
      name: "Text-to-Speech",
      description: "Синтез речи",
      status: "operational",
      uptime: "99.97%",
      responseTime: "180ms",
    },
    {
      name: "Telephony Gateway",
      description: "SIP-шлюз для телефонии",
      status: "maintenance",
      uptime: "99.92%",
      responseTime: "95ms",
    },
    {
      name: "Analytics API",
      description: "Сервис аналитики и отчетов",
      status: "operational",
      uptime: "99.99%",
      responseTime: "67ms",
    },
    {
      name: "Webhook Delivery",
      description: "Доставка webhook уведомлений",
      status: "operational",
      uptime: "99.94%",
      responseTime: "234ms",
    },
  ]

  const incidents = [
    {
      title: "Плановое обслуживание Telephony Gateway",
      description: "Обновление инфраструктуры для улучшения качества связи",
      status: "in-progress",
      severity: "maintenance",
      startTime: "15 января 2024, 02:00 UTC",
      estimatedEnd: "15 января 2024, 04:00 UTC",
      affectedServices: ["Telephony Gateway"],
    },
    {
      title: "Кратковременные задержки в Voice Recognition",
      description: "Повышенная нагрузка привела к увеличению времени ответа",
      status: "resolved",
      severity: "minor",
      startTime: "14 января 2024, 14:30 UTC",
      resolvedTime: "14 января 2024, 15:15 UTC",
      affectedServices: ["Voice Recognition"],
    },
    {
      title: "Проблемы с доставкой webhook'ов",
      description: "Часть webhook уведомлений доставлялась с задержкой",
      status: "resolved",
      severity: "minor",
      startTime: "12 января 2024, 09:20 UTC",
      resolvedTime: "12 января 2024, 10:45 UTC",
      affectedServices: ["Webhook Delivery"],
    },
  ]

  const metrics = [
    {
      title: "Общий Uptime",
      value: "99.96%",
      change: "+0.02%",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-green-600",
    },
    {
      title: "Среднее время ответа",
      value: "178ms",
      change: "-12ms",
      icon: <Zap className="h-6 w-6" />,
      color: "text-blue-600",
    },
    {
      title: "Активные серверы",
      value: "24/24",
      change: "100%",
      icon: <Server className="h-6 w-6" />,
      color: "text-purple-600",
    },
    {
      title: "Регионы",
      value: "5",
      change: "Все активны",
      icon: <Globe className="h-6 w-6" />,
      color: "text-orange-600",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "maintenance":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "degraded":
        return <AlertTriangle className="h-5 w-5 text-orange-500" />
      case "outage":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-100 text-green-800">Работает</Badge>
      case "maintenance":
        return <Badge className="bg-yellow-100 text-yellow-800">Обслуживание</Badge>
      case "degraded":
        return <Badge className="bg-orange-100 text-orange-800">Снижена производительность</Badge>
      case "outage":
        return <Badge className="bg-red-100 text-red-800">Недоступен</Badge>
      default:
        return <Badge variant="secondary">Неизвестно</Badge>
    }
  }

  const getIncidentBadge = (severity: string) => {
    switch (severity) {
      case "maintenance":
        return <Badge className="bg-blue-100 text-blue-800">Обслуживание</Badge>
      case "minor":
        return <Badge className="bg-yellow-100 text-yellow-800">Незначительный</Badge>
      case "major":
        return <Badge className="bg-orange-100 text-orange-800">Серьезный</Badge>
      case "critical":
        return <Badge className="bg-red-100 text-red-800">Критический</Badge>
      default:
        return <Badge variant="secondary">Неизвестно</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header locale={params.locale} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Статус системы
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Мониторинг работоспособности всех сервисов AI Solutions в реальном времени. Актуальная информация о
            производительности и инцидентах.
          </p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <span className="font-medium">Все системы работают нормально</span>
          </div>
        </div>
      </section>

      {/* Overall Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Общие метрики</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${metric.color.replace("text-", "bg-").replace("-600", "-100")} ${metric.color}`}
                  >
                    {metric.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{metric.value}</CardTitle>
                  <CardDescription>{metric.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-500">За последние 30 дней: {metric.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Статус сервисов</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-semibold text-lg">{service.name}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Uptime</div>
                        <div className="font-semibold">{service.uptime}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Время ответа</div>
                        <div className="font-semibold">{service.responseTime}</div>
                      </div>
                      {getStatusBadge(service.status)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Последние инциденты</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {incidents.map((incident, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{incident.title}</CardTitle>
                      <CardDescription className="mt-2">{incident.description}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      {getIncidentBadge(incident.severity)}
                      <Badge variant={incident.status === "resolved" ? "default" : "secondary"}>
                        {incident.status === "resolved"
                          ? "Решено"
                          : incident.status === "in-progress"
                            ? "В процессе"
                            : "Мониторинг"}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Начало:</span>
                      <span>{incident.startTime}</span>
                    </div>
                    {incident.estimatedEnd && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Ожидаемое завершение:</span>
                        <span>{incident.estimatedEnd}</span>
                      </div>
                    )}
                    {incident.resolvedTime && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Решено:</span>
                        <span>{incident.resolvedTime}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Затронутые сервисы:</span>
                      <div className="flex gap-2">
                        {incident.affectedServices.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Подписаться на обновления статуса</h2>
          <p className="text-xl mb-8 opacity-90">
            Получайте уведомления о плановых работах и инцидентах по email или в Slack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Подписаться на email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Интеграция со Slack
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
