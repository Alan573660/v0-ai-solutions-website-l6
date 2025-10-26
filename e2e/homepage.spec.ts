import { test, expect } from "@playwright/test"

test.describe("Homepage", () => {
  test("should load successfully", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/AI Solutions/)
  })

  test("should display hero section", async ({ page }) => {
    await page.goto("/")
    const hero = page.locator("h1").first()
    await expect(hero).toBeVisible()
  })

  test("should have working navigation", async ({ page }) => {
    await page.goto("/")
    const blogLink = page.getByRole("link", { name: /blog/i })
    await expect(blogLink).toBeVisible()
    await blogLink.click()
    await expect(page).toHaveURL(/\/blog/)
  })
})
