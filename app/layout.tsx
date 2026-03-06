import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-mono",
})

const BASE_URL = "https://m2solutions.ai"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "M2 AI Solutions | Голосовые AI-ассистенты для бизнеса",
    template: "%s | M2 AI Solutions",
  },
  description:
    "Голосовые AI-ассистенты, которые продают и обслуживают клиентов 24/7. Автоматизация звонков, продаж и поддержки. 500+ проектов, 87% рост конверсии.",
  keywords: [
    "AI ассистент",
    "голосовой бот",
    "автоматизация продаж",
    "AI консьерж",
    "бизнес автоматизация",
    "голосовой ИИ",
    "автоматизация звонков",
    "ИИ для бизнеса",
    "M2 Solutions",
    "виртуальный ассистент",
  ],
  generator: "v0.app",
  applicationName: "M2 AI Solutions",
  authors: [{ name: "M2 AI Solutions", url: BASE_URL }],
  creator: "M2 AI Solutions",
  publisher: "M2 AI Solutions",
  verification: {
    yandex: "49597ab2b5da9621",
    google: "UlX8afSv-5VEW8Cyh6pLlFXk_1-3XKJzzRim_StwUJo",
  },
  alternates: {
    languages: {
      "ru": `${BASE_URL}/ru`,
      "en": `${BASE_URL}/en`,
      "es": `${BASE_URL}/es`,
      "de": `${BASE_URL}/de`,
      "nl": `${BASE_URL}/nl`,
      "fr": `${BASE_URL}/fr`,
      "x-default": `${BASE_URL}/ru`,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US", "es_ES", "de_DE", "nl_NL", "fr_FR"],
    url: BASE_URL,
    siteName: "M2 AI Solutions",
    title: "M2 AI Solutions | Голосовые AI-ассистенты для бизнеса",
    description:
      "Голосовые AI-ассистенты, которые продают и обслуживают клиентов 24/7. 500+ проектов, 87% рост конверсии.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "M2 AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M2 AI Solutions | Голосовые AI-ассистенты для бизнеса",
    description:
      "Голосовые AI-ассистенты, которые продают и обслуживают клиентов 24/7. 500+ проектов, 87% рост конверсии.",
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060a16" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "M2 AI Solutions",
                url: "https://m2solutions.ai",
                description:
                  "Голосовые AI-ассистенты для бизнеса. Автоматизация звонков, продаж и поддержки клиентов 24/7.",
                logo: `${BASE_URL}/logo.svg`,
                telephone: "+7-995-796-75-06",
                email: "info@m2solutions.ai",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "ул. Тверская, 15",
                  addressLocality: "Москва",
                  addressCountry: "RU",
                  postalCode: "125009",
                },
                sameAs: [
                  "https://t.me/m2solutions",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+7-995-796-75-06",
                  contactType: "sales",
                  availableLanguage: ["Russian", "English", "Spanish", "German", "Dutch", "French"],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                url: "https://m2solutions.ai",
                name: "M2 AI Solutions",
                description:
                  "Голосовые AI-ассистенты для автоматизации продаж, поддержки и управления клиентами",
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://m2solutions.ai/search?q={search_term_string}",
                  },
                  query_input: "required name=search_term_string",
                },
              },
            ]),
          }}
        />
        {children}
      </body>
    </html>
  )
}
