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
  Users,
  Building2,
  Clock,
  Star,
} from "lucide-react"

export const AI_PLATFORMS = [
  {
    name: "OpenAI",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-2UR6g6b9qthSl4zIAMEz4tM932ulao.png",
    description: "GPT-4 для интеллектуального управления домом и обработки естественного языка",
    color: "from-emerald-500/20 to-teal-500/20",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Grok",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grok-feb-2025-logo.svg-B5B5FYDy2LjkbgpHO5MzDf3vJdav7d.png",
    description: "xAI для продвинутой автоматизации и реального времени анализа данных",
    color: "from-gray-500/20 to-slate-500/20",
    gradient: "from-gray-600 to-slate-600",
  },
  {
    name: "Google Gemini",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gemini_aurora_thumbnail_4g_e74822ff0ca4259beb718-uweKXPxWnFMWAhrpciQYGV95vA0KUd.png",
    description: "Мультимодальный AI для визуального распознавания и контекстного понимания",
    color: "from-blue-500/20 to-purple-500/20",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "DeepSeek",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DeepSeek-ASQH4LQDKYs632KOEW73DZlh46RAWx.png",
    description: "Глубокое обучение для предиктивной оптимизации энергопотребления",
    color: "from-indigo-500/20 to-blue-500/20",
    gradient: "from-indigo-500 to-blue-500",
  },
] as const

export const FEATURES = [
  {
    icon: Smartphone,
    title: "Мобильное приложение",
    description:
      "Полный контроль всех систем дома с вашего смартфона из любой точки мира. iOS и Android приложения с интуитивным интерфейсом.",
    details: ["Удаленный доступ 24/7", "Push-уведомления", "Мультиязычный интерфейс", "Офлайн режим"],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Speaker,
    title: "Голосовое управление AI",
    description: "Управляйте домом естественными голосовыми командами через интеграцию с передовыми AI-ассистентами.",
    details: ["Поддержка 50+ языков", "Контекстное понимание", "Персонализация команд", "Голосовая биометрия"],
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Lightbulb,
    title: "Интеллектуальное освещение",
    description:
      "AI автоматически настраивает освещение под время суток, погоду и ваше настроение. Экономия до 60% электроэнергии.",
    details: ["Циркадные ритмы", "Сцены освещения", "Датчики присутствия", "RGB + теплый/холодный"],
    color: "from-yellow-500/10 to-orange-500/10",
  },
  {
    icon: Thermometer,
    title: "Умный климат-контроль",
    description:
      "Индивидуальная температура в каждой комнате с предиктивным обучением ваших предпочтений. Экономия до 40% на отоплении.",
    details: ["Зональный контроль", "Погодный прогноз", "Геолокация", "Энергомониторинг"],
    color: "from-red-500/10 to-orange-500/10",
  },
  {
    icon: Droplets,
    title: "Автоматический полив",
    description:
      "Интеллектуальная система полива анализирует погоду, влажность почвы и потребности растений для оптимального ухода.",
    details: ["Датчики влажности", "Метеостанция", "График полива", "Экономия воды до 50%"],
    color: "from-cyan-500/10 to-blue-500/10",
  },
  {
    icon: Wind,
    title: "Автоматизация штор",
    description: "Шторы и жалюзи открываются/закрываются по расписанию, уровню освещенности или голосовой команде.",
    details: ["Солнечные датчики", "Тихие моторы", "Групповое управление", "Сценарии"],
    color: "from-indigo-500/10 to-purple-500/10",
  },
  {
    icon: Lock,
    title: "Система безопасности",
    description: "Умные замки с биометрией, контроль доступа, история входов. Интеграция с охранной сигнализацией.",
    details: ["Отпечаток пальца", "PIN-коды", "Мобильный ключ", "Временный доступ"],
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Camera,
    title: "AI видеонаблюдение",
    description: "Камеры с распознаванием лиц, детекцией движения и умными уведомлениями. Запись в облако и локально.",
    details: ["Распознавание лиц", "Детекция объектов", "Ночное видение", "Облачное хранение"],
    color: "from-slate-500/10 to-gray-500/10",
  },
  {
    icon: Wifi,
    title: "Единая экосистема",
    description:
      "Все устройства работают в единой защищенной сети с централизованным управлением и автоматизацией сценариев.",
    details: ["Zigbee, Z-Wave, WiFi", "Локальное управление", "Резервное копирование", "API интеграции"],
    color: "from-violet-500/10 to-purple-500/10",
  },
] as const

export const CASE_STUDIES = [
  {
    location: "Барселона, Испания",
    project: "Вилла на побережье",
    area: "450 м²",
    budget: "€85,000",
    features: [
      "Полная автоматизация всех систем",
      "Голосовое управление на 4 языках",
      "Интеграция с бассейном и SPA",
      "Система безопасности премиум-класса",
    ],
    image: "/luxury-villa-barcelona-smart-home.jpg",
    testimonial: "Дом стал действительно умным. Все работает безупречно!",
    client: "Семья Родригес",
    savings: "€3,200/год",
  },
  {
    location: "Моравира, Испания",
    project: "Апартаменты премиум-класса",
    area: "180 м²",
    budget: "€42,000",
    features: [
      "Климат-контроль с зональным управлением",
      "Умное освещение 120+ точек",
      "Система безопасности с AI-камерами",
      "Интеграция с домофоном",
    ],
    image: "/modern-apartment-moraira-interior.jpg",
    testimonial: "Управление с телефона - это невероятно удобно!",
    client: "Мария Гонсалес",
    savings: "€1,800/год",
  },
  {
    location: "Альтеа, Испания",
    project: "Загородный дом с садом",
    area: "320 м²",
    budget: "€68,000",
    features: [
      "Автополив сада 2000 м²",
      "Солнечные панели + энергоменеджмент",
      "Умное освещение территории",
      "Система видеонаблюдения периметра",
    ],
    image: "/countryside-house-altea-garden.jpg",
    testimonial: "Сад всегда в идеальном состоянии, даже когда мы в отъезде.",
    client: "Хуан Мартинес",
    savings: "€2,600/год",
  },
] as const

export const STATS = [
  { icon: Users, value: "150+", label: "Довольных клиентов" },
  { icon: Building2, value: "200+", label: "Реализованных проектов" },
  { icon: Clock, value: "5 лет", label: "Опыт работы" },
  { icon: Star, value: "4.9/5", label: "Средний рейтинг" },
] as const
