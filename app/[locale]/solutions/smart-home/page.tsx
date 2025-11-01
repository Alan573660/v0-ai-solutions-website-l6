"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Smartphone,
  Lightbulb,
  Lock,
  Camera,
  Thermometer,
  Speaker,
  Wifi,
  ArrowRight,
  Check,
  MapPin,
  Building2,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Star,
  Home,
  Fingerprint,
  UserCheck,
  Leaf,
  Building,
  Users,
  Video,
  Eye,
  Wrench,
  ClipboardCheck,
  Settings,
  BarChart3,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"
import { useCTA } from "@/components/modals/cta-provider"
import { useState } from "react"

interface SmartHomePageProps {
  params: { locale: Locale }
}

export default function SmartHomePage({ params }: SmartHomePageProps) {
  const { locale } = params
  const { openModal } = useCTA()
  const [activeTab, setActiveTab] = useState<"business" | "housing" | "developers">("business")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const aiPlatforms = [
    {
      name: "OpenAI",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-J88jPMtpAF8jNmVWrSYSqD0WcBKOS2.png",
      description: "Интеграция с GPT-4 для голосового управления и автоматизации",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      name: "Grok",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grok-feb-2025-logo.svg-bkaFRprDKsrNGPEqjdRJGYpMxJB92D.png",
      description: "Продвинутый AI-ассистент для умного дома от xAI",
      color: "from-gray-500/20 to-slate-500/20",
    },
    {
      name: "Google Gemini",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gemini_aurora_thumbnail_4g_e74822ff0ca4259beb718-gQIsnKKX0rfFF2x2B3Jq1S8SXRa1EA.png",
      description: "Мультимодальный AI для комплексного управления системами",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      name: "DeepSeek",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DeepSeek-avX9rpbCLPtcJa2228WfsXa8y6PE4I.png",
      description: "Глубокое обучение для предиктивной автоматизации",
      color: "from-indigo-500/20 to-blue-500/20",
    },
  ]

  const features = [
    {
      icon: Smartphone,
      title: "Мобильное приложение",
      description: "Управляйте домом из любой точки мира",
      details: [
        "iOS и Android приложения",
        "Удаленный доступ 24/7",
        "Push-уведомления о событиях",
        "Интуитивный интерфейс",
      ],
    },
    {
      icon: Lightbulb,
      title: "Умное освещение",
      description: "Автоматическое управление светом",
      details: ["Сценарии освещения", "Датчики движения", "Регулировка яркости", "Цветовые температуры"],
    },
    {
      icon: Thermometer,
      title: "Климат-контроль",
      description: "Поддержание комфортной температуры",
      details: ["Умные термостаты", "Зональное управление", "Экономия энергии до 30%", "Адаптивные алгоритмы"],
    },
    {
      icon: Lock,
      title: "Безопасность",
      description: "Комплексная защита вашего дома",
      details: ["Видеонаблюдение 24/7", "Умные замки", "Датчики проникновения", "Тревожная кнопка"],
    },
    {
      icon: Speaker,
      title: "Голосовое управление",
      description: "Управление голосом на русском языке",
      details: ["Интеграция с Алисой", "Собственный AI-ассистент", "Распознавание команд", "Мультиязычность"],
    },
    {
      icon: Wifi,
      title: "Единая экосистема",
      description: "Все устройства в одной сети",
      details: ["Протокол Z-Wave/Zigbee", "Wi-Fi и Bluetooth", "Облачная синхронизация", "Локальное управление"],
    },
  ]

  const innovativeFeatures = [
    {
      icon: UserCheck,
      title: "AI-Консьерж",
      description: "Персональный помощник для управления домом",
      benefits: [
        "Анализ привычек жильцов",
        "Предиктивная автоматизация",
        "Голосовое управление",
        "Интеграция со всеми системами",
      ],
      color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      image: "/ai-concierge-touchscreen-in-modern-building-entran.jpg",
    },
    {
      icon: Fingerprint,
      title: "Биометрические замки",
      description: "Безопасный доступ с помощью отпечатка пальца",
      benefits: ["Высокая степень защиты", "Быстрый доступ", "Отсутствие ключей", "Журнал событий"],
      color: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      image: "/smart-biometric-door-lock-with-fingerprint-scanner.jpg",
    },
    {
      icon: Camera,
      title: "Распознавание лиц",
      description: "Система видеонаблюдения с функцией распознавания",
      benefits: [
        "Идентификация гостей",
        "Контроль доступа",
        "Уведомления в реальном времени",
        "Интеграция с системой безопасности",
      ],
      color: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      image: "/ai-security-camera-with-facial-recognition-technol.jpg",
    },
    {
      icon: Video,
      title: "Видеодомофон",
      description: "Общение с посетителями из любой точки мира",
      benefits: ["HD-камера", "Двусторонний аудиосвязь", "Запись видео", "Интеграция с мобильным приложением"],
      color: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30",
      image: "/smart-video-intercom-with-touchscreen-display.jpg",
    },
    {
      icon: Eye,
      title: "360° Видеонаблюдение",
      description: "Полный обзор территории вашего дома",
      benefits: ["Панорамный обзор", "Ночное видение", "Датчик движения", "Удаленный просмотр"],
      color: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/30",
      image: "/360-degree-security-camera-surveillance-system.jpg",
    },
    {
      icon: Leaf,
      title: "Эко-дом",
      description: "Энергоэффективные решения для вашего дома",
      benefits: ["Управление энергопотреблением", "Солнечные панели", "Системы рекуперации", "Снижение расходов"],
      color: "bg-gradient-to-br from-lime-500/10 to-green-500/10",
      borderColor: "border-lime-500/30",
      image: "/eco-friendly-smart-home-with-solar-panels.jpg",
    },
  ]

  const caseStudies = [
    {
      location: "Барселона",
      project: "Роскошная вилла",
      area: "450 м²",
      features: [
        "Полная автоматизация освещения",
        "Климат-контроль с зональным управлением",
        "Система безопасности с видеонаблюдением",
        "Мультимедиа система",
      ],
      image: "/luxury-villa-barcelona-mediterranean-coast-modern-.jpg",
      testimonial: "Прекрасное решение, дом стал намного комфортнее и безопаснее.",
      client: "Марк В.",
    },
    {
      location: "Морайра",
      project: "Современный апартамент",
      area: "120 м²",
      features: [
        "Управление шторами",
        "Дистанционное управление доступом",
        "Интеграция с умным домом",
        "Энергосбережение",
      ],
      image: "/modern-luxury-apartment-interior-moraira-spain.jpg",
      testimonial: "Очень довольны качеством услуг и результатом.",
      client: "Анна К.",
    },
    {
      location: "Марбелья",
      project: "Элитный бутик-отель",
      area: "2500 м²",
      features: [
        "Централизованное управление",
        "Система управления доступом для персонала",
        "Автоматизация освещения и климата",
        "Интеграция с системой бронирования",
        "Энергоэффективность",
        "Круглосуточный мониторинг",
      ],
      image: "/luxury-boutique-hotel-marbella-spain-modern-interi.jpg",
      testimonial: "Профессиональный подход и высокое качество исполнения.",
      client: "Отель Marbella",
    },
    {
      location: "Москва",
      project: "Жилой комплекс",
      area: "15000 м²",
      features: [
        "Управление освещением в общественных зонах",
        "Система контроля доступа",
        "Видеонаблюдение",
        "Автоматизация инженерных систем",
        "Энергоэффективные решения",
        "Мобильное приложение для жителей",
      ],
      image: "/modern-residential-complex-moscow-russia-smart-bui.jpg",
      testimonial: "Лучшее решение для современного жилого комплекса.",
      client: "Девелопер Москва",
    },
    {
      location: "Алматы",
      project: "Деловой центр",
      area: "8000 м²",
      features: [
        "Интеллектуальное управление зданием",
        "Система контроля доступа",
        "Автоматизация климата и освещения",
        "Энергосбережение",
        "Мониторинг безопасности",
        "Интеграция с офисными системами",
      ],
      image: "/modern-business-hotel-almaty-kazakhstan-lobby.jpg",
      testimonial: "Высокий уровень автоматизации и управления.",
      client: "Бизнес Центр Алматы",
    },
    {
      location: "Санкт-Петербург",
      project: "Жилой комплекс",
      area: "10000 м²",
      features: [
        "Умный дом для каждой квартиры",
        "Централизованное управление",
        "Система безопасности",
        "Автоматизация освещения и климата",
        "Энергоэффективность",
        "Интеграция с городской инфраструктурой",
      ],
      image: "/modern-residential-complex-saint-petersburg-russia.jpg",
      testimonial: "Инновационное решение для комфортной жизни.",
      client: "Девелопер Санкт-Петербург",
    },
    {
      location: "Астана",
      project: "Жилой комплекс",
      area: "12000 м²",
      features: [
        "Интеллектуальное управление зданием",
        "Система контроля доступа",
        "Автоматизация освещения и климата",
        "Энергоэффективность",
        "Мониторинг безопасности",
        "Управление парковкой",
      ],
      image: "/luxury-residential-complex-astana-kazakhstan-moder.jpg",
      testimonial: "Современный подход к строительству и управлению.",
      client: "Девелопер Астана",
    },
    {
      location: "Валенсия",
      project: "Спа-отель",
      area: "3000 м²",
      features: [
        "Управление номером (освещение, климат, шторы)",
        "Система контроля доступа для гостей",
        "Интеграция с системой управления отелем",
        "Энергоэффективность",
        "Управление мультимедиа",
        "Безопасность",
      ],
      image: "/luxury-spa-hotel-valencia-spain-mediterranean-coas.jpg",
      testimonial: "Прекрасное сочетание технологий и комфорта.",
      client: "Спа-отель Валенсия",
    },
    {
      location: "Москва",
      project: "Банк",
      area: "5000 м²",
      features: [
        "Система контроля доступа",
        "Видеонаблюдение",
        "Автоматизация освещения и климата",
        "Энергоэффективность",
        "Мониторинг безопасности",
        "Интеграция с системами управления зданием",
      ],
      image: "/modern-bank-building-interior.jpg",
      testimonial: "Надежное и эффективное решение для бизнес-объекта.",
      client: "Банк Москва",
      inDevelopment: true,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    openModal("consultation")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-4">
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href={`/${locale}`} className="hover:text-foreground transition-colors">
              <span itemProp="name">Главная</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <span>/</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href={`/${locale}/solutions`} className="hover:text-foreground transition-colors">
              <span itemProp="name">Решения</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
          <span>/</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-foreground font-medium">
              Умный дом
            </span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-12 pb-32">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />

        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="w-fit" variant="secondary">
                <Sparkles className="w-3 h-3 mr-1" />
                Умный дом с AI
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Умный дом нового поколения с искусственным интеллектом
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Комплексные решения автоматизации для бизнеса, ЖКХ и застройщиков. Интеграция с ведущими AI-платформами
                (OpenAI GPT-4, xAI Grok, Google Gemini, DeepSeek) для максимального комфорта, безопасности и
                энергоэффективности.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => openModal("consultation")}>
                  Получить консультацию
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:info@m2solutions.ai">
                    <Mail className="mr-2 h-4 w-4" />
                    Написать на почту
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Техподдержка</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-smart-home-interior-with-automation.jpg"
                  alt="Современный интерьер умного дома с автоматизацией освещения, климата и системами безопасности"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:to-purple-950">
        <div className="container mx-auto max-w-7xl">
          <header className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Решения для вашего бизнеса
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Автоматизация зданий, управление инфраструктурой и повышение эффективности с помощью AI-технологий
            </p>
          </header>

          {/* Tab Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
            <button
              onClick={() => setActiveTab("business")}
              className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 ${
                activeTab === "business"
                  ? "bg-gradient-to-br from-blue-600 to-cyan-600 text-white border-blue-600 shadow-2xl scale-105"
                  : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-slate-200 dark:border-slate-800 hover:border-blue-400"
              }`}
            >
              <Building2
                className={`h-8 w-8 mx-auto mb-3 ${activeTab === "business" ? "text-white" : "text-blue-600"}`}
              />
              <h3 className="text-xl font-bold mb-2">Бизнес</h3>
              <p className={`text-sm ${activeTab === "business" ? "text-white/90" : "text-muted-foreground"}`}>
                Оптимизация офисов и коммерческих пространств
              </p>
            </button>

            <button
              onClick={() => setActiveTab("housing")}
              className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 ${
                activeTab === "housing"
                  ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white border-purple-600 shadow-2xl scale-105"
                  : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-slate-200 dark:border-slate-800 hover:border-purple-400"
              }`}
            >
              <Wrench
                className={`h-8 w-8 mx-auto mb-3 ${activeTab === "housing" ? "text-white" : "text-purple-600"}`}
              />
              <h3 className="text-xl font-bold mb-2">ЖКХ</h3>
              <p className={`text-sm ${activeTab === "housing" ? "text-white/90" : "text-muted-foreground"}`}>
                Управление многоквартирными домами
              </p>
            </button>

            <button
              onClick={() => setActiveTab("developers")}
              className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 ${
                activeTab === "developers"
                  ? "bg-gradient-to-br from-green-600 to-emerald-600 text-white border-green-600 shadow-2xl scale-105"
                  : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-slate-200 dark:border-slate-800 hover:border-green-400"
              }`}
            >
              <Building
                className={`h-8 w-8 mx-auto mb-3 ${activeTab === "developers" ? "text-white" : "text-green-600"}`}
              />
              <h3 className="text-xl font-bold mb-2">Застройщики</h3>
              <p className={`text-sm ${activeTab === "developers" ? "text-white/90" : "text-muted-foreground"}`}>
                Интеграция умных систем в новостройки
              </p>
            </button>
          </div>

          {/* Tab Content - Business */}
          {activeTab === "business" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
                  {/* Left: Image */}
                  <div className="relative group h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/modern-residential-building-entrance-with-smart-co.jpg"
                      alt="Современный вход в жилой дом с системой умного управления"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="mb-3 bg-blue-600 text-white text-sm px-4 py-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        Умный офис
                      </Badge>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Интеллектуальное управление бизнес-пространством
                      </h3>
                      <p className="text-lg text-muted-foreground text-pretty">
                        Повысьте эффективность и комфорт вашего офиса с помощью передовых технологий автоматизации.
                      </p>
                    </div>

                    {/* Statistics - VERY PROMINENT */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="relative overflow-hidden border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
                        <CardContent className="p-6 text-center">
                          <div className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            +15-25%
                          </div>
                          <p className="text-sm font-semibold text-muted-foreground">Снижение операционных расходов</p>
                        </CardContent>
                      </Card>

                      <Card className="relative overflow-hidden border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50">
                        <CardContent className="p-6 text-center">
                          <TrendingUp className="h-10 w-10 mx-auto mb-2 text-orange-600" />
                          <p className="text-lg font-bold mb-1">ROI</p>
                          <p className="text-xs text-muted-foreground">Быстрая окупаемость инвестиций</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Key Features Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: UserCheck, key: "aiConcierge" },
                        { icon: Fingerprint, key: "biometrics" },
                        { icon: Camera, key: "surveillance" },
                        { icon: Smartphone, key: "mobileApp" },
                      ].map((feature) => {
                        const Icon = feature.icon
                        return (
                          <div
                            key={feature.key}
                            className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border hover:shadow-md transition-all"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-sm font-semibold">
                              {feature.key === "aiConcierge" && "AI-Консьерж"}
                              {feature.key === "biometrics" && "Биометрический доступ"}
                              {feature.key === "surveillance" && "Видеонаблюдение"}
                              {feature.key === "mobileApp" && "Мобильное управление"}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Services and CTA Row */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Services List - Takes 2 columns */}
                  <div className="lg:col-span-2">
                    <Card className="border-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-xl h-full">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-3">
                          <Sparkles className="h-5 w-5 text-blue-600" />
                          Ключевые услуги
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {[
                            "Автоматизация освещения",
                            "Управление климатом",
                            "Системы безопасности",
                            "Управление доступом",
                            "Энергоменеджмент",
                            "Видеоконференцсвязь",
                            "Интеграция с ERP",
                            "Удаленный мониторинг",
                          ].map((service, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                            >
                              <Check className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{service}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* CTA Card - Takes 1 column */}
                  <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <h4 className="text-xl font-bold mb-3">Остались вопросы?</h4>
                        <p className="text-white/90 text-sm mb-4">
                          Свяжитесь с нами для получения индивидуального решения.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          className="w-full bg-white text-blue-600 hover:bg-white/90 h-11 font-semibold shadow-lg text-sm"
                          onClick={() => {
                            window.location.href = "tel:+34600000000"
                          }}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          +34 600 000 000
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-11 font-semibold text-sm"
                          onClick={() => {
                            window.location.href = "mailto:info@m2solutions.ai"
                          }}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          info@m2solutions.ai
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-11 font-semibold text-sm"
                          onClick={() => {
                            openModal("consultation")
                          }}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Чат с нами
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content - Housing */}
          {activeTab === "housing" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div>
                <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
                  {/* Left: Content */}
                  <div className="space-y-6 order-2 lg:order-1">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Эффективное управление жилыми комплексами
                      </h3>
                      <p className="text-lg text-muted-foreground text-pretty">
                        Обеспечьте комфорт, безопасность и экономию для жильцов и управляющих компаний.
                      </p>
                    </div>

                    {/* Statistics - VERY PROMINENT */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="relative overflow-hidden border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50">
                        <CardContent className="p-6 text-center">
                          <div className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            -30-40%
                          </div>
                          <p className="text-sm font-semibold text-muted-foreground">
                            Снижение затрат на коммунальные услуги
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="relative overflow-hidden border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50">
                        <CardContent className="p-6 text-center">
                          <Settings className="h-10 w-10 mx-auto mb-2 text-purple-600" />
                          <p className="text-lg font-bold mb-1">Автоматизация</p>
                          <p className="text-xs text-muted-foreground">Управление общим имуществом</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Key Features Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: BarChart3, key: "monitoring" },
                        { icon: ClipboardCheck, key: "dispatch" },
                        { icon: Settings, key: "automation" },
                        { icon: TrendingUp, key: "analytics" },
                      ].map((feature) => {
                        const Icon = feature.icon
                        return (
                          <div
                            key={feature.key}
                            className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border hover:shadow-md transition-all"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-sm font-semibold">
                              {feature.key === "monitoring" && "Мониторинг"}
                              {feature.key === "dispatch" && "Диспетчеризация"}
                              {feature.key === "automation" && "Автоматизация"}
                              {feature.key === "analytics" && "Аналитика"}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative group h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                    <Image
                      src="/modern-apartment-building-management-system.jpg"
                      alt="Система управления современным многоквартирным домом"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="mb-3 bg-green-600 text-white text-sm px-4 py-2">
                        <Wrench className="w-4 h-4 mr-2" />
                        Умный ЖКХ
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Services and CTA Row */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Services List - Takes 2 columns */}
                  <div className="lg:col-span-2">
                    <Card className="border-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-xl h-full">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-3">
                          <Sparkles className="h-5 w-5 text-green-600" />
                          Ключевые услуги
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {[
                            "Контроль доступа",
                            "Управление освещением",
                            "Климат-контроль",
                            "Система видеонаблюдения",
                            "Оповещение об авариях",
                            "Учет ресурсов",
                            "Мониторинг парковки",
                            "Управление парковкой",
                          ].map((service, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors"
                            >
                              <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{service}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* CTA Card - Takes 1 column */}
                  <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-2xl">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <h4 className="text-xl font-bold mb-3">Остались вопросы?</h4>
                        <p className="text-white/90 text-sm mb-4">
                          Свяжитесь с нами для получения индивидуального решения.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          className="w-full bg-white text-green-600 hover:bg-white/90 h-11 font-semibold shadow-lg text-sm"
                          onClick={() => {
                            window.location.href = "tel:+34600000000"
                          }}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          +34 600 000 000
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-11 font-semibold text-sm"
                          onClick={() => {
                            window.location.href = "mailto:info@m2solutions.ai"
                          }}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          info@m2solutions.ai
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-11 font-semibold text-sm"
                          onClick={() => {
                            openModal("consultation")
                          }}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Чат с нами
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content - Developers */}
          {activeTab === "developers" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              {/* Content for Developers Tab */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
                  {/* Left: Image */}
                  <div className="relative group h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/modern-residential-building-entrance-with-smart-co.jpg"
                      alt="Современный вход в жилой дом с системой умного управления"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="mb-3 bg-green-600 text-white text-sm px-4 py-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        Интеграция для застройщиков
                      </Badge>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Интеграция умных решений в новые проекты
                      </h3>
                      <p className="text-lg text-muted-foreground text-pretty">
                        Предложите вашим клиентам современные технологии умного дома, повышая привлекательность ваших
                        объектов.
                      </p>
                    </div>

                    {/* Statistics - VERY PROMINENT */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="relative overflow-hidden border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
                        <CardContent className="p-6 text-center">
                          <div className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            +15-25%
                          </div>
                          <p className="text-sm font-semibold text-muted-foreground">
                            Повышение стоимости недвижимости
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="relative overflow-hidden border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50">
                        <CardContent className="p-6 text-center">
                          <TrendingUp className="h-10 w-10 mx-auto mb-2 text-orange-600" />
                          <p className="text-lg font-bold mb-1">Конкурентное преимущество</p>
                          <p className="text-xs text-muted-foreground">
                            Выделитесь на рынке с инновационными решениями
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Key Features Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: UserCheck, key: "aiConcierge" },
                        { icon: Fingerprint, key: "biometrics" },
                        { icon: Camera, key: "surveillance" },
                        { icon: Smartphone, key: "mobileApp" },
                      ].map((feature) => {
                        const Icon = feature.icon
                        return (
                          <div
                            key={feature.key}
                            className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border hover:shadow-md transition-all"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-sm font-semibold">
                              {feature.key === "aiConcierge" && "AI-Консьерж"}
                              {feature.key === "biometrics" && "Биометрический доступ"}
                              {feature.key === "surveillance" && "Видеонаблюдение"}
                              {feature.key === "mobileApp" && "Мобильное управление"}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Services and CTA Row */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Services List - Takes 2 columns */}
                  <div className="lg:col-span-2">
                    <Card className="border-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-xl h-full">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-3">
                          <Sparkles className="h-5 w-5 text-green-600" />
                          Ключевые услуги
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {[
                            "Разработка индивидуальных сценариев",
                            "Интеграция с системами здания",
                            "Подключение к Wi-Fi сетям",
                            "Настройка облачных сервисов",
                            "Обучение жильцов",
                            "Гарантийное обслуживание",
                            "Техническая поддержка",
                            "Пост-проектная поддержка",
                          ].map((service, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors"
                            >
                              <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{service}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* CTA Card - Takes 1 column */}
                  <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-2xl">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <h4 className="text-xl font-bold mb-3">Остались вопросы?</h4>
                        <p className="text-white/90 text-sm mb-4">
                          Свяжитесь с нами для получения индивидуального решения.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          className="w-full bg-white text-green-600 hover:bg-white/90 h-11 font-semibold shadow-lg text-sm"
                          onClick={() => {
                            window.location.href = "tel:+34600000000"
                          }}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          +34 600 000 000
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-11 font-semibold text-sm"
                          onClick={() => {
                            window.location.href = "mailto:info@m2solutions.ai"
                          }}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          info@m2solutions.ai
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-11 font-semibold text-sm"
                          onClick={() => {
                            openModal("consultation")
                          }}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Чат с нами
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/automated-curtains-smart-home-interior.jpg"
            alt="Автоматизированные шторы в интерьере умного дома"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Home className="w-3 h-3 mr-2" />
              Основные возможности
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Функционал умного дома</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Полный набор функций для создания идеального пространства: от автоматизации освещения и климата до систем
              безопасности с AI-распознаванием лиц.
            </p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30"
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">{feature.description}</CardDescription>
                    <div className="space-y-2 pt-4 border-t">
                      {feature.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-gray-900">
        <div className="container mx-auto max-w-7xl">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-purple-500 text-purple-600">
              <Sparkles className="w-3 h-3 mr-2" />
              Инновационные технологии
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Передовые решения с искусственным интеллектом</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Внедряем последние достижения в области AI: биометрический доступ, распознавание лиц, AI-консьерж,
              предиктивная автоматизация
            </p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovativeFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className={`${feature.color} border-2 ${feature.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={`${feature.title} - ${feature.description}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 shadow-lg -mt-7 relative z-10">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">{feature.description}</CardDescription>
                    <div className="space-y-2 pt-4 border-t">
                      {feature.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Platforms Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950">
        <div className="container mx-auto max-w-7xl">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-indigo-500 text-indigo-600">
              <Zap className="w-3 h-3 mr-2" />
              AI-платформы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Интеграция с ведущими AI-платформами для умного дома
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Используем OpenAI GPT-4, xAI Grok, Google Gemini и DeepSeek для создания интеллектуальных систем
              управления домом с предиктивной автоматизацией и голосовым управлением.
            </p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiPlatforms.map((platform) => (
              <Card
                key={platform.name}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-gradient-to-br ${platform.color}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-full h-20 flex items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md">
                      <Image
                        src={platform.logo || "/placeholder.svg"}
                        alt={`${platform.name} логотип - интеграция AI для умного дома`}
                        width={160}
                        height={80}
                        className="object-contain max-h-16 w-auto group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3">{platform.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{platform.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Что дает AI вашему дому?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Предиктивная автоматизация</h4>
                  <p className="text-sm text-muted-foreground">
                    Система предугадывает ваши потребности и автоматизирует рутинные задачи.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Оптимизация энергопотребления</h4>
                  <p className="text-sm text-muted-foreground">
                    AI анализирует использование энергии и предлагает способы экономии.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Проактивная безопасность</h4>
                  <p className="text-sm text-muted-foreground">
                    Система распознает потенциальные угрозы и предотвращает инциденты.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Added better hover effects */}
      <section className="py-20 px-4 bg-muted/30" data-section="projects">
        <div className="container mx-auto max-w-7xl">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <MapPin className="w-3 h-3 mr-2" />
              Кейсы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши проекты умного дома в России, Казахстане и Испании
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Более 500 успешно реализованных проектов автоматизации зданий в Барселоне, Москве, Алматы,
              Санкт-Петербурге, Астане, Валенсии, Марбелье и Морайре.
            </p>
          </header>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                itemListElement: caseStudies.map((study, index) => ({
                  "@type": "Review",
                  "@id": `https://m2solutions.ai/solutions/smart-home#review-${index}`,
                  itemReviewed: {
                    "@type": "Service",
                    name: `Умный дом - ${study.project}`,
                    description: study.features.join(", "),
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: study.client,
                  },
                  reviewBody: study.testimonial,
                  publisher: {
                    "@type": "Organization",
                    name: "AI Solutions M2",
                  },
                })),
              }),
            }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.location + study.project}
                className="overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group border-2 hover:border-primary/50 cursor-pointer rounded-lg bg-card"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={`Проект умного дома ${study.project} в ${study.location} - ${study.area}`}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white dark:bg-slate-900 px-3 py-2 rounded-lg shadow-lg backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-sm text-foreground">{study.location}</span>
                      </div>
                    </div>
                  </div>
                  {study.inDevelopment && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-500 text-white shadow-lg">В разработке</Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors" itemProp="name">
                    {study.project}
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    <MapPin className="h-4 w-4 inline mr-2" />
                    <span itemProp="location">{study.location}</span> • {study.area}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {study.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t" itemProp="review" itemScope itemType="https://schema.org/Review">
                    <p className="text-sm italic text-muted-foreground mb-2" itemProp="reviewBody">
                      "{study.testimonial}"
                    </p>
                    <p className="text-sm font-semibold">
                      — <span itemProp="author">{study.client}</span>
                    </p>
                    <meta itemProp="reviewRating" content="5" />
                  </div>
                </CardContent>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Star className="w-3 h-3 mr-2" />
                Почему мы?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Преимущества работы с нами</h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Экспертиза</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Многолетний опыт в области автоматизации и AI.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Инновации</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Применение передовых AI-технологий для решения ваших задач.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Индивидуальный подход</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Разработка решений, адаптированных под ваши уникальные потребности.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Комплексная поддержка</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Сопровождение проекта на всех этапах, от проектирования до внедрения.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-smart-home-interior-living-room-technology.jpg"
                alt="Современный интерьер гостиной умного дома с элементами технологий автоматизации"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Свяжитесь с нами</h2>
            <p className="text-xl opacity-90 drop-shadow">
              Оставьте заявку, и мы подберем лучшее решение для вашего дома.
            </p>
          </div>
          <Card className="bg-white text-foreground shadow-2xl border-0">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+34 600 000 000"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Ваше сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о ваших потребностях..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                >
                  Отправить заявку
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="/privacy" className="underline hover:text-foreground">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 shadow-xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы сделать ваш дом умнее?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами сегодня, чтобы начать проектирование вашего идеального умного дома.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => openModal("consultation")}
                >
                  Заказать консультацию
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 bg-transparent"
                  onClick={() => {
                    const projectsSection = document.querySelector('[data-section="projects"]')
                    projectsSection?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Наши проекты
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Часто задаваемые вопросы об умном доме</h2>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Что такое умный дом с AI?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Умный дом с AI — это система автоматизации здания, которая использует искусственный интеллект (OpenAI GPT-4, xAI Grok, Google Gemini, DeepSeek) для управления освещением, климатом, безопасностью, мультимедиа и другими системами. AI обеспечивает предиктивную автоматизацию, голосовое управление, распознавание лиц и оптимизацию энергопотребления.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Какие AI-платформы вы используете для умного дома?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Мы интегрируем решения на базе OpenAI GPT-4 для голосового управления и обработки естественного языка, xAI Grok для продвинутой автоматизации, Google Gemini для мультимодального AI и визуального распознавания, DeepSeek для глубокого обучения и предиктивной оптимизации энергопотребления.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Сколько стоит умный дом под ключ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Стоимость умного дома зависит от площади объекта и функционала. Базовая автоматизация квартиры 100м² начинается от 5,000 EUR. Комплексная автоматизация бизнес-центра или жилого комплекса может составлять от 50,000 до 500,000 EUR. Мы предоставляем бесплатный расчет стоимости после консультации.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Можно ли интегрировать существующие устройства в умный дом?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Да, мы предлагаем гибкие решения по интеграции как новых, так и существующих устройств. Поддерживаем стандартные протоколы: Zigbee, Z-Wave, Wi-Fi, Bluetooth. Можем интегрировать системы освещения, климат-контроля, безопасности, мультимедиа от различных производителей.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Сколько времени занимает установка умного дома?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Сроки установки зависят от сложности проекта. Базовые системы для квартиры устанавливаются за 3-7 дней. Комплексная автоматизация бизнес-центра или жилого комплекса может занять от 2 недель до 3 месяцев. Мы всегда предоставляем детальный план проекта с точными сроками.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Какую гарантию вы предоставляете на умный дом?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Мы предоставляем гарантию на все установленное оборудование (от 1 до 5 лет в зависимости от производителя) и выполненные работы (2 года). Также предлагаем круглосуточную техническую поддержку 24/7 и сервисное обслуживание. Детали гарантии обсуждаются индивидуально для каждого проекта.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Какая экономия от умного дома?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Умный дом с AI обеспечивает снижение расходов на электроэнергию на 30-40%, сокращение операционных расходов на 15-25% для бизнеса и ЖКХ. ROI (окупаемость инвестиций) составляет 12-18 месяцев. AI-оптимизация энергопотребления, автоматизация освещения и климата, предиктивное обслуживание значительно снижают затраты.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "В каких городах вы работаете?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Мы реализуем проекты умного дома в России (Москва, Санкт-Петербург), Казахстане (Алматы, Астана) и Испании (Барселона, Мадрид, Валенсия, Марбелья, Морайра, Альтеа). Имеем офисы в Мадриде, Москве и Астане. Готовы рассмотреть проекты в других городах и странах.",
                    },
                  },
                ],
              }),
            }}
          />

          {/* FAQ Accordion UI */}
          <div className="space-y-4">{/* FAQ items will be added here */}</div>
        </div>
      </section>
    </div>
  )
}
