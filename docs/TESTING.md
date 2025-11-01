# Testing Guide

This project uses Vitest for unit and integration tests, and Playwright for end-to-end tests.

## Running Tests

### Unit Tests
\`\`\`bash
pnpm test:unit
\`\`\`

Unit tests are located alongside the code they test with `.test.ts` or `.spec.ts` extensions.

### Integration Tests
\`\`\`bash
pnpm test:integration
\`\`\`

Integration tests use the `.integration.test.ts` extension and test interactions between multiple modules.

### End-to-End Tests
\`\`\`bash
pnpm test:e2e
\`\`\`

E2E tests are located in the `/e2e` directory and use Playwright to test the full application flow.

### All Tests
\`\`\`bash
pnpm test
\`\`\`

### Watch Mode
\`\`\`bash
pnpm test:watch
\`\`\`

### Coverage
\`\`\`bash
pnpm test:coverage
\`\`\`

## Writing Tests

### Unit Test Example (Vitest)
\`\`\`typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
\`\`\`

### E2E Test Example (Playwright)
\`\`\`typescript
import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/ru')
  await expect(page.locator('h1')).toBeVisible()
})
\`\`\`

## CI/CD

Tests run automatically in GitHub Actions on every push and pull request.

## Configuration

- **Vitest Unit**: `vitest.unit.config.ts`
- **Vitest Integration**: `vitest.integration.config.ts`
- **Playwright**: `playwright.config.ts`
