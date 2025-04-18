# === ЭТАП 1: сборка Svelte‑проекта =============================
FROM node:20-alpine AS builder
WORKDIR /app

# 1. Слой зависимостей — чтобы кешировалось
COPY app/package*.json app/pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install

# 2. Копируем исходники + .env
COPY app/ ./
#             └── здесь уже лежит  .env  вместе с исходниками

# 3. Сборка — Vite увидит PUBLIC_API_BASE
RUN pnpm build

# === ЭТАП 2: лёгкий nginx для статики ==========================
FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
