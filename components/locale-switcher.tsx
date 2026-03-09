"use client"

import { useState, useRef, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Globe, Check } from "lucide-react"
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config"

interface LocaleSwitcherProps {
  currentLocale: Locale
}

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const getLocaleUrl = (newLocale: Locale): string => {
    const segments = pathname.split("/").filter(Boolean)
    const pathWithoutLocale = segments.slice(1).join("/")
    return `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ""}`
  }

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false)
      return
    }
    const url = getLocaleUrl(newLocale)
    setIsOpen(false)
    router.push(url)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
        className="flex items-center gap-2 h-9 px-3 rounded-md text-sm font-medium hover:bg-accent/50 transition-all duration-200 border border-transparent hover:border-border/50"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="h-4 w-4 text-muted-foreground" />
        <span className="hidden sm:inline">
          {localeFlags[currentLocale]} {localeNames[currentLocale]}
        </span>
        <span className="sm:hidden text-base">{localeFlags[currentLocale]}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 min-w-[200px] rounded-md border bg-popover p-1 shadow-lg z-[9999]"
          role="listbox"
          aria-label="Select language"
        >
          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Select Language
          </div>
          <div className="h-px bg-border my-1" />
          {locales.map((locale) => {
            const isCurrentLocale = locale === currentLocale

            return (
              <button
                key={locale}
                type="button"
                role="option"
                aria-selected={isCurrentLocale}
                onClick={() => handleLocaleChange(locale)}
                className={`
                  flex items-center gap-3 w-full cursor-pointer rounded-md px-2 py-2.5 my-0.5
                  transition-all duration-150 text-left
                  ${isCurrentLocale ? "bg-primary/10 text-primary font-medium" : "hover:bg-accent/50"}
                `}
              >
                <span className="text-lg leading-none">{localeFlags[locale]}</span>
                <span className="flex-1 text-sm">{localeNames[locale]}</span>
                {isCurrentLocale && <Check className="h-4 w-4 text-primary" aria-label="Current language" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
