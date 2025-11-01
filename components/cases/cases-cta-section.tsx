"use client"

import { Button } from "@/components/ui/button"
import { useCTA } from "@/components/modals/cta-provider"

export function CasesCTASection() {
  const { openConsultation, openDemo } = useCTA()

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
            Готовы создать свою историю успеха?
          </h2>
          <p className="text-xl lg:text-2xl text-purple-100 text-pretty">
            Присоединяйтесь к сотням компаний, которые уже трансформировали свой бизнес с помощью AI-решений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 font-semibold"
              onClick={openConsultation}
            >
              Начать проект
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-900 font-semibold bg-transparent"
              onClick={openDemo}
            >
              Попробовать демо
            </Button>
          </div>
          <div className="pt-8">
            <p className="text-purple-200 text-sm">
              Бесплатная консультация • Персональная демонстрация • Расчёт ROI для вашего проекта
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
