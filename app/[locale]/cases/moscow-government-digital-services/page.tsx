import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Building2, Users, TrendingUp, Clock, CheckCircle, Phone, Mail, Shield, Zap } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Кейс Правительство Москвы: Цифровизация госуслуг с AI | AI Solutions",
  description:
    "Узнайте, как Правительство Москвы сократило время обработки обращений на 70% и повысило удовлетворенность граждан до 94% с помощью AI-ассистентов.",
  keywords: "Правительство Москвы, госуслуги, цифровизация, AI-ассистент, автоматизация, электронное правительство",
  openGraph: {
    title: "Кейс Правительство Москвы: Цифровизация госуслуг с AI",
    description: "Как столичное правительство революционизировало предоставление госуслуг с помощью AI Solutions",
    images: ["/moscow-government-digital-services-center.jpg"],
  },
}

export default function MoscowGovernmentCasePage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header locale={params.locale} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href={`/${params.locale}/cases`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться к кейсам
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Государственный сектор</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Правительство Москвы: Цифровизация госуслуг
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Как столичное правительство сократило время обработки обращений на 70% и повысило качество госуслуг с
                помощью AI-ассистентов
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">-70%</div>
                  <div className="text-sm text-gray-600">Время обработки</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
                  <div className="text-sm text-gray-600">Удовлетворенность</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Доступность</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
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
                src="/moscow-government-digital-services-center.jpg"
                alt="Центр госуслуг Москвы с AI-технологиями"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">О Правительстве Москвы</h3>
                <p className="text-gray-600">
                  Исполнительный орган государственной власти города Москвы, обслуживающий более 12 миллионов жителей
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Масштаб услуг</h3>
                <p className="text-gray-600">Более 300 видов госуслуг, 150+ МФЦ, обработка 50+ млн обращений в год</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Цифровая трансформация</h3>
                <p className="text-gray-600">
                  Лидер в области цифровизации госуслуг и внедрения инновационных технологий
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Вызовы цифровизации</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Правительство Москвы столкнулось с необходимостью кардинального улучшения качества госуслуг
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Долгие очереди</h3>
                <p className="text-sm text-gray-600">Среднее время ожидания в МФЦ составляло 2-3 часа</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Нагрузка на сотрудников</h3>
                <p className="text-sm text-gray-600">Перегруженность персонала типовыми запросами</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Низкая доступность</h3>
                <p className="text-sm text-gray-600">Ограниченные часы работы и географическая доступность</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Бюрократические процессы</h3>
                <p className="text-sm text-gray-600">Сложные процедуры и множество документов</p>
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
              Комплексная платформа AI-ассистентов для автоматизации госуслуг
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Умные AI-ассистенты для госсектора</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Автоматическая обработка заявлений</h4>
                    <p className="text-gray-600">
                      AI анализирует документы и автоматически обрабатывает типовые запросы
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Голосовые консультации 24/7</h4>
                    <p className="text-gray-600">Круглосуточная поддержка граждан по всем вопросам госуслуг</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Интеллектуальная маршрутизация</h4>
                    <p className="text-gray-600">Автоматическое направление обращений к нужным специалистам</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Предиктивная аналитика</h4>
                    <p className="text-gray-600">Прогнозирование нагрузки и оптимизация ресурсов</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-6 text-center">Технические характеристики</h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Точность обработки документов</span>
                  <span className="font-semibold">99.2%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Время отклика системы</span>
                  <span className="font-semibold">&lt;0.5 сек</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Поддерживаемые форматы</span>
                  <span className="font-semibold">50+</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Уровень безопасности</span>
                  <span className="font-semibold">ГОСТ Р</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Доступность системы</span>
                  <span className="font-semibold">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Достигнутые результаты</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Внедрение AI-ассистентов кардинально улучшило качество предоставления госуслуг
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">-70%</div>
              <div className="text-blue-100 mb-2">Время обработки</div>
              <div className="text-sm text-blue-200">С 5 дней до 1.5 дня</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">94%</div>
              <div className="text-blue-100 mb-2">Удовлетворенность</div>
              <div className="text-sm text-blue-200">Граждан качеством услуг</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">+300%</div>
              <div className="text-blue-100 mb-2">Онлайн-обращения</div>
              <div className="text-sm text-blue-200">Рост цифровых услуг</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">-40%</div>
              <div className="text-blue-100 mb-2">Операционные расходы</div>
              <div className="text-sm text-blue-200">На обработку обращений</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Этапы цифровой трансформации</h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Аудит и стратегия (4 недели)</h3>
                <p className="text-gray-600">
                  Анализ текущих процессов, определение приоритетных направлений цифровизации
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Пилотный проект (8 недель)</h3>
                <p className="text-gray-600">Запуск в 10 МФЦ, тестирование AI-ассистентов на базовых услугах</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Масштабирование (16 недель)</h3>
                <p className="text-gray-600">Внедрение во всех 150+ МФЦ и интеграция с порталом госуслуг</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Развитие и оптимизация (постоянно)</h3>
                <p className="text-gray-600">Добавление новых услуг, улучшение алгоритмов, техподдержка 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Безопасность и соответствие требованиям
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-blue-200">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">ГОСТ Р соответствие</h3>
                <p className="text-sm text-gray-600">
                  Полное соответствие российским стандартам информационной безопасности
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Защита персональных данных</h3>
                <p className="text-sm text-gray-600">Сертифицированная система защиты ПДн в соответствии с 152-ФЗ</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Импортозамещение</h3>
                <p className="text-sm text-gray-600">100% российская разработка, включена в реестр отечественного ПО</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Готовы к цифровой трансформации?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Узнайте, как AI Solutions может помочь вашей организации повысить качество госуслуг и удовлетворенность
            граждан
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              Обсудить ваш проект
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              <Mail className="w-4 h-4 mr-2" />
              Получить коммерческое предложение
            </Button>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Бесплатная консультация • Соответствие ГОСТ Р • Техподдержка 24/7
          </div>
        </div>
      </section>
    </div>
  )
}
