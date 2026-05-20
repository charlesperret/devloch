"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

function isPaidLandingPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname.startsWith("/lp/") || /^\/(en|de|nl)\/lp\//.test(pathname);
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const paidLanding = isPaidLandingPath(pathname);

  if (paidLanding) {
    return (
      <div className="relative flex min-h-screen flex-col bg-white">
        <div className="border-b border-neutral-200 bg-white">
          <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center px-6 lg:px-10">
            <Image
              src="/images/devlo-logo.webp"
              alt="devlo"
              width={150}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </div>
        </div>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-neutral-200 bg-white py-5">
          <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-3 px-6 text-xs text-neutral-500 lg:px-10">
            <p>© 2026 devlo. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-[#0b6c8f]">Privacy</Link>
              <Link href="/terms-of-service" className="hover:text-[#0b6c8f]">Terms</Link>
              <a href="mailto:emea@devlo.ch" className="hover:text-[#0b6c8f]">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-20">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
