"use client"

interface OrganizationSchemaProps {
  locale: string
}

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ai-solutions.ru/#organization",
    name: "AI Solutions",
    alternateName: ["AI Solutions Platform", "AI Solutions Voice AI"],
    url: "https://ai-solutions.ru",
    logo: {
      "@type": "ImageObject",
      url: "https://ai-solutions.ru/logo.png",
      width: 250,
      height: 60,
    },
    description:
      locale === "ru"
        ? "Лидирующая платформа голосового ИИ в СНГ и Европе. Создаем интеллектуальные голосовые ассистенты для автоматизации клиентского сервиса, продаж и поддержки."
        : "Leading voice AI platform in CIS and Europe. Creating intelligent voice assistants for customer service, sales and support automation.",
    foundingDate: "2020",
    founders: [
      {
        "@type": "Person",
        name: "Александр Петров",
        jobTitle: "CEO & Founder",
      },
      {
        "@type": "Person",
        name: "Анна Коваленко",
        jobTitle: "CTO & Co-Founder",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 80,
      minValue: 70,
      maxValue: 90,
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Calle de Alcalá, 42",
        addressLocality: "Madrid",
        postalCode: "28014",
        addressCountry: "ES",
        addressRegion: "Madrid",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Красная Площадь, 1",
        addressLocality: "Москва",
        postalCode: "109012",
        addressCountry: "RU",
        addressRegion: "Москва",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "пр. Мангилик Ел, 55/11",
        addressLocality: "Астана",
        postalCode: "010000",
        addressCountry: "KZ",
        addressRegion: "Астана",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+7-495-123-45-67",
        contactType: "customer service",
        areaServed: ["RU", "KZ", "BY", "UA"],
        availableLanguage: ["Russian", "English", "Kazakh"],
        contactOption: "TollFree",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+34-91-123-45-67",
        contactType: "customer service",
        areaServed: ["ES", "EU"],
        availableLanguage: ["Spanish", "English"],
        contactOption: "TollFree",
      },
    ],
    sameAs: [
      "https://linkedin.com/company/ai-solutions",
      "https://twitter.com/aisolutions",
      "https://facebook.com/aisolutions",
      "https://github.com/ai-solutions",
      "https://youtube.com/@aisolutions",
    ],
    award: ["AI Innovation Award 2024", "Best Voice AI Platform CIS 2024", "Top 10 AI Startups Europe 2023"],
    knowsAbout: [
      "Artificial Intelligence",
      "Voice AI",
      "Natural Language Processing",
      "Machine Learning",
      "Speech Recognition",
      "Conversational AI",
      "Customer Service Automation",
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 55.7558,
        longitude: 37.6173,
      },
      geoRadius: "5000000",
    },
    slogan: locale === "ru" ? "Голосовой ИИ для бизнеса будущего" : "Voice AI for the Business of Tomorrow",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
