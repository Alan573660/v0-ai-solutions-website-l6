export const locales = ["es", "en", "ru", "de", "nl", "fr", "it"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "es"

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  ru: "Русский",
  de: "Deutsch",
  nl: "Nederlands",
  fr: "Français",
  it: "Italiano",
}

export const localeFlags: Record<Locale, string> = {
  es: "🇪🇸",
  en: "🇺🇸",
  ru: "🇷🇺",
  de: "🇩🇪",
  nl: "🇳🇱",
  fr: "🇫🇷",
  it: "🇮🇹",
}
