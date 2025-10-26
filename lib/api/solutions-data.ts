export interface SolutionData {
  slug: string
  name: string
  description: string
  features: string[]
  benefits: string[]
  useCases: string[]
  pricing?: {
    starting: string
    currency: string
  }
  integrations?: string[]
  languages: string[]
}

export const solutionsData: Record<string, SolutionData> = {
  "voice-sales-manager": {
    slug: "voice-sales-manager",
    name: "Voice Sales Manager",
    description: "AI-powered voice assistant for sales automation 24/7",
    features: [
      "Handles 100% of incoming calls",
      "Works 24/7 without breaks",
      "Increases conversion by 2-3x",
      "Qualifies leads automatically",
      "Integrates with CRM systems",
      "Multilingual support",
    ],
    benefits: [
      "Reduce cost per lead by 64%",
      "Increase response time to 100%",
      "Boost lead processing by 150%",
      "Improve conversion by 333%",
    ],
    useCases: [
      "Incoming call handling",
      "Outgoing call campaigns",
      "Lead qualification",
      "Appointment scheduling",
      "Product consultation",
    ],
    pricing: {
      starting: "2500",
      currency: "USD",
    },
    integrations: ["CRM", "Telephony", "Analytics", "Calendar"],
    languages: ["ru", "en", "es", "de", "nl", "fr"],
  },
  "hotel-concierge": {
    slug: "hotel-concierge",
    name: "Hotel AI Concierge",
    description: "24/7 AI concierge for hotels and hospitality",
    features: [
      "Room service ordering",
      "Restaurant reservations",
      "Local recommendations",
      "Check-in/check-out assistance",
      "Multilingual support",
      "Smart speaker integration",
    ],
    benefits: [
      "Reduce staff workload by 40%",
      "Increase guest satisfaction by 35%",
      "24/7 availability",
      "Instant response time",
    ],
    useCases: [
      "Room service requests",
      "Concierge services",
      "Guest information",
      "Booking assistance",
      "Local recommendations",
    ],
    pricing: {
      starting: "1500",
      currency: "USD",
    },
    integrations: ["PMS", "Smart Speakers", "Messaging", "Analytics"],
    languages: ["ru", "en", "es", "de", "nl", "fr"],
  },
  smb: {
    slug: "smb",
    name: "AI Assistant for Small Business",
    description: "Affordable AI assistant for small and medium businesses",
    features: [
      "Customer support automation",
      "Lead qualification",
      "Appointment scheduling",
      "FAQ handling",
      "Easy setup",
      "Affordable pricing",
    ],
    benefits: [
      "Save time on routine tasks",
      "Never miss a customer call",
      "Reduce operational costs",
      "Scale without hiring",
    ],
    useCases: ["Customer inquiries", "Appointment booking", "Order taking", "Basic support", "Lead capture"],
    pricing: {
      starting: "500",
      currency: "USD",
    },
    integrations: ["Phone", "Email", "Calendar", "CRM"],
    languages: ["ru", "en", "es", "de", "nl", "fr"],
  },
  enterprise: {
    slug: "enterprise",
    name: "Enterprise AI Platform",
    description: "Scalable AI assistant platform for large enterprises",
    features: [
      "Custom AI models",
      "Multi-department support",
      "Advanced analytics",
      "Enterprise security",
      "Dedicated support",
      "Custom integrations",
    ],
    benefits: [
      "Handle thousands of calls simultaneously",
      "Reduce support costs by 60%",
      "Improve customer satisfaction",
      "Scale globally",
    ],
    useCases: [
      "Customer support",
      "Sales automation",
      "Internal helpdesk",
      "Multi-channel support",
      "Complex workflows",
    ],
    pricing: {
      starting: "10000",
      currency: "USD",
    },
    integrations: ["Enterprise CRM", "ERP", "Custom APIs", "Analytics"],
    languages: ["ru", "en", "es", "de", "nl", "fr"],
  },
  custom: {
    slug: "custom",
    name: "Custom AI Solution",
    description: "Tailored AI assistant for your specific needs",
    features: [
      "Custom development",
      "Industry-specific features",
      "Unique integrations",
      "Dedicated team",
      "Ongoing support",
      "Full customization",
    ],
    benefits: ["Perfect fit for your business", "Competitive advantage", "Flexible pricing", "Long-term partnership"],
    useCases: [
      "Industry-specific workflows",
      "Complex integrations",
      "Unique requirements",
      "Specialized domains",
      "Custom features",
    ],
    integrations: ["Custom APIs", "Legacy Systems", "Third-party Services"],
    languages: ["ru", "en", "es", "de", "nl", "fr"],
  },
}

export function getSolutionBySlug(slug: string): SolutionData | null {
  return solutionsData[slug] || null
}

export function getAllSolutions(): SolutionData[] {
  return Object.values(solutionsData)
}
