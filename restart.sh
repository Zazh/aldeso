echo "🧨 Останавливаем контейнеры..."
docker compose down

echo "🔄 Пересобираем и запускаем в фоне..."
docker compose up --build -d

echo "✅ Готово! Контейнеры перезапущены."
