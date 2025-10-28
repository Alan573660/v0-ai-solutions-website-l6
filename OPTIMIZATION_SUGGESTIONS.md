# Предложения по оптимизации проекта

## Приоритет 1: Критические улучшения

### 1.1 TypeScript строгость
- ✅ **Выполнено**: Включены `noUnusedLocals` и `noUnusedParameters`
- ⚠️ **TODO**: Исправить все ошибки TypeScript и установить `ignoreBuildErrors: false`
- 📝 **Причина**: Сейчас ошибки TypeScript игнорируются при сборке, что может привести к багам в production

### 1.2 ESLint строгость
- ⚠️ **TODO**: Установить `ignoreDuringBuilds: false` в next.config.mjs
- ⚠️ **TODO**: Исправить все предупреждения ESLint (сейчас `--max-warnings 0`)
- 📝 **Причина**: Игнорирование ошибок линтера снижает качество кода

### 1.3 Зависимости
- ⚠️ **TODO**: Заменить все `"latest"` в package.json на конкретные версии
- 📝 **Причина**: `"latest"` может привести к неожиданным breaking changes
- 📋 **Пример**: 
  \`\`\`json
  "@radix-ui/react-accordion": "^1.1.2" // вместо "latest"
  \`\`\`

## Приоритет 2: Оптимизация бандла

### 2.1 Bundle Analyzer
- ⚠️ **TODO**: Добавить `@next/bundle-analyzer` для анализа размера бандла
- 📋 **Установка**:
  \`\`\`bash
  pnpm add -D @next/bundle-analyzer
  \`\`\`
- 📋 **Конфигурация** (next.config.mjs):
  \`\`\`js
  import bundleAnalyzer from '@next/bundle-analyzer';
  
  const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  });
  
  export default withBundleAnalyzer(nextConfig);
  \`\`\`
- 📋 **Использование**: `ANALYZE=true pnpm build`

### 2.2 Dynamic Imports
- ⚠️ **TODO**: Проверить крупные компоненты и добавить динамические импорты
- 📋 **Пример**:
  \`\`\`tsx
  const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
    loading: () => <Spinner />,
    ssr: false // если не нужен SSR
  });
  \`\`\`
- 🎯 **Кандидаты**: Модальные окна, графики (recharts), тяжелые UI компоненты

### 2.3 Оптимизация изображений
- ✅ **Выполнено**: Настроены форматы AVIF и WebP
- ⚠️ **TODO**: Проверить все изображения на использование Next.js Image компонента
- ⚠️ **TODO**: Добавить `placeholder="blur"` для изображений
- 📋 **Команда для поиска**: `grep -r "<img" app/`

### 2.4 Tree Shaking
- ⚠️ **TODO**: Проверить импорты библиотек на tree-shaking
- 📋 **Плохо**: `import * as Icons from 'lucide-react'`
- 📋 **Хорошо**: `import { Home, User } from 'lucide-react'`

## Приоритет 3: Производительность

### 3.1 Кэширование
- ✅ **Выполнено**: Добавлен `minimumCacheTTL: 60` для изображений
- ⚠️ **TODO**: Настроить кэширование для API routes
- 📋 **Пример** (app/api/route.ts):
  \`\`\`ts
  export const revalidate = 3600; // 1 час
  \`\`\`

### 3.2 Prefetching
- ⚠️ **TODO**: Добавить prefetch для критических маршрутов
- 📋 **Пример**:
  \`\`\`tsx
  <Link href="/solutions" prefetch={true}>
  \`\`\`

### 3.3 Lazy Loading
- ⚠️ **TODO**: Добавить lazy loading для компонентов ниже fold
- 📋 **Библиотека**: `react-intersection-observer` или native `loading="lazy"`

## Приоритет 4: Качество кода

### 4.1 Мёртвый код
- ⚠️ **TODO**: Запустить анализ неиспользуемого кода
- 📋 **Инструменты**:
  - `npx depcheck` - неиспользуемые зависимости
  - `npx unimported` - неиспользуемые файлы
  - ESLint plugin `eslint-plugin-unused-imports` (уже установлен)

### 4.2 Code Splitting
- ⚠️ **TODO**: Разделить крупные страницы на более мелкие компоненты
- 🎯 **Кандидаты**: Страницы с >500 строк кода

### 4.3 Дублирование кода
- ⚠️ **TODO**: Найти и устранить дублирование
- 📋 **Инструмент**: `npx jscpd app/`

## Приоритет 5: Тестирование

### 5.1 E2E тесты
- ⚠️ **TODO**: Создать 8-12 критических e2e сценариев
- 📋 **Сценарии**:
  1. Навигация по главной странице
  2. Переключение языков
  3. Отправка формы контактов
  4. Навигация по решениям (Smart Home, Hotel, Voice)
  5. Проверка мобильной версии
  6. Проверка SEO метатегов
  7. Проверка производительности (Lighthouse)
  8. Проверка доступности (a11y)

### 5.2 Unit тесты
- ⚠️ **TODO**: Покрыть тестами утилиты и хелперы
- 🎯 **Цель**: 70%+ покрытие для lib/

### 5.3 Integration тесты
- ⚠️ **TODO**: Покрыть тестами API routes и Server Actions

## Приоритет 6: CI/CD

### 6.1 Pre-commit hooks
- ✅ **Выполнено**: Настроены Husky + lint-staged
- ⚠️ **TODO**: Добавить typecheck в pre-commit
- 📋 **Конфигурация** (.husky/pre-commit):
  \`\`\`bash
  pnpm typecheck
  pnpm lint-staged
  \`\`\`

### 6.2 GitHub Actions
- ⚠️ **TODO**: Добавить проверку bundle size в CI
- ⚠️ **TODO**: Добавить Lighthouse CI
- 📋 **Пример** (.github/workflows/ci.yml):
  \`\`\`yaml
  - name: Check bundle size
    run: pnpm build && pnpm analyze
  \`\`\`

## Приоритет 7: Безопасность

### 7.1 Аудит зависимостей
- ⚠️ **TODO**: Регулярно запускать `pnpm audit`
- ⚠️ **TODO**: Настроить Dependabot для автоматических обновлений
- 📋 **Команда**: `pnpm audit --fix`

### 7.2 Environment Variables
- ⚠️ **TODO**: Проверить все env переменные на безопасность
- ⚠️ **TODO**: Убедиться что секреты не попадают в клиентский код
- 📋 **Правило**: Только `NEXT_PUBLIC_*` доступны в браузере

## Приоритет 8: Документация

### 8.1 README
- ⚠️ **TODO**: Обновить README с актуальной информацией
- 📋 **Разделы**:
  - Требования к окружению
  - Установка и запуск
  - Структура проекта
  - Деплой
  - Troubleshooting

### 8.2 Комментарии в коде
- ⚠️ **TODO**: Добавить JSDoc комментарии к публичным функциям
- 📋 **Пример**:
  \`\`\`ts
  /**
   * Generates SEO metadata for a page
   * @param locale - Current locale (ru, en, es, etc.)
   * @param page - Page identifier
   * @returns Metadata object for Next.js
   */
  export function generateMetadata(locale: string, page: string) { ... }
  \`\`\`

## Метрики успеха

### Baseline (до оптимизации)
- [ ] Запустить `pnpm build` и записать размер бандла
- [ ] Запустить Lighthouse и записать scores
- [ ] Записать время сборки
- [ ] Записать количество зависимостей

### Target (после оптимизации)
- 🎯 Снижение клиентского JS на 15-30%
- 🎯 Lighthouse Performance: 90+
- 🎯 Lighthouse Accessibility: 95+
- 🎯 Lighthouse Best Practices: 95+
- 🎯 Lighthouse SEO: 100
- 🎯 Время сборки: -10-20%
- 🎯 Количество зависимостей: -10-15%

## Команды для анализа

\`\`\`bash
# Анализ размера бандла
ANALYZE=true pnpm build

# Проверка неиспользуемых зависимостей
npx depcheck

# Проверка неиспользуемых файлов
npx unimported

# Поиск дублирования кода
npx jscpd app/

# Аудит безопасности
pnpm audit

# Проверка типов
pnpm typecheck

# Линтинг
pnpm lint

# Форматирование
pnpm format:check

# Все проверки
pnpm validate
\`\`\`

## Rollback план

Если после оптимизации возникнут проблемы:

1. **Git revert**: `git revert <commit-hash>`
2. **Откат зависимостей**: `git checkout HEAD~1 package.json && pnpm install`
3. **Откат конфигов**: `git checkout HEAD~1 tsconfig.json next.config.mjs`
4. **Проверка**: `pnpm build && pnpm start`

## Контрольный список перед деплоем

- [ ] Все тесты проходят (`pnpm test`)
- [ ] E2E тесты проходят (`pnpm test:e2e`)
- [ ] Нет ошибок TypeScript (`pnpm typecheck`)
- [ ] Нет ошибок ESLint (`pnpm lint`)
- [ ] Код отформатирован (`pnpm format:check`)
- [ ] Bundle size не увеличился
- [ ] Lighthouse scores не упали
- [ ] Проверена работа на мобильных устройствах
- [ ] Проверены все критические user flows
- [ ] Обновлена документация
