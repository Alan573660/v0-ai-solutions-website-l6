import pino from "pino"
import { env } from "./config/env"

// Correlation ID для трассировки запросов
export type LogContext = {
  correlationId?: string
  userId?: string
  path?: string
  method?: string
  statusCode?: number
  duration?: number
  [key: string]: unknown
}

// Создаём logger с правильной конфигурацией для production и development
const logger = pino({
  level: env.LOG_LEVEL || "info",
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() }
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  // В production используем JSON, в dev - pretty print
  ...(process.env.NODE_ENV === "production"
    ? {
        // Production: структурированный JSON для парсинга
        serializers: pino.stdSerializers,
      }
    : {
        // Development: читаемый формат
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "HH:MM:ss Z",
            ignore: "pid,hostname",
          },
        },
      }),
})

export { logger }

// Хелперы для логирования с контекстом
export const log = {
  info: (message: string, context?: LogContext) => {
    logger.info(context, message)
  },
  error: (message: string, error?: Error | unknown, context?: LogContext) => {
    logger.error(
      {
        ...context,
        error:
          error instanceof Error
            ? {
                message: error.message,
                stack: error.stack,
                name: error.name,
              }
            : error,
      },
      message,
    )
  },
  warn: (message: string, context?: LogContext) => {
    logger.warn(context, message)
  },
  debug: (message: string, context?: LogContext) => {
    logger.debug(context, message)
  },
  // Специальный метод для HTTP запросов
  http: (context: LogContext & { duration: number; statusCode: number }) => {
    const level = context.statusCode >= 500 ? "error" : context.statusCode >= 400 ? "warn" : "info"
    logger[level](context, `${context.method} ${context.path} ${context.statusCode} ${context.duration}ms`)
  },
}

// Генератор correlation ID для трассировки
export function generateCorrelationId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

export function createChildLogger(context: LogContext) {
  return logger.child(context)
}

export default logger
