import Link from "next/link";
import { articles } from "@/data/articles";

interface Props {
  currentSlug: string;
}

export default function RelatedArticles({ currentSlug }: Props) {
  const related = articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 2);

  return (
    <section className="mt-32 border-t border-white/10 pt-20">
      <h2 className="mb-12 text-4xl font-bold">
        Continue Reading
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {related.map((article) => (
          <Link
            href={`/articles/${article.slug}`}
            key={article.slug}
          >
            <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-2">

              <img
                src={article.image}
                alt={article.title}
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-8">

                <div className="mb-3 text-sm text-blue-400">
                  {article.category}
                </div>

                <h3 className="mb-5 text-3xl font-bold">
                  {article.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {article.excerpt}
                </p>

              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}