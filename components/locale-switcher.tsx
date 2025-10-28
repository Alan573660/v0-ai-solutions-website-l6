"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe } from "lucide-react"
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
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {localeFlags[currentLocale]} {localeNames[currentLocale]}
          </span>
          <span className="sm:hidden">{localeFlags[currentLocale]}</span>
          <ChevronDown className="h-3 w-3" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px] z-[100]">
        {locales.map((locale) => {
          const localeUrl = getLocaleUrl(locale)
          const isCurrentLocale = locale === currentLocale

          return (
            <DropdownMenuItem
              key={locale}
              asChild
              className={`gap-2 cursor-pointer ${isCurrentLocale ? "bg-accent" : ""}`}
            >
              <a href={localeUrl} onClick={() => setIsOpen(false)}>
                <span>{localeFlags[locale]}</span>
                <span>{localeNames[locale]}</span>
                {isCurrentLocale && <span className="ml-auto text-xs">✓</span>}
              </a>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
