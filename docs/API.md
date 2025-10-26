# API Documentation

## Base URL

- Production: `https://m2solutions.ai/api`
- Development: `http://localhost:3000/api`

## Authentication

Most endpoints are public. Rate limiting applies to all endpoints.

## Rate Limits

- **General API**: 100 requests/minute per IP
- **Lead Submission**: 5 requests/minute per IP

Rate limit headers:
\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 2025-01-17T12:00:00Z
\`\`\`

## Endpoints

### POST /api/lead

Submit a new lead to HubSpot CRM.

**Request:**
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Acme Corp",
  "message": "Interested in AI solutions",
  "source": "website"
}
\`\`\`

**Response (200):**
\`\`\`json
{
  "success": true,
  "leadId": "12345"
}
\`\`\`

**Errors:**
- `400`: Validation error
- `429`: Rate limit exceeded
- `500`: Internal server error

### GET /api/solutions

Get all AI solutions.

**Query Parameters:**
- `locale` (optional): Language code (en, ru, es, de, fr, nl)

**Response (200):**
\`\`\`json
[
  {
    "id": "voice-sales-manager",
    "slug": "voice-sales-manager",
    "title": "Voice Sales Manager",
    "description": "AI-powered sales assistant",
    "features": ["24/7 availability", "Multi-language support"]
  }
]
\`\`\`

### GET /api/solutions/:slug

Get solution by slug.

**Response (200):**
\`\`\`json
{
  "id": "voice-sales-manager",
  "slug": "voice-sales-manager",
  "title": "Voice Sales Manager",
  "description": "AI-powered sales assistant",
  "features": ["24/7 availability", "Multi-language support"],
  "pricing": {...}
}
\`\`\`

### GET /api/health

System health check.

**Response (200):**
\`\`\`json
{
  "status": "healthy",
  "timestamp": 1705497600000,
  "uptime": 3600000,
  "checks": [
    {
      "name": "redis",
      "status": "healthy",
      "message": "Redis responding in 5ms",
      "responseTime": 5
    },
    {
      "name": "hubspot",
      "status": "healthy",
      "message": "HubSpot API responding in 150ms",
      "responseTime": 150
    }
  ]
}
\`\`\`

### GET /api/metrics

Performance metrics.

**Response (200):**
\`\`\`json
{
  "metrics": {
    "http_request_total": [...],
    "http_request_duration_ms": [...],
    "cache_hit_total": [...]
  },
  "timestamp": 1705497600000
}
\`\`\`

### GET /api/docs

OpenAPI specification (Swagger).

**Response (200):**
\`\`\`json
{
  "openapi": "3.0.0",
  "info": {...},
  "paths": {...}
}
\`\`\`

## Error Responses

All errors follow this format:

\`\`\`json
{
  "error": "ValidationError",
  "message": "Invalid email format",
  "details": {
    "field": "email",
    "value": "invalid-email"
  }
}
\`\`\`

## Tracing

All requests include tracing headers:
- `x-request-id`: Unique request identifier
- `x-correlation-id`: Correlation ID for distributed tracing

Include these in support requests for faster debugging.
