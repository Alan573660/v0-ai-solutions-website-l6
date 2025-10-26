import type { OpenAPIV3 } from "openapi-types"

export const openApiSpec: OpenAPIV3.Document = {
  openapi: "3.0.0",
  info: {
    title: "AI Solutions API",
    version: "1.0.0",
    description: "API documentation for AI Solutions website backend",
    contact: {
      name: "AI Solutions",
      email: "hello@ai-solutions.com",
      url: "https://m2solutions.ai",
    },
  },
  servers: [
    {
      url: "https://m2solutions.ai/api",
      description: "Production server",
    },
    {
      url: "http://localhost:3000/api",
      description: "Development server",
    },
  ],
  paths: {
    "/lead": {
      post: {
        summary: "Submit lead form",
        description: "Submit a new lead to HubSpot CRM",
        tags: ["Leads"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "email", "phone", "company"],
                properties: {
                  name: { type: "string", minLength: 2, maxLength: 100 },
                  email: { type: "string", format: "email" },
                  phone: { type: "string", pattern: "^\\+?[1-9]\\d{1,14}$" },
                  company: { type: "string", minLength: 2, maxLength: 100 },
                  message: { type: "string", maxLength: 1000 },
                  source: { type: "string", enum: ["website", "landing", "blog"] },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Lead submitted successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean" },
                    leadId: { type: "string" },
                  },
                },
              },
            },
          },
          "400": {
            description: "Validation error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          "429": {
            description: "Rate limit exceeded",
          },
          "500": {
            description: "Internal server error",
          },
        },
      },
    },
    "/solutions": {
      get: {
        summary: "Get all solutions",
        description: "Retrieve list of all AI solutions",
        tags: ["Solutions"],
        parameters: [
          {
            name: "locale",
            in: "query",
            schema: { type: "string", enum: ["en", "ru", "es", "de", "fr", "nl"] },
          },
        ],
        responses: {
          "200": {
            description: "List of solutions",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Solution",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/solutions/{slug}": {
      get: {
        summary: "Get solution by slug",
        tags: ["Solutions"],
        parameters: [
          {
            name: "slug",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "Solution details",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Solution",
                },
              },
            },
          },
          "404": {
            description: "Solution not found",
          },
        },
      },
    },
    "/health": {
      get: {
        summary: "Health check",
        description: "Check API health and dependencies status",
        tags: ["System"],
        responses: {
          "200": {
            description: "System is healthy",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HealthCheck",
                },
              },
            },
          },
        },
      },
    },
    "/metrics": {
      get: {
        summary: "Performance metrics",
        description: "Get system performance metrics",
        tags: ["System"],
        responses: {
          "200": {
            description: "Performance metrics",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Metrics",
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Error: {
        type: "object",
        properties: {
          error: { type: "string" },
          message: { type: "string" },
          details: { type: "object" },
        },
      },
      Solution: {
        type: "object",
        properties: {
          id: { type: "string" },
          slug: { type: "string" },
          title: { type: "string" },
          description: { type: "string" },
          features: { type: "array", items: { type: "string" } },
        },
      },
      HealthCheck: {
        type: "object",
        properties: {
          status: { type: "string", enum: ["healthy", "degraded", "unhealthy"] },
          timestamp: { type: "string", format: "date-time" },
          uptime: { type: "number" },
          checks: {
            type: "object",
            properties: {
              redis: { type: "string", enum: ["ok", "error"] },
              hubspot: { type: "string", enum: ["ok", "error"] },
            },
          },
        },
      },
      Metrics: {
        type: "object",
        properties: {
          requests: { type: "object" },
          latency: { type: "object" },
          errors: { type: "object" },
          cache: { type: "object" },
        },
      },
    },
  },
}
