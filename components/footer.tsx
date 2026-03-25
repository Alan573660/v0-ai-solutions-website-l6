"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { MapPin, Phone, Mail, Globe, ChevronDown, Building2 } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { MessengerLinks } from "@/components/messenger-links"
import { cn } from "@/lib/utils"

interface FooterProps {
  locale: Locale
}

// Footer translations
const footerTranslations = {
  ru: {
    tagline: "Голосовые AI-менеджеры",
    description: "Автоматизация продаж и обслуживания клиентов с помощью голосовых AI-ассистентов.",
    workWorldwide: "Работаем по всему миру",
    company: "Компания",
    solutions: "Решения",
    aiAutomation: "AI автоматизация",
    resources: "Ресурсы",
    contacts: "Контакты",
    legal: "Правовая информация",
    offices: "Наши офисы",
    companyDetails: "Реквизиты",
    companyList: {
      about: "О компании",
      team: "Команда",
      careers: "Карьера",
      partners: "Партнёрам",
      contacts: "Контакты",
    },
    solutionsList: {
      voiceSales: "Голосовой AI-менеджер",
      aiOperator: "AI оператор",
      virtualOperator: "Виртуальный оператор",
      robotForCalls: "Робот для звонков",
      robotForSales: "Робот для продаж",
      salesAutomation: "Автоматизация продаж",
      requestProcessing: "Обработка заявок",
      orderProcessing: "Обработка заказов",
      invoiceGeneration: "Выставление счетов",
      deliveryCalculation: "Расчет доставки",
    },
    aiAutomationList: {
      businessAutomation: "AI автоматизация бизнеса",
      salesAutomation: "Автоматизация продаж",
      requestAutomation: "Автоматизация заявок",
      orderAutomation: "Автоматизация заказов",
      logisticsAutomation: "Автоматизация логистики",
      aiForBusiness: "AI для бизнеса",
    },
    resourcesList: {
      blog: "Блог",
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
    companyRequisites: {
      name: "ООО «М2 Решения»",
      address: "г. Москва, пр-кт Ленинский, д. 111, к. 1",
      inn: "9728153344",
      kpp: "772801001",
    },
    copyright: "M2 AI Solutions. Все права защищены.",
    privacyShort: "Конфиденциальность",
    termsShort: "Условия",
  },
  en: {
    tagline: "Voice AI Managers",
    description: "Sales and customer service automation with voice AI assistants.",
    workWorldwide: "We work worldwide",
    company: "Company",
    solutions: "Solutions",
    aiAutomation: "AI Automation",
    resources: "Resources",
    contacts: "Contacts",
    legal: "Legal",
    offices: "Our Offices",
    companyDetails: "Company Details",
    companyList: {
      about: "About Us",
      team: "Team",
      careers: "Careers",
      partners: "Partners",
      contacts: "Contacts",
    },
    solutionsList: {
      voiceSales: "Voice AI Sales Manager",
      aiOperator: "AI Operator",
      virtualOperator: "Virtual Operator",
      robotForCalls: "Robot for Calls",
      robotForSales: "Sales Robot",
      salesAutomation: "Sales Automation",
      requestProcessing: "Request Processing",
      orderProcessing: "Order Processing",
      invoiceGeneration: "Invoice Generation",
      deliveryCalculation: "Delivery Calculation",
    },
    aiAutomationList: {
      businessAutomation: "AI Business Automation",
      salesAutomation: "Sales Automation",
      requestAutomation: "Request Automation",
      orderAutomation: "Order Automation",
      logisticsAutomation: "Logistics Automation",
      aiForBusiness: "AI for Business",
    },
    resourcesList: {
      blog: "Blog",
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
    companyRequisites: {
      name: "M2 Solutions LLC",
      address: "Moscow, Leninsky Ave, 111, bldg. 1",
      inn: "9728153344",
      kpp: "772801001",
    },
    copyright: "M2 AI Solutions. All rights reserved.",
    privacyShort: "Privacy",
    termsShort: "Terms",
  },
  es: {
    tagline: "Gerentes de IA por Voz",
    description: "Automatización de ventas y atención al cliente con asistentes de IA de voz.",
    workWorldwide: "Trabajamos en todo el mundo",
    company: "Empresa",
    solutions: "Soluciones",
    aiAutomation: "Automatización IA",
    resources: "Recursos",
    contacts: "Contactos",
    legal: "Legal",
    offices: "Nuestras Oficinas",
    companyDetails: "Datos de la Empresa",
    companyList: {
      about: "Sobre Nosotros",
      team: "Equipo",
      careers: "Carreras",
      partners: "Socios",
      contacts: "Contactos",
    },
    solutionsList: {
      voiceSales: "Gerente de Ventas IA",
      aiOperator: "Operador IA",
      virtualOperator: "Operador Virtual",
      robotForCalls: "Robot para Llamadas",
      robotForSales: "Robot de Ventas",
      salesAutomation: "Automatización de Ventas",
      requestProcessing: "Procesamiento de Solicitudes",
      orderProcessing: "Procesamiento de Pedidos",
      invoiceGeneration: "Generación de Facturas",
      deliveryCalculation: "Cálculo de Entrega",
    },
    aiAutomationList: {
      businessAutomation: "Automatización de Negocios IA",
      salesAutomation: "Automatización de Ventas",
      requestAutomation: "Automatización de Solicitudes",
      orderAutomation: "Automatización de Pedidos",
      logisticsAutomation: "Automatización de Logística",
      aiForBusiness: "IA para Negocios",
    },
    resourcesList: {
      blog: "Blog",
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
    companyRequisites: {
      name: "M2 Solutions LLC",
      address: "Moscú, Av. Leninsky, 111, edif. 1",
      inn: "9728153344",
      kpp: "772801001",
    },
    copyright: "M2 AI Solutions. Todos los derechos reservados.",
    privacyShort: "Privacidad",
    termsShort: "Términos",
  },
  de: {
    tagline: "Sprach-KI-Manager",
    description: "Vertriebs- und Kundenservice-Automatisierung mit Sprach-KI-Assistenten.",
    workWorldwide: "Wir arbeiten weltweit",
    company: "Unternehmen",
    solutions: "Lösungen",
    aiAutomation: "KI-Automatisierung",
    resources: "Ressourcen",
    contacts: "Kontakte",
    legal: "Rechtliches",
    offices: "Unsere Büros",
    companyDetails: "Firmendaten",
    companyList: {
      about: "Über uns",
      team: "Team",
      careers: "Karriere",
      partners: "Partner",
      contacts: "Kontakte",
    },
    solutionsList: {
      voiceSales: "Sprach-KI-Vertriebsmanager",
      aiOperator: "KI-Operator",
      virtualOperator: "Virtueller Operator",
      robotForCalls: "Roboter für Anrufe",
      robotForSales: "Vertriebsroboter",
      salesAutomation: "Vertriebsautomatisierung",
      requestProcessing: "Anfrageverarbeitung",
      orderProcessing: "Auftragsverarbeitung",
      invoiceGeneration: "Rechnungsgenerierung",
      deliveryCalculation: "Lieferberechnung",
    },
    aiAutomationList: {
      businessAutomation: "KI-Geschäftsautomatisierung",
      salesAutomation: "Vertriebsautomatisierung",
      requestAutomation: "Anfrageautomatisierung",
      orderAutomation: "Auftragsautomatisierung",
      logisticsAutomation: "Logistikautomatisierung",
      aiForBusiness: "KI für Unternehmen",
    },
    resourcesList: {
      blog: "Blog",
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
    companyRequisites: {
      name: "M2 Solutions GmbH",
      address: "Moskau, Leninsky Ave, 111, Geb. 1",
      inn: "9728153344",
      kpp: "772801001",
    },
    copyright: "M2 AI Solutions. Alle Rechte vorbehalten.",
    privacyShort: "Datenschutz",
    termsShort: "AGB",
  },
  nl: {
    tagline: "Stem AI Managers",
    description: "Verkoop- en klantenservice-automatisering met stem AI-assistenten.",
    workWorldwide: "We werken wereldwijd",
    company: "Bedrijf",
    solutions: "Oplossingen",
    aiAutomation: "AI-automatisering",
    resources: "Bronnen",
    contacts: "Contacten",
    legal: "Juridisch",
    offices: "Onze Kantoren",
    companyDetails: "Bedrijfsgegevens",
    companyList: {
      about: "Over Ons",
      team: "Team",
      careers: "Carrières",
      partners: "Partners",
      contacts: "Contacten",
    },
    solutionsList: {
      voiceSales: "Stem AI Verkoopmanager",
      aiOperator: "AI Operator",
      virtualOperator: "Virtuele Operator",
      robotForCalls: "Robot voor Telefoontjes",
      robotForSales: "Verkoopbot",
      salesAutomation: "Verkoopautomatisering",
      requestProcessing: "Verzoekverwerking",
      orderProcessing: "Orderverwerking",
      invoiceGeneration: "Factuurgeneratie",
      deliveryCalculation: "Leveringsberekening",
    },
    aiAutomationList: {
      businessAutomation: "AI Bedrijfsautomatisering",
      salesAutomation: "Verkoopautomatisering",
      requestAutomation: "Verzoekautomatisering",
      orderAutomation: "Orderautomatisering",
      logisticsAutomation: "Logistieke automatisering",
      aiForBusiness: "AI voor Bedrijven",
    },
    resourcesList: {
      blog: "Blog",
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
    companyRequisites: {
      name: "M2 Solutions BV",
      address: "Moskou, Leninsky Ave, 111, geb. 1",
      inn: "9728153344",
      kpp: "772801001",
    },
    copyright: "M2 AI Solutions. Alle rechten voorbehouden.",
    privacyShort: "Privacy",
    termsShort: "Voorwaarden",
  },
  fr: {
    tagline: "Gestionnaires IA Vocaux",
    description: "Automatisation des ventes et du service client avec des assistants IA vocaux.",
    workWorldwide: "Nous travaillons dans le monde entier",
    company: "Entreprise",
    solutions: "Solutions",
    aiAutomation: "Automatisation IA",
    resources: "Ressources",
    contacts: "Contacts",
    legal: "Mentions légales",
    offices: "Nos Bureaux",
    companyDetails: "Coordonnées",
    companyList: {
      about: "À propos",
      team: "Équipe",
      careers: "Carrières",
      partners: "Partenaires",
      contacts: "Contacts",
    },
    solutionsList: {
      voiceSales: "Gestionnaire des Ventes IA",
      aiOperator: "Opérateur IA",
      virtualOperator: "Opérateur Virtuel",
      robotForCalls: "Robot pour Appels",
      robotForSales: "Robot de Ventes",
      salesAutomation: "Automatisation des Ventes",
      requestProcessing: "Traitement des Demandes",
      orderProcessing: "Traitement des Commandes",
      invoiceGeneration: "Génération de Factures",
      deliveryCalculation: "Calcul de Livraison",
    },
    aiAutomationList: {
      businessAutomation: "Automatisation d'Entreprise IA",
      salesAutomation: "Automatisation des Ventes",
      requestAutomation: "Automatisation des Demandes",
      orderAutomation: "Automatisation des Commandes",
      logisticsAutomation: "Automatisation Logistique",
      aiForBusiness: "IA pour les Affaires",
    },
    resourcesList: {
      blog: "Blog",
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
    companyRequisites: {
      name: "M2 Solutions SARL",
      address: "Moscou, Ave Leninsky, 111, bât. 1",
      inn: "9728153344",
      kpp: "772801001",
    },
    copyright: "M2 AI Solutions. Tous droits réservés.",
    privacyShort: "Confidentialité",
    termsShort: "Conditions",
  },
}

// Accordion component for mobile
function FooterAccordion({ 
  title, 
  children,
  defaultOpen = false
}: { 
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  
  return (
    <div className="border-b border-border/50 lg:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 lg:hidden text-left"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-sm">{title}</h3>
        <ChevronDown 
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      <h3 className="hidden lg:block font-semibold text-sm mb-4">{title}</h3>
      <div className={cn(
        "overflow-hidden transition-all duration-200 lg:overflow-visible",
        isOpen ? "max-h-96 pb-4" : "max-h-0 lg:max-h-none"
      )}>
        {children}
      </div>
    </div>
  )
}

export function Footer({ locale }: FooterProps) {
  const t = footerTranslations[locale] || footerTranslations.ru

  // 1. Компания
  const company = [
    { name: t.companyList.about, href: `/${locale}/about` },
    { name: t.companyList.team, href: `/${locale}/about/team` },
    { name: t.companyList.careers, href: `/${locale}/careers` },
    { name: t.companyList.partners, href: `/${locale}/partners` },
    { name: t.companyList.contacts, href: `/${locale}/contacts` },
  ]

  // 2. Решения
  const solutions = [
    { name: t.solutionsList.voiceSales, href: `/${locale}/solutions/voice-sales-manager` },
    { name: t.solutionsList.aiOperator, href: `/${locale}/solutions/automatic-operator` },
    { name: t.solutionsList.virtualOperator, href: `/${locale}/solutions/virtual-operator` },
    { name: t.solutionsList.robotForCalls, href: `/${locale}/solutions/robot-dlya-zvonkov` },
    { name: t.solutionsList.robotForSales, href: `/${locale}/solutions/robot-dlya-prodazh` },
    { name: t.solutionsList.salesAutomation, href: `/${locale}/solutions/automation-sales` },
    { name: t.solutionsList.requestProcessing, href: `/${locale}/solutions/obrabotka-zayavok` },
    { name: t.solutionsList.orderProcessing, href: `/${locale}/solutions/obrabotka-zakazov` },
    { name: t.solutionsList.invoiceGeneration, href: `/${locale}/solutions/vystavlenie-schetov` },
    { name: t.solutionsList.deliveryCalculation, href: `/${locale}/solutions/raschet-dostavki` },
  ]

  // 3. AI автоматизация
  const aiAutomation = [
    { name: t.aiAutomationList.businessAutomation, href: `/${locale}/automation-business` },
    { name: t.aiAutomationList.salesAutomation, href: `/${locale}/solutions/sales-automation-system` },
    { name: t.aiAutomationList.requestAutomation, href: `/${locale}/solutions/obrabotka-zayavok` },
    { name: t.aiAutomationList.orderAutomation, href: `/${locale}/solutions/obrabotka-zakazov` },
    { name: t.aiAutomationList.logisticsAutomation, href: `/${locale}/solutions/raschet-dostavki` },
    { name: t.aiAutomationList.aiForBusiness, href: `/${locale}/solutions/ai-dlya-biznesa` },
  ]

  // 4. Ресурсы
  const resources = [
    { name: t.resourcesList.blog, href: `/${locale}/blog` },
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
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Company info & Logo - 3 cols */}
            <div className="lg:col-span-3 space-y-6">
              <Link href={`/${locale}`} className="flex items-center gap-3 group">
                <div className="relative h-10 w-10 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-primary/50 transition-all">
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

              {/* Contacts */}
              <div className="space-y-2">
                <a 
                  href="mailto:info@m2solutions.ai" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@m2solutions.ai
                </a>
                <a 
                  href="tel:+79957967506" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +7 995 796 75 06
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe className="h-4 w-4 shrink-0" />
                  {t.workWorldwide}
                </div>
              </div>
            </div>

            {/* Navigation columns - 9 cols */}
            <div className="lg:col-span-9">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-8">
                
                {/* 1. Компания */}
                <FooterAccordion title={t.company}>
                  <ul className="space-y-2.5">
                    {company.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1 lg:py-0"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </FooterAccordion>

                {/* 2. Решения */}
                <FooterAccordion title={t.solutions}>
                  <ul className="space-y-2.5">
                    {solutions.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1 lg:py-0"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </FooterAccordion>

                {/* 3. AI автоматизация */}
                <FooterAccordion title={t.aiAutomation}>
                  <ul className="space-y-2.5">
                    {aiAutomation.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1 lg:py-0"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </FooterAccordion>

                {/* 4. Ресурсы */}
                <FooterAccordion title={t.resources}>
                  <ul className="space-y-2.5">
                    {resources.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1 lg:py-0"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </FooterAccordion>

              </div>
            </div>

          </div>
        </div>

        {/* Company requisites & Offices */}
        <div className="py-8 border-t border-border/50">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Реквизиты компании - только для русской локали */}
            {locale === "ru" && (
              <div className="space-y-4">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  {t.companyDetails}
                </h3>
                <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="font-medium">{t.companyRequisites.name}</p>
                  <p className="text-muted-foreground">
                    {t.companyRequisites.address}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-muted-foreground">
                    <span>ИНН: {t.companyRequisites.inn}</span>
                    <span>КПП: {t.companyRequisites.kpp}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Офисы */}
            <div className={cn("space-y-4", locale !== "ru" && "lg:col-span-2")}>
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {t.offices}
              </h3>
              <div className={cn(
                "grid gap-4",
                locale === "ru" ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-2 max-w-xl"
              )}>
                {/* Барселона - головной офис для нерусских локалей */}
                <div className="text-sm">
                  <p className="font-medium">{t.officesList.barcelona.city}</p>
                  <p className="text-muted-foreground text-xs">
                    {t.officesList.barcelona.country}
                    {locale !== "ru" && " · HQ"}
                  </p>
                  <div className="mt-2">
                    <MessengerLinks phone="+34631026692" country="spain" locale={locale} variant="compact" />
                  </div>
                </div>
                {/* Москва - только для русской локали */}
                {locale === "ru" && (
                  <div className="text-sm">
                    <p className="font-medium">{t.officesList.moscow.city}</p>
                    <p className="text-muted-foreground text-xs">{t.officesList.moscow.country}</p>
                    <div className="mt-2">
                      <MessengerLinks phone="+79957967506" country="russia" locale={locale} variant="compact" />
                    </div>
                  </div>
                )}
                {/* Астана */}
                <div className="text-sm">
                  <p className="font-medium">{t.officesList.astana.city}</p>
                  <p className="text-muted-foreground text-xs">{t.officesList.astana.country}</p>
                  <div className="mt-2">
                    <MessengerLinks phone="+77715242088" country="kazakhstan" locale={locale} variant="compact" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {t.copyright}
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

      </div>
    </footer>
  )
}
