"use client"

import type { Locale } from "./config"

export type { Locale } from "./config"

export type TranslationKey =
  // Navigation
  | "nav.solutions"
  | "nav.platform"
  | "nav.cases"
  | "nav.blog"
  | "nav.about"
  | "nav.contacts"
  | "nav.login"
  | "nav.signup"
  | "nav.home"
  | "nav.main"
  | "nav.mobile"
  | "nav.openMenu"
  | "nav.closeMenu"
  // Footer navigation
  | "nav.company"
  | "nav.resources"
  | "nav.legal"
  | "nav.offices"
  // CTA buttons
  | "cta.tryFree"
  | "cta.requestDemo"
  | "cta.listenDemo"
  | "cta.call"
  | "cta.calculate"
  | "cta.downloadPitch"
  | "cta.readMore"
  | "cta.learnMore"
  | "cta.getStarted"
  | "cta.contactUs"
  | "cta.backToHome"
  // Hero section
  | "hero.title"
  | "hero.subtitle"
  | "hero.description"
  | "hero.consistentScripts"
  | "hero.consistentScriptsDesc"
  | "hero.fullIntegration"
  | "hero.fullIntegrationDesc"
  | "hero.analytics"
  | "hero.analyticsDesc"
  | "hero.scalability"
  | "hero.scalabilityDesc"
  | "hero.trustedBy"
  | "hero.demoTitle"
  | "hero.online"
  | "hero.aiGreeting"
  | "hero.userMessage"
  | "hero.aiResponse"
  | "hero.you"
  | "howItWorks.title"
  | "howItWorks.description"
  | "howItWorks.step1.title"
  | "howItWorks.step1.description"
  | "howItWorks.step2.title"
  | "howItWorks.step2.description"
  | "howItWorks.step3.title"
  | "howItWorks.step3.description"
  | "howItWorks.step4.title"
  | "howItWorks.step4.description"
  | "howItWorks.responseTime"
  // Solutions
  | "solutions.voiceSalesManager"
  | "solutions.hotelConcierge"
  | "solutions.smb"
  | "solutions.enterprise"
  | "solutions.custom"
  // Platform
  | "platform.architecture"
  | "platform.demo"
  | "platform.calculator"
  // About page
  | "about.title"
  | "about.subtitle"
  | "about.description"
  | "about.mission.title"
  | "about.mission.description"
  | "about.values.title"
  | "about.values.innovation"
  | "about.values.innovationDesc"
  | "about.values.quality"
  | "about.values.qualityDesc"
  | "about.values.transparency"
  | "about.values.transparencyDesc"
  | "about.values.partnership"
  | "about.values.partnershipDesc"
  | "about.team.title"
  | "about.team.description"
  | "about.offices.title"
  | "about.offices.description"
  // Blog page
  | "blog.title"
  | "blog.subtitle"
  | "blog.description"
  | "blog.readMore"
  | "blog.categories.all"
  | "blog.categories.ai"
  | "blog.categories.business"
  | "blog.categories.technology"
  | "blog.search.placeholder"
  | "blog.newsletter.title"
  | "blog.newsletter.description"
  | "blog.newsletter.placeholder"
  | "blog.newsletter.subscribe"
  // Cases page
  | "cases.title"
  | "cases.subtitle"
  | "cases.description"
  | "cases.viewDetails"
  | "cases.results"
  | "cases.challenge"
  | "cases.solution"
  | "cases.outcome"
  // Contacts page
  | "contacts.title"
  | "contacts.subtitle"
  | "contacts.description"
  | "contacts.form.title"
  | "contacts.form.name"
  | "contacts.form.email"
  | "contacts.form.company"
  | "contacts.form.message"
  | "contacts.form.send"
  | "contacts.offices.title"
  | "contacts.social.title"
  // Common
  | "common.loading"
  | "common.error"
  | "common.success"
  | "common.close"
  | "common.open"
  | "common.save"
  | "common.cancel"
  | "common.submit"
  | "common.search"
  | "benefits.title"
  | "benefits.description"
  | "benefits.availability.title"
  | "benefits.availability.description"
  | "benefits.availability.stats"
  | "benefits.parallel.title"
  | "benefits.parallel.description"
  | "benefits.parallel.stats"
  | "benefits.conversion.title"
  | "benefits.conversion.description"
  | "benefits.conversion.stats"
  | "benefits.security.title"
  | "benefits.security.description"
  | "benefits.security.stats"
  | "benefits.calculations.title"
  | "benefits.calculations.description"
  | "benefits.calculations.stats"
  | "benefits.analytics.title"
  | "benefits.analytics.description"
  | "benefits.analytics.stats"
  | "benefits.comparison.title"
  | "benefits.comparison.managers"
  | "benefits.comparison.ai"
  | "benefits.comparison.savings"
  | "benefits.comparison.multiplier"
  | "benefits.comparison.description"
  // Solutions section
  | "solutions.title"
  | "solutions.description"
  | "solutions.sales.title"
  | "solutions.sales.description"
  | "solutions.sales.feature1"
  | "solutions.sales.feature2"
  | "solutions.sales.feature3"
  | "solutions.sales.feature4"
  | "solutions.hotel.title"
  | "solutions.hotel.description"
  | "solutions.hotel.feature1"
  | "solutions.hotel.feature2"
  | "solutions.hotel.feature3"
  | "solutions.hotel.feature4"
  | "solutions.smb.title"
  | "solutions.smb.description"
  | "solutions.smb.feature1"
  | "solutions.smb.feature2"
  | "solutions.smb.feature3"
  | "solutions.smb.feature4"
  | "solutions.enterprise.title"
  | "solutions.enterprise.description"
  | "solutions.enterprise.feature1"
  | "solutions.enterprise.feature2"
  | "solutions.enterprise.feature3"
  | "solutions.enterprise.feature4"
  | "solutions.custom.title"
  | "solutions.custom.description"
  | "solutions.custom.cta1"
  | "solutions.custom.cta2"
  | "solutions.learnMore"
  // Demo section
  | "demo.title"
  | "demo.description"
  | "demo.voiceDemo.title"
  | "demo.voiceDemo.description"
  | "demo.scenario.label"
  | "demo.scenario.sales"
  | "demo.scenario.salesDesc"
  | "demo.scenario.hotel"
  | "demo.scenario.hotelDesc"
  | "demo.listening"
  | "demo.clickToStart"
  | "demo.transcript.title"
  | "demo.transcript.ai"
  | "demo.transcript.you"
  | "demo.transcript.greeting"
  | "demo.transcript.userQuestion"
  | "demo.transcript.aiResponse"
  | "demo.phone.title"
  | "demo.phone.description"
  | "demo.phone.number"
  | "demo.phone.callNow"
  | "demo.phone.notice"
  | "demo.examples.title"
  | "demo.examples.restaurant"
  | "demo.examples.hotelOrder"
  | "demo.examples.objections"
  | "demo.examples.duration"
  | "demo.privacy"
  // CTA section
  | "cta.title"
  | "cta.description"
  | "cta.calculateCost"
  | "cta.calculateDesc"
  | "cta.viewCases"
  | "cta.viewCasesDesc"
  | "cta.callNow"
  | "cta.phoneNumber"
  | "cta.freeTest"
  | "cta.setupTime"
  | "cta.support247"
  // Voice Sales Manager page
  | "voiceSales.badge"
  | "voiceSales.title"
  | "voiceSales.description"
  | "voiceSales.benefit1"
  | "voiceSales.benefit2"
  | "voiceSales.benefit3"
  | "voiceSales.aiManager"
  | "voiceSales.online"
  | "voiceSales.greeting"
  | "voiceSales.quickResponse"
  | "voiceSales.personalization"
  | "voiceSales.crmIntegration"
  | "voiceSales.analytics"
  | "voiceSales.problemsTitle"
  | "voiceSales.problemsSubtitle"
  | "voiceSales.problem1.title"
  | "voiceSales.problem1.description"
  | "voiceSales.problem2.title"
  | "voiceSales.problem2.description"
  | "voiceSales.problem3.title"
  | "voiceSales.problem3.description"
  | "voiceSales.solutionsTitle"
  | "voiceSales.solutionsSubtitle"
  | "voiceSales.solution1.title"
  | "voiceSales.solution1.description"
  | "voiceSales.solution2.title"
  | "voiceSales.solution2.description"
  | "voiceSales.solution3.title"
  | "voiceSales.solution3.description"
  | "voiceSales.solution4.title"
  | "voiceSales.solution4.description"
  | "voiceSales.solution5.title"
  | "voiceSales.solution5.description"
  | "voiceSales.integrationsTitle"
  | "voiceSales.integrationsSubtitle"
  | "voiceSales.integration1.name"
  | "voiceSales.integration1.description"
  | "voiceSales.integration2.name"
  | "voiceSales.integration2.description"
  | "voiceSales.integration3.name"
  | "voiceSales.integration3.description"
  | "voiceSales.integration4.name"
  | "voiceSales.integration4.description"
  | "voiceSales.scenariosTitle"
  | "voiceSales.scenariosSubtitle"
  | "voiceSales.scenario1.title"
  | "voiceSales.scenario1.description"
  | "voiceSales.scenario2.title"
  | "voiceSales.scenario2.description"
  | "voiceSales.scenario3.title"
  | "voiceSales.scenario3.description"
  | "voiceSales.listenFullDialogue"
  | "voiceSales.resultsTitle"
  | "voiceSales.resultsSubtitle"
  | "voiceSales.kpi1.metric"
  | "voiceSales.kpi1.before"
  | "voiceSales.kpi1.after"
  | "voiceSales.kpi1.improvement"
  | "voiceSales.kpi2.metric"
  | "voiceSales.kpi2.before"
  | "voiceSales.kpi2.after"
  | "voiceSales.kpi2.improvement"
  | "voiceSales.kpi3.metric"
  | "voiceSales.kpi3.before"
  | "voiceSales.kpi3.after"
  | "voiceSales.kpi3.improvement"
  | "voiceSales.kpi4.metric"
  | "voiceSales.kpi4.before"
  | "voiceSales.kpi4.after"
  | "voiceSales.kpi4.improvement"
  | "voiceSales.casesTitle"
  | "voiceSales.casesSubtitle"
  | "voiceSales.pricingTitle"
  | "voiceSales.pricingSubtitle"
  | "voiceSales.pricing.setup"
  | "voiceSales.pricing.setupPrice"
  | "voiceSales.pricing.setupDesc"
  | "voiceSales.pricing.perMinute"
  | "voiceSales.pricing.perMinutePrice"
  | "voiceSales.pricing.perMinuteDesc"
  | "voiceSales.pricing.support"
  | "voiceSales.pricing.supportPrice"
  | "voiceSales.pricing.supportDesc"
  | "voiceSales.faqTitle"
  | "voiceSales.ctaTitle"
  | "voiceSales.ctaDescription"
  // New keys from updates
  | "voiceSales.problemsBadge"
  | "voiceSales.solutionsBadge"
  | "voiceSales.integrationsBadge"
  | "voiceSales.scenariosBadge"
  | "voiceSales.resultsBadge"
  | "voiceSales.casesBadge"
  | "voiceSales.pricingBadge"
  | "voiceSales.faqBadge"
  | "voiceSales.scenario1.dialogue1"
  | "voiceSales.scenario1.dialogue2"
  | "voiceSales.scenario1.dialogue3"
  | "voiceSales.scenario2.dialogue1"
  | "voiceSales.scenario2.dialogue2"
  | "voiceSales.scenario2.dialogue3"
  | "voiceSales.scenario3.dialogue1"
  | "voiceSales.scenario3.dialogue2"
  | "voiceSales.scenario3.dialogue3"
  | "voiceSales.before"
  | "voiceSales.after"
  | "voiceSales.case1.title"
  | "voiceSales.case1.description"
  | "voiceSales.case1.result1"
  | "voiceSales.case1.result2"
  | "voiceSales.case1.result3"
  | "voiceSales.case2.title"
  | "voiceSales.case2.description"
  | "voiceSales.case2.result1"
  | "voiceSales.case2.result2"
  | "voiceSales.case2.result3"
  | "voiceSales.case3.title"
  | "voiceSales.case3.description"
  | "voiceSales.case3.result1"
  | "voiceSales.case3.result2"
  | "voiceSales.case3.result3"
  | "voiceSales.readMore"
  | "voiceSales.setup"
  | "voiceSales.perMinute"
  | "voiceSales.support"
  | "voiceSales.setupCost"
  | "voiceSales.perMinuteCost"
  | "voiceSales.supportCost"
  | "voiceSales.faq1.question"
  | "voiceSales.faq1.answer"
  | "voiceSales.faq2.question"
  | "voiceSales.faq2.answer"
  | "voiceSales.faq3.question"
  | "voiceSales.faq3.answer"
  | "voiceSales.faq4.question"
  | "voiceSales.faq4.answer"
  | "voiceSales.startToday"
  | "voiceSales.startTodayDescription"
  // New keys for hotel concierge
  | "hotelConcierge.badge"
  | "hotelConcierge.title"
  | "hotelConcierge.description"
  | "hotelConcierge.benefit1"
  | "hotelConcierge.benefit2"
  | "hotelConcierge.benefit3"
  | "hotelConcierge.functionsTitle"
  | "hotelConcierge.functionsSubtitle"
  | "hotelConcierge.function1.title"
  | "hotelConcierge.function1.description"
  | "hotelConcierge.function2.title"
  | "hotelConcierge.function2.description"
  | "hotelConcierge.function3.title"
  | "hotelConcierge.function3.description"
  | "hotelConcierge.function4.title"
  | "hotelConcierge.function4.description"
  | "hotelConcierge.function5.title"
  | "hotelConcierge.function5.description"
  | "hotelConcierge.function6.title"
  | "hotelConcierge.function6.description"
  | "hotelConcierge.channelsTitle"
  | "hotelConcierge.channelsSubtitle"
  | "hotelConcierge.channel1.name"
  | "hotelConcierge.channel1.description"
  | "hotelConcierge.channel2.name"
  | "hotelConcierge.channel2.description"
  | "hotelConcierge.channel3.name"
  | "hotelConcierge.channel3.description"
  | "hotelConcierge.channel4.name"
  | "hotelConcierge.channel4.description"
  | "hotelConcierge.scenariosTitle"
  | "hotelConcierge.scenariosSubtitle"
  | "hotelConcierge.scenario1.title"
  | "hotelConcierge.scenario1.description"
  | "hotelConcierge.scenario1.dialogue1"
  | "hotelConcierge.scenario1.dialogue2"
  | "hotelConcierge.scenario1.dialogue3"
  | "hotelConcierge.scenario1.dialogue4"
  | "hotelConcierge.scenario1.dialogue5"
  | "hotelConcierge.scenario1.dialogue6"
  | "hotelConcierge.scenario2.title"
  | "hotelConcierge.scenario2.description"
  | "hotelConcierge.scenario2.dialogue1"
  | "hotelConcierge.scenario2.dialogue2"
  | "hotelConcierge.scenario2.dialogue3"
  | "hotelConcierge.scenario2.dialogue4"
  | "hotelConcierge.scenario3.title"
  | "hotelConcierge.scenario3.description"
  | "hotelConcierge.scenario3.dialogue1"
  | "hotelConcierge.scenario3.dialogue2"
  | "hotelConcierge.scenario3.dialogue3"
  | "hotelConcierge.scenario3.dialogue4"
  | "hotelConcierge.listenDialogue"
  | "hotelConcierge.demoTitle"
  | "hotelConcierge.demoSubtitle"
  | "hotelConcierge.demoReady"
  | "hotelConcierge.demoDescription"
  | "hotelConcierge.startConversation"
  | "hotelConcierge.callDemo"
  | "hotelConcierge.integrationsTitle"
  | "hotelConcierge.integrationsSubtitle"
  | "hotelConcierge.integration1.name"
  | "hotelConcierge.integration1.description"
  | "hotelConcierge.integration2.name"
  | "hotelConcierge.integration2.description"
  | "hotelConcierge.integration3.name"
  | "hotelConcierge.integration3.description"
  | "hotelConcierge.integration4.name"
  | "hotelConcierge.integration4.description"
  | "hotelConcierge.casesTitle"
  | "hotelConcierge.casesSubtitle"
  | "hotelConcierge.case1.title"
  | "hotelConcierge.case1.description"
  | "hotelConcierge.case1.result1"
  | "hotelConcierge.case1.result2"
  | "hotelConcierge.case1.result3"
  | "hotelConcierge.case2.title"
  | "hotelConcierge.case2.description"
  | "hotelConcierge.case2.result1"
  | "hotelConcierge.case2.result2"
  | "hotelConcierge.case2.result3"
  | "hotelConcierge.readFullCase"
  | "hotelConcierge.packagesTitle"
  | "hotelConcierge.packagesSubtitle"
  | "hotelConcierge.package1.name"
  | "hotelConcierge.package1.description"
  | "hotelConcierge.package1.price"
  | "hotelConcierge.package1.feature1"
  | "hotelConcierge.package1.feature2"
  | "hotelConcierge.package1.feature3"
  | "hotelConcierge.package2.name"
  | "hotelConcierge.package2.description"
  | "hotelConcierge.package2.price"
  | "hotelConcierge.package2.feature1"
  | "hotelConcierge.package2.feature2"
  | "hotelConcierge.package2.feature3"
  | "hotelConcierge.package2.feature4"
  | "hotelConcierge.package3.name"
  | "hotelConcierge.package3.description"
  | "hotelConcierge.package3.price"
  | "hotelConcierge.package3.feature1"
  | "hotelConcierge.package3.feature2"
  | "hotelConcierge.package3.feature3"
  | "hotelConcierge.package3.feature4"
  | "hotelConcierge.popular"
  | "hotelConcierge.selectPackage"
  | "hotelConcierge.faqTitle"
  | "hotelConcierge.faq1.question"
  | "hotelConcierge.faq1.answer"
  | "hotelConcierge.faq2.question"
  | "hotelConcierge.faq2.answer"
  | "hotelConcierge.faq3.question"
  | "hotelConcierge.faq3.answer"
  | "hotelConcierge.faq4.question"
  | "hotelConcierge.faq4.answer"
  | "hotelConcierge.ctaTitle"
  | "hotelConcierge.ctaDescription"
  | "hotelConcierge.aiConcierge"
  | "hotelConcierge.readyToHelp"
  | "hotelConcierge.welcomeMessage"
  | "hotelConcierge.quickAction1"
  | "hotelConcierge.quickAction2"
  | "hotelConcierge.quickAction3"
  | "hotelConcierge.quickAction4"
  | "hotelConcierge.guest"
  | "hotelConcierge.ai"

const translations: Readonly<Record<Locale, Record<TranslationKey, string>>> = {
  ru: {
    // Navigation
    "nav.solutions": "Решения",
    "nav.platform": "Платформа",
    "nav.cases": "Кейсы",
    "nav.blog": "Блог",
    "nav.about": "О компании",
    "nav.contacts": "Контакты",
    "nav.login": "Войти",
    "nav.signup": "Регистрация",
    "nav.home": "Главная страница AI Solutions",
    "nav.main": "Основная навигация",
    "nav.mobile": "Мобильная навигация",
    "nav.openMenu": "Открыть меню",
    "nav.closeMenu": "Закрыть меню",
    // Footer navigation
    "nav.company": "О компании",
    "nav.resources": "Документация",
    "nav.legal": "Политика конфиденциальности",
    "nav.offices": "Наши офисы",
    // CTA buttons
    "cta.tryFree": "Попробовать бесплатно",
    "cta.requestDemo": "Запросить демо",
    "cta.listenDemo": "Послушать демо",
    "cta.call": "Позвонить",
    "cta.calculate": "Рассчитать стоимость",
    "cta.downloadPitch": "Скачать презентацию",
    "cta.readMore": "Читать далее",
    "cta.learnMore": "Узнать больше",
    "cta.getStarted": "Начать работу",
    "cta.contactUs": "Связаться с нами",
    "cta.backToHome": "На главную",
    // Hero section
    "hero.title": "Голосовые AI-ассистенты, которые продают и обслуживают клиентов 24/7",
    "hero.subtitle": "",
    "hero.description":
      "Автоматизируйте весь путь клиента: от первой заявки до выставления счёта и подтверждения получения. В 10× больше обработанных обращений без очередей.",
    "hero.consistentScripts": "Консистентные скрипты",
    "hero.consistentScriptsDesc": "Персональные предложения и мгновенные расчёты",
    "hero.fullIntegration": "Полная интеграция",
    "hero.fullIntegrationDesc": "CRM, биллинг, склад, доставка",
    "hero.analytics": "Аналитика разговоров",
    "hero.analyticsDesc": "Непрерывное улучшение результатов",
    "hero.scalability": "Масштабируемость",
    "hero.scalabilityDesc": "От стартапа до Enterprise",
    "hero.trustedBy": "Нам доверяют компании из разных отраслей",
    "hero.demoTitle": "AI-ассистент в действии",
    "hero.online": "Онлайн",
    "hero.aiGreeting": "Здравствуйте! Меня зовут Анна, я AI-ассистент компании. Чем могу помочь?",
    "hero.userMessage": "Хочу узнать стоимость вашего решения для отеля",
    "hero.aiResponse": "Отлично! Сколько номеров в вашем отеле? Это поможет мне рассчитать точную стоимость.",
    "hero.you": "Вы",
    "howItWorks.title": "Как работает AI-ассистент",
    "howItWorks.description": "Полный цикл обработки клиентских запросов от первого контакта до завершения сделки",
    "howItWorks.step1.title": "Входящий контакт",
    "howItWorks.step1.description": "Клиент звонит, пишет в чат или мессенджер. AI мгновенно отвечает на любом канале.",
    "howItWorks.step2.title": "Распознавание и анализ",
    "howItWorks.step2.description": "Система понимает запрос, определяет намерения и извлекает ключевую информацию.",
    "howItWorks.step3.title": "Логика и действия",
    "howItWorks.step3.description":
      "AI применяет бизнес-правила, делает расчёты, создаёт документы и выполняет операции.",
    "howItWorks.step4.title": "Аналитика и улучшение",
    "howItWorks.step4.description": "Все диалоги записываются и анализируются для постоянного улучшения качества.",
    "howItWorks.responseTime": "Среднее время ответа: менее 2 секунд",
    // Solutions
    "solutions.voiceSalesManager": "Голосовой менеджер продаж",
    "solutions.hotelConcierge": "Консьерж для отелей",
    "solutions.smb": "Для малого и среднего бизнеса",
    "solutions.enterprise": "Enterprise / Госсектор / Банки",
    "solutions.custom": "Индивидуальные разработки",
    // Platform
    "platform.architecture": "Архитектура",
    "platform.demo": "Демонстрация",
    "platform.calculator": "Калькулятор стоимости",
    // About page
    "about.title": "О компании AI Solutions",
    "about.subtitle": "Международная команда экспертов по искусственному интеллекту",
    "about.description":
      "Мы объединили лучших специалистов из России, СНГ, Украины и Индии для создания передовых AI-решений, которые трансформируют бизнес-процессы компаний по всему миру.",
    "about.mission.title": "Наша миссия",
    "about.mission.description":
      "Демократизировать доступ к передовым AI-технологиям, делая их доступными для компаний любого размера — от стартапов до крупных корпораций.",
    "about.values.title": "Наши ценности",
    "about.values.innovation": "Инновации",
    "about.values.innovationDesc": "Постоянно внедряем новейшие технологии и подходы",
    "about.values.quality": "Качество",
    "about.values.qualityDesc": "Высочайшие стандарты разработки и тестирования",
    "about.values.transparency": "Прозрачность",
    "about.values.transparencyDesc": "Открытое общение и честные отношения с клиентами",
    "about.values.partnership": "Партнёрство",
    "about.values.partnershipDesc": "Долгосрочные отношения, основанные на взаимном успехе",
    "about.team.title": "Международная команда",
    "about.team.description":
      "Наша команда объединяет талантливых специалистов из разных стран, каждый из которых привносит уникальный опыт и экспертизу в области искусственного интеллекта.",
    "about.offices.title": "Наши офисы",
    "about.offices.description":
      "Мы работаем из трёх ключевых локаций, обеспечивая круглосуточную поддержку клиентов по всему миру.",
    // Blog page
    "blog.title": "Блог AI Solutions",
    "blog.subtitle": "Экспертные статьи о внедрении искусственного интеллекта в бизнес",
    "blog.description":
      "Актуальные материалы о трендах AI, практические кейсы внедрения и советы по оптимизации бизнес-процессов с помощью искусственного интеллекта.",
    "blog.readMore": "Читать далее",
    "blog.categories.all": "Все категории",
    "blog.categories.ai": "Искусственный интеллект",
    "blog.categories.business": "Бизнес",
    "blog.categories.technology": "Технологии",
    "blog.search.placeholder": "Поиск по статьям...",
    "blog.newsletter.title": "Подписка на новости",
    "blog.newsletter.description": "Получайте свежие статьи и новости о развитии AI-технологий",
    "blog.newsletter.placeholder": "Ваш email",
    "blog.newsletter.subscribe": "Подписаться",
    // Cases page
    "cases.title": "Кейсы внедрения AI Solutions",
    "cases.subtitle": "Реальные результаты наших клиентов",
    "cases.description":
      "Изучите успешные проекты внедрения AI-ассистентов в различных отраслях и узнайте, как наши решения помогают компаниям увеличивать продажи и оптимизировать процессы.",
    "cases.viewDetails": "Подробнее",
    "cases.results": "Результаты",
    "cases.challenge": "Вызов",
    "cases.solution": "Решение",
    "cases.outcome": "Результат",
    // Contacts page
    "contacts.title": "Свяжитесь с нами",
    "contacts.subtitle": "Готовы обсудить ваш проект?",
    "contacts.description":
      "Наша команда экспертов готова помочь вам внедрить AI-решения в ваш бизнес. Свяжитесь с нами любым удобным способом.",
    "contacts.form.title": "Отправить сообщение",
    "contacts.form.name": "Имя",
    "contacts.form.email": "Email",
    "contacts.form.company": "Компания",
    "contacts.form.message": "Сообщение",
    "contacts.form.send": "Отправить",
    "contacts.offices.title": "Наши офисы",
    "contacts.social.title": "Социальные сети",
    // Common
    "common.loading": "Загрузка...",
    "common.error": "Ошибка",
    "common.success": "Успешно",
    "common.close": "Закрыть",
    "common.open": "Открыть",
    "common.save": "Сохранить",
    "common.cancel": "Отмена",
    "common.submit": "Отправить",
    "common.search": "Поиск",

    "benefits.title": "Преимущества перед обычными менеджерами",
    "benefits.description": "AI-ассистент работает эффективнее целого отдела продаж при значительно меньших затратах",
    "benefits.availability.title": "24/7 доступность",
    "benefits.availability.description":
      "Никаких выходных, отпусков или больничных. Ваши клиенты получают помощь в любое время.",
    "benefits.availability.stats": "Обработка звонков круглосуточно",
    "benefits.parallel.title": "Параллельная обработка",
    "benefits.parallel.description": "Одновременная работа с сотнями клиентов без потери качества обслуживания.",
    "benefits.parallel.stats": "До 1000+ одновременных диалогов",
    "benefits.conversion.title": "Стабильная конверсия",
    "benefits.conversion.description":
      "Отсутствие человеческого фактора обеспечивает стабильно высокие показатели продаж.",
    "benefits.conversion.stats": "Конверсия выше на 35%",
    "benefits.security.title": "Безопасность данных",
    "benefits.security.description": "Полное соответствие GDPR, шифрование всех данных и детальное логирование.",
    "benefits.security.stats": "Сертификация ISO 27001",
    "benefits.calculations.title": "Мгновенные расчёты",
    "benefits.calculations.description":
      "Автоматические расчёты стоимости, создание КП и выставление счетов в реальном времени.",
    "benefits.calculations.stats": "Расчёт за 3 секунды",
    "benefits.analytics.title": "Детальная аналитика",
    "benefits.analytics.description": "Полная статистика по всем диалогам, конверсиям и точкам улучшения процессов.",
    "benefits.analytics.stats": "50+ метрик эффективности",
    "benefits.comparison.title": "Сравнение затрат",
    "benefits.comparison.managers": "Отдел из 5 менеджеров",
    "benefits.comparison.ai": "AI-ассистент M2",
    "benefits.comparison.savings": "Экономия",
    "benefits.comparison.multiplier": "10×",
    "benefits.comparison.description": "больше обработанных обращений при меньших затратах",

    "solutions.title": "Решения для разных отраслей",
    "solutions.description": "Готовые AI-ассистенты, настроенные под специфику вашего бизнеса",
    "solutions.sales.title": "Голосовой менеджер продаж",
    "solutions.sales.description":
      "Автоматизация входящих и исходящих звонков, квалификация лидов, презентация продуктов и закрытие сделок.",
    "solutions.sales.feature1": "Обработка возражений",
    "solutions.sales.feature2": "Расчёт стоимости",
    "solutions.sales.feature3": "Создание КП",
    "solutions.sales.feature4": "Интеграция с CRM",
    "solutions.hotel.title": "AI-консьерж для отелей",
    "solutions.hotel.description":
      "Умный помощник для гостей: заказы из номера, бронирование услуг, информация о городе и событиях.",
    "solutions.hotel.feature1": "Заказ еды в номер",
    "solutions.hotel.feature2": "Вызов такси",
    "solutions.hotel.feature3": "Бронирование ресторанов",
    "solutions.hotel.feature4": "Информация о городе",
    "solutions.smb.title": "Для малого и среднего бизнеса",
    "solutions.smb.description": "Готовые решения с быстрым запуском и минимальными настройками для растущих компаний.",
    "solutions.smb.feature1": "Готовые шаблоны",
    "solutions.smb.feature2": "Быстрый старт",
    "solutions.smb.feature3": "Доступная цена",
    "solutions.smb.feature4": "Простая интеграция",
    "solutions.enterprise.title": "Enterprise и госсектор",
    "solutions.enterprise.description":
      "Корпоративные решения с повышенной безопасностью, SLA и возможностью on-premise развёртывания.",
    "solutions.enterprise.feature1": "Высокий SLA",
    "solutions.enterprise.feature2": "On-premise",
    "solutions.enterprise.feature3": "Аудит безопасности",
    "solutions.enterprise.feature4": "Кастомные интеграции",
    "solutions.custom.title": "Индивидуальные разработки",
    "solutions.custom.description":
      "Нужно уникальное решение? Мы создаём AI-ассистентов под любые бизнес-процессы с интеграцией в ваши системы и соблюдением всех требований безопасности.",
    "solutions.custom.cta1": "Обсудить проект",
    "solutions.custom.cta2": "Получить консультацию",
    "solutions.learnMore": "Подробнее о решении",

    "demo.title": "Попробуйте AI-ассистента прямо сейчас",
    "demo.description": "Поговорите с нашим демо-ассистентом или позвоните на тестовый номер",
    "demo.voiceDemo.title": "Голосовое демо",
    "demo.voiceDemo.description": "Нажмите на микрофон и начните говорить с AI-ассистентом",
    "demo.scenario.label": "Выберите сценарий:",
    "demo.scenario.sales": "Продажи",
    "demo.scenario.salesDesc": "Демо-звонок с менеджером по продажам",
    "demo.scenario.hotel": "Отель",
    "demo.scenario.hotelDesc": "AI-консьерж отеля отвечает на вопросы гостя",
    "demo.listening": "Слушаю...",
    "demo.clickToStart": "Нажмите для начала разговора",
    "demo.transcript.title": "Демо-диалог:",
    "demo.transcript.ai": "AI",
    "demo.transcript.you": "Вы",
    "demo.transcript.greeting": "Здравствуйте! Меня зовут Анна, я AI-ассистент. Чем могу помочь?",
    "demo.transcript.userQuestion": "Расскажите о ваших решениях для отелей",
    "demo.transcript.aiResponse": "Конечно! Наш AI-консьерж помогает гостям заказывать еду, бронировать услуги...",
    "demo.phone.title": "Позвонить на демо-номер",
    "demo.phone.description": "Позвоните и поговорите с AI-ассистентом по телефону",
    "demo.phone.number": "+7 (495) 123-45-67",
    "demo.phone.callNow": "Позвонить сейчас",
    "demo.phone.notice": "Звонок бесплатный. Работает 24/7",
    "demo.examples.title": "Примеры диалогов",
    "demo.examples.restaurant": "Расчёт стоимости для ресторана",
    "demo.examples.hotelOrder": "Заказ еды в номер отеля",
    "demo.examples.objections": "Обработка возражений клиента",
    "demo.examples.duration": "Длительность:",
    "demo.privacy": "Демо-звонки записываются для улучшения качества сервиса. Персональные данные не сохраняются.",

    "cta.title": "Начните автоматизировать продажи уже сегодня",
    "cta.description":
      "Получите тестовый звонок от AI-ассистента или запросите персональную демонстрацию для вашего бизнеса",
    "cta.calculateCost": "Рассчитать стоимость",
    "cta.calculateDesc": "Узнайте цену для вашего проекта",
    "cta.viewCases": "Посмотреть кейсы",
    "cta.viewCasesDesc": "Реальные примеры внедрений",
    "cta.callNow": "Позвонить сейчас",
    "cta.phoneNumber": "+7 (495) 123-45-67",
    "cta.freeTest": "Бесплатный тестовый звонок",
    "cta.setupTime": "Настройка за 1 день",
    "cta.support247": "Поддержка 24/7",

    // Voice Sales Manager page
    "voiceSales.badge": "Голосовой AI-менеджер продаж",
    "voiceSales.title": "Увеличьте продажи голосом 24/7",
    "voiceSales.description":
      "AI-ассистент, который квалифицирует лиды, презентует продукт, рассчитывает стоимость и выставляет счета без участия человека",
    "voiceSales.benefit1": "Обрабатывает 100% входящих звонков",
    "voiceSales.benefit2": "Работает 24/7 без выходных и перерывов",
    "voiceSales.benefit3": "Увеличивает конверсию в 2-3 раза",
    "voiceSales.aiManager": "AI Менеджер Анна",
    "voiceSales.online": "Сейчас на связи",
    "voiceSales.greeting":
      "Добро пожаловать! Расскажите о ваших потребностях, и я подготовлю персональное предложение за 2 минуты",
    "voiceSales.quickResponse": "Быстрый ответ",
    "voiceSales.personalization": "Персонализация",
    "voiceSales.crmIntegration": "Интеграция с CRM",
    "voiceSales.analytics": "Аналитика",
    "voiceSales.problemsTitle": "Проблемы традиционных продаж",
    "voiceSales.problemsSubtitle": "Почему компании теряют до 70% потенциальных клиентов",
    "voiceSales.problem1.title": "Потеря лидов",
    "voiceSales.problem1.description": "До 70% звонков остаются без ответа в рабочее время",
    "voiceSales.problem2.title": "Очереди и ожидание",
    "voiceSales.problem2.description": "Клиенты не ждут и уходят к конкурентам",
    "voiceSales.problem3.title": "Человеческий фактор",
    "voiceSales.problem3.description": "Разные скрипты, забывчивость, эмоциональное выгорание",
    "voiceSales.solutionsTitle": "Как AI-менеджер решает эти проблемы",
    "voiceSales.solutionsSubtitle": "Полный цикл продаж от первого контакта до оплаты",
    "voiceSales.solution1.title": "Квалификация лидов",
    "voiceSales.solution1.description": "Определяет потребности, бюджет и готовность к покупке",
    "voiceSales.solution2.title": "Презентация продукта",
    "voiceSales.solution2.description": "Рассказывает о преимуществах, отвечает на возражения",
    "voiceSales.solution3.title": "Расчет стоимости",
    "voiceSales.solution3.description": "Формирует персональное предложение в реальном времени",
    "voiceSales.solution4.title": "Выставление счета",
    "voiceSales.solution4.description": "Создает и отправляет счет, договор, ссылку на оплату",
    "voiceSales.solution5.title": "Фоллоу-ап",
    "voiceSales.solution5.description": "Напоминает об оплате, предлагает дополнительные услуги",
    "voiceSales.integrationsTitle": "Подключаем к вашим системам",
    "voiceSales.integrationsSubtitle": "Бесшовная интеграция с существующей инфраструктурой",
    "voiceSales.integration1.name": "CRM системы",
    "voiceSales.integration1.description": "Salesforce, HubSpot, amoCRM, Битрикс24",
    "voiceSales.integration2.name": "Биллинг",
    "voiceSales.integration2.description": "1C, SAP, QuickBooks, собственные системы",
    "voiceSales.integration3.name": "Склад и доставка",
    "voiceSales.integration3.description": "WMS, курьерские службы, логистика",
    "voiceSales.integration4.name": "База знаний",
    "voiceSales.integration4.description": "RAG для ответов на сложные вопросы",
    "voiceSales.scenariosTitle": "Сценарии работы",
    "voiceSales.scenariosSubtitle": "Примеры диалогов в разных ситуациях",
    "voiceSales.scenario1.title": "Входящий звонок",
    "voiceSales.scenario1.description": "Клиент звонит по рекламе",
    "voiceSales.scenario2.title": "Исходящий звонок",
    "voiceSales.scenario2.description": "Обзвон базы потенциальных клиентов",
    "voiceSales.scenario3.title": "Брошенная корзина",
    "voiceSales.scenario3.description": "Возврат клиентов, не завершивших покупку",
    "voiceSales.listenFullDialogue": "Послушать полный диалог",
    "voiceSales.resultsTitle": "Результаты внедрения",
    "voiceSales.resultsSubtitle": "Средние показатели наших клиентов",
    "voiceSales.kpi1.metric": "Конверсия",
    "voiceSales.kpi1.before": "12%",
    "voiceSales.kpi1.after": "28%",
    "voiceSales.kpi1.improvement": "+133%",
    "voiceSales.kpi2.metric": "Время ответа",
    "voiceSales.kpi2.before": "45 сек",
    "voiceSales.kpi2.after": "0 сек",
    "voiceSales.kpi2.improvement": "100%",
    "voiceSales.kpi3.metric": "Обработка лидов",
    "voiceSales.kpi3.before": "40%",
    "voiceSales.kpi3.after": "100%",
    "voiceSales.kpi3.improvement": "+150%",
    "voiceSales.kpi4.metric": "Стоимость лида",
    "voiceSales.kpi4.before": "$50",
    "voiceSales.kpi4.after": "$18",
    "voiceSales.kpi4.improvement": "-64%",
    "voiceSales.casesTitle": "Кейсы клиентов",
    "voiceSales.casesSubtitle": "Реальные результаты внедрения",
    "voiceSales.pricingTitle": "Прозрачные цены",
    "voiceSales.pricingSubtitle": "Стоимость зависит от сложности сценариев и объема звонков",
    "voiceSales.pricing.setup": "Настройка",
    "voiceSales.pricing.setupPrice": "от $2,000",
    "voiceSales.pricing.setupDesc": "Разовая стоимость внедрения",
    "voiceSales.pricing.perMinute": "За минуту",
    "voiceSales.pricing.perMinutePrice": "от $0.05",
    "voiceSales.pricing.perMinuteDesc": "Стоимость разговора",
    "voiceSales.pricing.support": "Поддержка",
    "voiceSales.pricing.supportPrice": "от $500/мес",
    "voiceSales.pricing.supportDesc": "Техническая поддержка",
    "voiceSales.faqTitle": "Часто задаваемые вопросы",
    "voiceSales.ctaTitle": "Начните увеличивать продажи уже сегодня",
    "voiceSales.ctaDescription": "Получите демо-звонок и персональный расчет для вашего бизнеса",

    "voiceSales.problemsBadge": "Проблемы бизнеса",
    "voiceSales.solutionsBadge": "Наше решение",
    "voiceSales.integrationsBadge": "Интеграции",
    "voiceSales.scenariosBadge": "Сценарии работы",
    "voiceSales.resultsBadge": "Результаты внедрения",
    "voiceSales.casesBadge": "Кейсы клиентов",
    "voiceSales.pricingBadge": "Прозрачные цены",
    "voiceSales.faqBadge": "Часто задаваемые вопросы",

    "voiceSales.scenario1.dialogue1":
      "Добрый день! Меня зовут Анна, я AI-ассистент компании. Вы звоните по поводу нашего предложения?",
    "voiceSales.scenario1.dialogue2": "Да, хочу узнать подробнее о ваших услугах и ценах.",
    "voiceSales.scenario1.dialogue3":
      "Отлично! Расскажите, пожалуйста, какие задачи вы хотите решить? Это поможет мне подготовить персональное предложение за 2 минуты.",
    "voiceSales.scenario2.dialogue1":
      "Здравствуйте! Меня зовут Анна, звоню из компании AI Solutions. Вы оставляли заявку на нашем сайте. Удобно сейчас поговорить?",
    "voiceSales.scenario2.dialogue2": "Да, слушаю вас.",
    "voiceSales.scenario2.dialogue3":
      "Отлично! Я подготовила для вас персональное предложение на основе вашей заявки. Могу рассказать о преимуществах за 2 минуты?",
    "voiceSales.scenario3.dialogue1":
      "Добрый день! Меня зовут Анна. Вы недавно добавили товары в корзину, но не завершили оформление. Могу помочь с заказом?",
    "voiceSales.scenario3.dialogue2": "Да, у меня возникли вопросы по доставке.",
    "voiceSales.scenario3.dialogue3":
      "Конечно! Доставка бесплатная при заказе от 5000 рублей. Ваш заказ на 7500 рублей, поэтому доставка будет бесплатной. Оформляем?",

    "voiceSales.before": "Было",
    "voiceSales.after": "Стало",

    "voiceSales.case1.title": "Интернет-магазин электроники",
    "voiceSales.case1.description": "Внедрили AI-менеджера для обработки входящих звонков и консультаций",
    "voiceSales.case1.result1": "+40% конверсия",
    "voiceSales.case1.result2": "95% довольных клиентов",
    "voiceSales.case1.result3": "10x ROI",
    "voiceSales.case2.title": "B2B поставщик оборудования",
    "voiceSales.case2.description": "Автоматизировали исходящие звонки и квалификацию лидов",
    "voiceSales.case2.result1": "+333% конверсия",
    "voiceSales.case2.result2": "100% обработка лидов",
    "voiceSales.case2.result3": "-64% стоимость лида",
    "voiceSales.case3.title": "Образовательная платформа",
    "voiceSales.case3.description": "Внедрили AI для возврата клиентов с брошенными корзинами",
    "voiceSales.case3.result1": "+28% возвратов",
    "voiceSales.case3.result2": "0 сек время ответа",
    "voiceSales.case3.result3": "24/7 доступность",
    "voiceSales.readMore": "Читать подробнее",

    "voiceSales.setup": "Настройка",
    "voiceSales.perMinute": "За минуту",
    "voiceSales.support": "Поддержка",
    "voiceSales.setupCost": "Разовая стоимость внедрения",
    "voiceSales.perMinuteCost": "Стоимость разговора",
    "voiceSales.supportCost": "Техническая поддержка",

    "voiceSales.faq1.question": "Как быстро можно запустить AI-менеджера?",
    "voiceSales.faq1.answer":
      "Стандартное внедрение занимает 2-4 недели. Это включает настройку сценариев, интеграцию с вашими системами, обучение AI на ваших данных и тестирование. Для простых сценариев возможен запуск за 1 недею.",
    "voiceSales.faq2.question": "Какие языки поддерживает AI-менеджер?",
    "voiceSales.faq2.answer":
      "AI-менеджер поддерживает более 30 языков, включая русский, английский, испанский, немецкий, французский, китайский и другие. Возможна работа в мультиязычном режиме с автоматическим определением языка клиента.",
    "voiceSales.faq3.question": "Можно ли интегрировать с нашей CRM?",
    "voiceSales.faq3.answer":
      "Да, мы интегрируемся с любыми CRM системами через API: Salesforce, HubSpot, amoCRM, Битрикс24, Pipedrive и другие. Также поддерживаем интеграцию с биллинговыми системами, складом и базами знаний.",
    "voiceSales.faq4.question": "Как AI-менеджер обрабатывает сложные вопросы?",
    "voiceSales.faq4.answer":
      "AI-менеджер использует вашу базу знаний и может обращаться к внешним источникам данных через RAG. Если вопрос слишком сложный, AI корректно переводит звонок на живого менеджера с полным контекстом разговора.",

    "voiceSales.startToday": "Начните увеличивать продажи уже сегодня",
    "voiceSales.startTodayDescription":
      "Запустите AI-менеджера за 2 недели и получите первые результаты в течение месяца",

    // Hotel Concierge Translations
    "hotelConcierge.badge": "AI-консьерж для отелей",
    "hotelConcierge.title": "Ресепшн без очередей. Гости получают сервис голосом",
    "hotelConcierge.description":
      "AI-консьерж обрабатывает запросы гостей 24/7: заказы еды, уборка, такси, бронирования. Повышает удовлетворенность и экономит время персонала",
    "hotelConcierge.benefit1": "95% удовлетворенность гостей",
    "hotelConcierge.benefit2": "60% экономия времени персонала",
    "hotelConcierge.benefit3": "Поддержка 10+ языков",
    "hotelConcierge.functionsTitle": "Функции AI-консьержа",
    "hotelConcierge.functionsSubtitle": "Полный спектр услуг для комфорта ваших гостей",
    "hotelConcierge.function1.title": "Заказ еды в номер",
    "hotelConcierge.function1.description": "Прием заказов, уточнение деталей, передача на кухню",
    "hotelConcierge.function2.title": "Услуги уборки",
    "hotelConcierge.function2.description": "Запрос дополнительной уборки, смены белья, полотенец",
    "hotelConcierge.function3.title": "Поздний выезд",
    "hotelConcierge.function3.description": "Оформление позднего выезда, расчет доплаты",
    "hotelConcierge.function4.title": "Заказ такси",
    "hotelConcierge.function4.description": "Вызов такси, трансфер в аэропорт, экскурсии",
    "hotelConcierge.function5.title": "Бронирование ресторанов",
    "hotelConcierge.function5.description": "Столики в ресторанах, билеты на события",
    "hotelConcierge.function6.title": "Гид по городу",
    "hotelConcierge.function6.description": "Рекомендации мест, маршруты, достопримечательности",
    "hotelConcierge.channelsTitle": "Каналы взаимодействия",
    "hotelConcierge.channelsSubtitle": "Гости могут обращаться удобным способом",
    "hotelConcierge.channel1.name": "Умная колонка в номере",
    "hotelConcierge.channel1.description": "Голосовое управление без телефона",
    "hotelConcierge.channel2.name": "Телефон в номере",
    "hotelConcierge.channel2.description": "Привычный способ связи",
    "hotelConcierge.channel3.name": "Веб-интерфейс",
    "hotelConcierge.channel3.description": "Через сайт отеля или приложение",
    "hotelConcierge.channel4.name": "Мессенджеры",
    "hotelConcierge.channel4.description": "WhatsApp, Telegram, Facebook Messenger",
    "hotelConcierge.scenariosTitle": "Сценарии обслуживания",
    "hotelConcierge.scenariosSubtitle": "Примеры диалогов с AI-консьержем",
    "hotelConcierge.scenario1.title": "Еда в номер",
    "hotelConcierge.scenario1.description": "Заказ завтрака в номер",
    "hotelConcierge.scenario1.dialogue1": "Хочу заказать завтрак в номер",
    "hotelConcierge.scenario1.dialogue2": "Конечно! Меню завтрака доступно до 11:00. Что бы вы хотели заказать?",
    "hotelConcierge.scenario1.dialogue3": "Континентальный завтрак и кофе",
    "hotelConcierge.scenario1.dialogue4":
      "Отлично! Континентальный завтрак и кофе. Когда удобно доставить? Сейчас 9:30",
    "hotelConcierge.scenario1.dialogue5": "Через 30 минут",
    "hotelConcierge.scenario1.dialogue6": "Заказ принят! Доставим в 10:00 в номер 205. Стоимость 25€. Спасибо!",
    "hotelConcierge.scenario2.title": "Уборка",
    "hotelConcierge.scenario2.description": "Запрос дополнительной уборки",
    "hotelConcierge.scenario2.dialogue1": "Нужны дополнительные полотенца",
    "hotelConcierge.scenario2.dialogue2": "Конечно! Сколько полотенец вам нужно?",
    "hotelConcierge.scenario2.dialogue3": "Два банных полотенца",
    "hotelConcierge.scenario2.dialogue4":
      "Хорошо! Горничная принесет два банных полотенца в номер 205 в течение 15 минут",
    "hotelConcierge.scenario3.title": "Транспорт",
    "hotelConcierge.scenario3.description": "Заказ такси в аэропорт",
    "hotelConcierge.scenario3.dialogue1": "Нужно такси в аэропорт завтра в 8 утра",
    "hotelConcierge.scenario3.dialogue2": "Конечно! Такси в аэропорт на 8:00. Какой аэропорт?",
    "hotelConcierge.scenario3.dialogue3": "Барахас, терминал 2",
    "hotelConcierge.scenario3.dialogue4":
      "Заказ оформлен! Такси будет у отеля завтра в 8:00. Стоимость 35€. Время в пути около 45 минут",
    "hotelConcierge.listenDialogue": "Послушать диалог",
    "hotelConcierge.demoTitle": "Попробуйте AI-консьерж",
    "hotelConcierge.demoSubtitle": "Интерактивная демонстрация возможностей",
    "hotelConcierge.demoReady": "AI Консьерж готов к работе",
    "hotelConcierge.demoDescription": "Нажмите кнопку и попробуйте заказать еду в номер или вызвать такси",
    "hotelConcierge.startConversation": "Начать разговор",
    "hotelConcierge.callDemo": "Позвонить на демо",
    "hotelConcierge.integrationsTitle": "Интеграции",
    "hotelConcierge.integrationsSubtitle": "Подключаем к системам отеля",
    "hotelConcierge.integration1.name": "PMS системы",
    "hotelConcierge.integration1.description": "Opera, Fidelio, RoomMaster",
    "hotelConcierge.integration2.name": "Ресторанные системы",
    "hotelConcierge.integration2.description": "Интеграция с кухней и баром",
    "hotelConcierge.integration3.name": "Службы такси",
    "hotelConcierge.integration3.description": "Uber, Bolt, местные службы",
    "hotelConcierge.integration4.name": "Платежные системы",
    "hotelConcierge.integration4.description": "Оплата услуг через номер",
    "hotelConcierge.casesTitle": "Кейсы отелей",
    "hotelConcierge.casesSubtitle": "Результаты наших клиентов",
    "hotelConcierge.case1.title": "Boutique Hotel Barcelona",
    "hotelConcierge.case1.description": "Увеличили удовлетворенность гостей на 40%",
    "hotelConcierge.case1.result1": "95% положительных отзывов",
    "hotelConcierge.case1.result2": "60% экономия времени персонала",
    "hotelConcierge.case1.result3": "24/7 доступность",
    "hotelConcierge.case2.title": "Resort Chain Spain",
    "hotelConcierge.case2.description": "Автоматизировали 80% запросов гостей",
    "hotelConcierge.case2.result1": "80% автоматизация",
    "hotelConcierge.case2.result2": "Поддержка 5 языков",
    "hotelConcierge.case2.result3": "ROI 300% за год",
    "hotelConcierge.readFullCase": "Читать кейс полностью",
    "hotelConcierge.packagesTitle": "Пакеты для отелей",
    "hotelConcierge.packagesSubtitle": "Выберите подходящий тариф",
    "hotelConcierge.package1.name": "Small",
    "hotelConcierge.package1.description": "До 50 номеров",
    "hotelConcierge.package1.price": "€299/мес",
    "hotelConcierge.package1.feature1": "Базовые сценарии",
    "hotelConcierge.package1.feature2": "Телефон + веб",
    "hotelConcierge.package1.feature3": "Email поддержка",
    "hotelConcierge.package2.name": "Medium",
    "hotelConcierge.package2.description": "50-200 номеров",
    "hotelConcierge.package2.price": "€599/мес",
    "hotelConcierge.package2.feature1": "Все сценарии",
    "hotelConcierge.package2.feature2": "Все каналы",
    "hotelConcierge.package2.feature3": "Интеграции",
    "hotelConcierge.package2.feature4": "Приоритетная поддержка",
    "hotelConcierge.package3.name": "Large",
    "hotelConcierge.package3.description": "200+ номеров",
    "hotelConcierge.package3.price": "от €999/мес",
    "hotelConcierge.package3.feature1": "Полная кастомизация",
    "hotelConcierge.package3.feature2": "Мультиязычность",
    "hotelConcierge.package3.feature3": "Аналитика",
    "hotelConcierge.package3.feature4": "Персональный менеджер",
    "hotelConcierge.popular": "Популярный",
    "hotelConcierge.selectPackage": "Выбрать пакет",
    "hotelConcierge.faqTitle": "Часто задаваемые вопросы",
    "hotelConcierge.faq1.question": "Поддерживает ли система несколько языков?",
    "hotelConcierge.faq1.answer":
      "Да, поддерживаем основные европейские языки: английский, испанский, французский, немецкий, итальянский и другие по запросу.",
    "hotelConcierge.faq2.question": "Как интегрируется с нашей PMS?",
    "hotelConcierge.faq2.answer":
      "Интегрируемся с популярными PMS через API. Получаем данные о гостях, номерах, счетах для персонализации сервиса.",
    "hotelConcierge.faq3.question": "Что если AI не может ответить на вопрос?",
    "hotelConcierge.faq3.answer":
      "Система переводит сложные запросы на живого сотрудника с полным контекстом разговора.",
    "hotelConcierge.faq4.question": "Какая стоимость внедрения?",
    "hotelConcierge.faq4.answer":
      "Стоимость зависит от размера отеля и количества интеграций. Базовое внедрение от €2,000.",
    "hotelConcierge.ctaTitle": "Повысьте сервис вашего отеля",
    "hotelConcierge.ctaDescription": "Получите демонстрацию AI-консьержа и расчет для вашего отеля",
    "hotelConcierge.aiConcierge": "AI Консьерж Мария",
    "hotelConcierge.readyToHelp": "Готова помочь",
    "hotelConcierge.welcomeMessage":
      "Добро пожаловать в наш отель! Чем могу помочь? Могу принять заказ, вызвать такси или забронировать столик",
    "hotelConcierge.quickAction1": "Заказ еды",
    "hotelConcierge.quickAction2": "Вызов такси",
    "hotelConcierge.quickAction3": "Уборка",
    "hotelConcierge.quickAction4": "Экскурсии",
    "hotelConcierge.guest": "Гость",
    "hotelConcierge.ai": "AI",
  },
  en: {
    // Navigation
    "nav.solutions": "Solutions",
    "nav.platform": "Platform",
    "nav.cases": "Cases",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.contacts": "Contacts",
    "nav.login": "Login",
    "nav.signup": "Sign Up",
    "nav.home": "AI Solutions Homepage",
    "nav.main": "Main navigation",
    "nav.mobile": "Mobile navigation",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    // Footer navigation
    "nav.company": "Company",
    "nav.resources": "Resources",
    "nav.legal": "Legal",
    "nav.offices": "Offices",
    // CTA buttons
    "cta.tryFree": "Try Free",
    "cta.requestDemo": "Request Demo",
    "cta.listenDemo": "Listen Demo",
    "cta.call": "Call",
    "cta.calculate": "Calculate Cost",
    "cta.downloadPitch": "Download Pitch",
    "cta.readMore": "Read More",
    "cta.learnMore": "Learn More",
    "cta.getStarted": "Get Started",
    "cta.contactUs": "Contact Us",
    "cta.backToHome": "Back to Home",
    // Hero section
    "hero.title": "Voice AI Assistants that sell and serve customers 24/7",
    "hero.subtitle": "",
    "hero.description":
      "Automate the entire customer journey: from first inquiry to invoice and delivery confirmation. Handle 10× more requests without queues.",
    "hero.consistentScripts": "Consistent Scripts",
    "hero.consistentScriptsDesc": "Personalized offers and instant calculations",
    "hero.fullIntegration": "Full Integration",
    "hero.fullIntegrationDesc": "CRM, billing, warehouse, delivery",
    "hero.analytics": "Conversation Analytics",
    "hero.analyticsDesc": "Continuous performance improvement",
    "hero.scalability": "Scalability",
    "hero.scalabilityDesc": "From startup to Enterprise",
    "hero.trustedBy": "Trusted by companies across industries",
    "hero.demoTitle": "AI Assistant in Action",
    "hero.online": "Online",
    "hero.aiGreeting": "Hello! My name is Anna, I'm the company's AI assistant. How can I help you?",
    "hero.userMessage": "I want to know the cost of your hotel solution",
    "hero.aiResponse": "Great! How many rooms does your hotel have? This will help me calculate the exact cost.",
    "hero.you": "You",
    "howItWorks.title": "How AI Assistant Works",
    "howItWorks.description": "Complete cycle of processing customer requests from first contact to deal completion",
    "howItWorks.step1.title": "Incoming Contact",
    "howItWorks.step1.description":
      "Customer calls, writes in chat or messenger. AI responds instantly on any channel.",
    "howItWorks.step2.title": "Recognition and Analysis",
    "howItWorks.step2.description":
      "System understands the request, determines intentions and extracts key information.",
    "howItWorks.step3.title": "Logic and Actions",
    "howItWorks.step3.description":
      "AI applies business rules, makes calculations, creates documents and performs operations.",
    "howItWorks.step4.title": "Analytics and Improvement",
    "howItWorks.step4.description": "All dialogues are recorded and analyzed for continuous quality improvement.",
    "howItWorks.responseTime": "Average response time: less than 2 seconds",
    // Solutions
    "solutions.voiceSalesManager": "Voice Sales Manager",
    "solutions.hotelConcierge": "Hotel Concierge",
    "solutions.smb": "Small & Medium Business",
    "solutions.enterprise": "Enterprise / Government / Banks",
    "solutions.custom": "Custom Development",
    // Platform
    "platform.architecture": "Architecture",
    "platform.demo": "Demo",
    "platform.calculator": "Pricing Calculator",
    // About page
    "about.title": "About AI Solutions",
    "about.subtitle": "International team of artificial intelligence experts",
    "about.description":
      "We've united the best specialists from Russia, CIS, Ukraine, and India to create cutting-edge AI solutions that transform business processes for companies worldwide.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "To democratize access to advanced AI technologies, making them available to companies of any size — from startups to large corporations.",
    "about.values.title": "Our Values",
    "about.values.innovation": "Innovation",
    "about.values.innovationDesc": "Constantly implementing the latest technologies and approaches",
    "about.values.quality": "Quality",
    "about.values.qualityDesc": "Highest standards of development and testing",
    "about.values.transparency": "Transparency",
    "about.values.transparencyDesc": "Open communication and honest relationships with clients",
    "about.values.partnership": "Partnership",
    "about.values.partnershipDesc": "Long-term relationships based on mutual success",
    "about.team.title": "International Team",
    "about.team.description":
      "Our team unites talented specialists from different countries, each bringing unique experience and expertise in artificial intelligence.",
    "about.offices.title": "Our Offices",
    "about.offices.description": "We operate from three key locations, providing 24/7 customer support worldwide.",
    // Blog page
    "blog.title": "AI Solutions Blog",
    "blog.subtitle": "Expert articles on implementing artificial intelligence in business",
    "blog.description":
      "Current materials on AI trends, practical implementation cases, and tips for optimizing business processes with artificial intelligence.",
    "blog.readMore": "Read More",
    "blog.categories.all": "All Categories",
    "blog.categories.ai": "Artificial Intelligence",
    "blog.categories.business": "Business",
    "blog.categories.technology": "Technology",
    "blog.search.placeholder": "Search articles...",
    "blog.newsletter.title": "Newsletter Subscription",
    "blog.newsletter.description": "Get fresh articles and news about AI technology development",
    "blog.newsletter.placeholder": "Your email",
    "blog.newsletter.subscribe": "Subscribe",
    // Cases page
    "cases.title": "AI Solutions Implementation Cases",
    "cases.subtitle": "Real results from our clients",
    "cases.description":
      "Explore successful AI assistant implementation projects across various industries and learn how our solutions help companies increase sales and optimize processes.",
    "cases.viewDetails": "View Details",
    "cases.results": "Results",
    "cases.challenge": "Challenge",
    "cases.solution": "Solution",
    "cases.outcome": "Outcome",
    // Contacts page
    "contacts.title": "Contact Us",
    "contacts.subtitle": "Ready to discuss your project?",
    "contacts.description":
      "Our team of experts is ready to help you implement AI solutions in your business. Contact us in any convenient way.",
    "contacts.form.title": "Send Message",
    "contacts.form.name": "Name",
    "contacts.form.email": "Email",
    "contacts.form.company": "Company",
    "contacts.form.message": "Message",
    "contacts.form.send": "Send",
    "contacts.offices.title": "Our Offices",
    "contacts.social.title": "Social Media",
    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.close": "Close",
    "common.open": "Open",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.submit": "Submit",
    "common.search": "Search",

    "benefits.title": "Advantages over regular managers",
    "benefits.description":
      "AI assistant works more efficiently than an entire sales department at significantly lower costs",
    "benefits.availability.title": "24/7 Availability",
    "benefits.availability.description": "No weekends, vacations or sick days. Your customers get help anytime.",
    "benefits.availability.stats": "Round-the-clock call processing",
    "benefits.parallel.title": "Parallel Processing",
    "benefits.parallel.description": "Simultaneous work with hundreds of clients without loss of service quality.",
    "benefits.parallel.stats": "Up to 1000+ simultaneous dialogues",
    "benefits.conversion.title": "Stable Conversion",
    "benefits.conversion.description": "Absence of human factor ensures consistently high sales performance.",
    "benefits.conversion.stats": "35% higher conversion",
    "benefits.security.title": "Data Security",
    "benefits.security.description": "Full GDPR compliance, encryption of all data and detailed logging.",
    "benefits.security.stats": "ISO 27001 Certification",
    "benefits.calculations.title": "Instant Calculations",
    "benefits.calculations.description": "Automatic cost calculations, quote creation and invoicing in real-time.",
    "benefits.calculations.stats": "Calculation in 3 seconds",
    "benefits.analytics.title": "Detailed Analytics",
    "benefits.analytics.description":
      "Complete statistics on all dialogues, conversions and process improvement points.",
    "benefits.analytics.stats": "50+ efficiency metrics",
    "benefits.comparison.title": "Cost Comparison",
    "benefits.comparison.managers": "Team of 5 managers",
    "benefits.comparison.ai": "AI Assistant M2",
    "benefits.comparison.savings": "Savings",
    "benefits.comparison.multiplier": "10×",
    "benefits.comparison.description": "more processed requests at lower costs",

    "solutions.title": "Solutions for different industries",
    "solutions.description": "Ready-made AI assistants configured for your business specifics",
    "solutions.sales.title": "Voice Sales Manager",
    "solutions.sales.description":
      "Automation of inbound and outbound calls, lead qualification, product presentation and deal closing.",
    "solutions.sales.feature1": "Objection handling",
    "solutions.sales.feature2": "Cost calculation",
    "solutions.sales.feature3": "Quote creation",
    "solutions.sales.feature4": "CRM integration",
    "solutions.hotel.title": "AI Concierge for Hotels",
    "solutions.hotel.description":
      "Smart assistant for guests: room orders, service booking, city information and events.",
    "solutions.hotel.feature1": "In-room food ordering",
    "solutions.hotel.feature2": "Taxi calling",
    "solutions.hotel.feature3": "Restaurant booking",
    "solutions.hotel.feature4": "City information",
    "solutions.smb.title": "For Small & Medium Business",
    "solutions.smb.description": "Ready solutions with quick launch and minimal setup for growing companies.",
    "solutions.smb.feature1": "Ready templates",
    "solutions.smb.feature2": "Quick start",
    "solutions.smb.feature3": "Affordable price",
    "solutions.smb.feature4": "Simple integration",
    "solutions.enterprise.title": "Enterprise and Government",
    "solutions.enterprise.description":
      "Corporate solutions with enhanced security, SLA and on-premise deployment capability.",
    "solutions.enterprise.feature1": "High SLA",
    "solutions.enterprise.feature2": "On-premise",
    "solutions.enterprise.feature3": "Security audit",
    "solutions.enterprise.feature4": "Custom integrations",
    "solutions.custom.title": "Custom Development",
    "solutions.custom.description":
      "Need a unique solution? We create AI assistants for any business processes with integration into your systems and compliance with all security requirements.",
    "solutions.custom.cta1": "Discuss project",
    "solutions.custom.cta2": "Get consultation",
    "solutions.learnMore": "Learn more about solution",

    "demo.title": "Try AI Assistant right now",
    "demo.description": "Talk to our demo assistant or call the test number",
    "demo.voiceDemo.title": "Voice Demo",
    "demo.voiceDemo.description": "Click the microphone and start talking to the AI assistant",
    "demo.scenario.label": "Choose scenario:",
    "demo.scenario.sales": "Sales",
    "demo.scenario.salesDesc": "Demo call with sales manager",
    "demo.scenario.hotel": "Hotel",
    "demo.scenario.hotelDesc": "Hotel AI concierge answers guest questions",
    "demo.listening": "Listening...",
    "demo.clickToStart": "Click to start conversation",
    "demo.transcript.title": "Demo dialogue:",
    "demo.transcript.ai": "AI",
    "demo.transcript.you": "You",
    "demo.transcript.greeting": "Hello! My name is Anna, I'm an AI assistant. How can I help?",
    "demo.transcript.userQuestion": "Tell me about your hotel solutions",
    "demo.transcript.aiResponse": "Of course! Our AI concierge helps guests order food, book services...",
    "demo.phone.title": "Call demo number",
    "demo.phone.description": "Call and talk to the AI assistant by phone",
    "demo.phone.number": "+1 (555) 123-4567",
    "demo.phone.callNow": "Call now",
    "demo.phone.notice": "Call is free. Works 24/7",
    "demo.examples.title": "Dialogue examples",
    "demo.examples.restaurant": "Cost calculation for restaurant",
    "demo.examples.hotelOrder": "Hotel room food order",
    "demo.examples.objections": "Customer objection handling",
    "demo.examples.duration": "Duration:",
    "demo.privacy": "Demo calls are recorded to improve service quality. Personal data is not saved.",

    "cta.title": "Start automating sales today",
    "cta.description": "Get a test call from AI assistant or request a personalized demo for your business",
    "cta.calculateCost": "Calculate cost",
    "cta.calculateDesc": "Find out the price for your project",
    "cta.viewCases": "View cases",
    "cta.viewCasesDesc": "Real implementation examples",
    "cta.callNow": "Call now",
    "cta.phoneNumber": "+1 (555) 123-4567",
    "cta.freeTest": "Free test call",
    "cta.setupTime": "Setup in 1 day",
    "cta.support247": "24/7 Support",

    // Voice Sales Manager page
    "voiceSales.badge": "Voice AI Sales Manager",
    "voiceSales.title": "Boost sales with voice 24/7",
    "voiceSales.description":
      "AI assistant that qualifies leads, presents products, calculates costs and issues invoices without human involvement",
    "voiceSales.benefit1": "Handles 100% of incoming calls",
    "voiceSales.benefit2": "Works 24/7 without breaks or holidays",
    "voiceSales.benefit3": "Increases conversion 2-3x",
    "voiceSales.aiManager": "AI Manager Anna",
    "voiceSales.online": "Currently online",
    "voiceSales.greeting": "Welcome! Tell me about your needs, and I'll prepare a personalized offer in 2 minutes",
    "voiceSales.quickResponse": "Quick Response",
    "voiceSales.personalization": "Personalization",
    "voiceSales.crmIntegration": "CRM Integration",
    "voiceSales.analytics": "Analytics",
    "voiceSales.problemsTitle": "Traditional sales problems",
    "voiceSales.problemsSubtitle": "Why companies lose up to 70% of potential customers",
    "voiceSales.problem1.title": "Lost leads",
    "voiceSales.problem1.description": "Up to 70% of calls go unanswered during business hours",
    "voiceSales.problem2.title": "Queues and waiting",
    "voiceSales.problem2.description": "Customers don't wait and go to competitors",
    "voiceSales.problem3.title": "Human factor",
    "voiceSales.problem3.description": "Different scripts, forgetfulness, emotional burnout",
    "voiceSales.solutionsTitle": "How AI manager solves these problems",
    "voiceSales.solutionsSubtitle": "Full sales cycle from first contact to payment",
    "voiceSales.solution1.title": "Lead qualification",
    "voiceSales.solution1.description": "Determines needs, budget and readiness to buy",
    "voiceSales.solution2.title": "Product presentation",
    "voiceSales.solution2.description": "Talks about benefits, handles objections",
    "voiceSales.solution3.title": "Cost calculation",
    "voiceSales.solution3.description": "Creates personalized offer in real-time",
    "voiceSales.solution4.title": "Invoice issuance",
    "voiceSales.solution4.description": "Creates and sends invoice, contract, payment link",
    "voiceSales.solution5.title": "Follow-up",
    "voiceSales.solution5.description": "Reminds about payment, offers additional services",
    "voiceSales.integrationsTitle": "Connect to your systems",
    "voiceSales.integrationsSubtitle": "Seamless integration with existing infrastructure",
    "voiceSales.integration1.name": "CRM systems",
    "voiceSales.integration1.description": "Salesforce, HubSpot, amoCRM, Bitrix24",
    "voiceSales.integration2.name": "Billing",
    "voiceSales.integration2.description": "1C, SAP, QuickBooks, custom systems",
    "voiceSales.integration3.name": "Warehouse and delivery",
    "voiceSales.integration3.description": "WMS, courier services, logistics",
    "voiceSales.integration4.name": "Knowledge base",
    "voiceSales.integration4.description": "RAG for answering complex questions",
    "voiceSales.scenariosTitle": "Work scenarios",
    "voiceSales.scenariosSubtitle": "Examples of dialogues in different situations",
    "voiceSales.scenario1.title": "Incoming call",
    "voiceSales.scenario1.description": "Customer calls from advertisement",
    "voiceSales.scenario2.title": "Outgoing call",
    "voiceSales.scenario2.description": "Calling potential customer database",
    "voiceSales.scenario3.title": "Abandoned cart",
    "voiceSales.scenario3.description": "Returning customers who didn't complete purchase",
    "voiceSales.listenFullDialogue": "Listen to full dialogue",
    "voiceSales.resultsTitle": "Implementation results",
    "voiceSales.resultsSubtitle": "Average metrics of our clients",
    "voiceSales.kpi1.metric": "Conversion",
    "voiceSales.kpi1.before": "12%",
    "voiceSales.kpi1.after": "28%",
    "voiceSales.kpi1.improvement": "+133%",
    "voiceSales.kpi2.metric": "Response time",
    "voiceSales.kpi2.before": "45 sec",
    "voiceSales.kpi2.after": "0 sec",
    "voiceSales.kpi2.improvement": "100%",
    "voiceSales.kpi3.metric": "Lead processing",
    "voiceSales.kpi3.before": "40%",
    "voiceSales.kpi3.after": "100%",
    "voiceSales.kpi3.improvement": "+150%",
    "voiceSales.kpi4.metric": "Cost per lead",
    "voiceSales.kpi4.before": "$50",
    "voiceSales.kpi4.after": "$18",
    "voiceSales.kpi4.improvement": "-64%",
    "voiceSales.casesTitle": "Client cases",
    "voiceSales.casesSubtitle": "Real implementation results",
    "voiceSales.pricingTitle": "Transparent pricing",
    "voiceSales.pricingSubtitle": "Cost depends on scenario complexity and call volume",
    "voiceSales.pricing.setup": "Setup",
    "voiceSales.pricing.setupPrice": "from $2,000",
    "voiceSales.pricing.setupDesc": "One-time implementation cost",
    "voiceSales.pricing.perMinute": "Per minute",
    "voiceSales.pricing.perMinutePrice": "from $0.05",
    "voiceSales.pricing.perMinuteDesc": "Conversation cost",
    "voiceSales.pricing.support": "Support",
    "voiceSales.pricing.supportPrice": "from $500/mo",
    "voiceSales.pricing.supportDesc": "Technical support",
    "voiceSales.faqTitle": "Frequently asked questions",
    "voiceSales.ctaTitle": "Start increasing sales today",
    "voiceSales.ctaDescription": "Get a demo call and personalized calculation for your business",

    // Hotel Concierge Translations
    "hotelConcierge.badge": "AI Concierge for Hotels",
    "hotelConcierge.title": "Reception without queues. Guests get service by voice",
    "hotelConcierge.description":
      "AI concierge handles guest requests 24/7: food orders, cleaning, taxi, bookings. Increases satisfaction and saves staff time",
    "hotelConcierge.benefit1": "95% guest satisfaction",
    "hotelConcierge.benefit2": "60% staff time savings",
    "hotelConcierge.benefit3": "Support for 10+ languages",
    "hotelConcierge.functionsTitle": "AI Concierge Functions",
    "hotelConcierge.functionsSubtitle": "Full range of services for your guests' comfort",
    "hotelConcierge.function1.title": "Room service orders",
    "hotelConcierge.function1.description": "Taking orders, clarifying details, sending to kitchen",
    "hotelConcierge.function2.title": "Housekeeping services",
    "hotelConcierge.function2.description": "Request additional cleaning, linen change, towels",
    "hotelConcierge.function3.title": "Late checkout",
    "hotelConcierge.function3.description": "Processing late checkout, calculating surcharge",
    "hotelConcierge.function4.title": "Taxi booking",
    "hotelConcierge.function4.description": "Calling taxi, airport transfer, excursions",
    "hotelConcierge.function5.title": "Restaurant reservations",
    "hotelConcierge.function5.description": "Restaurant tables, event tickets",
    "hotelConcierge.function6.title": "City guide",
    "hotelConcierge.function6.description": "Place recommendations, routes, attractions",
    "hotelConcierge.channelsTitle": "Interaction channels",
    "hotelConcierge.channelsSubtitle": "Guests can reach out in a convenient way",
    "hotelConcierge.channel1.name": "Smart speaker in room",
    "hotelConcierge.channel1.description": "Voice control without phone",
    "hotelConcierge.channel2.name": "Room phone",
    "hotelConcierge.channel2.description": "Familiar way to connect",
    "hotelConcierge.channel3.name": "Web interface",
    "hotelConcierge.channel3.description": "Through hotel website or app",
    "hotelConcierge.channel4.name": "Messengers",
    "hotelConcierge.channel4.description": "WhatsApp, Telegram, Facebook Messenger",
    "hotelConcierge.scenariosTitle": "Service scenarios",
    "hotelConcierge.scenariosSubtitle": "Examples of dialogues with AI concierge",
    "hotelConcierge.scenario1.title": "Room service",
    "hotelConcierge.scenario1.description": "Ordering breakfast to room",
    "hotelConcierge.scenario1.dialogue1": "I want to order breakfast to my room",
    "hotelConcierge.scenario1.dialogue2":
      "Of course! Breakfast menu is available until 11:00. What would you like to order?",
    "hotelConcierge.scenario1.dialogue3": "Continental breakfast and coffee",
    "hotelConcierge.scenario1.dialogue4":
      "Great! Continental breakfast and coffee. When would you like it delivered? It's 9:30 now",
    "hotelConcierge.scenario1.dialogue5": "In 30 minutes",
    "hotelConcierge.scenario1.dialogue6": "Order accepted! We'll deliver at 10:00 to room 205. Cost is €25. Thank you!",
    "hotelConcierge.scenario2.title": "Housekeeping",
    "hotelConcierge.scenario2.description": "Request for additional cleaning",
    "hotelConcierge.scenario2.dialogue1": "I need extra towels",
    "hotelConcierge.scenario2.dialogue2": "Of course! How many towels do you need?",
    "hotelConcierge.scenario2.dialogue3": "Two bath towels",
    "hotelConcierge.scenario2.dialogue4":
      "Alright! Housekeeping will bring two bath towels to room 205 within 15 minutes",
    "hotelConcierge.scenario3.title": "Transport",
    "hotelConcierge.scenario3.description": "Taxi to airport booking",
    "hotelConcierge.scenario3.dialogue1": "I need a taxi to the airport tomorrow at 8 AM",
    "hotelConcierge.scenario3.dialogue2": "Of course! Taxi to airport at 8:00. Which airport?",
    "hotelConcierge.scenario3.dialogue3": "Barajas, terminal 2",
    "hotelConcierge.scenario3.dialogue4":
      "Booking confirmed! Taxi will be at the hotel tomorrow at 8:00. Cost is €35. Travel time about 45 minutes",
    "hotelConcierge.listenDialogue": "Listen to dialogue",
    "hotelConcierge.demoTitle": "Try AI Concierge",
    "hotelConcierge.demoSubtitle": "Interactive demonstration of capabilities",
    "hotelConcierge.demoReady": "AI Concierge ready to work",
    "hotelConcierge.demoDescription": "Click the button and try ordering room service or calling a taxi",
    "hotelConcierge.startConversation": "Start conversation",
    "hotelConcierge.callDemo": "Call for demo",
    "hotelConcierge.integrationsTitle": "Integrations",
    "hotelConcierge.integrationsSubtitle": "Connect to hotel systems",
    "hotelConcierge.integration1.name": "PMS systems",
    "hotelConcierge.integration1.description": "Opera, Fidelio, RoomMaster",
    "hotelConcierge.integration2.name": "Restaurant systems",
    "hotelConcierge.integration2.description": "Integration with kitchen and bar",
    "hotelConcierge.integration3.name": "Taxi services",
    "hotelConcierge.integration3.description": "Uber, Bolt, local services",
    "hotelConcierge.integration4.name": "Payment systems",
    "hotelConcierge.integration4.description": "Service payment through room",
    "hotelConcierge.casesTitle": "Hotel cases",
    "hotelConcierge.casesSubtitle": "Results of our clients",
    "hotelConcierge.case1.title": "Boutique Hotel Barcelona",
    "hotelConcierge.case1.description": "Increased guest satisfaction by 40%",
    "hotelConcierge.case1.result1": "95% positive reviews",
    "hotelConcierge.case1.result2": "60% staff time savings",
    "hotelConcierge.case1.result3": "24/7 availability",
    "hotelConcierge.case2.title": "Resort Chain Spain",
    "hotelConcierge.case2.description": "Automated 80% of guest requests",
    "hotelConcierge.case2.result1": "80% automation",
    "hotelConcierge.case2.result2": "Support for 5 languages",
    "hotelConcierge.case2.result3": "300% ROI in a year",
    "hotelConcierge.readFullCase": "Read full case",
    "hotelConcierge.packagesTitle": "Hotel packages",
    "hotelConcierge.packagesSubtitle": "Choose the right plan",
    "hotelConcierge.package1.name": "Small",
    "hotelConcierge.package1.description": "Up to 50 rooms",
    "hotelConcierge.package1.price": "€299/month",
    "hotelConcierge.package1.feature1": "Basic scenarios",
    "hotelConcierge.package1.feature2": "Phone + web",
    "hotelConcierge.package1.feature3": "Email support",
    "hotelConcierge.package2.name": "Medium",
    "hotelConcierge.package2.description": "50-200 rooms",
    "hotelConcierge.package2.price": "€599/month",
    "hotelConcierge.package2.feature1": "All scenarios",
    "hotelConcierge.package2.feature2": "All channels",
    "hotelConcierge.package2.feature3": "Integrations",
    "hotelConcierge.package2.feature4": "Priority support",
    "hotelConcierge.package3.name": "Large",
    "hotelConcierge.package3.description": "200+ rooms",
    "hotelConcierge.package3.price": "from €999/month",
    "hotelConcierge.package3.feature1": "Full customization",
    "hotelConcierge.package3.feature2": "Multilingual",
    "hotelConcierge.package3.feature3": "Analytics",
    "hotelConcierge.package3.feature4": "Personal manager",
    "hotelConcierge.popular": "Popular",
    "hotelConcierge.selectPackage": "Select package",
    "hotelConcierge.faqTitle": "Frequently asked questions",
    "hotelConcierge.faq1.question": "Does the system support multiple languages?",
    "hotelConcierge.faq1.answer":
      "Yes, we support major European languages: English, Spanish, French, German, Italian and others on request.",
    "hotelConcierge.faq2.question": "How does it integrate with our PMS?",
    "hotelConcierge.faq2.answer":
      "We integrate with popular PMS via API. We get data about guests, rooms, bills to personalize service.",
    "hotelConcierge.faq3.question": "What if AI can't answer a question?",
    "hotelConcierge.faq3.answer":
      "The system transfers complex requests to a live employee with full conversation context.",
    "hotelConcierge.faq4.question": "What is the implementation cost?",
    "hotelConcierge.faq4.answer":
      "Cost depends on hotel size and number of integrations. Basic implementation from €2,000.",
    "hotelConcierge.ctaTitle": "Improve your hotel service",
    "hotelConcierge.ctaDescription": "Get AI concierge demo and calculation for your hotel",
    "hotelConcierge.aiConcierge": "AI Concierge Maria",
    "hotelConcierge.readyToHelp": "Ready to help",
    "hotelConcierge.welcomeMessage":
      "Welcome to our hotel! How can I help? I can take orders, call a taxi or book a table",
    "hotelConcierge.quickAction1": "Food order",
    "hotelConcierge.quickAction2": "Call taxi",
    "hotelConcierge.quickAction3": "Housekeeping",
    "hotelConcierge.quickAction4": "Excursions",
    "hotelConcierge.guest": "Guest",
    "hotelConcierge.ai": "AI",
  },
  es: {
    // Navigation
    "nav.solutions": "Soluciones",
    "nav.platform": "Plataforma",
    "nav.cases": "Casos",
    "nav.blog": "Blog",
    "nav.about": "Acerca de",
    "nav.contacts": "Contactos",
    "nav.login": "Iniciar sesión",
    "nav.signup": "Registrarse",
    "nav.home": "Página principal de AI Solutions",
    "nav.main": "Navegación principal",
    "nav.mobile": "Navegación móvil",
    "nav.openMenu": "Abrir menú",
    "nav.closeMenu": "Cerrar menú",
    // Footer navigation
    "nav.company": "Empresa",
    "nav.resources": "Recursos",
    "nav.legal": "Legal",
    "nav.offices": "Oficinas",
    // CTA buttons
    "cta.tryFree": "Probar gratis",
    "cta.requestDemo": "Solicitar demo",
    "cta.listenDemo": "Escuchar demo",
    "cta.call": "Llamar",
    "cta.calculate": "Calcular costo",
    "cta.downloadPitch": "Descargar presentación",
    "cta.readMore": "Leer más",
    "cta.learnMore": "Saber más",
    "cta.getStarted": "Comenzar",
    "cta.contactUs": "Contáctanos",
    "cta.backToHome": "Volver al inicio",
    // Hero section
    "hero.title": "Asistentes de IA de voz que venden y atienden clientes 24/7",
    "hero.subtitle": "",
    "hero.description":
      "Automatiza todo el recorrido del cliente: desde la primera consulta hasta la factura y confirmación de entrega. Maneja 10× más solicitudes sin colas.",
    "hero.consistentScripts": "Scripts Consistentes",
    "hero.consistentScriptsDesc": "Ofertas personalizadas y cálculos instantáneos",
    "hero.fullIntegration": "Integración Completa",
    "hero.fullIntegrationDesc": "CRM, facturación, almacén, entrega",
    "hero.analytics": "Análisis de Conversaciones",
    "hero.analyticsDesc": "Mejora continua del rendimiento",
    "hero.scalability": "Escalabilidad",
    "hero.scalabilityDesc": "Desde startup hasta Enterprise",
    "hero.trustedBy": "Confiado por empresas de diversas industrias",
    "hero.demoTitle": "Asistente IA en Acción",
    "hero.online": "En línea",
    "hero.aiGreeting": "¡Hola! Mi nombre es Anna, soy el asistente de IA de la empresa. ¿Cómo puedo ayudarte?",
    "hero.userMessage": "Quiero conocer el costo de su solución para hoteles",
    "hero.aiResponse": "¡Excelente! ¿Cuántas habitaciones tiene su hotel? Esto me ayudará a calcular el costo exacto.",
    "hero.you": "Tú",
    "howItWorks.title": "Cómo Funciona el Asistente IA",
    "howItWorks.description":
      "Ciclo completo de procesamiento de solicitudes de clientes desde el primer contacto hasta la finalización del trato",
    "howItWorks.step1.title": "Contacto Entrante",
    "howItWorks.step1.description":
      "El cliente llama, escribe en chat o messenger. La IA responde instantáneamente en cualquier canal.",
    "howItWorks.step2.title": "Reconocimiento y Análisis",
    "howItWorks.step2.description":
      "El sistema entiende la solicitud, determina intenciones y extrae información clave.",
    "howItWorks.step3.title": "Lógica y Acciones",
    "howItWorks.step3.description":
      "La IA aplica reglas de negocio, hace cálculos, crea documentos y realiza operaciones.",
    "howItWorks.step4.title": "Análisis y Mejora",
    "howItWorks.step4.description": "Todos los dialogues se graban y analizan para la mejora continua de la calidad.",
    "howItWorks.responseTime": "Tiempo promedio de respuesta: menos de 2 segundos",
    // Solutions
    "solutions.voiceSalesManager": "Gerente de ventas por voz",
    "solutions.hotelConcierge": "Conserje de hotel",
    "solutions.smb": "Pequeñas y medianas empresas",
    "solutions.enterprise": "Enterprise / Gobierno / Bancos",
    "solutions.custom": "Desarrollo personalizado",
    // Platform
    "platform.architecture": "Arquitectura",
    "platform.demo": "Demo",
    "platform.calculator": "Calculadora de precios",
    // About page
    "about.title": "Acerca de AI Solutions",
    "about.subtitle": "Equipo internacional de expertos en inteligencia artificial",
    "about.description":
      "Hemos unido a los mejores especialistas de Rusia, CEI, Ucrania e India para crear soluciones de IA de vanguardia que transforman los procesos empresariales de empresas en todo el mundo.",
    "about.mission.title": "Nuestra Misión",
    "about.mission.description":
      "Democratizar el acceso a tecnologías de IA avanzadas, haciéndolas disponibles para empresas de cualquier tamaño, desde startups hasta grandes corporaciones.",
    "about.values.title": "Nuestros Valores",
    "about.values.innovation": "Innovación",
    "about.values.innovationDesc": "Implementando constantemente las últimas tecnologías y enfoques",
    "about.values.quality": "Calidad",
    "about.values.qualityDesc": "Los más altos estándares de desarrollo y pruebas",
    "about.values.transparency": "Transparencia",
    "about.values.transparencyDesc": "Comunicación abierta y relaciones honestas con los clientes",
    "about.values.partnership": "Asociación",
    "about.values.partnershipDesc": "Relaciones a largo plazo basadas en el éxito mutuo",
    "about.team.title": "Equipo Internacional",
    "about.team.description":
      "Nuestro equipo une especialistas talentosos de diferentes países, cada uno aportando experiencia única y expertise en inteligencia artificial.",
    "about.offices.title": "Nuestras Oficinas",
    "about.offices.description":
      "Operamos desde tres ubicaciones clave, proporcionando soporte al cliente 24/7 en todo el mundo.",
    // Blog page
    "blog.title": "Blog de AI Solutions",
    "blog.subtitle": "Artículos expertos sobre implementación de inteligencia artificial en negocios",
    "blog.description":
      "Materiales actuales sobre tendencias de IA, casos prácticos de implementación y consejos para optimizar procesos empresariales con inteligencia artificial.",
    "blog.readMore": "Leer más",
    "blog.categories.all": "Todas las Categorías",
    "blog.categories.ai": "Inteligencia Artificial",
    "blog.categories.business": "Negocios",
    "blog.categories.technology": "Tecnología",
    "blog.search.placeholder": "Buscar artículos...",
    "blog.newsletter.title": "Suscripción al Boletín",
    "blog.newsletter.description": "Recibe artículos frescos y noticias sobre el desarrollo de tecnología IA",
    "blog.newsletter.placeholder": "Tu email",
    "blog.newsletter.subscribe": "Suscribirse",
    // Cases page
    "cases.title": "Casos de Implementación de AI Solutions",
    "cases.subtitle": "Resultados reales de nuestros clientes",
    "cases.description":
      "Explora proyectos exitosos de implementación de asistentes IA en varias industrias y aprende cómo nuestras soluciones ayudan a las empresas a aumentar ventas y optimizar procesos.",
    "cases.viewDetails": "Ver Detalles",
    "cases.results": "Resultados",
    "cases.challenge": "Desafío",
    "cases.solution": "Solución",
    "cases.outcome": "Resultado",
    // Contacts page
    "contacts.title": "Contáctanos",
    "contacts.subtitle": "¿Listo para discutir tu proyecto?",
    "contacts.description":
      "Nuestro equipo de expertos está listo para ayudarte a implementar soluciones de IA en tu negocio. Contáctanos de cualquier manera conveniente.",
    "contacts.form.title": "Enviar Mensaje",
    "contacts.form.name": "Nombre",
    "contacts.form.email": "Email",
    "contacts.form.company": "Empresa",
    "contacts.form.message": "Mensaje",
    "contacts.form.send": "Enviar",
    "contacts.offices.title": "Nuestras Oficinas",
    "contacts.social.title": "Redes Sociales",
    // Common
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.success": "Éxito",
    "common.close": "Cerrar",
    "common.open": "Abrir",
    "common.save": "Guardar",
    "common.cancel": "Cancelar",
    "common.submit": "Enviar",
    "common.search": "Buscar",

    "benefits.title": "Ventajas sobre los gerentes habituales",
    "benefits.description":
      "El asistente de IA funciona de manera más eficiente que todo un departamento de ventas con costos significativamente menores",
    "benefits.availability.title": "Disponibilidad 24/7",
    "benefits.availability.description":
      "Sin fines de semana, vacaciones o días de enfermedad. Sus clientes reciben ayuda en cualquier momento.",
    "benefits.availability.stats": "Procesamiento de llamadas ininterrumpido",
    "benefits.parallel.title": "Procesamiento Paralelo",
    "benefits.parallel.description": "Trabajo simultáneo con cientos de clientes sin pérdida de calidad de servicio.",
    "benefits.parallel.stats": "Hasta 1000+ diálogos simultáneos",
    "benefits.conversion.title": "Conversión Estable",
    "benefits.conversion.description":
      "La ausencia del factor humano garantiza un rendimiento de ventas consistentemente alto.",
    "benefits.conversion.stats": "Conversión un 35% mayor",
    "benefits.security.title": "Seguridad de Datos",
    "benefits.security.description": "Cumplimiento total del GDPR, cifrado de todos los datos y registro detallado.",
    "benefits.security.stats": "Certificación ISO 27001",
    "benefits.calculations.title": "Cálculos Instantáneos",
    "benefits.calculations.description":
      "Cálculos automáticos de costos, creación de presupuestos y facturación en tiempo real.",
    "benefits.calculations.stats": "Cálculo en 3 segundos",
    "benefits.analytics.title": "Analítica Detallada",
    "benefits.analytics.description":
      "Estadísticas completas sobre todos los diálogos, conversiones y puntos de mejora de procesos.",
    "benefits.analytics.stats": "Más de 50 métricas de eficiencia",
    "benefits.comparison.title": "Comparación de Costos",
    "benefits.comparison.managers": "Equipo de 5 gerentes",
    "benefits.comparison.ai": "Asistente IA M2",
    "benefits.comparison.savings": "Ahorro",
    "benefits.comparison.multiplier": "10×",
    "benefits.comparison.description": "más solicitudes procesadas a menor costo",

    "solutions.title": "Soluciones para diferentes industrias",
    "solutions.description": "Asistentes de IA listos para usar, configurados para las especificidades de su negocio",
    "solutions.sales.title": "Gerente de Ventas por Voz",
    "solutions.sales.description":
      "Automatización de llamadas entrantes y salientes, calificación de leads, presentación de productos y cierre de tratos.",
    "solutions.sales.feature1": "Manejo de objeciones",
    "solutions.sales.feature2": "Cálculo de costos",
    "solutions.sales.feature3": "Creación de presupuestos",
    "solutions.sales.feature4": "Integración con CRM",
    "solutions.hotel.title": "Conserje IA para Hoteles",
    "solutions.hotel.description":
      "Asistente inteligente para huéspedes: pedidos de comida a la habitación, reserva de servicios, información sobre la ciudad y eventos.",
    "solutions.hotel.feature1": "Pedido de comida a la habitación",
    "solutions.hotel.feature2": "Llamada de taxi",
    "solutions.hotel.feature3": "Reserva de restaurantes",
    "solutions.hotel.feature4": "Información de la ciudad",
    "solutions.smb.title": "Para Pequeñas y Medianas Empresas",
    "solutions.smb.description":
      "Soluciones listas con lanzamiento rápido y configuración mínima para empresas en crecimiento.",
    "solutions.smb.feature1": "Plantillas listas",
    "solutions.smb.feature2": "Inicio rápido",
    "solutions.smb.feature3": "Precio asequible",
    "solutions.smb.feature4": "Integración sencilla",
    "solutions.enterprise.title": "Enterprise y Gobierno",
    "solutions.enterprise.description":
      "Soluciones corporativas con seguridad mejorada, SLA y capacidad de implementación on-premise.",
    "solutions.enterprise.feature1": "SLA alto",
    "solutions.enterprise.feature2": "On-premise",
    "solutions.enterprise.feature3": "Auditoría de seguridad",
    "solutions.enterprise.feature4": "Integraciones personalizadas",
    "solutions.custom.title": "Desarrollo Personalizado",
    "solutions.custom.description":
      "¿Necesita una solución única? Creamos asistentes de IA para cualquier proceso de negocio con integración en sus sistemas y cumplimiento de todos los requisitos de seguridad.",
    "solutions.custom.cta1": "Discutir proyecto",
    "solutions.custom.cta2": "Obtener consulta",
    "solutions.learnMore": "Más información sobre la solución",

    "demo.title": "Pruebe el asistente IA ahora mismo",
    "demo.description": "Hable con nuestro asistente de demostración o llame al número de prueba",
    "demo.voiceDemo.title": "Demostración de Voz",
    "demo.voiceDemo.description": "Haga clic en el micrófono y comience a hablar con el asistente IA",
    "demo.scenario.label": "Elija un escenario:",
    "demo.scenario.sales": "Ventas",
    "demo.scenario.salesDesc": "Llamada de demostración con gerente de ventas",
    "demo.scenario.hotel": "Hotel",
    "demo.scenario.hotelDesc": "Conserje IA de hotel responde preguntas de huéspedes",
    "demo.listening": "Escuchando...",
    "demo.clickToStart": "Haga clic para iniciar la conversación",
    "demo.transcript.title": "Diálogo de demostración:",
    "demo.transcript.ai": "IA",
    "demo.transcript.you": "Tú",
    "demo.transcript.greeting": "¡Hola! Mi nombre es Anna, soy un asistente IA. ¿Cómo puedo ayudar?",
    "demo.transcript.userQuestion": "Háblame de tus soluciones para hoteles",
    "demo.transcript.aiResponse":
      "¡Claro! Nuestro conserje IA ayuda a los huéspedes a pedir comida, reservar servicios...",
    "demo.phone.title": "Llamar al número de demostración",
    "demo.phone.description": "Llame y hable con el asistente IA por teléfono",
    "demo.phone.number": "+34 910 123 456",
    "demo.phone.callNow": "Llamar ahora",
    "demo.phone.notice": "La llamada es gratuita. Funciona 24/7",
    "demo.examples.title": "Ejemplos de diálogos",
    "demo.examples.restaurant": "Cálculo de costos para restaurante",
    "demo.examples.hotelOrder": "Pedido de comida a la habitación del hotel",
    "demo.examples.objections": "Manejo de objeciones del cliente",
    "demo.examples.duration": "Duración:",
    "demo.privacy":
      "Las llamadas de demostración se graban para mejorar la calidad del servicio. No se guardan datos personales.",

    "cta.title": "Comience a automatizar las ventas hoy mismo",
    "cta.description":
      "Reciba una llamada de prueba del asistente IA o solicite una demostración personalizada para su negocio",
    "cta.calculateCost": "Calcular costo",
    "cta.calculateDesc": "Descubra el precio para su proyecto",
    "cta.viewCases": "Ver casos",
    "cta.viewCasesDesc": "Ejemplos de implementación reales",
    "cta.callNow": "Llamar ahora",
    "cta.phoneNumber": "+34 910 123 456",
    "cta.freeTest": "Llamada de prueba gratuita",
    "cta.setupTime": "Configuración en 1 día",
    "cta.support247": "Soporte 24/7",

    // Voice Sales Manager page
    "voiceSales.badge": "Gerente de Ventas IA por Voz",
    "voiceSales.title": "Aumenta las ventas con la voz 24/7",
    "voiceSales.description":
      "Asistente IA que califica leads, presenta productos, calcula costos y emite facturas sin intervención humana",
    "voiceSales.benefit1": "Procesa el 100% de las llamadas entrantes",
    "voiceSales.benefit2": "Funciona 24/7 sin pausas ni festivos",
    "voiceSales.benefit3": "Aumenta la conversión 2-3x",
    "voiceSales.aiManager": "Gerente IA Anna",
    "voiceSales.online": "Actualmente en línea",
    "voiceSales.greeting": "¡Bienvenido! Cuéntame tus necesidades y prepararé una oferta personalizada en 2 minutos",
    "voiceSales.quickResponse": "Respuesta Rápida",
    "voiceSales.personalization": "Personalización",
    "voiceSales.crmIntegration": "Integración CRM",
    "voiceSales.analytics": "Análisis",
    "voiceSales.problemsTitle": "Problemas de ventas tradicionales",
    "voiceSales.problemsSubtitle": "Por qué las empresas pierden hasta el 70% de clientes potenciales",
    "voiceSales.problem1.title": "Pérdida de leads",
    "voiceSales.problem1.description": "Hasta el 70% de las llamadas quedan sin respuesta durante el horario laboral",
    "voiceSales.problem2.title": "Colas y esperas",
    "voiceSales.problem2.description": "Los clientes no esperan y se van a la competencia",
    "voiceSales.problem3.title": "Factor humano",
    "voiceSales.problem3.description": "Scripts diferentes, olvidos, agotamiento emocional",
    "voiceSales.solutionsTitle": "Cómo el gerente IA resuelve estos problemas",
    "voiceSales.solutionsSubtitle": "Ciclo de ventas completo desde el primer contacto hasta el pago",
    "voiceSales.solution1.title": "Calificación de leads",
    "voiceSales.solution1.description": "Determina necesidades, presupuesto y disposición a comprar",
    "voiceSales.solution2.title": "Presentación de producto",
    "voiceSales.solution2.description": "Habla sobre beneficios, maneja objeciones",
    "voiceSales.solution3.title": "Cálculo de costos",
    "voiceSales.solution3.description": "Crea una oferta personalizada en tiempo real",
    "voiceSales.solution4.title": "Emisión de facturas",
    "voiceSales.solution4.description": "Crea y envía factura, contrato, enlace de pago",
    "voiceSales.solution5.title": "Seguimiento",
    "voiceSales.solution5.description": "Recuerda el pago, ofrece servicios adicionales",
    "voiceSales.integrationsTitle": "Conéctate a tus sistemas",
    "voiceSales.integrationsSubtitle": "Integración sin fisuras con la infraestructura existente",
    "voiceSales.integration1.name": "Sistemas CRM",
    "voiceSales.integration1.description": "Salesforce, HubSpot, amoCRM, Bitrix24",
    "voiceSales.integration2.name": "Facturación",
    "voiceSales.integration2.description": "1C, SAP, QuickBooks, sistemas personalizados",
    "voiceSales.integration3.name": "Almacén y entrega",
    "voiceSales.integration3.description": "WMS, servicios de mensajería, logística",
    "voiceSales.integration4.name": "Base de conocimiento",
    "voiceSales.integration4.description": "RAG para responder preguntas complejas",
    "voiceSales.scenariosTitle": "Escenarios de trabajo",
    "voiceSales.scenariosSubtitle": "Ejemplos de diálogos en diferentes situaciones",
    "voiceSales.scenario1.title": "Llamada entrante",
    "voiceSales.scenario1.description": "El cliente llama por publicidad",
    "voiceSales.scenario2.title": "Llamada saliente",
    "voiceSales.scenario2.description": "Llamada a la base de clientes potenciales",
    "voiceSales.scenario3.title": "Carrito abandonado",
    "voiceSales.scenario3.description": "Clientes que no completaron la compra",
    "voiceSales.listenFullDialogue": "Escuchar diálogo completo",
    "voiceSales.resultsTitle": "Resultados de la implementación",
    "voiceSales.resultsSubtitle": "Promedio de métricas de nuestros clientes",
    "voiceSales.kpi1.metric": "Conversión",
    "voiceSales.kpi1.before": "12%",
    "voiceSales.kpi1.after": "28%",
    "voiceSales.kpi1.improvement": "+133%",
    "voiceSales.kpi2.metric": "Tiempo de respuesta",
    "voiceSales.kpi2.before": "45 seg",
    "voiceSales.kpi2.after": "0 seg",
    "voiceSales.kpi2.improvement": "100%",
    "voiceSales.kpi3.metric": "Procesamiento de leads",
    "voiceSales.kpi3.before": "40%",
    "voiceSales.kpi3.after": "100%",
    "voiceSales.kpi3.improvement": "+150%",
    "voiceSales.kpi4.metric": "Costo por lead",
    "voiceSales.kpi4.before": "$50",
    "voiceSales.kpi4.after": "$18",
    "voiceSales.kpi4.improvement": "-64%",
    "voiceSales.casesTitle": "Casos de clientes",
    "voiceSales.casesSubtitle": "Resultados reales de implementación",
    "voiceSales.pricingTitle": "Precios transparentes",
    "voiceSales.pricingSubtitle": "El costo depende de la complejidad de los escenarios y el volumen de llamadas",
    "voiceSales.pricing.setup": "Configuración",
    "voiceSales.pricing.setupPrice": "desde $2,000",
    "voiceSales.pricing.setupDesc": "Costo único de implementación",
    "voiceSales.pricing.perMinute": "Por minuto",
    "voiceSales.pricing.perMinutePrice": "desde $0.05",
    "voiceSales.pricing.perMinuteDesc": "Costo de conversación",
    "voiceSales.pricing.support": "Soporte",
    "voiceSales.pricing.supportPrice": "desde $500/mes",
    "voiceSales.pricing.supportDesc": "Soporte técnico",
    "voiceSales.faqTitle": "Preguntas frecuentes",
    "voiceSales.ctaTitle": "Empieza a aumentar tus ventas hoy mismo",
    "voiceSales.ctaDescription": "Obtén una llamada de demostración y un cálculo personalizado para tu negocio",

    // Hotel Concierge Translations
    "hotelConcierge.badge": "Conserje IA para hoteles",
    "hotelConcierge.title": "Recepción sin colas. Los huéspedes obtienen servicio por voz",
    "hotelConcierge.description":
      "El conserje IA maneja solicitudes de huéspedes 24/7: pedidos de comida, limpieza, taxi, reservas. Aumenta la satisfacción y ahorra tiempo del personal",
    "hotelConcierge.benefit1": "95% satisfacción de huéspedes",
    "hotelConcierge.benefit2": "60% ahorro de tiempo del personal",
    "hotelConcierge.benefit3": "Soporte para más de 10 idiomas",
    "hotelConcierge.functionsTitle": "Funciones del conserje IA",
    "hotelConcierge.functionsSubtitle": "Gama completa de servicios para la comodidad de sus huéspedes",
    "hotelConcierge.function1.title": "Servicio de habitaciones",
    "hotelConcierge.function1.description": "Tomar pedidos, aclarar detalles, enviar a cocina",
    "hotelConcierge.function2.title": "Servicios de limpieza",
    "hotelConcierge.function2.description": "Solicitar limpieza adicional, cambio de ropa de cama, toallas",
    "hotelConcierge.function3.title": "Salida tardía",
    "hotelConcierge.function3.description": "Procesar salida tardía, calcular recargo",
    "hotelConcierge.function4.title": "Reserva de taxi",
    "hotelConcierge.function4.description": "Llamar taxi, traslado al aeropuerto, excursiones",
    "hotelConcierge.function5.title": "Reservas de restaurantes",
    "hotelConcierge.function5.description": "Mesas de restaurante, entradas para eventos",
    "hotelConcierge.function6.title": "Guía de la ciudad",
    "hotelConcierge.function6.description": "Recomendaciones de lugares, rutas, atracciones",
    "hotelConcierge.channelsTitle": "Canales de interacción",
    "hotelConcierge.channelsSubtitle": "Los huéspedes pueden contactar de manera conveniente",
    "hotelConcierge.channel1.name": "Altavoz inteligente en habitación",
    "hotelConcierge.channel1.description": "Control por voz sin teléfono",
    "hotelConcierge.channel2.name": "Teléfono de habitación",
    "hotelConcierge.channel2.description": "Forma familiar de conectar",
    "hotelConcierge.channel3.name": "Interfaz web",
    "hotelConcierge.channel3.description": "A través del sitio web o aplicación del hotel",
    "hotelConcierge.channel4.name": "Mensajeros",
    "hotelConcierge.channel4.description": "WhatsApp, Telegram, Facebook Messenger",
    "hotelConcierge.scenariosTitle": "Escenarios de servicio",
    "hotelConcierge.scenariosSubtitle": "Ejemplos de diálogos con conserje IA",
    "hotelConcierge.scenario1.title": "Servicio de habitaciones",
    "hotelConcierge.scenario1.description": "Pedir desayuno a la habitación",
    "hotelConcierge.scenario1.dialogue1": "Quiero pedir desayuno a mi habitación",
    "hotelConcierge.scenario1.dialogue2":
      "¡Por supuesto! El menú de desayuno está disponible hasta las 11:00. ¿Qué le gustaría pedir?",
    "hotelConcierge.scenario1.dialogue3": "Desayuno continental y café",
    "hotelConcierge.scenario1.dialogue4":
      "¡Genial! Desayuno continental y café. ¿Cuándo le gustaría que se lo entreguen? Son las 9:30 ahora",
    "hotelConcierge.scenario1.dialogue5": "En 30 minutos",
    "hotelConcierge.scenario1.dialogue6":
      "¡Pedido aceptado! Lo entregaremos a las 10:00 en la habitación 205. El costo es de 25€. ¡Gracias!",
    "hotelConcierge.scenario2.title": "Limpieza",
    "hotelConcierge.scenario2.description": "Solicitud de limpieza adicional",
    "hotelConcierge.scenario2.dialogue1": "Necesito toallas extra",
    "hotelConcierge.scenario2.dialogue2": "¡Por supuesto! ¿Cuántas toallas necesita?",
    "hotelConcierge.scenario2.dialogue3": "Dos toallas de baño",
    "hotelConcierge.scenario2.dialogue4":
      "¡De acuerdo! El servicio de limpieza traerá dos toallas de baño a la habitación 205 en 15 minutos",
    "hotelConcierge.scenario3.title": "Transporte",
    "hotelConcierge.scenario3.description": "Reserva de taxi al aeropuerto",
    "hotelConcierge.scenario3.dialogue1": "Necesito un taxi al aeropuerto mañana a las 8 AM",
    "hotelConcierge.scenario3.dialogue2": "¡Por supuesto! Taxi al aeropuerto a las 8:00. ¿Qué aeropuerto?",
    "hotelConcierge.scenario3.dialogue3": "Barajas, terminal 2",
    "hotelConcierge.scenario3.dialogue4":
      "Reserva confirmada! El taxi estará en el hotel mañana a las 8:00. El costo es de 35€. Tiempo de viaje aproximadamente 45 minutos",
    "hotelConcierge.listenDialogue": "Escuchar diálogo",
    "hotelConcierge.demoTitle": "Pruebe el conserje IA",
    "hotelConcierge.demoSubtitle": "Demostración interactiva de capacidades",
    "hotelConcierge.demoReady": "Conserje IA listo para trabajar",
    "hotelConcierge.demoDescription": "Haga clic en el botón y pruebe pedir servicio de habitaciones o llamar un taxi",
    "hotelConcierge.startConversation": "Iniciar conversación",
    "hotelConcierge.callDemo": "Llamar para demo",
    "hotelConcierge.integrationsTitle": "Integraciones",
    "hotelConcierge.integrationsSubtitle": "Conectar a sistemas del hotel",
    "hotelConcierge.integration1.name": "Sistemas PMS",
    "hotelConcierge.integration1.description": "Opera, Fidelio, RoomMaster",
    "hotelConcierge.integration2.name": "Sistemas de restaurante",
    "hotelConcierge.integration2.description": "Integración con cocina y bar",
    "hotelConcierge.integration3.name": "Servicios de taxi",
    "hotelConcierge.integration3.description": "Uber, Bolt, servicios locales",
    "hotelConcierge.integration4.name": "Sistemas de pago",
    "hotelConcierge.integration4.description": "Pago de servicios a través de habitación",
    "hotelConcierge.casesTitle": "Casos de hoteles",
    "hotelConcierge.casesSubtitle": "Resultados de nuestros clientes",
    "hotelConcierge.case1.title": "Boutique Hotel Barcelona",
    "hotelConcierge.case1.description": "Aumentó la satisfacción de los huéspedes en un 40%",
    "hotelConcierge.case1.result1": "95% reseñas positivas",
    "hotelConcierge.case1.result2": "60% ahorro de tiempo del personal",
    "hotelConcierge.case1.result3": "Disponibilidad 24/7",
    "hotelConcierge.case2.title": "Resort Chain Spain",
    "hotelConcierge.case2.description": "Automatizó el 80% de las solicitudes de huéspedes",
    "hotelConcierge.case2.result1": "80% automatización",
    "hotelConcierge.case2.result2": "Soporte para 5 idiomas",
    "hotelConcierge.case2.result3": "300% ROI en un año",
    "hotelConcierge.readFullCase": "Leer caso completo",
    "hotelConcierge.packagesTitle": "Paquetes para hoteles",
    "hotelConcierge.packagesSubtitle": "Elija el plan adecuado",
    "hotelConcierge.package1.name": "Pequeño",
    "hotelConcierge.package1.description": "Hasta 50 habitaciones",
    "hotelConcierge.package1.price": "€299/mes",
    "hotelConcierge.package1.feature1": "Escenarios básicos",
    "hotelConcierge.package1.feature2": "Teléfono + web",
    "hotelConcierge.package1.feature3": "Soporte por email",
    "hotelConcierge.package2.name": "Mediano",
    "hotelConcierge.package2.description": "50-200 habitaciones",
    "hotelConcierge.package2.price": "€599/mes",
    "hotelConcierge.package2.feature1": "Todos los escenarios",
    "hotelConcierge.package2.feature2": "Todos los canales",
    "hotelConcierge.package2.feature3": "Integraciones",
    "hotelConcierge.package2.feature4": "Soporte prioritario",
    "hotelConcierge.package3.name": "Grande",
    "hotelConcierge.package3.description": "Más de 200 habitaciones",
    "hotelConcierge.package3.price": "desde €999/mes",
    "hotelConcierge.package3.feature1": "Personalización completa",
    "hotelConcierge.package3.feature2": "Multilingüe",
    "hotelConcierge.package3.feature3": "Analítica",
    "hotelConcierge.package3.feature4": "Gerente personal",
    "hotelConcierge.popular": "Popular",
    "hotelConcierge.selectPackage": "Seleccionar paquete",
    "hotelConcierge.faqTitle": "Preguntas frecuentes",
    "hotelConcierge.faq1.question": "¿El sistema admite varios idiomas?",
    "hotelConcierge.faq1.answer":
      "Sí, admitimos los principales idiomas europeos: inglés, español, francés, alemán, italiano y otros bajo pedido.",
    "hotelConcierge.faq2.question": "¿Cómo se integra con nuestro PMS?",
    "hotelConcierge.faq2.answer":
      "Nos integramos con PMS populares a través de API. Obtenemos datos sobre huéspedes, habitaciones, facturas para personalizar el servicio.",
    "hotelConcierge.faq3.question": "¿Qué pasa si la IA no puede responder una pregunta?",
    "hotelConcierge.faq3.answer":
      "El sistema transfiere solicitudes complejas a un empleado en vivo con el contexto completo de la conversación.",
    "hotelConcierge.faq4.question": "¿Cuál es el costo de implementación?",
    "hotelConcierge.faq4.answer":
      "El costo depende del tamaño del hotel y el número de integraciones. Implementación básica desde €2,000.",
    "hotelConcierge.ctaTitle": "Mejore el servicio de su hotel",
    "hotelConcierge.ctaDescription": "Obtenga una demostración del conserje IA y cálculo para su hotel",
    "hotelConcierge.aiConcierge": "Conserje IA María",
    "hotelConcierge.readyToHelp": "Lista para ayudar",
    "hotelConcierge.welcomeMessage":
      "¡Bienvenido a nuestro hotel! ¿En qué puedo ayudarle? Puedo tomar pedidos, llamar un taxi o reservar una mesa",
    "hotelConcierge.quickAction1": "Pedido de comida",
    "hotelConcierge.quickAction2": "Llamar taxi",
    "hotelConcierge.quickAction3": "Limpieza",
    "hotelConcierge.quickAction4": "Excursiones",
    "hotelConcierge.guest": "Huésped",
    "hotelConcierge.ai": "IA",
  },
  de: {
    // Navigation
    "nav.solutions": "Lösungen",
    "nav.platform": "Plattform",
    "nav.cases": "Fälle",
    "nav.blog": "Blog",
    "nav.about": "Über uns",
    "nav.contacts": "Kontakte",
    "nav.login": "Anmelden",
    "nav.signup": "Registrieren",
    "nav.home": "AI Solutions Startseite",
    "nav.main": "Hauptnavigation",
    "nav.mobile": "Mobile Navigation",
    "nav.openMenu": "Menü öffnen",
    "nav.closeMenu": "Menü schließen",
    // Footer navigation
    "nav.company": "Unternehmen",
    "nav.resources": "Ressourcen",
    "nav.legal": "Rechtliches",
    "nav.offices": "Büros",
    // CTA buttons
    "cta.tryFree": "Kostenlos testen",
    "cta.requestDemo": "Demo anfordern",
    "cta.listenDemo": "Demo anhören",
    "cta.call": "Anrufen",
    "cta.calculate": "Kosten berechnen",
    "cta.downloadPitch": "Präsentation herunterladen",
    "cta.readMore": "Mehr lesen",
    "cta.learnMore": "Mehr erfahren",
    "cta.getStarted": "Loslegen",
    "cta.contactUs": "Kontaktieren Sie uns",
    "cta.backToHome": "Zurück zur Startseite",
    // Hero section
    "hero.title": "Sprach-KI-Assistenten, die Kunden 24/7 verkaufen und betreuen",
    "hero.subtitle": "",
    "hero.description":
      "Automatisieren Sie die gesamte Customer Journey: von der ersten Anfrage bis zur Rechnung und Lieferbestätigung. Bearbeiten Sie 10× mehr Anfragen ohne Warteschlangen.",
    "hero.consistentScripts": "Konsistente Skripte",
    "hero.consistentScriptsDesc": "Personalisierte Angebote und sofortige Berechnungen",
    "hero.fullIntegration": "Vollständige Integration",
    "hero.fullIntegrationDesc": "CRM, Abrechnung, Lager, Lieferung",
    "hero.analytics": "Gesprächsanalyse",
    "hero.analyticsDesc": "Kontinuierliche Leistungsverbesserung",
    "hero.scalability": "Skalierbarkeit",
    "hero.scalabilityDesc": "Vom Startup bis zum Enterprise",
    "hero.trustedBy": "Vertraut von Unternehmen verschiedener Branchen",
    "hero.demoTitle": "KI-Assistent in Aktion",
    "hero.online": "Online",
    "hero.aiGreeting":
      "Hallo! Mein Name ist Anna, ich bin der KI-Assistent des Unternehmens. Wie kann ich Ihnen helfen?",
    "hero.userMessage": "Ich möchte die Kosten Ihrer Hotellösung erfahren",
    "hero.aiResponse": "Großartig! Wie viele Zimmer hat Ihr Hotel? Das hilft mir, die genauen Kosten zu berechnen.",
    "hero.you": "Sie",
    "howItWorks.title": "Wie der KI-Assistent funktioniert",
    "howItWorks.description":
      "Vollständiger Zyklus der Bearbeitung von Kundenanfragen vom ersten Kontakt bis zum Geschäftsabschluss",
    "howItWorks.step1.title": "Eingehender Kontakt",
    "howItWorks.step1.description":
      "Kunde ruft an, schreibt im Chat oder Messenger. KI antwortet sofort auf jedem Kanal.",
    "howItWorks.step2.title": "Erkennung und Analyse",
    "howItWorks.step2.description":
      "System versteht die Anfrage, bestimmt Absichten und extrahiert Schlüsselinformationen.",
    "howItWorks.step3.title": "Logik und Aktionen",
    "howItWorks.step3.description":
      "KI wendet Geschäftsregeln an, macht Berechnungen, erstellt Dokumente und führt Operationen durch.",
    "howItWorks.step4.title": "Analyse und Verbesserung",
    "howItWorks.step4.description":
      "Alle Dialoge werden aufgezeichnet und analysiert für kontinuierliche Qualitätsverbesserung.",
    "howItWorks.responseTime": "Durchschnittliche Antwortzeit: weniger als 2 Sekunden",
    // Solutions
    "solutions.voiceSalesManager": "Sprach-Verkaufsmanager",
    "solutions.hotelConcierge": "Hotel-Concierge",
    "solutions.smb": "Kleine und mittlere Unternehmen",
    "solutions.enterprise": "Enterprise / Regierung / Banken",
    "solutions.custom": "Individuelle Entwicklung",
    // Platform
    "platform.architecture": "Architektur",
    "platform.demo": "Demo",
    "platform.calculator": "Preisrechner",
    // About page
    "about.title": "Über AI Solutions",
    "about.subtitle": "Internationales Team von Experten für künstliche Intelligenz",
    "about.description":
      "Wir haben die besten Spezialisten aus Russland, GUS, Ukraine und Indien vereint, um hochmoderne KI-Lösungen zu schaffen, die Geschäftsprozesse von Unternehmen weltweit transformieren.",
    "about.mission.title": "Unsere Mission",
    "about.mission.description":
      "Den Zugang zu fortschrittlichen KI-Technologien zu demokratisieren und sie für Unternehmen jeder Größe verfügbar zu machen - von Startups bis zu großen Konzernen.",
    "about.values.title": "Unsere Werte",
    "about.values.innovation": "Innovation",
    "about.values.innovationDesc": "Ständige Implementierung neuester Technologien und Ansätze",
    "about.values.quality": "Qualität",
    "about.values.qualityDesc": "Höchste Standards in Entwicklung und Testing",
    "about.values.transparency": "Transparenz",
    "about.values.transparencyDesc": "Offene Kommunikation und ehrliche Beziehungen zu Kunden",
    "about.values.partnership": "Partnerschaft",
    "about.values.partnershipDesc": "Langfristige Beziehungen basierend auf gegenseitigem Erfolg",
    "about.team.title": "Internationales Team",
    "about.team.description":
      "Unser Team vereint talentierte Spezialisten aus verschiedenen Ländern, die jeweils einzigartige Erfahrung und Expertise in künstlicher Intelligenz einbringen.",
    "about.offices.title": "Unsere Büros",
    "about.offices.description":
      "Wir arbeiten von drei Schlüsselstandorten aus und bieten weltweiten 24/7-Kundensupport.",
    // Blog page
    "blog.title": "AI Solutions Blog",
    "blog.subtitle": "Expertenartikel zur Implementierung künstlicher Intelligenz im Geschäft",
    "blog.description":
      "Aktuelle Materialien zu KI-Trends, praktische Implementierungsfälle und Tipps zur Optimierung von Geschäftsprozessen mit künstlicher Intelligenz.",
    "blog.readMore": "Mehr lesen",
    "blog.categories.all": "Alle Kategorien",
    "blog.categories.ai": "Künstliche Intelligenz",
    "blog.categories.business": "Geschäft",
    "blog.categories.technology": "Technologie",
    "blog.search.placeholder": "Artikel suchen...",
    "blog.newsletter.title": "Newsletter-Abonnement",
    "blog.newsletter.description": "Erhalten Sie frische Artikel und Neuigkeiten über KI-Technologieentwicklung",
    "blog.newsletter.placeholder": "Ihre E-Mail",
    "blog.newsletter.subscribe": "Abonnieren",
    // Cases page
    "cases.title": "AI Solutions Implementierungsfälle",
    "cases.subtitle": "Echte Ergebnisse unserer Kunden",
    "cases.description":
      "Erkunden Sie erfolgreiche KI-Assistenten-Implementierungsprojekte in verschiedenen Branchen und erfahren Sie, wie unsere Lösungen Unternehmen dabei helfen, Verkäufe zu steigern und Prozesse zu optimieren.",
    "cases.viewDetails": "Details anzeigen",
    "cases.results": "Ergebnisse",
    "cases.challenge": "Herausforderung",
    "cases.solution": "Lösung",
    "cases.outcome": "Ergebnis",
    // Contacts page
    "contacts.title": "Kontaktieren Sie uns",
    "contacts.subtitle": "Bereit, Ihr Projekt zu besprechen?",
    "contacts.description":
      "Unser Expertenteam ist bereit, Ihnen bei der Implementierung von KI-Lösungen in Ihrem Unternehmen zu helfen. Kontaktieren Sie uns auf jede bequeme Weise.",
    "contacts.form.title": "Nachricht senden",
    "contacts.form.name": "Name",
    "contacts.form.email": "E-Mail",
    "contacts.form.company": "Unternehmen",
    "contacts.form.message": "Nachricht",
    "contacts.form.send": "Senden",
    "contacts.offices.title": "Unsere Büros",
    "contacts.social.title": "Soziale Medien",
    // Common
    "common.loading": "Laden...",
    "common.error": "Fehler",
    "common.success": "Erfolg",
    "common.close": "Schließen",
    "common.open": "Öffnen",
    "common.save": "Speichern",
    "common.cancel": "Abbrechen",
    "common.submit": "Senden",
    "common.search": "Suchen",

    "benefits.title": "Vorteile gegenüber regulären Managern",
    "benefits.description":
      "Der KI-Assistent arbeitet effizienter als eine ganze Vertriebsabteilung bei deutlich geringeren Kosten",
    "benefits.availability.title": "24/7 Verfügbarkeit",
    "benefits.availability.description":
      "Keine Wochenenden, Urlaube oder Krankheitstage. Ihre Kunden erhalten jederzeit Hilfe.",
    "benefits.availability.stats": "Rund-um-die-Uhr-Anrufverarbeitung",
    "benefits.parallel.title": "Parallele Verarbeitung",
    "benefits.parallel.description": "Gleichzeitige Arbeit mit Hunderten von Kunden ohne Qualitätsverlust.",
    "benefits.parallel.stats": "Bis zu 1000+ gleichzeitige Dialoge",
    "benefits.conversion.title": "Stabile Konversion",
    "benefits.conversion.description":
      "Das Fehlen des menschlichen Faktors gewährleistet konstant hohe Verkaufsergebnisse.",
    "benefits.conversion.stats": "35 % höhere Konversionsrate",
    "benefits.security.title": "Datensicherheit",
    "benefits.security.description":
      "Vollständige DSGVO-Konformität, Verschlüsselung aller Daten und detaillierte Protokollierung.",
    "benefits.security.stats": "ISO 27001 Zertifizierung",
    "benefits.calculations.title": "Sofortige Berechnungen",
    "benefits.calculations.description":
      "Automatische Kostenberechnungen, Angebotserstellung und Rechnungsstellung in Echtzeit.",
    "benefits.calculations.stats": "Berechnung in 3 Sekunden",
    "benefits.analytics.title": "Detaillierte Analysen",
    "benefits.analytics.description":
      "Vollständige Statistiken zu allen Dialogen, Konversionen und Verbesserungspunkten von Prozessen.",
    "benefits.analytics.stats": "Über 50 Effizienzmetriken",
    "benefits.comparison.title": "Kostenvergleich",
    "benefits.comparison.managers": "Team von 5 Managern",
    "benefits.comparison.ai": "KI-Assistent M2",
    "benefits.comparison.savings": "Einsparungen",
    "benefits.comparison.multiplier": "10×",
    "benefits.comparison.description": "mehr bearbeitete Anfragen bei geringeren Kosten",

    "solutions.title": "Lösungen für verschiedene Branchen",
    "solutions.description": "Fertige KI-Assistenten, konfiguriert für die Spezifikationen Ihres Unternehmens",
    "solutions.sales.title": "Sprach-Verkaufsmanager",
    "solutions.sales.description":
      "Automatisierung von eingehenden und ausgehenden Anrufen, Lead-Qualifizierung, Produktpräsentation und Geschäftsabschluss.",
    "solutions.sales.feature1": "Bearbeitung von Einwänden",
    "solutions.sales.feature2": "Kostenberechnung",
    "solutions.sales.feature3": "Angebotserstellung",
    "solutions.sales.feature4": "CRM-Integration",
    "solutions.hotel.title": "KI-Concierge für Hotels",
    "solutions.hotel.description":
      "Intelligenter Assistent für Gäste: Zimmerbestellungen, Servicebuchungen, Stadtinformationen und Veranstaltungen.",
    "solutions.hotel.feature1": "Essensbestellung aufs Zimmer",
    "solutions.hotel.feature2": "Taxi-Ruf",
    "solutions.hotel.feature3": "Restaurantbuchung",
    "solutions.hotel.feature4": "Stadtinformationen",
    "solutions.smb.title": "Für kleine und mittlere Unternehmen",
    "solutions.smb.description":
      "Fertige Lösungen mit schnellem Start und minimaler Einrichtung für wachsende Unternehmen.",
    "solutions.smb.feature1": "Vorgefertigte Vorlagen",
    "solutions.smb.feature2": "Schneller Start",
    "solutions.smb.feature3": "Erschwinglicher Preis",
    "solutions.smb.feature4": "Einfache Integration",
    "solutions.enterprise.title": "Enterprise und Regierung",
    "solutions.enterprise.description":
      "Unternehmenslösungen mit erhöhter Sicherheit, SLA und On-Premise-Bereitstellungsoption.",
    "solutions.enterprise.feature1": "Hohes SLA",
    "solutions.enterprise.feature2": "On-Premise",
    "solutions.enterprise.feature3": "Sicherheitsprüfung",
    "solutions.enterprise.feature4": "Benutzerdefinierte Integrationen",
    "solutions.custom.title": "Individuelle Entwicklung",
    "solutions.custom.description":
      "Benötigen Sie eine einzigartige Lösung? Wir erstellen KI-Assistenten für beliebige Geschäftsprozesse mit Integration in Ihre Systeme und Einhaltung aller Sicherheitsanforderungen.",
    "solutions.custom.cta1": "Projekt besprechen",
    "solutions.custom.cta2": "Beratung erhalten",
    "solutions.learnMore": "Mehr über die Lösung erfahren",

    "demo.title": "Testen Sie den KI-Assistenten jetzt",
    "demo.description": "Sprechen Sie mit unserem Demo-Assistenten oder rufen Sie die Testnummer an",
    "demo.voiceDemo.title": "Sprach-Demo",
    "demo.voiceDemo.description": "Klicken Sie auf das Mikrofon und beginnen Sie, mit dem KI-Assistenten zu sprechen",
    "demo.scenario.label": "Szenario wählen:",
    "demo.scenario.sales": "Vertrieb",
    "demo.scenario.salesDesc": "Demo-Anruf mit Verkaufsmanager",
    "demo.scenario.hotel": "Hotel",
    "demo.scenario.hotelDesc": "Hotel-KI-Concierge beantwortet Gästefragen",
    "demo.listening": "Höre zu...",
    "demo.clickToStart": "Klicken, um das Gespräch zu starten",
    "demo.transcript.title": "Demo-Dialog:",
    "demo.transcript.ai": "KI",
    "demo.transcript.you": "Sie",
    "demo.transcript.greeting": "Hallo! Mein Name ist Anna, ich bin KI-Assistent. Wie kann ich Ihnen helfen?",
    "demo.transcript.userQuestion": "Erzählen Sie mir von Ihren Hotellösungen",
    "demo.transcript.aiResponse":
      "Natürlich! Unser KI-Concierge hilft Gästen, Essen zu bestellen, Dienstleistungen zu buchen...",
    "demo.phone.title": "Demo-Nummer anrufen",
    "demo.phone.description": "Rufen Sie an und sprechen Sie mit dem KI-Assistenten per Telefon",
    "demo.phone.number": "+49 (0)30 123 456 78",
    "demo.phone.callNow": "Jetzt anrufen",
    "demo.phone.notice": "Der Anruf ist kostenlos. Funktioniert 24/7",
    "demo.examples.title": "Dialogbeispiele",
    "demo.examples.restaurant": "Kostenberechnung für Restaurant",
    "demo.examples.hotelOrder": "Zimmerservice-Bestellung im Hotel",
    "demo.examples.objections": "Bearbeitung von Kundeneinwänden",
    "demo.examples.duration": "Dauer:",
    "demo.privacy":
      "Demo-Anrufe werden zur Verbesserung der Servicequalität aufgezeichnet. Persönliche Daten werden nicht gespeichert.",

    "cta.title": "Beginnen Sie noch heute mit der Automatisierung von Verkäufen",
    "cta.description":
      "Erhalten Sie einen Testanruf vom KI-Assistenten oder fordern Sie eine personalisierte Demo für Ihr Unternehmen an",
    "cta.calculateCost": "Kosten berechnen",
    "cta.calculateDesc": "Entdecken Sie den Preis für Ihr Projekt",
    "cta.viewCases": "Fälle anzeigen",
    "cta.viewCasesDesc": "Reale Implementierungsbeispiele",
    "cta.callNow": "Jetzt anrufen",
    "cta.phoneNumber": "+49 (0)30 123 456 78",
    "cta.freeTest": "Kostenloser Testanruf",
    "cta.setupTime": "Einrichtung in 1 Tag",
    "cta.support247": "24/7 Support",

    // Voice Sales Manager page
    "voiceSales.badge": "Sprach-KI-Verkaufsmanager",
    "voiceSales.title": "Umsätze steigern mit Sprache 24/7",
    "voiceSales.description":
      "KI-Assistent, der Leads qualifiziert, Produkte präsentiert, Kosten berechnet und Rechnungen ohne menschliches Zutun ausstellt",
    "voiceSales.benefit1": "Bearbeitet 100 % der eingehenden Anrufe",
    "voiceSales.benefit2": "Funktioniert 24/7 ohne Pausen oder Feiertage",
    "voiceSales.benefit3": "Erhöht die Konversion um das 2-3-fache",
    "voiceSales.aiManager": "KI-Manager Anna",
    "voiceSales.online": "Aktuell online",
    "voiceSales.greeting":
      "Willkommen! Erzählen Sie mir von Ihren Bedürfnissen, und ich bereite ein personalisiertes Angebot in 2 Minuten vor",
    "voiceSales.quickResponse": "Schnelle Antwort",
    "voiceSales.personalization": "Personalisierung",
    "voiceSales.crmIntegration": "CRM-Integration",
    "voiceSales.analytics": "Analyse",
    "voiceSales.problemsTitle": "Probleme traditioneller Verkäufe",
    "voiceSales.problemsSubtitle": "Warum Unternehmen bis zu 70 % der potenziellen Kunden verlieren",
    "voiceSales.problem1.title": "Verlorene Leads",
    "voiceSales.problem1.description": "Bis zu 70 % der Anrufe bleiben während der Geschäftszeiten unbeantwortet",
    "voiceSales.problem2.title": "Warteschlangen und Wartezeiten",
    "voiceSales.problem2.description": "Kunden warten nicht und gehen zu Wettbewerbern",
    "voiceSales.problem3.title": "Menschlicher Faktor",
    "voiceSales.problem3.description": "Unterschiedliche Skripte, Vergesslichkeit, emotionale Erschöpfung",
    "voiceSales.solutionsTitle": "Wie der KI-Manager diese Probleme löst",
    "voiceSales.solutionsSubtitle": "Vollständiger Verkaufszyklus vom ersten Kontakt bis zur Zahlung",
    "voiceSales.solution1.title": "Lead-Qualifizierung",
    "voiceSales.solution1.description": "Bestimmt Bedürfnisse, Budget und Kaufbereitschaft",
    "voiceSales.solution2.title": "Produktpräsentation",
    "voiceSales.solution2.description": "Spricht über Vorteile, bearbeitet Einwände",
    "voiceSales.solution3.title": "Kostenberechnung",
    "voiceSales.solution3.description": "Erstellt personalisiertes Angebot in Echtzeit",
    "voiceSales.solution4.title": "Rechnungsstellung",
    "voiceSales.solution4.description": "Erstellt und sendet Rechnung, Vertrag, Zahlungslink",
    "voiceSales.solution5.title": "Nachverfolgung",
    "voiceSales.solution5.description": "Erinnert an Zahlung, bietet zusätzliche Dienstleistungen an",
    "voiceSales.integrationsTitle": "Verbindung zu Ihren Systemen",
    "voiceSales.integrationsSubtitle": "Nahtlose Integration in die bestehende Infrastruktur",
    "voiceSales.integration1.name": "CRM-Systeme",
    "voiceSales.integration1.description": "Salesforce, HubSpot, amoCRM, Bitrix24",
    "voiceSales.integration2.name": "Abrechnung",
    "voiceSales.integration2.description": "1C, SAP, QuickBooks, kundenspezifische Systeme",
    "voiceSales.integration3.name": "Lager und Lieferung",
    "voiceSales.integration3.description": "WMS, Kurierdienste, Logistik",
    "voiceSales.integration4.name": "Wissensdatenbank",
    "voiceSales.integration4.description": "RAG zur Beantwortung komplexer Fragen",
    "voiceSales.scenariosTitle": "Arbeitsszenarien",
    "voiceSales.scenariosSubtitle": "Beispiele für Dialoge in verschiedenen Situationen",
    "voiceSales.scenario1.title": "Eingehender Anruf",
    "voiceSales.scenario1.description": "Kunde ruft wegen Werbung an",
    "voiceSales.scenario2.title": "Ausgehender Anruf",
    "voiceSales.scenario2.description": "Anruf bei potenziellen Kunden",
    "voiceSales.scenario3.title": "Verlassener Warenkorb",
    "voiceSales.scenario3.description": "Kundenrückgewinnung, die den Kauf nicht abgeschlossen haben",
    "voiceSales.listenFullDialogue": "Vollständigen Dialog anhören",
    "voiceSales.resultsTitle": "Implementierungsergebnisse",
    "voiceSales.resultsSubtitle": "Durchschnittliche Kennzahlen unserer Kunden",
    "voiceSales.kpi1.metric": "Konversion",
    "voiceSales.kpi1.before": "12 %",
    "voiceSales.kpi1.after": "28 %",
    "voiceSales.kpi1.improvement": "+133 %",
    "voiceSales.kpi2.metric": "Reaktionszeit",
    "voiceSales.kpi2.before": "45 Sek.",
    "voiceSales.kpi2.after": "0 Sek.",
    "voiceSales.kpi2.improvement": "100 %",
    "voiceSales.kpi3.metric": "Lead-Verarbeitung",
    "voiceSales.kpi3.before": "40 %",
    "voiceSales.kpi3.after": "100 %",
    "voiceSales.kpi3.improvement": "+150 %",
    "voiceSales.kpi4.metric": "Kosten pro Lead",
    "voiceSales.kpi4.before": "$50",
    "voiceSales.kpi4.after": "$18",
    "voiceSales.kpi4.improvement": "-64 %",
    "voiceSales.casesTitle": "Kundenfälle",
    "voiceSales.casesSubtitle": "Reale Implementierungsergebnisse",
    "voiceSales.pricingTitle": "Transparente Preise",
    "voiceSales.pricingSubtitle": "Die Kosten hängen von der Komplexität der Szenarien und dem Anrufvolumen ab",
    "voiceSales.pricing.setup": "Einrichtung",
    "voiceSales.pricing.setupPrice": "ab $2.000",
    "voiceSales.pricing.setupDesc": "Einmalige Implementierungskosten",
    "voiceSales.pricing.perMinute": "Pro Minute",
    "voiceSales.pricing.perMinutePrice": "ab $0.05",
    "voiceSales.pricing.perMinuteDesc": "Gesprächskosten",
    "voiceSales.pricing.support": "Support",
    "voiceSales.pricing.supportPrice": "ab $500/Monat",
    "voiceSales.pricing.supportDesc": "Technischer Support",
    "voiceSales.faqTitle": "Häufig gestellte Fragen",
    "voiceSales.ctaTitle": "Beginnen Sie noch heute mit der Umsatzsteigerung",
    "voiceSales.ctaDescription":
      "Erhalten Sie einen Demo-Anruf und eine personalisierte Kalkulation für Ihr Unternehmen",

    // Hotel Concierge Translations
    "hotelConcierge.badge": "KI-Concierge für Hotels",
    "hotelConcierge.title": "Rezeption ohne Warteschlangen. Gäste erhalten Service per Sprache",
    "hotelConcierge.description":
      "KI-Concierge bearbeitet Gästeanfragen 24/7: Essensbestellungen, Reinigung, Taxi, Buchungen. Erhöht die Zufriedenheit und spart Personalzeit",
    "hotelConcierge.benefit1": "95% Gästezufriedenheit",
    "hotelConcierge.benefit2": "60% Zeitersparnis für Personal",
    "hotelConcierge.benefit3": "Unterstützung für über 10 Sprachen",
    "hotelConcierge.functionsTitle": "KI-Concierge-Funktionen",
    "hotelConcierge.functionsSubtitle": "Vollständiges Serviceangebot für den Komfort Ihrer Gäste",
    "hotelConcierge.function1.title": "Zimmerservice-Bestellungen",
    "hotelConcierge.function1.description": "Bestellungen aufnehmen, Details klären, an Küche senden",
    "hotelConcierge.function2.title": "Reinigungsdienste",
    "hotelConcierge.function2.description": "Zusätzliche Reinigung, Wäschewechsel, Handtücher anfordern",
    "hotelConcierge.function3.title": "Später Check-out",
    "hotelConcierge.function3.description": "Späten Check-out bearbeiten, Aufpreis berechnen",
    "hotelConcierge.function4.title": "Taxi-Buchung",
    "hotelConcierge.function4.description": "Taxi rufen, Flughafentransfer, Ausflüge",
    "hotelConcierge.function5.title": "Restaurant-Reservierungen",
    "hotelConcierge.function5.description": "Restauranttische, Event-Tickets",
    "hotelConcierge.function6.title": "Stadtführer",
    "hotelConcierge.function6.description": "Ortsempfehlungen, Routen, Sehenswürdigkeiten",
    "hotelConcierge.channelsTitle": "Interaktionskanäle",
    "hotelConcierge.channelsSubtitle": "Gäste können auf bequeme Weise Kontakt aufnehmen",
    "hotelConcierge.channel1.name": "Smart Speaker im Zimmer",
    "hotelConcierge.channel1.description": "Sprachsteuerung ohne Telefon",
    "hotelConcierge.channel2.name": "Zimmertelefon",
    "hotelConcierge.channel2.description": "Vertraute Art der Verbindung",
    "hotelConcierge.channel3.name": "Web-Interface",
    "hotelConcierge.channel3.description": "Über Hotel-Website oder App",
    "hotelConcierge.channel4.name": "Messenger",
    "hotelConcierge.channel4.description": "WhatsApp, Telegram, Facebook Messenger",
    "hotelConcierge.scenariosTitle": "Service-Szenarien",
    "hotelConcierge.scenariosSubtitle": "Beispiele für Dialoge mit KI-Concierge",
    "hotelConcierge.scenario1.title": "Zimmerservice",
    "hotelConcierge.scenario1.description": "Frühstück aufs Zimmer bestellen",
    "hotelConcierge.scenario1.dialogue1": "Ich möchte Frühstück auf mein Zimmer bestellen",
    "hotelConcierge.scenario1.dialogue2":
      "Natürlich! Das Frühstücksmenü ist bis 11:00 Uhr verfügbar. Was möchten Sie bestellen?",
    "hotelConcierge.scenario1.dialogue3": "Kontinentales Frühstück und Kaffee",
    "hotelConcierge.scenario1.dialogue4":
      "Großartig! Kontinentales Frühstück und Kaffee. Wann möchten Sie es geliefert haben? Es ist jetzt 9:30 Uhr",
    "hotelConcierge.scenario1.dialogue5": "In 30 Minuten",
    "hotelConcierge.scenario1.dialogue6":
      "Bestellung angenommen! Wir liefern um 10:00 Uhr in Zimmer 205. Kosten sind 25€. Vielen Dank!",
    "hotelConcierge.scenario2.title": "Reinigung",
    "hotelConcierge.scenario2.description": "Anfrage für zusätzliche Reinigung",
    "hotelConcierge.scenario2.dialogue1": "Ich brauche zusätzliche Handtücher",
    "hotelConcierge.scenario2.dialogue2": "Natürlich! Wie viele Handtücher benötigen Sie?",
    "hotelConcierge.scenario2.dialogue3": "Zwei Badetücher",
    "hotelConcierge.scenario2.dialogue4":
      "In Ordnung! Die Reinigung bringt zwei Badetücher in Zimmer 205 innerhalb von 15 Minuten",
    "hotelConcierge.scenario3.title": "Transport",
    "hotelConcierge.scenario3.description": "Taxi zum Flughafen buchen",
    "hotelConcierge.scenario3.dialogue1": "Ich brauche morgen um 8 Uhr ein Taxi zum Flughafen",
    "hotelConcierge.scenario3.dialogue2": "Natürlich! Taxi zum Flughafen um 8:00 Uhr. Welcher Flughafen?",
    "hotelConcierge.scenario3.dialogue3": "Barajas, Terminal 2",
    "hotelConcierge.scenario3.dialogue4":
      "Buchung bestätigt! Das Taxi wird morgen um 8:00 Uhr am Hotel sein. Kosten sind 35€. Fahrzeit etwa 45 Minuten",
    "hotelConcierge.listenDialogue": "Dialog anhören",
    "hotelConcierge.demoTitle": "KI-Concierge ausprobieren",
    "hotelConcierge.demoSubtitle": "Interaktive Demonstration der Fähigkeiten",
    "hotelConcierge.demoReady": "KI-Concierge bereit zu arbeiten",
    "hotelConcierge.demoDescription":
      "Klicken Sie auf die Schaltfläche und versuchen Sie, Zimmerservice zu bestellen oder ein Taxi zu rufen",
    "hotelConcierge.startConversation": "Gespräch beginnen",
    "hotelConcierge.callDemo": "Für Demo anrufen",
    "hotelConcierge.integrationsTitle": "Integrationen",
    "hotelConcierge.integrationsSubtitle": "Verbindung zu Hotelsystemen",
    "hotelConcierge.integration1.name": "PMS-Systeme",
    "hotelConcierge.integration1.description": "Opera, Fidelio, RoomMaster",
    "hotelConcierge.integration2.name": "Restaurant-Systeme",
    "hotelConcierge.integration2.description": "Integration mit Küche und Bar",
    "hotelConcierge.integration3.name": "Taxi-Dienste",
    "hotelConcierge.integration3.description": "Uber, Bolt, lokale Dienste",
    "hotelConcierge.integration4.name": "Zahlungssysteme",
    "hotelConcierge.integration4.description": "Servicezahlung über Zimmer",
    "hotelConcierge.casesTitle": "Hotel-Fälle",
    "hotelConcierge.casesSubtitle": "Ergebnisse unserer Kunden",
    "hotelConcierge.case1.title": "Boutique Hotel Barcelona",
    "hotelConcierge.case1.description": "Gästezufriedenheit um 40% erhöht",
    "hotelConcierge.case1.result1": "95% positive Bewertungen",
    "hotelConcierge.case1.result2": "60% Zeitersparnis für Personal",
    "hotelConcierge.case1.result3": "24/7 Verfügbarkeit",
    "hotelConcierge.case2.title": "Resort Chain Spain",
    "hotelConcierge.case2.description": "80% der Gästeanfragen automatisiert",
    "hotelConcierge.case2.result1": "80% Automatisierung",
    "hotelConcierge.case2.result2": "Unterstützung für 5 Sprachen",
    "hotelConcierge.case2.result3": "300% ROI in einem Jahr",
    "hotelConcierge.readFullCase": "Vollständigen Fall lesen",
    "hotelConcierge.packagesTitle": "Hotel-Pakete",
    "hotelConcierge.packagesSubtitle": "Wählen Sie den richtigen Plan",
    "hotelConcierge.package1.name": "Klein",
    "hotelConcierge.package1.description": "Bis zu 50 Zimmer",
    "hotelConcierge.package1.price": "€299/Monat",
    "hotelConcierge.package1.feature1": "Grundszenarien",
    "hotelConcierge.package1.feature2": "Telefon + Web",
    "hotelConcierge.package1.feature3": "E-Mail-Support",
    "hotelConcierge.package2.name": "Mittel",
    "hotelConcierge.package2.description": "50-200 Zimmer",
    "hotelConcierge.package2.price": "€599/Monat",
    "hotelConcierge.package2.feature1": "Alle Szenarien",
    "hotelConcierge.package2.feature2": "Alle Kanäle",
    "hotelConcierge.package2.feature3": "Integrationen",
    "hotelConcierge.package2.feature4": "Prioritäts-Support",
    "hotelConcierge.package3.name": "Groß",
    "hotelConcierge.package3.description": "Über 200 Zimmer",
    "hotelConcierge.package3.price": "ab €999/Monat",
    "hotelConcierge.package3.feature1": "Vollständige Anpassung",
    "hotelConcierge.package3.feature2": "Mehrsprachig",
    "hotelConcierge.package3.feature3": "Analytik",
    "hotelConcierge.package3.feature4": "Persönlicher Manager",
    "hotelConcierge.popular": "Beliebt",
    "hotelConcierge.selectPackage": "Paket auswählen",
    "hotelConcierge.faqTitle": "Häufig gestellte Fragen",
    "hotelConcierge.faq1.question": "Unterstützt das System mehrere Sprachen?",
    "hotelConcierge.faq1.answer":
      "Ja, wir unterstützen die wichtigsten europäischen Sprachen: Englisch, Spanisch, Französisch, Deutsch, Italienisch und andere auf Anfrage.",
    "hotelConcierge.faq2.question": "Wie integriert es sich mit unserem PMS?",
    "hotelConcierge.faq2.answer":
      "Wir integrieren uns über API mit beliebten PMS. Wir erhalten Daten über Gäste, Zimmer, Rechnungen zur Personalisierung des Service.",
    "hotelConcierge.faq3.question": "Was ist, wenn die KI eine Frage nicht beantworten kann?",
    "hotelConcierge.faq3.answer":
      "Das System überträgt komplexe Anfragen an einen Live-Mitarbeiter mit vollständigem Gesprächskontext.",
    "hotelConcierge.faq4.question": "Was sind die Implementierungskosten?",
    "hotelConcierge.faq4.answer":
      "Die Kosten hängen von der Hotelgröße und der Anzahl der Integrationen ab. Grundimplementierung ab €2.000.",
    "hotelConcierge.ctaTitle": "Verbessern Sie Ihren Hotelservice",
    "hotelConcierge.ctaDescription": "Erhalten Sie eine KI-Concierge-Demo und Berechnung für Ihr Hotel",
    "hotelConcierge.aiConcierge": "KI-Concierge Maria",
    "hotelConcierge.readyToHelp": "Bereit zu helfen",
    "hotelConcierge.welcomeMessage":
      "Willkommen in unserem Hotel! Wie kann ich helfen? Ich kann Bestellungen aufnehmen, ein Taxi rufen oder einen Tisch reservieren",
    "hotelConcierge.quickAction1": "Essensbestellung",
    "hotelConcierge.quickAction2": "Taxi rufen",
    "hotelConcierge.quickAction3": "Reinigung",
    "hotelConcierge.quickAction4": "Ausflüge",
    "hotelConcierge.guest": "Gast",
    "hotelConcierge.ai": "KI",
  },
  nl: {
    // Navigation
    "nav.solutions": "Oplossingen",
    "nav.platform": "Platform",
    "nav.cases": "Cases",
    "nav.blog": "Blog",
    "nav.about": "Over ons",
    "nav.contacts": "Contacten",
    "nav.login": "Inloggen",
    "nav.signup": "Registreren",
    "nav.home": "AI Solutions Homepage",
    "nav.main": "Hoofdnavigatie",
    "nav.mobile": "Mobiele navigatie",
    "nav.openMenu": "Menu openen",
    "nav.closeMenu": "Menu sluiten",
    // Footer navigation
    "nav.company": "Bedrijf",
    "nav.resources": "Bronnen",
    "nav.legal": "Juridisch",
    "nav.offices": "Kantoren",
    // CTA buttons
    "cta.tryFree": "Gratis proberen",
    "cta.requestDemo": "Demo aanvragen",
    "cta.listenDemo": "Demo beluisteren",
    "cta.call": "Bellen",
    "cta.calculate": "Kosten berekenen",
    "cta.downloadPitch": "Presentatie downloaden",
    "cta.readMore": "Meer lezen",
    "cta.learnMore": "Meer leren",
    "cta.getStarted": "Aan de slag",
    "cta.contactUs": "Neem contact op",
    "cta.backToHome": "Terug naar home",
    // Hero section
    "hero.title": "Spraak AI-assistenten die klanten 24/7 verkopen en bedienen",
    "hero.subtitle": "",
    "hero.description":
      "Automatiseer de hele klantreis: van eerste aanvraag tot factuur en leveringsbevestiging. Behandel 10× meer verzoeken zonder wachtrijen.",
    "hero.consistentScripts": "Consistente Scripts",
    "hero.consistentScriptsDesc": "Gepersonaliseerde aanbiedingen en directe berekeningen",
    "hero.fullIntegration": "Volledige Integratie",
    "hero.fullIntegrationDesc": "CRM, facturering, magazijn, levering",
    "hero.analytics": "Gesprekanalyse",
    "hero.analyticsDesc": "Continue prestatieverbetering",
    "hero.scalability": "Schaalbaarheid",
    "hero.scalabilityDesc": "Van startup tot Enterprise",
    "hero.trustedBy": "Vertrouwd door bedrijven uit verschillende sectoren",
    "hero.demoTitle": "AI-assistent in Actie",
    "hero.online": "Online",
    "hero.aiGreeting": "Hallo! Mijn naam is Anna, ik ben de AI-assistent van het bedrijf. Hoe kan ik u helpen?",
    "hero.userMessage": "Ik wil de kosten van uw hoteloplossing weten",
    "hero.aiResponse": "Geweldig! Hoeveel kamers heeft uw hotel? Dit helpt me de exacte kosten te berekenen.",
    "hero.you": "U",
    "howItWorks.title": "Hoe de AI-assistent werkt",
    "howItWorks.description":
      "Volledige cyclus van verwerking van klantverzoeken van eerste contact tot deal voltooiing",
    "howItWorks.step1.title": "Inkomend Contact",
    "howItWorks.step1.description": "Klant belt, schrijft in chat of messenger. AI reageert direct op elk kanaal.",
    "howItWorks.step2.title": "Herkenning en Analyse",
    "howItWorks.step2.description": "Systeem begrijpt het verzoek, bepaalt intenties en extraheert sleutelinformatie.",
    "howItWorks.step3.title": "Logica en Acties",
    "howItWorks.step3.description":
      "AI past bedrijfsregels toe, maakt berekeningen, creëert documenten en voert operaties uit.",
    "howItWorks.step4.title": "Analyse en Verbetering",
    "howItWorks.step4.description":
      "Alle dialogen worden opgenomen en geanalyseerd voor continue kwaliteitsverbetering.",
    "howItWorks.responseTime": "Gemiddelde reactietijd: minder dan 2 seconden",
    // Solutions
    "solutions.voiceSalesManager": "Spraak verkoopmanager",
    "solutions.hotelConcierge": "Hotel concierge",
    "solutions.smb": "Kleine en middelgrote bedrijven",
    "solutions.enterprise": "Enterprise / Overheid / Banken",
    "solutions.custom": "Maatwerk ontwikkeling",
    // Platform
    "platform.architecture": "Architectuur",
    "platform.demo": "Demo",
    "platform.calculator": "Prijscalculator",
    // About page
    "about.title": "Over AI Solutions",
    "about.subtitle": "Internationaal team van kunstmatige intelligentie experts",
    "about.description":
      "We hebben de beste specialisten uit Rusland, GOS, Oekraïne en India verenigd om geavanceerde AI-oplossingen te creëren die bedrijfsprocessen van bedrijven wereldwijd transformeren.",
    "about.mission.title": "Onze Missie",
    "about.mission.description":
      "Toegang tot geavanceerde AI-technologieën democratiseren, ze beschikbaar maken voor bedrijven van elke grootte - van startups tot grote corporaties.",
    "about.values.title": "Onze Waarden",
    "about.values.innovation": "Innovatie",
    "about.values.innovationDesc": "Voortdurend implementeren van de nieuwste technologieën en benaderingen",
    "about.values.quality": "Kwaliteit",
    "about.values.qualityDesc": "Hoogste standaarden van ontwikkeling en testen",
    "about.values.transparency": "Transparantie",
    "about.values.transparencyDesc": "Open communicatie en eerlijke relaties met klanten",
    "about.values.partnership": "Partnerschap",
    "about.values.partnershipDesc": "Langetermijnrelaties gebaseerd op wederzijds succes",
    "about.team.title": "Internationaal Team",
    "about.team.description":
      "Ons team verenigt getalenteerde specialisten uit verschillende landen, elk met unieke ervaring en expertise in kunstmatige intelligentie.",
    "about.offices.title": "Onze Kantoren",
    "about.offices.description":
      "We werken vanuit drie belangrijke locaties en bieden wereldwijd 24/7 klantenondersteuning.",
    // Blog page
    "blog.title": "AI Solutions Blog",
    "blog.subtitle": "Expertartikelen over implementatie van kunstmatige intelligentie in bedrijven",
    "blog.description":
      "Actuele materialen over AI-trends, praktische implementatiecases en tips voor het optimaliseren van bedrijfsprocessen met kunstmatige intelligentie.",
    "blog.readMore": "Meer lezen",
    "blog.categories.all": "Alle Categorieën",
    "blog.categories.ai": "Kunstmatige Intelligentie",
    "blog.categories.business": "Bedrijf",
    "blog.categories.technology": "Technologie",
    "blog.search.placeholder": "Zoek artikelen...",
    "blog.newsletter.title": "Nieuwsbrief Abonnement",
    "blog.newsletter.description": "Ontvang verse artikelen en nieuws over AI-technologie ontwikkeling",
    "blog.newsletter.placeholder": "Uw email",
    "blog.newsletter.subscribe": "Abonneren",
    // Cases page
    "cases.title": "AI Solutions Implementatie Cases",
    "cases.subtitle": "Echte resultaten van onze klanten",
    "cases.description":
      "Verken succesvolle AI-assistent implementatieprojecten in verschillende industrieën en leer hoe onze oplossingen bedrijven helpen verkopen te verhogen en processen te optimaliseren.",
    "cases.viewDetails": "Bekijk Details",
    "cases.results": "Resultaten",
    "cases.challenge": "Uitdaging",
    "cases.solution": "Oplossing",
    "cases.outcome": "Uitkomst",
    // Contacts page
    "contacts.title": "Neem Contact Op",
    "contacts.subtitle": "¿Klaar om uw project te bespreken?",
    "contacts.description":
      "Ons team van experts is klaar om u te helpen AI-oplossingen in uw bedrijf te implementeren. Neem op elke handige manier contact met ons op.",
    "contacts.form.title": "Bericht Verzenden",
    "contacts.form.name": "Naam",
    "contacts.form.email": "Email",
    "contacts.form.company": "Bedrijf",
    "contacts.form.message": "Bericht",
    "contacts.form.send": "Verzenden",
    "contacts.offices.title": "Onze Kantoren",
    "contacts.social.title": "Sociale Media",
    // Common
    "common.loading": "Laden...",
    "common.error": "Fout",
    "common.success": "Succes",
    "common.close": "Sluiten",
    "common.open": "Openen",
    "common.save": "Opslaan",
    "common.cancel": "Annuleren",
    "common.submit": "Verzenden",
    "common.search": "Zoeken",

    "benefits.title": "Voordelen ten opzichte van reguliere managers",
    "benefits.description":
      "AI-assistent werkt efficiënter dan een volledige verkoopafdeling tegen aanzienlijk lagere kosten",
    "benefits.availability.title": "24/7 Beschikbaarheid",
    "benefits.availability.description": "Geen weekenden, vakanties of ziektedagen. Uw klanten krijgen altijd hulp.",
    "benefits.availability.stats": "Oproepverwerking de klok rond",
    "benefits.parallel.title": "Parallelle Verwerking",
    "benefits.parallel.description": "Gelijktijdig werken met honderden klanten zonder verlies van servicekwaliteit.",
    "benefits.parallel.stats": "Tot 1000+ gelijktijdige dialogen",
    "benefits.conversion.title": "Stabiele Conversie",
    "benefits.conversion.description":
      "Afwezigheid van de menselijke factor zorgt voor constant hoge verkoopresultaten.",
    "benefits.conversion.stats": "35% hogere conversie",
    "benefits.security.title": "Gegevensbeveiliging",
    "benefits.security.description": "Volledige GDPR-naleving, encryptie van alle gegevens en gedetailleerde logging.",
    "benefits.security.stats": "ISO 27001 Certificering",
    "benefits.calculations.title": "Directe Berekeningen",
    "benefits.calculations.description": "Automatische kostenberekeningen, offertecreatie en facturatie in realtime.",
    "benefits.calculations.stats": "Berekening in 3 seconden",
    "benefits.analytics.title": "Gedetailleerde Analyse",
    "benefits.analytics.description":
      "Volledige statistieken over alle dialogen, conversies en punten voor procesverbetering.",
    "benefits.analytics.stats": "50+ efficiëntiemetrieken",
    "benefits.comparison.title": "Kostenvergelijking",
    "benefits.comparison.managers": "Team van 5 managers",
    "benefits.comparison.ai": "AI-assistent M2",
    "benefits.comparison.savings": "Besparingen",
    "benefits.comparison.multiplier": "10×",
    "benefits.comparison.description": "meer verwerkte aanvragen tegen lagere kosten",

    "solutions.title": "Oplossingen voor verschillende sectoren",
    "solutions.description": "Kant-en-klare AI-assistenten, geconfigureerd voor uw bedrijfsspecifieke kenmerken",
    "solutions.sales.title": "Spraak Verkoopmanager",
    "solutions.sales.description":
      "Automatisering van inkomende en uitgaande oproepen, leadkwalificatie, productpresentatie en dealafsluiting.",
    "solutions.sales.feature1": "Omgaan met bezwaren",
    "solutions.sales.feature2": "Kostenberekening",
    "solutions.sales.feature3": "Offertecreatie",
    "solutions.sales.feature4": "CRM-integratie",
    "solutions.hotel.title": "AI Concierge voor Hotels",
    "solutions.hotel.description":
      "Slimme assistent voor gasten: kamerbestellingen, serviceboekingen, stadsinformatie en evenementen.",
    "solutions.hotel.feature1": "Eten bestellen op de kamer",
    "solutions.hotel.feature2": "Taxi bellen",
    "solutions.hotel.feature3": "Restaurant reserveren",
    "solutions.hotel.feature4": "Stadsinformatie",
    "solutions.smb.title": "Voor Kleine en Middelgrote Bedrijven",
    "solutions.smb.description":
      "Klaarstaande oplossingen met snelle lancering en minimale instellingen voor groeiende bedrijven.",
    "solutions.smb.feature1": "Kant-en-klare sjablonen",
    "solutions.smb.feature2": "Snelle start",
    "solutions.smb.feature3": "Betaalbare prijs",
    "solutions.smb.feature4": "Eenvoudige integratie",
    "solutions.enterprise.title": "Enterprise en Overheid",
    "solutions.enterprise.description":
      "Zakelijke oplossingen met verbeterde beveiliging, SLA en mogelijkheid tot on-premise implementatie.",
    "solutions.enterprise.feature1": "Hoge SLA",
    "solutions.enterprise.feature2": "On-premise",
    "solutions.enterprise.feature3": "Beveiligingsaudit",
    "solutions.enterprise.feature4": "Aangepaste integraties",
    "solutions.custom.title": "Maatwerk Ontwikkeling",
    "solutions.custom.description":
      "Heeft u een unieke oplossing nodig? Wij creëren AI-assistenten voor elke bedrijfsproces met integratie in uw systemen en naleving van alle beveiligingseisen.",
    "solutions.custom.cta1": "Project bespreken",
    "solutions.custom.cta2": "Consultatie ontvangen",
    "solutions.learnMore": "Meer informatie over de oplossing",

    "demo.title": "Probeer de AI-assistent nu meteen",
    "demo.description": "Praat met onze demo-assistent of bel het testnummer",
    "demo.voiceDemo.title": "Stem Demo",
    "demo.voiceDemo.description": "Klik op de microfoon en begin te praten met de AI-assistent",
    "demo.scenario.label": "Kies scenario:",
    "demo.scenario.sales": "Verkoop",
    "demo.scenario.salesDesc": "Demo-oproep met verkooppmanager",
    "demo.scenario.hotel": "Hotel",
    "demo.scenario.hotelDesc": "Hotel AI-conciërge beantwoordt gastvragen",
    "demo.listening": "Luisteren...",
    "demo.clickToStart": "Klik om gesprek te starten",
    "demo.transcript.title": "Demo dialoog:",
    "demo.transcript.ai": "AI",
    "demo.transcript.you": "U",
    "demo.transcript.greeting": "Hallo! Mijn naam is Anna, ik ben een AI-assistent. Hoe kan ik u helpen?",
    "demo.transcript.userQuestion": "Vertel me over uw hoteloplossingen",
    "demo.transcript.aiResponse":
      "Natuurlijk! Onze AI-conciërge helpt gasten met het bestellen van eten, het boeken van diensten...",
    "demo.phone.title": "Demo-nummer bellen",
    "demo.phone.description": "Bel en praat met de AI-assistent via de telefoon",
    "demo.phone.number": "+31 20 123 456 7",
    "demo.phone.callNow": "Nu bellen",
    "demo.phone.notice": "Bellen is gratis. Werkt 24/7",
    "demo.examples.title": "Voorbeelden van dialogen",
    "demo.examples.restaurant": "Kostenberekening voor restaurant",
    "demo.examples.hotelOrder": "Hotelkamer eten bestellen",
    "demo.examples.objections": "Omgaan met klantbezwaren",
    "demo.examples.duration": "Duur:",
    "demo.privacy":
      "Demo-oproepen worden opgenomen om de servicekwaliteit te verbeteren. Persoonlijke gegevens worden niet opgeslagen.",

    "cta.title": "Begin vandaag nog met het automatiseren van verkopen",
    "cta.description":
      "Ontvang een testgesprek van de AI-assistent of vraag een gepersonaliseerde demo aan voor uw bedrijf",
    "cta.calculateCost": "Kosten berekenen",
    "cta.calculateDesc": "Ontdek de prijs voor uw project",
    "cta.viewCases": "Bekijk cases",
    "cta.viewCasesDesc": "Echte implementatievoorbeelden",
    "cta.callNow": "Nu bellen",
    "cta.phoneNumber": "+31 20 123 456 7",
    "cta.freeTest": "Gratis testgesprek",
    "cta.setupTime": "Installatie in 1 dag",
    "cta.support247": "24/7 Ondersteuning",

    // Voice Sales Manager page
    "voiceSales.badge": "AI Verkoopmanager voor Spraak",
    "voiceSales.title": "Verhoog verkopen met spraak 24/7",
    "voiceSales.description":
      "AI-assistent die leads kwalificeert, producten presenteert, kosten berekent en facturen uitgeeft zonder menselijke tussenkomst",
    "voiceSales.benefit1": "Verwerkt 100% van de inkomende oproepen",
    "voiceSales.benefit2": "Werkt 24/7 zonder pauzes of vakanties",
    "voiceSales.benefit3": "Verhoogt conversie 2-3x",
    "voiceSales.aiManager": "AI Manager Anna",
    "voiceSales.online": "Momenteel online",
    "voiceSales.greeting":
      "Welkom! Vertel me over uw behoeften, en ik bereid een gepersonaliseerde aanbieding voor in 2 minuten",
    "voiceSales.quickResponse": "Snelle Reactie",
    "voiceSales.personalization": "Personalisatie",
    "voiceSales.crmIntegration": "CRM-integratie",
    "voiceSales.analytics": "Analyse",
    "voiceSales.problemsTitle": "Problemen met traditionele verkoop",
    "voiceSales.problemsSubtitle": "Waarom bedrijven tot 70% van de potentiële klanten verliezen",
    "voiceSales.problem1.title": "Verloren leads",
    "voiceSales.problem1.description": "Tot 70% van de oproepen blijft onbeantwoord tijdens kantooruren",
    "voiceSales.problem2.title": "Wachtrijen en wachten",
    "voiceSales.problem2.description": "Klanten wachten niet en gaan naar concurrenten",
    "voiceSales.problem3.title": "Menselijke factor",
    "voiceSales.problem3.description": "Verschillende scripts, vergeetachtigheid, emotionele burn-out",
    "voiceSales.solutionsTitle": "Hoe AI-manager deze problemen oplost",
    "voiceSales.solutionsSubtitle": "Volledige verkoopcyclus van eerste contact tot betaling",
    "voiceSales.solution1.title": "Lead kwalificatie",
    "voiceSales.solution1.description": "Bepaalt behoeften, budget en koopbereidheid",
    "voiceSales.solution2.title": "Productpresentatie",
    "voiceSales.solution2.description": "Vertelt over voordelen, handelt bezwaren af",
    "voiceSales.solution3.title": "Kostenberekening",
    "voiceSales.solution3.description": "Creëert gepersonaliseerde aanbieding in realtime",
    "voiceSales.solution4.title": "Facturatie",
    "voiceSales.solution4.description": "Creëert en verzendt factuur, contract, betalingslink",
    "voiceSales.solution5.title": "Follow-up",
    "voiceSales.solution5.description": "Herinnert aan betaling, biedt extra diensten aan",
    "voiceSales.integrationsTitle": "Verbind met uw systemen",
    "voiceSales.integrationsSubtitle": "Naadloze integratie met bestaande infrastructuur",
    "voiceSales.integration1.name": "CRM-systemen",
    "voiceSales.integration1.description": "Salesforce, HubSpot, amoCRM, Bitrix24",
    "voiceSales.integration2.name": "Facturering",
    "voiceSales.integration2.description": "1C, SAP, QuickBooks, aangepaste systemen",
    "voiceSales.integration3.name": "Magazijn en levering",
    "voiceSales.integration3.description": "WMS, koeriersdiensten, logistiek",
    "voiceSales.integration4.name": "Kennisbank",
    "voiceSales.integration4.description": "RAG voor het beantwoorden van complexe vragen",
    "voiceSales.scenariosTitle": "Werkscenario's",
    "voiceSales.scenariosSubtitle": "Voorbeelden van dialogen in verschillende situaties",
    "voiceSales.scenario1.title": "Inkomende oproep",
    "voiceSales.scenario1.description": "Klant belt via advertentie",
    "voiceSales.scenario2.title": "Uitgaande oproep",
    "voiceSales.scenario2.description": "Bellen met potentiële klantenbestand",
    "voiceSales.scenario3.title": "Verlaten winkelwagen",
    "voiceSales.scenario3.description": "Teruggrijpen van klanten die de aankoop niet hebben voltooid",
    "voiceSales.listenFullDialogue": "Volledige dialoog beluisteren",
    "voiceSales.resultsTitle": "Implementatieresultaten",
    "voiceSales.resultsSubtitle": "Gemiddelde statistieken van onze klanten",
    "voiceSales.kpi1.metric": "Conversie",
    "voiceSales.kpi1.before": "12%",
    "voiceSales.kpi1.after": "28%",
    "voiceSales.kpi1.improvement": "+133%",
    "voiceSales.kpi2.metric": "Reactietijd",
    "voiceSales.kpi2.before": "45 sec",
    "voiceSales.kpi2.after": "0 sec",
    "voiceSales.kpi2.improvement": "100%",
    "voiceSales.kpi3.metric": "Leadverwerking",
    "voiceSales.kpi3.before": "40%",
    "voiceSales.kpi3.after": "100%",
    "voiceSales.kpi3.improvement": "+150%",
    "voiceSales.kpi4.metric": "Kosten per lead",
    "voiceSales.kpi4.before": "$50",
    "voiceSales.kpi4.after": "$18",
    "voiceSales.kpi4.improvement": "-64%",
    "voiceSales.casesTitle": "Klantcases",
    "voiceSales.casesSubtitle": "Echte implementatieresultaten",
    "voiceSales.pricingTitle": "Transparante prijzen",
    "voiceSales.pricingSubtitle": "Kosten afhankelijk van complexiteit van scenario's en gespreksvolume",
    "voiceSales.pricing.setup": "Installatie",
    "voiceSales.pricing.setupPrice": "vanaf $2.000",
    "voiceSales.pricing.setupDesc": "Eenmalige implementatiekosten",
    "voiceSales.pricing.perMinute": "Per minuut",
    "voiceSales.pricing.perMinutePrice": "vanaf $0.05",
    "voiceSales.pricing.perMinuteDesc": "Gesprekskosten",
    "voiceSales.pricing.support": "Ondersteuning",
    "voiceSales.pricing.supportPrice": "vanaf $500/maand",
    "voiceSales.pricing.supportDesc": "Technische ondersteuning",
    "voiceSales.faqTitle": "Veelgestelde vragen",
    "voiceSales.ctaTitle": "Begin vandaag nog met het verhogen van uw omzet",
    "voiceSales.ctaDescription": "Ontvang een demo-gesprek en een gepersonaliseerde berekening voor uw bedrijf",

    // Hotel Concierge Translations
    "hotelConcierge.badge": "AI-Concierge voor hotels",
    "hotelConcierge.title": "Receptie zonder wachtrijen. Gasten krijgen service via spraak",
    "hotelConcierge.description":
      "AI-concierge behandelt gastverzoeken 24/7: voedselbestellingen, schoonmaak, taxi, boekingen. Verhoogt tevredenheid en bespaart personeelstijd",
    "hotelConcierge.benefit1": "95% gasttevredenheid",
    "hotelConcierge.benefit2": "60% tijdsbesparing personeel",
    "hotelConcierge.benefit3": "Ondersteuning voor 10+ talen",
    "hotelConcierge.functionsTitle": "AI-Concierge functies",
    "hotelConcierge.functionsSubtitle": "Volledig scala aan diensten voor het comfort van uw gasten",
    "hotelConcierge.function1.title": "Roomservice bestellingen",
    "hotelConcierge.function1.description": "Bestellingen opnemen, details verduidelijken, naar keuken sturen",
    "hotelConcierge.function2.title": "Schoonmaakdiensten",
    "hotelConcierge.function2.description": "Extra schoonmaak, linnenwisseling, handdoeken aanvragen",
    "hotelConcierge.function3.title": "Late check-out",
    "hotelConcierge.function3.description": "Late check-out verwerken, toeslag berekenen",
    "hotelConcierge.function4.title": "Taxi boeken",
    "hotelConcierge.function4.description": "Taxi bellen, luchthavenoverdracht, excursies",
    "hotelConcierge.function5.title": "Restaurant reserveringen",
    "hotelConcierge.function5.description": "Restauranttafels, evenementtickets",
    "hotelConcierge.function6.title": "Stadsgids",
    "hotelConcierge.function6.description": "Plaatsaanbevelingen, routes, attracties",
    "hotelConcierge.channelsTitle": "Interactiekanalen",
    "hotelConcierge.channelsSubtitle": "Gasten kunnen op een handige manier contact opnemen",
    "hotelConcierge.channel1.name": "Slimme luidspreker in kamer",
    "hotelConcierge.channel1.description": "Spraakbesturing zonder telefoon",
    "hotelConcierge.channel2.name": "Kamertelefoon",
    "hotelConcierge.channel2.description": "Vertrouwde manier om te verbinden",
    "hotelConcierge.channel3.name": "Webinterface",
    "hotelConcierge.channel3.description": "Via hotelwebsite of app",
    "hotelConcierge.channel4.name": "Messengers",
    "hotelConcierge.channel4.description": "WhatsApp, Telegram, Facebook Messenger",
    "hotelConcierge.scenariosTitle": "Service scenario's",
    "hotelConcierge.scenariosSubtitle": "Voorbeelden van dialogen met AI-concierge",
    "hotelConcierge.scenario1.title": "Roomservice",
    "hotelConcierge.scenario1.description": "Ontbijt op kamer bestellen",
    "hotelConcierge.scenario1.dialogue1": "Ik wil ontbijt op mijn kamer bestellen",
    "hotelConcierge.scenario1.dialogue2":
      "Natuurlijk! Het ontbijtmenu is beschikbaar tot 11:00 uur. Wat wilt u bestellen?",
    "hotelConcierge.scenario1.dialogue3": "Continentaal ontbijt en koffie",
    "hotelConcierge.scenario1.dialogue4":
      "Geweldig! Continentaal ontbijt en koffie. Wanneer wilt u het laten bezorgen? Het is nu 9:30 uur",
    "hotelConcierge.scenario1.dialogue5": "Over 30 minuten",
    "hotelConcierge.scenario1.dialogue6":
      "Bestelling geaccepteerd! We bezorgen om 10:00 uur in kamer 205. Kosten zijn €25. Dank u!",
    "hotelConcierge.scenario2.title": "Schoonmaak",
    "hotelConcierge.scenario2.description": "Verzoek om extra schoonmaak",
    "hotelConcierge.scenario2.dialogue1": "Ik heb extra handdoeken nodig",
    "hotelConcierge.scenario2.dialogue2": "Natuurlijk! Hoeveel handdoeken heeft u nodig?",
    "hotelConcierge.scenario2.dialogue3": "Twee badhanddoeken",
    "hotelConcierge.scenario2.dialogue4": "Goed! Schoonmaak brengt twee badhanddoeken naar kamer 205 binnen 15 minuten",
    "hotelConcierge.scenario3.title": "Transport",
    "hotelConcierge.scenario3.description": "Taxi naar luchthaven boeken",
    "hotelConcierge.scenario3.dialogue1": "Ik heb morgen om 8 uur een taxi naar de luchthaven nodig",
    "hotelConcierge.scenario3.dialogue2": "Natuurlijk! Taxi naar luchthaven om 8:00 uur. Welke luchthaven?",
    "hotelConcierge.scenario3.dialogue3": "Barajas, terminal 2",
    "hotelConcierge.scenario3.dialogue4":
      "Boeking bevestigd! Taxi zal morgen om 8:00 uur bij het hotel zijn. Kosten zijn €35. Reistijd ongeveer 45 minuten",
    "hotelConcierge.listenDialogue": "Dialoog beluisteren",
    "hotelConcierge.demoTitle": "Probeer AI-Concierge",
    "hotelConcierge.demoSubtitle": "Interactieve demonstratie van mogelijkheden",
    "hotelConcierge.demoReady": "AI-Concierge klaar om te werken",
    "hotelConcierge.demoDescription": "Klik op de knop en probeer roomservice te bestellen of een taxi te bellen",
    "hotelConcierge.startConversation": "Gesprek starten",
    "hotelConcierge.callDemo": "Bellen voor demo",
    "hotelConcierge.integrationsTitle": "Integraties",
    "hotelConcierge.integrationsSubtitle": "Verbinden met hotelsystemen",
    "hotelConcierge.integration1.name": "PMS-systemen",
    "hotelConcierge.integration1.description": "Opera, Fidelio, RoomMaster",
    "hotelConcierge.integration2.name": "Restaurantsystemen",
    "hotelConcierge.integration2.description": "Integratie met keuken en bar",
    "hotelConcierge.integration3.name": "Taxidiensten",
    "hotelConcierge.integration3.description": "Uber, Bolt, lokale diensten",
    "hotelConcierge.integration4.name": "Betalingssystemen",
    "hotelConcierge.integration4.description": "Servicebetaling via kamer",
    "hotelConcierge.casesTitle": "Hotel cases",
    "hotelConcierge.casesSubtitle": "Resultaten van onze klanten",
    "hotelConcierge.case1.title": "Boutique Hotel Barcelona",
    "hotelConcierge.case1.description": "Gasttevredenheid met 40% verhoogd",
    "hotelConcierge.case1.result1": "95% positieve beoordelingen",
    "hotelConcierge.case1.result2": "60% tijdsbesparing personeel",
    "hotelConcierge.case1.result3": "24/7 beschikbaarheid",
    "hotelConcierge.case2.title": "Resort Chain Spain",
    "hotelConcierge.case2.description": "80% van gastverzoeken geautomatiseerd",
    "hotelConcierge.case2.result1": "80% automatisering",
    "hotelConcierge.case2.result2": "Ondersteuning voor 5 talen",
    "hotelConcierge.case2.result3": "300% ROI in een jaar",
    "hotelConcierge.readFullCase": "Volledige case lezen",
    "hotelConcierge.packagesTitle": "Hotel pakketten",
    "hotelConcierge.packagesSubtitle": "Kies het juiste plan",
    "hotelConcierge.package1.name": "Klein",
    "hotelConcierge.package1.description": "Tot 50 kamers",
    "hotelConcierge.package1.price": "€299/maand",
    "hotelConcierge.package1.feature1": "Basisscenario's",
    "hotelConcierge.package1.feature2": "Telefoon + web",
    "hotelConcierge.package1.feature3": "E-mailondersteuning",
    "hotelConcierge.package2.name": "Middel",
    "hotelConcierge.package2.description": "50-200 kamers",
    "hotelConcierge.package2.price": "€599/maand",
    "hotelConcierge.package2.feature1": "Alle scenario's",
    "hotelConcierge.package2.feature2": "Alle kanalen",
    "hotelConcierge.package2.feature3": "Integraties",
    "hotelConcierge.package2.feature4": "Prioriteitsondersteuning",
    "hotelConcierge.package3.name": "Groot",
    "hotelConcierge.package3.description": "Meer dan 200 kamers",
    "hotelConcierge.package3.price": "vanaf €999/maand",
    "hotelConcierge.package3.feature1": "Volledige aanpassing",
    "hotelConcierge.package3.feature2": "Meertalig",
    "hotelConcierge.package3.feature3": "Analyse",
    "hotelConcierge.package3.feature4": "Persoonlijke manager",
    "hotelConcierge.popular": "Populair",
    "hotelConcierge.selectPackage": "Pakket selecteren",
    "hotelConcierge.faqTitle": "Veelgestelde vragen",
    "hotelConcierge.faq1.question": "Ondersteunt het systeem meerdere talen?",
    "hotelConcierge.faq1.answer":
      "Ja, we ondersteunen de belangrijkste Europese talen: Engels, Spaans, Frans, Duits, Italiaans en andere op verzoek.",
    "hotelConcierge.faq2.question": "Hoe integreert het met onze PMS?",
    "hotelConcierge.faq2.answer":
      "We integreren met populaire PMS via API. We krijgen gegevens over gasten, kamers, rekeningen om de service te personaliseren.",
    "hotelConcierge.faq3.question": "Wat als AI een vraag niet kan beantwoorden?",
    "hotelConcierge.faq3.answer":
      "Het systeem draagt complexe verzoeken over aan een live medewerker met volledige gesprekscontext.",
    "hotelConcierge.faq4.question": "Wat zijn de implementatiekosten?",
    "hotelConcierge.faq4.answer":
      "Kosten hangen af van hotelgrootte en aantal integraties. Basisimplementatie vanaf €2.000.",
    "hotelConcierge.ctaTitle": "Verbeter uw hotelservice",
    "hotelConcierge.ctaDescription": "Krijg AI-concierge demo en berekening voor uw hotel",
    "hotelConcierge.aiConcierge": "AI-Concierge Maria",
    "hotelConcierge.readyToHelp": "Klaar om te helpen",
    "hotelConcierge.welcomeMessage":
      "Welkom in ons hotel! Hoe kan ik helpen? Ik kan bestellingen opnemen, een taxi bellen of een tafel reserveren",
    "hotelConcierge.quickAction1": "Voedselbestelling",
    "hotelConcierge.quickAction2": "Taxi bellen",
    "hotelConcierge.quickAction3": "Schoonmaak",
    "hotelConcierge.quickAction4": "Excursies",
    "hotelConcierge.guest": "Gast",
    "hotelConcierge.ai": "AI",
  },
  fr: {
    // Navigation
    "nav.solutions": "Solutions",
    "nav.platform": "Plateforme",
    "nav.cases": "Cas",
    "nav.blog": "Blog",
    "nav.about": "À propos",
    "nav.contacts": "Contacts",
    "nav.login": "Se connecter",
    "nav.signup": "S'inscrire",
    "nav.home": "Page d'accueil AI Solutions",
    "nav.main": "Navigation principale",
    "nav.mobile": "Navigation mobile",
    "nav.openMenu": "Ouvrir le menu",
    "nav.closeMenu": "Fermer le menu",
    // Footer navigation
    "nav.company": "Entreprise",
    "nav.resources": "Ressources",
    "nav.legal": "Légal",
    "nav.offices": "Bureaux",
    // CTA buttons
    "cta.tryFree": "Essayer gratuitement",
    "cta.requestDemo": "Demander une démo",
    "cta.listenDemo": "Écouter la démo",
    "cta.call": "Appeler",
    "cta.calculate": "Calculer le coût",
    "cta.downloadPitch": "Télécharger la présentation",
    "cta.readMore": "Lire plus",
    "cta.learnMore": "En savoir plus",
    "cta.getStarted": "Commencer",
    "cta.contactUs": "Nous contacter",
    "cta.backToHome": "Retour à l'accueil",
    // Hero section
    "hero.title": "Assistants IA vocaux qui vendent et servent les clients 24/7",
    "hero.subtitle": "",
    "hero.description":
      "Automatisez tout le parcours client : de la première demande à la facture et confirmation de livraison. Traitez 10× plus de demandes sans files d'attente.",
    "hero.consistentScripts": "Scripts Cohérents",
    "hero.consistentScriptsDesc": "Offres personnalisées et calculs instantanés",
    "hero.fullIntegration": "Intégration Complète",
    "hero.fullIntegrationDesc": "CRM, facturation, entrepôt, livraison",
    "hero.analytics": "Analyse des Conversations",
    "hero.analyticsDesc": "Amélioration continue des performances",
    "hero.scalability": "Évolutivité",
    "hero.scalabilityDesc": "De la startup à l'Enterprise",
    "hero.trustedBy": "Fait confiance par des entreprises de diverses industries",
    "hero.demoTitle": "Assistant IA en Action",
    "hero.online": "En ligne",
    "hero.aiGreeting":
      "Bonjour ! Je m'appelle Anna, je suis l'assistant IA de l'entreprise. Comment puis-je vous aider ?",
    "hero.userMessage": "Je veux connaître le coût de votre solution hôtelière",
    "hero.aiResponse": "Excellent ! Combien de chambres a votre hôtel ? Cela m'aidera à calculer le coût exact.",
    "hero.you": "Vous",
    "howItWorks.title": "Comment fonctionne l'assistant IA",
    "howItWorks.description":
      "Cycle complet de traitement des demandes clients du premier contact à la finalisation de l'affaire",
    "howItWorks.step1.title": "Contact Entrant",
    "howItWorks.step1.description":
      "Le client appelle, écrit dans le chat ou messenger. L'IA répond instantanément sur n'importe quel canal.",
    "howItWorks.step2.title": "Reconnaissance et Analyse",
    "howItWorks.step2.description":
      "Le système comprend la demande, détermine les intentions et extrait les informations clés.",
    "howItWorks.step3.title": "Logique et Actions",
    "howItWorks.step3.description":
      "L'IA applique les règles métier, fait des calculs, crée des documents et effectue des opérations.",
    "howItWorks.step4.title": "Analyse et Amélioration",
    "howItWorks.step4.description":
      "Tous les dialogues sont enregistrés et analysés pour l'amélioration continue de la qualité.",
    "howItWorks.responseTime": "Temps de réponse moyen : moins de 2 secondes",
    // Solutions
    "solutions.voiceSalesManager": "Gestionnaire de ventes vocales",
    "solutions.hotelConcierge": "Concierge d'hôtel",
    "solutions.smb": "Petites et moyennes entreprises",
    "solutions.enterprise": "Enterprise / Gouvernement / Banques",
    "solutions.custom": "Développement sur mesure",
    // Platform
    "platform.architecture": "Architecture",
    "platform.demo": "Démo",
    "platform.calculator": "Calculateur de prix",
    // About page
    "about.title": "À propos d'AI Solutions",
    "about.subtitle": "Équipe internationale d'experts en intelligence artificielle",
    "about.description":
      "Nous avons uni les meilleurs spécialistes de Russie, CEI, Ukraine et Inde pour créer des solutions IA de pointe qui transforment les processus métier des entreprises du monde entier.",
    "about.mission.title": "Notre Mission",
    "about.mission.description":
      "Démocratiser l'accès aux technologies IA avancées, les rendant disponibles pour les entreprises de toute taille - des startups aux grandes corporations.",
    "about.values.title": "Nos Valeurs",
    "about.values.innovation": "Innovation",
    "about.values.innovationDesc": "Implémentation constante des dernières technologies et approches",
    "about.values.quality": "Qualité",
    "about.values.qualityDesc": "Les plus hauts standards de développement et de test",
    "about.values.transparency": "Transparence",
    "about.values.transparencyDesc": "Communication ouverte et relations honnêtes avec les clients",
    "about.values.partnership": "Partenariat",
    "about.values.partnershipDesc": "Relations à long terme basées sur le succès mutuel",
    "about.team.title": "Équipe Internationale",
    "about.team.description":
      "Notre équipe unit des spécialistes talentueux de différents pays, chacun apportant une expérience unique et une expertise en intelligence artificielle.",
    "about.offices.title": "Nos Bureaux",
    "about.offices.description":
      "Nous opérons depuis trois emplacements clés, fournissant un support client 24/7 dans le monde entier.",
    // Blog page
    "blog.title": "Blog AI Solutions",
    "blog.subtitle": "Articles d'experts sur l'implémentation de l'intelligence artificielle dans les entreprises",
    "blog.description":
      "Matériaux actuels sur les tendances IA, cas pratiques d'implémentation et conseils pour optimiser les processus métier avec l'intelligence artificielle.",
    "blog.readMore": "Lire plus",
    "blog.categories.all": "Toutes les Catégories",
    "blog.categories.ai": "Intelligence Artificielle",
    "blog.categories.business": "Entreprise",
    "blog.categories.technology": "Technologie",
    "blog.search.placeholder": "Rechercher des articles...",
    "blog.newsletter.title": "Abonnement Newsletter",
    "blog.newsletter.description":
      "Recevez des articles frais et des nouvelles sur le développement de la technologie IA",
    "blog.newsletter.placeholder": "Votre email",
    "blog.newsletter.subscribe": "S'abonner",
    // Cases page
    "cases.title": "Cas d'Implémentation AI Solutions",
    "cases.subtitle": "Résultats réels de nos clients",
    "cases.description":
      "Explorez des projets d'implémentation d'assistants IA réussis dans diverses industries et apprenez comment nos solutions aident les entreprises à augmenter les ventes et optimiser les processus.",
    "cases.viewDetails": "Voir les Détails",
    "cases.results": "Résultats",
    "cases.challenge": "Défi",
    "cases.solution": "Solution",
    "cases.outcome": "Résultat",
    // Contacts page
    "contacts.title": "Contactez-nous",
    "contacts.subtitle": "¿Prêt à discuter de votre projet ?",
    "contacts.description":
      "Notre équipe d'experts est prête à vous aider à implémenter des solutions IA dans votre entreprise. Contactez-nous de toute manière pratique.",
    "contacts.form.title": "Envoyer un Message",
    "contacts.form.name": "Nom",
    "contacts.form.email": "Email",
    "contacts.form.company": "Entreprise",
    "contacts.form.message": "Message",
    "contacts.form.send": "Envoyer",
    "contacts.offices.title": "Nos Bureaux",
    "contacts.social.title": "Réseaux Sociaux",
    // Common
    "common.loading": "Chargement...",
    "common.error": "Erreur",
    "common.success": "Succès",
    "common.close": "Fermer",
    "common.open": "Ouvrir",
    "common.save": "Sauvegarder",
    "common.cancel": "Annuler",
    "common.submit": "Soumettre",
    "common.search": "Rechercher",

    "benefits.title": "Avantages par rapport aux managers classiques",
    "benefits.description":
      "L'assistant IA est plus performant qu'un département commercial entier pour des coûts nettement inférieurs",
    "benefits.availability.title": "Disponibilité 24/7",
    "benefits.availability.description":
      "Pas de week-ends, de vacances ou de jours de maladie. Vos clients reçoivent de l'aide à tout moment.",
    "benefits.availability.stats": "Traitement des appels 24h/24",
    "benefits.parallel.title": "Traitement Parallèle",
    "benefits.parallel.description":
      "Travail simultané avec des centaines de clients sans perte de qualité de service.",
    "benefits.parallel.stats": "Jusqu'à 1000+ dialogues simultanés",
    "benefits.conversion.title": "Conversion Stable",
    "benefits.conversion.description":
      "L'absence de facteur humain garantit des performances de vente constamment élevées.",
    "benefits.conversion.stats": "Conversion 35% plus élevée",
    "benefits.security.title": "Sécurité des Données",
    "benefits.security.description":
      "Conformité totale au RGPD, chiffrement de toutes les données et journalisation détaillée.",
    "benefits.security.stats": "Certification ISO 27001",
    "benefits.calculations.title": "Calculs Instantanés",
    "benefits.calculations.description":
      "Calculs automatiques de coûts, création de devis et facturation en temps réel.",
    "benefits.calculations.stats": "Calcul en 3 secondes",
    "benefits.analytics.title": "Analyses Détaillées",
    "benefits.analytics.description":
      "Statistiques complètes sur tous les dialogues, conversions et points d'amélioration des processus.",
    "benefits.analytics.stats": "Plus de 50 métriques d'efficacité",
    "benefits.comparison.title": "Comparaison des Coûts",
    "benefits.comparison.managers": "Équipe de 5 managers",
    "benefits.comparison.ai": "Assistant IA M2",
    "benefits.comparison.savings": "Économies",
    "benefits.comparison.multiplier": "10×",
    "benefits.comparison.description": "plus de requêtes traitées à moindre coût",

    "solutions.title": "Solutions pour différentes industries",
    "solutions.description": "Assistants IA prêts à l'emploi, configurés pour les spécificités de votre entreprise",
    "solutions.sales.title": "Manager Commercial Vocal",
    "solutions.sales.description":
      "Automatisation des appels entrants et sortants, qualification des prospects, présentation des produits et clôture des transactions.",
    "solutions.sales.feature1": "Gestion des objections",
    "solutions.sales.feature2": "Calcul du coût",
    "solutions.sales.feature3": "Création de devis",
    "solutions.sales.feature4": "Intégration CRM",
    "solutions.hotel.title": "Concierge IA pour Hôtels",
    "solutions.hotel.description":
      "Assistant intelligent pour les clients : commandes de chambre, réservation de services, informations sur la ville et événements.",
    "solutions.hotel.feature1": "Commande de repas en chambre",
    "solutions.hotel.feature2": "Appel de taxi",
    "solutions.hotel.feature3": "Réservation de restaurant",
    "solutions.hotel.feature4": "Informations sur la ville",
    "solutions.smb.title": "Pour les Petites et Moyennes Entreprises",
    "solutions.smb.description":
      "Solutions prêtes avec lancement rapide et configuration minimale pour les entreprises en croissance.",
    "solutions.smb.feature1": "Modèles prêts",
    "solutions.smb.feature2": "Démarrage rapide",
    "solutions.smb.feature3": "Prix abordable",
    "solutions.smb.feature4": "Intégration simple",
    "solutions.enterprise.title": "Enterprise et Secteur Public",
    "solutions.enterprise.description":
      "Solutions d'entreprise avec sécurité renforcée, SLA et capacité de déploiement on-premise.",
    "solutions.enterprise.feature1": "SLA élevé",
    "solutions.enterprise.feature2": "On-premise",
    "solutions.enterprise.feature3": "Audit de sécurité",
    "solutions.enterprise.feature4": "Intégrations personnalisées",
    "solutions.custom.title": "Développement Personnalisé",
    "solutions.custom.description":
      "Besoin d'une solution unique ? Nous créons des assistants IA pour tous les processus métier avec intégration dans vos systèmes et respect de toutes les exigences de sécurité.",
    "solutions.custom.cta1": "Discuter du projet",
    "solutions.custom.cta2": "Obtenir une consultation",
    "solutions.learnMore": "En savoir plus sur la solution",

    "demo.title": "Essayez l'assistant IA dès maintenant",
    "demo.description": "Parlez à notre assistant de démonstration ou appelez le numéro d'essai",
    "demo.voiceDemo.title": "Démo Vocale",
    "demo.voiceDemo.description": "Cliquez sur le microphone et commencez à parler à l'assistant IA",
    "demo.scenario.label": "Choisissez un scénario :",
    "demo.scenario.sales": "Ventes",
    "demo.scenario.salesDesc": "Appel de démonstration avec un responsable commercial",
    "demo.scenario.hotel": "Hôtel",
    "demo.scenario.hotelDesc": "Le concierge IA de l'hôtel répond aux questions des clients",
    "demo.listening": "Écoute...",
    "demo.clickToStart": "Cliquez pour commencer la conversation",
    "demo.transcript.title": "Dialogue de démonstration :",
    "demo.transcript.ai": "IA",
    "demo.transcript.you": "Vous",
    "demo.transcript.greeting": "Bonjour ! Je m'appelle Anna, je suis un assistant IA. Comment puis-je vous aider ?",
    "demo.transcript.userQuestion": "Parlez-moi de vos solutions hôtelières",
    "demo.transcript.aiResponse":
      "Bien sûr ! Notre concierge IA aide les clients à commander de la nourriture, à réserver des services...",
    "demo.phone.title": "Appeler le numéro de démonstration",
    "demo.phone.description": "Appelez et parlez à l'assistant IA par téléphone",
    "demo.phone.number": "+33 1 23 45 67 89",
    "demo.phone.callNow": "Appeler maintenant",
    "demo.phone.notice": "L'appel est gratuit. Fonctionne 24/7",
    "demo.examples.title": "Exemples de dialogues",
    "demo.examples.restaurant": "Calcul du coût pour un restaurant",
    "demo.examples.hotelOrder": "Commande de repas en chambre d'hôtel",
    "demo.examples.objections": "Gestion des objections client",
    "demo.examples.duration": "Durée :",
    "demo.privacy":
      "Les appels de démonstration sont enregistrés pour améliorer la qualité du service. Les données personnelles ne sont pas sauvegardées.",

    "cta.title": "Commencez à automatiser vos ventes dès aujourd'hui",
    "cta.description":
      "Recevez un appel test de l'assistant IA ou demandez une démonstration personnalisée pour votre entreprise",
    "cta.calculateCost": "Calculer le coût",
    "cta.calculateDesc": "Découvrez le prix de votre projet",
    "cta.viewCases": "Voir les cas",
    "cta.viewCasesDesc": "Exemples d'implémentations réelles",
    "cta.callNow": "Appeler maintenant",
    "cta.phoneNumber": "+33 1 23 45 67 89",
    "cta.freeTest": "Appel test gratuit",
    "cta.setupTime": "Configuration en 1 jour",
    "cta.support247": "Support 24/7",

    // Voice Sales Manager page
    "voiceSales.badge": "Gestionnaire Ventes IA Vocal",
    "voiceSales.title": "Augmentez les ventes par la voix 24/7",
    "voiceSales.description":
      "Assistant IA qui qualifie les prospects, présente les produits, calcule les coûts et émet des factures sans intervention humaine",
    "voiceSales.benefit1": "Traite 100% des appels entrants",
    "voiceSales.benefit2": "Travaille 24/7 sans pauses ni jours fériés",
    "voiceSales.benefit3": "Augmente la conversion 2-3x",
    "voiceSales.aiManager": "Manager IA Anna",
    "voiceSales.online": "Actuellement en ligne",
    "voiceSales.greeting":
      "Bienvenue ! Parlez-moi de vos besoins, et je préparerai une offre personnalisée en 2 minutes",
    "voiceSales.quickResponse": "Réponse Rapide",
    "voiceSales.personalization": "Personnalisation",
    "voiceSales.crmIntegration": "Intégration CRM",
    "voiceSales.analytics": "Analyse",
    "voiceSales.problemsTitle": "Problèmes des ventes traditionnelles",
    "voiceSales.problemsSubtitle": "Pourquoi les entreprises perdent jusqu'à 70% des clients potentiels",
    "voiceSales.problem1.title": "Perte de prospects",
    "voiceSales.problem1.description": "Jusqu'à 70% des appels restent sans réponse pendant les heures ouvrables",
    "voiceSales.problem2.title": "Files d'attente et attente",
    "voiceSales.problem2.description": "Les clients n'attendent pas et vont chez les concurrents",
    "voiceSales.problem3.title": "Facteur humain",
    "voiceSales.problem3.description": "Scripts différents, oublis, épuisement émotionnel",
    "voiceSales.solutionsTitle": "Comment le manager IA résout ces problèmes",
    "voiceSales.solutionsSubtitle": "Cycle de vente complet du premier contact au paiement",
    "voiceSales.solution1.title": "Qualification des prospects",
    "voiceSales.solution1.description": "Détermine les besoins, le budget et la volonté d'acheter",
    "voiceSales.solution2.title": "Présentation du produit",
    "voiceSales.solution2.description": "Parle des avantages, gère les objections",
    "voiceSales.solution3.title": "Calcul du coût",
    "voiceSales.solution3.description": "Crée une offre personnalisée en temps réel",
    "voiceSales.solution4.title": "Émission de factures",
    "voiceSales.solution4.description": "Crée et envoie facture, contrat, lien de paiement",
    "voiceSales.solution5.title": "Suivi",
    "voiceSales.solution5.description": "Rappelle le paiement, propose des services supplémentaires",
    "voiceSales.integrationsTitle": "Connexion à vos systèmes",
    "voiceSales.integrationsSubtitle": "Intégration transparente avec l'infrastructure existante",
    "voiceSales.integration1.name": "Systèmes CRM",
    "voiceSales.integration1.description": "Salesforce, HubSpot, amoCRM, Bitrix24",
    "voiceSales.integration2.name": "Facturation",
    "voiceSales.integration2.description": "1C, SAP, QuickBooks, systèmes personnalisés",
    "voiceSales.integration3.name": "Entrepôt et livraison",
    "voiceSales.integration3.description": "WMS, services de messagerie, logistique",
    "voiceSales.integration4.name": "Base de connaissances",
    "voiceSales.integration4.description": "RAG pour répondre aux questions complexes",
    "voiceSales.scenariosTitle": "Scénarios de travail",
    "voiceSales.scenariosSubtitle": "Exemples de dialogues dans différentes situations",
    "voiceSales.scenario1.title": "Appel entrant",
    "voiceSales.scenario1.description": "Le client appelle suite à une publicité",
    "voiceSales.scenario2.title": "Appel sortant",
    "voiceSales.scenario2.description": "Appel à la base de clients potentiels",
    "voiceSales.scenario3.title": "Panier abandonné",
    "voiceSales.scenario3.description": "Retour des clients n'ayant pas finalisé leur achat",
    "voiceSales.listenFullDialogue": "Écouter le dialogue complet",
    "voiceSales.resultsTitle": "Résultats de l'implémentation",
    "voiceSales.resultsSubtitle": "Statistiques moyennes de nos clients",
    "voiceSales.kpi1.metric": "Conversion",
    "voiceSales.kpi1.before": "12%",
    "voiceSales.kpi1.after": "28%",
    "voiceSales.kpi1.improvement": "+133%",
    "voiceSales.kpi2.metric": "Temps de réponse",
    "voiceSales.kpi2.before": "45 sec",
    "voiceSales.kpi2.after": "0 sec",
    "voiceSales.kpi2.improvement": "100%",
    "voiceSales.kpi3.metric": "Traitement des prospects",
    "voiceSales.kpi3.before": "40%",
    "voiceSales.kpi3.after": "100%",
    "voiceSales.kpi3.improvement": "+150%",
    "voiceSales.kpi4.metric": "Coût par prospect",
    "voiceSales.kpi4.before": "$50",
    "voiceSales.kpi4.after": "$18",
    "voiceSales.kpi4.improvement": "-64%",
    "voiceSales.casesTitle": "Cas clients",
    "voiceSales.casesSubtitle": "Résultats réels d'implémentation",
    "voiceSales.pricingTitle": "Tarifs transparents",
    "voiceSales.pricingSubtitle": "Le coût dépend de la complexité des scénarios et du volume d'appels",
    "voiceSales.pricing.setup": "Configuration",
    "voiceSales.pricing.setupPrice": "à partir de $2.000",
    "voiceSales.pricing.setupDesc": "Coût unique d'implémentation",
    "voiceSales.pricing.perMinute": "Par minute",
    "voiceSales.pricing.perMinutePrice": "à partir de $0.05",
    "voiceSales.pricing.perMinuteDesc": "Coût de conversation",
    "voiceSales.pricing.support": "Support",
    "voiceSales.pricing.supportPrice": "à partir de $500/mois",
    "voiceSales.pricing.supportDesc": "Support technique",
    "voiceSales.faqTitle": "Questions fréquemment posées",
    "voiceSales.ctaTitle": "Commencez à augmenter vos ventes dès aujourd'hui",
    "voiceSales.ctaDescription": "Obtenez un appel de démonstration et un calcul personnalisé pour votre entreprise",

    // Hotel Concierge Translations
    "hotelConcierge.badge": "Concierge IA pour hôtels",
    "hotelConcierge.title": "Réception sans files d'attente. Les clients obtiennent un service vocal",
    "hotelConcierge.description":
      "Le concierge IA traite les demandes des clients 24/7 : commandes de nourriture, nettoyage, taxi, réservations. Augmente la satisfaction et économise le temps du personnel",
    "hotelConcierge.benefit1": "95% de satisfaction des clients",
    "hotelConcierge.benefit2": "60% d'économie de temps du personnel",
    "hotelConcierge.benefit3": "Support pour plus de 10 langues",
    "hotelConcierge.functionsTitle": "Fonctions du concierge IA",
    "hotelConcierge.functionsSubtitle": "Gamme complète de services pour le confort de vos clients",
    "hotelConcierge.function1.title": "Commandes de service en chambre",
    "hotelConcierge.function1.description": "Prendre les commandes, clarifier les détails, envoyer à la cuisine",
    "hotelConcierge.function2.title": "Services de ménage",
    "hotelConcierge.function2.description": "Demander un nettoyage supplémentaire, changement de linge, serviettes",
    "hotelConcierge.function3.title": "Départ tardif",
    "hotelConcierge.function3.description": "Traiter le départ tardif, calculer le supplément",
    "hotelConcierge.function4.title": "Réservation de taxi",
    "hotelConcierge.function4.description": "Appeler un taxi, transfert aéroport, excursions",
    "hotelConcierge.function5.title": "Réservations de restaurants",
    "hotelConcierge.function5.description": "Tables de restaurant, billets d'événements",
    "hotelConcierge.function6.title": "Guide de la ville",
    "hotelConcierge.function6.description": "Recommandations de lieux, itinéraires, attractions",
    "hotelConcierge.channelsTitle": "Canaux d'interaction",
    "hotelConcierge.channelsSubtitle": "Les clients peuvent contacter de manière pratique",
    "hotelConcierge.channel1.name": "Enceinte intelligente dans la chambre",
    "hotelConcierge.channel1.description": "Contrôle vocal sans téléphone",
    "hotelConcierge.channel2.name": "Téléphone de chambre",
    "hotelConcierge.channel2.description": "Façon familière de se connecter",
    "hotelConcierge.channel3.name": "Interface web",
    "hotelConcierge.channel3.description": "Via le site web ou l'application de l'hôtel",
    "hotelConcierge.channel4.name": "Messageries",
    "hotelConcierge.channel4.description": "WhatsApp, Telegram, Facebook Messenger",
    "hotelConcierge.scenariosTitle": "Scénarios de service",
    "hotelConcierge.scenariosSubtitle": "Exemples de dialogues avec le concierge IA",
    "hotelConcierge.scenario1.title": "Service en chambre",
    "hotelConcierge.scenario1.description": "Commander le petit-déjeuner en chambre",
    "hotelConcierge.scenario1.dialogue1": "Je veux commander le petit-déjeuner dans ma chambre",
    "hotelConcierge.scenario1.dialogue2":
      "Bien sûr ! Le menu du petit-déjeuner est disponible jusqu'à 11h00. Que souhaitez-vous commander ?",
    "hotelConcierge.scenario1.dialogue3": "Petit-déjeuner continental et café",
    "hotelConcierge.scenario1.dialogue4":
      "Parfait ! Petit-déjeuner continental et café. Quand souhaitez-vous qu'il soit livré ? Il est 9h30 maintenant",
    "hotelConcierge.scenario1.dialogue5": "Dans 30 minutes",
    "hotelConcierge.scenario1.dialogue6":
      "Commande acceptée ! Nous livrerons à 10h00 dans la chambre 205. Le coût est de 25€. Merci !",
    "hotelConcierge.scenario2.title": "Ménage",
    "hotelConcierge.scenario2.description": "Demande de nettoyage supplémentaire",
    "hotelConcierge.scenario2.dialogue1": "J'ai besoin de serviettes supplémentaires",
    "hotelConcierge.scenario2.dialogue2": "Bien sûr ! Combien de serviettes avez-vous besoin ?",
    "hotelConcierge.scenario2.dialogue3": "Deux serviettes de bain",
    "hotelConcierge.scenario2.dialogue4":
      "D'accord ! Le ménage apportera deux serviettes de bain dans la chambre 205 dans 15 minutes",
    "hotelConcierge.scenario3.title": "Transport",
    "hotelConcierge.scenario3.description": "Réservation de taxi pour l'aéroport",
    "hotelConcierge.scenario3.dialogue1": "J'ai besoin d'un taxi pour l'aéroport demain à 8h",
    "hotelConcierge.scenario3.dialogue2": "Bien sûr ! Taxi pour l'aéroport à 8h00. Quel aéroport ?",
    "hotelConcierge.scenario3.dialogue3": "Barajas, terminal 2",
    "hotelConcierge.scenario3.dialogue4":
      "Réservation confirmée ! Le taxi sera à l'hôtel demain à 8h00. Le coût est de 35€. Temps de trajet environ 45 minutes",
    "hotelConcierge.listenDialogue": "Écouter le dialogue",
    "hotelConcierge.demoTitle": "Essayez le concierge IA",
    "hotelConcierge.demoSubtitle": "Démonstration interactive des capacités",
    "hotelConcierge.demoReady": "Concierge IA prêt à travailler",
    "hotelConcierge.demoDescription":
      "Cliquez sur le bouton et essayez de commander le service en chambre ou d'appeler un taxi",
    "hotelConcierge.startConversation": "Commencer la conversation",
    "hotelConcierge.callDemo": "Appeler pour une démo",
    "hotelConcierge.integrationsTitle": "Intégrations",
    "hotelConcierge.integrationsSubtitle": "Connexion aux systèmes de l'hôtel",
    "hotelConcierge.integration1.name": "Systèmes PMS",
    "hotelConcierge.integration1.description": "Opera, Fidelio, RoomMaster",
    "hotelConcierge.integration2.name": "Systèmes de restaurant",
    "hotelConcierge.integration2.description": "Intégration avec cuisine et bar",
    "hotelConcierge.integration3.name": "Services de taxi",
    "hotelConcierge.integration3.description": "Uber, Bolt, services locaux",
    "hotelConcierge.integration4.name": "Systèmes de paiement",
    "hotelConcierge.integration4.description": "Paiement de services via la chambre",
    "hotelConcierge.casesTitle": "Cas d'hôtels",
    "hotelConcierge.casesSubtitle": "Résultats de nos clients",
    "hotelConcierge.case1.title": "Boutique Hotel Barcelona",
    "hotelConcierge.case1.description": "Satisfaction des clients augmentée de 40%",
    "hotelConcierge.case1.result1": "95% d'avis positifs",
    "hotelConcierge.case1.result2": "60% d'économie de temps du personnel",
    "hotelConcierge.case1.result3": "Disponibilité 24/7",
    "hotelConcierge.case2.title": "Resort Chain Spain",
    "hotelConcierge.case2.description": "80% des demandes des clients automatisées",
    "hotelConcierge.case2.result1": "80% d'automatisation",
    "hotelConcierge.case2.result2": "Support pour 5 langues",
    "hotelConcierge.case2.result3": "300% ROI en un an",
    "hotelConcierge.readFullCase": "Lire le cas complet",
    "hotelConcierge.packagesTitle": "Forfaits pour hôtels",
    "hotelConcierge.packagesSubtitle": "Choisissez le bon plan",
    "hotelConcierge.package1.name": "Petit",
    "hotelConcierge.package1.description": "Jusqu'à 50 chambres",
    "hotelConcierge.package1.price": "€299/mois",
    "hotelConcierge.package1.feature1": "Scénarios de base",
    "hotelConcierge.package1.feature2": "Téléphone + web",
    "hotelConcierge.package1.feature3": "Support par e-mail",
    "hotelConcierge.package2.name": "Moyen",
    "hotelConcierge.package2.description": "50-200 chambres",
    "hotelConcierge.package2.price": "€599/mois",
    "hotelConcierge.package2.feature1": "Tous les scénarios",
    "hotelConcierge.package2.feature2": "Tous les canaux",
    "hotelConcierge.package2.feature3": "Intégrations",
    "hotelConcierge.package2.feature4": "Support prioritaire",
    "hotelConcierge.package3.name": "Grand",
    "hotelConcierge.package3.description": "Plus de 200 chambres",
    "hotelConcierge.package3.price": "à partir de €999/mois",
    "hotelConcierge.package3.feature1": "Personnalisation complète",
    "hotelConcierge.package3.feature2": "Multilingue",
    "hotelConcierge.package3.feature3": "Analytique",
    "hotelConcierge.package3.feature4": "Gestionnaire personnel",
    "hotelConcierge.popular": "Populaire",
    "hotelConcierge.selectPackage": "Sélectionner le forfait",
    "hotelConcierge.faqTitle": "Questions fréquemment posées",
    "hotelConcierge.faq1.question": "Le système prend-il en charge plusieurs langues ?",
    "hotelConcierge.faq1.answer":
      "Oui, nous prenons en charge les principales langues européennes : anglais, espagnol, français, allemand, italien et autres sur demande.",
    "hotelConcierge.faq2.question": "Comment s'intègre-t-il avec notre PMS ?",
    "hotelConcierge.faq2.answer":
      "Nous nous intégrons avec les PMS populaires via API. Nous obtenons des données sur les clients, les chambres, les factures pour personnaliser le service.",
    "hotelConcierge.faq3.question": "Que se passe-t-il si l'IA ne peut pas répondre à une question ?",
    "hotelConcierge.faq3.answer":
      "Le système transfère les demandes complexes à un employé en direct avec le contexte complet de la conversation.",
    "hotelConcierge.faq4.question": "Quel est le coût de mise en œuvre ?",
    "hotelConcierge.faq4.answer":
      "Le coût dépend de la taille de l'hôtel et du nombre d'intégrations. Mise en œuvre de base à partir de 2 000€.",
    "hotelConcierge.ctaTitle": "Améliorez le service de votre hôtel",
    "hotelConcierge.ctaDescription": "Obtenez une démo du concierge IA et calcul pour votre hôtel",
    "hotelConcierge.aiConcierge": "Concierge IA Maria",
    "hotelConcierge.readyToHelp": "Prête à aider",
    "hotelConcierge.welcomeMessage":
      "Bienvenue dans notre hôtel ! Comment puis-je vous aider ? Je peux prendre des commandes, appeler un taxi ou réserver une table",
    "hotelConcierge.quickAction1": "Commande de nourriture",
    "hotelConcierge.quickAction2": "Appeler un taxi",
    "hotelConcierge.quickAction3": "Ménage",
    "hotelConcierge.quickAction4": "Excursions",
    "hotelConcierge.guest": "Client",
    "hotelConcierge.ai": "IA",
  },
}

export function getTranslation(locale: Locale, key: TranslationKey): string {
  try {
    // First try to get the translation for the requested locale
    const localeTranslations = translations[locale]
    if (localeTranslations && localeTranslations[key]) {
      return localeTranslations[key]
    }

    // Fallback to Russian if the key doesn't exist in the requested locale
    const fallbackTranslations = translations.ru
    if (fallbackTranslations && fallbackTranslations[key]) {
      return fallbackTranslations[key]
    }

    // Final fallback to the key itself
    return key
  } catch (error) {
    console.warn(`Translation error for locale "${locale}" and key "${key}":`, error)
    return key
  }
}

export function useTranslations(locale: Locale) {
  // Validate locale parameter
  if (!locale || typeof locale !== "string") {
    console.warn("Invalid locale provided to useTranslations:", locale)
    locale = "ru" // fallback to Russian
  }

  return {
    t: (key: TranslationKey) => {
      if (!key || typeof key !== "string") {
        console.warn("Invalid translation key:", key)
        return String(key || "")
      }
      return getTranslation(locale, key)
    },
    locale,
  }
}
