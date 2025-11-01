import type { Locale } from "@/lib/i18n/config"

export interface ValidationError {
  field: string
  message: string
}

export interface FormData {
  [key: string]: any
}

// Validation rules
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
  // International phone number validation
  const phoneRegex = /^\+?[\d\s\-$$$$]{10,}$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
}

export const validateRequired = (value: any): boolean => {
  if (typeof value === "string") return value.trim().length > 0
  if (typeof value === "boolean") return value === true
  if (Array.isArray(value)) return value.length > 0
  return value != null
}

// Form validation schemas
export const formSchemas = {
  lead: {
    name: { required: true, minLength: 2 },
    company: { required: true, minLength: 2 },
    email: { required: true, type: "email" },
    phone: { required: true, type: "phone" },
    products: { required: false, type: "array" },
    message: { required: false, maxLength: 1000 },
    privacy: { required: true, type: "boolean" },
  },
  demo: {
    name: { required: true, minLength: 2 },
    company: { required: true, minLength: 2 },
    email: { required: true, type: "email" },
    phone: { required: true, type: "phone" },
    preferredDate: { required: false, type: "date" },
    preferredTime: { required: false, type: "time" },
    channel: { required: true, type: "select" },
    privacy: { required: true, type: "boolean" },
  },
  trial: {
    name: { required: true, minLength: 2 },
    company: { required: true, minLength: 2 },
    email: { required: true, type: "email" },
    phone: { required: true, type: "phone" },
    language: { required: false, type: "select" },
    solutionType: { required: false, type: "select" },
    privacy: { required: true, type: "boolean" },
  },
  quote: {
    name: { required: true, minLength: 2 },
    company: { required: true, minLength: 2 },
    email: { required: true, type: "email" },
    phone: { required: true, type: "phone" },
    country: { required: false, type: "select" },
    industry: { required: false, type: "select" },
    employees: { required: false, type: "select" },
    requirements: { required: false, maxLength: 2000 },
    privacy: { required: true, type: "boolean" },
  },
  brief: {
    name: { required: true, minLength: 2 },
    company: { required: true, minLength: 2 },
    email: { required: true, type: "email" },
    phone: { required: true, type: "phone" },
    role: { required: false, minLength: 2 },
    requirements: { required: true, minLength: 50, maxLength: 5000 },
    files: { required: false, type: "files" },
    budget: { required: false, type: "select" },
    timeline: { required: false, type: "select" },
    privacy: { required: true, type: "boolean" },
  },
  subscribe: {
    email: { required: true, type: "email" },
    privacy: { required: true, type: "boolean" },
  },
}

export const validateForm = (formType: keyof typeof formSchemas, data: FormData, locale: Locale): ValidationError[] => {
  const schema = formSchemas[formType]
  const errors: ValidationError[] = []

  Object.entries(schema).forEach(([field, rules]) => {
    const value = data[field]

    // Required validation
    if (rules.required && !validateRequired(value)) {
      errors.push({
        field,
        message: getErrorMessage("required", field, locale),
      })
      return
    }

    // Skip other validations if field is empty and not required
    if (!validateRequired(value) && !rules.required) return

    // Type validations
    if (rules.type === "email" && !validateEmail(value)) {
      errors.push({
        field,
        message: getErrorMessage("email", field, locale),
      })
    }

    if (rules.type === "phone" && !validatePhone(value)) {
      errors.push({
        field,
        message: getErrorMessage("phone", field, locale),
      })
    }

    if (rules.type === "boolean" && typeof value !== "boolean") {
      errors.push({
        field,
        message: getErrorMessage("boolean", field, locale),
      })
    }

    // Length validations
    if (rules.minLength && typeof value === "string" && value.length < rules.minLength) {
      errors.push({
        field,
        message: getErrorMessage("minLength", field, locale, rules.minLength),
      })
    }

    if (rules.maxLength && typeof value === "string" && value.length > rules.maxLength) {
      errors.push({
        field,
        message: getErrorMessage("maxLength", field, locale, rules.maxLength),
      })
    }
  })

  return errors
}

const errorMessages: Record<Locale, Record<string, string>> = {
  ru: {
    required: "Поле обязательно для заполнения",
    email: "Введите корректный email адрес",
    phone: "Введите корректный номер телефона",
    boolean: "Необходимо согласие",
    minLength: "Минимум {length} символов",
    maxLength: "Максимум {length} символов",
  },
  en: {
    required: "This field is required",
    email: "Please enter a valid email address",
    phone: "Please enter a valid phone number",
    boolean: "Agreement is required",
    minLength: "Minimum {length} characters",
    maxLength: "Maximum {length} characters",
  },
  es: {
    required: "Este campo es obligatorio",
    email: "Ingrese una dirección de email válida",
    phone: "Ingrese un número de teléfono válido",
    boolean: "Se requiere consentimiento",
    minLength: "Mínimo {length} caracteres",
    maxLength: "Máximo {length} caracteres",
  },
  de: {
    required: "Dieses Feld ist erforderlich",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
    phone: "Bitte geben Sie eine gültige Telefonnummer ein",
    boolean: "Zustimmung erforderlich",
    minLength: "Mindestens {length} Zeichen",
    maxLength: "Maximal {length} Zeichen",
  },
  nl: {
    required: "Dit veld is verplicht",
    email: "Voer een geldig e-mailadres in",
    phone: "Voer een geldig telefoonnummer in",
    boolean: "Toestemming vereist",
    minLength: "Minimaal {length} tekens",
    maxLength: "Maximaal {length} tekens",
  },
  fr: {
    required: "Ce champ est obligatoire",
    email: "Veuillez saisir une adresse email valide",
    phone: "Veuillez saisir un numéro de téléphone valide",
    boolean: "Consentement requis",
    minLength: "Minimum {length} caractères",
    maxLength: "Maximum {length} caractères",
  },
}

const getErrorMessage = (type: string, field: string, locale: Locale, param?: number): string => {
  let message = errorMessages[locale]?.[type] || errorMessages.ru[type]
  if (param !== undefined) {
    message = message.replace("{length}", param.toString())
  }
  return message
}
