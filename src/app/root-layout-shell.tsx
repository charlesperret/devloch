import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import { PaidAttributionTracker } from "@/components/analytics/paid-attribution-tracker";
import { SiteChrome } from "@/components/layout/site-chrome";
import { JsonLd } from "@/components/seo/json-ld";
import { buildLanguageAlternates, defaultOgImagePath, toAbsoluteUrl } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";

const plusJakartaSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-plus-jakarta",
  weight: "100 900",
  display: "swap",
});

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-9CKZL9V2VN";
const lemlistVisitorTrackingKey =
  process.env.NEXT_PUBLIC_LEMLIST_VISITOR_TRACKING_KEY || "5YVj23Jabxi9uAn37278kTtXNsp7ENp3k5zUlMFSAlI=";
const lemlistTeamId = process.env.NEXT_PUBLIC_LEMLIST_TEAM_ID || "tea_Ps9QPwhyb4Cv8GrML";
const enableLemlistVisitorTracking = process.env.NEXT_PUBLIC_ENABLE_LEMLIST_VISITOR_TRACKING !== "false";

type LayoutLocale = "fr" | "en" | "de" | "nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Agence prospection B2B Suisse | devlo",
    template: "%s | devlo",
  },
  description:
    "Agence suisse de prospection B2B : lead generation, cold email, LinkedIn, calling et rendez-vous qualifiés pour équipes B2B.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
    languages: buildLanguageAlternates("/"),
  },
  openGraph: {
    title: "Agence prospection B2B Suisse | devlo",
    description:
      "Agence suisse de prospection B2B : lead generation, cold email, LinkedIn, calling et rendez-vous qualifiés pour équipes B2B.",
    siteName: "devlo",
    locale: "fr_CH",
    type: "website",
    url: toAbsoluteUrl("/"),
    images: [
      {
        url: toAbsoluteUrl(defaultOgImagePath),
        width: 1200,
        height: 630,
        alt: "devlo - GTM engineering agency and B2B outbound partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence prospection B2B Suisse | devlo",
    description:
      "Agence suisse de prospection B2B : lead generation, cold email, LinkedIn, calling et rendez-vous qualifiés pour équipes B2B.",
    images: [toAbsoluteUrl(defaultOgImagePath)],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/images/devlo_favicon-96x96.webp", type: "image/webp", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  manifest: "/site.webmanifest",
};

const schemaCopyByLocale: Record<
  LayoutLocale,
  {
    organizationDescription: string;
    serviceName: string;
    serviceType: string;
    reviewBodies: [string, string];
  }
> = {
  fr: {
    organizationDescription:
      "Agence suisse de prospection B2B et GTM engineering, spécialisée en lead generation, prospection multicanale, signaux d'achat, enrichissement Clay et rendez-vous qualifiés. Plus de 1000 campagnes depuis 2020.",
    serviceName: "Prospection B2B externalisée et GTM engineering",
    serviceType: "Génération de leads B2B, prospection multicanale, signal-based outbound et rendez-vous qualifiés",
    reviewBodies: [
      "devlo a complètement révolutionné notre approche commerciale. 80 rendez-vous qualifiés et 200 000 € de contrats signés.",
      "Charles est l'un des experts en vente les plus créatifs que je connaisse. Il nous a aidés à obtenir des rendez-vous commerciaux qualifiés dans la région DACH.",
    ],
  },
  en: {
    organizationDescription:
      "Swiss B2B prospecting and GTM engineering agency focused on lead generation, multichannel outbound, buying signals, Clay enrichment and qualified meetings. More than 1,000 campaigns launched since 2020.",
    serviceName: "Outsourced B2B prospecting and GTM engineering",
    serviceType: "B2B lead generation, multichannel outbound, signal-based outbound and qualified meeting booking",
    reviewBodies: [
      "devlo completely transformed our commercial approach. We generated 80 qualified meetings and €200,000 in signed business.",
      "Charles is one of the most creative sales experts I know. He helped us secure qualified meetings across the DACH region.",
    ],
  },
  de: {
    organizationDescription:
      "Schweizer Agentur für B2B-Akquise und GTM Engineering mit Fokus auf Leadgenerierung, mehrkanalige Akquise, Kaufsignale, Clay Enrichment und qualifizierte Termine. Seit 2020 wurden mehr als 1.000 Kampagnen gestartet.",
    serviceName: "Ausgelagerte B2B-Akquise und GTM Engineering",
    serviceType: "B2B-Leadgenerierung, mehrkanalige Akquise, signalbasierte Akquise und qualifizierte Termine",
    reviewBodies: [
      "devlo hat unseren Vertriebsansatz komplett verändert. Wir haben 80 qualifizierte Termine und 200.000 € an Neuumsatz erzielt.",
      "Charles ist einer der kreativsten Vertriebsexperten, die ich kenne. Er hat uns geholfen, qualifizierte Termine in der DACH-Region zu gewinnen.",
    ],
  },
  nl: {
    organizationDescription:
      "Zwitsers bureau voor B2B-prospectie en GTM engineering voor leadgeneratie, multichannel prospectie, koopsignalen, Clay enrichment en gekwalificeerde afspraken. Sinds 2020 werden meer dan 1.000 campagnes gelanceerd.",
    serviceName: "Uitbestede B2B prospectie en GTM engineering",
    serviceType: "B2B-leadgeneratie, multichannel prospectie, signal-based outbound en gekwalificeerde afspraken",
    reviewBodies: [
      "devlo heeft onze commerciële aanpak volledig veranderd. We genereerden 80 gekwalificeerde afspraken en 200.000 euro aan nieuwe omzet.",
      "Charles is een van de meest creatieve verkoopexperts die ik ken. Hij hielp ons om gekwalificeerde afspraken te verkrijgen in de DACH-regio.",
    ],
  },
};

function buildLayoutSchemas(locale: LayoutLocale) {
  const copy = schemaCopyByLocale[locale];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "devlo",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/devlo-logo.webp`,
    description: copy.organizationDescription,
    foundingDate: "2020",
    sameAs: [
      "https://www.linkedin.com/company/devlo-connects-you-with-more-prospects/",
    ],
    areaServed: [
      { "@type": "Country", name: "Switzerland" },
      { "@type": "Country", name: "Belgium" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Luxembourg" },
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
    ],
    knowsAbout: [
      "GTM engineering",
      "AI outbound",
      "B2B lead generation",
      "signal-based outbound",
      "Clay enrichment",
      "cold email",
      "LinkedIn outreach",
      "cold calling",
      "CRM operations",
      "sales deliverability",
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
        availableLanguage: ["French", "German", "English", "Dutch"],
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

  const swissLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "devlo",
    url: siteConfig.url,
    image: `${siteConfig.url}/images/devlo-logo.webp`,
    telephone: "+41-79-758-64-03",
    email: "emea@devlo.ch",
    description: copy.organizationDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ruelle des Dolles 1",
      addressLocality: "Rivaz",
      postalCode: "1071",
      addressRegion: "Vaud",
      addressCountry: "CH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.4744,
      longitude: 6.8432,
    },
    areaServed: [
      { "@type": "Country", name: "Switzerland" },
      { "@type": "Country", name: "Belgium" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Luxembourg" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/devlo-connects-you-with-more-prospects/",
    ],
  };

  const usLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "devlo LLC",
    url: siteConfig.url,
    image: `${siteConfig.url}/images/devlo-logo.webp`,
    description: copy.organizationDescription,
    telephone: "+1-234-201-8019",
    email: "americas@devlo.ch",
    address: {
      "@type": "PostalAddress",
      streetAddress: "500 4TH ST NW SUITE 102 #1591",
      addressLocality: "Albuquerque",
      addressRegion: "NM",
      postalCode: "87102",
      addressCountry: "US",
    },
    areaServed: ["US", "CA"],
    parentOrganization: {
      "@type": "Organization",
      name: "devlo",
      url: siteConfig.url,
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.serviceName,
    serviceType: copy.serviceType,
    provider: {
      "@type": "Organization",
      name: "devlo",
      url: siteConfig.url,
    },
    areaServed: ["CH", "BE", "FR", "DE", "LU", "US", "CA"],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteConfig.url}/consultation`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "14",
      reviewCount: "14",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Jérôme Tailleur" },
        reviewBody: copy.reviewBodies[0],
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Raphael Haut" },
        reviewBody: copy.reviewBodies[1],
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
    ],
  };

  return [organizationSchema, swissLocalBusinessSchema, usLocalBusinessSchema, serviceSchema];
}

const skipToContentByLocale: Record<LayoutLocale, string> = {
  fr: "Aller au contenu",
  en: "Skip to content",
  de: "Zum Inhalt springen",
  nl: "Naar de inhoud springen",
};

export function RootLayoutShell({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: LayoutLocale;
}>) {
  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${plusJakartaSans.variable} min-h-screen overflow-x-hidden bg-canvas font-sans text-ink antialiased`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
          `}
        </Script>
        {enableLemlistVisitorTracking ? (
          <Script
            id="lemlist-website-visitors"
            src={`https://app.lemlist.com/api/visitors/tracking?k=${encodeURIComponent(lemlistVisitorTrackingKey)}&t=${encodeURIComponent(lemlistTeamId)}`}
            strategy="afterInteractive"
          />
        ) : null}
        <PaidAttributionTracker />
        <JsonLd schema={buildLayoutSchemas(locale)} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-soft focus:bg-paper focus:px-4 focus:py-2 focus:text-sm"
        >
          {skipToContentByLocale[locale]}
        </a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
