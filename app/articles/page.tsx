import Link from "next/link";
import { articles } from "@/data/articles";
import SearchBar from "@/components/SearchBar";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-32">

      <div className="mx-auto max-w-7xl">

        <div className="mb-24 text-center">

          <div className="mb-5 text-sm uppercase tracking-[0.4em] text-blue-400">
            Neural Horizon
          </div>

          <h1 className="mb-8 text-6xl font-bold md:text-7xl">
            Latest Articles
          </h1>

          <p className="mx-auto mb-16 max-w-2xl text-xl text-gray-400">
            Insights and analysis shaping the future.
          </p>

          <SearchBar />

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {articles.map((article) => (
            <Link
              href={`/articles/${article.slug}`}
              key={article.slug}
            >
              <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-2">

                <img
                  src={article.image}
                  alt={article.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="p-8">

                  <div className="mb-4 text-sm text-blue-400">
                    {article.category}
                  </div>

                  <h2 className="mb-5 text-3xl font-bold">
                    {article.title}
                  </h2>

                  <p className="mb-8 text-gray-400">
                    {article.excerpt}
                  </p>

                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}