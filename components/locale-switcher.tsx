"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe, Check } from "lucide-react"
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config"

interface LocaleSwitcherProps {
  currentLocale: Locale
}

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const getLocaleUrl = (newLocale: Locale): string => {
    const segments = pathname.split("/").filter(Boolean)
    const pathWithoutLocale = segments.slice(1).join("/")
    return `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ""}`
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 h-9 px-3 hover:bg-accent/50 transition-all duration-200 border border-transparent hover:border-border/50"
        >
          <Globe className="h-4 w-4 text-muted-foreground" />
          <span className="hidden sm:inline font-medium text-sm">
            {localeFlags[currentLocale]} {localeNames[currentLocale]}
          </span>
          <span className="sm:hidden text-base">{localeFlags[currentLocale]}</span>
          <ChevronDown
            className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[200px] p-1 z-[100] animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
        sideOffset={8}
      >
        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Select Language
        </div>
        <div className="h-px bg-border my-1" />
        {locales.map((locale) => {
          const localeUrl = getLocaleUrl(locale)
          const isCurrentLocale = locale === currentLocale

          return (
            <DropdownMenuItem
              key={locale}
              asChild
              className={`
                gap-3 cursor-pointer rounded-md px-2 py-2.5 my-0.5
                transition-all duration-150
                ${isCurrentLocale ? "bg-primary/10 text-primary font-medium" : "hover:bg-accent/50"}
              `}
            >
              <a href={localeUrl} onClick={() => setIsOpen(false)} className="flex items-center w-full">
                <span className="text-lg leading-none">{localeFlags[locale]}</span>
                <span className="flex-1 text-sm">{localeNames[locale]}</span>
                {isCurrentLocale && <Check className="h-4 w-4 text-primary" aria-label="Current language" />}
              </a>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
