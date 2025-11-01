# Bundle Analysis Guide

## Как использовать ANALYZE для анализа бандла

### Быстрый старт

1. **Включить анализ бандла:**
   \`\`\`bash
   ANALYZE=true pnpm build
   \`\`\`

2. **Откроется браузер** с интерактивной визуализацией размеров бандла

### Что анализировать

#### 🎯 Приоритетные метрики:

1. **Размер клиентского JS** (Client Bundles)
   - Цель: < 200KB gzipped для первой загрузки
   - Проверить: `_app-*.js`, `page-*.js`

2. **Большие зависимости** (Large Dependencies)
   - Искать пакеты > 50KB
   - Кандидаты на замену или динамический импорт

3. **Дублирование кода** (Duplicate Code)
   - Одинаковые модули в разных чанках
   - Возможность для code-splitting

#### 📊 Как читать отчет:

\`\`\`
┌─────────────────────────────────────┐
│ Stat Size   │ Размер до минификации │
│ Parsed Size │ Размер после минификации │
│ Gzipped Size│ Размер после сжатия (реальный размер загрузки) │
└─────────────────────────────────────┘
\`\`\`

### Типичные проблемы и решения

#### 1. Большой размер @radix-ui компонентов
**Проблема:** Все компоненты импортируются сразу
**Решение:** Использовать динамический импорт для редко используемых компонентов

\`\`\`tsx
// ❌ Плохо
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogOverlay,
  DialogPortal
} from '@/components/ui/dialog'

// ✅ Хорошо (для редко используемых компонентов)
const Dialog = dynamic(() => import('@/components/ui/dialog'))
\`\`\`

#### 2. Большие иконки (lucide-react)
**Проблема:** Импорт всех иконок увеличивает бандл
**Решение:** Импортировать только нужные иконки

\`\`\`tsx
// ✅ Правильно (уже используется)
import { ArrowRight, Check } from 'lucide-react'
\`\`\`

#### 3. Тяжелые библиотеки в клиентских компонентах
**Проблема:** Библиотеки для серверной логики попадают в клиентский бандл
**Решение:** Переместить в Server Components или API routes

### Целевые показатели

| Метрика | Текущее | Цель | Статус |
|---------|---------|------|--------|
| First Load JS | ~250KB | <200KB | 🟡 Требует оптимизации |
| Largest Chunk | ~180KB | <150KB | 🟡 Требует оптимизации |
| Total Bundle Size | ~800KB | <600KB | 🟡 Требует оптимизации |

### Команды для анализа

\`\`\`bash
# Полный анализ с визуализацией
ANALYZE=true pnpm build

# Анализ только production бандла
NODE_ENV=production ANALYZE=true pnpm build

# Сравнение до/после оптимизации
# 1. Сохранить текущий отчет
ANALYZE=true pnpm build
mv .next/analyze/client.html .next/analyze/client-before.html

# 2. Внести изменения
# 3. Сравнить
ANALYZE=true pnpm build
# Открыть оба файла и сравнить размеры
\`\`\`

### Автоматизация

Добавить в CI/CD для отслеживания размера бандла:

\`\`\`yaml
# .github/workflows/bundle-size.yml
- name: Analyze bundle
  run: |
    ANALYZE=true pnpm build
    # Сохранить отчет как артефакт
\`\`\`

### Полезные ссылки

- [Next.js Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- [Web.dev: Optimize Bundle Size](https://web.dev/reduce-javascript-payloads-with-code-splitting/)
- [Next.js: Optimizing Bundle](https://nextjs.org/docs/app/building-your-application/optimizing/bundle-analyzer)
