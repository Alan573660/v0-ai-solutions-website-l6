"use client"

import type React from "react"
import type { Locale } from "next-intl"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Mic, MicOff, Play, Pause, Phone, Volume2, CheckCircle, AlertCircle } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import { useTranslations } from "next-intl"

interface DemoPageProps {
  params: { locale: Locale }
}

export default function DemoPage({ params }: DemoPageProps) {
  const { locale } = params
  const t = useTranslations()
  const { openModal } = useCTA()

  const [isRecording, setIsRecording] = useState(false)
  const [selectedScenario, setSelectedScenario] = useState("sales")
  const [currentAudio, setCurrentAudio] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [micPermission, setMicPermission] = useState<"granted" | "denied" | "prompt">("prompt")
  const [audioError, setAudioError] = useState<string | null>(null)
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    preferredTime: "",
    channel: "web",
    message: "",
    privacy: false,
  })

  const audioRef = useRef<HTMLAudioElement>(null)
  const playPromiseRef = useRef<Promise<void> | null>(null)

  const scenarios = [
    {
      id: "sales",
      title: "Продажи",
      description: "Квалификация лидов и презентация продукта",
      example: "Здравствуйте! Расскажите о ваших потребностях в автоматизации...",
    },
    {
      id: "hotel",
      title: "Отель",
      description: "Заказы и услуги для гостей",
      example: "Добро пожаловать! Чем могу помочь? Могу принять заказ или вызвать такси...",
    },
    {
      id: "support",
      title: "Поддержка",
      description: "Техническая поддержка клиентов",
      example: "Здравствуйте! Опишите проблему, и я помогу найти решение...",
    },
  ]

  const audioExamples = [
    {
      title: "Продажи - Квалификация лида",
      duration: "2:30",
      description: "Диалог с потенциальным клиентом о потребностях в автоматизации",
      url: "/audio/sales-qualification.mp3",
    },
    {
      title: "Отель - Заказ еды в номер",
      duration: "1:45",
      description: "Прием заказа завтрака с уточнением деталей доставки",
      url: "/audio/hotel-room-service.mp3",
    },
    {
      title: "Поддержка - Решение проблемы",
      duration: "3:15",
      description: "Диагностика и решение технической проблемы клиента",
      url: "/audio/support-troubleshooting.mp3",
    },
  ]

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      setMicPermission("granted")
      setIsRecording(true)
      // Here you would implement actual recording logic
    } catch (error) {
      setMicPermission("denied")
    }
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    // Here you would process the recording
  }

  const handlePlayAudio = async (url: string) => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (currentAudio === url && isPlaying) {
        if (playPromiseRef.current) {
          await playPromiseRef.current
        }
        audio.pause()
        setIsPlaying(false)
        setCurrentAudio(null)
        return
      }

      if (isPlaying && playPromiseRef.current) {
        await playPromiseRef.current
        audio.pause()
      }

      setAudioError(null)

      audio.src = url
      audio.load()

      playPromiseRef.current = audio.play()
      await playPromiseRef.current

      setCurrentAudio(url)
      setIsPlaying(true)
      playPromiseRef.current = null
    } catch (error) {
      console.error("[v0] Audio playback error:", error)
      setIsPlaying(false)
      setCurrentAudio(null)
      playPromiseRef.current = null

      if (error instanceof Error) {
        if (error.name === "NotSupportedError") {
          setAudioError("Аудио файл недоступен. Пожалуйста, свяжитесь с нами для получения демо.")
        } else if (error.name === "AbortError") {
          setAudioError(null)
        } else {
          setAudioError("Ошибка воспроизведения. Попробуйте еще раз.")
        }
      }
    }
  }

  const handleDemoFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would submit the form data
  }

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <Badge variant="secondary" className="mb-4">
              Демонстрация платформы
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Попробуйте голосовых AI-ассистентов в действии
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Интерактивные демо, аудио-примеры и возможность позвонить на демо-номер для живого тестирования
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Голосовой демо-виджет</h2>
              <p className="text-xl text-muted-foreground">Говорите с AI прямо в браузере</p>
            </div>

            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  {isRecording && (
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-30"></div>
                  )}
                  <Mic className="h-16 w-16 text-white" />
                </div>

                <div className="mb-6">
                  <Label htmlFor="scenario-select" className="text-base font-medium mb-3 block">
                    Выберите сценарий:
                  </Label>
                  <Tabs value={selectedScenario} onValueChange={setSelectedScenario} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      {scenarios.map((scenario) => (
                        <TabsTrigger key={scenario.id} value={scenario.id}>
                          {scenario.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {scenarios.map((scenario) => (
                      <TabsContent key={scenario.id} value={scenario.id} className="mt-4">
                        <div className="text-center">
                          <h3 className="font-semibold mb-2">{scenario.description}</h3>
                          <p className="text-muted-foreground text-sm italic">"{scenario.example}"</p>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>

                {micPermission === "denied" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 text-red-700">
                      <AlertCircle className="h-5 w-5" />
                      <span className="font-medium">Доступ к микрофону заблокирован</span>
                    </div>
                    <p className="text-red-600 text-sm mt-2">
                      Разрешите доступ к микрофону в настройках браузера или попробуйте аудио-примеры ниже
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {!isRecording ? (
                    <Button size="lg" onClick={handleStartRecording} disabled={micPermission === "denied"}>
                      <Mic className="mr-2 h-5 w-5" />
                      Начать разговор
                    </Button>
                  ) : (
                    <Button size="lg" variant="destructive" onClick={handleStopRecording}>
                      <MicOff className="mr-2 h-5 w-5" />
                      Остановить
                    </Button>
                  )}
                  <Button size="lg" variant="outline" onClick={() => openModal("call", "Позвонить на демо-линию")}>
                    <Phone className="mr-2 h-5 w-5" />
                    {t("cta.call")}
                  </Button>
                </div>

                {isRecording && (
                  <div className="mt-6">
                    <div className="flex items-center justify-center gap-2 text-red-600">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Слушаю...</span>
                    </div>
                    <div className="mt-4 bg-gray-100 rounded-lg p-4">
                      <div className="flex justify-center space-x-1">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-blue-500 rounded-full animate-pulse"
                            style={{
                              height: `${Math.random() * 40 + 10}px`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Ваши данные защищены и не сохраняются</span>
                  </div>
                  <p>Это демо-версия. Для полного функционала свяжитесь с нами</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Checkbox id="demo-consent" />
                  <Label htmlFor="demo-consent" className="text-sm">
                    Согласен на обработку голосовых данных для демонстрации
                  </Label>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Аудио-примеры диалогов</h2>
              <p className="text-xl text-muted-foreground">Послушайте записи реальных диалогов с AI-ассистентами</p>
            </div>

            {audioError && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-2xl mx-auto">
                <div className="flex items-center gap-2 text-yellow-700">
                  <AlertCircle className="h-5 w-5" />
                  <span className="font-medium">{audioError}</span>
                </div>
                <p className="text-yellow-600 text-sm mt-2">
                  Для прослушивания реальных примеров диалогов{" "}
                  <button
                    onClick={() => openModal("demo", "Запросить аудио примеры")}
                    className="underline font-medium hover:text-yellow-800"
                  >
                    запросите демонстрацию
                  </button>
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-6">
              {audioExamples.map((example, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <CardDescription>{example.description}</CardDescription>
                    <Badge variant="secondary" className="w-fit">
                      {example.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full"
                      variant={currentAudio === example.url && isPlaying ? "secondary" : "default"}
                      onClick={() => handlePlayAudio(example.url)}
                    >
                      {currentAudio === example.url && isPlaying ? (
                        <>
                          <Pause className="mr-2 h-4 w-4" />
                          Пауза
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Воспроизвести
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <audio
              ref={audioRef}
              onEnded={() => {
                setIsPlaying(false)
                setCurrentAudio(null)
                playPromiseRef.current = null
              }}
              onPause={() => {
                setIsPlaying(false)
              }}
              onError={(e) => {
                const target = e.currentTarget as HTMLAudioElement
                const error = target.error

                let errorMessage = "Не удалось загрузить аудио файл"

                if (error) {
                  console.error("[v0] Audio element error:", {
                    code: error.code,
                    message: error.message,
                    src: target.src,
                  })

                  switch (error.code) {
                    case MediaError.MEDIA_ERR_ABORTED:
                      errorMessage = "Загрузка аудио была прервана"
                      break
                    case MediaError.MEDIA_ERR_NETWORK:
                      errorMessage = "Ошибка сети при загрузке аудио"
                      break
                    case MediaError.MEDIA_ERR_DECODE:
                      errorMessage = "Ошибка декодирования аудио файла"
                      break
                    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                      errorMessage =
                        "Аудио файлы пока недоступны. Запросите демонстрацию для прослушивания реальных примеров."
                      break
                  }
                } else {
                  console.error("[v0] Audio element error: Unknown error", e)
                }

                setIsPlaying(false)
                setCurrentAudio(null)
                playPromiseRef.current = null
                setAudioError(errorMessage)
              }}
            />
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Позвонить на демо-номер</h2>
              <p className="text-xl text-muted-foreground">Протестируйте AI-ассистента по телефону</p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Демо-линия доступна 24/7</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Бесплатные звонки для тестирования</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Разные сценарии по выбору</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Поддержка русского и английского</span>
                    </li>
                  </ul>
                  <div className="space-y-4">
                    <Button size="lg" className="w-full" onClick={() => openModal("call", "Позвонить на демо-линию")}>
                      <Phone className="mr-2 h-5 w-5" />
                      Позвонить: +34 600 000 000
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => openModal("call", "Звонок через браузер")}
                    >
                      <Volume2 className="mr-2 h-5 w-5" />
                      Звонок через браузер
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-24 w-24 text-white" />
                  </div>
                  <p className="text-muted-foreground">
                    Среднее время ожидания: <strong>0 секунд</strong>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Запросить персональную демонстрацию</h2>
              <p className="text-xl text-muted-foreground">Получите индивидуальную презентацию для ваших задач</p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleDemoFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      value={demoFormData.name}
                      onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Компания *</Label>
                    <Input
                      id="company"
                      value={demoFormData.company}
                      onChange={(e) => setDemoFormData({ ...demoFormData, company: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={demoFormData.email}
                      onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={demoFormData.phone}
                      onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="preferred-time">Предпочтительное время</Label>
                    <Input
                      id="preferred-time"
                      type="datetime-local"
                      value={demoFormData.preferredTime}
                      onChange={(e) => setDemoFormData({ ...demoFormData, preferredTime: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="channel">Канал демонстрации</Label>
                    <select
                      id="channel"
                      className="w-full p-2 border rounded-md"
                      value={demoFormData.channel}
                      onChange={(e) => setDemoFormData({ ...demoFormData, channel: e.target.value })}
                    >
                      <option value="web">Веб-конференция</option>
                      <option value="phone">Телефонный звонок</option>
                      <option value="office">Встреча в офисе</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о ваших задачах и интересующих сценариях..."
                    value={demoFormData.message}
                    onChange={(e) => setDemoFormData({ ...demoFormData, message: e.target.value })}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={demoFormData.privacy}
                    onCheckedChange={(checked) => setDemoFormData({ ...demoFormData, privacy: !!checked })}
                    required
                  />
                  <Label htmlFor="privacy" className="text-sm">
                    Согласен на обработку персональных данных и получение коммерческих предложений *
                  </Label>
                </div>

                <Button
                  type="button"
                  size="lg"
                  className="w-full"
                  disabled={!demoFormData.privacy}
                  onClick={() => openModal("demo", "Запросить персональную демонстрацию")}
                >
                  Запросить демонстрацию
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong>Юридические оговорки:</strong> Демо-версия использует тестовые данные и может не отражать полный
                функционал продакшн-системы.
              </p>
              <p>
                Голосовые данные обрабатываются в соответствии с GDPR и не сохраняются после завершения демонстрации.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
