"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight, Mic, Bot, Building2, Cpu, Phone, ShoppingCart, FileText, Layers, Briefcase, Home, BookOpen, Users, Mail, Sparkles } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { useTranslations } from "@/lib/i18n/translations"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"
import { cn } from "@/lib/utils"

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const { t } = useTranslations(locale)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { openModal } = useCTA()

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      if (window.innerWidth < 768) {
        document.body.style.overflow = "hidden"
      }
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
    { name: t("solutions.voiceSalesManager"), href: `/${locale}/solutions/voice-sales-manager`, icon: Mic, highlight: true },
    { name: t("solutions.m2Agents"), href: `/${locale}/solutions/m2-agents`, icon: Bot },
    { name: t("solutions.hotelConcierge"), href: `/${locale}/solutions/hotel-concierge`, icon: Building2 },
    { name: t("solutions.smb"), href: `/${locale}/solutions/smb`, icon: Briefcase },
    { name: t("solutions.enterprise"), href: `/${locale}/solutions/enterprise`, icon: Layers },
    { name: t("solutions.custom"), href: `/${locale}/solutions/custom`, icon: Cpu },
    { name: t("solutions.smartHome"), href: `/${locale}/solutions/smart-home`, icon: Home },
  ]

  // SEO-страницы AI автоматизации - сгруппированы для мобильного меню
  const aiAutomationMain = [
    { name: locale === "ru" ? "Автоматизация бизнеса ИИ" : "AI Business Automation", href: `/${locale}/solutions/business-automation`, icon: Sparkles, highlight: true },
    { name: locale === "ru" ? "AI автоматизация" : "AI Automation", href: `/${locale}/automation-business`, icon: Cpu },
    { name: locale === "ru" ? "AI для бизнеса" : "AI for Business", href: `/${locale}/solutions/ai-dlya-biznesa`, icon: Briefcase },
  ]

  const aiAutomationOperators = [
    { name: locale === "ru" ? "Робот оператор" : "Robot Operator", href: `/${locale}/solutions/robot-operator` },
    { name: locale === "ru" ? "Автоматический оператор" : "Automatic Operator", href: `/${locale}/solutions/automatic-operator` },
    { name: locale === "ru" ? "Виртуальный оператор" : "Virtual Operator", href: `/${locale}/solutions/virtual-operator` },
    { name: locale === "ru" ? "Робот для звонков" : "Robot for Calls", href: `/${locale}/solutions/robot-dlya-zvonkov` },
  ]

  const aiAutomationSales = [
    { name: locale === "ru" ? "Робот для продаж" : "Sales Robot", href: `/${locale}/solutions/robot-dlya-prodazh` },
    { name: locale === "ru" ? "Автоматизация продаж" : "Sales Automation", href: `/${locale}/solutions/automation-sales` },
    { name: locale === "ru" ? "Система автоматизации продаж" : "Sales Automation System", href: `/${locale}/solutions/sales-automation-system` },
  ]

  const aiAutomationProcesses = [
    { name: locale === "ru" ? "Обработка заявок" : "Request Processing", href: `/${locale}/solutions/obrabotka-zayavok` },
    { name: locale === "ru" ? "Обработка заказов" : "Order Processing", href: `/${locale}/solutions/obrabotka-zakazov` },
    { name: locale === "ru" ? "Выставление счётов" : "Invoice Generation", href: `/${locale}/solutions/vystavlenie-schetov` },
    { name: locale === "ru" ? "Расчёт доставки" : "Delivery Calculation", href: `/${locale}/solutions/raschet-dostavki` },
  ]

  // Объединённый список для десктопа
  const aiAutomation = [...aiAutomationMain, ...aiAutomationOperators.slice(0, 3)]

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
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md group"
            aria-label={t("nav.home")}
          >
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-primary/50 transition-all">
              <Image
                src="/images/logo-icon.jpg"
                alt=""
                fill
                className="object-cover object-right"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold leading-tight tracking-tight">
                <span className="text-primary">M2</span>
                <span className="text-foreground"> AI Solutions</span>
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight hidden sm:block">
                Голосовые AI-менеджеры
              </span>
            </div>
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
                <span>{locale === "ru" ? "AI автоматизация" : "AI Automation"}</span>
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                {aiAutomation.slice(0, 6).map((item) => (
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
              ref={menuButtonRef}
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
            className="md:hidden absolute inset-x-0 top-full bg-background border-t shadow-lg max-h-[calc(100dvh-3.5rem)] overflow-hidden"
            role="navigation"
            aria-label={t("nav.mobile")}
          >
            <div className="h-full flex flex-col">
              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
                <nav className="space-y-2">
                  
                  {/* Solutions Accordion */}
                  <div className="rounded-xl bg-muted/30 overflow-hidden">
                    <button
                      onClick={() => toggleSection("solutions")}
                      className="w-full flex items-center justify-between p-3.5 text-left"
                      aria-expanded={expandedSection === "solutions"}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Mic className="h-4.5 w-4.5 text-primary" />
                        </div>
                        <span className="font-semibold text-[15px]">{t("nav.solutions")}</span>
                      </div>
                      <ChevronDown className={cn(
                        "h-5 w-5 text-muted-foreground transition-transform duration-200",
                        expandedSection === "solutions" && "rotate-180"
                      )} />
                    </button>
                    {expandedSection === "solutions" && (
                      <div className="px-3 pb-3 grid grid-cols-2 gap-1.5">
                        {solutions.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                              "flex items-center gap-2 p-2.5 rounded-lg text-[13px] transition-colors",
                              item.highlight 
                                ? "bg-primary/10 text-primary font-medium" 
                                : "hover:bg-muted/50 text-foreground/80"
                            )}
                          >
                            <item.icon className="h-4 w-4 shrink-0" />
                            <span className="line-clamp-2 leading-tight">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* AI Automation Accordion */}
                  <div className="rounded-xl bg-muted/30 overflow-hidden">
                    <button
                      onClick={() => toggleSection("ai")}
                      className="w-full flex items-center justify-between p-3.5 text-left"
                      aria-expanded={expandedSection === "ai"}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-violet-500/10 flex items-center justify-center">
                          <Sparkles className="h-4.5 w-4.5 text-violet-500" />
                        </div>
                        <span className="font-semibold text-[15px]">{locale === "ru" ? "AI автоматизация" : "AI Automation"}</span>
                      </div>
                      <ChevronDown className={cn(
                        "h-5 w-5 text-muted-foreground transition-transform duration-200",
                        expandedSection === "ai" && "rotate-180"
                      )} />
                    </button>
                    {expandedSection === "ai" && (
                      <div className="px-3 pb-3 space-y-3">
                        {/* Main AI items */}
                        <div className="grid grid-cols-1 gap-1">
                          {aiAutomationMain.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={cn(
                                "flex items-center gap-2.5 p-2.5 rounded-lg text-[13px] transition-colors",
                                item.highlight 
                                  ? "bg-violet-500/10 text-violet-600 dark:text-violet-400 font-medium" 
                                  : "hover:bg-muted/50 text-foreground/80"
                              )}
                            >
                              <item.icon className="h-4 w-4 shrink-0" />
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                        
                        {/* Operators */}
                        <div>
                          <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5 px-1">
                            {locale === "ru" ? "Операторы" : "Operators"}
                          </p>
                          <div className="grid grid-cols-2 gap-1">
                            {aiAutomationOperators.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-lg text-[12px] hover:bg-muted/50 text-foreground/70 transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Sales */}
                        <div>
                          <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5 px-1">
                            {locale === "ru" ? "Продажи" : "Sales"}
                          </p>
                          <div className="grid grid-cols-2 gap-1">
                            {aiAutomationSales.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-lg text-[12px] hover:bg-muted/50 text-foreground/70 transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Processes */}
                        <div>
                          <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5 px-1">
                            {locale === "ru" ? "Процессы" : "Processes"}
                          </p>
                          <div className="grid grid-cols-2 gap-1">
                            {aiAutomationProcesses.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-lg text-[12px] hover:bg-muted/50 text-foreground/70 transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Platform Accordion */}
                  <div className="rounded-xl bg-muted/30 overflow-hidden">
                    <button
                      onClick={() => toggleSection("platform")}
                      className="w-full flex items-center justify-between p-3.5 text-left"
                      aria-expanded={expandedSection === "platform"}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <Layers className="h-4.5 w-4.5 text-blue-500" />
                        </div>
                        <span className="font-semibold text-[15px]">{t("nav.platform")}</span>
                      </div>
                      <ChevronDown className={cn(
                        "h-5 w-5 text-muted-foreground transition-transform duration-200",
                        expandedSection === "platform" && "rotate-180"
                      )} />
                    </button>
                    {expandedSection === "platform" && (
                      <div className="px-3 pb-3 space-y-1">
                        {platform.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2.5 p-2.5 rounded-lg text-[13px] hover:bg-muted/50 text-foreground/80 transition-colors"
                          >
                            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Quick Links */}
                  <div className="grid grid-cols-4 gap-2 pt-2">
                    <Link
                      href={`/${locale}/cases`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                      <span className="text-[11px] font-medium text-center">{t("nav.cases")}</span>
                    </Link>
                    <Link
                      href={`/${locale}/blog`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <BookOpen className="h-5 w-5 text-muted-foreground" />
                      <span className="text-[11px] font-medium text-center">{t("nav.blog")}</span>
                    </Link>
                    <Link
                      href={`/${locale}/about`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span className="text-[11px] font-medium text-center">{t("nav.about")}</span>
                    </Link>
                    <Link
                      href={`/${locale}/contacts`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <span className="text-[11px] font-medium text-center">{t("nav.contacts")}</span>
                    </Link>
                  </div>

                </nav>
              </div>

              {/* Fixed bottom buttons */}
              <div className="shrink-0 border-t bg-background p-4 space-y-2.5">
                <div className="grid grid-cols-2 gap-2.5">
                  <Button variant="outline" size="sm" className="h-11 text-sm bg-transparent" asChild>
                    <Link href={`/${locale}/login`} onClick={() => setIsMenuOpen(false)}>
                      {t("nav.login")}
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="h-11 text-sm font-medium"
                    onClick={() => {
                      openModal("trial")
                      setIsMenuOpen(false)
                    }}
                    data-cta="cta-try-free"
                  >
                    {t("cta.tryFree")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
