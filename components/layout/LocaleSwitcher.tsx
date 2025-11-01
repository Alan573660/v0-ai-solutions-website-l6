"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { locales } from "@/lib/i18n/config"

export default function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const active = useLocale()

  const switchTo = (next: string) => {
    if (pathname == null) return
    const segments = pathname.split("/")
    segments[1] = next // заменить первый сегмент локали
    router.push(segments.join("/"))
  }

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          style={{
            padding: "6px 10px",
            borderRadius: 6,
            border: "1px solid #ddd",
            background: l === active ? "#f2f2f2" : "white",
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
