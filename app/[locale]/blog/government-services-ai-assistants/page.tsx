import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Shield, Zap, Globe, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: "AI для госуслуг: ассистенты нового поколения | AI Solutions",
  description:
    "Государственные структуры внедряют голосовых ассистентов: круглосуточная поддержка, цифровизация процессов и удобство для граждан.",
  keywords:
    "госуслуги, AI для государства, цифровизация, голосовой ассистент, государственные услуги, автоматизация госсектора",
  openGraph: {
    title: "AI для госуслуг: ассистенты нового поколения",
    description: "Государственные структуры внедряют голосовых ассистентов для улучшения обслуживания граждан",
    images: ["/government-digital-services-ai-assistant.jpg"],
  },
}

export default function GovernmentServicesAIPage({ params }: BlogPostPageProps) {
  const { locale } = params

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />

      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8 text-blue-600 hover:text-blue-700">
            <Link href={`/${locale}/blog`} className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад к блогу
            </Link>
          </Button>

          {/* Article Header */}
          <header className="space-y-6 mb-12">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Госсектор</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance text-gray-900">
              Госуслуги нового поколения: AI-ассистенты для граждан
            </h1>
            <p className="text-xl text-gray-600 text-pretty">
              Государственные структуры внедряют голосовых ассистентов: круглосуточная поддержка, цифровизация процессов
              и удобство для граждан
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-blue-600" />
                <span>Мария Иванова</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>8 января 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>9 мин чтения</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video mb-12 rounded-xl overflow-hidden">
            <img
              src="/government-digital-services-ai-assistant.jpg"
              alt="AI-ассистенты для госуслуг"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Цифровая трансформация госсектора</h2>
            <p className="text-gray-700 mb-6">
              Государственные учреждения по всему миру переходят на цифровые технологии, чтобы обеспечить гражданам
              более быстрое и удобное получение услуг. Голосовые AI-ассистенты становятся ключевым инструментом этой
              трансформации, позволяя автоматизировать рутинные процессы и освободить сотрудников для решения более
              сложных задач.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Преимущества AI для государственных услуг</h2>
            <p className="text-gray-700 mb-4">
              Внедрение голосовых ассистентов в госсекторе решает сразу несколько критических проблем: длинные очереди,
              ограниченные часы работы и необходимость личного присутствия для получения справочной информации.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center p-6 border-blue-200">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-semibold text-blue-800 mb-2">Безопасность</div>
                <div className="text-sm text-gray-600">Соответствие требованиям защиты персональных данных</div>
              </Card>
              <Card className="text-center p-6 border-blue-200">
                <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-semibold text-green-800 mb-2">Скорость</div>
                <div className="text-sm text-gray-600">Мгновенные ответы на типовые вопросы граждан</div>
              </Card>
              <Card className="text-center p-6 border-blue-200">
                <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-semibold text-purple-800 mb-2">Доступность</div>
                <div className="text-sm text-gray-600">Круглосуточная работа без выходных</div>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Практические применения</h2>
            <p className="text-gray-700 mb-4">
              Голосовые ассистенты в госсекторе могут обрабатывать широкий спектр запросов: от предоставления справочной
              информации до записи на прием к специалистам. Они интегрируются с существующими информационными системами
              и могут получать актуальные данные в режиме реального времени.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                Основные функции AI-ассистента для госуслуг
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Предоставление информации о государственных услугах и процедурах</li>
                <li>• Запись граждан на прием к специалистам</li>
                <li>• Проверка статуса заявлений и документов</li>
                <li>• Консультации по заполнению форм и документов</li>
                <li>• Направление к нужному специалисту или отделу</li>
                <li>• Сбор обратной связи о качестве услуг</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Кейс: Правительство Москвы</h2>
            <p className="text-gray-700 mb-4">
              Правительство Москвы внедрило голосового ассистента для обработки обращений граждан по вопросам городских
              услуг. Результаты впечатляют: время обработки запросов сократилось на 70%, а удовлетворенность граждан
              выросла до 94%. Ассистент обрабатывает более 10,000 звонков в день, освобождая сотрудников для решения
              сложных вопросов.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Требования к безопасности</h2>
            <p className="text-gray-700 mb-4">
              При работе с государственными данными критически важно соблюдение требований информационной безопасности.
              Наши AI-ассистенты соответствуют стандартам ГОСТ и требованиям ФЗ-152 {'"'}О персональных данных{'"'}. Все
              данные обрабатываются на территории РФ с использованием сертифицированных средств защиты информации.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Экономическая эффективность</h2>
            <p className="text-gray-700 mb-6">
              Внедрение голосовых ассистентов позволяет государственным учреждениям сократить операционные расходы на
              40-60% при одновременном повышении качества обслуживания граждан. Окупаемость проекта составляет 8-12
              месяцев за счет снижения нагрузки на персонал и увеличения пропускной способности.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Модернизируйте госуслуги с AI</h3>
              <p className="mb-6">
                Узнайте, как голосовые ассистенты могут улучшить обслуживание граждан в вашем учреждении
              </p>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Получить презентацию
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
