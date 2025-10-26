import { z } from "zod"

/**
 * Общие схемы валидации для переиспользования
 */

// Схема для пагинации
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
})

export type PaginationParams = z.infer<typeof paginationSchema>

// Схема для ответа с пагинацией
export const paginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    data: z.array(itemSchema),
    pagination: z.object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
      totalPages: z.number(),
    }),
  })

// Схема для стандартного API ответа
export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.optional(),
    error: z
      .object({
        code: z.string(),
        message: z.string(),
        details: z.record(z.any()).optional(),
      })
      .optional(),
    meta: z
      .object({
        requestId: z.string(),
        timestamp: z.string(),
      })
      .optional(),
  })

// Схема для locale параметра
export const localeSchema = z.enum(["ru", "en", "es", "de", "fr", "nl"])

export type Locale = z.infer<typeof localeSchema>

// Схема для ID параметров
export const uuidSchema = z.string().uuid("Некорректный формат UUID")
export const slugSchema = z
  .string()
  .min(1)
  .max(200)
  .regex(/^[a-z0-9-]+$/, "Slug может содержать только строчные буквы, цифры и дефисы")
