"use client";

import { useState } from "react";
import Link from "next/link";
import { articles } from "@/data/articles";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative mx-auto mb-20 max-w-3xl">

      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-6 text-lg outline-none backdrop-blur-2xl"
      />

      {query && (
        <div className="absolute mt-4 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#111827]">

          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
              >
                <div className="border-b border-white/5 p-6 transition hover:bg-white/[0.05]">

                  <div className="mb-2 text-blue-400">
                    {article.category}
                  </div>

                  <div className="text-xl font-semibold">
                    {article.title}
                  </div>

                </div>
              </Link>
            ))
          ) : (
            <div className="p-6 text-gray-400">
              No articles found.
            </div>
          )}

        </div>
      )}
    </div>
  );
}