"use client"

import type { Locale } from "@/lib/i18n/translations"
import type { FAQItem } from "@/lib/types/faq"
import { useState } from "react"

interface FAQClientProps {
  locale: Locale
  faqItems: FAQItem[]
}

export default function FAQClient({ locale, faqItems }: FAQClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Assuming you have a translation hook or function for client-side use
  // For demonstration, we'll use a placeholder. In a real app, you'd import and use it.
  // const t = useTranslations(locale);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      {faqItems.map((item, index) => (
        <div key={item.id} className="mb-4 border rounded-lg">
          <button
            className="w-full text-left py-4 px-5 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${item.id}`}
          >
            {item.question}
            <span
              className={`float-right transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
            >
              &#9660; {/* Downward arrow icon */}
            </span>
          </button>
          <div
            id={`faq-content-${item.id}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-screen opacity-100 p-5 border-t" : "max-h-0 opacity-0 p-0 border-t-0"
            }`}
            role="region"
            aria-labelledby={`faq-content-${item.id}`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
