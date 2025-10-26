import { describe, it, expect, beforeEach } from "vitest"
import { LeadService } from "@/lib/modules/leads/service"
import type { LeadData } from "@/lib/modules/leads/types"

describe("LeadService", () => {
  let service: LeadService

  beforeEach(() => {
    service = new LeadService()
  })

  describe("generateLeadId", () => {
    it("should generate unique lead IDs", () => {
      const id1 = service.generateLeadId()
      const id2 = service.generateLeadId()

      expect(id1).toMatch(/^lead_\d+_[a-z0-9]+$/)
      expect(id2).toMatch(/^lead_\d+_[a-z0-9]+$/)
      expect(id1).not.toBe(id2)
    })
  })

  describe("getSuccessMessage", () => {
    it("should return correct message for lead type in Russian", () => {
      const message = service.getSuccessMessage("lead", "ru")
      expect(message).toContain("Спасибо за заявку")
    })

    it("should return correct message for demo type in English", () => {
      const message = service.getSuccessMessage("demo", "en")
      expect(message).toContain("Demo request received")
    })

    it("should fallback to Russian for unsupported locale", () => {
      const message = service.getSuccessMessage("lead", "unknown" as any)
      expect(message).toContain("Спасибо за заявку")
    })
  })

  describe("processLead", () => {
    it("should process lead successfully", async () => {
      const leadData: LeadData = {
        id: "test-lead-123",
        type: "lead",
        locale: "en",
        timestamp: new Date().toISOString(),
        contact: {
          email: "test@example.com",
          name: "Test User",
        },
        consents: { privacy: true },
        source: "website",
      }

      await expect(service.processLead(leadData)).resolves.not.toThrow()
    })
  })
})
