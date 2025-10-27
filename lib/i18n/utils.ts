import { locales, defaultLocale, type Locale } from "./config"

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/")
  const locale = segments[1] as Locale
  return locales.includes(locale) ? locale : defaultLocale
}

export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/")
  if (locales.includes(segments[1] as Locale)) {
    return "/" + segments.slice(2).join("/")
  }
  return pathname
}

export function addLocaleToPathname(pathname: string, locale: Locale): string {
  const cleanPath = removeLocaleFromPathname(pathname)
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
