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
      { q: "Как обеспечивается безопасность данных?", a: "Используем шифрование данных, соблюдаем GDPR, можем развернуть решение на ваших серверах для максимальной безопасности." },
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
      { q: "Wie lange dauert die Implementierung?", a: "Für fertige Lösungen — ab 7 Tagen. Für Enterprise-Projekte — ab 4 Wochen je nach Integrationskomplexität." },
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
        description: "Verhoog de verkoop met 40% met een stem AI-manager die 24/7 werkt",
        metrics: ["40% verkoopgroei", "24/7 operatie", "0 sec wachttijd"],
        href: "voice-sales-manager",
      },
      {
        title: "AI Hotelconciërge",
        description: "AI-conciërge voor hotels: bestellingen, boekingen en service zonder wachtrijen",
        metrics: ["95% tevredenheid", "60% tijdsbesparing", "Meertalig"],
        href: "hotel-concierge",
      },
      {
        title: "Voor MKB",
        description: "Kant-en-klare oplossingen voor het MKB met snelle lancering",
        metrics: ["7 dagen lancering", "Geen integraties", "Vaste prijs"],
        href: "smb",
      },
      {
        title: "Enterprise Oplossingen",
        description: "Enterprise oplossingen met hoge beveiliging en SLA",
        metrics: ["99,9% SLA", "On-premise", "Volledige aanpassing"],
        href: "enterprise",
      },
      {
        title: "Maatwerkoplossingen",
        description: "Maatwerkoplossingen voor elke zakelijke uitdaging",
        metrics: ["Elke complexiteit", "RAG + LLM", "Volledige cyclus"],
        href: "custom",
      },
      {
        title: "AI Smart Home",
        description: "Smart home met AI: spraakbesturing, automatisering en mobiele app",
        metrics: ["Spraakbesturing", "Auto-irrigatie", "Mobiele app"],
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

const icons = [Phone, Building2, Users, Target, Zap, Home]
const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-orange-500", "bg-red-500", "bg-indigo-500"]

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

        {/* Solutions Grid */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">{pt.ourSolutions}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pt.solutions.map((solution, index) => {
                const Icon = icons[index]
                return (
                  <Card key={solution.href} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${colors[index]} flex items-center justify-center mb-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <CardDescription className="text-base">{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {solution.metrics.map((metric, i) => (
                          <Badge key={i} variant="secondary" className="mr-2">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full group-hover:bg-primary/90">
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
