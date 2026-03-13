import type { SupportedLocale } from "@/lib/i18n/slug-map";
import aiSalesOpsContentJson from "@/lib/i18n/ai-sales-ops-content.json";

type AiSalesOpsBundle = (typeof aiSalesOpsContentJson)["fr"];

export function getLocalizedAiSalesOpsContent(locale: SupportedLocale): AiSalesOpsBundle {
  const key = locale === "en" || locale === "de" || locale === "nl" ? locale : "fr";
  return (aiSalesOpsContentJson as Record<string, AiSalesOpsBundle>)[key] ?? aiSalesOpsContentJson.fr;
}
