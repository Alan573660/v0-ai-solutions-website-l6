# Testing Guide

## Overview

Проект использует три уровня тестирования:
- **Unit tests** (Jest) - тестирование отдельных функций и модулей
- **Integration tests** (Jest) - тестирование API endpoints
- **E2E tests** (Playwright) - тестирование пользовательских сценариев

## Running Tests

### Unit & Integration Tests
\`\`\`bash
# Запуск всех тестов
npm test

# Запуск с coverage
npm run test:coverage

# Watch mode для разработки
npm run test:watch

# Запуск конкретного теста
npm test -- logger.test.ts
\`\`\`

### E2E Tests
\`\`\`bash
# Запуск e2e тестов
npm run test:e2e

# Запуск в UI mode
npm run test:e2e:ui

# Запуск конкретного браузера
npm run test:e2e -- --project=chromium
\`\`\`

## Coverage Requirements

Минимальные требования к покрытию:
- Branches: 70%
- Functions: 70%
- Lines: 70%
- Statements: 70%

## Writing Tests

### Unit Test Example
\`\`\`typescript
import { myFunction } from '../my-module'

describe('myFunction', () => {
  it('should return expected result', () => {
    const result = myFunction('input')
    expect(result).toBe('expected')
  })
})
\`\`\`

### API Test Example
\`\`\`typescript
import { GET } from '../route'
import { NextRequest } from 'next/server'

describe('GET /api/endpoint', () => {
  it('should return 200', async () => {
    const request = new NextRequest('http://localhost:3000/api/endpoint')
    const response = await GET(request)
    expect(response.status).toBe(200)
  })
})
\`\`\`

### E2E Test Example
\`\`\`typescript
import { test, expect } from '@playwright/test'

test('user flow', async ({ page }) => {
  await page.goto('/')
  await page.click('button')
  await expect(page.locator('.result')).toBeVisible()
})
\`\`\`

## CI/CD Integration

Тесты автоматически запускаются в GitHub Actions при каждом push и PR:
1. Unit & Integration tests
2. E2E tests (Chromium)
3. Coverage report

Pipeline не пройдет, если:
- Любой тест упал
- Coverage ниже 70%
- E2E тесты не прошли
