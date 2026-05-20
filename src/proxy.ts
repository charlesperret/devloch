import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { isPaidHostname } from "@/lib/paid-hosts";

function isPaidHost(request: NextRequest) {
  return [
    request.headers.get("host"),
    request.headers.get("x-forwarded-host"),
    request.nextUrl.hostname,
  ].some(isPaidHostname);
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
