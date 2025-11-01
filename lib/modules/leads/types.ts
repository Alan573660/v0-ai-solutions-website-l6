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
  details?: Record<string, unknown>
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

export interface LeadServiceResponse {
  success: boolean
  leadId?: string
  message?: string
  error?: string
}
