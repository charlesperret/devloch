import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d5dce5] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-6 lg:px-10">
        <Link prefetch={false} href="/" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#12384f]">
          <span className="text-base font-bold lowercase tracking-tight">{siteConfig.name}</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-5 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link prefetch={false}
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-xs font-semibold uppercase tracking-[0.13em] text-[#3d5668] transition hover:text-[#133f59]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link prefetch={false}
          href="/notrerendez-vous"
          className="inline-flex min-h-11 items-center rounded-md border border-[#d58c94] bg-[#fff2f3] px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#a53141] transition hover:bg-[#ffe5e8]"
        >
          Prendre RDV
        </Link>
      </div>
    </header>
  );
}
