/**
 * Централизованное управление ключами кэша
 */

export const CACHE_KEYS = {
  // Solutions
  SOLUTIONS_LIST: "solutions:list",
  SOLUTION_BY_SLUG: (slug: string) => `solutions:slug:${slug}`,
  SOLUTIONS_BY_LOCALE: (locale: string) => `solutions:locale:${locale}`,

  // FAQ
  FAQ_LIST: "faq:list",
  FAQ_BY_LOCALE: (locale: string) => `faq:locale:${locale}`,

  // AI Assets
  AI_ASSETS: (locale: string) => `ai-assets:${locale}`,

  // Blog
  BLOG_POSTS: "blog:posts",
  BLOG_POST: (slug: string) => `blog:post:${slug}`,
  BLOG_BY_LOCALE: (locale: string) => `blog:locale:${locale}`,

  // Translations
  TRANSLATIONS: (locale: string) => `i18n:${locale}`,
} as const

export const CACHE_TTL = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  DAY: 86400, // 24 hours
  WEEK: 604800, // 7 days
} as const

export const CACHE_TAGS = {
  SOLUTIONS: "solutions",
  FAQ: "faq",
  BLOG: "blog",
  AI_ASSETS: "ai-assets",
  TRANSLATIONS: "translations",
} as const
