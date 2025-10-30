"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { useTranslations } from "@/lib/i18n/translations"
import type { Locale } from "@/lib/i18n/config"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const { t } = useTranslations(locale)

  const solutions = [
    { name: t("solutions.voiceSalesManager"), href: `/${locale}/solutions/voice-sales-manager` },
    { name: t("solutions.hotelConcierge"), href: `/${locale}/solutions/hotel-concierge` },
    { name: t("solutions.smb"), href: `/${locale}/solutions/smb` },
    { name: t("solutions.enterprise"), href: `/${locale}/solutions/enterprise` },
    { name: t("solutions.custom"), href: `/${locale}/solutions/custom` },
    { name: t("solutions.smartHome"), href: `/${locale}/solutions/smart-home` },
  ]

  const company = [
    { name: t("nav.about"), href: `/${locale}/about` },
    { name: t("about.team.title"), href: `/${locale}/about/team` },
    { name: t("footer.careers"), href: `/${locale}/careers` },
    { name: t("footer.partners"), href: `/${locale}/partners` },
    { name: t("nav.blog"), href: `/${locale}/blog` },
  ]

  const resources = [
    { name: t("footer.documentation"), href: `/${locale}/docs` },
    { name: t("footer.knowledgeBase"), href: `/${locale}/knowledge-base` },
    { name: t("footer.faq"), href: `/${locale}/faq` },
    { name: t("footer.support"), href: `/${locale}/support` },
    { name: t("footer.systemStatus"), href: `/${locale}/status` },
  ]

  const legal = [
    { name: t("footer.privacyPolicy"), href: `/${locale}/privacy` },
    { name: t("footer.termsOfUse"), href: `/${locale}/terms` },
    { name: t("footer.dataProcessing"), href: `/${locale}/dpa` },
    { name: t("footer.cookies"), href: `/${locale}/cookies` },
  ]

  const offices = [
    {
      city: t("footer.barcelona"),
      country: t("footer.spain"),
      address: "Carrer de Mallorca, 401",
      phone: "+34 93 123 45 67",
    },
    {
      city: t("footer.moscow"),
      country: t("footer.russia"),
      address: t("footer.moscowAddress"),
      phone: "+7 (495) 123-45-67",
    },
    {
      city: t("footer.astana"),
      country: t("footer.kazakhstan"),
      address: t("footer.astanaAddress"),
      phone: "+7 (717) 123-45-67",
    },
  ]

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Link href={`/${locale}`} className="flex items-center space-x-2 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">M2</span>
                  </div>
                  <span className="font-bold text-xl">AI Solutions</span>
                </Link>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("footer.companyDescription")}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href="mailto:hello@ai-solutions.com" className="hover:text-primary transition-colors">
                    hello@ai-solutions.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{t("footer.worldwide")}</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold mb-4">{t("nav.solutions")}</h3>
              <ul className="space-y-2">
                {solutions.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">{t("nav.company")}</h3>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">{t("nav.resources")}</h3>
              <ul className="space-y-2">
                {resources.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">{t("nav.legal")}</h3>
              <ul className="space-y-2">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="py-8 border-t border-muted">
          <h3 className="font-semibold mb-6 text-center">{t("nav.offices")}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">
                    {office.city}, {office.country}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{office.address}</p>
                <p className="text-sm text-muted-foreground">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">{t("footer.copyright")}</div>
            <div className="flex items-center space-x-6">
              <Link
                href={`/${locale}/privacy`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("footer.terms")}
              </Link>
              <Link
                href={`/${locale}/cookies`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("footer.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
