"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"

type Crumb = { href?: string; labelKey: string }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const t = useTranslations()
  const list = [{ href: "/", labelKey: "breadcrumbs.home" }, ...items]

  return (
    <nav aria-label={t("breadcrumbs.aria")}>
      <ol className="flex flex-wrap gap-2 text-sm text-muted-foreground">
        {list.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="hover:text-primary">
                {t(c.labelKey)}
              </Link>
            ) : (
              <span className="text-foreground">{t(c.labelKey)}</span>
            )}
            {i < list.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
