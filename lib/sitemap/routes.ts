export const siteRoutes = {
  main: [
    "",
    "/solutions",
    "/platform",
    "/cases",
    "/blog",
    "/about",
    "/contacts",
    "/faq",
    "/support",
    "/privacy",
    "/terms",
  ],
  solutions: [
    "/solutions/voice-sales-manager",
    "/solutions/hotel-concierge",
    "/solutions/smb",
    "/solutions/enterprise",
    "/solutions/custom",
  ],
  platform: ["/platform/architecture", "/platform/demo", "/platform/pricing-calculator"],
  blog: [
    "/blog/voice-assistants-increase-sales-3x",
    "/blog/hotel-automation-no-queues",
    "/blog/small-business-ai-sales",
    "/blog/government-services-ai-assistants",
    "/blog/voice-speakers-hotels-trend-2025",
    "/blog/ai-banking-security-speed",
    "/blog/openai-deepseek-grok-technologies",
    "/blog/golosovye-assistenty-prodazhi",
    "/blog/avtomatizaciya-otelej-ai",
    "/blog/ai-dlya-malogo-biznesa",
    "/blog/gosuslugi-ai-avtomatizaciya",
    "/blog/bankovskij-sektor-ai",
    "/blog/ai-assistants-2025-trends",
  ],
  cases: [
    "/cases/sberbank-ai-assistant",
    "/cases/magnit-retail-revolution",
    "/cases/moscow-government-digital-services",
    "/cases/aeroflot-customer-service",
    "/cases/x5-retail-group",
    "/cases/rostelecom-telecom",
    "/cases/gazprom-industrial-ai",
    "/cases/vtb-digital-banking",
  ],
}

export const getAllRoutes = () => {
  return [...siteRoutes.main, ...siteRoutes.solutions, ...siteRoutes.platform, ...siteRoutes.blog, ...siteRoutes.cases]
}

export const getRoutePriority = (route: string): number => {
  if (route === "") return 1.0
  if (route.startsWith("/cases/")) return 0.8
  if (route.includes("/solutions") || route.includes("/platform")) return 0.9
  if (route === "/blog" || route.startsWith("/blog/")) return 0.7
  if (route === "/faq" || route === "/contacts") return 0.7
  return 0.5
}

export const getRouteChangeFrequency = (
  route: string,
): "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" => {
  if (route === "") return "daily"
  if (route === "/blog" || route.startsWith("/blog/")) return "weekly"
  if (route.startsWith("/cases/")) return "monthly"
  if (route.includes("/solutions") || route.includes("/platform")) return "weekly"
  if (route === "/faq" || route === "/contacts") return "monthly"
  return "weekly"
}
