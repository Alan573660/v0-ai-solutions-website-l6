import { locales, type Locale } from "@/lib/i18n/config"

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://m2solutions.ai"

export function getCanonicalUrl(locale: Locale, path: string): string {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path
  return `${SITE_URL}/${locale}/${cleanPath}`
}

export function getAlternateLinks(path: string): Array<{ hreflang: string; href: string }> {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path

  return [
    // x-default для автоопределения
    { hreflang: "x-default", href: `${SITE_URL}/ru/${cleanPath}` },
    // Все локали
    ...locales.map((locale) => ({
      hreflang: locale,
      href: `${SITE_URL}/${locale}/${cleanPath}`,
    })),
  ]
}

export function getOgLocale(locale: Locale): string {
  const localeMap: Record<Locale, string> = {
    ru: "ru_RU",
    en: "en_US",
    es: "es_ES",
    de: "de_DE",
    nl: "nl_NL",
    fr: "fr_FR",
  }
  return localeMap[locale]
}

export function getOgAlternateLocales(currentLocale: Locale): string[] {
  return locales.filter((locale) => locale !== currentLocale).map((locale) => getOgLocale(locale))
}
