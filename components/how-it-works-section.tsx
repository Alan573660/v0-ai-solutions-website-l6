"use client"

import { ArrowRight, ArrowDown } from "lucide-react"
import { useState } from "react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"

interface HowItWorksSectionProps {
  locale: Locale
}

export function HowItWorksSection({ locale }: HowItWorksSectionProps) {
  const { t } = useTranslations(locale)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const steps = [
    {
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
      image: "/minimalist-icon-of-phone-with-incoming-call-waves-.jpg",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
      image: "/minimalist-icon-of-ai-brain-with-neural-connection.jpg",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
      image: "/minimalist-icon-of-lightning-bolt-with-automation-.jpg",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      title: t("howItWorks.step4.title"),
      description: t("howItWorks.step4.description"),
      image: "/minimalist-icon-of-analytics-dashboard-with-charts.jpg",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance px-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-4">
            {t("howItWorks.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className={`group relative text-center space-y-3 sm:space-y-4 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  hoveredIndex === index
                    ? "border-primary shadow-xl scale-105 bg-card"
                    : "border-transparent hover:border-primary/50 hover:shadow-lg"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full h-36 sm:h-40 lg:h-48 object-cover rounded-lg sm:rounded-xl transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Hover indicator */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transform origin-left transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>

              {index < steps.length - 1 && (
                <>
                  {/* Desktop arrow (horizontal) */}
                  <div className="hidden lg:block absolute top-1/2 left-full w-full -translate-y-1/2 z-10">
                    <div className="flex items-center justify-center">
                      <ArrowRight
                        className={`h-5 w-5 lg:h-6 lg:w-6 transition-colors duration-300 ${
                          hoveredIndex === index ? "text-primary" : "text-muted-foreground/50"
                        }`}
                      />
                    </div>
                  </div>
                  {/* Mobile/Tablet arrow (vertical) */}
                  <div className="lg:hidden flex items-center justify-center py-2">
                    <ArrowDown
                      className={`h-5 w-5 transition-colors duration-300 ${
                        hoveredIndex === index ? "text-primary" : "text-muted-foreground/50"
                      }`}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 sm:px-6 py-2.5 sm:py-3">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium">{t("howItWorks.responseTime")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
