"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
  Phone,
  Clock,
  Users,
  CheckCircle,
  PlayCircle,
  TrendingUp,
  Zap,
  Target,
  BarChart3,
  Sparkles,
  MessageSquare,
  DollarSign,
  FileText,
  Bell,
} from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "next-intl"
import { useCTA } from "@/components/modals/cta-provider"

interface VoiceSalesManagerPageProps {
  params: { locale: Locale }
}

export function VoiceSalesManagerClientPage({ params }: VoiceSalesManagerPageProps) {
  const { locale } = params
  const t = useTranslations()
  const { openModal } = useCTA()

  const problems = [
    {
      title: t("voiceSales.problem1.title"),
      description: t("voiceSales.problem1.description"),
      icon: Phone,
      color: "from-red-500 to-orange-500",
    },
    {
      title: t("voiceSales.problem2.title"),
      description: t("voiceSales.problem2.description"),
      icon: Clock,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: t("voiceSales.problem3.title"),
      description: t("voiceSales.problem3.description"),
      icon: Users,
      color: "from-amber-500 to-yellow-500",
    },
  ]

  const solutions = [
    {
      title: t("voiceSales.solution1.title"),
      description: t("voiceSales.solution1.description"),
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("voiceSales.solution2.title"),
      description: t("voiceSales.solution2.description"),
      icon: MessageSquare,
      color: "from-cyan-500 to-teal-500",
    },
    {
      title: t("voiceSales.solution3.title"),
      description: t("voiceSales.solution3.description"),
      icon: DollarSign,
      color: "from-teal-500 to-green-500",
    },
    {
      title: t("voiceSales.solution4.title"),
      description: t("voiceSales.solution4.description"),
      icon: FileText,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: t("voiceSales.solution5.title"),
      description: t("voiceSales.solution5.description"),
      icon: Bell,
      color: "from-emerald-500 to-lime-500",
    },
  ]

  const integrations = [
    { name: t("voiceSales.integration1.name"), description: t("voiceSales.integration1.description"), icon: "🔗" },
    { name: t("voiceSales.integration2.name"), description: t("voiceSales.integration2.description"), icon: "💳" },
    { name: t("voiceSales.integration3.name"), description: t("voiceSales.integration3.description"), icon: "📦" },
    { name: t("voiceSales.integration4.name"), description: t("voiceSales.integration4.description"), icon: "🧠" },
  ]

  const scenarios = [
    {
      id: "incoming",
      title: t("voiceSales.scenario1.title"),
      description: t("voiceSales.scenario1.description"),
      dialogue: [
        { speaker: "AI", text: t("voiceSales.scenario1.dialogue1") },
        { speaker: "Клиент", text: t("voiceSales.scenario1.dialogue2") },
        { speaker: "AI", text: t("voiceSales.scenario1.dialogue3") },
      ],
    },
    {
      id: "outgoing",
      title: t("voiceSales.scenario2.title"),
      description: t("voiceSales.scenario2.description"),
      dialogue: [
        { speaker: "AI", text: t("voiceSales.scenario2.dialogue1") },
        { speaker: "Клиент", text: t("voiceSales.scenario2.dialogue2") },
        { speaker: "AI", text: t("voiceSales.scenario2.dialogue3") },
      ],
    },
    {
      id: "cart",
      title: t("voiceSales.scenario3.title"),
      description: t("voiceSales.scenario3.description"),
      dialogue: [
        { speaker: "AI", text: t("voiceSales.scenario3.dialogue1") },
        { speaker: "Клиент", text: t("voiceSales.scenario3.dialogue2") },
        { speaker: "AI", text: t("voiceSales.scenario3.dialogue3") },
      ],
    },
  ]

  const kpis = [
    { metric: t("voiceSales.kpi1.metric"), before: "12%", after: "28%", improvement: "+133%", icon: TrendingUp },
    { metric: t("voiceSales.kpi2.metric"), before: "45 сек", after: "0 сек", improvement: "100%", icon: Zap },
    { metric: t("voiceSales.kpi3.metric"), before: "40%", after: "100%", improvement: "+150%", icon: Target },
    { metric: t("voiceSales.kpi4.metric"), before: "$50", after: "$18", improvement: "-64%", icon: BarChart3 },
  ]

  const cases = [
    {
      title: t("voiceSales.case1.title"),
      description: t("voiceSales.case1.description"),
      results: [t("voiceSales.case1.result1"), t("voiceSales.case1.result2"), t("voiceSales.case1.result3")],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: t("voiceSales.case2.title"),
      description: t("voiceSales.case2.description"),
      results: [t("voiceSales.case2.result1"), t("voiceSales.case2.result2"), t("voiceSales.case2.result3")],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: t("voiceSales.case3.title"),
      description: t("voiceSales.case3.description"),
      results: [t("voiceSales.case3.result1"), t("voiceSales.case3.result2"), t("voiceSales.case3.result3")],
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  const faq = [
    {
      question: t("voiceSales.faq1.question"),
      answer: t("voiceSales.faq1.answer"),
    },
    {
      question: t("voiceSales.faq2.question"),
      answer: t("voiceSales.faq2.answer"),
    },
    {
      question: t("voiceSales.faq3.question"),
      answer: t("voiceSales.faq3.answer"),
    },
    {
      question: t("voiceSales.faq4.question"),
      answer: t("voiceSales.faq4.answer"),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header and Footer components are removed as they're already in layout.tsx */}
      {/* <Header locale={locale} /> */}

      <main>
        <section className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
          {/* Декоративные элементы фона */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  {t("voiceSales.badge")}
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                  {t("voiceSales.title")}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
                  {t("voiceSales.description")}
                </p>
                <ul className="space-y-4">
                  {[t("voiceSales.benefit1"), t("voiceSales.benefit2"), t("voiceSales.benefit3")].map((item, index) => (
                    <li key={index} className="flex items-center gap-4 text-lg">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <Button
                    size="lg"
                    className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 group w-full sm:w-auto"
                    onClick={() => openModal("demo")}
                  >
                    <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    {t("cta.listenDemo")}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-transparent w-full sm:w-auto"
                    onClick={() => openModal("trial")}
                  >
                    {t("cta.tryFree")}
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center ring-4 ring-white/30">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{t("voiceSales.aiManager")}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" />
                        <p className="text-white/90 text-sm">{t("voiceSales.online")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <p className="text-white leading-relaxed">{t("voiceSales.greeting")}</p>
                    </div>
                    <div className="flex gap-2 px-2">
                      <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce" />
                      <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce delay-100" />
                      <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce delay-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      {[
                        t("voiceSales.quickResponse"),
                        t("voiceSales.personalization"),
                        t("voiceSales.crmIntegration"),
                        t("voiceSales.analytics"),
                      ].map((feature, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                          <p className="text-white text-sm font-medium">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                {t("voiceSales.problemsBadge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{t("voiceSales.problemsTitle")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t("voiceSales.problemsSubtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => {
                const Icon = problem.icon
                return (
                  <Card
                    key={index}
                    className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
                  >
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${problem.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                    />
                    <CardHeader className="text-center space-y-6 relative">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{problem.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{problem.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                {t("voiceSales.solutionsBadge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{t("voiceSales.solutionsTitle")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t("voiceSales.solutionsSubtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <Card
                    key={index}
                    className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/50"
                  >
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity`}
                    />
                    <CardHeader className="space-y-4 relative">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}
                        >
                          {index + 1}
                        </div>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                {t("voiceSales.integrationsBadge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{t("voiceSales.integrationsTitle")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t("voiceSales.integrationsSubtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/50 hover:-translate-y-2"
                >
                  <CardHeader className="space-y-4">
                    <div className="text-5xl group-hover:scale-125 transition-transform">{integration.icon}</div>
                    <CardTitle className="text-xl">{integration.name}</CardTitle>
                    <CardDescription className="leading-relaxed">{integration.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                {t("voiceSales.scenariosBadge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{t("voiceSales.scenariosTitle")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t("voiceSales.scenariosSubtitle")}
              </p>
            </div>
            <Tabs defaultValue="incoming" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-auto p-2 bg-muted/50">
                {scenarios.map((scenario) => (
                  <TabsTrigger
                    key={scenario.id}
                    value={scenario.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 text-base"
                  >
                    {scenario.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {scenarios.map((scenario) => (
                <TabsContent key={scenario.id} value={scenario.id} className="mt-8">
                  <Card className="border-2">
                    <CardHeader className="space-y-2 bg-muted/30">
                      <CardTitle className="text-2xl">{scenario.title}</CardTitle>
                      <CardDescription className="text-base">{scenario.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-8">
                      <div className="space-y-6">
                        {scenario.dialogue.map((line, index) => (
                          <div
                            key={index}
                            className={`flex ${line.speaker === "AI" ? "justify-start" : "justify-end"}`}
                          >
                            <div
                              className={`max-w-[85%] p-5 rounded-2xl shadow-md ${
                                line.speaker === "AI"
                                  ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
                                  : "bg-muted border-2"
                              }`}
                            >
                              <p className="text-sm font-semibold mb-2 opacity-90">{line.speaker}</p>
                              <p className="leading-relaxed">{line.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 text-center">
                        <Button size="lg" variant="outline" asChild data-cta="cta-listen-demo">
                          <Link href={`/${locale}/platform/demo`}>
                            <PlayCircle className="mr-2 h-5 w-5" />
                            {t("voiceSales.listenFullDialogue")}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                {t("voiceSales.resultsBadge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{t("voiceSales.resultsTitle")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t("voiceSales.resultsSubtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi, index) => {
                const Icon = kpi.icon
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/50 hover:-translate-y-2"
                  >
                    <CardHeader className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{kpi.metric}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center px-4 py-2 bg-muted/50 rounded-lg">
                          <span className="text-muted-foreground">{t("voiceSales.before")}</span>
                          <span className="font-semibold">{kpi.before}</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-2 bg-muted/50 rounded-lg">
                          <span className="text-muted-foreground">{t("voiceSales.after")}</span>
                          <span className="font-semibold">{kpi.after}</span>
                        </div>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent pt-2">
                        {kpi.improvement}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                {t("voiceSales.casesBadge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{t("voiceSales.casesTitle")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t("voiceSales.casesSubtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((case_, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 hover:border-primary/50"
                >
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${case_.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}
                  />
                  <CardHeader className="space-y-4 relative">
                    <CardTitle className="text-xl">{case_.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{case_.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div className="flex flex-wrap gap-2">
                      {case_.results.map((result, resultIndex) => (
                        <Badge key={resultIndex} variant="secondary" className="text-sm px-3 py-1">
                          {result}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full group/btn bg-transparent" asChild>
                      <Link href={`/${locale}/cases`}>
                        {t("voiceSales.readMore")}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                {t("voiceSales.pricingBadge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{t("voiceSales.pricingTitle")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t("voiceSales.pricingSubtitle")}
              </p>
            </div>
            <Card className="border-2 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">{t("voiceSales.setup")}</h3>
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      от $2,000
                    </p>
                    <p className="text-sm text-muted-foreground">{t("voiceSales.setupCost")}</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">{t("voiceSales.perMinute")}</h3>
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      от $0.05
                    </p>
                    <p className="text-sm text-muted-foreground">{t("voiceSales.perMinuteCost")}</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">{t("voiceSales.support")}</h3>
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      от $500/мес
                    </p>
                    <p className="text-sm text-muted-foreground">{t("voiceSales.supportCost")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button size="lg" className="text-lg h-14 px-8" asChild data-cta="cta-calculate">
                <Link href={`/${locale}/platform/pricing-calculator`}>
                  {t("cta.calculate")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                {t("voiceSales.faqBadge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{t("voiceSales.faqTitle")}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 rounded-xl px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="space-y-4 sm:space-y-6 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">{t("voiceSales.startToday")}</h2>
              <p className="text-lg sm:text-xl md:text-2xl opacity-95 text-pretty max-w-2xl mx-auto leading-relaxed">
                {t("voiceSales.startTodayDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 max-w-md sm:max-w-none mx-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 group w-full sm:w-auto"
                  onClick={() => openModal("demo")}
                >
                  {t("cta.requestDemo")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm w-full sm:w-auto"
                  asChild
                >
                  <Link href={`/${locale}/platform/pricing-calculator`}>{t("cta.calculate")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer component is removed as it's already in layout.tsx */}
      {/* <Footer locale={locale} /> */}
    </div>
  )
}
