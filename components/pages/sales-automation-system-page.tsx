'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp, BarChart3, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslation } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'

export function SalesAutomationSystemPage() {
  const t = useTranslation()
  const [activeTab, setActiveTab] = useState('features')

  const benefits = [
    { icon: TrendingUp, title: '3-5x Productivity', desc: 'Increase sales productivity dramatically' },
    { icon: Zap, title: 'Quick Setup', desc: 'Deploy in 7 days with ready-made integrations' },
    { icon: Target, title: 'Lead Qualification', desc: 'Automatic scoring and prioritization' },
    { icon: BarChart3, title: 'Full Analytics', desc: 'Track all metrics in real-time dashboard' },
    { icon: Clock, title: '24/7 Operation', desc: 'AI works while your team sleeps' },
    { icon: Users, title: 'CRM Ready', desc: 'Seamless integration with major CRM systems' },
  ]

  const features = [
    'Automatic lead capture and processing',
    'Intelligent customer segmentation',
    'Automated follow-up sequences',
    'Real-time sales pipeline tracking',
    'Mobile app for on-the-go management',
    'Built-in compliance and security',
  ]

  const useCases = [
    {
      industry: 'E-Commerce',
      description: 'Increase order volume through automated lead nurturing',
      results: '+2.5x sales',
    },
    {
      industry: 'Real Estate',
      description: 'Qualify and schedule property tours automatically',
      results: '+70% qualified leads',
    },
    {
      industry: 'B2B Services',
      description: 'Automated outbound calling and email sequences',
      results: '+200% appointments',
    },
    {
      industry: 'Insurance',
      description: 'Lead qualification and quote generation',
      results: '+150% conversion',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Sales Automation System for SMB
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-6">
                AI System for Sales Team Automation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Increase sales productivity 3-5x with AI-powered automation system. Deploy in 7 days without complex integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative h-[400px] rounded-lg overflow-hidden border border-border/50 bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">AI Sales Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Sales Automation System</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Purpose-built for SMBs with quick deployment and no technical complexity
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <Card key={idx} className="border border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Complete Feature Set</h2>
              <p className="text-lg text-muted-foreground mb-8">
                All tools your sales team needs, ready to deploy immediately
              </p>
              <div className="space-y-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative h-[400px] rounded-lg overflow-hidden border border-border/50 bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Sales Metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven across different industries and business types
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <Card key={idx} className="border border-border/50">
                <CardHeader>
                  <CardTitle>{useCase.industry}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Typical Results</span>
                    <span className="text-2xl font-bold text-green-500">{useCase.results}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border/50">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How quickly can we deploy?',
                a: 'Typical deployment is 7 days. We handle integration, training, and customization.',
              },
              {
                q: 'What CRM systems do you support?',
                a: 'We integrate with amoCRM, Bitrix24, Pipedrive, HubSpot, Salesforce, and custom APIs.',
              },
              {
                q: 'Is there a learning curve?',
                a: 'No. Our system is designed for immediate use. Your team gets on-site training during deployment.',
              },
              {
                q: 'What about data security?',
                a: 'ISO 27001 certified. All data encrypted. On-premise options available for enterprises.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-border/50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Sales?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 500+ companies using our Sales Automation System to increase productivity and revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule 30-min Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">No credit card required. Free consultation included.</p>
        </div>
      </section>
    </div>
  )
}
