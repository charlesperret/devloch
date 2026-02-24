/**
 * JsonLd — renders a JSON-LD <script> block for Schema.org structured data.
 *
 * Use in Server Components (layout.tsx, page.tsx) — NOT in Client Components.
 *
 * Usage:
 *   import { JsonLd } from "@/components/seo/json-ld";
 *   <JsonLd schema={{ "@context": "https://schema.org", "@type": "Organization", ... }} />
 *
 * Multiple schemas on one page:
 *   <JsonLd schema={[schema1, schema2]} />
 */

type JsonLdProps = {
  schema: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
