import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, CheckCircle, TrendingUp, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: "AI для малого бизнеса: автоматизация продаж и рост выручки на 300% | AI Solutions",
  description:
    "Голосовой AI-менеджер для SMB: доступное решение для автоматизации продаж, обработки лидов 24/7 и увеличения конверсии на 40%. Окупаемость за 2-3 месяца. Реальные кейсы и цифры.",
  keywords: [
    "AI для малого бизнеса",
    "голосовой ассистент SMB",
    "автоматизация продаж малый бизнес",
    "AI менеджер по продажам",
    "увеличение продаж с AI",
    "искусственный интеллект для SMB",
    "голосовой робот для бизнеса",
    "автоматизация обработки лидов",
    "AI ассистент для предпринимателей",
    "цифровизация малого бизнеса",
    "рост конверсии с AI",
    "доступный AI для бизнеса",
  ].join(", "),
  openGraph: {
    title: "AI для малого бизнеса: рост продаж на 300% с голосовым ассистентом",
    description:
      "Доступное AI-решение для автоматизации продаж в малом бизнесе. Обработка лидов 24/7, рост конверсии на 40%, окупаемость за 2-3 месяца.",
    images: ["/small-business-ai-automation-sales-manager.jpg"],
    type: "article",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI для малого бизнеса: рост продаж на 300%",
    description: "Голосовой AI-менеджер для SMB: автоматизация продаж 24/7, рост конверсии на 40%",
  },
  alternates: {
    canonical: "https://aisolutions-m2.com/ru/blog/small-business-ai-sales",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  other: {
    "article:published_time": "2024-01-10T00:00:00Z",
    "article:modified_time": "2025-01-13T00:00:00Z",
    "article:author": "Дмитрий Назарбаев",
    "article:section": "Малый бизнес",
    "article:tag": "AI для SMB, автоматизация продаж, голосовой ассистент",
  },
}

export default function SmallBusinessAISalesPage({ params }: BlogPostPageProps) {
  const { locale } = params

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />

      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8 text-purple-600 hover:text-purple-700">
            <Link href={`/${locale}/blog`} className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад к блогу
            </Link>
          </Button>

          {/* Article Header */}
          <header className="space-y-6 mb-12">
            <Badge className="bg-purple-100 text-purple-800 border-purple-200">Малый бизнес</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance text-gray-900">
              Почему малому бизнесу пора доверить продажи искусственному интеллекту
            </h1>
            <p className="text-xl text-gray-600 text-pretty">
              Голосовой менеджер для SMB: доступное решение на базе искусственного интеллекта, которое помогает
              увеличивать продажи и экономить время
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-purple-600" />
                <span>Дмитрий Назарбаев</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-purple-600" />
                <span>10 января 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-purple-600" />
                <span>6 мин чтения</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video mb-12 rounded-xl overflow-hidden">
            <img
              src="/small-business-ai-automation-sales-manager.jpg"
              alt="Автоматизация малого бизнеса с AI"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Вызовы малого бизнеса в 2024 году</h2>
            <p className="text-gray-700 mb-6">
              Малый и средний бизнес сталкивается с уникальными вызовами: ограниченный бюджет, нехватка персонала и
              необходимость конкурировать с крупными игроками. При этом клиенты ожидают того же уровня сервиса, что и от
              больших компаний. Голосовые AI-ассистенты становятся решением, которое позволяет малому бизнесу
              автоматизировать продажи без значительных инвестиций.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как AI-ассистент работает для малого бизнеса</h2>
            <p className="text-gray-700 mb-4">
              Голосовой ассистент для малого бизнеса работает как виртуальный менеджер по продажам, который никогда не
              устает и не берет отпуск. Он принимает звонки 24/7, квалифицирует лидов, отвечает на частые вопросы и даже
              может закрывать простые сделки.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                Ключевые возможности для SMB
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Прием и обработка входящих звонков без участия человека</li>
                <li>• Квалификация лидов по заданным критериям</li>
                <li>• Запись клиентов на встречи и консультации</li>
                <li>• Предоставление информации о товарах и услугах</li>
                <li>• Сбор контактных данных потенциальных клиентов</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Реальные результаты внедрения</h2>
            <p className="text-gray-700 mb-4">
              Исследования показывают, что малые предприятия, внедрившие голосовых AI-ассистентов, увеличивают
              количество обработанных лидов на 300% и сокращают время ответа с нескольких часов до нескольких секунд.
              Это приводит к росту конверсии на 25-40%.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center p-6 border-purple-200">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-800">+300%</div>
                <div className="text-sm text-gray-600">Обработанных лидов</div>
              </Card>
              <Card className="text-center p-6 border-purple-200">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-800">+40%</div>
                <div className="text-sm text-gray-600">Рост конверсии</div>
              </Card>
              <Card className="text-center p-6 border-purple-200">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-800">24/7</div>
                <div className="text-sm text-gray-600">Доступность</div>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Доступность и окупаемость</h2>
            <p className="text-gray-700 mb-4">
              В отличие от найма дополнительного персонала, голосовой ассистент требует минимальных инвестиций.
              Стоимость решения для малого бизнеса начинается от 15,000 рублей в месяц, что эквивалентно зарплате одного
              менеджера, но при этом ассистент работает круглосуточно и обрабатывает неограниченное количество звонков.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Простота внедрения</h2>
            <p className="text-gray-700 mb-6">
              Внедрение голосового ассистента для малого бизнеса занимает всего 2-3 дня. Не требуется сложная
              техническая интеграция или обучение персонала. Ассистент настраивается под специфику вашего бизнеса и
              начинает работать сразу после подключения к телефонной линии.
            </p>

            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Готовы увеличить продажи с AI?</h3>
              <p className="mb-6">
                Получите персональную консультацию и узнайте, как голосовой ассистент может помочь вашему бизнесу
              </p>
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
