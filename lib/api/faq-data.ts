export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  locale: string
}

export const faqData: Record<string, FAQItem[]> = {
  ru: [
    // Общие вопросы (15)
    {
      id: "what-is-ai-assistant",
      question: "Что такое голосовой AI-ассистент?",
      answer:
        "Голосовой AI-ассистент — это программа на основе искусственного интеллекта, которая может вести диалог с клиентами по телефону, используя технологии распознавания и синтеза речи. Наши ассистенты могут квалифицировать лиды, отвечать на вопросы, записывать на встречи и даже заключать сделки.",
      category: "general",
      locale: "ru",
    },
    {
      id: "how-it-works",
      question: "Как работает AI-ассистент?",
      answer:
        "AI-ассистент использует технологии распознавания речи (Speech-to-Text), обработки естественного языка (NLP) и синтеза речи (Text-to-Speech). Когда клиент звонит, система распознает речь, анализирует намерение, формирует ответ и произносит его естественным голосом.",
      category: "general",
      locale: "ru",
    },
    {
      id: "setup-time",
      question: "Как быстро можно запустить ассистента?",
      answer:
        "Базовая настройка занимает 1-2 дня. Полная кастомизация под ваши процессы — 1-2 недели. Мы предоставляем готовые шаблоны для популярных сценариев, которые можно запустить в течение нескольких часов.",
      category: "general",
      locale: "ru",
    },
    // Pricing questions (5)
    {
      id: "pricing-details",
      question: "Какие детали приводят к различным ценам?",
      answer:
        "Цены могут варьироваться в зависимости от функционала, объема обработки и специфических требований вашего бизнеса. Мы предлагаем тарифные планы, которые можно настроить под ваши нужды.",
      category: "pricing",
      locale: "ru",
    },
    // Implementation questions (5)
    {
      id: "implementation-steps",
      question: "Какие шаги нужно выполнить для внедрения?",
      answer:
        "Для внедрения AI-ассистента необходимо определить бизнес-процессы, которые будут автоматизированы, выбрать подходящий тарифный план и настроить параметры работы ассистента.",
      category: "implementation",
      locale: "ru",
    },
    // Features questions (5)
    {
      id: "supported-features",
      question: "Какие функции поддерживаются?",
      answer:
        "Наши AI-ассистенты предлагают широкий спектр функций, включая квалификацию лидов, обработку заказов, интеграцию с CRM-системами и многое другое.",
      category: "features",
      locale: "ru",
    },
    // Support questions (5)
    {
      id: "customer-support",
      question: "Какой у вас клиентский сервис?",
      answer:
        "Мы предлагаем круглосуточную поддержку клиентов с возможностью обращения в службу поддержки по электронной почте или телефону.",
      category: "support",
      locale: "ru",
    },
    // Use cases questions (5)
    {
      id: "common-use-cases",
      question: "Какие типичные сценарии использования?",
      answer:
        "Наши AI-ассистенты могут использоваться в различных сценариях, таких как поддержка клиентов, продажи, обслуживание клиентов и другие.",
      category: "use-cases",
      locale: "ru",
    },
  ],
  en: [
    // General questions (15)
    {
      id: "what-is-ai-assistant",
      question: "What is a voice AI assistant?",
      answer:
        "A voice AI assistant is an artificial intelligence-powered program that can conduct phone conversations with customers using speech recognition and synthesis technologies. Our assistants can qualify leads, answer questions, schedule appointments, and even close deals.",
      category: "general",
      locale: "en",
    },
    {
      id: "how-it-works",
      question: "How does an AI assistant work?",
      answer:
        "An AI assistant uses speech recognition (Speech-to-Text), natural language processing (NLP), and text-to-speech (Text-to-Speech) technologies. When a customer calls, the system recognizes the speech, analyzes the intent, forms a response, and speaks it in a natural voice.",
      category: "general",
      locale: "en",
    },
    {
      id: "setup-time",
      question: "How quickly can the assistant be set up?",
      answer:
        "Basic setup takes 1-2 days. Full customization for your processes takes 1-2 weeks. We provide ready-made templates for popular scenarios that can be launched within a few hours.",
      category: "general",
      locale: "en",
    },
    // Pricing questions (5)
    {
      id: "pricing-details",
      question: "What details lead to different pricing?",
      answer:
        "Prices may vary based on functionality, processing volume, and specific requirements of your business. We offer tariff plans that can be customized to your needs.",
      category: "pricing",
      locale: "en",
    },
    // Implementation questions (5)
    {
      id: "implementation-steps",
      question: "What steps are needed for implementation?",
      answer:
        "To implement an AI assistant, you need to define the business processes that will be automated, choose the appropriate tariff plan, and set up the assistant's parameters.",
      category: "implementation",
      locale: "en",
    },
    // Features questions (5)
    {
      id: "supported-features",
      question: "What features are supported?",
      answer:
        "Our AI assistants offer a wide range of features, including lead qualification, order processing, CRM system integration, and much more.",
      category: "features",
      locale: "en",
    },
    // Support questions (5)
    {
      id: "customer-support",
      question: "What is your customer support?",
      answer: "We offer 24/7 customer support with the ability to contact the support team via email or phone.",
      category: "support",
      locale: "en",
    },
    // Use cases questions (5)
    {
      id: "common-use-cases",
      question: "What are typical use cases?",
      answer:
        "Our AI assistants can be used in various scenarios, such as customer support, sales, client service, and others.",
      category: "use-cases",
      locale: "en",
    },
  ],
  es: [
    {
      id: "what-is-ai-assistant",
      question: "¿Qué es un asistente de IA por voz?",
      answer:
        "Un asistente de IA por voz es un programa impulsado por inteligencia artificial que puede mantener conversaciones telefónicas con clientes utilizando tecnologías de reconocimiento y síntesis de voz. Nuestros asistentes pueden calificar leads, responder preguntas, programar citas e incluso cerrar ventas.",
      category: "general",
      locale: "es",
    },
    // Pricing questions (5)
    {
      id: "pricing-details",
      question: "¿Qué detalles llevan a diferentes precios?",
      answer:
        "Los precios pueden variar según la funcionalidad, el volumen de procesamiento y los requisitos específicos de su negocio. Ofrecemos planes tarifarios que se pueden personalizar según sus necesidades.",
      category: "pricing",
      locale: "es",
    },
    // Implementation questions (5)
    {
      id: "implementation-steps",
      question: "¿Qué pasos se necesitan para la implementación?",
      answer:
        "Para implementar un asistente de IA, necesita definir los procesos de negocio que se automatizarán, elegir el plan tarifario adecuado y configurar los parámetros del asistente.",
      category: "implementation",
      locale: "es",
    },
    // Features questions (5)
    {
      id: "supported-features",
      question: "¿Qué características se admiten?",
      answer:
        "Nuestros asistentes de IA ofrecen una amplia gama de características, incluyendo la calificación de leads, el procesamiento de pedidos, la integración con sistemas CRM y mucho más.",
      category: "features",
      locale: "es",
    },
    // Support questions (5)
    {
      id: "customer-support",
      question: "¿Cuál es su servicio al cliente?",
      answer:
        "Ofrecemos soporte al cliente 24/7 con la capacidad de contactar al equipo de soporte a través de correo electrónico o teléfono.",
      category: "support",
      locale: "es",
    },
    // Use cases questions (5)
    {
      id: "common-use-cases",
      question: "¿Cuáles son los casos de uso típicos?",
      answer:
        "Nuestros asistentes de IA se pueden usar en diversos escenarios, como soporte al cliente, ventas, servicio al cliente y otros.",
      category: "use-cases",
      locale: "es",
    },
  ],
  de: [
    {
      id: "what-is-ai-assistant",
      question: "Was ist ein Sprach-KI-Assistent?",
      answer:
        "Ein Sprach-KI-Assistent ist ein KI-gesteuertes Programm, das Telefongespräche mit Kunden führen kann, indem es Spracherkennungs- und Synthesetechnologien verwendet. Unsere Assistenten können Leads qualifizieren, Fragen beantworten, Termine vereinbaren und sogar Geschäfte abschließen.",
      category: "general",
      locale: "de",
    },
    // Pricing questions (5)
    {
      id: "pricing-details",
      question: "Was führt zu unterschiedlichen Preisen?",
      answer:
        "Die Preise können je nach Funktionalität, Verarbeitungsvolumen und spezifischen Anforderungen Ihres Geschäfts variieren. Wir bieten Tarifpläne an, die an Ihre Bedürfnisse angepasst werden können.",
      category: "pricing",
      locale: "de",
    },
    // Implementation questions (5)
    {
      id: "implementation-steps",
      question: "Welche Schritte sind für die Implementierung erforderlich?",
      answer:
        "Um einen Sprach-KI-Assistenten zu implementieren, müssen Sie die Geschäftsprozesse identifizieren, die automatisiert werden sollen, den entsprechenden Tarifplan wählen und die Parameter des Assistenten einrichten.",
      category: "implementation",
      locale: "de",
    },
    // Features questions (5)
    {
      id: "supported-features",
      question: "Welche Funktionen werden unterstützt?",
      answer:
        "Unsere Sprach-KI-Assistenten bieten eine Vielfalt von Funktionen an, darunter die Qualifikation von Leads, die Verarbeitung von Bestellungen, die Integration mit CRM-Systemen und vieles mehr.",
      category: "features",
      locale: "de",
    },
    // Support questions (5)
    {
      id: "customer-support",
      question: "Was ist Ihr Kundensupport?",
      answer:
        "Wir bieten 24/7 Kundensupport an, bei dem Sie über E-Mail oder Telefon mit dem Support-Team Kontaktieren können.",
      category: "support",
      locale: "de",
    },
    // Use cases questions (5)
    {
      id: "common-use-cases",
      question: "Was sind typische Anwendungsfälle?",
      answer:
        "Unsere Sprach-KI-Assistenten können in verschiedenen Szenarien eingesetzt werden, wie Kundenbetreuung, Vertrieb, Kundendienst und mehr.",
      category: "use-cases",
      locale: "de",
    },
  ],
  nl: [
    {
      id: "what-is-ai-assistant",
      question: "Wat is een spraak-AI-assistent?",
      answer:
        "Een spraak-AI-assistent is een AI-aangedreven programma dat telefoongesprekken met klanten kan voeren met behulp van spraakherkennings- en synthesetechnologieën. Onze assistenten kunnen leads kwalificeren, vragen beantwoorden, afspraken plannen en zelfs deals sluiten.",
      category: "general",
      locale: "nl",
    },
    // Pricing questions (5)
    {
      id: "pricing-details",
      question: "Wat leidt tot verschillende prijzen?",
      answer:
        "De prijzen kunnen variëren op basis van functionaliteit, verwerkingsvolume en specifieke vereisten van uw bedrijf. We bieden tariefplannen aan die u kunt aanpassen aan uw behoeften.",
      category: "pricing",
      locale: "nl",
    },
    // Implementation questions (5)
    {
      id: "implementation-steps",
      question: "Welke stappen zijn nodig voor de implementatie?",
      answer:
        "Om een spraak-AI-assistent te implementeren, moet u de bedrijfsprocessen identificeren die geautomatiseerd moeten worden, de juiste tariefplan kiezen en de parameters van de assistent instellen.",
      category: "implementation",
      locale: "nl",
    },
    // Features questions (5)
    {
      id: "supported-features",
      question: "Welke functies worden ondersteund?",
      answer:
        "Onze spraak-AI-assistenten bieden een breed scala aan functies aan, waaronder de kwalificatie van leads, de verwerking van bestellingen, de integratie met CRM-systemen en nog veel meer.",
      category: "features",
      locale: "nl",
    },
    // Support questions (5)
    {
      id: "customer-support",
      question: "Wat is uw klantenservice?",
      answer:
        "We bieden 24/7 klantenservice aan, waarbij u contact kunt opnemen met het supportteam via e-mail of telefoon.",
      category: "support",
      locale: "nl",
    },
    // Use cases questions (5)
    {
      id: "common-use-cases",
      question: "Wat zijn typische toepassingsgebieden?",
      answer:
        "Onze spraak-AI-assistenten kunnen worden gebruikt in verschillende scenario's, zoals klantenservice, verkoop, klantensupport en meer.",
      category: "use-cases",
      locale: "nl",
    },
  ],
  fr: [
    {
      id: "what-is-ai-assistant",
      question: "Qu'est-ce qu'un assistant IA vocal ?",
      answer:
        "Un assistant IA vocal est un programme alimenté par l'intelligence artificielle qui peut mener des conversations téléphoniques avec les clients en utilisant des technologies de reconnaissance et de synthèse vocale. Nos assistants peuvent qualifier les leads, répondre aux questions, planifier des rendez-vous et même conclure des ventes.",
      category: "general",
      locale: "fr",
    },
    // Pricing questions (5)
    {
      id: "pricing-details",
      question: "Quelles détails conduisent à des prix différents?",
      answer:
        "Les prix peuvent varier en fonction de la fonctionnalité, du volume de traitement et des exigences spécifiques de votre entreprise. Nous proposons des plans tarifaires que vous pouvez adapter à vos besoins.",
      category: "pricing",
      locale: "fr",
    },
    // Implementation questions (5)
    {
      id: "implementation-steps",
      question: "Quelles étapes sont nécessaires pour l'implémentation?",
      answer:
        "Pour mettre en œuvre un assistant IA vocal, vous devez identifier les processus métier qui doivent être automatisés, choisir le plan tarifaire approprié et configurer les paramètres de l'assistant.",
      category: "implementation",
      locale: "fr",
    },
    // Features questions (5)
    {
      id: "supported-features",
      question: "Quelles fonctionnalités sont prises en charge?",
      answer:
        "Nos assistants IA vocaux proposent un large éventail de fonctionnalités, y compris la qualification des leads, le traitement des commandes, l'intégration avec les systèmes CRM et bien plus encore.",
      category: "features",
      locale: "fr",
    },
    // Support questions (5)
    {
      id: "customer-support",
      question: "Quelle est votre assistance client?",
      answer:
        "Nous offrons un support client 24/7 avec la possibilité de contacter l'équipe de support par e-mail ou par téléphone.",
      category: "support",
      locale: "fr",
    },
    // Use cases questions (5)
    {
      id: "common-use-cases",
      question: "Quels sont les cas d'utilisation typiques?",
      answer:
        "Nos assistants IA vocaux peuvent être utilisés dans divers scénarios, tels que le service client, les ventes, le service client et plus encore.",
      category: "use-cases",
      locale: "fr",
    },
  ],
}

export function getFAQByLocale(locale: string): FAQItem[] {
  return faqData[locale] || faqData.en
}

export function getAllFAQ(): FAQItem[] {
  return Object.values(faqData).flat()
}
