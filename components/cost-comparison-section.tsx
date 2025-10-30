"use client"

import { X, Check, TrendingDown, AlertCircle, Users, Bot, Clock, Target, Zap, Shield } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface CostComparisonSectionProps {
  locale: Locale
}

export function CostComparisonSection({ locale }: CostComparisonSectionProps) {
  const { openModal } = useCTA()

  const managerCosts = [
    { item: "Базовая зарплата + бонусы", cost: "750,000", note: "~150,000 ₽/чел × 5 менеджеров" },
    { item: "Налоги и соцвыплаты", cost: "270,000", note: "~30% от зарплаты" },
    { item: "Обучение, CRM/телефония", cost: "100,000", note: "Инструменты продаж и обучение" },
    { item: "Оборудование/аренда/инфраструктура", cost: "80,000", note: "Рабочие места, техника, офис" },
    { item: "Ошибки, простои, отсутствие аналитики", cost: "50,000", note: "Отпуска, болезни, потеря клиентов" },
  ]

  const managerRisks = [
    "Может опоздать, проспать или не выйти на работу",
    "Ошибки в расчётах и человеческий фактор",
    "Настроение влияет на качество работы",
    "Ограничен рабочим временем (8 часов в день)",
    "Не может обработать несколько звонков одновременно",
    "В сезон нужно платить оклад даже без звонков",
    "Текучка кадров — постоянный поиск замены",
  ]

  const aiAdvantages = [
    "Работает 24/7 без выходных и праздников",
    "Обрабатывает неограниченное количество обращений одновременно",
    "Никогда не ошибается в расчётах и данных",
    "Всегда в хорошем настроении и вежлив",
    "Не требует офиса, обучения и адаптации",
    "Фиксированная стоимость независимо от нагрузки",
    "Мгновенное масштабирование без найма",
    "Не уходит в отпуск и не болеет",
  ]

  const totalManagerCost = 1400000
  const totalAICost = 50000
  const savings = 96

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0A1628] via-[#0F1F3A] to-[#1A2B4A] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Target className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Реальная экономика бизнеса</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">
            Отдел из 5 менеджеров vs AI-ассистент M2
          </h2>
          <p className="text-lg sm:text-xl text-blue-200/80 leading-relaxed text-pretty">
            Сравните реальные затраты: традиционный отдел продаж против современного AI-решения
          </p>
        </div>

        {/* Visual Comparison with Images */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {/* Traditional Team */}
          <div className="group relative">
            {/* Image Card */}
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border-2 border-red-500/30">
              <img
                src="/busy-office-with-stressed-managers-at-desks-workin.jpg"
                alt="Традиционный отдел менеджеров"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-red-500/20 backdrop-blur-sm flex items-center justify-center border border-red-500/30">
                    <Users className="h-5 w-5 text-red-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Традиционный отдел</h3>
                </div>
                <p className="text-sm text-red-200/80">5 менеджеров, офис, инфраструктура</p>
              </div>
            </div>

            {/* Cost Details Card */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-red-500/20 p-6 shadow-2xl">
              {/* Cost Breakdown */}
              <div className="space-y-3 mb-6">
                {managerCosts.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start p-3 rounded-lg bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{item.item}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.note}</p>
                    </div>
                    <p className="text-sm font-bold text-red-400 ml-4 whitespace-nowrap">~{item.cost} ₽</p>
                  </div>
                ))}
              </div>

              {/* Risks */}
              <div className="mb-6 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <h4 className="font-semibold text-white">Скрытые риски:</h4>
                </div>
                <ul className="space-y-2">
                  {managerRisks.slice(0, 5).map((risk, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Total */}
              <div className="pt-6 border-t border-red-500/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-white">Итого в месяц:</span>
                  <span className="text-3xl font-bold text-red-400">~{totalManagerCost.toLocaleString()} ₽</span>
                </div>
                <p className="text-xs text-slate-400">+ непредвиденные расходы и риски</p>
              </div>
            </div>
          </div>

          {/* AI Solution */}
          <div className="group relative">
            {/* Image Card */}
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border-2 border-emerald-500/30">
              <img src="/modern-ai-interface-with-holographic-displays-and-.jpg" alt="AI-ассистент M2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center border border-emerald-500/30">
                    <Bot className="h-5 w-5 text-emerald-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AI-ассистент M2</h3>
                </div>
                <p className="text-sm text-emerald-200/80">Автоматизация без границ</p>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-emerald-500/20 p-6 shadow-2xl">
              {/* Key Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <Clock className="h-5 w-5 text-emerald-400 mb-2" />
                  <p className="text-xs text-slate-400">Режим работы</p>
                  <p className="text-sm font-bold text-white">24/7/365</p>
                </div>
                <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <Zap className="h-5 w-5 text-emerald-400 mb-2" />
                  <p className="text-xs text-slate-400">Обработка</p>
                  <p className="text-sm font-bold text-white">Безлимит</p>
                </div>
                <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <Shield className="h-5 w-5 text-emerald-400 mb-2" />
                  <p className="text-xs text-slate-400">Точность</p>
                  <p className="text-sm font-bold text-white">100%</p>
                </div>
                <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <Target className="h-5 w-5 text-emerald-400 mb-2" />
                  <p className="text-xs text-slate-400">Масштаб</p>
                  <p className="text-sm font-bold text-white">Мгновенно</p>
                </div>
              </div>

              {/* Advantages */}
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <h4 className="font-semibold text-white mb-3">Что входит:</h4>
                <ul className="space-y-2">
                  {aiAdvantages.slice(0, 6).map((advantage, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Total */}
              <div className="pt-6 border-t border-emerald-500/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-white">Итого в месяц:</span>
                  <span className="text-3xl font-bold text-emerald-400">~{totalAICost.toLocaleString()} ₽</span>
                </div>
                <p className="text-xs text-slate-400">Фиксированная цена, всё включено</p>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Savings Banner */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 p-1 shadow-2xl">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12">
              {/* Main Savings */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <TrendingDown className="h-10 w-10 text-emerald-400" />
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Экономия {savings}%</h3>
                </div>
                <p className="text-xl sm:text-2xl text-blue-200 mb-2">
                  Вы экономите{" "}
                  <span className="font-bold text-emerald-400">
                    ~{(totalManagerCost - totalAICost).toLocaleString()} ₽
                  </span>{" "}
                  каждый месяц
                </p>
                <p className="text-slate-400">
                  Это ~{(((totalManagerCost - totalAICost) * 12) / 1000000).toFixed(1)} млн ₽ в год
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 backdrop-blur-sm">
                  <p className="text-4xl font-bold mb-2 text-blue-400">10×</p>
                  <p className="text-sm text-slate-300">больше обработанных запросов</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 backdrop-blur-sm">
                  <p className="text-4xl font-bold mb-2 text-emerald-400">24/7</p>
                  <p className="text-sm text-slate-300">работа без выходных</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 backdrop-blur-sm">
                  <p className="text-4xl font-bold mb-2 text-purple-400">0%</p>
                  <p className="text-sm text-slate-300">человеческих ошибок</p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button
                  onClick={() => openModal("calculator")}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Рассчитать выгоду для вашего бизнеса
                    <TrendingDown className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  </span>
                </button>
                <p className="text-sm text-slate-400 mt-4">Бесплатный расчёт за 2 минуты</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-400" />
              <span>Безопасность данных</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>Гарантия результата</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-purple-400" />
              <span>Быстрый запуск</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
