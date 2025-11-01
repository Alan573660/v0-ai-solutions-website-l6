import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Wifi, Users, TrendingUp, Star, CheckCircle, Settings } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Кейс Ростелеком: AI техподдержка нового поколения | AI Solutions",
  description:
    "Как Ростелеком внедрил AI-систему для диагностики проблем и техподдержки 42М абонентов. Повышение разрешения проблем на 85%, сокращение времени на 75%.",
  keywords:
    "Ростелеком AI, телеком искусственный интеллект, техподдержка автоматизация, диагностика сети AI, телекоммуникации ассистент",
  openGraph: {
    title: "Ростелеком: Техподдержка нового поколения с AI",
    description: "AI-система диагностирует проблемы, управляет заявками и предоставляет техническую поддержку",
    images: ["/modern-telecom-support-center-with-ai-technology.jpg"],
  },
}

interface RostelecomCasePageProps {
  params: Promise<{ locale: Locale }>
}

export default async function RostelecomCasePage({ params }: RostelecomCasePageProps) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-cyan-600 text-white border-0 text-sm px-4 py-2">Телекоммуникации</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white text-balance">
              Ростелеком: Техподдержка нового поколения
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 text-pretty">
              AI-система диагностирует проблемы, управляет заявками и предоставляет техническую поддержку 42 миллионам
              абонентов в 85 регионах России
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">+85%</div>
                <div className="text-blue-200">Разрешение проблем</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <Phone className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">-75%</div>
                <div className="text-blue-200">Время обработки</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <Settings className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">-60%</div>
                <div className="text-blue-200">Снижение затрат</div>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">О компании Ростелеком</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ПАО «Ростелеком» — крупнейший российский провайдер цифровых услуг и решений, обслуживающий более 42
                миллионов абонентов в 85 регионах России. Компания предоставляет услуги фиксированной и мобильной связи,
                интернета и цифрового ТВ.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <Users className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-900">42М</div>
                  <div className="text-sm text-cyan-700">Абонентов</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <Wifi className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-900">85</div>
                  <div className="text-sm text-cyan-700">Регионов</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <Settings className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-900">500К</div>
                  <div className="text-sm text-cyan-700">км ВОЛС</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <Star className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-900">#1</div>
                  <div className="text-sm text-cyan-700">В России</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-telecom-support-center-with-ai-technology.jpg"
                alt="Современный центр техподдержки с AI-технологиями"
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
                  <CardTitle className="text-red-700">Высокая нагрузка на колл-центр</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ежедневно поступало более 150,000 обращений, 70% из которых составляли типовые технические вопросы,
                    отвлекающие специалистов от сложных задач.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Сложная диагностика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Диагностика проблем с интернетом, ТВ и телефонией требовала участия нескольких специалистов и
                    занимала до 45 минут на одно обращение.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Региональные особенности</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Различия в инфраструктуре и оборудовании в 85 регионах усложняли стандартизацию процессов
                    технической поддержки.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Время простоя</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Длительное время решения технических проблем приводило к снижению удовлетворенности клиентов и
                    потере доходов от простоя услуг.
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
              <Card className="border-l-4 border-l-cyan-500">
                <CardHeader>
                  <CardTitle className="text-cyan-700">Интеллектуальная диагностика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    AI-система автоматически диагностирует проблемы с оборудованием, анализирует качество сигнала и
                    определяет причины неисправностей.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Удаленная диагностика оборудования
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Анализ качества сигнала в реальном времени
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Предиктивное обнаружение проблем
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-cyan-500">
                <CardHeader>
                  <CardTitle className="text-cyan-700">Голосовой технический ассистент</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Многоуровневый AI-ассистент обрабатывает технические запросы, проводит пошаговую диагностику и
                    решает проблемы без участия оператора.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Пошаговые инструкции по устранению неисправностей
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Автоматическая перезагрузка оборудования
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Эскалация сложных случаев к специалистам
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-cyan-500">
                <CardHeader>
                  <CardTitle className="text-cyan-700">Система управления заявками</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    AI автоматически классифицирует обращения, определяет приоритет и направляет к соответствующим
                    специалистам с полным контекстом проблемы.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Автоматическая категоризация обращений
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Интеллектуальная маршрутизация заявок
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Отслеживание SLA и уведомления
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">Достигнутые результаты</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-cyan-600 mb-2">+85%</div>
                <div className="text-gray-600">Разрешение проблем</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">-75%</div>
                <div className="text-gray-600">Время обработки</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">-60%</div>
                <div className="text-gray-600">Снижение затрат</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">₽12М</div>
                <div className="text-gray-600">Экономия в месяц</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.6/5</div>
                <div className="text-gray-600">Оценка качества</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">150К</div>
                <div className="text-gray-600">Обращений в день</div>
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
                  title: "Анализ инфраструктуры",
                  description: "Изучение технических систем, интеграция с OSS/BSS, создание базы знаний",
                },
                {
                  phase: "Фаза 2",
                  duration: "4 месяца",
                  title: "Разработка AI-системы",
                  description: "Создание модулей диагностики, обучение на исторических данных техподдержки",
                },
                {
                  phase: "Фаза 3",
                  duration: "2 месяца",
                  title: "Пилотное внедрение",
                  description: "Тестирование в 5 регионах, обучение операторов, настройка процессов",
                },
                {
                  phase: "Фаза 4",
                  duration: "8 месяцев",
                  title: "Масштабирование",
                  description: "Поэтапное развертывание во всех 85 регионах, адаптация под местную специфику",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{step.phase}</h3>
                      <Badge variant="outline" className="text-cyan-600 border-cyan-600">
                        {step.duration}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-medium text-cyan-700 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
              Готовы автоматизировать техподдержку?
            </h2>
            <p className="text-xl text-cyan-100 text-pretty">
              Внедрите AI-систему диагностики и сократите нагрузку на операторов на 75%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-white text-cyan-900 hover:bg-gray-100">
                <Link href={`/${locale}/contacts`}>Получить консультацию</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-900 bg-transparent"
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
