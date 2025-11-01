import type { Locale } from "@/lib/i18n/config"

export interface LeadData {
  id: string
  type: "lead" | "demo" | "trial" | "quote" | "brief" | "subscribe"
  locale: Locale
  timestamp: string
  contact: {
    name?: string
    company?: string
    email: string
    phone?: string
  }
  details?: Record<string, any>
  message?: string
  consents: {
    privacy: boolean
    news?: boolean
  }
  utm?: {
    source?: string
    campaign?: string
    medium?: string
  }
  source: string
  ip?: string | null
  userAgent?: string | null
}

export function generateLeadId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export async function sendToCRM(leadData: LeadData): Promise<void> {
  // CRM integration - replace with actual API calls
  if (process.env.HUBSPOT_API_KEY) {
    // Example: HubSpot integration
    // await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    //   method: "POST",
    //   headers: {
    //     "Authorization": `Bearer ${process.env.HUBSPOT_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     properties: {
    //       email: leadData.contact.email,
    //       firstname: leadData.contact.name?.split(" ")[0],
    //       lastname: leadData.contact.name?.split(" ").slice(1).join(" "),
    //       company: leadData.contact.company,
    //       phone: leadData.contact.phone,
    //       lead_source: "website",
    //       lead_type: leadData.type,
    //     }
    //   })
    // })
  }

  await new Promise((resolve) => setTimeout(resolve, 100))
}

export async function sendEmailNotification(leadData: LeadData): Promise<void> {
  // Email service integration - replace with actual service
  // Example: Postmark, SendGrid, AWS SES

  await new Promise((resolve) => setTimeout(resolve, 100))
}

export async function sendToGoogleSheets(leadData: LeadData): Promise<void> {
  // Google Sheets backup - replace with actual Sheets API
  await new Promise((resolve) => setTimeout(resolve, 50))
}

export function getSuccessMessage(type: string, locale: Locale): string {
  const messages: Record<Locale, Record<string, string>> = {
    ru: {
      lead: "Спасибо за заявку! Мы свяжемся с вами в течение 24 часов.",
      demo: "Заявка на демо принята! Мы свяжемся с вами для согласования времени.",
      trial: "Заявка на триал принята! Вы получите инструкции по email.",
      quote: "Запрос на КП принят! Мы подготовим предложение в течение 2 рабочих дней.",
      brief: "Бриф получен! Мы изучим требования и свяжемся с вами.",
      subscribe: "Спасибо за подписку! Вы будете получать наши новости.",
    },
    en: {
      lead: "Thank you for your inquiry! We'll contact you within 24 hours.",
      demo: "Demo request received! We'll contact you to schedule a time.",
      trial: "Trial request received! You'll receive instructions via email.",
      quote: "Quote request received! We'll prepare a proposal within 2 business days.",
      brief: "Brief received! We'll review your requirements and contact you.",
      subscribe: "Thank you for subscribing! You'll receive our updates.",
    },
    es: {
      lead: "¡Gracias por su consulta! Nos pondremos en contacto en 24 horas.",
      demo: "¡Solicitud de demo recibida! Nos contactaremos para programar.",
      trial: "¡Solicitud de prueba recibida! Recibirá instrucciones por email.",
      quote: "¡Solicitud de cotización recibida! Prepararemos una propuesta en 2 días hábiles.",
      brief: "¡Brief recibido! Revisaremos sus requisitos y nos contactaremos.",
      subscribe: "¡Gracias por suscribirse! Recibirá nuestras actualizaciones.",
    },
    de: {
      lead: "Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden.",
      demo: "Demo-Anfrage erhalten! Wir kontaktieren Sie zur Terminvereinbarung.",
      trial: "Test-Anfrage erhalten! Sie erhalten Anweisungen per E-Mail.",
      quote: "Angebot-Anfrage erhalten! Wir erstellen ein Angebot innerhalb von 2 Werktagen.",
      brief: "Brief erhalten! Wir prüfen Ihre Anforderungen und kontaktieren Sie.",
      subscribe: "Danke für Ihr Abonnement! Sie erhalten unsere Updates.",
    },
    nl: {
      lead: "Bedankt voor uw aanvraag! We nemen binnen 24 uur contact op.",
      demo: "Demo-aanvraag ontvangen! We nemen contact op om een tijd in te plannen.",
      trial: "Proefaanvraag ontvangen! U ontvangt instructies via e-mail.",
      quote: "Offerte-aanvraag ontvangen! We bereiden een voorstel voor binnen 2 werkdagen.",
      brief: "Brief ontvangen! We bekijken uw vereisten en nemen contact op.",
      subscribe: "Bedankt voor uw abonnement! U ontvangt onze updates.",
    },
    fr: {
      lead: "Merci pour votre demande ! Nous vous contacterons dans les 24 heures.",
      demo: "Demande de démo reçue ! Nous vous contacterons pour planifier.",
      trial: "Demande d'essai reçue ! Vous recevrez les instructions par email.",
      quote: "Demande de devis reçue ! Nous préparerons une proposition sous 2 jours ouvrés.",
      brief: "Brief reçu ! Nous examinerons vos exigences et vous contacterons.",
      subscribe: "Merci pour votre abonnement ! Vous recevrez nos mises à jour.",
    },
  }

  return messages[locale]?.[type] || messages.ru[type] || "Thank you!"
}
