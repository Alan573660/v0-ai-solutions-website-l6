import type { Metadata } from "next"
import { LoginPageClient } from "@/components/pages/login-page-client"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Вход в AI Platform | M2 Solutions",
  description:
    "Войдите в AI Platform M2 Solutions для управления вашими AI-агентами, настройки автоматизации и аналитики",
  robots: "noindex, nofollow",
}

interface LoginPageProps {
  params: Promise<{
    locale: Locale
  }>
}

export default async function LoginPage({ params }: LoginPageProps) {
  const { locale } = await params

  return <LoginPageClient locale={locale} />
}
