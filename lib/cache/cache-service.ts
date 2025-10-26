/**
 * Универсальный сервис кэширования с fallback на in-memory
 */

import { getRedisClient } from "./redis-client"
import { logger } from "@/lib/logger"

// In-memory fallback cache
const memoryCache = new Map<string, { value: any; expiresAt: number }>()

export interface CacheOptions {
  ttl?: number // Time to live in seconds
  tags?: string[] // Cache tags for invalidation
}

export class CacheService {
  private redis = getRedisClient()

  /**
   * Получить значение из кэша
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      // Try Redis first
      if (this.redis) {
        const value = await this.redis.get(key)
        if (value !== null) {
          logger.debug("Cache hit (Redis)", { key })
          return value as T
        }
      }

      // Fallback to memory cache
      const cached = memoryCache.get(key)
      if (cached && cached.expiresAt > Date.now()) {
        logger.debug("Cache hit (memory)", { key })
        return cached.value as T
      }

      logger.debug("Cache miss", { key })
      return null
    } catch (error) {
      logger.error("Cache get error", error, { key })
      return null
    }
  }

  /**
   * Сохранить значение в кэш
   */
  async set<T>(key: string, value: T, options: CacheOptions = {}): Promise<void> {
    const { ttl = 3600 } = options // Default 1 hour

    try {
      // Save to Redis
      if (this.redis) {
        await this.redis.setex(key, ttl, value)
        logger.debug("Cache set (Redis)", { key, ttl })
      }

      // Save to memory cache as fallback
      memoryCache.set(key, {
        value,
        expiresAt: Date.now() + ttl * 1000,
      })

      logger.debug("Cache set (memory)", { key, ttl })
    } catch (error) {
      logger.error("Cache set error", error, { key })
    }
  }

  /**
   * Удалить значение из кэша
   */
  async delete(key: string): Promise<void> {
    try {
      if (this.redis) {
        await this.redis.del(key)
      }
      memoryCache.delete(key)
      logger.debug("Cache deleted", { key })
    } catch (error) {
      logger.error("Cache delete error", error, { key })
    }
  }

  /**
   * Удалить все ключи по паттерну
   */
  async deletePattern(pattern: string): Promise<void> {
    try {
      if (this.redis) {
        const keys = await this.redis.keys(pattern)
        if (keys.length > 0) {
          await this.redis.del(...keys)
          logger.info("Cache pattern deleted", { pattern, count: keys.length })
        }
      }

      // Clear matching keys from memory cache
      for (const key of memoryCache.keys()) {
        if (this.matchPattern(key, pattern)) {
          memoryCache.delete(key)
        }
      }
    } catch (error) {
      logger.error("Cache delete pattern error", error, { pattern })
    }
  }

  /**
   * Получить или установить значение (cache-aside pattern)
   */
  async getOrSet<T>(key: string, factory: () => Promise<T>, options: CacheOptions = {}): Promise<T> {
    // Try to get from cache
    const cached = await this.get<T>(key)
    if (cached !== null) {
      return cached
    }

    // Generate value
    const value = await factory()

    // Save to cache
    await this.set(key, value, options)

    return value
  }

  /**
   * Очистить весь кэш
   */
  async clear(): Promise<void> {
    try {
      if (this.redis) {
        await this.redis.flushdb()
      }
      memoryCache.clear()
      logger.info("Cache cleared")
    } catch (error) {
      logger.error("Cache clear error", error)
    }
  }

  /**
   * Проверить, соответствует ли ключ паттерну
   */
  private matchPattern(key: string, pattern: string): boolean {
    const regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$")
    return regex.test(key)
  }

  /**
   * Очистить expired записи из memory cache
   */
  cleanupMemoryCache(): void {
    const now = Date.now()
    for (const [key, cached] of memoryCache.entries()) {
      if (cached.expiresAt <= now) {
        memoryCache.delete(key)
      }
    }
  }
}

export const cacheService = new CacheService()

// Cleanup memory cache every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(
    () => {
      cacheService.cleanupMemoryCache()
    },
    5 * 60 * 1000,
  )
}
