# Production Verification Checklist

## Pre-Deployment Checks

### Environment Variables
- [ ] `NEXT_PUBLIC_BASE_URL` is set correctly
- [ ] `HUBSPOT_API_KEY` is configured (if using HubSpot)
- [ ] `NEXT_PUBLIC_GA_ID` is set (if using Google Analytics)
- [ ] `METRICS_TOKEN` is set for metrics endpoint security
- [ ] `REDIS_URL` is configured (if using Redis)
- [ ] `LOG_LEVEL` is set appropriately for production

### Build & Dependencies
- [ ] `pnpm install` completes without errors
- [ ] `pnpm run build` succeeds
- [ ] `pnpm run typecheck` passes
- [ ] `pnpm run lint` passes with no warnings
- [ ] `pnpm test` passes all tests

### Docker
- [ ] `docker build` completes successfully
- [ ] `docker-compose up` starts without errors
- [ ] Container health check passes

## Post-Deployment Verification

### Core Endpoints
Test all endpoints return expected responses:

\`\`\`bash
# Health check (should return {"status":"ok",...})
curl https://m2solutions.ai/api/health

# API docs (should return OpenAPI spec)
curl https://m2solutions.ai/api/docs

# Metrics (requires Bearer token)
curl -H "Authorization: Bearer YOUR_TOKEN" https://m2solutions.ai/api/metrics

# AI Assets (Russian)
curl https://m2solutions.ai/api/ai-assets/ru

# AI Assets (English)
curl https://m2solutions.ai/api/ai-assets/en
\`\`\`

### Pages Load Correctly
- [ ] Homepage (Russian): https://m2solutions.ai/ru
- [ ] Homepage (English): https://m2solutions.ai/en
- [ ] All locale variants load: /es, /de, /nl, /fr

### SEO & Meta
- [ ] robots.txt is accessible: https://m2solutions.ai/robots.txt
- [ ] sitemap.xml is accessible: https://m2solutions.ai/sitemap.xml
- [ ] Locale sitemaps load: /sitemap-ru.xml, /sitemap-en.xml, etc.
- [ ] Meta tags are correct (check with view-source or browser inspector)
- [ ] Canonical URLs point to correct domain
- [ ] hreflang tags are present for all locales

### Performance
- [ ] Lighthouse score > 90 for Performance
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] No console errors in browser

### Monitoring
- [ ] Health check endpoint returns 200
- [ ] Metrics endpoint is secured (401 without token)
- [ ] Logs are being written correctly
- [ ] PM2 process is running (if using PM2)

### Security
- [ ] HTTPS is enforced
- [ ] Security headers are set correctly
- [ ] API endpoints require authentication where needed
- [ ] No sensitive data in client-side code
- [ ] Environment variables are not exposed

## Rollback Plan
If issues are found:
1. Check logs: `docker logs <container_id>` or `pm2 logs`
2. Verify environment variables
3. Roll back to previous version if critical
4. Document the issue for post-mortem

## Post-Launch Monitoring
- Monitor error rates in first 24 hours
- Check analytics for traffic patterns
- Verify integrations (HubSpot, GA) are working
- Monitor server resources (CPU, memory, disk)
