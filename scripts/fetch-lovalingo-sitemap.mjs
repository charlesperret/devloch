import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const LOVALINGO_SITEMAP_URL = "https://cdn.lovalingo.com/sitemap/aix_4lsv3rhzupizsd64v86j2p8w38aeli92.xml";
const OUTPUT_PATH = join(process.cwd(), "public", "sitemap.xml");

function isValidXmlSitemap(body) {
  const trimmed = body.replace(/^\uFEFF/, "").trimStart();
  return (
    trimmed.startsWith("<?xml") ||
    trimmed.startsWith("<urlset") ||
    trimmed.startsWith("<sitemapindex")
  );
}

async function main() {
  const response = await fetch(LOVALINGO_SITEMAP_URL, {
    headers: {
      Accept: "application/xml,text/xml;q=0.9,*/*;q=0.8",
    },
  });

  if (response.status !== 200) {
    throw new Error(`Lovalingo sitemap fetch failed (${response.status}) for ${LOVALINGO_SITEMAP_URL}`);
  }

  const body = await response.text();

  if (!isValidXmlSitemap(body)) {
    throw new Error("Lovalingo sitemap payload is not valid XML sitemap (expected <?xml, <urlset or <sitemapindex>)");
  }

  await mkdir(join(process.cwd(), "public"), { recursive: true });
  await writeFile(OUTPUT_PATH, body, "utf8");
  console.log(`Lovalingo sitemap written to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
