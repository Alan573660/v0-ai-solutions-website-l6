"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config"

interface LocaleSwitcherProps {
  currentLocale: Locale
}

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false)
      return
    }

    const segments = pathname.split("/").filter(Boolean)

    // Remove the first segment if it's a locale
    const pathWithoutLocale = locales.includes(segments[0] as Locale) ? segments.slice(1).join("/") : segments.join("/")

    // Build new URL with new locale
    const newPath = `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ""}`

    console.log("[v0] Switching locale:", {
      from: currentLocale,
      to: newLocale,
      currentPath: pathname,
      pathWithoutLocale,
      newPath,
    })

    // Use window.location.href for hard navigation (works reliably on production)
    window.location.href = newPath
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1.5 px-2">
          <span className="text-xl leading-none">{localeFlags[currentLocale]}</span>
          <span className="hidden md:inline text-sm font-medium">{currentLocale.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3 opacity-50" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px]">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className={`gap-3 cursor-pointer ${locale === currentLocale ? "bg-accent" : ""}`}
          >
            <span className="text-xl">{localeFlags[locale]}</span>
            <span className="flex-1">{localeNames[locale]}</span>
            {locale === currentLocale && <span className="text-primary">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
