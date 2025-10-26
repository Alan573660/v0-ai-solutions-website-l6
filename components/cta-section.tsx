"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mic, Calculator, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useCTA } from "@/components/modals/cta-provider"
import { useTranslations, type Locale } from "@/lib/i18n/translations"

export function CTASection({ locale }: { locale: Locale }) {
  const { openModal } = useCTA()
  const { t } = useTranslations(locale)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance">{t("cta.title")}</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-pretty px-4">
              {t("cta.description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button
              size="lg"
              className="text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto"
              onClick={() => openModal("trial")}
            >
              <Mic className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t("cta.tryFree")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto bg-transparent"
              onClick={() => openModal("demo")}
            >
              {t("cta.requestDemo")}
              <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 px-4 sm:px-0">
            <Button
              variant="ghost"
              className="h-auto p-3 sm:p-4 flex flex-col items-center space-y-1.5 sm:space-y-2"
              asChild
            >
              <Link href={`/${locale}/platform/calculator`}>
                <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <div className="text-center">
                  <div className="font-medium text-sm sm:text-base">{t("cta.calculateCost")}</div>
                  <div className="text-xs text-muted-foreground hidden sm:block">{t("cta.calculateDesc")}</div>
                </div>
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-3 sm:p-4 flex flex-col items-center space-y-1.5 sm:space-y-2"
              asChild
            >
              <Link href={`/${locale}/cases`}>
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <div className="text-center">
                  <div className="font-medium text-sm sm:text-base">{t("cta.viewCases")}</div>
                  <div className="text-xs text-muted-foreground hidden sm:block">{t("cta.viewCasesDesc")}</div>
                </div>
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-3 sm:p-4 flex flex-col items-center space-y-1.5 sm:space-y-2"
              onClick={() => openModal("call")}
            >
              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">📞</span>
              </div>
              <div className="text-center">
                <div className="font-medium text-sm sm:text-base">{t("cta.callNow")}</div>
                <div className="text-xs text-muted-foreground">{t("cta.phoneNumber")}</div>
              </div>
            </Button>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-muted/50">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm text-muted-foreground px-4">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full flex-shrink-0" />
                <span>{t("cta.freeTest")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full flex-shrink-0" />
                <span>{t("cta.setupTime")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-purple-500 rounded-full flex-shrink-0" />
                <span>{t("cta.support247")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
