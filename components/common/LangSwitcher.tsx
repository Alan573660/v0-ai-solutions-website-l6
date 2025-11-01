"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { locales } from "@/lib/i18n/config"
import { useTranslations } from "next-intl"

function replaceLocale(pathname: string, next: string) {
  const parts = pathname.split("/").filter(Boolean)
  if (!parts.length) return `/${next}`
  // если первая часть — локаль, заменяем её
  if (locales.includes(parts[0] as any)) {
    parts[0] = next
  } else {
    parts.unshift(next)
  }
  return "/" + parts.join("/")
}

export default function LangSwitcher() {
  const pathname = usePathname() || "/"
  const t = useTranslations()
  return (
    <div className="relative">
      <div className="hidden md:flex items-center gap-2 text-xs">
        {locales.map((l) => (
          <Link
            key={l}
            href={replaceLocale(pathname, l)}
            className="px-2 py-1 border rounded hover:bg-gray-50"
            aria-label={t("lang.switchTo", { locale: l.toUpperCase() })}
          >
            {l.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  )
}
