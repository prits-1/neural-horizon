import Link from "next/link";
import { articles } from "@/data/articles";

export default function AIToolsPage() {
  const aiToolsArticles = articles.filter(
    (article) => article.category === "AI Tools"
  );

  return (
    <main className="min-h-screen bg-[#0B0F19] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-400">
          AI Tools
        </div>

        <h1 className="mb-16 text-6xl font-bold">
          AI Tools
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {aiToolsArticles.map((article) => (
            <Link
              href={`/articles/${article.slug}`}
              key={article.slug}
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2">

                <div className="mb-4 text-blue-400">
                  {article.category}
                </div>

                <h2 className="mb-6 text-3xl font-bold">
                  {article.title}
                </h2>

                <p className="leading-8 text-gray-400">
                  {article.excerpt}
                </p>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}