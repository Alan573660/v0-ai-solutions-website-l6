'use client'

import { ArrowRight, Phone, Zap, CheckCircle2, BarChart3, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function RobotDlyaZvonkovPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <section className="py-20 lg:py-32 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary inline-block mb-6">
                Звонки 24/7
              </span>
              <h1 className="text-5xl font-bold leading-tight mb-6">Робот для входящих и исходящих звонков</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Экономия до 70% на ФОТ. Автоматизация всех звонков: квалификация, напоминания, обзвон.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Начать бесплатно <ArrowRight className="ml-2 h-4 w-4" /></Button>
                <Button size="lg" variant="outline">Демо</Button>
              </div>
            </div>
            <div className="hidden lg:block relative h-[400px] rounded-lg overflow-hidden border border-border/50 bg-muted flex items-center justify-center">
              <Phone className="h-16 w-16 text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Возможности</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Входящие звонки', desc: 'Ответ на 100% входящих звонков 24/7' },
              { icon: Zap, title: 'Исходящие звонки', desc: 'Автоматический обзвон и напоминания' },
              { icon: CheckCircle2, title: 'Квалификация', desc: 'Автоматическое определение качества лида' },
              { icon: BarChart3, title: 'Аналитика', desc: 'Полная статистика по всем звонкам' },
              { icon: Clock, title: '24/7 Работа', desc: 'Без выходных и праздников' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="border border-border/50">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border/50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы автоматизировать звонки?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Экономьте на ФОТ, повышайте качество обслуживания и обрабатывайте все звонки
          </p>
          <Button size="lg">Начать демо <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </section>
    </div>
  )
}
