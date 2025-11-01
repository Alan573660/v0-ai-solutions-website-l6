import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Handshake, TrendingUp, Users, Globe, Award, Zap, CheckCircle, ArrowRight } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Партнерская программа AI Solutions | Станьте нашим партнером",
  description:
    "Присоединяйтесь к партнерской программе AI Solutions. Высокие комиссии, техническая поддержка, маркетинговые материалы. Развивайте бизнес с нами.",
  keywords: "партнерская программа AI, реселлер AI Solutions, партнер по продажам, комиссия за продажи",
}

interface PartnersPageProps {
  params: Promise<{ locale: Locale }> // Made params async
}

export default async function PartnersPage({ params }: PartnersPageProps) {
  // Made function async
  const { locale } = await params // Await params (not used but extracted for consistency)

  const partnerTypes = [
    {
      title: "Реселлер",
      description: "Продавайте наши решения под своим брендом",
      commission: "До 30%",
      features: [
        "Белый лейбл решения",
        "Техническая поддержка 24/7",
        "Маркетинговые материалы",
        "Обучение команды продаж",
      ],
      ideal: "Для IT-компаний и системных интеграторов",
    },
    {
      title: "Технологический партнер",
      description: "Интегрируйте наши AI в свои продукты",
      commission: "Индивидуально",
      features: ["API доступ", "Совместная разработка", "Техническая документация", "Приоритетная поддержка"],
      ideal: "Для разработчиков платформ и SaaS",
    },
    {
      title: "Консультант",
      description: "Рекомендуйте клиентам наши решения",
      commission: "До 20%",
      features: ["Реферальная программа", "Демо-доступы", "Презентационные материалы", "Поддержка сделок"],
      ideal: "Для консультантов и агентств",
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Высокие комиссии",
      description: "До 30% с каждой продажи + бонусы за объем",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Персональный менеджер",
      description: "Выделенный менеджер для поддержки ваших продаж",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Международный рынок",
      description: "Продавайте в 50+ странах мира",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Сертификация",
      description: "Бесплатное обучение и сертификация команды",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Быстрый старт",
      description: "Запуск продаж за 2 недели",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Долгосрочное сотрудничество",
      description: "Растущие комиссии и эксклюзивные территории",
    },
  ]

  const steps = [
    {
      step: "1",
      title: "Подача заявки",
      description: "Заполните форму партнера и расскажите о своем бизнесе",
    },
    {
      step: "2",
      title: "Рассмотрение",
      description: "Наша команда рассмотрит заявку в течение 3 рабочих дней",
    },
    {
      step: "3",
      title: "Подписание договора",
      description: "Подписываем партнерское соглашение и настраиваем доступы",
    },
    {
      step: "4",
      title: "Обучение",
      description: "Проводим обучение вашей команды продуктам и продажам",
    },
    {
      step: "5",
      title: "Запуск продаж",
      description: "Начинаете продавать с полной поддержкой нашей команды",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Партнерская программа
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Присоединяйтесь к нашей партнерской программе и зарабатывайте на продаже инновационных AI-решений. Высокие
            комиссии, полная поддержка, растущий рынок.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Стать партнером
            </Button>
            <Button size="lg" variant="outline">
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Типы партнерства</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                  <div className="text-2xl font-bold text-purple-600">{type.commission}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Что включено:</h4>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <Badge variant="secondary" className="text-xs">
                      {type.ideal}
                    </Badge>
                  </div>
                  <Button className="w-full">Выбрать программу</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества партнерства</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как стать партнером</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && <ArrowRight className="h-6 w-6 text-gray-400 mt-3" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать зарабатывать?</h2>
          <p className="text-xl mb-8 opacity-90">
            Подайте заявку на партнерство и получите доступ к высокодоходному рынку AI-решений
          </p>
          <Button size="lg" variant="secondary">
            Подать заявку на партнерство
          </Button>
        </div>
      </section>
    </div>
  )
}
