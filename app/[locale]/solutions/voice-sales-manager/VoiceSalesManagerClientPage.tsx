"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Users,
  ArrowRight,
  Target,
  DollarSign,
  Play,
  Pause,
  Volume2,
  PhoneCall,
  CheckCircle2,
  PhoneOff,
  Repeat,
  Frown,
  Bell,
  AlertCircle,
  MessageSquare,
  Calculator,
  Phone,
  X,
  Zap,
  TrendingUp,
  Database,
  Sparkles,
  ClipboardList,
  Brain,
  GraduationCap,
  Rocket,
  Check,
  Headphones,
  BarChart3,
} from "lucide-react"
import Image from "next/image"
import { useCTA } from "@/components/modals/cta-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Link from "next/link"

export function VoiceSalesManagerClientPage() {
  const { openModal } = useCTA()
  const [activeScenario, setActiveScenario] = useState<"cold" | "warm" | "support">("cold")
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("example1")
  const [audioProgress, setAudioProgress] = useState<Record<string, number>>({})

  const problems = [
    "Пропущенные или поздно обработанные звонки",
    "Долгая передача информации между менеджерами",
    "Разные стандарты общения с клиентами",
    "Непредсказуемое качество работы",
    "Загрузка и усталость сотрудников",
    "Ошибки при оформлении заявок, заказов и данных",
    "Завышенная стоимость найма, обучения и контроля персонала",
  ]

  const solutions = [
    "Обрабатывает каждый входящий запрос без задержек",
    "Даёт клиентам точную и единообразную информацию",
    "Ведёт диалог в рамках заданного скрипта и не отклоняется",
    "Сразу фиксирует данные клиента и записывает их в CRM",
    "Создаёт заявки, задачи и сделки автоматически",
    "Настраивается под конкретную схему продаж и особенности бизнеса",
    "Работает круглосуточно и не требует контроля",
  ]

  const automationProcess = [
    {
      phase: "Погружение в бизнес",
      duration: "1-2 недели",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      steps: [
        "Знакомство с вашей командой продаж",
        "Анализ текущих процессов и скриптов",
        "Изучение продуктов и услуг",
        "Выявление болевых точек клиентов",
      ],
      description:
        "Наши инженеры и менеджеры проекта полностью погружаются в ваш бизнес, изучают как работают ваши менеджеры, какие возражения встречают, как общаются с клиентами.",
    },
    {
      phase: "Проектирование решения",
      duration: "1 неделя",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      steps: [
        "Составление сценариев диалогов",
        "Выбор технологий и интеграций",
        "Проработка логики обработки заявок",
        "Планирование интеграции с CRM",
      ],
      description:
        "Разрабатываем индивидуальную архитектуру AI-менеджера специально для вашего бизнеса, учитывая специфику отрасли и корпоративную культуру.",
    },
    {
      phase: "Обучение AI-агента",
      duration: "1-2 недели",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
      steps: [
        "Написание и тестирование промптов",
        "Обучение работе с вашими товарами",
        "Отработка борьбы с возражениями",
        "Настройка корпоративного стиля общения",
      ],
      description:
        "Обучаем AI всему, что знают ваши лучшие менеджеры: от приветствия до закрытия сделки. AI изучает ваш прайс-лист, преимущества продуктов, учится работать с CRM.",
    },
    {
      phase: "Тестирование и запуск",
      duration: "3-5 дней",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      steps: [
        "Тестовые звонки с вашей командой",
        "Корректировка сценариев",
        "Настройка интеграций",
        "Постепенный запуск на реальных клиентах",
      ],
      description:
        "Проводим тщательное тестирование с вашими менеджерами, дорабатываем детали и плавно запускаем AI-менеджера на реальные звонки с постоянной поддержкой.",
    },
  ]

  const processSteps = [
    {
      title: "Принятие обращения",
      description: "AI мгновенно отвечает на звонок или сообщение, распознает намерение клиента.",
      icon: PhoneCall,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Квалификация и диалог",
      description: "Задает вопросы по скрипту, выявляет потребности, консультирует по продукту.",
      icon: MessageSquare,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Работа с данными",
      description: "Рассчитывает стоимость, проверяет наличие, подбирает варианты.",
      icon: Calculator,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Результат в CRM",
      description: "Создает сделку, ставит задачу менеджеру или отправляет счет клиенту.",
      icon: CheckCircle2,
      color: "bg-green-100 text-green-600",
    },
  ]

  const original_problems = [
    {
      title: "Пропущенные звонки",
      description: "Клиенты не могут дозвониться → идут к конкурентам.",
      icon: PhoneOff,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Нет времени на обработку базы",
      description: "Менеджеры работают только с горячими, база «умирает».",
      icon: Clock,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Не фиксируют сделки в CRM",
      description: "Потеря данных = потеря выручки.",
      icon: Target,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "Длинный цикл сделки",
      description: "Никто не делает повторные касания.",
      icon: Repeat,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Человеческий фактор",
      description: "Усталость, настроение, текучка, ошибки.",
      icon: Frown,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Дорогой ФОТ",
      description: "3–5 менеджеров стоят как 1 AI-продажник, работающий без выходных.",
      icon: DollarSign,
      color: "from-purple-500 to-purple-600",
    },
  ]

  const original_solutions = [
    { problem: "Пропущенные звонки", solution: "0 пропусков", description: "AI берёт трубку мгновенно. 24/7." },
    {
      problem: "Нет времени на прозвон",
      solution: "Автоматические исходящие",
      description: "AI сам прозванивает тёплую и холодную базы.",
    },
    {
      problem: "CRM пустая",
      solution: "100% фиксация",
      description: "Контакты, сделки, задачи — создаются автоматически.",
    },
    {
      problem: "Длинный цикл",
      solution: "Авто-дожим клиентов",
      description: "Звонки, напоминания, повторные касания — всё в автомате.",
    },
    {
      problem: "Медленный отклик",
      solution: "Ответ в 0.2 секунды",
      description: "Ни одного «перезвоните позже».",
    },
    {
      problem: "Высокий ФОТ",
      solution: "Экономия до 70%",
      description: "Один AI-менеджер закрывает объём работы 3–7 человек.",
    },
  ]

  const callExamples = [
    {
      id: "example1",
      title: "Строительные материалы (входящий)",
      description: "Клиент спрашивает про доставку кровельного материала.",
      audioUrl: "/audio/construction-inbound.mp3",
      crmAction: "Создан контакт + сделка 'Кровля 120 м²'",
    },
    {
      id: "example2",
      title: "Недвижимость (исходящий)",
      description: "AI перезванивает по заявке с сайта, уточняет параметры и записывает на показ.",
      audioUrl: "/audio/real-estate-outbound.mp3",
      crmAction: "Создана встреча с адресом и временем",
    },
    {
      id: "example3",
      title: "Отель / Апарт-отель",
      description: "AI отвечает на вопросы гостя, подбирает апартаменты и оформляет бронь.",
      audioUrl: "/audio/hotel-booking.mp3",
      crmAction: "Фиксируется бронь + задача 'Подтвердить заезд'",
    },
    {
      id: "example4",
      title: "Интернет-магазин / B2B",
      description: "AI прозванивает холодную базу, квалифицирует клиента и отправляет КП.",
      audioUrl: "/audio/b2b-cold-call.mp3",
      crmAction: "Создаётся сделка 'КП отправлено'",
    },
  ]

  const postCallActions = [
    {
      step: 1,
      title: "Запись клиента в CRM",
      description: "Имя, телефон, источник, комментарии, история касаний",
      details: [
        "Автоматическое распознавание ключевой информации",
        "Классификация по источнику (сайт, реклама, холодный звонок)",
        "Дедупликация контактов",
        "Присвоение тегов по интересам",
      ],
      icon: Users,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      step: 2,
      title: "Создание сделки",
      description: "Сумма, статус, расшифровка разговора, прогноз",
      details: [
        "Автоматический расчёт суммы сделки",
        "Присвоение статуса по результату разговора",
        "Полная расшифровка диалога с временными метками",
        "AI-прогноз вероятности закрытия сделки",
      ],
      icon: Target,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      step: 3,
      title: "Задача менеджеру",
      description: "Следующий шаг: звонок, счёт, договор, напоминание",
      details: [
        "Автоматическая постановка задачи с дедлайном",
        "Приоритизация по температуре лида",
        "Контекст разговора для менеджера",
        "Рекомендации по следующему действию",
      ],
      icon: Bell,
      color: "bg-green-500",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      step: 4,
      title: "Аналитика и отчёты",
      description: "Метрики звонка, эффективность, точки роста",
      details: [
        "Длительность разговора и качество диалога",
        "Анализ возражений и причин отказа",
        "Рекомендации по улучшению скрипта",
        "Накопление статистики для прогнозов",
      ],
      icon: BarChart3,
      color: "bg-orange-500",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const original_integrations = [
    {
      category: "CRM",
      items: "amoCRM, Bitrix24, HubSpot, retailCRM",
    },
    {
      category: "Биллинг",
      items: "1С, модуль оплаты, счёт-фактуры",
    },
    {
      category: "Телефония",
      items: "Asterisk, Mango Office, МТС, Zadarma",
    },
    {
      category: "База знаний",
      items: "ваши прайсы, таблицы, FAQ, каталоги",
    },
    {
      category: "Любые API",
      items: "Интеграция с вашими системами",
    },
  ]

  const scenarios = [
    {
      title: "Обработка входящих",
      task: "Принять звонок клиента",
      aiSays: "Добрый день! Компания М2 Решения, меня зовут Анна. Чем могу помочь?",
      crmResult: "Контакт + сделка создаются автоматически",
    },
    {
      title: "Прозвон тёплой базы",
      task: "Перезвонить по заявке с сайта",
      aiSays: "Здравствуйте! Вчера вы оставили заявку на нашем сайте. Могу рассказать подробнее?",
      crmResult: "Сделка переходит в статус 'В работе'",
    },
    {
      title: "Холодные продажи",
      task: "Квалифицировать лида",
      aiSays: "Добрый день! Компания М2 Решения. Предлагаем решения для автоматизации продаж.",
      crmResult: "Создаётся сделка с отметкой 'Холодный звонок'",
    },
    {
      title: "Дожим клиентов",
      task: "Напомнить о брошенной корзине",
      aiSays: "Добрый день! Вчера вы смотрели наш товар. Могу помочь с оформлением заказа?",
      crmResult: "Сделка переходит в 'Повторное касание'",
    },
    {
      title: "Назначение встреч",
      task: "Записать на показ квартиры",
      aiSays: "Отлично! Когда вам будет удобно посмотреть квартиру? Завтра в 14:00?",
      crmResult: "Создаётся встреча в календаре менеджера",
    },
    {
      title: "Информирование об акциях",
      task: "Сообщить о специальном предложении",
      aiSays: "Добрый день! У нас сейчас специальное предложение — скидка 20% до конца месяца.",
      crmResult: "Отмечается в CRM: 'Проинформирован об акции'",
    },
  ]

  const original_cases = [
    {
      title: "Агентство недвижимости",
      task: "Увеличить количество показов",
      solution: "Исходящие с авто-назначением встреч",
      results: ["+47% записей на показ", "35% разговоров → назначенная встреча"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Строительная компания",
      task: "Перестать терять входящие",
      solution: "Обработка 100% входящих звонков",
      results: ["0 пропущенных звонков", "x2 повторных заказов", "-30% загрузки отдела продаж"],
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const faq = [
    {
      question: "Как быстро можно запустить AI-менеджера?",
      answer:
        "Запуск занимает от нескольких дней до 2 недель в зависимости от сложности интеграций и объёма базы знаний. Мы настраиваем AI под ваш бизнес, интегрируем с CRM и телефонией, обучаем на ваших данных и проводим тестирование перед запуском.",
    },
    {
      question: "Может ли AI-менеджер работать с<bos> CRM?",
      answer:
        "Да, мы интегрируем AI-менеджера с популярными CRM системами: amoCRM, Bitrix24, HubSpot, retailCRM, а также можем настроить интеграцию с любой другой системой через API.",
    },
    {
      question: "Что делать, если клиент просит живого человека?",
      answer:
        "AI-менеджер может переключить звонок на живого сотрудника в любой момент. Вы настраиваете правила, когда это должно происходить — например, при определённых запросах или если клиент явно просит.",
    },
    {
      question: "Сколько стоит минута разговора?",
      answer:
        "Стоимость зависит от модели AI и языка. В среднем от $0.05 до $0.15 за минуту разговора. Первоначальная настройка — от $2,000. Техподдержка и обновления — от $500/мес.",
    },
    {
      question: "Можно ли протестировать перед покупкой?",
      answer:
        "Да! Мы предоставляем демо-версию с вашим сценарием и данными. Вы сможете послушать, как AI-менеджер будет общаться с вашими клиентами, и оценить качество до принятия решения.",
    },
    {
      question: "AI может выставлять счета и отправлять документы?",
      answer:
        "Да, AI-менеджер может автоматически выставлять счета через интеграцию с биллинговой системой или 1С, отправлять коммерческие предложения, договоры и другие документы по email или в мессенджеры.",
    },
    {
      question: "Как AI обучается специфике моего бизнеса?",
      answer:
        "Мы загружаем в базу знаний AI все ваши материалы: прайс-листы, каталоги, FAQ, скрипты продаж, условия доставки и оплаты. AI также учится на реальных разговорах и улучшает свои ответы со временем.",
    },
    {
      question: "Можно ли использовать AI только для исходящих звонков?",
      answer:
        "Конечно! Вы можете настроить AI-менеджера только для исходящих звонков (прозвон базы, допродажи, возврат клиентов), только для входящих или для обоих направлений одновременно.",
    },
    {
      question: "Что если у клиента сложный вопрос?",
      answer:
        "AI-менеджер обучен распознавать ситуации, когда нужна помощь живого специалиста. В таких случаях он либо переключает звонок, либо создаёт задачу менеджеру с подробным описанием вопроса клиента.",
    },
    {
      question: "Как контролировать качество работы AI?",
      answer:
        "Вы получаете доступ к аналитической панели, где видите все звонки, их записи, расшифровки, статистику конверсии и другие метрики. Также можно настроить уведомления о важных событиях.",
    },
  ]

  const callScenarios = {
    cold: {
      title: "Холодные продажи",
      description: "Обзвон базы потенциальных клиентов с презентацией продукта",
      steps: [
        { time: "0:00", action: "Приветствие и представление компании", status: "completed" },
        { time: "0:15", action: "Квалификация клиента (бюджет, потребности)", status: "completed" },
        { time: "0:45", action: "Презентация продукта с акцентом на выгоды", status: "completed" },
        { time: "1:20", action: "Работа с возражениями", status: "completed" },
        { time: "2:00", action: "Назначение встречи / отправка КП", status: "completed" },
      ],
      result: { type: "success", text: "Встреча назначена на 15 ноября в 14:00" },
      audioUrl: "/audio/cold-call-example.mp3",
    },
    warm: {
      title: "Теплые лиды",
      description: "Обработка входящих заявок с сайта, мессенджеров, рекламы",
      steps: [
        { time: "0:00", action: "Приветствие и благодарность за заявку", status: "completed" },
        { time: "0:10", action: "Уточнение потребностей и сроков", status: "completed" },
        { time: "0:35", action: "Презентация решения под задачу клиента", status: "completed" },
        { time: "1:00", action: "Расчет стоимости и условий", status: "completed" },
        { time: "1:30", action: "Закрытие сделки / отправка договора", status: "completed" },
      ],
      result: { type: "success", text: "Заявка принята, договор отправлен на email" },
      audioUrl: "/audio/warm-lead-example.mp3",
    },
    support: {
      title: "Поддержка клиентов",
      description: "Ответы на вопросы существующих клиентов и допродажи",
      steps: [
        { time: "0:00", action: "Приветствие и идентификация клиента", status: "completed" },
        { time: "0:08", action: "Выяснение проблемы / вопроса", status: "completed" },
        { time: "0:25", action: "Предоставление решения из базы знаний", status: "completed" },
        { time: "0:50", action: "Предложение дополнительных услуг (upsell)", status: "completed" },
        { time: "1:10", action: "Подтверждение удовлетворенности", status: "completed" },
      ],
      result: { type: "success", text: "Проблема решена + продан дополнительный пакет услуг" },
      audioUrl: "/audio/support-call-example.mp3",
    },
  }

  const caseStudies = [
    {
      company: "Онлайн-школа английского",
      industry: "Образование",
      problem: "Менеджеры не успевали обрабатывать заявки с таргета, 60% терялись",
      solution: "AI-ассистент обрабатывает все заявки за 30 секунд, записывает на пробный урок",
      results: [
        { metric: "+280%", label: "рост обработанных заявок" },
        { metric: "45%", label: "конверсия в продажу" },
        { metric: "₽420К", label: "экономия в месяц" },
      ],
      image: "/online-education-classroom.jpg",
      testimonial: "За месяц окупили внедрение, продажи выросли в 3 раза. Лучшее решение для онлайн-школы!",
      client: "Анна Петрова, основатель",
    },
    {
      company: "Логистическая компания",
      industry: "Логистика",
      problem: "Операторы не справлялись с входящими звонками в пиковые часы",
      solution: "AI принимает заявки на доставку 24/7, автоматически рассчитывает стоимость",
      results: [
        { metric: "+400%", label: "обработанных звонков" },
        { metric: "24/7", label: "доступность" },
        { metric: "₽300К", label: "экономия в месяц" },
      ],
      image: "/logistics-warehouse-trucks.jpg",
      testimonial: "Клиенты оформляют заказы даже ночью. Больше не теряем звонки.",
      client: "Михаил Соколов, директор",
    },
    {
      company: "Сеть стоматологий",
      industry: "Медицина",
      problem: "Администраторы тратили 70% времени на телефон, пациенты ждали",
      solution: "AI записывает на прием, напоминает о визитах, отвечает на вопросы о услугах",
      results: [
        { metric: "+60%", label: "записей на прием" },
        { metric: "-85%", label: "пропущенных звонков" },
        { metric: "₽250К", label: "экономия в месяц" },
      ],
      image: "/modern-dental-clinic.png",
      testimonial: "Администраторы теперь фокусируются на пациентах, а не на телефоне.",
      client: "Елена Иванова, управляющая",
    },
  ]

  const integrations = [
    {
      name: "amoCRM",
      logo: "/images/67cbfeaf-a5fb-4c38-ae6d.jpeg",
      description: "Автоматическое создание сделок и задач",
    },
    {
      name: "Bitrix24",
      logo: "/images/9af7d4d0-2a0f-4980-a59b.jpeg",
      description: "Синхронизация контактов и лидов",
    },
    {
      name: "Telegram",
      logo: "/images/305c48f2-2bd0-4708-8ce9.jpeg",
      description: "Уведомления о важных звонках",
    },
    {
      name: "WhatsApp Business",
      logo: "/images/49c7178f-6604-4243-a6cd.jpeg",
      description: "Отправка записей звонков клиенту",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-16 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="mb-2 bg-white/20 text-white border-white/30 text-sm px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Ваш лучший сотрудник работает 24/7
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Голосовой AI-менеджер по продажам
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                Принимает звонки, консультирует клиентов, создает сделки в CRM и никогда не пропускает заявки
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => openModal("Попробовать AI-менеджера")}
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6 h-auto"
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Попробовать бесплатно
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 h-auto"
                  asChild
                >
                  <Link href="#examples">
                    <Play className="mr-2 h-5 w-5" />
                    Послушать примеры
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <Image
                src="/ai-voice-assistant-business-sales-call-center-mode.jpg"
                alt="AI голосовой ассистент"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How AI Manager Works - Visual Live Example Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12 md:mb-16">
              <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600 px-5 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Живой пример
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Как работает AI-менеджер
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Реальный кейс: расчет кровли из профнастила — от звонка клиента до создания сделки в CRM
              </p>
            </header>

            {/* Live Example - Before/After with enhanced styling */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Before */}
              <div className="group relative bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <X className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900">Без AI</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Клиент ждет ответа 15-30 минут",
                    "Менеджер считает на калькуляторе",
                    "Забывает уточнить параметры",
                    "Теряет заявку в блокноте",
                    "Клиент уходит к конкуренту",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-red-800">
                      <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-red-200">
                  <p className="text-xl font-bold text-red-900">Результат: 0₽</p>
                </div>
              </div>

              {/* After */}
              <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">С AI-менеджером</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Ответ через 3 секунды",
                    "Точный расчет за 30 секунд",
                    "Автоматически задает все вопросы",
                    "Сразу создает сделку в CRM",
                    "Отправляет счет на email",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-green-800">
                      <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-green-200">
                  <p className="text-xl font-bold text-green-900">Результат: Сделка на 87,450₽</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
              {/* Left: Visual with image */}
              <div className="relative group order-2 lg:order-1">
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/ai-assistant-analyzing-blueprints-and-calculations.jpg"
                    alt="AI-менеджер анализирует чертежи и выполняет расчеты"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <Badge className="mb-2 md:mb-3 bg-blue-600 text-white">
                      <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      Живой звонок
                    </Badge>
                    <p className="text-white text-xs md:text-sm">AI обрабатывает запрос клиента в реальном времени</p>
                  </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                    <CardContent className="p-3 md:p-4 text-center">
                      <div className="text-2xl md:text-4xl font-black text-green-600 mb-1">2 мин</div>
                      <p className="text-[10px] md:text-xs text-gray-600 font-semibold">Длительность звонка</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <CardContent className="p-3 md:p-4 text-center">
                      <div className="text-2xl md:text-4xl font-black text-blue-600 mb-1">100%</div>
                      <p className="text-[10px] md:text-xs text-gray-600 font-semibold">Точность расчета</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right: Step-by-step process */}
              <div className="space-y-3 md:space-y-4 order-1 lg:order-2">
                {[
                  {
                    time: "00:03",
                    step: "Приветствие и уточнение задачи",
                    description: "AI здоровается, называет компанию, уточняет потребность",
                    color: "bg-blue-500",
                  },
                  {
                    time: "00:25",
                    step: "Сбор данных для расчета",
                    description: "Площадь, тип кровли, угол наклона, доборные элементы",
                    color: "bg-purple-500",
                  },
                  {
                    time: "00:50",
                    step: "Расчет в реальном времени",
                    description: "AI считает количество листов, саморезов, стоимость",
                    color: "bg-pink-500",
                  },
                  {
                    time: "01:20",
                    step: "Презентация решения",
                    description: "Озвучивает итоговую сумму, срок изготовления, условия",
                    color: "bg-orange-500",
                  },
                  {
                    time: "01:45",
                    step: "Фиксация сделки",
                    description: "Записывает контакты, создает сделку в CRM, ставит задачу менеджеру",
                    color: "bg-green-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-lg border-2 hover:shadow-md transition-all bg-white items-start"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${item.color} flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg`}
                      >
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{item.step}</h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-snug">{item.description}</p>
                    </div>
                    {index < 4 && (
                      <div className="flex-shrink-0 flex items-center">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Result Summary */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl">
              <CardContent className="p-5 md:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Результат звонка</h3>
                  <p className="text-sm md:text-base text-gray-600">Что получает бизнес после завершения диалога</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center md:items-start gap-4 p-3 rounded-lg bg-white/50 md:bg-transparent">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Database className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm md:text-base">Сделка в CRM</h4>
                      <p className="text-xs md:text-sm text-gray-600">
                        Контакты клиента, параметры заказа, сумма — всё зафиксировано автоматически
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center md:items-start gap-4 p-3 rounded-lg bg-white/50 md:bg-transparent">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm md:text-base">Задача менеджеру</h4>
                      <p className="text-xs md:text-sm text-gray-600">
                        Система автоматически поставила задачу на подготовку КП и отправку клиенту
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center md:items-start gap-4 p-3 rounded-lg bg-white/50 md:bg-transparent">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm md:text-base">Прогноз сделки: ₽180К</h4>
                      <p className="text-xs md:text-sm text-gray-600">
                        Вероятность закрытия 75% — клиент готов заказать при согласовании сроков
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New compact Problems section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-900">
              Проблемы традиционных продаж
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Классический отдел продаж часто сталкивается с типичными трудностями, которые приводят к снижению
              эффективности:
            </p>

            <Card className="border-gray-200 shadow-sm">
              <CardContent className="p-5 md:p-8">
                <ul className="space-y-3">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed text-sm md:text-base">{problem}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    <strong>Вывод:</strong> традиционная система продаж нестабильна и требует постоянного внимания.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New compact Solutions section */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-900">
              Как AI-менеджер решает эти задачи
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              AI-менеджер работает стабильно, одинаково качественно и помогает бизнесу закрывать системные проблемы:
            </p>

            <Card className="border-blue-200 shadow-sm bg-white">
              <CardContent className="p-5 md:p-8">
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed text-sm md:text-base">{solution}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-700">
                    <strong>Акцент:</strong> AI-менеджер не заменяет команду, а убирает рутину, снижает нагрузку и
                    стабилизирует продажи.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Call Examples Section with improved audio player */}
      <section id="examples" className="py-12 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 text-xs sm:text-sm px-4 py-2 text-center whitespace-normal h-auto">
              Послушайте, как AI-менеджер продает в реальном бизнесе
            </Badge>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Реальные примеры звонков</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Записи настоящих звонков AI-менеджера с клиентами из разных отраслей
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto gap-2 bg-transparent p-0">
              {callExamples.map((example) => (
                <TabsTrigger
                  key={example.id}
                  value={example.id}
                  className="text-xs md:text-sm data-[state=active]:bg-white data-[state=active]:shadow-md border border-transparent data-[state=active]:border-gray-200 py-2 md:py-3"
                >
                  {example.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {callExamples.map((example) => (
              <TabsContent key={example.id} value={example.id}>
                <Card>
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-2xl">{example.title}</CardTitle>
                    <CardDescription className="text-sm md:text-base">{example.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 p-4 md:p-6 pt-0">
                    <div className="p-4 md:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                        <Button
                          size="lg"
                          className="rounded-full w-12 h-12 md:w-14 md:h-14 flex-shrink-0"
                          onClick={() => {
                            if (playingAudio === example.id) {
                              setPlayingAudio(null)
                            } else {
                              setPlayingAudio(example.id)
                              let progress = 0
                              const interval = setInterval(() => {
                                progress += 2
                                setAudioProgress((prev) => ({ ...prev, [example.id]: progress }))
                                if (progress >= 100) {
                                  clearInterval(interval)
                                  setPlayingAudio(null)
                                }
                              }, 200)
                            }
                          }}
                        >
                          {playingAudio === example.id ? (
                            <Pause className="h-5 w-5 md:h-6 md:w-6" />
                          ) : (
                            <Play className="h-5 w-5 md:h-6 md:w-6 ml-1" />
                          )}
                        </Button>
                        <div className="flex-1 w-full">
                          <div className="flex items-center justify-between mb-2 md:mb-3">
                            <div className="flex items-center gap-2">
                              <Volume2 className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                              <span className="text-xs md:text-sm font-medium">Аудио звонка</span>
                            </div>
                            <span className="text-xs md:text-sm text-muted-foreground">2:35</span>
                          </div>
                          <div className="flex items-end gap-0.5 md:gap-1 h-8 md:h-12 w-full">
                            {Array.from({ length: 40 }).map((_, i) => {
                              const height = Math.sin(i * 0.3) * 20 + 25
                              const isActive =
                                playingAudio === example.id && (audioProgress[example.id] || 0) > (i / 40) * 100
                              return (
                                <div
                                  key={i}
                                  className={`flex-1 rounded-full transition-all duration-200 ${
                                    isActive ? "bg-gradient-to-t from-blue-500 to-purple-500" : "bg-blue-200"
                                  }`}
                                  style={{ height: `${height}%` }}
                                />
                              )
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                          <span className="font-semibold text-green-900 text-sm md:text-base">Результат в CRM</span>
                        </div>
                        <p className="text-green-800 text-sm md:text-base">{example.crmAction}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Автоматизация после звонка
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Что происходит после звонка
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AI-менеджер не только разговаривает с клиентами, но и полностью автоматизирует все процессы после звонка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {postCallActions.map((action) => (
              <Card
                key={action.step}
                className="group relative overflow-hidden border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl bg-white"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${action.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${action.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <action.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="font-mono text-xs">
                          Этап {action.step}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl md:text-2xl mb-2">{action.title}</CardTitle>
                      <CardDescription className="text-sm md:text-base">{action.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {action.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Card */}
          <Card className="mt-8 md:mt-12 max-w-4xl mx-auto border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50 shadow-xl">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                    Результат: полная автоматизация продаж
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    После каждого звонка AI-менеджер автоматически обрабатывает всю информацию, фиксирует данные в CRM,
                    создаёт сделки, ставит задачи менеджерам и формирует аналитику. Ваша команда получает готовые
                    квалифицированные лиды с полным контекстом разговора.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-200">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-blue-600">100%</div>
                      <div className="text-xs md:text-sm text-gray-600">Фиксация данных</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-purple-600">0 сек</div>
                      <div className="text-xs md:text-sm text-gray-600">Задержка обработки</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-pink-600">24/7</div>
                      <div className="text-xs md:text-sm text-gray-600">Без выходных</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 text-xs sm:text-sm px-4 py-2 h-auto whitespace-normal">
              Подключается к вашим системам без боли
            </Badge>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Работает с вашими инструментами</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Интеграция с популярными CRM, мессенджерами и другими сервисами
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-500"
              >
                <CardHeader className="text-center p-4 md:p-6">
                  <div className="mx-auto mb-4 w-full h-16 relative">
                    <Image
                      src={integration.logo || "/placeholder.svg"}
                      alt={integration.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-base md:text-lg">{integration.name}</CardTitle>
                  <CardDescription className="text-xs md:text-sm">{integration.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center"></div>
        </div>
      </section>

      {/* Case Studies Section with links to detailed pages */}
      <section className="py-12 md:py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 text-xs sm:text-sm px-4 py-2">Кейсы внедрения</Badge>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Реальные результаты клиентов</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Компании из разных отраслей уже автоматизировали продажи с AI-менеджером
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((caseItem, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={caseItem.image || "/placeholder.svg"}
                    alt={caseItem.company}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2">{caseItem.industry}</Badge>
                    <h3 className="text-white font-bold text-lg">{caseItem.company}</h3>
                  </div>
                </div>
                <CardHeader className="pb-3 p-4 md:p-6">
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-red-600 mb-1">Проблема</div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{caseItem.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-blue-600 mb-1">Решение</div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{caseItem.solution}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                  <div className="grid grid-cols-3 gap-2">
                    {caseItem.results.map((result, idx) => (
                      <div key={idx} className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-600 mb-1">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-xs italic line-clamp-2">&ldquo;{caseItem.testimonial}&rdquo;</p>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    <Link href="/ru/cases" className="flex items-center justify-center">
                      Все кейсы
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 text-xs sm:text-sm px-4 py-2">Частые вопросы</Badge>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Остались вопросы?</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Ответы на самые популярные вопросы о голосовом AI-менеджере
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-blue-600 py-3 md:py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl bg-white/10 backdrop-blur-md">
              <CardHeader className="text-center space-y-6 p-8 md:p-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-4">
                  <PhoneCall className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white">Готовы автоматизировать продажи?</h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                  Оставьте заявку и получите персональную демонстрацию AI-менеджера для вашего бизнеса
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    onClick={() => openModal("contact")}
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
                  >
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Получить консультацию
                  </Button>
                  <Button
                    onClick={() => openModal("demo")}
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Посмотреть демо
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Automate Your Business Section */}
      <section className="py-16 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <Badge className="mb-6 text-sm px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
              <Zap className="w-4 h-4 mr-2" />
              Для малого и среднего бизнеса
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Как мы автоматизируем ваш бизнес
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Полное погружение нашей команды в ваш бизнес. Мы не просто настраиваем технологию — мы создаем цифрового
              сотрудника, который знает ваш продукт, понимает клиентов и говорит на языке вашей компании.
            </p>
          </div>

          {/* Timeline Process */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {automationProcess.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-300"
                  >
                    {/* Phase number badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon and header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {phase.phase}
                        </h3>
                        <Badge variant="outline" className="text-sm">
                          <Clock className="w-3 h-3 mr-1" />
                          {phase.duration}
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">{phase.description}</p>

                    {/* Steps list */}
                    <div className="space-y-3">
                      {phase.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3 group/item">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover/item:text-blue-600 transition-colors">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative element */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                )
              })}
            </div>

            {/* Timeline indicator */}
            <div className="mt-16 text-center"></div>

            {/* What makes us different */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Индивидуальный подход</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Не шаблонное решение, а AI-менеджер, созданный специально для вашего бизнеса с учетом всех
                    особенностей
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Работа с вашей командой</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Ваши руководители отдела продаж участвуют в процессе, передавая опыт лучших менеджеров AI-агенту
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Постоянная поддержка</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    После запуска мы не исчезаем — улучшаем скрипты, добавляем функции, помогаем масштабировать решение
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <Card className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white border-none shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl mb-4">Готовы автоматизировать продажи?</CardTitle>
                  <CardDescription className="text-white/90 text-lg mb-6">
                    Закажите бесплатную консультацию, и мы расскажем, как AI-менеджер может увеличить вашу выручку
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => openModal("consultation")}
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
                    >
                      <PhoneCall className="mr-2 h-5 w-5" />
                      Получить консультацию
                    </Button>
                    <Button
                      onClick={() => openModal("demo")}
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                    >
                      Посмотреть демо
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Real Call Examples Section */}
      <section className="py-12 bg-white">
        {/* This section seems to be a duplicate or misplaced, removing it to avoid redundancy */}
      </section>
    </div>
  )
}
