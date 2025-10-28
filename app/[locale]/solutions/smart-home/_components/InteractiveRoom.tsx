"use client"

import { useState, useEffect, useCallback } from "react"
import { Lightbulb, Wind, Thermometer, Camera, Speaker, Smartphone, Sun, Eye, Hand } from "lucide-react"

export function InteractiveRoom() {
  const [activeRoom, setActiveRoom] = useState<string | null>(null)
  const [lightsOn, setLightsOn] = useState(false)
  const [curtainsOpen, setCurtainsOpen] = useState(false)
  const [climateActive, setClimateActive] = useState(false)
  const [securityActive, setSecurityActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const checkMobile = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768)
      }, 150)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleRoomElementTouch = useCallback(
    (element: string) => {
      setActiveRoom(element)
      switch (element) {
        case "lights":
          setLightsOn((prev) => !prev)
          break
        case "curtains":
          setCurtainsOpen((prev) => !prev)
          break
        case "climate":
          setClimateActive((prev) => !prev)
          break
        case "security":
          setSecurityActive((prev) => !prev)
          break
      }

      if (isMobile) {
        setTimeout(() => {
          setActiveRoom(null)
        }, 3000)
      }
    },
    [isMobile],
  )

  return (
    <div className="relative order-1 lg:order-2">
      <div className="relative aspect-square max-w-2xl mx-auto">
        {/* Room Container */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl overflow-hidden border-2 sm:border-4 border-primary/20">
          {/* Room Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />

          {/* Floor */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-700/50 to-transparent" />

          {/* Ceiling Light - Interactive */}
          <div
            className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 cursor-pointer group touch-manipulation"
            onMouseEnter={() => !isMobile && handleRoomElementTouch("lights")}
            onMouseLeave={() => !isMobile && setActiveRoom(null)}
            onClick={() => isMobile && handleRoomElementTouch("lights")}
            onTouchStart={() => isMobile && handleRoomElementTouch("lights")}
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full transition-all duration-500 ${
                lightsOn
                  ? "bg-yellow-400 shadow-[0_0_60px_30px_rgba(250,204,21,0.6)] sm:shadow-[0_0_80px_40px_rgba(250,204,21,0.6)]"
                  : "bg-slate-600 shadow-lg"
              }`}
            >
              <Lightbulb
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ${
                  lightsOn ? "text-slate-900" : "text-slate-400"
                }`}
              />
            </div>
            {activeRoom === "lights" && (
              <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-xl border-2 border-primary/50 animate-in fade-in slide-in-from-top-2 z-50">
                <p className="text-xs sm:text-sm font-semibold">Умное освещение</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Экономия до 60%</p>
              </div>
            )}
          </div>

          {/* Window with Curtains - Interactive */}
          <div
            className="absolute top-1/4 right-4 sm:right-8 cursor-pointer group touch-manipulation"
            onMouseEnter={() => !isMobile && handleRoomElementTouch("curtains")}
            onMouseLeave={() => !isMobile && setActiveRoom(null)}
            onClick={() => isMobile && handleRoomElementTouch("curtains")}
            onTouchStart={() => isMobile && handleRoomElementTouch("curtains")}
          >
            <div className="relative w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 bg-gradient-to-b from-sky-300 to-sky-500 rounded-lg border-2 sm:border-4 border-slate-700 overflow-hidden">
              <Sun className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
              <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 transition-all duration-700 ${
                  curtainsOpen ? "translate-x-full" : "translate-x-0"
                }`}
              >
                <Wind className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
              </div>
            </div>
            {activeRoom === "curtains" && (
              <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-xl border-2 border-primary/50 animate-in fade-in slide-in-from-top-2 z-50">
                <p className="text-xs sm:text-sm font-semibold">Автоматические шторы</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">По расписанию</p>
              </div>
            )}
          </div>

          {/* Climate Control - Interactive */}
          <div
            className="absolute bottom-1/4 left-4 sm:left-8 cursor-pointer group touch-manipulation"
            onMouseEnter={() => !isMobile && handleRoomElementTouch("climate")}
            onMouseLeave={() => !isMobile && setActiveRoom(null)}
            onClick={() => isMobile && handleRoomElementTouch("climate")}
            onTouchStart={() => isMobile && handleRoomElementTouch("climate")}
          >
            <div
              className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl transition-all duration-500 flex items-center justify-center ${
                climateActive
                  ? "bg-gradient-to-br from-orange-500 to-red-500 shadow-[0_0_30px_15px_rgba(249,115,22,0.4)] sm:shadow-[0_0_40px_20px_rgba(249,115,22,0.4)]"
                  : "bg-slate-700"
              }`}
            >
              <Thermometer
                className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 transition-all ${climateActive ? "text-white" : "text-slate-400"}`}
              />
            </div>
            {activeRoom === "climate" && (
              <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-xl border-2 border-primary/50 animate-in fade-in slide-in-from-top-2 z-50">
                <p className="text-xs sm:text-sm font-semibold">Климат-контроль</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">22°C • Экономия 40%</p>
              </div>
            )}
          </div>

          {/* Security Camera - Interactive */}
          <div
            className="absolute top-6 sm:top-8 right-6 sm:right-8 cursor-pointer group touch-manipulation"
            onMouseEnter={() => !isMobile && handleRoomElementTouch("security")}
            onMouseLeave={() => !isMobile && setActiveRoom(null)}
            onClick={() => isMobile && handleRoomElementTouch("security")}
            onTouchStart={() => isMobile && handleRoomElementTouch("security")}
          >
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full transition-all duration-500 flex items-center justify-center ${
                securityActive
                  ? "bg-gradient-to-br from-green-500 to-emerald-500 shadow-[0_0_30px_15px_rgba(34,197,94,0.4)] sm:shadow-[0_0_40px_20px_rgba(34,197,94,0.4)]"
                  : "bg-slate-700"
              }`}
            >
              <Camera
                className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-all ${
                  securityActive ? "text-white animate-pulse" : "text-slate-400"
                }`}
              />
              {securityActive && (
                <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
              )}
            </div>
            {activeRoom === "security" && (
              <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-xl border-2 border-primary/50 animate-in fade-in slide-in-from-top-2 z-50">
                <p className="text-xs sm:text-sm font-semibold">AI Видеонаблюдение</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Распознавание лиц</p>
              </div>
            )}
          </div>

          {/* Voice Assistant */}
          <div className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12">
            <div className="w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20 bg-gradient-to-b from-slate-600 to-slate-700 rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center">
              <Speaker className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary animate-pulse" />
            </div>
          </div>

          {/* Mobile Phone */}
          <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12">
            <div className="w-10 h-16 sm:w-11 sm:h-18 md:w-12 md:h-20 bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg sm:rounded-xl border-2 border-slate-600 shadow-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-blue-400" />
            </div>
          </div>

          {/* Ambient Light Effect */}
          {lightsOn && <div className="absolute inset-0 bg-yellow-400/20 animate-pulse pointer-events-none" />}
        </div>

        {/* Instruction Text */}
        <div className="absolute -bottom-10 sm:-bottom-12 left-0 right-0 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-2">
            {isMobile ? (
              <>
                <Hand className="w-3 h-3 sm:w-4 sm:h-4" />
                Нажмите на элементы комнаты
              </>
            ) : (
              <>
                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                Наведите курсор на элементы комнаты
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
