import { logger } from "@/lib/logger"

export class PerformanceMonitor {
  private timers: Map<string, number> = new Map()

  start(label: string): void {
    this.timers.set(label, performance.now())
  }

  end(label: string, logThreshold = 1000): number {
    const startTime = this.timers.get(label)
    if (!startTime) {
      logger.warn("Performance timer not found", { label })
      return 0
    }

    const duration = performance.now() - startTime
    this.timers.delete(label)

    if (duration > logThreshold) {
      logger.warn("Slow operation detected", {
        label,
        duration: `${duration.toFixed(2)}ms`,
        threshold: `${logThreshold}ms`,
      })
    }

    return duration
  }

  async measure<T>(label: string, fn: () => Promise<T>, logThreshold?: number): Promise<T> {
    this.start(label)
    try {
      const result = await fn()
      this.end(label, logThreshold)
      return result
    } catch (error) {
      this.end(label, logThreshold)
      throw error
    }
  }
}

export const performanceMonitor = new PerformanceMonitor()

// Debounce utility
export function debounce<T extends (...args: any[]) => any>(func: T, waitMs: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>): void => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), waitMs)
  }
}

// Throttle utility
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limitMs: number,
): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limitMs)
    }
  }
}

// Retry with exponential backoff
export async function retryWithBackoff<T>(fn: () => Promise<T>, maxRetries = 3, baseDelayMs = 1000): Promise<T> {
  let lastError: Error | unknown

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error
      if (attempt < maxRetries - 1) {
        const delay = baseDelayMs * Math.pow(2, attempt)
        logger.warn("Retry attempt failed, waiting before retry", {
          attempt: attempt + 1,
          maxRetries,
          delayMs: delay,
        })
        await new Promise((resolve) => setTimeout(resolve, delay))
      }
    }
  }

  throw lastError
}
