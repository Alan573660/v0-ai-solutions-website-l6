"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  PhoneIncoming,
  PhoneOutgoing,
  UserCheck,
  Brain,
  Clock24,
  BarChart3,
  Zap,
  Shield,
  Globe,
  ChevronRight,
  Users,
  MessageSquare,
  Smartphone,
  Building2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCTA } from "@/components/modals/cta-provider"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import type { Locale } from "@/lib/i18n/config"

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function Label({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "border-white/10 text-white/60" : "border-border text-muted-foreground"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-sky-400" : "bg-primary"}`} />
      {children}
    </div>
  )
}

const translations = {
  ru: {
    badge: "AI-решение для автоматизации звонков",
    title: "Робот",
    titleHighlight: " оператор",
    subtitle: "Искусственный интеллект, который отвечает на входящие звонки, квалифицирует клиентов, озвучивает цены и управляет заявками 24/7. Без выходных и перекуров.",
    cta: "Запросить демонстрацию",
    ctaSecondary: "Послушать примеры",
    stat1Value: "100%",
    stat1Label: "входящих звонков",
    stat2Value: "24/7",
    stat2Label: "без выходных",
    stat3Value: "60-80%",
    stat3Label: "обработано без оператора",
    stat4Value: "30 сек",
    stat4Label: "первый ответ",
    
    benefitsTitle: "Почему робот оператор работает лучше",
    benefitsDesc: "Система, которая не просто отвечает, а реально помогает клиентам и продает",
    benefits: [
      { icon: "phone", title: "Никаких пропущенных звонков", desc: "100% входящих звонков обработаны 24/7" },
      { icon: "brain", title: "Понимает естественную речь", desc: "Может ответить на любой вопрос, понимает контекст" },
      { icon: "user", title: "Квалифицирует клиентов", desc: "Определяет готовность к покупке и уровень интереса" },
      { icon: "zap", title: "Работает молниеносно", desc: "Обрабатывает информацию и отвечает за миллисекунды" },
      { icon: "globe", title: "Многоязычный", desc: "Поддерживает все основные языки и диалекты" },
      { icon: "shield", title: "Безопасность данных", desc: "GDPR, CCPA и полная защита информации клиентов" },
    ],
    
    useCasesTitle: "Сценарии использования",
    useCasesDesc: "Робот оператор работает на всех типах бизнеса",
    useCases: [
      { title: "Входящие звонки", desc: "Ответ на звонки, квалификация, запись информации и передача менеджеру" },
      { title: "Исходящие звонки", desc: "Обзвон клиентов, напоминание о встречах, подтверждение заказов" },
      { title: "Горячая линия", desc: "Техническая поддержка, FAQ, решение типовых вопросов" },
      { title: "Бронирование", desc: "Приём заказов, бронирование услуг, управление расписанием" },
      { title: "Колл-центр", desc: "Масштабирование обработки, сокращение нагрузки на операторов" },
      { title: "Уведомления", desc: "Отправка звонков-напоминаний, информирование по SMS и email" },
    ],

    implementationTitle: "Процесс внедрения",
    implementationSteps: [
      { title: "1. Анализ (1-2 недели)", desc: "Анализируем процессы, типовые звонки, сценарии общения" },
      { title: "2. Проектирование (1-2 недели)", desc: "Разрабатываем сценарии диалогов, схемы маршрутизации, интеграции" },
      { title: "3. Обучение (2-4 недели)", desc: "Обучаем AI на ваших данных, примерах звонков, правилах компании" },
      { title: "4. Запуск (1 неделя)", desc: "Интегрируем, тестируем на боевом трафике и запускаем" },
    ],

    comparisonTitle: "Сравнение с IVR",
    comparison: [
      { feature: "Понимание естественной речи", robot: "✓ Полное", ivr: "✗ Только команды" },
      { feature: "Ответы на вопросы", robot: "✓ Любые", ivr: "✗ Только меню" },
      { feature: "Квалификация клиентов", robot: "✓ Да", ivr: "✗ Нет" },
      { feature: "Оформление заявок", robot: "✓ Да", ivr: "✗ Нет" },
      { feature: "Расчет стоимости", robot: "✓ Да", ivr: "✗ Нет" },
      { feature: "24/7 работа", robot: "✓ Да", ivr: "✓ Да" },
    ],

    faqTitle: "Часто задаваемые вопросы",
    faq: [
      { q: "Чем робот оператор отличается от обычного IVR?", a: "IVR — это голосовое меню. Робот оператор — это AI, который понимает естественный язык и может вести диалог как живой оператор. Он квалифицирует клиентов, отвечает на вопросы и может даже продать." },
      { q: "Может ли робот обработать сложные вопросы?", a: "Да, робот обучается на ваших данных и знает ответы на все вопросы из вашей базы. Если не знает — может передать клиента живому оператору." },
      { q: "Сколько процентов звонков робот может обработать полностью?", a: "В среднем 60-80% входящих звонков обрабатываются роботом полностью. Остальные переводятся оператору, если это нужно." },
      { q: "Как робот интегрируется с нашей системой?", a: "Робот интегрируется через API с вашей CRM, системой обработки заявок, телефонией и другими сервисами." },
      { q: "Какой язык поддерживает робот?", a: "Робот поддерживает все основные языки: русский, английский, испанский, немецкий, французский, нидерландский и другие." },
      { q: "Сколько стоит робот оператор?", a: "Начиная от €500/месяц для малого бизнеса. Цена зависит от сложности, объёма обработки и требуемых интеграций." },
    ],

    ctaSection: "Готовы автоматизировать входящие звонки?",
    ctaDescription: "Попробуйте робот оператора бесплатно. Мы проанализируем ваши звонки и покажем, как робот может вам помочь.",
    tryButton: "Запросить демонстрацию",
  },

  en: {
    badge: "AI solution for call automation",
    title: "Robot",
    titleHighlight: " Operator",
    subtitle: "Artificial intelligence that answers incoming calls, qualifies customers, states prices and manages requests 24/7. Without weekends and breaks.",
    cta: "Request Demo",
    ctaSecondary: "Listen to examples",
    stat1Value: "100%",
    stat1Label: "incoming calls",
    stat2Value: "24/7",
    stat2Label: "without breaks",
    stat3Value: "60-80%",
    stat3Label: "handled without operator",
    stat4Value: "30 sec",
    stat4Label: "first response",

    benefitsTitle: "Why robot operator works better",
    benefitsDesc: "A system that not only answers, but actually helps customers and sells",
    benefits: [
      { icon: "phone", title: "No missed calls", desc: "100% of incoming calls processed 24/7" },
      { icon: "brain", title: "Understands natural speech", desc: "Can answer any question, understands context" },
      { icon: "user", title: "Qualifies customers", desc: "Determines readiness to buy and level of interest" },
      { icon: "zap", title: "Works instantly", desc: "Processes information and responds in milliseconds" },
      { icon: "globe", title: "Multilingual", desc: "Supports all major languages and dialects" },
      { icon: "shield", title: "Data security", desc: "GDPR, CCPA and full customer data protection" },
    ],

    useCasesTitle: "Use cases",
    useCasesDesc: "Robot operator works on all types of business",
    useCases: [
      { title: "Inbound calls", desc: "Answer calls, qualify, record information and transfer to manager" },
      { title: "Outbound calls", desc: "Call customers, remind about meetings, confirm orders" },
      { title: "Hotline", desc: "Technical support, FAQ, solving typical questions" },
      { title: "Booking", desc: "Accept orders, book services, manage schedule" },
      { title: "Call center", desc: "Scale processing, reduce operator load" },
      { title: "Notifications", desc: "Send reminder calls, inform via SMS and email" },
    ],

    implementationTitle: "Implementation process",
    implementationSteps: [
      { title: "1. Analysis (1-2 weeks)", desc: "Analyze processes, typical calls, communication scenarios" },
      { title: "2. Design (1-2 weeks)", desc: "Develop dialog scripts, routing schemes, integrations" },
      { title: "3. Training (2-4 weeks)", desc: "Train AI on your data, call examples, company rules" },
      { title: "4. Launch (1 week)", desc: "Integrate, test on live traffic and launch" },
    ],

    comparisonTitle: "Comparison with IVR",
    comparison: [
      { feature: "Natural speech understanding", robot: "✓ Full", ivr: "✗ Commands only" },
      { feature: "Answering questions", robot: "✓ Any", ivr: "✗ Menu only" },
      { feature: "Customer qualification", robot: "✓ Yes", ivr: "✗ No" },
      { feature: "Request management", robot: "✓ Yes", ivr: "✗ No" },
      { feature: "Cost calculation", robot: "✓ Yes", ivr: "✗ No" },
      { feature: "24/7 operation", robot: "✓ Yes", ivr: "✓ Yes" },
    ],

    faqTitle: "Frequently Asked Questions",
    faq: [
      { q: "How is a robot operator different from regular IVR?", a: "IVR is a voice menu. Robot operator is AI that understands natural language and can conduct a conversation like a live operator. It qualifies customers, answers questions and can even sell." },
      { q: "Can the robot handle complex questions?", a: "Yes, the robot is trained on your data and knows answers to all questions from your knowledge base. If it doesn't know — it can transfer the customer to a live operator." },
      { q: "What percentage of calls can the robot fully handle?", a: "On average, 60-80% of incoming calls are fully handled by the robot. The rest are transferred to an operator if needed." },
      { q: "How does the robot integrate with our system?", a: "The robot integrates via API with your CRM, request processing system, telephony and other services." },
      { q: "What languages does the robot support?", a: "The robot supports all major languages: Russian, English, Spanish, German, French, Dutch and others." },
      { q: "How much does a robot operator cost?", a: "Starting from €500/month for small business. Price depends on complexity, processing volume and required integrations." },
    ],

    ctaSection: "Ready to automate incoming calls?",
    ctaDescription: "Try the robot operator for free. We'll analyze your calls and show you how the robot can help.",
    tryButton: "Request Demo",
  },

  es: {
    badge: "Solución IA para automatización de llamadas",
    title: "Robot",
    titleHighlight: " Operador",
    subtitle: "Inteligencia artificial que responde llamadas entrantes, califica clientes, enuncia precios y gestiona solicitudes 24/7. Sin fines de semana ni descansos.",
    cta: "Solicitar Demo",
    ctaSecondary: "Escuchar ejemplos",
    stat1Value: "100%",
    stat1Label: "llamadas entrantes",
    stat2Value: "24/7",
    stat2Label: "sin descansos",
    stat3Value: "60-80%",
    stat3Label: "sin operador",
    stat4Value: "30 seg",
    stat4Label: "primer respuesta",

    benefitsTitle: "Por qué funciona mejor el robot operador",
    benefitsDesc: "Un sistema que no solo responde, sino que realmente ayuda a los clientes a vender",
    benefits: [
      { icon: "phone", title: "Sin llamadas perdidas", desc: "100% de llamadas entrantes procesadas 24/7" },
      { icon: "brain", title: "Comprende lenguaje natural", desc: "Puede responder cualquier pregunta, entiende contexto" },
      { icon: "user", title: "Califica clientes", desc: "Determina disposición a comprar e interés" },
      { icon: "zap", title: "Funciona al instante", desc: "Procesa información y responde en milisegundos" },
      { icon: "globe", title: "Multilingüe", desc: "Soporta todos los idiomas y dialectos principales" },
      { icon: "shield", title: "Seguridad de datos", desc: "GDPR, CCPA y protección completa de datos" },
    ],

    useCasesTitle: "Casos de uso",
    useCasesDesc: "El robot operador funciona en todo tipo de negocios",
    useCases: [
      { title: "Llamadas entrantes", desc: "Responder, calificar, registrar y transferir al gerente" },
      { title: "Llamadas salientes", desc: "Llamar clientes, recordatorios, confirmación de pedidos" },
      { title: "Línea directa", desc: "Soporte técnico, FAQ, resolver dudas típicas" },
      { title: "Reservas", desc: "Aceptar pedidos, reservar servicios, gestionar horarios" },
      { title: "Centro de llamadas", desc: "Escalar procesamiento, reducir carga de operadores" },
      { title: "Notificaciones", desc: "Enviar recordatorios, informar vía SMS y email" },
    ],

    implementationTitle: "Proceso de implementación",
    implementationSteps: [
      { title: "1. Análisis (1-2 semanas)", desc: "Analizamos procesos, llamadas típicas, escenarios" },
      { title: "2. Diseño (1-2 semanas)", desc: "Desarrollamos guiones, esquemas de enrutamiento, integraciones" },
      { title: "3. Entrenamiento (2-4 semanas)", desc: "Entrenamos IA con sus datos, ejemplos, reglas" },
      { title: "4. Lanzamiento (1 semana)", desc: "Integramos, probamos y lanzamos" },
    ],

    comparisonTitle: "Comparación con IVR",
    comparison: [
      { feature: "Comprensión de lenguaje natural", robot: "✓ Completa", ivr: "✗ Solo comandos" },
      { feature: "Respuesta de preguntas", robot: "✓ Cualquiera", ivr: "✗ Solo menú" },
      { feature: "Calificación de clientes", robot: "✓ Sí", ivr: "✗ No" },
      { feature: "Gestión de solicitudes", robot: "✓ Sí", ivr: "✗ No" },
      { feature: "Cálculo de costo", robot: "✓ Sí", ivr: "✗ No" },
      { feature: "Operación 24/7", robot: "✓ Sí", ivr: "✓ Sí" },
    ],

    faqTitle: "Preguntas Frecuentes",
    faq: [
      { q: "¿En qué se diferencia un robot operador del IVR normal?", a: "IVR es un menú de voz. Robot operador es IA que entiende lenguaje natural y puede conversar como un operador vivo. Califica clientes, responde preguntas e incluso puede vender." },
      { q: "¿Puede el robot manejar preguntas complejas?", a: "Sí, el robot se entrena con sus datos y conoce respuestas a todas las preguntas. Si no sabe, puede transferir al cliente a un operador vivo." },
      { q: "¿Qué porcentaje de llamadas puede manejar completamente?", a: "En promedio, el 60-80% de llamadas entrantes se manejan completamente. El resto se transfieren si es necesario." },
      { q: "¿Cómo se integra el robot con nuestro sistema?", a: "El robot se integra vía API con su CRM, sistema de procesamiento, telefonía y otros servicios." },
      { q: "¿Qué idiomas soporta?", a: "Soporta todos los idiomas principales: ruso, inglés, español, alemán, francés, holandés y otros." },
      { q: "¿Cuánto cuesta?", a: "A partir de €500/mes para pequeños negocios. El precio depende de complejidad, volumen e integraciones." },
    ],

    ctaSection: "¿Listo para automatizar llamadas?",
    ctaDescription: "Pruebe el robot operador gratis. Analizaremos sus llamadas y le mostraremos cómo puede ayudar.",
    tryButton: "Solicitar Demo",
  },

  de: {
    badge: "KI-Lösung zur Anrufautomatisierung",
    title: "Roboter-",
    titleHighlight: "Operator",
    subtitle: "Künstliche Intelligenz, die eingehende Anrufe beantwortet, Kunden qualifiziert, Preise nennt und Anfragen 24/7 verwaltet. Ohne Wochenenden und Pausen.",
    cta: "Demo Anfordern",
    ctaSecondary: "Beispiele anhören",
    stat1Value: "100%",
    stat1Label: "eingehende Anrufe",
    stat2Value: "24/7",
    stat2Label: "ohne Unterbrechung",
    stat3Value: "60-80%",
    stat3Label: "ohne Operator",
    stat4Value: "30 Sek",
    stat4Label: "erste Antwort",

    benefitsTitle: "Warum Roboter-Operator besser funktioniert",
    benefitsDesc: "Ein System, das nicht nur antwortet, sondern Kunden wirklich hilft zu verkaufen",
    benefits: [
      { icon: "phone", title: "Keine verpassten Anrufe", desc: "100% eingehende Anrufe 24/7 bearbeitet" },
      { icon: "brain", title: "Versteht natürliche Sprache", desc: "Kann jede Frage beantworten, versteht Kontext" },
      { icon: "user", title: "Qualifiziert Kunden", desc: "Bestimmt Kaufbereitschaft und Interesse" },
      { icon: "zap", title: "Funktioniert blitzschnell", desc: "Verarbeitet und antwortet in Millisekunden" },
      { icon: "globe", title: "Mehrsprachig", desc: "Unterstützt alle Hauptsprachen und Dialekte" },
      { icon: "shield", title: "Datensicherheit", desc: "GDPR, CCPA und vollständiger Schutz" },
    ],

    useCasesTitle: "Anwendungsfälle",
    useCasesDesc: "Roboter-Operator funktioniert auf allen Unternehmenstypen",
    useCases: [
      { title: "Eingehende Anrufe", desc: "Beantworten, qualifizieren, aufzeichnen und an Manager weiterleiten" },
      { title: "Ausgehende Anrufe", desc: "Kunden anrufen, Erinnerungen, Bestellbestätigung" },
      { title: "Hotline", desc: "Technischer Support, FAQ, typische Fragen lösen" },
      { title: "Buchung", desc: "Bestellungen annehmen, Services buchen, Zeitplan verwalten" },
      { title: "Call-Center", desc: "Verarbeitung skalieren, Operatorlast reduzieren" },
      { title: "Benachrichtigungen", desc: "Erinnerungsanrufe, SMS und E-Mail-Benachrichtigungen" },
    ],

    implementationTitle: "Implementierungsprozess",
    implementationSteps: [
      { title: "1. Analyse (1-2 Wochen)", desc: "Analysieren Sie Prozesse, typische Anrufe, Szenarien" },
      { title: "2. Design (1-2 Wochen)", desc: "Entwickeln Sie Skripte, Routing-Schemata, Integrationen" },
      { title: "3. Training (2-4 Wochen)", desc: "Trainieren Sie KI mit Ihren Daten, Beispielen, Regeln" },
      { title: "4. Start (1 Woche)", desc: "Integrieren, testen und starten" },
    ],

    comparisonTitle: "Vergleich mit IVR",
    comparison: [
      { feature: "Verständnis natürlicher Sprache", robot: "✓ Vollständig", ivr: "✗ Nur Befehle" },
      { feature: "Beantwortung von Fragen", robot: "✓ Beliebig", ivr: "✗ Nur Menü" },
      { feature: "Kundenqualifizierung", robot: "✓ Ja", ivr: "✗ Nein" },
      { feature: "Anfrageverwaltung", robot: "✓ Ja", ivr: "✗ Nein" },
      { feature: "Kostenberechnung", robot: "✓ Ja", ivr: "✗ Nein" },
      { feature: "24/7 Betrieb", robot: "✓ Ja", ivr: "✓ Ja" },
    ],

    faqTitle: "Häufig Gestellte Fragen",
    faq: [
      { q: "Wie unterscheidet sich ein Roboter-Operator von normalem IVR?", a: "IVR ist ein Sprachmenü. Roboter-Operator ist KI, die natürliche Sprache versteht und wie ein echter Operator sprechen kann. Er qualifiziert Kunden, beantwortet Fragen und kann sogar verkaufen." },
      { q: "Kann der Roboter komplexe Fragen bewältigen?", a: "Ja, der Roboter wird mit Ihren Daten trainiert und kennt Antworten auf alle Fragen. Wenn nicht, kann er zum Operator weiterleiten." },
      { q: "Welcher Prozentsatz der Anrufe kann vollständig bearbeitet werden?", a: "Im Durchschnitt 60-80% der eingehenden Anrufe. Der Rest wird an Operator weitergeleitet, falls nötig." },
      { q: "Wie integriert sich der Roboter mit unseren Systemen?", a: "Der Roboter integriert sich über API mit CRM, Anfragensystem, Telefonie und anderen Services." },
      { q: "Welche Sprachen unterstützt der Roboter?", a: "Alle Hauptsprachen: Russisch, Englisch, Spanisch, Deutsch, Französisch, Holländisch und andere." },
      { q: "Wie viel kostet es?", a: "Ab €500/Monat für kleine Unternehmen. Der Preis hängt von Komplexität, Volumen und Integrationen ab." },
    ],

    ctaSection: "Bereit, Anrufe zu automatisieren?",
    ctaDescription: "Probieren Sie den Roboter-Operator kostenlos. Wir analysieren Ihre Anrufe und zeigen, wie er helfen kann.",
    tryButton: "Demo Anfordern",
  },

  nl: {
    badge: "AI-oplossing voor oproepautomatisering",
    title: "Robot-",
    titleHighlight: "Operator",
    subtitle: "Kunstmatige intelligentie die inkomende oproepen beantwoordt, klanten kwalificeert, prijzen noemt en verzoeken 24/7 beheert. Zonder weekends en pauzes.",
    cta: "Demo Aanvragen",
    ctaSecondary: "Voorbeelden beluisteren",
    stat1Value: "100%",
    stat1Label: "inkomende oproepen",
    stat2Value: "24/7",
    stat2Label: "zonder pauzes",
    stat3Value: "60-80%",
    stat3Label: "zonder operator",
    stat4Value: "30 sec",
    stat4Label: "eerste antwoord",

    benefitsTitle: "Waarom robot-operator beter werkt",
    benefitsDesc: "Een systeem dat niet alleen antwoordt, maar klanten echt helpt te verkopen",
    benefits: [
      { icon: "phone", title: "Geen gemiste oproepen", desc: "100% inkomende oproepen 24/7 afgehandeld" },
      { icon: "brain", title: "Begrijpt natuurlijke taal", desc: "Kan elke vraag beantwoorden, begrijpt context" },
      { icon: "user", title: "Kwalificeert klanten", desc: "Bepaalt koopbereidheid en interesse" },
      { icon: "zap", title: "Werkt bliksemnel", desc: "Verwerkt en antwoordt in milliseconden" },
      { icon: "globe", title: "Meertalig", desc: "Ondersteunt alle hoofdtalen en dialecten" },
      { icon: "shield", title: "Gegevensbeveiliging", desc: "GDPR, CCPA en volledige bescherming" },
    ],

    useCasesTitle: "Toepassingsgebieden",
    useCasesDesc: "Robot-operator werkt op alle bedrijfstypen",
    useCases: [
      { title: "Inkomende oproepen", desc: "Beantwoorden, kwalificeren, registreren en doorsturen" },
      { title: "Uitgaande oproepen", desc: "Bellen klanten, herinneringen, bestellingen bevestigen" },
      { title: "Hotline", desc: "Technische ondersteuning, FAQ, standaardvragen" },
      { title: "Boekingen", desc: "Orders accepteren, services boeken, agenda beheren" },
      { title: "Call-center", desc: "Verwerking schalen, operatorbelasting verminderen" },
      { title: "Meldingen", desc: "Herinneringsoproepen, SMS en email-meldingen" },
    ],

    implementationTitle: "Implementatieproces",
    implementationSteps: [
      { title: "1. Analyse (1-2 weken)", desc: "Analyseer processen, typische oproepen, scenario's" },
      { title: "2. Ontwerp (1-2 weken)", desc: "Ontwikkel scripts, routeringsschema's, integraties" },
      { title: "3. Training (2-4 weken)", desc: "Train AI met uw gegevens, voorbeelden, regels" },
      { title: "4. Lancering (1 week)", desc: "Integreer, test en lanceer" },
    ],

    comparisonTitle: "Vergelijking met IVR",
    comparison: [
      { feature: "Natuurlijke taalverwerking", robot: "✓ Volledig", ivr: "✗ Alleen commando's" },
      { feature: "Vraagbeantwoording", robot: "✓ Elke", ivr: "✗ Alleen menu" },
      { feature: "Klantenkwalificatie", robot: "✓ Ja", ivr: "✗ Nee" },
      { feature: "Verzoekbeheer", robot: "✓ Ja", ivr: "✗ Nee" },
      { feature: "Kostprijsberekening", robot: "✓ Ja", ivr: "✗ Nee" },
      { feature: "24/7 bedrijf", robot: "✓ Ja", ivr: "✓ Ja" },
    ],

    faqTitle: "Veelgestelde Vragen",
    faq: [
      { q: "Hoe verschilt een robot-operator van normale IVR?", a: "IVR is een spraakmenu. Robot-operator is AI die natuurlijke taal begrijpt en als een echte operator kan praten. Het kwalificeert klanten, beantwoordt vragen en kan zelfs verkopen." },
      { q: "Kan de robot complexe vragen afhandelen?", a: "Ja, de robot wordt met uw gegevens getraind en kent antwoorden op alle vragen. Zoniet, kan het doorsturen naar een operator." },
      { q: "Welk percentage oproepen kan volledig worden afgehandeld?", a: "Gemiddeld 60-80% van inkomende oproepen. De rest wordt doorgestuurd indien nodig." },
      { q: "Hoe integreert de robot met onze systemen?", a: "De robot integreert via API met uw CRM, verwerkingssysteem, telefonie en andere services." },
      { q: "Welke talen ondersteunt de robot?", a: "Alle hoofdtalen: Nederlands, Engels, Spaans, Duits, Frans, Russisch en andere." },
      { q: "Hoeveel kost het?", a: "Vanaf €500/maand voor kleine bedrijven. Prijs hangt af van complexiteit, volume en integraties." },
    ],

    ctaSection: "Klaar om oproepen te automatiseren?",
    ctaDescription: "Probeer de robot-operator gratis. We analyseren uw oproepen en laten zien hoe het kan helpen.",
    tryButton: "Demo Aanvragen",
  },

  fr: {
    badge: "Solution IA pour automatisation d'appels",
    title: "Robot",
    titleHighlight: " Opérateur",
    subtitle: "Intelligence artificielle qui répond aux appels entrants, qualifie les clients, énonce les prix et gère les demandes 24/7. Sans weekends ni pauses.",
    cta: "Demander une Démo",
    ctaSecondary: "Écouter les exemples",
    stat1Value: "100%",
    stat1Label: "appels entrants",
    stat2Value: "24/7",
    stat2Label: "sans interruption",
    stat3Value: "60-80%",
    stat3Label: "sans opérateur",
    stat4Value: "30 sec",
    stat4Label: "première réponse",

    benefitsTitle: "Pourquoi le robot-opérateur fonctionne mieux",
    benefitsDesc: "Un système qui non seulement répond, mais aide vraiment les clients à vendre",
    benefits: [
      { icon: "phone", title: "Aucun appel manqué", desc: "100% des appels traités 24/7" },
      { icon: "brain", title: "Comprend le langage naturel", desc: "Peut répondre à toute question, comprend le contexte" },
      { icon: "user", title: "Qualifie les clients", desc: "Détermine la volonté d'acheter et l'intérêt" },
      { icon: "zap", title: "Fonctionne à la vitesse de l'éclair", desc: "Traite et répond en millisecondes" },
      { icon: "globe", title: "Multilingue", desc: "Supporte toutes les langues et dialectes principaux" },
      { icon: "shield", title: "Sécurité des données", desc: "RGPD, CCPA et protection complète" },
    ],

    useCasesTitle: "Cas d'utilisation",
    useCasesDesc: "Le robot-opérateur fonctionne pour tous les types d'entreprises",
    useCases: [
      { title: "Appels entrants", desc: "Répondre, qualifier, enregistrer et transférer" },
      { title: "Appels sortants", desc: "Appeler clients, rappels, confirmation de commandes" },
      { title: "Hotline", desc: "Support technique, FAQ, questions typiques" },
      { title: "Réservation", desc: "Accepter commandes, réserver services, gérer calendrier" },
      { title: "Centre d'appels", desc: "Mettre à l'échelle, réduire charge opérateurs" },
      { title: "Notifications", desc: "Appels de rappel, SMS et notifications email" },
    ],

    implementationTitle: "Processus de mise en œuvre",
    implementationSteps: [
      { title: "1. Analyse (1-2 semaines)", desc: "Analysez procédés, appels typiques, scénarios" },
      { title: "2. Conception (1-2 semaines)", desc: "Développez scripts, schémas routage, intégrations" },
      { title: "3. Formation (2-4 semaines)", desc: "Entraînez IA avec vos données, exemples, règles" },
      { title: "4. Lancement (1 semaine)", desc: "Intégrez, testez et lancez" },
    ],

    comparisonTitle: "Comparaison avec IVR",
    comparison: [
      { feature: "Compréhension du langage naturel", robot: "✓ Complète", ivr: "✗ Commandes seulement" },
      { feature: "Réponse aux questions", robot: "✓ N'importe laquelle", ivr: "✗ Menu seulement" },
      { feature: "Qualification client", robot: "✓ Oui", ivr: "✗ Non" },
      { feature: "Gestion des demandes", robot: "✓ Oui", ivr: "✗ Non" },
      { feature: "Calcul des coûts", robot: "✓ Oui", ivr: "✗ Non" },
      { feature: "Fonctionnement 24/7", robot: "✓ Oui", ivr: "✓ Oui" },
    ],

    faqTitle: "Questions Fréquemment Posées",
    faq: [
      { q: "En quoi un robot-opérateur diffère-t-il d'un IVR normal?", a: "L'IVR est un menu vocal. Le robot-opérateur est une IA qui comprend le langage naturel et peut converser comme un vrai opérateur. Il qualifie les clients, répond aux questions et peut même vendre." },
      { q: "Le robot peut-il gérer des questions complexes?", a: "Oui, le robot est entraîné sur vos données et connaît les réponses à toutes les questions. Sinon, il peut transférer au client à un opérateur." },
      { q: "Quel pourcentage d'appels peut être complètement traité?", a: "En moyenne 60-80% des appels. Le reste est transféré si nécessaire." },
      { q: "Comment le robot s'intègre-t-il avec nos systèmes?", a: "Le robot s'intègre via API avec votre CRM, système de traitement, téléphonie et autres services." },
      { q: "Quelles langues le robot supporte-t-il?", a: "Toutes les langues principales: français, anglais, espagnol, allemand, russe, néerlandais et autres." },
      { q: "Combien ça coûte?", a: "À partir de €500/mois pour petites entreprises. Le prix dépend de la complexité, du volume et des intégrations." },
    ],

    ctaSection: "Prêt à automatiser les appels?",
    ctaDescription: "Essayez le robot-opérateur gratuitement. Nous analyserons vos appels et montrerons comment il peut aider.",
    tryButton: "Demander une Démo",
  },
}

export function RobotOperatorClientPage({ locale }: { locale: Locale }) {
  const { openDemo } = useCTA()
  const t = translations[locale] || translations.ru

  const iconMap: Record<string, any> = {
    phone: PhoneIncoming,
    brain: Brain,
    user: UserCheck,
    zap: Zap,
    globe: Globe,
    shield: Shield,
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5" />
        <div className="absolute inset-0 bg-grid-white/5 opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <Reveal>
            <Label>{t.badge}</Label>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              {t.title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">{t.titleHighlight}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
          </Reveal>

          <Reveal delay={300} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => openDemo()} className="h-12 px-8 text-base">
              {t.cta}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
              {t.ctaSecondary}
            </Button>
          </Reveal>

          {/* Stats */}
          <Reveal delay={400} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { value: t.stat1Value, label: t.stat1Label },
              { value: t.stat2Value, label: t.stat2Label },
              { value: t.stat3Value, label: t.stat3Label },
              { value: t.stat4Value, label: t.stat4Label },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <Label>{t.benefitsTitle}</Label>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">{t.benefitsTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.benefitsDesc}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {t.benefits.map((benefit, i) => {
              const IconComponent = iconMap[benefit.icon] || Brain
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-colors group">
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 sm:py-28 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <Label>{t.useCasesTitle}</Label>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">{t.useCasesTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.useCasesDesc}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {t.useCases.map((useCase, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-card border border-border/50 rounded-xl p-5 hover:border-primary/20 transition-colors">
                  <h3 className="font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <Label>{t.implementationTitle}</Label>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4">{t.implementationTitle}</h2>
          </Reveal>

          <div className="space-y-4 mt-12">
            {t.implementationSteps.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-colors">
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 sm:py-28 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <Label>{t.comparisonTitle}</Label>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4">{t.comparisonTitle}</h2>
          </Reveal>

          <div className="mt-12 bg-card border border-border/50 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b border-border/50">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">{locale === "ru" ? "Возможность" : locale === "en" ? "Feature" : locale === "es" ? "Característica" : locale === "de" ? "Funktionalität" : locale === "nl" ? "Functie" : "Fonctionnalité"}</th>
                    <th className="text-center px-6 py-4 font-semibold">{t.title}</th>
                    <th className="text-center px-6 py-4 font-semibold">IVR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {t.comparison.map((row, i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">{row.robot}</td>
                      <td className="px-6 py-4 text-center text-red-600">{row.ivr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <Label>{t.faqTitle}</Label>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4">{t.faqTitle}</h2>
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-muted/20">
                  <AccordionTrigger className="py-4 font-semibold hover:text-primary">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 px-4 bg-gradient-to-r from-primary/10 to-blue-500/10 border-y border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.ctaSection}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.ctaDescription}</p>
            <Button size="lg" onClick={() => openDemo()} className="h-12 px-8 text-base">
              {t.tryButton}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
