"use client"

import type React from "react"

import { useState } from "react"
import { FormShell, SubmitButton, type FormState } from "./form-shell"
import { TextInput, PhoneInput, SelectInput, TextareaInput, CheckboxInput } from "./form-inputs"
import { validateForm, type ValidationError } from "@/lib/forms/validation"
import type { Locale } from "@/lib/i18n/config"

interface LeadFormData {
  name: string
  company: string
  email: string
  phone: string
  products: string[]
  message: string
  privacy: boolean
  news: boolean
}

interface LeadFormProps {
  locale: Locale
  onSubmit?: (data: LeadFormData) => Promise<void>
  className?: string
}

export function LeadForm({ locale, onSubmit, className }: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    products: [],
    message: "",
    privacy: false,
    news: false,
  })

  const [state, setState] = useState<FormState>({ status: "idle" })
  const [errors, setErrors] = useState<ValidationError[]>([])

  const productOptions = [
    { value: "voice-sales", label: "Голосовой менеджер продаж" },
    { value: "hotel-concierge", label: "AI-консьерж для отелей" },
    { value: "smb", label: "Решения для малого бизнеса" },
    { value: "enterprise", label: "Enterprise решения" },
    { value: "custom", label: "Индивидуальная разработка" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const validationErrors = validateForm("lead", formData, locale)
    setErrors(validationErrors)

    if (validationErrors.length > 0) {
      setState({ status: "error", message: "Пожалуйста, исправьте ошибки в форме" })
      return
    }

    setState({ status: "loading" })

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Default submission to API
        const response = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "lead",
            locale,
            ...formData,
            utm: {
              source: new URLSearchParams(window.location.search).get("utm_source"),
              campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
              medium: new URLSearchParams(window.location.search).get("utm_medium"),
            },
          }),
        })

        if (!response.ok) {
          throw new Error("Ошибка отправки формы")
        }
      }

      setState({ status: "success" })

      // Analytics event
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "form_submit_success", {
          form_type: "lead",
          locale,
        })
      }
    } catch (error) {
      setState({ status: "error", message: "Произошла ошибка при отправке формы" })

      // Analytics event
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "form_submit_error", {
          form_type: "lead",
          locale,
        })
      }
    }
  }

  const updateFormData = (field: keyof LeadFormData, value: any) => {
    setFormData({ ...formData, [field]: value })
    // Clear field errors when user starts typing
    if (errors.some((error) => error.field === field)) {
      setErrors(errors.filter((error) => error.field !== field))
    }
  }

  return (
    <FormShell
      title="Оставить заявку"
      description="Расскажите о ваших потребностях, и мы подготовим персональное предложение"
      state={state}
      onSubmit={handleSubmit}
      className={className}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <TextInput
          label="Имя"
          name="name"
          value={formData.name}
          onChange={(value) => updateFormData("name", value)}
          required
          errors={errors}
        />
        <TextInput
          label="Компания"
          name="company"
          value={formData.company}
          onChange={(value) => updateFormData("company", value)}
          required
          errors={errors}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <TextInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(value) => updateFormData("email", value)}
          required
          errors={errors}
        />
        <PhoneInput
          label="Телефон"
          name="phone"
          value={formData.phone}
          onChange={(value) => updateFormData("phone", value)}
          required
          errors={errors}
        />
      </div>

      <SelectInput
        label="Интересующие продукты"
        name="products"
        value={formData.products[0] || ""}
        onChange={(value) => updateFormData("products", value ? [value] : [])}
        options={productOptions}
        errors={errors}
      />

      <TextareaInput
        label="Сообщение"
        name="message"
        value={formData.message}
        onChange={(value) => updateFormData("message", value)}
        placeholder="Расскажите подробнее о ваших задачах и требованиях..."
        errors={errors}
      />

      <div className="space-y-4">
        <CheckboxInput
          label="privacy"
          name="privacy"
          checked={formData.privacy}
          onChange={(checked) => updateFormData("privacy", checked)}
          required
          errors={errors}
        >
          Согласен на обработку персональных данных и получение коммерческих предложений
        </CheckboxInput>

        <CheckboxInput
          label="news"
          name="news"
          checked={formData.news}
          onChange={(checked) => updateFormData("news", checked)}
          errors={errors}
        >
          Хочу получать новости и обновления продуктов
        </CheckboxInput>
      </div>

      <SubmitButton isLoading={state.status === "loading"} disabled={!formData.privacy} dataCta="form-submit-lead">
        Отправить заявку
      </SubmitButton>

      {/* Honeypot field for spam protection */}
      <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
    </FormShell>
  )
}
