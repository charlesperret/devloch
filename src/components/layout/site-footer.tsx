import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/lib/site";

const quickLinks = [
  ["Accueil", "/"],
  ["Notre agence", "/formation-prospection-b2b"],
  ["Resultats", "/resultats"],
  ["Blog", "/blog-list"],
] as const;

const academyLinks = [
  ["Notre offre", "/academy-notre-appel"],
  ["Programme", "/academy-notre-appel"],
  ["Conditions", "/terms"],
  ["FAQ", "/#faq"],
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-stroke bg-[#f2f4f7] py-14">
      <div className="mx-auto grid w-full max-w-screen-xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-10">
        <div>
          <Image src="/images/brand/devlo-logo.png" alt="devlo logo" width={120} height={42} className="h-8 w-auto object-contain" />
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#456177]">{siteConfig.description}</p>
          <div className="mt-5 space-y-2 text-sm text-[#34566d]">
            {siteConfig.footer.contact.map((item) => (
              <p key={item.href}>
                <Link prefetch={false} href={item.href} className="inline-flex min-h-11 items-center transition hover:text-[#0f3d57]">
                  {item.label}
                </Link>
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4f687a]">Agence</p>
          <ul className="mt-3 space-y-2 text-sm text-[#3f5f75]">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <Link prefetch={false} href={href} className="inline-flex min-h-11 items-center transition hover:text-[#153f59]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-[#dde3ea] bg-white p-6 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4f687a]">Academie</p>
          <ul className="mt-3 space-y-2 text-sm text-[#3f5f75]">
            {academyLinks.map(([label, href]) => (
              <li key={href}>
                <Link prefetch={false} href={href} className="inline-flex min-h-11 items-center transition hover:text-[#153f59]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-[#e5e9ef] pt-4 text-xs text-[#4f687a]">
            {siteConfig.footer.legal.map((item) => (
              <p key={item.href}>
                <Link prefetch={false} href={item.href} className="inline-flex min-h-11 items-center transition hover:text-[#153f59]">
                  {item.label}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
