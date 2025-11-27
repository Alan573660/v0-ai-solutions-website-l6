import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Truck, Clock, Phone, CheckCircle2, Target, Star, BarChart3, Zap, TrendingUp, Users, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: "Кейс: Логистическая компания обрабатывает на 400% больше заявок с AI-ассистентом | AI Solutions M2",
  description:
    "Подробный кейс внедрения голосового AI-менеджера в логистической компании. Как автоматизация приема заказов позволила работать 24/7, увеличить поток заявок в 4 раза и сэкономить ₽300К в месяц. Детальный разбор от проблем до результатов.",
  keywords:
    "AI для логистики, автоматизация доставки, голосовой ассистент логистика, AI транспортная компания, прием заказов AI, автоматизация грузоперевозок, CRM логистика, chatbot доставка, voice AI logistics, AI logistics automation, delivery automation AI, freight AI assistant, transport management AI, order processing automation, ChatGPT логистика, Claude AI доставка, автоматизация с нейросетями",
}

export default function LogisticsCasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 text-white py-20">
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
              Как логистическая компания увеличила обработку заявок в 4 раза с AI-ассистентом
            </h1>
            <p className="text-xl text-white/90 mb-8">
              История о том, как AI помог транспортной компании работать 24/7, принимать заказы даже ночью и сократить
              упущенные заявки до нуля
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white text-orange-600 text-base px-4 py-2">Логистика</Badge>
              <Badge className="bg-white text-orange-600 text-base px-4 py-2">Транспорт</Badge>
              <Badge className="bg-white text-orange-600 text-base px-4 py-2">B2B</Badge>
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
                <CardTitle className="text-4xl font-bold text-green-600">+400%</CardTitle>
                <CardDescription>обработанных звонков</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold text-blue-600">24/7</CardTitle>
                <CardDescription>доступность приема заказов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold text-purple-600">₽300К</CardTitle>
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
                  "СкороВоз" — региональная транспортно-логистическая компания, специализирующаяся на грузоперевозках по
                  России. Работает с 2015 года, обслуживает как корпоративных клиентов (B2B), так и частных лиц (B2C).
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-600" />
                    <span className="text-muted-foreground">Автопарк: 80+ грузовых автомобилей</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-600" />
                    <span className="text-muted-foreground">География: 50 городов России</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-600" />
                    <span className="text-muted-foreground">Средний заказ: ₽8,500</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-600" />
                    <span className="text-muted-foreground">Заявок в день: 150-200</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/logistics-warehouse-trucks.jpg"
                  alt="Логистическая компания"
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
              Проблема: операторы не справлялись с пиковыми нагрузками
            </h2>

            <Card className="border-2 border-red-200 bg-red-50/50 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-red-900">Ситуация до внедрения AI</CardTitle>
                <CardDescription className="text-base text-red-800">
                  Компания теряла до 40% заказов в пиковые часы из-за перегрузки диспетчерской службы. Клиенты не могли
                  дозвониться и обращались к конкурентам.
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
                        <p className="font-medium mb-1">Пиковые нагрузки в определенные часы</p>
                        <p className="text-sm text-muted-foreground">
                          С 9:00 до 11:00 и с 16:00 до 18:00 звонков поступало в 3-4 раза больше обычного. Все 3 оператора
                          были заняты, остальные клиенты слышали длинные гудки или попадали в очередь ожидания на 10-15
                          минут. 85% людей, ожидавших более 5 минут, просто вешали трубку.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Нет приема заказов в нерабочее время</p>
                        <p className="text-sm text-muted-foreground">
                          Компания работала с 8:00 до 20:00. Все звонки в ночное время, в выходные и праздники терялись.
                          Согласно статистике, 15-20% потенциальных клиентов звонили именно в нерабочее время — это около
                          30-40 упущенных заказов в день.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Долгое оформление заказа</p>
                        <p className="text-sm text-muted-foreground">
                          Каждый оператор тратил в среднем 8-10 минут на оформление одного заказа: уточнял адреса, вес и
                          габариты груза, рассчитывал стоимость, вносил данные в CRM. При таком темпе 3 оператора могли
                          обработать максимум 120-150 заявок за смену.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Ошибки в расчете стоимости</p>
                        <p className="text-sm text-muted-foreground">
                          Операторы часто ошибались в расчетах, особенно при сложных маршрутах с несколькими точками
                          выгрузки. Из-за этого приходилось пересчитывать стоимость, терять время на уточнения, а иногда
                          работать себе в убыток.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">5</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Высокая текучка кадров</p>
                        <p className="text-sm text-muted-foreground">
                          Работа оператора логистической компании — это стресс, монотонность и высокая нагрузка. Люди
                          выгорали и увольнялись через 4-6 месяцев. Постоянный найм и обучение новых сотрудников обходился
                          компании в дополнительные ₽150,000-200,000 в год.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-lg border-2 border-red-300">
                  <h4 className="font-semibold mb-3">Финансовые потери:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Упущенные звонки в пиковые часы (40%):</span>
                      <span className="font-bold">60-80 заказов/день</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Звонки в нерабочее время:</span>
                      <span className="font-bold">30-40 заказов/день</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Средний чек за доставку:</span>
                      <span className="font-bold">₽8,500</span>
                    </div>
                    <div className="h-px bg-red-300 my-2" />
                    <div className="flex justify-between">
                      <span>Упущенная выручка в день:</span>
                      <span className="font-bold text-red-600">₽765,000 - ₽1,020,000</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-red-600">
                      <span>Упущенная выручка в месяц:</span>
                      <span>₽22,950,000 - ₽30,600,000</span>
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
              Решение: AI-ассистент для круглосуточного приема заказов
            </h2>

            <Card className="border-2 border-blue-200 bg-blue-50/50 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Что внедрили</CardTitle>
                <CardDescription className="text-base text-blue-800">
                  Голосовой AI-диспетчер, который принимает звонки 24/7, оформляет заказы, рассчитывает стоимость доставки и
                  создает заявки в CRM без участия человека.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Как работает AI-диспетчер:</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 1: Прием звонка и идентификация клиента</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          AI отвечает на звонок за 0.5 секунды, приветствует клиента и проверяет, есть ли он уже в базе по
                          номеру телефона. Если клиент постоянный — загружает историю заказов и предлагает повторить
                          предыдущую доставку.
                        </p>
                        <div className="p-3 bg-white rounded-lg border text-sm italic">
                          "Добрый день! Компания СкороВоз, меня зовут Алексей. Вижу, что вы уже пользовались нашими
                          услугами. Хотите оформить новую доставку или повторить маршрут Москва-Казань, как в прошлый раз?"
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Package className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 2: Сбор информации о грузе</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          AI последовательно уточняет все необходимые данные: откуда забрать груз, куда доставить, вес,
                          габариты, тип груза, нужна ли упаковка, есть ли особые условия (хрупкий товар, температурный
                          режим). Все данные распознаются и структурируются автоматически.
                        </p>
                        <div className="p-3 bg-white rounded-lg border text-sm">
                          <p className="font-medium mb-1">Ключевые вопросы:</p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Откуда нужно забрать груз? (адрес с уточнением)</li>
                            <li>Куда доставить? (город, адрес, контактное лицо)</li>
                            <li>Вес и примерные габариты груза?</li>
                            <li>Что везем? (для выбора типа транспорта)</li>
                            <li>Когда нужна доставка? (срочно или плановая)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 3: Автоматический расчет стоимости</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          AI мгновенно рассчитывает стоимость на основе расстояния, веса, габаритов, типа груза и срочности.
                          Учитывает текущую загрузку автопарка и может предложить скидку при заказе на несрочную дату.
                        </p>
                        <div className="p-3 bg-white rounded-lg border text-sm italic">
                          "Стоимость доставки из Москвы в Казань для груза 500 кг составит ₽12,500. Доставка за 2 дня. Если
                          согласны подождать 4 дня, могу предложить ₽9,800 — у нас будет попутный рейс."
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 4: Оформление заказа и подтверждение</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          После согласования стоимости AI создает заказ в системе, резервирует транспорт, отправляет клиенту
                          SMS с номером заказа и ссылкой для отслеживания. Также формирует задачу логисту на планирование
                          маршрута.
                        </p>
                        <div className="p-3 bg-white rounded-lg border text-sm">
                          <p className="font-medium mb-2">Что фиксируется в CRM:</p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Контакт клиента (ФИО, телефон, email)</li>
                            <li>Детали груза и маршрута</li>
                            <li>Стоимость и условия оплаты</li>
                            <li>Запись разговора с расшифровкой</li>
                            <li>Задачи для логиста и водителя</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">Шаг 5: Сопровождение заказа</p>
                        <p className="text-sm text-muted-foreground">
                          AI отправляет уведомления на каждом этапе: забор груза, отправка в путь, прибытие, доставка. Если
                          возникают задержки — AI сам звонит клиенту и информирует о ситуации. После доставки — запрашивает
                          обратную связь.
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
                      <div className="w-2 h-2 rounded-full bg-orange-600" />
                      Интеграции
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Битрикс24 — CRM для управления заказами</li>
                      <li>• API Яндекс.Карты — расчет расстояния и стоимости</li>
                      <li>• SMS-провайдер — уведомления клиентам</li>
                      <li>• Внутренняя TMS — система управления транспортом</li>
                      <li>• IP-телефония Mango Office</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-600" />
                      Сроки внедрения
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Настройка интеграций — 5 дней</li>
                      <li>• Разработка логики расчетов — 1 неделя</li>
                      <li>• Обучение AI на данных компании — 3 дня</li>
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
              Результаты: прием заказов 24/7 и рост выручки в 2.5 раза
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-center">До внедрения AI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">120-150</div>
                    <p className="text-sm text-muted-foreground">заказов в день</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">08:00-20:00</div>
                    <p className="text-sm text-muted-foreground">время работы</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
                    <p className="text-sm text-muted-foreground">упущенных звонков</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">₽300К</div>
                    <p className="text-sm text-muted-foreground">расходы на операторов</p>
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
                      600-700 <span className="text-xl">+400%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">заказов в день</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">работа без выходных</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      0% <span className="text-xl">-100%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">упущенных звонков</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ₽0 <span className="text-xl">-100%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">расходы на операторов</p>
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
                          <span className="text-sm font-medium">Прием заказов</span>
                          <span className="text-sm font-bold text-green-600">+400%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600" style={{ width: "100%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">С 120-150 до 600-700 заказов в день</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Доступность</span>
                          <span className="text-sm font-bold text-green-600">24/7</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-600" style={{ width: "100%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Круглосуточная работа, включая выходные</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Скорость обработки</span>
                          <span className="text-sm font-bold text-green-600">-60%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600" style={{ width: "85%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">С 8-10 минут до 3-4 минут на заказ</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Упущенные звонки</span>
                          <span className="text-sm font-bold text-green-600">-100%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600" style={{ width: "100%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Все звонки обрабатываются мгновенно</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Экономия на ФОТ</span>
                          <span className="text-sm font-bold text-green-600">₽300,000</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-600" style={{ width: "100%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Высвободили 3 операторов</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Точность расчетов</span>
                          <span className="text-sm font-bold text-green-600">100%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-teal-600" style={{ width: "100%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Нет ошибок в расчете стоимости</p>
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
                      <span className="text-muted-foreground">Дополнительно обработано заказов:</span>
                      <span className="font-bold">+13,500</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Средний чек:</span>
                      <span className="font-bold">₽8,500</span>
                    </div>
                    <div className="h-px bg-green-300 my-2" />
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold">Прирост выручки:</span>
                      <span className="font-bold text-green-600">+₽114,750,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold">Экономия на ФОТ:</span>
                      <span className="font-bold text-green-600">+₽300,000</span>
                    </div>
                    <div className="h-px bg-green-400 my-2" />
                    <div className="flex justify-between items-center py-3 text-lg">
                      <span className="font-bold">Общий эффект:</span>
                      <span className="font-bold text-2xl text-green-600">+₽115,050,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm">
                      <span className="text-muted-foreground">Стоимость внедрения AI:</span>
                      <span className="font-medium">₽350,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm">
                      <span className="text-muted-foreground">ROI:</span>
                      <span className="font-bold text-green-600">32,771%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm">
                      <span className="text-muted-foreground">Срок окупаемости:</span>
                      <span className="font-bold text-green-600">3 дня</span>
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
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white text-2xl font-bold">
                      МС
                    </div>
                  </div>
                  <div>
                    <p className="text-xl italic mb-4 leading-relaxed">
                      "Мы не верили, что AI сможет заменить живых операторов в таком сложном деле, как логистика. Но AI
                      справляется даже лучше: он точнее считает, не делает ошибок, работает круглые сутки. Теперь клиенты
                      оформляют заказы даже ночью, а мы больше не теряем ни одного звонка. За первый месяц выручка выросла
                      в 2.5 раза. Это невероятно!"
                    </p>
                    <p className="font-bold text-lg">Михаил Соколов</p>
                    <p className="text-muted-foreground">Директор компании СкороВоз</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Хотите так же автоматизировать прием заказов?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Покажем, как AI-ассистент поможет принимать в 4 раза больше заказов и работать 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ru/solutions/voice-sales-manager">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50">
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
