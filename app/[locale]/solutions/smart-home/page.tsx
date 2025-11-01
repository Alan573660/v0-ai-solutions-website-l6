import { Zap, TrendingUp, Building2, Home, Hotel, Lightbulb, Lock, Thermometer, Camera, Speaker } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getTranslations } from "@/lib/i18n/get-translations"
import type { Locale } from "@/lib/i18n/config"
import Link from "next/link"

export default async function SmartHomePage({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations(params.locale, "smart-home")

  // Convert FAQ object to array
  const faqItems = []
  for (let i = 1; i <= 8; i++) {
    if (t.faq?.[`q${i}`]) {
      faqItems.push({
        question: t.faq[`q${i}`].question,
        answer: t.faq[`q${i}`].answer,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href={`/${params.locale}`}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            AI Solutions
          </Link>
          <LanguageSwitcher currentLocale={params.locale} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300">
              {t.hero?.badge || "Smart Home"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t.hero?.title || "Smart Home"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.hero?.description || "AI-powered smart home solutions"}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Zap className="h-5 w-5" />
                {t.hero?.cta || "Get Started"}
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <div className="text-3xl font-bold text-blue-600">{t.hero?.stats?.savings || "520+"}</div>
                <div className="text-sm text-muted-foreground">{t.hero?.stats?.savingsLabel || "Projects"}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">{t.hero?.stats?.efficiency || "98%"}</div>
                <div className="text-sm text-muted-foreground">{t.hero?.stats?.efficiencyLabel || "Efficiency"}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/modern-smart-home-interior-with-ai-technology.jpg"
                alt={t.hero?.title || "Smart Home"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.businessSolutions?.title || "Business Solutions"}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.businessSolutions?.subtitle || "Solutions for your business"}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.businessSolutions?.residential && (
            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Home className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>{t.businessSolutions.residential.title}</CardTitle>
                <CardDescription>{t.businessSolutions.residential.description}</CardDescription>
              </CardHeader>
            </Card>
          )}
          {t.businessSolutions?.commercial && (
            <Card className="border-2 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Building2 className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>{t.businessSolutions.commercial.title}</CardTitle>
                <CardDescription>{t.businessSolutions.commercial.description}</CardDescription>
              </CardHeader>
            </Card>
          )}
          {t.businessSolutions?.hospitality && (
            <Card className="border-2 hover:border-green-500 transition-colors">
              <CardHeader>
                <Hotel className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>{t.businessSolutions.hospitality.title}</CardTitle>
                <CardDescription>{t.businessSolutions.hospitality.description}</CardDescription>
              </CardHeader>
            </Card>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16 bg-muted/50 rounded-3xl my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.features?.title || "Features"}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.features?.subtitle || "Smart home features"}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features?.lighting && (
            <Card>
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-yellow-600 mb-3" />
                <CardTitle className="text-lg">{t.features.lighting.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.features.lighting.description}</p>
                {t.features.lighting.items && (
                  <ul className="mt-4 space-y-2">
                    {t.features.lighting.items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          )}
          {t.features?.security && (
            <Card>
              <CardHeader>
                <Lock className="h-10 w-10 text-red-600 mb-3" />
                <CardTitle className="text-lg">{t.features.security.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.features.security.description}</p>
                {t.features.security.items && (
                  <ul className="mt-4 space-y-2">
                    {t.features.security.items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          )}
          {t.features?.climate && (
            <Card>
              <CardHeader>
                <Thermometer className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle className="text-lg">{t.features.climate.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.features.climate.description}</p>
                {t.features.climate.items && (
                  <ul className="mt-4 space-y-2">
                    {t.features.climate.items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          )}
          {t.features?.surveillance && (
            <Card>
              <CardHeader>
                <Camera className="h-10 w-10 text-purple-600 mb-3" />
                <CardTitle className="text-lg">{t.features.surveillance.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.features.surveillance.description}</p>
                {t.features.surveillance.items && (
                  <ul className="mt-4 space-y-2">
                    {t.features.surveillance.items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          )}
          {t.features?.voice && (
            <Card>
              <CardHeader>
                <Speaker className="h-10 w-10 text-green-600 mb-3" />
                <CardTitle className="text-lg">{t.features.voice.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.features.voice.description}</p>
                {t.features.voice.items && (
                  <ul className="mt-4 space-y-2">
                    {t.features.voice.items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          )}
          {t.features?.energy && (
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-orange-600 mb-3" />
                <CardTitle className="text-lg">{t.features.energy.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.features.energy.description}</p>
                {t.features.energy.items && (
                  <ul className="mt-4 space-y-2">
                    {t.features.energy.items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.faq?.title || "FAQ"}</h2>
              <p className="text-xl text-muted-foreground">{t.faq?.subtitle || "Frequently Asked Questions"}</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta?.title || "Get Started Today"}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t.cta?.description || "Contact us to learn more"}
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              {t.cta?.button || "Contact Us"}
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2025 AI Solutions. {t.footer?.rights || "All rights reserved."}</p>
        </div>
      </footer>
    </div>
  )
}
