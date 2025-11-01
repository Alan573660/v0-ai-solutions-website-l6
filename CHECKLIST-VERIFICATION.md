# Чек-лист проверки исправлений

## P0 (Блокеры)

### 1. ✅ Валидный pnpm-lock.yaml
**Что сделано:**
- Удален пустой pnpm-lock.yaml
- Требуется регенерация через `pnpm install`

**Проверка:**
\`\`\`bash
# Локально
pnpm install
git add pnpm-lock.yaml
git commit -m "chore: regenerate pnpm-lock.yaml"

# В CI/Docker
pnpm install --frozen-lockfile  # должно пройти без ошибок
\`\`\`

**Критерий:** `pnpm install --frozen-lockfile` проходит в CI и Docker без ошибок.

---

## P1 (Критичные)

### 2. ✅ Унификация переменной окружения
**Что сделано:**
- Заменено `NEXT_PUBLIC_SITE_URL` → `NEXT_PUBLIC_BASE_URL` везде
- Обновлены: docker-compose.dev.yml, docker-compose.prod.yml, app/api/ai-assets/[locale]/route.ts
- Домен по умолчанию: `https://m2solutions.ai`

**Проверка:**
\`\`\`bash
# Поиск старой переменной (не должно быть результатов)
grep -r "NEXT_PUBLIC_SITE_URL" --exclude-dir=node_modules --exclude-dir=.next

# Проверка robots.txt
curl http://localhost:3000/robots.txt

# Проверка sitemap
curl http://localhost:3000/sitemap.xml

# Проверка ai-assets
curl http://localhost:3000/api/ai-assets/ru
\`\`\`

**Критерий:** Все endpoint'ы используют единый домен из `NEXT_PUBLIC_BASE_URL`.

---

### 3. ✅ docker-compose.dev.yml на pnpm
**Что сделано:**
- Заменено `command: npm run dev` → `command: pnpm run dev`
- Обновлена переменная на `NEXT_PUBLIC_BASE_URL`

**Проверка:**
\`\`\`bash
docker-compose -f docker-compose.dev.yml up
# Проверить логи - должно быть "pnpm run dev"
\`\`\`

**Критерий:** Dev-окружение стартует через pnpm без ошибок.

---

### 4. ✅ Тестовые инструменты в devDependencies
**Что сделано:**
- Перенесены в devDependencies: `@testing-library/*`, `@vitest/*`, `@playwright/test`, `happy-dom`, `jsdom`, `@vitejs/plugin-react`
- Удалены из dependencies: `jest`, `@jest/globals`, `path` (не нужен)

**Проверка:**
\`\`\`bash
# Production install не должен тянуть тестовые пакеты
pnpm install --prod
ls node_modules | grep -E "(vitest|playwright|testing-library)"  # не должно быть
\`\`\`

**Критерий:** `pnpm install --prod` не устанавливает тестовые зависимости.

---

### 5. ✅ Удаление Jest
**Что сделано:**
- Удалены зависимости: `jest`, `@jest/globals`
- Оставлен только Vitest для unit/integration тестов

**Проверка:**
\`\`\`bash
# Не должно быть Jest файлов
ls jest.* 2>/dev/null  # должно быть пусто

# Тесты должны работать
pnpm test
pnpm test:unit
pnpm test:integration
\`\`\`

**Критерий:** `pnpm test` стабильно работает, Jest конфигов нет.

---

### 6. ✅ PM2 логи
**Что сделано:**
- Создан скрипт `scripts/setup-logs.sh` для создания директории logs
- PM2 конфиг использует `./logs/pm2-*.log`
- docker-compose.prod.yml монтирует `./logs:/app/logs`

**Проверка:**
\`\`\`bash
# Создать директорию логов
bash scripts/setup-logs.sh

# Запустить PM2
pm2 start ecosystem.config.cjs
pm2 logs  # должны быть логи без ошибок
\`\`\`

**Критерий:** PM2 перезапускается без ошибок логирования.

---

### 7. ✅ docker-compose.prod.yml без nginx
**Что сделано:**
- Удален сервис nginx (нет конфигов в репозитории)
- Удален volume nginx-cache

**Проверка:**
\`\`\`bash
docker-compose -f docker-compose.prod.yml up -d
# Не должно быть ошибок монтирования nginx конфигов
\`\`\`

**Критерий:** `docker compose up -d` работает без ошибок.

---

### 8. ✅ contactEmail в ai-assets
**Что сделано:**
- Изменено `info@aisolutions-m2.com` → `info@m2solutions.ai`
- Выровнено с доменом BASE_URL

**Проверка:**
\`\`\`bash
curl http://localhost:3000/api/ai-assets/ru | jq '.organization.contactEmail'
# Должно быть: "info@m2solutions.ai"
\`\`\`

**Критерий:** Email соответствует домену из BASE_URL.

---

## P2 (Технический долг)

### 9. ✅ Удаление pnpm install --prod из Dockerfile
**Что сделано:**
- Удалена строка `RUN pnpm install --prod --frozen-lockfile` из runner stage
- Standalone build уже включает все необходимые зависимости

**Проверка:**
\`\`\`bash
docker build -t ai-solutions-test .
docker images ai-solutions-test  # проверить размер образа
\`\`\`

**Критерий:** Образ меньше, сборка стабильна.

---

### 10. ✅ Фиксация версий
**Что сделано:**
- Удалены `^` и `~` из всех версий в package.json
- Зафиксированы точные версии (например: `"next": "14.2.16"`)

**Проверка:**
\`\`\`bash
# Проверить что нет плавающих версий
cat package.json | grep -E '"\^|"~'  # не должно быть результатов
\`\`\`

**Критерий:** Повторяемые сборки без неожиданных обновлений.

---

### 11. ✅ Удаление X-XSS-Protection
**Что сделано:**
- Удален устаревший заголовок `X-XSS-Protection` из next.config.mjs
- Оставлены современные заголовки безопасности

**Проверка:**
\`\`\`bash
curl -I http://localhost:3000 | grep -i xss
# Не должно быть X-XSS-Protection
\`\`\`

**Критерий:** Заголовки современного вида без устаревших.

---

### 12. ✅ Playwright report в CI
**Что сделано:**
- Добавлен шаг `Upload Playwright report` в .github/workflows/ci.yml
- Артефакт сохраняется на 30 дней

**Проверка:**
- Запустить CI workflow
- Проверить наличие артефакта `playwright-report` в GitHub Actions

**Критерий:** Репорт доступен по артефактам после e2e тестов.

---

## Итоговая проверка

### Полный цикл сборки и деплоя:

\`\`\`bash
# 1. Регенерация lock-файла
pnpm install

# 2. Валидация
pnpm run validate

# 3. Docker build
docker build -t ai-solutions-website .

# 4. Production запуск
docker-compose -f docker-compose.prod.yml up -d

# 5. Health check
curl http://localhost:3000/api/health

# 6. Проверка endpoint'ов
curl http://localhost:3000/robots.txt
curl http://localhost:3000/sitemap.xml
curl http://localhost:3000/api/ai-assets/ru

# 7. PM2 логи
bash scripts/setup-logs.sh
pm2 start ecosystem.config.cjs
pm2 logs
\`\`\`

### Список измененных файлов:

1. ✅ `package.json` - фиксация версий, перенос тестовых зависимостей, удаление Jest/path
2. ✅ `docker-compose.dev.yml` - pnpm вместо npm, NEXT_PUBLIC_BASE_URL
3. ✅ `docker-compose.prod.yml` - удален nginx, NEXT_PUBLIC_BASE_URL
4. ✅ `Dockerfile` - удален pnpm install --prod из runner
5. ✅ `app/api/ai-assets/[locale]/route.ts` - contactEmail выровнен с доменом
6. ✅ `next.config.mjs` - удален X-XSS-Protection
7. ✅ `.github/workflows/ci.yml` - добавлен upload playwright-report
8. ✅ `scripts/setup-logs.sh` - скрипт для создания logs директории
9. ✅ `pnpm-lock.yaml` - требуется регенерация через `pnpm install`

---

## Быстрая проверка (TL;DR)

\`\`\`bash
# Регенерировать lock-файл
pnpm install

# Проверить что нет старых переменных
grep -r "NEXT_PUBLIC_SITE_URL" --exclude-dir=node_modules

# Проверить что нет плавающих версий
cat package.json | grep -E '"\^|"~'

# Запустить тесты
pnpm run validate

# Собрать Docker
docker build -t test .

# Запустить production
docker-compose -f docker-compose.prod.yml up -d

# Проверить health
curl http://localhost:3000/api/health
