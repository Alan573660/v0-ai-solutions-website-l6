"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Calculator, Download, Mail } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"

interface PricingCalculatorPageProps {
  params: { locale: Locale }
}

export default function PricingCalculatorPage({ params }: PricingCalculatorPageProps) {
  const { locale } = params
  const { t } = useTranslations(locale)

  const [config, setConfig] = useState({
    solutionType: "sales",
    channels: ["phone"],
    languages: ["ru"],
    monthlyMinutes: [1000],
    concurrentLines: [5],
    integrations: [] as string[],
    sla: "standard",
    deployment: "cloud",
    support: "business",
  })

  const [pricing, setPricing] = useState({
    setup: 0,
    monthly: 0,
    perMinute: 0,
    currency: locale === "en" ? "USD" : "EUR",
  })

  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    sendPdf: false,
    privacy: false,
  })

  const solutionTypes = [
    { id: "sales", name: "Голосовой менеджер продаж", multiplier: 1.0 },
    { id: "hotel", name: "AI-консьерж для отелей", multiplier: 1.2 },
    { id: "support", name: "Техническая поддержка", multiplier: 0.8 },
    { id: "smb", name: "Для малого бизнеса", multiplier: 0.6 },
    { id: "enterprise", name: "Enterprise решение", multiplier: 2.0 },
    { id: "custom", name: "Индивидуальная разработка", multiplier: 3.0 },
  ]

  const channels = [
    { id: "phone", name: "Телефония", cost: 100 },
    { id: "web", name: "Веб-виджет", cost: 50 },
    { id: "messenger", name: "Мессенджеры", cost: 75 },
    { id: "mobile", name: "Мобильное приложение", cost: 150 },
  ]

  const languages = [
    { id: "ru", name: "Русский", cost: 0 },
    { id: "en", name: "English", cost: 200 },
    { id: "es", name: "Español", cost: 300 },
    { id: "de", name: "Deutsch", cost: 300 },
    { id: "fr", name: "Français", cost: 300 },
    { id: "nl", name: "Nederlands", cost: 400 },
  ]

  const integrations = [
    { id: "crm", name: "CRM (Salesforce, HubSpot)", cost: 500 },
    { id: "billing", name: "Биллинг системы", cost: 800 },
    { id: "warehouse", name: "Склад и логистика", cost: 600 },
    { id: "calendar", name: "Календари и бронирование", cost: 300 },
    { id: "payment", name: "Платежные системы", cost: 400 },
    { id: "analytics", name: "Аналитика и BI", cost: 700 },
  ]

  const slaOptions = [
    { id: "standard", name: "Стандартный (99.5%)", multiplier: 1.0 },
    { id: "premium", name: "Премиум (99.9%)", multiplier: 1.5 },
    { id: "enterprise", name: "Enterprise (99.95%)", multiplier: 2.0 },
  ]

  const deploymentOptions = [
    { id: "cloud", name: "Облако", multiplier: 1.0 },
    { id: "hybrid", name: "Гибридное", multiplier: 1.3 },
    { id: "onpremise", name: "On-premise", multiplier: 1.8 },
  ]

  const supportOptions = [
    { id: "basic", name: "Базовая (email)", cost: 200 },
    { id: "business", name: "Бизнес (8x5)", cost: 500 },
    { id: "premium", name: "Премиум (24x7)", cost: 1200 },
  ]

  useEffect(() => {
    calculatePricing()
  }, [config])

  const calculatePricing = () => {
    const solutionType = solutionTypes.find((s) => s.id === config.solutionType)
    const sla = slaOptions.find((s) => s.id === config.sla)
    const deployment = deploymentOptions.find((d) => d.id === config.deployment)
    const support = supportOptions.find((s) => s.id === config.support)

    // Base costs
    let setupCost = 2000
    let monthlyCost = 500
    const perMinuteCost = 0.05

    // Solution type multiplier
    if (solutionType) {
      setupCost *= solutionType.multiplier
      monthlyCost *= solutionType.multiplier
    }

    // Channels
    const channelCosts = config.channels.reduce((sum, channelId) => {
      const channel = channels.find((c) => c.id === channelId)
      return sum + (channel?.cost || 0)
    }, 0)
    setupCost += channelCosts

    // Languages
    const languageCosts = config.languages.reduce((sum, langId) => {
      const language = languages.find((l) => l.id === langId)
      return sum + (language?.cost || 0)
    }, 0)
    setupCost += languageCosts

    // Concurrent lines
    const lines = config.concurrentLines[0]
    monthlyCost += lines * 50

    // Integrations
    const integrationCosts = config.integrations.reduce((sum, integrationId) => {
      const integration = integrations.find((i) => i.id === integrationId)
      return sum + (integration?.cost || 0)
    }, 0)
    setupCost += integrationCosts

    // SLA multiplier
    if (sla) {
      monthlyCost *= sla.multiplier
    }

    // Deployment multiplier
    if (deployment) {
      setupCost *= deployment.multiplier
      monthlyCost *= deployment.multiplier
    }

    // Support
    if (support) {
      monthlyCost += support.cost
    }

    setPricing({
      setup: Math.round(setupCost),
      monthly: Math.round(monthlyCost),
      perMinute: perMinuteCost,
      currency: locale === "en" ? "USD" : "EUR",
    })
  }

  const handleConfigChange = (key: string, value: any) => {
    setConfig({ ...config, [key]: value })
  }

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Calculator form submitted:", { config, pricing, contactForm })
    // Here you would submit the form data and generate PDF
  }

  const formatCurrency = (amount: number) => {
    const symbol = pricing.currency === "USD" ? "$" : "€"
    return `${symbol}${amount.toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <Badge variant="secondary" className="mb-4">
              Калькулятор стоимости
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Рассчитайте стоимость AI-решения для ваших задач
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Настройте параметры системы и получите мгновенный расчет стоимости внедрения и эксплуатации
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Configuration Panel */}
              <div className="lg:col-span-2 space-y-8">
                {/* Solution Type */}
                <Card>
                  <CardHeader>
                    <CardTitle>Тип решения</CardTitle>
                    <CardDescription>Выберите основной сценарий использования</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {solutionTypes.map((solution) => (
                        <div
                          key={solution.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            config.solutionType === solution.id
                              ? "border-primary bg-primary/5"
                              : "hover:border-primary/50"
                          }`}
                          onClick={() => handleConfigChange("solutionType", solution.id)}
                        >
                          <div className="font-medium">{solution.name}</div>
                          <div className="text-sm text-muted-foreground">Множитель: {solution.multiplier}x</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Channels */}
                <Card>
                  <CardHeader>
                    <CardTitle>Каналы взаимодействия</CardTitle>
                    <CardDescription>Выберите способы связи с AI-ассистентом</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {channels.map((channel) => (
                        <div key={channel.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={channel.id}
                            checked={config.channels.includes(channel.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleConfigChange("channels", [...config.channels, channel.id])
                              } else {
                                handleConfigChange(
                                  "channels",
                                  config.channels.filter((c) => c !== channel.id),
                                )
                              }
                            }}
                          />
                          <Label htmlFor={channel.id} className="flex-1">
                            {channel.name}
                            <span className="text-muted-foreground ml-2">+{formatCurrency(channel.cost)}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Languages */}
                <Card>
                  <CardHeader>
                    <CardTitle>Языки</CardTitle>
                    <CardDescription>Выберите поддерживаемые языки</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {languages.map((language) => (
                        <div key={language.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={language.id}
                            checked={config.languages.includes(language.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleConfigChange("languages", [...config.languages, language.id])
                              } else {
                                handleConfigChange(
                                  "languages",
                                  config.languages.filter((l) => l !== language.id),
                                )
                              }
                            }}
                          />
                          <Label htmlFor={language.id} className="flex-1">
                            {language.name}
                            {language.cost > 0 && (
                              <span className="text-muted-foreground ml-2">+{formatCurrency(language.cost)}</span>
                            )}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Volume & Capacity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Нагрузка и мощность</CardTitle>
                    <CardDescription>Настройте параметры производительности</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label>Минут в месяц: {config.monthlyMinutes[0].toLocaleString()}</Label>
                      <Slider
                        value={config.monthlyMinutes}
                        onValueChange={(value) => handleConfigChange("monthlyMinutes", value)}
                        max={100000}
                        min={100}
                        step={100}
                        className="mt-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>100</span>
                        <span>100,000</span>
                      </div>
                    </div>
                    <div>
                      <Label>Одновременных линий: {config.concurrentLines[0]}</Label>
                      <Slider
                        value={config.concurrentLines}
                        onValueChange={(value) => handleConfigChange("concurrentLines", value)}
                        max={100}
                        min={1}
                        step={1}
                        className="mt-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>1</span>
                        <span>100</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Integrations */}
                <Card>
                  <CardHeader>
                    <CardTitle>Интеграции</CardTitle>
                    <CardDescription>Подключение к внешним системам</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {integrations.map((integration) => (
                        <div key={integration.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={integration.id}
                            checked={config.integrations.includes(integration.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleConfigChange("integrations", [...config.integrations, integration.id])
                              } else {
                                handleConfigChange(
                                  "integrations",
                                  config.integrations.filter((i) => i !== integration.id),
                                )
                              }
                            }}
                          />
                          <Label htmlFor={integration.id} className="flex-1">
                            {integration.name}
                            <span className="text-muted-foreground ml-2">+{formatCurrency(integration.cost)}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* SLA & Deployment */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>SLA</CardTitle>
                      <CardDescription>Уровень доступности</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {slaOptions.map((sla) => (
                          <div
                            key={sla.id}
                            className={`p-3 border rounded-lg cursor-pointer transition-all ${
                              config.sla === sla.id ? "border-primary bg-primary/5" : "hover:border-primary/50"
                            }`}
                            onClick={() => handleConfigChange("sla", sla.id)}
                          >
                            <div className="font-medium">{sla.name}</div>
                            <div className="text-sm text-muted-foreground">Множитель: {sla.multiplier}x</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Развертывание</CardTitle>
                      <CardDescription>Тип инфраструктуры</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {deploymentOptions.map((deployment) => (
                          <div
                            key={deployment.id}
                            className={`p-3 border rounded-lg cursor-pointer transition-all ${
                              config.deployment === deployment.id
                                ? "border-primary bg-primary/5"
                                : "hover:border-primary/50"
                            }`}
                            onClick={() => handleConfigChange("deployment", deployment.id)}
                          >
                            <div className="font-medium">{deployment.name}</div>
                            <div className="text-sm text-muted-foreground">Множитель: {deployment.multiplier}x</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Support */}
                <Card>
                  <CardHeader>
                    <CardTitle>Техническая поддержка</CardTitle>
                    <CardDescription>Уровень поддержки</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {supportOptions.map((support) => (
                        <div
                          key={support.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            config.support === support.id ? "border-primary bg-primary/5" : "hover:border-primary/50"
                          }`}
                          onClick={() => handleConfigChange("support", support.id)}
                        >
                          <div className="font-medium">{support.name}</div>
                          <div className="text-sm text-muted-foreground">+{formatCurrency(support.cost)}/мес</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing Summary */}
              <div className="space-y-6">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Расчет стоимости
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Настройка и внедрение</span>
                        <span className="font-semibold">{formatCurrency(pricing.setup)}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Разовый платеж</div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Ежемесячная плата</span>
                        <span className="font-semibold">{formatCurrency(pricing.monthly)}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Включает поддержку и {config.concurrentLines[0]} линий
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">За минуту разговора</span>
                        <span className="font-semibold">{formatCurrency(pricing.perMinute)}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        ~{formatCurrency(config.monthlyMinutes[0] * pricing.perMinute)}/мес при{" "}
                        {config.monthlyMinutes[0].toLocaleString()} мин
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Общая стоимость в месяц:</span>
                        <span className="text-2xl font-bold text-primary">
                          {formatCurrency(pricing.monthly + config.monthlyMinutes[0] * pricing.perMinute)}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>* Цены указаны без НДС</p>
                      <p>* Возможны скидки при годовой оплате</p>
                      <p>* Финальная стоимость определяется после технического аудита</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Получить коммерческое предложение</CardTitle>
                    <CardDescription>Отправим детальный расчет на email</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactFormSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="calc-name">Имя *</Label>
                        <Input
                          id="calc-name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="calc-company">Компания *</Label>
                        <Input
                          id="calc-company"
                          value={contactForm.company}
                          onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="calc-email">Email *</Label>
                        <Input
                          id="calc-email"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="calc-phone">Телефон</Label>
                        <Input
                          id="calc-phone"
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="calc-message">Дополнительные требования</Label>
                        <Textarea
                          id="calc-message"
                          placeholder="Особенности проекта, сроки внедрения..."
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="send-pdf"
                          checked={contactForm.sendPdf}
                          onCheckedChange={(checked) => setContactForm({ ...contactForm, sendPdf: !!checked })}
                        />
                        <Label htmlFor="send-pdf" className="text-sm">
                          Отправить PDF с расчетом
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="calc-privacy"
                          checked={contactForm.privacy}
                          onCheckedChange={(checked) => setContactForm({ ...contactForm, privacy: !!checked })}
                          required
                        />
                        <Label htmlFor="calc-privacy" className="text-sm">
                          Согласен на обработку данных *
                        </Label>
                      </div>

                      <div className="space-y-2">
                        <Button
                          type="submit"
                          className="w-full"
                          disabled={!contactForm.privacy}
                          data-cta="cta-calculate"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Получить КП
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full bg-transparent"
                          disabled={!contactForm.privacy}
                          data-cta="cta-download-pdf"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Скачать PDF
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong>Важно:</strong> Данный калькулятор предоставляет предварительную оценку стоимости.
              </p>
              <p>
                Финальная стоимость определяется после технического аудита и может отличаться в зависимости от
                специфических требований проекта.
              </p>
              <p>Все цены указаны в {pricing.currency === "USD" ? "долларах США" : "евро"} без учета НДС.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
