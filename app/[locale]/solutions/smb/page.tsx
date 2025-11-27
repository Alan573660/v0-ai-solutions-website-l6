import { SMBClientPage } from "./smb-client-page"
import type { Locale } from "@/lib/i18n/config"

export const metadata = {
  title: "AI-решения для малого и среднего бизнеса | Автоматизация продаж и обслуживания",
  description:
    "Автоматизируйте обслуживание клиентов и увеличьте продажи на 87% с помощью голосовых AI-ассистентов. Полное погружение в бизнес, индивидуальная разработка за 1-4 недели. Команда экспертов с опытом 10+ лет.",
  keywords:
    "автоматизация бизнеса, AI для МСБ, голосовой ассистент, увеличение продаж, AI менеджер, автоматизация продаж, CRM интеграция",
  openGraph: {
    title: "AI-решения для малого и среднего бизнеса",
    description: "Автоматизация продаж и обслуживания клиентов с помощью AI. Увеличение конверсии на 87%.",
    type: "website",
  },
}

export default function SMBSolutionsPage({ params }: { params: { locale: Locale } }) {
  return <SMBClientPage params={params} />
}
