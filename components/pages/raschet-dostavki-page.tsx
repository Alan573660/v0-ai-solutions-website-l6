'use client'

import { ArrowRight, Zap, TrendingUp, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function RaschetDostavkiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <section className="py-20 lg:py-32 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary inline-block mb-6">
                Оптимизация логистики
              </span>
              <h1 className="text-5xl font-bold leading-tight mb-6">Автоматический расчет доставки</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                AI рассчитывает оптимальную доставку с учётом веса, размера, расстояния и типа транспорта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Начать <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            </div>
            <div className="hidden lg:block relative h-[400px] rounded-lg overflow-hidden border border-border/50 bg-muted flex items-center justify-center">
              <Zap className="h-16 w-16 text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Как работает</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Входные данные', 'Анализ параметров', 'Оптимизация', 'Результат'].map((step, idx) => (
              <Card key={idx} className="border border-border/50">
                <CardHeader className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-4">{idx + 1}</div>
                  <CardTitle className="text-base">{step}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border/50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Оптимизируйте логистику</h2>
          <Button size="lg">Получить результаты <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </section>
    </div>
  )
}
