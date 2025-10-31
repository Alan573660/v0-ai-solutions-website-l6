import { type NextRequest, NextResponse } from "next/server"
import { defaultLocale, locales } from "@/lib/i18n/config"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot)$/i)) {
    return NextResponse.next()
  }

  // Check if pathname is missing locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (!pathnameHasLocale) {
    // Redirect to default locale
    const locale = defaultLocale
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
