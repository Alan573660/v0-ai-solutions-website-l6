"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

interface PlatformCTAButtonsProps {
  locale: Locale
  t: any
  variant?: "hero" | "footer"
}

export function PlatformCTAButtons({ locale, t, variant = "hero" }: PlatformCTAButtonsProps) {
  const { openDemo } = useCTA()

  if (variant === "footer") {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary" onClick={openDemo} data-cta="cta-request-demo">
          {t("cta.requestDemo")}
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          asChild
          data-cta="cta-download-pitch"
        >
          <Link href="/api/download/pitch?lang=ru">Скачать whitepaper</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" onClick={openDemo} data-cta="cta-request-demo">
        {t("cta.requestDemo")}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button size="lg" variant="outline" asChild data-cta="cta-download-pitch">
        <Link href="/api/download/pitch?lang=ru">{t("cta.downloadPitch")}</Link>
      </Button>
    </div>
  )
}
