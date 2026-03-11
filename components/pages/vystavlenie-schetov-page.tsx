'use client'

import { ArrowRight, FileText, Zap, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function VystavlenieSchetovPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <section className="py-20 lg:py-32 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary inline-block mb-6">
                Генерация счетов
              </span>
              <h1 className="text-5xl font-bold leading-tight mb-6">Автоматическое выставление счетов</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Генерирует счета из заявок и звонков, отправляет по email/CRM и контролирует оплату.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Начать <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            </div>
            <div className="hidden lg:block relative h-[400px] rounded-lg overflow-hidden border border-border/50 bg-muted flex items-center justify-center">
              <FileText className="h-16 w-16 text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Возможности</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Автогенерация', desc: 'Автоматическое создание счетов' },
              { title: 'Отправка', desc: 'Email, CRM, API интеграции' },
              { title: 'Контроль', desc: 'Отслеживание оплаты и напоминания' },
            ].map((item, idx) => (
              <Card key={idx} className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border/50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Упростите выставление счетов</h2>
          <Button size="lg">Демо <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </section>
    </div>
  )
}
