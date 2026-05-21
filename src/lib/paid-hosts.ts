const paidHostnameOrigins = new Map([
  ["devlosales.com", "https://devlosales.com"],
  ["www.devlosales.com", "https://devlosales.com"],
  ["devlo.fr", "https://devlo.fr"],
  ["www.devlo.fr", "https://devlo.fr"],
]);

export function normalizePaidHostname(host: string | null | undefined) {
  return host?.split(":")[0]?.toLowerCase() ?? "";
}

export function isPaidHostname(host: string | null | undefined) {
  return paidHostnameOrigins.has(normalizePaidHostname(host));
}

export function getPaidCanonicalOrigin(host: string | null | undefined) {
  return paidHostnameOrigins.get(normalizePaidHostname(host)) ?? null;
}
