import { z } from "zod"

// Base contact schema
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  company: z.string().min(2, "Company must be at least 2 characters").optional(),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-()]{10,}$/, "Invalid phone number")
    .optional(),
})

// Consents schema
const ConsentsSchema = z.object({
  privacy: z.boolean().refine((val) => val === true, "Privacy consent is required"),
  news: z.boolean().optional(),
})

// UTM schema
const UTMSchema = z.object({
  source: z.string().optional(),
  campaign: z.string().optional(),
  medium: z.string().optional(),
})

// Lead form schema
export const LeadFormSchema = z.object({
  type: z.enum(["lead", "demo", "trial", "quote", "brief", "subscribe"]),
  locale: z.enum(["ru", "en", "es", "de", "nl", "fr"]),
  name: z.string().min(2).optional(),
  company: z.string().min(2).optional(),
  email: z.string().email(),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-()]{10,}$/)
    .optional(),
  message: z.string().max(1000).optional(),
  details: z.record(z.any()).optional(),
  consents: ConsentsSchema,
  utm: UTMSchema.optional(),
})

// Specific form schemas
export const DemoFormSchema = LeadFormSchema.extend({
  type: z.literal("demo"),
  name: z.string().min(2),
  company: z.string().min(2),
  phone: z.string().regex(/^\+?[\d\s\-()]{10,}$/),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  channel: z.enum(["phone", "video", "onsite"]),
})

export const TrialFormSchema = LeadFormSchema.extend({
  type: z.literal("trial"),
  name: z.string().min(2),
  company: z.string().min(2),
  phone: z.string().regex(/^\+?[\d\s\-()]{10,}$/),
  language: z.string().optional(),
  solutionType: z.string().optional(),
})

export const QuoteFormSchema = LeadFormSchema.extend({
  type: z.literal("quote"),
  name: z.string().min(2),
  company: z.string().min(2),
  phone: z.string().regex(/^\+?[\d\s\-()]{10,}$/),
  country: z.string().optional(),
  industry: z.string().optional(),
  employees: z.string().optional(),
  requirements: z.string().max(2000).optional(),
})

export const BriefFormSchema = LeadFormSchema.extend({
  type: z.literal("brief"),
  name: z.string().min(2),
  company: z.string().min(2),
  phone: z.string().regex(/^\+?[\d\s\-()]{10,}$/),
  role: z.string().min(2).optional(),
  requirements: z.string().min(50).max(5000),
  budget: z.string().optional(),
  timeline: z.string().optional(),
})

export const SubscribeFormSchema = z.object({
  type: z.literal("subscribe"),
  locale: z.enum(["ru", "en", "es", "de", "nl", "fr"]),
  email: z.string().email(),
  consents: ConsentsSchema,
})

// Type exports
export type LeadFormData = z.infer<typeof LeadFormSchema>
export type DemoFormData = z.infer<typeof DemoFormSchema>
export type TrialFormData = z.infer<typeof TrialFormSchema>
export type QuoteFormData = z.infer<typeof QuoteFormSchema>
export type BriefFormData = z.infer<typeof BriefFormSchema>
export type SubscribeFormData = z.infer<typeof SubscribeFormSchema>
