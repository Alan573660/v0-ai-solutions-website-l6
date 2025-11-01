"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations()

  useEffect(() => {
    // Можно отправить лог куда нужно
    console.error(error)
  }, [error])

  return (
    <main className="container mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-2">500</h1>
      <p className="text-muted-foreground mb-6">{t("errors.500.subtitle")}</p>
      <div className="flex items-center gap-3 justify-center">
        <button onClick={reset} className="border rounded px-4 py-2 text-sm">
          {t("errors.tryAgain")}
        </button>
        <Link href="/" className="text-primary text-sm">
          {t("errors.backHome")}
        </Link>
      </div>
    </main>
  )
}
