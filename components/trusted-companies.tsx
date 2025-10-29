"use client"

import { Users, BarChart3, Shield, Zap, Building2, DollarSign } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

interface TrustedCompaniesProps {
  locale: Locale
}

export function TrustedCompanies({ locale }: TrustedCompaniesProps) {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#0A0A15] text-[#E9E9F0]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Нам доверяют компании из разных отраслей
          </h2>
          <p className="text-lg sm:text-xl text-[#E9E9F0] leading-relaxed">
            Более 500 компаний выбрали M2 AI Solutions для автоматизации продаж и клиентского сервиса. Реальные метрики.
            Измеримый ROI. Поддержка 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-xl border border-[#22263B] bg-[#0A0A15]">
            <Users className="h-8 w-8 text-[#7C3AED] mb-4" />
            <div className="text-4xl font-bold text-[#7C3AED] mb-2">500+</div>
            <div className="text-sm text-[#E9E9F0]">Активных клиентов</div>
          </div>

          <div className="p-6 rounded-xl border border-[#22263B] bg-[#0A0A15]">
            <BarChart3 className="h-8 w-8 text-[#22D3EE] mb-4" />
            <div className="text-4xl font-bold text-[#22D3EE] mb-2">1.2M+</div>
            <div className="text-sm text-[#E9E9F0]">Обработанных обращений/месяц</div>
          </div>

          <div className="p-6 rounded-xl border border-[#22263B] bg-[#0A0A15]">
            <Shield className="h-8 w-8 text-[#7C3AED] mb-4" />
            <div className="text-4xl font-bold text-[#7C3AED] mb-2">99.9%</div>
            <div className="text-sm text-[#E9E9F0]">Uptime SLA</div>
          </div>

          <div className="p-6 rounded-xl border border-[#22263B] bg-[#0A0A15]">
            <Zap className="h-8 w-8 text-[#22D3EE] mb-4" />
            <div className="text-4xl font-bold text-[#22D3EE] mb-2">&lt; 2 с</div>
            <div className="text-sm text-[#E9E9F0]">Среднее время ответа</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-[#22263B] bg-[#0F0F1A]">
            <Building2 className="h-10 w-10 text-[#7C3AED] mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Корпоративный сектор</h3>
            <p className="text-[#E9E9F0] mb-4 leading-relaxed">
              Автоматизация заявок, интеграция с CRM/ERP и документооборот.
            </p>
            <div className="inline-block px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#7C3AED] text-sm font-semibold">
              +40% эффективности
            </div>
          </div>

          <div className="p-6 rounded-xl border border-[#22263B] bg-[#0F0F1A]">
            <DollarSign className="h-10 w-10 text-[#22D3EE] mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Финансовый сектор</h3>
            <p className="text-[#E9E9F0] mb-4 leading-relaxed">
              Консультации, расчёты и заявки с банковским уровнем защиты.
            </p>
            <div className="inline-block px-3 py-1 rounded-full bg-[#22D3EE]/20 border border-[#22D3EE]/30 text-[#22D3EE] text-sm font-semibold">
              Банковская защита
            </div>
          </div>

          <div className="p-6 rounded-xl border border-[#22263B] bg-[#0F0F1A]">
            <BarChart3 className="h-10 w-10 text-[#7C3AED] mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">E-commerce</h3>
            <p className="text-[#E9E9F0] mb-4 leading-relaxed">Заказы, консультации, возвраты — быстрее и удобнее.</p>
            <div className="inline-block px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#7C3AED] text-sm font-semibold">
              +3× конверсия
            </div>
          </div>
        </div>

        <div className="text-center p-6 rounded-xl border border-[#22263B] bg-[#0F0F1A]">
          <p className="text-lg text-[#E9E9F0]">
            500+ компаний доверяют M2 AI Solutions · Средний рост эффективности +40%
          </p>
        </div>
      </div>
    </section>
  )
}
