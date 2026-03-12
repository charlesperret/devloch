import type { SupportedLocale } from "@/lib/i18n/slug-map";

type AcademySupplement = {
  whyTraining: {
    title: string;
    paragraphs: string[];
    cta1: { label: string; href: string };
    cta2: { label: string; href: string };
  };
  chaptersTitle: string;
  chapters: Array<{
    number: string;
    title: string;
    description: string;
    link: { label: string; href: string };
  }>;
  personas: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    note: string;
  };
};

export const academySupplementContent: Record<SupportedLocale, AcademySupplement> = {
  fr: {
    whyTraining: {
      title: "Pourquoi une formation prospection commerciale B2B ?",
      paragraphs: [
        "Les formations classiques en prospection B2B coûtent entre 1'000€ et 2'000€ et s'étalent sur plusieurs semaines. Elles sont souvent théoriques et déconnectées des outils que vous utilisez au quotidien.",
        "L'Outbound Academy de devlo est différente : 50 tutoriels vidéo ultra-concrets, basés sur +1'000 campagnes réelles lancées depuis 2020. Chaque chapitre vous montre exactement quoi faire, avec quels outils, et avec quels résultats attendre.",
        "Accès à vie. Pas de limite de durée. Mises à jour régulières. Et si vous voulez aller plus loin, notre équipe peut prendre le relais et exécuter pour vous.",
      ],
      cta1: { label: "Commencer gratuitement →", href: "https://academy.devlo.ch/invitation?code=GE7JA6" },
      cta2: { label: "Parler à un expert", href: "/consultation" },
    },
    chaptersTitle: "Formation prospection commerciale : structure complète",
    chapters: [
      {
        number: "01",
        title: "Ciblage de précision et ICP",
        description:
          "Définissez votre Profil Client Idéal. Sélectionnez les secteurs, tailles d'entreprise et décideurs qui génèrent le plus de rendez-vous.",
        link: { label: "Voir comment nos experts ciblent pour vous", href: "/services" },
      },
      {
        number: "02",
        title: "Extraction de données B2B",
        description:
          "Construisez des listes de prospects qualifiés avec Sales Navigator, Apollo et les bases de données B2B.",
        link: { label: "Générer des leads qualifiés", href: "/services/generation-leads" },
      },
      {
        number: "03",
        title: "Enrichissement et vérification",
        description:
          "Enrichissez vos données avec Clay, vérifiez les emails, et préparez des campagnes à haute délivrabilité.",
        link: { label: "Enrichir vos données", href: "/services/enrichissement-clay" },
      },
      {
        number: "04",
        title: "Cold email B2B",
        description:
          "Rédigez des séquences email qui obtiennent 45%+ de taux d'ouverture. Templates, copywriting et délivrabilité.",
        link: { label: "Externaliser votre cold email", href: "/services/cold-email" },
      },
      {
        number: "05",
        title: "Prospection LinkedIn",
        description:
          "Automatisez votre prospection LinkedIn : invitations personnalisées, messages et suivi multicanal.",
        link: { label: "Laisser nos experts gérer LinkedIn", href: "/services/linkedin-outreach" },
      },
      {
        number: "06",
        title: "Téléprospection B2B",
        description:
          "Techniques d'appel à froid : scripts, objection handling, et qualification de rendez-vous.",
        link: { label: "Téléprospection externalisée", href: "/services/cold-calling" },
      },
      {
        number: "07",
        title: "Séquences multicanales",
        description:
          "Combinez email, LinkedIn et téléphone dans des séquences automatisées pour maximiser votre taux de réponse.",
        link: { label: "Discutez de votre stratégie multicanale", href: "/consultation" },
      },
    ],
    personas: {
      title: "Qui devrait suivre cette formation ?",
      items: [
        {
          icon: "🎯",
          title: "SDR — Sales Development Representatives",
          description:
            "Vous démarrez en prospection B2B ? Apprenez les fondamentaux du cold outreach et de la qualification de leads.",
        },
        {
          icon: "🚀",
          title: "BDR — Business Development Representatives",
          description:
            "Vous cherchez à scaler votre génération de leads ? Maîtrisez les outils et techniques avancées.",
        },
        {
          icon: "💼",
          title: "Entrepreneurs B2B",
          description:
            "Vous lancez un nouveau produit ou marché ? Construisez votre machine de prospection de zéro, sans recruter.",
        },
        {
          icon: "📊",
          title: "Directeurs commerciaux",
          description:
            "Vous encadrez une équipe de vente ? Formez vos équipes avec une méthodologie éprouvée sur +1'000 campagnes.",
        },
      ],
      note: "Aucun prérequis nécessaire.",
    },
  },
  en: {
    whyTraining: {
      title: "Why invest in B2B sales prospecting training?",
      paragraphs: [
        "Traditional B2B prospecting courses usually cost between €1,000 and €2,000 and stretch over several weeks. They are often too theoretical and disconnected from the tools you actually use every day.",
        "devlo's Outbound Academy is different: 50 highly practical video tutorials based on more than 1,000 real campaigns launched since 2020. Every chapter shows you exactly what to do, which tools to use, and what results to expect.",
        "Lifetime access. No time limit. Regular updates. And if you want to go further, our team can step in and execute for you.",
      ],
      cta1: { label: "Start for free →", href: "https://academy.devlo.ch/invitation?code=GE7JA6" },
      cta2: { label: "Talk to an expert", href: "/consultation" },
    },
    chaptersTitle: "B2B prospecting training: full program structure",
    chapters: [
      {
        number: "01",
        title: "Precision targeting and ICP",
        description:
          "Define your Ideal Customer Profile. Select the industries, company sizes, and decision-makers that generate the most meetings.",
        link: { label: "See how our experts handle targeting for you", href: "/services" },
      },
      {
        number: "02",
        title: "B2B data extraction",
        description:
          "Build qualified prospect lists with Sales Navigator, Apollo, and specialized B2B databases.",
        link: { label: "Generate qualified leads", href: "/services/generation-leads" },
      },
      {
        number: "03",
        title: "Enrichment and verification",
        description:
          "Enrich your data with Clay, verify email addresses, and prepare campaigns with strong deliverability.",
        link: { label: "Enrich your data", href: "/services/enrichissement-clay" },
      },
      {
        number: "04",
        title: "B2B cold email",
        description:
          "Write email sequences that consistently reach 45%+ open rates. Templates, copywriting, and deliverability included.",
        link: { label: "Outsource your cold email", href: "/services/cold-email" },
      },
      {
        number: "05",
        title: "LinkedIn outreach",
        description:
          "Automate your LinkedIn prospecting with personalized invites, messages, and multichannel follow-up.",
        link: { label: "Let our experts run LinkedIn for you", href: "/services/linkedin-outreach" },
      },
      {
        number: "06",
        title: "B2B cold calling",
        description:
          "Master cold calling techniques: scripts, objection handling, and qualified meeting booking.",
        link: { label: "Outsourced cold calling", href: "/services/cold-calling" },
      },
      {
        number: "07",
        title: "Multichannel sequences",
        description:
          "Combine email, LinkedIn, and phone into automated sequences to maximize your reply rate.",
        link: { label: "Discuss your multichannel strategy", href: "/consultation" },
      },
    ],
    personas: {
      title: "Who should take this training?",
      items: [
        {
          icon: "🎯",
          title: "SDRs — Sales Development Representatives",
          description:
            "New to B2B prospecting? Learn the foundations of cold outreach and lead qualification.",
        },
        {
          icon: "🚀",
          title: "BDRs — Business Development Representatives",
          description:
            "Looking to scale your lead generation? Master advanced tools and outreach techniques.",
        },
        {
          icon: "💼",
          title: "B2B founders",
          description:
            "Launching a new product or entering a new market? Build your prospecting engine from scratch without hiring first.",
        },
        {
          icon: "📊",
          title: "Salesleaders",
          description:
            "Leading a sales team? Train your team with a methodology proven across 1,000+ campaigns.",
        },
      ],
      note: "No prerequisites required.",
    },
  },
  de: {
    whyTraining: {
      title: "Warum in eine B2B-Vertriebsakquise-Schulung investieren?",
      paragraphs: [
        "Klassische B2B-Akquise-Schulungen kosten meist zwischen 1.000 € und 2.000 € und ziehen sich über mehrere Wochen. Sie sind oft zu theoretisch und weit weg von den Tools, die Sie im Alltag tatsächlich nutzen.",
        "Die Outbound Academy von devlo ist anders: 50 sehr konkrete Video-Tutorials, basierend auf mehr als 1.000 realen Kampagnen seit 2020. Jedes Kapitel zeigt Ihnen genau, was Sie tun müssen, welche Tools Sie einsetzen und welche Ergebnisse Sie erwarten können.",
        "Lebenslanger Zugang. Keine Laufzeitbegrenzung. Regelmäßige Updates. Und wenn Sie weiter gehen möchten, kann unser Team die Umsetzung für Sie übernehmen.",
      ],
      cta1: { label: "Kostenlos starten →", href: "https://academy.devlo.ch/invitation?code=GE7JA6" },
      cta2: { label: "Mit einem Experten sprechen", href: "/consultation" },
    },
    chaptersTitle: "B2B-Akquise-Training: vollständige Programmstruktur",
    chapters: [
      {
        number: "01",
        title: "Präzises Targeting und ICP",
        description:
          "Definieren Sie Ihr Ideal Customer Profile. Wählen Sie Branchen, Unternehmensgrößen und Entscheider aus, die die meisten Termine erzeugen.",
        link: { label: "Sehen Sie, wie unsere Experten Ihr Targeting aufsetzen", href: "/services" },
      },
      {
        number: "02",
        title: "B2B-Datenextraktion",
        description:
          "Erstellen Sie qualifizierte Prospect-Listen mit Sales Navigator, Apollo und spezialisierten B2B-Datenbanken.",
        link: { label: "Qualifizierte Leads generieren", href: "/services/generation-leads" },
      },
      {
        number: "03",
        title: "Anreicherung und Verifizierung",
        description:
          "Reichern Sie Ihre Daten mit Clay an, verifizieren Sie E-Mail-Adressen und bereiten Sie Kampagnen mit hoher Zustellbarkeit vor.",
        link: { label: "Ihre Daten anreichern", href: "/services/enrichissement-clay" },
      },
      {
        number: "04",
        title: "B2B-Cold-E-Mail",
        description:
          "Schreiben Sie E-Mail-Sequenzen, die konstant Öffnungsraten von 45 %+ erreichen. Vorlagen, Copywriting und Zustellbarkeit inklusive.",
        link: { label: "Ihr Cold Email outsourcen", href: "/services/cold-email" },
      },
      {
        number: "05",
        title: "LinkedIn-Prospecting",
        description:
          "Automatisieren Sie Ihre LinkedIn-Akquise mit personalisierten Einladungen, Nachrichten und multikanaligem Follow-up.",
        link: { label: "Unsere Experten Ihr LinkedIn steuern lassen", href: "/services/linkedin-outreach" },
      },
      {
        number: "06",
        title: "B2B-Telefonakquise",
        description:
          "Meistern Sie Kaltakquise am Telefon: Skripte, Einwandbehandlung und die Vereinbarung qualifizierter Termine.",
        link: { label: "Telefonakquise auslagern", href: "/services/cold-calling" },
      },
      {
        number: "07",
        title: "Multikanal-Sequenzen",
        description:
          "Kombinieren Sie E-Mail, LinkedIn und Telefon in automatisierten Sequenzen, um Ihre Antwortrate zu maximieren.",
        link: { label: "Ihre Multikanal-Strategie besprechen", href: "/consultation" },
      },
    ],
    personas: {
      title: "Für wen ist dieses Training gedacht?",
      items: [
        {
          icon: "🎯",
          title: "SDRs — Sales Development Representatives",
          description:
            "Neu in der B2B-Akquise? Lernen Sie die Grundlagen von Cold Outreach und Lead-Qualifizierung.",
        },
        {
          icon: "🚀",
          title: "BDRs — Business Development Representatives",
          description:
            "Sie möchten Ihre Lead-Generierung skalieren? Beherrschen Sie fortgeschrittene Tools und Outreach-Techniken.",
        },
        {
          icon: "💼",
          title: "B2B-Gründer:innen",
          description:
            "Sie launchen ein neues Produkt oder erschließen einen neuen Markt? Bauen Sie Ihre Prospecting-Maschine von Grund auf auf, ohne zuerst einzustellen.",
        },
        {
          icon: "📊",
          title: "Vertriebsleiter:innen",
          description:
            "Sie führen ein Vertriebsteam? Schulen Sie Ihr Team mit einer Methodik, die in mehr als 1.000 Kampagnen bewiesen wurde.",
        },
      ],
      note: "Keine Vorkenntnisse erforderlich.",
    },
  },
  nl: {
    whyTraining: {
      title: "Waarom investeren in B2B-sales prospectietraining?",
      paragraphs: [
        "Klassieke B2B-prospectietrainingen kosten meestal tussen €1.000 en €2.000 en lopen over meerdere weken. Ze zijn vaak te theoretisch en staan te ver af van de tools die je dagelijks echt gebruikt.",
        "De Outbound Academy van devlo is anders: 50 zeer praktische videotutorials, gebaseerd op meer dan 1.000 echte campagnes sinds 2020. Elk hoofdstuk laat precies zien wat je moet doen, welke tools je nodig hebt en welke resultaten je mag verwachten.",
        "Levenslange toegang. Geen tijdslimiet. Regelmatige updates. En als je verder wilt gaan, kan ons team de uitvoering voor je overnemen.",
      ],
      cta1: { label: "Gratis starten →", href: "https://academy.devlo.ch/invitation?code=GE7JA6" },
      cta2: { label: "Praat met een expert", href: "/consultation" },
    },
    chaptersTitle: "B2B-prospectietraining: volledige programmastructuur",
    chapters: [
      {
        number: "01",
        title: "Nauwkeurige targeting en ICP",
        description:
          "Definieer je Ideal Customer Profile. Selecteer de sectoren, bedrijfsgroottes en beslissers die de meeste afspraken opleveren.",
        link: { label: "Ontdek hoe onze experts je targeting opzetten", href: "/services" },
      },
      {
        number: "02",
        title: "B2B-data-extractie",
        description:
          "Bouw gekwalificeerde prospectlijsten met Sales Navigator, Apollo en gespecialiseerde B2B-databases.",
        link: { label: "Gekwalificeerde leads genereren", href: "/services/generation-leads" },
      },
      {
        number: "03",
        title: "Verrijking en verificatie",
        description:
          "Verrijk je data met Clay, verifieer e-mailadressen en bereid campagnes met hoge deliverability voor.",
        link: { label: "Je data verrijken", href: "/services/enrichissement-clay" },
      },
      {
        number: "04",
        title: "B2B cold email",
        description:
          "Schrijf e-mailsequenties die consequent open rates van 45%+ halen. Templates, copywriting en deliverability inbegrepen.",
        link: { label: "Je cold email uitbesteden", href: "/services/cold-email" },
      },
      {
        number: "05",
        title: "LinkedIn outreach",
        description:
          "Automatiseer je LinkedIn-prospectie met gepersonaliseerde uitnodigingen, berichten en multichannel follow-up.",
        link: { label: "Laat onze experts LinkedIn beheren", href: "/services/linkedin-outreach" },
      },
      {
        number: "06",
        title: "B2B cold calling",
        description:
          "Beheers cold calling-technieken: scripts, bezwaren behandelen en gekwalificeerde afspraken boeken.",
        link: { label: "Uitbestede cold calling", href: "/services/cold-calling" },
      },
      {
        number: "07",
        title: "Multichannel-sequenties",
        description:
          "Combineer e-mail, LinkedIn en telefoon in geautomatiseerde sequenties om je antwoordratio te maximaliseren.",
        link: { label: "Bespreek je multichannelstrategie", href: "/consultation" },
      },
    ],
    personas: {
      title: "Voor wie is deze training bedoeld?",
      items: [
        {
          icon: "🎯",
          title: "SDR's — Sales Development Representatives",
          description:
            "Nieuw in B2B-prospectie? Leer de basis van cold outreach en leadkwalificatie.",
        },
        {
          icon: "🚀",
          title: "BDR's — Business Development Representatives",
          description:
            "Wil je je leadgeneratie opschalen? Beheers geavanceerde tools en outreach-technieken.",
        },
        {
          icon: "💼",
          title: "B2B-ondernemers",
          description:
            "Lanceer je een nieuw product of een nieuwe markt? Bouw je prospectiemachine vanaf nul, zonder eerst aan te werven.",
        },
        {
          icon: "📊",
          title: "Salesleaders",
          description:
            "Leid je een salesteam? Train je team met een methodologie die is bewezen in meer dan 1.000 campagnes.",
        },
      ],
      note: "Geen voorkennis vereist.",
    },
  },
};
