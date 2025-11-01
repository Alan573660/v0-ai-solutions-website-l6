import { getRequestConfig } from "next-intl/server"

export const locales = ["ru", "en", "es", "fr", "de", "nl"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "ru"

export default getRequestConfig(async ({ locale }) => {
  const safe = (locales as readonly string[]).includes(locale) ? (locale as Locale) : defaultLocale

  return {
    locale: safe,
    messages: (await import(`../messages/${safe}.json`)).default,
  }
})
