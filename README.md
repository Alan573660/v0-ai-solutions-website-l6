# AI Solutions Website

Modern multilingual SaaS marketing website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌍 Multilingual support (6 languages)
- 🎨 Modern, responsive design
- 🔒 Enterprise-grade security
- ⚡ Optimized performance
- 📊 Built-in analytics and monitoring
- 🧪 Comprehensive testing setup

## Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm 9+

### Installation

1. Clone the repository
2. Install dependencies:

\`\`\`bash
pnpm install
\`\`\`

3. Copy environment variables:

\`\`\`bash
cp .env.sample .env
\`\`\`

4. Configure your environment variables in `.env`

5. Run the development server:

\`\`\`bash
pnpm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development

### Code Quality

\`\`\`bash
# Lint code
pnpm run lint

# Format code
pnpm run format

# Type check
pnpm run typecheck

# Run all checks
pnpm run validate
\`\`\`

### Testing

\`\`\`bash
# Run unit tests
pnpm run test:unit

# Run integration tests
pnpm run test:integration

# Run e2e tests
pnpm run test:e2e

# Run tests with coverage
pnpm run test:coverage
\`\`\`

### Building

\`\`\`bash
# Build for production
pnpm run build

# Start production server
pnpm start
\`\`\`

## Docker

### Development

\`\`\`bash
pnpm run docker:dev
\`\`\`

### Production

\`\`\`bash
pnpm run docker:prod
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── [locale]/          # Localized pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
├── lib/                   # Utilities and business logic
│   ├── config/           # Configuration
│   ├── errors/           # Error handling
│   ├── logger/           # Logging
│   ├── middleware/       # Middleware functions
│   ├── modules/          # Feature modules
│   ├── observability/    # Metrics and health checks
│   └── utils/            # Utility functions
├── public/               # Static assets
└── tests/                # Test files
\`\`\`

## Environment Variables

See `.env.sample` for required environment variables.

Key variables:
- `NEXT_PUBLIC_BASE_URL` - Base URL for the application (https://m2solutions.ai)
- `REDIS_URL` - Redis connection string
- `HUBSPOT_API_KEY` - HubSpot API key
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID

## Monitoring

- Health check: `/api/health`
- Metrics: `/api/metrics`

## License

Proprietary - All rights reserved
\`\`\`

```plaintext file="" isHidden
