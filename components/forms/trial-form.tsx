"use client"

import { useState } from "react"
import { FormShell } from "./form-shell"
import { TextInput, SelectInput, PhoneInput, Checkbox } from "./form-inputs"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "next-intl"
import { validateForm, type FormData } from "@/lib/forms/validation"

interface TrialFormProps {
  locale: Locale
  className?: string
}

export function TrialForm({ locale, className }: TrialFormProps) {
  const t = useTranslations()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    employees: "",
    useCase: "",
    budget: "",
    timeline: "",
    consent: false,
  })

  const industryOptions = [
    { value: "retail", label: "Retail & E-commerce" },
    { value: "hospitality", label: "Hotels & Hospitality" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance & Banking" },
    { value: "education", label: "Education" },
    { value: "real-estate", label: "Real Estate" },
    { value: "automotive", label: "Automotive" },
    { value: "other", label: "Other" },
  ]

  const employeeOptions = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-1000", label: "201-1000 employees" },
    { value: "1000+", label: "1000+ employees" },
  ]

  const budgetOptions = [
    { value: "under-1k", label: "Under $1,000/month" },
    { value: "1k-5k", label: "$1,000-$5,000/month" },
    { value: "5k-10k", label: "$5,000-$10,000/month" },
    { value: "10k-25k", label: "$10,000-$25,000/month" },
    { value: "25k+", label: "$25,000+/month" },
  ]

  const timelineOptions = [
    { value: "immediate", label: "Immediate (within 1 month)" },
    { value: "quarter", label: "This quarter (1-3 months)" },
    { value: "half-year", label: "Within 6 months" },
    { value: "year", label: "Within a year" },
    { value: "exploring", label: "Just exploring" },
  ]

  const handleSubmit = async (data: FormData) => {
    const validation = validateForm(data, ["name", "email", "phone", "company", "industry", "consent"])
    if (!validation.isValid) {
      throw new Error(validation.errors.join(", "))
    }

    const response = await fetch("/api/trial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        formType: "trial",
        locale,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit trial request")
    }

    return response.json()
  }

  return (
    <FormShell
      title="Start Your Free Trial"
      description="Get full access to our AI voice assistant platform for 14 days"
      onSubmit={handleSubmit}
      formData={formData}
      setFormData={setFormData}
      submitText="Start Free Trial"
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
          name="industry"
          label="Industry"
          required
          options={industryOptions}
          value={formData.industry}
          onChange={(value) => setFormData({ ...formData, industry: value })}
        />
        <SelectInput
          name="employees"
          label="Company Size"
          options={employeeOptions}
          value={formData.employees}
          onChange={(value) => setFormData({ ...formData, employees: value })}
        />
      </div>

      <TextInput
        name="useCase"
        label="Primary Use Case"
        placeholder="e.g., Customer support, Sales calls, Lead qualification..."
        value={formData.useCase}
        onChange={(value) => setFormData({ ...formData, useCase: value })}
      />

      <div className="grid md:grid-cols-2 gap-4">
        <SelectInput
          name="budget"
          label="Monthly Budget"
          options={budgetOptions}
          value={formData.budget}
          onChange={(value) => setFormData({ ...formData, budget: value })}
        />
        <SelectInput
          name="timeline"
          label="Implementation Timeline"
          options={timelineOptions}
          value={formData.timeline}
          onChange={(value) => setFormData({ ...formData, timeline: value })}
        />
      </div>

      <Checkbox
        name="consent"
        label="I agree to receive communications about the trial and product updates"
        required
        checked={formData.consent}
        onChange={(checked) => setFormData({ ...formData, consent: checked })}
      />
    </FormShell>
  )
}
