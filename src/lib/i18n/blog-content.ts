import type { SupportedLocale } from "@/lib/i18n/slug-map";
import { normalizeLocalizedCopyDeep } from "@/lib/i18n/text-normalization";
import blogContentJson from "@/lib/i18n/blog-content.json";

type BlogArticleContent = {
  title: string;
  description: string;
  body: string[];
  author?: string;
  authorUrl?: string;
  date: string;
  category: string;
  relatedServiceSlug: string;
};

type BlogHubCopy = {
  h1: string;
  subtitle: string;
  description: string;
  breadcrumbHome: string;
  breadcrumbBlog: string;
  readMore: string;
  publishedOn: string;
  by: string;
};

function normalizeLocale(locale: SupportedLocale): string {
  return locale === "en" || locale === "de" || locale === "nl" ? locale : "fr";
}

export function getLocalizedBlogArticle(frSlug: string, locale: SupportedLocale): BlogArticleContent | null {
  const key = normalizeLocale(locale);
  const articles = (blogContentJson as { articles: Record<string, Record<string, BlogArticleContent>> }).articles;
  const entry = articles[frSlug];
  if (!entry) return null;
  return normalizeLocalizedCopyDeep(entry[key] ?? entry.fr, key as SupportedLocale);
}

export function getLocalizedBlogHub(locale: SupportedLocale): BlogHubCopy {
  const key = normalizeLocale(locale);
  const hub = (blogContentJson as { hubCopy: Record<string, BlogHubCopy> }).hubCopy;
  return normalizeLocalizedCopyDeep(hub[key] ?? hub.fr, key as SupportedLocale);
}

export function getAllLocalizedBlogArticles(locale: SupportedLocale): (BlogArticleContent & { frSlug: string })[] {
  const key = normalizeLocale(locale);
  const articles = (blogContentJson as { articles: Record<string, Record<string, BlogArticleContent>> }).articles;
  return Object.entries(articles).map(([frSlug, locales]) =>
    normalizeLocalizedCopyDeep(
      {
        frSlug,
        ...(locales[key] ?? locales.fr),
      },
      key as SupportedLocale,
    ),
  );
}
