'use client'

import { ArrowRight, Target, Zap, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ObrabotkZakazovPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <section className="py-20 lg:py-32 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary inline-block mb-6">
                Автоматизация заказов
              </span>
              <h1 className="text-5xl font-bold leading-tight mb-6">Полный цикл обработки заказов</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Приём, проверка, генерация счетов и интеграция с логистикой - всё автоматизировано.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Начать <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            </div>
            <div className="hidden lg:block relative h-[400px] rounded-lg overflow-hidden border border-border/50 bg-muted flex items-center justify-center">
              <Target className="h-16 w-16 text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Процесс обработки</h2>
          <div className="space-y-4">
            {['Приём заказа', 'Проверка данных', 'Генерация счета', 'Уведомление логистики', 'Отслеживание доставки'].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border border-border/50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">{idx + 1}</div>
                <span className="font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border/50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Автоматизируйте заказы</h2>
          <Button size="lg">Получить консультацию <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </section>
    </div>
  )
}
