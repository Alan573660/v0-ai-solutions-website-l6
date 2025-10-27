import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Briefcase, Heart, Zap, Globe, Award } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Карьера в AI Solutions | Работа в команде мечты",
  description:
    "Присоединяйтесь к международной команде AI Solutions. Открытые вакансии, удаленная работа, конкурентная зарплата и возможности роста в сфере искусственного интеллекта.",
  keywords:
    "карьера AI, работа в AI Solutions, вакансии разработчик, удаленная работа, искусственный интеллект вакансии",
}

interface CareersPageProps {
  params: Promise<{ locale: Locale }> // Made params async
}

export default async function CareersPage({ params }: CareersPageProps) {
  // Made function async
  const { locale } = await params // Await params (not used but extracted for consistency)

  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Разработка",
      location: "Удаленно / Барселона",
      type: "Полная занятость",
      salary: "По договоренности",
      description: "Разработка и оптимизация AI-моделей для голосовых ассистентов",
      requirements: ["Python", "TensorFlow/PyTorch", "NLP", "5+ лет опыта"],
    },
    {
      title: "Frontend Developer (React/Next.js)",
      department: "Разработка",
      location: "Удаленно / Москва",
      type: "Полная занятость",
      salary: "По договоренности",
      description: "Создание современных веб-интерфейсов для AI-платформы",
      requirements: ["React", "Next.js", "TypeScript", "3+ года опыта"],
    },
    {
      title: "DevOps Engineer",
      department: "Инфраструктура",
      location: "Удаленно / Астана",
      type: "Полная занятость",
      salary: "По договоренности",
      description: "Управление облачной инфраструктурой и CI/CD процессами",
      requirements: ["AWS/GCP", "Kubernetes", "Docker", "Terraform"],
    },
    {
      title: "Sales Manager",
      department: "Продажи",
      location: "Барселона / Москва",
      type: "Полная занятость",
      salary: "По договоренности",
      description: "Развитие клиентской базы в сфере B2B AI-решений",
      requirements: ["B2B продажи", "Английский C1", "Опыт в IT"],
    },
  ]

  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Удаленная работа",
      description: "Работайте из любой точки мира с гибким графиком",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Достойная оплата",
      description: "Справедливая оплата труда + бонусы за результат",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Медицинская страховка",
      description: "Полное покрытие медицинских расходов для вас и семьи",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Обучение и развитие",
      description: "Бюджет на курсы, конференции и сертификации",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Международная команда",
      description: "Работа с талантами из России, Украины, Индии, Испании",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Equity программа",
      description: "Опционы компании для ключевых сотрудников",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Карьера в AI Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Присоединяйтесь к команде, которая создает будущее голосовых AI-технологий. Работайте с лучшими
            специалистами из разных стран мира.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Посмотреть вакансии
            </Button>
            <Button size="lg" variant="outline">
              Отправить резюме
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Открытые вакансии</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {position.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-purple-600">{position.salary}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Требования:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <Badge key={reqIndex} variant="outline">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full sm:w-auto">Откликнуться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Не нашли подходящую вакансию?</h2>
          <p className="text-xl mb-8 opacity-90">
            Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих позиций
          </p>
          <Button size="lg" variant="secondary">
            Отправить резюме
          </Button>
        </div>
      </section>
    </div>
  )
}
