"use client"

import { Building2, Hotel, Rocket, ShoppingBag, Briefcase, Landmark } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { useEffect, useState } from "react"

interface TrustedCompaniesProps {
  locale: Locale
}

export function TrustedCompanies({ locale }: TrustedCompaniesProps) {
  const { t } = useTranslations(locale)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const companies = [
    { name: "Enterprise Corp", icon: Building2 },
    { name: "Hotel Chain", icon: Hotel },
    { name: "Tech Startup", icon: Rocket },
    { name: "Retail Group", icon: ShoppingBag },
    { name: "Business Solutions", icon: Briefcase },
    { name: "Financial Services", icon: Landmark },
  ]

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 border-y shadow-inner">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 sm:mb-10 lg:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            {t("hero.trustedBy")}
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text px-4">
            Нам доверяют компании из разных отраслей
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center justify-center p-4 sm:p-5 lg:p-6 bg-background rounded-lg sm:rounded-xl border hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <company.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-muted-foreground group-hover:text-primary transition-all duration-500 mb-2 sm:mb-3 relative z-10 group-hover:scale-110 group-hover:rotate-3" />
              <span className="text-xs sm:text-sm font-medium text-center group-hover:text-primary transition-colors duration-500 relative z-10">
                {company.name}
              </span>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-3/4 transition-all duration-500" />
            </div>
          ))}
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {[
            { value: "500+", label: "Активных клиентов" },
            { value: "1M+", label: "Обработанных звонков" },
            { value: "99.9%", label: "Время работы" },
            { value: "24/7", label: "Поддержка" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-background/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
