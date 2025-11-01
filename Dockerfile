# Multi-stage build for optimized production image with pnpm

# ------- Stage 1: Dependencies -------
FROM node:20-alpine AS deps
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# ------- Stage 2: Builder -------
FROM node:20-alpine AS builder
WORKDIR /app
RUN corepack enable

ARG NEXT_INTL_CONFIG_PATH=src/i18n.ts
ENV NEXT_INTL_CONFIG=${NEXT_INTL_CONFIG_PATH}

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN node -e "require('fs').accessSync(process.env.NEXT_INTL_CONFIG); console.log('next-intl config OK:', process.env.NEXT_INTL_CONFIG)"

RUN rm -rf .next

RUN pnpm build

# ------- Stage 3: Runner -------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

ARG NEXT_INTL_CONFIG_PATH=src/i18n.ts
ENV NEXT_INTL_CONFIG=${NEXT_INTL_CONFIG_PATH}

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY --from=builder --chown=nextjs:nodejs /app/messages ./messages

USER nextjs

EXPOSE 3000
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

CMD ["node", "server.js"]
