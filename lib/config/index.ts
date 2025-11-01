import { env } from "./env"

export const config = {
  env: env.NODE_ENV,
  isDev: env.NODE_ENV === "development",
  isProd: env.NODE_ENV === "production",
  siteUrl: env.NEXT_PUBLIC_BASE_URL,
  analytics: {
    gaId: env.NEXT_PUBLIC_GA_ID,
  },
  integrations: {
    hubspot: {
      apiKey: env.HUBSPOT_API_KEY,
    },
  },
  rateLimit: {
    max: env.RATE_LIMIT_MAX,
    windowMs: env.RATE_LIMIT_WINDOW_MS,
  },
  i18n: {
    defaultLocale: env.DEFAULT_LOCALE,
    locales: env.SUPPORTED_LOCALES.split(",").map((l) => l.trim()),
  },
  logging: {
    level: env.LOG_LEVEL,
  },
} as const

export type Config = typeof config
