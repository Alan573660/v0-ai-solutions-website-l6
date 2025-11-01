"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, FileText, Phone, CheckCircle2, Shield, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useCTA } from "@/components/modals/cta-provider"
import { useTranslations, type Locale } from "@/lib/i18n/translations"

export function CTASection({ locale }: { locale: Locale }) {
  const { openModal } = useCTA()
  const { t } = useTranslations(locale)

  const actions = [
    {
      icon: Calculator,
      title: "Рассчитать стоимость",
      description: "Получите персональное коммерческое предложение с учётом специфики вашего бизнеса",
      benefit: "Прозрачное ценообразование",
      href: `/${locale}/platform/pricing-calculator`,
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-600/10 to-cyan-600/10",
    },
    {
      icon: FileText,
      title: "Изучить кейсы",
      description: "Реальные результаты внедрения AI-ассистентов в компаниях вашей отрасли",
      benefit: "Проверенные решения",
      href: `/${locale}/cases`,
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/10 to-pink-600/10",
    },
    {
      icon: Phone,
      title: "Получить консультацию",
      description: "Обсудите ваш проект с экспертом и получите рекомендации по внедрению",
      benefit: "Экспертная поддержка",
      action: () => openModal("call"),
      color: "from-emerald-600 to-green-600",
      bgColor: "from-emerald-600/10 to-green-600/10",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 text-blue-300 text-sm font-semibold backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              <span>Начните трансформацию бизнеса</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Автоматизируйте продажи уже сегодня
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 text-pretty max-w-3xl mx-auto leading-relaxed">
              Присоединяйтесь к 500+ компаниям, которые увеличили эффективность на 40%
              <br className="hidden sm:block" />и сократили операционные расходы с AI-ассистентом M2
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {actions.map((action, index) => {
              const Icon = action.icon
              const content = (
                <div
                  className={`group h-full p-8 rounded-3xl bg-gradient-to-br ${action.bgColor} border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 cursor-pointer overflow-hidden`}
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-all duration-500`}
                  />

                  <div className="relative flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${action.color}`}>
                      <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-white group-hover:text-blue-300 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-slate-300 mb-4 leading-relaxed">{action.description}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold">
                        <TrendingUp className="h-3 w-3" />
                        {action.benefit}
                      </div>
                    </div>
                  </div>
                </div>
              )

              if (action.href) {
                return (
                  <Link key={index} href={action.href}>
                    {content}
                  </Link>
                )
              }

              return (
                <div key={index} onClick={action.action}>
                  {content}
                </div>
              )
            })}
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-800/50 via-slate-800/30 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Запишитесь на персональную демонстрацию</h3>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Наши эксперты покажут, как AI-ассистент решит задачи именно вашего бизнеса
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="text-base h-14 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white group shadow-xl"
                    onClick={() => openModal("demo")}
                  >
                    <span>Записаться на демо</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base h-14 px-8 bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800"
                    onClick={() => openModal("call")}
                  >
                    Получить консультацию
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-center">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-green-500/10 mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              </div>
              <div className="font-bold text-lg text-white mb-1">Персональная настройка</div>
              <div className="text-sm text-slate-400">Адаптация под ваш бизнес</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-center">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-blue-500/10 mb-4">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <div className="font-bold text-lg text-white mb-1">Быстрый запуск</div>
              <div className="text-sm text-slate-400">Интеграция за 3-5 дней</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-center">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-purple-500/10 mb-4">
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <div className="font-bold text-lg text-white mb-1">Поддержка 24/7</div>
              <div className="text-sm text-slate-400">Техническая помощь всегда</div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-400">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-lg"
                  >
                    ✓
                  </div>
                ))}
              </div>
              <span className="font-medium text-slate-300">Более 500 компаний доверяют M2 AI Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
