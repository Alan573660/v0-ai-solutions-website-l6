# Production Readiness Checklist

## Выполненные исправления

### 1. ✅ pnpm-lock.yaml
**Изменение:** Удалены пакеты `jest`, `@jest/globals`, `path` из dependencies  
**Объяснение:** Очистка от ненужных зависимостей перед генерацией lock-файла  
**Проверка:**
\`\`\`bash
# Сгенерировать lock-файл
pnpm install

# Проверить что установка работает с frozen lockfile
pnpm install --frozen-lockfile

# Проверить в CI/Docker
docker build -t test .
\`\`\`

### 2. ✅ Удаление Jest
**Изменение:** Удалены `jest` и `@jest/globals` из package.json  
**Объяснение:** Проект использует только Vitest и Playwright для тестирования  
**Проверка:**
\`\`\`bash
# Не должно находить jest в зависимостях
grep -i "jest" package.json | grep -v "@testing-library/jest-dom"

# Тесты должны работать
pnpm test
pnpm test:unit
pnpm test:integration
pnpm test:e2e
\`\`\`

### 3. ✅ Разделение зависимостей
**Изменение:** Все тестовые пакеты перенесены в devDependencies, удален пакет `path`  
**Объяснение:** Production сборка не должна устанавливать тестовые инструменты  
**Проверка:**
\`\`\`bash
# Production установка не должна тянуть vitest, playwright и т.д.
pnpm install --prod
ls node_modules | grep -E "(vitest|playwright|testing-library)"
# Должно быть пусто
\`\`\`

### 4. ✅ Удаление дубликатов
**Изменение:** @playwright/test только в devDependencies  
**Объяснение:** Один пакет - одна запись  
**Проверка:**
\`\`\`bash
# Должна быть только одна запись
grep "@playwright/test" package.json | wc -l
# Результат: 1
\`\`\`

### 5. ✅ Фиксация версий
**Изменение:** Удалены "latest", зафиксированы точные версии без ^ и ~  
**Объяснение:** Повторяемые сборки без неожиданных обновлений  
**Проверка:**
\`\`\`bash
# Не должно быть "latest"
grep "latest" package.json

# Выполнить dedupe
pnpm dedupe

# Проверить что lock-файл не изменился
git diff pnpm-lock.yaml
\`\`\`

### 6. ✅ PM2 deployment
**Изменение:** В deploy.yml добавлена проверка существования процесса перед reload  
**Объяснение:** Первый деплой использует `pm2 start`, последующие - `pm2 reload`  
**Проверка:**
\`\`\`bash
# На чистом сервере должен запуститься процесс
pm2 describe ai-solutions-website
# Если процесса нет, выполнится pm2 start
# Если есть, выполнится pm2 reload
\`\`\`

### 7. ✅ .env.sample
**Изменение:** Создан файл с полным списком переменных окружения  
**Объяснение:** Документация всех необходимых переменных для деплоя  
**Проверка:**
\`\`\`bash
# Файл должен существовать
cat .env.sample

# Все переменные из sample должны быть в README
diff <(grep "^[A-Z]" .env.sample | cut -d= -f1 | sort) \
     <(grep -oP "(?<=\`)[A-Z_]+(?=\`)" README.md | sort | uniq)
\`\`\`

### 8. ✅ Dependency updates
**Изменение:** Оставлен только Renovate (удален Dependabot для npm)  
**Объяснение:** Renovate лучше поддерживает pnpm и lock-файлы  
**Проверка:**
\`\`\`bash
# Должен быть только renovate.json
ls -la | grep -E "(renovate|dependabot)"

# Dependabot должен быть только для GitHub Actions и Docker
cat .github/dependabot.yml
\`\`\`

## Следующие шаги

### Обязательные действия перед деплоем:

1. **Сгенерировать pnpm-lock.yaml:**
   \`\`\`bash
   pnpm install
   git add pnpm-lock.yaml
   git commit -m "chore: generate pnpm-lock.yaml"
   \`\`\`

2. **Запустить валидацию:**
   \`\`\`bash
   pnpm run validate
   \`\`\`

3. **Проверить Docker сборку:**
   \`\`\`bash
   docker build -t ai-solutions-website .
   docker run -p 3000:3000 ai-solutions-website
   \`\`\`

4. **Настроить переменные окружения:**
   - Скопировать `.env.sample` в `.env`
   - Заполнить все значения реальными ключами
   - Добавить переменные в GitHub Secrets для CI/CD

5. **Проверить CI:**
   - Push в main должен запустить тесты и сборку
   - Все шаги должны пройти успешно

## Критерии готовности к production

- [ ] pnpm install --frozen-lockfile проходит без ошибок
- [ ] pnpm run validate проходит успешно
- [ ] Docker образ собирается и запускается
- [ ] Все тесты проходят (unit, integration, e2e)
- [ ] Health check endpoint отвечает
- [ ] Переменные окружения настроены
- [ ] PM2 процесс запускается и перезагружается
- [ ] CI/CD pipeline работает
- [ ] Мониторинг и логирование настроены

## Troubleshooting

### pnpm install --frozen-lockfile fails
\`\`\`bash
# Удалить lock-файл и node_modules
rm -rf node_modules pnpm-lock.yaml

# Сгенерировать заново
pnpm install

# Закоммитить новый lock-файл
git add pnpm-lock.yaml
git commit -m "chore: regenerate pnpm-lock.yaml"
\`\`\`

### PM2 reload fails on first deploy
\`\`\`bash
# Проверить существует ли процесс
pm2 describe ai-solutions-website

# Если нет, запустить вручную
pm2 start ecosystem.config.cjs

# Сохранить конфигурацию
pm2 save
\`\`\`

### Tests fail in CI
\`\`\`bash
# Проверить локально
pnpm test:unit
pnpm test:integration
pnpm test:e2e

# Проверить переменные окружения в GitHub Secrets
# Убедиться что TEST_DATABASE_URL и TEST_REDIS_URL настроены
