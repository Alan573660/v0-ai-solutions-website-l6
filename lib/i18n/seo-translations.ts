import type { Locale } from "./config"

export type SEOPageType =
  | "home"
  | "about"
  | "blog"
  | "cases"
  | "contacts"
  | "solutions"
  | "solutions-smb"
  | "solutions-enterprise"
  | "solutions-custom"
  | "solutions-voice-sales"
  | "solutions-hotel-concierge"
  | "platform"
  | "platform-architecture"
  | "platform-demo"
  | "faq"
  | "support"
  | "privacy"
  | "terms"

export interface SEOMetadata {
  title: string
  description: string
  keywords: string
  ogTitle?: string
  ogDescription?: string
}

const seoTranslations: Record<Locale, Record<SEOPageType, SEOMetadata>> = {
  ru: {
    home: {
      title: "AI Solutions M2 — Голосовые AI-ассистенты для автоматизации продаж и обслуживания клиентов 24/7",
      description:
        "Внедрите голосовых AI-ассистентов для автоматизации продаж, обслуживания клиентов и бизнес-процессов. Увеличьте конверсию в 3 раза, сократите расходы на персонал до 70%. Интеграция с CRM, автоматическая фиксация данных, аналитика разговоров. Демо бесплатно.",
      keywords:
        "голосовой AI ассистент, автоматизация продаж AI, виртуальный помощник бизнес, голосовой бот для продаж, AI консьерж, чат-бот с голосом, автоматизация обслуживания клиентов, CRM интеграция AI, conversational AI, voice AI assistant, speech recognition, natural language processing, AI для бизнеса, машинное обучение продажи, нейросети для бизнеса, ChatGPT для бизнеса, DeepSeek интеграция, Grok API, OpenAI GPT-4, Claude AI, автоматизация звонков, исходящие звонки AI, входящие звонки обработка, голосовая аналитика, speech analytics, call center automation, IVR система AI, умный секретарь, виртуальный оператор, AI телефония",
      ogTitle: "AI Solutions M2 — Голосовые AI-ассистенты 24/7 | Автоматизация продаж и клиентского сервиса",
      ogDescription:
        "Автоматизируйте продажи и обслуживание клиентов с помощью голосовых AI-ассистентов. Увеличьте конверсию в 3 раза, сократите расходы до 70%. Интеграция с CRM, аналитика, демо бесплатно.",
    },
    about: {
      title: "О компании AI Solutions M2 — Международная команда экспертов по искусственному интеллекту",
      description:
        "Узнайте о команде AI Solutions M2 — международных экспертах из России, СНГ, Украины и Индии. Наша миссия, ценности и офисы в Мадриде, Москве и Астане.",
      keywords:
        "AI Solutions команда, искусственный интеллект эксперты, международная IT компания, AI разработка, машинное обучение специалисты, офисы в России Испании Казахстане",
      ogTitle: "О компании AI Solutions M2 — Эксперты по ИИ",
      ogDescription:
        "Международная команда экспертов по искусственному интеллекту с офисами в Мадриде, Москве и Астане.",
    },
    blog: {
      title: "Блог AI Solutions M2 — Экспертные статьи о внедрении искусственного интеллекта в бизнес",
      description:
        "Читайте экспертные статьи о трендах AI, практические кейсы внедрения и советы по оптимизации бизнес-процессов с помощью искусственного интеллекта от команды AI Solutions M2.",
      keywords:
        "AI блог, искусственный интеллект статьи, машинное обучение кейсы, автоматизация бизнеса, голосовые ассистенты внедрение, AI тренды 2024, чат-боты для бизнеса",
      ogTitle: "Блог AI Solutions M2 — Статьи об ИИ",
      ogDescription: "Экспертные статьи о внедрении искусственного интеллекта в бизнес, кейсы и практические советы.",
    },
    cases: {
      title: "Кейсы внедрения AI Solutions M2 — Реальные результаты клиентов в различных отраслях",
      description:
        "Изучите успешные проекты внедрения AI-ассистентов: Сбербанк (+40% продаж), Магнит (-60% время обслуживания), Правительство Москвы (-70% время обработки). Реальные метрики ROI.",
      keywords:
        "AI кейсы, внедрение искусственного интеллекта, голосовые ассистенты результаты, автоматизация банков, AI в ритейле, цифровизация госуслуг, ROI искусственный интеллект",
      ogTitle: "Кейсы AI Solutions M2 — Реальные результаты",
      ogDescription:
        "Успешные проекты внедрения AI-ассистентов в банках, ритейле и госсекторе с конкретными метриками.",
    },
    contacts: {
      title: "Контакты AI Solutions M2 — Свяжитесь с экспертами по внедрению AI-решений",
      description:
        "Свяжитесь с командой AI Solutions M2 для консультации по внедрению AI-ассистентов. Офисы в Мадриде, Москве и Астане. Бесплатная консультация и демо.",
      keywords:
        "AI Solutions контакты, консультация по искусственному интеллекту, внедрение AI ассистентов, офисы Мадрид Москва Астана, AI эксперты связаться",
      ogTitle: "Контакты AI Solutions M2",
      ogDescription: "Свяжитесь с экспертами по AI для консультации и демо. Офисы в Мадриде, Москве и Астане.",
    },
    solutions: {
      title: "AI-решения для бизнеса — Голосовые ассистенты для продаж, отелей и автоматизации",
      description:
        "Выберите AI-решение для вашего бизнеса: голосовой менеджер продаж, AI-консьерж для отелей, решения для SMB, Enterprise и индивидуальные разработки.",
      keywords:
        "AI решения для бизнеса, голосовой менеджер продаж, AI консьерж отель, автоматизация малого бизнеса, корпоративные AI решения, индивидуальная разработка AI",
      ogTitle: "AI-решения для бизнеса — AI Solutions M2",
      ogDescription: "Голосовые AI-ассистенты для продаж, отелей, малого и крупного бизнеса. Индивидуальные решения.",
    },
    "solutions-smb": {
      title: "AI-решения для малого и среднего бизнеса — Доступная автоматизация продаж и обслуживания",
      description:
        "AI-ассистенты для малого и среднего бизнеса от 15,000₽/мес. Автоматизация продаж, обработка заявок, интеграция с CRM. Окупаемость за 2 месяца.",
      keywords:
        "AI для малого бизнеса, автоматизация SMB, голосовой ассистент недорого, AI продажи малый бизнес, чат-бот для стартапа, доступные AI решения",
      ogTitle: "AI для малого бизнеса — от 15,000₽/мес",
      ogDescription: "Доступные AI-ассистенты для автоматизации продаж и обслуживания в малом бизнесе.",
    },
    "solutions-enterprise": {
      title: "Enterprise AI-решения — Корпоративные голосовые ассистенты для банков и госсектора",
      description:
        "Корпоративные AI-ассистенты для банков, госсектора и крупных компаний. Высокая безопасность, соответствие 152-ФЗ, интеграция с корпоративными системами.",
      keywords:
        "Enterprise AI, корпоративные AI ассистенты, AI для банков, AI госсектор, безопасные AI решения, 152-ФЗ соответствие, корпоративная автоматизация",
      ogTitle: "Enterprise AI-решения — Безопасность и масштаб",
      ogDescription: "Корпоративные AI-ассистенты для банков и госсектора с высокой безопасностью.",
    },
    "solutions-custom": {
      title: "Индивидуальная разработка AI-решений — Уникальные голосовые ассистенты под ваши задачи",
      description:
        "Индивидуальная разработка AI-ассистентов под уникальные бизнес-процессы. R&D проекты, интеграция с legacy системами, нестандартные алгоритмы.",
      keywords:
        "индивидуальная разработка AI, кастомные AI ассистенты, уникальные AI решения, R&D искусственный интеллект, legacy интеграция AI, нестандартные алгоритмы",
      ogTitle: "Индивидуальная разработка AI — Под ваши задачи",
      ogDescription: "Уникальные AI-ассистенты под специфические бизнес-процессы и R&D проекты.",
    },
    "solutions-voice-sales": {
      title: "Голосовой AI-менеджер по продажам — Автоматизация исходящих и входящих звонков | AI Solutions M2",
      description:
        "Голосовой AI-менеджер автоматизирует продажи: обработка входящих заявок, исходящие звонки, квалификация лидов, расчет стоимости, выставление счетов. Увеличение продаж на 40%, работа 24/7, интеграция с любой CRM.",
      keywords:
        "голосовой менеджер продаж, AI для продаж, автоматизация продаж звонки, исходящие звонки AI, входящие звонки обработка, квалификация лидов AI, AI sales manager, voice sales automation, outbound calls AI, inbound calls processing, lead qualification AI, sales bot, продажи через AI, автоматический обзвон, холодные звонки AI, теплые звонки автоматизация",
      ogTitle: "Голосовой AI-менеджер продаж — Автоматизация звонков 24/7",
      ogDescription:
        "Автоматизируйте продажи с голосовым AI-менеджером: обработка заявок, исходящие звонки, квалификация лидов. +40% продаж, работа 24/7.",
    },
    "solutions-hotel-concierge": {
      title: "AI-консьерж для отелей — Автоматизация бронирования и обслуживания гостей 24/7 | AI Solutions M2",
      description:
        "AI-консьерж для отелей автоматизирует бронирование номеров, обработку запросов гостей, заказ услуг, информирование о мероприятиях. Сокращение времени обслуживания на 60%, повышение удовлетворенности гостей, работа на всех языках.",
      keywords:
        "AI консьерж отель, автоматизация отеля, бронирование номеров AI, hotel AI assistant, hotel concierge automation, guest service AI, hotel chatbot, умный отель, smart hotel, гостиничный бот, автоматизация гостиницы, hotel automation, reception automation, front desk AI, мультиязычный консьерж",
      ogTitle: "AI-консьерж для отелей — Автоматизация обслуживания гостей",
      ogDescription:
        "Автоматизируйте обслуживание гостей с AI-консьержем: бронирование, запросы, услуги. -60% время обслуживания, работа 24/7 на всех языках.",
    },
    platform: {
      title: "AI-платформа M2 — Архитектура, демо и калькулятор стоимости голосовых ассистентов",
      description:
        "Изучите архитектуру AI-платформы M2, протестируйте демо голосового ассистента и рассчитайте стоимость внедрения для вашего бизнеса.",
      keywords:
        "AI платформа архитектура, демо голосовой ассистент, калькулятор стоимости AI, техническая документация AI, API голосовых ассистентов",
      ogTitle: "AI-платформа M2 — Демо и архитектура",
      ogDescription: "Архитектура AI-платформы, интерактивное демо и калькулятор стоимости.",
    },
    "platform-architecture": {
      title: "Архитектура AI-платформы M2 — Техническая документация и API голосовых ассистентов",
      description:
        "Подробная техническая документация AI-платформы M2: архитектура системы, API endpoints, интеграции с CRM и телефонией, безопасность данных, масштабируемость. Документация для разработчиков.",
      keywords:
        "AI платформа архитектура, API голосовых ассистентов, техническая документация AI, voice AI API, speech recognition API, NLP API, CRM integration API, телефония API, webhooks AI, REST API AI, GraphQL AI, микросервисная архитектура, cloud architecture AI, безопасность AI систем",
      ogTitle: "Архитектура AI-платформы M2 — Техническая документация",
      ogDescription: "Техническая документация AI-платформы M2: архитектура, API, интеграции, безопасность.",
    },
    "platform-demo": {
      title: "Демо голосового AI-ассистента — Протестируйте возможности в реальном времени | AI Solutions M2",
      description:
        "Интерактивное демо голосового AI-ассистента: протестируйте распознавание речи, обработку запросов, интеграцию с CRM, аналитику разговоров. Попробуйте бесплатно прямо сейчас.",
      keywords:
        "демо AI ассистент, тест голосового бота, попробовать AI бесплатно, voice AI demo, AI assistant demo, speech recognition demo, conversational AI demo, интерактивное демо AI, тестирование голосового ассистента, бесплатная демонстрация AI",
      ogTitle: "Демо голосового AI-ассистента — Попробуйте бесплатно",
      ogDescription:
        "Протестируйте голосового AI-ассистента в реальном времени: распознавание речи, обработка запросов, CRM интеграция. Бесплатно.",
    },
    faq: {
      title: "Часто задаваемые вопросы о голосовых AI-ассистентах — FAQ | AI Solutions M2",
      description:
        "Ответы на частые вопросы о внедрении голосовых AI-ассистентов: стоимость, сроки внедрения, интеграция с CRM, безопасность данных, поддержка языков, обучение системы.",
      keywords:
        "FAQ AI ассистенты, вопросы о голосовых ботах, стоимость AI внедрения, сроки внедрения AI, безопасность AI систем, интеграция CRM вопросы, обучение AI ассистента, поддержка AI, техподдержка голосовых ботов",
      ogTitle: "FAQ — Вопросы о голосовых AI-ассистентах",
      ogDescription: "Ответы на частые вопросы о внедрении и использовании голосовых AI-ассистентов.",
    },
    support: {
      title: "Техническая поддержка AI Solutions M2 — Помощь в настройке и использовании AI-ассистентов",
      description:
        "Круглосуточная техническая поддержка AI Solutions M2: помощь в настройке, решение проблем, консультации по оптимизации, обновления системы. Поддержка на русском, английском и других языках.",
      keywords:
        "техподдержка AI, поддержка голосовых ассистентов, помощь настройка AI, консультации AI, troubleshooting AI, AI support, technical support AI, 24/7 поддержка, мультиязычная поддержка",
      ogTitle: "Техподдержка AI Solutions M2 — 24/7",
      ogDescription:
        "Круглосуточная техническая поддержка: настройка, решение проблем, консультации по AI-ассистентам.",
    },
    privacy: {
      title: "Политика конфиденциальности AI Solutions M2 — Защита персональных данных и GDPR",
      description:
        "Политика конфиденциальности AI Solutions M2: обработка персональных данных, соответствие GDPR и 152-ФЗ, безопасность хранения данных, права пользователей.",
      keywords:
        "политика конфиденциальности AI, GDPR соответствие, 152-ФЗ, защита данных AI, персональные данные AI, privacy policy AI, data protection AI, безопасность данных, хранение данных AI",
      ogTitle: "Политика конфиденциальности — AI Solutions M2",
      ogDescription: "Политика конфиденциальности: обработка данных, GDPR, 152-ФЗ, безопасность.",
    },
    terms: {
      title: "Условия использования AI Solutions M2 — Правила и соглашения",
      description:
        "Условия использования сервисов AI Solutions M2: правила пользования, ответственность сторон, гарантии, ограничения, порядок оплаты.",
      keywords:
        "условия использования AI, правила AI сервиса, пользовательское соглашение AI, terms of service AI, legal terms AI, договор AI услуги, правила пользования AI",
      ogTitle: "Условия использования — AI Solutions M2",
      ogDescription: "Условия использования сервисов AI Solutions M2: правила, ответственность, гарантии.",
    },
  },
  en: {
    home: {
      title: "AI Solutions M2 — Voice AI Assistants for Sales Automation and 24/7 Customer Service",
      description:
        "Implement voice AI assistants for sales automation, customer service, and business processes. Increase conversion by 3x, reduce staff costs by 70%. CRM integration, automatic data logging, call analytics. Free demo available.",
      keywords:
        "voice AI assistant, AI sales automation, virtual business assistant, voice bot for sales, AI concierge, voice chatbot, customer service automation, CRM integration AI, conversational AI, voice AI assistant, speech recognition, natural language processing, AI for business, machine learning sales, neural networks for business, ChatGPT for business, DeepSeek integration, Grok API, OpenAI GPT-4, Claude AI, call automation, outbound calls AI, inbound calls processing, voice analytics, speech analytics, call center automation, IVR system AI, smart secretary, virtual operator, AI telephony",
      ogTitle: "AI Solutions M2 — Voice AI Assistants 24/7 | Sales & Customer Service Automation",
      ogDescription:
        "Automate sales and customer service with voice AI assistants. Increase conversion by 3x, reduce costs by 70%. CRM integration, analytics, free demo.",
    },
    about: {
      title: "About AI Solutions M2 — International Team of Artificial Intelligence Experts",
      description:
        "Learn about AI Solutions M2 team — international experts from Russia, CIS, Ukraine, and India. Our mission, values, and offices in Madrid, Moscow, and Astana.",
      keywords:
        "AI Solutions team, artificial intelligence experts, international IT company, AI development, machine learning specialists, offices Russia Spain Kazakhstan",
      ogTitle: "About AI Solutions M2 — AI Experts",
      ogDescription:
        "International team of artificial intelligence experts with offices in Madrid, Moscow, and Astana.",
    },
    blog: {
      title: "AI Solutions M2 Blog — Expert Articles on Artificial Intelligence Implementation in Business",
      description:
        "Read expert articles on AI trends, practical implementation cases, and tips for optimizing business processes with artificial intelligence from AI Solutions M2 team.",
      keywords:
        "AI blog, artificial intelligence articles, machine learning cases, business automation, voice assistants implementation, AI trends 2024, business chatbots",
      ogTitle: "AI Solutions M2 Blog — AI Articles",
      ogDescription: "Expert articles on artificial intelligence implementation in business, cases and practical tips.",
    },
    cases: {
      title: "AI Solutions M2 Implementation Cases — Real Client Results Across Industries",
      description:
        "Explore successful AI assistant implementation projects: Sberbank (+40% sales), Magnit (-60% service time), Moscow Government (-70% processing time). Real ROI metrics.",
      keywords:
        "AI cases, artificial intelligence implementation, voice assistants results, banking automation, AI in retail, government digitalization, artificial intelligence ROI",
      ogTitle: "AI Solutions M2 Cases — Real Results",
      ogDescription:
        "Successful AI assistant implementation projects in banking, retail, and government with specific metrics.",
    },
    contacts: {
      title: "Contact AI Solutions M2 — Connect with AI Implementation Experts",
      description:
        "Contact AI Solutions M2 team for AI assistant implementation consultation. Offices in Madrid, Moscow, and Astana. Free consultation and demo available.",
      keywords:
        "AI Solutions contacts, artificial intelligence consultation, AI assistants implementation, offices Madrid Moscow Astana, AI experts contact",
      ogTitle: "Contact AI Solutions M2",
      ogDescription: "Connect with AI experts for consultation and demo. Offices in Madrid, Moscow, and Astana.",
    },
    solutions: {
      title: "AI Business Solutions — Voice Assistants for Sales, Hotels, and Automation",
      description:
        "Choose AI solution for your business: voice sales manager, AI hotel concierge, SMB solutions, Enterprise solutions, and custom development.",
      keywords:
        "AI business solutions, voice sales manager, AI hotel concierge, small business automation, enterprise AI solutions, custom AI development",
      ogTitle: "AI Business Solutions — AI Solutions M2",
      ogDescription: "Voice AI assistants for sales, hotels, small and large businesses. Custom solutions available.",
    },
    "solutions-smb": {
      title: "AI Solutions for Small & Medium Business — Affordable Sales and Service Automation",
      description:
        "AI assistants for small and medium businesses from $200/month. Sales automation, lead processing, CRM integration. ROI in 2 months.",
      keywords:
        "AI for small business, SMB automation, affordable voice assistant, AI sales small business, startup chatbot, accessible AI solutions",
      ogTitle: "AI for Small Business — from $200/month",
      ogDescription: "Affordable AI assistants for sales and service automation in small businesses.",
    },
    "solutions-enterprise": {
      title: "Enterprise AI Solutions — Corporate Voice Assistants for Banks and Government",
      description:
        "Corporate AI assistants for banks, government, and large companies. High security, compliance standards, integration with enterprise systems.",
      keywords:
        "Enterprise AI, corporate AI assistants, AI for banks, government AI, secure AI solutions, compliance AI, corporate automation",
      ogTitle: "Enterprise AI Solutions — Security and Scale",
      ogDescription: "Corporate AI assistants for banks and government with high security standards.",
    },
    "solutions-custom": {
      title: "Custom AI Development — Unique Voice Assistants for Your Specific Needs",
      description:
        "Custom AI assistant development for unique business processes. R&D projects, legacy system integration, non-standard algorithms.",
      keywords:
        "custom AI development, bespoke AI assistants, unique AI solutions, R&D artificial intelligence, legacy AI integration, custom algorithms",
      ogTitle: "Custom AI Development — For Your Needs",
      ogDescription: "Unique AI assistants for specific business processes and R&D projects.",
    },
    "solutions-voice-sales": {
      title: "Voice AI Sales Manager — Automate Outbound and Inbound Calls | AI Solutions M2",
      description:
        "Voice AI sales manager automates sales: inbound lead processing, outbound calls, lead qualification, quote generation, invoice creation. 40% sales increase, 24/7 operation, integrates with any CRM.",
      keywords:
        "voice sales manager, AI for sales, sales automation calls, outbound calls AI, inbound calls processing, lead qualification AI, AI sales manager, voice sales automation, outbound calls AI, inbound calls processing, lead qualification AI, sales bot, AI sales, automatic dialing, cold calls AI, warm calls automation",
      ogTitle: "Voice AI Sales Manager — 24/7 Call Automation",
      ogDescription:
        "Automate sales with a voice AI sales manager: lead processing, outbound calls, lead qualification. +40% sales, 24/7 operation.",
    },
    "solutions-hotel-concierge": {
      title: "AI Concierge for Hotels — Automate Bookings and Guest Services 24/7 | AI Solutions M2",
      description:
        "AI concierge for hotels automates room bookings, guest requests, service ordering, and event information. 60% reduction in service time, increased guest satisfaction, multilingual support.",
      keywords:
        "AI hotel concierge, hotel automation, room booking AI, hotel AI assistant, hotel concierge automation, guest service AI, hotel chatbot, smart hotel, hotel automation, reception automation, front desk AI, multilingual concierge",
      ogTitle: "AI Concierge for Hotels — Automate Guest Services",
      ogDescription:
        "Automate guest services with an AI concierge: bookings, requests, services. -60% service time, 24/7 operation in all languages.",
    },
    platform: {
      title: "AI Platform M2 — Architecture, Demo, and Voice Assistant Cost Calculator",
      description:
        "Explore AI Platform M2 architecture, test voice assistant demo, and calculate implementation costs for your business.",
      keywords:
        "AI platform architecture, voice assistant demo, AI cost calculator, AI technical documentation, voice assistant API",
      ogTitle: "AI Platform M2 — Demo and Architecture",
      ogDescription: "AI platform architecture, interactive demo, and cost calculator.",
    },
    "platform-architecture": {
      title: "AI Platform M2 Architecture — Technical Documentation and Voice Assistant API",
      description:
        "Detailed technical documentation for AI Platform M2: system architecture, API endpoints, CRM and telephony integrations, data security, scalability. Documentation for developers.",
      keywords:
        "AI platform architecture, voice assistant API, AI technical documentation, voice AI API, speech recognition API, NLP API, CRM integration API, telephony API, webhooks AI, REST API AI, GraphQL AI, microservices architecture, cloud architecture AI, AI system security",
      ogTitle: "AI Platform M2 Architecture — Technical Documentation",
      ogDescription: "AI Platform M2 technical documentation: architecture, API, integrations, security.",
    },
    "platform-demo": {
      title: "Voice AI Assistant Demo — Test Real-time Capabilities | AI Solutions M2",
      description:
        "Interactive voice AI assistant demo: test speech recognition, request processing, CRM integration, call analytics. Try it for free now.",
      keywords:
        "AI assistant demo, voice bot test, try AI free, voice AI demo, AI assistant demo, speech recognition demo, conversational AI demo, interactive AI demo, voice assistant testing, free AI demonstration",
      ogTitle: "Voice AI Assistant Demo — Try for Free",
      ogDescription:
        "Test the voice AI assistant in real-time: speech recognition, request processing, CRM integration. Free.",
    },
    faq: {
      title: "Frequently Asked Questions about Voice AI Assistants — FAQ | AI Solutions M2",
      description:
        "Answers to common questions about voice AI assistant implementation: cost, implementation time, CRM integration, data security, language support, system training.",
      keywords:
        "AI assistant FAQ, voice bot questions, AI implementation cost, AI implementation time, AI system security, CRM integration questions, AI assistant training, AI support, voice bot technical support",
      ogTitle: "FAQ — Voice AI Assistant Questions",
      ogDescription: "Answers to common questions about voice AI assistant implementation and usage.",
    },
    support: {
      title: "AI Solutions M2 Technical Support — Help with AI Assistant Setup and Usage",
      description:
        "24/7 AI Solutions M2 technical support: assistance with setup, troubleshooting, optimization advice, system updates. Support in Russian, English, and other languages.",
      keywords:
        "AI technical support, voice assistant support, AI setup help, AI consultation, AI troubleshooting, AI support, technical support AI, 24/7 support, multilingual support",
      ogTitle: "AI Solutions M2 Technical Support — 24/7",
      ogDescription: "24/7 technical support: setup, troubleshooting, AI assistant consultations.",
    },
    privacy: {
      title: "AI Solutions M2 Privacy Policy — Personal Data Protection and GDPR Compliance",
      description:
        "AI Solutions M2 privacy policy: personal data processing, GDPR and 152-FZ compliance, data storage security, user rights.",
      keywords:
        "AI privacy policy, GDPR compliance, 152-FZ, AI data protection, AI personal data, privacy policy AI, data protection AI, data security, AI data storage",
      ogTitle: "Privacy Policy — AI Solutions M2",
      ogDescription: "Privacy policy: data processing, GDPR, 152-FZ, security.",
    },
    terms: {
      title: "AI Solutions M2 Terms of Use — Rules and Agreements",
      description:
        "AI Solutions M2 service terms of use: usage rules, party responsibilities, warranties, limitations, payment procedures.",
      keywords:
        "AI terms of use, AI service rules, AI user agreement, terms of service AI, legal terms AI, AI service contract, AI usage rules",
      ogTitle: "Terms of Use — AI Solutions M2",
      ogDescription: "AI Solutions M2 service terms of use: rules, responsibilities, warranties.",
    },
  },
  es: {
    home: {
      title: "AI Solutions M2 — Asistentes de IA de Voz para Automatización de Ventas y Atención al Cliente 24/7",
      description:
        "Implementa asistentes de IA de voz para automatización de ventas, atención al cliente y procesos empresariales. Aumenta la conversión 3x, reduce costos de personal 70%. Integración con CRM, registro automático de datos, análisis de llamadas. Demo gratuita.",
      keywords:
        "asistente IA de voz, automatización ventas IA, asistente virtual negocios, bot de voz para ventas, IA conserje, chatbot de voz, automatización atención al cliente, integración CRM IA, conversational AI, voice AI assistant, speech recognition, natural language processing, IA para negocios, machine learning ventas, redes neuronales para negocios, ChatGPT para negocios, integración DeepSeek, API Grok, OpenAI GPT-4, Claude AI, automatización de llamadas, llamadas salientes IA, procesamiento llamadas entrantes, análisis de voz, speech analytics, automatización centro de llamadas, sistema IVR IA, secretario inteligente, operador virtual, telefonía IA",
      ogTitle: "AI Solutions M2 — Asistentes de IA de Voz 24/7 | Automatización de Ventas y Atención al Cliente",
      ogDescription:
        "Automatiza ventas y atención al cliente con asistentes de IA de voz. Aumenta conversión 3x, reduce costos 70%. Integración CRM, análisis, demo gratuita.",
    },
    about: {
      title: "Acerca de AI Solutions M2 — Equipo Internacional de Expertos en Inteligencia Artificial",
      description:
        "Conoce el equipo de AI Solutions M2 — expertos internacionales de Rusia, CEI, Ucrania e India. Nuestra misión, valores y oficinas en Madrid, Moscú y Astaná.",
      keywords:
        "equipo AI Solutions, expertos inteligencia artificial, empresa IT internacional, desarrollo IA, especialistas machine learning, oficinas Rusia España Kazajistán",
      ogTitle: "Acerca de AI Solutions M2 — Expertos en IA",
      ogDescription:
        "Equipo internacional de expertos en inteligencia artificial con oficinas en Madrid, Moscú y Astaná.",
    },
    blog: {
      title: "Blog AI Solutions M2 — Artículos Expertos sobre Implementación de Inteligencia Artificial en Negocios",
      description:
        "Lee artículos expertos sobre tendencias IA, casos prácticos de implementación y consejos para optimizar procesos empresariales con inteligencia artificial del equipo AI Solutions M2.",
      keywords:
        "blog IA, artículos inteligencia artificial, casos machine learning, automatización empresarial, implementación asistentes voz, tendencias IA 2024, chatbots empresariales",
      ogTitle: "Blog AI Solutions M2 — Artículos IA",
      ogDescription:
        "Artículos expertos sobre implementación de inteligencia artificial en negocios, casos y consejos prácticos.",
    },
    cases: {
      title: "Casos de Implementación AI Solutions M2 — Resultados Reales de Clientes en Diversas Industrias",
      description:
        "Explora proyectos exitosos de implementación de asistentes IA: Sberbank (+40% ventas), Magnit (-60% tiempo servicio), Gobierno Moscú (-70% tiempo procesamiento). Métricas ROI reales.",
      keywords:
        "casos IA, implementación inteligencia artificial, resultados asistentes voz, automatización bancaria, IA en retail, digitalización gobierno, ROI inteligencia artificial",
      ogTitle: "Casos AI Solutions M2 — Resultados Reales",
      ogDescription:
        "Proyectos exitosos de implementación de asistentes IA en banca, retail y gobierno con métricas específicas.",
    },
    contacts: {
      title: "Contacto AI Solutions M2 — Conéctate con Expertos en Implementación de IA",
      description:
        "Contacta al equipo AI Solutions M2 para consultoría de implementación de asistentes IA. Oficinas en Madrid, Moscú y Astaná. Consulta gratuita y demo disponible.",
      keywords:
        "contactos AI Solutions, consultoría inteligencia artificial, implementación asistentes IA, oficinas Madrid Moscú Astaná, expertos IA contacto",
      ogTitle: "Contacto AI Solutions M2",
      ogDescription: "Conéctate con expertos en IA para consultoría y demo. Oficinas en Madrid, Moscú y Astaná.",
    },
    solutions: {
      title: "Soluciones IA para Negocios — Asistentes de Voz para Ventas, Hoteles y Automatización",
      description:
        "Elige solución IA para tu negocio: gerente de ventas por voz, conserje IA para hoteles, soluciones PYME, Enterprise y desarrollo personalizado.",
      keywords:
        "soluciones IA negocios, gerente ventas voz, conserje IA hotel, automatización pequeña empresa, soluciones IA empresariales, desarrollo IA personalizado",
      ogTitle: "Soluciones IA para Negocios — AI Solutions M2",
      ogDescription:
        "Asistentes de IA de voz para ventas, hoteles, pequeñas y grandes empresas. Soluciones personalizadas.",
    },
    "solutions-smb": {
      title: "Soluciones IA para Pequeñas y Medianas Empresas — Automatización Accesible de Ventas y Servicio",
      description:
        "Asistentes IA para pequeñas y medianas empresas desde €180/mes. Automatización ventas, procesamiento leads, integración CRM. ROI en 2 meses.",
      keywords:
        "IA para pequeña empresa, automatización PYME, asistente voz económico, IA ventas pequeña empresa, chatbot startup, soluciones IA accesibles",
      ogTitle: "IA para Pequeña Empresa — desde €180/mes",
      ogDescription: "Asistentes IA accesibles para automatización de ventas y servicio en pequeñas empresas.",
    },
    "solutions-enterprise": {
      title: "Soluciones IA Enterprise — Asistentes de Voz Corporativos para Bancos y Gobierno",
      description:
        "Asistentes IA corporativos para bancos, gobierno y grandes empresas. Alta seguridad, estándares de cumplimiento, integración con sistemas empresariales.",
      keywords:
        "IA Enterprise, asistentes IA corporativos, IA para bancos, IA gobierno, soluciones IA seguras, cumplimiento IA, automatización corporativa",
      ogTitle: "Soluciones IA Enterprise — Seguridad y Escala",
      ogDescription: "Asistentes IA corporativos para bancos y gobierno con altos estándares de seguridad.",
    },
    "solutions-custom": {
      title: "Desarrollo IA Personalizado — Asistentes de Voz Únicos para Tus Necesidades Específicas",
      description:
        "Desarrollo personalizado de asistentes IA para procesos empresariales únicos. Proyectos I+D, integración sistemas legacy, algoritmos no estándar.",
      keywords:
        "desarrollo IA personalizado, asistentes IA a medida, soluciones IA únicas, I+D inteligencia artificial, integración IA legacy, algoritmos personalizados",
      ogTitle: "Desarrollo IA Personalizado — Para Tus Necesidades",
      ogDescription: "Asistentes IA únicos para procesos empresariales específicos y proyectos I+D.",
    },
    "solutions-voice-sales": {
      title: "Gerente de Ventas IA de Voz — Automatización de Llamadas Salientes y Entrantes | AI Solutions M2",
      description:
        "Gerente de ventas IA de voz automatiza ventas: procesamiento de leads entrantes, llamadas salientes, calificación de leads, generación de cotizaciones, creación de facturas. Aumento de ventas del 40%, operación 24/7, integración con cualquier CRM.",
      keywords:
        "gerente de ventas IA de voz, IA para ventas, automatización ventas llamadas, llamadas salientes IA, procesamiento llamadas entrantes, calificación de leads IA, AI sales manager, voice sales automation, outbound calls AI, inbound calls processing, lead qualification AI, sales bot, ventas con IA, marcación automática, llamadas frías IA, automatización llamadas cálidas",
      ogTitle: "Gerente de Ventas IA de Voz — Automatización de Llamadas 24/7",
      ogDescription:
        "Automatiza ventas con un gerente de ventas IA de voz: procesamiento de leads, llamadas salientes, calificación de leads. +40% ventas, operación 24/7.",
    },
    "solutions-hotel-concierge": {
      title: "Conserje IA para Hoteles — Automatización de Reservas y Servicios para Huéspedes 24/7 | AI Solutions M2",
      description:
        "Conserje IA para hoteles automatiza reservas de habitaciones, solicitudes de huéspedes, pedidos de servicios e información de eventos. Reducción del 60% en tiempo de servicio, mayor satisfacción del huésped, soporte multilingüe.",
      keywords:
        "conserje IA hotel, automatización hotel, reserva habitaciones IA, asistente IA hotel, automatización conserje hotel, servicio huéspedes IA, chatbot hotel, hotel inteligente, automatización hotelera, automatización recepción, front desk IA, conserje multilingüe",
      ogTitle: "Conserje IA para Hoteles — Automatización de Servicios para Huéspedes",
      ogDescription:
        "Automatiza servicios para huéspedes con un conserje IA: reservas, solicitudes, servicios. -60% tiempo de servicio, operación 24/7 en todos los idiomas.",
    },
    platform: {
      title: "Plataforma IA M2 — Arquitectura, Demo y Calculadora de Costos de Asistentes de Voz",
      description:
        "Explora la arquitectura de la Plataforma IA M2, prueba el demo del asistente de voz y calcula los costos de implementación para tu negocio.",
      keywords:
        "arquitectura plataforma IA, demo asistente voz, calculadora costos IA, documentación técnica IA, API asistentes voz",
      ogTitle: "Plataforma IA M2 — Demo y Arquitectura",
      ogDescription: "Arquitectura de plataforma IA, demo interactivo y calculadora de costos.",
    },
    "platform-architecture": {
      title: "Arquitectura Plataforma IA M2 — Documentación Técnica y API de Asistentes de Voz",
      description:
        "Documentación técnica detallada para la Plataforma IA M2: arquitectura del sistema, endpoints de API, integraciones con CRM y telefonía, seguridad de datos, escalabilidad. Documentación para desarrolladores.",
      keywords:
        "arquitectura plataforma IA, API asistentes de voz, documentación técnica IA, voice AI API, speech recognition API, NLP API, CRM integration API, telephony API, webhooks AI, REST API AI, GraphQL AI, arquitectura microservicios, arquitectura cloud IA, seguridad sistemas IA",
      ogTitle: "Arquitectura Plataforma IA M2 — Documentación Técnica",
      ogDescription: "Documentación técnica de la Plataforma IA M2: arquitectura, API, integraciones, seguridad.",
    },
    "platform-demo": {
      title: "Demo de Asistente IA de Voz — Prueba Capacidades en Tiempo Real | AI Solutions M2",
      description:
        "Demo interactivo de asistente IA de voz: prueba reconocimiento de voz, procesamiento de solicitudes, integración CRM, análisis de llamadas. Pruébalo gratis ahora.",
      keywords:
        "demo asistente IA, prueba bot de voz, probar IA gratis, voice AI demo, AI assistant demo, speech recognition demo, conversational AI demo, demo IA interactivo, prueba asistente de voz, demostración IA gratuita",
      ogTitle: "Demo de Asistente IA de Voz — Pruébalo Gratis",
      ogDescription:
        "Prueba el asistente IA de voz en tiempo real: reconocimiento de voz, procesamiento de solicitudes, integración CRM. Gratis.",
    },
    faq: {
      title: "Preguntas Frecuentes sobre Asistentes IA de Voz — FAQ | AI Solutions M2",
      description:
        "Respuestas a preguntas comunes sobre implementación de asistentes IA de voz: costo, tiempo de implementación, integración CRM, seguridad de datos, soporte de idiomas, entrenamiento del sistema.",
      keywords:
        "preguntas frecuentes asistentes IA, preguntas sobre bots de voz, costo implementación IA, tiempo implementación IA, seguridad sistemas IA, preguntas integración CRM, entrenamiento asistente IA, soporte IA, soporte técnico bots de voz",
      ogTitle: "FAQ — Preguntas sobre Asistentes IA de Voz",
      ogDescription: "Respuestas a preguntas comunes sobre implementación y uso de asistentes IA de voz.",
    },
    support: {
      title: "Soporte Técnico AI Solutions M2 — Ayuda con Configuración y Uso de Asistentes IA",
      description:
        "Soporte técnico AI Solutions M2 24/7: asistencia con configuración, solución de problemas, consejos de optimización, actualizaciones del sistema. Soporte en ruso, inglés y otros idiomas.",
      keywords:
        "soporte técnico IA, soporte asistentes de voz, ayuda configuración IA, consulta IA, solución problemas IA, AI support, technical support AI, soporte 24/7, soporte multilingüe",
      ogTitle: "Soporte Técnico AI Solutions M2 — 24/7",
      ogDescription: "Soporte técnico 24/7: configuración, solución de problemas, consultas sobre asistentes IA.",
    },
    privacy: {
      title: "Política de Privacidad AI Solutions M2 — Protección de Datos Personales y Cumplimiento GDPR",
      description:
        "Política de privacidad de AI Solutions M2: procesamiento de datos personales, cumplimiento de GDPR y 152-FZ, seguridad del almacenamiento de datos, derechos de los usuarios.",
      keywords:
        "política privacidad IA, cumplimiento GDPR, 152-FZ, protección datos IA, datos personales IA, privacy policy AI, data protection AI, seguridad datos, almacenamiento datos IA",
      ogTitle: "Política de Privacidad — AI Solutions M2",
      ogDescription: "Política de privacidad: procesamiento de datos, GDPR, 152-FZ, seguridad.",
    },
    terms: {
      title: "Términos de Uso AI Solutions M2 — Reglas y Acuerdos",
      description:
        "Términos de uso de los servicios de AI Solutions M2: reglas de uso, responsabilidades de las partes, garantías, limitaciones, procedimientos de pago.",
      keywords:
        "términos de uso IA, reglas servicio IA, acuerdo usuario IA, terms of service AI, legal terms AI, contrato servicios IA, reglas de uso IA",
      ogTitle: "Términos de Uso — AI Solutions M2",
      ogDescription: "Términos de uso de los servicios de AI Solutions M2: reglas, responsabilidades, garantías.",
    },
  },
  de: {
    home: {
      title: "AI Solutions M2 — Sprach-KI-Assistenten für Verkaufsautomatisierung und 24/7-Kundenservice",
      description:
        "Implementieren Sie Sprach-KI-Assistenten für Verkaufsautomatisierung, Kundenservice und Geschäftsprozesse. Steigern Sie Konversion um das 3-fache, reduzieren Sie Personalkosten um 70%. CRM-Integration, automatische Datenprotokollierung, Anrufanalyse. Kostenlose Demo.",
      keywords:
        "Sprach-KI-Assistent, KI-Verkaufsautomatisierung, virtueller Geschäftsassistent, Sprach-Bot für Vertrieb, KI-Concierge, Sprach-Chatbot, Kundenservice-Automatisierung, CRM-Integration KI, conversational AI, voice AI assistant, speech recognition, natural language processing, KI für Unternehmen, Machine Learning Vertrieb, neuronale Netze für Unternehmen, ChatGPT für Unternehmen, DeepSeek-Integration, Grok API, OpenAI GPT-4, Claude AI, Anrufautomatisierung, ausgehende Anrufe KI, Anrufverarbeitung eingehend, Sprachanalyse, Speech Analytics, Callcenter-Automatisierung, IVR-System KI, intelligenter Sekretär, virtueller Operator, KI-Telefonie",
      ogTitle: "AI Solutions M2 — Sprach-KI-Assistenten 24/7 | Vertriebs- & Kundenservice-Automatisierung",
      ogDescription:
        "Automatisieren Sie Vertrieb und Kundenservice mit Sprach-KI-Assistenten. Steigern Sie Konversion um das 3-fache, reduzieren Sie Kosten um 70%. CRM-Integration, Analysen, kostenlose Demo.",
    },
    about: {
      title: "Über AI Solutions M2 — Internationales Team von Experten für Künstliche Intelligenz",
      description:
        "Lernen Sie das AI Solutions M2 Team kennen — internationale Experten aus Russland, GUS, Ukraine und Indien. Unsere Mission, Werte und Büros in Madrid, Moskau und Astana.",
      keywords:
        "AI Solutions Team, Experten künstliche Intelligenz, internationales IT-Unternehmen, KI-Entwicklung, Machine Learning Spezialisten, Büros Russland Spanien Kasachstan",
      ogTitle: "Über AI Solutions M2 — KI-Experten",
      ogDescription:
        "Internationales Team von Experten für künstliche Intelligenz mit Büros in Madrid, Moskau und Astana.",
    },
    blog: {
      title: "AI Solutions M2 Blog — Expertenartikel zur Implementierung Künstlicher Intelligenz im Geschäft",
      description:
        "Lesen Sie Expertenartikel zu KI-Trends, praktische Implementierungsfälle und Tipps zur Optimierung von Geschäftsprozessen mit künstlicher Intelligenz vom AI Solutions M2 Team.",
      keywords:
        "KI-Blog, Artikel künstliche Intelligenz, Machine Learning Fälle, Geschäftsautomatisierung, Sprach-Assistenten Implementierung, KI-Trends 2024, Business-Chatbots",
      ogTitle: "AI Solutions M2 Blog — KI-Artikel",
      ogDescription:
        "Expertenartikel zur Implementierung künstlicher Intelligenz im Geschäft, Fälle und praktische Tipps.",
    },
    cases: {
      title: "AI Solutions M2 Implementierungsfälle — Echte Kundenergebnisse in Verschiedenen Branchen",
      description:
        "Erkunden Sie erfolgreiche KI-Assistenten-Implementierungsprojekte: Sberbank (+40% Verkäufe), Magnit (-60% Servicezeit), Moskauer Regierung (-70% Bearbeitungszeit). Echte ROI-Metriken.",
      keywords:
        "KI-Fälle, Implementierung künstliche Intelligenz, Sprach-Assistenten Ergebnisse, Banking-Automatisierung, KI im Einzelhandel, Regierungs-Digitalisierung, künstliche Intelligenz ROI",
      ogTitle: "AI Solutions M2 Fälle — Echte Ergebnisse",
      ogDescription:
        "Erfolgreiche KI-Assistenten-Implementierungsprojekte in Banking, Einzelhandel und Regierung mit spezifischen Metriken.",
    },
    contacts: {
      title: "Kontakt AI Solutions M2 — Verbinden Sie sich mit KI-Implementierungsexperten",
      description:
        "Kontaktieren Sie das AI Solutions M2 Team für KI-Assistenten-Implementierungsberatung. Büros in Madrid, Moskau und Astana. Kostenlose Beratung und Demo verfügbar.",
      keywords:
        "AI Solutions Kontakte, Beratung künstliche Intelligenz, KI-Assistenten Implementierung, Büros Madrid Moskau Astana, KI-Experten kontaktieren",
      ogTitle: "Kontakt AI Solutions M2",
      ogDescription: "Verbinden Sie sich mit KI-Experten für Beratung und Demo. Büros in Madrid, Moskau und Astana.",
    },
    solutions: {
      title: "KI-Geschäftslösungen — Sprach-Assistenten für Verkauf, Hotels und Automatisierung",
      description:
        "Wählen Sie KI-Lösung für Ihr Geschäft: Sprach-Verkaufsmanager, KI-Hotel-Concierge, KMU-Lösungen, Enterprise-Lösungen und individuelle Entwicklung.",
      keywords:
        "KI-Geschäftslösungen, Sprach-Verkaufsmanager, KI-Hotel-Concierge, Kleinunternehmen-Automatisierung, Enterprise-KI-Lösungen, individuelle KI-Entwicklung",
      ogTitle: "KI-Geschäftslösungen — AI Solutions M2",
      ogDescription:
        "Sprach-KI-Assistenten für Verkauf, Hotels, kleine und große Unternehmen. Individuelle Lösungen verfügbar.",
    },
    "solutions-smb": {
      title: "KI-Lösungen für Kleine und Mittlere Unternehmen — Erschwingliche Verkaufs- und Service-Automatisierung",
      description:
        "KI-Assistenten für kleine und mittlere Unternehmen ab €180/Monat. Verkaufsautomatisierung, Lead-Verarbeitung, CRM-Integration. ROI in 2 Monaten.",
      keywords:
        "KI für Kleinunternehmen, KMU-Automatisierung, erschwinglicher Sprach-Assistent, KI-Verkauf Kleinunternehmen, Startup-Chatbot, zugängliche KI-Lösungen",
      ogTitle: "KI für Kleinunternehmen — ab €180/Monat",
      ogDescription: "Erschwingliche KI-Assistenten für Verkaufs- und Service-Automatisierung in kleinen Unternehmen.",
    },
    "solutions-enterprise": {
      title: "Enterprise-KI-Lösungen — Unternehmens-Sprach-Assistenten für Banken und Regierung",
      description:
        "Unternehmens-KI-Assistenten für Banken, Regierung und große Unternehmen. Hohe Sicherheit, Compliance-Standards, Integration mit Unternehmenssystemen.",
      keywords:
        "Enterprise-KI, Unternehmens-KI-Assistenten, KI für Banken, Regierungs-KI, sichere KI-Lösungen, Compliance-KI, Unternehmens-Automatisierung",
      ogTitle: "Enterprise-KI-Lösungen — Sicherheit und Skalierung",
      ogDescription: "Unternehmens-KI-Assistenten für Banken und Regierung mit hohen Sicherheitsstandards.",
    },
    "solutions-custom": {
      title: "Individuelle KI-Entwicklung — Einzigartige Sprach-Assistenten für Ihre Spezifischen Bedürfnisse",
      description:
        "Individuelle KI-Assistenten-Entwicklung für einzigartige Geschäftsprozesse. F&E-Projekte, Legacy-System-Integration, nicht-standardisierte Algorithmen.",
      keywords:
        "individuelle KI-Entwicklung, maßgeschneiderte KI-Assistenten, einzigartige KI-Lösungen, F&E künstliche Intelligenz, Legacy-KI-Integration, individuelle Algorithmen",
      ogTitle: "Individuelle KI-Entwicklung — Für Ihre Bedürfnisse",
      ogDescription: "Einzigartige KI-Assistenten für spezifische Geschäftsprozesse und F&E-Projekte.",
    },
    "solutions-voice-sales": {
      title: "Sprach-KI-Vertriebsmanager — Automatisierung von Ausgehenden und Eingehenden Anrufen | AI Solutions M2",
      description:
        "Der Sprach-KI-Vertriebsmanager automatisiert den Vertrieb: Bearbeitung eingehender Anfragen, ausgehende Anrufe, Lead-Qualifizierung, Angebotserstellung, Rechnungsstellung. 40% Umsatzsteigerung, 24/7-Betrieb, Integration mit jedem CRM.",
      keywords:
        "Sprach-KI-Vertriebsmanager, KI für Vertrieb, Vertriebsautomatisierung Anrufe, ausgehende Anrufe KI, Anrufverarbeitung eingehend, Lead-Qualifizierung KI, AI sales manager, voice sales automation, outbound calls AI, inbound calls processing, lead qualification AI, sales bot, Vertrieb durch KI, automatische Wahlwiederholung, Kaltakquise KI, Warm-Anruf-Automatisierung",
      ogTitle: "Sprach-KI-Vertriebsmanager — Anrufautomatisierung 24/7",
      ogDescription:
        "Automatisieren Sie den Vertrieb mit einem Sprach-KI-Vertriebsmanager: Anfragenbearbeitung, ausgehende Anrufe, Lead-Qualifizierung. +40% Umsatz, 24/7-Betrieb.",
    },
    "solutions-hotel-concierge": {
      title: "KI-Concierge für Hotels — Automatisierung von Buchungen und Gästeservices 24/7 | AI Solutions M2",
      description:
        "KI-Concierge für Hotels automatisiert Zimmerbuchungen, Gästewünsche, Servicebestellungen und Veranstaltungsinformationen. 60% Reduzierung der Servicezeit, erhöhte Gästezufriedenheit, mehrsprachiger Support.",
      keywords:
        "KI-Hotel-Concierge, Hotelautomatisierung, Zimmerbuchung KI, Hotel-KI-Assistent, Hotel-Concierge-Automatisierung, Gästeservice KI, Hotel-Chatbot, Smart Hotel, Hotelautomatisierung, Rezeptionsautomatisierung, Frontdesk KI, mehrsprachiger Concierge",
      ogTitle: "KI-Concierge für Hotels — Automatisierung des Gästeservices",
      ogDescription:
        "Automatisieren Sie den Gästeservice mit einem KI-Concierge: Buchungen, Anfragen, Services. -60% Servicezeit, 24/7-Betrieb in allen Sprachen.",
    },
    platform: {
      title: "KI-Plattform M2 — Architektur, Demo und Kostenrechner für Sprach-Assistenten",
      description:
        "Erkunden Sie die KI-Plattform M2 Architektur, testen Sie das Sprach-Assistenten-Demo und berechnen Sie Implementierungskosten für Ihr Geschäft.",
      keywords:
        "KI-Plattform Architektur, Sprach-Assistenten Demo, KI-Kostenrechner, KI-technische Dokumentation, Sprach-Assistenten API",
      ogTitle: "KI-Plattform M2 — Demo und Architektur",
      ogDescription: "KI-Plattform Architektur, interaktives Demo und Kostenrechner.",
    },
    "platform-architecture": {
      title: "KI-Plattform M2 Architektur — Technische Dokumentation und Sprach-Assistenten-API",
      description:
        "Detaillierte technische Dokumentation für die KI-Plattform M2: Systemarchitektur, API-Endpunkte, CRM- und Telephonie-Integrationen, Datensicherheit, Skalierbarkeit. Dokumentation für Entwickler.",
      keywords:
        "KI-Plattform Architektur, Sprach-Assistenten API, KI-technische Dokumentation, voice AI API, speech recognition API, NLP API, CRM integration API, telephony API, webhooks AI, REST API AI, GraphQL AI, Microservices-Architektur, Cloud-Architektur KI, KI-System-Sicherheit",
      ogTitle: "KI-Plattform M2 Architektur — Technische Dokumentation",
      ogDescription: "Technische Dokumentation der KI-Plattform M2: Architektur, API, Integrationen, Sicherheit.",
    },
    "platform-demo": {
      title: "Sprach-KI-Assistenten-Demo — Echtzeitfunktionen testen | AI Solutions M2",
      description:
        "Interaktives Demo für Sprach-KI-Assistenten: Testen Sie Spracherkennung, Anfragenverarbeitung, CRM-Integration, Anrufanalyse. Jetzt kostenlos ausprobieren.",
      keywords:
        "KI-Assistenten-Demo, Sprach-Bot-Test, KI kostenlos testen, voice AI demo, AI assistant demo, speech recognition demo, conversational AI demo, interaktives KI-Demo, Sprach-Assistenten-Test, kostenlose KI-Demonstration",
      ogTitle: "Sprach-KI-Assistenten-Demo — Kostenlos testen",
      ogDescription:
        "Testen Sie den Sprach-KI-Assistenten in Echtzeit: Spracherkennung, Anfragenverarbeitung, CRM-Integration. Kostenlos.",
    },
    faq: {
      title: "Häufig gestellte Fragen zu Sprach-KI-Assistenten — FAQ | AI Solutions M2",
      description:
        "Antworten auf häufige Fragen zur Implementierung von Sprach-KI-Assistenten: Kosten, Implementierungszeit, CRM-Integration, Datensicherheit, Sprachunterstützung, Systemtraining.",
      keywords:
        "FAQ KI-Assistenten, Fragen zu Sprach-Bots, Kosten KI-Implementierung, Implementierungszeit KI, Sicherheit KI-Systeme, Fragen CRM-Integration, KI-Assistenten-Training, KI-Support, technischer Support für Sprach-Bots",
      ogTitle: "FAQ — Fragen zu Sprach-KI-Assistenten",
      ogDescription: "Antworten auf häufige Fragen zur Implementierung und Nutzung von Sprach-KI-Assistenten.",
    },
    support: {
      title: "AI Solutions M2 Technischer Support — Hilfe bei Einrichtung und Nutzung von KI-Assistenten",
      description:
        "24/7 Technischer Support von AI Solutions M2: Hilfe bei der Einrichtung, Fehlerbehebung, Optimierungsberatung, Systemaktualisierungen. Support in Russisch, Englisch und anderen Sprachen.",
      keywords:
        "KI-Technischer Support, Sprach-Assistenten-Support, Hilfe bei KI-Einrichtung, KI-Beratung, KI-Fehlerbehebung, AI support, technical support AI, 24/7 Support, mehrsprachiger Support",
      ogTitle: "AI Solutions M2 Technischer Support — 24/7",
      ogDescription: "24/7 Technischer Support: Einrichtung, Fehlerbehebung, Beratung zu KI-Assistenten.",
    },
    privacy: {
      title: "AI Solutions M2 Datenschutzrichtlinie — Schutz personenbezogener Daten und DSGVO-Konformität",
      description:
        "Datenschutzrichtlinie von AI Solutions M2: Verarbeitung personenbezogener Daten, DSGVO- und 152-FZ-Konformität, Sicherheit der Datenspeicherung, Benutzerrechte.",
      keywords:
        "KI-Datenschutzrichtlinie, DSGVO-Konformität, 152-FZ, KI-Datenschutz, KI-personenbezogene Daten, privacy policy AI, data protection AI, Datensicherheit, KI-Datenspeicherung",
      ogTitle: "Datenschutzrichtlinie — AI Solutions M2",
      ogDescription: "Datenschutzrichtlinie: Datenverarbeitung, DSGVO, 152-FZ, Sicherheit.",
    },
    terms: {
      title: "AI Solutions M2 Nutzungsbedingungen — Regeln und Vereinbarungen",
      description:
        "Nutzungsbedingungen der AI Solutions M2 Dienste: Nutzungsregeln, Verantwortlichkeiten der Parteien, Garantien, Einschränkungen, Zahlungsmodalitäten.",
      keywords:
        "KI-Nutzungsbedingungen, Regeln KI-Dienst, KI-Benutzervereinbarung, terms of service AI, legal terms AI, KI-Dienstleistungsvertrag, KI-Nutzungsregeln",
      ogTitle: "Nutzungsbedingungen — AI Solutions M2",
      ogDescription: "Nutzungsbedingungen der AI Solutions M2 Dienste: Regeln, Verantwortlichkeiten, Garantien.",
    },
  },
  nl: {
    home: {
      title: "AI Solutions M2 — Spraak AI-Assistenten voor Verkoopautomatisering en 24/7 Klantenservice",
      description:
        "Implementeer spraak AI-assistenten voor verkoopautomatisering, klantenservice en bedrijfsprocessen. Verhoog conversie met 3x, verminder personeelskosten met 70%. CRM-integratie, automatische gegevensregistratie, gespreksanalyse. Gratis demo beschikbaar.",
      keywords:
        "spraak AI-assistent, AI-verkoopautomatisering, virtuele bedrijfsassistent, spraakbot voor verkoop, AI-concierge, spraakchatbot, klantenserviceautomatisering, CRM-integratie AI, conversational AI, voice AI assistant, speech recognition, natural language processing, AI voor bedrijven, machine learning verkoop, neurale netten voor bedrijven, ChatGPT voor bedrijven, DeepSeek-integratie, Grok API, OpenAI GPT-4, Claude AI, gespreksautomatisering, uitgaande gesprekken AI, verwerking inkomende gesprekken, spraakanalyse, speech analytics, callcenterautomatisering, IVR-systeem AI, slimme secretaresse, virtuele operator, AI-telefonie",
      ogTitle: "AI Solutions M2 — Spraak AI-Assistenten 24/7 | Verkoop- & Klantenserviceautomatisering",
      ogDescription:
        "Automatiseer verkoop en klantenservice met spraak AI-assistenten. Verhoog conversie met 3x, verlaag kosten met 70%. CRM-integratie, analyse, gratis demo.",
    },
    about: {
      title: "Over AI Solutions M2 — Internationaal Team van Kunstmatige Intelligentie Experts",
      description:
        "Leer over het AI Solutions M2 team — internationale experts uit Rusland, GOS, Oekraïne en India. Onze missie, waarden en kantoren in Madrid, Moskou en Astana.",
      keywords:
        "AI Solutions team, kunstmatige intelligentie experts, internationaal IT-bedrijf, AI-ontwikkeling, machine learning specialisten, kantoren Rusland Spanje Kazachstan",
      ogTitle: "Over AI Solutions M2 — AI-Experts",
      ogDescription:
        "Internationaal team van kunstmatige intelligentie experts met kantoren in Madrid, Moskou en Astana.",
    },
    blog: {
      title: "AI Solutions M2 Blog — Expertartikelen over Kunstmatige Intelligentie Implementatie in Bedrijven",
      description:
        "Lees expertartikelen over AI-trends, praktische implementatiecases en tips voor het optimaliseren van bedrijfsprocessen met kunstmatige intelligentie van het AI Solutions M2 team.",
      keywords:
        "AI-blog, kunstmatige intelligentie artikelen, machine learning cases, bedrijfsautomatisering, spraak-assistenten implementatie, AI-trends 2024, zakelijke chatbots",
      ogTitle: "AI Solutions M2 Blog — AI-Artikelen",
      ogDescription:
        "Expertartikelen over kunstmatige intelligentie implementatie in bedrijven, cases en praktische tips.",
    },
    cases: {
      title: "AI Solutions M2 Implementatie Cases — Echte Klantresultaten in Verschillende Industrieën",
      description:
        "Verken succesvolle AI-assistent implementatieprojecten: Sberbank (+40% verkoop), Magnit (-60% servicetijd), Moskou Regering (-70% verwerkingstijd). Echte ROI-statistieken.",
      keywords:
        "AI-cases, kunstmatige intelligentie implementatie, spraak-assistenten resultaten, banking automatisering, AI in retail, overheids-digitalisering, kunstmatige intelligentie ROI",
      ogTitle: "AI Solutions M2 Cases — Echte Resultaten",
      ogDescription:
        "Succesvolle AI-assistent implementatieprojecten in banking, retail en overheid met specifieke statistieken.",
    },
    contacts: {
      title: "Contact AI Solutions M2 — Verbind met AI-Implementatie Experts",
      description:
        "Neem contact op met het AI Solutions M2 team voor AI-assistent implementatieconsultatie. Kantoren in Madrid, Moskou en Astana. Gratis consultatie en demo beschikbaar.",
      keywords:
        "AI Solutions contacten, kunstmatige intelligentie consultatie, AI-assistenten implementatie, kantoren Madrid Moskou Astana, AI-experts contact",
      ogTitle: "Contact AI Solutions M2",
      ogDescription: "Verbind met AI-experts voor consultatie en demo. Kantoren in Madrid, Moskou en Astana.",
    },
    solutions: {
      title: "AI-Bedrijfsoplossingen — Spraak-Assistenten voor Verkoop, Hotels en Automatisering",
      description:
        "Kies AI-oplossing voor uw bedrijf: spraak verkoopmanager, AI-hotel concierge, MKB-oplossingen, Enterprise-oplossingen en maatwerk ontwikkeling.",
      keywords:
        "AI-bedrijfsoplossingen, spraak verkoopmanager, AI-hotel concierge, kleine bedrijven automatisering, enterprise AI-oplossingen, maatwerk AI-ontwikkeling",
      ogTitle: "AI-Bedrijfsoplossingen — AI Solutions M2",
      ogDescription:
        "Spraak AI-assistenten voor verkoop, hotels, kleine en grote bedrijven. Maatwerk oplossingen beschikbaar.",
    },
    "solutions-smb": {
      title: "AI-Oplossingen voor Kleine en Middelgrote Bedrijven — Betaalbare Verkoop- en Service-Automatisering",
      description:
        "AI-assistenten voor kleine en middelgrote bedrijven vanaf €180/maand. Verkoopautomatisering, lead verwerking, CRM-integratie. ROI in 2 maanden.",
      keywords:
        "AI voor kleine bedrijven, MKB-automatisering, betaalbare spraak-assistent, AI-verkoop kleine bedrijven, startup chatbot, toegankelijke AI-oplossingen",
      ogTitle: "AI voor Kleine Bedrijven — vanaf €180/maand",
      ogDescription: "Betaalbare AI-assistenten voor verkoop- en service-automatisering in kleine bedrijven.",
    },
    "solutions-enterprise": {
      title: "Enterprise AI-Oplossingen — Bedrijfs-Spraak-Assistenten voor Banken en Overheid",
      description:
        "Bedrijfs-AI-assistenten voor banken, overheid en grote bedrijven. Hoge beveiliging, compliance-standaarden, integratie met bedrijfssystemen.",
      keywords:
        "Enterprise AI, bedrijfs-AI-assistenten, AI voor banken, overheids-AI, veilige AI-oplossingen, compliance AI, bedrijfsautomatisering",
      ogTitle: "Enterprise AI-Oplossingen — Beveiliging en Schaal",
      ogDescription: "Bedrijfs-AI-assistenten voor banken en overheid met hoge beveiligingsstandaarden.",
    },
    "solutions-custom": {
      title: "Maatwerk AI-Ontwikkeling — Unieke Spraak-Assistenten voor Uw Specifieke Behoeften",
      description:
        "Maatwerk AI-assistent ontwikkeling voor unieke bedrijfsprocessen. O&O-projecten, legacy systeem integratie, niet-standaard algoritmen.",
      keywords:
        "maatwerk AI-ontwikkeling, op maat gemaakte AI-assistenten, unieke AI-oplossingen, O&O kunstmatige intelligentie, legacy AI-integratie, maatwerk algoritmen",
      ogTitle: "Maatwerk AI-Ontwikkeling — Voor Uw Behoeften",
      ogDescription: "Unieke AI-assistenten voor specifieke bedrijfsprocessen en O&O-projecten.",
    },
    "solutions-voice-sales": {
      title: "Spraak AI Verkoopmanager — Automatiseer Uitgaande en Inkomende Gesprekken | AI Solutions M2",
      description:
        "Spraak AI-verkoopmanager automatiseert verkopen: verwerking inkomende leads, uitgaande gesprekken, leadkwalificatie, offerteberekening, facturatie. 40% omzetverhoging, 24/7 werking, integratie met elke CRM.",
      keywords:
        "spraak verkoopmanager, AI voor verkoop, verkoopautomatisering gesprekken, uitgaande gesprekken AI, verwerking inkomende gesprekken, leadkwalificatie AI, AI sales manager, voice sales automation, outbound calls AI, inbound calls processing, lead qualification AI, sales bot, verkoop via AI, automatisch bellen, koude acquisitie AI, warme acquisitie automatisering",
      ogTitle: "Spraak AI Verkoopmanager — Gespreksautomatisering 24/7",
      ogDescription:
        "Automatiseer verkopen met een spraak AI-verkoopmanager: leadverwerking, uitgaande gesprekken, leadkwalificatie. +40% omzet, 24/7 werking.",
    },
    "solutions-hotel-concierge": {
      title: "AI Concierge voor Hotels — Automatiseer Boekingen en Gastenservices 24/7 | AI Solutions M2",
      description:
        "AI concierge voor hotels automatiseert kamerboekingen, gastenverzoeken, servicebestellingen en informatie over evenementen. 60% reductie in servicetijd, verhoogde gasttevredenheid, meertalige ondersteuning.",
      keywords:
        "AI hotel concierge, hotelautomatisering, kamerboeking AI, AI hotelassistent, hotel concierge automatisering, gastenservice AI, hotel chatbot, smart hotel, hotelautomatisering, receptieautomatisering, frontdesk AI, meertalige concierge",
      ogTitle: "AI Concierge voor Hotels — Gastenservice Automatisering",
      ogDescription:
        "Automatiseer gastenservices met een AI concierge: boekingen, verzoeken, services. -60% servicetijd, 24/7 werking in alle talen.",
    },
    platform: {
      title: "AI-Platform M2 — Architectuur, Demo en Kostencalculator voor Spraak-Assistenten",
      description:
        "Verken AI-Platform M2 architectuur, test spraak-assistent demo en bereken implementatiekosten voor uw bedrijf.",
      keywords:
        "AI-platform architectuur, spraak-assistent demo, AI-kostencalculator, AI-technische documentatie, spraak-assistenten API",
      ogTitle: "AI-Platform M2 — Demo en Architectuur",
      ogDescription: "AI-platform architectuur, interactieve demo en kostencalculator.",
    },
    "platform-architecture": {
      title: "AI Platform M2 Architectuur — Technische Documentatie en Spraak-Assistenten API",
      description:
        "Gedetailleerde technische documentatie voor AI Platform M2: systeemarchitectuur, API-endpoints, CRM- en telefonie-integraties, gegevensbeveiliging, schaalbaarheid. Documentatie voor ontwikkelaars.",
      keywords:
        "AI-platform architectuur, spraak-assistenten API, AI technische documentatie, voice AI API, speech recognition API, NLP API, CRM integration API, telephony API, webhooks AI, REST API AI, GraphQL AI, microservices architectuur, cloud architectuur AI, AI-systeembeveiliging",
      ogTitle: "AI Platform M2 Architectuur — Technische Documentatie",
      ogDescription: "Technische documentatie van AI Platform M2: architectuur, API, integraties, beveiliging.",
    },
    "platform-demo": {
      title: "Spraak AI Assistent Demo — Test Realtime Mogelijkheden | AI Solutions M2",
      description:
        "Interactieve demo voor spraak AI-assistent: test spraakherkenning, verwerking van verzoeken, CRM-integratie, gespreksanalyse. Probeer het nu gratis uit.",
      keywords:
        "AI-assistent demo, spraakbot test, probeer AI gratis, voice AI demo, AI assistant demo, speech recognition demo, conversational AI demo, interactieve AI demo, spraak-assistent testen, gratis AI demonstratie",
      ogTitle: "Spraak AI Assistent Demo — Gratis Proberen",
      ogDescription:
        "Test de spraak AI-assistent in realtime: spraakherkenning, verwerking van verzoeken, CRM-integratie. Gratis.",
    },
    faq: {
      title: "Veelgestelde Vragen over Spraak AI-Assistenten — FAQ | AI Solutions M2",
      description:
        "Antwoorden op veelgestelde vragen over implementatie van spraak AI-assistenten: kosten, implementatietijd, CRM-integratie, gegevensbeveiliging, taalondersteuning, systeemt training.",
      keywords:
        "FAQ AI-assistenten, vragen over spraakbots, kosten AI-implementatie, implementatietijd AI, beveiliging AI-systemen, vragen CRM-integratie, training AI-assistent, AI-ondersteuning, technische ondersteuning spraakbots",
      ogTitle: "FAQ — Vragen over Spraak AI-Assistenten",
      ogDescription: "Antwoorden op veelgestelde vragen over implementatie en gebruik van spraak AI-assistenten.",
    },
    support: {
      title: "AI Solutions M2 Technische Ondersteuning — Hulp bij Installatie en Gebruik van AI-Assistenten",
      description:
        "24/7 AI Solutions M2 technische ondersteuning: hulp bij installatie, probleemoplossing, advies over optimalisatie, systeempreviews. Ondersteuning in Russisch, Engels en andere talen.",
      keywords:
        "AI technische ondersteuning, ondersteuning spraak-assistenten, hulp bij AI installatie, AI-consultatie, AI probleemoplossing, AI support, technical support AI, 24/7 ondersteuning, meertalige ondersteuning",
      ogTitle: "AI Solutions M2 Technische Ondersteuning — 24/7",
      ogDescription: "24/7 technische ondersteuning: installatie, probleemoplossing, AI-assistent consultaties.",
    },
    privacy: {
      title: "AI Solutions M2 Privacybeleid — Bescherming Persoonsgegevens en GDPR-naleving",
      description:
        "Privacybeleid van AI Solutions M2: verwerking van persoonsgegevens, naleving van GDPR en 152-FZ, beveiliging van gegevensopslag, gebruikersrechten.",
      keywords:
        "AI privacybeleid, GDPR-naleving, 152-FZ, AI-gegevensbescherming, AI persoonsgegevens, privacy policy AI, data protection AI, gegevensbeveiliging, AI-gegevensopslag",
      ogTitle: "Privacybeleid — AI Solutions M2",
      ogDescription: "Privacybeleid: gegevensverwerking, GDPR, 152-FZ, beveiliging.",
    },
    terms: {
      title: "AI Solutions M2 Gebruiksvoorwaarden — Regels en Overeenkomsten",
      description:
        "Gebruiksvoorwaarden van AI Solutions M2 diensten: gebruiksregels, verantwoordelijkheden van partijen, garanties, beperkingen, betalingsprocedures.",
      keywords:
        "AI gebruiksvoorwaarden, AI service regels, AI gebruikersovereenkomst, terms of service AI, legal terms AI, AI servicecontract, AI gebruiksregels",
      ogTitle: "Gebruiksvoorwaarden — AI Solutions M2",
      ogDescription: "Gebruiksvoorwaarden van AI Solutions M2 diensten: regels, verantwoordelijkheden, garanties.",
    },
  },
  fr: {
    home: {
      title: "AI Solutions M2 — Assistants IA Vocaux pour l'Automatisation des Ventes et Service Client 24/7",
      description:
        "Implémentez des assistants IA vocaux pour l'automatisation des ventes, service client et processus métier. Augmentez la conversion de 3x, réduisez les coûts de personnel de 70%. Intégration CRM, enregistrement automatique des données, analyse des appels. Démo gratuite disponible.",
      keywords:
        "assistant IA vocal, automatisation ventes IA, assistant virtuel entreprise, bot vocal pour ventes, IA concierge, chatbot vocal, automatisation service client, intégration CRM IA, conversational AI, voice AI assistant, speech recognition, natural language processing, IA pour entreprises, machine learning ventes, réseaux neuronaux pour entreprises, ChatGPT pour entreprises, intégration DeepSeek, API Grok, OpenAI GPT-4, Claude AI, automatisation appels, appels sortants IA, traitement appels entrants, analyse vocale, speech analytics, automatisation centre d'appels, système IVR IA, secrétaire intelligent, opérateur virtuel, téléphonie IA",
      ogTitle: "AI Solutions M2 — Assistants IA Vocaux 24/7 | Automatisation des Ventes et du Service Client",
      ogDescription:
        "Automatisez les ventes et le service client avec des assistants IA vocaux. Augmentez la conversion de 3x, réduisez les coûts de 70%. Intégration CRM, analyse, démo gratuite.",
    },
    about: {
      title: "À propos d'AI Solutions M2 — Équipe Internationale d'Experts en Intelligence Artificielle",
      description:
        "Découvrez l'équipe AI Solutions M2 — experts internationaux de Russie, CEI, Ukraine et Inde. Notre mission, valeurs et bureaux à Madrid, Moscou et Astana.",
      keywords:
        "équipe AI Solutions, experts intelligence artificielle, entreprise IT internationale, développement IA, spécialistes machine learning, bureaux Russie Espagne Kazakhstan",
      ogTitle: "À propos d'AI Solutions M2 — Experts IA",
      ogDescription:
        "Équipe internationale d'experts en intelligence artificielle avec bureaux à Madrid, Moscou et Astana.",
    },
    blog: {
      title:
        "Blog AI Solutions M2 — Articles d'Experts sur l'Implémentation de l'Intelligence Artificielle dans les Entreprises",
      description:
        "Lisez des articles d'experts sur les tendances IA, cas pratiques d'implémentation et conseils pour optimiser les processus métier avec l'intelligence artificielle de l'équipe AI Solutions M2.",
      keywords:
        "blog IA, articles intelligence artificielle, cas machine learning, automatisation métier, implémentation assistants vocaux, tendances IA 2024, chatbots entreprise",
      ogTitle: "Blog AI Solutions M2 — Articles IA",
      ogDescription:
        "Articles d'experts sur l'implémentation de l'intelligence artificielle dans les entreprises, cas et conseils pratiques.",
    },
    cases: {
      title: "Cas d'Implémentation AI Solutions M2 — Résultats Réels de Clients dans Diverses Industries",
      description:
        "Explorez des projets d'implémentation d'assistants IA réussis : Sberbank (+40% ventes), Magnit (-60% temps service), Gouvernement Moscou (-70% temps traitement). Métriques ROI réelles.",
      keywords:
        "cas IA, implémentation intelligence artificielle, résultats assistants vocaux, automatisation bancaire, IA dans retail, digitalisation gouvernement, ROI intelligence artificielle",
      ogTitle: "Cas AI Solutions M2 — Résultats Réels",
      ogDescription:
        "Projets d'implémentation d'assistants IA réussis dans la banque, retail et gouvernement avec métriques spécifiques.",
    },
    contacts: {
      title: "Contact AI Solutions M2 — Connectez-vous avec les Experts en Implémentation IA",
      description:
        "Contactez l'équipe AI Solutions M2 pour consultation d'implémentation d'assistants IA. Bureaux à Madrid, Moscou et Astana. Consultation gratuite et démo disponible.",
      keywords:
        "contacts AI Solutions, consultation intelligence artificielle, implémentation assistants IA, bureaux Madrid Moscou Astana, experts IA contact",
      ogTitle: "Contact AI Solutions M2",
      ogDescription:
        "Connectez-vous avec les experts IA pour consultation et démo. Bureaux à Madrid, Moscou et Astana.",
    },
    solutions: {
      title: "Solutions IA Métier — Assistants Vocaux pour Ventes, Hôtels et Automatisation",
      description:
        "Choisissez une solution IA pour votre entreprise : gestionnaire de ventes vocal, concierge IA hôtel, solutions PME, Enterprise et développement sur mesure.",
      keywords:
        "solutions IA métier, gestionnaire ventes vocal, concierge IA hôtel, automatisation petites entreprises, solutions IA enterprise, développement IA sur mesure",
      ogTitle: "Solutions IA Métier — AI Solutions M2",
      ogDescription:
        "Assistants IA vocaux pour ventes, hôtels, petites et grandes entreprises. Solutions sur mesure disponibles.",
    },
    "solutions-smb": {
      title: "Solutions IA pour Petites et Moyennes Entreprises — Automatisation Abordable des Ventes et Service",
      description:
        "Assistants IA pour petites et moyennes entreprises à partir de 180€/mois. Automatisation ventes, traitement leads, intégration CRM. ROI en 2 mois.",
      keywords:
        "IA pour petites entreprises, automatisation PME, assistant vocal abordable, IA ventes petites entreprises, chatbot startup, solutions IA accessibles",
      ogTitle: "IA pour Petites Entreprises — à partir de 180€/mois",
      ogDescription: "Assistants IA abordables pour automatisation des ventes et service dans les petites entreprises.",
    },
    "solutions-enterprise": {
      title: "Solutions IA Enterprise — Assistants Vocaux d'Entreprise pour Banques et Gouvernement",
      description:
        "Assistants IA d'entreprise pour banques, gouvernement et grandes entreprises. Haute sécurité, standards de conformité, intégration avec systèmes d'entreprise.",
      keywords:
        "IA Enterprise, assistants IA d'entreprise, IA pour banques, IA gouvernement, solutions IA sécurisées, conformité IA, automatisation d'entreprise",
      ogTitle: "Solutions IA Enterprise — Sécurité et Échelle",
      ogDescription: "Assistants IA d'entreprise pour banques et gouvernement avec hauts standards de sécurité.",
    },
    "solutions-custom": {
      title: "Développement IA Sur Mesure — Assistants Vocaux Uniques pour Vos Besoins Spécifiques",
      description:
        "Développement sur mesure d'assistants IA pour processus métier uniques. Projets R&D, intégration systèmes legacy, algorithmes non-standard.",
      keywords:
        "développement IA sur mesure, assistants IA personnalisés, solutions IA uniques, R&D intelligence artificielle, intégration IA legacy, algorithmes sur mesure",
      ogTitle: "Développement IA Sur Mesure — Pour Vos Besoins",
      ogDescription: "Assistants IA uniques pour processus métier spécifiques et projets R&D.",
    },
    "solutions-voice-sales": {
      title: "Gestionnaire de Ventes IA Vocal — Automatisation des Appels Sortants et Entrants | AI Solutions M2",
      description:
        "Le gestionnaire de ventes IA vocal automatise les ventes : traitement des leads entrants, appels sortants, qualification des leads, génération de devis, création de factures. Augmentation des ventes de 40%, opération 24/7, intégration avec tout CRM.",
      keywords:
        "gestionnaire ventes IA vocal, IA pour ventes, automatisation ventes appels, appels sortants IA, traitement appels entrants, qualification leads IA, AI sales manager, voice sales automation, outbound calls AI, inbound calls processing, lead qualification AI, sales bot, ventes via IA, numérotation automatique, appels froids IA, automatisation appels chauds",
      ogTitle: "Gestionnaire de Ventes IA Vocal — Automatisation des Appels 24/7",
      ogDescription:
        "Automatisez les ventes avec un gestionnaire de ventes IA vocal : traitement des leads, appels sortants, qualification des leads. +40% ventes, opération 24/7.",
    },
    "solutions-hotel-concierge": {
      title: "Concierge IA pour Hôtels — Automatisation des Réservations et Services Hôtes 24/7 | AI Solutions M2",
      description:
        "Le concierge IA pour hôtels automatise les réservations de chambres, les demandes des clients, les commandes de services et les informations sur les événements. Réduction de 60% du temps de service, satisfaction client accrue, support multilingue.",
      keywords:
        "concierge IA hôtel, automatisation hôtel, réservation chambres IA, assistant IA hôtel, automatisation concierge hôtel, service clients IA, chatbot hôtel, hôtel intelligent, automatisation hôtellerie, automatisation réception, front desk IA, concierge multilingue",
      ogTitle: "Concierge IA pour Hôtels — Automatisation des Services Hôtes",
      ogDescription:
        "Automatisez les services clients avec un concierge IA : réservations, demandes, services. -60% temps de service, opération 24/7 dans toutes les langues.",
    },
    platform: {
      title: "Plateforme IA M2 — Architecture, Démo et Calculateur de Coûts pour Assistants Vocaux",
      description:
        "Explorez l'architecture de la Plateforme IA M2, testez la démo d'assistant vocal et calculez les coûts d'implémentation pour votre entreprise.",
      keywords:
        "architecture plateforme IA, démo assistant vocal, calculateur coûts IA, documentation technique IA, API assistants vocaux",
      ogTitle: "Plateforme IA M2 — Démo et Architecture",
      ogDescription: "Architecture de plateforme IA, démo interactive et calculateur de coûts.",
    },
    "platform-architecture": {
      title: "Architecture Plateforme IA M2 — Documentation Technique et API Assistants Vocaux",
      description:
        "Documentation technique détaillée pour la Plateforme IA M2 : architecture du système, points d'API, intégrations CRM et téléphonie, sécurité des données, scalabilité. Documentation pour développeurs.",
      keywords:
        "architecture plateforme IA, API assistants vocaux, documentation technique IA, voice AI API, speech recognition API, NLP API, CRM integration API, telephony API, webhooks AI, REST API AI, GraphQL AI, architecture microservices, architecture cloud IA, sécurité systèmes IA",
      ogTitle: "Architecture Plateforme IA M2 — Documentation Technique",
      ogDescription: "Documentation technique de la Plateforme IA M2 : architecture, API, intégrations, sécurité.",
    },
    "platform-demo": {
      title: "Démo Assistant IA Vocal — Testez les Capacités en Temps Réel | AI Solutions M2",
      description:
        "Démo interactif d'assistant IA vocal : testez la reconnaissance vocale, le traitement des requêtes, l'intégration CRM, l'analyse des appels. Essayez gratuitement dès maintenant.",
      keywords:
        "démo assistant IA, test bot vocal, essayer IA gratuit, voice AI demo, AI assistant demo, speech recognition demo, conversational AI demo, démo IA interactive, test assistant vocal, démonstration IA gratuite",
      ogTitle: "Démo Assistant IA Vocal — Essayez Gratuitement",
      ogDescription:
        "Testez l'assistant IA vocal en temps réel : reconnaissance vocale, traitement des requêtes, intégration CRM. Gratuit.",
    },
    faq: {
      title: "Questions Fréquemment Posées sur les Assistants IA Vocaux — FAQ | AI Solutions M2",
      description:
        "Réponses aux questions fréquentes sur l'implémentation des assistants IA vocaux : coût, délais d'implémentation, intégration CRM, sécurité des données, support linguistique, formation du système.",
      keywords:
        "FAQ assistants IA, questions sur les bots vocaux, coût implémentation IA, délais implémentation IA, sécurité systèmes IA, questions intégration CRM, formation assistant IA, support IA, support technique bots vocaux",
      ogTitle: "FAQ — Questions sur les Assistants IA Vocaux",
      ogDescription:
        "Réponses aux questions fréquentes sur l'implémentation et l'utilisation des assistants IA vocaux.",
    },
    support: {
      title: "Support Technique AI Solutions M2 — Aide à la Configuration et à l'Utilisation des Assistants IA",
      description:
        "Support technique AI Solutions M2 24/7 : assistance à la configuration, résolution de problèmes, conseils d'optimisation, mises à jour système. Support en russe, anglais et autres langues.",
      keywords:
        "support technique IA, support assistants vocaux, aide configuration IA, consultation IA, dépannage IA, AI support, technical support AI, support 24/7, support multilingue",
      ogTitle: "Support Technique AI Solutions M2 — 24/7",
      ogDescription:
        "Support technique 24/7 : configuration, résolution de problèmes, consultations sur les assistants IA.",
    },
    privacy: {
      title: "Politique de Confidentialité AI Solutions M2 — Protection des Données Personnelles et Conformité GDPR",
      description:
        "Politique de confidentialité AI Solutions M2 : traitement des données personnelles, conformité GDPR et 152-FZ, sécurité du stockage des données, droits des utilisateurs.",
      keywords:
        "politique confidentialité IA, conformité GDPR, 152-FZ, protection données IA, données personnelles IA, privacy policy AI, data protection AI, sécurité données, stockage données IA",
      ogTitle: "Politique de Confidentialité — AI Solutions M2",
      ogDescription: "Politique de confidentialité : traitement des données, GDPR, 152-FZ, sécurité.",
    },
    terms: {
      title: "Conditions d'Utilisation AI Solutions M2 — Règles et Accords",
      description:
        "Conditions d'utilisation des services AI Solutions M2 : règles d'utilisation, responsabilités des parties, garanties, limitations, procédures de paiement.",
      keywords:
        "conditions utilisation IA, règles service IA, accord utilisateur IA, terms of service AI, legal terms AI, contrat services IA, règles utilisation IA",
      ogTitle: "Conditions d'Utilisation — AI Solutions M2",
      ogDescription: "Conditions d'utilisation des services AI Solutions M2 : règles, responsabilités, garanties.",
    },
  },
}

export function getSEOMetadata(locale: Locale, pageType: SEOPageType): SEOMetadata {
  try {
    const localeData = seoTranslations[locale]
    if (localeData && localeData[pageType]) {
      return localeData[pageType]
    }

    // Fallback to Russian
    const fallbackData = seoTranslations.ru
    if (fallbackData && fallbackData[pageType]) {
      return fallbackData[pageType]
    }

    // Final fallback
    return {
      title: "AI Solutions M2",
      description: "Voice AI assistants for business automation",
      keywords: "AI, voice assistant, automation, business",
    }
  } catch (error) {
    console.warn(`SEO metadata error for locale "${locale}" and page "${pageType}":`, error)
    return {
      title: "AI Solutions M2",
      description: "Voice AI assistants for business automation",
      keywords: "AI, voice assistant, automation, business",
    }
  }
}
