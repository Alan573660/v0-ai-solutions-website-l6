#!/bin/bash

set -e

echo "🚀 Starting deployment process..."

# Check if required environment variables are set
if [ -z "$VERCEL_TOKEN" ]; then
  echo "❌ Error: VERCEL_TOKEN is not set"
  exit 1
fi

echo "📁 Creating logs directory..."
mkdir -p ./logs

# Run pre-deployment checks
echo "🔍 Running pre-deployment checks..."
npm run validate

# Build the application
echo "🏗️  Building application..."
npm run build

# Run security scan
echo "🔒 Running security scan..."
npm audit --audit-level=high || true

# Deploy to Vercel
echo "📦 Deploying to Vercel..."
vercel --prod --token=$VERCEL_TOKEN

# Check if PM2 process is already running
if pm2 describe ai-solutions-web > /dev/null 2>&1; then
  echo "🔄 PM2 process exists, reloading..."
  pm2 reload ecosystem.config.cjs
else
  echo "▶️  PM2 process not found, starting fresh..."
  pm2 start ecosystem.config.cjs
fi

echo "✅ Deployment completed successfully!"
