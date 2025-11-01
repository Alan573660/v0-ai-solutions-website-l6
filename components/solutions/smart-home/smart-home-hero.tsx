"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Sparkles, Zap } from "lucide-react"
import { useTranslations } from "next-intl"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface SmartHomeHeroProps {
  locale: Locale
}

export function SmartHomeHero({ locale }: SmartHomeHeroProps) {
  const t = useTranslations()
  const { openModal } = useCTA()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            {t("smartHome.hero.badge")}
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            {t("smartHome.hero.title")}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {t("smartHome.hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => openModal("consultation")} className="gap-2">
              <Home className="h-5 w-5" />
              {t("smartHome.hero.cta")}
            </Button>
            <Button size="lg" variant="outline" onClick={() => openModal("demo")} className="gap-2">
              <Zap className="h-5 w-5" />
              {t("smartHome.hero.viewCases")}
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Мониторинг и управление</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground">Экономия энергии</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Устройств в сети</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">AI</div>
              <div className="text-sm text-muted-foreground">Голосовое управление</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
