"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Users,
  ArrowRight,
  Target,
  DollarSign,
  Play,
  PhoneCall,
  CheckCircle2,
  PhoneOff,
  Repeat,
  Frown,
  Brain,
  GraduationCap,
  Rocket,
  ArrowUpRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCTA } from "@/components/modals/cta-provider"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useTranslation, type Locale } from "@/lib/i18n/translations"

/* ================================================================== */
/*  Intersection Observer hook                                         */
/* ================================================================== */
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

/* ================================================================== */
/*  Reveal wrapper                                                     */
/* ================================================================== */
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

/* ================================================================== */
/*  Section label                                                      */
/* ================================================================== */
function Label({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "border-white/10 text-white/60" : "border-border text-muted-foreground"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-sky-400" : "bg-primary"}`} />
      {children}
    </div>
  )
}

/* ================================================================== */
/*  Translations for page content                                      */
/* ================================================================== */
const pageTranslations = {
  ru: {
    breadcrumb: { home: "Главная", solutions: "Решения", current: "Голосовой AI-менеджер" },
    hero: {
      badge: "Работает 24/7 без выходных",
      title1: "Голосовой AI-менеджер",
      title2: "по продажам",
      subtitle: "Принимает звонки, консультирует клиентов, создаёт сделки в CRM и никогда не пропускает заявки. Увеличивает конверсию в 2-3 раза.",
      cta1: "Попробовать бесплатно",
      cta2: "Послушать примеры",
      stats: {
        s1: { value: "0", label: "пропущенных звонков" },
        s2: { value: "2-3x", label: "рост конверсии" },
        s3: { value: "-70%", label: "расходы на ФОТ" },
        s4: { value: "24/7", label: "доступность" },
      },
    },
    problems: {
      label: "Проблемы и решения",
      title: "Почему компании теряют клиентов",
      subtitle: "Традиционный отдел продаж сталкивается с системными проблемами, которые AI-менеджер решает автоматически",
      items: [
        { title: "Пропущенные звонки", desc: "Клиенты не дозваниваются и уходят к конкурентам" },
        { title: "Долгая обработка", desc: "Менеджеры не успевают обработать всю базу" },
        { title: "CRM пустая", desc: "Данные теряются, сделки не фиксируются" },
        { title: "Длинный цикл", desc: "Нет повторных касаний и дожима клиентов" },
        { title: "Человеческий фактор", desc: "Усталость, настроение, больничные, ошибки" },
        { title: "Дорогой ФОТ", desc: "3-5 менеджеров = 1 AI, работающий без выходных" },
      ],
    },
    solutions: {
      items: [
        { problem: "Пропущенные звонки", solution: "0 пропусков", desc: "AI берёт трубку мгновенно. 24/7." },
        { problem: "Нет времени на прозвон", solution: "Авто-исходящие", desc: "AI сам прозванивает тёплую и холодную базы." },
        { problem: "CRM пустая", solution: "100% фиксация", desc: "Контакты, сделки, задачи — создаются автоматически." },
        { problem: "Длинный цикл", solution: "Авто-дожим", desc: "Звонки, напоминания, повторные касания." },
        { problem: "Медленный отклик", solution: "0.2 сек", desc: "Мгновенный ответ на любой звонок." },
        { problem: "Высокий ФОТ", solution: "-70%", desc: "Один AI закрывает объём 3-7 человек." },
      ],
    },
    process: {
      label: "Процесс внедрения",
      title: "Как мы запускаем AI-менеджера",
      subtitle: "От первой встречи до работающего AI — всего 3-5 недель. Погружаемся в ваш бизнес и создаём решение под вас.",
      steps: [
        { phase: "01", title: "Погружение в бизнес", duration: "1-2 недели", desc: "Изучаем ваши процессы, скрипты, продукты и болевые точки клиентов" },
        { phase: "02", title: "Проектирование", duration: "1 неделя", desc: "Разрабатываем сценарии диалогов и интеграции с вашими системами" },
        { phase: "03", title: "Обучение AI", duration: "1-2 недели", desc: "Обучаем AI всему, что знают ваши лучшие менеджеры" },
        { phase: "04", title: "Запуск", duration: "3-5 дней", desc: "Тестируем, дорабатываем и запускаем на реальные звонки" },
      ],
      durationLabel: "Срок:",
    },
    examples: {
      label: "Примеры звонков",
      title: "Послушайте, как AI продаёт",
      subtitle: "Реальные записи звонков AI-менеджера с клиентами из разных отраслей",
      items: [
        { title: "Строительные материалы", desc: "Входящий: расчёт кровли", industry: "B2B" },
        { title: "Недвижимость", desc: "Исходящий: запись на показ", industry: "Услуги" },
        { title: "Отель / Апарт-отель", desc: "Бронирование номера", industry: "HoReCa" },
        { title: "Интернет-магазин", desc: "Холодный прозвон базы", industry: "E-commerce" },
      ],
    },
    cases: {
      label: "Кейсы клиентов",
      title: "Результаты наших клиентов",
      subtitle: "Реальные истории внедрения AI-менеджера в разных отраслях",
      items: [
        { company: "Онлайн-школа английского", industry: "Образование", problem: "60% заявок терялись из-за нехватки менеджеров", results: ["+280%", "обработанных заявок"] },
        { company: "Логистическая компания", industry: "Логистика", problem: "Операторы не справлялись в пиковые часы", results: ["+400%", "обработанных звонков"] },
        { company: "Сеть стоматологий", industry: "Медицина", problem: "Администраторы 70% времени на телефоне", results: ["+60%", "записей на приём"] },
      ],
    },
    integrations: {
      label: "Интеграции",
      title: "Работаем с вашими системами",
      subtitle: "Бесшовная интеграция с популярными CRM и мессенджерами",
    },
    faq: {
      label: "Частые вопросы",
      title: "Ответы на ваши вопросы",
      items: [
        { q: "Как быстро можно запустить AI-менеджера?", a: "Запуск занимает от нескольких дней до 2 недель в зависимости от сложности интеграций. Мы настраиваем AI под ваш бизнес, интегрируем с CRM и телефонией." },
        { q: "Может ли AI работать с моей CRM?", a: "Да, мы интегрируем AI с amoCRM, Bitrix24, HubSpot, retailCRM и любой другой системой через API." },
        { q: "Что если клиент просит живого человека?", a: "AI переключает на сотрудника в любой момент. Вы настраиваете правила переключения." },
        { q: "Сколько стоит минута разговора?", a: "От $0.05 до $0.15 за минуту в зависимости от модели AI. Первоначальная настройка — от $2,000." },
        { q: "Можно протестировать перед покупкой?", a: "Да! Мы предоставляем демо с вашим сценарием. Вы послушаете, как AI общается с клиентами." },
        { q: "AI может выставлять счета?", a: "Да, через интеграцию с 1С или биллинговой системой. Также отправляет КП и договоры." },
      ],
    },
    cta: {
      label: "Готовы начать?",
      title: "Запустите AI-менеджера уже сегодня",
      subtitle: "Получите бесплатную консультацию и демо с вашим сценарием",
      button: "Получить бесплатную консультацию",
    },
  },
  en: {
    breadcrumb: { home: "Home", solutions: "Solutions", current: "Voice AI Manager" },
    hero: {
      badge: "Works 24/7 without breaks",
      title1: "Voice AI Manager",
      title2: "for Sales",
      subtitle: "Answers calls, consults clients, creates deals in CRM and never misses leads. Increases conversion 2-3x.",
      cta1: "Try for free",
      cta2: "Listen to examples",
      stats: {
        s1: { value: "0", label: "missed calls" },
        s2: { value: "2-3x", label: "conversion growth" },
        s3: { value: "-70%", label: "payroll costs" },
        s4: { value: "24/7", label: "availability" },
      },
    },
    problems: {
      label: "Problems & Solutions",
      title: "Why companies lose customers",
      subtitle: "Traditional sales departments face systemic problems that AI managers solve automatically",
      items: [
        { title: "Missed calls", desc: "Customers can't reach you and go to competitors" },
        { title: "Slow processing", desc: "Managers can't handle the entire database" },
        { title: "Empty CRM", desc: "Data gets lost, deals aren't recorded" },
        { title: "Long cycle", desc: "No follow-ups and customer nurturing" },
        { title: "Human factor", desc: "Fatigue, mood, sick days, mistakes" },
        { title: "Expensive payroll", desc: "3-5 managers = 1 AI working without breaks" },
      ],
    },
    solutions: {
      items: [
        { problem: "Missed calls", solution: "0 missed", desc: "AI answers instantly. 24/7." },
        { problem: "No time for calls", solution: "Auto-outbound", desc: "AI calls warm and cold leads automatically." },
        { problem: "Empty CRM", solution: "100% capture", desc: "Contacts, deals, tasks — created automatically." },
        { problem: "Long cycle", solution: "Auto-nurture", desc: "Calls, reminders, follow-ups." },
        { problem: "Slow response", solution: "0.2 sec", desc: "Instant response to any call." },
        { problem: "High payroll", solution: "-70%", desc: "One AI handles 3-7 people's workload." },
      ],
    },
    process: {
      label: "Implementation Process",
      title: "How we launch the AI Manager",
      subtitle: "From first meeting to working AI — just 3-5 weeks. We dive into your business and create a custom solution.",
      steps: [
        { phase: "01", title: "Business Discovery", duration: "1-2 weeks", desc: "We study your processes, scripts, products and customer pain points" },
        { phase: "02", title: "Design", duration: "1 week", desc: "We develop dialogue scenarios and integrations with your systems" },
        { phase: "03", title: "AI Training", duration: "1-2 weeks", desc: "We train AI with everything your best managers know" },
        { phase: "04", title: "Launch", duration: "3-5 days", desc: "We test, refine and launch on real calls" },
      ],
      durationLabel: "Timeline:",
    },
    examples: {
      label: "Call Examples",
      title: "Listen to how AI sells",
      subtitle: "Real call recordings of AI manager with clients from different industries",
      items: [
        { title: "Construction Materials", desc: "Inbound: roof calculation", industry: "B2B" },
        { title: "Real Estate", desc: "Outbound: showing appointment", industry: "Services" },
        { title: "Hotel / Apart-Hotel", desc: "Room booking", industry: "HoReCa" },
        { title: "Online Store", desc: "Cold calling database", industry: "E-commerce" },
      ],
    },
    cases: {
      label: "Case Studies",
      title: "Our clients' results",
      subtitle: "Real stories of AI manager implementation across industries",
      items: [
        { company: "Online English School", industry: "Education", problem: "60% of leads were lost due to lack of managers", results: ["+280%", "processed leads"] },
        { company: "Logistics Company", industry: "Logistics", problem: "Operators couldn't handle peak hours", results: ["+400%", "processed calls"] },
        { company: "Dental Clinic Chain", industry: "Healthcare", problem: "Administrators spent 70% of time on phone", results: ["+60%", "appointment bookings"] },
      ],
    },
    integrations: {
      label: "Integrations",
      title: "Works with your systems",
      subtitle: "Seamless integration with popular CRMs and messengers",
    },
    faq: {
      label: "FAQ",
      title: "Answers to your questions",
      items: [
        { q: "How quickly can you launch the AI manager?", a: "Launch takes from a few days to 2 weeks depending on integration complexity. We customize AI for your business, integrate with CRM and telephony." },
        { q: "Can AI work with my CRM?", a: "Yes, we integrate AI with amoCRM, Bitrix24, HubSpot, retailCRM and any other system via API." },
        { q: "What if a customer asks for a human?", a: "AI transfers to an employee at any moment. You configure the transfer rules." },
        { q: "How much does a minute of conversation cost?", a: "From $0.05 to $0.15 per minute depending on the AI model. Initial setup — from $2,000." },
        { q: "Can I test before buying?", a: "Yes! We provide a demo with your scenario. You'll hear how AI communicates with clients." },
        { q: "Can AI issue invoices?", a: "Yes, through integration with billing systems. Also sends proposals and contracts." },
      ],
    },
    cta: {
      label: "Ready to start?",
      title: "Launch your AI Manager today",
      subtitle: "Get a free consultation and demo with your scenario",
      button: "Get free consultation",
    },
  },
  es: {
    breadcrumb: { home: "Inicio", solutions: "Soluciones", current: "Gerente AI de Voz" },
    hero: {
      badge: "Funciona 24/7 sin descansos",
      title1: "Gerente AI de Voz",
      title2: "para Ventas",
      subtitle: "Atiende llamadas, asesora clientes, crea oportunidades en CRM y nunca pierde leads. Aumenta la conversion 2-3x.",
      cta1: "Probar gratis",
      cta2: "Escuchar ejemplos",
      stats: {
        s1: { value: "0", label: "llamadas perdidas" },
        s2: { value: "2-3x", label: "crecimiento conversion" },
        s3: { value: "-70%", label: "costos de nomina" },
        s4: { value: "24/7", label: "disponibilidad" },
      },
    },
    problems: {
      label: "Problemas y Soluciones",
      title: "Por que las empresas pierden clientes",
      subtitle: "Los departamentos de ventas tradicionales enfrentan problemas sistemicos que los gerentes AI resuelven automaticamente",
      items: [
        { title: "Llamadas perdidas", desc: "Los clientes no pueden contactarte y van a la competencia" },
        { title: "Procesamiento lento", desc: "Los gerentes no pueden manejar toda la base de datos" },
        { title: "CRM vacio", desc: "Los datos se pierden, las oportunidades no se registran" },
        { title: "Ciclo largo", desc: "Sin seguimientos ni nurturing de clientes" },
        { title: "Factor humano", desc: "Fatiga, humor, dias de enfermedad, errores" },
        { title: "Nomina costosa", desc: "3-5 gerentes = 1 AI trabajando sin descansos" },
      ],
    },
    solutions: {
      items: [
        { problem: "Llamadas perdidas", solution: "0 perdidas", desc: "AI responde instantaneamente. 24/7." },
        { problem: "Sin tiempo para llamar", solution: "Auto-salientes", desc: "AI llama leads calientes y frios automaticamente." },
        { problem: "CRM vacio", solution: "100% captura", desc: "Contactos, oportunidades, tareas — creados automaticamente." },
        { problem: "Ciclo largo", solution: "Auto-nurturing", desc: "Llamadas, recordatorios, seguimientos." },
        { problem: "Respuesta lenta", solution: "0.2 seg", desc: "Respuesta instantanea a cualquier llamada." },
        { problem: "Nomina alta", solution: "-70%", desc: "Un AI maneja la carga de 3-7 personas." },
      ],
    },
    process: {
      label: "Proceso de Implementacion",
      title: "Como lanzamos el Gerente AI",
      subtitle: "Desde la primera reunion hasta AI funcionando — solo 3-5 semanas. Nos sumergimos en tu negocio y creamos una solucion personalizada.",
      steps: [
        { phase: "01", title: "Descubrimiento", duration: "1-2 semanas", desc: "Estudiamos tus procesos, guiones, productos y puntos de dolor del cliente" },
        { phase: "02", title: "Diseno", duration: "1 semana", desc: "Desarrollamos escenarios de dialogo e integraciones con tus sistemas" },
        { phase: "03", title: "Entrenamiento AI", duration: "1-2 semanas", desc: "Entrenamos AI con todo lo que saben tus mejores gerentes" },
        { phase: "04", title: "Lanzamiento", duration: "3-5 dias", desc: "Probamos, refinamos y lanzamos en llamadas reales" },
      ],
      durationLabel: "Plazo:",
    },
    examples: {
      label: "Ejemplos de Llamadas",
      title: "Escucha como AI vende",
      subtitle: "Grabaciones reales de llamadas del gerente AI con clientes de diferentes industrias",
      items: [
        { title: "Materiales de Construccion", desc: "Entrante: calculo de techo", industry: "B2B" },
        { title: "Bienes Raices", desc: "Saliente: cita para mostrar", industry: "Servicios" },
        { title: "Hotel / Apart-Hotel", desc: "Reserva de habitacion", industry: "HoReCa" },
        { title: "Tienda Online", desc: "Llamadas en frio a base de datos", industry: "E-commerce" },
      ],
    },
    cases: {
      label: "Casos de Exito",
      title: "Resultados de nuestros clientes",
      subtitle: "Historias reales de implementacion del gerente AI en diferentes industrias",
      items: [
        { company: "Escuela de Ingles Online", industry: "Educacion", problem: "60% de leads se perdian por falta de gerentes", results: ["+280%", "leads procesados"] },
        { company: "Empresa de Logistica", industry: "Logistica", problem: "Operadores no podian manejar horas pico", results: ["+400%", "llamadas procesadas"] },
        { company: "Cadena de Clinicas Dentales", industry: "Salud", problem: "Administradores pasaban 70% del tiempo en telefono", results: ["+60%", "reservas de citas"] },
      ],
    },
    integrations: {
      label: "Integraciones",
      title: "Funciona con tus sistemas",
      subtitle: "Integracion perfecta con CRMs y mensajeros populares",
    },
    faq: {
      label: "Preguntas Frecuentes",
      title: "Respuestas a tus preguntas",
      items: [
        { q: "Que tan rapido pueden lanzar el gerente AI?", a: "El lanzamiento toma desde unos dias hasta 2 semanas dependiendo de la complejidad de integracion. Personalizamos AI para tu negocio, integramos con CRM y telefonia." },
        { q: "Puede AI trabajar con mi CRM?", a: "Si, integramos AI con amoCRM, Bitrix24, HubSpot, retailCRM y cualquier otro sistema via API." },
        { q: "Que pasa si un cliente pide un humano?", a: "AI transfiere a un empleado en cualquier momento. Tu configuras las reglas de transferencia." },
        { q: "Cuanto cuesta un minuto de conversacion?", a: "Desde $0.05 hasta $0.15 por minuto dependiendo del modelo AI. Configuracion inicial — desde $2,000." },
        { q: "Puedo probar antes de comprar?", a: "Si! Proporcionamos una demo con tu escenario. Escucharas como AI se comunica con clientes." },
        { q: "Puede AI emitir facturas?", a: "Si, a traves de integracion con sistemas de facturacion. Tambien envia propuestas y contratos." },
      ],
    },
    cta: {
      label: "Listo para empezar?",
      title: "Lanza tu Gerente AI hoy",
      subtitle: "Obtén una consulta gratuita y demo con tu escenario",
      button: "Obtener consulta gratuita",
    },
  },
  de: {
    breadcrumb: { home: "Startseite", solutions: "Losungen", current: "Sprach-KI-Manager" },
    hero: {
      badge: "Arbeitet 24/7 ohne Pausen",
      title1: "Sprach-KI-Manager",
      title2: "fur Vertrieb",
      subtitle: "Beantwortet Anrufe, berat Kunden, erstellt Deals im CRM und verpasst nie Leads. Steigert Conversion 2-3x.",
      cta1: "Kostenlos testen",
      cta2: "Beispiele anhoren",
      stats: {
        s1: { value: "0", label: "verpasste Anrufe" },
        s2: { value: "2-3x", label: "Conversion-Wachstum" },
        s3: { value: "-70%", label: "Lohnkosten" },
        s4: { value: "24/7", label: "Verfugbarkeit" },
      },
    },
    problems: {
      label: "Probleme & Losungen",
      title: "Warum Unternehmen Kunden verlieren",
      subtitle: "Traditionelle Vertriebsabteilungen stehen vor systemischen Problemen, die KI-Manager automatisch losen",
      items: [
        { title: "Verpasste Anrufe", desc: "Kunden erreichen Sie nicht und gehen zur Konkurrenz" },
        { title: "Langsame Bearbeitung", desc: "Manager konnen die gesamte Datenbank nicht bewaltigen" },
        { title: "Leeres CRM", desc: "Daten gehen verloren, Deals werden nicht erfasst" },
        { title: "Langer Zyklus", desc: "Keine Follow-ups und Kundenpflege" },
        { title: "Menschlicher Faktor", desc: "Mudigkeit, Stimmung, Krankheitstage, Fehler" },
        { title: "Teure Lohnkosten", desc: "3-5 Manager = 1 KI, die ohne Pausen arbeitet" },
      ],
    },
    solutions: {
      items: [
        { problem: "Verpasste Anrufe", solution: "0 verpasst", desc: "KI antwortet sofort. 24/7." },
        { problem: "Keine Zeit fur Anrufe", solution: "Auto-Outbound", desc: "KI ruft warme und kalte Leads automatisch an." },
        { problem: "Leeres CRM", solution: "100% Erfassung", desc: "Kontakte, Deals, Aufgaben — automatisch erstellt." },
        { problem: "Langer Zyklus", solution: "Auto-Nurturing", desc: "Anrufe, Erinnerungen, Follow-ups." },
        { problem: "Langsame Antwort", solution: "0,2 Sek", desc: "Sofortige Antwort auf jeden Anruf." },
        { problem: "Hohe Lohnkosten", solution: "-70%", desc: "Eine KI bewaltigt die Arbeit von 3-7 Personen." },
      ],
    },
    process: {
      label: "Implementierungsprozess",
      title: "Wie wir den KI-Manager starten",
      subtitle: "Vom ersten Meeting bis zur funktionierenden KI — nur 3-5 Wochen. Wir tauchen in Ihr Geschaft ein und erstellen eine massgeschneiderte Losung.",
      steps: [
        { phase: "01", title: "Business Discovery", duration: "1-2 Wochen", desc: "Wir studieren Ihre Prozesse, Skripte, Produkte und Kundenschmerzpunkte" },
        { phase: "02", title: "Design", duration: "1 Woche", desc: "Wir entwickeln Dialogszenarien und Integrationen mit Ihren Systemen" },
        { phase: "03", title: "KI-Training", duration: "1-2 Wochen", desc: "Wir trainieren KI mit allem, was Ihre besten Manager wissen" },
        { phase: "04", title: "Start", duration: "3-5 Tage", desc: "Wir testen, verfeinern und starten mit echten Anrufen" },
      ],
      durationLabel: "Zeitrahmen:",
    },
    examples: {
      label: "Anrufbeispiele",
      title: "Horen Sie, wie KI verkauft",
      subtitle: "Echte Anrufaufnahmen des KI-Managers mit Kunden aus verschiedenen Branchen",
      items: [
        { title: "Baumaterialien", desc: "Eingehend: Dachberechnung", industry: "B2B" },
        { title: "Immobilien", desc: "Ausgehend: Besichtigungstermin", industry: "Dienstleistungen" },
        { title: "Hotel / Apart-Hotel", desc: "Zimmerbuchung", industry: "HoReCa" },
        { title: "Online-Shop", desc: "Kaltakquise Datenbank", industry: "E-Commerce" },
      ],
    },
    cases: {
      label: "Fallstudien",
      title: "Ergebnisse unserer Kunden",
      subtitle: "Echte Geschichten der KI-Manager-Implementierung in verschiedenen Branchen",
      items: [
        { company: "Online-Englisch-Schule", industry: "Bildung", problem: "60% der Leads gingen durch Managermangel verloren", results: ["+280%", "bearbeitete Leads"] },
        { company: "Logistikunternehmen", industry: "Logistik", problem: "Operatoren konnten Spitzenzeiten nicht bewaltigen", results: ["+400%", "bearbeitete Anrufe"] },
        { company: "Zahnklinik-Kette", industry: "Gesundheit", problem: "Administratoren verbrachten 70% der Zeit am Telefon", results: ["+60%", "Terminbuchungen"] },
      ],
    },
    integrations: {
      label: "Integrationen",
      title: "Funktioniert mit Ihren Systemen",
      subtitle: "Nahtlose Integration mit beliebten CRMs und Messengern",
    },
    faq: {
      label: "Haufige Fragen",
      title: "Antworten auf Ihre Fragen",
      items: [
        { q: "Wie schnell konnen Sie den KI-Manager starten?", a: "Der Start dauert von wenigen Tagen bis zu 2 Wochen je nach Integrationskomplexitat. Wir passen KI an Ihr Geschaft an, integrieren mit CRM und Telefonie." },
        { q: "Kann KI mit meinem CRM arbeiten?", a: "Ja, wir integrieren KI mit amoCRM, Bitrix24, HubSpot, retailCRM und jedem anderen System uber API." },
        { q: "Was wenn ein Kunde einen Menschen mochte?", a: "KI ubertragt jederzeit an einen Mitarbeiter. Sie konfigurieren die Ubertragungsregeln." },
        { q: "Was kostet eine Minute Gesprach?", a: "Von $0,05 bis $0,15 pro Minute je nach KI-Modell. Ersteinrichtung — ab $2.000." },
        { q: "Kann ich vor dem Kauf testen?", a: "Ja! Wir bieten eine Demo mit Ihrem Szenario. Sie horen, wie KI mit Kunden kommuniziert." },
        { q: "Kann KI Rechnungen ausstellen?", a: "Ja, durch Integration mit Abrechnungssystemen. Sendet auch Angebote und Vertrage." },
      ],
    },
    cta: {
      label: "Bereit zu starten?",
      title: "Starten Sie Ihren KI-Manager heute",
      subtitle: "Erhalten Sie eine kostenlose Beratung und Demo mit Ihrem Szenario",
      button: "Kostenlose Beratung erhalten",
    },
  },
  nl: {
    breadcrumb: { home: "Home", solutions: "Oplossingen", current: "Stem AI Manager" },
    hero: {
      badge: "Werkt 24/7 zonder pauzes",
      title1: "Stem AI Manager",
      title2: "voor Verkoop",
      subtitle: "Beantwoordt oproepen, adviseert klanten, maakt deals in CRM en mist nooit leads. Verhoogt conversie 2-3x.",
      cta1: "Gratis proberen",
      cta2: "Voorbeelden beluisteren",
      stats: {
        s1: { value: "0", label: "gemiste oproepen" },
        s2: { value: "2-3x", label: "conversiegroei" },
        s3: { value: "-70%", label: "loonkosten" },
        s4: { value: "24/7", label: "beschikbaarheid" },
      },
    },
    problems: {
      label: "Problemen & Oplossingen",
      title: "Waarom bedrijven klanten verliezen",
      subtitle: "Traditionele verkoopafdeling kampen met systemische problemen die AI-managers automatisch oplossen",
      items: [
        { title: "Gemiste oproepen", desc: "Klanten kunnen u niet bereiken en gaan naar concurrenten" },
        { title: "Trage verwerking", desc: "Managers kunnen de hele database niet aan" },
        { title: "Leeg CRM", desc: "Gegevens raken verloren, deals worden niet geregistreerd" },
        { title: "Lange cyclus", desc: "Geen follow-ups en klantenwerving" },
        { title: "Menselijke factor", desc: "Vermoeidheid, stemming, ziektedagen, fouten" },
        { title: "Dure loonkosten", desc: "3-5 managers = 1 AI die zonder pauzes werkt" },
      ],
    },
    solutions: {
      items: [
        { problem: "Gemiste oproepen", solution: "0 gemist", desc: "AI antwoordt direct. 24/7." },
        { problem: "Geen tijd voor bellen", solution: "Auto-uitgaand", desc: "AI belt warme en koude leads automatisch." },
        { problem: "Leeg CRM", solution: "100% vastlegging", desc: "Contacten, deals, taken — automatisch aangemaakt." },
        { problem: "Lange cyclus", solution: "Auto-nurturing", desc: "Oproepen, herinneringen, follow-ups." },
        { problem: "Trage reactie", solution: "0,2 sec", desc: "Directe reactie op elke oproep." },
        { problem: "Hoge loonkosten", solution: "-70%", desc: "Een AI verwerkt de werklast van 3-7 mensen." },
      ],
    },
    process: {
      label: "Implementatieproces",
      title: "Hoe we de AI Manager lanceren",
      subtitle: "Van eerste meeting tot werkende AI — slechts 3-5 weken. We duiken in uw bedrijf en creeren een oplossing op maat.",
      steps: [
        { phase: "01", title: "Business Discovery", duration: "1-2 weken", desc: "We bestuderen uw processen, scripts, producten en klantpijnpunten" },
        { phase: "02", title: "Ontwerp", duration: "1 week", desc: "We ontwikkelen dialoogscenario's en integraties met uw systemen" },
        { phase: "03", title: "AI Training", duration: "1-2 weken", desc: "We trainen AI met alles wat uw beste managers weten" },
        { phase: "04", title: "Lancering", duration: "3-5 dagen", desc: "We testen, verfijnen en lanceren op echte oproepen" },
      ],
      durationLabel: "Tijdlijn:",
    },
    examples: {
      label: "Oproepvoorbeelden",
      title: "Luister hoe AI verkoopt",
      subtitle: "Echte oproepopnames van AI-manager met klanten uit verschillende sectoren",
      items: [
        { title: "Bouwmaterialen", desc: "Inkomend: dakberekening", industry: "B2B" },
        { title: "Vastgoed", desc: "Uitgaand: bezichtigingsafspraak", industry: "Diensten" },
        { title: "Hotel / Apart-Hotel", desc: "Kamerboeking", industry: "HoReCa" },
        { title: "Webwinkel", desc: "Koud bellen database", industry: "E-commerce" },
      ],
    },
    cases: {
      label: "Casestudies",
      title: "Resultaten van onze klanten",
      subtitle: "Echte verhalen van AI-manager implementatie in verschillende sectoren",
      items: [
        { company: "Online Engelse School", industry: "Onderwijs", problem: "60% van leads ging verloren door gebrek aan managers", results: ["+280%", "verwerkte leads"] },
        { company: "Logistiek Bedrijf", industry: "Logistiek", problem: "Operators konden piekuren niet aan", results: ["+400%", "verwerkte oproepen"] },
        { company: "Tandkliniek Keten", industry: "Gezondheidszorg", problem: "Administrators besteedden 70% van tijd aan telefoon", results: ["+60%", "afspraakboekingen"] },
      ],
    },
    integrations: {
      label: "Integraties",
      title: "Werkt met uw systemen",
      subtitle: "Naadloze integratie met populaire CRM's en messengers",
    },
    faq: {
      label: "Veelgestelde Vragen",
      title: "Antwoorden op uw vragen",
      items: [
        { q: "Hoe snel kunt u de AI-manager lanceren?", a: "Lancering duurt van enkele dagen tot 2 weken afhankelijk van integratiecomplexiteit. We passen AI aan voor uw bedrijf, integreren met CRM en telefonie." },
        { q: "Kan AI met mijn CRM werken?", a: "Ja, we integreren AI met amoCRM, Bitrix24, HubSpot, retailCRM en elk ander systeem via API." },
        { q: "Wat als een klant een mens wil?", a: "AI schakelt op elk moment over naar een medewerker. U configureert de overdrachtsregels." },
        { q: "Wat kost een minuut gesprek?", a: "Van $0,05 tot $0,15 per minuut afhankelijk van het AI-model. Eerste setup — vanaf $2.000." },
        { q: "Kan ik testen voor aankoop?", a: "Ja! We bieden een demo met uw scenario. U hoort hoe AI met klanten communiceert." },
        { q: "Kan AI facturen uitreiken?", a: "Ja, door integratie met facturatiesystemen. Stuurt ook voorstellen en contracten." },
      ],
    },
    cta: {
      label: "Klaar om te beginnen?",
      title: "Lanceer uw AI Manager vandaag",
      subtitle: "Krijg een gratis consultatie en demo met uw scenario",
      button: "Gratis consultatie aanvragen",
    },
  },
  fr: {
    breadcrumb: { home: "Accueil", solutions: "Solutions", current: "Manager IA Vocal" },
    hero: {
      badge: "Fonctionne 24/7 sans pause",
      title1: "Manager IA Vocal",
      title2: "pour les Ventes",
      subtitle: "Repond aux appels, conseille les clients, cree des affaires dans le CRM et ne manque jamais de leads. Augmente la conversion 2-3x.",
      cta1: "Essayer gratuitement",
      cta2: "Ecouter les exemples",
      stats: {
        s1: { value: "0", label: "appels manques" },
        s2: { value: "2-3x", label: "croissance conversion" },
        s3: { value: "-70%", label: "couts salariaux" },
        s4: { value: "24/7", label: "disponibilite" },
      },
    },
    problems: {
      label: "Problemes & Solutions",
      title: "Pourquoi les entreprises perdent des clients",
      subtitle: "Les departements commerciaux traditionnels font face a des problemes systemiques que les managers IA resolvent automatiquement",
      items: [
        { title: "Appels manques", desc: "Les clients ne peuvent pas vous joindre et vont chez les concurrents" },
        { title: "Traitement lent", desc: "Les managers ne peuvent pas gerer toute la base de donnees" },
        { title: "CRM vide", desc: "Les donnees se perdent, les affaires ne sont pas enregistrees" },
        { title: "Cycle long", desc: "Pas de suivis ni de nurturing client" },
        { title: "Facteur humain", desc: "Fatigue, humeur, jours de maladie, erreurs" },
        { title: "Masse salariale couteuse", desc: "3-5 managers = 1 IA travaillant sans pause" },
      ],
    },
    solutions: {
      items: [
        { problem: "Appels manques", solution: "0 manque", desc: "IA repond instantanement. 24/7." },
        { problem: "Pas de temps pour appeler", solution: "Auto-sortant", desc: "IA appelle automatiquement les leads chauds et froids." },
        { problem: "CRM vide", solution: "100% capture", desc: "Contacts, affaires, taches — crees automatiquement." },
        { problem: "Cycle long", solution: "Auto-nurturing", desc: "Appels, rappels, suivis." },
        { problem: "Reponse lente", solution: "0,2 sec", desc: "Reponse instantanee a tout appel." },
        { problem: "Masse salariale elevee", solution: "-70%", desc: "Une IA gere la charge de 3-7 personnes." },
      ],
    },
    process: {
      label: "Processus d'Implementation",
      title: "Comment nous lancons le Manager IA",
      subtitle: "De la premiere reunion a l'IA fonctionnelle — seulement 3-5 semaines. Nous plongeons dans votre entreprise et creons une solution sur mesure.",
      steps: [
        { phase: "01", title: "Decouverte Business", duration: "1-2 semaines", desc: "Nous etudions vos processus, scripts, produits et points de douleur clients" },
        { phase: "02", title: "Conception", duration: "1 semaine", desc: "Nous developpons des scenarios de dialogue et des integrations avec vos systemes" },
        { phase: "03", title: "Formation IA", duration: "1-2 semaines", desc: "Nous formons l'IA avec tout ce que savent vos meilleurs managers" },
        { phase: "04", title: "Lancement", duration: "3-5 jours", desc: "Nous testons, affinons et lancons sur de vrais appels" },
      ],
      durationLabel: "Delai:",
    },
    examples: {
      label: "Exemples d'Appels",
      title: "Ecoutez comment l'IA vend",
      subtitle: "Enregistrements reels d'appels du manager IA avec des clients de differents secteurs",
      items: [
        { title: "Materiaux de Construction", desc: "Entrant: calcul de toiture", industry: "B2B" },
        { title: "Immobilier", desc: "Sortant: rendez-vous de visite", industry: "Services" },
        { title: "Hotel / Apart-Hotel", desc: "Reservation de chambre", industry: "HoReCa" },
        { title: "Boutique en Ligne", desc: "Appels a froid base de donnees", industry: "E-commerce" },
      ],
    },
    cases: {
      label: "Etudes de Cas",
      title: "Resultats de nos clients",
      subtitle: "Histoires reelles d'implementation du manager IA dans differents secteurs",
      items: [
        { company: "Ecole d'Anglais en Ligne", industry: "Education", problem: "60% des leads etaient perdus par manque de managers", results: ["+280%", "leads traites"] },
        { company: "Entreprise de Logistique", industry: "Logistique", problem: "Les operateurs ne pouvaient pas gerer les heures de pointe", results: ["+400%", "appels traites"] },
        { company: "Chaine de Cliniques Dentaires", industry: "Sante", problem: "Les administrateurs passaient 70% du temps au telephone", results: ["+60%", "reservations de rendez-vous"] },
      ],
    },
    integrations: {
      label: "Integrations",
      title: "Fonctionne avec vos systemes",
      subtitle: "Integration transparente avec les CRM et messageries populaires",
    },
    faq: {
      label: "FAQ",
      title: "Reponses a vos questions",
      items: [
        { q: "Combien de temps pour lancer le manager IA?", a: "Le lancement prend de quelques jours a 2 semaines selon la complexite d'integration. Nous personnalisons l'IA pour votre entreprise, integrons avec CRM et telephonie." },
        { q: "L'IA peut-elle fonctionner avec mon CRM?", a: "Oui, nous integrons l'IA avec amoCRM, Bitrix24, HubSpot, retailCRM et tout autre systeme via API." },
        { q: "Et si un client demande un humain?", a: "L'IA transfere a un employe a tout moment. Vous configurez les regles de transfert." },
        { q: "Combien coute une minute de conversation?", a: "De 0,05$ a 0,15$ par minute selon le modele IA. Configuration initiale — a partir de 2 000$." },
        { q: "Puis-je tester avant d'acheter?", a: "Oui! Nous fournissons une demo avec votre scenario. Vous entendrez comment l'IA communique avec les clients." },
        { q: "L'IA peut-elle emettre des factures?", a: "Oui, par integration avec les systemes de facturation. Envoie egalement des propositions et contrats." },
      ],
    },
    cta: {
      label: "Pret a commencer?",
      title: "Lancez votre Manager IA aujourd'hui",
      subtitle: "Obtenez une consultation gratuite et une demo avec votre scenario",
      button: "Obtenir une consultation gratuite",
    },
  },
}

/* ================================================================== */
/*  Props                                                              */
/* ================================================================== */
interface VoiceSalesManagerClientPageProps {
  locale: Locale
}

/* ================================================================== */
/*  Main component                                                     */
/* ================================================================== */
export function VoiceSalesManagerClientPage({ locale }: VoiceSalesManagerClientPageProps) {
  const { openModal } = useCTA()
  const t = pageTranslations[locale] || pageTranslations.ru

  const problemIcons = [PhoneOff, Clock, Target, Repeat, Frown, DollarSign]
  const processIcons = [Users, Brain, GraduationCap, Rocket]

  const integrations = [
    { name: "amoCRM", logo: "/images/67cbfeaf-a5fb-4c38-ae6d.jpeg" },
    { name: "Bitrix24", logo: "/images/9af7d4d0-2a0f-4980-a59b.jpeg" },
    { name: "Telegram", logo: "/images/305c48f2-2bd0-4708-8ce9.jpeg" },
    { name: "WhatsApp", logo: "/images/49c7178f-6604-4243-a6cd.jpeg" },
  ]

  return (
    <div className="bg-background overflow-x-hidden">

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative flex min-h-[90svh] flex-col justify-center overflow-hidden bg-[#060a16]">
        <div className="absolute inset-0">
          <Image src="/ai-voice-assistant-business-sales-call-center-mode.jpg" alt="" fill className="object-cover opacity-30 mix-blend-lighten" priority />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(56,130,255,.07),transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060a16]/30 via-[#060a16]/60 to-[#060a16]" />
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:pt-40 lg:pb-24">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/40">
            <Link href={`/${locale}`} className="hover:text-white/60 transition-colors">{t.breadcrumb.home}</Link>
            <span>/</span>
            <Link href={`/${locale}/solutions`} className="hover:text-white/60 transition-colors">{t.breadcrumb.solutions}</Link>
            <span>/</span>
            <span className="text-white/70">{t.breadcrumb.current}</span>
          </nav>

          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-white/70">{t.hero.badge}</span>
            </div>
          </div>

          <h1 className="mx-auto max-w-[920px] text-center text-balance text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] animate-fade-in-up">
            {t.hero.title1}{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-center text-pretty text-[1.125rem] leading-[1.7] text-white/50 animate-fade-in-up" style={{ animationDelay: "0.12s" }}>
            {t.hero.subtitle}
          </p>

          <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
            <Button size="lg" className="h-[52px] rounded-xl px-8 text-[15px] font-semibold shadow-[0_0_40px_rgba(56,130,255,.15)] hover:shadow-[0_0_60px_rgba(56,130,255,.25)] transition-all duration-300" onClick={() => openModal("consultation")}>
              <PhoneCall className="mr-2 h-4 w-4" />
              {t.hero.cta1}
            </Button>
            <Button size="lg" variant="outline" className="h-[52px] rounded-xl px-8 text-[15px] font-semibold border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.16] backdrop-blur-sm transition-all duration-300" asChild>
              <Link href="#examples">
                <Play className="mr-2 h-4 w-4" />
                {t.hero.cta2}
              </Link>
            </Button>
          </div>

          <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[t.hero.stats.s1, t.hero.stats.s2, t.hero.stats.s3, t.hero.stats.s4].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5 py-8 lg:py-10">
                <span className="text-[2rem] font-extrabold tracking-tight text-white sm:text-4xl">{s.value}</span>
                <span className="text-[13px] text-white/40">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROBLEMS & SOLUTIONS                                        */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{t.problems.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.problems.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.problems.subtitle}
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {t.problems.items.map((p, idx) => {
              const Icon = problemIcons[idx]
              return (
                <Reveal key={p.title} delay={idx * 80}>
                  <div className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:border-red-500/20 hover:shadow-[0_8px_40px_-12px_rgba(239,68,68,.06)]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/[0.07] text-red-500 ring-1 ring-red-500/[0.1]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-foreground">{p.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="flex justify-center mb-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ArrowRight className="h-8 w-8" />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.solutions.items.map((s, idx) => (
              <Reveal key={s.problem} delay={idx * 80}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:border-emerald-500/20 hover:shadow-[0_8px_40px_-12px_rgba(16,185,129,.06)]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-muted-foreground">{s.problem}</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/[0.1] text-emerald-500">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-extrabold text-foreground mb-2">{s.solution}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36 border-y border-border/50 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{t.process.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.process.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.process.subtitle}
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, idx) => {
              const Icon = processIcons[idx]
              return (
                <Reveal key={step.phase} delay={idx * 100}>
                  <div className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_8px_40px_-12px_rgba(56,130,255,.06)]">
                    <div className="absolute -top-3 left-8 flex h-6 items-center rounded-full bg-foreground px-3 text-[11px] font-bold text-background tracking-wider">
                      {step.phase}
                    </div>
                    
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.07] text-primary ring-1 ring-primary/[0.1] mb-5 mt-2">
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                    
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <span className="text-xs text-muted-foreground">{t.process.durationLabel} </span>
                      <span className="text-sm font-semibold">{step.duration}</span>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CALL EXAMPLES                                               */}
      {/* ============================================================ */}
      <section id="examples" className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{t.examples.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.examples.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.examples.subtitle}
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {t.examples.items.map((example, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group relative flex flex-col rounded-2xl border border-border/70 bg-card overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-[0_8px_40px_-12px_rgba(56,130,255,.06)]">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">{example.industry}</Badge>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">
                        <Play className="h-4 w-4 ml-0.5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                    <p className="text-sm text-muted-foreground">{example.desc}</p>
                  </div>
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-primary rounded-full transition-all duration-300" />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>0:00</span>
                      <span>2:15</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CASE STUDIES                                                */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36 border-y border-border/50 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{t.cases.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.cases.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.cases.subtitle}
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {t.cases.items.map((study, idx) => (
              <Reveal key={study.company} delay={idx * 100}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-[0_8px_60px_-12px_rgba(56,130,255,.08)]">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <Badge className="absolute bottom-4 left-4">{study.industry}</Badge>
                  </div>
                  
                  <div className="flex flex-col p-6 lg:p-8 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{study.company}</h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-6">{study.problem}</p>
                    
                    <div className="mt-auto pt-5 border-t border-border/50 flex items-center gap-3">
                      <span className="text-3xl font-extrabold text-primary">{study.results[0]}</span>
                      <span className="text-sm text-muted-foreground">{study.results[1]}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INTEGRATIONS                                                */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <Label>{t.integrations.label}</Label>
            <h2 className="text-balance text-2xl font-extrabold leading-[1.1] tracking-tight sm:text-3xl">
              {t.integrations.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              {t.integrations.subtitle}
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((i) => (
              <div key={i.name} className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/70 bg-card p-3 transition-all hover:border-primary/30 hover:shadow-lg">
                <Image src={i.logo} alt={i.name} width={40} height={40} className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36 border-t border-border/50">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <Label>{t.faq.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
              {t.faq.title}
            </h2>
          </Reveal>

          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.items.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="rounded-2xl border border-border/70 bg-card px-6 data-[state=open]:border-primary/30">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="relative py-28 lg:py-36 overflow-hidden bg-[#060a16]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(56,130,255,.1),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:72px_72px]" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <Label light>{t.cta.label}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/50">
              {t.cta.subtitle}
            </p>
            <div className="mt-10">
              <Button size="lg" className="h-14 rounded-xl px-10 text-base font-semibold shadow-[0_0_60px_rgba(56,130,255,.2)] hover:shadow-[0_0_80px_rgba(56,130,255,.3)] transition-all duration-300" onClick={() => openModal("consultation")}>
                <PhoneCall className="mr-2 h-5 w-5" />
                {t.cta.button}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
