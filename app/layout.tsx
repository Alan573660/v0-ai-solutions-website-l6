import type React from "react"
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

export const metadata = {
  metadataBase: new URL("https://m2solutions.ai"),
  title: "AI Solutions — M2 Решения | Голосовые AI-ассистенты для бизнеса",
  description:
    "Голосовые AI-ассистенты, которые продают и обслуживают клиентов 24/7. Автоматизируйте весь путь клиента от заявки до счёта.",
  keywords: "AI ассистент, голосовой бот, автоматизация продаж, AI консьерж, бизнес автоматизация",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
