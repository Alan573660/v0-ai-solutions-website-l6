import type React from "react"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { locales, type Locale } from "@/lib/i18n/config"
import { notFound } from "next/navigation"
import { CTAProvider } from "@/components/modals/cta-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

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

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <CTAProvider>
              <div className="flex min-h-screen flex-col">
                <Header locale={locale} />
                <main className="flex-1">{children}</main>
                <Footer locale={locale} />
              </div>
              <Toaster />
              <ScrollToTop />
            </CTAProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
