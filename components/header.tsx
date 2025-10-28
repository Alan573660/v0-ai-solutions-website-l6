"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { useTranslations } from "@/lib/i18n/translations"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslations(locale)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const { openModal } = useCTA()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const solutions = [
    { name: t("solutions.voiceSalesManager"), href: `/${locale}/solutions/voice-sales-manager` },
    { name: t("solutions.hotelConcierge"), href: `/${locale}/solutions/hotel-concierge` },
    { name: t("solutions.smb"), href: `/${locale}/solutions/smb` },
    { name: t("solutions.enterprise"), href: `/${locale}/solutions/enterprise` },
    { name: t("solutions.custom"), href: `/${locale}/solutions/custom` },
    { name: t("solutions.smartHome"), href: `/${locale}/solutions/smart-home` },
  ]

  const platform = [
    { name: t("platform.architecture"), href: `/${locale}/platform/architecture` },
    { name: t("platform.demo"), href: `/${locale}/platform/demo` },
    { name: t("platform.calculator"), href: `/${locale}/platform/pricing-calculator` },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
            aria-label={t("nav.home")}
          >
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-xs sm:text-sm" aria-hidden="true">
                M2
              </span>
            </div>
            <span className="font-bold text-base sm:text-lg lg:text-xl truncate">AI Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label={t("nav.main")}>
            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                aria-expanded={false}
                aria-haspopup="true"
              >
                <span>{t("nav.solutions")}</span>
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {solutions.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full focus:bg-accent focus:text-accent-foreground">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                aria-expanded={false}
                aria-haspopup="true"
              >
                <span>{t("nav.platform")}</span>
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {platform.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full focus:bg-accent focus:text-accent-foreground">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href={`/${locale}/cases`}
              className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              {t("nav.cases")}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              {t("nav.blog")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              {t("nav.about")}
            </Link>
            <Link
              href={`/${locale}/contacts`}
              className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              {t("nav.contacts")}
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LocaleSwitcher currentLocale={locale} />

            <Button variant="ghost" size="sm" asChild>
              <Link href={`/${locale}/login`}>{t("nav.login")}</Link>
            </Button>
            <Button size="sm" onClick={() => openModal("trial")} data-cta="cta-try-free">
              {t("cta.tryFree")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <LocaleSwitcher currentLocale={locale} />
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden py-3 border-t max-h-[calc(100vh-3.5rem)] overflow-y-auto"
            role="navigation"
            aria-label={t("nav.mobile")}
          >
            <nav className="flex flex-col space-y-2">
              <div>
                <h3
                  className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-1.5 px-2"
                  id="solutions-heading"
                >
                  {t("nav.solutions")}
                </h3>
                <div className="space-y-0.5" role="group" aria-labelledby="solutions-heading">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm hover:text-primary hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-3 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3
                  className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-1.5 px-2"
                  id="platform-heading"
                >
                  {t("nav.platform")}
                </h3>
                <div className="space-y-0.5" role="group" aria-labelledby="platform-heading">
                  {platform.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm hover:text-primary hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-3 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-0.5 pt-1.5 border-t">
                <Link
                  href={`/${locale}/cases`}
                  className="block text-sm font-medium hover:text-primary hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.cases")}
                </Link>
                <Link
                  href={`/${locale}/blog`}
                  className="block text-sm font-medium hover:text-primary hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.blog")}
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="block text-sm font-medium hover:text-primary hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.about")}
                </Link>
                <Link
                  href={`/${locale}/contacts`}
                  className="block text-sm font-medium hover:text-primary hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.contacts")}
                </Link>
              </div>

              <div className="pt-2.5 border-t space-y-2">
                <Button variant="outline" size="sm" className="w-full h-10 text-sm bg-transparent" asChild>
                  <Link href={`/${locale}/login`} onClick={() => setIsMenuOpen(false)}>
                    {t("nav.login")}
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="w-full h-10 text-sm font-medium"
                  onClick={() => {
                    openModal("trial")
                    setIsMenuOpen(false)
                  }}
                  data-cta="cta-try-free"
                >
                  {t("cta.tryFree")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
