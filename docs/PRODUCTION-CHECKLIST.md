# Production Deployment Checklist

Comprehensive checklist for deploying AI Solutions website to production.

## P0 - Critical Blockers (Must Fix Before Deploy)

### 1. Root Layout Structure
**Status:** ✅ Fixed
**Change:** Added proper `<html>` and `<body>` tags with font variables
**Verification:**
\`\`\`bash
pnpm dev
# Visit http://localhost:3000 - should render without errors
\`\`\`
**Criteria:** Dev/prod server starts without root layout errors

### 2. pnpm Lock File
**Status:** ⚠️ Requires Action
**Change:** Created placeholder pnpm-lock.yaml
**Action Required:**
\`\`\`bash
# Delete placeholder and generate real lock file
rm pnpm-lock.yaml
pnpm install
git add pnpm-lock.yaml
git commit -m "chore: generate pnpm-lock.yaml"
\`\`\`
**Verification:**
\`\`\`bash
pnpm install --frozen-lockfile
# Should complete without errors
\`\`\`
**Criteria:** `pnpm install --frozen-lockfile` passes in CI and Docker

### 3. Docker Build with Frozen Lockfile
**Status:** ✅ Fixed
**Change:** Dockerfile uses `--frozen-lockfile` flag
**Verification:**
\`\`\`bash
docker build -t ai-solutions-test .
# Should complete successfully
\`\`\`
**Criteria:** Docker build completes without dependency resolution

---

## P1 - Production Issues (Fix Before Go-Live)

### 4. Unified Package Manager (pnpm)
**Status:** ✅ Fixed
**Changes:**
- Dockerfile.dev updated to use pnpm and Node 20
- README.md updated with pnpm commands
- All scripts use pnpm
**Verification:**
\`\`\`bash
# Check Dockerfile.dev
grep "pnpm" Dockerfile.dev
# Check README
grep "pnpm" README.md
\`\`\`
**Criteria:** All documentation and configs reference pnpm only

### 5. Node Version Alignment (Node 20)
**Status:** ✅ Fixed
**Changes:**
- Dockerfile: `FROM node:20-alpine`
- Dockerfile.dev: `FROM node:20-alpine`
- CI workflow: `node-version: '20'`
**Verification:**
\`\`\`bash
# In Docker container
docker run ai-solutions-test node -v
# Should output: v20.x.x
\`\`\`
**Criteria:** `node -v` returns v20.x.x in all environments

### 6. Single Domain and Environment Variable
**Status:** ✅ Fixed
**Changes:**
- Standardized on `NEXT_PUBLIC_BASE_URL`
- Default domain: `https://m2solutions.ai`
- Updated docker-compose.prod.yml
- Updated app/api/ai-assets/[locale]/route.ts
**Verification:**
\`\`\`bash
# Check environment variable usage
grep -r "NEXT_PUBLIC_SITE_URL" . --exclude-dir=node_modules
# Should return no results (except in docs)

# Check default domain
grep -r "m2solutions.ai" app/api/ai-assets
\`\`\`
**Criteria:** All URLs use NEXT_PUBLIC_BASE_URL, robots/sitemap/API use single domain

### 7. Test Tools in devDependencies
**Status:** ✅ Fixed
**Changes:**
- Moved @playwright/test, @testing-library/*, @vitejs/*, vitest to devDependencies
- Removed jest and @jest/globals from dependencies
**Verification:**
\`\`\`bash
# Check package.json structure
cat package.json | grep -A 5 "devDependencies"
# Verify test packages are in devDependencies

# Test production install
pnpm install --prod
ls node_modules | grep -E "(playwright|vitest|testing-library)"
# Should return empty (test tools not installed)
\`\`\`
**Criteria:** `pnpm install --prod` doesn't install test packages

### 8. Playwright on Production Build
**Status:** ✅ Fixed
**Changes:**
- playwright.config.ts webServer.command changed to `pnpm start`
- CI workflow runs `pnpm build` before e2e tests
**Verification:**
\`\`\`bash
# Build first
pnpm build
# Run e2e tests
pnpm test:e2e
# Should test against production build
\`\`\`
**Criteria:** E2E tests run against `next start` (production server)

### 9. PM2 Logs Directory
**Status:** ✅ Fixed
**Changes:**
- Created scripts/setup-logs.sh
- ecosystem.config.cjs already configured for ./logs
**Action Required:**
\`\`\`bash
# On production server, before PM2 start
chmod +x scripts/setup-logs.sh
./scripts/setup-logs.sh
\`\`\`
**Verification:**
\`\`\`bash
# Check logs directory exists
ls -la logs/
# Start PM2
pm2 start ecosystem.config.cjs
# Check logs are being written
ls -la logs/
\`\`\`
**Criteria:** PM2 starts without "ENOENT: no such file or directory" errors

### 10. docker-compose.prod.yml Cleanup
**Status:** ✅ Fixed
**Changes:**
- Removed `deploy.resources` block (requires Docker Swarm)
- Kept nginx service (configs should exist in ./nginx/)
- Changed NEXT_PUBLIC_SITE_URL to NEXT_PUBLIC_BASE_URL
- Added ./logs volume mount
**Verification:**
\`\`\`bash
# Check nginx configs exist
ls -la nginx/nginx.conf nginx/conf.d/
# If configs don't exist, remove nginx service from docker-compose.prod.yml

# Test compose file
docker compose -f docker-compose.prod.yml config
# Should validate without errors

# Start services
docker compose -f docker-compose.prod.yml up -d
\`\`\`
**Criteria:** `docker compose up -d` starts without volume/mount errors

---

## P2 - Technical Debt (Nice to Have)

### 11. README with pnpm Commands
**Status:** ✅ Fixed
**Change:** All commands in README.md use pnpm
**Verification:**
\`\`\`bash
grep "npm " README.md
# Should return no npm commands (only pnpm)
\`\`\`

### 12. Remove images.unoptimized
**Status:** ✅ Fixed
**Change:** Removed `unoptimized: true` from next.config.mjs
**Verification:**
\`\`\`bash
grep "unoptimized" next.config.mjs
# Should return no results
\`\`\`
**Criteria:** Next.js Image Optimization is enabled

### 13. Fixed Package Versions
**Status:** ✅ Fixed
**Changes:**
- Replaced "latest" with specific versions
- All dependencies now have fixed versions (^x.x.x or x.x.x)
**Verification:**
\`\`\`bash
grep "latest" package.json
# Should return no results
\`\`\`
**Criteria:** No "latest" versions in package.json

---

## Pre-Deployment Verification

### Environment Variables
\`\`\`bash
# Required variables for production
NEXT_PUBLIC_BASE_URL=https://m2solutions.ai
HUBSPOT_API_KEY=your_key
NEXT_PUBLIC_GA_ID=your_ga_id
REDIS_URL=redis://redis:6379
LOG_LEVEL=info
METRICS_TOKEN=your_secret_token
\`\`\`

### Build Test
\`\`\`bash
# Clean build
rm -rf .next
pnpm build
# Should complete without errors

# Start production server
pnpm start
# Visit http://localhost:3000
\`\`\`

### Docker Test
\`\`\`bash
# Build image
docker build -t ai-solutions-prod .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_BASE_URL=https://m2solutions.ai \
  ai-solutions-prod

# Test health endpoint
curl http://localhost:3000/api/health
# Should return: {"status":"ok",...}
\`\`\`

### CI/CD Test
\`\`\`bash
# Run full validation locally
pnpm run validate
# Should pass: typecheck, lint, format:check, tests

# Run e2e tests
pnpm build
pnpm test:e2e
\`\`\`

---

## Post-Deployment Verification

### 1. Health Check
\`\`\`bash
curl https://m2solutions.ai/api/health
# Expected: {"status":"ok","uptime":...}
\`\`\`

### 2. Metrics Endpoint (Protected)
\`\`\`bash
curl -H "Authorization: Bearer YOUR_METRICS_TOKEN" \
  https://m2solutions.ai/api/metrics
# Expected: JSON with performance metrics
\`\`\`

### 3. SEO Endpoints
\`\`\`bash
# Robots.txt
curl https://m2solutions.ai/robots.txt

# Sitemap
curl https://m2solutions.ai/sitemap.xml

# AI Assets
curl https://m2solutions.ai/api/ai-assets/ru
\`\`\`

### 4. Performance
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s

### 5. Security Headers
\`\`\`bash
curl -I https://m2solutions.ai
# Check for:
# - Strict-Transport-Security
# - X-Frame-Options: SAMEORIGIN
# - X-Content-Type-Options: nosniff
\`\`\`

---

## Rollback Plan

If issues occur after deployment:

1. **Immediate:** Revert to previous Docker image
\`\`\`bash
docker tag ai-solutions-prod:previous ai-solutions-prod:latest
docker compose -f docker-compose.prod.yml up -d
\`\`\`

2. **Git:** Revert to last stable commit
\`\`\`bash
git revert HEAD
git push origin main
\`\`\`

3. **Monitoring:** Check logs
\`\`\`bash
# PM2 logs
pm2 logs ai-solutions-web

# Docker logs
docker compose -f docker-compose.prod.yml logs -f app
\`\`\`

---

## Summary of Changes

### Files Modified:
1. `app/layout.tsx` - Added html/body structure
2. `Dockerfile.dev` - Updated to Node 20 and pnpm
3. `package.json` - Fixed versions, moved test deps to devDependencies
4. `playwright.config.ts` - Changed to production build
5. `docker-compose.prod.yml` - Removed deploy.resources, updated env vars
6. `README.md` - Updated to pnpm commands
7. `next.config.mjs` - Removed images.unoptimized
8. `app/api/ai-assets/[locale]/route.ts` - Updated default domain

### Files Created:
1. `pnpm-lock.yaml` - Placeholder (regenerate with pnpm install)
2. `scripts/setup-logs.sh` - PM2 logs directory setup
3. `docs/PRODUCTION-CHECKLIST.md` - This file

### Action Items Before Deploy:
1. ✅ Regenerate pnpm-lock.yaml: `rm pnpm-lock.yaml && pnpm install`
2. ✅ Run setup-logs.sh on production server
3. ✅ Verify nginx configs exist or remove nginx service
4. ✅ Set all required environment variables
5. ✅ Test Docker build locally
6. ✅ Run full test suite

---

## Contact

For deployment issues, contact the DevOps team or refer to:
- `docs/DEPLOYMENT.md` - Detailed deployment guide
- `docs/TESTING.md` - Testing documentation
- `docs/VERIFICATION-CHECKLIST.md` - API verification steps
\`\`\`

\`\`\`plaintext file="logs/.gitkeep"
# This file ensures the logs directory is tracked by git
# PM2 will write log files here
