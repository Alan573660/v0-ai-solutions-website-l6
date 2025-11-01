"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

interface BlogNewsletterSectionProps {
  locale: Locale
  translations: {
    newsletterTitle: string
    newsletterSubtitle: string
    emailPlaceholder: string
    subscribe: string
    noSpam: string
  }
}

export function BlogNewsletterSection({ locale, translations: t }: BlogNewsletterSectionProps) {
  const { openModal } = useCTA()

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{t.newsletterTitle}</h2>
          <p className="text-lg sm:text-xl text-purple-100">{t.newsletterSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder={t.emailPlaceholder}
              type="email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-purple-200"
            />
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50 w-full sm:w-auto h-11 sm:h-10"
              onClick={() => openModal("trial")}
            >
              {t.subscribe}
            </Button>
          </div>
          <p className="text-sm text-purple-200">{t.noSpam}</p>
        </div>
      </div>
    </section>
  )
}
