# Build stage: pnpm monorepo, Astro static site
FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@9.0.6 --activate
WORKDIR /app

# Copy workspace and lockfile first for better layer caching
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages ./packages
COPY apps/web ./apps/web

# Install all dependencies (including workspace packages)
RUN pnpm install --frozen-lockfile

# Build the web app and its workspace dependencies
RUN pnpm --filter web build

# Production stage: nginx serves static files
FROM nginx:alpine AS runner

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built site from builder (Astro static output)
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html

# Optional: custom nginx config for SPA-style fallback and headers
RUN echo 'server { \
    listen 80; \
    listen [::]:80; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
