export interface Organization {
  name: string
  alternateName?: string
  url: string
  logo: string
  description: string
  foundingDate?: string
  founders?: Person[]
  address?: PostalAddress[]
  contactPoint?: ContactPoint[]
  sameAs?: string[]
}

export interface Person {
  name: string
  jobTitle?: string
  email?: string
  url?: string
}

export interface PostalAddress {
  streetAddress?: string
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
  addressCountry: string
}

export interface ContactPoint {
  telephone?: string
  email?: string
  contactType: string
  availableLanguage?: string[]
  areaServed?: string
}

export interface Product {
  name: string
  description: string
  image?: string
  brand?: string
  offers?: Offer
  aggregateRating?: AggregateRating
  review?: Review[]
}

export interface Service {
  name: string
  description: string
  provider: Organization
  areaServed?: string
  offers?: Offer
  aggregateRating?: AggregateRating
}

export interface Offer {
  price: string | number
  priceCurrency: string
  availability?: string
  validFrom?: string
  priceValidUntil?: string
  url?: string
}

export interface AggregateRating {
  ratingValue: string | number
  ratingCount: number
  bestRating?: string | number
  worstRating?: string | number
}

export interface Review {
  author: Person
  datePublished: string
  reviewBody: string
  reviewRating: Rating
}

export interface Rating {
  ratingValue: string | number
  bestRating?: string | number
  worstRating?: string | number
}

export interface FAQItem {
  question: string
  answer: string
}

export interface HowToStep {
  name: string
  text: string
  image?: string
  url?: string
}

export interface BreadcrumbItem {
  name: string
  url: string
}
