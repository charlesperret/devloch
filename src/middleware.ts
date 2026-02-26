import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SUPPORTED_LOCALES = new Set(["fr", "en"]);

function isBypassedPath(pathname: string) {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/.well-known/") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.[^/]+$/.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/" || isBypassedPath(pathname)) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (!maybeLocale || !SUPPORTED_LOCALES.has(maybeLocale)) {
    return NextResponse.next();
  }

  const rewrittenPath = `/${segments.slice(1).join("/")}`.replace(/\/+$/, "") || "/";
  const nextUrl = request.nextUrl.clone();
  nextUrl.pathname = rewrittenPath;

  return NextResponse.rewrite(nextUrl);
}

export const config = {
  matcher: ["/:path*"],
};
