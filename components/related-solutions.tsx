"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Target, Zap, Building2 } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

interface RelatedSolutionsProps {
  locale: Locale
  currentSlug: string
}

// Все 12 SEO-решений с группировкой
const allSolutions = {
  // AI для звонков
  "robot-operator": { 
    group: "calls", 
    ru: "Робот оператор", 
    en: "Robot Operator",
    es: "Robot Operador",
    de: "Roboter-Operator",
    nl: "Robot Operator",
    fr: "Robot Opérateur"
  },
  "automatic-operator": { 
    group: "calls", 
    ru: "Автоматический оператор", 
    en: "Automatic Operator",
    es: "Operador Automático",
    de: "Automatischer Operator",
    nl: "Automatische Operator",
    fr: "Opérateur Automatique"
  },
  "virtual-operator": { 
    group: "calls", 
    ru: "Виртуальный оператор", 
    en: "Virtual Operator",
    es: "Operador Virtual",
    de: "Virtueller Operator",
    nl: "Virtuele Operator",
    fr: "Opérateur Virtuel"
  },
  "robot-dlya-zvonkov": { 
    group: "calls", 
    ru: "Робот для звонков", 
    en: "Robot for Calls",
    es: "Robot para Llamadas",
    de: "Roboter für Anrufe",
    nl: "Robot voor Gesprekken",
    fr: "Robot pour Appels"
  },
  // AI для продаж
  "automation-sales": { 
    group: "sales", 
    ru: "Автоматизация продаж", 
    en: "Sales Automation",
    es: "Automatización de Ventas",
    de: "Vertriebsautomatisierung",
    nl: "Verkoopautomatisering",
    fr: "Automatisation des Ventes"
  },
  "sales-automation-system": { 
    group: "sales", 
    ru: "Система автоматизации продаж", 
    en: "Sales Automation System",
    es: "Sistema de Automatización de Ventas",
    de: "Vertriebsautomatisierungssystem",
    nl: "Verkoopautomatiseringssysteem",
    fr: "Système d'Automatisation des Ventes"
  },
  "robot-dlya-prodazh": { 
    group: "sales", 
    ru: "Робот для продаж", 
    en: "Sales Robot",
    es: "Robot de Ventas",
    de: "Verkaufsroboter",
    nl: "Verkooprobot",
    fr: "Robot de Vente"
  },
  // AI для бизнес-процессов
  "obrabotka-zayavok": { 
    group: "processes", 
    ru: "Обработка заявок", 
    en: "Request Processing",
    es: "Procesamiento de Solicitudes",
    de: "Anfrageverarbeitung",
    nl: "Verzoekverwerking",
    fr: "Traitement des Demandes"
  },
  "obrabotka-zakazov": { 
    group: "processes", 
    ru: "Обработка заказов", 
    en: "Order Processing",
    es: "Procesamiento de Pedidos",
    de: "Auftragsverarbeitung",
    nl: "Orderverwerking",
    fr: "Traitement des Commandes"
  },
  "vystavlenie-schetov": { 
    group: "processes", 
    ru: "Выставление счётов", 
    en: "Invoice Generation",
    es: "Generación de Facturas",
    de: "Rechnungserstellung",
    nl: "Factuurgeneratie",
    fr: "Génération de Factures"
  },
  "raschet-dostavki": { 
    group: "processes", 
    ru: "Расчёт доставки", 
    en: "Delivery Calculation",
    es: "Cálculo de Entrega",
    de: "Lieferberechnung",
    nl: "Leveringsberekening",
    fr: "Calcul de Livraison"
  },
  // AI для бизнеса
  "ai-dlya-biznesa": { 
    group: "business", 
    ru: "AI для бизнеса", 
    en: "AI for Business",
    es: "IA para Negocios",
    de: "KI für Unternehmen",
    nl: "AI voor Bedrijven",
    fr: "IA pour Entreprises"
  },
  // Hub страница
  "automation-business": { 
    group: "business", 
    ru: "AI автоматизация бизнеса", 
    en: "AI Business Automation",
    es: "Automatización de Negocios con IA",
    de: "KI-Geschäftsautomatisierung",
    nl: "AI Bedrijfsautomatisering",
    fr: "Automatisation d'Entreprise par IA",
    isHub: true
  },
}

const groupIcons = {
  calls: Phone,
  sales: Target,
  processes: Zap,
  business: Building2,
}

const groupColors = {
  calls: "bg-blue-500",
  sales: "bg-green-500",
  processes: "bg-orange-500",
  business: "bg-purple-500",
}

const translations = {
  ru: {
    title: "Связанные решения",
    subtitle: "Другие решения для автоматизации вашего бизнеса",
    viewAll: "Все решения",
    learnMore: "Подробнее",
  },
  en: {
    title: "Related Solutions",
    subtitle: "Other solutions for automating your business",
    viewAll: "All Solutions",
    learnMore: "Learn More",
  },
  es: {
    title: "Soluciones Relacionadas",
    subtitle: "Otras soluciones para automatizar su negocio",
    viewAll: "Todas las Soluciones",
    learnMore: "Más Información",
  },
  de: {
    title: "Verwandte Lösungen",
    subtitle: "Andere Lösungen zur Automatisierung Ihres Unternehmens",
    viewAll: "Alle Lösungen",
    learnMore: "Mehr Erfahren",
  },
  nl: {
    title: "Gerelateerde Oplossingen",
    subtitle: "Andere oplossingen voor het automatiseren van uw bedrijf",
    viewAll: "Alle Oplossingen",
    learnMore: "Meer Informatie",
  },
  fr: {
    title: "Solutions Associées",
    subtitle: "Autres solutions pour automatiser votre entreprise",
    viewAll: "Toutes les Solutions",
    learnMore: "En Savoir Plus",
  },
}

export function RelatedSolutions({ locale, currentSlug }: RelatedSolutionsProps) {
  const t = translations[locale] || translations.ru
  
  // Получаем текущую группу решения
  const currentSolution = allSolutions[currentSlug as keyof typeof allSolutions]
  const currentGroup = currentSolution?.group || "calls"
  
  // Выбираем связанные решения: сначала из той же группы, потом из других
  const sameGroupSolutions = Object.entries(allSolutions)
    .filter(([slug, data]) => data.group === currentGroup && slug !== currentSlug)
  
  const otherGroupSolutions = Object.entries(allSolutions)
    .filter(([slug, data]) => data.group !== currentGroup && slug !== currentSlug)
    .slice(0, 4 - sameGroupSolutions.length)
  
  const relatedSolutions = [...sameGroupSolutions, ...otherGroupSolutions].slice(0, 4)
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{t.title}</h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {relatedSolutions.map(([slug, data]) => {
            const Icon = groupIcons[data.group as keyof typeof groupIcons] || Phone
            const color = groupColors[data.group as keyof typeof groupColors] || "bg-blue-500"
            const name = data[locale as keyof typeof data] as string || data.ru
            // Hub страницы находятся в корне, остальные в /solutions/
            const isHub = (data as { isHub?: boolean }).isHub
            const href = isHub ? `/${locale}/${slug}` : `/${locale}/solutions/${slug}`
            
            return (
              <Card key={slug} className="group hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mb-3`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-base">{name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80">
                    <Link href={href}>
                      {t.learnMore}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline">
            <Link href={`/${locale}/solutions`}>
              {t.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
