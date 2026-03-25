"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Phone, 
  Mail, 
  User, 
  Building, 
  MessageSquare, 
  CheckCircle2, 
  Loader2,
  Sparkles,
  Shield,
  Clock,
  ArrowRight,
  Zap
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

const translations = {
  ru: {
    trial: { 
      title: "Попробовать бесплатно", 
      description: "Получите бесплатный тестовый звонок от AI-ассистента", 
      submitText: "Заказать тестовый звонок", 
      successTitle: "Заявка принята!",
      successMessage: "Наш AI-ассистент позвонит вам в ближайшее время для демонстрации." 
    },
    demo: { 
      title: "Запросить демонстрацию", 
      description: "Персональная демонстрация платформы для вашего бизнеса", 
      submitText: "Запросить демо", 
      successTitle: "Демо запланировано!",
      successMessage: "Наш менеджер свяжется с вами для согласования времени." 
    },
    call: { 
      title: "Заказать звонок", 
      description: "Перезвоним вам в течение 15 минут", 
      submitText: "Позвоните мне", 
      successTitle: "Скоро позвоним!",
      successMessage: "Мы перезвоним вам в ближайшее время." 
    },
    consultation: { 
      title: "Получить консультацию", 
      description: "Расскажите о проекте — подберем оптимальное решение", 
      submitText: "Отправить запрос", 
      successTitle: "Запрос принят!",
      successMessage: "Наш эксперт свяжется с вами для обсуждения." 
    },
    labels: { name: "Ваше имя", email: "Email", phone: "Телефон", company: "Компания", message: "Сообщение" },
    placeholders: { name: "Иван Иванов", email: "ivan@company.ru", phone: "+7 (999) 123-45-67", company: "ООО «Компания»", message: "Опишите ваши задачи..." },
    button: { cancel: "Отмена", submit: "Отправка...", privacy: "Нажимая кнопку, вы соглашаетесь с", privacyLink: "политикой конфиденциальности" },
    benefits: [
      { icon: Clock, text: "Ответим за 15 минут" },
      { icon: Shield, text: "Ваши данные защищены" },
      { icon: Zap, text: "Бесплатная консультация" },
    ],
  },
  en: {
    trial: { 
      title: "Try for Free", 
      description: "Get a free test call from AI assistant", 
      submitText: "Order Test Call", 
      successTitle: "Request received!",
      successMessage: "Our AI assistant will call you soon to demonstrate." 
    },
    demo: { 
      title: "Request Demo", 
      description: "Personal platform demonstration for your business", 
      submitText: "Request Demo", 
      successTitle: "Demo scheduled!",
      successMessage: "Our manager will contact you to schedule time." 
    },
    call: { 
      title: "Book a Call", 
      description: "We'll call you back within 15 minutes", 
      submitText: "Call Me", 
      successTitle: "We'll call soon!",
      successMessage: "We'll call you back shortly." 
    },
    consultation: { 
      title: "Get Consultation", 
      description: "Tell us about your project — we'll find the best solution", 
      submitText: "Send Request", 
      successTitle: "Request received!",
      successMessage: "Our expert will contact you to discuss." 
    },
    labels: { name: "Your Name", email: "Email", phone: "Phone", company: "Company", message: "Message" },
    placeholders: { name: "John Doe", email: "john@company.com", phone: "+1 (555) 123-4567", company: "Your Company Inc.", message: "Describe your tasks..." },
    button: { cancel: "Cancel", submit: "Sending...", privacy: "By clicking, you agree to our", privacyLink: "privacy policy" },
    benefits: [
      { icon: Clock, text: "Reply in 15 minutes" },
      { icon: Shield, text: "Your data is protected" },
      { icon: Zap, text: "Free consultation" },
    ],
  },
  es: {
    trial: { 
      title: "Prueba Gratis", 
      description: "Obtenga una llamada de prueba gratuita del asistente IA", 
      submitText: "Solicitar Llamada", 
      successTitle: "Solicitud recibida!",
      successMessage: "Nuestro asistente IA le llamará pronto." 
    },
    demo: { 
      title: "Solicitar Demo", 
      description: "Demostración personalizada de la plataforma", 
      submitText: "Solicitar Demo", 
      successTitle: "Demo programada!",
      successMessage: "Nuestro gerente se pondrá en contacto." 
    },
    call: { 
      title: "Agendar Llamada", 
      description: "Le llamaremos en 15 minutos", 
      submitText: "Llámame", 
      successTitle: "Le llamaremos pronto!",
      successMessage: "Le llamaremos en breve." 
    },
    consultation: { 
      title: "Obtener Consulta", 
      description: "Cuéntenos su proyecto — encontraremos la solución óptima", 
      submitText: "Enviar Solicitud", 
      successTitle: "Solicitud recibida!",
      successMessage: "Nuestro experto se pondrá en contacto." 
    },
    labels: { name: "Su Nombre", email: "Email", phone: "Teléfono", company: "Empresa", message: "Mensaje" },
    placeholders: { name: "Juan García", email: "juan@empresa.es", phone: "+34 (91) 123-4567", company: "Su Empresa S.L.", message: "Describa sus tareas..." },
    button: { cancel: "Cancelar", submit: "Enviando...", privacy: "Al hacer clic, acepta la", privacyLink: "política de privacidad" },
    benefits: [
      { icon: Clock, text: "Respuesta en 15 minutos" },
      { icon: Shield, text: "Sus datos protegidos" },
      { icon: Zap, text: "Consulta gratuita" },
    ],
  },
  de: {
    trial: { 
      title: "Kostenlos Testen", 
      description: "Erhalten Sie einen kostenlosen Testanruf vom KI-Assistenten", 
      submitText: "Testanruf Bestellen", 
      successTitle: "Anfrage erhalten!",
      successMessage: "Unser KI-Assistent wird Sie bald anrufen." 
    },
    demo: { 
      title: "Demo Anfordern", 
      description: "Persönliche Plattform-Demonstration für Ihr Unternehmen", 
      submitText: "Demo Anfordern", 
      successTitle: "Demo geplant!",
      successMessage: "Unser Manager wird Sie kontaktieren." 
    },
    call: { 
      title: "Anruf Buchen", 
      description: "Wir rufen Sie in 15 Minuten zurück", 
      submitText: "Rufen Sie mich an", 
      successTitle: "Wir rufen bald an!",
      successMessage: "Wir werden Sie bald anrufen." 
    },
    consultation: { 
      title: "Beratung Erhalten", 
      description: "Erzählen Sie von Ihrem Projekt — wir finden die optimale Lösung", 
      submitText: "Anfrage Senden", 
      successTitle: "Anfrage erhalten!",
      successMessage: "Unser Experte wird Sie kontaktieren." 
    },
    labels: { name: "Ihr Name", email: "Email", phone: "Telefon", company: "Unternehmen", message: "Nachricht" },
    placeholders: { name: "Max Mustermann", email: "max@unternehmen.de", phone: "+49 (30) 123-4567", company: "Ihr Unternehmen GmbH", message: "Beschreiben Sie Ihre Aufgaben..." },
    button: { cancel: "Abbrechen", submit: "Wird gesendet...", privacy: "Durch Klicken akzeptieren Sie die", privacyLink: "Datenschutzrichtlinie" },
    benefits: [
      { icon: Clock, text: "Antwort in 15 Minuten" },
      { icon: Shield, text: "Ihre Daten sind geschützt" },
      { icon: Zap, text: "Kostenlose Beratung" },
    ],
  },
  nl: {
    trial: { 
      title: "Gratis Proberen", 
      description: "Krijg een gratis testoproep van de AI-assistent", 
      submitText: "Testaanroep Bestellen", 
      successTitle: "Aanvraag ontvangen!",
      successMessage: "Onze AI-assistent belt u binnenkort." 
    },
    demo: { 
      title: "Demo Aanvragen", 
      description: "Persoonlijke platformdemonstratie voor uw bedrijf", 
      submitText: "Demo Aanvragen", 
      successTitle: "Demo gepland!",
      successMessage: "Onze manager zal contact opnemen." 
    },
    call: { 
      title: "Oproep Boeken", 
      description: "We bellen u terug binnen 15 minuten", 
      submitText: "Bel Me", 
      successTitle: "We bellen snel!",
      successMessage: "We bellen u binnenkort terug." 
    },
    consultation: { 
      title: "Advies Krijgen", 
      description: "Vertel over uw project — we vinden de optimale oplossing", 
      submitText: "Aanvraag Verzenden", 
      successTitle: "Aanvraag ontvangen!",
      successMessage: "Onze expert zal contact opnemen." 
    },
    labels: { name: "Uw Naam", email: "Email", phone: "Telefoon", company: "Bedrijf", message: "Bericht" },
    placeholders: { name: "Jan de Vries", email: "jan@bedrijf.nl", phone: "+31 (20) 123-4567", company: "Uw Bedrijf B.V.", message: "Beschrijf uw taken..." },
    button: { cancel: "Annuleren", submit: "Verzenden...", privacy: "Door te klikken gaat u akkoord met het", privacyLink: "privacybeleid" },
    benefits: [
      { icon: Clock, text: "Antwoord in 15 minuten" },
      { icon: Shield, text: "Uw gegevens zijn beschermd" },
      { icon: Zap, text: "Gratis advies" },
    ],
  },
  fr: {
    trial: { 
      title: "Essayer Gratuitement", 
      description: "Obtenez un appel d'essai gratuit de l'assistant IA", 
      submitText: "Commander l'Appel", 
      successTitle: "Demande reçue!",
      successMessage: "Notre assistant IA vous appellera bientôt." 
    },
    demo: { 
      title: "Demander une Démo", 
      description: "Démonstration personnalisée de la plateforme", 
      submitText: "Demander une Démo", 
      successTitle: "Démo planifiée!",
      successMessage: "Notre gestionnaire vous contactera." 
    },
    call: { 
      title: "Réserver un Appel", 
      description: "Nous vous rappellerons dans 15 minutes", 
      submitText: "Appelez-Moi", 
      successTitle: "Nous vous appellerons!",
      successMessage: "Nous vous rappellerons bientôt." 
    },
    consultation: { 
      title: "Obtenir une Consultation", 
      description: "Parlez de votre projet — nous trouverons la solution optimale", 
      submitText: "Envoyer la Demande", 
      successTitle: "Demande reçue!",
      successMessage: "Notre expert vous contactera." 
    },
    labels: { name: "Votre Nom", email: "Email", phone: "Téléphone", company: "Entreprise", message: "Message" },
    placeholders: { name: "Jean Dupont", email: "jean@entreprise.fr", phone: "+33 (1) 23-45-67-89", company: "Votre Entreprise S.A.R.L.", message: "Décrivez vos tâches..." },
    button: { cancel: "Annuler", submit: "Envoi...", privacy: "En cliquant, vous acceptez la", privacyLink: "politique de confidentialité" },
    benefits: [
      { icon: Clock, text: "Réponse en 15 minutes" },
      { icon: Shield, text: "Vos données protégées" },
      { icon: Zap, text: "Consultation gratuite" },
    ],
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
  const [errors, setErrors] = useState<Record<string, string>>({})

  const t = translations[locale] || translations.ru
  const config = { ...t[type], title: title || t[type].title }
  const labels = t.labels
  const placeholders = t.placeholders
  const btnText = t.button
  const benefits = t.benefits

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({ name: "", email: "", phone: "", company: "", message: "" })
        setErrors({})
      }, 300)
    }
  }, [isOpen])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = locale === "ru" ? "Укажите имя" : "Name required"
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = locale === "ru" ? "Укажите корректный email" : "Valid email required"
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = locale === "ru" ? "Укажите телефон" : "Phone required"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type,
          locale,
          source: "cta_modal",
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrors({ form: locale === "ru" ? "Произошла ошибка. Попробуйте ещё раз." : "An error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-2xl border-0 shadow-2xl">
        {isSuccess ? (
          // Success State - Modern Design
          <div className="relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent)]" />
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
            
            <div className="relative py-12 sm:py-16 px-6 sm:px-8 text-center">
              {/* Success icon */}
              <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border border-white/30">
                <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
              
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {config.successTitle}
              </DialogTitle>
              <DialogDescription className="text-base sm:text-lg text-white/90 max-w-sm mx-auto leading-relaxed">
                {config.successMessage}
              </DialogDescription>
              
              <Button
                onClick={onClose}
                className="mt-8 bg-white text-violet-700 hover:bg-white/90 px-8 py-3 rounded-xl font-semibold shadow-lg"
              >
                {locale === "ru" ? "Отлично!" : locale === "es" ? "Excelente!" : locale === "de" ? "Großartig!" : "Great!"}
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Header with gradient */}
            <div className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent)]" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <DialogHeader className="relative space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white/90 text-xs font-medium w-fit mb-2">
                  <Sparkles className="w-3 h-3" />
                  {locale === "ru" ? "Бесплатно" : "Free"}
                </div>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-white pr-8">{config.title}</DialogTitle>
                <DialogDescription className="text-sm sm:text-base text-white/80">{config.description}</DialogDescription>
              </DialogHeader>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-slate-400" />
                  {labels.name} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={placeholders.name}
                  className={`h-11 sm:h-12 text-base rounded-xl border-slate-200 focus:border-violet-500 focus:ring-violet-500/20 ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-slate-400" />
                  {labels.email} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={placeholders.email}
                  className={`h-11 sm:h-12 text-base rounded-xl border-slate-200 focus:border-violet-500 focus:ring-violet-500/20 ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-slate-400" />
                  {labels.phone} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={placeholders.phone}
                  className={`h-11 sm:h-12 text-base rounded-xl border-slate-200 focus:border-violet-500 focus:ring-violet-500/20 ${errors.phone ? "border-red-500" : ""}`}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>

              {/* Company - for demo/consultation */}
              {(type === "demo" || type === "consultation") && (
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Building className="h-3.5 w-3.5 text-slate-400" />
                    {labels.company}
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={placeholders.company}
                    className="h-11 sm:h-12 text-base rounded-xl border-slate-200 focus:border-violet-500 focus:ring-violet-500/20"
                  />
                </div>
              )}

              {/* Message - for consultation */}
              {type === "consultation" && (
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <MessageSquare className="h-3.5 w-3.5 text-slate-400" />
                    {labels.message}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={placeholders.message}
                    rows={3}
                    className="resize-none text-base rounded-xl border-slate-200 focus:border-violet-500 focus:ring-violet-500/20"
                  />
                </div>
              )}

              {errors.form && (
                <p className="text-sm text-red-500 text-center bg-red-50 p-3 rounded-xl">{errors.form}</p>
              )}

              {/* Benefits */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon
                  return (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Icon className="w-3.5 h-3.5 text-violet-500" />
                      {benefit.text}
                    </div>
                  )
                })}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 h-11 sm:h-12 text-sm sm:text-base rounded-xl border-slate-200 hover:bg-slate-50 bg-transparent order-2 sm:order-1"
                  disabled={isSubmitting}
                >
                  {btnText.cancel}
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 h-11 sm:h-12 text-sm sm:text-base rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/25 order-1 sm:order-2" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {btnText.submit}
                    </>
                  ) : (
                    <>
                      {config.submitText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>

              {/* Privacy */}
              <p className="text-[10px] sm:text-xs text-slate-400 text-center leading-relaxed pt-1">
                {btnText.privacy}{" "}
                <a href={`/${locale}/privacy`} className="underline hover:text-violet-600 transition-colors">
                  {btnText.privacyLink}
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
