/**
 * Утилиты для оптимизации динамических импортов
 * Используйте эти функции для lazy loading тяжелых компонентов
 */

import dynamic from "next/dynamic"
import type { ComponentType } from "react"

/**
 * Создает динамический импорт с loading placeholder
 */
export function createDynamicImport<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options?: {
    loading?: ComponentType
    ssr?: boolean
  },
) {
  return dynamic(importFn, {
    loading: options?.loading || (() => <div className="min-h-[200px] animate-pulse bg-muted/50" />),
    ssr: options?.ssr ?? true,
  })
}

/**
 * Для тяжелых компонентов с charts/graphs
 */
export function createChartImport<T extends ComponentType<any>>(importFn: () => Promise<{ default: T }>) {
  return dynamic(importFn, {
    loading: () => (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    ),
    ssr: false, // Charts обычно не нужны для SSR
  })
}

/**
 * Для модальных окон и dialogs
 */
export function createModalImport<T extends ComponentType<any>>(importFn: () => Promise<{ default: T }>) {
  return dynamic(importFn, {
    ssr: false, // Модальные окна не нужны для SSR
  })
}
