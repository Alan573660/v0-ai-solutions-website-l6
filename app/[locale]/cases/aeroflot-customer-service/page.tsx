import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Clock, Users, TrendingUp, Star, CheckCircle, Plane, MapPin } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Кейс Аэрофлот: AI-ассистент для авиапассажиров | AI Solutions",
  description:
    "Как Аэрофлот внедрил многоязычного AI-ассистента для обработки бронирований и поддержки 35М пассажиров в год. Рост бронирований на 190%, поддержка 24/7 на 15 языках.",
  keywords:
    "Аэрофлот AI, авиакомпания искусственный интеллект, бронирование билетов AI, многоязычный ассистент, авиация автоматизация",
  openGraph: {
    title: "Аэрофлот: Умный помощник пассажиров с AI",
    description:
      "Многоязычный AI-ассистент обрабатывает бронирования, изменения рейсов и отвечает на вопросы пассажиров",
    images: ["/modern-airport-terminal-with-ai-assistant.jpg"],
  },
}

interface AeroflotCasePageProps {
  params: Promise<{ locale: Locale }>
}

export default async function AeroflotCasePage({ params }: AeroflotCasePageProps) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-sky-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-blue-600 text-white border-0 text-sm px-4 py-2">Авиационная отрасль</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white text-balance">
              Аэрофлот: Умный помощник пассажиров
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 text-pretty">
              Многоязычный AI-ассистент обрабатывает бронирования, изменения рейсов и отвечает на вопросы 35 миллионов
              пассажиров в год
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">+190%</div>
                <div className="text-blue-200">Рост бронирований</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-200">Круглосуточная поддержка</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <Globe className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">15</div>
                <div className="text-blue-200">Языков поддержки</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">О компании Аэрофлот</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ПАО «Аэрофлот» — крупнейшая авиакомпания России и одна из ведущих авиакомпаний мира. Флагманский
                перевозчик страны обслуживает 146 направлений в 52 странах мира.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">35М</div>
                  <div className="text-sm text-blue-700">Пассажиров в год</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Plane className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">350+</div>
                  <div className="text-sm text-blue-700">Самолётов в парке</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">146</div>
                  <div className="text-sm text-blue-700">Направлений</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">4★</div>
                  <div className="text-sm text-blue-700">Рейтинг Skytrax</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-airport-terminal-with-ai-assistant.jpg"
                alt="Современный терминал аэропорта с AI-ассистентом"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">Вызовы и задачи</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Многоязычная поддержка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Необходимость обслуживания международных пассажиров на их родных языках создавала высокие затраты на
                    персонал и ограничивала качество сервиса.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Сложность бронирований</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Обработка изменений рейсов, возвратов билетов и сложных маршрутов требовала значительного времени
                    операторов.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Пиковые нагрузки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    В периоды высокого спроса (праздники, отпускной сезон) время ожидания в колл-центре достигало 45
                    минут.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Информационные запросы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    80% звонков составляли типовые вопросы о статусе рейса, багаже и услугах, отвлекая операторов от
                    сложных задач.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">Решение AI Solutions</h2>
            <div className="space-y-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-700">Многоязычный AI-ассистент</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Внедрили голосового ассистента с поддержкой 15 языков, включая русский, английский, китайский,
                    арабский и европейские языки.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Автоматическое определение языка
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Культурная адаптация диалогов
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Поддержка местных валют и форматов
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-700">Интеллектуальное бронирование</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    AI-система обрабатывает сложные запросы на бронирование, изменения и возвраты с интеграцией в
                    систему Amadeus.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Поиск оптимальных маршрутов
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Автоматическое переоформление билетов
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Управление программой лояльности
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-700">Проактивные уведомления</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Система автоматически информирует пассажиров об изменениях рейсов, задержках и предлагает
                    альтернативные варианты.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      SMS и email уведомления
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Push-уведомления в мобильном приложении
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Персональные рекомендации
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">Достигнутые результаты</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">+190%</div>
                <div className="text-gray-600">Рост онлайн-бронирований</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">-75%</div>
                <div className="text-gray-600">Сокращение времени ожидания</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">4.7/5</div>
                <div className="text-gray-600">Оценка качества сервиса</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">₽2.8М</div>
                <div className="text-gray-600">Экономия в месяц</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">85%</div>
                <div className="text-gray-600">Автоматизация запросов</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">15</div>
                <div className="text-gray-600">Языков поддержки</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">Этапы внедрения</h2>
            <div className="space-y-8">
              {[
                {
                  phase: "Фаза 1",
                  duration: "2 месяца",
                  title: "Анализ и проектирование",
                  description: "Изучение бизнес-процессов, интеграция с Amadeus, разработка многоязычной модели",
                },
                {
                  phase: "Фаза 2",
                  duration: "3 месяца",
                  title: "Разработка и тестирование",
                  description: "Создание AI-ассистента, обучение на исторических данных, тестирование на 15 языках",
                },
                {
                  phase: "Фаза 3",
                  duration: "1 месяц",
                  title: "Пилотное внедрение",
                  description: "Запуск для VIP-клиентов и международных рейсов, сбор обратной связи",
                },
                {
                  phase: "Фаза 4",
                  duration: "2 недели",
                  title: "Полный запуск",
                  description: "Развертывание для всех пассажиров, обучение персонала, мониторинг качества",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{step.phase}</h3>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {step.duration}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-medium text-blue-700 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
              Готовы трансформировать клиентский сервис?
            </h2>
            <p className="text-xl text-blue-100 text-pretty">
              Создайте многоязычного AI-ассистента для вашей компании и повысьте удовлетворенность клиентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href={`/${locale}/contacts`}>Получить консультацию</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                asChild
              >
                <Link href={`/${locale}/platform/demo`}>Посмотреть демо</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
