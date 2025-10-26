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
    console.log("[v0] Current pathname:", pathname)
    console.log("[v0] Current locale:", currentLocale)
    console.log("[v0] New locale:", newLocale)

    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/"

    // Construct new URL with new locale
    const newPath = `/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`

    console.log("[v0] New path:", newPath)
    return newPath
  }

  const handleLocaleChange = (newLocale: Locale) => {
    const newUrl = getLocaleUrl(newLocale)
    console.log("[v0] Navigating to:", newUrl)
    window.location.href = newUrl
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
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
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {locales.map((locale) => {
          const isCurrentLocale = locale === currentLocale

          return (
            <DropdownMenuItem
              key={locale}
              className={`gap-2 cursor-pointer ${isCurrentLocale ? "bg-accent" : ""}`}
              onClick={() => {
                if (!isCurrentLocale) {
                  handleLocaleChange(locale)
                }
                setIsOpen(false)
              }}
            >
              <span>{localeFlags[locale]}</span>
              <span>{localeNames[locale]}</span>
              {isCurrentLocale && <span className="ml-auto text-xs">✓</span>}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
