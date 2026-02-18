import type { Metadata } from "next";

import { BlogPage } from "@/components/pages/blog-page";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles, retours terrain et methodes pour la prospection B2B.",
};

export default function Page() {
  return <BlogPage />;
}
