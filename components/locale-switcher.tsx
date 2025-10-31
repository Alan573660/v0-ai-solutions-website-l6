"use client"

import { usePathname, useRouter } from "next/navigation"
import { Globe } from "lucide-react"
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LocaleSwitcherProps {
  currentLocale: Locale
}

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const getLocaleUrl = (newLocale: Locale): string => {
    const segments = pathname.split("/").filter(Boolean)
    const pathWithoutLocale = segments.slice(1).join("/")
    return `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ""}`
  }

  const handleLocaleChange = (newLocale: string) => {
    const localeUrl = getLocaleUrl(newLocale as Locale)
    router.push(localeUrl)
  }

  return (
    <Select value={currentLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger
        size="sm"
        className="gap-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 transition-all font-medium"
      >
        <Globe className="h-4 w-4" />
        <SelectValue>
          <span className="hidden sm:inline">
            {localeFlags[currentLocale]} {localeNames[currentLocale]}
          </span>
          <span className="sm:hidden">{localeFlags[currentLocale]}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end" className="min-w-[180px] z-[100]">
        {locales.map((locale) => {
          const isCurrentLocale = locale === currentLocale

          return (
            <SelectItem key={locale} value={locale} className="gap-2 cursor-pointer font-medium">
              <span className="text-base">{localeFlags[locale]}</span>
              <span>{localeNames[locale]}</span>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
