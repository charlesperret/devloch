import type { LegalPageContent } from "@/components/pages/legal-page";
import type { SupportedLocale } from "@/lib/i18n/slug-map";

type LegalPageKey = "privacy" | "terms";

type LegalBundle = Record<
  LegalPageKey,
  LegalPageContent & {
    seo: {
      title: string;
      description: string;
    };
  }
>;

const addressesByLocale: Record<SupportedLocale, LegalPageContent["addresses"]> = {
  fr: [
    {
      title: "Adresse suisse",
      lines: ["devlo", "Ruelle des Dolles 1", "1071 Rivaz, Vaud", "Suisse"],
    },
    {
      title: "Adresse US",
      lines: ["devlo LLC", "500 4TH ST NW SUITE 102 #1591", "Albuquerque, NM 87102", "USA"],
    },
  ],
  en: [
    {
      title: "Swiss address",
      lines: ["devlo", "Ruelle des Dolles 1", "1071 Rivaz, Vaud", "Switzerland"],
    },
    {
      title: "US address",
      lines: ["devlo LLC", "500 4TH ST NW SUITE 102 #1591", "Albuquerque, NM 87102", "USA"],
    },
  ],
  de: [
    {
      title: "Schweizer Adresse",
      lines: ["devlo", "Ruelle des Dolles 1", "1071 Rivaz, Waadt", "Schweiz"],
    },
    {
      title: "US-Adresse",
      lines: ["devlo LLC", "500 4TH ST NW SUITE 102 #1591", "Albuquerque, NM 87102", "USA"],
    },
  ],
  nl: [
    {
      title: "Zwitsers adres",
      lines: ["devlo", "Ruelle des Dolles 1", "1071 Rivaz, Vaud", "Zwitserland"],
    },
    {
      title: "Adres in de VS",
      lines: ["devlo LLC", "500 4TH ST NW SUITE 102 #1591", "Albuquerque, NM 87102", "USA"],
    },
  ],
};

export const legalPages: Record<SupportedLocale, LegalBundle> = {
  fr: {
    privacy: {
      title: "Politique de confidentialité",
      description:
        "Cette politique explique quelles données devlo collecte, pourquoi elles sont utilisées, comment elles sont protégées et avec quels prestataires elles peuvent être partagées.",
      lastUpdated: "Dernière mise à jour : 7 mai 2026",
      seo: {
        title: "Politique de confidentialité",
        description:
          "Données collectées, Google Ads, HubSpot, tiers, sécurité, conservation et droits utilisateurs: consultez la politique de confidentialité devlo.",
      },
      contact: { title: "Contact confidentialité", email: "privacy@devlo.ch", phone: "+41 79 758 64 03" },
      addresses: addressesByLocale.fr,
      sections: [
        {
          heading: "1. Qui sommes-nous ?",
          paragraphs: [
            "devlo est une agence de prospection commerciale B2B qui aide des entreprises à définir leurs marchés cibles, construire des listes de comptes, lancer des campagnes outbound et suivre les rendez-vous qualifiés générés.",
            "Cette politique couvre le site devlo.ch, les miroirs paid devlosales.com et devlo.fr, les formulaires de contact, les formulaires de consultation, les workflows internes d'acquisition payante et les services B2B fournis à nos clients.",
          ],
        },
        {
          heading: "2. Données que nous collectons",
          bullets: [
            "Données de formulaire : nom, prénom, email, téléphone, entreprise, rôle, pays, taille d'entreprise, message et informations de qualification.",
            "Données techniques : adresse IP, user agent, appareil, navigateur, pages consultées, horodatages, URL de provenance et préférences de consentement.",
            "Données d'attribution publicitaire : UTM, gclid, gbraid, wbraid, page d'arrivée, URL courante, domaine paid, referrer, session ID et premier horodatage.",
            "Données client : ICP, critères de ciblage, comptes cibles, contacts professionnels B2B, messages de campagne, résultats, réponses, rendez-vous et données CRM strictement nécessaires au service.",
            "Données Google Ads API pour nos propres comptes : campagnes, groupes d'annonces, mots clés, annonces, budgets, conversions, rapports et identifiants de clic nécessaires à la mesure.",
          ],
        },
        {
          heading: "3. Pourquoi nous utilisons ces données",
          bullets: [
            "Répondre aux demandes entrantes et préparer les consultations.",
            "Fournir nos services de prospection B2B, qualification, reporting et AI Sales Ops.",
            "Mesurer la performance de nos campagnes marketing, notamment via Google Ads, Google Analytics et HubSpot.",
            "Créer, valider, auditer et mesurer nos propres campagnes Google Ads via un workflow interne contrôlé.",
            "Importer des conversions hors ligne dans Google Ads lorsque des identifiants de clic comme gclid, gbraid ou wbraid existent.",
            "Sécuriser le site, prévenir les abus, maintenir les systèmes et respecter nos obligations légales.",
          ],
        },
        {
          heading: "4. Partage avec des tiers",
          paragraphs: [
            "Nous ne vendons pas les données personnelles. Nous partageons des données uniquement avec des prestataires nécessaires à l'exploitation du site, aux services clients, à la mesure ou à la conformité.",
          ],
          bullets: [
            "Google Ads, Google Analytics et Google Tag Manager pour la mesure publicitaire, le consentement et l'attribution.",
            "HubSpot pour les formulaires, le CRM, les statuts de qualification et le suivi commercial.",
            "TidyCal pour la réservation de rendez-vous.",
            "Vercel pour l'hébergement du site.",
            "Google Workspace, Slack et outils opérationnels internes pour la collaboration et le support.",
            "Lemlist, Clay, LinkedIn Sales Navigator ou fournisseurs comparables lorsque ces outils sont nécessaires à une campagne client contractée.",
            "Conseillers professionnels, autorités ou tribunaux lorsque la loi l'exige.",
          ],
        },
        {
          heading: "5. Google Ads API et données Google",
          paragraphs: [
            "Le workflow Google Ads API de devlo est destiné à gérer et mesurer les propres comptes publicitaires de devlo. Il n'est pas une plateforme self-service tierce et ne revend pas l'accès à l'API Google Ads.",
            "Nous demandons uniquement les accès nécessaires aux fonctions prévues : gestion de campagnes, validation, reporting et import de conversions hors ligne. Les conversions améliorées, Customer Match ou autres usages de données utilisateur sensibles ne sont pas activés au lancement sans revue séparée de confidentialité et de conformité.",
            "Lorsque nous traitons des données reçues via les API Google, nous respectons la Google API Services User Data Policy, y compris les exigences Limited Use : https://developers.google.com/terms/api-services-user-data-policy. Ces données ne sont utilisées que pour fournir ou améliorer les fonctionnalités autorisées, sécuriser le service, respecter la loi et les politiques Google applicables.",
          ],
        },
        {
          heading: "6. Protection et conservation",
          bullets: [
            "Le site utilise HTTPS/TLS, des contrôles d'accès, des secrets stockés hors du code source et des accès limités aux personnes ou systèmes qui en ont besoin. Les données sont chiffrées au repos lorsque les plateformes d'hébergement ou SaaS utilisées le fournissent.",
            "Les données de formulaires et CRM sont conservées jusqu'à 24 mois après la dernière interaction substantielle ou la fin du contrat, sauf conservation plus longue requise pour la facturation, la preuve ou la loi.",
            "Les identifiants d'attribution publicitaire et données de mesure sont conservés jusqu'à 24 mois. Les journaux techniques et de sécurité sont conservés jusqu'à 90 jours, sauf incident nécessitant une conservation plus longue.",
            "Les données de campagne client sont conservées jusqu'à 24 mois après la fin du contrat, sauf accord contractuel différent, obligation légale ou besoin raisonnable de preuve.",
            "Les demandes de suppression vérifiées sont traitées dans un délai cible de 30 jours lorsque la loi et les obligations contractuelles le permettent.",
          ],
        },
        {
          heading: "7. Vos droits",
          paragraphs: [
            "Selon votre localisation, vous pouvez demander l'accès, la correction, la suppression, la limitation, l'opposition ou la portabilité de vos données. Vous pouvez aussi retirer votre consentement aux cookies et communications marketing lorsque ce consentement est applicable.",
            "Pour exercer ces droits, contactez privacy@devlo.ch. Nous pouvons demander des informations raisonnables pour vérifier votre identité avant de traiter la demande.",
          ],
        },
        {
          heading: "8. Transferts internationaux et enfants",
          paragraphs: [
            "Nos prestataires peuvent traiter des données en Suisse, dans l'Union européenne, au Royaume-Uni, aux États-Unis ou dans d'autres pays avec des garanties contractuelles adaptées.",
            "Nos services sont destinés aux entreprises B2B et ne sont pas conçus pour les enfants.",
          ],
        },
      ],
    },
    terms: {
      title: "Conditions générales d'utilisation",
      description:
        "Ces conditions définissent les règles d'utilisation du site devlo.ch, des services devlo, des données confiées par les clients et des workflows internes d'acquisition payante.",
      lastUpdated: "Dernière mise à jour : 7 mai 2026",
      seo: {
        title: "Conditions générales d'utilisation",
        description:
          "Règles d'utilisation, responsabilités clients, données, Google Ads API, restrictions et droit applicable: consultez les conditions devlo.",
      },
      contact: { title: "Contact légal", email: "legal@devlo.ch", phone: "+41 79 758 64 03" },
      addresses: addressesByLocale.fr,
      sections: [
        {
          heading: "1. Acceptation des conditions",
          paragraphs: [
            "En accédant au site devlo.ch, devlosales.com, devlo.fr ou à nos services, vous acceptez ces conditions, notre Politique de confidentialité et les lois applicables. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser le site ou les services.",
            "Sauf si un contrat client désigne une autre entité, les services sont exploités par devlo et devlo LLC aux adresses indiquées sur cette page.",
          ],
        },
        {
          heading: "2. Services devlo",
          paragraphs: [
            "devlo fournit des services B2B de prospection commerciale, génération de leads, qualification, prise de rendez-vous, reporting, AI Sales Ops et conseil lié à l'acquisition commerciale.",
            "Les prestations, livrables, budgets, canaux et responsabilités spécifiques sont définis dans les contrats, propositions, bons de commande ou accords écrits conclus avec chaque client.",
          ],
        },
        {
          heading: "3. Responsabilités des utilisateurs et clients",
          bullets: [
            "Fournir des informations exactes, actuelles et autorisées.",
            "Disposer d'une base légale ou permission suffisante pour les données transmises à devlo.",
            "Ne pas soumettre de données sensibles, illégales ou inutiles au service sans accord écrit préalable.",
            "Valider les marchés cibles, messages, offres, exclusions, règles CRM et contenus de campagne lorsque cela est demandé.",
            "Respecter les conditions de Google, HubSpot, LinkedIn, Lemlist, Clay et des autres plateformes utilisées.",
            "Protéger leurs accès, mots de passe et comptes tiers, et signaler rapidement tout incident de sécurité.",
          ],
        },
        {
          heading: "4. Utilisation des données",
          paragraphs: [
            "Les données confiées à devlo peuvent être utilisées pour fournir les services, gérer les campagnes, préparer les rendez-vous, mesurer les performances, produire les rapports, assurer le support, facturer, sécuriser les systèmes et respecter nos obligations légales.",
            "Les détails de collecte, partage, conservation et droits utilisateurs sont décrits dans notre Politique de confidentialité.",
          ],
        },
        {
          heading: "5. Google Ads API et outils internes",
          paragraphs: [
            "Le workflow Google Ads API de devlo sert à gérer, valider, mesurer et auditer les propres campagnes Google Ads de devlo, notamment la création de campagnes en pause, la validation de paramètres, le reporting et l'import de conversions hors ligne depuis notre CRM.",
            "Sauf accord écrit conforme aux politiques applicables, ce workflow n'est pas une plateforme self-service pour des utilisateurs externes et ne revend, ne sous-licencie ni ne transfère l'accès à l'API Google Ads.",
            "Les utilisateurs et clients ne doivent pas utiliser les services devlo pour contourner les politiques Google Ads, les règles de consentement, les obligations de confidentialité ou la Google API Services User Data Policy.",
          ],
        },
        {
          heading: "6. Usages interdits",
          bullets: [
            "Utiliser le site ou les services pour une activité illégale, trompeuse, abusive, discriminatoire ou non autorisée.",
            "Envoyer ou faciliter des messages commerciaux perturbateurs, spam, phishing, malware ou campagnes non conformes.",
            "Tenter de contourner les limites, contrôles de sécurité, budgets, consentements ou politiques des plateformes tierces.",
            "Revendre, sous-licencier ou exposer des accès API sans autorisation.",
            "Décompiler, copier ou détourner les logiciels, contenus, méthodes ou livrables de devlo.",
          ],
        },
        {
          heading: "7. Limites et disponibilité",
          paragraphs: [
            "devlo ne garantit pas l'acceptation d'une annonce, un classement, un volume de leads, un taux de conversion, un chiffre d'affaires ou une décision de plateforme tierce. Les résultats dépendent notamment de l'offre, du marché, des données, du budget, de la saisonnalité et de la capacité commerciale du client.",
            "Nous pouvons suspendre l'accès ou une prestation si un risque juridique, de sécurité, de conformité, de paiement ou d'abus est identifié.",
          ],
        },
        {
          heading: "8. Propriété intellectuelle et confidentialité",
          paragraphs: [
            "Les contenus, méthodes, textes, logiciels, pages, rapports, structures de campagne et documents produits par devlo restent protégés par le droit d'auteur, le secret commercial et les autres droits applicables, sauf accord écrit contraire.",
            "Chaque partie doit protéger les informations confidentielles reçues de l'autre et les utiliser uniquement pour l'objectif contractuel prévu.",
          ],
        },
        {
          heading: "9. Droit applicable",
          paragraphs: [
            "Ces conditions sont régies par le droit suisse, sous réserve des règles impératives applicables. Les tribunaux compétents sont ceux de Suisse, sauf obligation légale contraire.",
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy Policy",
      description:
        "This policy explains what data devlo collects, why it is used, how it is protected, and which service providers may receive it.",
      lastUpdated: "Last updated: May 20, 2026",
      seo: {
        title: "Privacy Policy",
        description:
          "Data collected, Google Ads, HubSpot, third parties, security, retention and user rights: read devlo's privacy policy.",
      },
      contact: { title: "Privacy contact", email: "privacy@devlo.ch", phone: "+41 79 758 64 03" },
      addresses: addressesByLocale.en,
      sections: [
        {
          heading: "1. Who we are",
          paragraphs: [
            "devlo is a B2B sales prospecting agency that helps companies define target markets, build account lists, run outbound campaigns, and track qualified meetings.",
            "This policy covers devlo.ch, the paid mirrors devlosales.com and devlo.fr, contact forms, consultation forms, internal paid acquisition workflows, and B2B services provided to clients.",
          ],
        },
        {
          heading: "2. Data we collect",
          bullets: [
            "Form data: first name, last name, email, phone, company, role, country, company size, message, and qualification information.",
            "Technical data: IP address, user agent, device, browser, pages viewed, timestamps, referrer URL, and consent preferences.",
            "Advertising attribution data: UTMs, gclid, gbraid, wbraid, landing page, current URL, paid host, referrer, session ID, and first-seen timestamp.",
            "Client data: ICP criteria, targeting instructions, target accounts, B2B business contacts, campaign messages, results, replies, meetings, and CRM data required to deliver the service.",
            "Google Ads API data for our own accounts: campaigns, ad groups, keywords, ads, budgets, conversions, reports, and click identifiers required for measurement.",
          ],
        },
        {
          heading: "3. Why we use data",
          bullets: [
            "To answer inbound requests and prepare consultations.",
            "To provide B2B prospecting, qualification, reporting, and AI Sales Ops services.",
            "To measure marketing performance through Google Ads, Google Analytics, and HubSpot.",
            "To create, validate, audit, and measure devlo's own Google Ads campaigns through an internal controlled workflow.",
            "To import offline conversions into Google Ads when click identifiers such as gclid, gbraid, or wbraid are available.",
            "To secure the site, prevent abuse, maintain systems, and comply with legal obligations.",
          ],
        },
        {
          heading: "4. Sharing with third parties",
          paragraphs: [
            "We do not sell personal data. We share data only with providers required for website operations, client services, measurement, or compliance.",
          ],
          bullets: [
            "Google Ads, Google Analytics, and Google Tag Manager for advertising measurement, consent, and attribution.",
            "HubSpot for forms, CRM, qualification statuses, and sales follow-up.",
            "TidyCal for meeting booking.",
            "Vercel for website hosting.",
            "Google Workspace, Slack, and internal operations tools for collaboration and support.",
            "Lemlist, Clay, LinkedIn Sales Navigator, or comparable providers when required for a contracted client campaign.",
            "Professional advisers, authorities, or courts when legally required.",
          ],
        },
        {
          heading: "5. Google Ads API and Google data",
          paragraphs: [
            "devlo's Google Ads API workflow is used to manage and measure devlo's own advertising accounts. It is not a third-party self-serve platform and does not resell Google Ads API access.",
            "We request only the access required for the intended functions: campaign management, validation, reporting, and offline conversion import. Enhanced conversions, Customer Match, or other sensitive user-data uses are not enabled at launch without a separate privacy and compliance review.",
            "When we process data received from Google APIs, we comply with the Google API Services User Data Policy, including the Limited Use requirements: https://developers.google.com/terms/api-services-user-data-policy. Such data is used only to provide or improve authorized features, secure the service, comply with law, and follow applicable Google policies.",
          ],
        },
        {
          heading: "6. Protection and retention",
          bullets: [
            "The site uses HTTPS/TLS, access controls, secrets stored outside source code, and least-privilege access for people and systems. Data is encrypted at rest where provided by our hosting or SaaS platforms.",
            "Form and CRM data is retained for up to 24 months after the last substantive interaction or the end of the contract, unless longer retention is required for invoicing, evidence, or law.",
            "Advertising attribution identifiers and measurement data are retained for up to 24 months. Technical and security logs are retained for up to 90 days unless an incident requires longer retention.",
            "Client campaign data is retained for up to 24 months after the contract ends, unless a different contract term, legal duty, or reasonable evidence need applies.",
            "Verified deletion requests are handled within a target period of 30 days where law and contractual duties allow.",
          ],
        },
        {
          heading: "7. Your rights",
          paragraphs: [
            "Depending on your location, you may request access, correction, deletion, restriction, objection, or portability of your data. You may also withdraw consent for cookies and marketing communications where consent applies.",
            "For individuals located in Australia, we also handle personal information with reference to the Australian Privacy Act 1988 and apply the Spam Act 2003 to commercial electronic messages where applicable.",
            "To exercise these rights, contact privacy@devlo.ch. We may request reasonable information to verify your identity before processing a request.",
          ],
        },
        {
          heading: "8. International transfers and children",
          paragraphs: [
            "Our providers may process data in Switzerland, the European Union, the United Kingdom, the United States, or other countries with appropriate contractual safeguards.",
            "Our services are intended for B2B companies and are not designed for children.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      description:
        "These terms define the rules for using devlo.ch, devlo services, client-provided data, and internal paid acquisition workflows.",
      lastUpdated: "Last updated: May 7, 2026",
      seo: {
        title: "Terms of Service",
        description:
          "Usage rules, client responsibilities, data, Google Ads API, restrictions and governing law: read devlo's Terms of Service.",
      },
      contact: { title: "Legal contact", email: "legal@devlo.ch", phone: "+41 79 758 64 03" },
      addresses: addressesByLocale.en,
      sections: [
        {
          heading: "1. Acceptance of terms",
          paragraphs: [
            "By accessing devlo.ch, devlosales.com, devlo.fr, or our services, you agree to these Terms, our Privacy Policy, and applicable laws. If you do not agree, you must not use the site or services.",
            "Unless a client agreement identifies a different contracting entity, the services are operated by devlo and devlo LLC at the addresses listed on this page.",
          ],
        },
        {
          heading: "2. devlo services",
          paragraphs: [
            "devlo provides B2B sales prospecting, lead generation, qualification, meeting booking, reporting, AI Sales Ops, and commercial acquisition consulting services.",
            "Specific deliverables, budgets, channels, and responsibilities are defined in contracts, proposals, order forms, or written agreements with each client.",
          ],
        },
        {
          heading: "3. User and client responsibilities",
          bullets: [
            "Provide accurate, current, and authorized information.",
            "Have a sufficient legal basis or permission for data provided to devlo.",
            "Do not submit sensitive, unlawful, or unnecessary data without prior written agreement.",
            "Review target markets, messages, offers, exclusions, CRM rules, and campaign content when requested.",
            "Comply with the terms of Google, HubSpot, LinkedIn, Lemlist, Clay, and other platforms used.",
            "Protect access credentials and third-party accounts, and report security incidents promptly.",
          ],
        },
        {
          heading: "4. Data use",
          paragraphs: [
            "Data provided to devlo may be used to deliver services, run campaigns, prepare meetings, measure performance, produce reports, provide support, invoice, secure systems, and comply with legal obligations.",
            "Collection, sharing, retention, and user rights are described in our Privacy Policy.",
          ],
        },
        {
          heading: "5. Google Ads API and internal tools",
          paragraphs: [
            "devlo's Google Ads API workflow is used to manage, validate, measure, and audit devlo's own Google Ads campaigns, including paused campaign creation, setting validation, reporting, and offline conversion import from our CRM.",
            "Unless a compliant written agreement says otherwise, this workflow is not a self-serve platform for external users and does not resell, sublicense, or transfer Google Ads API access.",
            "Users and clients must not use devlo services to bypass Google Ads policies, consent rules, privacy obligations, or the Google API Services User Data Policy.",
          ],
        },
        {
          heading: "6. Prohibited uses",
          bullets: [
            "Use the site or services for illegal, deceptive, abusive, discriminatory, or unauthorized activity.",
            "Send or facilitate disruptive commercial messages, spam, phishing, malware, or non-compliant campaigns.",
            "Attempt to bypass limits, security controls, budgets, consent, or third-party platform policies.",
            "Resell, sublicense, or expose API access without authorization.",
            "Decompile, copy, or misuse devlo software, content, methods, or deliverables.",
          ],
        },
        {
          heading: "7. Limits and availability",
          paragraphs: [
            "devlo does not guarantee ad approval, rankings, lead volume, conversion rates, revenue, or third-party platform decisions. Results depend on the offer, market, data, budget, seasonality, and the client's sales capacity.",
            "We may suspend access or services if a legal, security, compliance, payment, or abuse risk is identified.",
          ],
        },
        {
          heading: "8. Intellectual property and confidentiality",
          paragraphs: [
            "devlo content, methods, copy, software, pages, reports, campaign structures, and documents remain protected by copyright, trade secret, and other applicable rights unless agreed otherwise in writing.",
            "Each party must protect confidential information received from the other and use it only for the agreed contractual purpose.",
          ],
        },
        {
          heading: "9. Governing law",
          paragraphs: [
            "These Terms are governed by Swiss law, subject to mandatory applicable rules. The competent courts are in Switzerland unless the law requires otherwise.",
          ],
        },
      ],
    },
  },
  de: {
    privacy: {
      title: "Datenschutzerklärung",
      description:
        "Diese Erklärung beschreibt, welche Daten devlo erhebt, warum sie genutzt werden, wie sie geschützt werden und welche Dienstleister sie erhalten können.",
      lastUpdated: "Zuletzt aktualisiert: 7. Mai 2026",
      seo: {
        title: "Datenschutzerklärung",
        description:
          "Erhobene Daten, Google Ads, HubSpot, Drittanbieter, Sicherheit, Aufbewahrung und Nutzerrechte: lesen Sie die devlo Datenschutzerklärung.",
      },
      contact: { title: "Datenschutzkontakt", email: "privacy@devlo.ch", phone: "+41 79 758 64 03" },
      addresses: addressesByLocale.de,
      sections: [
        {
          heading: "1. Wer wir sind",
          paragraphs: [
            "devlo ist eine B2B-Agentur für Vertriebsakquise. Wir helfen Unternehmen, Zielmärkte zu definieren, Account-Listen aufzubauen, Outbound-Kampagnen durchzuführen und qualifizierte Termine zu verfolgen.",
            "Diese Erklärung gilt für devlo.ch, den Paid-Mirror devlosales.com, devlo.fr, Kontaktformulare, Beratungsformulare, interne Paid-Acquisition-Workflows und B2B-Services für Kunden.",
          ],
        },
        {
          heading: "2. Welche Daten wir erfassen",
          bullets: [
            "Formulardaten: Vorname, Nachname, E-Mail, Telefon, Unternehmen, Rolle, Land, Unternehmensgröße, Nachricht und Qualifikationsinformationen.",
            "Technische Daten: IP-Adresse, User Agent, Gerät, Browser, besuchte Seiten, Zeitstempel, Referrer-URL und Einwilligungspräferenzen.",
            "Werbe-Attributionsdaten: UTMs, gclid, gbraid, wbraid, Landingpage, aktuelle URL, Paid-Host, Referrer, Session-ID und erster Zeitstempel.",
            "Kundendaten: ICP-Kriterien, Targeting-Anweisungen, Zielaccounts, berufliche B2B-Kontakte, Kampagnenbotschaften, Ergebnisse, Antworten, Termine und für die Leistung erforderliche CRM-Daten.",
            "Google Ads API-Daten für unsere eigenen Konten: Kampagnen, Anzeigengruppen, Keywords, Anzeigen, Budgets, Conversions, Berichte und für die Messung erforderliche Klick-IDs.",
          ],
        },
        {
          heading: "3. Warum wir Daten verwenden",
          bullets: [
            "Um eingehende Anfragen zu beantworten und Beratungen vorzubereiten.",
            "Um B2B-Akquise, Qualifizierung, Reporting und AI Sales Ops bereitzustellen.",
            "Um Marketingleistung über Google Ads, Google Analytics und HubSpot zu messen.",
            "Um eigene Google Ads-Kampagnen über einen kontrollierten internen Workflow zu erstellen, zu validieren, zu prüfen und zu messen.",
            "Um Offline-Conversions in Google Ads zu importieren, wenn Klick-IDs wie gclid, gbraid oder wbraid vorhanden sind.",
            "Um die Website zu sichern, Missbrauch zu verhindern, Systeme zu warten und rechtliche Pflichten zu erfüllen.",
          ],
        },
        {
          heading: "4. Weitergabe an Dritte",
          paragraphs: ["Wir verkaufen keine personenbezogenen Daten. Wir teilen Daten nur mit Anbietern, die für Websitebetrieb, Kundenservices, Messung oder Compliance erforderlich sind."],
          bullets: [
            "Google Ads, Google Analytics und Google Tag Manager für Werbemessung, Einwilligung und Attribution.",
            "HubSpot für Formulare, CRM, Qualifikationsstatus und Vertriebsnachverfolgung.",
            "TidyCal für Terminbuchungen.",
            "Vercel für Website-Hosting.",
            "Google Workspace, Slack und interne Betriebstools für Zusammenarbeit und Support.",
            "Lemlist, Clay, LinkedIn Sales Navigator oder vergleichbare Anbieter, wenn sie für eine beauftragte Kundenkampagne erforderlich sind.",
            "Professionelle Berater, Behörden oder Gerichte, wenn dies gesetzlich erforderlich ist.",
          ],
        },
        {
          heading: "5. Google Ads API und Google-Daten",
          paragraphs: [
            "Der Google Ads API-Workflow von devlo wird genutzt, um die eigenen Werbekonten von devlo zu verwalten und zu messen. Er ist keine Self-Service-Plattform für Dritte und verkauft keinen Zugriff auf die Google Ads API weiter.",
            "Wir beantragen nur Zugriffe, die für Kampagnenmanagement, Validierung, Reporting und Offline-Conversion-Import erforderlich sind. Enhanced Conversions, Customer Match oder andere sensible Nutzerdatenverwendungen sind zum Start nicht aktiviert, ohne separate Datenschutz- und Compliance-Prüfung.",
            "Wenn wir Daten aus Google APIs verarbeiten, halten wir die Google API Services User Data Policy einschließlich der Limited Use-Anforderungen ein: https://developers.google.com/terms/api-services-user-data-policy. Diese Daten werden nur verwendet, um autorisierte Funktionen bereitzustellen oder zu verbessern, den Service zu sichern, gesetzliche Pflichten einzuhalten und anwendbare Google-Richtlinien zu befolgen.",
          ],
        },
        {
          heading: "6. Schutz und Aufbewahrung",
          bullets: [
            "Die Website nutzt HTTPS/TLS, Zugriffskontrollen, außerhalb des Quellcodes gespeicherte Secrets und Least-Privilege-Zugriffe. Daten werden ruhend verschlüsselt, soweit unsere Hosting- oder SaaS-Plattformen dies bereitstellen.",
            "Formular- und CRM-Daten werden bis zu 24 Monate nach der letzten wesentlichen Interaktion oder dem Vertragsende gespeichert, sofern keine längere Aufbewahrung für Rechnung, Nachweis oder Gesetz erforderlich ist.",
            "Werbe-Attributionskennungen und Messdaten werden bis zu 24 Monate gespeichert. Technische und Sicherheitslogs werden bis zu 90 Tage gespeichert, sofern kein Vorfall eine längere Speicherung erfordert.",
            "Kampagnendaten von Kunden werden bis zu 24 Monate nach Vertragsende gespeichert, sofern kein anderer Vertrag, keine gesetzliche Pflicht oder kein angemessener Nachweisbedarf gilt.",
            "Verifizierte Löschanfragen werden innerhalb einer Ziel-Frist von 30 Tagen bearbeitet, soweit Gesetz und Vertragspflichten dies erlauben.",
          ],
        },
        {
          heading: "7. Ihre Rechte",
          paragraphs: [
            "Je nach Standort können Sie Zugriff, Berichtigung, Löschung, Einschränkung, Widerspruch oder Datenübertragbarkeit verlangen. Sie können Einwilligungen für Cookies und Marketingkommunikation widerrufen, soweit Einwilligung gilt.",
            "Kontaktieren Sie privacy@devlo.ch. Wir können angemessene Informationen verlangen, um Ihre Identität vor der Bearbeitung zu prüfen.",
          ],
        },
        {
          heading: "8. Internationale Transfers und Kinder",
          paragraphs: [
            "Unsere Anbieter können Daten in der Schweiz, der Europäischen Union, dem Vereinigten Königreich, den USA oder anderen Ländern mit geeigneten vertraglichen Garantien verarbeiten.",
            "Unsere Leistungen richten sich an B2B-Unternehmen und sind nicht für Kinder bestimmt.",
          ],
        },
      ],
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen",
      description:
        "Diese Bedingungen regeln die Nutzung von devlo.ch, devlo-Services, Kundendaten und internen Paid-Acquisition-Workflows.",
      lastUpdated: "Zuletzt aktualisiert: 7. Mai 2026",
      seo: {
        title: "Allgemeine Geschäftsbedingungen",
        description:
          "Nutzungsregeln, Kundenpflichten, Daten, Google Ads API, Einschränkungen und anwendbares Recht: lesen Sie die devlo Bedingungen.",
      },
      contact: { title: "Rechtskontakt", email: "legal@devlo.ch", phone: "+41 79 758 64 03" },
      addresses: addressesByLocale.de,
      sections: [
        { heading: "1. Annahme der Bedingungen", paragraphs: ["Mit dem Zugriff auf devlo.ch, devlosales.com, devlo.fr oder unsere Services stimmen Sie diesen Bedingungen, unserer Datenschutzerklärung und den geltenden Gesetzen zu. Wenn Sie nicht zustimmen, dürfen Sie Website und Services nicht nutzen.", "Sofern ein Kundenvertrag keine andere Vertragspartei nennt, werden die Services von devlo und devlo LLC an den auf dieser Seite aufgeführten Adressen betrieben."] },
        { heading: "2. devlo-Services", paragraphs: ["devlo erbringt B2B-Vertriebsakquise, Leadgenerierung, Qualifizierung, Terminbuchung, Reporting, AI Sales Ops und Beratung zur kommerziellen Akquise.", "Spezifische Leistungen, Budgets, Kanäle und Verantwortlichkeiten werden in Verträgen, Angeboten, Bestellformularen oder schriftlichen Vereinbarungen mit jedem Kunden definiert."] },
        { heading: "3. Verantwortlichkeiten von Nutzern und Kunden", bullets: ["Genaue, aktuelle und autorisierte Informationen bereitstellen.", "Eine ausreichende Rechtsgrundlage oder Erlaubnis für an devlo übermittelte Daten haben.", "Keine sensiblen, rechtswidrigen oder unnötigen Daten ohne vorherige schriftliche Vereinbarung übermitteln.", "Zielmärkte, Botschaften, Angebote, Ausschlüsse, CRM-Regeln und Kampagneninhalte prüfen, wenn dies verlangt wird.", "Die Bedingungen von Google, HubSpot, LinkedIn, Lemlist, Clay und anderen genutzten Plattformen einhalten.", "Zugangsdaten und Drittanbieter-Konten schützen und Sicherheitsvorfälle unverzüglich melden."] },
        { heading: "4. Datennutzung", paragraphs: ["An devlo übermittelte Daten können genutzt werden, um Services zu erbringen, Kampagnen durchzuführen, Termine vorzubereiten, Leistung zu messen, Berichte zu erstellen, Support zu leisten, Rechnungen zu stellen, Systeme zu sichern und rechtliche Pflichten zu erfüllen.", "Erhebung, Weitergabe, Aufbewahrung und Nutzerrechte werden in unserer Datenschutzerklärung beschrieben."] },
        { heading: "5. Google Ads API und interne Tools", paragraphs: ["Der Google Ads API-Workflow von devlo dient dazu, eigene Google Ads-Kampagnen von devlo zu verwalten, zu validieren, zu messen und zu prüfen, einschließlich Erstellung pausierter Kampagnen, Einstellungsvalidierung, Reporting und Offline-Conversion-Import aus unserem CRM.", "Sofern keine konforme schriftliche Vereinbarung etwas anderes vorsieht, ist dieser Workflow keine Self-Service-Plattform für externe Nutzer und verkauft, unterlizenziert oder überträgt keinen Zugriff auf die Google Ads API.", "Nutzer und Kunden dürfen devlo-Services nicht verwenden, um Google Ads-Richtlinien, Einwilligungsregeln, Datenschutzpflichten oder die Google API Services User Data Policy zu umgehen."] },
        { heading: "6. Verbotene Nutzungen", bullets: ["Website oder Services für illegale, täuschende, missbräuchliche, diskriminierende oder unautorisierte Aktivitäten verwenden.", "Störende kommerzielle Nachrichten, Spam, Phishing, Malware oder nicht konforme Kampagnen senden oder erleichtern.", "Versuchen, Limits, Sicherheitskontrollen, Budgets, Einwilligungen oder Richtlinien von Drittplattformen zu umgehen.", "API-Zugriff ohne Autorisierung weiterverkaufen, unterlizenzieren oder offenlegen.", "Software, Inhalte, Methoden oder Arbeitsergebnisse von devlo dekompilieren, kopieren oder missbrauchen."] },
        { heading: "7. Grenzen und Verfügbarkeit", paragraphs: ["devlo garantiert keine Anzeigenfreigabe, Rankings, Leadvolumen, Conversion Rates, Umsätze oder Entscheidungen von Drittplattformen. Ergebnisse hängen von Angebot, Markt, Daten, Budget, Saisonalität und Vertriebskapazität des Kunden ab.", "Wir können Zugriff oder Services aussetzen, wenn ein rechtliches, Sicherheits-, Compliance-, Zahlungs- oder Missbrauchsrisiko erkannt wird."] },
        { heading: "8. Geistiges Eigentum und Vertraulichkeit", paragraphs: ["Inhalte, Methoden, Texte, Software, Seiten, Berichte, Kampagnenstrukturen und Dokumente von devlo bleiben urheberrechtlich, durch Geschäftsgeheimnisse und andere Rechte geschützt, sofern nicht schriftlich anders vereinbart.", "Jede Partei schützt vertrauliche Informationen der anderen Partei und nutzt sie nur für den vereinbarten vertraglichen Zweck."] },
        { heading: "9. Anwendbares Recht", paragraphs: ["Diese Bedingungen unterliegen schweizerischem Recht, vorbehaltlich zwingender Regeln. Zuständig sind die Gerichte in der Schweiz, sofern das Gesetz nichts anderes verlangt."] },
      ],
    },
  },
  nl: {
    privacy: {
      title: "Privacybeleid",
      description:
        "Dit beleid legt uit welke gegevens devlo verzamelt, waarom ze worden gebruikt, hoe ze worden beschermd en welke dienstverleners ze kunnen ontvangen.",
      lastUpdated: "Laatst bijgewerkt: 7 mei 2026",
      seo: {
        title: "Privacybeleid",
        description:
          "Verzamelde gegevens, Google Ads, HubSpot, derden, beveiliging, bewaring en gebruikersrechten: lees het privacybeleid van devlo.",
      },
      contact: { title: "Privacycontact", email: "privacy@devlo.ch", phone: "+41 79 758 64 03" },
      addresses: addressesByLocale.nl,
      sections: [
        { heading: "1. Wie wij zijn", paragraphs: ["devlo is een B2B sales prospecting bureau dat bedrijven helpt doelmarkten te definiëren, accountlijsten te bouwen, outbound campagnes uit te voeren en gekwalificeerde afspraken op te volgen.", "Dit beleid geldt voor devlo.ch, de betaalde mirror devlosales.com, devlo.fr, contactformulieren, consultatieformulieren, interne paid acquisition workflows en B2B-diensten voor klanten."] },
        { heading: "2. Gegevens die we verzamelen", bullets: ["Formuliergegevens: voornaam, achternaam, e-mail, telefoon, bedrijf, functie, land, bedrijfsgrootte, bericht en kwalificatie-informatie.", "Technische gegevens: IP-adres, user agent, apparaat, browser, bezochte pagina's, tijdstempels, verwijzende URL en toestemmingsvoorkeuren.", "Advertentie-attributiegegevens: UTMs, gclid, gbraid, wbraid, landingspagina, huidige URL, paid host, referrer, sessie-ID en eerste tijdstempel.", "Klantgegevens: ICP-criteria, targetinginstructies, doelaccounts, zakelijke B2B-contacten, campagneberichten, resultaten, antwoorden, afspraken en CRM-gegevens die nodig zijn voor de dienst.", "Google Ads API-gegevens voor onze eigen accounts: campagnes, advertentiegroepen, zoekwoorden, advertenties, budgetten, conversies, rapporten en klik-ID's die nodig zijn voor meting."] },
        { heading: "3. Waarom we gegevens gebruiken", bullets: ["Om inkomende aanvragen te beantwoorden en consultaties voor te bereiden.", "Om B2B prospectie, kwalificatie, rapportage en AI Sales Ops te leveren.", "Om marketingprestaties te meten via Google Ads, Google Analytics en HubSpot.", "Om de eigen Google Ads-campagnes van devlo te maken, valideren, auditen en meten via een gecontroleerde interne workflow.", "Om offline conversies in Google Ads te importeren wanneer klik-ID's zoals gclid, gbraid of wbraid beschikbaar zijn.", "Om de site te beveiligen, misbruik te voorkomen, systemen te onderhouden en wettelijke verplichtingen na te leven."] },
        { heading: "4. Delen met derden", paragraphs: ["Wij verkopen geen persoonsgegevens. We delen gegevens alleen met leveranciers die nodig zijn voor websitebeheer, klantendiensten, meting of compliance."], bullets: ["Google Ads, Google Analytics en Google Tag Manager voor advertentiemeting, toestemming en attributie.", "HubSpot voor formulieren, CRM, kwalificatiestatussen en commerciële opvolging.", "TidyCal voor het boeken van afspraken.", "Vercel voor websitehosting.", "Google Workspace, Slack en interne operationele tools voor samenwerking en support.", "Lemlist, Clay, LinkedIn Sales Navigator of vergelijkbare providers wanneer nodig voor een gecontracteerde klantcampagne.", "Professionele adviseurs, autoriteiten of rechtbanken wanneer wettelijk vereist."] },
        { heading: "5. Google Ads API en Google-gegevens", paragraphs: ["De Google Ads API-workflow van devlo wordt gebruikt om de eigen advertentieaccounts van devlo te beheren en te meten. Het is geen selfserviceplatform voor derden en verkoopt geen toegang tot de Google Ads API door.", "We vragen alleen toegang die nodig is voor campagnebeheer, validatie, rapportage en offline conversie-import. Enhanced conversions, Customer Match of andere gevoelige gebruikersdatatoepassingen zijn bij de lancering niet ingeschakeld zonder aparte privacy- en compliancebeoordeling.", "Wanneer wij gegevens verwerken die via Google API's zijn ontvangen, voldoen wij aan de Google API Services User Data Policy, inclusief de Limited Use-vereisten: https://developers.google.com/terms/api-services-user-data-policy. Deze gegevens worden alleen gebruikt om toegestane functies te leveren of te verbeteren, de dienst te beveiligen, de wet na te leven en toepasselijk Google-beleid te volgen."] },
        { heading: "6. Bescherming en bewaring", bullets: ["De site gebruikt HTTPS/TLS, toegangscontroles, geheimen buiten de broncode en least-privilege toegang voor mensen en systemen. Gegevens worden in rust versleuteld wanneer onze hosting- of SaaS-platforms dit bieden.", "Formulier- en CRM-gegevens worden tot 24 maanden na de laatste inhoudelijke interactie of het einde van het contract bewaard, tenzij langere bewaring nodig is voor facturatie, bewijs of wetgeving.", "Advertentie-attributie-ID's en meetgegevens worden tot 24 maanden bewaard. Technische en beveiligingslogs worden tot 90 dagen bewaard, tenzij een incident langere bewaring vereist.", "Klantcampagnegegevens worden tot 24 maanden na het einde van het contract bewaard, tenzij een andere contracttermijn, wettelijke plicht of redelijke bewijsbehoefte geldt.", "Geverifieerde verwijderingsverzoeken worden binnen een streeftermijn van 30 dagen behandeld wanneer wet en contractuele verplichtingen dit toelaten."] },
        { heading: "7. Uw rechten", paragraphs: ["Afhankelijk van uw locatie kunt u toegang, correctie, verwijdering, beperking, bezwaar of overdraagbaarheid van uw gegevens vragen. U kunt ook toestemming voor cookies en marketingcommunicatie intrekken wanneer toestemming van toepassing is.", "Neem contact op via privacy@devlo.ch. We kunnen redelijke informatie vragen om uw identiteit te verifiëren voordat we een verzoek verwerken."] },
        { heading: "8. Internationale doorgiften en kinderen", paragraphs: ["Onze providers kunnen gegevens verwerken in Zwitserland, de Europese Unie, het Verenigd Koninkrijk, de Verenigde Staten of andere landen met passende contractuele waarborgen.", "Onze diensten zijn bedoeld voor B2B-bedrijven en zijn niet ontworpen voor kinderen."] },
      ],
    },
    terms: {
      title: "Servicevoorwaarden",
      description:
        "Deze voorwaarden definiëren de regels voor het gebruik van devlo.ch, devlo-diensten, door klanten verstrekte gegevens en interne paid acquisition workflows.",
      lastUpdated: "Laatst bijgewerkt: 7 mei 2026",
      seo: {
        title: "Servicevoorwaarden",
        description:
          "Gebruiksregels, klantverantwoordelijkheden, gegevens, Google Ads API, beperkingen en toepasselijk recht: lees de voorwaarden van devlo.",
      },
      contact: { title: "Juridisch contact", email: "legal@devlo.ch", phone: "+41 79 758 64 03" },
      addresses: addressesByLocale.nl,
      sections: [
        { heading: "1. Aanvaarding van voorwaarden", paragraphs: ["Door devlo.ch, devlosales.com, devlo.fr of onze diensten te gebruiken, stemt u in met deze voorwaarden, ons privacybeleid en toepasselijke wetgeving. Als u niet akkoord gaat, mag u de site of diensten niet gebruiken.", "Tenzij een klantovereenkomst een andere contracterende entiteit noemt, worden de diensten geëxploiteerd door devlo en devlo LLC op de adressen die op deze pagina staan."] },
        { heading: "2. devlo-diensten", paragraphs: ["devlo levert B2B sales prospecting, leadgeneratie, kwalificatie, afsprakenplanning, rapportage, AI Sales Ops en advies rond commerciële acquisitie.", "Specifieke deliverables, budgetten, kanalen en verantwoordelijkheden worden vastgelegd in contracten, voorstellen, orderformulieren of schriftelijke overeenkomsten met elke klant."] },
        { heading: "3. Verantwoordelijkheden van gebruikers en klanten", bullets: ["Nauwkeurige, actuele en geautoriseerde informatie verstrekken.", "Een voldoende rechtsgrond of toestemming hebben voor gegevens die aan devlo worden verstrekt.", "Geen gevoelige, onwettige of onnodige gegevens indienen zonder voorafgaande schriftelijke overeenkomst.", "Doelmarkten, berichten, aanbiedingen, uitsluitingen, CRM-regels en campagnecontent beoordelen wanneer daarom wordt gevraagd.", "De voorwaarden van Google, HubSpot, LinkedIn, Lemlist, Clay en andere gebruikte platforms naleven.", "Toegangsgegevens en externe accounts beschermen en beveiligingsincidenten snel melden."] },
        { heading: "4. Gebruik van gegevens", paragraphs: ["Gegevens die aan devlo worden verstrekt, kunnen worden gebruikt om diensten te leveren, campagnes uit te voeren, afspraken voor te bereiden, prestaties te meten, rapporten te maken, support te bieden, te factureren, systemen te beveiligen en wettelijke verplichtingen na te leven.", "Verzameling, delen, bewaring en gebruikersrechten worden beschreven in ons privacybeleid."] },
        { heading: "5. Google Ads API en interne tools", paragraphs: ["De Google Ads API-workflow van devlo wordt gebruikt om de eigen Google Ads-campagnes van devlo te beheren, valideren, meten en auditen, inclusief het aanmaken van gepauzeerde campagnes, validatie van instellingen, rapportage en offline conversie-import uit ons CRM.", "Tenzij een conforme schriftelijke overeenkomst anders bepaalt, is deze workflow geen selfserviceplatform voor externe gebruikers en verkoopt, sublicentieert of overdraagt hij geen toegang tot de Google Ads API.", "Gebruikers en klanten mogen devlo-diensten niet gebruiken om Google Ads-beleid, toestemmingsregels, privacyverplichtingen of de Google API Services User Data Policy te omzeilen."] },
        { heading: "6. Verboden gebruik", bullets: ["De site of diensten gebruiken voor illegale, misleidende, beledigende, discriminerende of ongeautoriseerde activiteiten.", "Storende commerciële berichten, spam, phishing, malware of niet-conforme campagnes verzenden of faciliteren.", "Proberen limieten, beveiligingscontroles, budgetten, toestemming of beleid van derde platforms te omzeilen.", "API-toegang zonder toestemming doorverkopen, sublicentiëren of blootstellen.", "devlo-software, content, methoden of deliverables decompileren, kopiëren of misbruiken."] },
        { heading: "7. Beperkingen en beschikbaarheid", paragraphs: ["devlo garandeert geen advertentiegoedkeuring, rankings, leadvolume, conversieratio's, omzet of beslissingen van externe platforms. Resultaten hangen af van aanbod, markt, gegevens, budget, seizoensinvloeden en de verkoopcapaciteit van de klant.", "We kunnen toegang of diensten opschorten als een juridisch, beveiligings-, compliance-, betalings- of misbruikrisico wordt vastgesteld."] },
        { heading: "8. Intellectuele eigendom en vertrouwelijkheid", paragraphs: ["devlo-content, methoden, teksten, software, pagina's, rapporten, campagnestructuren en documenten blijven beschermd door auteursrecht, handelsgeheimen en andere toepasselijke rechten, tenzij schriftelijk anders overeengekomen.", "Elke partij moet vertrouwelijke informatie van de andere partij beschermen en alleen gebruiken voor het afgesproken contractuele doel."] },
        { heading: "9. Toepasselijk recht", paragraphs: ["Deze voorwaarden worden beheerst door Zwitsers recht, onder voorbehoud van dwingende toepasselijke regels. De bevoegde rechtbanken bevinden zich in Zwitserland, tenzij de wet anders vereist."] },
      ],
    },
  },
};

export function getLegalPageContent(locale: SupportedLocale, page: LegalPageKey) {
  return legalPages[locale]?.[page] ?? legalPages.fr[page];
}
