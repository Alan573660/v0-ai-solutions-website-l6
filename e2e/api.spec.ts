import { test, expect } from "@playwright/test"

test.describe("API Endpoints", () => {
  test("GET /api/health should return 200", async ({ request }) => {
    const response = await request.get("/api/health")
    expect(response.ok()).toBeTruthy()
    const data = await response.json()
    expect(data.status).toBe("ok")
  })

  test("POST /api/lead with valid data should succeed", async ({ request }) => {
    const response = await request.post("/api/lead", {
      data: {
        name: "Test User",
        email: "test@example.com",
        phone: "+1234567890",
        company: "Test Corp",
        message: "E2E test message",
      },
    })
    expect(response.ok()).toBeTruthy()
  })

  test("POST /api/lead with invalid data should fail", async ({ request }) => {
    const response = await request.post("/api/lead", {
      data: {
        name: "Test",
        email: "invalid-email",
      },
    })
    expect(response.status()).toBe(400)
  })
})
