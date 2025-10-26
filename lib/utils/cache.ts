interface CacheEntry<T> {
  value: T
  expiresAt: number
}

class SimpleCache {
  private cache: Map<string, CacheEntry<any>> = new Map()
  private cleanupInterval: NodeJS.Timeout | null = null

  constructor() {
    // Clean up expired entries every 5 minutes
    this.cleanupInterval = setInterval(() => this.cleanup(), 5 * 60 * 1000)
  }

  set<T>(key: string, value: T, ttlSeconds = 60): void {
    const expiresAt = Date.now() + ttlSeconds * 1000
    this.cache.set(key, { value, expiresAt })
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key)
    if (!entry) return null

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key)
      return null
    }

    return entry.value as T
  }

  delete(key: string): void {
    this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }

  private cleanup(): void {
    const now = Date.now()
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiresAt) {
        this.cache.delete(key)
      }
    }
  }

  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval)
      this.cleanupInterval = null
    }
    this.clear()
  }
}

export const cache = new SimpleCache()

// Cache decorator for functions
export function cached<T>(
  keyPrefix: string,
  ttlSeconds = 60,
): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]): Promise<T> {
      const cacheKey = `${keyPrefix}:${JSON.stringify(args)}`
      const cached = cache.get<T>(cacheKey)

      if (cached !== null) {
        return cached
      }

      const result = await originalMethod.apply(this, args)
      cache.set(cacheKey, result, ttlSeconds)
      return result
    }

    return descriptor
  }
}
