"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Mic,
  Brain,
  Volume2,
  Database,
  CreditCard,
  Phone,
  Shield,
  BarChart3,
  Zap,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useCTA } from "@/components/modals/cta-provider"

interface ArchitecturePageProps {
  params: { locale: string }
}

export default function ArchitecturePage({ params }: ArchitecturePageProps) {
  const { locale } = params
  const t = useTranslations()
  const { openModal } = useCTA()
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)

  const architectureComponents = [
    {
      id: "asr",
      title: "ASR (Speech-to-Text)",
      description: "Преобразование речи в текст с высокой точностью",
      icon: Mic,
      details: {
        technology: "Whisper, Google Speech, Azure Speech",
        accuracy: "95%+ для русского языка",
        latency: "<200ms",
        features: ["Шумоподавление", "Многоязычность", "Потоковая обработка"],
      },
      color: "bg-blue-500",
    },
    {
      id: "llm",
      title: "LLM (Language Model)",
      description: "Обработка естественного языка и генерация ответов",
      icon: Brain,
      details: {
        technology: "GPT-4, Claude, Llama, DeepSeek",
        capabilities: "Диалог, RAG, Function Calling",
        context: "До 128K токенов",
        features: ["Контекстная память", "Персонализация", "Мультимодальность"],
      },
      color: "bg-purple-500",
    },
    {
      id: "tts",
      title: "TTS (Text-to-Speech)",
      description: "Синтез естественной речи из текста",
      icon: Volume2,
      details: {
        technology: "ElevenLabs, Azure TTS, Yandex SpeechKit",
        quality: "Студийное качество голоса",
        latency: "<300ms",
        features: ["Эмоциональная окраска", "Клонирование голоса", "SSML поддержка"],
      },
      color: "bg-green-500",
    },
    {
      id: "rag",
      title: "RAG (База знаний)",
      description: "Поиск и использование релевантной информации",
      icon: Database,
      details: {
        technology: "Vector DB, Elasticsearch, Pinecone",
        sources: "Документы, FAQ, CRM данные",
        accuracy: "90%+ релевантность",
        features: ["Семантический поиск", "Автообновление", "Версионирование"],
      },
      color: "bg-orange-500",
    },
    {
      id: "crm",
      title: "CRM интеграция",
      description: "Синхронизация с системами управления клиентами",
      icon: Database,
      details: {
        systems: "Salesforce, HubSpot, amoCRM, Битрикс24",
        sync: "Реального времени",
        data: "Контакты, сделки, история",
        features: ["Двусторонняя синхронизация", "Webhook уведомления", "Кастомные поля"],
      },
      color: "bg-red-500",
    },
    {
      id: "billing",
      title: "Биллинг системы",
      description: "Интеграция с системами выставления счетов",
      icon: CreditCard,
      details: {
        systems: "1C, SAP, QuickBooks, Stripe",
        functions: "Счета, оплаты, подписки",
        automation: "Автоматическое выставление",
        features: ["Мультивалютность", "Налоговые расчеты", "Отчетность"],
      },
      color: "bg-indigo-500",
    },
  ]

  const dataFlow = [
    { step: 1, title: "Входящий голос", description: "Клиент говорит в микрофон или телефон" },
    { step: 2, title: "ASR обработка", description: "Речь преобразуется в текст с высокой точностью" },
    { step: 3, title: "NLU анализ", description: "Определение намерений и извлечение сущностей" },
    { step: 4, title: "Бизнес-логика", description: "Обращение к CRM, базе знаний, внешним API" },
    { step: 5, title: "Генерация ответа", description: "LLM формирует персонализированный ответ" },
    { step: 6, title: "TTS синтез", description: "Текст преобразуется в естественную речь" },
    { step: 7, title: "Ответ клиенту", description: "Голосовой ответ передается клиенту" },
  ]

  const scalingFeatures = [
    {
      title: "Автомасштабирование",
      description: "Автоматическое добавление ресурсов при росте нагрузки",
      icon: Zap,
    },
    {
      title: "Очереди запросов",
      description: "Управление нагрузкой с приоритизацией запросов",
      icon: BarChart3,
    },
    {
      title: "Отказоустойчивость",
      description: "Резервирование компонентов и быстрое восстановление",
      icon: Shield,
    },
    {
      title: "Глобальное развертывание",
      description: "Размещение в разных регионах для минимизации задержек",
      icon: Globe,
    },
  ]

  const securityFeatures = [
    "End-to-end шифрование голосовых данных",
    "Соответствие GDPR и другим стандартам",
    "Аудит всех операций и доступов",
    "Изоляция данных клиентов",
    "Регулярные тесты на проникновение",
    "Сертификация SOC 2 Type II",
  ]

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <Badge variant="secondary" className="mb-4">
              Архитектура платформы
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Современная микросервисная архитектура для голосовых AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Масштабируемая, отказоустойчивая и безопасная инфраструктура, способная обрабатывать миллионы голосовых
              запросов
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button size="lg" onClick={() => openModal("demo")} className="w-full sm:w-auto h-11 sm:h-12">
                {t("cta.requestDemo")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-11 sm:h-12 bg-transparent">
                <Link href="/api/download/pitch?lang=ru">Скачать whitepaper</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Interactive Architecture Diagram */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Интерактивная диаграмма архитектуры</h2>
              <p className="text-xl text-muted-foreground">Нажмите на компоненты для подробной информации</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Architecture Diagram */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <div className="space-y-8">
                    {/* Input Layer */}
                    <div className="text-center">
                      <div className="inline-flex items-center gap-4 bg-blue-50 rounded-lg p-4">
                        <Phone className="h-8 w-8 text-blue-600" />
                        <span className="font-semibold text-blue-900">Голосовой ввод</span>
                      </div>
                    </div>

                    {/* Processing Layer */}
                    <div className="grid grid-cols-3 gap-4">
                      {architectureComponents.slice(0, 3).map((component) => {
                        const Icon = component.icon
                        return (
                          <button
                            key={component.id}
                            onClick={() => setSelectedComponent(component.id)}
                            className={`${component.color} text-white rounded-lg p-4 text-center hover:opacity-90 transition-all ${
                              selectedComponent === component.id ? "ring-4 ring-primary" : ""
                            }`}
                          >
                            <Icon className="h-6 w-6 mx-auto mb-2" />
                            <div className="text-sm font-medium">{component.title}</div>
                          </button>
                        )
                      })}
                    </div>

                    {/* Integration Layer */}
                    <div className="grid grid-cols-3 gap-4">
                      {architectureComponents.slice(3).map((component) => {
                        const Icon = component.icon
                        return (
                          <button
                            key={component.id}
                            onClick={() => setSelectedComponent(component.id)}
                            className={`${component.color} text-white rounded-lg p-4 text-center hover:opacity-90 transition-all ${
                              selectedComponent === component.id ? "ring-4 ring-primary" : ""
                            }`}
                          >
                            <Icon className="h-6 w-6 mx-auto mb-2" />
                            <div className="text-sm font-medium">{component.title}</div>
                          </button>
                        )
                      })}
                    </div>

                    {/* Output */}
                    <div className="text-center">
                      <div className="inline-flex items-center gap-4 bg-green-50 rounded-lg p-4">
                        <Volume2 className="h-8 w-8 text-green-600" />
                        <span className="font-semibold text-green-900">Голосовой ответ</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Component Details */}
              <div>
                {selectedComponent ? (
                  <Card>
                    {(() => {
                      const component = architectureComponents.find((c) => c.id === selectedComponent)
                      if (!component) return null
                      const Icon = component.icon
                      return (
                        <>
                          <CardHeader>
                            <div
                              className={`w-12 h-12 ${component.color} text-white rounded-lg flex items-center justify-center mb-4`}
                            >
                              <Icon className="h-6 w-6" />
                            </div>
                            <CardTitle>{component.title}</CardTitle>
                            <CardDescription>{component.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2">Технологии:</h4>
                                <p className="text-sm text-muted-foreground">{component.details.technology}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">Возможности:</h4>
                                <ul className="space-y-1">
                                  {component.details.features.map((feature, index) => (
                                    <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </>
                      )
                    })()}
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <div className="text-muted-foreground">
                        Нажмите на любой компонент диаграммы, чтобы узнать подробности о его работе и технологиях
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Data Flow */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Поток обработки данных</h2>
              <p className="text-xl text-muted-foreground">От голосового запроса до персонализированного ответа</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataFlow.map((flow, index) => (
                <Card key={index} className="relative">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {flow.step}
                    </div>
                    <CardTitle className="text-lg">{flow.title}</CardTitle>
                    <CardDescription>{flow.description}</CardDescription>
                  </CardHeader>
                  {index < dataFlow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scaling & Reliability */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Масштабирование и надежность</h2>
              <p className="text-xl text-muted-foreground">Готовность к любым нагрузкам и требованиям</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scalingFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index}>
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Безопасность и соответствие</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Корпоративный уровень безопасности для защиты критически важных данных
                </p>
                <ul className="space-y-4">
                  {securityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Card className="p-8">
                  <div className="text-center">
                    <Shield className="h-16 w-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Сертификации</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Badge variant="outline" className="p-3">
                        SOC 2 Type II
                      </Badge>
                      <Badge variant="outline" className="p-3">
                        GDPR
                      </Badge>
                      <Badge variant="outline" className="p-3">
                        ISO 27001
                      </Badge>
                      <Badge variant="outline" className="p-3">
                        HIPAA Ready
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Monitoring & Analytics */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Мониторинг и аналитика</h2>
              <p className="text-xl text-muted-foreground">Полная наблюдаемость системы в реальном времени</p>
            </div>
            <Tabs defaultValue="metrics" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="metrics">Метрики</TabsTrigger>
                <TabsTrigger value="logs">Логи</TabsTrigger>
                <TabsTrigger value="alerts">Алерты</TabsTrigger>
              </TabsList>
              <TabsContent value="metrics" className="mt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Производительность</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Время ответа системы</li>
                        <li>• Пропускная способность</li>
                        <li>• Использование ресурсов</li>
                        <li>• Качество голоса</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Бизнес-метрики</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Конверсия диалогов</li>
                        <li>• Удовлетворенность клиентов</li>
                        <li>• Время разрешения запросов</li>
                        <li>• ROI автоматизации</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Техническое здоровье</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Доступность сервисов</li>
                        <li>• Частота ошибок</li>
                        <li>• Состояние интеграций</li>
                        <li>• Безопасность</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="logs" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Централизованное логирование</CardTitle>
                    <CardDescription>Все события системы в одном месте с возможностью поиска и анализа</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div>[2024-01-15 10:30:15] INFO: Voice call started, session_id: abc123</div>
                      <div>[2024-01-15 10:30:16] DEBUG: ASR processing completed, confidence: 0.95</div>
                      <div>[2024-01-15 10:30:17] INFO: LLM response generated, tokens: 150</div>
                      <div>[2024-01-15 10:30:18] INFO: TTS synthesis completed, duration: 3.2s</div>
                      <div>[2024-01-15 10:30:21] INFO: Call completed successfully</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="alerts" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Критические алерты</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Недоступность сервиса &gt; 1 мин
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Частота ошибок &gt; 5%
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Время ответа &gt; 5 сек
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Предупреждения</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          Высокая нагрузка на CPU
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          Медленные запросы к БД
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          Низкое качество голоса
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Готовы развернуть корпоративное решение?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Получите техническую консультацию и план внедрения для вашей инфраструктуры
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
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto h-11 sm:h-12"
                asChild
              >
                <Link href="/api/download/pitch?lang=ru">Скачать техническую документацию</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
