import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/forms/lead-form"
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, Globe, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

interface ContactsPageProps {
  params: Promise<{ locale: Locale }>
}

export const metadata: Metadata = {
  title: "Контакты AI Solutions - Свяжитесь с нами | Офисы в Астане, Москве, Мадриде",
  description:
    "Свяжитесь с AI Solutions для внедрения голосовых ИИ-ассистентов. Офисы в Астане, Москве и Мадриде. Бесплатная консультация и демо. Техподдержка 24/7.",
  keywords:
    "контакты AI Solutions, офисы AI Solutions, техподдержка ИИ, консультация по ИИ, внедрение голосовых ассистентов",
}

export default async function ContactsPage({ params }: ContactsPageProps) {
  const { locale } = await params

  const offices = [
    {
      city: "Астана",
      country: "Казахстан",
      address: "пр. Мангилик Ел, 55/19\nБизнес-центр «Emerald Towers», офис 2501\nАстана 010000",
      phone: "+77715242088",
      email: "info@m2solutions.ai",
      timezone: "ALMT (UTC+6)",
      hours: "Пн-Пт: 9:00 - 18:00",
      flag: "🇰🇿",
    },
    {
      city: "Москва",
      country: "Россия",
      address: "ул. Тверская, 12, стр. 1\nБизнес-центр «Галерея Актер», офис 1205\nМосква 125009",
      phone: "+79957967506",
      email: "info@m2solutions.ai",
      timezone: "MSK (UTC+3)",
      hours: "Пн-Пт: 9:00 - 18:00",
      flag: "🇷🇺",
    },
    {
      city: "Барселона",
      country: "Испания",
      address: "Carrer de Mallorca, 401\nBarcelona 08013",
      phone: "+34631026692",
      email: "info@m2solutions.ai",
      timezone: "CET (UTC+1)",
      hours: "Lun-Vie: 9:00 - 17:00",
      flag: "🇪🇸",
    },
  ]

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Онлайн-чат",
      description: "Получите мгновенные ответы от нашего ИИ-ассистента или свяжитесь с нашей командой",
      action: "Начать чат",
      href: "#chat",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Calendar,
      title: "Записаться на демо",
      description: "Забронируйте персонализированную демонстрацию нашей платформы",
      action: "Записаться",
      href: `/${locale}/platform/demo`,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Phone,
      title: "Позвонить нам",
      description: "Говорите напрямую с нашей командой продаж или поддержки",
      action: "Позвонить",
      href: "tel:+79957967506",
      gradient: "from-green-500 to-blue-500",
    },
    {
      icon: Mail,
      title: "Email поддержка",
      description: "Отправьте нам подробное сообщение, и мы ответим в течение 24 часов",
      action: "Написать",
      href: "mailto:info@m2solutions.ai",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/aisolutions",
      color: "text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/aisolutions",
      color: "text-blue-400",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@aisolutions",
      color: "text-red-600",
    },
    {
      name: "Веб-сайт",
      icon: Globe,
      href: "https://m2solutions.ai",
      color: "text-purple-600",
    },
  ]

  const faqs = [
    {
      question: "Как быстро мы можем начать работу?",
      answer:
        "Большинство внедрений может быть завершено в течение 2-4 недель, в зависимости от сложности. Мы предлагаем бесплатную пробную версию, чтобы вы могли начать немедленно.",
    },
    {
      question: "Предлагаете ли вы индивидуальные интеграции?",
      answer:
        "Да, мы можем интегрироваться практически с любой CRM, системой поддержки или бизнес-системой. Наша команда будет работать с вами для обеспечения бесшовной интеграции.",
    },
    {
      question: "Какие языки вы поддерживаете?",
      answer:
        "В настоящее время мы поддерживаем 6 языков: русский, английский, испанский, немецкий, голландский и французский. Дополнительные языки могут быть добавлены в зависимости от ваших потребностей.",
    },
    {
      question: "Безопасны ли мои данные?",
      answer:
        "Абсолютно. Мы используем корпоративную безопасность, включая сквозное шифрование, соответствие SOC 2 и GDPR для защиты ваших данных.",
    },
    {
      question: "Какова стоимость ваших услуг?",
      answer:
        "Стоимость зависит от объема и сложности проекта. Мы предлагаем гибкие тарифные планы от базового до корпоративного уровня. Свяжитесь с нами для индивидуального расчета.",
    },
    {
      question: "Предоставляете ли вы техническую поддержку?",
      answer:
        "Да, мы предоставляем круглосуточную техническую поддержку на русском языке для всех наших клиентов. Также доступны обучение и консультации по внедрению.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              Свяжитесь с экспертами по ИИ
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-gray-600 text-pretty max-w-3xl mx-auto">
              Готовы трансформировать свой бизнес с помощью голосовых ИИ-ассистентов? Наша команда экспертов готова
              помочь вам начать уже сегодня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Записаться на демо
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Позвонить сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Как мы можем помочь?
            </h2>
            <p className="text-xl text-gray-600">Выберите наиболее удобный способ связи</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-purple-100"
              >
                <CardHeader>
                  <div
                    className={`mx-auto h-16 w-16 rounded-full bg-gradient-to-r ${method.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{method.title}</CardTitle>
                  <CardDescription className="text-gray-600">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Link href={method.href}>{method.action}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Отправьте нам сообщение
                </h2>
                <p className="text-lg text-gray-600">
                  Заполните форму ниже, и мы свяжемся с вами в течение 24 часов для обсуждения вашего проекта.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
                <LeadForm locale={locale} />
              </div>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Наши офисы
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  У нас есть офисы по всему миру для лучшего обслуживания наших клиентов в разных часовых поясах.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-purple-100">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center space-x-3">
                        <div className="text-2xl">{office.flag}</div>
                        <div>
                          <div className="text-lg font-semibold text-gray-900">{office.city}</div>
                          <div className="text-sm text-gray-500">{office.country}</div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-700">
                          {office.address.split("\n").map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-purple-600" />
                        <Link
                          href={`tel:${office.phone}`}
                          className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                        >
                          {office.phone}
                        </Link>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-purple-600" />
                        <Link
                          href={`mailto:${office.email}`}
                          className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                        >
                          {office.email}
                        </Link>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-purple-600" />
                        <div className="text-sm text-gray-700">
                          <div className="font-medium">{office.hours}</div>
                          <div className="text-gray-500">{office.timezone}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Следите за нами</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                    >
                      <social.icon className={`h-5 w-5 ${social.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        {social.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Часто задаваемые вопросы
              </h2>
              <p className="text-xl text-gray-600">
                Быстрые ответы на распространенные вопросы о наших услугах и внедрении ИИ-решений
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h3>
              <p className="text-purple-100 mb-6">
                Наши эксперты готовы ответить на любые вопросы о внедрении ИИ-решений в ваш бизнес
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
                <MessageSquare className="w-5 h-5 mr-2" />
                Задать вопрос эксперту
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
