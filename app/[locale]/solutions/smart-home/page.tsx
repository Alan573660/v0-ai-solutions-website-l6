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
  Droplets,
  Wind,
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
  Briefcase,
  Building,
  Users,
  Video,
  Eye,
  Wrench,
  ClipboardCheck,
  Settings,
  BarChart3,
} from "lucide-react"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { useCTA } from "@/components/modals/cta-provider"
import { useState } from "react"

interface SmartHomePageProps {
  params: { locale: Locale }
}

export default function SmartHomePage({ params }: SmartHomePageProps) {
  const { locale } = params
  const { t } = useTranslations(locale)
  const { openModal } = useCTA()
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
      description: "GPT-4 для интеллектуального управления домом и обработки естественного языка",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      name: "Grok",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grok-feb-2025-logo.svg-bkaFRprDKsrNGPEqjdRJGYpMxJB92D.png",
      description: "xAI для продвинутой автоматизации и реального времени анализа данных",
      color: "from-gray-500/20 to-slate-500/20",
    },
    {
      name: "Google Gemini",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gemini_aurora_thumbnail_4g_e74822ff0ca4259beb718-gQIsnKKX0rfFF2x2B3Jq1S8SXRa1EA.png",
      description: "Мультимодальный AI для визуального распознавания и контекстного понимания",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      name: "DeepSeek",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DeepSeek-avX9rpbCLPtcJa2228WfsXa8y6PE4I.png",
      description: "Глубокое обучение для предиктивной оптимизации энергопотребления",
      color: "from-indigo-500/20 to-blue-500/20",
    },
  ]

  const businessServices = [
    {
      icon: Building,
      title: "Решения для застройщиков и строителей",
      description: "Комплексная автоматизация новостроек, жилых комплексов и коммерческой недвижимости",
      features: [
        "Умные подъезды с AI-консьержем 24/7",
        "Биометрическое распознавание лиц жильцов",
        "Интерактивные видеодомофоны с AI",
        "Автоматические ворота и шлагбаумы",
        "Система управления общими зонами",
        "Видеонаблюдение с детекцией объектов",
        "Мобильное приложение для жильцов",
        "Интеграция с инженерными системами",
        "Умное освещение подъездов и территории",
        "Автоматизация лифтов и паркинга",
        "Система контроля доступа для персонала",
        "Интеграция с УК для оплаты услуг",
      ],
      additionalOffers: [
        {
          title: "Увеличение стоимости недвижимости",
          description: "Квартиры с умными технологиями продаются на 15-25% дороже",
          icon: TrendingUp,
        },
        {
          title: "Конкурентное преимущество",
          description: "Выделитесь среди конкурентов инновационными решениями",
          icon: Star,
        },
        {
          title: "Быстрая окупаемость",
          description: "Инвестиции окупаются за счет премиальной цены квартир",
          icon: Zap,
        },
        {
          title: "Готовые решения",
          description: "Типовые проекты для быстрого внедрения в новостройки",
          icon: Building2,
        },
      ],
      color: "from-blue-500 to-cyan-500",
      image: "/modern-residential-building-entrance-with-smart-co.jpg",
      contactOptions: [
        { icon: "phone", text: "Позвоните нам", action: "tel:+34600000000" },
        { icon: "email", text: "Напишите на почту", action: "mailto:info@aisolutions.com" },
        { icon: "chat", text: "Онлайн-консультация", action: "consultation" },
      ],
    },
    {
      icon: Wrench,
      title: "Решения для ЖКХ и управляющих компаний",
      description: "Автоматизация управления многоквартирными домами и снижение эксплуатационных расходов",
      features: [
        "Централизованное управление всеми домами",
        "Автоматический учет ресурсов (вода, газ, электричество)",
        "Система диспетчеризации и мониторинга",
        "Умное управление освещением подъездов",
        "Контроль доступа и видеонаблюдение",
        "Автоматизация лифтового хозяйства",
        "Система приема заявок от жильцов",
        "Интеграция с платежными системами",
        "Мониторинг инженерных систем 24/7",
        "Предиктивное обслуживание оборудования",
        "Отчетность и аналитика в реальном времени",
        "Мобильное приложение для сотрудников",
      ],
      additionalOffers: [
        {
          title: "Снижение расходов на 30-40%",
          description: "Экономия на электроэнергии, воде и обслуживании оборудования",
          icon: TrendingUp,
        },
        {
          title: "Автоматизация процессов",
          description: "Сокращение ручного труда и повышение эффективности",
          icon: Settings,
        },
        {
          title: "Прозрачная отчетность",
          description: "Полный контроль расходов и доходов в реальном времени",
          icon: BarChart3,
        },
        {
          title: "Повышение качества услуг",
          description: "Быстрое реагирование на заявки и проблемы жильцов",
          icon: ClipboardCheck,
        },
      ],
      color: "from-green-500 to-emerald-500",
      image: "/modern-apartment-building-management-system.jpg",
      contactOptions: [
        { icon: "phone", text: "Позвоните нам", action: "tel:+34600000000" },
        { icon: "email", text: "Напишите на почту", action: "mailto:info@aisolutions.com" },
        { icon: "chat", text: "Онлайн-консультация", action: "consultation" },
      ],
    },
  ]

  const innovativeFeatures = [
    {
      icon: UserCheck,
      title: "AI-консьерж в подъезде",
      description:
        "Виртуальный консьерж с распознаванием лиц, голосовым управлением и автоматической регистрацией гостей. Работает 24/7 без выходных.",
      benefits: ["Распознавание жильцов", "Регистрация гостей", "Видеозвонки", "Управление доступом"],
      color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      image: "/ai-concierge-touchscreen-in-modern-building-entran.jpg",
    },
    {
      icon: Fingerprint,
      title: "Биометрические умные замки",
      description:
        "Замки с отпечатком пальца, распознаванием лица, PIN-кодом и мобильным ключом. Временный доступ для гостей и сервисных служб.",
      benefits: ["5 способов открытия", "История доступа", "Временные коды", "Удаленное управление"],
      color: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      image: "/smart-biometric-door-lock-with-fingerprint-scanner.jpg",
    },
    {
      icon: Camera,
      title: "Распознавание лиц и объектов",
      description:
        "AI-камеры распознают членов семьи, домашних животных, посылки и незнакомцев. Умные уведомления только о важных событиях.",
      benefits: ["Распознавание лиц", "Детекция объектов", "Умные уведомления", "Облачное хранение"],
      color: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      image: "/ai-security-camera-with-facial-recognition-technol.jpg",
    },
    {
      icon: Video,
      title: "Интерактивный видеодомофон",
      description:
        "Видеодомофон с AI-ассистентом, который может общаться с гостями, принимать посылки и открывать дверь по вашей команде из любой точки мира.",
      benefits: ["AI-ассистент", "Видеозвонки", "Удаленное открытие", "Запись визитов"],
      color: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30",
      image: "/smart-video-intercom-with-touchscreen-display.jpg",
    },
    {
      icon: Eye,
      title: "Видеонаблюдение 360°",
      description:
        "Система видеонаблюдения с панорамными камерами, ночным видением и детекцией движения. Запись в облако и на локальный сервер.",
      benefits: ["Панорамные камеры", "Ночное видение", "Детекция движения", "Облачное хранение"],
      color: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/30",
      image: "/360-degree-security-camera-surveillance-system.jpg",
    },
    {
      icon: Leaf,
      title: "Экологичный умный дом",
      description:
        "Интеграция с солнечными панелями, системой рекуперации воды и умным управлением энергией для минимального углеродного следа.",
      benefits: ["Солнечные панели", "Рекуперация воды", "Энергомониторинг", "CO₂ отчеты"],
      color: "bg-gradient-to-br from-lime-500/10 to-green-500/10",
      borderColor: "border-lime-500/30",
      image: "/eco-friendly-smart-home-with-solar-panels.jpg",
    },
  ]

  const features = [
    {
      icon: Smartphone,
      title: "Мобильное приложение",
      description:
        "Полный контроль всех систем дома с вашего смартфона из любой точки мира. iOS и Android приложения с интуитивным интерфейсом.",
      details: ["Удаленный доступ 24/7", "Push-уведомления", "Мультиязычный интерфейс", "Офлайн режим"],
    },
    {
      icon: Speaker,
      title: "Голосовое управление AI",
      description: "Управляйте домом естественными голосовыми командами через интеграцию с передовыми AI-ассистентами.",
      details: ["Поддержка 50+ языков", "Контекстное понимание", "Персонализация команд", "Голосовая биометрия"],
    },
    {
      icon: Lightbulb,
      title: "Интеллектуальное освещение",
      description:
        "AI автоматически настраивает освещение под время суток, погоду и ваше настроение. Экономия до 60% электроэнергии.",
      details: ["Циркадные ритмы", "Сцены освещения", "Датчики присутствия", "RGB + теплый/холодный"],
    },
    {
      icon: Thermometer,
      title: "Умный климат-контроль",
      description:
        "Индивидуальная температура в каждой комнате с предиктивным обучением ваших предпочтений. Экономия до 40% на отоплении.",
      details: ["Зональный контроль", "Погодный прогноз", "Геолокация", "Энергомониторинг"],
    },
    {
      icon: Droplets,
      title: "Автоматический полив",
      description:
        "Интеллектуальная система полива анализирует погоду, влажность почвы и потребности растений для оптимального ухода.",
      details: ["Датчики влажности", "Метеостанция", "График полива", "Экономия воды до 50%"],
    },
    {
      icon: Wind,
      title: "Автоматизация штор",
      description: "Шторы и жалюзи открываются/закрываются по расписанию, уровню освещенности или голосовой команде.",
      details: ["Солнечные датчики", "Тихие моторы", "Групповое управление", "Сценарии"],
    },
    {
      icon: Lock,
      title: "Система безопасности",
      description: "Умные замки с биометрией, контроль доступа, история входов. Интеграция с охранной сигнализацией.",
      details: ["Отпечаток пальца", "PIN-коды", "Мобильный ключ", "Временный доступ"],
    },
    {
      icon: Camera,
      title: "AI видеонаблюдение",
      description:
        "Камеры с распознаванием лиц, детекцией движения и умными уведомлениями. Запись в облако и локально.",
      details: ["Распознавание лиц", "Детекция объектов", "Ночное видение", "Облачное хранение"],
    },
    {
      icon: Wifi,
      title: "Единая экосистема",
      description:
        "Все устройства работают в единой защищенной сети с централизованным управлением и автоматизацией сценариев.",
      details: ["Zigbee, Z-Wave, WiFi", "Локальное управление", "Резервное копирование", "API интеграции"],
    },
  ]

  const caseStudies = [
    {
      location: "Барселона, Испания",
      project: "Вилла на побережье Средиземного моря",
      area: "450 м²",
      features: [
        "Полная автоматизация всех систем",
        "Голосовое управление на 4 языках",
        "Интеграция с бассейном и SPA",
        "Система безопасности премиум-класса",
      ],
      image: "/luxury-villa-barcelona-mediterranean-coast-modern-.jpg",
      testimonial: "Дом стал действительно умным. Все работает безупречно!",
      client: "Семья Родригес",
    },
    {
      location: "Мурайра, Испания",
      project: "Апартаменты премиум-класса с видом на море",
      area: "180 м²",
      features: [
        "Климат-контроль с зональным управлением",
        "Умное освещение 120+ точек",
        "Система безопасности с AI-камерами",
        "Интеграция с домофоном",
      ],
      image: "/modern-luxury-apartment-interior-moraira-spain.jpg",
      testimonial: "Управление с телефона - это невероятно удобно!",
      client: "Мария Гонсалес",
    },
    {
      location: "Марбелья, Испания",
      project: "Бутик-отель на 25 номеров",
      area: "1,200 м²",
      features: [
        "Индивидуальное управление в каждом номере",
        "Центральная система мониторинга",
        "Автоматизация общих зон и ресепшена",
        "Интеграция с системой бронирования",
        "Умное освещение и климат-контроль",
        "Система безопасности и видеонаблюдения",
      ],
      image: "/luxury-boutique-hotel-marbella-spain-modern-interi.jpg",
      testimonial: "Гости в восторге от технологий. Рейтинг на Booking.com вырос до 9.4/10.",
      client: "Отель 'Casa del Mar'",
    },
    {
      location: "Москва, Россия",
      project: "ЖК 'Новая Москва' - 120 квартир",
      area: "15,000 м²",
      features: [
        "AI-консьерж в каждом подъезде",
        "Биометрические замки на входах",
        "Система видеонаблюдения с распознаванием лиц",
        "Мобильное приложение для жильцов",
        "Умное управление общими зонами",
        "Интеграция с домофонами",
      ],
      image: "/modern-residential-complex-moscow-russia-smart-bui.jpg",
      testimonial: "Наш ЖК стал самым технологичным в районе. Квартиры продаются на 20% дороже конкурентов.",
      client: "ГК 'СтройИнвест'",
    },
    {
      location: "Алматы, Казахстан",
      project: "Бизнес-отель 'Алатау' - 45 номеров",
      area: "2,800 м²",
      features: [
        "Умные номера с голосовым управлением",
        "Система контроля доступа с биометрией",
        "Автоматизация конференц-залов",
        "Умное освещение и климат-контроль",
        "Видеонаблюдение с AI-аналитикой",
        "Интеграция с системой управления отелем",
      ],
      image: "/modern-business-hotel-almaty-kazakhstan-lobby.jpg",
      testimonial: "Автоматизация позволила сократить эксплуатационные расходы на 30%. Окупилось за 2.5 года.",
      client: "Отель 'Алатау'",
    },
    {
      location: "Санкт-Петербург, Россия",
      project: "ЖК 'Северная Венеция' - 180 квартир",
      area: "22,000 м²",
      features: [
        "Умные подъезды с видеодомофонами",
        "Распознавание жильцов и гостей",
        "Автоматические ворота и шлагбаумы",
        "Система управления паркингом",
        "Мобильное приложение для жильцов",
        "Интеграция с УК для оплаты услуг",
      ],
      image: "/modern-residential-complex-saint-petersburg-russia.jpg",
      testimonial: "Жильцы в восторге от технологий. Рейтинг ЖК на Яндекс.Недвижимости - 4.9/5.",
      client: "ГК 'Северный Город'",
    },
    {
      location: "Астана, Казахстан",
      project: "Элитный жилой комплекс - 150 квартир",
      area: "18,000 м²",
      features: [
        "AI-консьерж с голосовым управлением",
        "Биометрические замки премиум-класса",
        "Панорамное видеонаблюдение 360°",
        "Умное освещение территории",
        "Система контроля микроклимата",
        "Интеграция с фитнес-центром и SPA",
      ],
      image: "/luxury-residential-complex-astana-kazakhstan-moder.jpg",
      testimonial: "Первый в Казахстане ЖК с полной AI-автоматизацией. Все квартиры проданы за 6 месяцев.",
      client: "Компания 'Capital Development'",
    },
    {
      location: "Валенсия, Испания",
      project: "Спа-отель на побережье - 35 номеров",
      area: "1,800 м²",
      features: [
        "Умные номера с персонализацией",
        "Автоматизация SPA-зоны и бассейна",
        "Система управления освещением и музыкой",
        "Климат-контроль с учетом погоды",
        "Интеграция с системой бронирования",
        "Мобильное приложение для гостей",
      ],
      image: "/luxury-spa-hotel-valencia-spain-mediterranean-coas.jpg",
      testimonial: "Гости отмечают высокий уровень комфорта. Средний чек вырос на 25%.",
      client: "Отель 'Mediterranean Wellness'",
    },
    {
      location: "Москва, Россия",
      project: "Банк 'Финансовый Альянс' - Головной офис",
      area: "5,000 м²",
      features: [
        "Интеллектуальная система безопасности",
        "Биометрический контроль доступа",
        "Автоматизация климата и освещения",
        "Система управления конференц-залами",
        "Интеграция с банковскими системами",
        "Мониторинг энергопотребления",
      ],
      image: "/modern-bank-building-interior.jpg",
      testimonial: "Проект находится в стадии разработки. Запуск запланирован на Q2 2025.",
      client: "Банк 'Финансовый Альянс'",
      inDevelopment: true,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    openModal("consultation")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/modern-residential-building-entrance-with-smart-co.jpg"
            alt="Smart Building Entrance"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-6 text-sm px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-white/30"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Умный дом на базе искусственного интеллекта
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight text-white drop-shadow-lg">
              Будущее вашего дома начинается сегодня
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 text-pretty max-w-3xl mx-auto leading-relaxed drop-shadow">
              Создаем индивидуальные решения для умного дома с интеграцией передовых AI-технологий. Полный контроль
              через мобильное приложение и голосовые команды. Работаем с застройщиками, строителями и частными
              клиентами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg h-14 px-8 bg-white text-purple-600 hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all"
                onClick={() => openModal("consultation")}
              >
                Получить расчет стоимости
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                onClick={() => openModal("demo")}
              >
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 via-blue-950 dark:to-purple-950 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 bg-[size:40px_40px] opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600 bg-white/50 backdrop-blur-sm">
              <Briefcase className="w-4 h-4 mr-2" />
              Для бизнеса
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Решения для бизнеса
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Комплексные решения для застройщиков, строителей, ЖКХ и управляющих компаний
            </p>
          </div>

          {/* Developers Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              {/* Left: Image */}
              <div className="relative group h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-residential-building-entrance-with-smart-co.jpg"
                  alt="Modern Building"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-3 bg-blue-600 text-white text-sm px-4 py-2">
                    <Building2 className="w-4 h-4 mr-2" />
                    750+ реализованных проектов
                  </Badge>
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                    Решения для застройщиков и строителей
                  </h3>
                  <p className="text-lg text-muted-foreground text-pretty">
                    Комплексная автоматизация новостроек, жилых комплексов и коммерческой недвижимости
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
                        Увеличение стоимости недвижимости с умными технологиями
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50">
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="h-10 w-10 mx-auto mb-2 text-orange-600" />
                      <p className="text-lg font-bold mb-1">Быстрая окупаемость</p>
                      <p className="text-xs text-muted-foreground">За счет премиальной цены</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: UserCheck, title: "AI-консьерж 24/7" },
                    { icon: Fingerprint, title: "Биометрия" },
                    { icon: Camera, title: "Видеонаблюдение" },
                    { icon: Smartphone, title: "Мобильное приложение" },
                  ].map((feature) => {
                    const Icon = feature.icon
                    return (
                      <div
                        key={feature.title}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border hover:shadow-md transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-semibold">{feature.title}</span>
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
                      Полный перечень услуг
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        "Умные подъезды с AI-консьержем 24/7",
                        "Биометрическое распознавание лиц",
                        "Интерактивные видеодомофоны с AI",
                        "Автоматические ворота и шлагбаумы",
                        "Система управления общими зонами",
                        "Видеонаблюдение с детекцией объектов",
                        "Мобильное приложение для жильцов",
                        "Интеграция с инженерными системами",
                      ].map((service) => (
                        <div
                          key={service}
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
                    <h4 className="text-xl font-bold mb-3">Свяжитесь с нами</h4>
                    <p className="text-white/90 text-sm mb-4">Получите бесплатную консультацию</p>
                  </div>
                  <div className="space-y-2">
                    <Button
                      className="w-full bg-white text-blue-600 hover:bg-white/90 h-11 font-semibold shadow-lg text-sm"
                      onClick={() => (window.location.href = "tel:+34600000000")}
                    >
                      <Smartphone className="w-4 h-4 mr-2" />
                      Позвонить нам
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-11 font-semibold text-sm"
                      onClick={() => (window.location.href = "mailto:info@aisolutions.com")}
                    >
                      ✉️ Написать на почту
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-11 font-semibold text-sm"
                      onClick={() => openModal("consultation")}
                    >
                      💬 Онлайн-консультация
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Management Section */}
          <div>
            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              {/* Left: Content */}
              <div className="space-y-6 order-2 lg:order-1">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                    Решения для ЖКХ и управляющих компаний
                  </h3>
                  <p className="text-lg text-muted-foreground text-pretty">
                    Автоматизация управления многоквартирными домами и снижение эксплуатационных расходов
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
                        Снижение расходов на электроэнергию и обслуживание
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50">
                    <CardContent className="p-6 text-center">
                      <Settings className="h-10 w-10 mx-auto mb-2 text-purple-600" />
                      <p className="text-lg font-bold mb-1">Автоматизация</p>
                      <p className="text-xs text-muted-foreground">Повышение эффективности</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: BarChart3, title: "Мониторинг 24/7" },
                    { icon: ClipboardCheck, title: "Диспетчеризация" },
                    { icon: Settings, title: "Автоматизация" },
                    { icon: TrendingUp, title: "Аналитика" },
                  ].map((feature) => {
                    const Icon = feature.icon
                    return (
                      <div
                        key={feature.title}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border hover:shadow-md transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-semibold">{feature.title}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative group h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image
                  src="/modern-apartment-building-management-system.jpg"
                  alt="Building Management"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-3 bg-green-600 text-white text-sm px-4 py-2">
                    <Wrench className="w-4 h-4 mr-2" />
                    Экономия до 40%
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
                      Полный перечень услуг
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        "Централизованное управление домами",
                        "Автоматический учет ресурсов",
                        "Система диспетчеризации",
                        "Умное управление освещением",
                        "Контроль доступа и видеонаблюдение",
                        "Автоматизация лифтового хозяйства",
                        "Система приема заявок от жильцов",
                        "Интеграция с платежными системами",
                      ].map((service) => (
                        <div
                          key={service}
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
                    <h4 className="text-xl font-bold mb-3">Свяжитесь с нами</h4>
                    <p className="text-white/90 text-sm mb-4">Получите бесплатную консультацию</p>
                  </div>
                  <div className="space-y-2">
                    <Button
                      className="w-full bg-white text-green-600 hover:bg-white/90 h-11 font-semibold shadow-lg text-sm"
                      onClick={() => (window.location.href = "tel:+34600000000")}
                    >
                      <Smartphone className="w-4 h-4 mr-2" />
                      Позвонить нам
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-11 font-semibold text-sm"
                      onClick={() => (window.location.href = "mailto:info@aisolutions.com")}
                    >
                      ✉️ Написать на почту
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-11 font-semibold text-sm"
                      onClick={() => openModal("consultation")}
                    >
                      💬 Онлайн-консультация
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/automated-curtains-smart-home-interior.jpg"
            alt="Automated Curtains Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Home className="w-3 h-3 mr-2" />
              Возможности
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Комплексная автоматизация вашего дома</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Мы автоматизируем все системы вашего дома и объединяем их в единую интеллектуальную экосистему с
              централизованным управлением
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30"
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-purple-500 text-purple-600">
              <Sparkles className="w-3 h-3 mr-2" />
              Инновации
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Уникальные функции, которые выделяют вас на рынке</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Технологии будущего, доступные уже сегодня. Станьте лидером инноваций в сфере недвижимости
            </p>
          </div>
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
                      alt={feature.title}
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
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-indigo-500 text-indigo-600">
              <Zap className="w-3 h-3 mr-2" />
              Передовые технологии
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Интеграция с ведущими AI-платформами</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы используем самые передовые технологии искусственного интеллекта для создания по-настоящему умного дома,
              который понимает вас и адаптируется под ваш образ жизни
            </p>
          </div>
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
                        alt={platform.name}
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
            <h3 className="text-2xl font-bold mb-6 text-center">Что дает AI в умном доме</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Предиктивная автоматизация</h4>
                  <p className="text-sm text-muted-foreground">
                    AI изучает ваши привычки и автоматически настраивает дом под ваш распорядок дня
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
                    Умное управление энергией снижает счета на 30-50% без потери комфорта
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
                    AI распознает аномалии и предупреждает о потенциальных угрозах до их возникновения
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
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <MapPin className="w-3 h-3 mr-2" />
              Наши проекты
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Реализованные проекты в России, Казахстане и Испании
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Более 750 успешных проектов: от частных домов и отелей до многоэтажных жилых комплексов и коммерческой
              недвижимости. Работаем с застройщиками и частными клиентами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card
                key={study.location + study.project}
                className="overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group border-2 hover:border-primary/50 cursor-pointer"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.project}
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
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                    {study.project}
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    <Building2 className="h-4 w-4 inline mr-2" />
                    {study.area}
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
                  <div className="pt-4 border-t">
                    <p className="text-sm italic text-muted-foreground mb-2">"{study.testimonial}"</p>
                    <p className="text-sm font-semibold">— {study.client}</p>
                  </div>
                </CardContent>
              </Card>
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
                Почему мы
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Почему выбирают нас</h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Индивидуальный подход</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Разрабатываем решения под ваши конкретные потребности, архитектуру дома и бюджет. Каждый проект
                      уникален.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Передовые AI-технологии</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Интеграция с лучшими AI-платформами: OpenAI GPT-4, xAI Grok, Google Gemini, DeepSeek для
                      максимальной автоматизации.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Полный цикл работ</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      От проектирования и монтажа до настройки и обучения. Гарантия 3 года и техподдержка 24/7.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Опыт работы в 3 странах</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      7+ лет работы с застройщиками и частными клиентами в России, Казахстане и Испании. Более 750
                      реализованных проектов.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-smart-home-interior-living-room-technology.jpg"
                alt="Smart Home Interior"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Получите бесплатный расчет стоимости</h2>
            <p className="text-xl opacity-90 drop-shadow">
              Заполните форму, и наш специалист свяжется с вами в течение 24 часов для обсуждения вашего проекта
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
                    Расскажите о вашем проекте
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваши требования: площадь дома, желаемые функции, примерный бюджет, сроки реализации..."
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы создать умный дом мечты?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами для бесплатной консультации, расчета стоимости и демонстрации возможностей умного дома
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => openModal("consultation")}
                >
                  Связаться с нами
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
                  Посмотреть примеры работ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
