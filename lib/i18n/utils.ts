import { locales, defaultLocale, type Locale } from "./config"

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean)
  const locale = segments[0] as Locale
  return locales.includes(locale) ? locale : defaultLocale
}

export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean)
  if (segments.length === 0) return "/"

  const firstSegment = segments[0] as Locale
  if (locales.includes(firstSegment)) {
    const remaining = segments.slice(1)
    return remaining.length > 0 ? `/${remaining.join("/")}` : "/"
  }
  return pathname
}

export function addLocaleToPathname(pathname: string, locale: Locale): string {
  // Remove any existing locale first
  const cleanPath = removeLocaleFromPathname(pathname)
  // Add new locale
  if (cleanPath === "/") {
    return `/${locale}`
  }
  return `/${locale}${cleanPath}`
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
