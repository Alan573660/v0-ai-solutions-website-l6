"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  TrendingUp,
  Phone,
  MessageSquare,
  BarChart3,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { useCTA } from "@/components/modals/cta-provider"

interface ArticlePageProps {
  params: { locale: Locale }
}

export default function VoiceAssistantsSalesArticleClient({ params }: ArticlePageProps) {
  const { locale } = params
  const { openModal } = useCTA()

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />

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
              <Badge className="bg-purple-100 text-purple-800 border-purple-200">Продажи</Badge>
              <Badge variant="outline" className="border-green-200 text-green-700">
                Популярное
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Как голосовые ассистенты увеличивают продажи в 3 раза
            </h1>

            <p className="text-xl text-gray-700 text-pretty leading-relaxed">
              Узнайте, как голосовой AI-ассистент автоматизирует продажи, снижает издержки и повышает конверсию бизнеса
              в 3 раза. Реальные кейсы и практические советы по внедрению.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-purple-600" />
                <span>Александр Петров</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-purple-600" />
                <span>15 января 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-purple-600" />
                <span>8 мин чтения</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src="/voice-assistant-sales-increase-business-growth.jpg"
              alt="Голосовые ассистенты увеличивают продажи в бизнесе"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Революция в продажах: цифры, которые говорят сами за себя
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              В 2024 году компании, внедрившие голосовых AI-ассистентов, показали рост продаж на 200-300%. Это не просто
              статистика — это новая реальность бизнеса, где искусственный интеллект становится главным драйвером роста.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Ключевые метрики эффективности
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-700">+300%</div>
                  <div className="text-sm text-purple-600">Рост продаж</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-700">-70%</div>
                  <div className="text-sm text-purple-600">Время обработки заявок</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-700">24/7</div>
                  <div className="text-sm text-purple-600">Доступность</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Как работают голосовые ассистенты в продажах</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Голосовой AI-ассистент — это не просто автоответчик. Это интеллектуальная система, которая понимает
              контекст, анализирует потребности клиента и предлагает персонализированные решения в режиме реального
              времени.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-purple-100">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <Phone className="mr-2 h-5 w-5" />
                    Входящие звонки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Мгновенный ответ на любое время суток
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Квалификация лидов по 15+ параметрам
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Автоматическая запись в CRM
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-100">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Исходящие звонки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Обзвон базы клиентов по расписанию
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Персонализированные предложения
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Автоматическое планирование встреч
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Реальный кейс: IT-компания увеличила продажи на 280%
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Компания "ТехноСофт" внедрила голосового ассистента для обработки входящих заявок на разработку сайтов.
              Результаты превзошли все ожидания:
            </p>

            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">До внедрения AI-ассистента:</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 40% пропущенных звонков в нерабочее время</li>
                <li>• Среднее время ответа: 3-5 минут</li>
                <li>• Конверсия звонок → встреча: 15%</li>
                <li>• Ежемесячная выручка: 2.5 млн рублей</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-4">После внедрения:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 0% пропущенных звонков (24/7 доступность)</li>
                <li>• Мгновенный ответ в любое время</li>
                <li>• Конверсия звонок → встреча: 45%</li>
                <li>• Ежемесячная выручка: 9.5 млн рублей</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5 ключевых преимуществ голосовых ассистентов</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <span className="text-purple-700 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Круглосуточная доступность</h4>
                  <p className="text-gray-700">
                    Ваши клиенты могут получить консультацию в любое время, даже когда офис закрыт. Это особенно важно
                    для B2B сегмента, где решения принимаются вечером.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <span className="text-purple-700 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Мгновенная квалификация лидов</h4>
                  <p className="text-gray-700">
                    AI анализирует потребности клиента за первые 30 секунд разговора и определяет его готовность к
                    покупке, бюджет и временные рамки.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <span className="text-purple-700 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Персонализированные предложения</h4>
                  <p className="text-gray-700">
                    Система анализирует историю взаимодействий и предлагает наиболее релевантные продукты или услуги для
                    каждого конкретного клиента.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <span className="text-purple-700 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Автоматическая CRM интеграция</h4>
                  <p className="text-gray-700">
                    Все данные о клиенте автоматически сохраняются в CRM системе, включая аудиозапись разговора и
                    выявленные потребности.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <span className="text-purple-700 font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Масштабируемость без дополнительных затрат</h4>
                  <p className="text-gray-700">
                    Один AI-ассистент может обрабатывать неограниченное количество звонков одновременно, что невозможно
                    для человека.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Этапы внедрения: от идеи до результата за 2 недели
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    1
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-1">Анализ</h5>
                  <p className="text-sm text-gray-600">Изучение бизнес-процессов и целей</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    2
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-1">Настройка</h5>
                  <p className="text-sm text-gray-600">Создание сценариев и интеграция с CRM</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    3
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-1">Тестирование</h5>
                  <p className="text-sm text-gray-600">Проверка всех сценариев и доработка</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    4
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-1">Запуск</h5>
                  <p className="text-sm text-gray-600">Полноценная работа и мониторинг результатов</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Стоимость и окупаемость</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Средняя стоимость внедрения голосового ассистента составляет от 150,000 до 500,000 рублей в зависимости от
              сложности интеграций. При этом окупаемость наступает уже через 2-3 месяца за счет увеличения конверсии и
              снижения затрат на персонал.
            </p>

            <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-8">
              <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                <BarChart3 className="mr-2 h-5 w-5" />
                Расчет ROI для среднего бизнеса
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Затраты:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Внедрение: 300,000 ₽</li>
                    <li>• Ежемесячная подписка: 25,000 ₽</li>
                    <li>• Итого за год: 600,000 ₽</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Экономия и прибыль:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Экономия на зарплате: 960,000 ₽</li>
                    <li>• Дополнительная прибыль: 2,400,000 ₽</li>
                    <li>
                      • <strong>Чистая прибыль: 2,760,000 ₽</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Заключение</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Голосовые AI-ассистенты — это не технология будущего, а необходимость сегодняшнего дня. Компании, которые
              внедряют их сейчас, получают значительное конкурентное преимущество и кратный рост продаж.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Не ждите, пока конкуренты опередят вас. Начните использовать силу искусственного интеллекта для роста
              своего бизнеса уже сегодня.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 sm:p-8 rounded-xl text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Готовы увеличить продажи в 3 раза?</h3>
            <p className="text-purple-100 mb-6">
              Получите бесплатную консультацию и узнайте, как голосовой AI-ассистент может трансформировать ваш бизнес
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 w-full sm:w-auto h-12"
              onClick={() => openModal("consultation")}
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
