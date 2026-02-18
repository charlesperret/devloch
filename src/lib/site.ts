export const siteConfig = {
  name: "devlo",
  description:
    "Prospection B2B et generation de rendez-vous qualifies pour equipes commerciales.",
  url: "https://devlo.ch",
  locale: "fr-CH",
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Agence", href: "/formation-prospection-b2b" },
    { label: "Academie", href: "/academy-notre-appel" },
    { label: "Resultats", href: "/resultats" },
    { label: "Blog", href: "/blog" },
  ],
  footer: {
    legal: [
      { label: "Politique de confidentialite", href: "/politique-confidentialite" },
      { label: "Conditions academie", href: "/conditions-utilisation-academie" },
      { label: "Terms", href: "/terms" },
    ],
    contact: [
      { label: "+41 79 756 84 03", href: "tel:+41797568403" },
      { label: "email@devlo.ch", href: "mailto:email@devlo.ch" },
    ],
  },
} as const;
