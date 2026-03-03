#!/usr/bin/env bash
set -euo pipefail

command -v curl >/dev/null 2>&1 || { echo "curl required"; exit 1; }
command -v jq >/dev/null 2>&1 || { echo "jq required"; exit 1; }

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DATE="$(date +%F)"
AUDIT_DIR="$ROOT_DIR/docs/post_migration_audit_${DATE}"
RAW_DIR="$AUDIT_DIR/raw"
mkdir -p "$RAW_DIR"

KEY_URLS=(
  "https://devlo.ch/"
  "https://devlo.ch/services"
  "https://devlo.ch/consultation"
  "https://devlo.ch/etudes-de-cas"
  "https://devlo.ch/academy"
  "https://devlo.ch/robots.txt"
  "https://devlo.ch/sitemap.xml"
)

META_PAGES=(
  "home|https://devlo.ch/"
  "services|https://devlo.ch/services"
  "consultation|https://devlo.ch/consultation"
  "etudes-de-cas|https://devlo.ch/etudes-de-cas"
  "academy|https://devlo.ch/academy"
)

get_initial_code() {
  local url="$1"
  curl -sI --max-time 15 "$url" | awk '/^HTTP\// {print $2; exit}'
}

get_location() {
  local url="$1"
  curl -sI --max-time 15 "$url" | awk 'BEGIN{IGNORECASE=1} /^location:/ {print $2; exit}' | tr -d '\r'
}

get_follow_line() {
  local url="$1"
  curl -sIL --max-time 15 -o /dev/null -w 'final_code:%{http_code} hops:%{num_redirects} final_url:%{url_effective}\n' "$url"
}

field_from_follow() {
  local key="$1"
  local line="$2"
  awk -v key="$key" '{for(i=1;i<=NF;i++){if($i ~ ("^" key ":")){sub("^" key ":", "", $i); print $i; exit}}}' <<<"$line"
}

extract_attr() {
  local tag="$1"
  local attr="$2"
  perl -ne 'my ($tag,$attr)=@ARGV; if ($tag =~ /\b\Q'.$attr.'\E=["\x27]([^"\x27]+)["\x27]/i){print $1}' "$tag" "$attr"
}

# A1
A1_OUT="$RAW_DIR/a1_status_codes.txt"
: > "$A1_OUT"
a1_warn=0

for url in "${KEY_URLS[@]}"; do
  initial_code="$(get_initial_code "$url")"
  location="$(get_location "$url")"
  follow_line="$(get_follow_line "$url")"
  final_code="$(field_from_follow final_code "$follow_line")"
  hops="$(field_from_follow hops "$follow_line")"
  final_url="$(field_from_follow final_url "$follow_line")"

  {
    echo "URL: $url"
    echo "initial_code: ${initial_code:-<none>}"
    echo "location: ${location:-<none>}"
    echo "$follow_line"
    echo "---"
  } >> "$A1_OUT"

  if [[ "$initial_code" != "200" || "$hops" != "0" || "$final_code" != "200" ]]; then
    a1_warn=1
  fi
done

# A2
A2_OUT="$RAW_DIR/a2_legacy_redirects.txt"
: > "$A2_OUT"

LEGACY_URLS=(
  "https://devlo.ch/resultats/"
  "https://devlo.ch/resultats/biocarburants-52-rendez-vous/"
  "https://devlo.ch/contact"
  "https://devlo.ch/blog"
  "https://devlo.ch/merci"
)

if [[ -f "$ROOT_DIR/next.config.mjs" ]]; then
  while IFS= read -r source_path; do
    [[ -z "$source_path" ]] && continue
    LEGACY_URLS+=("https://devlo.ch${source_path}")
  done < <(
    node -e 'const fs=require("fs");const txt=fs.readFileSync("next.config.mjs","utf8");const matches=[...txt.matchAll(/source:\s*["\x27](\/resultats[^"\x27:*]*)["\x27]/g)].map(m=>m[1]);console.log([...new Set(matches)].join("\n"));' 2>/dev/null || true
  )
fi

# dedupe legacy URLs (bash 3 compatible)
DEDUP_LEGACY=()
while IFS= read -r u; do
  [[ -z "$u" ]] && continue
  DEDUP_LEGACY+=("$u")
done < <(printf '%s\n' "${LEGACY_URLS[@]}" | awk '!seen[$0]++')

a2_fail=0
for url in "${DEDUP_LEGACY[@]}"; do
  initial_code="$(get_initial_code "$url")"
  location="$(get_location "$url")"
  follow_line="$(get_follow_line "$url")"
  final_code="$(field_from_follow final_code "$follow_line")"
  hops="$(field_from_follow hops "$follow_line")"
  final_url="$(field_from_follow final_url "$follow_line")"

  {
    echo "URL: $url"
    echo "initial_code: ${initial_code:-<none>}"
    echo "location: ${location:-<none>}"
    echo "$follow_line"
    echo "---"
  } >> "$A2_OUT"

  if [[ "$initial_code" != "301" || "$final_code" != "200" || "$hops" -gt 1 ]]; then
    a2_fail=1
  fi
done

# A3
meta_fail=0
meta_warn=0
meta_legacy_domain=0

for entry in "${META_PAGES[@]}"; do
  name="${entry%%|*}"
  url="${entry##*|}"

  html_file="$RAW_DIR/a3_html_${name}.html"
  meta_file="$RAW_DIR/a3_meta_${name}.txt"

  curl -sL --max-time 20 "$url" > "$html_file"

  canonical_tag="$(grep -io '<link[^>]*>' "$html_file" | grep -i 'rel=' | grep -i 'canonical' | head -1 || true)"
  og_url_tag="$(grep -io '<meta[^>]*>' "$html_file" | grep -i 'property=' | grep -i 'og:url' | head -1 || true)"
  og_image_tag="$(grep -io '<meta[^>]*>' "$html_file" | grep -i 'property=' | grep -i 'og:image' | head -1 || true)"
  hreflang_tags="$(grep -io '<link[^>]*>' "$html_file" | grep -i 'hreflang=' || true)"

  canonical_href=""
  og_url=""
  og_image=""

  if [[ -n "$canonical_tag" ]]; then
    canonical_href="$(sed -nE 's/.*href=["\x27]([^"\x27]+)["\x27].*/\1/p' <<<"$canonical_tag" | head -1)"
  fi
  if [[ -n "$og_url_tag" ]]; then
    og_url="$(sed -nE 's/.*content=["\x27]([^"\x27]+)["\x27].*/\1/p' <<<"$og_url_tag" | head -1)"
  fi
  if [[ -n "$og_image_tag" ]]; then
    og_image="$(sed -nE 's/.*content=["\x27]([^"\x27]+)["\x27].*/\1/p' <<<"$og_image_tag" | head -1)"
  fi

  canonical_final_code="<none>"
  canonical_hops="<none>"
  canonical_final_url="<none>"

  if [[ -n "$canonical_href" ]]; then
    can_follow="$(curl -sIL --max-time 15 -o /dev/null -w 'final_code:%{http_code} hops:%{num_redirects} final_url:%{url_effective}\n' "$canonical_href")"
    canonical_final_code="$(field_from_follow final_code "$can_follow")"
    canonical_hops="$(field_from_follow hops "$can_follow")"
    canonical_final_url="$(field_from_follow final_url "$can_follow")"
  fi

  has_fr="no"
  has_xdefault="no"
  if grep -qi 'hreflang=["\x27]fr["\x27]' "$html_file"; then has_fr="yes"; fi
  if grep -qi 'hreflang=["\x27]x-default["\x27]' "$html_file"; then has_xdefault="yes"; fi

  {
    echo "URL: $url"
    echo "canonical: ${canonical_href:-<missing>}"
    echo "og:url: ${og_url:-<missing>}"
    echo "og:image: ${og_image:-<missing>}"
    echo "canonical_final_code: $canonical_final_code"
    echo "canonical_hops: $canonical_hops"
    echo "canonical_final_url: $canonical_final_url"
    echo "hreflang_fr: $has_fr"
    echo "hreflang_x_default: $has_xdefault"
    echo "hreflang_tags:"
    if [[ -n "$hreflang_tags" ]]; then
      echo "$hreflang_tags"
    else
      echo "<none>"
    fi
  } > "$meta_file"

  if grep -qi 'devlo-agency\.ch' "$html_file"; then
    meta_legacy_domain=1
  fi

  if [[ -z "$canonical_href" || -z "$og_url" || -z "$og_image" ]]; then
    meta_fail=1
  fi
  if [[ -n "$canonical_href" && -n "$og_url" && "$canonical_href" != "$og_url" ]]; then
    meta_fail=1
  fi
  if [[ "$canonical_final_code" != "200" || "$canonical_hops" != "0" ]]; then
    meta_fail=1
  fi

  if [[ "$has_fr" != "yes" || "$has_xdefault" != "yes" ]]; then
    meta_warn=1
  fi
done

# A4 sitemap
SITEMAP_RAW="$RAW_DIR/a4_sitemap_raw.xml"
SITEMAP_ANALYSIS="$RAW_DIR/a4_sitemap_analysis.txt"
SITEMAP_TMP_DIR="$RAW_DIR/a4_sitemaps"
rm -rf "$SITEMAP_TMP_DIR"
mkdir -p "$SITEMAP_TMP_DIR"

curl -sL --max-time 20 'https://devlo.ch/sitemap.xml' > "$SITEMAP_RAW"
cp "$SITEMAP_RAW" "$SITEMAP_TMP_DIR/root.xml"

if grep -qi '<sitemapindex' "$SITEMAP_RAW"; then
  grep -oE '<loc>[^<]+</loc>' "$SITEMAP_RAW" | sed -E 's#</?loc>##g' > "$SITEMAP_TMP_DIR/children.txt"
  c=0
  while IFS= read -r child_url; do
    c=$((c+1))
    [[ -z "$child_url" ]] && continue
    curl -sL --max-time 20 "$child_url" > "$SITEMAP_TMP_DIR/child_${c}.xml"
  done < "$SITEMAP_TMP_DIR/children.txt"
fi

cat "$SITEMAP_TMP_DIR"/*.xml > "$SITEMAP_TMP_DIR/all.xml"
grep -oE '<loc>[^<]+</loc>' "$SITEMAP_TMP_DIR/all.xml" | sed -E 's#</?loc>##g' > "$SITEMAP_TMP_DIR/all_locs.txt"

loc_count="$(wc -l < "$SITEMAP_TMP_DIR/all_locs.txt" | tr -d ' ')"

key_missing=0
for path in "/" "/services" "/consultation" "/etudes-de-cas" "/academy"; do
  if ! grep -Eq "^https://devlo\.ch${path}/?$" "$SITEMAP_TMP_DIR/all_locs.txt"; then
    key_missing=1
  fi
done

contains_resultats="no"
contains_legacy_domain="no"
if grep -q '/resultats/' "$SITEMAP_TMP_DIR/all_locs.txt"; then contains_resultats="yes"; fi
if grep -qi 'devlo-agency' "$SITEMAP_TMP_DIR/all_locs.txt"; then contains_legacy_domain="yes"; fi

sitemap_initial_code="$(get_initial_code 'https://devlo.ch/sitemap.xml')"
sitemap_hops="$(curl -sIL --max-time 15 -o /dev/null -w '%{num_redirects}' 'https://devlo.ch/sitemap.xml')"

{
  echo "sitemap_initial_code: $sitemap_initial_code"
  echo "sitemap_hops: $sitemap_hops"
  echo "loc_count: $loc_count"
  echo "key_pages_missing: $key_missing"
  echo "contains_resultats: $contains_resultats"
  echo "contains_devlo_agency: $contains_legacy_domain"
  echo "sample_locs:"
  head -30 "$SITEMAP_TMP_DIR/all_locs.txt"
} > "$SITEMAP_ANALYSIS"

sitemap_fail=0
if [[ "$sitemap_initial_code" != "200" || "$sitemap_hops" != "0" || "$key_missing" != "0" || "$contains_resultats" != "no" || "$contains_legacy_domain" != "no" ]]; then
  sitemap_fail=1
fi

# A5 robots
ROBOTS_FILE="$RAW_DIR/a5_robots.txt"
curl -sL --max-time 20 'https://devlo.ch/robots.txt' > "$ROBOTS_FILE"

robots_fail=0
robots_warn=0
if grep -qi 'devlo-agency' "$ROBOTS_FILE"; then robots_fail=1; fi
if ! grep -q '^Sitemap: https://devlo.ch/sitemap.xml$' "$ROBOTS_FILE"; then robots_fail=1; fi
if grep -qi '^Disallow: /$' "$ROBOTS_FILE"; then robots_fail=1; fi
if ! grep -qi '^Allow: /' "$ROBOTS_FILE"; then robots_warn=1; fi

# A6 schema
SCHEMA_OUT="$RAW_DIR/a6_schema.txt"
: > "$SCHEMA_OUT"
schema_fail=0

for entry in "home|https://devlo.ch/" "services|https://devlo.ch/services"; do
  name="${entry%%|*}"
  url="${entry##*|}"
  html_file="$RAW_DIR/a6_html_${name}.html"
  curl -sL --max-time 20 "$url" > "$html_file"

  types="$(grep -oE '"@type"[[:space:]]*:[[:space:]]*"[^"]+"' "$html_file" | sed -E 's/.*"@type"[[:space:]]*:[[:space:]]*"([^"]+)".*/\1/' | sort -u | paste -sd ',' -)"
  {
    echo "URL: $url"
    echo "types: ${types:-<none>}"
    echo "---"
  } >> "$SCHEMA_OUT"

  if [[ "$name" == "home" ]]; then
    if ! grep -Eq '"@type"[[:space:]]*:[[:space:]]*"(Organization|LocalBusiness)"' "$html_file"; then
      schema_fail=1
    fi
  fi

  if [[ "$name" == "services" ]]; then
    if ! grep -Eq '"@type"[[:space:]]*:[[:space:]]*"Service"' "$html_file"; then
      schema_fail=1
    fi
  fi
done

# statuses
status_a1="PASS"; detail_a1="Pages clés en 200 sans redirect"
if [[ "$a1_warn" -eq 1 ]]; then status_a1="WARN"; detail_a1="Au moins une page clé redirige ou ne renvoie pas 200 initial"; fi

status_a2="PASS"; detail_a2="Legacy redirects en 301, 1 hop max, final 200"
if [[ "$a2_fail" -eq 1 ]]; then status_a2="FAIL"; detail_a2="Au moins un redirect legacy n'est pas 301, >1 hop ou final != 200"; fi

status_a3="PASS"; detail_a3="Canonical/OG cohérents, canonical en 200 sans redirect, sans ancien domaine"
if [[ "$meta_fail" -eq 1 ]]; then status_a3="FAIL"; detail_a3="Canonical/OG manquant, incohérent, ou canonical redirigé"; fi
if [[ "$meta_legacy_domain" -eq 1 ]]; then status_a3="FAIL"; detail_a3="Référence ancien domaine détectée dans HTML"; fi

status_a3_hreflang="PASS"; detail_a3_hreflang="hreflang fr + x-default présents"
if [[ "$meta_warn" -eq 1 ]]; then status_a3_hreflang="WARN"; detail_a3_hreflang="hreflang fr/x-default absent sur au moins une page clé"; fi

status_a4="PASS"; detail_a4="Sitemap 200 sans redirect, clés présentes, sans /resultats/, sans ancien domaine"
if [[ "$sitemap_fail" -eq 1 ]]; then status_a4="FAIL"; detail_a4="Sitemap invalide (code/hops/locs/domain)"; fi

status_a5="PASS"; detail_a5="robots.txt valide avec sitemap exact"
if [[ "$robots_fail" -eq 1 ]]; then status_a5="FAIL"; detail_a5="robots.txt invalide (domain/sitemap/disallow)"; fi
if [[ "$robots_warn" -eq 1 && "$robots_fail" -eq 0 ]]; then status_a5="WARN"; detail_a5="Allow: / absent (non bloquant)"; fi

status_a6="PASS"; detail_a6="Schema attendu présent (/ Organization/LocalBusiness, /services Service)"
if [[ "$schema_fail" -eq 1 ]]; then status_a6="FAIL"; detail_a6="Schema requis manquant"; fi

SUMMARY_JSON="$AUDIT_DIR/summary.json"
jq -n \
  --arg date "$DATE" \
  --arg audit_dir "$AUDIT_DIR" \
  --arg a1s "$status_a1" --arg a1d "$detail_a1" \
  --arg a2s "$status_a2" --arg a2d "$detail_a2" \
  --arg a3s "$status_a3" --arg a3d "$detail_a3" \
  --arg a3hs "$status_a3_hreflang" --arg a3hd "$detail_a3_hreflang" \
  --arg a4s "$status_a4" --arg a4d "$detail_a4" \
  --arg a5s "$status_a5" --arg a5d "$detail_a5" \
  --arg a6s "$status_a6" --arg a6d "$detail_a6" \
  '{
    date: $date,
    audit_dir: $audit_dir,
    checks: {
      A1_status_redirects: {status: $a1s, detail: $a1d},
      A2_legacy_redirects: {status: $a2s, detail: $a2d},
      A3_metadata_core: {status: $a3s, detail: $a3d},
      A3_hreflang: {status: $a3hs, detail: $a3hd},
      A4_sitemap: {status: $a4s, detail: $a4d},
      A5_robots: {status: $a5s, detail: $a5d},
      A6_schema: {status: $a6s, detail: $a6d}
    }
  }' > "$SUMMARY_JSON"

LIVE_MD="$AUDIT_DIR/live_checks.md"
cat > "$LIVE_MD" <<MARKDOWN
# Live Checks — $DATE

| Check | Status | Detail | Evidence |
|---|---|---|---|
| A1 Status + Redirects pages clés | $status_a1 | $detail_a1 | raw/a1_status_codes.txt |
| A2 Redirects legacy | $status_a2 | $detail_a2 | raw/a2_legacy_redirects.txt |
| A3 Canonical / OG | $status_a3 | $detail_a3 | raw/a3_meta_*.txt + raw/a3_html_*.html |
| A3 hreflang | $status_a3_hreflang | $detail_a3_hreflang | raw/a3_meta_*.txt |
| A4 Sitemap | $status_a4 | $detail_a4 | raw/a4_sitemap_raw.xml + raw/a4_sitemap_analysis.txt |
| A5 Robots | $status_a5 | $detail_a5 | raw/a5_robots.txt |
| A6 Schema.org | $status_a6 | $detail_a6 | raw/a6_schema.txt |
MARKDOWN

FIX_LOG="$AUDIT_DIR/fix_log.md"
if [[ ! -f "$FIX_LOG" ]]; then
  cat > "$FIX_LOG" <<'LOG'
# Fix Log

## Repo Structure

## Issues & Fixes
LOG
fi

echo "Audit completed: $AUDIT_DIR"
echo "- $LIVE_MD"
echo "- $SUMMARY_JSON"
