import { z } from "zod"
import { AppError } from "@/lib/errors/app-error"
import { logger } from "@/lib/logger"

/**
 * Утилита для валидации данных с помощью Zod схем
 */

export interface ValidationResult<T> {
  success: boolean
  data?: T
  errors?: ValidationError[]
}

export interface ValidationError {
  field: string
  message: string
  code: string
}

/**
 * Валидирует данные по Zod схеме
 * @throws AppError с кодом VALIDATION_ERROR при ошибке валидации
 */
export function validate<T>(schema: z.ZodSchema<T>, data: unknown, context?: string): T {
  try {
    return schema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationErrors: ValidationError[] = error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
        code: err.code,
      }))

      logger.warn({
        msg: "Validation failed",
        context,
        errors: validationErrors,
      })

      throw new AppError("VALIDATION_ERROR", "Ошибка валидации данных", 400, { errors: validationErrors })
    }

    logger.error({
      msg: "Unexpected validation error",
      context,
      error,
    })

    throw new AppError("INTERNAL_ERROR", "Внутренняя ошибка валидации", 500)
  }
}

/**
 * Безопасная валидация без выброса исключений
 */
export function validateSafe<T>(schema: z.ZodSchema<T>, data: unknown): ValidationResult<T> {
  const result = schema.safeParse(data)

  if (result.success) {
    return {
      success: true,
      data: result.data,
    }
  }

  const errors: ValidationError[] = result.error.errors.map((err) => ({
    field: err.path.join("."),
    message: err.message,
    code: err.code,
  }))

  return {
    success: false,
    errors,
  }
}

/**
 * Валидирует query параметры из URL
 */
export function validateQuery<T>(schema: z.ZodSchema<T>, searchParams: URLSearchParams): T {
  const params = Object.fromEntries(searchParams.entries())
  return validate(schema, params, "query-params")
}

/**
 * Валидирует JSON body из Request
 */
export async function validateBody<T>(schema: z.ZodSchema<T>, request: Request): Promise<T> {
  try {
    const body = await request.json()
    return validate(schema, body, "request-body")
  } catch (error) {
    if (error instanceof AppError) {
      throw error
    }

    logger.error({
      msg: "Failed to parse request body",
      error,
    })

    throw new AppError("INVALID_REQUEST", "Некорректный формат JSON в теле запроса", 400)
  }
}
