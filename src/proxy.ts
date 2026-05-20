import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function normalizeHostname(host: string | null) {
  if (!host) return false;

  const normalizedHostname = host.split(":")[0]?.toLowerCase();
  return (
    normalizedHostname === "devlosales.com" ||
    normalizedHostname === "www.devlosales.com" ||
    normalizedHostname === "devlosales.de" ||
    normalizedHostname === "www.devlosales.de"
  );
}

function isPaidHost(request: NextRequest) {
  return [
    request.headers.get("host"),
    request.headers.get("x-forwarded-host"),
    request.nextUrl.hostname,
  ].some(normalizeHostname);
}

export function proxy(request: NextRequest) {
  const paidHost = isPaidHost(request);
  const response = NextResponse.next();

  if (paidHost) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|images|fonts|favicon.ico|site.webmanifest).*)"],
};
