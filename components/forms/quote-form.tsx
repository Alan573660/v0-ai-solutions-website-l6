"use client"

import { useState } from "react"
import { FormShell } from "./form-shell"
import { TextInput, SelectInput, PhoneInput, Textarea, Checkbox } from "./form-inputs"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "next-intl"
import { validateForm, type FormData } from "@/lib/forms/validation"

interface QuoteFormProps {
  locale: Locale
  className?: string
}

export function QuoteForm({ locale, className }: QuoteFormProps) {
  const t = useTranslations()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    employees: "",
    solution: "",
    callVolume: "",
    integrations: "",
    requirements: "",
    budget: "",
    timeline: "",
    consent: false,
  })

  const solutionOptions = [
    { value: "voice-sales", label: "Voice Sales Manager" },
    { value: "hotel-concierge", label: "Hotel Concierge" },
    { value: "smb-solution", label: "SMB Solution" },
    { value: "enterprise", label: "Enterprise Solution" },
    { value: "custom", label: "Custom Development" },
    { value: "multiple", label: "Multiple Solutions" },
  ]

  const volumeOptions = [
    { value: "under-100", label: "Under 100 calls/month" },
    { value: "100-500", label: "100-500 calls/month" },
    { value: "500-2000", label: "500-2,000 calls/month" },
    { value: "2000-10000", label: "2,000-10,000 calls/month" },
    { value: "10000+", label: "10,000+ calls/month" },
  ]

  const handleSubmit = async (data: FormData) => {
    const validation = validateForm(data, ["name", "email", "phone", "company", "solution", "consent"])
    if (!validation.isValid) {
      throw new Error(validation.errors.join(", "))
    }

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        formType: "quote",
        locale,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit quote request")
    }

    return response.json()
  }

  return (
    <FormShell
      title="Get Custom Quote"
      description="Tell us about your needs and we'll provide a detailed proposal"
      onSubmit={handleSubmit}
      formData={formData}
      setFormData={setFormData}
      submitText="Request Quote"
      className={className}
      locale={locale}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <TextInput
          name="name"
          label="Full Name"
          required
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
        />
        <TextInput
          name="email"
          label="Work Email"
          type="email"
          required
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <PhoneInput
          name="phone"
          label="Phone Number"
          required
          value={formData.phone}
          onChange={(value) => setFormData({ ...formData, phone: value })}
        />
        <TextInput
          name="company"
          label="Company Name"
          required
          value={formData.company}
          onChange={(value) => setFormData({ ...formData, company: value })}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <SelectInput
          name="solution"
          label="Solution of Interest"
          required
          options={solutionOptions}
          value={formData.solution}
          onChange={(value) => setFormData({ ...formData, solution: value })}
        />
        <SelectInput
          name="callVolume"
          label="Expected Call Volume"
          options={volumeOptions}
          value={formData.callVolume}
          onChange={(value) => setFormData({ ...formData, callVolume: value })}
        />
      </div>

      <TextInput
        name="integrations"
        label="Required Integrations"
        placeholder="e.g., Salesforce, HubSpot, custom CRM..."
        value={formData.integrations}
        onChange={(value) => setFormData({ ...formData, integrations: value })}
      />

      <Textarea
        name="requirements"
        label="Specific Requirements"
        placeholder="Describe your specific needs, use cases, and any special requirements..."
        rows={4}
        value={formData.requirements}
        onChange={(value) => setFormData({ ...formData, requirements: value })}
      />

      <div className="grid md:grid-cols-2 gap-4">
        <TextInput
          name="budget"
          label="Budget Range"
          placeholder="e.g., $5,000-$10,000/month"
          value={formData.budget}
          onChange={(value) => setFormData({ ...formData, budget: value })}
        />
        <TextInput
          name="timeline"
          label="Implementation Timeline"
          placeholder="e.g., Within 3 months"
          value={formData.timeline}
          onChange={(value) => setFormData({ ...formData, timeline: value })}
        />
      </div>

      <Checkbox
        name="consent"
        label="I agree to be contacted about this quote request"
        required
        checked={formData.consent}
        onChange={(checked) => setFormData({ ...formData, consent: checked })}
      />
    </FormShell>
  )
}
