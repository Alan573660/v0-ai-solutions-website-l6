import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Users, TrendingUp, CheckCircle, Store, Target } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Кейс X5 Retail Group: Омниканальный AI-помощник | AI Solutions",
  description:
    "Как X5 Retail Group внедрил единый голосовой интерфейс для Пятёрочки, Перекрёстка и Карусели. Рост заказов на 320%, сокращение времени доставки на 50%.",
  keywords:
    "X5 Retail Group AI, Пятёрочка искусственный интеллект, омниканальный ассистент, ритейл автоматизация, персонализация покупок",
  openGraph: {
    title: "X5 Retail Group: Омниканальный AI-помощник",
    description: "Единый голосовой интерфейс для всех форматов с персонализированными рекомендациями",
    images: ["/modern-retail-chain-store-with-ai-technology.jpg"],
  },
}

interface X5CasePageProps {
  params: Promise<{ locale: Locale }>
}

export default async function X5CasePage({ params }: X5CasePageProps) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-red-600 text-white border-0 text-sm px-4 py-2">Розничная торговля</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white text-balance">
              X5 Retail Group: Омниканальный AI-помощник
            </h1>
            <p className="text-xl lg:text-2xl text-red-100 text-pretty">
              Единый голосовой интерфейс для Пятёрочки, Перекрёстка и Карусели с персонализированными рекомендациями для
              15 миллионов покупателей
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">+320%</div>
                <div className="text-red-200">Рост онлайн-заказов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <Truck className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">-50%</div>
                <div className="text-red-200">Время доставки</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">+45%</div>
                <div className="text-red-200">Удержание клиентов</div>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">О компании X5 Retail Group</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                X5 Retail Group — ведущая российская продовольственная розничная компания, управляющая сетями
                «Пятёрочка», «Перекрёсток» и «Карусель». Обслуживает более 15 миллионов покупателей ежедневно.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <Store className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-900">18,000+</div>
                  <div className="text-sm text-red-700">Магазинов</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-900">15М</div>
                  <div className="text-sm text-red-700">Покупателей</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <Target className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-900">3,000+</div>
                  <div className="text-sm text-red-700">Городов</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-900">₹2.1</div>
                  <div className="text-sm text-red-700">Трлн оборот</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-retail-chain-store-with-ai-technology.jpg"
                alt="Современный магазин розничной сети с AI-технологиями"
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
                  <CardTitle className="text-red-700">Разрозненные каналы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Каждый формат (Пятёрочка, Перекрёсток, Карусель) имел собственную систему заказов, что создавало
                    путаницу для клиентов и усложняло управление.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Низкая персонализация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Отсутствие единой системы рекомендаций приводило к низкой конверсии и неэффективному использованию
                    данных о покупательских предпочтениях.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Сложность доставки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Координация доставки между разными форматами и оптимизация маршрутов требовала значительных ресурсов
                    и времени.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Программа лояльности</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Разные программы лояльности для каждого формата снижали эффективность маркетинговых кампаний и
                    клиентский опыт.
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
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Единая омниканальная платформа</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Создали единый голосовой интерфейс, объединяющий все форматы X5 с возможностью заказа товаров из
                    любой сети через один канал.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Интеграция с системами всех форматов
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Единая корзина для разных магазинов
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Кросс-продажи между форматами
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">AI-персонализация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Внедрили систему машинного обучения для анализа покупательского поведения и предоставления
                    персонализированных рекомендаций.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Анализ истории покупок
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Сезонные и трендовые рекомендации
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Динамическое ценообразование
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">Умная логистика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    AI-система оптимизирует маршруты доставки, управляет складскими запасами и предсказывает спрос для
                    каждого региона.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Оптимизация маршрутов доставки
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Прогнозирование спроса
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Автоматическое пополнение запасов
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">Достигнутые результаты</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">+320%</div>
                <div className="text-gray-600">Рост онлайн-заказов</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">-50%</div>
                <div className="text-gray-600">Время доставки</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">+45%</div>
                <div className="text-gray-600">Удержание клиентов</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">₽8.5М</div>
                <div className="text-gray-600">Экономия в месяц</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
                <div className="text-gray-600">Точность рекомендаций</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">500К</div>
                <div className="text-gray-600">Заказов в день</div>
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
                  duration: "3 месяца",
                  title: "Интеграция систем",
                  description: "Объединение IT-систем всех форматов, создание единой базы товаров и клиентов",
                },
                {
                  phase: "Фаза 2",
                  duration: "4 месяца",
                  title: "Разработка AI-платформы",
                  description: "Создание системы персонализации, обучение моделей на исторических данных",
                },
                {
                  phase: "Фаза 3",
                  duration: "2 месяца",
                  title: "Пилотное тестирование",
                  description: "Запуск в 100 магазинах Москвы, тестирование логистических процессов",
                },
                {
                  phase: "Фаза 4",
                  duration: "6 месяцев",
                  title: "Масштабирование",
                  description: "Поэтапное развертывание по всей сети, обучение персонала, оптимизация",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{step.phase}</h3>
                      <Badge variant="outline" className="text-red-600 border-red-600">
                        {step.duration}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-medium text-red-700 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
              Готовы создать омниканальный опыт?
            </h2>
            <p className="text-xl text-red-100 text-pretty">
              Объедините все каналы продаж с помощью AI и увеличьте лояльность клиентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-white text-red-900 hover:bg-gray-100">
                <Link href={`/${locale}/contacts`}>Получить консультацию</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-900 bg-transparent"
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
