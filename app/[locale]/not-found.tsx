import Link from "next/link"
import { getTranslations } from "next-intl/server"

export default async function NotFound() {
  const t = await getTranslations()
  return (
    <main className="container mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-muted-foreground mb-6">{t("errors.404.subtitle")}</p>
      <Link href="/" className="text-primary">
        {t("errors.backHome")}
      </Link>
    </main>
  )
}
