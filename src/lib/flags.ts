const FLAG_FALLBACK = "🌍";

const SPECIAL_CODES: Record<string, string> = {
  EU: "🇪🇺",
  UK: "🇬🇧",
  GB: "🇬🇧",
  UN: "🇺🇳",
};

function toRegionalIndicator(char: string): string {
  const codePoint = char.toUpperCase().charCodeAt(0);
  return String.fromCodePoint(0x1f1e6 + (codePoint - 65));
}

export function countryCodeToFlagEmoji(code: string): string {
  const normalized = code.trim().toUpperCase();
  if (!normalized) return FLAG_FALLBACK;

  if (SPECIAL_CODES[normalized]) {
    return SPECIAL_CODES[normalized];
  }

  if (!/^[A-Z]{2}$/.test(normalized)) {
    return FLAG_FALLBACK;
  }

  return `${toRegionalIndicator(normalized[0])}${toRegionalIndicator(normalized[1])}`;
}
