import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Settings, Phone, MessageSquare, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Документация API AI Solutions | Руководство разработчика",
  description:
    "Полная документация API AI Solutions. Руководства по интеграции, примеры кода, SDK для разработчиков. Быстрый старт за 15 минут.",
  keywords: "API документация AI, SDK AI Solutions, интеграция голосовых ассистентов, REST API",
}

interface DocsPageProps {
  params: Promise<{ locale: Locale }> // Made params async
}

export default async function DocsPage({ params }: DocsPageProps) {
  // Made function async
  const { locale } = await params // Await params (not used but extracted for consistency)

  const sections = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Быстрый старт",
      description: "Интегрируйте AI-ассистента за 15 минут",
      items: ["Получение API ключа", "Первый запрос к API", "Настройка webhook'ов", "Тестирование интеграции"],
      link: "/docs/quickstart",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "API Reference",
      description: "Полное описание всех методов API",
      items: ["Аутентификация", "Создание ассистента", "Управление диалогами", "Аналитика и метрики"],
      link: "/docs/api",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Конфигурация",
      description: "Настройка ассистента под ваши задачи",
      items: ["Голосовые модели", "Сценарии диалогов", "Интеграции с CRM", "Настройки безопасности"],
      link: "/docs/configuration",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Голосовые вызовы",
      description: "Работа с телефонными звонками",
      items: ["Входящие звонки", "Исходящие звонки", "Переадресация", "Запись разговоров"],
      link: "/docs/voice",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Чат-боты",
      description: "Текстовые ассистенты для сайтов",
      items: ["Веб-виджет", "Telegram бот", "WhatsApp интеграция", "Кастомные каналы"],
      link: "/docs/chat",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Примеры кода",
      description: "Готовые решения для популярных задач",
      items: ["JavaScript SDK", "Python библиотека", "PHP интеграция", "React компоненты"],
      link: "/docs/examples",
    },
  ]

  const sdks = [
    {
      name: "JavaScript SDK",
      description: "Для веб-приложений и Node.js",
      version: "v2.1.0",
      install: "npm install @ai-solutions/sdk",
    },
    {
      name: "Python SDK",
      description: "Для Python приложений",
      version: "v1.8.0",
      install: "pip install ai-solutions",
    },
    {
      name: "PHP SDK",
      description: "Для PHP приложений",
      version: "v1.5.0",
      install: "composer require ai-solutions/sdk",
    },
    {
      name: "REST API",
      description: "Для любых языков программирования",
      version: "v3.0",
      install: "curl -X POST https://api.ai-solutions.com",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Документация для разработчиков
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Полное руководство по интеграции AI-ассистентов в ваши приложения. API, SDK, примеры кода и подробные
            инструкции.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Быстрый старт
            </Button>
            <Button size="lg" variant="outline">
              API Reference
            </Button>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Разделы документации</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                    {section.icon}
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href={section.link}>
                      Читать документацию
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">SDK и библиотеки</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sdks.map((sdk, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{sdk.name}</CardTitle>
                      <CardDescription>{sdk.description}</CardDescription>
                    </div>
                    <Badge variant="secondary">{sdk.version}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <code className="text-sm font-mono">{sdk.install}</code>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Документация
                    </Button>
                    <Button size="sm" variant="outline">
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Example */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Пример интеграции</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Создание голосового ассистента за 5 минут</CardTitle>
                <CardDescription>Простой пример интеграции с использованием JavaScript SDK</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm">
                    {`// 1. Установка SDK
npm install @ai-solutions/sdk

// 2. Инициализация
import { AIAssistant } from '@ai-solutions/sdk';

const assistant = new AIAssistant({
  apiKey: 'your-api-key',
  model: 'voice-sales-v2'
});

// 3. Создание ассистента
const salesBot = await assistant.create({
  name: 'Менеджер по продажам',
  voice: 'anna-ru',
  scenario: 'sales-qualification',
  integrations: {
    crm: 'salesforce'
  }
});

// 4. Обработка входящих звонков
assistant.onCall((call) => {
  console.log('Новый звонок:', call.phoneNumber);
  call.answer(salesBot);
});

// 5. Запуск
assistant.start();`}
                  </pre>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button>Попробовать в песочнице</Button>
                  <Button variant="outline">Полная документация</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Нужна помощь с интеграцией?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наша команда разработчиков поможет вам интегрировать AI-ассистентов в ваш проект
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Техническая поддержка
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
