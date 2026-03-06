import type { LucideIcon } from "lucide-react"
import { Phone, Home, Building2, Building, TrendingUp, Clock, Zap, Shield, CheckCircle2, Users } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

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

const solutionsData: Record<Locale, Solution[]> = {
  ru: [
    {
      id: "voice-sales",
      title: "Голосовой AI-менеджер",
      description: "Автоматизация продаж от первого звонка до сделки в CRM",
      href: "/solutions/voice-sales-manager",
      icon: Phone,
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      image: "/ai-voice-manager-dashboard-with-call-statistics.jpg",
      features: ["Обработка 100% входящих звонков", "Интеграция с CRM и 1C", "Запись разговоров и аналитика", "Автоматическое создание сделок"],
      stats: [{ icon: TrendingUp, value: "+87%", label: "Конверсия" }, { icon: Clock, value: "24/7", label: "Работа" }],
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
      features: ["Голосовое управление устройствами", "Автоматизация сценариев", "Контроль энергопотребления", "Безопасность и мониторинг"],
      stats: [{ icon: Zap, value: "-45%", label: "Энергии" }, { icon: Shield, value: "99.9%", label: "Uptime" }],
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
      features: ["Быстрое внедрение 1-4 недели", "Автоматизация продаж и CRM", "Интеграция с учётными системами", "Поддержка и обучение команды"],
      stats: [{ icon: Users, value: "100+", label: "Клиентов" }, { icon: Clock, value: "2-4 нед", label: "Запуск" }],
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
      features: ["Соответствие 152-ФЗ и GDPR", "Интеграция СМЭВ и ГИС", "SLA 99.9% с компенсацией", "Выделенная инфраструктура"],
      stats: [{ icon: Shield, value: "ISO", label: "27001" }, { icon: CheckCircle2, value: "99.9%", label: "SLA" }],
    },
  ],
  en: [
    {
      id: "voice-sales",
      title: "Voice AI Manager",
      description: "Sales automation from first call to CRM deal",
      href: "/solutions/voice-sales-manager",
      icon: Phone,
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      image: "/ai-voice-manager-dashboard-with-call-statistics.jpg",
      features: ["100% incoming calls handled", "CRM and ERP integration", "Call recording and analytics", "Automatic deal creation"],
      stats: [{ icon: TrendingUp, value: "+87%", label: "Conversion" }, { icon: Clock, value: "24/7", label: "Uptime" }],
    },
    {
      id: "smart-home",
      title: "Smart Home",
      description: "Complete home automation with voice control",
      href: "/solutions/smart-home",
      icon: Home,
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      image: "/smart-home-automation-interface-modern.jpg",
      features: ["Voice device control", "Scenario automation", "Energy monitoring", "Security and monitoring"],
      stats: [{ icon: Zap, value: "-45%", label: "Energy" }, { icon: Shield, value: "99.9%", label: "Uptime" }],
    },
    {
      id: "smb",
      title: "For Small & Medium Business",
      description: "Fast AI implementation with clear timelines and results",
      href: "/solutions/smb",
      icon: Building2,
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      image: "/small-business-automation-dashboard-analytics.jpg",
      features: ["Fast deployment 1-4 weeks", "Sales and CRM automation", "Accounting system integration", "Team support and training"],
      stats: [{ icon: Users, value: "100+", label: "Clients" }, { icon: Clock, value: "2-4 wks", label: "Launch" }],
    },
    {
      id: "enterprise",
      title: "Enterprise & Government",
      description: "Corporate solutions with maximum security and compliance",
      href: "/solutions/enterprise",
      icon: Building,
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      image: "/enterprise-security-dashboard-compliance.jpg",
      features: ["GDPR & compliance ready", "Government system integration", "99.9% SLA with compensation", "Dedicated infrastructure"],
      stats: [{ icon: Shield, value: "ISO", label: "27001" }, { icon: CheckCircle2, value: "99.9%", label: "SLA" }],
    },
  ],
  es: [
    {
      id: "voice-sales",
      title: "Gestor de IA por Voz",
      description: "Automatización de ventas desde la primera llamada hasta el CRM",
      href: "/solutions/voice-sales-manager",
      icon: Phone,
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      image: "/ai-voice-manager-dashboard-with-call-statistics.jpg",
      features: ["100% llamadas procesadas", "Integración CRM y ERP", "Grabación y análisis", "Creación automática de tratos"],
      stats: [{ icon: TrendingUp, value: "+87%", label: "Conversión" }, { icon: Clock, value: "24/7", label: "Activo" }],
    },
    {
      id: "smart-home",
      title: "Casa Inteligente",
      description: "Automatización completa del hogar con control por voz",
      href: "/solutions/smart-home",
      icon: Home,
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      image: "/smart-home-automation-interface-modern.jpg",
      features: ["Control por voz", "Automatización de escenarios", "Control de energía", "Seguridad y monitoreo"],
      stats: [{ icon: Zap, value: "-45%", label: "Energía" }, { icon: Shield, value: "99.9%", label: "Uptime" }],
    },
    {
      id: "smb",
      title: "Para PyMEs",
      description: "Implementación rápida de IA con plazos claros y resultados",
      href: "/solutions/smb",
      icon: Building2,
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      image: "/small-business-automation-dashboard-analytics.jpg",
      features: ["Implementación 1-4 semanas", "Automatización ventas y CRM", "Integración contable", "Soporte y capacitación"],
      stats: [{ icon: Users, value: "100+", label: "Clientes" }, { icon: Clock, value: "2-4 sem", label: "Lanzar" }],
    },
    {
      id: "enterprise",
      title: "Empresas y Gobierno",
      description: "Soluciones corporativas con máxima seguridad y cumplimiento",
      href: "/solutions/enterprise",
      icon: Building,
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      image: "/enterprise-security-dashboard-compliance.jpg",
      features: ["Cumplimiento GDPR", "Integración gubernamental", "SLA 99.9% garantizado", "Infraestructura dedicada"],
      stats: [{ icon: Shield, value: "ISO", label: "27001" }, { icon: CheckCircle2, value: "99.9%", label: "SLA" }],
    },
  ],
  de: [
    {
      id: "voice-sales",
      title: "Sprach-KI-Manager",
      description: "Vertriebsautomatisierung vom ersten Anruf bis zum CRM-Deal",
      href: "/solutions/voice-sales-manager",
      icon: Phone,
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      image: "/ai-voice-manager-dashboard-with-call-statistics.jpg",
      features: ["100% Anrufe bearbeitet", "CRM- und ERP-Integration", "Aufzeichnung und Analyse", "Automatische Deal-Erstellung"],
      stats: [{ icon: TrendingUp, value: "+87%", label: "Konversion" }, { icon: Clock, value: "24/7", label: "Aktiv" }],
    },
    {
      id: "smart-home",
      title: "Smart Home",
      description: "Vollständige Hausautomatisierung mit Sprachsteuerung",
      href: "/solutions/smart-home",
      icon: Home,
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      image: "/smart-home-automation-interface-modern.jpg",
      features: ["Sprachsteuerung", "Szenarioautomatisierung", "Energieüberwachung", "Sicherheit und Monitoring"],
      stats: [{ icon: Zap, value: "-45%", label: "Energie" }, { icon: Shield, value: "99.9%", label: "Uptime" }],
    },
    {
      id: "smb",
      title: "Für KMU",
      description: "Schnelle KI-Implementierung mit klaren Zeitplänen",
      href: "/solutions/smb",
      icon: Building2,
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      image: "/small-business-automation-dashboard-analytics.jpg",
      features: ["Schnelle Umsetzung 1-4 Wochen", "Vertriebs- und CRM-Automatisierung", "Buchhaltungsintegration", "Support und Schulung"],
      stats: [{ icon: Users, value: "100+", label: "Kunden" }, { icon: Clock, value: "2-4 Wo", label: "Start" }],
    },
    {
      id: "enterprise",
      title: "Enterprise & Behörden",
      description: "Unternehmenslösungen mit maximaler Sicherheit und Compliance",
      href: "/solutions/enterprise",
      icon: Building,
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      image: "/enterprise-security-dashboard-compliance.jpg",
      features: ["DSGVO-konform", "Behördenintegration", "99.9% SLA garantiert", "Dedizierte Infrastruktur"],
      stats: [{ icon: Shield, value: "ISO", label: "27001" }, { icon: CheckCircle2, value: "99.9%", label: "SLA" }],
    },
  ],
  nl: [
    {
      id: "voice-sales",
      title: "Voice AI Manager",
      description: "Verkoopautomatisering van eerste oproep tot CRM-deal",
      href: "/solutions/voice-sales-manager",
      icon: Phone,
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      image: "/ai-voice-manager-dashboard-with-call-statistics.jpg",
      features: ["100% oproepen verwerkt", "CRM- en ERP-integratie", "Opname en analyse", "Automatische deal-creatie"],
      stats: [{ icon: TrendingUp, value: "+87%", label: "Conversie" }, { icon: Clock, value: "24/7", label: "Actief" }],
    },
    {
      id: "smart-home",
      title: "Smart Home",
      description: "Volledige huisautomatisering met spraakbesturing",
      href: "/solutions/smart-home",
      icon: Home,
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      image: "/smart-home-automation-interface-modern.jpg",
      features: ["Spraakbesturing", "Scenario-automatisering", "Energiemonitoring", "Beveiliging en monitoring"],
      stats: [{ icon: Zap, value: "-45%", label: "Energie" }, { icon: Shield, value: "99.9%", label: "Uptime" }],
    },
    {
      id: "smb",
      title: "Voor MKB",
      description: "Snelle AI-implementatie met duidelijke tijdlijnen",
      href: "/solutions/smb",
      icon: Building2,
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      image: "/small-business-automation-dashboard-analytics.jpg",
      features: ["Snelle implementatie 1-4 weken", "Verkoop- en CRM-automatisering", "Boekhoudintegratie", "Ondersteuning en training"],
      stats: [{ icon: Users, value: "100+", label: "Klanten" }, { icon: Clock, value: "2-4 wk", label: "Start" }],
    },
    {
      id: "enterprise",
      title: "Enterprise & Overheid",
      description: "Bedrijfsoplossingen met maximale beveiliging en compliance",
      href: "/solutions/enterprise",
      icon: Building,
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      image: "/enterprise-security-dashboard-compliance.jpg",
      features: ["AVG-conform", "Overheidsintegratie", "99.9% SLA gegarandeerd", "Dedicated infrastructuur"],
      stats: [{ icon: Shield, value: "ISO", label: "27001" }, { icon: CheckCircle2, value: "99.9%", label: "SLA" }],
    },
  ],
  fr: [
    {
      id: "voice-sales",
      title: "Gestionnaire IA Vocal",
      description: "Automatisation des ventes du premier appel au CRM",
      href: "/solutions/voice-sales-manager",
      icon: Phone,
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      image: "/ai-voice-manager-dashboard-with-call-statistics.jpg",
      features: ["100% appels traités", "Intégration CRM et ERP", "Enregistrement et analyse", "Création auto de deals"],
      stats: [{ icon: TrendingUp, value: "+87%", label: "Conversion" }, { icon: Clock, value: "24/7", label: "Actif" }],
    },
    {
      id: "smart-home",
      title: "Maison Intelligente",
      description: "Automatisation complète avec contrôle vocal",
      href: "/solutions/smart-home",
      icon: Home,
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      image: "/smart-home-automation-interface-modern.jpg",
      features: ["Contrôle vocal", "Automatisation de scénarios", "Surveillance énergie", "Sécurité et monitoring"],
      stats: [{ icon: Zap, value: "-45%", label: "Énergie" }, { icon: Shield, value: "99.9%", label: "Uptime" }],
    },
    {
      id: "smb",
      title: "Pour PME",
      description: "Implémentation IA rapide avec délais clairs",
      href: "/solutions/smb",
      icon: Building2,
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      image: "/small-business-automation-dashboard-analytics.jpg",
      features: ["Déploiement 1-4 semaines", "Automatisation ventes et CRM", "Intégration comptable", "Support et formation"],
      stats: [{ icon: Users, value: "100+", label: "Clients" }, { icon: Clock, value: "2-4 sem", label: "Lancement" }],
    },
    {
      id: "enterprise",
      title: "Entreprises & Gouvernement",
      description: "Solutions entreprise avec sécurité et conformité maximales",
      href: "/solutions/enterprise",
      icon: Building,
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      image: "/enterprise-security-dashboard-compliance.jpg",
      features: ["Conformité RGPD", "Intégration gouvernementale", "SLA 99.9% garanti", "Infrastructure dédiée"],
      stats: [{ icon: Shield, value: "ISO", label: "27001" }, { icon: CheckCircle2, value: "99.9%", label: "SLA" }],
    },
  ],
}

export const getSolutions = (locale: Locale): Solution[] => solutionsData[locale] || solutionsData.ru

// Keep for backwards compatibility
export const solutions = solutionsData.ru

export interface AudioExample {
  id: string
  title: string
  description: string
  duration: string
  src: string
  category: string
  result: string
}

const callExamplesData: Record<Locale, AudioExample[]> = {
  ru: [
    { id: "roofing-call", title: "Расчет кровли", description: "AI-менеджер рассчитал стоимость 150м² кровли и создал сделку на 87,450₽", duration: "2:15", src: "/audio/roofing-calculation.mp3", category: "Строительство", result: "Создана сделка на 87,450₽, отправлен счет на email, назначена встреча на замер" },
    { id: "delivery-call", title: "Доставка материалов", description: "Оформление заказа с выбором транспорта и расчетом логистики", duration: "1:45", src: "/audio/delivery-order.mp3", category: "Логистика", result: "Оформлен заказ доставки, рассчитана стоимость логистики, подтвержден временной слот" },
    { id: "dental-appointment", title: "Запись к стоматологу", description: "Запись пациента с учетом предпочтений и медкарты", duration: "1:30", src: "/audio/dental-booking.mp3", category: "Медицина", result: "Пациент записан на прием, отправлено SMS-напоминание, учтены особенности из медкарты" },
  ],
  en: [
    { id: "roofing-call", title: "Roofing Quote", description: "AI manager calculated 150m² roofing cost and created $950 deal", duration: "2:15", src: "/audio/roofing-calculation.mp3", category: "Construction", result: "Deal created for $950, invoice sent via email, site visit scheduled" },
    { id: "delivery-call", title: "Material Delivery", description: "Order processing with transport selection and logistics calculation", duration: "1:45", src: "/audio/delivery-order.mp3", category: "Logistics", result: "Delivery order placed, logistics cost calculated, time slot confirmed" },
    { id: "dental-appointment", title: "Dental Appointment", description: "Patient booking with preferences and medical records", duration: "1:30", src: "/audio/dental-booking.mp3", category: "Healthcare", result: "Patient booked, SMS reminder sent, medical notes considered" },
  ],
  es: [
    { id: "roofing-call", title: "Cotización de Techo", description: "El gestor IA calculó el costo de 150m² de techo", duration: "2:15", src: "/audio/roofing-calculation.mp3", category: "Construcción", result: "Trato creado, factura enviada, visita programada" },
    { id: "delivery-call", title: "Entrega de Materiales", description: "Procesamiento de pedidos con selección de transporte", duration: "1:45", src: "/audio/delivery-order.mp3", category: "Logística", result: "Pedido de entrega realizado, costo de logística calculado" },
    { id: "dental-appointment", title: "Cita Dental", description: "Reserva de paciente con preferencias y registros médicos", duration: "1:30", src: "/audio/dental-booking.mp3", category: "Salud", result: "Paciente reservado, recordatorio SMS enviado" },
  ],
  de: [
    { id: "roofing-call", title: "Dach-Angebot", description: "KI-Manager berechnete 150m² Dachkosten", duration: "2:15", src: "/audio/roofing-calculation.mp3", category: "Bau", result: "Deal erstellt, Rechnung gesendet, Besuch geplant" },
    { id: "delivery-call", title: "Materiallieferung", description: "Auftragsbearbeitung mit Transportauswahl", duration: "1:45", src: "/audio/delivery-order.mp3", category: "Logistik", result: "Lieferauftrag aufgegeben, Logistikkosten berechnet" },
    { id: "dental-appointment", title: "Zahnarzttermin", description: "Patientenbuchung mit Präferenzen", duration: "1:30", src: "/audio/dental-booking.mp3", category: "Gesundheit", result: "Patient gebucht, SMS-Erinnerung gesendet" },
  ],
  nl: [
    { id: "roofing-call", title: "Dak Offerte", description: "AI-manager berekende 150m² dakkosten", duration: "2:15", src: "/audio/roofing-calculation.mp3", category: "Bouw", result: "Deal gemaakt, factuur verzonden, bezoek gepland" },
    { id: "delivery-call", title: "Materiaallevering", description: "Orderverwerking met transportkeuze", duration: "1:45", src: "/audio/delivery-order.mp3", category: "Logistiek", result: "Leveringsopdracht geplaatst, logistieke kosten berekend" },
    { id: "dental-appointment", title: "Tandarts Afspraak", description: "Patiëntboeking met voorkeuren", duration: "1:30", src: "/audio/dental-booking.mp3", category: "Zorg", result: "Patiënt geboekt, SMS-herinnering verzonden" },
  ],
  fr: [
    { id: "roofing-call", title: "Devis Toiture", description: "Le gestionnaire IA a calculé le coût de 150m² de toiture", duration: "2:15", src: "/audio/roofing-calculation.mp3", category: "Construction", result: "Deal créé, facture envoyée, visite planifiée" },
    { id: "delivery-call", title: "Livraison Matériaux", description: "Traitement de commande avec sélection transport", duration: "1:45", src: "/audio/delivery-order.mp3", category: "Logistique", result: "Commande de livraison passée, coût logistique calculé" },
    { id: "dental-appointment", title: "Rendez-vous Dentiste", description: "Réservation patient avec préférences", duration: "1:30", src: "/audio/dental-booking.mp3", category: "Santé", result: "Patient réservé, rappel SMS envoyé" },
  ],
}

export const getCallExamples = (locale: Locale): AudioExample[] => callExamplesData[locale] || callExamplesData.ru

// Keep for backwards compatibility
export const callExamples = callExamplesData.ru
