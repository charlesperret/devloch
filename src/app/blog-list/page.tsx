import type { Metadata } from "next";

import { BlogListPage } from "@/components/pages/blog-list-page";

export const metadata: Metadata = {
  title: "Blog list",
  description: "Selection d'articles et ressources pour booster votre acquisition B2B.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  return <BlogListPage />;
}
