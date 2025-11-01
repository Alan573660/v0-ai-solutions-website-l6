import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Smartphone, Wifi, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: "Голосовые колонки и AI в отелях: тренд 2025 | AI Solutions",
  description:
    "Узнайте, как умные колонки с голосовыми ассистентами превращают гостиничные номера в современный сервис и повышают лояльность гостей.",
  keywords:
    "умные отели, голосовые колонки, AI в гостиницах, умный номер, гостиничные технологии, автоматизация отелей",
  openGraph: {
    title: "Голосовые колонки и AI в отелях: тренд 2025",
    description: "Умные колонки с голосовыми ассистентами в гостиничных номерах - технологии будущего уже сегодня",
    images: ["/smart-hotel-room-voice-assistant-technology.jpg"],
  },
}

export default function VoiceSpeakersHotelsPage({ params }: BlogPostPageProps) {
  const { locale } = params

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />

      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8 text-orange-600 hover:text-orange-700">
            <Link href={`/${locale}/blog`} className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад к блогу
            </Link>
          </Button>

          {/* Article Header */}
          <header className="space-y-6 mb-12">
            <Badge className="bg-orange-100 text-orange-800 border-orange-200">Технологии</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance text-gray-900">
              Голосовые колонки в гостиничных номерах: тренд 2025
            </h1>
            <p className="text-xl text-gray-600 text-pretty">
              Узнайте, как умные колонки с голосовыми ассистентами превращают гостиничные номера в современный сервис и
              повышают лояльность гостей
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-orange-600" />
                <span>Артем Сидоров</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-orange-600" />
                <span>5 января 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-600" />
                <span>8 мин чтения</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video mb-12 rounded-xl overflow-hidden">
            <img
              src="/smart-hotel-room-voice-assistant-technology.jpg"
              alt="Умные колонки в гостиничном номере"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Революция в гостиничном сервисе</h2>
            <p className="text-gray-700 mb-6">
              2025 год станет переломным для гостиничной индустрии. Умные колонки с голосовыми ассистентами перестают
              быть экзотикой и становятся стандартом современного отеля. Гости ожидают персонализированного сервиса,
              мгновенных ответов на вопросы и возможности управлять номером голосом.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что могут голосовые колонки в номере</h2>
            <p className="text-gray-700 mb-4">
              Современные голосовые ассистенты в отелях - это не просто устройства для воспроизведения музыки. Это
              полноценные консьержи, которые знают все об отеле, городе и могут решить большинство вопросов гостя без
              обращения к персоналу.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-orange-200">
                <Smartphone className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Управление номером</h3>
                <p className="text-sm text-gray-600">
                  Освещение, температура, шторы, телевизор - все под голосовым управлением
                </p>
              </Card>
              <Card className="p-6 border-orange-200">
                <Wifi className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Информация об отеле</h3>
                <p className="text-sm text-gray-600">Расписание ресторанов, спа-услуги, мероприятия и развлечения</p>
              </Card>
              <Card className="p-6 border-orange-200">
                <Star className="h-8 w-8 text-yellow-600 mb-3" />
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Городская информация</h3>
                <p className="text-sm text-gray-600">Достопримечательности, рестораны, транспорт, погода</p>
              </Card>
              <Card className="p-6 border-orange-200">
                <TrendingUp className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-green-800 mb-2">Заказ услуг</h3>
                <p className="text-sm text-gray-600">Room service, уборка, такси, бронирование столиков</p>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Персонализация и мультиязычность</h2>
            <p className="text-gray-700 mb-4">
              Современные голосовые ассистенты для отелей поддерживают множество языков и могут адаптироваться под
              предпочтения каждого гостя. Система запоминает предпочтения: любимую температуру в номере, предпочитаемый
              тип музыки, часто заказываемые услуги.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Статистика внедрения в 2024 году</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-800">73%</div>
                  <div className="text-sm text-gray-600">отелей планируют внедрение</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-800">+28%</div>
                  <div className="text-sm text-gray-600">рост удовлетворенности</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-800">-45%</div>
                  <div className="text-sm text-gray-600">снижение звонков на ресепшн</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Безопасность и приватность</h2>
            <p className="text-gray-700 mb-4">
              Одна из главных проблем внедрения голосовых технологий в отелях - обеспечение приватности гостей.
              Современные системы используют локальную обработку данных, шифрование и автоматическое удаление записей
              после выезда гостя.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Экономические преимущества</h2>
            <p className="text-gray-700 mb-4">
              Внедрение голосовых колонок в номера позволяет отелям сократить нагрузку на персонал ресепшн на 40-50%,
              увеличить продажи дополнительных услуг на 25% и повысить общую оценку отеля гостями на 15-20%.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Интеграция с системами отеля</h2>
            <p className="text-gray-700 mb-4">
              Голосовые ассистенты интегрируются с PMS (Property Management System), системами "умного дома", заказа еды
              и напитков. Это создает единую экосистему, где гость может управлять всеми аспектами своего пребывания
              голосом.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Будущее умных отелей</h2>
            <p className="text-gray-700 mb-6">
              К 2025 году голосовые ассистенты в номерах станут такими же обязательными, как Wi-Fi и кондиционер. Отели,
              которые не внедрят эти технологии, рискуют потерять конкурентоспособность, особенно среди молодых
              путешественников, привыкших к цифровым сервисам.
            </p>

            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Сделайте ваш отель умным</h3>
              <p className="mb-6">
                Узнайте, как голосовые технологии могут повысить удовлетворенность гостей и увеличить доходы
              </p>
              <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50">
                Запросить демо
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
