import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Star, CheckCircle, Banknote, PieChart, Building } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Кейс ВТБ: Персональный банковский консультант с AI | AI Solutions",
  description:
    "Как ВТБ внедрил AI-консультанта для 20М клиентов с поддержкой банковских операций, инвестиций и кредитных продуктов. Рост транзакций на 250%, удовлетворенность 4.7/5.",
  keywords:
    "ВТБ AI, банковский консультант искусственный интеллект, персональный банкинг AI, инвестиционные рекомендации AI, цифровой банкинг",
  openGraph: {
    title: "ВТБ: Персональный банковский консультант с AI",
    description: "AI-консультант помогает клиентам с банковскими операциями, инвестициями и кредитными продуктами",
    images: ["/modern-bank-branch-with-ai-consultant-technology.jpg"],
  },
}

interface VTBCasePageProps {
  params: Promise<{ locale: Locale }>
}

export default async function VTBCasePage({ params }: VTBCasePageProps) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-blue-600 text-white border-0 text-sm px-4 py-2">Банковский сектор</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white text-balance">
              ВТБ: Персональный банковский консультант
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 text-pretty">
              AI-консультант помогает 20 миллионам клиентов с банковскими операциями, инвестициями и кредитными
              продуктами через 1000+ офисов
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">+250%</div>
                <div className="text-blue-200">Рост транзакций</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">4.7/5</div>
                <div className="text-blue-200">Удовлетворенность</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <PieChart className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">+120%</div>
                <div className="text-blue-200">Продажи продуктов</div>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">О банке ВТБ</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Банк ВТБ — один из ведущих универсальных банков России, предоставляющий широкий спектр банковских услуг
                корпоративным и частным клиентам. Обслуживает более 20 миллионов клиентов через сеть из 1000+ офисов.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">20М</div>
                  <div className="text-sm text-blue-700">Клиентов</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">1,000+</div>
                  <div className="text-sm text-blue-700">Офисов</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Banknote className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">₽18</div>
                  <div className="text-sm text-blue-700">трлн активов</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">#2</div>
                  <div className="text-sm text-blue-700">Банк России</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-bank-branch-with-ai-consultant-technology.jpg"
                alt="Современное отделение банка с AI-консультантом"
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
                  <CardTitle className="text-red-700">Сложность продуктов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Широкая линейка банковских и инвестиционных продуктов требовала высококвалифицированных
                    консультантов для персональных рекомендаций.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Время ожидания</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Клиенты ожидали консультации по инвестициям и кредитам до 40 минут, что снижало удовлетворенность и
                    конверсию в продажи.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Персонализация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Отсутствие персонализированных рекомендаций на основе финансового профиля клиента приводило к низкой
                    эффективности продаж.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Цифровая трансформация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Необходимость предоставления банковских услуг в цифровом формате с сохранением качества
                    персонального обслуживания.
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
                  <CardTitle className="text-blue-700">Персональный AI-консультант</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Создали интеллектуального банковского консультанта, который анализирует финансовый профиль клиента и
                    предоставляет персонализированные рекомендации.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Анализ финансового поведения клиента
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Персонализированные инвестиционные портфели
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Рекомендации по кредитным продуктам
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-700">Инвестиционный помощник</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    AI-система анализирует рыночные тренды, риск-профиль клиента и предлагает оптимальные инвестиционные
                    стратегии.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Анализ рыночных трендов в реальном времени
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Автоматическая ребалансировка портфеля
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Уведомления о важных рыночных событиях
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-700">Умное кредитование</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Система мгновенно оценивает кредитоспособность, подбирает оптимальные условия кредитования и
                    автоматизирует процесс одобрения.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Мгновенная оценка кредитоспособности
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Персонализированные процентные ставки
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Автоматическое оформление документов
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
                <div className="text-4xl font-bold text-blue-600 mb-2">+250%</div>
                <div className="text-gray-600">Рост транзакций</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">4.7/5</div>
                <div className="text-gray-600">Удовлетворенность клиентов</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">+120%</div>
                <div className="text-gray-600">Продажи продуктов</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">₽15М</div>
                <div className="text-gray-600">Экономия в месяц</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">-80%</div>
                <div className="text-gray-600">Время обслуживания</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
                <div className="text-gray-600">Точность рекомендаций</div>
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
                  title: "Анализ и интеграция",
                  description:
                    "Изучение банковских процессов, интеграция с core-banking системой, анализ клиентских данных",
                },
                {
                  phase: "Фаза 2",
                  duration: "4 месяца",
                  title: "Разработка AI-платформы",
                  description: "Создание персонального консультанта, обучение на исторических данных клиентов",
                },
                {
                  phase: "Фаза 3",
                  duration: "1 месяц",
                  title: "Пилотное тестирование",
                  description: "Запуск в 50 отделениях Москвы, тестирование с VIP-клиентами",
                },
                {
                  phase: "Фаза 4",
                  duration: "6 месяцев",
                  title: "Масштабирование",
                  description:
                    "Развертывание во всех 1000+ офисах, обучение персонала, интеграция с мобильным приложением",
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
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
              Готовы персонализировать банковские услуги?
            </h2>
            <p className="text-xl text-blue-100 text-pretty">
              Создайте AI-консультанта для ваших клиентов и увеличьте продажи банковских продуктов
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
