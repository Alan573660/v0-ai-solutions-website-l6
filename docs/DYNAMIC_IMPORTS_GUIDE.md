# Руководство по динамическим импортам

## Когда использовать dynamic imports

### ✅ Используйте для:

1. **Below-the-fold контент**
   - Секции которые не видны при первой загрузке
   - Testimonials, FAQ, нижние CTA блоки

2. **Модальные окна и dialogs**
   - Показываются только при взаимодействии пользователя
   - Не нужны для initial render

3. **Тяжелые библиотеки**
   - Charts (recharts, chart.js)
   - Rich text editors
   - Video players
   - Map components

4. **Условный контент**
   - Admin панели
   - Платные features
   - A/B тест варианты

### ❌ НЕ используйте для:

1. **Above-the-fold контент**
   - Hero секции
   - Навигация
   - Критичный контент

2. **Маленькие компоненты**
   - Buttons, inputs, cards
   - UI primitives
   - Иконки

3. **Часто используемые компоненты**
   - Layout компоненты
   - Shared utilities

## Примеры использования

### Базовый dynamic import

\`\`\`tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: true, // default
})
\`\`\`

### Модальное окно

\`\`\`tsx
import { createModalImport } from '@/lib/utils/dynamic-imports'

const Modal = createModalImport(() => import('./Modal'))
\`\`\`

### Chart компонент

\`\`\`tsx
import { createChartImport } from '@/lib/utils/dynamic-imports'

const SalesChart = createChartImport(() => import('./SalesChart'))
\`\`\`

### Named export

\`\`\`tsx
const Component = dynamic(
  () => import('./module').then(mod => ({ default: mod.NamedExport }))
)
\`\`\`

## Измерение эффекта

Используйте `ANALYZE=true pnpm build` для визуализации изменений в bundle size.

## Метрики успеха

- Initial JS bundle: -15-30%
- First Contentful Paint: -200-500ms
- Time to Interactive: -300-800ms
- Lighthouse Performance: +5-10 points
