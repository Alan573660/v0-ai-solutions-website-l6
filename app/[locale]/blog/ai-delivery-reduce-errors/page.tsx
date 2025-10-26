import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Package,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle,
  TrendingDown,
  BarChart3,
  Users,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "AI в доставке: Как сократить ошибки на 85% и ускорить логистику | AI Solutions",
  description:
    "Полное руководство по внедрению AI в логистику и доставку. Узнайте, как искусственный интеллект сокращает ошибки, оптимизирует маршруты и повышает удовлетворенность клиентов.",
  keywords:
    "AI доставка, искусственный интеллект логистика, автоматизация доставки, оптимизация маршрутов AI, умная логистика, AI курьерские службы, машинное обучение доставка",
  openGraph: {
    title: "AI в доставке: Как сократить ошибки на 85% и ускорить логистику",
    description:
      "Полное руководство по внедрению AI в логистику и доставку. Узнайте, как искусственный интеллект сокращает ошибки, оптимизирует маршруты и повышает удовлетворенность клиентов.",
    images: ["/logistics-ai-automation-delivery.jpg"],
  },
}

export default function AIDeliveryPage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Header locale={params.locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${params.locale}/blog`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться к блогу
          </Link>

          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">Логистика и AI</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI в доставке:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Сокращаем ошибки на 85%
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Комплексное руководство по внедрению искусственного интеллекта в логистику и доставку. Реальные кейсы,
              технологии и стратегии для оптимизации всей цепи поставок.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
            <Image
              src="/logistics-ai-automation-delivery.jpg"
              alt="AI-автоматизация в логистике и доставке"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-90">Дата публикации: 18 января 2025</p>
              <p className="text-sm opacity-90">Время чтения: 15 минут</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Key Statistics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ключевые показатели AI в логистике</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="border-l-4 border-l-red-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <TrendingDown className="w-5 h-5 mr-2 text-red-600" />
                    Сокращение ошибок
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600 mb-2">85%</div>
                  <p className="text-sm text-gray-600">в среднем по отрасли</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-600" />
                    Ускорение доставки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <p className="text-sm text-gray-600">сокращение времени</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                    Экономия затрат
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                  <p className="text-sm text-gray-600">операционных расходов</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    Удовлетворенность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
                  <p className="text-sm text-gray-600">клиентов довольны</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Революция в логистике: AI меняет правила игры</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Логистическая отрасль переживает кардинальную трансформацию. По данным McKinsey Global Institute,
                внедрение AI-технологий в логистику и доставку может сократить операционные затраты на 30-40% и повысить
                эффективность на 50-60%. В России рынок "умной логистики" растет на 25% ежегодно и к 2025 году достигнет
                $2.8 млрд.
              </p>
              <p className="mb-6">
                Основные драйверы роста — это необходимость обработки растущих объемов e-commerce заказов, повышение
                требований клиентов к скорости и точности доставки, а также острая нехватка квалифицированных кадров в
                логистике. AI-решения позволяют решить все эти проблемы одновременно.
              </p>
              <p className="mb-6">
                Согласно исследованию PwC 2024, компании, внедрившие AI в логистические процессы, сокращают количество
                ошибок на 85%, ускоряют доставку на 40% и повышают удовлетворенность клиентов до 92%. При этом ROI таких
                проектов составляет в среднем 320% за первые два года.
              </p>
            </div>
          </section>

          {/* AI Applications in Logistics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Применение AI в логистической цепи</h2>

            <div className="space-y-8">
              {/* Warehouse Management */}
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-700 flex items-center">
                    <Package className="w-6 h-6 mr-3" />
                    Управление складом
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    AI-системы управления складом (WMS) революционизируют процессы приемки, размещения, комплектации и
                    отгрузки товаров.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Ключевые возможности:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          Автоматическое планирование размещения товаров
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          Оптимизация маршрутов комплектовщиков
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          Предиктивная аналитика спроса
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          Автоматический контроль качества
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Результаты внедрения:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Сокращение времени комплектации на 60%</li>
                        <li>• Уменьшение ошибок на 90%</li>
                        <li>• Повышение использования площадей на 25%</li>
                        <li>• Снижение затрат на персонал на 35%</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">Кейс: Wildberries</h5>
                    <p className="text-orange-700 text-sm">
                      Внедрение AI-WMS на складах Wildberries позволило увеличить производительность на 45% и сократить
                      ошибки комплектации с 2.1% до 0.3%. Система обрабатывает более 2 млн заказов в день с точностью
                      99.7%.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Route Optimization */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700 flex items-center">
                    <MapPin className="w-6 h-6 mr-3" />
                    Оптимизация маршрутов
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    AI-алгоритмы маршрутизации учитывают сотни факторов для построения оптимальных маршрутов доставки в
                    режиме реального времени.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Факторы оптимизации:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                          Текущая дорожная ситуация и пробки
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                          Временные окна доставки клиентов
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                          Грузоподъемность и объем транспорта
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                          Приоритетность заказов
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Экономический эффект:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Сокращение пробега на 25-35%</li>
                        <li>• Экономия топлива до 30%</li>
                        <li>• Увеличение количества доставок на 40%</li>
                        <li>• Повышение точности доставки до 95%</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Кейс: Яндекс.Доставка</h5>
                    <p className="text-blue-700 text-sm">
                      AI-система маршрутизации Яндекс.Доставки обрабатывает более 500 тысяч заказов ежедневно, сокращая
                      время доставки на 35% и операционные затраты на 28%. Точность прогноза времени доставки составляет
                      92%.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Demand Forecasting */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-700 flex items-center">
                    <BarChart3 className="w-6 h-6 mr-3" />
                    Прогнозирование спроса
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Машинное обучение анализирует исторические данные, сезонность, тренды и внешние факторы для точного
                    прогнозирования спроса.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Источники данных:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          История продаж и возвратов
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          Сезонные колебания и праздники
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          Маркетинговые кампании
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          Внешние факторы (погода, события)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Преимущества:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Точность прогнозов до 95%</li>
                        <li>• Сокращение избыточных запасов на 40%</li>
                        <li>• Уменьшение дефицита на 60%</li>
                        <li>• Оптимизация закупок и логистики</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Service */}
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-700 flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    Клиентский сервис
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    AI-ассистенты обрабатывают запросы клиентов, отслеживают посылки и решают проблемы доставки в режиме
                    24/7.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Функции AI-ассистента:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                          Отслеживание статуса доставки
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                          Изменение адреса и времени доставки
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                          Обработка жалоб и возвратов
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                          Проактивные уведомления
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Метрики эффективности:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Время ответа: менее 30 секунд</li>
                        <li>• Решение с первого обращения: 85%</li>
                        <li>• Удовлетворенность клиентов: 92%</li>
                        <li>• Снижение нагрузки на операторов: 70%</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Error Reduction Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Стратегии сокращения ошибок с помощью AI</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-700 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Типичные ошибки в логистике
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Неправильная комплектация</span>
                      <Badge variant="destructive">35%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Ошибки адресации</span>
                      <Badge variant="destructive">28%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Повреждения при транспортировке</span>
                      <Badge variant="destructive">18%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Нарушение сроков доставки</span>
                      <Badge variant="destructive">12%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Потеря грузов</span>
                      <Badge variant="destructive">7%</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-700 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    AI-решения для предотвращения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Компьютерное зрение для контроля</span>
                      <Badge className="bg-green-100 text-green-800">-90%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Автоматическая верификация адресов</span>
                      <Badge className="bg-green-100 text-green-800">-85%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">IoT-мониторинг условий транспортировки</span>
                      <Badge className="bg-green-100 text-green-800">-75%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Предиктивная аналитика задержек</span>
                      <Badge className="bg-green-100 text-green-800">-80%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">RFID и GPS трекинг</span>
                      <Badge className="bg-green-100 text-green-800">-95%</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Implementation Roadmap */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Дорожная карта внедрения AI в логистику</h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <h4 className="text-xl font-semibold text-blue-700">Аудит и планирование (1-2 месяца)</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 ml-12">
                    <li>• Анализ текущих логистических процессов</li>
                    <li>• Выявление узких мест и проблемных зон</li>
                    <li>• Определение приоритетных направлений для AI</li>
                    <li>• Расчет ROI и бюджета проекта</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <h4 className="text-xl font-semibold text-green-700">Пилотное внедрение (2-4 месяца)</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 ml-12">
                    <li>• Выбор одного процесса для пилота (например, складская комплектация)</li>
                    <li>• Интеграция AI-решения с существующими системами</li>
                    <li>• Обучение персонала работе с новыми технологиями</li>
                    <li>• Тестирование и отладка системы</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <h4 className="text-xl font-semibold text-purple-700">Масштабирование (3-6 месяцев)</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 ml-12">
                    <li>• Распространение успешных решений на другие процессы</li>
                    <li>• Интеграция различных AI-модулей в единую систему</li>
                    <li>• Оптимизация алгоритмов на основе накопленных данных</li>
                    <li>• Расширение функциональности и автоматизации</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      4
                    </div>
                    <h4 className="text-xl font-semibold text-orange-700">Оптимизация и развитие (постоянно)</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 ml-12">
                    <li>• Непрерывное обучение AI-моделей на новых данных</li>
                    <li>• Внедрение передовых технологий (IoT, блокчейн, дроны)</li>
                    <li>• Развитие предиктивной аналитики и автономных систем</li>
                    <li>• Интеграция с партнерами и поставщиками</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Технологический стек AI-логистики</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Машинное обучение</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• TensorFlow / PyTorch</li>
                    <li>• Scikit-learn</li>
                    <li>• XGBoost / LightGBM</li>
                    <li>• Apache Spark MLlib</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Компьютерное зрение</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• OpenCV</li>
                    <li>• YOLO / R-CNN</li>
                    <li>• MediaPipe</li>
                    <li>• Amazon Rekognition</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Обработка данных</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Apache Kafka</li>
                    <li>• Apache Airflow</li>
                    <li>• Elasticsearch</li>
                    <li>• ClickHouse</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Оптимизация маршрутов</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Google OR-Tools</li>
                    <li>• OSRM</li>
                    <li>• GraphHopper</li>
                    <li>• Mapbox API</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">IoT и трекинг</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• AWS IoT Core</li>
                    <li>• Azure IoT Hub</li>
                    <li>• LoRaWAN</li>
                    <li>• NB-IoT</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Аналитика и BI</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Tableau / Power BI</li>
                    <li>• Apache Superset</li>
                    <li>• Grafana</li>
                    <li>• Jupyter Notebooks</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Future Trends */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Будущее AI в логистике: тренды 2025-2030</h2>

            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-3">Автономная логистика</h4>
                  <p className="text-gray-700 mb-3">
                    К 2030 году ожидается массовое внедрение беспилотных транспортных средств, дронов для доставки и
                    полностью автоматизированных складов.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Беспилотные грузовики для междугородних перевозок</li>
                    <li>• Дроны для доставки "последней мили" в городах</li>
                    <li>• Роботизированные склады без участия человека</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-l-green-500">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold text-green-700 mb-3">Гиперперсонализация</h4>
                  <p className="text-gray-700 mb-3">
                    AI будет предсказывать потребности клиентов и автоматически формировать персональные предложения по
                    доставке.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Предиктивная доставка до оформления заказа</li>
                    <li>• Динамическое ценообразование на доставку</li>
                    <li>• Персональные временные окна доставки</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-l-purple-500">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold text-purple-700 mb-3">Устойчивая логистика</h4>
                  <p className="text-gray-700 mb-3">
                    AI поможет минимизировать углеродный след логистических операций и оптимизировать использование
                    ресурсов.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Оптимизация маршрутов для снижения выбросов CO2</li>
                    <li>• Умная упаковка с минимальными отходами</li>
                    <li>• Циркулярная экономика в логистике</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Заключение</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Внедрение AI в логистику и доставку — это не просто технологический тренд, а необходимость для выживания
                в конкурентной среде. Компании, которые уже сегодня инвестируют в AI-решения, получают значительные
                конкурентные преимущества: сокращение ошибок на 85%, ускорение доставки на 40% и экономия затрат до 30%.
              </p>
              <p className="mb-6">
                Ключ к успеху — поэтапное внедрение, начиная с пилотных проектов в наиболее проблемных областях. Важно
                не только выбрать правильные технологии, но и обеспечить качественную подготовку данных, обучение
                персонала и интеграцию с существующими системами.
              </p>
              <p className="mb-6">
                Будущее логистики — за полностью автономными системами, способными самостоятельно принимать решения,
                адаптироваться к изменениям и непрерывно оптимизировать процессы. Компании, которые начнут трансформацию
                уже сейчас, будут лидерами завтрашнего дня.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Готовы оптимизировать вашу логистику с помощью AI?</h3>
            <p className="text-lg mb-6 opacity-90">
              Получите персональную консультацию по внедрению AI-решений в логистические процессы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Демо AI-логистики
              </Button>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
