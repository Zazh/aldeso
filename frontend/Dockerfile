# === Этап 1: сборка Svelte-проекта ===
FROM node:20-alpine AS builder
WORKDIR /app

# Сначала ставим зависимости, чтобы кэшировать слои
COPY app/package*.json app/pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install

# Теперь копируем исходники и билдим
COPY app/ ./
RUN pnpm build

# === Этап 2: nginx для отдачи статики и проксирования API/медиа ===
FROM nginx:stable-alpine
# Чистим дефолтную статику
RUN rm -rf /usr/share/nginx/html/*

# Копируем ваш конфиг nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем готовую статику
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
