import createMiddleware from "next-intl/middleware"
import { locales, defaultLocale } from "./i18n"

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
})

export const config = {
  matcher: [
    "/",
    "/(ru|en|es|fr|de|nl)/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
