# Deployment Guide - AI Solutions Website

## Overview

This guide covers deploying the AI Solutions website to a self-hosted server with production-ready infrastructure.

## Architecture

\`\`\`
Internet → Nginx (Reverse Proxy) → Next.js App (PM2) → Redis Cache
                                                      → HubSpot API
\`\`\`

## Prerequisites

- Ubuntu 20.04+ or similar Linux distribution
- Node.js 20+ installed
- pnpm 9+ installed
- Docker & Docker Compose installed
- Domain name configured (m2solutions.ai)
- SSL certificate (Let's Encrypt recommended)

## Environment Variables

Create `.env.production` file:

\`\`\`bash
# Application
NODE_ENV=production

# Site Configuration
NEXT_PUBLIC_BASE_URL=https://m2solutions.ai

# API Keys
HUBSPOT_API_KEY=your_hubspot_api_key
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Security
METRICS_TOKEN=your_secure_random_token

# Redis (Upstash or self-hosted)
REDIS_URL=redis://localhost:6379
# OR for Upstash:
# KV_REST_API_URL=https://your-redis.upstash.io
# KV_REST_API_TOKEN=your_token

# Rate Limiting
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW_MS=60000

# Internationalization
DEFAULT_LOCALE=ru
SUPPORTED_LOCALES=ru,en

# Logging
LOG_LEVEL=info

# OpenTelemetry (optional)
OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318/v1/traces

# Security
ALLOWED_ORIGINS=https://m2solutions.ai,https://www.m2solutions.ai
\`\`\`

## Deployment Methods

### Method 1: Docker Compose (Recommended)

1. **Clone repository:**
\`\`\`bash
git clone https://github.com/your-org/ai-solutions-website.git
cd ai-solutions-website
\`\`\`

2. **Configure environment:**
\`\`\`bash
cp .env.example .env.production
# Edit .env.production with your values
\`\`\`

3. **Start services:**
\`\`\`bash
docker-compose -f docker-compose.prod.yml up -d
\`\`\`

4. **Verify deployment:**
\`\`\`bash
curl http://localhost:3000/api/health
# Should return: {"status":"ok",...}
\`\`\`

### Method 2: PM2 (Node.js Process Manager)

1. **Install pnpm globally:**
\`\`\`bash
npm install -g pnpm@9
\`\`\`

2. **Install dependencies:**
\`\`\`bash
pnpm install --frozen-lockfile
\`\`\`

3. **Build application:**
\`\`\`bash
pnpm run build
\`\`\`

4. **Start with PM2:**
\`\`\`bash
pm2 start ecosystem.config.cjs --env production
\`\`\`

5. **Save PM2 configuration:**
\`\`\`bash
pm2 save
pm2 startup
\`\`\`

## Nginx Configuration

1. **Install Nginx:**
\`\`\`bash
sudo apt update
sudo apt install nginx
\`\`\`

2. **Copy configuration:**
\`\`\`bash
sudo cp nginx/conf.d/default.conf /etc/nginx/sites-available/m2solutions.ai
sudo ln -s /etc/nginx/sites-available/m2solutions.ai /etc/nginx/sites-enabled/
\`\`\`

3. **Install SSL certificate (Let's Encrypt):**
\`\`\`bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d m2solutions.ai -d www.m2solutions.ai
\`\`\`

4. **Test and reload Nginx:**
\`\`\`bash
sudo nginx -t
sudo systemctl reload nginx
\`\`\`

## CI/CD with GitHub Actions

The repository includes automated deployment via GitHub Actions.

### Setup:

1. **Add GitHub Secrets:**
   - `SSH_PRIVATE_KEY`: SSH key for server access
   - `SERVER_HOST`: Your server IP/hostname
   - `SERVER_USER`: SSH username
   - `ENV_FILE`: Contents of `.env.production`

2. **Configure workflow:**
   - Edit `.github/workflows/deploy.yml`
   - Update server paths and deployment commands

3. **Deploy:**
   - Push to `main` branch triggers automatic deployment
   - Or manually trigger via GitHub Actions UI

## Monitoring & Observability

### Health Checks

\`\`\`bash
# System health (returns {"status":"ok",...})
curl https://m2solutions.ai/api/health

# Performance metrics (requires Bearer token)
curl -H "Authorization: Bearer YOUR_METRICS_TOKEN" https://m2solutions.ai/api/metrics

# API test endpoint
curl https://m2solutions.ai/api/test
\`\`\`

### Logs

**PM2 logs:**
\`\`\`bash
pm2 logs ai-solutions-website
\`\`\`

**Docker logs:**
\`\`\`bash
docker-compose -f docker-compose.prod.yml logs -f app
\`\`\`

**Nginx logs:**
\`\`\`bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
\`\`\`

### OpenTelemetry Tracing

If using OpenTelemetry, configure collector:

\`\`\`yaml
# otel-collector-config.yaml
receivers:
  otlp:
    protocols:
      http:
        endpoint: 0.0.0.0:4318

exporters:
  logging:
    loglevel: debug
  jaeger:
    endpoint: jaeger:14250

service:
  pipelines:
    traces:
      receivers: [otlp]
      exporters: [logging, jaeger]
\`\`\`

## Performance Optimization

### Redis Caching

- Solutions data: 1 hour TTL
- FAQ data: 30 minutes TTL
- Blog posts: 1 hour TTL

### Rate Limiting

- API endpoints: 100 requests/minute per IP
- Lead submission: 5 requests/minute per IP

### Static Assets

- Nginx caches static files for 1 year
- Gzip compression enabled
- HTTP/2 enabled

## Backup & Recovery

### Database Backup (if using)

\`\`\`bash
# Backup
pg_dump -U postgres ai_solutions > backup_$(date +%Y%m%d).sql

# Restore
psql -U postgres ai_solutions < backup_20250117.sql
\`\`\`

### Redis Backup

\`\`\`bash
# Backup
redis-cli SAVE
cp /var/lib/redis/dump.rdb /backup/redis_$(date +%Y%m%d).rdb

# Restore
cp /backup/redis_20250117.rdb /var/lib/redis/dump.rdb
sudo systemctl restart redis
\`\`\`

## Troubleshooting

### Application won't start

\`\`\`bash
# Check logs
pm2 logs ai-solutions-website --lines 100

# Check environment
pm2 env 0

# Restart
pm2 restart ai-solutions-website
\`\`\`

### Build fails

\`\`\`bash
# Clear cache and rebuild
pnpm store prune
rm -rf .next node_modules
pnpm install
pnpm run build
\`\`\`

### High memory usage

\`\`\`bash
# Check memory
pm2 monit

# Restart with memory limit
pm2 restart ai-solutions-website --max-memory-restart 1G
\`\`\`

### Redis connection issues

\`\`\`bash
# Test Redis
redis-cli ping

# Check Redis logs
sudo journalctl -u redis -n 50
\`\`\`

### Rate limiting not working

\`\`\`bash
# Check Redis keys
redis-cli KEYS "ratelimit:*"

# Monitor rate limit hits
redis-cli MONITOR | grep ratelimit
\`\`\`

## Security Checklist

- [ ] SSL certificate installed and auto-renewal configured
- [ ] Environment variables secured (not in git)
- [ ] `METRICS_TOKEN` set for metrics endpoint
- [ ] Firewall configured (UFW or iptables)
- [ ] SSH key-based authentication only
- [ ] Regular security updates enabled
- [ ] Rate limiting configured
- [ ] CORS properly configured
- [ ] Security headers enabled
- [ ] Logs monitored for suspicious activity

## Performance Targets

- **TTFB**: < 200ms (p95)
- **API Latency**: < 400ms (p95)
- **Error Rate**: < 0.5%
- **Uptime**: > 99.9%
- **Cache Hit Rate**: > 80%

## Verification Checklist

After deployment, verify:

1. **Core Endpoints:**
   - `/api/health` returns `{"status":"ok"}`
   - `/api/docs` returns OpenAPI spec
   - `/api/test` returns environment info

2. **Pages Load:**
   - `/ru` - Russian homepage
   - `/en` - English homepage
   - All other locales: `/es`, `/de`, `/nl`, `/fr`

3. **SEO:**
   - `/robots.txt` accessible
   - `/sitemap.xml` accessible
   - Locale sitemaps: `/sitemap-ru.xml`, etc.

4. **Security:**
   - HTTPS enforced
   - Metrics endpoint requires Bearer token
   - No sensitive data exposed

See `docs/VERIFICATION-CHECKLIST.md` for complete verification steps.

## Support

For issues or questions:
- GitHub Issues: https://github.com/your-org/ai-solutions-website/issues
- Email: devops@m2solutions.ai
