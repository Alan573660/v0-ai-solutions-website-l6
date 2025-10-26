"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building2, Utensils, Car, Calendar, MapPin, Phone, PlayCircle, CheckCircle } from "lucide-react"
import { useTranslations } from "@/lib/i18n/translations"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

interface HotelConciergePageProps {
  params: { locale: Locale }
}

export default function HotelConciergeClient({ params }: HotelConciergePageProps) {
  const { locale } = params
  const { t } = useTranslations(locale)
  const { openModal } = useCTA()

  const functions = [
    {
      title: "Заказ еды в номер",
      description: "Прием заказов, уточнение деталей, передача на кухню",
      icon: Utensils,
    },
    {
      title: "Услуги уборки",
      description: "Запрос дополнительной уборки, смены белья, полотенец",
      icon: Building2,
    },
    {
      title: "Поздний выезд",
      description: "Оформление позднего выезда, расчет доплаты",
      icon: Calendar,
    },
    {
      title: "Заказ такси",
      description: "Вызов такси, трансфер в аэропорт, экскурсии",
      icon: Car,
    },
    {
      title: "Бронирование ресторанов",
      description: "Столики в ресторанах, билеты на события",
      icon: Calendar,
    },
    {
      title: "Гид по городу",
      description: "Рекомендации мест, маршруты, достопримечательности",
      icon: MapPin,
    },
  ]

  const channels = [
    { name: "Умная колонка в номере", description: "Голосовое управление без телефона" },
    { name: "Телефон в номере", description: "Привычный способ связи" },
    { name: "Веб-интерфейс", description: "Через сайт отеля или приложение" },
    { name: "Мессенджеры", description: "WhatsApp, Telegram, Facebook Messenger" },
  ]

  const scenarios = [
    {
      id: "food",
      title: "Еда в номер",
      description: "Заказ завтрака в номер",
      dialogue: [
        { speaker: "Гость", text: "Хочу заказать завтрак в номер" },
        { speaker: "AI", text: "Конечно! Меню завтрака доступно до 11:00. Что бы вы хотели заказать?" },
        { speaker: "Гость", text: "Континентальный завтрак и кофе" },
        { speaker: "AI", text: "Отлично! Континентальный завтрак и кофе. Когда удобно доставить? Сейчас 9:30" },
        { speaker: "Гость", text: "Через 30 минут" },
        { speaker: "AI", text: "Заказ принят! Доставим в 10:00 в номер 205. Стоимость 25€. Спасибо!" },
      ],
    },
    {
      id: "cleaning",
      title: "Уборка",
      description: "Запрос дополнительной уборки",
      dialogue: [
        { speaker: "Гость", text: "Нужны дополнительные полотенца" },
        { speaker: "AI", text: "Конечно! Сколько полотенец вам нужно?" },
        { speaker: "Гость", text: "Два банных полотенца" },
        { speaker: "AI", text: "Хорошо! Горничная принесет два банных полотенца в номер 205 в течение 15 минут" },
      ],
    },
    {
      id: "transport",
      title: "Транспорт",
      description: "Заказ такси в аэропорт",
      dialogue: [
        { speaker: "Гость", text: "Нужно такси в аэропорт завтра в 8 утра" },
        { speaker: "AI", text: "Конечно! Такси в аэропорт на 8:00. Какой аэропорт?" },
        { speaker: "Гость", text: "Барахас, терминал 2" },
        {
          speaker: "AI",
          text: "Заказ оформлен! Такси будет у отеля завтра в 8:00. Стоимость 35€. Время в пути около 45 минут",
        },
      ],
    },
  ]

  const integrations = [
    { name: "PMS системы", description: "Opera, Fidelio, RoomMaster" },
    { name: "Ресторанные системы", description: "Интеграция с кухней и баром" },
    { name: "Службы такси", description: "Uber, Bolt, местные службы" },
    { name: "Платежные системы", description: "Оплата услуг через номер" },
  ]

  const packages = [
    {
      name: "Small",
      description: "До 50 номеров",
      price: "€299/мес",
      features: ["Базовые сценарии", "Телефон + веб", "Email поддержка"],
    },
    {
      name: "Medium",
      description: "50-200 номеров",
      price: "€599/мес",
      features: ["Все сценарии", "Все каналы", "Интеграции", "Приоритетная поддержка"],
    },
    {
      name: "Large",
      description: "200+ номеров",
      price: "от €999/мес",
      features: ["Полная кастомизация", "Мультиязычность", "Аналитика", "Персональный менеджер"],
    },
  ]

  const hotelCases = [
    {
      title: "Boutique Hotel Barcelona",
      description: "Увеличили удовлетворенность гостей на 40%",
      results: ["95% положительных отзывов", "60% экономия времени персонала", "24/7 доступность"],
    },
    {
      title: "Resort Chain Spain",
      description: "Автоматизировали 80% запросов гостей",
      results: ["80% автоматизация", "Поддержка 5 языков", "ROI 300% за год"],
    },
  ]

  const faq = [
    {
      question: "Поддерживает ли система несколько языков?",
      answer:
        "Да, поддерживаем основные европейские языки: английский, испанский, французский, немецкий, итальянский и другие по запросу.",
    },
    {
      question: "Как интегрируется с нашей PMS?",
      answer:
        "Интегрируемся с популярными PMS через API. Получаем данные о гостях, номерах, счетах для персонализации сервиса.",
    },
    {
      question: "Что если AI не может ответить на вопрос?",
      answer: "Система переводит сложные запросы на живого сотрудника с полным контекстом разговора.",
    },
    {
      question: "Какая стоимость внедрения?",
      answer: "Стоимость зависит от размера отеля и количества интеграций. Базовое внедрение от €2,000.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  AI-консьерж для отелей
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
                  Ресепшн без очередей. Гости получают сервис голосом
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  AI-консьерж обрабатывает запросы гостей 24/7: заказы еды, уборка, такси, бронирования. Повышает
                  удовлетворенность и экономит время персонала
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>95% удовлетворенность гостей</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>60% экономия времени персонала</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Поддержка 10+ языков</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" onClick={() => openModal("demo")} className="w-full sm:w-auto h-11 sm:h-12">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    {t("cta.listenDemo")}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => openModal("call")}
                    className="w-full sm:w-auto h-11 sm:h-12"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {t("cta.call")}
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Консьерж Мария</h3>
                      <p className="text-white/80">Готова помочь</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sm">
                        "Добро пожаловать в наш отель! Чем могу помочь? Могу принять заказ, вызвать такси или
                        забронировать столик"
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/10 rounded p-2 text-center">Заказ еды</div>
                      <div className="bg-white/10 rounded p-2 text-center">Вызов такси</div>
                      <div className="bg-white/10 rounded p-2 text-center">Уборка</div>
                      <div className="bg-white/10 rounded p-2 text-center">Экскурсии</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Functions Section */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Функции AI-консьержа</h2>
              <p className="text-xl text-muted-foreground">Полный спектр услуг для комфорта ваших гостей</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {functions.map((func, index) => {
                const Icon = func.icon
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{func.title}</CardTitle>
                      <CardDescription>{func.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Channels Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Каналы взаимодействия</h2>
              <p className="text-xl text-muted-foreground">Гости могут обращаться удобным способом</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channels.map((channel, index) => (
                <Card key={index}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{channel.name}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Сценарии обслуживания</h2>
              <p className="text-xl text-muted-foreground">Примеры диалогов с AI-консьержем</p>
            </div>
            <Tabs defaultValue="food" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                {scenarios.map((scenario) => (
                  <TabsTrigger key={scenario.id} value={scenario.id}>
                    {scenario.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {scenarios.map((scenario) => (
                <TabsContent key={scenario.id} value={scenario.id} className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>{scenario.title}</CardTitle>
                      <CardDescription>{scenario.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {scenario.dialogue.map((line, index) => (
                          <div
                            key={index}
                            className={`flex ${line.speaker === "AI" ? "justify-start" : "justify-end"}`}
                          >
                            <div
                              className={`max-w-[80%] p-4 rounded-lg ${
                                line.speaker === "AI" ? "bg-purple-700 text-white" : "bg-muted"
                              }`}
                            >
                              <p className="text-sm font-medium mb-1">{line.speaker}</p>
                              <p>{line.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 text-center">
                        <Button
                          variant="outline"
                          onClick={() => openModal("demo")}
                          className="w-full sm:w-auto h-11 sm:h-12"
                        >
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Послушать диалог
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Demo Widget */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Попробуйте AI-консьержа</h2>
              <p className="text-xl text-muted-foreground">Интерактивная демонстрация возможностей</p>
            </div>
            <Card className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Консьерж готов к работе</h3>
                <p className="text-muted-foreground mb-8">
                  Нажмите кнопку и попробуйте заказать еду в номер или вызвать такси
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-purple-700 hover:bg-purple-800"
                    onClick={() => openModal("demo")}
                    className="w-full sm:w-auto h-11 sm:h-12"
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Начать разговор
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => openModal("call")}
                    className="w-full sm:w-auto h-11 sm:h-12"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Позвонить на демо
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Интеграции</h2>
              <p className="text-xl text-muted-foreground">Подключаем к системам отеля</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{integration.name}</CardTitle>
                    <CardDescription>{integration.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hotel Cases */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Кейсы отелей</h2>
              <p className="text-xl text-muted-foreground">Результаты наших клиентов</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {hotelCases.map((case_, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{case_.title}</CardTitle>
                    <CardDescription className="text-base">{case_.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {case_.results.map((result, resultIndex) => (
                        <Badge key={resultIndex} variant="secondary">
                          {result}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href={`/${locale}/cases`}>Читать кейс полностью</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Пакеты для отелей</h2>
              <p className="text-xl text-muted-foreground">Выберите подходящий тариф</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={index === 1 ? "border-purple-500 border-2" : ""}>
                  <CardHeader className="text-center">
                    {index === 1 && <Badge className="w-fit mx-auto mb-2 bg-purple-500">Популярный</Badge>}
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="text-3xl font-bold text-purple-600 mt-4">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={index === 1 ? "default" : "outline"}
                      asChild
                      data-cta="cta-calculate"
                    >
                      <Link href={`/${locale}/platform/pricing-calculator`}>Выбрать пакет</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 bg-purple-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Повысьте сервис вашего отеля</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Получите демонстрацию AI-консьержа и расчет для вашего отеля
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => openModal("demo")}
                className="w-full sm:w-auto h-11 sm:h-12"
              >
                {t("cta.requestDemo")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600 w-full sm:w-auto h-11 sm:h-12"
                asChild
              >
                <Link href={`/${locale}/platform/pricing-calculator`}>{t("cta.calculate")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
