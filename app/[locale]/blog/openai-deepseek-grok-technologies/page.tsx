import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  Cpu,
  Zap,
  Globe,
  CheckCircle,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "OpenAI GPT-4 vs DeepSeek V3 vs Grok-2: детальное сравнение AI-платформ 2025 | AI Solutions",
  description:
    "Полное сравнение ведущих AI-технологий 2025: OpenAI GPT-4 Turbo, DeepSeek V3, Grok-2. Анализ стоимости ($0.27-$30 за 1M токенов), качества, скорости и применения в бизнесе. Рекомендации по выбору.",
  keywords: [
    "OpenAI GPT-4 сравнение",
    "DeepSeek V3 обзор",
    "Grok-2 xAI",
    "сравнение AI технологий 2025",
    "лучшая AI платформа для бизнеса",
    "OpenAI vs DeepSeek vs Grok",
    "стоимость AI моделей",
    "качество AI ответов",
    "выбор AI платформы",
    "искусственный интеллект для компаний",
    "AI модели для разработки",
    "ChatGPT альтернативы",
  ].join(", "),
  openGraph: {
    title: "OpenAI, DeepSeek и Grok: битва AI-технологий 2025 года",
    description:
      "Детальное сравнение GPT-4, DeepSeek V3 и Grok-2: стоимость, качество, скорость. Какая AI-платформа лучше для вашего бизнеса?",
    images: ["/ai-technology-comparison-openai-deepseek-grok.jpg"],
    type: "article",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenAI vs DeepSeek vs Grok: сравнение AI-платформ 2025",
    description: "Полный анализ ведущих AI-технологий: стоимость, качество, применение в бизнесе",
  },
  alternates: {
    canonical: "https://aisolutions-m2.com/ru/blog/openai-deepseek-grok-technologies",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  other: {
    "article:published_time": "2025-01-12T00:00:00Z",
    "article:modified_time": "2025-01-13T00:00:00Z",
    "article:author": "Команда исследователей AI Solutions",
    "article:section": "AI Технологии",
    "article:tag": "OpenAI, DeepSeek, Grok, сравнение AI, AI платформы",
  },
}

export default function AITechnologiesComparisonPage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header locale={params.locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${params.locale}/blog`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться к блогу
          </Link>

          <div className="mb-8">
            <Badge className="bg-blue-100 text-blue-700 mb-4">AI Технологии</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              OpenAI GPT-4 vs DeepSeek V3 vs Grok-2: детальное сравнение AI-платформ 2025 года
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                12 января 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                10 мин чтения
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Команда исследователей AI Solutions
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12">
            <Image
              src="/ai-technology-comparison-openai-deepseek-grok.jpg"
              alt="Сравнение AI технологий OpenAI DeepSeek Grok"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                2025 год стал переломным в развитии искусственного интеллекта. Три гиганта - OpenAI с GPT-4 Turbo,
                китайский DeepSeek V3 и Grok-2 от xAI - ведут ожесточенную борьбу за лидерство. Каждая платформа
                предлагает уникальные возможности, но какая из них лучше подходит для вашего бизнеса?
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Cpu className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-700">3</div>
                  <div className="text-sm text-gray-600">Ведущие AI-платформы</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-700">175B+</div>
                  <div className="text-sm text-gray-600">Параметров в моделях</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-700">100+</div>
                  <div className="text-sm text-gray-600">Поддерживаемых языков</div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Детальное сравнение платформ</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left p-4 font-semibold text-gray-900">Параметр</th>
                      <th className="text-center p-4 font-semibold text-green-700">OpenAI GPT-4</th>
                      <th className="text-center p-4 font-semibold text-blue-700">DeepSeek V3</th>
                      <th className="text-center p-4 font-semibold text-purple-700">Grok-2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">Стоимость за 1M токенов</td>
                      <td className="p-4 text-center">$30</td>
                      <td className="p-4 text-center">$0.27</td>
                      <td className="p-4 text-center">$15</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-medium">Скорость обработки</td>
                      <td className="p-4 text-center">Высокая</td>
                      <td className="p-4 text-center">Очень высокая</td>
                      <td className="p-4 text-center">Средняя</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">Качество ответов</td>
                      <td className="p-4 text-center">Отличное</td>
                      <td className="p-4 text-center">Очень хорошее</td>
                      <td className="p-4 text-center">Хорошее</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-medium">Поддержка русского</td>
                      <td className="p-4 text-center">Отличная</td>
                      <td className="p-4 text-center">Хорошая</td>
                      <td className="p-4 text-center">Средняя</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Platform Details */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  OpenAI GPT-4: Золотой стандарт
                </h3>
                <p className="text-green-700 mb-4 leading-relaxed">
                  GPT-4 остается эталоном качества в мире AI. Превосходная логика, креативность и понимание контекста
                  делают его идеальным для сложных бизнес-задач. Высокая стоимость компенсируется исключительным
                  качеством результатов.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Преимущества:</h4>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• Лучшее качество ответов</li>
                      <li>• Отличная работа с кодом</li>
                      <li>• Стабильность и надежность</li>
                      <li>• Богатая экосистема</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Недостатки:</h4>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• Высокая стоимость</li>
                      <li>• Ограничения по частоте запросов</li>
                      <li>• Зависимость от OpenAI</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3" />
                  DeepSeek V3: Революция в доступности
                </h3>
                <p className="text-blue-700 mb-4 leading-relaxed">
                  Китайский DeepSeek V3 произвел фурор, предложив качество, близкое к GPT-4, по цене в 100 раз ниже.
                  Модель показывает выдающиеся результаты в математике, программировании и логических задачах.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Преимущества:</h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Невероятно низкая стоимость</li>
                      <li>• Высокая скорость работы</li>
                      <li>• Отличные результаты в STEM</li>
                      <li>• Open-source версии</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Недостатки:</h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Ограничения по регионам</li>
                      <li>• Меньше креативности</li>
                      <li>• Новизна платформы</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-3" />
                  Grok-2: Инновации от xAI
                </h3>
                <p className="text-purple-700 mb-4 leading-relaxed">
                  Grok-2 от Илоны Маска выделяется уникальным подходом к обучению и интеграцией с X (Twitter). Модель
                  показывает хорошие результаты в реальном времени и обладает менее строгой цензурой.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Преимущества:</h4>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• Доступ к актуальным данным</li>
                      <li>• Меньше ограничений</li>
                      <li>• Интеграция с X</li>
                      <li>• Уникальный стиль общения</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Недостатки:</h4>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• Ограниченная доступность</li>
                      <li>• Высокая стоимость</li>
                      <li>• Меньше возможностей API</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Рекомендации по выбору</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-green-800 mb-3">Выбирайте OpenAI, если:</h4>
                    <ul className="text-green-700 space-y-2 text-sm">
                      <li>• Нужно максимальное качество</li>
                      <li>• Бюджет позволяет</li>
                      <li>• Критична стабильность</li>
                      <li>• Сложные творческие задачи</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-blue-800 mb-3">Выбирайте DeepSeek, если:</h4>
                    <ul className="text-blue-700 space-y-2 text-sm">
                      <li>• Ограниченный бюджет</li>
                      <li>• Большие объемы данных</li>
                      <li>• Технические задачи</li>
                      <li>• Нужна скорость</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-purple-800 mb-3">Выбирайте Grok, если:</h4>
                    <ul className="text-purple-700 space-y-2 text-sm">
                      <li>• Нужны актуальные данные</li>
                      <li>• Интеграция с X</li>
                      <li>• Меньше ограничений</li>
                      <li>• Экспериментальные проекты</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Не знаете, какую AI-платформу выбрать?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши эксперты помогут подобрать оптимальное AI-решение для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <BookOpen className="w-5 h-5 mr-2" />
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Поделиться статьей
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
