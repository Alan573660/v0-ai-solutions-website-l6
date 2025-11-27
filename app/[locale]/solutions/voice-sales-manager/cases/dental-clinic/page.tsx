import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Phone, Clock, CheckCircle2, Target, Star, BarChart3, Zap, TrendingUp, Users, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: "Кейс: Сеть стоматологий увеличила записи на 60% с AI-администратором | AI Solutions M2",
  description:
    "Детальный кейс внедрения голосового AI-администратора в сети стоматологических клиник. Как автоматизация записи на прием и напоминаний увеличила поток пациентов на 60%, снизила пропущенные звонки на 85% и сэкономила ₽250К в месяц. Полный разбор результатов.",
  keywords:
    "AI для стоматологии, автоматизация медицинской клиники, голосовой ассистент стоматология, AI запись на прием, автоматизация медрегистратуры, CRM для клиники, chatbot для врачей, voice AI healthcare, AI dental clinic, medical appointment automation, patient reminder system, clinic automation AI, healthcare AI assistant, ChatGPT медицина, Claude AI здравоохранение, автоматизация клиники нейросети",
}

export default function DentalClinicCasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white py-20">
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
              Как сеть стоматологий увеличила записи на 60% с помощью AI-администратора
            </h1>
            <p className="text-xl text-white/90 mb-8">
              История о том, как AI освободил администраторов от рутины, позволил пациентам записываться круглосуточно
              и сократил количество пропущенных приемов на 85%
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white text-teal-600 text-base px-4 py-2">Медицина</Badge>
              <Badge className="bg-white text-teal-600 text-base px-4 py-2">Стоматология</Badge>
              <Badge className="bg-white text-teal-600 text-base px-4 py-2">B2C</Badge>
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
                <CardTitle className="text-4xl font-bold text-green-600">+60%</CardTitle>
                <CardDescription>записей на прием</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold text-blue-600">-85%</CardTitle>
                <CardDescription>пропущенных звонков</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold text-purple-600">₽250К</CardTitle>
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
                  "Улыбка+" — сеть стоматологических клиник с 5 филиалами в Москве и Подмосковье. Работает с 2012 года,
                  специализируется на терапевтической, хирургической и эстетической стоматологии. Обслуживает более 500
                  пациентов в неделю.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-600" />
                    <span className="text-muted-foreground">5 клиник в Москве и области</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-600" />
                    <span className="text-muted-foreground">25 врачей-стоматологов</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-600" />
                    <span className="text-muted-foreground">Средний чек: ₽12,500</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-600" />
                    <span className="text-muted-foreground">Звонков в день: 200-300</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-dental-clinic.png"
                  alt="Современная стоматологическая клиника"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Проблема: администраторы 70% времени проводили на телефоне
            </h2>

            <Card className="border-2 border-red-200 bg-red-50/50 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-red-900">Ситуация до внедрения AI</CardTitle>
                <CardDescription className="text-base text-red-800">
                  Администраторы физически не успевали обрабатывать звонки, встречать пациентов и работать с документами.
                  Пациенты долго ждали на линии, часть звонков оставалась без ответа.
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
                        <p className="font-medium mb-1">Постоянная телефонная перегрузка</p>
                        <p className="text-sm text-muted-foreground">
                          Звонки не прекращались с 8:00 до 21:00. В каждой клинике работало по 2 администратора, но они не
                          справлялись: записывали на прием, отвечали на вопросы о ценах и услугах, подтверждали записи,
                          переносили приемы. 70% рабочего времени уходило только на телефонные разговоры. При этом в
                          клинике были живые пациенты, которые тоже требовали внимания.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Пропущенные звонки = потерянные пациенты</p>
                        <p className="text-sm text-muted-foreground">
                          Когда оба администратора были заняты (на телефоне или с пациентами в клинике), входящие звонки
                          оставались без ответа. По статистике, 30-40% звонков проходили в режиме "занято" или долгого
                          ожидания. Люди не хотели ждать и звонили в другие клиники. Ежедневно терялось 60-90 потенциальных
                          записей.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Пациенты забывали о записи</p>
                        <p className="text-sm text-muted-foreground">
                          Администраторы вручную обзванивали пациентов за день до приема для напоминания. Но в потоке дел
                          часто забывали это сделать. В результате 20-25% пациентов просто не приходили на прием или
                          забывали о записи. Врач простаивал, клиника теряла деньги.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Ошибки в расписании</p>
                        <p className="text-sm text-muted-foreground">
                          Когда администратор спешил, он мог записать двух пациентов на одно время или перепутать врача.
                          Такие накладки создавали конфликты, портили репутацию клиники и отнимали время на разрешение
                          ситуации.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">5</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Высокие расходы на персонал</p>
                        <p className="text-sm text-muted-foreground">
                          В сети работало 10 администраторов (по 2 в каждой клинике). Зарплата + налоги = ₽700,000 в месяц.
                          При этом текучка была высокой — люди выгорали от постоянного стресса и монотонной работы.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-lg border-2 border-red-300">
                  <h4 className="font-semibold mb-3">Финансовые потери:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Пропущенные звонки (35%):</span>
                      <span className="font-bold">70-105 записей/день</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Не пришедшие пациенты (20%):</span>
                      <span className="font-bold">40-60 приемов/день</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Средний чек за прием:</span>
                      <span className="font-bold">₽12,500</span>
                    </div>
                    <div className="h-px bg-red-300 my-2" />
                    <div className="flex justify-between">
                      <span>Упущенная выручка в день:</span>
                      <span className="font-bold text-red-600">₽1,375,000 - ₽2,062,500</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-red-600">
                      <span>Упущенная выручка в месяц:</span>
                      <span>₽41,250,000 - ₽61,875,000</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span>Расходы на администраторов:</span>
                      <span className="font-bold text-red-600">₽700,000/мес</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Решение: AI-администратор для автоматизации записи и напоминаний
            </h2>

            <Card className="border-2 border-blue-200 bg-blue-50/50 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Что внедрили</CardTitle>
                <CardDescription className="text-base text-blue-800">
                  Голосовой AI-администратор, который принимает звонки 24/7, записывает пациентов на прием, отвечает на
                  вопросы об услугах и ценах, отправляет напоминания и подтверждения.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Как работает AI-администратор:</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 1: Прием звонка и идентификация пациента</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          AI отвечает на звонок мгновенно, приветствует и проверяет, есть ли пациент в базе по номеру
                          телефона. Если пациент постоянный — сразу видит его историю посещений, предпочитаемого врача и
                          может предложить записаться к нему снова.
                        </p>
                        <div className="p-3 bg-white rounded-lg border text-sm italic">
                          "Добрый день! Клиника Улыбка+, меня зовут Мария. Вижу, что вы уже были у нас на приеме у доктора
                          Смирновой. Хотите записаться к ней снова или к другому специалисту?"
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 2: Уточнение потребностей и выбор услуги</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          AI задает вопросы, чтобы понять, какая услуга нужна: лечение, профилактика, эстетическая
                          стоматология, срочная помощь. Объясняет суть процедур и их стоимость. Может порекомендовать врача
                          по специализации.
                        </p>
                        <div className="p-3 bg-white rounded-lg border text-sm">
                          <p className="font-medium mb-1">Примеры вопросов:</p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>С какой проблемой обращаетесь? (боль, профилактика, отбеливание)</li>
                            <li>Есть ли предпочтения по врачу?</li>
                            <li>Когда вам удобно прийти?</li>
                            <li>Нужна ли консультация или сразу лечение?</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 3: Поиск доступного времени и запись</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          AI проверяет расписание врачей в реальном времени и предлагает несколько вариантов времени. После
                          выбора — бронирует слот, создает запись в CRM и отправляет подтверждение на телефон пациента в
                          SMS или WhatsApp.
                        </p>
                        <div className="p-3 bg-white rounded-lg border text-sm italic">
                          "У доктора Смирновой есть свободное время завтра в 14:00 и послезавтра в 10:30. Какое время вам
                          удобнее? ... Отлично! Записала вас на завтра, 15 ноября, в 14:00. Адрес клиники и напоминание
                          отправлю вам в SMS."
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Bell className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 4: Автоматические напоминания</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          За 24 часа и за 2 часа до приема AI отправляет напоминания в мессенджер или звонит пациенту. Если
                          пациент не может прийти — AI сразу же предлагает перенести запись на другое время и обновляет
                          расписание.
                        </p>
                        <div className="p-3 bg-white rounded-lg border text-sm">
                          <p className="font-medium mb-1">Сценарии напоминаний:</p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>За 24 часа: SMS с адресом и временем + кнопка "Подтвердить/Перенести"</li>
                            <li>За 2 часа: Звонок с напоминанием</li>
                            <li>Если не подтвердил: Повторный звонок для уточнения</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 5: Сбор обратной связи</p>
                        <p className="text-sm text-muted-foreground">
                          После приема AI звонит пациенту или отправляет сообщение с просьбой оценить качество обслуживания и
                          работу врача. Собирает отзывы и помогает выявить проблемные моменты для улучшения сервиса.
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
                      <div className="w-2 h-2 rounded-full bg-teal-600" />
                      Интеграции
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• МедТрэк CRM — система управления клиникой</li>
                      <li>• WhatsApp Business API — уведомления пациентам</li>
                      <li>• Telegram — альтернативный канал связи</li>
                      <li>• SMS-шлюз — напоминания о приемах</li>
                      <li>• Облачная телефония Zadarma</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-600" />
                      Сроки внедрения
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Настройка интеграций — 4 дня</li>
                      <li>• Загрузка базы услуг и врачей — 2 дня</li>
                      <li>• Обучение AI на медицинской терминологии — 3 дня</li>
                      <li>• Тестирование с реальными звонками — 1 неделя</li>
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
              Результаты: на 60% больше пациентов и освобожденные администраторы
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-center">До внедрения AI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">500</div>
                    <p className="text-sm text-muted-foreground">пациентов в неделю</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">35%</div>
                    <p className="text-sm text-muted-foreground">пропущенных звонков</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">20%</div>
                    <p className="text-sm text-muted-foreground">не пришедших на прием</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">₽700К</div>
                    <p className="text-sm text-muted-foreground">расходы на администраторов</p>
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
                      800 <span className="text-xl">+60%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">пациентов в неделю</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      5% <span className="text-xl">-85%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">пропущенных звонков</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      3% <span className="text-xl">-85%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">не пришедших на прием</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ₽450К <span className="text-xl">-36%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">расходы на администраторов</p>
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
                          <span className="text-sm font-medium">Записи на прием</span>
                          <span className="text-sm font-bold text-green-600">+60%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600" style={{ width: "95%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">С 500 до 800 пациентов в неделю</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Пропущенные звонки</span>
                          <span className="text-sm font-bold text-green-600">-85%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-600" style={{ width: "90%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">С 35% до 5% упущенных звонков</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Явка пациентов</span>
                          <span className="text-sm font-bold text-green-600">+17%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600" style={{ width: "85%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">С 80% до 97% благодаря напоминаниям</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Нагрузка на администраторов</span>
                          <span className="text-sm font-bold text-green-600">-70%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600" style={{ width: "95%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Освободили время для работы с пациентами</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Экономия на ФОТ</span>
                          <span className="text-sm font-bold text-green-600">₽250,000</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-600" style={{ width: "80%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Сократили штат с 10 до 6 администраторов</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Удовлетворенность пациентов</span>
                          <span className="text-sm font-bold text-green-600">4.8/5</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-teal-600" style={{ width: "96%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">По отзывам о работе регистратуры</p>
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
                      <span className="text-muted-foreground">Дополнительно принято пациентов:</span>
                      <span className="font-bold">+1,200</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Средний чек за прием:</span>
                      <span className="font-bold">₽12,500</span>
                    </div>
                    <div className="h-px bg-green-300 my-2" />
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold">Прирост выручки:</span>
                      <span className="font-bold text-green-600">+₽15,000,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold">Экономия на ФОТ:</span>
                      <span className="font-bold text-green-600">+₽250,000</span>
                    </div>
                    <div className="h-px bg-green-400 my-2" />
                    <div className="flex justify-between items-center py-3 text-lg">
                      <span className="font-bold">Общий эффект:</span>
                      <span className="font-bold text-2xl text-green-600">+₽15,250,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm">
                      <span className="text-muted-foreground">Стоимость внедрения AI:</span>
                      <span className="font-medium">₽280,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm">
                      <span className="text-muted-foreground">ROI:</span>
                      <span className="font-bold text-green-600">5,446%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm">
                      <span className="text-muted-foreground">Срок окупаемости:</span>
                      <span className="font-bold text-green-600">6 дней</span>
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
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold">
                      ЕИ
                    </div>
                  </div>
                  <div>
                    <p className="text-xl italic mb-4 leading-relaxed">
                      "Внедрение AI-администратора стало настоящим спасением для нашей сети. Администраторы теперь
                      фокусируются на пациентах в клинике, а не на телефоне. Мы перестали терять звонки, количество
                      записей выросло на 60%, а главное — пациенты не забывают о приемах благодаря автоматическим
                      напоминаниям. Окупили внедрение за неделю. Рекомендую всем клиникам!"
                    </p>
                    <p className="font-bold text-lg">Елена Иванова</p>
                    <p className="text-muted-foreground">Управляющая сети клиник Улыбка+</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Готовы автоматизировать запись в вашу клинику?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Покажем, как AI-администратор освободит ваш персонал и увеличит поток пациентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ru/solutions/voice-sales-manager">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-cyan-50">
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
