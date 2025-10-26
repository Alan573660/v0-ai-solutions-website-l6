import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Clock, Search, User } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { BlogNewsletterSection } from "@/components/blog/blog-newsletter-section"

interface BlogPageProps {
  params: Promise<{ locale: Locale }>
}

const translations = {
  ru: {
    title: "Блог AI Solutions",
    subtitle: "Инсайты, тренды и лучшие практики внедрения голосового ИИ в вашем бизнесе",
    searchPlaceholder: "Поиск статей...",
    featuredTitle: "Рекомендуемые статьи",
    allPostsTitle: "Все статьи",
    readArticle: "Читать статью",
    readMore: "Читать далее",
    newsletterTitle: "Будьте в курсе",
    newsletterSubtitle: "Получайте последние инсайты о голосовом ИИ и автоматизации бизнеса прямо на вашу почту",
    emailPlaceholder: "Введите ваш email",
    subscribe: "Подписаться",
    noSpam: "Никакого спама. Отписаться можно в любое время.",
    allCategory: "Все",
  },
  en: {
    title: "AI Solutions Blog",
    subtitle: "Insights, trends and best practices for implementing voice AI in your business",
    searchPlaceholder: "Search articles...",
    featuredTitle: "Featured Articles",
    allPostsTitle: "All Articles",
    readArticle: "Read Article",
    readMore: "Read More",
    newsletterTitle: "Stay Updated",
    newsletterSubtitle: "Get the latest insights on voice AI and business automation delivered to your inbox",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    noSpam: "No spam. Unsubscribe anytime.",
    allCategory: "All",
  },
  es: {
    title: "Blog de AI Solutions",
    subtitle: "Perspectivas, tendencias y mejores prácticas para implementar IA de voz en su negocio",
    searchPlaceholder: "Buscar artículos...",
    featuredTitle: "Artículos Destacados",
    allPostsTitle: "Todos los Artículos",
    readArticle: "Leer Artículo",
    readMore: "Leer Más",
    newsletterTitle: "Manténgase Actualizado",
    newsletterSubtitle:
      "Reciba las últimas perspectivas sobre IA de voz y automatización empresarial en su bandeja de entrada",
    emailPlaceholder: "Ingrese su correo electrónico",
    subscribe: "Suscribirse",
    noSpam: "Sin spam. Cancele en cualquier momento.",
    allCategory: "Todos",
  },
  de: {
    title: "AI Solutions Blog",
    subtitle: "Einblicke, Trends und Best Practices für die Implementierung von Sprach-KI in Ihrem Unternehmen",
    searchPlaceholder: "Artikel suchen...",
    featuredTitle: "Empfohlene Artikel",
    allPostsTitle: "Alle Artikel",
    readArticle: "Artikel Lesen",
    readMore: "Weiterlesen",
    newsletterTitle: "Bleiben Sie auf dem Laufenden",
    newsletterSubtitle:
      "Erhalten Sie die neuesten Einblicke zu Sprach-KI und Geschäftsautomatisierung direkt in Ihr Postfach",
    emailPlaceholder: "Geben Sie Ihre E-Mail ein",
    subscribe: "Abonnieren",
    noSpam: "Kein Spam. Jederzeit abbestellbar.",
    allCategory: "Alle",
  },
  nl: {
    title: "AI Solutions Blog",
    subtitle: "Inzichten, trends en best practices voor het implementeren van spraak-AI in uw bedrijf",
    searchPlaceholder: "Zoek artikelen...",
    featuredTitle: "Aanbevolen Artikelen",
    allPostsTitle: "Alle Artikelen",
    readArticle: "Artikel Lezen",
    readMore: "Lees Meer",
    newsletterTitle: "Blijf op de Hoogte",
    newsletterSubtitle: "Ontvang de laatste inzichten over spraak-AI en bedrijfsautomatisering in uw inbox",
    emailPlaceholder: "Voer uw e-mail in",
    subscribe: "Abonneren",
    noSpam: "Geen spam. Op elk moment opzegbaar.",
    allCategory: "Alle",
  },
  fr: {
    title: "Blog AI Solutions",
    subtitle: "Perspectives, tendances et meilleures pratiques pour implémenter l'IA vocale dans votre entreprise",
    searchPlaceholder: "Rechercher des articles...",
    featuredTitle: "Articles en Vedette",
    allPostsTitle: "Tous les Articles",
    readArticle: "Lire l'Article",
    readMore: "Lire Plus",
    newsletterTitle: "Restez Informé",
    newsletterSubtitle:
      "Recevez les dernières perspectives sur l'IA vocale et l'automatisation des entreprises dans votre boîte de réception",
    emailPlaceholder: "Entrez votre email",
    subscribe: "S'abonner",
    noSpam: "Pas de spam. Désabonnez-vous à tout moment.",
    allCategory: "Tous",
  },
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  const t = translations[locale]

  const posts = [
    {
      id: "voice-search-seo-ai-optimization-2025",
      title: "Voice Search SEO 2025: Как оптимизировать контент для голосового поиска и AI",
      excerpt:
        "Полное руководство по оптимизации контента для голосового поиска в 2025 году. Узнайте, как адаптировать SEO-стратегию под голосовых ассистентов, featured snippets и NLP. Реальный кейс с ростом трафика на 340%.",
      author: "Дмитрий Соколов",
      date: "2025-01-18",
      readTime: "15 мин чтения",
      category: "SEO",
      image: "/voice-search-seo-2025-hero.jpg",
      featured: true,
      seoTitle: "Voice Search SEO 2025: Оптимизация для голосового поиска | AI Solutions",
      seoDescription:
        "Полное руководство по Voice Search SEO 2025: conversational keywords, featured snippets, schema markup, NLP optimization. Кейс с ростом на 340%.",
    },
    {
      id: "voice-assistants-increase-sales-3x",
      title: "Как голосовые ассистенты увеличивают продажи в 3 раза",
      excerpt:
        "Узнайте, как голосовой AI-ассистент автоматизирует продажи, снижает издержки и повышает конверсию бизнеса в 3 раза. Реальные кейсы и практические советы по внедрению.",
      author: "Александр Петров",
      date: "2024-01-15",
      readTime: "8 мин чтения",
      category: "Продажи",
      image: "/voice-assistant-sales-increase-business-growth.jpg",
      featured: true,
      seoTitle: "Как голосовые ассистенты увеличивают продажи в 3 раза | AI Solutions",
      seoDescription:
        "Узнайте, как голосовой AI-ассистент автоматизирует продажи, снижает издержки и повышает конверсию бизнеса в 3 раза.",
    },
    {
      id: "hotel-automation-no-queues",
      title: "Автоматизация отеля: ресепшн без очередей",
      excerpt:
        "Цифровой консьерж и голосовой ассистент для гостиниц: как AI помогает ускорить обслуживание гостей и повысить уровень сервиса. Практические решения для отельного бизнеса.",
      author: "Анна Коваленко",
      date: "2024-01-12",
      readTime: "7 мин чтения",
      category: "Отели",
      image: "/hotel-reception-automation-ai-assistant.jpg",
      featured: true,
      seoTitle: "Автоматизация отеля и ресепшн без очередей | AI Solutions",
      seoDescription:
        "Цифровой консьерж и голосовой ассистент для гостиниц: как AI помогает ускорить обслуживание гостей и повысить уровень сервиса.",
    },
    {
      id: "small-business-ai-sales",
      title: "Почему малому бизнесу пора доверить продажи искусственному интеллекту",
      excerpt:
        "Голосовой менеджер для SMB: доступное решение на базе искусственного интеллекта, которое помогает увеличивать продажи и экономить время. Руководство по внедрению для малого бизнеса.",
      author: "Дмитрий Назарбаев",
      date: "2024-01-10",
      readTime: "6 мин чтения",
      category: "Малый бизнес",
      image: "/small-business-ai-automation-sales-manager.jpg",
      featured: false,
      seoTitle: "Автоматизация малого бизнеса с AI: рост продаж | AI Solutions",
      seoDescription:
        "Голосовой менеджер для SMB: доступное решение на базе искусственного интеллекта, которое помогает увеличивать продажи и экономить время.",
    },
    {
      id: "government-services-ai-assistants",
      title: "Госуслуги нового поколения: AI-ассистенты для граждан",
      excerpt:
        "Государственные структуры внедряют голосовых ассистентов: круглосуточная поддержка, цифровизация процессов и удобство для граждан. Опыт внедрения в госсекторе.",
      author: "Мария Иванова",
      date: "2024-01-08",
      readTime: "9 мин чтения",
      category: "Госсектор",
      image: "/government-digital-services-ai-assistant.jpg",
      featured: false,
      seoTitle: "AI для госуслуг: ассистенты нового поколения | AI Solutions",
      seoDescription:
        "Государственные структуры внедряют голосовых ассистентов: круглосуточная поддержка, цифровизация процессов и удобство для граждан.",
    },
    {
      id: "voice-speakers-hotels-trend-2025",
      title: "Голосовые колонки в гостиничных номерах: тренд 2025",
      excerpt:
        "Узнайте, как умные колонки с голосовыми ассистентами превращают гостиничные номера в современный сервис и повышают лояльность гостей. Технологии будущего уже сегодня.",
      author: "Артем Сидоров",
      date: "2024-01-05",
      readTime: "8 мин чтения",
      category: "Технологии",
      image: "/smart-hotel-room-voice-assistant-technology.jpg",
      featured: false,
      seoTitle: "Голосовые колонки и AI в отелях: тренд 2025 | AI Solutions",
      seoDescription:
        "Узнайте, как умные колонки с голосовыми ассистентами превращают гостиничные номера в современный сервис и повышают лояльность гостей.",
    },
    {
      id: "ai-banking-security-speed",
      title: "Интеграция AI в банковский сектор: безопасность и скорость",
      excerpt:
        "Искусственный интеллект для банков: автоматизация колл-центров, безопасные операции и мгновенное обслуживание клиентов. Соблюдение требований безопасности и регулирования.",
      author: "Раджеш Шарма",
      date: "2024-01-03",
      readTime: "10 мин чтения",
      category: "Банки",
      image: "/banking-ai-security-automation-technology.jpg",
      featured: false,
      seoTitle: "AI в банковском секторе: безопасность и скорость | AI Solutions",
      seoDescription:
        "Искусственный интеллект для банков: автоматизация колл-центров, безопасные операции и мгновенное обслуживание клиентов.",
    },
    {
      id: "openai-deepseek-grok-technologies",
      title: "OpenAI, DeepSeek и Grok: какие технологии мы используем",
      excerpt:
        "Мы объединяем продукты OpenAI, DeepSeek и Grok, чтобы создавать мощные AI-решения для бизнеса, отелей и государственных структур. Обзор лучших AI-платформ 2024 года.",
      author: "Елена Смирнова",
      date: "2024-01-01",
      readTime: "12 мин чтения",
      category: "Технологии",
      image: "/ai-technology-comparison-openai-deepseek-grok.jpg",
      featured: false,
      seoTitle: "OpenAI, DeepSeek, Grok: лучшие AI технологии | AI Solutions",
      seoDescription:
        "Мы объединяем продукты OpenAI, DeepSeek и Grok, чтобы создавать мощные AI-решения для бизнеса, отелей и государственных структур.",
    },
    {
      id: "roi-ai-assistants-real-case",
      title: "ROI от внедрения AI-ассистентов: реальный кейс",
      excerpt:
        "Реальный пример: как внедрение голосовых AI-ассистентов сократило время ответа на 70% и увеличило продажи на 40%. Детальный анализ окупаемости и метрики эффективности.",
      author: "Игорь Волков",
      date: "2023-12-28",
      readTime: "11 мин чтения",
      category: "Кейсы",
      image: "/business-analytics-dashboard-with-roi-metrics.jpg",
      featured: false,
      seoTitle: "ROI от внедрения AI-ассистентов: кейс бизнеса | AI Solutions",
      seoDescription:
        "Реальный пример: как внедрение голосовых AI-ассистентов сократило время ответа на 70% и увеличило продажи на 40%.",
    },
    {
      id: "ai-delivery-reduce-errors",
      title: "AI и доставка: как сократить ошибки и ускорить процесс",
      excerpt:
        "Автоматизация логистики с AI: голосовые ассистенты контролируют цепочку поставок, уменьшают ошибки и ускоряют доставку. Практические решения для логистических компаний.",
      author: "Доктор Анастасия Петрова",
      date: "2023-12-25",
      readTime: "9 мин чтения",
      category: "Логистика",
      image: "/logistics-ai-automation-delivery.jpg",
      featured: false,
      seoTitle: "AI в логистике и доставке: сокращение ошибок | AI Solutions",
      seoDescription:
        "Автоматизация логистики с AI: голосовые ассистенты контролируют цепочку поставок, уменьшают ошибки и ускоряют доставку.",
    },
    {
      id: "multilingual-assistants-future",
      title: "Будущее за мультиязычными ассистентами",
      excerpt:
        "Будущее за мультиязычными голосовыми ассистентами: поддержка 6 языков, глобальные рынки и обслуживание клиентов 24/7. Технологии локализации и культурной адаптации.",
      author: "Профессор Михаил Козлов",
      date: "2023-12-20",
      readTime: "10 мин чтения",
      category: "Мультиязычность",
      image: "/multilingual-global-communication-ai-assistant.jpg",
      featured: false,
      seoTitle: "Мультиязычные AI-ассистенты для бизнеса и отелей | AI Solutions",
      seoDescription:
        "Будущее за мультиязычными голосовыми ассистентами: поддержка 6 языков, глобальные рынки и обслуживание клиентов 24/7.",
    },
  ]

  const categories = [
    t.allCategory,
    "SEO",
    "Продажи",
    "Отели",
    "Малый бизнес",
    "Госсектор",
    "Технологии",
    "Банки",
    "Кейсы",
    "Логистика",
    "Мультиязычность",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-background to-purple-50/30 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl text-gray-700 text-pretty">{t.subtitle}</p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input placeholder={t.searchPlaceholder} className="pl-10 border-purple-200 focus:border-purple-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={
                  index === 0
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                    : "border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            {t.featuredTitle}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {posts
              .filter((post) => post.featured)
              .map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-purple-100 hover:border-purple-200"
                >
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=400&width=800"
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2 text-gray-900">{post.title}</CardTitle>
                    <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4 text-purple-600" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-purple-600" />
                          <span>{new Date(post.date).toLocaleDateString(locale)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-purple-600" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                    >
                      <Link href={`/${locale}/blog/${post.id}`} className="flex items-center justify-center">
                        {t.readArticle}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 bg-gradient-to-br from-purple-50/30 via-background to-purple-50/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            {t.allPostsTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200"
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=400&width=800"
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 text-gray-900">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4 text-purple-600" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 bg-transparent"
                  >
                    <Link href={`/${locale}/blog/${post.id}`} className="flex items-center justify-center">
                      {t.readMore}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <BlogNewsletterSection locale={locale} translations={t} />
    </div>
  )
}
