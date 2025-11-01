import { getRequestConfig } from "next-intl/server"
import { locales, defaultLocale } from "./src/i18n"

export default getRequestConfig(async ({ locale }) => {
  const safe = locales.includes(locale) ? locale : defaultLocale

  return {
    locale: safe,
    messages: (await import(`./messages/${safe}.json`)).default,
  }
})
