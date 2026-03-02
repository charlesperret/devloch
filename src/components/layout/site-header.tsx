"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { HeaderLangSwitcher } from "@/components/layout/header-lang-switcher";
import { buttonClassName } from "@/components/ui/button";
import { mainNav } from "@/content/masterfile.fr";
import { SERVICE_HUB_CARDS } from "@/content/services";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileStickyCta, setShowMobileStickyCta] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      setShowMobileStickyCta(y > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesMenuOpen(false);
    setIsMobileServicesOpen(pathname.startsWith("/services"));
  }, [pathname]);

  useEffect(() => {
    if (!isServicesMenuOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setIsServicesMenuOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsServicesMenuOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [isServicesMenuOpen]);

  const transparentMode = pathname === "/" && !isScrolled;
  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-200",
          transparentMode
            ? "border-b border-white/20 bg-transparent"
            : "border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur-md",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1260px] items-center justify-between px-6 md:h-20 md:px-10">
          <Link href="/" className="inline-flex min-h-[44px] items-center" aria-label="Accueil devlo">
            <Image src={mainNav.logo} alt="devlo logo" width={240} height={80} className="h-14 w-auto md:h-16" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
            {mainNav.links.map((item) => {
              if (item.href === "/services") {
                return (
                  <div
                    key={item.href}
                    ref={servicesMenuRef}
                    className="relative"
                    onMouseEnter={() => setIsServicesMenuOpen(true)}
                    onMouseLeave={() => setIsServicesMenuOpen(false)}
                    onFocusCapture={() => setIsServicesMenuOpen(true)}
                  >
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        className={[
                          "inline-flex min-h-[44px] items-center border-b-2 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors",
                          servicesActive
                            ? "border-devlo-600 text-devlo-700"
                            : "border-transparent text-devlo-900 hover:text-devlo-600",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label="Ouvrir le menu services"
                        aria-expanded={isServicesMenuOpen}
                        onClick={() => setIsServicesMenuOpen((prev) => !prev)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-devlo-700 transition hover:bg-devlo-100"
                      >
                        <ChevronDown className={["h-4 w-4 transition-transform", isServicesMenuOpen ? "rotate-180" : ""].join(" ")} />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isServicesMenuOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          className="absolute right-0 top-[calc(100%+8px)] z-[70] w-[760px] overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-panel"
                        >
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-devlo-700">
                              Tous les services
                            </p>
                            <div className="mt-3 grid gap-2 sm:grid-cols-2">
                              {SERVICE_HUB_CARDS.map((service) => (
                                <Link
                                  key={`desktop-menu-${service.href}`}
                                  href={service.href}
                                  className="rounded-xl border border-neutral-200 bg-white px-3 py-2 transition hover:border-devlo-700/30 hover:bg-devlo-50/45"
                                >
                                  <p className="text-sm font-semibold text-devlo-900">{service.title}</p>
                                  <p className="mt-1 text-xs leading-5 text-neutral-500">{service.subtitle}</p>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-4 border-t border-neutral-200 pt-3">
                              <Link
                                href="/services"
                                className="inline-flex rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-devlo-700 transition hover:border-devlo-700/30"
                              >
                                Voir tous les services →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              }

              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "inline-flex min-h-[44px] items-center border-b-2 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors",
                    active ? "border-devlo-600 text-devlo-700" : "border-transparent text-devlo-900 hover:text-devlo-600",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="flex items-center gap-3">
              <Link href={mainNav.cta.href} className={buttonClassName("outline", "px-5 py-2.5 text-sm")}>
                {mainNav.cta.label}
              </Link>
              <HeaderLangSwitcher transparent={transparentMode} />
            </div>
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-devlo-900 md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <Image src={mainNav.logo} alt="devlo logo" width={120} height={40} className="h-7 w-auto" />
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200"
                aria-label="Fermer le menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 space-y-2">
              {mainNav.links.map((item) => {
                if (item.href === "/services") {
                  return (
                    <div key={`mobile-${item.href}`} className="rounded-xl border border-neutral-200 p-2">
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={item.href}
                          className={[
                            "flex min-h-[44px] flex-1 items-center rounded-lg px-3 py-2 text-xl font-semibold",
                            servicesActive ? "bg-devlo-50 text-devlo-700" : "text-devlo-900",
                          ].join(" ")}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-devlo-700"
                          aria-label="Afficher les services"
                        >
                          <ChevronDown className={["h-4 w-4 transition-transform", isMobileServicesOpen ? "rotate-180" : ""].join(" ")} />
                        </button>
                      </div>

                      <AnimatePresence>
                        {isMobileServicesOpen ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 overflow-hidden"
                          >
                            <div className="grid gap-1.5">
                              {SERVICE_HUB_CARDS.map((service) => (
                                <Link
                                  key={`mobile-service-${service.href}`}
                                  href={service.href}
                                  className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 transition hover:border-devlo-700/30"
                                >
                                  <p className="text-sm font-semibold text-devlo-900">{service.title}</p>
                                  <p className="text-xs text-neutral-500">{service.subtitle}</p>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 border-t border-neutral-200 pt-2">
                              <Link
                                href="/services"
                                className="inline-flex min-h-[40px] items-center rounded-lg border border-neutral-200 bg-white px-3 text-sm font-semibold text-devlo-700"
                              >
                                Voir tous les services →
                              </Link>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "flex min-h-[44px] items-center rounded-lg px-4 py-3 text-xl font-semibold",
                      isActive(pathname, item.href) ? "bg-devlo-50 text-devlo-700" : "text-devlo-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <Link href={mainNav.cta.href} className={buttonClassName("primary", "mt-8 w-full py-4 text-base")}>
              {mainNav.cta.label}
            </Link>
            <HeaderLangSwitcher mobile className="mt-3" />
          </motion.aside>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showMobileStickyCta ? (
          <motion.div
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            exit={{ y: 120 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-200 bg-white px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden"
          >
            <Link href={mainNav.cta.href} className={buttonClassName("primary", "w-full py-4 text-base")}>
              {mainNav.cta.label}
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
