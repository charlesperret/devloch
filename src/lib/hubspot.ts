const PORTAL_ID = "8082524";
const FORM_ID = "54090bd3-970d-4ad1-b3b3-1c81d54c291e";

export const BLOCKED_DOMAINS = [
  "gmail.com",
  "hotmail.com",
  "yahoo.com",
  "yahoo.fr",
  "outlook.com",
  "live.com",
  "orange.fr",
  "free.fr",
  "laposte.net",
  "wanadoo.fr",
  "icloud.com",
  "proton.me",
  "hotmail.fr",
  "gmail.fr",
] as const;

export function isProEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  return !BLOCKED_DOMAINS.includes(domain as (typeof BLOCKED_DOMAINS)[number]);
}

type HubspotPayload = {
  firstname: string;
  email: string;
  company?: string;
  service_interest: string;
  configurator_data?: string;
  page_url: string;
  page_name: string;
};

type HubspotSubmitResult = {
  ok: boolean;
  errorMessage?: string;
};

function buildNote(payload: HubspotPayload): string {
  const serviceHeader = `=== SERVICE: ${payload.service_interest.toUpperCase()} ===`;
  const rawConfiguration = payload.configurator_data?.trim() || "";
  const configurationBody = rawConfiguration.startsWith("===")
    ? rawConfiguration.split("\n").slice(1).join("\n").trim()
    : rawConfiguration;
  const configuration = configurationBody || "Configuration: Non défini";

  return [
    serviceHeader,
    configuration,
    `Service: ${payload.service_interest}`,
    `Page: ${payload.page_url || "Non défini"}`,
    `Page Name: ${payload.page_name || "Non défini"}`,
    `Date: ${new Date().toLocaleDateString("fr-CH")}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function parseConfigLines(raw: string | undefined): Record<string, string> {
  if (!raw) return {};

  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.includes(":"))
    .reduce<Record<string, string>>((acc, line) => {
      const [left, ...rest] = line.split(":");
      const key = left.trim().toLowerCase();
      const value = rest.join(":").trim();
      if (key && value) acc[key] = value;
      return acc;
    }, {});
}

function firstMatchingConfigValue(
  configMap: Record<string, string>,
  candidates: string[],
): string | undefined {
  const candidateLower = candidates.map((candidate) => candidate.toLowerCase());
  const entry = Object.entries(configMap).find(([label]) =>
    candidateLower.some((candidate) => label.includes(candidate)),
  );
  return entry?.[1];
}

function buildRequiredFallbackFields(payload: HubspotPayload) {
  const configMap = parseConfigLines(payload.configurator_data);

  const clients =
    firstMatchingConfigValue(configMap, ["icp", "client", "cibles", "comptes"]) ??
    "Entreprises B2B en croissance";

  const decisionMakers =
    firstMatchingConfigValue(configMap, ["décideurs", "profils", "personas"]) ??
    "CEO, CMO, Head of Sales";

  const countries =
    firstMatchingConfigValue(configMap, ["marché", "géographies", "pays", "région", "langue"]) ??
    "Suisse";

  const industry =
    firstMatchingConfigValue(configMap, ["secteur", "industries", "offre"]) ?? payload.service_interest;

  return [
    { name: "mobilephone", value: "+41000000000" },
    { name: "clients", value: clients },
    { name: "parmi_ces_clients_qui_sont_les_decideurs_", value: decisionMakers },
    { name: "pays", value: countries },
    { name: "industry", value: industry },
    { name: "employee_headcount", value: "1-10" },
  ];
}

export async function submitToHubSpot(payload: HubspotPayload): Promise<HubspotSubmitResult> {
  const fields = [
    { name: "firstname", value: payload.firstname },
    { name: "lastname", value: "-" },
    { name: "email", value: payload.email },
    { name: "company", value: payload.company || "" },
    { name: "service_interest", value: payload.service_interest },
    ...buildRequiredFallbackFields(payload),
    { name: "strategy_selections", value: buildNote(payload) },
  ];

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: payload.page_url,
            pageName: payload.page_name,
          },
        }),
      },
    );

    if (response.ok) {
      return { ok: true };
    }

    const responseBody = await response.text();
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("[HubSpot] Submission failed", {
        status: response.status,
        body: responseBody,
      });
    }

    return {
      ok: false,
      errorMessage:
        "Le formulaire HubSpot a rejeté la soumission. Vérifiez vos informations et réessayez dans quelques instants.",
    };
  } catch {
    return {
      ok: false,
      errorMessage: "La soumission a échoué à cause d'un problème réseau. Merci de réessayer.",
    };
  }
}
