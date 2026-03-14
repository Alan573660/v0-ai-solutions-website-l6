"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Brain,
  Calculator,
  Package,
  Truck,
  FileText,
  PhoneForwarded,
  UserCheck,
  ShoppingCart,
  Settings,
  Database,
  BarChart3,
  Building2,
  Clock,
  Zap,
  Shield,
  Globe,
  ArrowUpRight,
  ChevronRight,
  Cpu,
  Network,
  Layers,
  Calendar,
  TrendingUp,
  Headphones,
  MessageSquare,
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
    badge: "AI-решение для продаж",
    title: "Голосовой менеджер",
    titleHighlight: " по продажам",
    subtitle: "Полностью автоматизированная система продаж. От первого звонка до счёта за 30 секунд. Интеллектуальная система, которая думает, считает и закрывает сделки.",
    cta: "Запросить демонстрацию",
    ctaSecondary: "Послушать пример",
    stat1Value: "50+",
    stat1Label: "компаний доверяют",
    stat2Value: "98%",
    stat2Label: "успешных звонков",
    stat3Value: "24/7",
    stat3Label: "без выходных",
    stat4Value: "30 сек",
    stat4Label: "до счёта",
    
    benefitsTitle: "Почему это работает",
    benefitsDesc: "Система, которая не просто болтает, а реально думает и выполняет работу продавца",
    benefits: [
      { icon: "brain", title: "Естественный диалог", desc: "Ведёт беседу как опытный менеджер, не по скриптам" },
      { icon: "calculator", title: "Сложные расчёты", desc: "Моментально вычисляет площадь, объём, стоимость с коэффициентами" },
      { icon: "package", title: "Работает с каталогом", desc: "Знает все позиции, размеры, цены, сроки доставки" },
      { icon: "truck", title: "Рассчитывает доставку", desc: "Определяет вес, размеры, подбирает нужный транспорт" },
      { icon: "filetext", title: "Формирует документы", desc: "Создаёт счёта, договоры, спецификации автоматически" },
      { icon: "phoneforwarded", title: "Переадресует умно", desc: "Передаёт квалифицированного клиента в нужный отдел" },
      { icon: "usercheck", title: "Помнит клиента", desc: "Помнит предыдущие звонки и истории взаимодействия" },
      { icon: "shoppingcart", title: "Закрывает сделку", desc: "От момента звонка до получения денег - полностью автоматически" },
    ],

    timelineTitle: "Процесс внедрения",
    timelineDesc: "Каждый проект уникален. Сроки рассчитываются индивидуально",
    phases: [
      { title: "Анализ (1-2 недели)", desc: "Понимаем ваш процесс продаж, каталог, расценки, исключения" },
      { title: "Проектирование (1-2 недели)", desc: "Создаём сценарии диалогов, логику расчётов, интеграции" },
      { title: "Разработка (2-6 недель)", desc: "Обучаем AI на ваших данных, настраиваем интеграции" },
      { title: "Запуск (1 неделя)", desc: "Тестирование, обучение команды, запуск в production" },
    ],

    industryTitle: "Где это работает",
    industryDesc: "AI-менеджер применим практически в любой индустрии",
    industries: [
      { icon: "building2", name: "B2B оптовая торговля", desc: "Автоматизация входящих заказов" },
      { icon: "warehouse", name: "Производство", desc: "Расчёт сложных комплектаций" },
      { icon: "hardhat", name: "Строительство", desc: "Консультации и смета работ" },
      { icon: "building2", name: "Логистика", desc: "Расчёт доставки и сроков" },
      { icon: "barChart3", name: "Консалтинг", desc: "Квалификация и запись на встречи" },
      { icon: "globe", name: "E-commerce", desc: "Поддержка и доп. продажи" },
    ],

    casesTitle: "Кейсы",
    casesDesc: "Реальные результаты внедрения",
    cases: [
      { title: "Оптовая компания", subtitle: "Текстиль и ткани", metrics: "500+ звонков/день", result: "Экономия $50k/месяц на операторов" },
      { title: "Производство", subtitle: "Комплектующие", metrics: "1000+ расчётов/день", result: "Скорость обработки +300%" },
      { title: "Логистическая фирма", subtitle: "Доставка грузов", metrics: "200+ смет/день", result: "Конверсия звонков +45%" },
    ],

    faqTitle: "Частые вопросы",
    faqItems: [
      { q: "Чем это отличается от обычного бота?", a: "Обычные боты чи��ают скрипты. Наша система думает, анализирует, считает и принимает решения как умный продавец." },
      { q: "Сколько времени занимает внедрение?", a: "Зависит от сложности: стандартные проекты 1-2 месяца, сложные с индивидуальной логикой 4-6 месяцев." },
      { q: "Может ли закрыть сделку полностью?", a: "Да, в многих случаях система ведёт диалог, делает расчёты, выставляет счёт, получает оплату - всё автоматически." },
      { q: "Как интегрируется с нашей системой?", a: "Интегрируется с любой системой, у которой есть API: CRM, ERP, телефония, платёжные системы, бухгалтерия." },
      { q: "Это дорого?", a: "Стоимость зависит от сложности и объёма обработки. Обычно окупается за 1-2 месяца экономией на операторов." },
    ],

    ctaTitle: "Готовы трансформировать продажи?",
    ctaDesc: "Запустим AI-менеджера под ваш бизнес. Первая консультация — бесплатно.",
  },

  en: {
    badge: "AI sales solution",
    title: "Voice Sales",
    titleHighlight: " Manager",
    subtitle: "Fully automated sales system. From first call to invoice in 30 seconds. An intelligent system that thinks, calculates, and closes deals.",
    cta: "Request Demo",
    ctaSecondary: "Hear Example",
    stat1Value: "50+",
    stat1Label: "companies trust us",
    stat2Value: "98%",
    stat2Label: "successful calls",
    stat3Value: "24/7",
    stat3Label: "always working",
    stat4Value: "30 sec",
    stat4Label: "to invoice",
    
    benefitsTitle: "Why It Works",
    benefitsDesc: "A system that doesn't just chat, but actually thinks and does the sales job",
    benefits: [
      { icon: "brain", title: "Natural Dialogue", desc: "Converses like experienced sales manager, not following scripts" },
      { icon: "calculator", title: "Complex Calculations", desc: "Instantly calculates area, volume, cost with coefficients" },
      { icon: "package", title: "Works with Catalog", desc: "Knows all products, sizes, prices, delivery times" },
      { icon: "truck", title: "Calculates Shipping", desc: "Determines weight, dimensions, selects right transport" },
      { icon: "filetext", title: "Generates Documents", desc: "Creates invoices, contracts, specifications automatically" },
      { icon: "phoneforwarded", title: "Smart Routing", desc: "Routes qualified customers to right department" },
      { icon: "usercheck", title: "Remembers Customer", desc: "Recalls previous calls and interaction history" },
      { icon: "shoppingcart", title: "Closes Deal", desc: "From first call to payment - completely automated" },
    ],

    timelineTitle: "Implementation Process",
    timelineDesc: "Each project is unique. Timeline calculated individually",
    phases: [
      { title: "Analysis (1-2 weeks)", desc: "Understand sales process, catalog, pricing, exceptions" },
      { title: "Design (1-2 weeks)", desc: "Create dialogue scenarios, calculation logic, integrations" },
      { title: "Development (2-6 weeks)", desc: "Train AI on your data, configure integrations" },
      { title: "Launch (1 week)", desc: "Testing, team training, production deployment" },
    ],

    industryTitle: "Where It Works",
    industryDesc: "AI manager applies to virtually any industry",
    industries: [
      { icon: "building2", name: "B2B Wholesale", desc: "Automate incoming orders" },
      { icon: "warehouse", name: "Manufacturing", desc: "Calculate complex configurations" },
      { icon: "hardhat", name: "Construction", desc: "Consultations and estimates" },
      { icon: "building2", name: "Logistics", desc: "Calculate shipping and timeline" },
      { icon: "barChart3", name: "Consulting", desc: "Qualify and schedule meetings" },
      { icon: "globe", name: "E-commerce", desc: "Support and upselling" },
    ],

    casesTitle: "Cases",
    casesDesc: "Real implementation results",
    cases: [
      { title: "Wholesale Company", subtitle: "Textiles", metrics: "500+ calls/day", result: "Save $50k/month on operators" },
      { title: "Manufacturing", subtitle: "Components", metrics: "1000+ calculations/day", result: "Processing speed +300%" },
      { title: "Logistics Firm", subtitle: "Cargo delivery", metrics: "200+ quotes/day", result: "Call conversion +45%" },
    ],

    faqTitle: "FAQ",
    faqItems: [
      { q: "How is this different from a regular bot?", a: "Regular bots read scripts. Our system thinks, analyzes, calculates, and makes decisions like a smart sales manager." },
      { q: "How long does implementation take?", a: "Depends on complexity: standard projects 1-2 months, complex with custom logic 4-6 months." },
      { q: "Can it close a deal completely?", a: "Yes, in many cases the system conducts dialogue, does calculations, generates invoice, receives payment - all automatically." },
      { q: "How does it integrate with our system?", a: "Integrates with any system with API: CRM, ERP, telephony, payment systems, accounting." },
      { q: "Is it expensive?", a: "Cost depends on complexity and volume. Usually pays for itself in 1-2 months from operator savings." },
    ],

    ctaTitle: "Ready to Transform Sales?",
    ctaDesc: "Launch AI manager for your business. First consultation is free.",
  },

  es: {
    badge: "Solución IA de ventas",
    title: "Gerente de Ventas",
    titleHighlight: " por Voz",
    subtitle: "Sistema de ventas completamente automatizado. Del primer llamada a factura en 30 segundos. Un sistema inteligente que piensa, calcula y cierra ventas.",
    cta: "Solicitar Demo",
    ctaSecondary: "Escuchar Ejemplo",
    stat1Value: "50+",
    stat1Label: "empresas nos confían",
    stat2Value: "98%",
    stat2Label: "llamadas exitosas",
    stat3Value: "24/7",
    stat3Label: "siempre activo",
    stat4Value: "30 seg",
    stat4Label: "a factura",
    
    benefitsTitle: "Por Qué Funciona",
    benefitsDesc: "Un sistema que no solo charla, sino que realmente piensa y hace el trabajo de ventas",
    benefits: [
      { icon: "brain", title: "Diálogo Natural", desc: "Conversa como gerente experimentado, sin seguir guiones" },
      { icon: "calculator", title: "Cálculos Complejos", desc: "Calcula instantáneamente área, volumen, costo con coeficientes" },
      { icon: "package", title: "Trabaja con Catálogo", desc: "Conoce todos los productos, tamaños, precios, plazos" },
      { icon: "truck", title: "Calcula Envíos", desc: "Determina peso, dimensiones, selecciona transporte adecuado" },
      { icon: "filetext", title: "Genera Documentos", desc: "Crea facturas, contratos, especificaciones automáticamente" },
      { icon: "phoneforwarded", title: "Enrutamiento Inteligente", desc: "Dirige clientes calificados al departamento correcto" },
      { icon: "usercheck", title: "Recuerda Cliente", desc: "Recuerda llamadas anteriores e historial de interacción" },
      { icon: "shoppingcart", title: "Cierra Venta", desc: "Desde primer llamada hasta pago - completamente automatizado" },
    ],

    timelineTitle: "Proceso de Implementación",
    timelineDesc: "Cada proyecto es único. Cronograma calculado individualmente",
    phases: [
      { title: "Análisis (1-2 semanas)", desc: "Entender proceso de ventas, catálogo, precios, excepciones" },
      { title: "Diseño (1-2 semanas)", desc: "Crear escenarios de diálogo, lógica de cálculo, integraciones" },
      { title: "Desarrollo (2-6 semanas)", desc: "Entrenar IA con sus datos, configurar integraciones" },
      { title: "Lanzamiento (1 semana)", desc: "Pruebas, capacitación del equipo, despliegue en producción" },
    ],

    industryTitle: "Dónde Funciona",
    industryDesc: "El gerente IA se aplica a prácticamente cualquier industria",
    industries: [
      { icon: "building2", name: "B2B Mayorista", desc: "Automatizar pedidos entrantes" },
      { icon: "warehouse", name: "Fabricación", desc: "Calcular configuraciones complejas" },
      { icon: "hardhat", name: "Construcción", desc: "Consultas y presupuestos" },
      { icon: "building2", name: "Logística", desc: "Calcular envío y plazos" },
      { icon: "barChart3", name: "Consultoría", desc: "Calificar y agendar reuniones" },
      { icon: "globe", name: "E-commerce", desc: "Soporte y ventas adicionales" },
    ],

    casesTitle: "Casos",
    casesDesc: "Resultados reales de implementación",
    cases: [
      { title: "Empresa Mayorista", subtitle: "Textiles", metrics: "500+ llamadas/día", result: "Ahorrar $50k/mes en operadores" },
      { title: "Fabricación", subtitle: "Componentes", metrics: "1000+ cálculos/día", result: "Velocidad de procesamiento +300%" },
      { title: "Empresa Logística", subtitle: "Entrega de carga", metrics: "200+ cotizaciones/día", result: "Conversión de llamadas +45%" },
    ],

    faqTitle: "Preguntas Frecuentes",
    faqItems: [
      { q: "¿Cómo es diferente de un bot regular?", a: "Los bots regulares leen guiones. Nuestro sistema piensa, analiza, calcula y toma decisiones como un gerente de ventas inteligente." },
      { q: "¿Cuánto tiempo toma la implementación?", a: "Depende de la complejidad: proyectos estándar 1-2 meses, complejos con lógica personalizada 4-6 meses." },
      { q: "¿Puede cerrar una venta completamente?", a: "Sí, en muchos casos el sistema conduce diálogo, hace cálculos, genera factura, recibe pago - todo automáticamente." },
      { q: "¿Cómo se integra con nuestro sistema?", a: "Se integra con cualquier sistema con API: CRM, ERP, telefonía, sistemas de pago, contabilidad." },
      { q: "¿Es caro?", a: "El costo depende de la complejidad y volumen. Generalmente se paga en 1-2 meses con ahorros en operadores." },
    ],

    ctaTitle: "¿Listo para Transformar Ventas?",
    ctaDesc: "Lanza gerente IA para tu negocio. Primera consulta es gratis.",
  },

  de: {
    badge: "KI-Vertriebslösung",
    title: "Sprach-Vertriebs",
    titleHighlight: "manager",
    subtitle: "Vollständig automatisiertes Verkaufssystem. Vom ersten Anruf zur Rechnung in 30 Sekunden. Ein intelligentes System, das denkt, berechnet und Geschäfte abschließt.",
    cta: "Demo anfordern",
    ctaSecondary: "Beispiel anhören",
    stat1Value: "50+",
    stat1Label: "Unternehmen vertrauen uns",
    stat2Value: "98%",
    stat2Label: "erfolgreiche Anrufe",
    stat3Value: "24/7",
    stat3Label: "immer aktiv",
    stat4Value: "30 Sek",
    stat4Label: "zur Rechnung",
    
    benefitsTitle: "Warum es funktioniert",
    benefitsDesc: "Ein System, das nicht nur redet, sondern tatsächlich denkt und Verkaufsarbeit leistet",
    benefits: [
      { icon: "brain", title: "Natürlicher Dialog", desc: "Spricht wie erfahrener Verkäufer, nicht nach Skript" },
      { icon: "calculator", title: "Komplexe Berechnungen", desc: "Berechnet sofort Fläche, Volumen, Kosten mit Koeffizienten" },
      { icon: "package", title: "Arbeitet mit Katalog", desc: "Kennt alle Produkte, Größen, Preise, Lieferzeiten" },
      { icon: "truck", title: "Berechnet Versand", desc: "Bestimmt Gewicht, Dimensionen, wählt richtigen Transport" },
      { icon: "filetext", title: "Erstellt Dokumente", desc: "Erstellt Rechnungen, Verträge, Spezifikationen automatisch" },
      { icon: "phoneforwarded", title: "Intelligentes Routing", desc: "Leitet qualifizierte Kunden an richtige Abteilung weiter" },
      { icon: "usercheck", title: "Erinnert sich an Kunde", desc: "Merkt sich frühere Anrufe und Interaktionsverlauf" },
      { icon: "shoppingcart", title: "Schließt Geschäft", desc: "Vom ersten Anruf bis Zahlung - vollständig automatisiert" },
    ],

    timelineTitle: "Implementierungsprozess",
    timelineDesc: "Jedes Projekt ist einzigartig. Zeitrahmen wird individuell berechnet",
    phases: [
      { title: "Analyse (1-2 Wochen)", desc: "Verstehen Sie Verkaufsprozess, Katalog, Preise, Ausnahmen" },
      { title: "Design (1-2 Wochen)", desc: "Erstellen Sie Dialogszenarien, Berechnungslogik, Integrationen" },
      { title: "Entwicklung (2-6 Wochen)", desc: "Trainieren Sie KI mit Ihren Daten, konfigurieren Sie Integrationen" },
      { title: "Start (1 Woche)", desc: "Tests, Teamschulung, Produktionsbereitstellung" },
    ],

    industryTitle: "Wo es funktioniert",
    industryDesc: "KI-Manager gilt praktisch für jede Branche",
    industries: [
      { icon: "building2", name: "B2B Großhandel", desc: "Automatisieren Sie Eingangbestellungen" },
      { icon: "warehouse", name: "Fertigung", desc: "Berechnen Sie komplexe Konfigurationen" },
      { icon: "hardhat", name: "Konstruktion", desc: "Beratungen und Kostenvoranschläge" },
      { icon: "building2", name: "Logistik", desc: "Berechnen Sie Versand und Zeitrahmen" },
      { icon: "barChart3", name: "Beratung", desc: "Qualifizieren und Meetings planen" },
      { icon: "globe", name: "E-Commerce", desc: "Unterstützung und Zusatzverkäufe" },
    ],

    casesTitle: "Fälle",
    casesDesc: "Echte Implementierungsergebnisse",
    cases: [
      { title: "Großhandelsunternehmen", subtitle: "Textilien", metrics: "500+ Anrufe/Tag", result: "$50k/Monat bei Operatoren sparen" },
      { title: "Fertigung", subtitle: "Komponenten", metrics: "1000+ Berechnungen/Tag", result: "Verarbeitungsgeschwindigkeit +300%" },
      { title: "Logistikfirma", subtitle: "Frachtlieferung", metrics: "200+ Angebote/Tag", result: "Anrufkonvertierung +45%" },
    ],

    faqTitle: "Häufig gestellte Fragen",
    faqItems: [
      { q: "Wie ist das anders als ein normaler Bot?", a: "Normale Bots lesen Skripte. Unser System denkt, analysiert, berechnet und trifft Entscheidungen wie ein intelligenter Verkäufer." },
      { q: "Wie lange dauert die Implementierung?", a: "Hängt von der Komplexität ab: Standardprojekte 1-2 Monate, Komplexe mit benutzerdefinierter Logik 4-6 Monate." },
      { q: "Kann es einen Deal ganz abschließen?", a: "Ja, in vielen Fällen führt das System Dialoge, macht Berechnungen, erstellt Rechnung, erhält Zahlung - alles automatisch." },
      { q: "Wie wird es mit unserem System integriert?", a: "Integriert sich mit jedem System mit API: CRM, ERP, Telefonie, Zahlungssysteme, Buchhaltung." },
      { q: "Ist es teuer?", a: "Die Kosten hängen von Komplexität und Volumen ab. Amortisiert sich normalerweise in 1-2 Monaten durch Operator-Einsparungen." },
    ],

    ctaTitle: "Bereit, Vertrieb zu transformieren?",
    ctaDesc: "Starten Sie KI-Manager für Ihr Unternehmen. Erste Konsultation ist kostenlos.",
  },

  nl: {
    badge: "AI-verkoopoplossing",
    title: "Stem Verkoop",
    titleHighlight: "manager",
    subtitle: "Volledig geautomatiseerd verkoopsysteem. Van eerste gesprek tot factuur in 30 seconden. Een intelligent systeem dat denkt, berekent en deals sluit.",
    cta: "Demo aanvragen",
    ctaSecondary: "Voorbeeld beluisteren",
    stat1Value: "50+",
    stat1Label: "bedrijven vertrouwen ons",
    stat2Value: "98%",
    stat2Label: "succesvolle gesprekken",
    stat3Value: "24/7",
    stat3Label: "altijd actief",
    stat4Value: "30 sec",
    stat4Label: "naar factuur",
    
    benefitsTitle: "Waarom het werkt",
    benefitsDesc: "Een systeem dat niet alleen praat, maar echt denkt en verkoopswerk doet",
    benefits: [
      { icon: "brain", title: "Natuurlijke Dialoog", desc: "Spreekt als ervaren verkoper, niet volgens script" },
      { icon: "calculator", title: "Complexe Berekeningen", desc: "Berekent instant oppervlakte, volume, kosten met coëfficiënten" },
      { icon: "package", title: "Werkt met Catalogus", desc: "Kent alle producten, maten, prijzen, levertijden" },
      { icon: "truck", title: "Berekent Verzending", desc: "Bepaalt gewicht, afmetingen, selecteert juist transport" },
      { icon: "filetext", title: "Genereert Documenten", desc: "Maakt facturen, contracten, specificaties automatisch" },
      { icon: "phoneforwarded", title: "Slim Routering", desc: "Stuurt gekwalificeerde klanten naar juiste afdeling" },
      { icon: "usercheck", title: "Herinnert Klant", desc: "Onthoud vorige oproepen en interactiegeschiedenis" },
      { icon: "shoppingcart", title: "Sluit Deal", desc: "Van eerste oproep tot betaling - volledig geautomatiseerd" },
    ],

    timelineTitle: "Implementatieproces",
    timelineDesc: "Elk project is uniek. Tijdlijn individueel berekend",
    phases: [
      { title: "Analyse (1-2 weken)", desc: "Begrijp verkoopproces, catalogus, prijzen, uitzonderingen" },
      { title: "Design (1-2 weken)", desc: "Creëer dialoogscenario's, berekeningslogica, integraties" },
      { title: "Ontwikkeling (2-6 weken)", desc: "Train AI op uw gegevens, configureer integraties" },
      { title: "Launch (1 week)", desc: "Tests, teamtraining, productiedeploy" },
    ],

    industryTitle: "Waar het werkt",
    industryDesc: "AI-manager is toepasbaar op vrijwel elke branche",
    industries: [
      { icon: "building2", name: "B2B Groothandel", desc: "Automatiseer inkomende bestellingen" },
      { icon: "warehouse", name: "Fabricage", desc: "Bereken complexe configuraties" },
      { icon: "hardhat", name: "Constructie", desc: "Adviezen en offertes" },
      { icon: "building2", name: "Logistiek", desc: "Bereken verzending en timings" },
      { icon: "barChart3", name: "Advies", desc: "Kwalificeer en plan vergaderingen" },
      { icon: "globe", name: "E-commerce", desc: "Ondersteuning en upselling" },
    ],

    casesTitle: "Cases",
    casesDesc: "Echte implementatieresultaten",
    cases: [
      { title: "Groothandelsbedrijf", subtitle: "Textiel", metrics: "500+ gesprekken/dag", result: "Bespaar $50k/maand op operators" },
      { title: "Fabricage", subtitle: "Onderdelen", metrics: "1000+ berekeningen/dag", result: "Verwerkingssnelheid +300%" },
      { title: "Logistiekbedrijf", subtitle: "Vrachtlevering", metrics: "200+ offertes/dag", result: "Gesprekconversie +45%" },
    ],

    faqTitle: "Veelgestelde Vragen",
    faqItems: [
      { q: "Hoe is dit anders dan een normale bot?", a: "Normale bots lezen scripts. Ons systeem denkt, analyseert, berekent en neemt beslissingen als een slimme verkoper." },
      { q: "Hoe lang duurt implementatie?", a: "Hangt af van complexiteit: standaardprojecten 1-2 maanden, complexe met aangepaste logica 4-6 maanden." },
      { q: "Kan het een deal helemaal sluiten?", a: "Ja, in veel gevallen voert het systeem dialogen, doet berekeningen, genereert factuur, ontvangt betaling - allemaal automatisch." },
      { q: "Hoe integreert het met ons systeem?", a: "Integreert met elk systeem met API: CRM, ERP, telefonie, betalingssystemen, boekhoudkunde." },
      { q: "Is het duur?", a: "Kosten hangen af van complexiteit en volume. Betaalt zich meestal in 1-2 maanden terug via besparing op operators." },
    ],

    ctaTitle: "Klaar om Verkoop te Transformeren?",
    ctaDesc: "Start AI-manager voor uw bedrijf. Eerste consultatie is gratis.",
  },

  fr: {
    badge: "Solution IA de vente",
    title: "Gestionnaire des Ventes",
    titleHighlight: " par Voix",
    subtitle: "Système de vente entièrement automatisé. Du premier appel à la facture en 30 secondes. Un système intelligent qui pense, calcule et conclut les ventes.",
    cta: "Demander une Démo",
    ctaSecondary: "Écouter Exemple",
    stat1Value: "50+",
    stat1Label: "entreprises nous font confiance",
    stat2Value: "98%",
    stat2Label: "appels réussis",
    stat3Value: "24/7",
    stat3Label: "toujours actif",
    stat4Value: "30 sec",
    stat4Label: "à facturation",
    
    benefitsTitle: "Pourquoi Cela Fonctionne",
    benefitsDesc: "Un système qui ne se contente pas de discuter, mais pense réellement et fait le travail de vente",
    benefits: [
      { icon: "brain", title: "Dialogue Naturel", desc: "Conversa comme un vendeur expérimenté, pas selon le scénario" },
      { icon: "calculator", title: "Calculs Complexes", desc: "Calcule instantanément la surface, le volume, le coût avec coefficients" },
      { icon: "package", title: "Fonctionne avec Catalogue", desc: "Connaît tous les produits, tailles, prix, délais de livraison" },
      { icon: "truck", title: "Calcule l'Expédition", desc: "Détermine le poids, les dimensions, sélectionne le bon transport" },
      { icon: "filetext", title: "Génère Documents", desc: "Crée des factures, contrats, spécifications automatiquement" },
      { icon: "phoneforwarded", title: "Routage Intelligent", desc: "Oriente les clients qualifiés vers le bon service" },
      { icon: "usercheck", title: "Mémorise Client", desc: "Se souvient des appels précédents et de l'historique d'interaction" },
      { icon: "shoppingcart", title: "Conclut Vente", desc: "Du premier appel au paiement - entièrement automatisé" },
    ],

    timelineTitle: "Processus d'Implémentation",
    timelineDesc: "Chaque projet est unique. Calendrier calculé individuellement",
    phases: [
      { title: "Analyse (1-2 semaines)", desc: "Comprenez le processus de vente, le catalogue, les prix, les exceptions" },
      { title: "Conception (1-2 semaines)", desc: "Créez des scénarios de dialogue, la logique de calcul, les intégrations" },
      { title: "Développement (2-6 semaines)", desc: "Entraînez l'IA sur vos données, configurez les intégrations" },
      { title: "Lancement (1 semaine)", desc: "Tests, formation d'équipe, déploiement en production" },
    ],

    industryTitle: "Où Cela Fonctionne",
    industryDesc: "Le gestionnaire IA s'applique à pratiquement toute industrie",
    industries: [
      { icon: "building2", name: "B2B Commerce de Gros", desc: "Automatisez les commandes entrantes" },
      { icon: "warehouse", name: "Fabrication", desc: "Calculez les configurations complexes" },
      { icon: "hardhat", name: "Construction", desc: "Consultations et devis" },
      { icon: "building2", name: "Logistique", desc: "Calculez l'expédition et les délais" },
      { icon: "barChart3", name: "Conseil", desc: "Qualifiez et planifiez les réunions" },
      { icon: "globe", name: "E-commerce", desc: "Support et ventes additionnelles" },
    ],

    casesTitle: "Cas",
    casesDesc: "Résultats réels de mise en œuvre",
    cases: [
      { title: "Entreprise en Gros", subtitle: "Textiles", metrics: "500+ appels/jour", result: "Économisez $50k/mois sur les opérateurs" },
      { title: "Fabrication", subtitle: "Composants", metrics: "1000+ calculs/jour", result: "Vitesse de traitement +300%" },
      { title: "Entreprise Logistique", subtitle: "Livraison de cargaison", metrics: "200+ devis/jour", result: "Conversion d'appels +45%" },
    ],

    faqTitle: "Questions Fréquemment Posées",
    faqItems: [
      { q: "Comment c'est différent d'un bot normal?", a: "Les bots normaux lisent des scénarios. Notre système pense, analyse, calcule et prend des décisions comme un vendeur intelligent." },
      { q: "Combien de temps prend la mise en œuvre?", a: "Dépend de la complexité: projets standards 1-2 mois, complexes avec logique personnalisée 4-6 mois." },
      { q: "Peut-il conclure une vente complètement?", a: "Oui, dans la plupart des cas le système mène le dialogue, effectue les calculs, génère la facture, reçoit le paiement - tout automatiquement." },
      { q: "Comment s'intègre-t-il avec notre système?", a: "S'intègre avec tout système disposant d'une API: CRM, ERP, téléphonie, systèmes de paiement, comptabilité." },
      { q: "C'est cher?", a: "Le coût dépend de la complexité et du volume. Rentabilisé généralement en 1-2 mois grâce aux économies d'opérateurs." },
    ],

    ctaTitle: "Prêt à Transformer les Ventes?",
    ctaDesc: "Lancez le gestionnaire IA pour votre entreprise. Première consultation gratuite.",
  },
}

export function VoiceSalesManagerClientPage({ locale }: { locale: Locale }) {
  const t = translations[locale] || translations.ru
  const { openConsultation } = useCTA()

  const iconMap: Record<string, any> = {
    brain: Brain,
    calculator: Calculator,
    package: Package,
    truck: Truck,
    filetext: FileText,
    phoneforwarded: PhoneForwarded,
    usercheck: UserCheck,
    shoppingcart: ShoppingCart,
    building2: Building2,
    warehouse: Package,
    hardhat: Building2,
    barChart3: BarChart3,
    globe: Globe,
  }

  return (
    <div className="bg-background overflow-x-hidden">
      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#060a16]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(56,130,255,.07),transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060a16]/30 via-[#060a16]/60 to-[#060a16]" />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-20 lg:pt-44 lg:pb-24">
          <div className="flex justify-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-white/70">{t.badge}</span>
            </div>
          </div>

          <h1 className="mx-auto max-w-[920px] text-center text-balance text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] animate-fade-in-up">
            {t.title}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-center text-pretty text-[1.125rem] leading-[1.7] text-white/50 animate-fade-in-up" style={{ animationDelay: "0.12s" }}>
            {t.subtitle}
          </p>

          <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
            <Button size="lg" className="h-[52px] rounded-xl px-8 text-[15px] font-semibold shadow-[0_0_40px_rgba(56,130,255,.15)] hover:shadow-[0_0_60px_rgba(56,130,255,.25)] transition-all duration-300" onClick={openConsultation}>
              {t.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-[52px] rounded-xl px-8 text-[15px] font-semibold border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.16] backdrop-blur-sm transition-all duration-300">
              <Play className="mr-2 h-4 w-4" />
              {t.ctaSecondary}
            </Button>
          </div>

          <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: t.stat1Value, label: t.stat1Label },
              { value: t.stat2Value, label: t.stat2Label },
              { value: t.stat3Value, label: t.stat3Label },
              { value: t.stat4Value, label: t.stat4Label },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5 py-8 lg:py-10">
                <span className="text-[2rem] font-extrabold tracking-tight text-white sm:text-4xl">{s.value}</span>
                <span className="text-[13px] text-white/40">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{t.benefitsTitle}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.benefitsTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.benefitsDesc}
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.benefits.map((benefit, idx) => {
              const Icon = iconMap[benefit.icon] || Brain
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.07] text-primary ring-1 ring-primary/[0.1] mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* SEO: INTRO TEXT SECTION */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/30 dark:to-slate-800/30">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              {locale === "ru" ? "Что такое голосовой AI-менеджер продаж" : locale === "en" ? "What is a Voice AI Sales Manager" : locale === "es" ? "¿Qué es un Gerente de Ventas AI por Voz" : locale === "de" ? "Was ist ein Sprach-KI-Vertriebsmanager" : locale === "nl" ? "Wat is een Stem AI Verkoopmanager" : "Qu'est-ce qu'un Gestionnaire des Ventes IA Vocal"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {locale === "ru" ? "Голосовой AI-менеджер продаж — это интеллектуальная система автоматизации звонков, которая заменяет операторов колл-центра. Система работает круглосуточно и способна обрабатывать тысячи звонков одновременно. В отличие от обычных голосовых ботов, которые читают скрипты, наш AI-менеджер ведет динамический диалог, анализирует потребности клиента и принимает решения как опытный продавец." : locale === "en" ? "A voice AI sales manager is an intelligent call automation system that replaces call center operators. The system works around the clock and can handle thousands of calls simultaneously. Unlike regular voice bots that read scripts, our AI manager conducts dynamic dialogues, analyzes customer needs, and makes decisions like an experienced sales professional." : locale === "es" ? "Un gerente de ventas AI por voz es un sistema inteligente de automatización de llamadas que reemplaza a los operadores del centro de llamadas. El sistema funciona las 24 horas y puede manejar miles de llamadas simultáneamente. A diferencia de los bots de voz normales que leen guiones, nuestro gerente IA conduce diálogos dinámicos, analiza las necesidades del cliente y toma decisiones como un profesional experimentado." : locale === "de" ? "Ein Sprach-KI-Vertriebsmanager ist ein intelligentes Call-Automatisierungssystem, das Call-Center-Operatoren ersetzt. Das System arbeitet rund um die Uhr und kann Tausende von Anrufen gleichzeitig bearbeiten. Im Gegensatz zu normalen Sprachbots, die Skripte lesen, führt unser KI-Manager dynamische Dialoge, analysiert Kundenbedürfnisse und trifft Entscheidungen wie ein erfahrener Vertriebsprofi." : locale === "nl" ? "Een stem AI verkoopmanager is een intelligent callautomatiseringssysteem dat callcenter-operators vervangt. Het systeem werkt rond de klok en kan duizenden oproepen tegelijk verwerken. In tegenstelling tot normale stembots die scripts lezen, voert onze AI-manager dynamische dialogen, analyseert klantbehoeften en neemt beslissingen als een ervaren verkoopprof." : "Un gestionnaire des ventes IA vocal est un système intelligent d'automatisation des appels qui remplace les opérateurs des centres d'appels. Le système fonctionne 24h/24 et peut gérer des milliers d'appels simultanément. Contrairement aux bots vocaux ordinaires qui lisent des scripts, notre gestionnaire IA mène des dialogues dynamiques, analyse les besoins des clients et prend des décisions comme un professionnel des ventes expérimenté."}
              </p>
              <p>
                {locale === "ru" ? "Система может полностью закрыть сделку: от первого звонка до выставления счета и получения оплаты. AI выполняет сложные расчеты, работает с каталогами и ценами, интегрируется с CRM и другими системами, помнит историю клиента и переводит квалифицированные заявки нужному менеджеру." : locale === "en" ? "The system can completely close a deal: from the first call to invoice issuance and payment receipt. AI performs complex calculations, works with catalogs and pricing, integrates with CRM and other systems, remembers customer history, and routes qualified leads to the right manager." : locale === "es" ? "El sistema puede cerrar completamente una venta: desde la primera llamada hasta la emisión de factura y recepción de pago. La IA realiza cálculos complejos, trabaja con catálogos y precios, se integra con CRM y otros sistemas, recuerda el historial del cliente y dirige leads calificados al gerente correcto." : locale === "de" ? "Das System kann ein Geschäft vollständig abschließen: vom ersten Anruf bis zur Rechnungsstellung und Zahlungsempfang. KI führt komplexe Berechnungen durch, arbeitet mit Katalogen und Preisen, integriert sich mit CRM und anderen Systemen, merkt sich die Kundenhistorie und leitet qualifizierte Leads an den richtigen Manager weiter." : locale === "nl" ? "Het systeem kan een deal volledig afsluiten: van het eerste gesprek tot factuuruitgave en betalingsontvangst. AI voert complexe berekeningen uit, werkt met catalogi en prijzen, integreert zich met CRM en andere systemen, onthoudt klantgeschiedenis en stuurt gekwalificeerde leads naar de juiste manager." : "Le système peut conclure complètement une affaire : du premier appel à l'émission de facture et la réception du paiement. L'IA effectue des calculs complexes, travaille avec les catalogues et les prix, s'intègre avec le CRM et d'autres systèmes, mémorise l'historique des clients et dirige les prospects qualifiés vers le bon manager."}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEO: CAPABILITIES TABLE */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-2xl lg:text-3xl font-bold mb-10">
              {locale === "ru" ? "Что умеет AI менеджер продаж" : locale === "en" ? "What a Sales AI Manager Can Do" : locale === "es" ? "¿Qué Puede Hacer un Gerente de Ventas IA" : locale === "de" ? "Was Ein KI-Vertriebsmanager Kann" : locale === "nl" ? "Wat Een AI Verkoopmanager Kan Doen" : "Ce que Peut Faire un Gestionnaire de Ventes IA"}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-4 px-4 font-bold">{locale === "ru" ? "Функция" : locale === "en" ? "Feature" : locale === "es" ? "Función" : locale === "de" ? "Funktion" : locale === "nl" ? "Functie" : "Caractéristique"}</th>
                    <th className="text-left py-4 px-4 font-bold">{locale === "ru" ? "Описание" : locale === "en" ? "Description" : locale === "es" ? "Descripción" : locale === "de" ? "Beschreibung" : locale === "nl" ? "Beschrijving" : "Description"}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: locale === "ru" ? "Прием входящих звонков" : "Incoming Calls", desc: locale === "ru" ? "AI отвечает за 3 секунды, автоматически определяет тему звонка" : "AI answers in 3 seconds, automatically identifies call topic" },
                    { feature: locale === "ru" ? "Исходящие звонки" : "Outgoing Calls", desc: locale === "ru" ? "Напоминания, подтверждения, рассылка по базе клиентов" : "Reminders, confirmations, client base broadcast" },
                    { feature: locale === "ru" ? "Квалификация лидов" : "Lead Qualification", desc: locale === "ru" ? "Задает уточняющие вопросы, оценивает интерес и готовность купить" : "Asks clarifying questions, evaluates interest and purchase intent" },
                    { feature: locale === "ru" ? "Расчет стоимости" : "Cost Calculation", desc: locale === "ru" ? "Вычисляет площадь, объем, применяет коэффициенты и скидки" : "Calculates area, volume, applies coefficients and discounts" },
                    { feature: locale === "ru" ? "Выставление счетов" : "Invoice Generation", desc: locale === "ru" ? "Автоматическое создание счетов, актов, накладных" : "Automatic creation of invoices, acts, bills of lading" },
                    { feature: locale === "ru" ? "Интеграция с CRM" : "CRM Integration", desc: locale === "ru" ? "Синхронизация данных с Bitrix24, Salesforce, HubSpot и др." : "Data sync with Bitrix24, Salesforce, HubSpot, etc." },
                    { feature: locale === "ru" ? "Работа с каталогом" : "Catalog Management", desc: locale === "ru" ? "Знает все товары, услуги, размеры, цены, сроки доставки" : "Knows all products, services, sizes, prices, delivery times" },
                    { feature: locale === "ru" ? "История клиента" : "Customer History", desc: locale === "ru" ? "Помнит предыдущие звонки, покупки, предпочтения" : "Remembers previous calls, purchases, preferences" },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-4 font-semibold text-primary">{item.feature}</td>
                      <td className="py-4 px-4 text-muted-foreground">{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEO: INTERNAL LINKS BLOCK */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-2xl lg:text-3xl font-bold mb-10">
              {locale === "ru" ? "Связанные решения" : locale === "en" ? "Related Solutions" : locale === "es" ? "Soluciones Relacionadas" : locale === "de" ? "Verwandte Lösungen" : locale === "nl" ? "Verwante Oplossingen" : "Solutions Connexes"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: locale === "ru" ? "AI робот оператор" : "AI Robot Operator", href: "/solutions/robot-operator" },
                { name: locale === "ru" ? "Автоматизация продаж" : "Sales Automation", href: "/solutions/automation-sales" },
                { name: locale === "ru" ? "AI для бизнеса" : "AI for Business", href: "/solutions/ai-dlya-biznesa" },
                { name: locale === "ru" ? "Обработка заявок" : "Request Processing", href: "/solutions/obrabotka-zayavok" },
                { name: locale === "ru" ? "Обработка заказов" : "Order Processing", href: "/solutions/obrabotka-zakazov" },
                { name: locale === "ru" ? "Выставление счетов" : "Invoice Issuance", href: "/solutions/vystavlenie-schetov" },
              ].map((link, idx) => (
                <Reveal key={idx} delay={idx * 50}>
                  <Link href={`/${locale}${link.href}`} className="block p-4 rounded-lg border border-border/50 bg-background hover:border-primary/50 hover:bg-muted/50 transition-all group">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold group-hover:text-primary transition-colors">{link.name}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HTML FAQ IN DOM FOR SEO */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
              {t.faqTitle}
            </h2>
            <div className="mt-12 space-y-8">
              {t.faqItems.map((item, idx) => (
                <div key={idx} className="group border-b border-border/30 pb-8 last:border-b-0">
                  <h3 className="text-lg md:text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {item.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-28 lg:py-36 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{t.timelineTitle}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.timelineTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.timelineDesc}
            </p>
          </Reveal>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.phases.map((phase, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="rounded-2xl border border-border/50 bg-background p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{t.industryTitle}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.industryTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.industryDesc}
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.industries.map((industry, idx) => {
              const Icon = iconMap[industry.icon] || Building2
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold">{industry.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{industry.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="py-28 lg:py-36 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <Label>{t.casesTitle}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.casesTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t.casesDesc}
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {t.cases.map((caseItem, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="rounded-2xl border border-border/50 bg-background p-6">
                  <h3 className="font-bold mb-1">{caseItem.title}</h3>
                  <p className="text-sm text-muted-foreground/70 mb-4">{caseItem.subtitle}</p>
                  <div className="py-4 border-t border-b border-border/30 mb-4">
                    <p className="text-2xl font-bold text-primary">{caseItem.metrics}</p>
                  </div>
                  <p className="text-sm text-emerald-400 font-semibold">✓ {caseItem.result}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-20 text-center">
            <Label>{t.faqTitle}</Label>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.faqTitle}
            </h2>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {t.faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="rounded-xl border border-border/50 bg-card px-6 data-[state=open]:bg-muted/50">
                  <AccordionTrigger className="py-4 hover:no-underline text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-primary/10 to-transparent border-t border-border/50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl mb-5">{t.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.ctaDesc}</p>
            <Button size="lg" className="h-[52px] rounded-xl px-8 text-[15px] font-semibold" onClick={openConsultation}>
              {t.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
