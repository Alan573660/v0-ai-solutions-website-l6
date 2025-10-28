import { type Locale, locales } from "@/lib/i18n/config"

export const SITE = {
  name: "AI Solutions",
  domain: "https://m2solutions.ai",
  logo: "/logo.png",
  ogImage: "/og-image.jpg",
}

export function localePath(locale: Locale, path: string) {
  return `${SITE.domain}/${locale}${path.startsWith("/") ? path : `/${path}`}`
}

export function hreflangs(path: string) {
  return locales
    .map((l) => ({
      hreflang: l,
      href: localePath(l as Locale, path),
    }))
    .concat([{ hreflang: "x-default", href: SITE.domain + "/" }])
}

export const ogDefaults = {
  type: "website" as const,
  image: `${SITE.domain}/og-image.jpg`,
}

export const aiMetaTags = {
  topic: "Smart Building Automation, AI Home Systems, IoT, Property Digitalization",
  context: "solutions for businesses, developers, and housing management companies",
  summary:
    "AI Solutions provides intelligent building automation with real-time monitoring, analytics, access control and energy optimization.",
}
