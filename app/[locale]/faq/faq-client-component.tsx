"use client"

import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search, HelpCircle, MessageSquare, Phone, Mail } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

interface FAQItem {
  category: string
  question: string
  answer: string
}

interface Category {
  title: string
  count: number
  color: string
}

interface FAQClientComponentProps {
  locale: Locale
  faqItems: FAQItem[]
  categories: Category[]
  t: (key: string) => string
}

export default function FAQClientComponent({ locale, faqItems, categories, t }: FAQClientComponentProps) {
  const generalFAQ = faqItems.filter((item) => item.category === "general")
  const pricingFAQ = faqItems.filter((item) => item.category === "pricing")
  const technicalFAQ = faqItems.filter((item) => item.category === "implementation")
  const securityFAQ = faqItems.filter((item) => item.category === "features")

  const allFAQ = [...generalFAQ, ...pricingFAQ, ...technicalFAQ, ...securityFAQ]

  return (
    <div className="min-h-screen bg-background">
      <StructuredData locale={locale} type="faq" data={{ questions: allFAQ }} />
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t("faq.title")}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{t("faq.subtitle")}</p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder={t("faq.searchPlaceholder")} className="pl-12 py-6 text-lg" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("faq.categoriesTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer text-center">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${category.color}`}
                  >
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <Badge variant="secondary">
                    {category.count} {t("faq.questionsCount")}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* General FAQ */}
          {generalFAQ.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t("faq.categories.general")}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {generalFAQ.map((item, index) => (
                  <AccordionItem key={index} value={`general-${index}`} className="bg-white rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* Pricing FAQ */}
          {pricingFAQ.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t("faq.categories.pricing")}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {pricingFAQ.map((item, index) => (
                  <AccordionItem key={index} value={`pricing-${index}`} className="bg-white rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* Technical FAQ */}
          {technicalFAQ.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t("faq.categories.technical")}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {technicalFAQ.map((item, index) => (
                  <AccordionItem key={index} value={`technical-${index}`} className="bg-white rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* Security FAQ */}
          {securityFAQ.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-8">{t("faq.categories.security")}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {securityFAQ.map((item, index) => (
                  <AccordionItem key={index} value={`security-${index}`} className="bg-white rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t("faq.contactTitle")}</h2>
            <p className="text-xl text-gray-600 mb-12">{t("faq.contactSubtitle")}</p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>{t("faq.contact.chat.title")}</CardTitle>
                  <CardDescription>{t("faq.contact.chat.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">{t("faq.contact.chat.button")}</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>{t("faq.contact.email.title")}</CardTitle>
                  <CardDescription>{t("faq.contact.email.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    support@ai-solutions.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>{t("faq.contact.phone.title")}</CardTitle>
                  <CardDescription>{t("faq.contact.phone.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    +7 (495) 123-45-67
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
