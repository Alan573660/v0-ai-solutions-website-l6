"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Calendar } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface SmartHomeCTAProps {
  locale: Locale
}

export function SmartHomeCTA({ locale }: SmartHomeCTAProps) {
  const { openModal } = useCTA()

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Готовы создать умный дом?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Получите бесплатную консультацию и расчет стоимости системы для вашего объекта
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => openModal("consultation")} className="gap-2">
                <Phone className="h-5 w-5" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => openModal("demo")} className="gap-2">
                <Calendar className="h-5 w-5" />
                Записаться на демо
              </Button>
            </div>

            <div className="pt-8 border-t">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Бесплатно</div>
                  <div className="text-sm text-muted-foreground">Выезд специалиста</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">3 года</div>
                  <div className="text-sm text-muted-foreground">Гарантия на оборудование</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Техническая поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
