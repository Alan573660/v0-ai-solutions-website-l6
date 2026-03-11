"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import dynamic from "next/dynamic"
import type { Locale } from "@/lib/i18n/config"

const CTAModal = dynamic(() => import("./cta-modal"), {
  ssr: false, // Модальное окно не нужно для SSR
})

type CTAType = "trial" | "demo" | "call" | "consultation"

interface CTAContextType {
  openModal: (type: CTAType, title?: string) => void
  openCTA: () => void
  openConsultation: () => void
  openDemo: () => void
  openTrial: () => void
  openCall: () => void
}

const CTAContext = createContext<CTAContextType | undefined>(undefined)

export function CTAProvider({ children, locale = "ru" }: { children: ReactNode; locale?: Locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState<CTAType>("trial")
  const [modalTitle, setModalTitle] = useState<string | undefined>()

  const openModal = (type: CTAType, title?: string) => {
    setModalType(type)
    setModalTitle(title)
    setIsOpen(true)
  }

  const openCTA = () => openModal("consultation")
  const openConsultation = () => openModal("consultation")
  const openDemo = () => openModal("demo")
  const openTrial = () => openModal("trial")
  const openCall = () => openModal("call")

  return (
    <CTAContext.Provider value={{ openModal, openCTA, openConsultation, openDemo, openTrial, openCall }}>
      {children}
      {isOpen && <CTAModal isOpen={isOpen} onClose={() => setIsOpen(false)} type={modalType} title={modalTitle} locale={locale} />}
    </CTAContext.Provider>
  )
}

export function useCTA() {
  const context = useContext(CTAContext)
  if (!context) {
    throw new Error("useCTA must be used within CTAProvider")
  }
  return context
}

export default CTAProvider
