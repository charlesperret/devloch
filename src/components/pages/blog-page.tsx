import Link from "next/link";

import { WaveDivider } from "@/components/ui/wave-divider";

type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
};

const posts: BlogPost[] = [
  {
    title: "B2B commercial prospecter via Cold Outreach",
    excerpt: "Comment lancer une sequence efficace pour prendre des rendez-vous qualifies.",
    category: "Prospection",
  },
  {
    title: "Avez-vous deja recu un email d'une personne",
    excerpt: "Les principes qui augmentent les reponses sans degrader la delivrabilite.",
    category: "Email",
  },
  {
    title: "Pourquoi le developpement des ventes sappuie sur le hasard",
    excerpt: "Structurer le pipeline pour fiabiliser les prises de rendez-vous.",
    category: "Pipeline",
  },
  {
    title: "7 erreurs dans l'approche outbound",
    excerpt: "Ce qui freine la conversion et comment corriger rapidement.",
    category: "Methodologie",
  },
  {
    title: "Externaliser le developpement des ventes B2B",
    excerpt: "Quand externaliser, quels KPI suivre et comment garder la qualite.",
    category: "Operations",
  },
  {
    title: "Prospection B2B en Belgique en 2023",
    excerpt: "Retour terrain sur les canaux qui convertissent le mieux.",
    category: "Marche",
  },
  {
    title: "D'ou la reduction des frais a la vente",
    excerpt: "Optimiser le cout dacquisition en gardant un volume stable.",
    category: "Performance",
  },
  {
    title: "Pourquoi la personnalisation est importante",
    excerpt: "Cadencer la personnalisation sans perdre en scalabilite.",
    category: "Copywriting",
  },
  {
    title: "Quels indicateurs de performance suivre",
    excerpt: "Un tableau de bord simple pour piloter les cycles outbound.",
    category: "KPI",
  },
  {
    title: "Ce que 2023 a appris aux equipes de vente",
    excerpt: "Synthese de nos missions et pistes daction pour 2026.",
    category: "Insights",
  },
];

export function BlogPage() {
  return (
    <>
      <section className="bg-[#074f74] pt-16 text-white">
        <div className="mx-auto w-full max-w-screen-xl px-6 pb-14 text-center lg:px-10">
          <h1 className="text-4xl font-semibold lg:text-5xl">Blog</h1>
        </div>
        <WaveDivider tone="light" />
      </section>

      <section className="mx-auto w-full max-w-screen-xl px-6 py-12 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.title} className="rounded-lg border border-stroke bg-white p-4 shadow-soft">
              <div
                className={`flex aspect-[16/10] items-center justify-center rounded-md text-xs font-semibold uppercase tracking-[0.13em] ${
                  index % 3 === 0
                    ? "bg-gradient-to-br from-[#865a9d] via-[#4f6aa9] to-[#2d84b5] text-white"
                    : "bg-gradient-to-br from-[#dce7f1] to-[#eef4f8] text-[#567086]"
                }`}
              >
                {post.category}
              </div>
              <h2 className="mt-4 text-lg font-semibold leading-6 text-[#153a54]">{post.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#2a4c63]/80">{post.excerpt}</p>
              <Link prefetch={false}
                href="/blog-list"
                className="mt-4 inline-flex h-9 items-center rounded-md bg-[#0a608e] px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white"
              >
                Lire plus
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
