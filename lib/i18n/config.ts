export const locales = ["ru", "en", "es", "de", "nl", "fr", "it"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "ru"

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
  es: "Español",
  de: "Deutsch",
  nl: "Nederlands",
  fr: "Français",
  it: "Italiano",
}

export const localeFlags: Record<Locale, string> = {
  ru: "🇷🇺",
  en: "🇺🇸",
  es: "🇪🇸",
  de: "🇩🇪",
  nl: "🇳🇱",
  fr: "🇫🇷",
  it: "🇮🇹",
}
