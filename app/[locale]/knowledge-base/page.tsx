import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Video, Lightbulb, TrendingUp, Users, Settings } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "База знаний AI Solutions | Руководства и обучение",
  description:
    "Полная база знаний по AI-ассистентам. Руководства, видеоуроки, лучшие практики, кейсы использования и ответы на частые вопросы.",
  keywords: "база знаний AI, обучение AI ассистенты, руководства по настройке, лучшие практики",
}

interface KnowledgeBasePageProps {
  params: Promise<{ locale: Locale }> // Made params async
}

export default async function KnowledgeBasePage({ params }: KnowledgeBasePageProps) {
  // Made function async
  const { locale } = await params // Await params (not used but extracted for consistency)

  const categories = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Руководства",
      description: "Пошаговые инструкции по настройке",
      count: 45,
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Видеоуроки",
      description: "Обучающие видео и вебинары",
      count: 28,
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Лучшие практики",
      description: "Проверенные методы и советы",
      count: 32,
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Кейсы",
      description: "Реальные примеры внедрения",
      count: 18,
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Настройка",
      description: "Конфигурация и интеграции",
      count: 52,
      color: "bg-gray-100 text-gray-600",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Для команды",
      description: "Обучение сотрудников",
      count: 15,
      color: "bg-pink-100 text-pink-600",
    },
  ]

  const popularArticles = [
    {
      title: "Как настроить голосового ассистента для продаж за 30 минут",
      category: "Руководства",
      readTime: "15 мин",
      views: "2.3k",
      difficulty: "Начальный",
    },
    {
      title: "Интеграция с CRM: Salesforce, HubSpot, amoCRM",
      category: "Настройка",
      readTime: "25 мин",
      views: "1.8k",
      difficulty: "Средний",
    },
    {
      title: "Оптимизация сценариев диалогов для повышения конверсии",
      category: "Лучшие практики",
      readTime: "20 мин",
      views: "1.5k",
      difficulty: "Продвинутый",
    },
    {
      title: "Кейс: Увеличение продаж на 300% в ритейле с помощью AI",
      category: "Кейсы",
      readTime: "12 мин",
      views: "3.1k",
      difficulty: "Начальный",
    },
    {
      title: "Настройка многоязычного ассистента для международного бизнеса",
      category: "Настройка",
      readTime: "30 мин",
      views: "987",
      difficulty: "Продвинутый",
    },
    {
      title: "Обучение команды работе с AI-ассистентами",
      category: "Для команды",
      readTime: "18 мин",
      views: "1.2k",
      difficulty: "Средний",
    },
  ]

  const recentUpdates = [
    {
      title: "Новые возможности API v3.0",
      date: "15 января 2024",
      type: "Обновление",
    },
    {
      title: "Руководство по настройке WhatsApp интеграции",
      date: "12 января 2024",
      type: "Новая статья",
    },
    {
      title: "Вебинар: AI в банковском секторе",
      date: "10 января 2024",
      type: "Видео",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            База знаний
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Все что нужно знать о внедрении и использовании AI-ассистентов. Руководства, видеоуроки, лучшие практики и
            реальные кейсы.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder="Поиск по базе знаний..." className="pl-12 py-6 text-lg" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Категории</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                    {category.icon}
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные статьи</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {popularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <Badge
                      variant={
                        article.difficulty === "Начальный"
                          ? "default"
                          : article.difficulty === "Средний"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {article.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.readTime} чтения</span>
                    <span>{article.views} просмотров</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Последние обновления</h2>
            <div className="space-y-6">
              {recentUpdates.map((update, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{update.title}</h3>
                        <p className="text-gray-500 text-sm">{update.date}</p>
                      </div>
                      <Badge variant="outline">{update.type}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline">Показать все обновления</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Не нашли ответ на свой вопрос?</h2>
          <p className="text-xl mb-8 opacity-90">
            Обратитесь к нашей службе поддержки или предложите новую тему для базы знаний
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Связаться с поддержкой
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Предложить тему
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
