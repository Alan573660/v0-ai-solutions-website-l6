import { z } from "zod"

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NEXT_PUBLIC_BASE_URL: z.string().default("https://m2solutions.ai"),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  HUBSPOT_API_KEY: z.string().optional(),
  METRICS_TOKEN: z.string().optional(),
  RATE_LIMIT_MAX: z.coerce.number().int().positive().default(100),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(60000),
  DEFAULT_LOCALE: z.enum(["ru", "en"]).default("ru"),
  SUPPORTED_LOCALES: z.string().default("ru,en"),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"]).default("info"),
})

export type Env = z.infer<typeof EnvSchema>

function validateEnv(): Env {
  const result = EnvSchema.safeParse(process.env)

  if (!result.success) {
    console.warn("Environment validation warnings:", result.error.errors)
    // Return defaults instead of throwing
    return EnvSchema.parse({})
  }

  return result.data
}

export const env = validateEnv()
