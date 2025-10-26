import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Globe,
  Languages,
  Mic,
  Brain,
  TrendingUp,
  Users,
  Zap,
  Target,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Будущее за мультиязычными AI-ассистентами: Тренды и прогнозы до 2030 года | AI Solutions",
  description:
    "Полный анализ развития мультиязычных AI-ассистентов. Технологические прорывы, рыночные тренды и прогнозы экспертов на ближайшие 5 лет.",
  keywords:
    "мультиязычные AI ассистенты, будущее искусственного интеллекта, многоязычные чат-боты, AI переводчики, голосовые ассистенты языки, машинный перевод будущее",
  openGraph: {
    title: "Будущее за мультиязычными AI-ассистентами: Тренды и прогнозы до 2030 года",
    description:
      "Полный анализ развития мультиязычных AI-ассистентов. Технологические прорывы, рыночные тренды и прогнозы экспертов на ближайшие 5 лет.",
    images: ["/multilingual-global-communication-ai-assistant.jpg"],
  },
}

export default function MultilingualAssistantsFuturePage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header locale={params.locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${params.locale}/blog`}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться к блогу
          </Link>

          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">Будущее AI</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Будущее за{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                мультиязычными AI-ассистентами
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Глубокий анализ технологических трендов, рыночных прогнозов и революционных изменений в сфере
              мультиязычных AI-ассистентов до 2030 года.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
            <Image
              src="/multilingual-global-communication-ai-assistant.jpg"
              alt="Мультиязычный AI-ассистент для глобальной коммуникации"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-90">Дата публикации: 20 января 2025</p>
              <p className="text-sm opacity-90">Время чтения: 18 минут</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Market Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Обзор рынка мультиязычных AI-ассистентов</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Рост рынка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">47%</div>
                  <p className="text-sm text-gray-600">CAGR до 2030 года</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-blue-600" />
                    Объем рынка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$89B</div>
                  <p className="text-sm text-gray-600">прогноз на 2030 год</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Languages className="w-5 h-5 mr-2 text-purple-600" />
                    Поддержка языков
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                  <p className="text-sm text-gray-600">языков к 2030 году</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Users className="w-5 h-5 mr-2 text-orange-600" />
                    Пользователи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 mb-2">4.2B</div>
                  <p className="text-sm text-gray-600">активных пользователей</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Эра глобальной коммуникации без языковых барьеров</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Мы стоим на пороге революции в глобальной коммуникации. По прогнозам Gartner, к 2030 году 85% всех
                взаимодействий между людьми и машинами будут происходить через мультиязычные AI-ассистенты. Рынок этих
                технологий растет со скоростью 47% в год и достигнет $89 млрд к концу десятилетия.
              </p>
              <p className="mb-6">
                Движущие силы этого роста — глобализация бизнеса, рост международной электронной торговли (которая
                увеличилась на 340% за последние 5 лет) и острая потребность компаний в обслуживании клиентов на их
                родном языке. Исследование Common Sense Advisory показывает, что 75% потребителей предпочитают покупать
                товары на своем родном языке, а 60% редко или никогда не покупают на сайтах только на английском языке.
              </p>
              <p className="mb-6">
                Технологические прорывы в области нейронного машинного перевода, обработки естественного языка и синтеза
                речи делают мультиязычные AI-ассистенты не просто возможными, но и экономически выгодными для бизнеса
                любого размера. Компании, внедрившие такие решения, сообщают о росте международных продаж на 42% и
                снижении затрат на поддержку клиентов на 65%.
              </p>
            </div>
          </section>

          {/* Current State */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Текущее состояние технологий</h2>

            <div className="space-y-8">
              {/* Neural Machine Translation */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700 flex items-center">
                    <Brain className="w-6 h-6 mr-3" />
                    Нейронный машинный перевод (NMT)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Современные NMT-системы достигли качества перевода, сопоставимого с профессиональными переводчиками
                    для основных языковых пар.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Текущие достижения:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                          BLEU-score до 45+ для основных языков
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                          Поддержка 100+ языков в реальном времени
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                          Контекстуальный перевод с учетом домена
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                          Адаптация к стилю и тону общения
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Лидеры рынка:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Google Translate (поддержка 133 языков)</li>
                        <li>• DeepL (превосходное качество для европейских языков)</li>
                        <li>• Microsoft Translator (интеграция с бизнес-системами)</li>
                        <li>• Amazon Translate (масштабируемость для enterprise)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Прорыв 2024 года:</h5>
                    <p className="text-blue-700 text-sm">
                      Модель GPT-4 Turbo с мультиязычными возможностями показала качество перевода на уровне 95% от
                      человеческого для 50+ языков, включая редкие и региональные диалекты.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Speech Recognition */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-700 flex items-center">
                    <Mic className="w-6 h-6 mr-3" />
                    Мультиязычное распознавание речи
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Технологии автоматического распознавания речи (ASR) достигли точности 95%+ для основных языков и
                    активно развиваются для диалектов и акцентов.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Ключевые возможности:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          Распознавание смешанной речи (code-switching)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          Адаптация к акцентам и диалектам
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          Работа в шумной среде
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          Потоковое распознавание в реальном времени
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Точность по языкам:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Английский: 97.5%</li>
                        <li>• Китайский (мандарин): 96.8%</li>
                        <li>• Русский: 95.2%</li>
                        <li>• Испанский: 96.1%</li>
                        <li>• Арабский: 93.7%</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Natural Language Understanding */}
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-700 flex items-center">
                    <Zap className="w-6 h-6 mr-3" />
                    Понимание естественного языка (NLU)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Современные NLU-системы способны понимать намерения, эмоции и контекст на множестве языков, учитывая
                    культурные особенности.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Возможности NLU:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                          Извлечение намерений и сущностей
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                          Анализ тональности и эмоций
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                          Понимание культурного контекста
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                          Обработка идиом и сленга
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Культурная адаптация:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Учет формальности общения (японский, корейский)</li>
                        <li>• Понимание региональных различий</li>
                        <li>• Адаптация к бизнес-этикету</li>
                        <li>• Обработка культурных табу и чувствительных тем</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Future Trends 2025-2030 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ключевые тренды 2025-2030</h2>

            <div className="space-y-8">
              {/* Trend 1 */}
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <h4 className="text-2xl font-semibold text-blue-700">Универсальные языковые модели</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    К 2027 году появятся универсальные модели, способные понимать и генерировать текст на 200+ языках с
                    единой архитектурой.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-2">Ключевые особенности:</h5>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Zero-shot перевод для новых языков</li>
                        <li>• Автоматическое изучение диалектов</li>
                        <li>• Кросс-лингвистический трансфер знаний</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-2">Прогнозируемые результаты:</h5>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Поддержка редких языков без дополнительного обучения</li>
                        <li>• Снижение стоимости локализации на 80%</li>
                        <li>• Качество перевода на уровне носителей языка</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trend 2 */}
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-l-green-500">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <h4 className="text-2xl font-semibold text-green-700">Эмоциональный интеллект в переводе</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    AI-ассистенты научатся не только переводить слова, но и передавать эмоции, тон и культурные нюансы.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-800 mb-2">Новые возможности:</h5>
                      <ul className="space-y-2 text-green-700">
                        <li>• Анализ эмоционального состояния говорящего</li>
                        <li>• Адаптация тона к культурным нормам</li>
                        <li>• Сохранение юмора и иронии при переводе</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-800 mb-2">Применение:</h5>
                      <ul className="space-y-2 text-green-700">
                        <li>• Дипломатические переговоры</li>
                        <li>• Международные продажи</li>
                        <li>• Кросс-культурное обучение</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trend 3 */}
              <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-l-purple-500">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <h4 className="text-2xl font-semibold text-purple-700">Мультимодальная коммуникация</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Интеграция текста, речи, жестов и визуальных элементов для полноценной межкультурной коммуникации.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-purple-800 mb-2">Технологии:</h5>
                      <ul className="text-purple-700 space-y-1 text-sm">
                        <li>• Распознавание жестов и мимики</li>
                        <li>• Синтез речи с эмоциями</li>
                        <li>• Визуальный перевод в реальном времени</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-800 mb-2">Сценарии использования:</h5>
                      <ul className="text-purple-700 space-y-1 text-sm">
                        <li>• Виртуальные международные встречи</li>
                        <li>• Туристические AR-приложения</li>
                        <li>• Образовательные платформы</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trend 4 */}
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-l-orange-500">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      4
                    </div>
                    <h4 className="text-2xl font-semibold text-orange-700">Персонализированная локализация</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    AI будет автоматически адаптировать контент не только к языку, но и к региональным предпочтениям и
                    культурным особенностям.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-orange-800 mb-2">Уровни персонализации:</h5>
                      <ul className="text-orange-700 space-y-1 text-sm">
                        <li>• Региональные диалекты и акценты</li>
                        <li>• Местные идиомы и выражения</li>
                        <li>• Культурные референсы и примеры</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-800 mb-2">Бизнес-эффект:</h5>
                      <ul className="text-orange-700 space-y-1 text-sm">
                        <li>• Повышение конверсии на 60%</li>
                        <li>• Улучшение пользовательского опыта</li>
                        <li>• Снижение культурных барьеров</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Market Predictions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Рыночные прогнозы и возможности</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">Рост по регионам (2025-2030)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Азиатско-Тихоокеанский регион</span>
                      <Badge className="bg-green-100 text-green-800">+52% CAGR</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Северная Америка</span>
                      <Badge className="bg-blue-100 text-blue-800">+45% CAGR</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Европа</span>
                      <Badge className="bg-purple-100 text-purple-800">+41% CAGR</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Латинская Америка</span>
                      <Badge className="bg-orange-100 text-orange-800">+38% CAGR</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Ключевые отрасли-драйверы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">E-commerce и розничная торговля</span>
                      <Badge className="bg-green-100 text-green-800">$28B</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Финансовые услуги</span>
                      <Badge className="bg-blue-100 text-blue-800">$18B</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Здравоохранение</span>
                      <Badge className="bg-purple-100 text-purple-800">$15B</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Образование</span>
                      <Badge className="bg-orange-100 text-orange-800">$12B</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Инвестиционные возможности</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">$12.5B</div>
                    <div className="text-sm text-gray-600 mb-2">Венчурные инвестиции в 2024</div>
                    <div className="text-xs text-blue-700">+85% к предыдущему году</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">340</div>
                    <div className="text-sm text-gray-600 mb-2">Новых стартапов в сфере</div>
                    <div className="text-xs text-green-700">За последние 18 месяцев</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
                    <div className="text-sm text-gray-600 mb-2">Единорогов в отрасли</div>
                    <div className="text-xs text-purple-700">Оценка свыше $1B</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Challenges and Solutions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Вызовы и решения</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-700 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Основные вызовы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="border-l-4 border-l-red-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Качество данных</h5>
                      <p className="text-sm text-gray-600">
                        Недостаток качественных параллельных корпусов для редких языков
                      </p>
                    </li>
                    <li className="border-l-4 border-l-orange-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Культурные нюансы</h5>
                      <p className="text-sm text-gray-600">
                        Сложность передачи культурного контекста и локальных особенностей
                      </p>
                    </li>
                    <li className="border-l-4 border-l-yellow-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Вычислительные ресурсы</h5>
                      <p className="text-sm text-gray-600">
                        Высокие требования к производительности для обработки множества языков
                      </p>
                    </li>
                    <li className="border-l-4 border-l-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Приватность данных</h5>
                      <p className="text-sm text-gray-600">
                        Обеспечение безопасности при обработке чувствительной информации
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-700 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Инновационные решения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="border-l-4 border-l-green-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Синтетические данные</h5>
                      <p className="text-sm text-gray-600">
                        Генерация искусственных корпусов для обучения моделей на редких языках
                      </p>
                    </li>
                    <li className="border-l-4 border-l-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Федеративное обучение</h5>
                      <p className="text-sm text-gray-600">Обучение моделей без централизации чувствительных данных</p>
                    </li>
                    <li className="border-l-4 border-l-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Edge Computing</h5>
                      <p className="text-sm text-gray-600">
                        Локальная обработка для снижения латентности и повышения приватности
                      </p>
                    </li>
                    <li className="border-l-4 border-l-indigo-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Культурные базы знаний</h5>
                      <p className="text-sm text-gray-600">
                        Специализированные датасеты с культурными и региональными особенностями
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Business Impact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Влияние на бизнес и общество</h2>

            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Трансформация глобального бизнеса</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-3">Новые возможности:</h5>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Мгновенный выход на новые рынки без языковых барьеров</li>
                        <li>• Персонализированное обслуживание клиентов на родном языке</li>
                        <li>• Автоматическая локализация контента и продуктов</li>
                        <li>• Глобальные команды без языковых ограничений</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-3">Экономический эффект:</h5>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Рост международных продаж на 40-60%</li>
                        <li>• Снижение затрат на локализацию на 70%</li>
                        <li>• Ускорение выхода на рынок в 3-5 раз</li>
                        <li>• Повышение удовлетворенности клиентов на 45%</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold text-green-700 mb-4">Социальное воздействие</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-green-800 mb-3">Демократизация знаний:</h5>
                      <ul className="space-y-2 text-green-700">
                        <li>• Доступ к образованию на родном языке</li>
                        <li>• Сохранение исчезающих языков и культур</li>
                        <li>• Равные возможности в цифровой экономике</li>
                        <li>• Преодоление информационного неравенства</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-800 mb-3">Культурное развитие:</h5>
                      <ul className="space-y-2 text-green-700">
                        <li>• Межкультурный диалог и понимание</li>
                        <li>• Сохранение языкового разнообразия</li>
                        <li>• Развитие мультикультурных сообществ</li>
                        <li>• Глобальная интеграция при сохранении идентичности</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-3xl font-bold mb-4">Готовы к мультиязычному будущему?</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Не ждите завтра — начните использовать мультиязычные AI-ассистенты уже сегодня и получите конкурентное
                  преимущество на глобальном рынке.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={`/${params.locale}/platform/demo`}
                    className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Попробовать демо
                  </Link>
                  <Link
                    href={`/${params.locale}/contacts`}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                  >
                    Получить консультацию
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </article>
    </div>
  )
}
