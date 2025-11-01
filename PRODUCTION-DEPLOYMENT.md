# Production Deployment Guide

## Pre-Deployment Checklist

### 1. Generate pnpm-lock.yaml
\`\`\`bash
# Remove any existing lock files
rm -f pnpm-lock.yaml package-lock.json yarn.lock

# Generate fresh lock file
pnpm install

# Verify frozen lockfile works
pnpm install --frozen-lockfile
\`\`\`

**Verification**: `pnpm install --frozen-lockfile` should complete without errors.

### 2. Environment Variables
Copy `.env.sample` to `.env` and fill in all required values:
\`\`\`bash
cp .env.sample .env
\`\`\`

**Critical variables**:
- `NEXT_PUBLIC_BASE_URL=https://m2solutions.ai`
- `HUBSPOT_API_KEY` - HubSpot integration
- `METRICS_TOKEN` - Metrics endpoint security
- `KV_*` - Redis/Upstash credentials

**Verification**: `grep NEXT_PUBLIC_SITE_URL` should return no results in code.

### 3. Dependencies Cleanup
\`\`\`bash
# Move test tools to devDependencies (already done)
# Remove Jest (already done)
# Fix versions (already done)

# Run dedupe to optimize
pnpm dedupe

# Verify production install doesn't pull dev deps
pnpm install --prod
\`\`\`

**Verification**: `pnpm install --prod` should not install vitest, playwright, or eslint.

### 4. Run Validation
\`\`\`bash
pnpm run validate
\`\`\`

This runs:
- TypeScript type checking
- ESLint linting
- Prettier format check
- Vitest unit tests

**Verification**: All checks should pass with exit code 0.

### 5. Build Docker Image
\`\`\`bash
pnpm run docker:build
\`\`\`

**Verification**: Docker build completes successfully, image size is reasonable (~200-300MB for standalone).

### 6. Test Production Build Locally
\`\`\`bash
# Build for production
pnpm run build

# Start with PM2
pnpm run prestart  # Creates logs directory
pm2 start ecosystem.config.cjs

# Test endpoints
curl http://localhost:3000/api/health
curl http://localhost:3000/ru
\`\`\`

**Verification**: 
- Health endpoint returns `{"status":"ok",...}`
- Site loads correctly
- No CSP violations in browser console

## Deployment Steps

### Option 1: PM2 Deployment (VPS/Dedicated Server)

\`\`\`bash
# 1. Pull latest code
git pull origin main

# 2. Install dependencies
pnpm install --frozen-lockfile

# 3. Build application
pnpm run build

# 4. Deploy with PM2
bash scripts/deploy.sh
\`\`\`

The deploy script will:
- Create logs directory
- Check if PM2 process exists
- Use `pm2 start` for first deployment
- Use `pm2 reload` for subsequent deployments

### Option 2: Docker Deployment

\`\`\`bash
# Build and run with docker-compose
docker-compose -f docker-compose.prod.yml up -d

# Check logs
docker-compose logs -f
\`\`\`

### Option 3: Vercel Deployment

\`\`\`bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel --prod
\`\`\`

## Post-Deployment Verification

### 1. Health Check
\`\`\`bash
curl https://m2solutions.ai/api/health
\`\`\`

Expected response:
\`\`\`json
{
  "status": "ok",
  "checks": {
    "database": "ok",
    "redis": "ok"
  },
  "uptime": 123.45,
  "version": "1.0.0"
}
\`\`\`

### 2. Analytics Tracking
Open browser console and verify:
- No CSP violations for Google Analytics
- No CSP violations for Yandex Metrika
- Analytics requests are being sent

### 3. Image Loading
Verify images load correctly:
- `/placeholder-logo.jpg` returns 200 OK
- External images from allowed domains load
- No CORS errors

### 4. SEO Verification
\`\`\`bash
# Check robots.txt
curl https://m2solutions.ai/robots.txt

# Check sitemap
curl https://m2solutions.ai/sitemap.xml

# Check AI assets manifest
curl https://m2solutions.ai/api/ai-assets/ru
\`\`\`

### 5. Performance Check
- Run Lighthouse audit
- Check Core Web Vitals
- Verify page load times < 3s

## Rollback Procedure

If deployment fails:

\`\`\`bash
# With PM2
pm2 stop ai-solutions-web
git checkout <previous-commit>
pnpm install --frozen-lockfile
pnpm run build
pm2 start ecosystem.config.cjs

# With Docker
docker-compose down
git checkout <previous-commit>
docker-compose -f docker-compose.prod.yml up -d
\`\`\`

## Monitoring

### PM2 Monitoring
\`\`\`bash
# View logs
pm2 logs ai-solutions-web

# Monitor resources
pm2 monit

# View process info
pm2 info ai-solutions-web
\`\`\`

### Log Files
Logs are stored in `./logs/`:
- `pm2-out.log` - Application stdout
- `pm2-error.log` - Application stderr

### Metrics Endpoint
Protected by `METRICS_TOKEN`:
\`\`\`bash
curl -H "Authorization: Bearer $METRICS_TOKEN" https://m2solutions.ai/api/metrics
\`\`\`

## Troubleshooting

### Issue: pnpm install --frozen-lockfile fails
**Solution**: Regenerate lock file with `pnpm install`

### Issue: PM2 process won't start
**Solution**: 
1. Check logs: `pm2 logs ai-solutions-web`
2. Verify logs directory exists: `mkdir -p ./logs`
3. Check port 3000 is available: `lsof -i :3000`

### Issue: CSP violations blocking analytics
**Solution**: Verify CSP headers in `next.config.mjs` include analytics domains

### Issue: Images not loading
**Solution**: 
1. Check `public/placeholder-logo.jpg` exists
2. Verify `images.remotePatterns` in `next.config.mjs`
3. Check CORS headers

## CI/CD Integration

The project includes GitHub Actions workflows:
- `.github/workflows/ci.yml` - Runs on every push
- `.github/workflows/deploy.yml` - Runs on main branch

Both workflows:
- Use pnpm with frozen lockfile
- Create logs directory
- Run validation suite
- Upload test artifacts

## Security Checklist

- ✅ All secrets in environment variables (not committed)
- ✅ CSP headers configured
- ✅ HSTS enabled
- ✅ X-Frame-Options set
- ✅ Metrics endpoint protected with token
- ✅ No sensitive data in logs
- ✅ Dependencies audited (`pnpm audit`)

## Performance Optimization

- ✅ Next.js standalone output enabled
- ✅ Image optimization configured
- ✅ Compression enabled
- ✅ PM2 cluster mode for multi-core usage
- ✅ Redis caching configured
- ✅ Static assets cached with proper headers
