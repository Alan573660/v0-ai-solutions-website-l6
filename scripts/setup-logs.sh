#!/bin/bash

# Script to create logs directory for PM2
# Run this before starting PM2 in production

LOGS_DIR="./logs"

if [ ! -d "$LOGS_DIR" ]; then
  echo "Creating logs directory at $LOGS_DIR"
  mkdir -p "$LOGS_DIR"
  chmod 755 "$LOGS_DIR"
  echo "✓ Logs directory created successfully"
else
  echo "✓ Logs directory already exists"
fi

# Create .gitkeep to preserve directory in git
touch "$LOGS_DIR/.gitkeep"

echo "✓ Setup complete"
