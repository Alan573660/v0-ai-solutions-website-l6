import { POST } from "@/app/api/lead/route"
import { NextRequest } from "next/server"

describe("POST /api/lead", () => {
  it("should accept valid lead data", async () => {
    const validData = {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      company: "Test Corp",
      message: "Test message",
    }

    const request = new NextRequest("http://localhost:3000/api/lead", {
      method: "POST",
      body: JSON.stringify(validData),
      headers: { "Content-Type": "application/json" },
    })

    const response = await POST(request)
    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.success).toBe(true)
  })

  it("should reject invalid email", async () => {
    const invalidData = {
      name: "John Doe",
      email: "invalid-email",
      phone: "+1234567890",
    }

    const request = new NextRequest("http://localhost:3000/api/lead", {
      method: "POST",
      body: JSON.stringify(invalidData),
      headers: { "Content-Type": "application/json" },
    })

    const response = await POST(request)
    expect(response.status).toBe(400)
  })

  it("should reject missing required fields", async () => {
    const invalidData = {
      name: "John Doe",
    }

    const request = new NextRequest("http://localhost:3000/api/lead", {
      method: "POST",
      body: JSON.stringify(invalidData),
      headers: { "Content-Type": "application/json" },
    })

    const response = await POST(request)
    expect(response.status).toBe(400)
  })
})
