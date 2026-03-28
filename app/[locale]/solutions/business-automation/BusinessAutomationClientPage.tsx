"use client"

import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Bot,
  Brain,
  Zap,
  TrendingUp,
  Clock,
  Shield,
  Users,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Cpu,
  Settings,
  Database,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  Calendar,
  Target,
  Rocket,
  ChevronRight,
  Play,
  Building2,
  Globe,
  Layers,
  RefreshCw,
  PieChart,
  Award,
} from "lucide-react"
import Link from "next/link"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"
import { cn } from "@/lib/utils"

// ═══════════════════════════════════════════════════════════════════════
// TRANSLATIONS - Full i18n for all languages with SEO keywords
// ═══════════════════════════════════════════════════════════════════════
const translations = {
  ru: {
    hero: {
      badge: "Технологии автоматизации бизнеса",
      title: "Автоматизация бизнеса",
      titleHighlight: "с помощью ИИ",
      subtitle: "Комплексные решения для автоматизации бизнеса на базе искусственного интеллекта. Программа автоматизации бизнеса, которая сокращает затраты на 60% и увеличивает продажи на 40%.",
      cta: "Получить консультацию",
      ctaSecondary: "Смотреть демо",
      stats: [
        { value: "60%", label: "Снижение затрат" },
        { value: "40%", label: "Рост продаж" },
        { value: "24/7", label: "Работа системы" },
      ],
    },
    aiDemo: {
      badge: "AI автоматизация бизнеса в действии",
      title: "Как работает цифровая автоматизация бизнеса",
      subtitle: "Искусственный интеллект анализирует, принимает решения и выполняет задачи автоматически",
    },
    benefits: {
      badge: "Преимущества автоматизации",
      title: "Почему компании выбирают автоматизацию бизнеса ИИ",
      subtitle: "Решения для автоматизации бизнеса, которые трансформируют работу организации",
      items: [
        {
          icon: "Clock",
          title: "Экономия времени",
          desc: "Автоматизация управления бизнесом освобождает до 80% времени сотрудников от рутинных задач",
          stat: "80%",
        },
        {
          icon: "TrendingUp",
          title: "Рост эффективности",
          desc: "Программа автоматизации бизнеса увеличивает производительность всех отделов компании",
          stat: "3x",
        },
        {
          icon: "Shield",
          title: "Снижение ошибок",
          desc: "Технологии автоматизации бизнеса исключают человеческий фактор в критических процессах",
          stat: "99%",
        },
        {
          icon: "BarChart3",
          title: "Аналитика в реальном времени",
          desc: "Цифровая автоматизация бизнеса дает полную картину всех процессов 24/7",
          stat: "Live",
        },
      ],
    },
    solutions: {
      badge: "Решения для автоматизации",
      title: "Комплексная автоматизация организации бизнеса",
      subtitle: "Выберите направление автоматизации работы компании",
      items: [
        {
          title: "Автоматизация продаж",
          desc: "AI-менеджеры обрабатывают звонки, квалифицируют лиды и закрывают сделки автоматически",
          link: "/solutions/voice-sales-manager",
          features: ["Голосовой AI", "CRM интеграция", "Скрипты продаж"],
        },
        {
          title: "Автоматизация поддержки",
          desc: "Чат-боты и голосовые ассистенты решают 80% обращений без участия операторов",
          link: "/solutions/ai-chat-assistant",
          features: ["24/7 поддержка", "Мультиканальность", "База знаний"],
        },
        {
          title: "Автоматизация маркетинга",
          desc: "ИИ создает контент, сегментирует аудиторию и оптимизирует рекламные кампании",
          link: "/solutions/ai-marketing",
          features: ["Контент AI", "A/B тесты", "Персонализация"],
        },
        {
          title: "Автоматизация HR",
          desc: "Искусственный интеллект проводит первичный отбор, собеседования и онбординг",
          link: "/solutions/ai-hr-assistant",
          features: ["Скрининг резюме", "AI-интервью", "Онбординг"],
        },
      ],
    },
    process: {
      badge: "Процесс внедрения",
      title: "Как внедряется автоматизация бизнеса с помощью ИИ",
      subtitle: "От анализа до запуска за 2-4 недели",
      steps: [
        { num: "01", title: "Аудит процессов", desc: "Анализируем текущие бизнес-процессы и находим точки автоматизации" },
        { num: "02", title: "Разработка решения", desc: "Создаем программу автоматизации бизнеса под ваши задачи" },
        { num: "03", title: "Интеграция", desc: "Подключаем к CRM, телефонии и другим системам компании" },
        { num: "04", title: "Обучение AI", desc: "Настраиваем искусственный интеллект на специфику вашего бизнеса" },
        { num: "05", title: "Запуск и поддержка", desc: "Запускаем систему и обеспечиваем постоянную оптимизацию" },
      ],
    },
    industries: {
      badge: "Отрасли",
      title: "Автоматизация бизнеса ИИ для любой отрасли",
      items: ["Недвижимость", "E-commerce", "Финансы", "Медицина", "Образование", "Логистика", "Производство", "IT"],
    },
    cases: {
      badge: "Результаты клиентов",
      title: "Кейсы автоматизации работы компании",
      items: [
        { company: "Строительная компания", result: "+45% продаж", desc: "Автоматизация обработки заявок голосовым AI" },
        { company: "Интернет-магазин", result: "-60% затрат", desc: "Чат-бот для поддержки и консультаций" },
        { company: "Агентство недвижимости", result: "3x лиды", desc: "AI-квалификация и автообзвон базы" },
      ],
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы об автоматизации бизнеса",
      items: [
        { q: "Сколько стоит автоматизация бизнеса ИИ?", a: "Стоимость зависит от масштаба. Базовые решения для автоматизации бизнеса от 30 000 ₽/мес. Полная автоматизация организации бизнеса — от 100 000 ₽/мес." },
        { q: "Как быстро внедряется программа автоматизации?", a: "Технологии автоматизации бизнеса внедряются за 2-4 недели. Цифровая автоматизация бизнеса начинает работать с первого дня после настройки." },
        { q: "Какие процессы можно автоматизировать?", a: "AI автоматизация бизнеса охватывает продажи, поддержку, маркетинг, HR, документооборот. Автоматизация работы компании возможна в любом отделе." },
        { q: "Нужны ли технические специалисты?", a: "Нет. Компания автоматизация бизнеса M2 Solutions берет на себя всё: от разработки до поддержки. Решения для автоматизации бизнеса работают без IT-отдела." },
      ],
    },
    cta: {
      badge: "Начните сегодня",
      title: "Готовы к автоматизации управления бизнесом?",
      subtitle: "Получите бесплатный аудит процессов и расчет ROI от внедрения технологий автоматизации бизнеса",
      button: "Получить бесплатный аудит",
      features: ["Бесплатная консультация", "ROI за 15 минут", "Без обязательств"],
    },
    nav: {
      solutions: "Решения",
      pricing: "Цены",
      blog: "Блог",
      contact: "Контакты",
    },
  },
  en: {
    hero: {
      badge: "Business Automation Technologies",
      title: "Business Automation",
      titleHighlight: "powered by AI",
      subtitle: "Comprehensive AI-powered business automation solutions. Business automation software that reduces costs by 60% and increases sales by 40%.",
      cta: "Get Consultation",
      ctaSecondary: "Watch Demo",
      stats: [
        { value: "60%", label: "Cost Reduction" },
        { value: "40%", label: "Sales Growth" },
        { value: "24/7", label: "System Uptime" },
      ],
    },
    aiDemo: {
      badge: "AI Business Automation in Action",
      title: "How Digital Business Automation Works",
      subtitle: "Artificial intelligence analyzes, makes decisions, and executes tasks automatically",
    },
    benefits: {
      badge: "Automation Benefits",
      title: "Why Companies Choose AI Business Automation",
      subtitle: "Business automation solutions that transform organizational operations",
      items: [
        {
          icon: "Clock",
          title: "Time Savings",
          desc: "Business management automation frees up to 80% of employee time from routine tasks",
          stat: "80%",
        },
        {
          icon: "TrendingUp",
          title: "Efficiency Growth",
          desc: "Business automation software increases productivity across all company departments",
          stat: "3x",
        },
        {
          icon: "Shield",
          title: "Error Reduction",
          desc: "Business automation technologies eliminate human error in critical processes",
          stat: "99%",
        },
        {
          icon: "BarChart3",
          title: "Real-time Analytics",
          desc: "Digital business automation provides complete visibility of all processes 24/7",
          stat: "Live",
        },
      ],
    },
    solutions: {
      badge: "Automation Solutions",
      title: "Comprehensive Business Organization Automation",
      subtitle: "Choose your business automation direction",
      items: [
        {
          title: "Sales Automation",
          desc: "AI managers handle calls, qualify leads, and close deals automatically",
          link: "/solutions/voice-sales-manager",
          features: ["Voice AI", "CRM Integration", "Sales Scripts"],
        },
        {
          title: "Support Automation",
          desc: "Chatbots and voice assistants resolve 80% of inquiries without operators",
          link: "/solutions/ai-chat-assistant",
          features: ["24/7 Support", "Omnichannel", "Knowledge Base"],
        },
        {
          title: "Marketing Automation",
          desc: "AI creates content, segments audiences, and optimizes ad campaigns",
          link: "/solutions/ai-marketing",
          features: ["Content AI", "A/B Testing", "Personalization"],
        },
        {
          title: "HR Automation",
          desc: "Artificial intelligence conducts initial screening, interviews, and onboarding",
          link: "/solutions/ai-hr-assistant",
          features: ["Resume Screening", "AI Interviews", "Onboarding"],
        },
      ],
    },
    process: {
      badge: "Implementation Process",
      title: "How AI Business Automation is Implemented",
      subtitle: "From analysis to launch in 2-4 weeks",
      steps: [
        { num: "01", title: "Process Audit", desc: "We analyze current business processes and identify automation points" },
        { num: "02", title: "Solution Development", desc: "We create a business automation program for your tasks" },
        { num: "03", title: "Integration", desc: "We connect to CRM, telephony, and other company systems" },
        { num: "04", title: "AI Training", desc: "We configure artificial intelligence for your business specifics" },
        { num: "05", title: "Launch & Support", desc: "We launch the system and provide continuous optimization" },
      ],
    },
    industries: {
      badge: "Industries",
      title: "AI Business Automation for Any Industry",
      items: ["Real Estate", "E-commerce", "Finance", "Healthcare", "Education", "Logistics", "Manufacturing", "IT"],
    },
    cases: {
      badge: "Client Results",
      title: "Company Automation Case Studies",
      items: [
        { company: "Construction Company", result: "+45% Sales", desc: "Voice AI automated lead processing" },
        { company: "Online Store", result: "-60% Costs", desc: "Chatbot for support and consultations" },
        { company: "Real Estate Agency", result: "3x Leads", desc: "AI qualification and auto-calling" },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Business Automation Questions",
      items: [
        { q: "How much does AI business automation cost?", a: "Cost depends on scale. Basic business automation solutions from €500/mo. Full business organization automation — from €1,500/mo." },
        { q: "How quickly is automation software implemented?", a: "Business automation technologies are implemented in 2-4 weeks. Digital business automation starts working from day one after setup." },
        { q: "What processes can be automated?", a: "AI business automation covers sales, support, marketing, HR, document management. Company automation is possible in any department." },
        { q: "Are technical specialists needed?", a: "No. M2 Solutions business automation company handles everything: from development to support. Business automation solutions work without an IT department." },
      ],
    },
    cta: {
      badge: "Start Today",
      title: "Ready for Business Management Automation?",
      subtitle: "Get a free process audit and ROI calculation from implementing business automation technologies",
      button: "Get Free Audit",
      features: ["Free Consultation", "ROI in 15 minutes", "No Obligations"],
    },
    nav: {
      solutions: "Solutions",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact",
    },
  },
  es: {
    hero: {
      badge: "Tecnologías de Automatización Empresarial",
      title: "Automatización Empresarial",
      titleHighlight: "con IA",
      subtitle: "Soluciones integrales de automatización empresarial con inteligencia artificial. Software de automatización que reduce costos en 60% y aumenta ventas en 40%.",
      cta: "Obtener Consulta",
      ctaSecondary: "Ver Demo",
      stats: [
        { value: "60%", label: "Reducción de costos" },
        { value: "40%", label: "Aumento de ventas" },
        { value: "24/7", label: "Sistema activo" },
      ],
    },
    aiDemo: {
      badge: "Automatización Empresarial IA en Acción",
      title: "Cómo Funciona la Automatización Digital",
      subtitle: "La inteligencia artificial analiza, decide y ejecuta tareas automáticamente",
    },
    benefits: {
      badge: "Beneficios de Automatización",
      title: "Por Qué las Empresas Eligen Automatización con IA",
      subtitle: "Soluciones de automatización que transforman las operaciones organizacionales",
      items: [
        { icon: "Clock", title: "Ahorro de Tiempo", desc: "La automatización libera hasta 80% del tiempo de empleados de tareas rutinarias", stat: "80%" },
        { icon: "TrendingUp", title: "Crecimiento de Eficiencia", desc: "El software de automatización aumenta la productividad en todos los departamentos", stat: "3x" },
        { icon: "Shield", title: "Reducción de Errores", desc: "Las tecnologías de automatización eliminan errores humanos en procesos críticos", stat: "99%" },
        { icon: "BarChart3", title: "Analítica en Tiempo Real", desc: "La automatización digital proporciona visibilidad completa de todos los procesos", stat: "Live" },
      ],
    },
    solutions: {
      badge: "Soluciones de Automatización",
      title: "Automatización Integral de Organización Empresarial",
      subtitle: "Elija su dirección de automatización empresarial",
      items: [
        { title: "Automatización de Ventas", desc: "Los gerentes IA manejan llamadas, califican leads y cierran ventas automáticamente", link: "/solutions/voice-sales-manager", features: ["IA de Voz", "Integración CRM", "Scripts de Venta"] },
        { title: "Automatización de Soporte", desc: "Chatbots y asistentes de voz resuelven 80% de consultas sin operadores", link: "/solutions/ai-chat-assistant", features: ["Soporte 24/7", "Omnicanal", "Base de Conocimientos"] },
        { title: "Automatización de Marketing", desc: "La IA crea contenido, segmenta audiencias y optimiza campañas publicitarias", link: "/solutions/ai-marketing", features: ["IA de Contenido", "Tests A/B", "Personalización"] },
        { title: "Automatización de RRHH", desc: "La inteligencia artificial realiza selección inicial, entrevistas y onboarding", link: "/solutions/ai-hr-assistant", features: ["Screening CV", "Entrevistas IA", "Onboarding"] },
      ],
    },
    process: {
      badge: "Proceso de Implementación",
      title: "Cómo se Implementa la Automatización con IA",
      subtitle: "Del análisis al lanzamiento en 2-4 semanas",
      steps: [
        { num: "01", title: "Auditoría de Procesos", desc: "Analizamos procesos actuales e identificamos puntos de automatización" },
        { num: "02", title: "Desarrollo de Solución", desc: "Creamos un programa de automatización para sus tareas" },
        { num: "03", title: "Integración", desc: "Conectamos con CRM, telefonía y otros sistemas de la empresa" },
        { num: "04", title: "Entrenamiento IA", desc: "Configuramos la inteligencia artificial para su negocio específico" },
        { num: "05", title: "Lanzamiento y Soporte", desc: "Lanzamos el sistema y proporcionamos optimización continua" },
      ],
    },
    industries: {
      badge: "Industrias",
      title: "Automatización Empresarial IA para Cualquier Industria",
      items: ["Inmobiliaria", "E-commerce", "Finanzas", "Salud", "Educación", "Logística", "Manufactura", "TI"],
    },
    cases: {
      badge: "Resultados de Clientes",
      title: "Casos de Automatización Empresarial",
      items: [
        { company: "Constructora", result: "+45% Ventas", desc: "IA de voz automatizó procesamiento de leads" },
        { company: "Tienda Online", result: "-60% Costos", desc: "Chatbot para soporte y consultas" },
        { company: "Agencia Inmobiliaria", result: "3x Leads", desc: "Calificación IA y llamadas automáticas" },
      ],
    },
    faq: {
      badge: "Preguntas Frecuentes",
      title: "Preguntas sobre Automatización Empresarial",
      items: [
        { q: "¿Cuánto cuesta la automatización empresarial con IA?", a: "El costo depende de la escala. Soluciones básicas desde €500/mes. Automatización completa desde €1.500/mes." },
        { q: "¿Qué tan rápido se implementa el software?", a: "Las tecnologías de automatización se implementan en 2-4 semanas. La automatización digital funciona desde el primer día." },
        { q: "¿Qué procesos se pueden automatizar?", a: "La automatización IA cubre ventas, soporte, marketing, RRHH, gestión documental. Es posible en cualquier departamento." },
        { q: "¿Se necesitan especialistas técnicos?", a: "No. M2 Solutions se encarga de todo: desde desarrollo hasta soporte. Las soluciones funcionan sin departamento de TI." },
      ],
    },
    cta: {
      badge: "Comience Hoy",
      title: "¿Listo para la Automatización de Gestión Empresarial?",
      subtitle: "Obtenga una auditoría gratuita y cálculo de ROI de implementar tecnologías de automatización",
      button: "Obtener Auditoría Gratuita",
      features: ["Consulta Gratuita", "ROI en 15 minutos", "Sin Compromisos"],
    },
    nav: { solutions: "Soluciones", pricing: "Precios", blog: "Blog", contact: "Contacto" },
  },
  de: {
    hero: {
      badge: "Geschäftsautomatisierungstechnologien",
      title: "Geschäftsautomatisierung",
      titleHighlight: "mit KI",
      subtitle: "Umfassende KI-gestützte Geschäftsautomatisierungslösungen. Automatisierungssoftware, die Kosten um 60% senkt und Umsatz um 40% steigert.",
      cta: "Beratung erhalten",
      ctaSecondary: "Demo ansehen",
      stats: [
        { value: "60%", label: "Kostenreduzierung" },
        { value: "40%", label: "Umsatzwachstum" },
        { value: "24/7", label: "Systemverfügbarkeit" },
      ],
    },
    aiDemo: {
      badge: "KI-Geschäftsautomatisierung in Aktion",
      title: "Wie digitale Geschäftsautomatisierung funktioniert",
      subtitle: "Künstliche Intelligenz analysiert, entscheidet und führt Aufgaben automatisch aus",
    },
    benefits: {
      badge: "Automatisierungsvorteile",
      title: "Warum Unternehmen KI-Geschäftsautomatisierung wählen",
      subtitle: "Automatisierungslösungen, die Unternehmensabläufe transformieren",
      items: [
        { icon: "Clock", title: "Zeitersparnis", desc: "Geschäftsautomatisierung befreit bis zu 80% der Mitarbeiterzeit von Routineaufgaben", stat: "80%" },
        { icon: "TrendingUp", title: "Effizienzsteigerung", desc: "Automatisierungssoftware steigert die Produktivität in allen Abteilungen", stat: "3x" },
        { icon: "Shield", title: "Fehlerreduzierung", desc: "Automatisierungstechnologien eliminieren menschliche Fehler in kritischen Prozessen", stat: "99%" },
        { icon: "BarChart3", title: "Echtzeit-Analytik", desc: "Digitale Automatisierung bietet vollständige Transparenz aller Prozesse 24/7", stat: "Live" },
      ],
    },
    solutions: {
      badge: "Automatisierungslösungen",
      title: "Umfassende Unternehmensautomatisierung",
      subtitle: "Wählen Sie Ihre Automatisierungsrichtung",
      items: [
        { title: "Vertriebsautomatisierung", desc: "KI-Manager bearbeiten Anrufe, qualifizieren Leads und schließen Deals automatisch", link: "/solutions/voice-sales-manager", features: ["Sprach-KI", "CRM-Integration", "Vertriebsskripte"] },
        { title: "Support-Automatisierung", desc: "Chatbots und Sprachassistenten lösen 80% der Anfragen ohne Mitarbeiter", link: "/solutions/ai-chat-assistant", features: ["24/7 Support", "Omnichannel", "Wissensdatenbank"] },
        { title: "Marketing-Automatisierung", desc: "KI erstellt Inhalte, segmentiert Zielgruppen und optimiert Werbekampagnen", link: "/solutions/ai-marketing", features: ["Content-KI", "A/B-Tests", "Personalisierung"] },
        { title: "HR-Automatisierung", desc: "KI führt Vorauswahl, Interviews und Onboarding durch", link: "/solutions/ai-hr-assistant", features: ["Lebenslauf-Screening", "KI-Interviews", "Onboarding"] },
      ],
    },
    process: {
      badge: "Implementierungsprozess",
      title: "Wie KI-Geschäftsautomatisierung implementiert wird",
      subtitle: "Von der Analyse bis zum Start in 2-4 Wochen",
      steps: [
        { num: "01", title: "Prozessaudit", desc: "Wir analysieren aktuelle Geschäftsprozesse und identifizieren Automatisierungspunkte" },
        { num: "02", title: "Lösungsentwicklung", desc: "Wir erstellen ein Automatisierungsprogramm für Ihre Aufgaben" },
        { num: "03", title: "Integration", desc: "Wir verbinden mit CRM, Telefonie und anderen Unternehmenssystemen" },
        { num: "04", title: "KI-Training", desc: "Wir konfigurieren die KI für Ihre Geschäftsspezifika" },
        { num: "05", title: "Start & Support", desc: "Wir starten das System und bieten kontinuierliche Optimierung" },
      ],
    },
    industries: {
      badge: "Branchen",
      title: "KI-Geschäftsautomatisierung für jede Branche",
      items: ["Immobilien", "E-Commerce", "Finanzen", "Gesundheit", "Bildung", "Logistik", "Fertigung", "IT"],
    },
    cases: {
      badge: "Kundenergebnisse",
      title: "Unternehmensautomatisierung Fallstudien",
      items: [
        { company: "Bauunternehmen", result: "+45% Umsatz", desc: "Sprach-KI automatisierte Lead-Verarbeitung" },
        { company: "Online-Shop", result: "-60% Kosten", desc: "Chatbot für Support und Beratung" },
        { company: "Immobilienagentur", result: "3x Leads", desc: "KI-Qualifizierung und Auto-Calling" },
      ],
    },
    faq: {
      badge: "Häufige Fragen",
      title: "Fragen zur Geschäftsautomatisierung",
      items: [
        { q: "Was kostet KI-Geschäftsautomatisierung?", a: "Die Kosten hängen vom Umfang ab. Basislösungen ab €500/Monat. Vollständige Automatisierung ab €1.500/Monat." },
        { q: "Wie schnell wird die Software implementiert?", a: "Automatisierungstechnologien werden in 2-4 Wochen implementiert. Die digitale Automatisierung funktioniert ab dem ersten Tag." },
        { q: "Welche Prozesse können automatisiert werden?", a: "KI-Automatisierung umfasst Vertrieb, Support, Marketing, HR, Dokumentenmanagement. In jeder Abteilung möglich." },
        { q: "Werden technische Spezialisten benötigt?", a: "Nein. M2 Solutions übernimmt alles: von Entwicklung bis Support. Die Lösungen funktionieren ohne IT-Abteilung." },
      ],
    },
    cta: {
      badge: "Heute starten",
      title: "Bereit für Geschäftsmanagement-Automatisierung?",
      subtitle: "Erhalten Sie ein kostenloses Prozessaudit und ROI-Berechnung",
      button: "Kostenloses Audit erhalten",
      features: ["Kostenlose Beratung", "ROI in 15 Minuten", "Unverbindlich"],
    },
    nav: { solutions: "Lösungen", pricing: "Preise", blog: "Blog", contact: "Kontakt" },
  },
  nl: {
    hero: {
      badge: "Bedrijfsautomatiseringstechnologieën",
      title: "Bedrijfsautomatisering",
      titleHighlight: "met AI",
      subtitle: "Uitgebreide AI-gestuurde bedrijfsautomatiseringsoplossingen. Automatiseringssoftware die kosten met 60% verlaagt en verkoop met 40% verhoogt.",
      cta: "Consultatie krijgen",
      ctaSecondary: "Demo bekijken",
      stats: [
        { value: "60%", label: "Kostenreductie" },
        { value: "40%", label: "Verkoopgroei" },
        { value: "24/7", label: "Systeembeschikbaarheid" },
      ],
    },
    aiDemo: {
      badge: "AI Bedrijfsautomatisering in Actie",
      title: "Hoe Digitale Bedrijfsautomatisering Werkt",
      subtitle: "Kunstmatige intelligentie analyseert, beslist en voert taken automatisch uit",
    },
    benefits: {
      badge: "Automatiseringsvoordelen",
      title: "Waarom Bedrijven Kiezen voor AI Bedrijfsautomatisering",
      subtitle: "Automatiseringsoplossingen die bedrijfsactiviteiten transformeren",
      items: [
        { icon: "Clock", title: "Tijdsbesparing", desc: "Bedrijfsautomatisering maakt tot 80% van werknemerstijd vrij van routinetaken", stat: "80%" },
        { icon: "TrendingUp", title: "Efficiëntiestijging", desc: "Automatiseringssoftware verhoogt productiviteit in alle afdelingen", stat: "3x" },
        { icon: "Shield", title: "Foutreductie", desc: "Automatiseringstechnologieën elimineren menselijke fouten in kritieke processen", stat: "99%" },
        { icon: "BarChart3", title: "Real-time Analytics", desc: "Digitale automatisering biedt volledig zicht op alle processen 24/7", stat: "Live" },
      ],
    },
    solutions: {
      badge: "Automatiseringsoplossingen",
      title: "Uitgebreide Bedrijfsorganisatie Automatisering",
      subtitle: "Kies uw automatiseringsrichting",
      items: [
        { title: "Verkoopautomatisering", desc: "AI-managers behandelen oproepen, kwalificeren leads en sluiten deals automatisch", link: "/solutions/voice-sales-manager", features: ["Spraak-AI", "CRM Integratie", "Verkoopscripts"] },
        { title: "Supportautomatisering", desc: "Chatbots en stemassistenten lossen 80% van vragen op zonder operators", link: "/solutions/ai-chat-assistant", features: ["24/7 Support", "Omnichannel", "Kennisbank"] },
        { title: "Marketingautomatisering", desc: "AI creëert content, segmenteert doelgroepen en optimaliseert advertentiecampagnes", link: "/solutions/ai-marketing", features: ["Content AI", "A/B Tests", "Personalisatie"] },
        { title: "HR-automatisering", desc: "AI voert eerste selectie, interviews en onboarding uit", link: "/solutions/ai-hr-assistant", features: ["CV Screening", "AI Interviews", "Onboarding"] },
      ],
    },
    process: {
      badge: "Implementatieproces",
      title: "Hoe AI Bedrijfsautomatisering wordt Geïmplementeerd",
      subtitle: "Van analyse tot lancering in 2-4 weken",
      steps: [
        { num: "01", title: "Procesaudit", desc: "We analyseren huidige bedrijfsprocessen en identificeren automatiseringspunten" },
        { num: "02", title: "Oplossingsontwikkeling", desc: "We creëren een automatiseringsprogramma voor uw taken" },
        { num: "03", title: "Integratie", desc: "We verbinden met CRM, telefonie en andere bedrijfssystemen" },
        { num: "04", title: "AI Training", desc: "We configureren AI voor uw bedrijfsspecificaties" },
        { num: "05", title: "Lancering & Ondersteuning", desc: "We lanceren het systeem en bieden continue optimalisatie" },
      ],
    },
    industries: {
      badge: "Industrieën",
      title: "AI Bedrijfsautomatisering voor Elke Industrie",
      items: ["Vastgoed", "E-commerce", "Financiën", "Gezondheidszorg", "Onderwijs", "Logistiek", "Productie", "IT"],
    },
    cases: {
      badge: "Klantresultaten",
      title: "Bedrijfsautomatisering Casestudies",
      items: [
        { company: "Bouwbedrijf", result: "+45% Verkoop", desc: "Spraak-AI automatiseerde leadverwerking" },
        { company: "Webshop", result: "-60% Kosten", desc: "Chatbot voor support en consultaties" },
        { company: "Makelaarskantoor", result: "3x Leads", desc: "AI-kwalificatie en auto-calling" },
      ],
    },
    faq: {
      badge: "Veelgestelde Vragen",
      title: "Vragen over Bedrijfsautomatisering",
      items: [
        { q: "Hoeveel kost AI bedrijfsautomatisering?", a: "Kosten hangen af van schaal. Basisoplossingen vanaf €500/maand. Volledige automatisering vanaf €1.500/maand." },
        { q: "Hoe snel wordt software geïmplementeerd?", a: "Automatiseringstechnologieën worden in 2-4 weken geïmplementeerd. Digitale automatisering werkt vanaf dag één." },
        { q: "Welke processen kunnen worden geautomatiseerd?", a: "AI-automatisering omvat verkoop, support, marketing, HR, documentbeheer. Mogelijk in elke afdeling." },
        { q: "Zijn technische specialisten nodig?", a: "Nee. M2 Solutions regelt alles: van ontwikkeling tot ondersteuning. Oplossingen werken zonder IT-afdeling." },
      ],
    },
    cta: {
      badge: "Start Vandaag",
      title: "Klaar voor Bedrijfsmanagement Automatisering?",
      subtitle: "Krijg een gratis procesaudit en ROI-berekening",
      button: "Gratis Audit Krijgen",
      features: ["Gratis Consultatie", "ROI in 15 minuten", "Vrijblijvend"],
    },
    nav: { solutions: "Oplossingen", pricing: "Prijzen", blog: "Blog", contact: "Contact" },
  },
  fr: {
    hero: {
      badge: "Technologies d'Automatisation d'Entreprise",
      title: "Automatisation d'Entreprise",
      titleHighlight: "avec l'IA",
      subtitle: "Solutions complètes d'automatisation d'entreprise alimentées par l'IA. Logiciel d'automatisation qui réduit les coûts de 60% et augmente les ventes de 40%.",
      cta: "Obtenir une Consultation",
      ctaSecondary: "Voir la Démo",
      stats: [
        { value: "60%", label: "Réduction des coûts" },
        { value: "40%", label: "Croissance des ventes" },
        { value: "24/7", label: "Système actif" },
      ],
    },
    aiDemo: {
      badge: "Automatisation IA en Action",
      title: "Comment Fonctionne l'Automatisation Numérique",
      subtitle: "L'intelligence artificielle analyse, décide et exécute les tâches automatiquement",
    },
    benefits: {
      badge: "Avantages de l'Automatisation",
      title: "Pourquoi les Entreprises Choisissent l'Automatisation IA",
      subtitle: "Solutions d'automatisation qui transforment les opérations organisationnelles",
      items: [
        { icon: "Clock", title: "Gain de Temps", desc: "L'automatisation libère jusqu'à 80% du temps des employés des tâches routinières", stat: "80%" },
        { icon: "TrendingUp", title: "Croissance d'Efficacité", desc: "Le logiciel d'automatisation augmente la productivité dans tous les départements", stat: "3x" },
        { icon: "Shield", title: "Réduction des Erreurs", desc: "Les technologies d'automatisation éliminent les erreurs humaines dans les processus critiques", stat: "99%" },
        { icon: "BarChart3", title: "Analytique en Temps Réel", desc: "L'automatisation numérique offre une visibilité complète de tous les processus 24/7", stat: "Live" },
      ],
    },
    solutions: {
      badge: "Solutions d'Automatisation",
      title: "Automatisation Complète de l'Organisation d'Entreprise",
      subtitle: "Choisissez votre direction d'automatisation",
      items: [
        { title: "Automatisation des Ventes", desc: "Les managers IA gèrent les appels, qualifient les leads et concluent automatiquement", link: "/solutions/voice-sales-manager", features: ["IA Vocale", "Intégration CRM", "Scripts de Vente"] },
        { title: "Automatisation du Support", desc: "Les chatbots et assistants vocaux résolvent 80% des demandes sans opérateurs", link: "/solutions/ai-chat-assistant", features: ["Support 24/7", "Omnicanal", "Base de Connaissances"] },
        { title: "Automatisation Marketing", desc: "L'IA crée du contenu, segmente les audiences et optimise les campagnes publicitaires", link: "/solutions/ai-marketing", features: ["IA de Contenu", "Tests A/B", "Personnalisation"] },
        { title: "Automatisation RH", desc: "L'IA réalise la présélection, les entretiens et l'onboarding", link: "/solutions/ai-hr-assistant", features: ["Screening CV", "Entretiens IA", "Onboarding"] },
      ],
    },
    process: {
      badge: "Processus d'Implémentation",
      title: "Comment l'Automatisation IA est Implémentée",
      subtitle: "De l'analyse au lancement en 2-4 semaines",
      steps: [
        { num: "01", title: "Audit des Processus", desc: "Nous analysons les processus actuels et identifions les points d'automatisation" },
        { num: "02", title: "Développement de Solution", desc: "Nous créons un programme d'automatisation pour vos tâches" },
        { num: "03", title: "Intégration", desc: "Nous connectons au CRM, téléphonie et autres systèmes de l'entreprise" },
        { num: "04", title: "Formation IA", desc: "Nous configurons l'IA pour les spécificités de votre entreprise" },
        { num: "05", title: "Lancement et Support", desc: "Nous lançons le système et assurons une optimisation continue" },
      ],
    },
    industries: {
      badge: "Industries",
      title: "Automatisation IA pour Toute Industrie",
      items: ["Immobilier", "E-commerce", "Finance", "Santé", "Éducation", "Logistique", "Production", "IT"],
    },
    cases: {
      badge: "Résultats Clients",
      title: "Études de Cas d'Automatisation",
      items: [
        { company: "Entreprise de Construction", result: "+45% Ventes", desc: "L'IA vocale a automatisé le traitement des leads" },
        { company: "Boutique en Ligne", result: "-60% Coûts", desc: "Chatbot pour le support et les consultations" },
        { company: "Agence Immobilière", result: "3x Leads", desc: "Qualification IA et appels automatiques" },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Questions sur l'Automatisation d'Entreprise",
      items: [
        { q: "Combien coûte l'automatisation IA?", a: "Le coût dépend de l'échelle. Solutions de base à partir de 500€/mois. Automatisation complète à partir de 1 500€/mois." },
        { q: "Quelle est la rapidité d'implémentation?", a: "Les technologies d'automatisation sont implémentées en 2-4 semaines. L'automatisation numérique fonctionne dès le premier jour." },
        { q: "Quels processus peuvent être automatisés?", a: "L'automatisation IA couvre ventes, support, marketing, RH, gestion documentaire. Possible dans tout département." },
        { q: "Des spécialistes techniques sont-ils nécessaires?", a: "Non. M2 Solutions gère tout: du développement au support. Les solutions fonctionnent sans département IT." },
      ],
    },
    cta: {
      badge: "Commencez Aujourd'hui",
      title: "Prêt pour l'Automatisation de Gestion d'Entreprise?",
      subtitle: "Obtenez un audit gratuit des processus et un calcul du ROI",
      button: "Obtenir un Audit Gratuit",
      features: ["Consultation Gratuite", "ROI en 15 minutes", "Sans Engagement"],
    },
    nav: { solutions: "Solutions", pricing: "Tarifs", blog: "Blog", contact: "Contact" },
  },
  it: {
    hero: {
      badge: "Tecnologie di Automazione Aziendale",
      title: "Automazione Aziendale",
      titleHighlight: "con IA",
      subtitle: "Soluzioni complete di automazione aziendale basate su intelligenza artificiale. Software che riduce i costi del 60% e aumenta le vendite del 40%.",
      cta: "Ottieni Consulenza",
      ctaSecondary: "Guarda Demo",
      stats: [
        { value: "60%", label: "Riduzione costi" },
        { value: "40%", label: "Crescita vendite" },
        { value: "24/7", label: "Sistema attivo" },
      ],
    },
    aiDemo: {
      badge: "Automazione IA in Azione",
      title: "Come Funziona l'Automazione Digitale",
      subtitle: "L'intelligenza artificiale analizza, decide ed esegue le attività automaticamente",
    },
    benefits: {
      badge: "Vantaggi dell'Automazione",
      title: "Perché le Aziende Scelgono l'Automazione IA",
      subtitle: "Soluzioni di automazione che trasformano le operazioni aziendali",
      items: [
        { icon: "Clock", title: "Risparmio di Tempo", desc: "L'automazione libera fino all'80% del tempo dei dipendenti dalle attività di routine", stat: "80%" },
        { icon: "TrendingUp", title: "Crescita Efficienza", desc: "Il software di automazione aumenta la produttività in tutti i reparti", stat: "3x" },
        { icon: "Shield", title: "Riduzione Errori", desc: "Le tecnologie di automazione eliminano gli errori umani nei processi critici", stat: "99%" },
        { icon: "BarChart3", title: "Analytics in Tempo Reale", desc: "L'automazione digitale offre visibilità completa su tutti i processi 24/7", stat: "Live" },
      ],
    },
    solutions: {
      badge: "Soluzioni di Automazione",
      title: "Automazione Completa dell'Organizzazione Aziendale",
      subtitle: "Scegli la tua direzione di automazione",
      items: [
        { title: "Automazione Vendite", desc: "I manager IA gestiscono chiamate, qualificano lead e chiudono vendite automaticamente", link: "/solutions/voice-sales-manager", features: ["IA Vocale", "Integrazione CRM", "Script Vendita"] },
        { title: "Automazione Supporto", desc: "Chatbot e assistenti vocali risolvono l'80% delle richieste senza operatori", link: "/solutions/ai-chat-assistant", features: ["Supporto 24/7", "Omnicanale", "Knowledge Base"] },
        { title: "Automazione Marketing", desc: "L'IA crea contenuti, segmenta il pubblico e ottimizza le campagne pubblicitarie", link: "/solutions/ai-marketing", features: ["Content IA", "Test A/B", "Personalizzazione"] },
        { title: "Automazione HR", desc: "L'IA conduce selezione iniziale, colloqui e onboarding", link: "/solutions/ai-hr-assistant", features: ["Screening CV", "Colloqui IA", "Onboarding"] },
      ],
    },
    process: {
      badge: "Processo di Implementazione",
      title: "Come Viene Implementata l'Automazione IA",
      subtitle: "Dall'analisi al lancio in 2-4 settimane",
      steps: [
        { num: "01", title: "Audit dei Processi", desc: "Analizziamo i processi attuali e identifichiamo i punti di automazione" },
        { num: "02", title: "Sviluppo Soluzione", desc: "Creiamo un programma di automazione per le vostre esigenze" },
        { num: "03", title: "Integrazione", desc: "Colleghiamo CRM, telefonia e altri sistemi aziendali" },
        { num: "04", title: "Training IA", desc: "Configuriamo l'IA per le specificità del vostro business" },
        { num: "05", title: "Lancio e Supporto", desc: "Lanciamo il sistema e forniamo ottimizzazione continua" },
      ],
    },
    industries: {
      badge: "Settori",
      title: "Automazione IA per Qualsiasi Settore",
      items: ["Immobiliare", "E-commerce", "Finanza", "Sanità", "Istruzione", "Logistica", "Produzione", "IT"],
    },
    cases: {
      badge: "Risultati Clienti",
      title: "Case Study di Automazione Aziendale",
      items: [
        { company: "Impresa Edile", result: "+45% Vendite", desc: "IA vocale ha automatizzato l'elaborazione dei lead" },
        { company: "Negozio Online", result: "-60% Costi", desc: "Chatbot per supporto e consulenze" },
        { company: "Agenzia Immobiliare", result: "3x Lead", desc: "Qualificazione IA e chiamate automatiche" },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Domande sull'Automazione Aziendale",
      items: [
        { q: "Quanto costa l'automazione IA aziendale?", a: "Il costo dipende dalla scala. Soluzioni base da €500/mese. Automazione completa da €1.500/mese." },
        { q: "Quanto velocemente viene implementato il software?", a: "Le tecnologie di automazione vengono implementate in 2-4 settimane. L'automazione digitale funziona dal primo giorno." },
        { q: "Quali processi possono essere automatizzati?", a: "L'automazione IA copre vendite, supporto, marketing, HR, gestione documenti. Possibile in qualsiasi reparto." },
        { q: "Servono specialisti tecnici?", a: "No. M2 Solutions gestisce tutto: dallo sviluppo al supporto. Le soluzioni funzionano senza reparto IT." },
      ],
    },
    cta: {
      badge: "Inizia Oggi",
      title: "Pronto per l'Automazione della Gestione Aziendale?",
      subtitle: "Ottieni un audit gratuito dei processi e calcolo del ROI",
      button: "Ottieni Audit Gratuito",
      features: ["Consulenza Gratuita", "ROI in 15 minuti", "Senza Impegno"],
    },
    nav: { solutions: "Soluzioni", pricing: "Prezzi", blog: "Blog", contact: "Contatti" },
  },
}

// ═══════════════════════════════════════════════════════════════════════
// HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════════════

// Reveal animation component
function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay)
        observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </div>
  )
}

// Icon mapper
const iconMap = {
  Clock,
  TrendingUp,
  Shield,
  BarChart3,
  Bot,
  Brain,
  Zap,
  Users,
  Settings,
  Database,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  Calendar,
  Target,
  Rocket,
  Building2,
  Globe,
  Layers,
  RefreshCw,
  PieChart,
  Award,
}

// ═══════════════════════════════════════════════════════════════════════
// AI AUTOMATION DEMO COMPONENT - Visual representation of AI at work
// ════════════════════════════════════════════════════���══════════════════
function AIAutomationDemo({ locale }: { locale: Locale }) {
  const [activeStep, setActiveStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const demoSteps = {
    ru: [
      { icon: Mail, label: "Входящая заявка", desc: "Клиент оставил заявку на сайте" },
      { icon: Brain, label: "AI анализирует", desc: "Определение потребности и приоритета" },
      { icon: Database, label: "Проверка в CRM", desc: "Поиск истории взаимодействий" },
      { icon: Target, label: "Квалификация", desc: "Оценка и сегментация лида" },
      { icon: Phone, label: "Автозвонок", desc: "Голосовой AI связывается с клиентом" },
      { icon: CheckCircle2, label: "Задача создана", desc: "Менеджеру назначена встреча" },
    ],
    en: [
      { icon: Mail, label: "Incoming Request", desc: "Customer submitted a request" },
      { icon: Brain, label: "AI Analyzes", desc: "Determining needs and priority" },
      { icon: Database, label: "CRM Check", desc: "Searching interaction history" },
      { icon: Target, label: "Qualification", desc: "Lead scoring and segmentation" },
      { icon: Phone, label: "Auto-call", desc: "Voice AI contacts the customer" },
      { icon: CheckCircle2, label: "Task Created", desc: "Meeting assigned to manager" },
    ],
    es: [
      { icon: Mail, label: "Solicitud entrante", desc: "El cliente envió una solicitud" },
      { icon: Brain, label: "IA analiza", desc: "Determinando necesidades y prioridad" },
      { icon: Database, label: "Verificación CRM", desc: "Buscando historial de interacciones" },
      { icon: Target, label: "Calificación", desc: "Puntuación y segmentación de leads" },
      { icon: Phone, label: "Llamada automática", desc: "IA de voz contacta al cliente" },
      { icon: CheckCircle2, label: "Tarea creada", desc: "Reunión asignada al gerente" },
    ],
    de: [
      { icon: Mail, label: "Eingehende Anfrage", desc: "Kunde hat Anfrage gesendet" },
      { icon: Brain, label: "KI analysiert", desc: "Bedarfs- und Prioritätsbestimmung" },
      { icon: Database, label: "CRM-Prüfung", desc: "Suche nach Interaktionshistorie" },
      { icon: Target, label: "Qualifizierung", desc: "Lead-Scoring und Segmentierung" },
      { icon: Phone, label: "Auto-Anruf", desc: "Sprach-KI kontaktiert Kunden" },
      { icon: CheckCircle2, label: "Aufgabe erstellt", desc: "Meeting dem Manager zugewiesen" },
    ],
    nl: [
      { icon: Mail, label: "Inkomend verzoek", desc: "Klant heeft een verzoek ingediend" },
      { icon: Brain, label: "AI analyseert", desc: "Bepalen van behoeften en prioriteit" },
      { icon: Database, label: "CRM-controle", desc: "Zoeken naar interactiegeschiedenis" },
      { icon: Target, label: "Kwalificatie", desc: "Lead-scoring en segmentatie" },
      { icon: Phone, label: "Auto-oproep", desc: "Spraak-AI neemt contact op" },
      { icon: CheckCircle2, label: "Taak aangemaakt", desc: "Meeting toegewezen aan manager" },
    ],
    fr: [
      { icon: Mail, label: "Demande entrante", desc: "Le client a soumis une demande" },
      { icon: Brain, label: "L'IA analyse", desc: "Détermination des besoins et priorité" },
      { icon: Database, label: "Vérification CRM", desc: "Recherche de l'historique" },
      { icon: Target, label: "Qualification", desc: "Scoring et segmentation du lead" },
      { icon: Phone, label: "Appel automatique", desc: "L'IA vocale contacte le client" },
      { icon: CheckCircle2, label: "Tâche créée", desc: "Réunion assignée au manager" },
    ],
    it: [
      { icon: Mail, label: "Richiesta in arrivo", desc: "Il cliente ha inviato una richiesta" },
      { icon: Brain, label: "IA analizza", desc: "Determinazione esigenze e priorità" },
      { icon: Database, label: "Verifica CRM", desc: "Ricerca dello storico interazioni" },
      { icon: Target, label: "Qualificazione", desc: "Scoring e segmentazione del lead" },
      { icon: Phone, label: "Chiamata automatica", desc: "IA vocale contatta il cliente" },
      { icon: CheckCircle2, label: "Attività creata", desc: "Meeting assegnato al manager" },
    ],
  }

  const steps = demoSteps[locale] || demoSteps.en

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsRunning(false)
            return 0
          }
          return prev + 1
        })
      }, 1500)
      return () => clearInterval(interval)
    }
  }, [isRunning, steps.length])

  const handleStart = () => {
    setActiveStep(0)
    setIsRunning(true)
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-violet-500/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Start button */}
      <div className="relative text-center mb-6 sm:mb-8">
        <Button
          onClick={handleStart}
          disabled={isRunning}
          className={cn(
            "group relative overflow-hidden px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all",
            isRunning
              ? "bg-violet-600/50 cursor-not-allowed"
              : "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-xl shadow-violet-500/30"
          )}
        >
          <Play className={cn("w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3", isRunning && "animate-pulse")} />
          {isRunning ? (locale === "ru" ? "Работает..." : "Running...") : (locale === "ru" ? "Запустить демо" : "Start Demo")}
        </Button>
      </div>

      {/* Steps visualization */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
        {steps.map((step, idx) => {
          const Icon = step.icon
          const isActive = idx === activeStep && isRunning
          const isCompleted = idx < activeStep || (!isRunning && activeStep === steps.length - 1 && idx <= activeStep)

          return (
            <div
              key={idx}
              className={cn(
                "relative p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-500",
                isActive
                  ? "bg-violet-500/20 border-violet-400/50 scale-105 shadow-lg shadow-violet-500/20"
                  : isCompleted
                  ? "bg-emerald-500/10 border-emerald-400/30"
                  : "bg-white/5 border-white/10"
              )}
            >
              {/* Connection line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 sm:-right-3 w-2 sm:w-4 h-0.5 bg-gradient-to-r from-violet-500/50 to-transparent" />
              )}

              <div className={cn(
                "w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 transition-all",
                isActive
                  ? "bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg"
                  : isCompleted
                  ? "bg-gradient-to-br from-emerald-500 to-teal-600"
                  : "bg-white/10"
              )}>
                <Icon className={cn(
                  "w-5 h-5 sm:w-6 sm:h-6",
                  isActive || isCompleted ? "text-white" : "text-slate-400"
                )} />
              </div>

              <h4 className={cn(
                "font-semibold text-xs sm:text-sm mb-1 transition-colors line-clamp-1",
                isActive ? "text-violet-300" : isCompleted ? "text-emerald-300" : "text-white"
              )}>
                {step.label}
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2">{step.desc}</p>

              {/* Pulse effect for active step */}
              {isActive && (
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-violet-400/50 animate-ping" />
              )}
            </div>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-6 sm:mt-8 h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 transition-all duration-500 rounded-full"
          style={{ width: isRunning ? `${((activeStep + 1) / steps.length) * 100}%` : "0%" }}
        />
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════
export default function BusinessAutomationClientPage({ locale }: { locale: Locale }) {
  const t = translations[locale] || translations.en
  const { openCTA } = useCTA()

  return (
    <main className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1050 30%, #302b63 60%, #24243e 100%)" }}>
        {/* Background effects */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.2),transparent)]" />
        <div className="hidden sm:block absolute top-1/4 left-[10%] w-72 h-72 bg-violet-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="hidden sm:block absolute bottom-1/4 right-[10%] w-96 h-96 bg-blue-600/15 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Reveal className="text-center">
            <Badge className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full border border-violet-400/40 bg-violet-500/15 text-violet-200 text-xs sm:text-sm font-semibold mb-4 sm:mb-8 shadow-lg shadow-violet-500/10">
              <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.hero.badge}
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </Badge>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 text-white leading-tight px-2">
              {t.hero.title}
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-slate-300/90 mb-6 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mb-8 sm:mb-16 px-4 sm:px-0">
              <Button
                size="lg"
                onClick={() => openCTA()}
                className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-xl shadow-violet-500/40 border-0 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center font-semibold">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all w-full sm:w-auto"
              >
                <Play className="mr-2 sm:mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
              {t.hero.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          AI DEMO SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-8 sm:mb-12">
            <Badge className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.aiDemo.badge}
            </Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t.aiDemo.title}</h2>
            <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">{t.aiDemo.subtitle}</p>
          </Reveal>

          <Reveal delay={200}>
            <AIAutomationDemo locale={locale} />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BENEFITS SECTION
      ════════════════════���═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-10 sm:mb-16">
            <Badge className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.benefits.badge}
            </Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t.benefits.title}</h2>
            <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">{t.benefits.subtitle}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.benefits.items.map((item, idx) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Zap
              const gradients = [
                "from-violet-500 to-purple-600",
                "from-blue-500 to-cyan-600",
                "from-emerald-500 to-teal-600",
                "from-orange-500 to-amber-600",
              ]

              return (
                <Reveal key={idx} delay={idx * 100}>
                  <Card className="group relative overflow-hidden h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-slate-50">
                    <CardContent className="p-4 sm:p-6">
                      {/* Large stat background */}
                      <div className="absolute -top-2 -right-2 text-6xl sm:text-7xl font-black text-slate-100 select-none">
                        {item.stat}
                      </div>

                      <div className={cn(
                        "w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg",
                        gradients[idx % gradients.length]
                      )}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-violet-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SOLUTIONS SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-10 sm:mb-16">
            <Badge className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-violet-400/40 bg-violet-500/15 text-violet-200 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.solutions.badge}
            </Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">{t.solutions.title}</h2>
            <p className="text-sm sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">{t.solutions.subtitle}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {t.solutions.items.map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Link href={`/${locale}${item.link}`}>
                  <Card className="group relative overflow-hidden h-full bg-white/5 border-white/10 hover:border-violet-400/30 hover:bg-white/10 transition-all duration-500">
                    <CardContent className="p-5 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-violet-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                        {item.features.map((feature, fidx) => (
                          <span key={fidx} className="px-2 sm:px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs sm:text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-violet-400 group-hover:text-violet-300 font-medium text-sm sm:text-base">
                        {locale === "ru" ? "Подробнее" : "Learn more"}
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PROCESS SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-10 sm:mb-16">
            <Badge className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.process.badge}
            </Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t.process.title}</h2>
            <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">{t.process.subtitle}</p>
          </Reveal>

          <div className="relative">
            {/* Vertical line for mobile */}
            <div className="sm:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 via-purple-500/50 to-transparent" />
            
            {/* Horizontal line for desktop */}
            <div className="hidden sm:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-violet-500/30 via-purple-500/50 to-violet-500/30" />

            <div className="grid sm:grid-cols-5 gap-4 sm:gap-4">
              {t.process.steps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="relative flex sm:flex-col items-start sm:items-center text-left sm:text-center pl-12 sm:pl-0">
                    {/* Number circle */}
                    <div className="absolute left-0 sm:relative sm:left-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30 mb-0 sm:mb-4 z-10">
                      <span className="text-base sm:text-xl font-bold text-white">{step.num}</span>
                    </div>
                    <div className="flex-1 sm:flex-none">
                      <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          INDUSTRIES SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-8 sm:mb-12">
            <Badge className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.industries.badge}
            </Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t.industries.title}</h2>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {t.industries.items.map((industry, idx) => (
                <span
                  key={idx}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border border-slate-200 hover:border-violet-400 hover:shadow-lg hover:scale-105 transition-all cursor-default text-sm sm:text-base font-medium"
                >
                  {industry}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CASES SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center mb-10 sm:mb-16">
            <Badge className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.cases.badge}
            </Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">{t.cases.title}</h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {t.cases.items.map((caseItem, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-5 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                      {caseItem.result}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2">{caseItem.company}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{caseItem.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FAQ SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal className="text-center mb-8 sm:mb-12">
            <Badge className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.faq.badge}
            </Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">{t.faq.title}</h2>
          </Reveal>

          <div className="space-y-3 sm:space-y-4">
            {t.faq.items.map((item, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <Card className="overflow-hidden">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">{item.q}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.a}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FINAL CTA SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1050 30%, #302b63 60%, #24243e 100%)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(139,92,246,0.25),transparent)]" />
        <div className="hidden sm:block absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Reveal className="text-center">
            <Badge className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full border border-violet-400/40 bg-violet-500/15 text-violet-200 text-xs sm:text-sm font-semibold mb-4 sm:mb-8">
              <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.cta.badge}
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </Badge>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8 text-white leading-tight px-2">
              {t.cta.title}
            </h2>

            <p className="text-sm sm:text-xl text-slate-300 mb-6 sm:mb-10 max-w-2xl mx-auto px-4">
              {t.cta.subtitle}
            </p>

            <Button
              size="lg"
              onClick={() => openCTA()}
              className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 sm:px-12 py-5 sm:py-8 text-base sm:text-xl rounded-xl sm:rounded-2xl shadow-xl shadow-violet-500/40 border-0 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center font-semibold">
                {t.cta.button}
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-6 mt-6 sm:mt-10 text-xs sm:text-sm text-slate-400">
              {t.cta.features.map((feature, idx) => (
                <span key={idx} className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  {feature}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          INTERNAL LINKS FOR SEO
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-8 sm:py-12 border-t">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <Link href={`/${locale}/solutions/voice-sales-manager`} className="hover:text-violet-600 transition-colors">
              {locale === "ru" ? "Голосовой AI-менеджер" : "Voice AI Manager"}
            </Link>
            <Link href={`/${locale}/solutions/ai-chat-assistant`} className="hover:text-violet-600 transition-colors">
              {locale === "ru" ? "AI Чат-ассистент" : "AI Chat Assistant"}
            </Link>
            <Link href={`/${locale}/solutions/ai-dlya-biznesa`} className="hover:text-violet-600 transition-colors">
              {locale === "ru" ? "AI для бизнеса" : "AI for Business"}
            </Link>
            <Link href={`/${locale}/pricing`} className="hover:text-violet-600 transition-colors">
              {t.nav.pricing}
            </Link>
            <Link href={`/${locale}/blog`} className="hover:text-violet-600 transition-colors">
              {t.nav.blog}
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-violet-600 transition-colors">
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
