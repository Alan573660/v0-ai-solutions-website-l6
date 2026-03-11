'use client'

import { ArrowRight, Zap, Target, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AIDlyaBiznesaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <section className="py-20 lg:py-32 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary inline-block mb-6">
                Полный стек
              </span>
              <h1 className="text-5xl font-bold leading-tight mb-6">AI для комплексной автоматизации бизнеса</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Единое решение для продаж, звонков, заявок, счетов и логистики. Полная автоматизация бизнеса.
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
          <h2 className="text-4xl font-bold text-center mb-16">Интегрированные решения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Автоматизация продаж',
              'Управление звонками',
              'Обработка заявок',
              'Обработка заказов',
              'Выставление счетов',
              'Расчет доставки',
            ].map((item, idx) => (
              <Card key={idx} className="border border-border/50">
                <CardContent className="pt-6 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border/50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Автоматизируйте весь бизнес</h2>
          <p className="text-lg text-muted-foreground mb-8">Единая платформа для всех процессов</p>
          <Button size="lg">Получить демо <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </section>
    </div>
  )
}
