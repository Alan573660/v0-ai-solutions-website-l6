import { validateRequest } from "../validator"
import { z } from "zod"

describe("Validator", () => {
  const testSchema = z.object({
    email: z.string().email(),
    name: z.string().min(2),
    age: z.number().min(18).optional(),
  })

  describe("validateRequest", () => {
    it("should validate correct data", () => {
      const data = { email: "test@example.com", name: "John" }
      const result = validateRequest(testSchema, data)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(data)
      }
    })

    it("should reject invalid email", () => {
      const data = { email: "invalid-email", name: "John" }
      const result = validateRequest(testSchema, data)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.errors).toHaveLength(1)
        expect(result.errors[0].path).toContain("email")
      }
    })

    it("should reject short name", () => {
      const data = { email: "test@example.com", name: "J" }
      const result = validateRequest(testSchema, data)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.errors[0].path).toContain("name")
      }
    })

    it("should handle optional fields", () => {
      const data = { email: "test@example.com", name: "John", age: 25 }
      const result = validateRequest(testSchema, data)
      expect(result.success).toBe(true)
    })

    it("should reject age under 18", () => {
      const data = { email: "test@example.com", name: "John", age: 16 }
      const result = validateRequest(testSchema, data)
      expect(result.success).toBe(false)
    })
  })
})
