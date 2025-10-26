"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Mic, MessageSquare, Phone, Sparkles } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { useEffect, useState } from "react"
import { useCTA } from "@/components/modals/cta-provider"

interface HeroSectionProps {
  locale: Locale
}

export function HeroSection({ locale }: HeroSectionProps) {
  const { t } = useTranslations(locale)
  const [mounted, setMounted] = useState(false)
  const { openModal } = useCTA()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10 py-12 sm:py-16 lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 sm:opacity-100">
        <div className="absolute top-20 left-10 h-48 w-48 sm:h-64 sm:w-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 h-64 w-64 sm:h-96 sm:w-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Content */}
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-primary/20">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Новое поколение AI-ассистентов</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-pretty max-w-2xl leading-relaxed">
                {t("hero.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { title: t("hero.consistentScripts"), desc: t("hero.consistentScriptsDesc") },
                { title: t("hero.fullIntegration"), desc: t("hero.fullIntegrationDesc") },
                { title: t("hero.analytics"), desc: t("hero.analyticsDesc") },
                { title: t("hero.scalability"), desc: t("hero.scalabilityDesc") },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">
                      {benefit.title}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="text-sm sm:text-base h-11 sm:h-12 group relative overflow-hidden"
                onClick={() => openModal("trial")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mic className="mr-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">{t("cta.tryFree")}</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base h-11 sm:h-12 bg-background/50 backdrop-blur-sm hover:bg-background hover:scale-105 transition-all duration-300"
                onClick={() => openModal("demo")}
              >
                {t("cta.requestDemo")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative bg-card/80 backdrop-blur-xl border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02]">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold">{t("hero.demoTitle")}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm text-foreground">{t("hero.online")}</span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-2 sm:space-x-3 animate-fade-in">
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg flex-shrink-0">
                      <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground" />
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg rounded-tl-none p-2.5 sm:p-3 max-w-[75%] hover:scale-105 transition-transform duration-300">
                      <p className="text-xs sm:text-sm text-foreground">{t("hero.aiGreeting")}</p>
                    </div>
                  </div>

                  <div
                    className="flex items-start space-x-2 sm:space-x-3 justify-end animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="bg-muted/80 backdrop-blur-sm rounded-lg rounded-tr-none p-2.5 sm:p-3 max-w-[75%] hover:scale-105 transition-transform duration-300">
                      <p className="text-xs sm:text-sm">{t("hero.userMessage")}</p>
                    </div>
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-muted flex items-center justify-center shadow-md flex-shrink-0">
                      <span className="text-[10px] sm:text-xs font-medium">{t("hero.you")}</span>
                    </div>
                  </div>

                  <div
                    className="flex items-start space-x-2 sm:space-x-3 animate-fade-in"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg flex-shrink-0">
                      <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground" />
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg rounded-tl-none p-2.5 sm:p-3 max-w-[75%] hover:scale-105 transition-transform duration-300">
                      <p className="text-xs sm:text-sm text-foreground">{t("hero.aiResponse")}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3 sm:space-x-4 pt-3 sm:pt-4 border-t">
                  <Button
                    size="sm"
                    className="flex items-center text-xs sm:text-sm h-9 sm:h-10 group"
                    onClick={() => openModal("demo", "Послушать демо")}
                  >
                    <Play className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform" />
                    {t("cta.listenDemo")}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center text-xs sm:text-sm h-9 sm:h-10 bg-background/50 backdrop-blur-sm group"
                    onClick={() => openModal("call")}
                  >
                    <Phone className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:rotate-12 transition-transform" />
                    {t("cta.call")}
                  </Button>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 h-16 w-16 sm:h-24 sm:w-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 h-20 w-20 sm:h-32 sm:w-32 bg-secondary/20 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
