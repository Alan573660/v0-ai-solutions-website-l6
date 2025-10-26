"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TrendingUp, Users, Clock, DollarSign, Phone, Shield, Zap } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"
import { useParams } from "next/navigation"

export default function ClientSberbankCasePage() {
  const { locale } = useParams() as { locale: Locale }
  const { openModal } = useCTA()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button
              asChild
              variant="outline"
              className="mb-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href={`/${locale}/cases`} className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Все кейсы
              </Link>
            </Button>
            <div className="space-y-6">
              <Badge className="bg-green-600 text-white border-0 text-sm px-4 py-2">Банковский сектор</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white text-balance">
                Сбербанк: Автоматизация 85% клиентских запросов
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 text-pretty max-w-3xl">
                Как крупнейший банк России сократил время обработки запросов с часов до секунд и повысил
                удовлетворенность клиентов на 350%
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-8 w-8 text-green-400" />
                    <div>
                      <div className="text-3xl font-bold text-white">+350%</div>
                      <div className="text-sm text-green-200">Рост эффективности</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-8 w-8 text-yellow-400" />
                    <div>
                      <div className="text-3xl font-bold text-white">₽180М</div>
                      <div className="text-sm text-green-200">Экономия в год</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-blue-400" />
                    <div>
                      <div className="text-3xl font-bold text-white">4.9/5</div>
                      <div className="text-sm text-green-200">Оценка клиентов</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">О компании</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  ПАО Сбербанк — крупнейший банк России и один из ведущих глобальных финансовых институтов. Обслуживает
                  более 100 миллионов клиентов в 22 странах мира.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">100М+</div>
                    <div className="text-sm text-gray-600">Клиентов</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">14,000+</div>
                    <div className="text-sm text-gray-600">Офисов</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">22</div>
                    <div className="text-sm text-gray-600">Страны</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">₽38 трлн</div>
                    <div className="text-sm text-gray-600">Активы</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/sberbank-headquarters-modern-building.jpg"
                  alt="Штаб-квартира Сбербанка"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">Вызовы и задачи</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Clock className="mr-3 h-6 w-6" />
                    Длительное время ожидания
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Клиенты ожидали ответа оператора до 15-20 минут в пиковые часы, что приводило к снижению
                    удовлетворенности и оттоку клиентов.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Users className="mr-3 h-6 w-6" />
                    Высокая нагрузка на операторов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    85% запросов были типовыми (баланс, переводы, блокировка карт), но требовали участия живых
                    операторов.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <DollarSign className="mr-3 h-6 w-6" />
                    Высокие операционные расходы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Содержание call-центра с 5000+ операторов обходилось в ₽2.5 млрд в год, при этом эффективность
                    оставалась низкой.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Phone className="mr-3 h-6 w-6" />
                    Ограниченные часы работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Поддержка работала только в рабочие часы, что не соответствовало потребностям клиентов в 24/7
                    сервисе.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">Решение от AI Solutions</h2>
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600 text-xl">
                    <Zap className="mr-3 h-6 w-6" />
                    Интеллектуальный голосовой ассистент
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Внедрили AI-ассистента, способного обрабатывать 85% типовых запросов клиентов без участия
                    операторов. Система интегрирована с банковскими системами и обеспечивает мгновенные ответы 24/7.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-lg font-bold text-green-600">2.5М</div>
                      <div className="text-sm text-gray-600">Звонков/месяц</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-lg font-bold text-green-600">15 сек</div>
                      <div className="text-sm text-gray-600">Среднее время ответа</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-lg font-bold text-green-600">99.9%</div>
                      <div className="text-sm text-gray-600">Доступность</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600">
                      <Shield className="mr-3 h-6 w-6" />
                      Безопасность и соответствие
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Многофакторная аутентификация</li>
                      <li>• Соответствие требованиям ЦБ РФ</li>
                      <li>• Шифрование данных по ГОСТ</li>
                      <li>• Аудит всех операций</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-600">
                      <Users className="mr-3 h-6 w-6" />
                      Интеграция с системами
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Интеграция с АБС Сбербанка</li>
                      <li>• Подключение к CRM системе</li>
                      <li>• Синхронизация с мобильным приложением</li>
                      <li>• API для внешних сервисов</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">Достигнутые результаты</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">+350%</div>
                <div className="text-gray-600">Рост эффективности обработки запросов</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-600">Автоматизированных запросов</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">₽180М</div>
                <div className="text-gray-600">Экономия в год</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Удовлетворенность клиентов</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-600">Операционные показатели</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Время ответа:</span>
                    <span className="font-semibold">15 секунд (было 15-20 минут)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Решение с первого обращения:</span>
                    <span className="font-semibold">92% (было 65%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Доступность сервиса:</span>
                    <span className="font-semibold">24/7 (было 8:00-20:00)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Обработанных запросов:</span>
                    <span className="font-semibold">2.5М в месяц</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Финансовые результаты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Сокращение расходов:</span>
                    <span className="font-semibold">70% (₽180М в год)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI проекта:</span>
                    <span className="font-semibold">450% за 18 месяцев</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Окупаемость:</span>
                    <span className="font-semibold">4 месяца</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Рост выручки:</span>
                    <span className="font-semibold">₽2.1 млрд (улучшение сервиса)</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">Этапы реализации проекта</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Анализ и планирование (1 месяц)</h3>
                  <p className="text-gray-600">
                    Аудит существующих процессов, анализ типовых запросов, разработка технических требований и
                    архитектуры решения.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Разработка и интеграция (3 месяца)</h3>
                  <p className="text-gray-600">
                    Создание AI-модели, обучение на данных Сбербанка, интеграция с банковскими системами, настройка
                    безопасности.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Пилотное тестирование (1 месяц)</h3>
                  <p className="text-gray-600">
                    Запуск в тестовом режиме для 10% клиентов, сбор обратной связи, оптимизация алгоритмов и исправление
                    ошибок.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Полный запуск (1 месяц)</h3>
                  <p className="text-gray-600">
                    Поэтапное масштабирование на всех клиентов, обучение операторов, настройка мониторинга и аналитики.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
              Готовы повторить успех Сбербанка?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-green-100 text-pretty">
              Получите персональную консультацию и узнайте, как AI-решения могут трансформировать ваш бизнес
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                className="bg-white text-green-900 hover:bg-gray-100 font-semibold w-full sm:w-auto h-12"
                onClick={() => openModal("consultation")}
              >
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-900 font-semibold bg-transparent w-full sm:w-auto h-12"
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
