"use client"

import { X, Check, TrendingDown, AlertCircle } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"

interface CostComparisonSectionProps {
  locale: Locale
}

export function CostComparisonSection({ locale }: CostComparisonSectionProps) {
  const { openModal } = useCTA()

  const managerCosts = [
    { item: "Оклад (фиксированная часть)", cost: "60,000", note: "Платите даже без звонков" },
    { item: "Процент с продаж", cost: "15-25%", note: "От каждой сделки" },
    { item: "Налоги и взносы", cost: "18,000", note: "30% от зарплаты" },
    { item: "Больничные и отпуска", cost: "8,000", note: "28 дней + больничные" },
    { item: "Офис (аренда, коммуналка)", cost: "12,000", note: "На одно рабочее место" },
    { item: "Оборудование и ПО", cost: "3,000", note: "Компьютер, телефон, CRM" },
    { item: "Чай, кофе, снеки", cost: "2,000", note: "Кухня и расходники" },
    { item: "Обучение и адаптация", cost: "15,000", note: "Первые 2-3 месяца" },
    { item: "Подбор и найм", cost: "25,000", note: "Рекрутинг и онбординг" },
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

  const totalManagerCost = 500000
  const totalAICost = 50000
  const savings = 90

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-[#F7F7FA]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#1E1E26]">Реальное сравнение затрат</h2>
          <p className="text-lg sm:text-xl text-[#8E8EA0] leading-relaxed">
            Детальный расчёт всех расходов на менеджера vs AI-ассистент. Учтены все скрытые затраты и риски.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {/* Manager Costs */}
          <div className="rounded-2xl border-2 border-red-200 bg-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1E1E26]">Отдел из 5 менеджеров</h3>
                <p className="text-sm text-[#8E8EA0]">Все затраты на содержание</p>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-3 mb-6">
              {managerCosts.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start p-3 rounded-lg bg-red-50/50 border border-red-100"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1E1E26]">{item.item}</p>
                    <p className="text-xs text-[#8E8EA0] mt-0.5">{item.note}</p>
                  </div>
                  <p className="text-sm font-bold text-red-600 ml-4">₽{item.cost}</p>
                </div>
              ))}
            </div>

            {/* Risks */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-[#1E1E26]">Дополнительные риски:</h4>
              </div>
              <ul className="space-y-2">
                {managerRisks.map((risk, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#8E8EA0]">
                    <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total */}
            <div className="pt-6 border-t-2 border-red-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-[#1E1E26]">Итого в месяц:</span>
                <span className="text-3xl font-bold text-red-600">₽{totalManagerCost.toLocaleString()}</span>
              </div>
              <p className="text-xs text-[#8E8EA0] mt-2">+ переменные расходы и риски</p>
            </div>
          </div>

          {/* AI Costs */}
          <div className="rounded-2xl border-2 border-green-200 bg-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1E1E26]">AI-ассистент M2</h3>
                <p className="text-sm text-[#8E8EA0]">Фиксированная стоимость</p>
              </div>
            </div>

            {/* Simple Pricing */}
            <div className="mb-6 p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
              <p className="text-sm text-[#8E8EA0] mb-2">Всё включено:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-[#1E1E26]">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Неограниченное количество обращений</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#1E1E26]">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Все каналы связи (звонки, чаты, email)</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#1E1E26]">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Интеграция с CRM и системами</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#1E1E26]">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Аналитика и отчётность</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#1E1E26]">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Техподдержка и обновления</span>
                </li>
              </ul>
            </div>

            {/* Advantages */}
            <div className="mb-6">
              <h4 className="font-semibold text-[#1E1E26] mb-3">Преимущества AI:</h4>
              <ul className="space-y-2">
                {aiAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#8E8EA0]">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total */}
            <div className="pt-6 border-t-2 border-green-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-[#1E1E26]">Итого в месяц:</span>
                <span className="text-3xl font-bold text-green-600">₽{totalAICost.toLocaleString()}</span>
              </div>
              <p className="text-xs text-[#8E8EA0] mt-2">Фиксированная стоимость, без скрытых платежей</p>
            </div>
          </div>
        </div>

        {/* Savings Highlight */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#22D3EE] p-8 text-white text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingDown className="h-8 w-8" />
              <h3 className="text-3xl font-bold">Экономия {savings}%</h3>
            </div>
            <p className="text-xl mb-6 opacity-90">
              Вы экономите ₽{(totalManagerCost - totalAICost).toLocaleString()} в месяц
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <p className="text-3xl font-bold mb-1">10×</p>
                <p className="text-sm opacity-90">больше обработанных обращений</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <p className="text-3xl font-bold mb-1">24/7</p>
                <p className="text-sm opacity-90">работа без выходных</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <p className="text-3xl font-bold mb-1">0%</p>
                <p className="text-sm opacity-90">ошибок в расчётах</p>
              </div>
            </div>
            <button
              onClick={() => openModal("calculator")}
              className="px-8 py-3 bg-white text-[#7C3AED] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Рассчитать для вашего бизнеса
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
