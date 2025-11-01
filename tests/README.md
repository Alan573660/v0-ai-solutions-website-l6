# Testing Guide

## Test Structure

\`\`\`
tests/
├── unit/           # Unit tests for individual functions/classes
├── integration/    # Integration tests for API endpoints
├── e2e/           # End-to-end tests
└── fixtures/      # Test data and mocks
\`\`\`

## Running Tests

\`\`\`bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- path/to/test.spec.ts
\`\`\`

## Writing Tests

### Unit Tests

Test individual functions and classes in isolation:

\`\`\`typescript
import { describe, it, expect } from 'vitest'
import { leadService } from '@/lib/modules/leads/service'

describe('LeadService', () => {
  it('should generate unique lead IDs', () => {
    const id1 = leadService.generateLeadId()
    const id2 = leadService.generateLeadId()
    
    expect(id1).toMatch(/^lead_\d+_[a-z0-9]+$/)
    expect(id1).not.toBe(id2)
  })
})
\`\`\`

### Integration Tests

Test API endpoints with real HTTP requests:

\`\`\`typescript
import { describe, it, expect } from 'vitest'

describe('POST /api/lead', () => {
  it('should accept valid lead submission', async () => {
    const response = await fetch('http://localhost:3000/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'lead',
        locale: 'en',
        email: 'test@example.com',
        consents: { privacy: true }
      })
    })
    
    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.success).toBe(true)
    expect(data.leadId).toBeDefined()
  })
})
\`\`\`

## Test Coverage Goals

- Unit tests: ≥80% coverage for business logic
- Integration tests: All API endpoints
- E2E tests: Critical user flows
