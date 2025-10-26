"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mic, MicOff, Phone, Play, Volume2, MessageSquare } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import { useTranslations, type Locale } from "@/lib/i18n/translations"

export function DemoSection({ locale }: { locale: Locale }) {
  const [isRecording, setIsRecording] = useState(false)
  const [selectedScenario, setSelectedScenario] = useState("sales")
  const { openModal } = useCTA()
  const { t } = useTranslations(locale)

  const scenarios = [
    {
      id: "sales",
      name: t("demo.scenario.sales"),
      description: t("demo.scenario.salesDesc"),
    },
    {
      id: "hotel",
      name: t("demo.scenario.hotel"),
      description: t("demo.scenario.hotelDesc"),
    },
  ]

  const handleStartRecording = () => {
    setIsRecording(true)
    setTimeout(() => setIsRecording(false), 5000)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t("demo.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("demo.description")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{t("demo.voiceDemo.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("demo.voiceDemo.description")}</p>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">{t("demo.scenario.label")}</label>
                <div className="grid grid-cols-2 gap-2">
                  {scenarios.map((scenario) => (
                    <button
                      key={scenario.id}
                      onClick={() => setSelectedScenario(scenario.id)}
                      className={`p-3 text-left rounded-lg border transition-colors ${
                        selectedScenario === scenario.id
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-muted-foreground/50"
                      }`}
                    >
                      <div className="font-medium text-sm">{scenario.name}</div>
                      <div className="text-xs text-muted-foreground">{scenario.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="relative inline-flex">
                  <Button
                    size="lg"
                    onClick={handleStartRecording}
                    disabled={isRecording}
                    className={`h-20 w-20 rounded-full ${isRecording ? "bg-red-500 hover:bg-red-600" : ""}`}
                  >
                    {isRecording ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                  </Button>
                  {isRecording && (
                    <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-ping" />
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">{isRecording ? t("demo.listening") : t("demo.clickToStart")}</p>
                  {isRecording && (
                    <div className="flex items-center justify-center space-x-1">
                      <div className="h-1 w-1 bg-red-500 rounded-full animate-bounce" />
                      <div
                        className="h-1 w-1 bg-red-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="h-1 w-1 bg-red-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <Volume2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{t("demo.transcript.title")}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="h-4 w-4 text-primary mt-0.5" />
                    <p>
                      <strong>{t("demo.transcript.ai")}:</strong> {t("demo.transcript.greeting")}
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="h-4 w-4 bg-muted rounded-full mt-0.5" />
                    <p>
                      <strong>{t("demo.transcript.you")}:</strong> {t("demo.transcript.userQuestion")}
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="h-4 w-4 text-primary mt-0.5" />
                    <p>
                      <strong>{t("demo.transcript.ai")}:</strong> {t("demo.transcript.aiResponse")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-8">
            <Card className="p-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">{t("demo.phone.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("demo.phone.description")}</p>

                <div className="space-y-4">
                  <div className="text-2xl font-bold text-primary">{t("demo.phone.number")}</div>
                  <Button size="lg" className="w-full" onClick={() => openModal("call", t("demo.phone.callNow"))}>
                    <Phone className="mr-2 h-5 w-5" />
                    {t("demo.phone.callNow")}
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground">{t("demo.phone.notice")}</div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{t("demo.examples.title")}</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{t("demo.examples.restaurant")}</div>
                      <div className="text-xs text-muted-foreground">{t("demo.examples.duration")} 2:30</div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{t("demo.examples.hotelOrder")}</div>
                      <div className="text-xs text-muted-foreground">{t("demo.examples.duration")} 1:45</div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{t("demo.examples.objections")}</div>
                      <div className="text-xs text-muted-foreground">{t("demo.examples.duration")} 3:15</div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center text-xs text-muted-foreground">{t("demo.privacy")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
