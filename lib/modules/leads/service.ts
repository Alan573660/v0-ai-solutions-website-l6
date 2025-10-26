import { log } from "@/lib/logger"
import { AppError } from "@/lib/errors/app-error"
import type { LeadData } from "./types"
import type { Locale } from "@/lib/i18n/config"

export class LeadService {
  generateLeadId(): string {
    return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
  }

  async sendToCRM(leadData: LeadData, correlationId: string): Promise<void> {
    try {
      if (!process.env.HUBSPOT_API_KEY) {
        log.warn("HubSpot API key not configured, skipping CRM integration", { correlationId })
        return
      }

      // TODO: Implement actual HubSpot integration
      log.info("Sending lead to CRM", { leadId: leadData.id, correlationId })
      await new Promise((resolve) => setTimeout(resolve, 100))
    } catch (error) {
      log.error("Failed to send lead to CRM", error, { leadId: leadData.id, correlationId })
      throw new AppError("CRM integration failed", 500)
    }
  }

  async sendEmailNotification(leadData: LeadData, correlationId: string): Promise<void> {
    try {
      // TODO: Implement email service integration (SendGrid, Postmark, etc.)
      log.info("Sending email notification", { leadId: leadData.id, correlationId })
      await new Promise((resolve) => setTimeout(resolve, 100))
    } catch (error) {
      log.error("Failed to send email notification", error, { leadId: leadData.id, correlationId })
      throw new AppError("Email notification failed", 500)
    }
  }

  async sendToGoogleSheets(leadData: LeadData, correlationId: string): Promise<void> {
    try {
      // TODO: Implement Google Sheets API integration
      log.info("Sending lead to Google Sheets", { leadId: leadData.id, correlationId })
      await new Promise((resolve) => setTimeout(resolve, 50))
    } catch (error) {
      log.error("Failed to send lead to Google Sheets", error, { leadId: leadData.id, correlationId })
      // Don't throw - this is a backup, not critical
    }
  }

  async processLead(leadData: LeadData, correlationId: string): Promise<void> {
    const results = await Promise.allSettled([
      this.sendToCRM(leadData, correlationId),
      this.sendEmailNotification(leadData, correlationId),
      this.sendToGoogleSheets(leadData, correlationId),
    ])

    const successCount = results.filter((r) => r.status === "fulfilled").length

    if (successCount === 0) {
      throw new AppError("All integrations failed", 500)
    }

    log.info("Lead processed successfully", {
      leadId: leadData.id,
      successCount,
      totalIntegrations: results.length,
      correlationId,
    })
  }

  getSuccessMessage(type: string, locale: Locale): string {
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
}

export const leadService = new LeadService()
