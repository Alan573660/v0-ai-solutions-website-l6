import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Building2, Users, TrendingUp, Clock, CheckCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Кейс Магнит: Революция в розничной торговле с AI-ассистентами | AI Solutions",
  description:
    "Узнайте, как Магнит увеличил продажи на 35% и сократил время обслуживания на 60% с помощью голосовых AI-ассистентов от AI Solutions.",
  keywords:
    "Магнит, розничная торговля, AI-ассистент, голосовые технологии, автоматизация продаж, увеличение конверсии",
  openGraph: {
    title: "Кейс Магнит: Революция в розничной торговле с AI-ассистентами",
    description: "Как крупнейшая розничная сеть России увеличила продажи на 35% с помощью AI Solutions",
    images: ["/magnit-store-interior-with-ai-voice-assistant.jpg"],
  },
}

export default function MagnitCasePage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <Header locale={params.locale} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href={`/${params.locale}/cases`}
              className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться к кейсам
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">Розничная торговля</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Магнит: Революция в розничной торговле
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Как крупнейшая розничная сеть России увеличила продажи на 35% и улучшила клиентский опыт с помощью
                AI-ассистентов
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">+35%</div>
                  <div className="text-sm text-gray-600">Рост продаж</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">-60%</div>
                  <div className="text-sm text-gray-600">Время обслуживания</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">92%</div>
                  <div className="text-sm text-gray-600">Удовлетворенность</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Обсудить проект
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Получить презентацию
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/magnit-store-interior-with-ai-voice-assistant.jpg"
                alt="Магазин Магнит с AI-ассистентом"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-red-200">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">О компании</h3>
                <p className="text-gray-600">
                  Магнит — крупнейшая розничная сеть России с более чем 27,000 магазинов и 450,000 сотрудников
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Масштаб</h3>
                <p className="text-gray-600">
                  Обслуживает более 25 миллионов покупателей ежедневно в 3,700 городах России
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Выручка</h3>
                <p className="text-gray-600">Годовая выручка превышает 2 трлн рублей, лидер российского ритейла</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Вызовы и проблемы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Магнит столкнулся с серьезными операционными вызовами в условиях растущей конкуренции
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-red-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Длинные очереди</h3>
                <p className="text-sm text-gray-600">Среднее время ожидания в кассе составляло 8-12 минут</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Нехватка персонала</h3>
                <p className="text-sm text-gray-600">Высокая текучесть кадров и сложности с наймом</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Упущенные продажи</h3>
                <p className="text-sm text-gray-600">Клиенты уходили из-за долгого обслуживания</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Операционные расходы</h3>
                <p className="text-sm text-gray-600">Растущие затраты на персонал и обучение</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Решение AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексная система AI-ассистентов для автоматизации розничных процессов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Голосовые AI-ассистенты для ритейла</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Автоматизация касс</h4>
                    <p className="text-gray-600">AI-ассистенты помогают кассирам быстрее обслуживать клиентов</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Консультации покупателей</h4>
                    <p className="text-gray-600">Голосовые помощники отвечают на вопросы о товарах и акциях</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Управление очередями</h4>
                    <p className="text-gray-600">Интеллектуальное распределение потока покупателей</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Аналитика продаж</h4>
                    <p className="text-gray-600">Реальное время анализа покупательского поведения</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-6 text-center">Технические характеристики</h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Точность распознавания речи</span>
                  <span className="font-semibold">98.5%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Время отклика</span>
                  <span className="font-semibold">&lt; 0.3 сек</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Поддерживаемые языки</span>
                  <span className="font-semibold">15+</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Интеграция с кассами</span>
                  <span className="font-semibold">100%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Время внедрения</span>
                  <span className="font-semibold">2-4 недели</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Достигнутые результаты</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Внедрение AI-ассистентов принесло значительные улучшения во всех ключевых метриках
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">+35%</div>
              <div className="text-red-100 mb-2">Рост продаж</div>
              <div className="text-sm text-red-200">За первые 6 месяцев</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">-60%</div>
              <div className="text-red-100 mb-2">Время обслуживания</div>
              <div className="text-sm text-red-200">С 8 до 3 минут</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">92%</div>
              <div className="text-red-100 mb-2">Удовлетворенность</div>
              <div className="text-sm text-red-200">Клиентов сервисом</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">-25%</div>
              <div className="text-red-100 mb-2">Операционные расходы</div>
              <div className="text-sm text-red-200">На персонал касс</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Этапы реализации проекта</h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Анализ и планирование (2 недели)</h3>
                <p className="text-gray-600">Аудит текущих процессов, определение точек внедрения AI-ассистентов</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Пилотное внедрение (4 недели)</h3>
                <p className="text-gray-600">Запуск в 50 пилотных магазинах, тестирование и оптимизация</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Масштабирование (12 недель)</h3>
                <p className="text-gray-600">Поэтапное внедрение во всех 27,000 магазинах сети</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Оптимизация и поддержка (постоянно)</h3>
                <p className="text-gray-600">Непрерывное улучшение алгоритмов и техническая поддержка 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Готовы революционизировать свой ритейл?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Узнайте, как AI Solutions может помочь вашей розничной сети достичь таких же впечатляющих результатов
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="w-4 h-4 mr-2" />
              Обсудить ваш проект
            </Button>
            <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
              <Mail className="w-4 h-4 mr-2" />
              Получить коммерческое предложение
            </Button>
          </div>

          <div className="mt-8 text-sm text-gray-500">Бесплатная консультация • Демо за 30 минут • ROI-калькулятор</div>
        </div>
      </section>
    </div>
  )
}
