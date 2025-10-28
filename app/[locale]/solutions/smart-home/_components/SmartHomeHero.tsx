"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight } from "lucide-react"
import { useCTA } from "@/components/modals/cta-provider"
import { InteractiveRoom } from "./InteractiveRoom"
import { AnimatedStats } from "./AnimatedStats"

export function SmartHomeHero() {
  const { openModal } = useCTA()

  return (
    <section className="relative py-12 sm:py-20 lg:py-32 px-4 overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
              Умный дом на базе искусственного интеллекта
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
              Будущее вашего дома начинается{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 animate-gradient">
                сегодня
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-10 text-pretty leading-relaxed">
              Создаем индивидуальные решения для умного дома с интеграцией передовых AI-технологий. Полный контроль
              через мобильное приложение и голосовые команды.
            </p>

            <AnimatedStats />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                onClick={() => openModal("consultation")}
              >
                Получить расчет стоимости
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-background/50 backdrop-blur-sm border-2"
                onClick={() => openModal("demo")}
              >
                Посмотреть демо
              </Button>
            </div>
          </div>

          <InteractiveRoom />
        </div>
      </div>
    </section>
  )
}
