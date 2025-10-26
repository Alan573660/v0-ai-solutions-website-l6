import { z } from "zod"

// Common validation schemas
export const EmailSchema = z.string().email().toLowerCase().trim()

export const PhoneSchema = z
  .string()
  .regex(/^\+?[\d\s\-()]{10,}$/, "Invalid phone number")
  .transform((val) => val.replace(/\s/g, ""))

export const URLSchema = z.string().url()

export const DateSchema = z.coerce.date()

// Sanitization helpers
export function sanitizeHTML(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
}

export function sanitizeSQL(input: string): string {
  return input.replace(/['";\\]/g, "")
}

// Input length limits
export const INPUT_LIMITS = {
  NAME: { min: 2, max: 100 },
  EMAIL: { min: 5, max: 255 },
  PHONE: { min: 10, max: 20 },
  MESSAGE: { min: 10, max: 1000 },
  DESCRIPTION: { min: 50, max: 5000 },
  COMPANY: { min: 2, max: 200 },
} as const

// Validate file uploads
export function validateFileUpload(file: File, maxSizeMB = 5, allowedTypes: string[] = []): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024

  if (file.size > maxSizeBytes) {
    throw new Error(`File size exceeds ${maxSizeMB}MB limit`)
  }

  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    throw new Error(`File type ${file.type} is not allowed`)
  }

  return true
}
