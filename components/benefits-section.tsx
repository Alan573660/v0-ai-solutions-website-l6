"use client"

import { Clock, Users, TrendingUp, Shield, Zap, BarChart } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import type { Locale } from "@/lib/i18n/config"

export function BenefitsSection({ locale }: { locale: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("benefits-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: Clock,
      title: t("benefits.availability.title"),
      description: t("benefits.availability.description"),
      stats: t("benefits.availability.stats"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: t("benefits.parallel.title"),
      description: t("benefits.parallel.description"),
      stats: t("benefits.parallel.stats"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: t("benefits.conversion.title"),
      description: t("benefits.conversion.description"),
      stats: t("benefits.conversion.stats"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: t("benefits.security.title"),
      description: t("benefits.security.description"),
      stats: t("benefits.security.stats"),
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: t("benefits.calculations.title"),
      description: t("benefits.calculations.description"),
      stats: t("benefits.calculations.stats"),
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: BarChart,
      title: t("benefits.analytics.title"),
      description: t("benefits.analytics.description"),
      stats: t("benefits.analytics.stats"),
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="benefits-section" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t("benefits.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t("benefits.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-background rounded-xl p-6 shadow-sm border hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-4 relative z-10">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.color} p-0.5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                >
                  <div className="h-full w-full bg-background rounded-xl flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>

                <div className="pt-3 border-t border-muted group-hover:border-primary/30 transition-colors">
                  <p className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {benefit.stats}
                  </p>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${benefit.color} rounded-b-xl group-hover:w-full transition-all duration-500`}
              />
            </div>
          ))}
        </div>

        <div
          className={`mt-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {t("benefits.comparison.title")}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-background/50 backdrop-blur-sm rounded-lg hover:bg-background/80 transition-colors">
                  <span className="text-foreground/80">{t("benefits.comparison.managers")}</span>
                  <span className="font-semibold text-foreground">₽500,000/мес</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background/50 backdrop-blur-sm rounded-lg hover:bg-background/80 transition-colors">
                  <span className="text-foreground/80">{t("benefits.comparison.ai")}</span>
                  <span className="font-semibold text-primary">₽50,000/мес</span>
                </div>
                <div className="pt-3 border-t border-primary/20">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <span className="font-medium text-foreground">{t("benefits.comparison.savings")}</span>
                    <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      90%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                {t("benefits.comparison.multiplier")}
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed">{t("benefits.comparison.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
