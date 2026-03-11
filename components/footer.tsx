"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { MessengerLinks } from "@/components/messenger-links"

interface FooterProps {
  locale: Locale
}

// Footer translations
const footerTranslations = {
  ru: {
    tagline: "Голосовые AI-менеджеры",
    description: "Автоматизация продаж и обслуживания клиентов с помощью голосовых AI-ассистентов. Международная команда с офисами в Барселоне, Москве и Астане.",
    workWorldwide: "Работаем по всему миру",
    solutions: "Решения",
    aiAutomation: "AI автоматизация",
    company: "Компания",
    resources: "Ресурсы",
    legal: "Правовая информация",
    offices: "Наши офисы",
    solutionsList: {
      voiceSales: "Голосовой AI-менеджер",
      hotelConcierge: "AI-консьерж для отелей",
      smb: "Для малого бизнеса",
      enterprise: "Enterprise решения",
      custom: "Индивидуальные решения",
      smartHome: "Умный дом на базе ИИ",
    },
    aiAutomationList: {
      robotOperator: "Робот оператор",
      automaticOperator: "Автоматический оператор",
      virtualOperator: "Виртуальный оператор",
      robotForCalls: "Робот для звонков",
      robotForSales: "Робот для продаж",
      requestProcessing: "Обработка заявок",
      orderProcessing: "Обработка заказов",
      invoiceGeneration: "Выставление счётов",
      deliveryCalculation: "Расчёт доставки",
      salesAutomation: "Система автоматизации продаж",
      aiForBusiness: "AI для бизнеса",
    },
    companyList: {
      about: "О компании",
      team: "Команда",
      careers: "Карьера",
      partners: "Партнёрам",
      blog: "Блог",
    },
    resourcesList: {
      docs: "Документация",
      knowledgeBase: "База знаний",
      faq: "FAQ",
      support: "Поддержка",
      status: "Статус системы",
    },
    legalList: {
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      dpa: "Соглашение об обработке данных",
      cookies: "Cookies",
    },
    officesList: {
      barcelona: { city: "Барселона", country: "Испания" },
      astana: { city: "Астана", country: "Казахстан" },
      moscow: { city: "Москва", country: "Россия" },
    },
    copyright: "M2 AI Solutions. Все права защищены.",
    privacyShort: "Конфиденциальность",
    termsShort: "Условия",
  },
  en: {
    tagline: "Voice AI Managers",
    description: "Sales and customer service automation with voice AI assistants. International team with offices in Barcelona, Moscow and Astana.",
    workWorldwide: "We work worldwide",
    solutions: "Solutions",
    aiAutomation: "AI Automation",
    company: "Company",
    resources: "Resources",
    legal: "Legal",
    offices: "Our Offices",
    solutionsList: {
      voiceSales: "Voice AI Sales Manager",
      hotelConcierge: "AI Hotel Concierge",
      smb: "For Small Business",
      enterprise: "Enterprise Solutions",
      custom: "Custom Solutions",
      smartHome: "AI Smart Home",
    },
    aiAutomationList: {
      robotOperator: "Robot Operator",
      automaticOperator: "Automatic Operator",
      virtualOperator: "Virtual Operator",
      robotForCalls: "Robot for Calls",
      robotForSales: "Robot for Sales",
      requestProcessing: "Request Processing",
      orderProcessing: "Order Processing",
      invoiceGeneration: "Invoice Generation",
      deliveryCalculation: "Delivery Calculation",
      salesAutomation: "Sales Automation System",
      aiForBusiness: "AI for Business",
    },
    companyList: {
      about: "About Us",
      team: "Team",
      careers: "Careers",
      partners: "Partners",
      blog: "Blog",
    },
    resourcesList: {
      docs: "Documentation",
      knowledgeBase: "Knowledge Base",
      faq: "FAQ",
      support: "Support",
      status: "System Status",
    },
    legalList: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      dpa: "Data Processing Agreement",
      cookies: "Cookies",
    },
    officesList: {
      barcelona: { city: "Barcelona", country: "Spain" },
      astana: { city: "Astana", country: "Kazakhstan" },
      moscow: { city: "Moscow", country: "Russia" },
    },
    copyright: "M2 AI Solutions. All rights reserved.",
    privacyShort: "Privacy",
    termsShort: "Terms",
  },
  es: {
    tagline: "Gerentes de IA por Voz",
    description: "Automatización de ventas y atención al cliente con asistentes de IA de voz. Equipo internacional con oficinas en Barcelona, Moscú y Astaná.",
    workWorldwide: "Trabajamos en todo el mundo",
    solutions: "Soluciones",
    aiAutomation: "Automatización IA",
    company: "Empresa",
    resources: "Recursos",
    legal: "Legal",
    offices: "Nuestras Oficinas",
    solutionsList: {
      voiceSales: "Gerente de Ventas IA",
      hotelConcierge: "Conserje IA para Hoteles",
      smb: "Para Pequeñas Empresas",
      enterprise: "Soluciones Enterprise",
      custom: "Soluciones Personalizadas",
      smartHome: "Casa Inteligente con IA",
    },
    aiAutomationList: {
      robotOperator: "Robot Operador",
      automaticOperator: "Operador Automático",
      virtualOperator: "Operador Virtual",
      robotForCalls: "Robot para Llamadas",
      robotForSales: "Robot de Ventas",
      requestProcessing: "Procesamiento de Solicitudes",
      orderProcessing: "Procesamiento de Pedidos",
      invoiceGeneration: "Generación de Facturas",
      deliveryCalculation: "Cálculo de Entrega",
      salesAutomation: "Sistema de Automatización de Ventas",
      aiForBusiness: "IA para Negocios",
    },
    companyList: {
      about: "Sobre Nosotros",
      team: "Equipo",
      careers: "Carreras",
      partners: "Socios",
      blog: "Blog",
    },
    resourcesList: {
      docs: "Documentación",
      knowledgeBase: "Base de Conocimiento",
      faq: "FAQ",
      support: "Soporte",
      status: "Estado del Sistema",
    },
    legalList: {
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      dpa: "Acuerdo de Procesamiento de Datos",
      cookies: "Cookies",
    },
    officesList: {
      barcelona: { city: "Barcelona", country: "España" },
      astana: { city: "Astaná", country: "Kazajistán" },
      moscow: { city: "Moscú", country: "Rusia" },
    },
    copyright: "M2 AI Solutions. Todos los derechos reservados.",
    privacyShort: "Privacidad",
    termsShort: "Términos",
  },
  de: {
    tagline: "Sprach-KI-Manager",
    description: "Vertriebs- und Kundenservice-Automatisierung mit Sprach-KI-Assistenten. Internationales Team mit Büros in Barcelona, Moskau und Astana.",
    workWorldwide: "Wir arbeiten weltweit",
    solutions: "Lösungen",
    aiAutomation: "KI-Automatisierung",
    company: "Unternehmen",
    resources: "Ressourcen",
    legal: "Rechtliches",
    offices: "Unsere Büros",
    solutionsList: {
      voiceSales: "Sprach-KI-Vertriebsmanager",
      hotelConcierge: "KI-Hotelconcierge",
      smb: "Für kleine Unternehmen",
      enterprise: "Enterprise-Lösungen",
      custom: "Individuelle Lösungen",
      smartHome: "KI Smart Home",
    },
    aiAutomationList: {
      robotOperator: "Roboter-Operator",
      automaticOperator: "Automatischer Operator",
      virtualOperator: "Virtueller Operator",
      robotForCalls: "Roboter für Anrufe",
      robotForSales: "Vertriebsroboter",
      requestProcessing: "Anfrageverarbeitung",
      orderProcessing: "Auftragsverarbeitung",
      invoiceGeneration: "Rechnungsgenerierung",
      deliveryCalculation: "Lieferberechnung",
      salesAutomation: "Vertriebsautomatisierungssystem",
      aiForBusiness: "KI für Unternehmen",
    },
    companyList: {
      about: "Über uns",
      team: "Team",
      careers: "Karriere",
      partners: "Partner",
      blog: "Blog",
    },
    resourcesList: {
      docs: "Dokumentation",
      knowledgeBase: "Wissensdatenbank",
      faq: "FAQ",
      support: "Support",
      status: "Systemstatus",
    },
    legalList: {
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      dpa: "Datenverarbeitungsvereinbarung",
      cookies: "Cookies",
    },
    officesList: {
      barcelona: { city: "Barcelona", country: "Spanien" },
      astana: { city: "Astana", country: "Kasachstan" },
      moscow: { city: "Moskau", country: "Russland" },
    },
    copyright: "M2 AI Solutions. Alle Rechte vorbehalten.",
    privacyShort: "Datenschutz",
    termsShort: "AGB",
  },
  nl: {
    tagline: "Stem AI Managers",
    description: "Verkoop- en klantenservice-automatisering met stem AI-assistenten. Internationaal team met kantoren in Barcelona, Moskou en Astana.",
    workWorldwide: "We werken wereldwijd",
    solutions: "Oplossingen",
    aiAutomation: "AI-automatisering",
    company: "Bedrijf",
    resources: "Bronnen",
    legal: "Juridisch",
    offices: "Onze Kantoren",
    solutionsList: {
      voiceSales: "Stem AI Verkoopmanager",
      hotelConcierge: "AI Hotelconciërge",
      smb: "Voor Kleine Bedrijven",
      enterprise: "Enterprise Oplossingen",
      custom: "Maatwerkoplossingen",
      smartHome: "AI Smart Home",
    },
    aiAutomationList: {
      robotOperator: "Robot Operator",
      automaticOperator: "Automatische Operator",
      virtualOperator: "Virtuele Operator",
      robotForCalls: "Robot voor Telefoontjes",
      robotForSales: "Verkoopbot",
      requestProcessing: "Verzoekverwerking",
      orderProcessing: "Orderverwerking",
      invoiceGeneration: "Factuurgeneratie",
      deliveryCalculation: "Leveringsberekening",
      salesAutomation: "Verkoopautomatiseringssysteem",
      aiForBusiness: "AI voor Bedrijven",
    },
    companyList: {
      about: "Over Ons",
      team: "Team",
      careers: "Carrières",
      partners: "Partners",
      blog: "Blog",
    },
    resourcesList: {
      docs: "Documentatie",
      knowledgeBase: "Kennisbank",
      faq: "FAQ",
      support: "Ondersteuning",
      status: "Systeemstatus",
    },
    legalList: {
      privacy: "Privacybeleid",
      terms: "Servicevoorwaarden",
      dpa: "Gegevensverwerkingsovereenkomst",
      cookies: "Cookies",
    },
    officesList: {
      barcelona: { city: "Barcelona", country: "Spanje" },
      astana: { city: "Astana", country: "Kazachstan" },
      moscow: { city: "Moskou", country: "Rusland" },
    },
    copyright: "M2 AI Solutions. Alle rechten voorbehouden.",
    privacyShort: "Privacy",
    termsShort: "Voorwaarden",
  },
  fr: {
    tagline: "Gestionnaires IA Vocaux",
    description: "Automatisation des ventes et du service client avec des assistants IA vocaux. Équipe internationale avec des bureaux à Barcelone, Moscou et Astana.",
    workWorldwide: "Nous travaillons dans le monde entier",
    solutions: "Solutions",
    aiAutomation: "Automatisation IA",
    company: "Entreprise",
    resources: "Ressources",
    legal: "Mentions légales",
    offices: "Nos Bureaux",
    solutionsList: {
      voiceSales: "Gestionnaire des Ventes IA",
      hotelConcierge: "Concierge IA pour Hôtels",
      smb: "Pour les PME",
      enterprise: "Solutions Enterprise",
      custom: "Solutions Personnalisées",
      smartHome: "Maison Intelligente IA",
    },
    aiAutomationList: {
      robotOperator: "Opérateur Robot",
      automaticOperator: "Opérateur Automatique",
      virtualOperator: "Opérateur Virtuel",
      robotForCalls: "Robot pour Appels",
      robotForSales: "Robot de Ventes",
      requestProcessing: "Traitement des Demandes",
      orderProcessing: "Traitement des Commandes",
      invoiceGeneration: "Génération de Factures",
      deliveryCalculation: "Calcul de Livraison",
      salesAutomation: "Système d'Automatisation des Ventes",
      aiForBusiness: "IA pour les Affaires",
    },
    companyList: {
      about: "À propos",
      team: "Équipe",
      careers: "Carrières",
      partners: "Partenaires",
      blog: "Blog",
    },
    resourcesList: {
      docs: "Documentation",
      knowledgeBase: "Base de connaissances",
      faq: "FAQ",
      support: "Support",
      status: "Statut du système",
    },
    legalList: {
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      dpa: "Accord de traitement des données",
      cookies: "Cookies",
    },
    officesList: {
      barcelona: { city: "Barcelone", country: "Espagne" },
      astana: { city: "Astana", country: "Kazakhstan" },
      moscow: { city: "Moscou", country: "Russie" },
    },
    copyright: "M2 AI Solutions. Tous droits réservés.",
    privacyShort: "Confidentialité",
    termsShort: "Conditions",
  },
}

export function Footer({ locale }: FooterProps) {
  const t = footerTranslations[locale] || footerTranslations.ru

  const solutions = [
    { name: t.solutionsList.voiceSales, href: `/${locale}/solutions/voice-sales-manager` },
    { name: t.solutionsList.hotelConcierge, href: `/${locale}/solutions/hotel-concierge` },
    { name: t.solutionsList.smb, href: `/${locale}/solutions/smb` },
    { name: t.solutionsList.enterprise, href: `/${locale}/solutions/enterprise` },
    { name: t.solutionsList.custom, href: `/${locale}/solutions/custom` },
    { name: t.solutionsList.smartHome, href: `/${locale}/solutions/smart-home` },
  ]

  const aiAutomation = [
    { name: t.aiAutomationList.robotOperator, href: `/${locale}/solutions/robot-operator` },
    { name: t.aiAutomationList.automaticOperator, href: `/${locale}/solutions/automatic-operator` },
    { name: t.aiAutomationList.virtualOperator, href: `/${locale}/solutions/virtual-operator` },
    { name: t.aiAutomationList.robotForCalls, href: `/${locale}/solutions/robot-dlya-zvonkov` },
    { name: t.aiAutomationList.robotForSales, href: `/${locale}/solutions/robot-dlya-prodazh` },
    { name: t.aiAutomationList.requestProcessing, href: `/${locale}/solutions/obrabotka-zayavok` },
    { name: t.aiAutomationList.orderProcessing, href: `/${locale}/solutions/obrabotka-zakazov` },
    { name: t.aiAutomationList.invoiceGeneration, href: `/${locale}/solutions/vystavlenie-schetov` },
    { name: t.aiAutomationList.deliveryCalculation, href: `/${locale}/solutions/raschet-dostavki` },
    { name: t.aiAutomationList.salesAutomation, href: `/${locale}/solutions/sales-automation-system` },
    { name: t.aiAutomationList.aiForBusiness, href: `/${locale}/solutions/ai-dlya-biznesa` },
  ]

  const company = [
    { name: t.companyList.about, href: `/${locale}/about` },
    { name: t.companyList.team, href: `/${locale}/about/team` },
    { name: t.companyList.careers, href: `/${locale}/careers` },
    { name: t.companyList.partners, href: `/${locale}/partners` },
    { name: t.companyList.blog, href: `/${locale}/blog` },
  ]

  const resources = [
    { name: t.resourcesList.docs, href: `/${locale}/docs` },
    { name: t.resourcesList.knowledgeBase, href: `/${locale}/knowledge-base` },
    { name: t.resourcesList.faq, href: `/${locale}/faq` },
    { name: t.resourcesList.support, href: `/${locale}/support` },
    { name: t.resourcesList.status, href: `/${locale}/status` },
  ]

  const legal = [
    { name: t.legalList.privacy, href: `/${locale}/privacy` },
    { name: t.legalList.terms, href: `/${locale}/terms` },
    { name: t.legalList.dpa, href: `/${locale}/dpa` },
    { name: t.legalList.cookies, href: `/${locale}/cookies` },
  ]

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Link href={`/${locale}`} className="flex items-center gap-3 mb-4 group">
                  <div className="relative h-11 w-11 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-primary/50 transition-all">
                    <Image
                      src="/images/logo-icon.jpg"
                      alt=""
                      fill
                      className="object-cover object-right"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold leading-tight tracking-tight">
                      <span className="text-primary">M2</span>
                      <span className="text-foreground"> AI Solutions</span>
                    </span>
                    <span className="text-xs text-muted-foreground leading-tight">
                      {t.tagline}
                    </span>
                  </div>
                </Link>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href="mailto:info@m2solutions.ai" className="hover:text-primary transition-colors">
                    info@m2solutions.ai
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href="tel:+79957967506" className="hover:text-primary transition-colors">
                    +7 995 796 75 06
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{t.workWorldwide}</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold mb-4">{t.solutions}</h3>
              <ul className="space-y-2">
                {solutions.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Automation */}
            <div>
              <h3 className="font-semibold mb-4">{t.aiAutomation}</h3>
              <ul className="space-y-2">
                {aiAutomation.slice(0, 6).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">{t.company}</h3>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">{t.resources}</h3>
              <ul className="space-y-2">
                {resources.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">{t.legal}</h3>
              <ul className="space-y-2">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="py-8 border-t border-muted">
          <h3 className="font-semibold mb-6 text-center">{t.offices}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">{t.officesList.barcelona.city}, {t.officesList.barcelona.country}</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">Carrer de Mallorca, 401</p>
              <div className="flex justify-center">
                <MessengerLinks phone="+34631026692" country="spain" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">{t.officesList.astana.city}, {t.officesList.astana.country}</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">pr. Kabanbay Batyr, 53</p>
              <div className="flex justify-center">
                <MessengerLinks phone="+77715242088" country="kazakhstan" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">{t.officesList.moscow.city}, {t.officesList.moscow.country}</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">ul. Tverskaya, 15</p>
              <div className="flex justify-center">
                <MessengerLinks phone="+79957967506" country="russia" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">© 2024 {t.copyright}</div>
            <div className="flex items-center space-x-6">
              <Link
                href={`/${locale}/privacy`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.privacyShort}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.termsShort}
              </Link>
              <Link
                href={`/${locale}/cookies`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
