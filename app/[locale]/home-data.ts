import type { LucideIcon } from "lucide-react"
import { Phone, Home, Building2, Building, TrendingUp, Clock, Zap, Shield, CheckCircle2, Users } from "lucide-react"

export interface Solution {
  id: string
  title: string
  description: string
  href: string
  icon: LucideIcon
  gradient: string
  bgGradient: string
  image: string
  features: string[]
  stats: Array<{ icon: LucideIcon; value: string; label: string }>
}

export const solutions: Solution[] = [
  {
    id: "voice-sales",
    title: "Голосовой AI-менеджер",
    description: "Автоматизация продаж от первого звонка до сделки в CRM",
    href: "/solutions/voice-sales-manager",
    icon: Phone,
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
    image: "/ai-voice-manager-dashboard-with-call-statistics.jpg",
    features: [
      "Обработка 100% входящих звонков",
      "Интеграция с CRM и 1C",
      "Запись разговоров и аналитика",
      "Автоматическое создание сделок",
    ],
    stats: [
      { icon: TrendingUp, value: "+87%", label: "Конверсия" },
      { icon: Clock, value: "24/7", label: "Работа" },
    ],
  },
  {
    id: "smart-home",
    title: "Умный дом",
    description: "Полная автоматизация жилого пространства с голосовым управлением",
    href: "/solutions/smart-home",
    icon: Home,
    gradient: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    image: "/smart-home-automation-interface-modern.jpg",
    features: [
      "Голосовое управление устройствами",
      "Автоматизация сценариев",
      "Контроль энергопотребления",
      "Безопасность и мониторинг",
    ],
    stats: [
      { icon: Zap, value: "-45%", label: "Энергии" },
      { icon: Shield, value: "99.9%", label: "Uptime" },
    ],
  },
  {
    id: "smb",
    title: "Для малого и среднего бизнеса",
    description: "Быстрое внедрение AI-решений с прозрачными сроками и результатами",
    href: "/solutions/smb",
    icon: Building2,
    gradient: "from-green-600 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    image: "/small-business-automation-dashboard-analytics.jpg",
    features: [
      "Быстрое внедрение 1-4 недели",
      "Автоматизация продаж и CRM",
      "Интеграция с учётными системами",
      "Поддержка и обучение команды",
    ],
    stats: [
      { icon: Users, value: "100+", label: "Клиентов" },
      { icon: Clock, value: "2-4 нед", label: "Запуск" },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise и госсектор",
    description: "Корпоративные решения с максимальной безопасностью и соответствием стандартам",
    href: "/solutions/enterprise",
    icon: Building,
    gradient: "from-orange-600 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
    image: "/enterprise-security-dashboard-compliance.jpg",
    features: [
      "Соответствие 152-ФЗ и GDPR",
      "Интеграция СМЭВ и ГИС",
      "SLA 99.9% с компенсацией",
      "Выделенная инфраструктура",
    ],
    stats: [
      { icon: Shield, value: "ISO", label: "27001" },
      { icon: CheckCircle2, value: "99.9%", label: "SLA" },
    ],
  },
]

export interface AudioExample {
  id: string
  title: string
  description: string
  duration: string
  src: string
  category: string
  result: string
}

export const callExamples: AudioExample[] = [
  {
    id: "roofing-call",
    title: "Расчет кровли",
    description: "AI-менеджер рассчитал стоимость 150м² кровли и создал сделку на 87,450₽",
    duration: "2:15",
    src: "/audio/roofing-calculation.mp3",
    category: "Строительство",
    result: "Создана сделка на 87,450₽, отправлен счет на email, назначена встреча на замер",
  },
  {
    id: "delivery-call",
    title: "Доставка материалов",
    description: "Оформление заказа с выбором транспорта и расчетом логистики",
    duration: "1:45",
    src: "/audio/delivery-order.mp3",
    category: "Логистика",
    result: "Оформлен заказ доставки, рассчитана стоимость логистики, подтвержден временной слот",
  },
  {
    id: "dental-appointment",
    title: "Запись к стоматологу",
    description: "Запись пациента с учетом предпочтений и медкарты",
    duration: "1:30",
    src: "/audio/dental-booking.mp3",
    category: "Медицина",
    result: "Пациент записан на прием, отправлено SMS-напоминание, учтены особенности из медкарты",
  },
]
