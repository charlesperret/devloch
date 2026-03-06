import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createClient } from '@sanity/client';

const slugMapPath = resolve(process.cwd(), 'src/lib/i18n/slug-map.json');
const slugMap = JSON.parse(readFileSync(slugMapPath, 'utf8'));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || process.env.SANITY_API_VERSION || '2025-01-01';
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error('Missing Sanity env vars. Required: SANITY_PROJECT_ID/NEXT_PUBLIC_SANITY_PROJECT_ID, SANITY_DATASET/NEXT_PUBLIC_SANITY_DATASET, SANITY_WRITE_TOKEN/SANITY_API_TOKEN');
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false, perspective: 'published' });

const normalizePath = (value) => {
  if (!value) return null;
  const withSlash = value.startsWith('/') ? value : `/${value}`;
  return withSlash.replace(/\/+$/, '') || '/';
};

const equalSlugObj = (a, b) => {
  return normalizePath(a?.fr) === normalizePath(b?.fr)
    && normalizePath(a?.en) === normalizePath(b?.en)
    && normalizePath(a?.de) === normalizePath(b?.de)
    && normalizePath(a?.nl) === normalizePath(b?.nl);
};

const docs = await client.fetch(`*[_type in ["page","service","caseStudy"] && defined(pageId)]{_id,_type,pageId,slug}`);

let patched = 0;
const changed = [];

for (const doc of docs) {
  const fromMap = slugMap[doc.pageId];
  if (!fromMap) continue;

  const targetSlug = {
    fr: normalizePath(fromMap.fr),
    en: normalizePath(fromMap.en),
    de: normalizePath(fromMap.de),
    nl: normalizePath(fromMap.nl),
  };

  if (equalSlugObj(doc.slug, targetSlug)) continue;

  await client.patch(doc._id).set({ slug: targetSlug, updatedAt: new Date().toISOString() }).commit();
  patched += 1;
  changed.push({ pageId: doc.pageId, id: doc._id, before: doc.slug, after: targetSlug });
}

console.log(JSON.stringify({ totalDocs: docs.length, patched, changed }, null, 2));
