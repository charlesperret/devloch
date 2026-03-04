#!/usr/bin/env node

import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, "public/images/devlo_favicon-96x96.webp");

const targets = {
  ico: resolve(root, "public/favicon.ico"),
  png16: resolve(root, "public/favicon-16x16.png"),
  png32: resolve(root, "public/favicon-32x32.png"),
  apple: resolve(root, "public/apple-touch-icon.png"),
  android192: resolve(root, "public/android-chrome-192x192.png"),
  android512: resolve(root, "public/android-chrome-512x512.png"),
  manifest: resolve(root, "public/site.webmanifest"),
};

const required = Object.values(targets);
const missing = required.filter((filePath) => !existsSync(filePath));

if (!existsSync(source)) {
  console.error(`Missing source favicon asset: ${source}`);
  process.exit(1);
}

if (missing.length === 0) {
  console.log("All favicon assets already exist; no generation needed.");
  process.exit(0);
}

let sharp;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  console.error("Missing dependency: sharp. Install sharp to generate missing favicon assets.");
  process.exit(1);
}

mkdirSync(dirname(targets.png16), { recursive: true });

await sharp(source).resize(16, 16).png().toFile(targets.png16);
await sharp(source).resize(32, 32).png().toFile(targets.png32);
await sharp(source).resize(180, 180).png().toFile(targets.apple);
await sharp(source).resize(192, 192).png().toFile(targets.android192);
await sharp(source).resize(512, 512).png().toFile(targets.android512);

if (!existsSync(targets.ico)) {
  // Fallback: keep an .ico path available by duplicating the 32x32 icon.
  // Browsers gracefully handle this in modern stacks, and project already serves explicit PNG icons.
  copyFileSync(targets.png32, targets.ico);
}

const manifest = {
  name: "devlo",
  short_name: "devlo",
  icons: [
    { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
  theme_color: "#0B2A3A",
  background_color: "#0B2A3A",
  display: "standalone",
  start_url: "/",
};

writeFileSync(targets.manifest, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

// Ensure existing manifest stays valid JSON even when partially present.
JSON.parse(readFileSync(targets.manifest, "utf8"));

console.log("Generated missing favicon assets.");
