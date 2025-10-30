"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { useTranslations } from "@/lib/i18n/translations"

interface PlatformFeaturesSectionProps {
  locale: Locale
}

export function PlatformFeaturesSection({ locale }: PlatformFeaturesSectionProps) {
  const { t } = useTranslations(locale)

  const features = [
    t("platform.feature1"),
    t("platform.feature2"),
    t("platform.feature3"),
    t("platform.feature4"),
    t("platform.feature5"),
    t("platform.feature6"),
    t("platform.feature7"),
    t("platform.feature8"),
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E26] mb-4">{t("platform.title")}</h2>
          <p className="text-lg text-[#8E8EA0] max-w-3xl mx-auto">{t("platform.description")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1E26] mb-6">{t("platform.workflow.title")}</h3>
            <p className="text-lg text-[#8E8EA0] mb-6">{t("platform.workflow.description")}</p>
            <ul className="space-y-3">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#22D3EE] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1E1E26]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative bg-white border border-[#E1E3EB] rounded-2xl p-4 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-faumQMrOgLysYaiixj3knXQS5GnJk7.png"
                alt="Workflow Builder - Visual Automation Constructor"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative bg-white border border-[#E1E3EB] rounded-2xl p-4 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7wGvCJuYhzr2pUKvjwa2t2pipQeu0x.png"
                alt="Analytics Dashboard - Real-time Statistics"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1E26] mb-6">{t("platform.analytics.title")}</h3>
            <p className="text-lg text-[#8E8EA0] mb-6">{t("platform.analytics.description")}</p>
            <ul className="space-y-3">
              {features.slice(4).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1E1E26]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#7C3AED]/10 to-[#22D3EE]/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1E26] mb-4">{t("platform.integration.title")}</h3>
            <p className="text-lg text-[#8E8EA0] mb-8">{t("platform.integration.description")}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tR7lB6uO1iZThgfpLQdZc6uEVSQWDN.png"
                  alt="OpenAI"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JBQm9vJDg6pVRXdl4yY21ft8buqMtQ.png"
                  alt="Google Gemini"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KgvwnRbZ6qzLthN5BPf69LLLU0UpMm.png"
                  alt="DeepSeek"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aerRzvWXjvP3pXM6zOB2aMghUA0K00.png"
                  alt="Yandex"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dtTJ7Y3X1IBT1pbU7H7mqTNLqTj0Kb.png"
                  alt="xAI Grok"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
