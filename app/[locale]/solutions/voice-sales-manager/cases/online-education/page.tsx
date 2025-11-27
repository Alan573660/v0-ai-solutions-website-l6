import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, TrendingUp, Users, Clock, CheckCircle2, Target, Star, BarChart3, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: "Кейс: Онлайн-школа английского увеличила продажи на 280% с AI-ассистентом | AI Solutions M2",
  description:
    "Детальный кейс внедрения голосового AI-ассистента в онлайн-школе английского языка. Как автоматизация обработки заявок увеличила конверсию до 45% и принесла экономию ₽420К в месяц. Полный разбор проблем, решений и результатов.",
  keywords:
    "AI для онлайн-школы, автоматизация обучения, голосовой ассистент образование, AI в EdTech, увеличение продаж онлайн-курсов, конверсия заявок, автоматизация записи на уроки, CRM для школ, chatbot для образования, voice AI education, AI sales education, online school automation, EdTech AI assistant, lead processing automation, conversion optimization education, ChatGPT для школ, Claude AI обучение, автоматизация с искусственным интеллектом",
}

export default function OnlineEducationCasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container relative z-10 mx-auto px-4">
          <Link
            href="/ru/solutions/voice-sales-manager"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад к голосовому менеджеру продаж
          </Link>

          <div className="max-w-5xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Кейс внедрения</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Как онлайн-школа английского увеличила продажи на 280% с помощью AI-ассистента
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Полный разбор внедрения голосового AI-менеджера в онлайн-школе: от хаоса с заявками до стабильного потока
              новых учеников и экономии ₽420,000 в месяц
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white text-indigo-600 text-base px-4 py-2">Образование</Badge>
              <Badge className="bg-white text-indigo-600 text-base px-4 py-2">EdTech</Badge>
              <Badge className="bg-white text-indigo-600 text-base px-4 py-2">B2C</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold text-green-600">+280%</CardTitle>
                <CardDescription>рост обработанных заявок</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold text-blue-600">45%</CardTitle>
                <CardDescription>конверсия в продажу</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold text-purple-600">₽420К</CardTitle>
                <CardDescription>экономия в месяц</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">О компании</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Онлайн-школа английского языка "English First Step" работает на рынке дистанционного образования с 2019
                  года. Основное направление — индивидуальные и групповые занятия для взрослых и детей с русскоязычными
                  преподавателями и носителями языка.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                    <span className="text-muted-foreground">Более 2,500 активных учеников</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                    <span className="text-muted-foreground">50+ преподавателей в штате</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                    <span className="text-muted-foreground">Средний чек: ₽15,000 за 8 занятий</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                    <span className="text-muted-foreground">Основной канал лидов: таргетированная реклама</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/online-education-classroom.jpg"
                  alt="Онлайн-школа английского языка"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Проблема: потеря 60% заявок из-за перегрузки менеджеров</h2>

            <Card className="border-2 border-red-200 bg-red-50/50 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-red-900">Ситуация до внедрения AI</CardTitle>
                <CardDescription className="text-base text-red-800">
                  Школа активно запускала рекламные кампании в социальных сетях и получала 200-300 заявок в день.
                  Однако реальные продажи оставались на прежнем уровне.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Основные проблемы:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Менеджеры не успевали обрабатывать заявки</p>
                        <p className="text-sm text-muted-foreground">
                          В пиковые часы (с 18:00 до 21:00) поступало до 50 заявок в час. Отдел продаж из 3 менеджеров
                          физически не справлялся с таким объемом. Среднее время ответа составляло 2-4 часа, а в
                          некоторых случаях — до следующего дня.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Клиенты уходили к конкурентам</p>
                        <p className="text-sm text-muted-foreground">
                          По данным опросов, 78% людей, оставивших заявку на обучение, принимают решение в течение
                          первых 30 минут. Если не перезвонить быстро — человек уже записался в другую школу. Так школа
                          теряла 60% потенциальных учеников.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Высокие затраты на персонал</p>
                        <p className="text-sm text-muted-foreground">
                          Зарплата 3 менеджеров + налоги = ₽420,000 в месяц. При этом качество работы страдало: люди
                          уставали, допускали ошибки, забывали перезванивать по повторным касаниям.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Низкая конверсия в пробный урок</p>
                        <p className="text-sm text-muted-foreground">
                          Из тех заявок, по которым менеджеры успевали перезвонить, только 16% записывались на пробное
                          занятие. Причина — усталость менеджеров, шаблонные скрипты без персонализации, отсутствие
                          работы с возражениями.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-lg border-2 border-red-300">
                  <h4 className="font-semibold mb-3">Финансовые потери:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Потерянные заявки (60% из 300/день):</span>
                      <span className="font-bold">180 человек/день</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Средний чек за курс:</span>
                      <span className="font-bold">₽15,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Конверсия в покупку (если бы обработали):</span>
                      <span className="font-bold">20%</span>
                    </div>
                    <div className="h-px bg-red-300 my-2" />
                    <div className="flex justify-between text-lg font-bold text-red-600">
                      <span>Упущенная прибыль в месяц:</span>
                      <span>₽16,200,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Решение: AI-ассистент для мгновенной обработки заявок</h2>

            <Card className="border-2 border-blue-200 bg-blue-50/50 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Что внедрили</CardTitle>
                <CardDescription className="text-base text-blue-800">
                  Голосовой AI-менеджер, который звонит каждому лиду за 30 секунд после оставления заявки, квалифицирует
                  клиента и записывает на пробный урок.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Как работает AI-ассистент:</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 1: Мгновенная реакция (30 секунд)</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Как только человек оставляет заявку на сайте или в соцсетях, AI получает уведомление и через
                          30 секунд совершает исходящий звонок. В это время клиент еще "горячий" и готов к разговору.
                        </p>
                        <div className="p-3 bg-white rounded-lg border text-sm italic">
                          Пример скрипта: "Добрый день! Меня зовут Анна, я из школы English First Step. Вы только что
                          оставили заявку на бесплатный пробный урок английского. Удобно сейчас поговорить пару минут?"
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 2: Квалификация клиента</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          AI задает 3-5 вопросов, чтобы понять уровень английского, цели обучения, формат занятий
                          (индивидуально/группа), удобное время. Все ответы автоматически фиксируются в CRM.
                        </p>
                        <div className="p-3 bg-white rounded-lg border text-sm">
                          <p className="font-medium mb-1">Ключевые вопросы:</p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Для каких целей изучаете английский? (работа/путешествия/экзамены)</li>
                            <li>Какой у вас сейчас уровень? (начальный/средний/продвинутый)</li>
                            <li>Предпочитаете индивидуальные или групповые занятия?</li>
                            <li>Какое время для занятий вам удобно?</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 3: Запись на пробный урок</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          На основе ответов AI подбирает подходящего преподавателя и предлагает 2-3 варианта времени для
                          пробного занятия. После согласования отправляет ссылку на урок в WhatsApp или Telegram.
                        </p>
                        <div className="p-3 bg-white rounded-lg border text-sm italic">
                          "Отлично! Я подобрала для вас преподавателя Марию — она специализируется на деловом английском.
                          Вам удобно завтра в 19:00 или послезавтра в 18:30?"
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 4: Автоматические напоминания</p>
                        <p className="text-sm text-muted-foreground">
                          За 24 часа и за 2 часа до урока AI отправляет напоминания в мессенджер. Если клиент не пришел
                          на урок — AI перезванивает, выясняет причину и предлагает перенести занятие.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Implementation */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Техническая реализация</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-600" />
                      Интеграции
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• amoCRM — для фиксации заявок и управления воронкой</li>
                      <li>• WhatsApp Business API — отправка ссылок и напоминаний</li>
                      <li>• Telegram Bot — альтернативный канал коммуникации</li>
                      <li>• Календарь преподавателей — проверка доступности</li>
                      <li>• Zoom API — автоматическое создание комнат для уроков</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-600" />
                      Сроки внедрения
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Настройка интеграций — 3 дня</li>
                      <li>• Разработка скриптов AI — 5 дней</li>
                      <li>• Обучение на данных школы — 2 дня</li>
                      <li>• Тестирование с реальными лидами — 1 неделя</li>
                      <li>• Полный запуск — 3 недели от старта</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Результаты: рост продаж в 3 раза за первый месяц
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-center">До внедрения AI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">120</div>
                    <p className="text-sm text-muted-foreground">заявок обработано в день</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">16%</div>
                    <p className="text-sm text-muted-foreground">конверсия в пробный урок</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">8%</div>
                    <p className="text-sm text-muted-foreground">конверсия в покупку курса</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">₽420К</div>
                    <p className="text-sm text-muted-foreground">расходы на менеджеров</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50/30">
                <CardHeader>
                  <CardTitle className="text-center">После внедрения AI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      300 <span className="text-xl">+150%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">заявок обработано в день</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      45% <span className="text-xl">+281%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">конверсия в пробный урок</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      22% <span className="text-xl">+275%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">конверсия в покупку курса</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ₽0 <span className="text-xl">-100%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">расходы на менеджеров</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Metrics */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-yellow-500" />
                    Ключевые достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Обработка заявок</span>
                          <span className="text-sm font-bold text-green-600">+280%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600" style={{ width: "100%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">С 120 до 300+ заявок в день</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Скорость ответа</span>
                          <span className="text-sm font-bold text-green-600">-98%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-600" style={{ width: "95%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">С 2-4 часов до 30 секунд</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Конверсия в пробный урок</span>
                          <span className="text-sm font-bold text-green-600">+281%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600" style={{ width: "90%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">С 16% до 45%</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Конверсия в покупку</span>
                          <span className="text-sm font-bold text-green-600">+275%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600" style={{ width: "85%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">С 8% до 22%</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Экономия на ФОТ</span>
                          <span className="text-sm font-bold text-green-600">₽420,000</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-600" style={{ width: "100%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Высвободили 3 менеджеров</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Прирост выручки</span>
                          <span className="text-sm font-bold text-green-600">+₽2.1М</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-teal-600" style={{ width: "95%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">За первый месяц работы AI</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Impact */}
              <Card className="border-2 border-green-200 bg-green-50/30">
                <CardHeader>
                  <CardTitle>Финансовый эффект за первый месяц</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Дополнительно обработано заявок:</span>
                      <span className="font-bold">+5,400</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Конверсия в покупку:</span>
                      <span className="font-bold">22%</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Новых учеников:</span>
                      <span className="font-bold">+1,188</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Средний чек:</span>
                      <span className="font-bold">₽15,000</span>
                    </div>
                    <div className="h-px bg-green-300 my-2" />
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold">Прирост выручки:</span>
                      <span className="font-bold text-green-600">+₽17,820,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold">Экономия на ФОТ:</span>
                      <span className="font-bold text-green-600">+₽420,000</span>
                    </div>
                    <div className="h-px bg-green-400 my-2" />
                    <div className="flex justify-between items-center py-3 text-lg">
                      <span className="font-bold">Общий эффект:</span>
                      <span className="font-bold text-2xl text-green-600">+₽18,240,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm">
                      <span className="text-muted-foreground">Стоимость внедрения AI:</span>
                      <span className="font-medium">₽250,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm">
                      <span className="text-muted-foreground">ROI:</span>
                      <span className="font-bold text-green-600">7,296%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm">
                      <span className="text-muted-foreground">Срок окупаемости:</span>
                      <span className="font-bold text-green-600">5 дней</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-xl">
              <CardContent className="p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                      АП
                    </div>
                  </div>
                  <div>
                    <p className="text-xl italic mb-4 leading-relaxed">
                      "Мы скептически относились к AI, думали, что живой человек всегда лучше. Но результаты превзошли все
                      ожидания. За месяц окупили внедрение, продажи выросли в 3 раза. AI работает 24/7, не болеет, не
                      уходит в отпуск и никогда не забывает перезвонить клиенту. Это лучшее решение для онлайн-школы!"
                    </p>
                    <p className="font-bold text-lg">Анна Петрова</p>
                    <p className="text-muted-foreground">Основатель English First Step</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Хотите такие же результаты для вашего бизнеса?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Проведем бесплатный аудит вашей воронки продаж и покажем, как AI-ассистент увеличит вашу выручку
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ru/solutions/voice-sales-manager">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-blue-50">
                Узнать подробнее об AI-менеджере
              </Button>
            </Link>
            <Link href="/ru/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Получить консультацию
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
