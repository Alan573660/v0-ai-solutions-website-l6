#!/bin/bash

# Health check script for monitoring
URL="${1:-http://localhost:3000/api/health}"
MAX_RETRIES=3
RETRY_DELAY=5

for i in $(seq 1 $MAX_RETRIES); do
  echo "Health check attempt $i/$MAX_RETRIES..."
  
  RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
  
  if [ "$RESPONSE" = "200" ]; then
    echo "✅ Health check passed"
    exit 0
  fi
  
  echo "❌ Health check failed (HTTP $RESPONSE)"
  
  if [ $i -lt $MAX_RETRIES ]; then
    echo "Retrying in ${RETRY_DELAY}s..."
    sleep $RETRY_DELAY
  fi
done

echo "❌ Health check failed after $MAX_RETRIES attempts"
exit 1
