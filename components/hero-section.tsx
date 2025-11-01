"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mic } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { useEffect, useState } from "react"
import { useCTA } from "@/components/modals/cta-provider"
import Image from "next/image"

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
    <section className="relative bg-gradient-to-b from-[#F6F6FB] to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1E26] leading-tight">
                Голосовые AI-ассистенты, которые продают и обслуживают клиентов 24/7
              </h1>
              <p className="text-lg sm:text-xl text-[#8E8EA0] leading-relaxed">
                Автоматизируйте звонки, чаты и заявки — без потери качества и с гарантией результата.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="h-12 text-base bg-[#7C3AED] hover:bg-[#6D28D9] text-white"
                onClick={() => openModal("trial")}
              >
                <Mic className="mr-2 h-5 w-5" />
                Попробовать бесплатно
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 text-base border-2 bg-transparent"
                onClick={() => openModal("demo")}
              >
                Узнать больше
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white border border-[#E1E3EB] rounded-2xl p-4 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7wGvCJuYhzr2pUKvjwa2t2pipQeu0x.png"
                alt="AI Platform Dashboard - Analytics and Call Management"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-[#7C3AED] text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                SaaS Platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
