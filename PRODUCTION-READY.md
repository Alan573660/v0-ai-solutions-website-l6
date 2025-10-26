# Production Ready Checklist

## ✅ Completed Tasks

### 1. Package Manager Standardization
- ✅ Removed Jest dependencies (jest, @jest/globals)
- ✅ Moved all test/build tools to devDependencies
- ✅ Fixed version ranges (removed ^ and ~ where needed)
- ✅ Added prestart script to create logs directory
- ✅ Package manager set to pnpm@9.0.0

### 2. Environment Variables
- ✅ Unified to single NEXT_PUBLIC_BASE_URL variable
- ✅ Removed all NEXT_PUBLIC_SITE_URL references
- ✅ Updated CI/CD workflows
- ✅ Updated Playwright config

### 3. Security Headers
- ✅ Added Content-Security-Policy to next.config.mjs
- ✅ Strict CSP with allowed sources for Vercel Analytics
- ✅ All security headers configured

### 4. CI/CD Improvements
- ✅ Added logs directory creation in CI
- ✅ Added logs directory creation in deploy workflow
- ✅ Updated all workflows to use NEXT_PUBLIC_BASE_URL
- ✅ Added Renovate config for better pnpm support

### 5. PM2 Logs
- ✅ Prestart script creates ./logs directory
- ✅ CI creates logs directory before tests
- ✅ Deploy workflow creates logs directory on server

## 📋 Required Manual Steps

### 1. Generate pnpm-lock.yaml
\`\`\`bash
# Delete empty pnpm-lock.yaml if exists
rm pnpm-lock.yaml

# Install dependencies to generate lock file
pnpm install

# Verify lock file works
pnpm install --frozen-lockfile

# Commit the lock file
git add pnpm-lock.yaml
git commit -m "chore: generate pnpm-lock.yaml"
\`\`\`

### 2. Update Environment Variables
Update the following in your deployment environment:
- Replace `NEXT_PUBLIC_SITE_URL` with `NEXT_PUBLIC_BASE_URL`
- Set value to: `https://m2solutions.ai`

### 3. Run Validation
\`\`\`bash
# Run full validation suite
pnpm run validate

# Should pass:
# - Type checking
# - Linting
# - Format checking
# - Unit tests
# - Integration tests
\`\`\`

### 4. Test Docker Build
\`\`\`bash
# Build Docker image
docker build -t ai-solutions-website .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_BASE_URL=https://m2solutions.ai \
  ai-solutions-website

# Verify health endpoint
curl http://localhost:3000/api/health
\`\`\`

### 5. Verify CI/CD
- Push changes to trigger CI workflow
- Check that all tests pass
- Verify Playwright report is uploaded
- Check logs directory is created

## 🔍 Verification Commands

\`\`\`bash
# Check no NEXT_PUBLIC_SITE_URL references
grep -r "NEXT_PUBLIC_SITE_URL" --exclude-dir=node_modules --exclude-dir=.next

# Check no Jest references
grep -r "jest" package.json

# Verify pnpm-lock.yaml exists and is valid
pnpm install --frozen-lockfile

# Run dedupe
pnpm dedupe

# Run full validation
pnpm run validate

# Build for production
pnpm run build

# Test Docker build
docker build -t test-build .
\`\`\`

## 📊 Expected Results

After completing manual steps:
- ✅ pnpm-lock.yaml generated and committed
- ✅ All tests pass locally
- ✅ Docker build succeeds
- ✅ CI workflow passes
- ✅ No NEXT_PUBLIC_SITE_URL references
- ✅ No Jest dependencies
- ✅ Logs directory created automatically
- ✅ CSP headers applied
- ✅ Health check returns 200

## 🚀 Deployment

Once all checks pass:
1. Merge to main branch
2. CI will run automatically
3. Deploy workflow will deploy to production
4. Health check will verify deployment
5. Monitor logs in ./logs directory
