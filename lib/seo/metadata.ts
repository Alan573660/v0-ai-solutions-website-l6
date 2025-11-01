import type { Metadata } from "next"
import { locales } from "@/lib/i18n/config"

export function buildAlternates(locale: string, path = ""): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {}
  for (const l of locales) {
    languages[l] = `/${l}${path}`
  }
  return {
    canonical: `/${locale}${path}`,
    languages,
  }
}

export function makeOpenGraph(locale: string, title: string, description: string) {
  return {
    title,
    description,
    locale,
    siteName: "M2 AI Solutions",
    type: "website" as const,
    url: `/${locale}`,
  }
}
