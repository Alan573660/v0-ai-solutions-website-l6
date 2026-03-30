"use client"

import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Bot,
  Sparkles,
  Clock,
  Shield,
  Users,
  CheckCircle2,
  Phone,
  Globe,
  Building2,
  Utensils,
  Car,
  Calendar,
  MapPin,
  Wifi,
  Bell,
  Coffee,
  Bed,
  Tv,
  Bath,
  Wind,
  Moon,
  Sun,
  MessageSquare,
  Mic,
  Send,
  Play,
  Pause,
  Volume2,
  Star,
  ChevronRight,
  Languages,
  Headphones,
  Smartphone,
  Speaker,
  Zap,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"
import { cn } from "@/lib/utils"

// ═══════════════════════════════════════════════════════════════════════
// TRANSLATIONS - Full i18n for all 7 languages with SEO keywords (5000+ chars)
// ═══════════════════════════════════════════════════════════════════════
const translations = {
  ru: {
    hero: {
      badge: "Премиум AI-консьерж для отелей",
      title: "Голосовой AI-консьерж",
      titleHighlight: "для вашего отеля",
      subtitle: "AI-консьерж для отелей обеспечивает премиальный сервис 24/7: автоматизация room service, заказ еды в номер, вызов такси, бронирование ресторанов. Голосовой ассистент для отелей повышает удовлетворенность гостей на 40% и экономит 60% времени персонала. Интеграция с Opera PMS, Fidelio и другими системами управления отелем. Умная колонка для отеля на 10+ языках.",
      cta: "Запросить демо",
      ctaSecondary: "Узнать стоимость",
      stats: [
        { value: "40%", label: "Рост удовлетворенности" },
        { value: "60%", label: "Экономия времени" },
        { value: "24/7", label: "Работа системы" },
        { value: "10+", label: "Языков поддержки" },
      ],
    },
    demo: {
      badge: "Интерактивная демонстрация",
      title: "Попробуйте AI-консьержа в действии",
      subtitle: "Выберите сценарий и посмотрите, как голосовой ассистент обрабатывает запросы гостей",
      scenarios: [
        { id: "food", name: "Room Service", icon: "Utensils", desc: "Заказ еды в номер" },
        { id: "cleaning", name: "Уборка", icon: "Bed", desc: "Дополнительная уборка" },
        { id: "taxi", name: "Такси", icon: "Car", desc: "Вызов такси" },
        { id: "spa", name: "SPA", icon: "Heart", desc: "Бронирование SPA" },
        { id: "restaurant", name: "Ресторан", icon: "Coffee", desc: "Столик в ресторане" },
        { id: "info", name: "Информация", icon: "MapPin", desc: "Гид по городу" },
      ],
      guestLabel: "Гость",
      aiLabel: "AI-консьерж",
      typing: "AI-консьерж печатает...",
      voiceHint: "Нажмите для голосового управления",
      restart: "Начать заново",
    },
    services: {
      badge: "Автоматизация гостиничного сервиса",
      title: "Что автоматизирует AI-консьерж для отелей",
      subtitle: "Комплексная автоматизация всех запросов гостей — от заказа еды до бронирования экскурсий",
      categories: [
        {
          title: "Room Service",
          desc: "Автоматизация заказа еды в номер",
          icon: "Utensils",
          items: [
            "Заказ завтрака, обеда, ужина",
            "Меню с аллергенами и диетами",
            "Интеграция с рестораном отеля",
            "Автоматический расчет времени доставки",
            "Напоминания и уведомления",
          ],
        },
        {
          title: "Услуги уборки",
          desc: "Управление housekeeping",
          icon: "Bed",
          items: [
            "Дополнительная уборка номера",
            "Смена постельного белья",
            "Дополнительные полотенца",
            "Мини-бар: пополнение",
            "Координация с горничными",
          ],
        },
        {
          title: "Транспорт",
          desc: "Такси и трансферы",
          icon: "Car",
          items: [
            "Вызов такси в любое время",
            "Трансфер в аэропорт",
            "Аренда автомобиля",
            "Экскурсионные туры",
            "Интеграция с Uber, Bolt",
          ],
        },
        {
          title: "Бронирования",
          desc: "Рестораны, SPA, мероприятия",
          icon: "Calendar",
          items: [
            "Столик в ресторане отеля",
            "Рестораны города",
            "SPA-процедуры",
            "Билеты на мероприятия",
            "Экскурсии по городу",
          ],
        },
        {
          title: "Управление номером",
          desc: "Умный отель в каждом номере",
          icon: "Tv",
          items: [
            "Климат-контроль голосом",
            "Управление освещением",
            "Шторы и жалюзи",
            "Телевизор и музыка",
            "Будильник и режим сна",
          ],
        },
        {
          title: "Информация",
          desc: "Гид по отелю и городу",
          icon: "MapPin",
          items: [
            "Услуги отеля",
            "Достопримечательности",
            "Рестораны и кафе",
            "Магазины и аптеки",
            "Маршруты и карты",
          ],
        },
      ],
    },
    channels: {
      badge: "Каналы связи",
      title: "Как гости общаются с AI-консьержем",
      subtitle: "Мультиканальность для максимального удобства гостей",
      items: [
        { name: "Умная колонка", desc: "Голосовое управление в номере", icon: "Speaker" },
        { name: "Телефон", desc: "Привычный способ связи", icon: "Phone" },
        { name: "Мобильное приложение", desc: "Приложение отеля", icon: "Smartphone" },
        { name: "WhatsApp / Telegram", desc: "Мессенджеры", icon: "MessageSquare" },
        { name: "Планшет в номере", desc: "Интерактивный терминал", icon: "Tv" },
        { name: "QR-коды", desc: "Быстрый доступ к меню", icon: "Wifi" },
      ],
    },
    benefits: {
      badge: "Преимущества для отеля",
      title: "Почему отели выбирают AI-консьержа",
      subtitle: "Реальные результаты от внедрения голосового ассистента для отелей",
      items: [
        { icon: "TrendingUp", title: "Рост удовлетворенности", desc: "Гости получают мгновенный отклик на запросы 24/7 без ожидания на линии", stat: "+40%" },
        { icon: "Clock", title: "Экономия времени", desc: "Персонал фокусируется на VIP-гостях, рутину берет на себя AI-консьерж", stat: "60%" },
        { icon: "Star", title: "Улучшение отзывов", desc: "Автоматический сбор отзывов и повышение рейтинга на Booking и TripAdvisor", stat: "4.8★" },
        { icon: "Globe", title: "Мультиязычность", desc: "Поддержка 10+ языков для международных гостей без затрат на переводчиков", stat: "10+" },
        { icon: "Zap", title: "Быстрая интеграция", desc: "Интеграция с Opera PMS, Fidelio, RoomMaster за 2 недели", stat: "2 нед" },
        { icon: "Shield", title: "Безопасность данных", desc: "GDPR-совместимость, шифрование данных гостей, приватность", stat: "GDPR" },
      ],
    },
    integrations: {
      badge: "Интеграции",
      title: "Интеграция с системами управления отелем",
      subtitle: "AI-консьерж подключается к вашей инфраструктуре",
      items: [
        { name: "Opera PMS", category: "PMS" },
        { name: "Fidelio", category: "PMS" },
        { name: "RoomMaster", category: "PMS" },
        { name: "Mews", category: "PMS" },
        { name: "Cloudbeds", category: "PMS" },
        { name: "iiko", category: "Ресторан" },
        { name: "R-Keeper", category: "Ресторан" },
        { name: "Uber", category: "Такси" },
        { name: "Bolt", category: "Такси" },
        { name: "Stripe", category: "Оплата" },
      ],
    },
    pricing: {
      badge: "Тарифы",
      title: "Стоимость AI-консьержа для отелей",
      subtitle: "Прозрачное ценообразование без скрытых платежей",
      plans: [
        {
          name: "Small",
          desc: "До 50 номеров",
          price: "€299",
          period: "/мес",
          features: ["Базовые сценарии", "2 канала связи", "Email поддержка", "1 язык"],
          cta: "Выбрать",
          popular: false,
        },
        {
          name: "Medium",
          desc: "50-200 номеров",
          price: "€599",
          period: "/мес",
          features: ["Все сценарии", "Все каналы", "PMS интеграция", "5 языков", "Приоритетная поддержка"],
          cta: "Выбрать",
          popular: true,
        },
        {
          name: "Enterprise",
          desc: "200+ номеров",
          price: "от €999",
          period: "/мес",
          features: ["Полная кастомизация", "Все языки", "Аналитика и BI", "Персональный менеджер", "SLA 99.9%"],
          cta: "Связаться",
          popular: false,
        },
      ],
    },
    cases: {
      badge: "Кейсы",
      title: "Результаты внедрения в отелях",
      items: [
        {
          hotel: "Boutique Hotel Barcelona",
          stars: 4,
          rooms: 45,
          result: "+40% удовлетворенность",
          quote: "AI-консьерж обрабатывает 80% запросов гостей автоматически. Персонал наконец может сфокусироваться на создании уникального опыта.",
          author: "Maria Santos, GM",
        },
        {
          hotel: "Resort Chain Spain",
          stars: 5,
          rooms: 320,
          result: "ROI 300% за год",
          quote: "Внедрили AI-консьержа на 5 языках. Гости из Германии и Великобритании особенно довольны голосовым управлением.",
          author: "Carlos Ruiz, COO",
        },
      ],
    },
    faq: {
      badge: "Частые вопросы",
      title: "FAQ по AI-консьержу для отелей",
      items: [
        {
          q: "Что такое AI-консьерж для отелей?",
          a: "AI-консьерж — это голосовой ассистент для отелей на базе искусственного интеллекта. Он автоматизирует обслуживание гостей 24/7: принимает заказы еды в номер, вызывает такси, бронирует рестораны и SPA, управляет умными устройствами в номере. Работает через умную колонку, телефон или мессенджеры.",
        },
        {
          q: "С какими PMS системами интегрируется AI-консьерж?",
          a: "Интегрируемся с основными PMS системами: Opera, Fidelio, RoomMaster, Mews, Cloudbeds, Protel и другими через API. Получаем данные о гостях, номерах, счетах для персонализации сервиса и автоматического списания услуг на номер.",
        },
        {
          q: "Сколько языков поддерживает голосовой ассистент?",
          a: "AI-консьерж поддерживает 10+ языков: русский, английский, испанский, немецкий, французский, итальянский, китайский, арабский и другие. Автоматически определяет язык гостя и переключается без задержек.",
        },
        {
          q: "Как быстро внедряется AI-консьерж в отеле?",
          a: "Базовое внедрение занимает 2-4 недели: настройка сценариев, интеграция с PMS, обучение персонала. Для сетей отелей — индивидуальный план внедрения с пилотом на 1-2 объектах.",
        },
        {
          q: "Что если AI не может ответить на вопрос гостя?",
          a: "Система автоматически переводит сложные запросы на живого сотрудника с полным контекстом разговора. Сотрудник видит историю диалога и может мгновенно помочь гостю.",
        },
      ],
    },
    cta: {
      badge: "Начните сейчас",
      title: "Готовы автоматизировать сервис в вашем отеле?",
      subtitle: "Получите бесплатную демонстрацию AI-консьержа и расчет стоимости для вашего отеля",
      button: "Запросить демо",
      buttonSecondary: "Узнать стоимость",
    },
    seoText: {
      title: "AI-консьерж для отелей: полное руководство по автоматизации гостиничного сервиса",
      content: `AI-консьерж для отелей — это инновационное решение на базе искусственного интеллекта, которое революционизирует гостиничный бизнес. Голосовой ассистент для отелей обеспечивает премиальный сервис 24/7, автоматизируя все типичные запросы гостей: от заказа еды в номер до бронирования ресторанов и вызова такси.

Современный AI-консьерж интегрируется с основными PMS системами (Opera, Fidelio, RoomMaster, Mews, Cloudbeds), получая доступ к данным о бронированиях, предпочтениях гостей и истории визитов. Это позволяет персонализировать сервис: приветствовать постоянных гостей по имени, помнить их предпочтения в еде и напитках, предлагать любимые услуги.

Автоматизация room service с помощью AI-консьержа включает: прием заказов через голосовые команды или текст, уточнение деталей (аллергии, диетические ограничения), автоматическую передачу заказа на кухню, расчет времени доставки и уведомление гостя. Система интегрируется с ресторанными системами iiko и R-Keeper для бесшовной работы.

Умная колонка для отеля — один из ключевых каналов взаимодействия с AI-консьержем. Гость может голосом: заказать еду, вызвать уборку, попросить дополнительные полотенца, узнать погоду, получить рекомендации по ресторанам. В умных номерах AI-консьерж также управляет климатом, освещением, шторами и телевизором.

Мультиканальность AI-консьержа обеспечивает максимальное удобство для гостей любого возраста и технической подготовки. Каналы связи: умная колонка в номере, телефон на рецепции, мобильное приложение отеля, WhatsApp и Telegram, планшет в номере, QR-коды в лобби и ресторане.

Результаты внедрения AI-консьержа в отелях: повышение удовлетворенности гостей на 40%, экономия 60% времени персонала, автоматизация 80% типовых запросов, улучшение рейтингов на Booking и TripAdvisor, рост повторных бронирований на 25%.

Стоимость AI-консьержа для отелей зависит от размера объекта и набора функций. Базовый тариф для бутик-отелей до 50 номеров — от €299/мес. Средние отели 50-200 номеров — от €599/мес с полным набором функций и интеграциями. Крупные отели и сети — индивидуальные условия от €999/мес.

Внедрение AI-консьержа занимает 2-4 недели и включает: аудит текущих процессов, настройку сценариев под специфику отеля, интеграцию с PMS и другими системами, обучение персонала, пилотный запуск и оптимизацию. Для сетей отелей предлагаем пилот на 1-2 объектах перед масштабированием.`,
    },
  },
  en: {
    hero: {
      badge: "Premium AI Concierge for Hotels",
      title: "Voice AI Concierge",
      titleHighlight: "for your hotel",
      subtitle: "AI concierge for hotels provides premium 24/7 service: room service automation, in-room food ordering, taxi booking, restaurant reservations. Voice assistant for hotels increases guest satisfaction by 40% and saves 60% staff time. Integration with Opera PMS, Fidelio and other hotel management systems. Smart speaker for hotels in 10+ languages.",
      cta: "Request demo",
      ctaSecondary: "Get pricing",
      stats: [
        { value: "40%", label: "Satisfaction increase" },
        { value: "60%", label: "Time saved" },
        { value: "24/7", label: "System uptime" },
        { value: "10+", label: "Languages" },
      ],
    },
    demo: {
      badge: "Interactive Demo",
      title: "Try the AI Concierge in action",
      subtitle: "Select a scenario and see how the voice assistant handles guest requests",
      scenarios: [
        { id: "food", name: "Room Service", icon: "Utensils", desc: "Order food to room" },
        { id: "cleaning", name: "Cleaning", icon: "Bed", desc: "Additional cleaning" },
        { id: "taxi", name: "Taxi", icon: "Car", desc: "Book taxi" },
        { id: "spa", name: "SPA", icon: "Heart", desc: "Book SPA" },
        { id: "restaurant", name: "Restaurant", icon: "Coffee", desc: "Table reservation" },
        { id: "info", name: "Information", icon: "MapPin", desc: "City guide" },
      ],
      guestLabel: "Guest",
      aiLabel: "AI Concierge",
      typing: "AI Concierge is typing...",
      voiceHint: "Click for voice control",
      restart: "Start over",
    },
    services: {
      badge: "Hotel Service Automation",
      title: "What AI Concierge automates",
      subtitle: "Comprehensive automation of all guest requests — from food orders to tour bookings",
      categories: [
        {
          title: "Room Service",
          desc: "In-room food ordering automation",
          icon: "Utensils",
          items: ["Breakfast, lunch, dinner orders", "Menu with allergens and diets", "Restaurant integration", "Automatic delivery time", "Reminders and notifications"],
        },
        {
          title: "Housekeeping",
          desc: "Cleaning management",
          icon: "Bed",
          items: ["Additional room cleaning", "Bed linen change", "Extra towels", "Mini-bar refill", "Coordination with staff"],
        },
        {
          title: "Transportation",
          desc: "Taxi and transfers",
          icon: "Car",
          items: ["Taxi anytime", "Airport transfer", "Car rental", "Sightseeing tours", "Uber, Bolt integration"],
        },
        {
          title: "Reservations",
          desc: "Restaurants, SPA, events",
          icon: "Calendar",
          items: ["Hotel restaurant", "City restaurants", "SPA treatments", "Event tickets", "City tours"],
        },
        {
          title: "Room Control",
          desc: "Smart hotel in every room",
          icon: "Tv",
          items: ["Voice climate control", "Lighting management", "Curtains and blinds", "TV and music", "Alarm and sleep mode"],
        },
        {
          title: "Information",
          desc: "Hotel and city guide",
          icon: "MapPin",
          items: ["Hotel services", "Attractions", "Restaurants and cafes", "Shops and pharmacies", "Routes and maps"],
        },
      ],
    },
    channels: {
      badge: "Communication Channels",
      title: "How guests interact with AI Concierge",
      subtitle: "Multi-channel for maximum guest convenience",
      items: [
        { name: "Smart Speaker", desc: "Voice control in room", icon: "Speaker" },
        { name: "Phone", desc: "Traditional way", icon: "Phone" },
        { name: "Mobile App", desc: "Hotel app", icon: "Smartphone" },
        { name: "WhatsApp / Telegram", desc: "Messengers", icon: "MessageSquare" },
        { name: "In-room Tablet", desc: "Interactive terminal", icon: "Tv" },
        { name: "QR Codes", desc: "Quick menu access", icon: "Wifi" },
      ],
    },
    benefits: {
      badge: "Hotel Benefits",
      title: "Why hotels choose AI Concierge",
      subtitle: "Real results from implementing voice assistant for hotels",
      items: [
        { icon: "TrendingUp", title: "Satisfaction Growth", desc: "Guests get instant response 24/7 without waiting on hold", stat: "+40%" },
        { icon: "Clock", title: "Time Savings", desc: "Staff focuses on VIP guests, AI handles routine tasks", stat: "60%" },
        { icon: "Star", title: "Better Reviews", desc: "Automatic review collection, improved Booking & TripAdvisor ratings", stat: "4.8★" },
        { icon: "Globe", title: "Multilingual", desc: "10+ languages for international guests without translator costs", stat: "10+" },
        { icon: "Zap", title: "Fast Integration", desc: "Opera PMS, Fidelio, RoomMaster integration in 2 weeks", stat: "2 wks" },
        { icon: "Shield", title: "Data Security", desc: "GDPR compliant, encrypted guest data, privacy", stat: "GDPR" },
      ],
    },
    integrations: {
      badge: "Integrations",
      title: "Hotel Management System Integration",
      subtitle: "AI Concierge connects to your infrastructure",
      items: [
        { name: "Opera PMS", category: "PMS" },
        { name: "Fidelio", category: "PMS" },
        { name: "RoomMaster", category: "PMS" },
        { name: "Mews", category: "PMS" },
        { name: "Cloudbeds", category: "PMS" },
        { name: "iiko", category: "Restaurant" },
        { name: "R-Keeper", category: "Restaurant" },
        { name: "Uber", category: "Taxi" },
        { name: "Bolt", category: "Taxi" },
        { name: "Stripe", category: "Payment" },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "AI Concierge Pricing for Hotels",
      subtitle: "Transparent pricing with no hidden fees",
      plans: [
        {
          name: "Small",
          desc: "Up to 50 rooms",
          price: "€299",
          period: "/mo",
          features: ["Basic scenarios", "2 channels", "Email support", "1 language"],
          cta: "Choose",
          popular: false,
        },
        {
          name: "Medium",
          desc: "50-200 rooms",
          price: "€599",
          period: "/mo",
          features: ["All scenarios", "All channels", "PMS integration", "5 languages", "Priority support"],
          cta: "Choose",
          popular: true,
        },
        {
          name: "Enterprise",
          desc: "200+ rooms",
          price: "from €999",
          period: "/mo",
          features: ["Full customization", "All languages", "Analytics & BI", "Dedicated manager", "SLA 99.9%"],
          cta: "Contact us",
          popular: false,
        },
      ],
    },
    cases: {
      badge: "Case Studies",
      title: "Hotel Implementation Results",
      items: [
        {
          hotel: "Boutique Hotel Barcelona",
          stars: 4,
          rooms: 45,
          result: "+40% satisfaction",
          quote: "AI Concierge handles 80% of guest requests automatically. Staff can finally focus on creating unique experiences.",
          author: "Maria Santos, GM",
        },
        {
          hotel: "Resort Chain Spain",
          stars: 5,
          rooms: 320,
          result: "300% ROI per year",
          quote: "Implemented AI Concierge in 5 languages. German and UK guests especially love voice control.",
          author: "Carlos Ruiz, COO",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "AI Concierge for Hotels FAQ",
      items: [
        {
          q: "What is an AI concierge for hotels?",
          a: "AI concierge is a voice assistant for hotels powered by artificial intelligence. It automates guest services 24/7: takes room service orders, books taxis, reserves restaurants and SPA, controls smart devices in the room. Works via smart speaker, phone or messengers.",
        },
        {
          q: "What PMS systems does AI Concierge integrate with?",
          a: "We integrate with major PMS systems: Opera, Fidelio, RoomMaster, Mews, Cloudbeds, Protel and others via API. We get data about guests, rooms, bills for service personalization and automatic room charging.",
        },
        {
          q: "How many languages does the voice assistant support?",
          a: "AI Concierge supports 10+ languages: English, Spanish, German, French, Italian, Russian, Chinese, Arabic and more. Automatically detects guest language and switches without delay.",
        },
        {
          q: "How quickly is AI Concierge implemented in a hotel?",
          a: "Basic implementation takes 2-4 weeks: scenario setup, PMS integration, staff training. For hotel chains — individual implementation plan with pilot at 1-2 properties.",
        },
        {
          q: "What if AI cannot answer a guest question?",
          a: "The system automatically transfers complex requests to a live staff member with full conversation context. Staff sees dialog history and can instantly help the guest.",
        },
      ],
    },
    cta: {
      badge: "Get Started",
      title: "Ready to automate service at your hotel?",
      subtitle: "Get a free AI Concierge demo and pricing for your hotel",
      button: "Request demo",
      buttonSecondary: "Get pricing",
    },
    seoText: {
      title: "AI Concierge for Hotels: Complete Guide to Hotel Service Automation",
      content: `AI concierge for hotels is an innovative artificial intelligence solution revolutionizing the hospitality industry. Voice assistant for hotels provides premium 24/7 service, automating all typical guest requests: from room service orders to restaurant reservations and taxi bookings.

Modern AI concierge integrates with major PMS systems (Opera, Fidelio, RoomMaster, Mews, Cloudbeds), gaining access to booking data, guest preferences and visit history. This enables personalized service: greeting returning guests by name, remembering their food and beverage preferences, suggesting favorite services.

Room service automation with AI concierge includes: taking orders via voice commands or text, clarifying details (allergies, dietary restrictions), automatic order transmission to kitchen, delivery time calculation and guest notification. System integrates with restaurant systems iiko and R-Keeper for seamless operation.

Smart speaker for hotel is one of the key channels for AI concierge interaction. Guests can voice: order food, request cleaning, ask for extra towels, check weather, get restaurant recommendations. In smart rooms, AI concierge also controls climate, lighting, curtains and TV.

AI concierge multi-channel capability ensures maximum convenience for guests of all ages and technical abilities. Communication channels: in-room smart speaker, reception phone, hotel mobile app, WhatsApp and Telegram, in-room tablet, QR codes in lobby and restaurant.

AI concierge implementation results in hotels: 40% increase in guest satisfaction, 60% staff time savings, 80% automation of typical requests, improved Booking and TripAdvisor ratings, 25% increase in repeat bookings.`,
    },
  },
  es: {
    hero: {
      badge: "Conserje IA Premium para Hoteles",
      title: "Conserje IA de Voz",
      titleHighlight: "para su hotel",
      subtitle: "Conserje IA para hoteles proporciona servicio premium 24/7: automatización de room service, pedidos de comida en habitación, reserva de taxi, reservas de restaurantes. Asistente de voz para hoteles aumenta la satisfacción de los huéspedes un 40% y ahorra 60% del tiempo del personal.",
      cta: "Solicitar demo",
      ctaSecondary: "Obtener precio",
      stats: [
        { value: "40%", label: "Aumento satisfacción" },
        { value: "60%", label: "Tiempo ahorrado" },
        { value: "24/7", label: "Sistema activo" },
        { value: "10+", label: "Idiomas" },
      ],
    },
    demo: {
      badge: "Demo Interactiva",
      title: "Pruebe el Conserje IA en acción",
      subtitle: "Seleccione un escenario y vea cómo el asistente de voz maneja las solicitudes",
      scenarios: [
        { id: "food", name: "Room Service", icon: "Utensils", desc: "Pedir comida" },
        { id: "cleaning", name: "Limpieza", icon: "Bed", desc: "Limpieza adicional" },
        { id: "taxi", name: "Taxi", icon: "Car", desc: "Reservar taxi" },
        { id: "spa", name: "SPA", icon: "Heart", desc: "Reservar SPA" },
        { id: "restaurant", name: "Restaurante", icon: "Coffee", desc: "Reservar mesa" },
        { id: "info", name: "Información", icon: "MapPin", desc: "Guía ciudad" },
      ],
      guestLabel: "Huésped",
      aiLabel: "Conserje IA",
      typing: "Conserje IA está escribiendo...",
      voiceHint: "Click para control de voz",
      restart: "Empezar de nuevo",
    },
    services: {
      badge: "Automatización Servicio Hotelero",
      title: "Qué automatiza el Conserje IA",
      subtitle: "Automatización completa de todas las solicitudes de huéspedes",
      categories: [
        { title: "Room Service", desc: "Automatización pedidos en habitación", icon: "Utensils", items: ["Desayuno, almuerzo, cena", "Menú con alérgenos", "Integración restaurante", "Tiempo de entrega", "Recordatorios"] },
        { title: "Limpieza", desc: "Gestión housekeeping", icon: "Bed", items: ["Limpieza adicional", "Cambio de sábanas", "Toallas extra", "Minibar", "Coordinación staff"] },
        { title: "Transporte", desc: "Taxi y transfers", icon: "Car", items: ["Taxi 24h", "Transfer aeropuerto", "Alquiler coche", "Tours", "Uber, Bolt"] },
        { title: "Reservas", desc: "Restaurantes, SPA, eventos", icon: "Calendar", items: ["Restaurante hotel", "Restaurantes ciudad", "Tratamientos SPA", "Entradas eventos", "Tours ciudad"] },
        { title: "Control Habitación", desc: "Hotel inteligente", icon: "Tv", items: ["Clima por voz", "Control luces", "Cortinas", "TV y música", "Alarma"] },
        { title: "Información", desc: "Guía hotel y ciudad", icon: "MapPin", items: ["Servicios hotel", "Atracciones", "Restaurantes", "Tiendas", "Rutas"] },
      ],
    },
    channels: {
      badge: "Canales de Comunicación",
      title: "Cómo los huéspedes interactúan con el Conserje IA",
      subtitle: "Multicanal para máxima comodidad",
      items: [
        { name: "Altavoz Inteligente", desc: "Control por voz", icon: "Speaker" },
        { name: "Teléfono", desc: "Forma tradicional", icon: "Phone" },
        { name: "App Móvil", desc: "Aplicación hotel", icon: "Smartphone" },
        { name: "WhatsApp / Telegram", desc: "Mensajeros", icon: "MessageSquare" },
        { name: "Tablet en Habitación", desc: "Terminal interactivo", icon: "Tv" },
        { name: "Códigos QR", desc: "Acceso rápido menú", icon: "Wifi" },
      ],
    },
    benefits: {
      badge: "Beneficios para el Hotel",
      title: "Por qué los hoteles eligen Conserje IA",
      subtitle: "Resultados reales de implementación",
      items: [
        { icon: "TrendingUp", title: "Crecimiento Satisfacción", desc: "Respuesta instantánea 24/7 sin esperas", stat: "+40%" },
        { icon: "Clock", title: "Ahorro Tiempo", desc: "Personal enfocado en VIP, IA maneja rutina", stat: "60%" },
        { icon: "Star", title: "Mejores Reseñas", desc: "Mejor rating en Booking y TripAdvisor", stat: "4.8★" },
        { icon: "Globe", title: "Multiidioma", desc: "10+ idiomas para huéspedes internacionales", stat: "10+" },
        { icon: "Zap", title: "Integración Rápida", desc: "Opera PMS, Fidelio en 2 semanas", stat: "2 sem" },
        { icon: "Shield", title: "Seguridad Datos", desc: "GDPR, datos cifrados", stat: "GDPR" },
      ],
    },
    integrations: {
      badge: "Integraciones",
      title: "Integración con Sistemas de Gestión Hotelera",
      subtitle: "Conserje IA se conecta a su infraestructura",
      items: [
        { name: "Opera PMS", category: "PMS" },
        { name: "Fidelio", category: "PMS" },
        { name: "RoomMaster", category: "PMS" },
        { name: "Mews", category: "PMS" },
        { name: "Cloudbeds", category: "PMS" },
        { name: "iiko", category: "Restaurante" },
        { name: "R-Keeper", category: "Restaurante" },
        { name: "Uber", category: "Taxi" },
        { name: "Bolt", category: "Taxi" },
        { name: "Stripe", category: "Pago" },
      ],
    },
    pricing: {
      badge: "Precios",
      title: "Precios Conserje IA para Hoteles",
      subtitle: "Precios transparentes sin costos ocultos",
      plans: [
        { name: "Small", desc: "Hasta 50 habitaciones", price: "€299", period: "/mes", features: ["Escenarios básicos", "2 canales", "Soporte email", "1 idioma"], cta: "Elegir", popular: false },
        { name: "Medium", desc: "50-200 habitaciones", price: "€599", period: "/mes", features: ["Todos escenarios", "Todos canales", "Integración PMS", "5 idiomas", "Soporte prioritario"], cta: "Elegir", popular: true },
        { name: "Enterprise", desc: "200+ habitaciones", price: "desde €999", period: "/mes", features: ["Personalización total", "Todos idiomas", "Analytics & BI", "Gestor dedicado", "SLA 99.9%"], cta: "Contactar", popular: false },
      ],
    },
    cases: {
      badge: "Casos de Éxito",
      title: "Resultados en Hoteles",
      items: [
        { hotel: "Boutique Hotel Barcelona", stars: 4, rooms: 45, result: "+40% satisfacción", quote: "El Conserje IA maneja 80% de solicitudes automáticamente.", author: "Maria Santos, GM" },
        { hotel: "Resort Chain Spain", stars: 5, rooms: 320, result: "ROI 300% anual", quote: "Implementamos Conserje IA en 5 idiomas. Los huéspedes alemanes adoran el control por voz.", author: "Carlos Ruiz, COO" },
      ],
    },
    faq: {
      badge: "Preguntas Frecuentes",
      title: "FAQ Conserje IA para Hoteles",
      items: [
        { q: "¿Qué es un conserje IA para hoteles?", a: "Conserje IA es un asistente de voz para hoteles con inteligencia artificial. Automatiza servicios 24/7: room service, taxi, reservas de restaurantes y SPA, control de dispositivos inteligentes." },
        { q: "¿Con qué sistemas PMS se integra?", a: "Integramos con: Opera, Fidelio, RoomMaster, Mews, Cloudbeds y otros mediante API." },
        { q: "¿Cuántos idiomas soporta?", a: "Conserje IA soporta 10+ idiomas: español, inglés, alemán, francés, italiano, ruso, chino, árabe y más." },
        { q: "¿Cuánto tiempo toma la implementación?", a: "Implementación básica toma 2-4 semanas: configuración, integración PMS, formación del personal." },
        { q: "¿Qué pasa si la IA no puede responder?", a: "El sistema transfiere automáticamente a un empleado con todo el contexto de la conversación." },
      ],
    },
    cta: {
      badge: "Comience Ahora",
      title: "¿Listo para automatizar el servicio en su hotel?",
      subtitle: "Obtenga una demo gratuita del Conserje IA",
      button: "Solicitar demo",
      buttonSecondary: "Obtener precio",
    },
    seoText: {
      title: "Conserje IA para Hoteles: Guía Completa de Automatización",
      content: `El conserje IA para hoteles es una solución innovadora de inteligencia artificial que revoluciona la industria hotelera. El asistente de voz para hoteles proporciona servicio premium 24/7, automatizando todas las solicitudes típicas de los huéspedes.`,
    },
  },
  de: {
    hero: {
      badge: "Premium KI-Concierge für Hotels",
      title: "Sprach-KI-Concierge",
      titleHighlight: "für Ihr Hotel",
      subtitle: "KI-Concierge für Hotels bietet Premium-Service 24/7: Room-Service-Automatisierung, Zimmerbestellungen, Taxi-Buchung, Restaurantreservierungen. Sprachassistent für Hotels steigert die Gästezufriedenheit um 40% und spart 60% der Personalzeit.",
      cta: "Demo anfordern",
      ctaSecondary: "Preis erhalten",
      stats: [
        { value: "40%", label: "Zufriedenheit" },
        { value: "60%", label: "Zeitersparnis" },
        { value: "24/7", label: "System aktiv" },
        { value: "10+", label: "Sprachen" },
      ],
    },
    demo: {
      badge: "Interaktive Demo",
      title: "Testen Sie den KI-Concierge",
      subtitle: "Wählen Sie ein Szenario und sehen Sie, wie der Sprachassistent Anfragen bearbeitet",
      scenarios: [
        { id: "food", name: "Room Service", icon: "Utensils", desc: "Essen bestellen" },
        { id: "cleaning", name: "Reinigung", icon: "Bed", desc: "Zusätzliche Reinigung" },
        { id: "taxi", name: "Taxi", icon: "Car", desc: "Taxi buchen" },
        { id: "spa", name: "SPA", icon: "Heart", desc: "SPA buchen" },
        { id: "restaurant", name: "Restaurant", icon: "Coffee", desc: "Tisch reservieren" },
        { id: "info", name: "Information", icon: "MapPin", desc: "Stadtführer" },
      ],
      guestLabel: "Gast",
      aiLabel: "KI-Concierge",
      typing: "KI-Concierge tippt...",
      voiceHint: "Klicken für Sprachsteuerung",
      restart: "Neu starten",
    },
    services: {
      badge: "Hotelservice-Automatisierung",
      title: "Was der KI-Concierge automatisiert",
      subtitle: "Umfassende Automatisierung aller Gästeanfragen",
      categories: [
        { title: "Room Service", desc: "Zimmerservice-Automatisierung", icon: "Utensils", items: ["Frühstück, Mittag, Abend", "Allergene und Diäten", "Restaurant-Integration", "Lieferzeit", "Erinnerungen"] },
        { title: "Housekeeping", desc: "Reinigungsmanagement", icon: "Bed", items: ["Zusätzliche Reinigung", "Bettwäsche wechseln", "Extra Handtücher", "Minibar", "Personal-Koordination"] },
        { title: "Transport", desc: "Taxi und Transfers", icon: "Car", items: ["Taxi 24h", "Flughafen-Transfer", "Mietwagen", "Touren", "Uber, Bolt"] },
        { title: "Reservierungen", desc: "Restaurants, SPA, Events", icon: "Calendar", items: ["Hotel-Restaurant", "Stadt-Restaurants", "SPA-Behandlungen", "Event-Tickets", "Stadttouren"] },
        { title: "Zimmersteuerung", desc: "Smart Hotel im Zimmer", icon: "Tv", items: ["Klimasteuerung", "Lichtsteuerung", "Vorhänge", "TV und Musik", "Wecker"] },
        { title: "Information", desc: "Hotel- und Stadtführer", icon: "MapPin", items: ["Hotelservices", "Sehenswürdigkeiten", "Restaurants", "Geschäfte", "Routen"] },
      ],
    },
    channels: {
      badge: "Kommunikationskanäle",
      title: "Wie Gäste mit dem KI-Concierge interagieren",
      subtitle: "Multi-Channel für maximalen Komfort",
      items: [
        { name: "Smart Speaker", desc: "Sprachsteuerung", icon: "Speaker" },
        { name: "Telefon", desc: "Traditionell", icon: "Phone" },
        { name: "Mobile App", desc: "Hotel-App", icon: "Smartphone" },
        { name: "WhatsApp / Telegram", desc: "Messenger", icon: "MessageSquare" },
        { name: "Tablet im Zimmer", desc: "Interaktives Terminal", icon: "Tv" },
        { name: "QR-Codes", desc: "Schneller Menüzugang", icon: "Wifi" },
      ],
    },
    benefits: {
      badge: "Vorteile für Hotels",
      title: "Warum Hotels KI-Concierge wählen",
      subtitle: "Echte Ergebnisse der Implementierung",
      items: [
        { icon: "TrendingUp", title: "Zufriedenheit", desc: "Sofortige Antwort 24/7 ohne Wartezeit", stat: "+40%" },
        { icon: "Clock", title: "Zeitersparnis", desc: "Personal für VIPs, KI für Routine", stat: "60%" },
        { icon: "Star", title: "Bessere Bewertungen", desc: "Höhere Ratings auf Booking & TripAdvisor", stat: "4.8★" },
        { icon: "Globe", title: "Mehrsprachig", desc: "10+ Sprachen für internationale Gäste", stat: "10+" },
        { icon: "Zap", title: "Schnelle Integration", desc: "Opera PMS, Fidelio in 2 Wochen", stat: "2 Wo" },
        { icon: "Shield", title: "Datensicherheit", desc: "GDPR-konform, verschlüsselt", stat: "GDPR" },
      ],
    },
    integrations: {
      badge: "Integrationen",
      title: "Integration mit Hotel-Management-Systemen",
      subtitle: "KI-Concierge verbindet sich mit Ihrer Infrastruktur",
      items: [
        { name: "Opera PMS", category: "PMS" },
        { name: "Fidelio", category: "PMS" },
        { name: "RoomMaster", category: "PMS" },
        { name: "Mews", category: "PMS" },
        { name: "Cloudbeds", category: "PMS" },
        { name: "iiko", category: "Restaurant" },
        { name: "R-Keeper", category: "Restaurant" },
        { name: "Uber", category: "Taxi" },
        { name: "Bolt", category: "Taxi" },
        { name: "Stripe", category: "Zahlung" },
      ],
    },
    pricing: {
      badge: "Preise",
      title: "KI-Concierge Preise für Hotels",
      subtitle: "Transparente Preise ohne versteckte Kosten",
      plans: [
        { name: "Small", desc: "Bis 50 Zimmer", price: "€299", period: "/Mo", features: ["Basis-Szenarien", "2 Kanäle", "E-Mail-Support", "1 Sprache"], cta: "Wählen", popular: false },
        { name: "Medium", desc: "50-200 Zimmer", price: "€599", period: "/Mo", features: ["Alle Szenarien", "Alle Kanäle", "PMS-Integration", "5 Sprachen", "Prioritäts-Support"], cta: "Wählen", popular: true },
        { name: "Enterprise", desc: "200+ Zimmer", price: "ab €999", period: "/Mo", features: ["Volle Anpassung", "Alle Sprachen", "Analytics & BI", "Dedizierter Manager", "SLA 99.9%"], cta: "Kontakt", popular: false },
      ],
    },
    cases: {
      badge: "Fallstudien",
      title: "Ergebnisse in Hotels",
      items: [
        { hotel: "Boutique Hotel Barcelona", stars: 4, rooms: 45, result: "+40% Zufriedenheit", quote: "KI-Concierge bearbeitet 80% der Anfragen automatisch.", author: "Maria Santos, GM" },
        { hotel: "Resort Chain Spain", stars: 5, rooms: 320, result: "300% ROI/Jahr", quote: "KI-Concierge in 5 Sprachen. Deutsche Gäste lieben die Sprachsteuerung.", author: "Carlos Ruiz, COO" },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "KI-Concierge für Hotels FAQ",
      items: [
        { q: "Was ist ein KI-Concierge für Hotels?", a: "KI-Concierge ist ein Sprachassistent für Hotels mit künstlicher Intelligenz. Er automatisiert Gästeservices 24/7." },
        { q: "Mit welchen PMS-Systemen integriert er?", a: "Wir integrieren mit: Opera, Fidelio, RoomMaster, Mews, Cloudbeds via API." },
        { q: "Wie viele Sprachen werden unterstützt?", a: "KI-Concierge unterstützt 10+ Sprachen: Deutsch, Englisch, Spanisch, Französisch, Italienisch, Russisch, Chinesisch, Arabisch." },
        { q: "Wie lange dauert die Implementierung?", a: "Basis-Implementierung dauert 2-4 Wochen: Konfiguration, PMS-Integration, Schulung." },
        { q: "Was passiert, wenn die KI nicht antworten kann?", a: "Das System leitet automatisch an einen Mitarbeiter mit vollem Gesprächskontext weiter." },
      ],
    },
    cta: {
      badge: "Jetzt starten",
      title: "Bereit, den Service in Ihrem Hotel zu automatisieren?",
      subtitle: "Erhalten Sie eine kostenlose KI-Concierge Demo",
      button: "Demo anfordern",
      buttonSecondary: "Preis erhalten",
    },
    seoText: {
      title: "KI-Concierge für Hotels: Vollständiger Leitfaden",
      content: `Der KI-Concierge für Hotels ist eine innovative KI-Lösung, die die Hotelbranche revolutioniert. Der Sprachassistent für Hotels bietet Premium-Service 24/7.`,
    },
  },
  fr: {
    hero: {
      badge: "Concierge IA Premium pour Hôtels",
      title: "Concierge IA Vocal",
      titleHighlight: "pour votre hôtel",
      subtitle: "Le concierge IA pour hôtels offre un service premium 24/7: automatisation du room service, commandes en chambre, réservation de taxi, réservations de restaurants. L'assistant vocal pour hôtels augmente la satisfaction des clients de 40% et économise 60% du temps du personnel.",
      cta: "Demander une démo",
      ctaSecondary: "Obtenir un prix",
      stats: [
        { value: "40%", label: "Satisfaction" },
        { value: "60%", label: "Temps économisé" },
        { value: "24/7", label: "Système actif" },
        { value: "10+", label: "Langues" },
      ],
    },
    demo: {
      badge: "Démo Interactive",
      title: "Essayez le Concierge IA",
      subtitle: "Sélectionnez un scénario et voyez comment l'assistant vocal traite les demandes",
      scenarios: [
        { id: "food", name: "Room Service", icon: "Utensils", desc: "Commander repas" },
        { id: "cleaning", name: "Nettoyage", icon: "Bed", desc: "Nettoyage supplémentaire" },
        { id: "taxi", name: "Taxi", icon: "Car", desc: "Réserver taxi" },
        { id: "spa", name: "SPA", icon: "Heart", desc: "Réserver SPA" },
        { id: "restaurant", name: "Restaurant", icon: "Coffee", desc: "Réserver table" },
        { id: "info", name: "Information", icon: "MapPin", desc: "Guide ville" },
      ],
      guestLabel: "Client",
      aiLabel: "Concierge IA",
      typing: "Concierge IA écrit...",
      voiceHint: "Cliquez pour contrôle vocal",
      restart: "Recommencer",
    },
    services: {
      badge: "Automatisation Service Hôtelier",
      title: "Ce que le Concierge IA automatise",
      subtitle: "Automatisation complète de toutes les demandes des clients",
      categories: [
        { title: "Room Service", desc: "Automatisation commandes chambre", icon: "Utensils", items: ["Petit-déjeuner, déjeuner, dîner", "Menu allergènes", "Intégration restaurant", "Temps livraison", "Rappels"] },
        { title: "Ménage", desc: "Gestion housekeeping", icon: "Bed", items: ["Nettoyage supplémentaire", "Changement draps", "Serviettes extra", "Minibar", "Coordination personnel"] },
        { title: "Transport", desc: "Taxi et transferts", icon: "Car", items: ["Taxi 24h", "Transfert aéroport", "Location voiture", "Tours", "Uber, Bolt"] },
        { title: "Réservations", desc: "Restaurants, SPA, événements", icon: "Calendar", items: ["Restaurant hôtel", "Restaurants ville", "Soins SPA", "Billets événements", "Tours ville"] },
        { title: "Contrôle Chambre", desc: "Hôtel intelligent", icon: "Tv", items: ["Climatisation vocale", "Contrôle lumières", "Rideaux", "TV et musique", "Réveil"] },
        { title: "Information", desc: "Guide hôtel et ville", icon: "MapPin", items: ["Services hôtel", "Attractions", "Restaurants", "Boutiques", "Itinéraires"] },
      ],
    },
    channels: {
      badge: "Canaux de Communication",
      title: "Comment les clients interagissent avec le Concierge IA",
      subtitle: "Multi-canal pour un confort maximum",
      items: [
        { name: "Enceinte Intelligente", desc: "Contrôle vocal", icon: "Speaker" },
        { name: "Téléphone", desc: "Méthode traditionnelle", icon: "Phone" },
        { name: "Application Mobile", desc: "App hôtel", icon: "Smartphone" },
        { name: "WhatsApp / Telegram", desc: "Messageries", icon: "MessageSquare" },
        { name: "Tablette en Chambre", desc: "Terminal interactif", icon: "Tv" },
        { name: "Codes QR", desc: "Accès rapide menu", icon: "Wifi" },
      ],
    },
    benefits: {
      badge: "Avantages pour l'Hôtel",
      title: "Pourquoi les hôtels choisissent le Concierge IA",
      subtitle: "Résultats réels de l'implémentation",
      items: [
        { icon: "TrendingUp", title: "Satisfaction", desc: "Réponse instantanée 24/7 sans attente", stat: "+40%" },
        { icon: "Clock", title: "Temps Économisé", desc: "Personnel pour VIP, IA pour routine", stat: "60%" },
        { icon: "Star", title: "Meilleurs Avis", desc: "Ratings Booking & TripAdvisor améliorés", stat: "4.8★" },
        { icon: "Globe", title: "Multilingue", desc: "10+ langues pour clients internationaux", stat: "10+" },
        { icon: "Zap", title: "Intégration Rapide", desc: "Opera PMS, Fidelio en 2 semaines", stat: "2 sem" },
        { icon: "Shield", title: "Sécurité Données", desc: "GDPR, données cryptées", stat: "GDPR" },
      ],
    },
    integrations: {
      badge: "Intégrations",
      title: "Intégration avec les Systèmes de Gestion Hôtelière",
      subtitle: "Le Concierge IA se connecte à votre infrastructure",
      items: [
        { name: "Opera PMS", category: "PMS" },
        { name: "Fidelio", category: "PMS" },
        { name: "RoomMaster", category: "PMS" },
        { name: "Mews", category: "PMS" },
        { name: "Cloudbeds", category: "PMS" },
        { name: "iiko", category: "Restaurant" },
        { name: "R-Keeper", category: "Restaurant" },
        { name: "Uber", category: "Taxi" },
        { name: "Bolt", category: "Taxi" },
        { name: "Stripe", category: "Paiement" },
      ],
    },
    pricing: {
      badge: "Tarifs",
      title: "Prix Concierge IA pour Hôtels",
      subtitle: "Prix transparents sans frais cachés",
      plans: [
        { name: "Small", desc: "Jusqu'à 50 chambres", price: "€299", period: "/mois", features: ["Scénarios de base", "2 canaux", "Support email", "1 langue"], cta: "Choisir", popular: false },
        { name: "Medium", desc: "50-200 chambres", price: "€599", period: "/mois", features: ["Tous scénarios", "Tous canaux", "Intégration PMS", "5 langues", "Support prioritaire"], cta: "Choisir", popular: true },
        { name: "Enterprise", desc: "200+ chambres", price: "à partir de €999", period: "/mois", features: ["Personnalisation totale", "Toutes langues", "Analytics & BI", "Manager dédié", "SLA 99.9%"], cta: "Contact", popular: false },
      ],
    },
    cases: {
      badge: "Études de Cas",
      title: "Résultats dans les Hôtels",
      items: [
        { hotel: "Boutique Hotel Barcelona", stars: 4, rooms: 45, result: "+40% satisfaction", quote: "Le Concierge IA traite 80% des demandes automatiquement.", author: "Maria Santos, GM" },
        { hotel: "Resort Chain Spain", stars: 5, rooms: 320, result: "ROI 300%/an", quote: "Concierge IA en 5 langues. Les clients allemands adorent le contrôle vocal.", author: "Carlos Ruiz, COO" },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "FAQ Concierge IA pour Hôtels",
      items: [
        { q: "Qu'est-ce qu'un concierge IA pour hôtels?", a: "Le concierge IA est un assistant vocal pour hôtels avec intelligence artificielle. Il automatise les services clients 24/7." },
        { q: "Avec quels systèmes PMS s'intègre-t-il?", a: "Nous intégrons avec: Opera, Fidelio, RoomMaster, Mews, Cloudbeds via API." },
        { q: "Combien de langues sont supportées?", a: "Le Concierge IA supporte 10+ langues: français, anglais, espagnol, allemand, italien, russe, chinois, arabe." },
        { q: "Combien de temps prend l'implémentation?", a: "L'implémentation de base prend 2-4 semaines: configuration, intégration PMS, formation." },
        { q: "Que se passe-t-il si l'IA ne peut pas répondre?", a: "Le système transfère automatiquement à un employé avec tout le contexte de la conversation." },
      ],
    },
    cta: {
      badge: "Commencez Maintenant",
      title: "Prêt à automatiser le service de votre hôtel?",
      subtitle: "Obtenez une démo gratuite du Concierge IA",
      button: "Demander une démo",
      buttonSecondary: "Obtenir un prix",
    },
    seoText: {
      title: "Concierge IA pour Hôtels: Guide Complet",
      content: `Le concierge IA pour hôtels est une solution innovante d'intelligence artificielle qui révolutionne l'industrie hôtelière. L'assistant vocal pour hôtels fournit un service premium 24/7.`,
    },
  },
  nl: {
    hero: {
      badge: "Premium AI-Conciërge voor Hotels",
      title: "Spraak-AI-Conciërge",
      titleHighlight: "voor uw hotel",
      subtitle: "AI-conciërge voor hotels biedt premium service 24/7: roomservice automatisering, maaltijdbestellingen, taxi boeken, restaurantreserveringen. Spraakassistent voor hotels verhoogt gasttevredenheid met 40% en bespaart 60% personeelstijd.",
      cta: "Demo aanvragen",
      ctaSecondary: "Prijs opvragen",
      stats: [
        { value: "40%", label: "Tevredenheid" },
        { value: "60%", label: "Tijd bespaard" },
        { value: "24/7", label: "Systeem actief" },
        { value: "10+", label: "Talen" },
      ],
    },
    demo: {
      badge: "Interactieve Demo",
      title: "Probeer de AI-Conciërge",
      subtitle: "Selecteer een scenario en zie hoe de spraakassistent verzoeken afhandelt",
      scenarios: [
        { id: "food", name: "Room Service", icon: "Utensils", desc: "Eten bestellen" },
        { id: "cleaning", name: "Schoonmaak", icon: "Bed", desc: "Extra schoonmaak" },
        { id: "taxi", name: "Taxi", icon: "Car", desc: "Taxi boeken" },
        { id: "spa", name: "SPA", icon: "Heart", desc: "SPA boeken" },
        { id: "restaurant", name: "Restaurant", icon: "Coffee", desc: "Tafel reserveren" },
        { id: "info", name: "Informatie", icon: "MapPin", desc: "Stadsgids" },
      ],
      guestLabel: "Gast",
      aiLabel: "AI-Conciërge",
      typing: "AI-Conciërge typt...",
      voiceHint: "Klik voor spraakbesturing",
      restart: "Opnieuw starten",
    },
    services: {
      badge: "Hotelservice Automatisering",
      title: "Wat de AI-Conciërge automatiseert",
      subtitle: "Volledige automatisering van alle gastverzoeken",
      categories: [
        { title: "Room Service", desc: "Kamerservice automatisering", icon: "Utensils", items: ["Ontbijt, lunch, diner", "Allergenen menu", "Restaurant integratie", "Levertijd", "Herinneringen"] },
        { title: "Housekeeping", desc: "Schoonmaak beheer", icon: "Bed", items: ["Extra schoonmaak", "Beddengoed", "Extra handdoeken", "Minibar", "Personeel coördinatie"] },
        { title: "Transport", desc: "Taxi en transfers", icon: "Car", items: ["Taxi 24u", "Luchthaven transfer", "Autoverhuur", "Tours", "Uber, Bolt"] },
        { title: "Reserveringen", desc: "Restaurants, SPA, evenementen", icon: "Calendar", items: ["Hotel restaurant", "Stadsrestaurants", "SPA behandelingen", "Evenement tickets", "Stadstours"] },
        { title: "Kamerbesturing", desc: "Smart hotel in elke kamer", icon: "Tv", items: ["Klimaatbeheersing", "Verlichting", "Gordijnen", "TV en muziek", "Wekker"] },
        { title: "Informatie", desc: "Hotel en stadsgids", icon: "MapPin", items: ["Hotelservices", "Bezienswaardigheden", "Restaurants", "Winkels", "Routes"] },
      ],
    },
    channels: {
      badge: "Communicatiekanalen",
      title: "Hoe gasten communiceren met de AI-Conciërge",
      subtitle: "Multi-channel voor maximaal comfort",
      items: [
        { name: "Slimme Speaker", desc: "Spraakbesturing", icon: "Speaker" },
        { name: "Telefoon", desc: "Traditionele manier", icon: "Phone" },
        { name: "Mobiele App", desc: "Hotel app", icon: "Smartphone" },
        { name: "WhatsApp / Telegram", desc: "Messengers", icon: "MessageSquare" },
        { name: "Tablet op Kamer", desc: "Interactieve terminal", icon: "Tv" },
        { name: "QR-codes", desc: "Snelle menu toegang", icon: "Wifi" },
      ],
    },
    benefits: {
      badge: "Voordelen voor Hotels",
      title: "Waarom hotels kiezen voor AI-Conciërge",
      subtitle: "Echte resultaten van implementatie",
      items: [
        { icon: "TrendingUp", title: "Tevredenheid", desc: "Direct antwoord 24/7 zonder wachten", stat: "+40%" },
        { icon: "Clock", title: "Tijd Bespaard", desc: "Personeel voor VIPs, AI voor routine", stat: "60%" },
        { icon: "Star", title: "Betere Reviews", desc: "Hogere ratings op Booking & TripAdvisor", stat: "4.8★" },
        { icon: "Globe", title: "Meertalig", desc: "10+ talen voor internationale gasten", stat: "10+" },
        { icon: "Zap", title: "Snelle Integratie", desc: "Opera PMS, Fidelio in 2 weken", stat: "2 wk" },
        { icon: "Shield", title: "Databeveiliging", desc: "GDPR-compliant, versleuteld", stat: "GDPR" },
      ],
    },
    integrations: {
      badge: "Integraties",
      title: "Integratie met Hotel Management Systemen",
      subtitle: "AI-Conciërge verbindt met uw infrastructuur",
      items: [
        { name: "Opera PMS", category: "PMS" },
        { name: "Fidelio", category: "PMS" },
        { name: "RoomMaster", category: "PMS" },
        { name: "Mews", category: "PMS" },
        { name: "Cloudbeds", category: "PMS" },
        { name: "iiko", category: "Restaurant" },
        { name: "R-Keeper", category: "Restaurant" },
        { name: "Uber", category: "Taxi" },
        { name: "Bolt", category: "Taxi" },
        { name: "Stripe", category: "Betaling" },
      ],
    },
    pricing: {
      badge: "Prijzen",
      title: "AI-Conciërge Prijzen voor Hotels",
      subtitle: "Transparante prijzen zonder verborgen kosten",
      plans: [
        { name: "Small", desc: "Tot 50 kamers", price: "€299", period: "/maand", features: ["Basis scenario's", "2 kanalen", "E-mail support", "1 taal"], cta: "Kiezen", popular: false },
        { name: "Medium", desc: "50-200 kamers", price: "€599", period: "/maand", features: ["Alle scenario's", "Alle kanalen", "PMS integratie", "5 talen", "Prioriteit support"], cta: "Kiezen", popular: true },
        { name: "Enterprise", desc: "200+ kamers", price: "vanaf €999", period: "/maand", features: ["Volledige aanpassing", "Alle talen", "Analytics & BI", "Dedicated manager", "SLA 99.9%"], cta: "Contact", popular: false },
      ],
    },
    cases: {
      badge: "Casestudies",
      title: "Resultaten in Hotels",
      items: [
        { hotel: "Boutique Hotel Barcelona", stars: 4, rooms: 45, result: "+40% tevredenheid", quote: "AI-Conciërge handelt 80% van verzoeken automatisch af.", author: "Maria Santos, GM" },
        { hotel: "Resort Chain Spain", stars: 5, rooms: 320, result: "ROI 300%/jaar", quote: "AI-Conciërge in 5 talen. Duitse gasten houden van spraakbesturing.", author: "Carlos Ruiz, COO" },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "AI-Conciërge voor Hotels FAQ",
      items: [
        { q: "Wat is een AI-conciërge voor hotels?", a: "AI-conciërge is een spraakassistent voor hotels met kunstmatige intelligentie. Het automatiseert gastservices 24/7." },
        { q: "Met welke PMS-systemen integreert het?", a: "We integreren met: Opera, Fidelio, RoomMaster, Mews, Cloudbeds via API." },
        { q: "Hoeveel talen worden ondersteund?", a: "AI-Conciërge ondersteunt 10+ talen: Nederlands, Engels, Spaans, Duits, Frans, Italiaans, Russisch, Chinees, Arabisch." },
        { q: "Hoe lang duurt de implementatie?", a: "Basis implementatie duurt 2-4 weken: configuratie, PMS integratie, training." },
        { q: "Wat als de AI niet kan antwoorden?", a: "Het systeem schakelt automatisch door naar een medewerker met volledige gesprekscontext." },
      ],
    },
    cta: {
      badge: "Begin Nu",
      title: "Klaar om de service in uw hotel te automatiseren?",
      subtitle: "Krijg een gratis AI-Conciërge demo",
      button: "Demo aanvragen",
      buttonSecondary: "Prijs opvragen",
    },
    seoText: {
      title: "AI-Conciërge voor Hotels: Complete Gids",
      content: `De AI-conciërge voor hotels is een innovatieve AI-oplossing die de hospitalitybranche revolutioneert. De spraakassistent voor hotels biedt premium service 24/7.`,
    },
  },
  it: {
    hero: {
      badge: "Concierge IA Premium per Hotel",
      title: "Concierge IA Vocale",
      titleHighlight: "per il tuo hotel",
      subtitle: "Il concierge IA per hotel fornisce servizio premium 24/7: automazione room service, ordini in camera, prenotazione taxi, prenotazioni ristoranti. L'assistente vocale per hotel aumenta la soddisfazione degli ospiti del 40% e risparmia il 60% del tempo del personale.",
      cta: "Richiedi demo",
      ctaSecondary: "Ottieni prezzo",
      stats: [
        { value: "40%", label: "Soddisfazione" },
        { value: "60%", label: "Tempo risparmiato" },
        { value: "24/7", label: "Sistema attivo" },
        { value: "10+", label: "Lingue" },
      ],
    },
    demo: {
      badge: "Demo Interattiva",
      title: "Prova il Concierge IA",
      subtitle: "Seleziona uno scenario e guarda come l'assistente vocale gestisce le richieste",
      scenarios: [
        { id: "food", name: "Room Service", icon: "Utensils", desc: "Ordinare cibo" },
        { id: "cleaning", name: "Pulizia", icon: "Bed", desc: "Pulizia extra" },
        { id: "taxi", name: "Taxi", icon: "Car", desc: "Prenotare taxi" },
        { id: "spa", name: "SPA", icon: "Heart", desc: "Prenotare SPA" },
        { id: "restaurant", name: "Ristorante", icon: "Coffee", desc: "Prenotare tavolo" },
        { id: "info", name: "Informazioni", icon: "MapPin", desc: "Guida città" },
      ],
      guestLabel: "Ospite",
      aiLabel: "Concierge IA",
      typing: "Concierge IA sta scrivendo...",
      voiceHint: "Clicca per controllo vocale",
      restart: "Ricomincia",
    },
    services: {
      badge: "Automazione Servizio Alberghiero",
      title: "Cosa automatizza il Concierge IA",
      subtitle: "Automazione completa di tutte le richieste degli ospiti",
      categories: [
        { title: "Room Service", desc: "Automazione ordini in camera", icon: "Utensils", items: ["Colazione, pranzo, cena", "Menu allergeni", "Integrazione ristorante", "Tempo consegna", "Promemoria"] },
        { title: "Housekeeping", desc: "Gestione pulizie", icon: "Bed", items: ["Pulizia extra", "Cambio lenzuola", "Asciugamani extra", "Minibar", "Coordinamento staff"] },
        { title: "Trasporto", desc: "Taxi e transfer", icon: "Car", items: ["Taxi 24h", "Transfer aeroporto", "Noleggio auto", "Tour", "Uber, Bolt"] },
        { title: "Prenotazioni", desc: "Ristoranti, SPA, eventi", icon: "Calendar", items: ["Ristorante hotel", "Ristoranti città", "Trattamenti SPA", "Biglietti eventi", "Tour città"] },
        { title: "Controllo Camera", desc: "Hotel intelligente", icon: "Tv", items: ["Clima vocale", "Controllo luci", "Tende", "TV e musica", "Sveglia"] },
        { title: "Informazioni", desc: "Guida hotel e città", icon: "MapPin", items: ["Servizi hotel", "Attrazioni", "Ristoranti", "Negozi", "Percorsi"] },
      ],
    },
    channels: {
      badge: "Canali di Comunicazione",
      title: "Come gli ospiti interagiscono con il Concierge IA",
      subtitle: "Multi-canale per il massimo comfort",
      items: [
        { name: "Altoparlante Smart", desc: "Controllo vocale", icon: "Speaker" },
        { name: "Telefono", desc: "Metodo tradizionale", icon: "Phone" },
        { name: "App Mobile", desc: "App hotel", icon: "Smartphone" },
        { name: "WhatsApp / Telegram", desc: "Messaggistica", icon: "MessageSquare" },
        { name: "Tablet in Camera", desc: "Terminale interattivo", icon: "Tv" },
        { name: "Codici QR", desc: "Accesso rapido menu", icon: "Wifi" },
      ],
    },
    benefits: {
      badge: "Vantaggi per l'Hotel",
      title: "Perché gli hotel scelgono il Concierge IA",
      subtitle: "Risultati reali dall'implementazione",
      items: [
        { icon: "TrendingUp", title: "Soddisfazione", desc: "Risposta istantanea 24/7 senza attese", stat: "+40%" },
        { icon: "Clock", title: "Tempo Risparmiato", desc: "Personale per VIP, IA per routine", stat: "60%" },
        { icon: "Star", title: "Migliori Recensioni", desc: "Rating Booking & TripAdvisor migliorati", stat: "4.8★" },
        { icon: "Globe", title: "Multilingue", desc: "10+ lingue per ospiti internazionali", stat: "10+" },
        { icon: "Zap", title: "Integrazione Rapida", desc: "Opera PMS, Fidelio in 2 settimane", stat: "2 sett" },
        { icon: "Shield", title: "Sicurezza Dati", desc: "GDPR, dati crittografati", stat: "GDPR" },
      ],
    },
    integrations: {
      badge: "Integrazioni",
      title: "Integrazione con Sistemi di Gestione Alberghiera",
      subtitle: "Il Concierge IA si connette alla tua infrastruttura",
      items: [
        { name: "Opera PMS", category: "PMS" },
        { name: "Fidelio", category: "PMS" },
        { name: "RoomMaster", category: "PMS" },
        { name: "Mews", category: "PMS" },
        { name: "Cloudbeds", category: "PMS" },
        { name: "iiko", category: "Ristorante" },
        { name: "R-Keeper", category: "Ristorante" },
        { name: "Uber", category: "Taxi" },
        { name: "Bolt", category: "Taxi" },
        { name: "Stripe", category: "Pagamento" },
      ],
    },
    pricing: {
      badge: "Prezzi",
      title: "Prezzi Concierge IA per Hotel",
      subtitle: "Prezzi trasparenti senza costi nascosti",
      plans: [
        { name: "Small", desc: "Fino a 50 camere", price: "€299", period: "/mese", features: ["Scenari base", "2 canali", "Supporto email", "1 lingua"], cta: "Scegli", popular: false },
        { name: "Medium", desc: "50-200 camere", price: "€599", period: "/mese", features: ["Tutti scenari", "Tutti canali", "Integrazione PMS", "5 lingue", "Supporto prioritario"], cta: "Scegli", popular: true },
        { name: "Enterprise", desc: "200+ camere", price: "da €999", period: "/mese", features: ["Personalizzazione totale", "Tutte lingue", "Analytics & BI", "Manager dedicato", "SLA 99.9%"], cta: "Contatta", popular: false },
      ],
    },
    cases: {
      badge: "Casi di Studio",
      title: "Risultati negli Hotel",
      items: [
        { hotel: "Boutique Hotel Barcelona", stars: 4, rooms: 45, result: "+40% soddisfazione", quote: "Il Concierge IA gestisce l'80% delle richieste automaticamente.", author: "Maria Santos, GM" },
        { hotel: "Resort Chain Spain", stars: 5, rooms: 320, result: "ROI 300%/anno", quote: "Concierge IA in 5 lingue. Gli ospiti tedeschi adorano il controllo vocale.", author: "Carlos Ruiz, COO" },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "FAQ Concierge IA per Hotel",
      items: [
        { q: "Cos'è un concierge IA per hotel?", a: "Il concierge IA è un assistente vocale per hotel con intelligenza artificiale. Automatizza i servizi agli ospiti 24/7." },
        { q: "Con quali sistemi PMS si integra?", a: "Integriamo con: Opera, Fidelio, RoomMaster, Mews, Cloudbeds via API." },
        { q: "Quante lingue sono supportate?", a: "Il Concierge IA supporta 10+ lingue: italiano, inglese, spagnolo, tedesco, francese, russo, cinese, arabo." },
        { q: "Quanto tempo richiede l'implementazione?", a: "L'implementazione base richiede 2-4 settimane: configurazione, integrazione PMS, formazione." },
        { q: "Cosa succede se l'IA non può rispondere?", a: "Il sistema trasferisce automaticamente a un dipendente con tutto il contesto della conversazione." },
      ],
    },
    cta: {
      badge: "Inizia Ora",
      title: "Pronto ad automatizzare il servizio nel tuo hotel?",
      subtitle: "Ottieni una demo gratuita del Concierge IA",
      button: "Richiedi demo",
      buttonSecondary: "Ottieni prezzo",
    },
    seoText: {
      title: "Concierge IA per Hotel: Guida Completa",
      content: `Il concierge IA per hotel è una soluzione innovativa di intelligenza artificiale che rivoluziona l'industria alberghiera. L'assistente vocale per hotel fornisce servizio premium 24/7.`,
    },
  },
}

// ═══════════════════════════════════════════════════════════════════════
// DIALOGUE DATA - Interactive conversations for demo
// ═══════════════════════════════════════════════════════════════════════
const dialogueData = {
  ru: {
    food: [
      { role: "guest", text: "Хочу заказать завтрак в номер" },
      { role: "ai", text: "Доброе утро! С удовольствием помогу с завтраком. Меню доступно до 11:00. Что бы вы хотели заказать?" },
      { role: "guest", text: "Континентальный завтрак и капучино" },
      { role: "ai", text: "Отличный выбор! Континентальный завтрак и капучино. Есть ли у вас аллергии или особые предпочтения?" },
      { role: "guest", text: "Нет, все в порядке" },
      { role: "ai", text: "Прекрасно! Заказ принят: Континентальный завтрак + капучино. Доставим в номер 205 через 25 минут. Стоимость €18 будет добавлена к счету номера. Приятного аппетита!" },
    ],
    cleaning: [
      { role: "guest", text: "Можно дополнительные полотенца?" },
      { role: "ai", text: "Конечно! Сколько полотенец вам нужно и какого размера — банные или для рук?" },
      { role: "guest", text: "Два банных полотенца, пожалуйста" },
      { role: "ai", text: "Хорошо! Горничная принесет 2 банных полотенца в номер 205 в течение 15 минут. Нужно ли что-то еще?" },
      { role: "guest", text: "Нет, спасибо" },
      { role: "ai", text: "Отлично! Заявка зарегистрирована. Если понадобится что-то еще — я всегда на связи. Хорошего дня!" },
    ],
    taxi: [
      { role: "guest", text: "Нужно такси в аэропорт завтра утром" },
      { role: "ai", text: "Конечно! В какой аэропорт и на какое время вам нужен автомобиль?" },
      { role: "guest", text: "Барахас, терминал 4, к 8 утра" },
      { role: "ai", text: "Понял. Рейс международный или внутренний? Это поможет рассчитать оптимальное время выезда." },
      { role: "guest", text: "Международный рейс в 10:30" },
      { role: "ai", text: "Такси заказано на 7:30 — с запасом на регистрацию. Комфортный седан, стоимость €35. Водитель будет ждать у главного входа. Квитанция придет на email. Счастливого полета!" },
    ],
    spa: [
      { role: "guest", text: "Хочу записаться в SPA" },
      { role: "ai", text: "С удовольствием! В нашем SPA доступны: массаж (классический, тайский, горячими камнями), сауна, хаммам, косметические процедуры. Что вас интересует?" },
      { role: "guest", text: "Тайский массаж на сегодня" },
      { role: "ai", text: "Тайский массаж длится 60 или 90 минут. Какой вариант предпочитаете?" },
      { role: "guest", text: "60 минут" },
      { role: "ai", text: "Отлично! Записала вас на тайский массаж 60 мин сегодня в 16:00. Стоимость €75. SPA находится на -1 этаже. Приходите за 10 минут для подготовки. Наслаждайтесь!" },
    ],
    restaurant: [
      { role: "guest", text: "Хочу забронировать столик в ресторане" },
      { role: "ai", text: "С удовольствием! В ресторане отеля или порекомендовать лучшие рестораны города?" },
      { role: "guest", text: "В ресторане отеля на вечер" },
      { role: "ai", text: "Наш ресторан La Terraza работает с 19:00 до 23:00. На сколько персон и на какое время?" },
      { role: "guest", text: "На двоих, в 20:00" },
      { role: "ai", text: "Готово! Столик на 2 персоны в La Terraza на 20:00. Есть пожелания по месту — у окна, на террасе?" },
      { role: "guest", text: "У окна, пожалуйста" },
      { role: "ai", text: "Забронировала столик у окна с видом на город. Ресторан на 7 этаже. Дресс-код smart casual. До встречи!" },
    ],
    info: [
      { role: "guest", text: "Что посмотреть в городе?" },
      { role: "ai", text: "Барселона великолепна! Топ-5 мест: Саграда Фамилия (20 мин), Парк Гуэль (30 мин), Готический квартал (15 мин), Ла Рамбла (10 мин), пляж Барселонета (25 мин). Что интересует больше?" },
      { role: "guest", text: "Саграда Фамилия" },
      { role: "ai", text: "Шедевр Гауди! Рекомендую утренние часы для меньших очередей. Билеты лучше купить онлайн — €26. Могу помочь с покупкой или заказать такси?" },
      { role: "guest", text: "Да, закажи такси на 10 утра" },
      { role: "ai", text: "Такси заказано на 10:00. Поездка до Саграда Фамилия ~15 минут, €12-15. Водитель будет ждать у входа. Enjoy Barcelona!" },
    ],
  },
  en: {
    food: [
      { role: "guest", text: "I'd like to order breakfast to my room" },
      { role: "ai", text: "Good morning! Happy to help with breakfast. Menu is available until 11 AM. What would you like to order?" },
      { role: "guest", text: "Continental breakfast and a cappuccino" },
      { role: "ai", text: "Excellent choice! Continental breakfast and cappuccino. Do you have any allergies or special preferences?" },
      { role: "guest", text: "No, everything is fine" },
      { role: "ai", text: "Perfect! Order confirmed: Continental breakfast + cappuccino. Will be delivered to room 205 in 25 minutes. €18 will be charged to your room. Enjoy your meal!" },
    ],
    cleaning: [
      { role: "guest", text: "Can I get extra towels?" },
      { role: "ai", text: "Of course! How many towels do you need and what size — bath or hand towels?" },
      { role: "guest", text: "Two bath towels please" },
      { role: "ai", text: "Great! Housekeeping will bring 2 bath towels to room 205 within 15 minutes. Anything else?" },
      { role: "guest", text: "No, thanks" },
      { role: "ai", text: "Perfect! Request logged. If you need anything else — I'm always here. Have a great day!" },
    ],
    taxi: [
      { role: "guest", text: "I need a taxi to the airport tomorrow morning" },
      { role: "ai", text: "Sure! Which airport and what time do you need the car?" },
      { role: "guest", text: "Barajas, terminal 4, by 8 AM" },
      { role: "ai", text: "Got it. Is it an international or domestic flight? This helps calculate optimal departure time." },
      { role: "guest", text: "International flight at 10:30" },
      { role: "ai", text: "Taxi booked for 7:30 AM — with buffer for check-in. Comfortable sedan, €35. Driver will wait at the main entrance. Receipt sent to your email. Have a safe flight!" },
    ],
    spa: [
      { role: "guest", text: "I want to book a SPA treatment" },
      { role: "ai", text: "Happy to help! Our SPA offers: massage (classic, Thai, hot stone), sauna, hammam, beauty treatments. What interests you?" },
      { role: "guest", text: "Thai massage for today" },
      { role: "ai", text: "Thai massage is 60 or 90 minutes. Which do you prefer?" },
      { role: "guest", text: "60 minutes" },
      { role: "ai", text: "Excellent! Booked you for 60-min Thai massage today at 4 PM. €75. SPA is on floor -1. Please arrive 10 minutes early. Enjoy!" },
    ],
    restaurant: [
      { role: "guest", text: "I want to book a table at the restaurant" },
      { role: "ai", text: "Happy to help! At the hotel restaurant or shall I recommend the best restaurants in the city?" },
      { role: "guest", text: "At the hotel restaurant for tonight" },
      { role: "ai", text: "Our restaurant La Terraza is open 7 PM - 11 PM. How many guests and what time?" },
      { role: "guest", text: "For two, at 8 PM" },
      { role: "ai", text: "Done! Table for 2 at La Terraza at 8 PM. Any seating preferences — window, terrace?" },
      { role: "guest", text: "Window please" },
      { role: "ai", text: "Booked a window table with city view. Restaurant is on 7th floor. Dress code: smart casual. See you there!" },
    ],
    info: [
      { role: "guest", text: "What should I see in the city?" },
      { role: "ai", text: "Barcelona is amazing! Top 5: Sagrada Familia (20 min), Park Güell (30 min), Gothic Quarter (15 min), La Rambla (10 min), Barceloneta Beach (25 min). What interests you most?" },
      { role: "guest", text: "Sagrada Familia" },
      { role: "ai", text: "Gaudí's masterpiece! Morning visits have shorter queues. Book tickets online — €26. Need help buying or want me to order a taxi?" },
      { role: "guest", text: "Yes, book a taxi for 10 AM" },
      { role: "ai", text: "Taxi booked for 10 AM. ~15 minutes to Sagrada Familia, €12-15. Driver will wait at entrance. Enjoy Barcelona!" },
    ],
  },
  es: {
    food: [
      { role: "guest", text: "Quiero pedir desayuno a la habitación" },
      { role: "ai", text: "¡Buenos días! Encantado de ayudar con el desayuno. El menú está disponible hasta las 11:00. ¿Qué le gustaría pedir?" },
      { role: "guest", text: "Desayuno continental y un capuchino" },
      { role: "ai", text: "¡Excelente elección! Desayuno continental y capuchino. ¿Tiene alguna alergia o preferencia especial?" },
      { role: "guest", text: "No, todo está bien" },
      { role: "ai", text: "¡Perfecto! Pedido confirmado: Desayuno continental + capuchino. Se entregará en la habitación 205 en 25 minutos. €18 se cargará a su cuenta. ¡Buen provecho!" },
    ],
    cleaning: [
      { role: "guest", text: "¿Puedo tener toallas adicionales?" },
      { role: "ai", text: "¡Por supuesto! ¿Cuántas toallas necesita y de qué tamaño — de baño o de manos?" },
      { role: "guest", text: "Dos toallas de baño por favor" },
      { role: "ai", text: "¡Genial! Servicio de limpieza llevará 2 toallas de baño a la habitación 205 en 15 minutos. ¿Algo más?" },
      { role: "guest", text: "No, gracias" },
      { role: "ai", text: "¡Perfecto! Solicitud registrada. Si necesita algo más — estoy aquí. ¡Que tenga un buen día!" },
    ],
    taxi: [
      { role: "guest", text: "Necesito un taxi al aeropuerto mañana por la mañana" },
      { role: "ai", text: "¡Claro! ¿A qué aeropuerto y a qué hora necesita el coche?" },
      { role: "guest", text: "Barajas, terminal 4, a las 8" },
      { role: "ai", text: "Entendido. ¿Es un vuelo internacional o doméstico? Esto ayuda a calcular el tiempo óptimo de salida." },
      { role: "guest", text: "Vuelo internacional a las 10:30" },
      { role: "ai", text: "Taxi reservado para las 7:30 — con tiempo para el check-in. Sedán confortable, €35. El conductor esperará en la entrada principal. Recibo enviado a su email. ¡Buen viaje!" },
    ],
    spa: [
      { role: "guest", text: "Quiero reservar un tratamiento de SPA" },
      { role: "ai", text: "¡Encantado! Nuestro SPA ofrece: masaje (clásico, tailandés, piedras calientes), sauna, hammam, tratamientos de belleza. ¿Qué le interesa?" },
      { role: "guest", text: "Masaje tailandés para hoy" },
      { role: "ai", text: "El masaje tailandés es de 60 o 90 minutos. ¿Cuál prefiere?" },
      { role: "guest", text: "60 minutos" },
      { role: "ai", text: "¡Excelente! Reservado masaje tailandés 60 min hoy a las 16:00. €75. El SPA está en el piso -1. Llegue 10 minutos antes. ¡Disfrute!" },
    ],
    restaurant: [
      { role: "guest", text: "Quiero reservar una mesa en el restaurante" },
      { role: "ai", text: "¡Encantado! ¿En el restaurante del hotel o le recomiendo los mejores restaurantes de la ciudad?" },
      { role: "guest", text: "En el restaurante del hotel para esta noche" },
      { role: "ai", text: "Nuestro restaurante La Terraza abre de 19:00 a 23:00. ¿Cuántas personas y a qué hora?" },
      { role: "guest", text: "Para dos, a las 20:00" },
      { role: "ai", text: "¡Hecho! Mesa para 2 en La Terraza a las 20:00. ¿Preferencia de ubicación — ventana, terraza?" },
      { role: "guest", text: "Ventana por favor" },
      { role: "ai", text: "Reservada mesa junto a la ventana con vista a la ciudad. Restaurante en piso 7. Código de vestimenta: smart casual. ¡Nos vemos!" },
    ],
    info: [
      { role: "guest", text: "¿Qué debo ver en la ciudad?" },
      { role: "ai", text: "¡Barcelona es increíble! Top 5: Sagrada Familia (20 min), Park Güell (30 min), Barrio Gótico (15 min), La Rambla (10 min), Playa Barceloneta (25 min). ¿Qué le interesa más?" },
      { role: "guest", text: "Sagrada Familia" },
      { role: "ai", text: "¡La obra maestra de Gaudí! Las mañanas tienen menos colas. Reserve entradas online — €26. ¿Necesita ayuda para comprar o quiere que reserve un taxi?" },
      { role: "guest", text: "Sí, reserva un taxi para las 10" },
      { role: "ai", text: "Taxi reservado para las 10:00. ~15 minutos a Sagrada Familia, €12-15. El conductor esperará en la entrada. ¡Disfrute Barcelona!" },
    ],
  },
  de: {
    food: [
      { role: "guest", text: "Ich möchte Frühstück aufs Zimmer bestellen" },
      { role: "ai", text: "Guten Morgen! Gerne helfe ich beim Frühstück. Das Menü ist bis 11:00 Uhr verfügbar. Was möchten Sie bestellen?" },
      { role: "guest", text: "Kontinentales Frühstück und einen Cappuccino" },
      { role: "ai", text: "Ausgezeichnete Wahl! Kontinentales Frühstück und Cappuccino. Haben Sie Allergien oder besondere Wünsche?" },
      { role: "guest", text: "Nein, alles in Ordnung" },
      { role: "ai", text: "Perfekt! Bestellung bestätigt: Kontinentales Frühstück + Cappuccino. Wird in 25 Minuten auf Zimmer 205 geliefert. €18 werden dem Zimmer belastet. Guten Appetit!" },
    ],
    cleaning: [
      { role: "guest", text: "Kann ich zusätzliche Handtücher bekommen?" },
      { role: "ai", text: "Natürlich! Wie viele Handtücher brauchen Sie und welche Größe — Bade- oder Handtücher?" },
      { role: "guest", text: "Zwei Badetücher bitte" },
      { role: "ai", text: "Gut! Der Zimmerservice bringt 2 Badetücher auf Zimmer 205 innerhalb von 15 Minuten. Noch etwas?" },
      { role: "guest", text: "Nein, danke" },
      { role: "ai", text: "Perfekt! Anfrage registriert. Falls Sie noch etwas brauchen — ich bin immer da. Schönen Tag!" },
    ],
    taxi: [
      { role: "guest", text: "Ich brauche morgen früh ein Taxi zum Flughafen" },
      { role: "ai", text: "Klar! Welcher Flughafen und um welche Uhrzeit brauchen Sie das Auto?" },
      { role: "guest", text: "Barajas, Terminal 4, um 8 Uhr" },
      { role: "ai", text: "Verstanden. Ist es ein internationaler oder Inlandsflug? Das hilft, die optimale Abfahrtszeit zu berechnen." },
      { role: "guest", text: "Internationaler Flug um 10:30" },
      { role: "ai", text: "Taxi für 7:30 Uhr gebucht — mit Puffer für den Check-in. Komfortable Limousine, €35. Fahrer wartet am Haupteingang. Quittung per E-Mail. Guten Flug!" },
    ],
    spa: [
      { role: "guest", text: "Ich möchte eine SPA-Behandlung buchen" },
      { role: "ai", text: "Gerne! Unser SPA bietet: Massage (klassisch, Thai, heiße Steine), Sauna, Hammam, Schönheitsbehandlungen. Was interessiert Sie?" },
      { role: "guest", text: "Thai-Massage für heute" },
      { role: "ai", text: "Thai-Massage dauert 60 oder 90 Minuten. Welche bevorzugen Sie?" },
      { role: "guest", text: "60 Minuten" },
      { role: "ai", text: "Ausgezeichnet! 60-min Thai-Massage heute um 16:00 gebucht. €75. SPA ist auf Etage -1. Bitte 10 Minuten früher kommen. Genießen Sie!" },
    ],
    restaurant: [
      { role: "guest", text: "Ich möchte einen Tisch im Restaurant reservieren" },
      { role: "ai", text: "Gerne! Im Hotelrestaurant oder soll ich die besten Restaurants der Stadt empfehlen?" },
      { role: "guest", text: "Im Hotelrestaurant für heute Abend" },
      { role: "ai", text: "Unser Restaurant La Terraza ist von 19:00-23:00 geöffnet. Für wie viele Personen und um welche Uhrzeit?" },
      { role: "guest", text: "Für zwei, um 20:00" },
      { role: "ai", text: "Erledigt! Tisch für 2 in La Terraza um 20:00. Platzwunsch — Fenster, Terrasse?" },
      { role: "guest", text: "Fenster bitte" },
      { role: "ai", text: "Fenstertisch mit Stadtblick gebucht. Restaurant auf Etage 7. Dresscode: Smart Casual. Bis dann!" },
    ],
    info: [
      { role: "guest", text: "Was sollte ich in der Stadt sehen?" },
      { role: "ai", text: "Barcelona ist fantastisch! Top 5: Sagrada Familia (20 Min), Park Güell (30 Min), Gotisches Viertel (15 Min), La Rambla (10 Min), Barceloneta Strand (25 Min). Was interessiert Sie am meisten?" },
      { role: "guest", text: "Sagrada Familia" },
      { role: "ai", text: "Gaudís Meisterwerk! Morgens weniger Schlangen. Tickets online buchen — €26. Soll ich beim Kauf helfen oder ein Taxi bestellen?" },
      { role: "guest", text: "Ja, bestelle ein Taxi für 10 Uhr" },
      { role: "ai", text: "Taxi für 10:00 Uhr gebucht. ~15 Minuten zur Sagrada Familia, €12-15. Fahrer wartet am Eingang. Genießen Sie Barcelona!" },
    ],
  },
  fr: {
    food: [
      { role: "guest", text: "Je voudrais commander le petit-déjeuner en chambre" },
      { role: "ai", text: "Bonjour ! Ravi de vous aider pour le petit-déjeuner. Le menu est disponible jusqu'à 11h. Que souhaitez-vous commander ?" },
      { role: "guest", text: "Petit-déjeuner continental et un cappuccino" },
      { role: "ai", text: "Excellent choix ! Petit-déjeuner continental et cappuccino. Avez-vous des allergies ou préférences particulières ?" },
      { role: "guest", text: "Non, tout va bien" },
      { role: "ai", text: "Parfait ! Commande confirmée : Petit-déjeuner continental + cappuccino. Livraison chambre 205 dans 25 minutes. €18 seront facturés. Bon appétit !" },
    ],
    cleaning: [
      { role: "guest", text: "Puis-je avoir des serviettes supplémentaires ?" },
      { role: "ai", text: "Bien sûr ! Combien de serviettes et de quelle taille — bain ou main ?" },
      { role: "guest", text: "Deux serviettes de bain s'il vous plaît" },
      { role: "ai", text: "Parfait ! Le service d'étage apportera 2 serviettes de bain chambre 205 dans 15 minutes. Autre chose ?" },
      { role: "guest", text: "Non, merci" },
      { role: "ai", text: "Parfait ! Demande enregistrée. Si vous avez besoin d'autre chose — je suis là. Bonne journée !" },
    ],
    taxi: [
      { role: "guest", text: "J'ai besoin d'un taxi pour l'aéroport demain matin" },
      { role: "ai", text: "Bien sûr ! Quel aéroport et à quelle heure avez-vous besoin de la voiture ?" },
      { role: "guest", text: "Barajas, terminal 4, à 8h" },
      { role: "ai", text: "Compris. Vol international ou domestique ? Cela aide à calculer l'heure de départ optimale." },
      { role: "guest", text: "Vol international à 10h30" },
      { role: "ai", text: "Taxi réservé pour 7h30 — avec marge pour l'enregistrement. Berline confortable, €35. Le chauffeur attendra à l'entrée principale. Reçu envoyé par email. Bon vol !" },
    ],
    spa: [
      { role: "guest", text: "Je voudrais réserver un soin au SPA" },
      { role: "ai", text: "Avec plaisir ! Notre SPA propose : massage (classique, thaï, pierres chaudes), sauna, hammam, soins beauté. Qu'est-ce qui vous intéresse ?" },
      { role: "guest", text: "Massage thaï pour aujourd'hui" },
      { role: "ai", text: "Le massage thaï dure 60 ou 90 minutes. Lequel préférez-vous ?" },
      { role: "guest", text: "60 minutes" },
      { role: "ai", text: "Excellent ! Massage thaï 60 min réservé aujourd'hui à 16h. €75. Le SPA est au niveau -1. Arrivez 10 minutes avant. Profitez bien !" },
    ],
    restaurant: [
      { role: "guest", text: "Je voudrais réserver une table au restaurant" },
      { role: "ai", text: "Avec plaisir ! Au restaurant de l'hôtel ou puis-je recommander les meilleurs restaurants de la ville ?" },
      { role: "guest", text: "Au restaurant de l'hôtel pour ce soir" },
      { role: "ai", text: "Notre restaurant La Terraza est ouvert de 19h à 23h. Combien de personnes et à quelle heure ?" },
      { role: "guest", text: "Pour deux, à 20h" },
      { role: "ai", text: "C'est fait ! Table pour 2 à La Terraza à 20h. Préférence de placement — fenêtre, terrasse ?" },
      { role: "guest", text: "Fenêtre s'il vous plaît" },
      { role: "ai", text: "Table près de la fenêtre avec vue sur la ville réservée. Restaurant au 7ème étage. Dress code : smart casual. À bientôt !" },
    ],
    info: [
      { role: "guest", text: "Que dois-je voir dans la ville ?" },
      { role: "ai", text: "Barcelone est magnifique ! Top 5 : Sagrada Familia (20 min), Parc Güell (30 min), Quartier Gothique (15 min), La Rambla (10 min), Plage Barceloneta (25 min). Qu'est-ce qui vous intéresse le plus ?" },
      { role: "guest", text: "Sagrada Familia" },
      { role: "ai", text: "Le chef-d'œuvre de Gaudí ! Le matin, moins de files d'attente. Réservez en ligne — €26. Besoin d'aide pour acheter ou je réserve un taxi ?" },
      { role: "guest", text: "Oui, réservez un taxi pour 10h" },
      { role: "ai", text: "Taxi réservé pour 10h. ~15 minutes jusqu'à Sagrada Familia, €12-15. Le chauffeur attendra à l'entrée. Profitez de Barcelone !" },
    ],
  },
  nl: {
    food: [
      { role: "guest", text: "Ik wil graag ontbijt bestellen op mijn kamer" },
      { role: "ai", text: "Goedemorgen! Graag help ik met ontbijt. Het menu is beschikbaar tot 11:00. Wat wilt u bestellen?" },
      { role: "guest", text: "Continentaal ontbijt en een cappuccino" },
      { role: "ai", text: "Uitstekende keuze! Continentaal ontbijt en cappuccino. Heeft u allergieën of speciale voorkeuren?" },
      { role: "guest", text: "Nee, alles is goed" },
      { role: "ai", text: "Perfect! Bestelling bevestigd: Continentaal ontbijt + cappuccino. Wordt binnen 25 minuten bezorgd op kamer 205. €18 wordt op uw kamer geboekt. Eet smakelijk!" },
    ],
    cleaning: [
      { role: "guest", text: "Kan ik extra handdoeken krijgen?" },
      { role: "ai", text: "Natuurlijk! Hoeveel handdoeken heeft u nodig en welke maat — bad- of handdoeken?" },
      { role: "guest", text: "Twee badhanddoeken alstublieft" },
      { role: "ai", text: "Prima! Housekeeping brengt 2 badhanddoeken naar kamer 205 binnen 15 minuten. Nog iets anders?" },
      { role: "guest", text: "Nee, bedankt" },
      { role: "ai", text: "Perfect! Verzoek geregistreerd. Als u nog iets nodig heeft — ik ben er altijd. Fijne dag!" },
    ],
    taxi: [
      { role: "guest", text: "Ik heb morgenochtend een taxi naar het vliegveld nodig" },
      { role: "ai", text: "Zeker! Welke luchthaven en hoe laat heeft u de auto nodig?" },
      { role: "guest", text: "Barajas, terminal 4, om 8 uur" },
      { role: "ai", text: "Begrepen. Is het een internationale of binnenlandse vlucht? Dit helpt om de optimale vertrektijd te berekenen." },
      { role: "guest", text: "Internationale vlucht om 10:30" },
      { role: "ai", text: "Taxi geboekt voor 7:30 — met buffer voor inchecken. Comfortabele sedan, €35. Chauffeur wacht bij de hoofdingang. Bon per e-mail. Goede vlucht!" },
    ],
    spa: [
      { role: "guest", text: "Ik wil graag een SPA-behandeling boeken" },
      { role: "ai", text: "Met plezier! Onze SPA biedt: massage (klassiek, Thais, hete stenen), sauna, hammam, schoonheidsbehandelingen. Wat interesseert u?" },
      { role: "guest", text: "Thaise massage voor vandaag" },
      { role: "ai", text: "Thaise massage duurt 60 of 90 minuten. Welke heeft uw voorkeur?" },
      { role: "guest", text: "60 minuten" },
      { role: "ai", text: "Uitstekend! 60-min Thaise massage vandaag om 16:00 geboekt. €75. SPA is op verdieping -1. Kom 10 minuten eerder. Geniet ervan!" },
    ],
    restaurant: [
      { role: "guest", text: "Ik wil graag een tafel reserveren in het restaurant" },
      { role: "ai", text: "Met plezier! In het hotelrestaurant of zal ik de beste restaurants in de stad aanbevelen?" },
      { role: "guest", text: "In het hotelrestaurant voor vanavond" },
      { role: "ai", text: "Ons restaurant La Terraza is open van 19:00-23:00. Hoeveel gasten en hoe laat?" },
      { role: "guest", text: "Voor twee, om 20:00" },
      { role: "ai", text: "Gedaan! Tafel voor 2 in La Terraza om 20:00. Zitvoorkeur — raam, terras?" },
      { role: "guest", text: "Raam alstublieft" },
      { role: "ai", text: "Raamtafel met stadsuitzicht geboekt. Restaurant op 7e verdieping. Dresscode: smart casual. Tot dan!" },
    ],
    info: [
      { role: "guest", text: "Wat moet ik zien in de stad?" },
      { role: "ai", text: "Barcelona is geweldig! Top 5: Sagrada Familia (20 min), Park Güell (30 min), Gotische Wijk (15 min), La Rambla (10 min), Barceloneta Strand (25 min). Wat interesseert u het meest?" },
      { role: "guest", text: "Sagrada Familia" },
      { role: "ai", text: "Gaudí's meesterwerk! 's Ochtends kortere rijen. Boek online tickets — €26. Hulp nodig bij kopen of zal ik een taxi bestellen?" },
      { role: "guest", text: "Ja, boek een taxi voor 10 uur" },
      { role: "ai", text: "Taxi geboekt voor 10:00. ~15 minuten naar Sagrada Familia, €12-15. Chauffeur wacht bij ingang. Geniet van Barcelona!" },
    ],
  },
  it: {
    food: [
      { role: "guest", text: "Vorrei ordinare la colazione in camera" },
      { role: "ai", text: "Buongiorno! Felice di aiutarla con la colazione. Il menu è disponibile fino alle 11:00. Cosa desidera ordinare?" },
      { role: "guest", text: "Colazione continentale e un cappuccino" },
      { role: "ai", text: "Ottima scelta! Colazione continentale e cappuccino. Ha allergie o preferenze particolari?" },
      { role: "guest", text: "No, tutto bene" },
      { role: "ai", text: "Perfetto! Ordine confermato: Colazione continentale + cappuccino. Consegna in camera 205 tra 25 minuti. €18 saranno addebitati. Buon appetito!" },
    ],
    cleaning: [
      { role: "guest", text: "Posso avere asciugamani extra?" },
      { role: "ai", text: "Certamente! Quanti asciugamani le servono e di che misura — da bagno o per le mani?" },
      { role: "guest", text: "Due asciugamani da bagno per favore" },
      { role: "ai", text: "Benissimo! Il servizio in camera porterà 2 asciugamani da bagno in camera 205 entro 15 minuti. Altro?" },
      { role: "guest", text: "No, grazie" },
      { role: "ai", text: "Perfetto! Richiesta registrata. Se ha bisogno di altro — sono sempre qui. Buona giornata!" },
    ],
    taxi: [
      { role: "guest", text: "Ho bisogno di un taxi per l'aeroporto domani mattina" },
      { role: "ai", text: "Certo! Quale aeroporto e a che ora le serve l'auto?" },
      { role: "guest", text: "Barajas, terminal 4, alle 8" },
      { role: "ai", text: "Capito. È un volo internazionale o nazionale? Questo aiuta a calcolare l'orario di partenza ottimale." },
      { role: "guest", text: "Volo internazionale alle 10:30" },
      { role: "ai", text: "Taxi prenotato per le 7:30 — con margine per il check-in. Berlina confortevole, €35. L'autista aspetterà all'ingresso principale. Ricevuta via email. Buon volo!" },
    ],
    spa: [
      { role: "guest", text: "Vorrei prenotare un trattamento SPA" },
      { role: "ai", text: "Con piacere! La nostra SPA offre: massaggio (classico, thai, pietre calde), sauna, hammam, trattamenti di bellezza. Cosa le interessa?" },
      { role: "guest", text: "Massaggio thai per oggi" },
      { role: "ai", text: "Il massaggio thai dura 60 o 90 minuti. Quale preferisce?" },
      { role: "guest", text: "60 minuti" },
      { role: "ai", text: "Eccellente! Massaggio thai 60 min prenotato oggi alle 16:00. €75. SPA al piano -1. Arrivi 10 minuti prima. Buon relax!" },
    ],
    restaurant: [
      { role: "guest", text: "Vorrei prenotare un tavolo al ristorante" },
      { role: "ai", text: "Con piacere! Al ristorante dell'hotel o posso consigliare i migliori ristoranti della città?" },
      { role: "guest", text: "Al ristorante dell'hotel per stasera" },
      { role: "ai", text: "Il nostro ristorante La Terraza è aperto dalle 19:00 alle 23:00. Quante persone e a che ora?" },
      { role: "guest", text: "Per due, alle 20:00" },
      { role: "ai", text: "Fatto! Tavolo per 2 a La Terraza alle 20:00. Preferenze per il posto — finestra, terrazza?" },
      { role: "guest", text: "Finestra per favore" },
      { role: "ai", text: "Tavolo vicino alla finestra con vista città prenotato. Ristorante al 7° piano. Dress code: smart casual. A presto!" },
    ],
    info: [
      { role: "guest", text: "Cosa dovrei vedere in città?" },
      { role: "ai", text: "Barcellona è fantastica! Top 5: Sagrada Familia (20 min), Parc Güell (30 min), Quartiere Gotico (15 min), La Rambla (10 min), Spiaggia Barceloneta (25 min). Cosa le interessa di più?" },
      { role: "guest", text: "Sagrada Familia" },
      { role: "ai", text: "Il capolavoro di Gaudí! Al mattino code più brevi. Prenoti online — €26. Serve aiuto per acquistare o prenoto un taxi?" },
      { role: "guest", text: "Sì, prenota un taxi per le 10" },
      { role: "ai", text: "Taxi prenotato per le 10:00. ~15 minuti per Sagrada Familia, €12-15. L'autista aspetterà all'ingresso. Goda Barcellona!" },
    ],
  },
}

// ═══════════════════════════════════════════════════════════════════════
// ICON MAP
// ═══════════════════════════════════════════════════════════════════════
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Utensils, Bed, Car, Calendar, Tv, MapPin, Speaker, Phone, Smartphone, MessageSquare, Wifi, Heart, Coffee, TrendingUp, Clock, Star, Globe, Zap, Shield, Bot, Sparkles
}

// ═══════════════════════════════════════════════════════════════════════
// REVEAL ANIMATION COMPONENT
// ═══════════════════════════════════════════════════════════════════════
function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// INTERACTIVE AI CONCIERGE DEMO COMPONENT
// ═══════════════════════════════════════════════════════════════════════
function AIConciergeDemo({ locale, t }: { locale: Locale; t: typeof translations.ru }) {
  const [activeScenario, setActiveScenario] = useState("food")
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: string; text: string }>>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const dialogues = dialogueData[locale] || dialogueData.en
  const currentDialogue = dialogues[activeScenario as keyof typeof dialogues] || dialogues.food

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Reset when scenario changes
  useEffect(() => {
    setMessages([])
    setCurrentStep(0)
    setIsPlaying(false)
  }, [activeScenario])

  // Auto-play messages
  useEffect(() => {
    if (!isPlaying || currentStep >= currentDialogue.length) {
      if (currentStep >= currentDialogue.length) setIsPlaying(false)
      return
    }

    const timer = setTimeout(() => {
      setMessages(prev => [...prev, currentDialogue[currentStep]])
      setCurrentStep(prev => prev + 1)
    }, currentDialogue[currentStep].role === "ai" ? 1500 : 800)

    return () => clearTimeout(timer)
  }, [isPlaying, currentStep, currentDialogue])

  const handleStart = () => {
    setMessages([])
    setCurrentStep(0)
    setIsPlaying(true)
  }

  const handleRestart = () => {
    setMessages([])
    setCurrentStep(0)
    setIsPlaying(true)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Scenario Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">{locale === "ru" ? "Выберите сценарий:" : "Select scenario:"}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {t.demo.scenarios.map((scenario) => {
            const Icon = iconMap[scenario.icon] || Bot
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(scenario.id)}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all text-left",
                  activeScenario === scenario.id
                    ? "border-amber-500 bg-amber-500/10"
                    : "border-border hover:border-amber-500/50 hover:bg-muted/50"
                )}
              >
                <Icon className={cn(
                  "h-6 w-6 mb-2",
                  activeScenario === scenario.id ? "text-amber-500" : "text-muted-foreground"
                )} />
                <p className="font-medium text-sm">{scenario.name}</p>
                <p className="text-xs text-muted-foreground">{scenario.desc}</p>
              </button>
            )
          })}
        </div>
        
        {/* Start Button */}
        {messages.length === 0 && (
          <Button 
            onClick={handleStart} 
            size="lg" 
            className="w-full h-14 text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
          >
            <Play className="mr-2 h-5 w-5" />
            {locale === "ru" ? "Запустить демо" : "Start Demo"}
          </Button>
        )}
      </div>

      {/* Chat Interface */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white">{t.demo.aiLabel}</p>
              <p className="text-xs text-emerald-400 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Online
              </p>
            </div>
            <div className="ml-auto flex gap-2">
              <button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mic className="h-4 w-4 text-white" />
              </button>
              <button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Volume2 className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[320px] overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-slate-400 text-center">
              <div>
                <Bot className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>{locale === "ru" ? "Нажмите 'Запустить демо' чтобы начать" : "Click 'Start Demo' to begin"}</p>
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex gap-3 animate-in slide-in-from-bottom-2 duration-300",
                    msg.role === "guest" ? "flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                    msg.role === "guest" 
                      ? "bg-blue-500" 
                      : "bg-gradient-to-br from-amber-400 to-orange-500"
                  )}>
                    {msg.role === "guest" 
                      ? <Users className="h-4 w-4 text-white" />
                      : <Bot className="h-4 w-4 text-white" />
                    }
                  </div>
                  <div className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2.5",
                    msg.role === "guest"
                      ? "bg-blue-500 text-white rounded-tr-sm"
                      : "bg-slate-700 text-white rounded-tl-sm"
                  )}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isPlaying && currentStep < currentDialogue.length && (
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-slate-700 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-700 bg-slate-800/50">
          <div className="flex gap-2">
            <div className="flex-1 bg-slate-700 rounded-full px-4 py-2.5 text-sm text-slate-400">
              {t.demo.voiceHint}
            </div>
            {messages.length > 0 && !isPlaying && (
              <Button 
                onClick={handleRestart}
                variant="outline" 
                size="sm"
                className="rounded-full border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                {t.demo.restart}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════
interface HotelConciergeClientProps {
  locale: Locale
}

export default function HotelConciergeClient({ locale }: HotelConciergeClientProps) {
  const t = translations[locale] || translations.ru
  const { openModal } = useCTA()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background">
      
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-rose-500/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl px-4 relative">
          <Reveal>
            <Badge className="mb-6 bg-amber-500/10 text-amber-600 border-amber-500/30 px-4 py-1.5">
              <Building2 className="h-3.5 w-3.5 mr-1.5" />
              {t.hero.badge}
            </Badge>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Reveal delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  {t.hero.title}{" "}
                  <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                    {t.hero.titleHighlight}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t.hero.subtitle}
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-base font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-500/25"
                    onClick={() => openModal("demo")}
                  >
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 text-base border-2"
                    onClick={() => openModal("consultation")}
                  >
                    {t.hero.ctaSecondary}
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {t.hero.stats.map((stat, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-muted/50">
                      <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Hero Visual - Smart Room */}
            <Reveal delay={300} className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                  {/* Hotel Room Mockup */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="col-span-2 h-32 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                      <Tv className="h-12 w-12 text-amber-400" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-14 rounded-lg bg-slate-700 flex items-center justify-center">
                        <Wind className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="h-14 rounded-lg bg-slate-700 flex items-center justify-center">
                        <Sun className="h-6 w-6 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Smart Speaker */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center animate-pulse">
                      <Mic className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{t.demo.aiLabel}</p>
                      <p className="text-sm text-amber-400">{locale === "ru" ? "Слушаю вас..." : "Listening..."}</p>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {[Utensils, Bed, Car, Calendar].map((Icon, i) => (
                      <div key={i} className="h-12 rounded-lg bg-slate-700/50 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                        <Icon className="h-5 w-5 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ INTERACTIVE DEMO SECTION ═══ */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <Reveal className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 border-amber-500/30">
              {t.demo.badge}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.demo.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.demo.subtitle}</p>
          </Reveal>

          <Reveal delay={200}>
            <AIConciergeDemo locale={locale} t={t} />
          </Reveal>
        </div>
      </section>

      {/* ═══ SERVICES SECTION ═══ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <Reveal className="text-center mb-12">
            <Badge className="mb-4">{t.services.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Bot
              return (
                <Reveal key={i} delay={i * 100}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-amber-500/30">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-amber-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{cat.desc}</p>
                      <ul className="space-y-2">
                        {cat.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ CHANNELS SECTION ═══ */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <Reveal className="text-center mb-12">
            <Badge className="mb-4">{t.channels.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.channels.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.channels.subtitle}</p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.channels.items.map((channel, i) => {
              const Icon = iconMap[channel.icon] || Phone
              return (
                <Reveal key={i} delay={i * 50}>
                  <div className="text-center p-6 rounded-2xl bg-background border hover:border-amber-500/30 hover:shadow-lg transition-all">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-amber-500" />
                    </div>
                    <p className="font-medium text-sm mb-1">{channel.name}</p>
                    <p className="text-xs text-muted-foreground">{channel.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS SECTION ═══ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <Reveal className="text-center mb-12">
            <Badge className="mb-4">{t.benefits.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.benefits.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.benefits.subtitle}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.benefits.items.map((benefit, i) => {
              const Icon = iconMap[benefit.icon] || Zap
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 border hover:border-amber-500/30 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-amber-500" />
                      </div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                        {benefit.stat}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATIONS SECTION ═══ */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <Reveal className="text-center mb-12">
            <Badge className="mb-4">{t.integrations.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.integrations.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.integrations.subtitle}</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {t.integrations.items.map((item, i) => (
                <div
                  key={i}
                  className="px-6 py-3 rounded-full bg-background border hover:border-amber-500/30 transition-all"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="ml-2 text-xs text-muted-foreground">({item.category})</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ PRICING SECTION ═══ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <Reveal className="text-center mb-12">
            <Badge className="mb-4">{t.pricing.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.pricing.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.pricing.subtitle}</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.pricing.plans.map((plan, i) => (
              <Reveal key={i} delay={i * 100}>
                <Card className={cn(
                  "h-full relative overflow-hidden",
                  plan.popular && "border-amber-500 shadow-lg shadow-amber-500/10"
                )}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                      Popular
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={cn(
                        "w-full",
                        plan.popular
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                          : ""
                      )}
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => openModal("consultation")}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASES SECTION ═══ */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <Reveal className="text-center mb-12">
            <Badge className="mb-4">{t.cases.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.cases.title}</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {t.cases.items.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">{item.hotel}</h3>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: item.stars }).map((_, j) => (
                            <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-sm text-muted-foreground ml-2">{item.rooms} {locale === "ru" ? "номеров" : "rooms"}</span>
                        </div>
                      </div>
                      <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/30">
                        {item.result}
                      </Badge>
                    </div>
                    <blockquote className="text-muted-foreground italic mb-4">
                      &quot;{item.quote}&quot;
                    </blockquote>
                    <p className="text-sm font-medium">— {item.author}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <Reveal className="text-center mb-12">
            <Badge className="mb-4">{t.faq.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.faq.title}</h2>
          </Reveal>

          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium pr-4">{item.q}</span>
                    <ChevronRight className={cn(
                      "h-5 w-5 shrink-0 transition-transform",
                      openFaq === i && "rotate-90"
                    )} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-muted-foreground">
                      {item.a}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SEO TEXT SECTION ═══ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="text-2xl font-bold mb-6">{t.seoText.title}</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {t.seoText.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-muted-foreground mb-4">{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA SECTION ═══ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500" />
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="relative p-8 sm:p-12 text-center text-white">
                <Badge className="mb-6 bg-white/20 text-white border-white/30">
                  {t.cta.badge}
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.cta.title}</h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-base font-semibold bg-white text-amber-600 hover:bg-white/90"
                    onClick={() => openModal("demo")}
                  >
                    {t.cta.button}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 text-base border-2 border-white text-white hover:bg-white/10"
                    onClick={() => openModal("consultation")}
                  >
                    {t.cta.buttonSecondary}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ INTERNAL LINKS FOR SEO ═══ */}
      <section className="py-12 border-t">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href={`/${locale}/solutions/voice-sales-manager`} className="text-muted-foreground hover:text-amber-500 transition-colors">
              {locale === "ru" ? "Голосовой менеджер продаж" : "Voice Sales Manager"}
            </Link>
            <Link href={`/${locale}/solutions/business-automation`} className="text-muted-foreground hover:text-amber-500 transition-colors">
              {locale === "ru" ? "Автоматизация бизнеса" : "Business Automation"}
            </Link>
            <Link href={`/${locale}/solutions/m2-agents`} className="text-muted-foreground hover:text-amber-500 transition-colors">
              {locale === "ru" ? "AI-агенты M2" : "M2 AI Agents"}
            </Link>
            <Link href={`/${locale}/solutions/enterprise`} className="text-muted-foreground hover:text-amber-500 transition-colors">
              {locale === "ru" ? "Enterprise решения" : "Enterprise Solutions"}
            </Link>
            <Link href={`/${locale}/cases`} className="text-muted-foreground hover:text-amber-500 transition-colors">
              {locale === "ru" ? "Кейсы" : "Case Studies"}
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
