import { z } from "zod"

/**
 * Lead DTO validation schemas
 * Используются для валидации входящих данных в API /api/lead
 */

// Базовая схема для создания лида
export const createLeadSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(100, "Имя не должно превышать 100 символов")
    .trim(),

  email: z.string().email("Некорректный email адрес").toLowerCase().trim(),

  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Некорректный формат телефона (используйте международный формат)")
    .optional(),

  company: z
    .string()
    .min(2, "Название компании должно содержать минимум 2 символа")
    .max(200, "Название компании не должно превышать 200 символов")
    .trim()
    .optional(),

  message: z
    .string()
    .min(10, "Сообщение должно содержать минимум 10 символов")
    .max(2000, "Сообщение не должно превышать 2000 символов")
    .trim()
    .optional(),

  source: z.enum(["website", "landing", "blog", "referral", "other"]).default("website"),

  locale: z.enum(["ru", "en", "es", "de", "fr", "nl"]).default("ru"),

  utmSource: z.string().max(100).optional(),
  utmMedium: z.string().max(100).optional(),
  utmCampaign: z.string().max(100).optional(),
  utmContent: z.string().max(100).optional(),
  utmTerm: z.string().max(100).optional(),
})

// Тип для TypeScript на основе схемы
export type CreateLeadDTO = z.infer<typeof createLeadSchema>

// Схема для ответа API
export const leadResponseSchema = z.object({
  success: z.boolean(),
  leadId: z.string().optional(),
  message: z.string(),
})

export type LeadResponse = z.infer<typeof leadResponseSchema>

// Схема для внутреннего представления лида
export const leadEntitySchema = createLeadSchema.extend({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  status: z.enum(["new", "contacted", "qualified", "converted", "lost"]).default("new"),
  hubspotContactId: z.string().optional(),
})

export type LeadEntity = z.infer<typeof leadEntitySchema>
