import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Hotel, Users, Star, CheckCircle, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import ArticleSchema from "@/components/article-schema"

interface ArticlePageProps {
  params: { locale: string }
}

export const metadata: Metadata = {
  title: "Автоматизация отеля и ресепшн без очередей | AI Solutions",
  description:
    "Цифровой консьерж и голосовой ассистент для гостиниц: как AI помогает ускорить обслуживание гостей и повысить уровень сервиса. Практические решения для отельного бизнеса.",
  keywords: "автоматизация отелей, цифровой консьерж, AI для гостиниц, голосовой ассистент отель, ресепшн без очередей",
  openGraph: {
    title: "Автоматизация отеля: ресепшн без очередей",
    description: "Как AI помогает ускорить обслуживание гостей и повысить уровень сервиса в отелях",
    images: ["/hotel-reception-automation-ai-assistant.jpg"],
    type: "article",
    publishedTime: "2024-01-12T08:00:00Z",
    authors: ["Анна Коваленко"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Автоматизация отеля: ресепшн без очередей",
    description: "Как AI помогает ускорить обслуживание гостей",
    images: ["/hotel-reception-automation-ai-assistant.jpg"],
  },
  alternates: {
    canonical: "/blog/hotel-automation-no-queues",
    languages: {
      "ru-RU": "/ru/blog/hotel-automation-no-queues",
      "en-US": "/en/blog/hotel-automation-no-queues",
    },
  },
}

export default function HotelAutomationArticle({ params }: ArticlePageProps) {
  const { locale } = params

  return (
    <>
      <ArticleSchema
        headline="Автоматизация отеля: ресепшн без очередей"
        description="Цифровой консьерж и голосовой ассистент для гостиниц: как AI помогает ускорить обслуживание гостей"
        datePublished="2024-01-12T08:00:00Z"
        author="Анна Коваленко"
        image="/hotel-reception-automation-ai-assistant.jpg"
        keywords={["автоматизация отелей", "цифровой консьерж", "AI для гостиниц", "голосовой ассистент"]}
        articleSection="Hospitality"
        wordCount={2200}
      />
      <div className="min-h-screen bg-background">
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Button variant="ghost" asChild className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                <Link href={`/${locale}/blog`} className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Назад к блогу
                </Link>
              </Button>
            </div>

            {/* Article Header */}
            <header className="mb-12 space-y-6">
              <div className="flex items-center space-x-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Отели</Badge>
                <Badge variant="outline" className="border-orange-200 text-orange-700">
                  Тренд 2024
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Автоматизация отеля: ресепшн без очередей
              </h1>

              <p className="text-xl text-gray-700 text-pretty leading-relaxed">
                Цифровой консьерж и голосовой ассистент для гостиниц: как AI помогает ускорить обслуживание гостей и
                повысить уровень сервиса. Практические решения для отельного бизнеса.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-blue-600" />
                  <span>Анна Коваленко</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span>12 января 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>7 мин чтения</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/hotel-reception-automation-ai-assistant.jpg"
                alt="Автоматизация ресепшн отеля с AI-ассистентом"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Проблема современных отелей: очереди и недовольные гости
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Каждый день в отелях по всему миру повторяется одна и та же история: гости стоят в очередях на ресепшн,
                ждут ответов на простые вопросы, а персонал не успевает обработать все запросы. Результат — снижение
                рейтингов на Booking.com и потеря клиентов.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Статистика проблем в отельной индустрии
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-700">67%</div>
                    <div className="text-sm text-red-600">гостей недовольны временем ожидания</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-700">15 мин</div>
                    <div className="text-sm text-red-600">среднее время в очереди</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-700">-0.8</div>
                    <div className="text-sm text-red-600">снижение рейтинга из-за очередей</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Решение: AI-ассистент как цифровой консьерж</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Голосовой AI-ассистент в отеле — это не замена персонала, а его умное дополнение. Система берет на себя
                рутинные задачи, позволяя сотрудникам сосредоточиться на персональном обслуживании VIP-гостей.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-100">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-700">
                      <Phone className="mr-2 h-5 w-5" />
                      Входящие звонки
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        Информация о номерах и ценах
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        Бронирование и изменение дат
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        Услуги отеля и расписание
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-100">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-700">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Внутренние запросы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        Заказ room service через телефон в номере
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        Вызов такси и трансфер
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        Информация о городе и достопримечательностях
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Кейс: Отель "Метрополь" увеличил рейтинг с 8.2 до 9.4
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Четырехзвездочный отель {"Метрополь"} в центре Москвы столкнулся с проблемой: гости жаловались на долгое
                ожидание на ресепшн и недоступность персонала в ночное время. Решение нашлось в виде AI-ассистента.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Проблемы до внедрения:</h4>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Очереди на ресепшн в часы пик (до 20 минут ожидания)</li>
                  <li>• 40% звонков остаются без ответа ночью</li>
                  <li>• Рейтинг на Booking.com: 8.2/10</li>
                  <li>• Жалобы на медленное обслуживание: 25% отзывов</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-4">Результаты после внедрения AI:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Время ожидания сократилось до 2-3 минут</li>
                  <li>• 100% звонков обрабатываются круглосуточно</li>
                  <li>• Рейтинг вырос до 9.4/10</li>
                  <li>• Жалобы на обслуживание снизились до 3%</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Функции AI-ассистента для отелей</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Hotel className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Бронирование и управление номерами</h4>
                    <p className="text-gray-700">
                      AI проверяет доступность номеров в реальном времени, предлагает альтернативы и оформляет
                      бронирование с автоматическим внесением данных в PMS систему.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Консьерж-сервисы</h4>
                    <p className="text-gray-700">
                      Информация о ресторанах, театрах, музеях, заказ такси, бронирование столиков в ресторанах — все
                      это доступно гостям 24/7 через голосового помощника.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Room Service и дополнительные услуги</h4>
                    <p className="text-gray-700">
                      Гости могут заказать еду, напитки, дополнительные полотенца или подушки, просто позвонив с
                      телефона в номере и сообщив свои пожелания AI-ассистенту.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Мультиязычная поддержка</h4>
                    <p className="text-gray-700">
                      AI говорит на 6 языках (русский, английский, китайский, немецкий, французский, испанский), что
                      особенно важно для международных отелей.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Технические особенности внедрения</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Интеграция AI-ассистента с отельными системами происходит через API подключения к основным PMS (Property
                Management System) платформам: Opera, Fidelio, Protel и другим.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-blue-800 mb-4">Интеграции и возможности:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Системы отеля:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• PMS (управление номерами)</li>
                      <li>• POS (ресторан и бар)</li>
                      <li>• Телефонная система</li>
                      <li>• Система контроля доступа</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Внешние сервисы:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Booking.com API</li>
                      <li>• Яндекс.Такси / Uber</li>
                      <li>• Системы бронирования ресторанов</li>
                      <li>• Платежные системы</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI и окупаемость для отелей</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Внедрение AI-ассистента в отеле окупается за 4-6 месяцев за счет повышения рейтингов, увеличения
                повторных бронирований и оптимизации работы персонала.
              </p>

              <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                  <Star className="mr-2 h-5 w-5" />
                  Экономический эффект для отеля на 100 номеров
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Затраты в год:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Внедрение и настройка: 400,000 ₽</li>
                      <li>• Ежемесячная подписка: 35,000 ₽</li>
                      <li>• Итого: 820,000 ₽</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Дополнительная прибыль:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Рост рейтинга (+15% бронирований): 2,400,000 ₽</li>
                      <li>• Экономия на персонале: 600,000 ₽</li>
                      <li>
                        • <strong>Чистая прибыль: 2,180,000 ₽</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Этапы внедрения в отеле</h2>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                      1
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">Аудит</h5>
                    <p className="text-sm text-gray-600">Анализ текущих процессов и систем отеля</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                      2
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">Интеграция</h5>
                    <p className="text-sm text-gray-600">Подключение к PMS и телефонной системе</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                      3
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">Обучение</h5>
                    <p className="text-sm text-gray-600">Настройка сценариев и обучение персонала</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                      4
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">Запуск</h5>
                    <p className="text-sm text-gray-600">Постепенный ввод в эксплуатацию</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Заключение</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                AI-ассистенты в отелях — это не просто технологическое новшество, а необходимость для
                конкурентоспособности в современной индустрии гостеприимства. Отели, которые внедряют эти решения
                сегодня, завтра будут лидерами рынка.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Инвестиции в автоматизацию окупаются не только финансово, но и репутационно — довольные гости становятся
                лучшей рекламой вашего отеля.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Готовы автоматизировать свой отель?</h3>
              <p className="text-blue-100 mb-6">
                Получите персональную демонстрацию AI-ассистента для вашего отеля и узнайте точный ROI
              </p>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Заказать демо
              </Button>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
