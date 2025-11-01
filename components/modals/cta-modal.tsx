"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, User, Building, MessageSquare, CheckCircle2, Loader2 } from "lucide-react"

interface CTAModalProps {
  isOpen: boolean
  onClose: () => void
  type: "trial" | "demo" | "call" | "consultation"
  title?: string
}

export default function CTAModal({ isOpen, onClose, type, title }: CTAModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const modalConfig = {
    trial: {
      title: title || "Попробовать бесплатно",
      description: "Получите бесплатный тестовый звонок от AI-ассистента, чтобы понять, как это работает",
      submitText: "Заказать тестовый звонок",
      successMessage: "Отлично! Наш AI-ассистент позвонит вам в ближайшее время для демонстрации возможностей.",
    },
    demo: {
      title: title || "Запросить демонстрацию",
      description: "Наш специалист проведет персональную демонстрацию платформы для вашего бизнеса",
      submitText: "Запросить демо",
      successMessage: "Спасибо! Наш менеджер свяжется с вами в ближайшее время для согласования времени демо.",
    },
    call: {
      title: title || "Заказать звонок",
      description: "Оставьте ваш номер телефона, и мы перезвоним вам в течение 15 минут",
      submitText: "Позвоните мне",
      successMessage: "Отлично! Мы перезвоним вам в ближайшее время.",
    },
    consultation: {
      title: title || "Получить консультацию",
      description: "Расскажите о вашем проекте, и мы подберем оптимальное решение",
      submitText: "Отправить запрос",
      successMessage: "Спасибо! Наш эксперт свяжется с вами для обсуждения вашего проекта.",
    },
  }

  const config = modalConfig[type] || modalConfig.trial

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
                  Ваше имя *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-sm">
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ivan@company.ru"
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-sm">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                  Телефон *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 123-45-67"
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              {(type === "demo" || type === "consultation") && (
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2 text-sm">
                    <Building className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                    Компания
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ООО «Ваша компания»"
                    className="h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>
              )}

              {type === "consultation" && (
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-sm">
                    <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                    Расскажите о вашем проекте
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите ваши задачи и цели..."
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
                  Отмена
                </Button>
                <Button type="submit" className="flex-1 h-10 sm:h-11 text-sm sm:text-base" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    config.submitText
                  )}
                </Button>
              </div>

              <p className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="/privacy" className="underline hover:text-primary">
                  политикой конфиденциальности
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
