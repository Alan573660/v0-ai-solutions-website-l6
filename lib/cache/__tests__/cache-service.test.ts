import { CacheService } from "../cache-service"
import { jest } from "@jest/globals"

describe("CacheService", () => {
  let cacheService: CacheService

  beforeEach(() => {
    cacheService = new CacheService()
  })

  afterEach(async () => {
    await cacheService.clear()
  })

  describe("get and set", () => {
    it("should store and retrieve values", async () => {
      await cacheService.set("test-key", { data: "value" }, 60)
      const result = await cacheService.get("test-key")
      expect(result).toEqual({ data: "value" })
    })

    it("should return null for non-existent keys", async () => {
      const result = await cacheService.get("non-existent")
      expect(result).toBeNull()
    })

    it("should handle TTL expiration", async () => {
      await cacheService.set("expire-key", "value", 1)
      await new Promise((resolve) => setTimeout(resolve, 1100))
      const result = await cacheService.get("expire-key")
      expect(result).toBeNull()
    })
  })

  describe("delete", () => {
    it("should delete existing keys", async () => {
      await cacheService.set("delete-key", "value", 60)
      await cacheService.delete("delete-key")
      const result = await cacheService.get("delete-key")
      expect(result).toBeNull()
    })
  })

  describe("getOrSet", () => {
    it("should fetch and cache on miss", async () => {
      const fetcher = jest.fn().mockResolvedValue({ data: "fetched" })
      const result = await cacheService.getOrSet("fetch-key", fetcher, 60)
      expect(result).toEqual({ data: "fetched" })
      expect(fetcher).toHaveBeenCalledTimes(1)
    })

    it("should return cached value on hit", async () => {
      const fetcher = jest.fn().mockResolvedValue({ data: "fetched" })
      await cacheService.getOrSet("fetch-key", fetcher, 60)
      const result = await cacheService.getOrSet("fetch-key", fetcher, 60)
      expect(result).toEqual({ data: "fetched" })
      expect(fetcher).toHaveBeenCalledTimes(1)
    })
  })
})
