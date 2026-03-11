"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Phone, Users, Building2, Zap, Target, Home } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"
import { useCTA } from "@/components/modals/cta-provider"

interface SolutionsPageProps {
  params: { locale: Locale }
}

// Solutions page translations
const pageTranslations = {
  ru: {
    badge: "Решения на базе голосовых AI-ассистентов",
    title: "Автоматизируйте бизнес-процессы с помощью голосового AI",
    subtitle: "Выберите готовое решение или закажите индивидуальную разработку. Наши AI-ассистенты работают 24/7 и увеличивают эффективность бизнеса.",
    ourSolutions: "Наши решения",
    learnMore: "Подробнее",
    howWeImplement: "Как мы внедряем решения",
    howWeImplementDesc: "Проверенная методология внедрения с гарантией результата",
    trustedBy: "Нам доверяют компании из разных отраслей",
    logo: "Логотип",
    faqTitle: "Часто задаваемые вопросы",
    ctaTitle: "Готовы автоматизировать ваш бизнес?",
    ctaSubtitle: "Получите персональную консультацию и расчет стоимости для вашего проекта",
    contactUs: "Связаться с нами",
    solutions: [
      {
        title: "Голосовой AI-менеджер по продажам",
        description: "Увеличьте продажи на 40% с голосовым AI-менеджером, который работает 24/7",
        metrics: ["40% рост продаж", "24/7 работа", "0 сек ожидания"],
        href: "voice-sales-manager",
      },
      {
        title: "Робот оператор",
        description: "Отвечает на 100% входящих звонков 24/7. Квалифицирует клиентов, озвучивает цены, управляет заявками",
        metrics: ["100% входящих", "24/7 без выходных", "60-80% без оператора"],
        href: "robot-operator",
      },
      {
        title: "Автоматический оператор",
        description: "Обработка входящих звонков, квалификация клиентов, управление заявками 24/7",
        metrics: ["Все звонки обработаны", "Квалификация лидов", "CRM интеграция"],
        href: "automatic-operator",
      },
      {
        title: "Виртуальный оператор",
        description: "Работает 24/7, интеграция с CRM, поддержка всех языков, управление продажами и поддержкой",
        metrics: ["24/7 работа", "Мультиязычность", "CRM интеграция"],
        href: "virtual-operator",
      },
      {
        title: "Автоматизация продаж",
        description: "Увеличивает конверсию в 2-3 раза. AI принимает заявки, звонит клиентам, выставляет счета",
        metrics: ["2-3x конверсия", "Автоматизация цикла", "CRM интеграция"],
        href: "automation-sales",
      },
      {
        title: "Система автоматизации продаж",
        description: "Для МСБ. Автоматизирует работу менеджера по продажам, увеличивает продактивность в 3-5 раз",
        metrics: ["3-5x продактивность", "Для МСБ", "Быстрый старт"],
        href: "sales-automation-system",
      },
      {
        title: "Робот для звонков",
        description: "Входящие и исходящие звонки, квалификация, напоминания, обзвон. Экономия ФОТ до 70%",
        metrics: ["Входящие и исходящие", "Квалификация", "70% экономия ФОТ"],
        href: "robot-dlya-zvonkov",
      },
      {
        title: "Робот для продаж",
        description: "Ведёт клиента до сделки. Задаёт вопросы, считает стоимость, озвучивает предложение",
        metrics: ["От контакта до сделки", "Автоматические расчёты", "Формирование счётов"],
        href: "robot-dlya-prodazh",
      },
      {
        title: "Обработка заявок",
        description: "Автоматизирует приём, обработку и маршрутизацию входящих заявок. Анализирует и приоритизирует",
        metrics: ["Автоматизация цикла", "Приоритизация", "Маршрутизация"],
        href: "obrabotka-zayavok",
      },
      {
        title: "Обработка заказов",
        description: "Автоматизирует приём заказов, проверку данных, создание счётов и интеграцию с логистикой",
        metrics: ["Полный цикл", "Проверка данных", "Логистика"],
        href: "obrabotka-zakazov",
      },
      {
        title: "Выставление счетов",
        description: "Генерирует счёт из заявки или звонка, отправляет на email/CRM, проверяет реквизиты",
        metrics: ["Автогенерация", "Email/CRM отправка", "Проверка реквизитов"],
        href: "vystavlenie-schetov",
      },
      {
        title: "Расчет доставки",
        description: "AI автоматически рассчитывает доставку с учётом веса, размера, расстояния и типа транспорта",
        metrics: ["Автоматизация", "Оптимизация цены", "Все параметры"],
        href: "raschet-dostavki",
      },
      {
        title: "AI для бизнеса",
        description: "Общее решение для автоматизации продаж, звонков, заявок, счетов и логистики",
        metrics: ["Полный стек", "Все решения", "Масштабирование"],
        href: "ai-dlya-biznesa",
      },
      {
        title: "AI-консьерж для отелей",
        description: "AI-консьерж для отелей: заказы, бронирования и сервис без очередей",
        metrics: ["95% удовлетворенность", "60% экономия времени", "Мультиязычность"],
        href: "hotel-concierge",
      },
      {
        title: "Для малого и среднего бизнеса",
        description: "Готовые решения для малого и среднего бизнеса с быстрым запуском",
        metrics: ["7 дней запуск", "Без интеграций", "Фиксированная цена"],
        href: "smb",
      },
      {
        title: "Enterprise решения",
        description: "Корпоративные решения с высокой безопасностью и SLA",
        metrics: ["99.9% SLA", "On-premise", "Полная кастомизация"],
        href: "enterprise",
      },
      {
        title: "Индивидуальные решения",
        description: "Индивидуальные AI-решения под любые бизнес-задачи",
        metrics: ["Любая сложность", "RAG + LLM", "Полный цикл"],
        href: "custom",
      },
      {
        title: "Умный дом на базе ИИ",
        description: "Умный дом с AI: голосовое управление, автоматизация и мобильное приложение",
        metrics: ["Голосовое управление", "Автополив", "Мобильное приложение"],
        href: "smart-home",
      },
    ],
    steps: [
      { step: "01", title: "Анализ и планирование", description: "Изучаем ваши процессы, определяем точки автоматизации и составляем техническое задание" },
      { step: "02", title: "Разработка и настройка", description: "Создаем AI-ассистента, настраиваем интеграции с вашими системами и обучаем модель" },
      { step: "03", title: "Тестирование и запуск", description: "Проводим пилотное тестирование, дорабатываем по результатам и запускаем в продакшн" },
    ],
    faq: [
      { q: "Сколько времени занимает внедрение?", a: "Для готовых решений — от 7 дней. Для корпоративных проектов — от 4 недель в зависимости от сложности интеграций." },
      { q: "Какие языки поддерживает система?", a: "Поддерживаем русский, английский, испанский, немецкий, французский, голландский и другие языки по запросу." },
      { q: "Можно ли интегрировать с нашей системой?", a: "Да, мы интегрируемся с любыми системами, у которых есть API: CRM, ERP, телефония, склад, бухгалтерия." },
      { q: "Как обеспечивается безопасность данных?", a: "Используем шифр��вание данных, соблюдаем GDPR, можем развернуть решение на ваших серверах для максимальной безопасности." },
    ],
  },
  en: {
    badge: "Voice AI-powered solutions",
    title: "Automate business processes with voice AI",
    subtitle: "Choose a ready-made solution or order custom development. Our AI assistants work 24/7 and increase business efficiency.",
    ourSolutions: "Our Solutions",
    learnMore: "Learn More",
    howWeImplement: "How We Implement",
    howWeImplementDesc: "Proven implementation methodology with guaranteed results",
    trustedBy: "Trusted by companies from various industries",
    logo: "Logo",
    faqTitle: "Frequently Asked Questions",
    ctaTitle: "Ready to automate your business?",
    ctaSubtitle: "Get a personal consultation and cost estimate for your project",
    contactUs: "Contact Us",
    solutions: [
      {
        title: "Voice AI Sales Manager",
        description: "Increase sales by 40% with a voice AI manager that works 24/7",
        metrics: ["40% sales growth", "24/7 operation", "0 sec wait time"],
        href: "voice-sales-manager",
      },
      {
        title: "Robot Operator",
        description: "Answers 100% of incoming calls 24/7. Qualifies customers, states prices, manages requests",
        metrics: ["100% inbound calls", "24/7 without breaks", "60-80% without operator"],
        href: "robot-operator",
      },
      {
        title: "Automatic Operator",
        description: "Processes incoming calls, qualifies customers, manages requests 24/7",
        metrics: ["All calls handled", "Lead qualification", "CRM integration"],
        href: "automatic-operator",
      },
      {
        title: "Virtual Operator",
        description: "Works 24/7, integrates with CRM, supports all languages, manages sales and support",
        metrics: ["24/7 operation", "Multilingual", "CRM integration"],
        href: "virtual-operator",
      },
      {
        title: "Sales Automation",
        description: "Increases conversion 2-3x. AI takes requests, calls customers, issues invoices",
        metrics: ["2-3x conversion", "Full cycle automation", "CRM integration"],
        href: "automation-sales",
      },
      {
        title: "Sales Automation System",
        description: "For SMB. Automates sales manager work, increases productivity 3-5x",
        metrics: ["3-5x productivity", "For SMB", "Quick start"],
        href: "sales-automation-system",
      },
      {
        title: "Robot for Calls",
        description: "Inbound and outbound calls, qualification, reminders, outreach. Save up to 70% on payroll",
        metrics: ["Inbound & outbound", "Qualification", "70% payroll savings"],
        href: "robot-dlya-zvonkov",
      },
      {
        title: "Sales Robot",
        description: "Leads customer to deal. Asks questions, calculates cost, presents offer",
        metrics: ["Contact to deal", "Auto calculations", "Invoice generation"],
        href: "robot-dlya-prodazh",
      },
      {
        title: "Request Processing",
        description: "Automates receiving, processing and routing of incoming requests. Analyzes and prioritizes",
        metrics: ["Full cycle automation", "Prioritization", "Routing"],
        href: "obrabotka-zayavok",
      },
      {
        title: "Order Processing",
        description: "Automates order intake, data validation, invoice creation and logistics integration",
        metrics: ["Full cycle", "Data validation", "Logistics"],
        href: "obrabotka-zakazov",
      },
      {
        title: "Invoice Generation",
        description: "Generates invoice from request or call, sends to email/CRM, validates details",
        metrics: ["Auto generation", "Email/CRM sending", "Details validation"],
        href: "vystavlenie-schetov",
      },
      {
        title: "Delivery Calculation",
        description: "AI automatically calculates delivery considering weight, size, distance and transport type",
        metrics: ["Automation", "Price optimization", "All parameters"],
        href: "raschet-dostavki",
      },
      {
        title: "AI for Business",
        description: "Complete solution for sales, calls, requests, invoices and logistics automation",
        metrics: ["Full stack", "All solutions", "Scaling"],
        href: "ai-dlya-biznesa",
      },
      {
        title: "AI Hotel Concierge",
        description: "AI concierge for hotels: orders, bookings and service without queues",
        metrics: ["95% satisfaction", "60% time savings", "Multilingual"],
        href: "hotel-concierge",
      },
      {
        title: "For Small & Medium Business",
        description: "Ready solutions for small and medium businesses with quick launch",
        metrics: ["7 days launch", "No integrations needed", "Fixed price"],
        href: "smb",
      },
      {
        title: "Enterprise Solutions",
        description: "Enterprise solutions with high security and SLA",
        metrics: ["99.9% SLA", "On-premise", "Full customization"],
        href: "enterprise",
      },
      {
        title: "Custom Solutions",
        description: "Custom AI solutions for any business challenges",
        metrics: ["Any complexity", "RAG + LLM", "Full cycle"],
        href: "custom",
      },
      {
        title: "AI Smart Home",
        description: "Smart home with AI: voice control, automation and mobile app",
        metrics: ["Voice control", "Auto irrigation", "Mobile app"],
        href: "smart-home",
      },
    ],
    steps: [
      { step: "01", title: "Analysis and Planning", description: "We study your processes, identify automation points and create technical specifications" },
      { step: "02", title: "Development and Setup", description: "We create the AI assistant, configure integrations with your systems and train the model" },
      { step: "03", title: "Testing and Launch", description: "We conduct pilot testing, refine based on results and launch into production" },
    ],
    faq: [
      { q: "How long does implementation take?", a: "For ready solutions — from 7 days. For enterprise projects — from 4 weeks depending on integration complexity." },
      { q: "What languages does the system support?", a: "We support Russian, English, Spanish, German, French, Dutch and other languages on request." },
      { q: "Can it integrate with our system?", a: "Yes, we integrate with any systems that have an API: CRM, ERP, telephony, warehouse, accounting." },
      { q: "How is data security ensured?", a: "We use data encryption, comply with GDPR, and can deploy the solution on your servers for maximum security." },
    ],
  },
  es: {
    badge: "Soluciones basadas en IA de voz",
    title: "Automatice los procesos de negocio con IA de voz",
    subtitle: "Elija una solución lista o solicite desarrollo personalizado. Nuestros asistentes IA trabajan 24/7 y aumentan la eficiencia empresarial.",
    ourSolutions: "Nuestras Soluciones",
    learnMore: "Más información",
    howWeImplement: "Cómo implementamos",
    howWeImplementDesc: "Metodología de implementación probada con resultados garantizados",
    trustedBy: "Empresas de diversas industrias confían en nosotros",
    logo: "Logo",
    faqTitle: "Preguntas Frecuentes",
    ctaTitle: "¿Listo para automatizar su negocio?",
    ctaSubtitle: "Obtenga una consulta personal y estimación de costos para su proyecto",
    contactUs: "Contáctenos",
    solutions: [
      {
        title: "Gerente de Ventas IA por Voz",
        description: "Aumente las ventas un 40% con un gerente IA de voz que trabaja 24/7",
        metrics: ["40% crecimiento", "24/7 operación", "0 seg espera"],
        href: "voice-sales-manager",
      },
      {
        title: "Robot Operador",
        description: "Responde el 100% de llamadas entrantes 24/7. Califica clientes, enuncia precios, gestiona solicitudes",
        metrics: ["100% llamadas", "24/7 sin descansos", "60-80% sin operador"],
        href: "robot-operator",
      },
      {
        title: "Operador Automático",
        description: "Procesa llamadas entrantes, califica clientes, gestiona solicitudes 24/7",
        metrics: ["Todas las llamadas", "Calificación líderes", "Integración CRM"],
        href: "automatic-operator",
      },
      {
        title: "Operador Virtual",
        description: "Funciona 24/7, integración CRM, soporta idiomas, gestiona ventas y soporte",
        metrics: ["24/7 operación", "Multilingüe", "Integración CRM"],
        href: "virtual-operator",
      },
      {
        title: "Automatización de Ventas",
        description: "Aumenta conversión 2-3x. IA toma pedidos, llama clientes, emite facturas",
        metrics: ["2-3x conversión", "Automatización completa", "Integración CRM"],
        href: "automation-sales",
      },
      {
        title: "Sistema de Automatización de Ventas",
        description: "Para PYMES. Automatiza trabajo del gerente, aumenta productividad 3-5x",
        metrics: ["3-5x productividad", "Para PYMES", "Inicio rápido"],
        href: "sales-automation-system",
      },
      {
        title: "Robot para Llamadas",
        description: "Llamadas entrantes y salientes, calificación, recordatorios, alcance. Ahorra hasta 70%",
        metrics: ["Entrantes y salientes", "Calificación", "70% ahorro nómina"],
        href: "robot-dlya-zvonkov",
      },
      {
        title: "Robot de Ventas",
        description: "Guía cliente a la venta. Hace preguntas, calcula costo, presenta oferta",
        metrics: ["Contacto a venta", "Cálculos automáticos", "Generación facturas"],
        href: "robot-dlya-prodazh",
      },
      {
        title: "Procesamiento de Solicitudes",
        description: "Automatiza recepción, procesamiento y enrutamiento de solicitudes. Analiza y prioriza",
        metrics: ["Automatización ciclo", "Priorización", "Enrutamiento"],
        href: "obrabotka-zayavok",
      },
      {
        title: "Procesamiento de Pedidos",
        description: "Automatiza recepción, validación, creación de facturas e integración logística",
        metrics: ["Ciclo completo", "Validación datos", "Logística"],
        href: "obrabotka-zakazov",
      },
      {
        title: "Generación de Facturas",
        description: "Genera factura desde solicitud o llamada, envía a email/CRM, valida detalles",
        metrics: ["Generación automática", "Envío email/CRM", "Validación detalles"],
        href: "vystavlenie-schetov",
      },
      {
        title: "Cálculo de Entrega",
        description: "IA calcula automáticamente entrega con peso, tamaño, distancia y tipo transporte",
        metrics: ["Automatización", "Optimización precio", "Todos parámetros"],
        href: "raschet-dostavki",
      },
      {
        title: "IA para Negocios",
        description: "Solución completa para automatización de ventas, llamadas, solicitudes, facturas y logística",
        metrics: ["Stack completo", "Todas soluciones", "Escalabilidad"],
        href: "ai-dlya-biznesa",
      },
      {
        title: "Conserje IA para Hoteles",
        description: "Conserje IA para hoteles: pedidos, reservas y servicio sin colas",
        metrics: ["95% satisfacción", "60% ahorro tiempo", "Multilingüe"],
        href: "hotel-concierge",
      },
      {
        title: "Para Pequeñas y Medianas Empresas",
        description: "Soluciones listas para PYMES con lanzamiento rápido",
        metrics: ["7 días lanzamiento", "Sin integraciones", "Precio fijo"],
        href: "smb",
      },
      {
        title: "Soluciones Enterprise",
        description: "Soluciones corporativas con alta seguridad y SLA",
        metrics: ["99.9% SLA", "On-premise", "Personalización total"],
        href: "enterprise",
      },
      {
        title: "Soluciones Personalizadas",
        description: "Soluciones IA personalizadas para cualquier desafío empresarial",
        metrics: ["Cualquier complejidad", "RAG + LLM", "Ciclo completo"],
        href: "custom",
      },
      {
        title: "Casa Inteligente con IA",
        description: "Casa inteligente con IA: control por voz, automatización y app móvil",
        metrics: ["Control por voz", "Riego automático", "App móvil"],
        href: "smart-home",
      },
    ],
    steps: [
      { step: "01", title: "Análisis y Planificación", description: "Estudiamos sus procesos, identificamos puntos de automatización y creamos especificaciones técnicas" },
      { step: "02", title: "Desarrollo y Configuración", description: "Creamos el asistente IA, configuramos integraciones con sus sistemas y entrenamos el modelo" },
      { step: "03", title: "Pruebas y Lanzamiento", description: "Realizamos pruebas piloto, refinamos según resultados y lanzamos a producción" },
    ],
    faq: [
      { q: "¿Cuánto tiempo toma la implementación?", a: "Para soluciones listas — desde 7 días. Para proyectos enterprise — desde 4 semanas dependiendo de la complejidad." },
      { q: "¿Qué idiomas soporta el sistema?", a: "Soportamos ruso, inglés, español, alemán, francés, holandés y otros idiomas bajo pedido." },
      { q: "¿Se puede integrar con nuestro sistema?", a: "Sí, nos integramos con cualquier sistema que tenga API: CRM, ERP, telefonía, almacén, contabilidad." },
      { q: "¿Cómo se garantiza la seguridad de los datos?", a: "Usamos cifrado de datos, cumplimos con GDPR y podemos desplegar la solución en sus servidores para máxima seguridad." },
    ],
  },
  de: {
    badge: "Sprach-KI-basierte Lösungen",
    title: "Automatisieren Sie Geschäftsprozesse mit Sprach-KI",
    subtitle: "Wählen Sie eine fertige Lösung oder bestellen Sie eine individuelle Entwicklung. Unsere KI-Assistenten arbeiten 24/7 und steigern die Geschäftseffizienz.",
    ourSolutions: "Unsere Lösungen",
    learnMore: "Mehr erfahren",
    howWeImplement: "Wie wir implementieren",
    howWeImplementDesc: "Bewährte Implementierungsmethodik mit garantierten Ergebnissen",
    trustedBy: "Unternehmen aus verschiedenen Branchen vertrauen uns",
    logo: "Logo",
    faqTitle: "Häufig gestellte Fragen",
    ctaTitle: "Bereit, Ihr Unternehmen zu automatisieren?",
    ctaSubtitle: "Erhalten Sie eine persönliche Beratung und Kostenschätzung für Ihr Projekt",
    contactUs: "Kontaktieren Sie uns",
    solutions: [
      {
        title: "Sprach-KI-Vertriebsmanager",
        description: "Steigern Sie den Umsatz um 40% mit einem Sprach-KI-Manager, der 24/7 arbeitet",
        metrics: ["40% Umsatzwachstum", "24/7 Betrieb", "0 Sek Wartezeit"],
        href: "voice-sales-manager",
      },
      {
        title: "Roboter-Operator",
        description: "Beantwortet 100% der eingehenden Anrufe 24/7. Qualifiziert Kunden, nennt Preise, verwaltet Anfragen",
        metrics: ["100% eingehende Anrufe", "24/7 ohne Pause", "60-80% ohne Operator"],
        href: "robot-operator",
      },
      {
        title: "Automatischer Operator",
        description: "Verarbeitet eingehende Anrufe, qualifiziert Kunden, verwaltet Anfragen 24/7",
        metrics: ["Alle Anrufe bearbeitet", "Lead-Qualifizierung", "CRM-Integration"],
        href: "automatic-operator",
      },
      {
        title: "Virtueller Operator",
        description: "Arbeitet 24/7, integriert mit CRM, unterstützt Sprachen, verwaltet Verkauf und Support",
        metrics: ["24/7 Betrieb", "Mehrsprachig", "CRM-Integration"],
        href: "virtual-operator",
      },
      {
        title: "Vertriebsautomatisierung",
        description: "Erhöht Konversion um 2-3x. KI nimmt Anfragen auf, ruft Kunden an, stellt Rechnungen aus",
        metrics: ["2-3x Konversion", "Vollständige Automatisierung", "CRM-Integration"],
        href: "automation-sales",
      },
      {
        title: "Vertriebsautomatisierungssystem",
        description: "Für KMU. Automatisiert Vertriebsmanagerarbeit, erhöht Produktivität 3-5x",
        metrics: ["3-5x Produktivität", "Für KMU", "Schneller Start"],
        href: "sales-automation-system",
      },
      {
        title: "Roboter für Anrufe",
        description: "Eingehende und ausgehende Anrufe, Qualifizierung, Erinnerungen, Outreach. Sparen bis 70%",
        metrics: ["Ein- und ausgehend", "Qualifizierung", "70% Lohnersparnis"],
        href: "robot-dlya-zvonkov",
      },
      {
        title: "Verkaufsroboter",
        description: "Führt Kunden zum Deal. Stellt Fragen, berechnet Kosten, präsentiert Angebot",
        metrics: ["Kontakt zum Deal", "Auto-Berechnungen", "Rechnungsgenerierung"],
        href: "robot-dlya-prodazh",
      },
      {
        title: "Anfrageverarbeitung",
        description: "Automatisiert Empfang, Verarbeitung und Weiterleitung von Anfragen. Analysiert und priorisiert",
        metrics: ["Zyklus-Automatisierung", "Priorisierung", "Weiterleitung"],
        href: "obrabotka-zayavok",
      },
      {
        title: "Auftragsverarbeitung",
        description: "Automatisiert Auftragsannahme, Validierung, Rechnungserstellung und Logistikintegration",
        metrics: ["Voller Zyklus", "Datenvalidierung", "Logistik"],
        href: "obrabotka-zakazov",
      },
      {
        title: "Rechnungsgenerierung",
        description: "Generiert Rechnung aus Anfrage oder Anruf, versendet per Email/CRM, validiert Details",
        metrics: ["Auto-Generierung", "Email/CRM-Versand", "Detail-Validierung"],
        href: "vystavlenie-schetov",
      },
      {
        title: "Lieferungsberechnung",
        description: "KI berechnet automatisch Lieferung unter Berücksichtigung von Gewicht, Größe, Entfernung und Transporttyp",
        metrics: ["Automatisierung", "Preisoptimierung", "Alle Parameter"],
        href: "raschet-dostavki",
      },
      {
        title: "KI für Unternehmen",
        description: "Vollständige Lösung für Verkaufs-, Anrufs-, Anfrage-, Rechnungs- und Logistikautomatisierung",
        metrics: ["Vollständiger Stack", "Alle Lösungen", "Skalierbarkeit"],
        href: "ai-dlya-biznesa",
      },
      {
        title: "KI-Hotelconcierge",
        description: "KI-Concierge für Hotels: Bestellungen, Buchungen und Service ohne Warteschlangen",
        metrics: ["95% Zufriedenheit", "60% Zeitersparnis", "Mehrsprachig"],
        href: "hotel-concierge",
      },
      {
        title: "Für KMU",
        description: "Fertige Lösungen für kleine und mittlere Unternehmen mit schnellem Start",
        metrics: ["7 Tage Start", "Keine Integrationen", "Festpreis"],
        href: "smb",
      },
      {
        title: "Enterprise-Lösungen",
        description: "Unternehmenslösungen mit hoher Sicherheit und SLA",
        metrics: ["99,9% SLA", "On-premise", "Volle Anpassung"],
        href: "enterprise",
      },
      {
        title: "Individuelle Lösungen",
        description: "Individuelle KI-Lösungen für alle Geschäftsherausforderungen",
        metrics: ["Jede Komplexität", "RAG + LLM", "Voller Zyklus"],
        href: "custom",
      },
      {
        title: "KI Smart Home",
        description: "Smart Home mit KI: Sprachsteuerung, Automatisierung und mobile App",
        metrics: ["Sprachsteuerung", "Autobewässerung", "Mobile App"],
        href: "smart-home",
      },
    ],
    steps: [
      { step: "01", title: "Analyse und Planung", description: "Wir studieren Ihre Prozesse, identifizieren Automatisierungspunkte und erstellen technische Spezifikationen" },
      { step: "02", title: "Entwicklung und Einrichtung", description: "Wir erstellen den KI-Assistenten, konfigurieren Integrationen mit Ihren Systemen und trainieren das Modell" },
      { step: "03", title: "Test und Start", description: "Wir führen Pilottests durch, verfeinern basierend auf Ergebnissen und starten in die Produktion" },
    ],
    faq: [
      { q: "Wie lange dauert die Implementierung?", a: "Für fertige L��sungen — ab 7 Tagen. Für Enterprise-Projekte — ab 4 Wochen je nach Integrationskomplexität." },
      { q: "Welche Sprachen unterstützt das System?", a: "Wir unterstützen Russisch, Englisch, Spanisch, Deutsch, Französisch, Niederländisch und andere Sprachen auf Anfrage." },
      { q: "Kann es mit unserem System integriert werden?", a: "Ja, wir integrieren mit allen Systemen, die eine API haben: CRM, ERP, Telefonie, Lager, Buchhaltung." },
      { q: "Wie wird die Datensicherheit gewährleistet?", a: "Wir verwenden Datenverschlüsselung, halten GDPR ein und können die Lösung auf Ihren Servern für maximale Sicherheit bereitstellen." },
    ],
  },
  nl: {
    badge: "Oplossingen op basis van stem-AI",
    title: "Automatiseer bedrijfsprocessen met stem-AI",
    subtitle: "Kies een kant-en-klare oplossing of bestel maatwerk ontwikkeling. Onze AI-assistenten werken 24/7 en verhogen de bedrijfsefficiëntie.",
    ourSolutions: "Onze Oplossingen",
    learnMore: "Meer informatie",
    howWeImplement: "Hoe wij implementeren",
    howWeImplementDesc: "Bewezen implementatiemethodologie met gegarandeerde resultaten",
    trustedBy: "Bedrijven uit verschillende industrieën vertrouwen ons",
    logo: "Logo",
    faqTitle: "Veelgestelde Vragen",
    ctaTitle: "Klaar om uw bedrijf te automatiseren?",
    ctaSubtitle: "Ontvang een persoonlijk advies en kostenraming voor uw project",
    contactUs: "Neem contact op",
    solutions: [
      {
        title: "Stem AI Verkoopmanager",
        description: "Verhoog de verkoop met 40% met een stem-AI manager die 24/7 werkt",
        metrics: ["40% groei", "24/7 werking", "0 sec wachttijd"],
        href: "voice-sales-manager",
      },
      {
        title: "Robot-operator",
        description: "Beantwoordt 100% inkomende oproepen 24/7. Kwalificeert klanten, noemt prijzen, beheert verzoeken",
        metrics: ["100% inkomend", "24/7 zonder pauzes", "60-80% zonder operator"],
        href: "robot-operator",
      },
      {
        title: "Automatische operator",
        description: "Verwerkt inkomende oproepen, kwalificeert klanten, beheert verzoeken 24/7",
        metrics: ["Alle oproepen verwerkt", "Lead-kwalificatie", "CRM-integratie"],
        href: "automatic-operator",
      },
      {
        title: "Virtuele operator",
        description: "Werkt 24/7, integreert met CRM, ondersteunt talen, beheert verkoop en ondersteuning",
        metrics: ["24/7 werking", "Meertalig", "CRM-integratie"],
        href: "virtual-operator",
      },
      {
        title: "Verkoopautomatisering",
        description: "Verhoogt conversie 2-3x. AI neemt verzoeken aan, belt klanten, geeft facturen uit",
        metrics: ["2-3x conversie", "Volledige automatisering", "CRM-integratie"],
        href: "automation-sales",
      },
      {
        title: "Verkoopautomatiseringssysteem",
        description: "Voor MKB. Automatiseert verkoopmanagerwerk, verhoogt productiviteit 3-5x",
        metrics: ["3-5x productiviteit", "Voor MKB", "Snelle start"],
        href: "sales-automation-system",
      },
      {
        title: "Robot voor oproepen",
        description: "Inkomende en uitgaande oproepen, kwalificatie, herinneringen, outreach. Bespaar tot 70%",
        metrics: ["In- en uitgaand", "Kwalificatie", "70% loonbesparing"],
        href: "robot-dlya-zvonkov",
      },
      {
        title: "Verkoopbot",
        description: "Leidt klant naar deal. Stelt vragen, berekent kosten, presenteert aanbod",
        metrics: ["Contact naar deal", "Auto-berekeningen", "Factuurgeneratie"],
        href: "robot-dlya-prodazh",
      },
      {
        title: "Verzoekverwerking",
        description: "Automatiseert ontvangst, verwerking en routering van verzoeken. Analyzeert en prioriseert",
        metrics: ["Cyclus-automatisering", "Prioritering", "Routering"],
        href: "obrabotka-zayavok",
      },
      {
        title: "Orderverwerking",
        description: "Automatiseert orderinname, validatie, factuurgeneratie en logistieke integratie",
        metrics: ["Volledige cyclus", "Datavalidatie", "Logistiek"],
        href: "obrabotka-zakazov",
      },
      {
        title: "Factuurgeneratie",
        description: "Genereert factuur uit verzoek of oproep, verzendt per email/CRM, valideert details",
        metrics: ["Auto-generatie", "Email/CRM-verzending", "Detail-validatie"],
        href: "vystavlenie-schetov",
      },
      {
        title: "Bezorgingsberekening",
        description: "AI berekent automatisch bezorging met gewicht, grootte, afstand en transporttype",
        metrics: ["Automatisering", "Prijsoptimalisatie", "Alle parameters"],
        href: "raschet-dostavki",
      },
      {
        title: "AI voor bedrijven",
        description: "Volledige oplossing voor verkoop-, oproep-, verzoek-, factuur- en logistiekautomatisering",
        metrics: ["Volledige stack", "Alle oplossingen", "Schaalvergroting"],
        href: "ai-dlya-biznesa",
      },
      {
        title: "AI Hotelconcierge",
        description: "AI concierge voor hotels: bestellingen, reserveringen en service zonder wachtrijen",
        metrics: ["95% tevredenheid", "60% tijdbesparing", "Meertalig"],
        href: "hotel-concierge",
      },
      {
        title: "Voor kleine en middelgrote bedrijven",
        description: "Kant-en-klare oplossingen voor MKB met snelle lancering",
        metrics: ["7 dagen lancering", "Geen integraties nodig", "Vaste prijs"],
        href: "smb",
      },
      {
        title: "Enterprise-oplossingen",
        description: "Enterprise-oplossingen met hoge veiligheid en SLA",
        metrics: ["99,9% SLA", "On-premise", "Volledige aanpasssing"],
        href: "enterprise",
      },
      {
        title: "Aangepaste oplossingen",
        description: "Aangepaste AI-oplossingen voor alle bedrijfsuitdagingen",
        metrics: ["Elke complexiteit", "RAG + LLM", "Volledige cyclus"],
        href: "custom",
      },
      {
        title: "AI Smart Home",
        description: "Smart home met AI: spraakbesturing, automatisering en mobiele app",
        metrics: ["Spraakbesturing", "Automatische bewatering", "Mobiele app"],
        href: "smart-home",
      },
    ],
    steps: [
      { step: "01", title: "Analyse en Planning", description: "We bestuderen uw processen, identificeren automatiseringspunten en maken technische specificaties" },
      { step: "02", title: "Ontwikkeling en Setup", description: "We maken de AI-assistent, configureren integraties met uw systemen en trainen het model" },
      { step: "03", title: "Testen en Lancering", description: "We voeren pilottesten uit, verfijnen op basis van resultaten en lanceren in productie" },
    ],
    faq: [
      { q: "Hoe lang duurt de implementatie?", a: "Voor kant-en-klare oplossingen — vanaf 7 dagen. Voor enterprise-projecten — vanaf 4 weken afhankelijk van integratiecomplexiteit." },
      { q: "Welke talen ondersteunt het systeem?", a: "We ondersteunen Russisch, Engels, Spaans, Duits, Frans, Nederlands en andere talen op aanvraag." },
      { q: "Kan het integreren met ons systeem?", a: "Ja, we integreren met alle systemen die een API hebben: CRM, ERP, telefonie, magazijn, boekhouding." },
      { q: "Hoe wordt gegevensbeveiliging gewaarborgd?", a: "We gebruiken gegevensversleuteling, voldoen aan GDPR en kunnen de oplossing op uw servers implementeren voor maximale beveiliging." },
    ],
  },
  fr: {
    badge: "Solutions basées sur l'IA vocale",
    title: "Automatisez les processus métier avec l'IA vocale",
    subtitle: "Choisissez une solution prête ou commandez un développement personnalisé. Nos assistants IA travaillent 24/7 et augmentent l'efficacité de l'entreprise.",
    ourSolutions: "Nos Solutions",
    learnMore: "En savoir plus",
    howWeImplement: "Comment nous implémentons",
    howWeImplementDesc: "Méthodologie d'implémentation éprouvée avec des résultats garantis",
    trustedBy: "Des entreprises de diverses industries nous font confiance",
    logo: "Logo",
    faqTitle: "Questions Fréquentes",
    ctaTitle: "Prêt à automatiser votre entreprise?",
    ctaSubtitle: "Obtenez une consultation personnelle et une estimation des coûts pour votre projet",
    contactUs: "Nous contacter",
    solutions: [
      {
        title: "Gestionnaire des Ventes IA Vocal",
        description: "Augmentez les ventes de 40% avec un gestionnaire IA vocal qui travaille 24/7",
        metrics: ["40% croissance", "24/7 opération", "0 sec attente"],
        href: "voice-sales-manager",
      },
      {
        title: "Robot-Opérateur",
        description: "Répond à 100% des appels entrants 24/7. Qualifie les clients, énonce les prix, gère les demandes",
        metrics: ["100% appels entrants", "24/7 sans pause", "60-80% sans opérateur"],
        href: "robot-operator",
      },
      {
        title: "Opérateur Automatique",
        description: "Traite les appels entrants, qualifie les clients, gère les demandes 24/7",
        metrics: ["Tous les appels traités", "Qualification prospects", "Intégration CRM"],
        href: "automatic-operator",
      },
      {
        title: "Opérateur Virtuel",
        description: "Fonctionne 24/7, intégration CRM, supporte les langues, gère ventes et support",
        metrics: ["24/7 opération", "Multilingue", "Intégration CRM"],
        href: "virtual-operator",
      },
      {
        title: "Automatisation des Ventes",
        description: "Augmente la conversion 2-3x. L'IA prend les demandes, appelle les clients, émet les factures",
        metrics: ["2-3x conversion", "Automatisation complète", "Intégration CRM"],
        href: "automation-sales",
      },
      {
        title: "Système d'Automatisation des Ventes",
        description: "Pour les PME. Automatise le travail du gestionnaire de ventes, augmente productivité 3-5x",
        metrics: ["3-5x productivité", "Pour PME", "Démarrage rapide"],
        href: "sales-automation-system",
      },
      {
        title: "Robot pour Appels",
        description: "Appels entrants et sortants, qualification, rappels, prospection. Économies jusqu'à 70%",
        metrics: ["Entrants et sortants", "Qualification", "70% économie masse salariale"],
        href: "robot-dlya-zvonkov",
      },
      {
        title: "Robot de Vente",
        description: "Guide le client vers la vente. Pose des questions, calcule le coût, présente l'offre",
        metrics: ["Contact à vente", "Calculs automatiques", "Génération factures"],
        href: "robot-dlya-prodazh",
      },
      {
        title: "Traitement des Demandes",
        description: "Automatise la réception, le traitement et l'acheminement des demandes. Analyse et priorise",
        metrics: ["Automatisation cycle", "Priorisation", "Acheminement"],
        href: "obrabotka-zayavok",
      },
      {
        title: "Traitement des Commandes",
        description: "Automatise la réception, la validation, la création de factures et l'intégration logistique",
        metrics: ["Cycle complet", "Validation données", "Logistique"],
        href: "obrabotka-zakazov",
      },
      {
        title: "Génération de Factures",
        description: "Génère les factures à partir des demandes ou appels, envoie par email/CRM, valide les détails",
        metrics: ["Génération automatique", "Envoi email/CRM", "Validation détails"],
        href: "vystavlenie-schetov",
      },
      {
        title: "Calcul de Livraison",
        description: "L'IA calcule automatiquement la livraison en tenant compte du poids, taille, distance et type de transport",
        metrics: ["Automatisation", "Optimisation prix", "Tous paramètres"],
        href: "raschet-dostavki",
      },
      {
        title: "IA pour Entreprises",
        description: "Solution complète pour l'automatisation des ventes, appels, demandes, factures et logistique",
        metrics: ["Stack complet", "Toutes solutions", "Scalabilité"],
        href: "ai-dlya-biznesa",
      },
      {
        title: "Concierge IA pour Hôtels",
        description: "Concierge IA pour hôtels: commandes, réservations et service sans files d'attente",
        metrics: ["95% satisfaction", "60% gain de temps", "Multilingue"],
        href: "hotel-concierge",
      },
      {
        title: "Pour les PME",
        description: "Solutions prêtes pour les PME avec lancement rapide",
        metrics: ["7 jours lancement", "Sans intégrations", "Prix fixe"],
        href: "smb",
      },
      {
        title: "Solutions Enterprise",
        description: "Solutions d'entreprise avec haute sécurité et SLA",
        metrics: ["99,9% SLA", "On-premise", "Personnalisation totale"],
        href: "enterprise",
      },
      {
        title: "Solutions Personnalisées",
        description: "Solutions IA personnalisées pour tous les défis métier",
        metrics: ["Toute complexité", "RAG + LLM", "Cycle complet"],
        href: "custom",
      },
      {
        title: "Maison Intelligente IA",
        description: "Maison intelligente avec IA: commande vocale, automatisation et app mobile",
        metrics: ["Commande vocale", "Arrosage auto", "App mobile"],
        href: "smart-home",
      },
    ],
    steps: [
      { step: "01", title: "Analyse et Planification", description: "Nous étudions vos processus, identifions les points d'automatisation et créons les spécifications techniques" },
      { step: "02", title: "Développement et Configuration", description: "Nous créons l'assistant IA, configurons les intégrations avec vos systèmes et entraînons le modèle" },
      { step: "03", title: "Tests et Lancement", description: "Nous effectuons des tests pilotes, affinons en fonction des résultats et lançons en production" },
    ],
    faq: [
      { q: "Combien de temps prend l'implémentation?", a: "Pour les solutions prêtes — à partir de 7 jours. Pour les projets enterprise — à partir de 4 semaines selon la complexité." },
      { q: "Quelles langues le système prend-il en charge?", a: "Nous prenons en charge le russe, l'anglais, l'espagnol, l'allemand, le français, le néerlandais et d'autres langues sur demande." },
      { q: "Peut-il s'intégrer avec notre système?", a: "Oui, nous nous intégrons avec tous les systèmes qui ont une API: CRM, ERP, téléphonie, entrepôt, comptabilité." },
      { q: "Comment la sécurité des données est-elle assurée?", a: "Nous utilisons le chiffrement des données, respectons le RGPD et pouvons déployer la solution sur vos serveurs pour une sécurité maximale." },
    ],
  },
}

// 18 icons for 18 solutions (expanded to match all solutions)
const icons = [
  Phone, // Voice Sales Manager
  Phone, // Robot Operator
  Phone, // Automatic Operator
  Phone, // Virtual Operator
  Target, // Automation Sales
  Target, // Sales Automation System
  Phone, // Robot dlya Zvonkov
  Target, // Robot dlya Prodazh
  Zap, // Obrabotka Zayavok
  Zap, // Obrabotka Zakazov
  Zap, // Vystavlenie Schetov
  Zap, // Raschet Dostavki
  Target, // AI dlya Biznesa
  Building2, // Hotel Concierge
  Users, // SMB
  Building2, // Enterprise
  Target, // Custom
  Home, // Smart Home
]
const colors = [
  "bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-indigo-500",
  "bg-green-500", "bg-green-600",
  "bg-purple-500", "bg-purple-600",
  "bg-orange-500", "bg-orange-600", "bg-orange-700", "bg-amber-500",
  "bg-emerald-500",
  "bg-pink-500", "bg-teal-500", "bg-slate-700", "bg-violet-500", "bg-cyan-500"
]

export default function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale } = params
  const { t } = useTranslations(locale)
  const { openModal } = useCTA()
  const pt = pageTranslations[locale] || pageTranslations.ru

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <Badge variant="secondary" className="mb-4">
              {pt.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {pt.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              {pt.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => openModal("trial")} data-cta="cta-try-free">
                {t("cta.tryFree")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => openModal("demo")} data-cta="cta-request-demo">
                {t("cta.requestDemo")}
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Grid - Grouped by Category */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">{pt.ourSolutions}</h2>
            
            {/* AI для звонков */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {locale === "ru" ? "AI для звонков" : locale === "en" ? "AI for Calls" : locale === "es" ? "IA para Llamadas" : locale === "de" ? "KI für Anrufe" : locale === "nl" ? "AI voor Gesprekken" : "IA pour Appels"}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pt.solutions.filter(s => ["robot-operator", "automatic-operator", "virtual-operator", "robot-dlya-zvonkov"].includes(s.href)).map((solution, index) => {
                  const Icon = Phone
                  return (
                    <Card key={solution.href} className="group hover:shadow-lg transition-all duration-300 border-blue-200 dark:border-blue-900">
                      <CardHeader className="pb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                        <CardDescription className="text-sm">{solution.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {solution.metrics.slice(0, 2).map((metric, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild size="sm" className="w-full">
                          <Link href={`/${locale}/solutions/${solution.href}`}>
                            {pt.learnMore}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* AI для продаж */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-green-600 dark:text-green-400">
                {locale === "ru" ? "AI для продаж" : locale === "en" ? "AI for Sales" : locale === "es" ? "IA para Ventas" : locale === "de" ? "KI für Vertrieb" : locale === "nl" ? "AI voor Verkoop" : "IA pour Ventes"}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pt.solutions.filter(s => ["automation-sales", "sales-automation-system", "robot-dlya-prodazh", "voice-sales-manager"].includes(s.href)).map((solution, index) => {
                  const Icon = Target
                  return (
                    <Card key={solution.href} className="group hover:shadow-lg transition-all duration-300 border-green-200 dark:border-green-900">
                      <CardHeader className="pb-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mb-3">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                        <CardDescription className="text-sm">{solution.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {solution.metrics.slice(0, 2).map((metric, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild size="sm" className="w-full">
                          <Link href={`/${locale}/solutions/${solution.href}`}>
                            {pt.learnMore}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* AI для бизнес-процессов */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-orange-600 dark:text-orange-400">
                {locale === "ru" ? "AI для бизнес-процессов" : locale === "en" ? "AI for Business Processes" : locale === "es" ? "IA para Procesos de Negocio" : locale === "de" ? "KI für Geschäftsprozesse" : locale === "nl" ? "AI voor Bedrijfsprocessen" : "IA pour Processus Métier"}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pt.solutions.filter(s => ["obrabotka-zayavok", "obrabotka-zakazov", "vystavlenie-schetov", "raschet-dostavki"].includes(s.href)).map((solution, index) => {
                  const Icon = Zap
                  return (
                    <Card key={solution.href} className="group hover:shadow-lg transition-all duration-300 border-orange-200 dark:border-orange-900">
                      <CardHeader className="pb-3">
                        <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-3">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                        <CardDescription className="text-sm">{solution.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {solution.metrics.slice(0, 2).map((metric, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild size="sm" className="w-full">
                          <Link href={`/${locale}/solutions/${solution.href}`}>
                            {pt.learnMore}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* AI для бизнеса */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600 dark:text-purple-400">
                {locale === "ru" ? "AI для бизнеса" : locale === "en" ? "AI for Business" : locale === "es" ? "IA para Negocios" : locale === "de" ? "KI für Unternehmen" : locale === "nl" ? "AI voor Bedrijven" : "IA pour Entreprises"}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pt.solutions.filter(s => ["ai-dlya-biznesa", "smb", "enterprise", "custom"].includes(s.href)).map((solution, index) => {
                  const Icon = Building2
                  return (
                    <Card key={solution.href} className="group hover:shadow-lg transition-all duration-300 border-purple-200 dark:border-purple-900">
                      <CardHeader className="pb-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mb-3">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                        <CardDescription className="text-sm">{solution.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {solution.metrics.slice(0, 2).map((metric, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild size="sm" className="w-full">
                          <Link href={`/${locale}/solutions/${solution.href}`}>
                            {pt.learnMore}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Специализированные решения */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-pink-600 dark:text-pink-400">
                {locale === "ru" ? "Специализированные решения" : locale === "en" ? "Specialized Solutions" : locale === "es" ? "Soluciones Especializadas" : locale === "de" ? "Spezialisierte Lösungen" : locale === "nl" ? "Gespecialiseerde Oplossingen" : "Solutions Spécialisées"}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {pt.solutions.filter(s => ["hotel-concierge", "smart-home"].includes(s.href)).map((solution, index) => {
                  const Icon = solution.href === "hotel-concierge" ? Building2 : Home
                  return (
                    <Card key={solution.href} className="group hover:shadow-lg transition-all duration-300 border-pink-200 dark:border-pink-900">
                      <CardHeader className="pb-3">
                        <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center mb-3">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                        <CardDescription className="text-sm">{solution.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {solution.metrics.map((metric, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild size="sm" className="w-full">
                          <Link href={`/${locale}/solutions/${solution.href}`}>
                            {pt.learnMore}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How We Implement */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{pt.howWeImplement}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {pt.howWeImplementDesc}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pt.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
              {pt.trustedBy}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-sm font-medium">{pt.logo} {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">{pt.faqTitle}</h2>
            <Accordion type="single" collapsible className="w-full">
              {pt.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{pt.ctaTitle}</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              {pt.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button size="lg" variant="secondary" onClick={() => openModal("consultation")} data-cta="cta-calculate">
                {t("cta.calculate")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto h-11 sm:h-12"
                onClick={() => openModal("consultation")}
                data-cta="cta-contact"
              >
                {pt.contactUs}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
