import { NextRequest, NextResponse } from "next/server";

const HUBSPOT_TOKEN = process.env.HUBSPOT_API_TOKEN_SLACKBOT;
const HUBSPOT_PORTAL_ID = "8082524";
const HUBSPOT_DEFAULT_PAID_FORM_ID = "e483f870-da8e-4e90-8017-7cdff873ed22";

const allowedHubSpotFormIds = new Set([
  "54090bd3-970d-4ad1-b3b3-1c81d54c291e",
  "e483f870-da8e-4e90-8017-7cdff873ed22",
  "c9fbd96c-6782-4053-a5a1-759d6a395238",
  "9f8e7adf-523e-4907-a180-db813331fa50",
  "e2fa3a83-114f-46ea-838f-9326f2d89b5c",
]);

const allowedOrigins = new Set([
  "https://devlo.ch",
  "https://www.devlo.ch",
  "https://devlosales.com",
  "https://www.devlosales.com",
]);

const contactFieldNames = new Set([
  "firstname",
  "lastname",
  "email",
  "campaign",
  "lead_generator",
  "mobilephone",
  "company",
  "website",
  "clients",
  "parmi_ces_clients_qui_sont_les_decideurs_",
  "pays",
  "industry",
  "employee_headcount",
  "strategy_selections",
  "paid_host",
  "paid_utm_source",
  "paid_utm_medium",
  "paid_utm_campaign",
  "paid_utm_content",
  "paid_utm_term",
  "paid_gclid",
  "paid_wbraid",
  "paid_gbraid",
  "paid_landing_page_url",
  "paid_current_page_url",
  "paid_referrer",
  "paid_session_id",
  "paid_first_seen_at",
  "paid_qualification_status",
  "paid_demo_status",
]);

const formSubmissionFieldNames = new Set([
  "clients",
  "parmi_ces_clients_qui_sont_les_decideurs_",
  "pays",
  "industry",
  "employee_headcount",
  "firstname",
  "lastname",
  "email",
  "mobilephone",
  "company",
  "website",
  "strategy_selections",
  "paid_host",
  "paid_utm_source",
  "paid_utm_medium",
  "paid_utm_campaign",
  "paid_utm_content",
  "paid_utm_term",
  "paid_gclid",
  "paid_wbraid",
  "paid_gbraid",
  "paid_landing_page_url",
  "paid_current_page_url",
  "paid_referrer",
  "paid_session_id",
  "paid_first_seen_at",
  "paid_qualification_status",
  "paid_demo_status",
]);

function firstString(value: unknown) {
  if (typeof value === "string") return value.trim();
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string").join(";").trim();
  }

  return "";
}

function cleanProperties(fields: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(fields)
      .filter(([name]) => contactFieldNames.has(name))
      .map(([name, value]) => [name, firstString(value)])
      .filter(([, value]) => value.length > 0),
  );
}

function hasPaidSignal(properties: Record<string, string>) {
  const paidPageUrl = properties.paid_current_page_url || properties.paid_landing_page_url || "";
  return (
    properties.paid_host === "true" ||
    Boolean(properties.paid_gclid || properties.paid_gbraid || properties.paid_wbraid) ||
    Boolean(properties.paid_utm_source && properties.paid_utm_medium) ||
    /\/(en\/|de\/|nl\/)?lp\//.test(paidPageUrl)
  );
}

function addOperationalMirrorProperties(properties: Record<string, string>) {
  if (properties.paid_utm_campaign) properties.campaign ||= properties.paid_utm_campaign;
  if (properties.paid_utm_source || properties.paid_utm_medium || properties.paid_host === "true") {
    properties.lead_generator ||=
      properties.paid_utm_source === "google" && properties.paid_utm_medium === "cpc" ? "Google Ads" : "Paid acquisition";
  }
  if (properties.clients) properties.targetaudience ||= properties.clients;
  if (properties.pays) {
    properties.country ||= properties.pays;
    properties.companyhq ||= properties.pays;
  }
  if (properties.industry) properties.industry_en ||= properties.industry;
}

function buildFormFields(properties: Record<string, string>, rawFields: Record<string, unknown>) {
  const fields: { name: string; value: string }[] = [];

  formSubmissionFieldNames.forEach((name) => {
    const rawValue = rawFields[name];
    if (Array.isArray(rawValue)) {
      rawValue.forEach((item) => {
        const value = firstString(item);
        if (value) fields.push({ name, value });
      });
      return;
    }

    const value = properties[name] || firstString(rawValue);
    if (value) fields.push({ name, value });
  });

  return fields;
}

function resolvePageUri(properties: Record<string, string>) {
  const pageUri = properties.paid_current_page_url || properties.paid_landing_page_url || "https://devlo.ch/en/consultation";

  try {
    const url = new URL(pageUri);
    if (url.hostname === "devlosales.com" || url.hostname === "www.devlosales.com") {
      url.hostname = "devlo.ch";
      return url.toString();
    }
  } catch {
    return "https://devlo.ch/en/consultation";
  }

  return pageUri;
}

async function submitHubSpotForm(
  properties: Record<string, string>,
  rawFields: Record<string, unknown>,
  formId: string,
  request: NextRequest,
) {
  const pageUri = resolvePageUri(properties);
  const hutk = request.cookies.get("hubspotutk")?.value;

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/secure/submit/${HUBSPOT_PORTAL_ID}/${formId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HUBSPOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: buildFormFields(properties, rawFields),
        context: {
          ...(hutk ? { hutk } : {}),
          pageUri,
          pageName: "Free consultation | B2B prospecting campaign",
        },
      }),
    },
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`HubSpot form submission failed: ${response.status} ${errorBody}`);
  }

  return response.json();
}

async function searchContactId(email: string) {
  const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/search", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filterGroups: [{ filters: [{ propertyName: "email", operator: "EQ", value: email }] }],
      limit: 1,
      properties: ["email"],
    }),
  });

  if (!response.ok) throw new Error(`HubSpot contact search failed: ${response.status}`);

  const data = await response.json();
  return typeof data.results?.[0]?.id === "string" ? data.results[0].id : null;
}

async function upsertContact(properties: Record<string, string>) {
  const contactId = await searchContactId(properties.email);
  const url = contactId
    ? `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`
    : "https://api.hubapi.com/crm/v3/objects/contacts";

  const response = await fetch(url, {
    method: contactId ? "PATCH" : "POST",
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    const conflictId = errorBody.match(/Existing ID:\s*(\d+)/)?.[1];
    if (!contactId && response.status === 409 && conflictId) {
      const retryResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${conflictId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${HUBSPOT_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ properties }),
      });

      if (!retryResponse.ok) {
        const retryErrorBody = await retryResponse.text();
        throw new Error(`HubSpot contact conflict patch failed: ${retryResponse.status} ${retryErrorBody}`);
      }

      return retryResponse.json();
    }

    throw new Error(`HubSpot contact upsert failed: ${response.status} ${errorBody}`);
  }

  return response.json();
}

function buildContactNoteBody(properties: Record<string, string>) {
  return [
    "Paid consultation form submission",
    "",
    `Clients / target audience: ${properties.clients || "-"}`,
    `Decision-makers: ${properties.parmi_ces_clients_qui_sont_les_decideurs_ || "-"}`,
    `Target countries/regions: ${properties.pays || "-"}`,
    `Industries: ${properties.industry || "-"}`,
    `Headcount: ${properties.employee_headcount || "-"}`,
    `Website: ${properties.website || "-"}`,
    "",
    `Lead generator: ${properties.lead_generator || "-"}`,
    `Campaign: ${properties.campaign || properties.paid_utm_campaign || "-"}`,
    `UTM source/medium: ${properties.paid_utm_source || "-"}/${properties.paid_utm_medium || "-"}`,
    `UTM content: ${properties.paid_utm_content || "-"}`,
    `UTM term: ${properties.paid_utm_term || "-"}`,
    `GCLID: ${properties.paid_gclid || "-"}`,
    `Paid current page: ${properties.paid_current_page_url || "-"}`,
  ].join("\n");
}

async function createContactNote(contactId: string, properties: Record<string, string>) {
  const response = await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: {
        hs_note_body: buildContactNoteBody(properties),
        hs_timestamp: new Date().toISOString(),
      },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }],
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`HubSpot contact note failed: ${response.status} ${errorBody}`);
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  if (!HUBSPOT_TOKEN) {
    return NextResponse.json({ error: "HubSpot backup not configured" }, { status: 503 });
  }

  const origin = request.headers.get("origin");
  if (origin && !allowedOrigins.has(origin) && !origin.endsWith(".vercel.app")) {
    return NextResponse.json({ error: "Origin not allowed" }, { status: 403 });
  }

  try {
    const payload = await request.json();
    const rawFields = payload?.fields;
    const requestedFormId = typeof payload?.formId === "string" ? payload.formId : HUBSPOT_DEFAULT_PAID_FORM_ID;
    const formId = allowedHubSpotFormIds.has(requestedFormId) ? requestedFormId : HUBSPOT_DEFAULT_PAID_FORM_ID;
    if (!rawFields || typeof rawFields !== "object" || Array.isArray(rawFields)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const properties = cleanProperties(rawFields as Record<string, unknown>);
    const email = properties.email?.toLowerCase();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    properties.email = email;
    properties.paid_qualification_status ||= "submitted_pending_review";
    properties.paid_demo_status ||= "not_booked";
    addOperationalMirrorProperties(properties);

    if (!hasPaidSignal(properties)) {
      return NextResponse.json({ error: "Missing paid signal" }, { status: 400 });
    }

    const formSubmission = await submitHubSpotForm(properties, rawFields as Record<string, unknown>, formId, request);
    const contact = await upsertContact(properties);
    let noteId: string | undefined;
    try {
      const note = await createContactNote(contact.id, properties);
      noteId = note.id;
    } catch (noteError) {
      console.error("Paid form backup note error:", noteError);
    }

    return NextResponse.json({ success: true, contactId: contact.id, formSubmission, noteId });
  } catch (error) {
    console.error("Paid form backup error:", error);
    return NextResponse.json({ error: "Paid form backup failed" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Use POST" }, { status: 405 });
}
