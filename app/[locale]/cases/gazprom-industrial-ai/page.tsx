import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Shield, Activity, TrendingUp, Star, CheckCircle, Gauge } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Кейс Газпром: Промышленная автоматизация с AI | AI Solutions",
  description:
    "Как Газпром внедрил голосовое управление промышленными процессами и AI-мониторинг на 150+ объектах. Повышение эффективности на 180%, безопасности на 95%.",
  keywords:
    "Газпром AI, промышленная автоматизация, голосовое управление производством, AI мониторинг безопасности, энергетика искусственный интеллект",
  openGraph: {
    title: "Газпром: Промышленная автоматизация с AI",
    description: "Голосовое управление промышленными процессами, мониторинг оборудования и система безопасности",
    images: ["/modern-industrial-facility-with-ai-monitoring-syst.jpg"],
  },
}

interface GazpromCasePageProps {
  params: Promise<{ locale: Locale }>
}

export default async function GazpromCasePage({ params }: GazpromCasePageProps) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-blue-600 text-white border-0 text-sm px-4 py-2">Энергетика</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white text-balance">
              Газпром: Промышленная автоматизация с AI
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 text-pretty">
              Голосовое управление промышленными процессами, AI-мониторинг оборудования и система безопасности на 150+
              объектах с производством 500 млрд м³ газа в год
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">+180%</div>
                <div className="text-blue-200">Эффективность процессов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <Shield className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">+95%</div>
                <div className="text-blue-200">Безопасность</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <Activity className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-200">Мониторинг</div>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">О компании Газпром</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ПАО «Газпром» — крупнейшая энергетическая компания мира, обладающая самыми богатыми запасами природного
                газа. Компания занимается геологоразведкой, добычей, транспортировкой, хранением, переработкой и
                реализацией газа.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Factory className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">150+</div>
                  <div className="text-sm text-blue-700">Объектов</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Gauge className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">175К</div>
                  <div className="text-sm text-blue-700">км газопроводов</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">500</div>
                  <div className="text-sm text-blue-700">млрд м³/год</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">#1</div>
                  <div className="text-sm text-blue-700">В мире</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-industrial-facility-with-ai-monitoring-syst.jpg"
                alt="Современное промышленное предприятие с AI-мониторингом"
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
                  <CardTitle className="text-red-700">Сложность управления</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Управление сотнями промышленных объектов требовало постоянного присутствия высококвалифицированных
                    специалистов и сложных интерфейсов управления.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Критичность безопасности</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Работа с взрывоопасными веществами требует мгновенного реагирования на аварийные ситуации и
                    непрерывного мониторинга всех параметров.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Удаленные объекты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Многие производственные объекты находятся в труднодоступных районах, что усложняет оперативное
                    реагирование и техническое обслуживание.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Предиктивное обслуживание</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Необходимость предсказания отказов оборудования для предотвращения аварий и минимизации простоев
                    дорогостоящего оборудования.
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
                  <CardTitle className="text-blue-700">Голосовое управление процессами</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Внедрили систему голосового управления промышленными процессами, позволяющую операторам управлять
                    оборудованием без использования рук.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Голосовые команды для управления клапанами
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Речевые отчеты о состоянии оборудования
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Аварийные голосовые протоколы
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-700">AI-мониторинг безопасности</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Система искусственного интеллекта непрерывно анализирует тысячи параметров и предсказывает
                    потенциальные аварийные ситуации.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Мониторинг давления, температуры, вибрации
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Детекция утечек газа в реальном времени
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Автоматическое отключение при критических параметрах
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-700">Предиктивная аналитика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    AI-система анализирует исторические данные и предсказывает необходимость технического обслуживания
                    за 2-4 недели до потенциального отказа.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Прогнозирование износа оборудования
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Оптимизация графиков обслуживания
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Управление запасами запчастей
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
                <div className="text-4xl font-bold text-blue-600 mb-2">+180%</div>
                <div className="text-gray-600">Эффективность процессов</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">+95%</div>
                <div className="text-gray-600">Безопасность операций</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">-85%</div>
                <div className="text-gray-600">Незапланированные простои</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">₽45М</div>
                <div className="text-gray-600">Экономия в месяц</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">99.8%</div>
                <div className="text-gray-600">Время безотказной работы</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">150+</div>
                <div className="text-gray-600">Объектов под управлением</div>
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
                  duration: "4 месяца",
                  title: "Анализ и проектирование",
                  description: "Изучение промышленных процессов, требований безопасности, интеграция с SCADA-системами",
                },
                {
                  phase: "Фаза 2",
                  duration: "6 месяцев",
                  title: "Разработка AI-платформы",
                  description: "Создание системы голосового управления, обучение моделей предиктивной аналитики",
                },
                {
                  phase: "Фаза 3",
                  duration: "3 месяца",
                  title: "Пилотное внедрение",
                  description: "Тестирование на 5 ключевых объектах, сертификация систем безопасности",
                },
                {
                  phase: "Фаза 4",
                  duration: "12 месяцев",
                  title: "Масштабирование",
                  description: "Поэтапное развертывание на всех 150+ объектах, обучение персонала",
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
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
              Готовы автоматизировать производство?
            </h2>
            <p className="text-xl text-blue-100 text-pretty">
              Внедрите AI-систему управления и повысьте безопасность промышленных процессов
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
