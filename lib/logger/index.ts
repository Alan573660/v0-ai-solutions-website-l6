type LogLevel = "debug" | "info" | "warn" | "error"

interface LogContext {
  [key: string]: unknown
}

class Logger {
  private level: LogLevel

  constructor(level: LogLevel = "info") {
    this.level = level
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ["debug", "info", "warn", "error"]
    return levels.indexOf(level) >= levels.indexOf(this.level)
  }

  private formatMessage(level: LogLevel, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString()
    const contextStr = context ? ` ${JSON.stringify(context)}` : ""
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${contextStr}`
  }

  debug(message: string, context?: LogContext): void {
    if (this.shouldLog("debug")) {
      console.debug(this.formatMessage("debug", message, context))
    }
  }

  info(message: string, context?: LogContext): void {
    if (this.shouldLog("info")) {
      console.info(this.formatMessage("info", message, context))
    }
  }

  warn(message: string, context?: LogContext): void {
    if (this.shouldLog("warn")) {
      console.warn(this.formatMessage("warn", message, context))
    }
  }

  error(message: string, error?: Error | unknown, context?: LogContext): void {
    if (this.shouldLog("error")) {
      const errorContext = {
        ...context,
        error:
          error instanceof Error
            ? {
                message: error.message,
                stack: error.stack,
                name: error.name,
              }
            : error,
      }
      console.error(this.formatMessage("error", message, errorContext))
    }
  }

  child(context: LogContext): Logger {
    const childLogger = new Logger(this.level)
    const originalMethods = {
      debug: childLogger.debug.bind(childLogger),
      info: childLogger.info.bind(childLogger),
      warn: childLogger.warn.bind(childLogger),
      error: childLogger.error.bind(childLogger),
    }

    childLogger.debug = (message: string, ctx?: LogContext) => originalMethods.debug(message, { ...context, ...ctx })
    childLogger.info = (message: string, ctx?: LogContext) => originalMethods.info(message, { ...context, ...ctx })
    childLogger.warn = (message: string, ctx?: LogContext) => originalMethods.warn(message, { ...context, ...ctx })
    childLogger.error = (message: string, error?: Error | unknown, ctx?: LogContext) =>
      originalMethods.error(message, error, { ...context, ...ctx })

    return childLogger
  }
}

const logLevel = (process.env.LOG_LEVEL as LogLevel) || "info"
export const logger = new Logger(logLevel)
