import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Globe, Zap, Shield, Heart, MapPin, Building2, Rocket } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

interface AboutPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params

  const title =
    locale === "ru"
      ? "О компании AI Solutions - Лидер рынка голосового ИИ в СНГ и Европе"
      : "About AI Solutions - Leading Voice AI Platform in CIS and Europe"

  const description =
    locale === "ru"
      ? "AI Solutions объединяет лучших экспертов из России, Украины, Казахстана и других стран СНГ для создания передовых голосовых AI-решений. 500+ клиентов, офисы в 3 странах, команда из 8 национальностей."
      : "AI Solutions brings together top experts from Russia, Ukraine, Kazakhstan and other CIS countries to create cutting-edge voice AI solutions. 500+ clients, offices in 3 countries, team from 8 nationalities."

  const keywords =
    locale === "ru"
      ? [
          "AI Solutions компания",
          "о компании AI Solutions",
          "команда AI Solutions",
          "офисы AI Solutions",
          "голосовой ИИ СНГ",
          "AI решения Россия",
          "искусственный интеллект команда",
          "международная AI компания",
          "эксперты машинного обучения",
          "разработчики голосовых ассистентов",
        ]
      : [
          "AI Solutions company",
          "about AI Solutions",
          "AI Solutions team",
          "AI Solutions offices",
          "voice AI CIS",
          "AI solutions Russia",
          "artificial intelligence team",
          "international AI company",
          "machine learning experts",
          "voice assistant developers",
        ]

  return {
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      siteName: "AI Solutions",
      images: [
        {
          url: "/diverse-international-team-working-on-ai-technolog.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/diverse-international-team-working-on-ai-technolog.jpg"],
    },
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        ru: "/ru/about",
        en: "/en/about",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ai-solutions.ru/#organization",
    name: "AI Solutions",
    url: "https://ai-solutions.ru",
    logo: "https://ai-solutions.ru/logo.png",
    description:
      locale === "ru"
        ? "Лидер рынка голосового ИИ в СНГ и Европе. Международная команда экспертов создает передовые AI-решения для бизнеса."
        : "Leading voice AI platform in CIS and Europe. International team of experts creating cutting-edge AI solutions for business.",
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 80,
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Calle de Alcalá, 42",
        addressLocality: "Madrid",
        postalCode: "28014",
        addressCountry: "ES",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Красная Площадь, 1",
        addressLocality: "Москва",
        postalCode: "109012",
        addressCountry: "RU",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "пр. Мангилик Ел, 55/11",
        addressLocality: "Астана",
        postalCode: "010000",
        addressCountry: "KZ",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Russian", "English", "Spanish", "Kazakh"],
    },
    sameAs: [
      "https://linkedin.com/company/ai-solutions",
      "https://twitter.com/aisolutions",
      "https://facebook.com/aisolutions",
    ],
    award: ["AI Innovation Award 2024", "Best Voice AI Platform CIS 2024"],
  }

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `https://ai-solutions.ru/${locale}/about#aboutpage`,
    name: locale === "ru" ? "О компании AI Solutions" : "About AI Solutions",
    description:
      locale === "ru"
        ? "Узнайте о команде AI Solutions, наших офисах, ценностях и истории успеха. Международная команда экспертов из 8 стран создает лучшие голосовые AI-решения."
        : "Learn about AI Solutions team, our offices, values and success story. International team of experts from 8 countries creating best voice AI solutions.",
    mainEntity: {
      "@id": "https://ai-solutions.ru/#organization",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: locale === "ru" ? "Главная" : "Home",
          item: `https://ai-solutions.ru/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: locale === "ru" ? "О компании" : "About",
          item: `https://ai-solutions.ru/${locale}/about`,
        },
      ],
    },
  }

  const team = [
    {
      name: "Александр Петров",
      role: "CEO & Основатель",
      bio: "Бывший ведущий разработчик Яндекса с 15+ летним опытом в области голосовых технологий и машинного обучения. Выпускник МГУ.",
      image: "/professional-ceo-portrait.png",
      linkedin: "#",
      country: "🇷🇺 Россия",
    },
    {
      name: "Анна Коваленко",
      role: "CTO & Со-основатель",
      bio: "Экс-руководитель команды AI в Mail.ru Group, эксперт по разговорному ИИ и обработке естественного языка. Выпускница КПИ.",
      image: "/professional-female-cto.png",
      linkedin: "#",
      country: "🇺🇦 Украина",
    },
    {
      name: "Дмитрий Назарбаев",
      role: "Вице-президент по разработке",
      bio: "Ранее работал в Kaspersky Lab, специализируется на масштабируемой AI-инфраструктуре и системах реального времени.",
      image: "/professional-vp-engineering-portrait.jpg",
      linkedin: "#",
      country: "🇰🇿 Казахстан",
    },
    {
      name: "Раджеш Шарма",
      role: "Главный архитектор AI",
      bio: "Бывший старший инженер Google AI, эксперт по глубокому обучению и нейронным сетям. PhD в области Computer Science.",
      image: "/professional-indian-ai-architect-portrait.jpg",
      linkedin: "#",
      country: "🇮🇳 Индия",
    },
    {
      name: "Мария Иванова",
      role: "Руководитель продукта",
      bio: "Экс-продакт-менеджер Сбербанка, фокусируется на корпоративных AI-решениях и пользовательском опыте.",
      image: "/professional-female-product-manager.png",
      linkedin: "#",
      country: "🇷🇺 Россия",
    },
    {
      name: "Артем Сидоров",
      role: "Директор по безопасности",
      bio: "Бывший эксперт по кибербезопасности в Лаборатории Касперского, специалист по защите AI-систем.",
      image: "/professional-security-expert-portrait.jpg",
      linkedin: "#",
      country: "🇧🇾 Беларусь",
    },
    {
      name: "Георгий Мамедов",
      role: "Директор по развитию",
      bio: "Экс-руководитель направления в EPAM, эксперт по международной экспансии и стратегическому развитию.",
      image: "/professional-business-development-director-portrai.jpg",
      linkedin: "#",
      country: "🇦🇿 Азербайджан",
    },
    {
      name: "Анна Петросян",
      role: "Главный дизайнер",
      bio: "Ведущий UX/UI дизайнер с опытом работы в Tinkoff и Яндексе, специализируется на интерфейсах AI-продуктов.",
      image: "/professional-female-ux-designer.png",
      linkedin: "#",
      country: "🇦🇲 Армения",
    },
  ]

  const offices = [
    {
      city: "Мадрид",
      country: "Испания",
      address: "Calle de Alcalá, 42, 28014 Madrid",
      description: "Европейская штаб-квартира и центр разработки",
      image: "/modern-office-building-madrid-spain.jpg",
      team: "25+ специалистов",
      focus: "Европейский рынок, R&D",
    },
    {
      city: "Москва",
      country: "Россия",
      address: "Красная Площадь, 1, Москва, 109012",
      description: "Главный офис для российского и СНГ рынков",
      image: "/modern-office-building-moscow-russia.jpg",
      team: "40+ специалистов",
      focus: "Российский рынок, поддержка клиентов",
    },
    {
      city: "Астана",
      country: "Казахстан",
      address: "пр. Мангилик Ел, 55/11, Астана, 010000",
      description: "Региональный центр для Центральной Азии",
      image: "/modern-office-building-astana-kazakhstan.jpg",
      team: "15+ специалистов",
      focus: "Центральная Азия, локализация",
    },
  ]

  const values = [
    {
      icon: Zap,
      title: "Инновации прежде всего",
      description:
        "Мы расширяем границы возможного с технологиями голосового ИИ, создавая решения будущего уже сегодня.",
    },
    {
      icon: Users,
      title: "Успех клиентов",
      description:
        "Ваш успех - это наш успех. Мы стремимся к достижению измеримых результатов и долгосрочному партнерству.",
    },
    {
      icon: Shield,
      title: "Безопасность и конфиденциальность",
      description:
        "Корпоративная безопасность и защита конфиденциальности во всем, что мы создаем. Соответствие GDPR и российским стандартам.",
    },
    {
      icon: Heart,
      title: "Ориентированность на человека",
      description: "Технологии должны улучшать человеческие связи и делать жизнь проще, а не заменять живое общение.",
    },
    {
      icon: Globe,
      title: "Глобальное влияние",
      description:
        "Делаем передовой ИИ доступным для бизнеса по всему миру, учитывая культурные и языковые особенности.",
    },
    {
      icon: Award,
      title: "Превосходство",
      description: "Мы поддерживаем высочайшие стандарты в технологиях, сервисе и поддержке клиентов 24/7.",
    },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Зарождение идеи",
      description:
        "Команда экспертов из Яндекса, Mail.ru и Kaspersky объединилась с видением демократизации голосового ИИ",
    },
    {
      year: "2020",
      title: "Основание AI Solutions",
      description: "Официальная регистрация компании и запуск первых MVP решений для российского рынка",
    },
    {
      year: "2021",
      title: "Первые корпоративные клиенты",
      description: "Сбербанк, Магнит и Аэрофлот стали нашими первыми крупными клиентами с впечатляющими результатами",
    },
    {
      year: "2022",
      title: "Международная экспансия",
      description: "Открытие офисов в Мадриде и Астане, запуск многоязычной поддержки для 6 языков",
    },
    {
      year: "2023",
      title: "Раунд финансирования Series A",
      description: "Привлекли $15 млн от ведущих венчурных фондов для ускорения разработки и глобального роста",
    },
    {
      year: "2024",
      title: "Лидер рынка голосового ИИ",
      description: "500+ клиентов, премия 'AI Innovation Award' и признание ведущей платформой в СНГ и Европе",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />

      <div className="min-h-screen bg-background">
        <article itemScope itemType="https://schema.org/AboutPage">
          <header>
            <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-12 sm:py-16 md:py-20 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance leading-tight">
                    Объединяем лучшие умы СНГ для создания ИИ будущего
                  </h1>
                  <p className="text-lg sm:text-xl text-purple-100 text-pretty leading-relaxed">
                    В нашей команде собраны ведущие эксперты из России, Украины, Казахстана, Беларуси, Индии и других
                    стран. Вместе мы создаем голосовые AI-решения, которые трансформируют бизнес по всему миру.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4">
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 sm:px-4 py-2">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">500+ обслуженных компаний</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 sm:px-4 py-2">
                      <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">8 стран присутствия</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 sm:px-4 py-2">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">Лидер рынка голосового ИИ</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </header>

          <section className="py-12 sm:py-16 md:py-20" itemScope itemType="https://schema.org/Organization">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Наша миссия
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Демократизировать передовые технологии голосового ИИ, делая их доступными для бизнеса любого размера
                    в странах СНГ, Европе и по всему миру. Мы верим, что каждая компания должна иметь возможность
                    предоставлять исключительный клиентский опыт через интеллектуальную автоматизацию.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Объединяя передовые исследования в области ИИ с глубоким пониманием локальных рынков и культурных
                    особенностей, мы строим будущее клиентских коммуникаций - одну беседу за раз.
                  </p>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg border border-purple-200">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-purple-900">Наша уникальность</h3>
                    <p className="text-sm sm:text-base text-purple-800 leading-relaxed">
                      <strong>Международная команда мирового уровня:</strong> В AI Solutions работают лучшие специалисты
                      из России (Яндекс, Mail.ru, Сбербанк), Украины (Grammarly, Preply), Казахстана (Kaspi, Beeline),
                      Беларуси (EPAM, PandaDoc), Индии (Google, Microsoft), Армении (Picsart) и других стран СНГ.
                    </p>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <img
                    src="/diverse-international-team-working-on-ai-technolog.jpg"
                    alt="Международная команда AI Solutions"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm">стран в команде</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Наши офисы по всему миру
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Три стратегически расположенных офиса обеспечивают круглосуточную поддержку клиентов и локальную
                  экспертизу
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {offices.map((office, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 border-purple-200 hover:border-purple-400"
                  >
                    <CardHeader className="pb-4">
                      <img
                        src={office.image || "/placeholder.svg"}
                        alt={`Офис в ${office.city}`}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="h-5 w-5 text-purple-600" />
                        <CardTitle className="text-xl">
                          {office.city}, {office.country}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm text-muted-foreground">{office.address}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm">{office.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-purple-600" />
                          <span className="font-medium">{office.team}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Building2 className="h-4 w-4 text-purple-600" />
                          <span className="text-muted-foreground">{office.focus}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Наши ценности
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Принципы, которые направляют все, что мы делаем, и каждое решение, которое мы принимаем
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-all duration-300 border-purple-200 hover:border-purple-400 group"
                  >
                    <CardHeader>
                      <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  История нашего успеха
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  От стартапа до лидера рынка голосового ИИ в СНГ и Европе
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                          <span className="text-sm font-bold text-white">{milestone.year}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 bg-white p-6 rounded-lg shadow-sm border border-purple-200">
                        <h3 className="text-xl font-semibold mb-2 text-purple-900">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Познакомьтесь с нашей звездной командой
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Эксперты мирового уровня из ведущих технологических компаний СНГ, Европы и мира
                </p>
                <div className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Globe className="h-6 w-6 text-purple-600" />
                    <h3 className="text-lg font-semibold text-purple-900">Международная экспертиза</h3>
                  </div>
                  <p className="text-purple-800 font-medium">
                    🌍 Команда из 8 стран: Россия, Украина, Казахстан, Беларусь, Индия, Армения, Азербайджан и Испания
                  </p>
                  <p className="text-purple-700 text-sm mt-2">
                    Выпускники и экс-сотрудники: Яндекс, Google, Mail.ru, Сбербанк, Kaspersky, EPAM, Microsoft, Tinkoff
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-xl transition-all duration-300 border-purple-200 hover:border-purple-400 group"
                  >
                    <CardHeader className="pb-4">
                      <div className="mx-auto mb-4">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-purple-600 font-medium">{member.role}</CardDescription>
                      <div className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full inline-block mt-2 border border-purple-200">
                        {member.country}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                      <Button
                        size="lg"
                        className="bg-white text-purple-900 hover:bg-purple-50 w-full sm:w-auto h-11 sm:h-12"
                        asChild
                      >
                        <Link href={member.linkedin}>LinkedIn</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
                <Rocket className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-purple-300" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Готовы присоединиться к революции голосового ИИ?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-purple-100 leading-relaxed">
                  Хотите ли вы трансформировать свой бизнес с помощью наших решений или присоединиться к нашей
                  международной команде экспертов, мы будем рады услышать от вас
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  )
}
