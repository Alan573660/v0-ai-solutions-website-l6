import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Globe, Award, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

interface TeamPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: TeamPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    ru: "Наша команда | AI Solutions",
    en: "Our Team | AI Solutions",
    es: "Nuestro Equipo | AI Solutions",
    de: "Unser Team | AI Solutions",
    fr: "Notre Équipe | AI Solutions",
    nl: "Ons Team | AI Solutions",
  }

  const descriptions = {
    ru: "Познакомьтесь с международной командой экспертов AI Solutions из 8 стран. Выпускники Яндекс, Google, Mail.ru, Сбербанк, Kaspersky, EPAM.",
    en: "Meet the international team of AI Solutions experts from 8 countries. Alumni of Yandex, Google, Mail.ru, Sberbank, Kaspersky, EPAM.",
    es: "Conozca al equipo internacional de expertos de AI Solutions de 8 países. Graduados de Yandex, Google, Mail.ru, Sberbank, Kaspersky, EPAM.",
    de: "Lernen Sie das internationale Team von AI Solutions-Experten aus 8 Ländern kennen. Absolventen von Yandex, Google, Mail.ru, Sberbank, Kaspersky, EPAM.",
    fr: "Rencontrez l'équipe internationale d'experts AI Solutions de 8 pays. Diplômés de Yandex, Google, Mail.ru, Sberbank, Kaspersky, EPAM.",
    nl: "Ontmoet het internationale team van AI Solutions-experts uit 8 landen. Alumni van Yandex, Google, Mail.ru, Sberbank, Kaspersky, EPAM.",
  }

  return {
    title: titles[locale] || titles.ru,
    description: descriptions[locale] || descriptions.ru,
  }
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { locale } = await params

  const team = [
    {
      name: "Александр Петров",
      role: "CEO & Основатель",
      bio: "Бывший ведущий разработчик Яндекса с 15+ летним опытом в области голосовых технологий и машинного обучения. Выпускник МГУ.",
      image: "/professional-ceo-portrait.png",
      linkedin: "#",
      email: "a.petrov@ai-solutions.com",
      country: "🇷🇺 Россия",
      office: "Москва",
    },
    {
      name: "Анна Коваленко",
      role: "CTO & Со-основатель",
      bio: "Экс-руководитель команды AI в Mail.ru Group, эксперт по разговорному ИИ и обработке естественного языка. Выпускница КПИ.",
      image: "/professional-female-cto.png",
      linkedin: "#",
      email: "a.kovalenko@ai-solutions.com",
      country: "🇺🇦 Украина",
      office: "Мадрид",
    },
    {
      name: "Дмитрий Назарбаев",
      role: "Вице-президент по разработке",
      bio: "Ранее работал в Kaspersky Lab, специализируется на масштабируемой AI-инфраструктуре и системах реального времени.",
      image: "/professional-vp-engineering-portrait.jpg",
      linkedin: "#",
      email: "d.nazarbayev@ai-solutions.com",
      country: "🇰🇿 Казахстан",
      office: "Астана",
    },
    {
      name: "Раджеш Шарма",
      role: "Главный архитектор AI",
      bio: "Бывший старший инженер Google AI, эксперт по глубокому обучению и нейронным сетям. PhD в области Computer Science.",
      image: "/professional-indian-ai-architect-portrait.jpg",
      linkedin: "#",
      email: "r.sharma@ai-solutions.com",
      country: "🇮🇳 Индия",
      office: "Мадрид",
    },
    {
      name: "Мария Иванова",
      role: "Руководитель продукта",
      bio: "Экс-продакт-менеджер Сбербанка, фокусируется на корпоративных AI-решениях и пользовательском опыте.",
      image: "/professional-female-product-manager.png",
      linkedin: "#",
      email: "m.ivanova@ai-solutions.com",
      country: "🇷🇺 Россия",
      office: "Москва",
    },
    {
      name: "Артем Сидоров",
      role: "Директор по безопасности",
      bio: "Бывший эксперт по кибербезопасности в Лаборатории Касперского, специалист по защите AI-систем.",
      image: "/professional-security-expert-portrait.jpg",
      linkedin: "#",
      email: "a.sidorov@ai-solutions.com",
      country: "🇧🇾 Беларусь",
      office: "Москва",
    },
    {
      name: "Георгий Мамедов",
      role: "Директор по развитию",
      bio: "Экс-руководитель направления в EPAM, эксперт по международной экспансии и стратегическому развитию.",
      image: "/professional-business-development-director-portrai.jpg",
      linkedin: "#",
      email: "g.mamedov@ai-solutions.com",
      country: "🇦🇿 Азербайджан",
      office: "Мадрид",
    },
    {
      name: "Анна Петросян",
      role: "Главный дизайнер",
      bio: "Ведущий UX/UI дизайнер с опытом работы в Tinkoff и Яндексе, специализируется на интерфейсах AI-продуктов.",
      image: "/professional-female-ux-designer.png",
      linkedin: "#",
      email: "a.petrosyan@ai-solutions.com",
      country: "🇦🇲 Армения",
      office: "Мадрид",
    },
  ]

  const departments = [
    {
      name: "Разработка и AI",
      icon: Users,
      count: "40+ специалистов",
      description: "Команда инженеров, data scientists и AI-исследователей",
    },
    {
      name: "Продукт и дизайн",
      icon: Award,
      count: "15+ специалистов",
      description: "Product managers, UX/UI дизайнеры, аналитики",
    },
    {
      name: "Продажи и поддержка",
      icon: Globe,
      count: "25+ специалистов",
      description: "Менеджеры по работе с клиентами, техподдержка 24/7",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-12 sm:py-16 md:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance leading-tight">
              Познакомьтесь с нашей звездной командой
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 text-pretty leading-relaxed">
              Эксперты мирового уровня из ведущих технологических компаний СНГ, Европы и мира. Вместе мы создаем будущее
              голосового ИИ.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 sm:px-4 py-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">80+ специалистов</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 sm:px-4 py-2">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">8 стран</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 sm:px-4 py-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">3 офиса</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Expertise Banner */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-pink-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Globe className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-purple-900">Международная экспертиза</h3>
              </div>
              <p className="text-purple-800 font-medium text-center mb-2">
                🌍 Команда из 8 стран: Россия, Украина, Казахстан, Беларусь, Индия, Армения, Азербайджан и Испания
              </p>
              <p className="text-purple-700 text-sm text-center">
                Выпускники и экс-сотрудники: Яндекс, Google, Mail.ru, Сбербанк, Kaspersky, EPAM, Microsoft, Tinkoff
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Руководство компании
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Лидеры с опытом работы в крупнейших технологических компаниях мира
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {team.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-purple-200 hover:border-purple-400 group"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform shadow-lg"
                    />
                  </div>
                  <CardTitle className="text-lg text-center">{member.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium text-center">{member.role}</CardDescription>
                  <div className="flex flex-col items-center gap-2 mt-2">
                    <div className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full border border-purple-200">
                      {member.country}
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{member.office}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  <div className="flex flex-col gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-purple-200 hover:bg-purple-50 bg-transparent"
                      asChild
                    >
                      <Link href={member.linkedin}>
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-purple-200 hover:bg-purple-50 bg-transparent"
                      asChild
                    >
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Наши отделы
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 80 специалистов работают над созданием лучших AI-решений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-purple-200 hover:border-purple-400"
              >
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                    <dept.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{dept.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-semibold text-lg">{dept.count}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Хотите присоединиться к нашей команде?</h2>
            <p className="text-base sm:text-lg md:text-xl text-purple-100 leading-relaxed">
              Мы всегда ищем талантливых специалистов, которые разделяют нашу страсть к инновациям и хотят изменить мир
              с помощью AI-технологий
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 h-12 px-8" asChild>
                <Link href={`/${locale}/careers`}>Открытые вакансии</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 h-12 px-8 bg-transparent"
                asChild
              >
                <Link href={`/${locale}/about`}>О компании</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
