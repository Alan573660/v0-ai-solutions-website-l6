"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
    dataLayer: any[]
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize Google Analytics
    if (process.env.NEXT_PUBLIC_GA_ID) {
      const script1 = document.createElement("script")
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
      document.head.appendChild(script1)

      const script2 = document.createElement("script")
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_title: document.title,
          page_location: window.location.href,
        });
      `
      document.head.appendChild(script2)
    }

    // Initialize Yandex Metrica for Russian market
    if (process.env.NEXT_PUBLIC_YANDEX_METRICA_ID && pathname.startsWith("/ru")) {
      const script = document.createElement("script")
      script.innerHTML = `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
        ym(${process.env.NEXT_PUBLIC_YANDEX_METRICA_ID}, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      `
      document.head.appendChild(script)
    }
  }, [])

  useEffect(() => {
    // Track page views
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID!, {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}

// Analytics event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, parameters)
  }
}

export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent("cta_click", {
    cta_name: ctaName,
    location: location,
  })
}

export const trackFormSubmission = (formType: string, success: boolean) => {
  trackEvent("form_submission", {
    form_type: formType,
    success: success,
  })
}

export const trackDemoInteraction = (interactionType: string) => {
  trackEvent("demo_interaction", {
    interaction_type: interactionType,
  })
}

export const trackPageView = (pageName: string) => {
  trackEvent("page_view", {
    page_name: pageName,
  })
}
