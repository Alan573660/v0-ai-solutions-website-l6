"use client"
import type { Locale } from "@/lib/i18n/config"
import { SmartHomeHero } from "./_components/SmartHomeHero"
import { lazy, Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const StatsSection = lazy(() => import("./_components/StatsSection"))
const BenefitsSection = lazy(() => import("./_components/BenefitsSection"))
const AIPlatformsSection = lazy(() => import("./_components/AIPlatformsSection"))
const FeaturesSection = lazy(() => import("./_components/FeaturesSection"))
const CaseStudiesSection = lazy(() => import("./_components/CaseStudiesSection"))
const WhyUsSection = lazy(() => import("./_components/WhyUsSection"))
const ContactSection = lazy(() => import("./_components/ContactSection"))
const FinalCTA = lazy(() => import("./_components/FinalCTA"))

interface SmartHomePageProps {
  params: { locale: Locale }
}

function SectionSkeleton() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <Skeleton className="h-12 w-64 mx-auto mb-8" />
        <Skeleton className="h-6 w-96 mx-auto mb-16" />
        <div className="grid md:grid-cols-3 gap-8">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
      </div>
    </div>
  )
}

export default function SmartHomePage({ params }: SmartHomePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <SmartHomeHero />

      <Suspense fallback={<SectionSkeleton />}>
        <StatsSection locale={params.locale} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <BenefitsSection locale={params.locale} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <AIPlatformsSection locale={params.locale} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FeaturesSection locale={params.locale} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CaseStudiesSection locale={params.locale} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <WhyUsSection locale={params.locale} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection locale={params.locale} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FinalCTA locale={params.locale} />
      </Suspense>
    </div>
  )
}
