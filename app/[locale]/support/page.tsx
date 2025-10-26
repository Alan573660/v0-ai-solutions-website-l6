import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Техническая поддержка AI Solutions | Помощь 24/7",
  description:
    "Круглосуточная техническая поддержка AI Solutions. Онлайн чат, телефон, email. Быстрое решение проблем с AI-ассистентами.",
  keywords: "техподдержка AI Solutions, поддержка 24/7, помощь с AI ассистентами, техническая помощь",
}

interface SupportPageProps {
  params: { locale: Locale }
}

export default function SupportPage({ params }: SupportPageProps) {
  const supportChannels = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Онлайн чат",
      description: "Мгновенные ответы на ваши вопросы",
      availability: "24/7",
      responseTime: "< 2 мин",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Телефон",
      description: "Прямая линия технической поддержки",
      availability: "24/7",
      responseTime: "Мгновенно",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      description: "Подробные ответы и документация",
      availability: "24/7",
      responseTime: "< 2 часа",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  const supportPlans = [
    {
      name: "Базовая поддержка",
      description: "Для всех клиентов",
      features: ["Email поддержка 24/7", "База знаний", "Документация API", "Форум сообщества"],
      responseTime: "< 24 часа",
      price: "Включено",
    },
    {
      name: "Приоритетная поддержка",
      description: "Для бизнес-клиентов",
      features: ["Все из базовой поддержки", "Телефонная поддержка", "Онлайн чат", "Приоритетная обработка"],
      responseTime: "< 4 часа",
      price: "По запросу",
    },
    {
      name: "Премиум поддержка",
      description: "Для корпоративных клиентов",
      features: [
        "Все из приоритетной поддержки",
        "Персональный менеджер",
        "Видеоконференции",
        "Проактивный мониторинг",
      ],
      responseTime: "< 1 час",
      price: "По запросу",
    },
  ]

  const commonIssues = [
    {
      title: "Проблемы с интеграцией API",
      description: "Ошибки аутентификации, неправильные запросы",
      severity: "Средняя",
      avgTime: "30 мин",
    },
    {
      title: "Качество распознавания речи",
      description: "Проблемы с пониманием клиентов",
      severity: "Высокая",
      avgTime: "15 мин",
    },
    {
      title: "Настройка сценариев диалогов",
      description: "Помощь с логикой разговора",
      severity: "Низкая",
      avgTime: "45 мин",
    },
    {
      title: "Проблемы с телефонией",
      description: "Подключение SIP, качество звука",
      severity: "Высокая",
      avgTime: "20 мин",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Техническая поддержка
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Наша команда экспертов готова помочь вам 24/7. Быстрое решение проблем, консультации по настройке и
            оптимизации ваших AI-ассистентов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Открыть чат поддержки
            </Button>
            <Button size="lg" variant="outline">
              Позвонить: +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Каналы поддержки</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${channel.color}`}
                  >
                    {channel.icon}
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Доступность:</span>
                    <Badge variant="secondary">{channel.availability}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Время ответа:</span>
                    <Badge variant="outline">{channel.responseTime}</Badge>
                  </div>
                  <Button className="w-full">Связаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Request Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Создать запрос в поддержку</h2>
            <Card>
              <CardHeader>
                <CardTitle>Опишите вашу проблему</CardTitle>
                <CardDescription>Чем подробнее вы опишете проблему, тем быстрее мы сможем вам помочь</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Тип проблемы</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип проблемы" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="api">Проблемы с API</SelectItem>
                      <SelectItem value="voice">Качество речи</SelectItem>
                      <SelectItem value="integration">Интеграция</SelectItem>
                      <SelectItem value="billing">Биллинг</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Приоритет</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите приоритет" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Низкий</SelectItem>
                      <SelectItem value="medium">Средний</SelectItem>
                      <SelectItem value="high">Высокий</SelectItem>
                      <SelectItem value="critical">Критический</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Описание проблемы</label>
                  <Textarea
                    placeholder="Подробно опишите проблему, шаги для воспроизведения, ожидаемый результат..."
                    rows={6}
                  />
                </div>

                <Button className="w-full" size="lg">
                  Отправить запрос
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Планы поддержки</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-lg transition-shadow ${index === 1 ? "border-purple-200 shadow-lg" : ""}`}
              >
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-bold text-purple-600">{plan.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Время ответа:</span>
                    <Badge variant="outline">{plan.responseTime}</Badge>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Что включено:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    {plan.price === "Включено" ? "Текущий план" : "Узнать подробности"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Частые проблемы</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{issue.title}</h3>
                      <p className="text-gray-600 mb-3">{issue.description}</p>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-500">Приоритет: {issue.severity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-500">Среднее время решения: {issue.avgTime}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Нужна срочная помощь?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наша команда поддержки доступна 24/7 для решения критических проблем
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Экстренная поддержка
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Заказать обратный звонок
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
