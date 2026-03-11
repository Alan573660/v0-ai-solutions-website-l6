"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, User, Building, MessageSquare, CheckCircle2, Loader2 } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: {
    trial: { title: "Попробовать бесплатно", description: "Получите бесплатный тестовый звонок от AI-ассистента, чтобы понять, как это работает", submitText: "Заказать тестовый звонок", successMessage: "Отлично! Наш AI-ассистент позвонит вам в ближайшее время для демонстрации возможностей." },
    demo: { title: "Запросить демонстрацию", description: "Наш специалист проведет персональную демонстрацию платформы для вашего бизнеса", submitText: "Запросить демо", successMessage: "Спасибо! Наш менеджер свяжется с вами в ближайшее время для согласования времени демо." },
    call: { title: "Заказать звонок", description: "Оставьте ваш номер телефона, и мы перезвоним вам в течение 15 минут", submitText: "Позвоните мне", successMessage: "Отлично! Мы перезвоним вам в ближайшее время." },
    consultation: { title: "Получить консультацию", description: "Расскажите о вашем проекте, и мы подберем оптимальное решение", submitText: "Отправить запрос", successMessage: "Спасибо! Наш эксперт свяжется с вами для обсуждения вашего проекта." },
    labels: { name: "Ваше имя *", email: "Email *", phone: "Телефон *", company: "Компания", message: "Расскажите о вашем проекте" },
    placeholders: { name: "Иван Иванов", email: "ivan@company.ru", phone: "+7 (999) 123-45-67", company: "ООО «Ваша компания»", message: "Опишите ваши задачи и цели..." },
    button: { cancel: "Отмена", submit: "Отправка...", privacy: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности" },
  },
  en: {
    trial: { title: "Try for Free", description: "Get a free test call from AI assistant to understand how it works", submitText: "Order Test Call", successMessage: "Great! Our AI assistant will call you soon to demonstrate the possibilities." },
    demo: { title: "Request Demo", description: "Our specialist will conduct a personal demonstration of the platform for your business", submitText: "Request Demo", successMessage: "Thank you! Our manager will contact you soon to schedule demo time." },
    call: { title: "Book a Call", description: "Leave your phone number and we'll call you back within 15 minutes", submitText: "Call Me", successMessage: "Great! We'll call you back soon." },
    consultation: { title: "Get Consultation", description: "Tell us about your project and we'll find the optimal solution", submitText: "Send Request", successMessage: "Thank you! Our expert will contact you to discuss your project." },
    labels: { name: "Your Name *", email: "Email *", phone: "Phone *", company: "Company", message: "Tell us about your project" },
    placeholders: { name: "John Doe", email: "john@company.com", phone: "+1 (555) 123-4567", company: "Your Company Inc.", message: "Describe your tasks and goals..." },
    button: { cancel: "Cancel", submit: "Sending...", privacy: "By clicking the button, you agree with the privacy policy" },
  },
  es: {
    trial: { title: "Prueba Gratis", description: "Obtenga una llamada de prueba gratuita del asistente de IA para entender cómo funciona", submitText: "Solicitar Llamada", successMessage: "¡Excelente! Nuestro asistente de IA le llamará pronto para demostrar las posibilidades." },
    demo: { title: "Solicitar Demo", description: "Nuestro especialista realizará una demostración personal de la plataforma para su negocio", submitText: "Solicitar Demo", successMessage: "¡Gracias! Nuestro gerente se pondrá en contacto pronto para programar la demo." },
    call: { title: "Agendar Llamada", description: "Deje su número de teléfono y le llamaremos en 15 minutos", submitText: "Llámame", successMessage: "¡Excelente! Le llamaremos pronto." },
    consultation: { title: "Obtener Consulta", description: "Cuéntenos sobre su proyecto y encontraremos la solución óptima", submitText: "Enviar Solicitud", successMessage: "¡Gracias! Nuestro experto se pondrá en contacto para discutir su proyecto." },
    labels: { name: "Su Nombre *", email: "Email *", phone: "Teléfono *", company: "Empresa", message: "Cuéntenos sobre su proyecto" },
    placeholders: { name: "Juan García", email: "juan@empresa.es", phone: "+34 (91) 123-4567", company: "Su Empresa S.L.", message: "Describa sus tareas y objetivos..." },
    button: { cancel: "Cancelar", submit: "Enviando...", privacy: "Al hacer clic en el botón, acepta la política de privacidad" },
  },
  de: {
    trial: { title: "Kostenlos Testen", description: "Erhalten Sie einen kostenlosen Testanruf vom KI-Assistenten, um zu verstehen, wie es funktioniert", submitText: "Testanruf Bestellen", successMessage: "Großartig! Unser KI-Assistent wird Sie bald anrufen, um die Möglichkeiten zu demonstrieren." },
    demo: { title: "Demo Anfordern", description: "Unser Spezialist führt eine persönliche Demonstration der Plattform für Ihr Unternehmen durch", submitText: "Demo Anfordern", successMessage: "Vielen Dank! Unser Manager wird Sie bald kontaktieren, um die Demo-Zeit zu vereinbaren." },
    call: { title: "Anruf Buchen", description: "Hinterlassen Sie Ihre Telefonnummer und wir rufen Sie innerhalb von 15 Minuten zurück", submitText: "Rufen Sie mich an", successMessage: "Großartig! Wir werden Sie bald anrufen." },
    consultation: { title: "Beratung Erhalten", description: "Erzählen Sie uns von Ihrem Projekt und wir finden die optimale Lösung", submitText: "Anfrage Senden", successMessage: "Vielen Dank! Unser Experte wird Sie kontaktieren, um Ihr Projekt zu besprechen." },
    labels: { name: "Ihr Name *", email: "Email *", phone: "Telefon *", company: "Unternehmen", message: "Erzählen Sie uns von Ihrem Projekt" },
    placeholders: { name: "Max Mustermann", email: "max@unternehmen.de", phone: "+49 (30) 123-4567", company: "Ihr Unternehmen GmbH", message: "Beschreiben Sie Ihre Aufgaben und Ziele..." },
    button: { cancel: "Abbrechen", submit: "Wird gesendet...", privacy: "Durch Klicken auf die Schaltfläche akzeptieren Sie die Datenschutzrichtlinie" },
  },
  nl: {
    trial: { title: "Gratis Proberen", description: "Krijg een gratis testoproep van de AI-assistent om te begrijpen hoe het werkt", submitText: "Testaanroep Bestellen", successMessage: "Geweldig! Onze AI-assistent zal u binnenkort bellen om de mogelijkheden aan te tonen." },
    demo: { title: "Demo Aanvragen", description: "Onze specialist voert een persoonlijke demonstratie van het platform voor uw bedrijf uit", submitText: "Demo Aanvragen", successMessage: "Dank u! Onze manager zal u binnenkort contacteren om de demotijd in te plannen." },
    call: { title: "Oproep Boeken", description: "Laat uw telefoonnummer achter en we bellen u terug binnen 15 minuten", submitText: "Bel Me", successMessage: "Geweldig! We bellen u binnenkort terug." },
    consultation: { title: "Advies Krijgen", description: "Vertel ons over uw project en wij vinden de optimale oplossing", submitText: "Aanvraag Verzenden", successMessage: "Dank u! Onze expert zal u contacteren om uw project te bespreken." },
    labels: { name: "Uw Naam *", email: "Email *", phone: "Telefoon *", company: "Bedrijf", message: "Vertel ons over uw project" },
    placeholders: { name: "Jan de Vries", email: "jan@bedrijf.nl", phone: "+31 (20) 123-4567", company: "Uw Bedrijf B.V.", message: "Beschrijf uw taken en doelstellingen..." },
    button: { cancel: "Annuleren", submit: "Verzenden...", privacy: "Door op de knop te klikken, gaat u akkoord met het privacybeleid" },
  },
  fr: {
    trial: { title: "Essayer Gratuitement", description: "Obtenez un appel d'essai gratuit de l'assistant IA pour comprendre comment cela fonctionne", submitText: "Commander l'Appel d'Essai", successMessage: "Excellent! Notre assistant IA vous appellera bientôt pour démontrer les possibilités." },
    demo: { title: "Demander une Démo", description: "Notre spécialiste conduira une démonstration personnalisée de la plateforme pour votre entreprise", submitText: "Demander une Démo", successMessage: "Merci! Notre gestionnaire vous contactera bientôt pour programmer la démo." },
    call: { title: "Réserver un Appel", description: "Laissez votre numéro de téléphone et nous vous rappellerons dans 15 minutes", submitText: "Appelez-Moi", successMessage: "Excellent! Nous vous rappellerons bientôt." },
    consultation: { title: "Obtenir une Consultation", description: "Parlez-nous de votre projet et nous trouverons la solution optimale", submitText: "Envoyer la Demande", successMessage: "Merci! Notre expert vous contactera pour discuter de votre projet." },
    labels: { name: "Votre Nom *", email: "Email *", phone: "Téléphone *", company: "Entreprise", message: "Parlez-nous de votre projet" },
    placeholders: { name: "Jean Dupont", email: "jean@entreprise.fr", phone: "+33 (1) 23-45-67-89", company: "Votre Entreprise S.A.R.L.", message: "Décrivez vos tâches et objectifs..." },
    button: { cancel: "Annuler", submit: "Envoi...", privacy: "En cliquant sur le bouton, vous acceptez la politique de confidentialité" },
  },
}

interface CTAModalProps {
  isOpen: boolean
  onClose: () => void
  type: "trial" | "demo" | "call" | "consultation"
  title?: string
  locale?: Locale
}

export default function CTAModal({ isOpen, onClose, type, title, locale = "ru" }: CTAModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const t = translations[locale] || translations.ru
  const config = { ...t[type], title: title || t[type].title }
  const labels = t.labels
  const placeholders = t.placeholders
  const btnText = t.button

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type,
          source: "cta_modal",
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          onClose()
          setIsSuccess(false)
          setFormData({ name: "", email: "", phone: "", company: "", message: "" })
        }, 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[85vh] overflow-y-auto p-4 sm:p-6">
        {isSuccess ? (
          <div className="py-6 sm:py-8 text-center space-y-4">
            <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl sm:text-2xl px-2">{config.successMessage}</DialogTitle>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-xl sm:text-2xl">{config.title}</DialogTitle>
              <DialogDescription className="text-sm sm:text-base">{config.description}</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-2 sm:mt-4">
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-sm">
                  <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                  {labels.name}
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={placeholders.name}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-sm">
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                  {labels.email}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={placeholders.email}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-sm">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                  {labels.phone}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={placeholders.phone}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              {(type === "demo" || type === "consultation") && (
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2 text-sm">
                    <Building className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                    {labels.company}
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={placeholders.company}
                    className="h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>
              )}

              {type === "consultation" && (
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-sm">
                    <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                    {labels.message}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={placeholders.message}
                    rows={3}
                    className="resize-none text-sm sm:text-base"
                  />
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 bg-transparent h-10 sm:h-11 text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {btnText.cancel}
                </Button>
                <Button type="submit" className="flex-1 h-10 sm:h-11 text-sm sm:text-base" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 animate-spin" />
                      {btnText.submit}
                    </>
                  ) : (
                    config.submitText
                  )}
                </Button>
              </div>

              <p className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">
                {btnText.privacy.split("политикой конфиденциальности")[0]}
                <a href={`/${locale}/privacy`} className="underline hover:text-primary">
                  {locale === "ru" ? "политикой конфиденциальности" : locale === "en" ? "privacy policy" : locale === "es" ? "política de privacidad" : locale === "de" ? "Datenschutzrichtlinie" : locale === "nl" ? "privacybeleid" : "politique de confidentialité"}
                </a>
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export { CTAModal }
