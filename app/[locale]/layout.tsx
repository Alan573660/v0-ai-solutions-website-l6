import type React from "react"
import type { Metadata } from "next"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { locales, type Locale } from "@/lib/i18n/config"
import { notFound } from "next/navigation"
import { CTAProvider } from "@/components/modals/cta-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const BASE_URL = "https://m2solutions.ai"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params

  // Build hreflang alternates for this page
  const alternates = {
    canonical: `${BASE_URL}/${locale}`,
    languages: {
      "ru": `${BASE_URL}/ru`,
      "en": `${BASE_URL}/en`,
      "es": `${BASE_URL}/es`,
      "de": `${BASE_URL}/de`,
      "nl": `${BASE_URL}/nl`,
      "fr": `${BASE_URL}/fr`,
      "x-default": `${BASE_URL}/ru`,
    },
  }

  return {
    alternates,
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <CTAProvider>
        <div className="flex min-h-screen flex-col">
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </div>
        <Toaster />
        <ScrollToTop />
      </CTAProvider>
    </ThemeProvider>
  )
}
