import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "devlo — Agence B2B de Prospection Commerciale en Suisse",
    template: "%s",
  },
  description:
    "Agence B2B spécialisée en prospection commerciale, télémarketing et génération de rendez-vous qualifiés.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    siteName: "devlo",
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: "/images/devlo_Logo_Name.webp",
        width: 1200,
        height: 630,
        alt: "devlo — Agence B2B de Prospection Commerciale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/devlo_Logo_Name.webp"],
  },
};

/** Organization JSON-LD — injected on every page via root layout */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "devlo",
  url: "https://devlo.ch",
  logo: "https://devlo.ch/images/devlo_Logo_Name.webp",
  description:
    "Agence suisse spécialisée en prospection B2B, génération de leads et prise de rendez-vous qualifiés. Plus de 1000 campagnes depuis 2020.",
  foundingDate: "2020",
  sameAs: [
    "https://www.linkedin.com/company/devlo-connects-you-with-more-prospects/",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruelle des Dolles 1",
    addressLocality: "Rivaz",
    postalCode: "1071",
    addressRegion: "Vaud",
    addressCountry: "CH",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+41-79-758-64-03",
      email: "emea@devlo.ch",
      contactType: "customer service",
      areaServed: ["CH", "BE", "FR", "DE", "LU"],
      availableLanguage: ["French", "German", "English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-234-201-8019",
      email: "americas@devlo.ch",
      contactType: "customer service",
      areaServed: ["US", "CA"],
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${plusJakartaSans.variable} min-h-screen bg-canvas font-sans text-ink antialiased`}>
        <JsonLd schema={organizationSchema} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-soft focus:bg-paper focus:px-4 focus:py-2 focus:text-sm"
        >
          Aller au contenu
        </a>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-20">
            {children}
          </main>
          <SiteFooter />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
