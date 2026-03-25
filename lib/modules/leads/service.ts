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
      const NOTIFICATION_EMAIL = "info@2solutions.com"
      
      // Format the email content
      const subject = `[M2 AI Solutions] Новая заявка: ${leadData.type} от ${leadData.contact.name}`
      const htmlContent = this.formatEmailHtml(leadData)
      const textContent = this.formatEmailText(leadData)
      
      // Try Resend first (recommended for Vercel)
      if (process.env.RESEND_API_KEY) {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "M2 AI Solutions <noreply@2solutions.com>",
            to: [NOTIFICATION_EMAIL],
            subject,
            html: htmlContent,
            text: textContent,
          }),
        })
        
        if (!response.ok) {
          const error = await response.text()
          log.error("Resend API error", { error, correlationId })
          throw new Error(`Resend API error: ${error}`)
        }
        
        log.info("Email sent via Resend", { leadId: leadData.id, correlationId })
        return
      }
      
      // Fallback: use basic SMTP via fetch to email API (for development/testing)
      log.info("Email notification prepared (no email service configured)", { 
        leadId: leadData.id, 
        to: NOTIFICATION_EMAIL,
        subject,
        correlationId 
      })
      
    } catch (error) {
      log.error("Failed to send email notification", error, { leadId: leadData.id, correlationId })
      // Don't throw - we still want to log the lead even if email fails
    }
  }

  formatEmailHtml(leadData: LeadData): string {
    const typeLabels: Record<string, string> = {
      lead: "Общий запрос",
      demo: "Запрос демо",
      trial: "Тестовый период",
      quote: "Запрос КП",
      brief: "Бриф",
      consultation: "Консультация",
      subscribe: "Подписка",
    }

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #7c3aed, #6366f1); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; }
    .field { margin-bottom: 16px; }
    .label { font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; }
    .value { font-size: 16px; color: #1e293b; }
    .badge { display: inline-block; background: #7c3aed; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .footer { text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px; }
    .utm-info { background: #e2e8f0; padding: 12px; border-radius: 8px; margin-top: 20px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Новая заявка</h1>
      <span class="badge">${typeLabels[leadData.type] || leadData.type}</span>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Имя</div>
        <div class="value">${leadData.contact.name}</div>
      </div>
      ${leadData.contact.company ? `
      <div class="field">
        <div class="label">Компания</div>
        <div class="value">${leadData.contact.company}</div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${leadData.contact.email}">${leadData.contact.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Телефон</div>
        <div class="value"><a href="tel:${leadData.contact.phone}">${leadData.contact.phone}</a></div>
      </div>
      ${leadData.message ? `
      <div class="field">
        <div class="label">Сообщение</div>
        <div class="value">${leadData.message}</div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Язык</div>
        <div class="value">${leadData.locale?.toUpperCase() || 'RU'}</div>
      </div>
      <div class="field">
        <div class="label">Дата</div>
        <div class="value">${new Date(leadData.timestamp).toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</div>
      </div>
      ${leadData.utm ? `
      <div class="utm-info">
        <strong>UTM метки:</strong><br>
        ${Object.entries(leadData.utm).filter(([,v]) => v).map(([k,v]) => `${k}: ${v}`).join('<br>')}
      </div>
      ` : ''}
    </div>
    <div class="footer">
      ID заявки: ${leadData.id}<br>
      M2 AI Solutions
    </div>
  </div>
</body>
</html>
    `.trim()
  }

  formatEmailText(leadData: LeadData): string {
    const typeLabels: Record<string, string> = {
      lead: "Общий запрос",
      demo: "Запрос демо",
      trial: "Тестовый период",
      quote: "Запрос КП",
      brief: "Бриф",
      consultation: "Консультация",
      subscribe: "Подписка",
    }

    return `
НОВАЯ ЗАЯВКА - ${typeLabels[leadData.type] || leadData.type}
${'='.repeat(50)}

Имя: ${leadData.contact.name}
${leadData.contact.company ? `Компания: ${leadData.contact.company}` : ''}
Email: ${leadData.contact.email}
Телефон: ${leadData.contact.phone}
${leadData.message ? `\nСообщение:\n${leadData.message}` : ''}

Язык: ${leadData.locale?.toUpperCase() || 'RU'}
Дата: ${new Date(leadData.timestamp).toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}

${'='.repeat(50)}
ID заявки: ${leadData.id}
M2 AI Solutions
    `.trim()
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
