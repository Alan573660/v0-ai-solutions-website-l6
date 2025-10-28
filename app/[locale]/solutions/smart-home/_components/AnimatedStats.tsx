"use client"

import { useEffect, useState, useRef } from "react"

export function AnimatedStats() {
  const [energySavings, setEnergySavings] = useState(0)
  const [timeSaved, setTimeSaved] = useState(0)
  const [moneySaved, setMoneySaved] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const energyInterval = setInterval(() => {
      setEnergySavings((prev) => (prev < 45 ? prev + 1 : 45))
    }, 30)
    const timeInterval = setInterval(() => {
      setTimeSaved((prev) => (prev < 12 ? prev + 1 : 12))
    }, 50)
    const moneyInterval = setInterval(() => {
      setMoneySaved((prev) => (prev < 2400 ? prev + 50 : 2400))
    }, 20)

    return () => {
      clearInterval(energyInterval)
      clearInterval(timeInterval)
      clearInterval(moneyInterval)
    }
  }, [isVisible])

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-10 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border-2 border-primary/20"
    >
      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">{energySavings}%</div>
        <div className="text-xs sm:text-sm text-muted-foreground">Экономия энергии</div>
      </div>
      <div className="text-center border-x border-primary/20">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500 mb-1">{timeSaved}ч</div>
        <div className="text-xs sm:text-sm text-muted-foreground">Времени в неделю</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-1">€{moneySaved}</div>
        <div className="text-xs sm:text-sm text-muted-foreground">Экономия в год</div>
      </div>
    </div>
  )
}
