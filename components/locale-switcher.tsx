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
    const newUrl = getLocaleUrl(newLocale as Locale)
    router.push(newUrl)
  }

  return (
    <Select value={currentLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-[160px]" aria-label="Select language">
        <div className="flex items-center gap-2 w-full">
          <Globe className="h-4 w-4 shrink-0 opacity-70" />
          <SelectValue>
            <span className="flex items-center gap-2">
              <span>{localeFlags[currentLocale]}</span>
              <span>{localeNames[currentLocale]}</span>
            </span>
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            <span className="flex items-center gap-2">
              <span>{localeFlags[locale]}</span>
              <span>{localeNames[locale]}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
