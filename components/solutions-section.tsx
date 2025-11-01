"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Hotel, Building2, Briefcase, Code } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useCTA } from "@/components/modals/cta-provider"
import { useTranslations } from "next-intl"
import type { Locale } from "@/lib/i18n/config"

export function SolutionsSection({ locale }: { locale: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const { openModal } = useCTA()
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

    const element = document.getElementById("solutions-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const solutions = [
    {
      icon: Phone,
      title: t("solutions.sales.title"),
      description: t("solutions.sales.description"),
      features: [
        t("solutions.sales.feature1"),
        t("solutions.sales.feature2"),
        t("solutions.sales.feature3"),
        t("solutions.sales.feature4"),
      ],
      href: `/${locale}/solutions/voice-sales-manager`,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Hotel,
      title: t("solutions.hotel.title"),
      description: t("solutions.hotel.description"),
      features: [
        t("solutions.hotel.feature1"),
        t("solutions.hotel.feature2"),
        t("solutions.hotel.feature3"),
        t("solutions.hotel.feature4"),
      ],
      href: `/${locale}/solutions/hotel-concierge`,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: Building2,
      title: t("solutions.smb.title"),
      description: t("solutions.smb.description"),
      features: [
        t("solutions.smb.feature1"),
        t("solutions.smb.feature2"),
        t("solutions.smb.feature3"),
        t("solutions.smb.feature4"),
      ],
      href: `/${locale}/solutions/smb`,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Briefcase,
      title: t("solutions.enterprise.title"),
      description: t("solutions.enterprise.description"),
      features: [
        t("solutions.enterprise.feature1"),
        t("solutions.enterprise.feature2"),
        t("solutions.enterprise.feature3"),
        t("solutions.enterprise.feature4"),
      ],
      href: `/${locale}/solutions/enterprise`,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
  ]

  return (
    <section id="solutions-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t("solutions.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t("solutions.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              className={`group relative bg-card border rounded-2xl p-8 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden block ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="space-y-6 relative z-10">
                <div className="flex items-start space-x-4">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${solution.gradient} p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}
                  >
                    <div className="h-full w-full bg-background rounded-xl flex items-center justify-center">
                      <solution.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-background/50 transition-colors"
                    >
                      <div className={`h-1.5 w-1.5 bg-gradient-to-r ${solution.gradient} rounded-full`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{t("solutions.learnMore")}</span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${solution.gradient} group-hover:w-full transition-all duration-500`}
              />
            </Link>
          ))}
        </div>

        <div
          className={`relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="absolute top-0 right-0 h-64 w-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 bg-secondary/10 rounded-full blur-3xl" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 mb-4 hover:scale-110 hover:rotate-6 transition-all duration-500">
              <div className="h-full w-full bg-background rounded-2xl flex items-center justify-center">
                <Code className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold">{t("solutions.custom.title")}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">{t("solutions.custom.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="group" onClick={() => openModal("consultation", t("solutions.custom.cta1"))}>
                {t("solutions.custom.cta1")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/50 backdrop-blur-sm hover:bg-background"
                onClick={() => openModal("consultation")}
              >
                {t("solutions.custom.cta2")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
