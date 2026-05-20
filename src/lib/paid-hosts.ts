const paidHostnames = new Set(["devlosales.com", "www.devlosales.com"]);

export function normalizePaidHostname(host: string | null | undefined) {
  return host?.split(":")[0]?.toLowerCase() ?? "";
}

export function isPaidHostname(host: string | null | undefined) {
  return paidHostnames.has(normalizePaidHostname(host));
}

export function getPaidCanonicalOrigin(host: string | null | undefined) {
  return isPaidHostname(host) ? "https://devlosales.com" : null;
}
