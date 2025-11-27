import { EnterpriseClientPage } from "./enterprise-client-page"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enterprise AI-решения для госсектора, банков и корпораций | AI Solutions",
  description:
    "Корпоративные AI-решения для государственных организаций, банков и крупного бизнеса. Соответствие 152-ФЗ, требованиям ЦБ РФ, ГОСТ, GDPR, ISO 27001, PCI DSS. Интеграция с СМЭВ 3.0, АБС, SAP, 1C. Высокая степень защиты данных, масштабирование до миллионов обращений. Выделенная команда экспертов и SLA 99.9% с финансовой гарантией.",
  keywords: [
    "enterprise AI решения",
    "AI для госсектора",
    "AI для банков",
    "корпоративная автоматизация",
    "искусственный интеллект для бизнеса",
    "автоматизация государственных услуг",
    "AI для министерств",
    "банковская автоматизация",
    "соответствие 152-ФЗ",
    "требования ЦБ РФ",
    "GDPR соответствие",
    "ISO 27001 сертификация",
    "PCI DSS Level 1",
    "интеграция СМЭВ 3.0",
    "интеграция с АБС",
    "интеграция SAP",
    "интеграция 1C",
    "защита персональных данных",
    "масштабируемые решения",
    "SLA 99.9%",
    "enterprise безопасность",
    "корпоративная интеграция",
    "выделенная инфраструктура",
    "голосовой AI для банков",
    "чат-боты для госсектора",
    "автоматизация колл-центра",
    "anti-fraud система",
    "голосовая биометрия",
  ].join(", "),
  authors: [{ name: "AI Solutions" }],
  creator: "AI Solutions",
  publisher: "AI Solutions",
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
  openGraph: {
    title: "Enterprise AI-решения | Госсектор, Банки, Корпорации | AI Solutions",
    description:
      "Безопасные и масштабируемые AI-решения с соответствием всем регуляторным требованиям. Интеграция с СМЭВ 3.0, АБС, SAP, 1C. SLA 99.9% с финансовой гарантией. 10+ лет опыта, 50+ enterprise клиентов.",
    type: "website",
    locale: "ru_RU",
    siteName: "AI Solutions",
    images: [
      {
        url: "/og-enterprise.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise AI-решения для госсектора и банков",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI-решения для госсектора, банков и корпораций",
    description:
      "Безопасные масштабируемые AI-решения. Соответствие 152-ФЗ, ЦБ РФ, GDPR. SLA 99.9%. 50+ enterprise клиентов.",
    images: ["/og-enterprise.jpg"],
  },
  alternates: {
    canonical: "/solutions/enterprise",
    languages: {
      ru: "/ru/solutions/enterprise",
      en: "/en/solutions/enterprise",
    },
  },
  other: {
    "application-name": "AI Solutions Enterprise",
    "article:section": "Enterprise Solutions",
    "article:tag": "AI, Enterprise, Government, Banking, Automation",
  },
}

export default function EnterpriseSolutionsPage({ params }: { params: { locale: Locale } }) {
  return <EnterpriseClientPage params={params} />
}
