"use client"

import type React from "react"

import { useState } from "react"
import { FormShell, SubmitButton, type FormState } from "./form-shell"
import { TextInput, PhoneInput, SelectInput, CheckboxInput } from "./form-inputs"
import { validateForm, type ValidationError } from "@/lib/forms/validation"
import type { Locale } from "@/lib/i18n/config"

interface DemoFormData {
  name: string
  company: string
  email: string
  phone: string
  preferredDate: string
  preferredTime: string
  channel: string
  privacy: boolean
}

interface DemoFormProps {
  locale: Locale
  onSubmit?: (data: DemoFormData) => Promise<void>
  className?: string
}

export function DemoForm({ locale, onSubmit, className }: DemoFormProps) {
  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    channel: "web",
    privacy: false,
  })

  const [state, setState] = useState<FormState>({ status: "idle" })
  const [errors, setErrors] = useState<ValidationError[]>([])

  const channelOptions = [
    { value: "web", label: "Веб-конференция (Zoom/Teams)" },
    { value: "phone", label: "Телефонный звонок" },
    { value: "office", label: "Встреча в офисе" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validateForm("demo", formData, locale)
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
        const response = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "demo",
            locale,
            ...formData,
          }),
        })

        if (!response.ok) {
          throw new Error("Ошибка отправки формы")
        }
      }

      setState({ status: "success" })

      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "demo_submit_success", { locale })
      }
    } catch (error) {
      setState({ status: "error", message: "Произошла ошибка при отправке формы" })

      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "demo_submit_error", { locale })
      }
    }
  }

  const updateFormData = (field: keyof DemoFormData, value: any) => {
    setFormData({ ...formData, [field]: value })
    if (errors.some((error) => error.field === field)) {
      setErrors(errors.filter((error) => error.field !== field))
    }
  }

  return (
    <FormShell
      title="Запросить демонстрацию"
      description="Получите персональную демонстрацию возможностей платформы"
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

      <div className="grid md:grid-cols-2 gap-6">
        <TextInput
          label="Предпочтительная дата"
          name="preferredDate"
          type="date"
          value={formData.preferredDate}
          onChange={(value) => updateFormData("preferredDate", value)}
          errors={errors}
        />
        <TextInput
          label="Предпочтительное время"
          name="preferredTime"
          type="time"
          value={formData.preferredTime}
          onChange={(value) => updateFormData("preferredTime", value)}
          errors={errors}
        />
      </div>

      <SelectInput
        label="Способ проведения демо"
        name="channel"
        value={formData.channel}
        onChange={(value) => updateFormData("channel", value)}
        options={channelOptions}
        required
        errors={errors}
      />

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

      <SubmitButton isLoading={state.status === "loading"} disabled={!formData.privacy} dataCta="form-submit-demo">
        Запросить демо
      </SubmitButton>

      <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
    </FormShell>
  )
}
