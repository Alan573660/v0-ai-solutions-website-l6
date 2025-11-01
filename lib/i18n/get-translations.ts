import type { Locale } from "./config"

export async function getTranslations(locale: Locale, namespace: string) {
  try {
    const translations = await import(`@/messages/${locale}/${namespace}.json`)
    return translations.default || translations
  } catch (error) {
    console.error(`Failed to load translations for ${locale}/${namespace}:`, error)
    // Fallback to Russian if translation fails
    if (locale !== "ru") {
      try {
        const fallback = await import(`@/messages/ru/${namespace}.json`)
        return fallback.default || fallback
      } catch {
        return {}
      }
    }
    return {}
  }
}
