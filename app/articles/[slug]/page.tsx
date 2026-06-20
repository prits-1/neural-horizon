import { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import ReadingProgress from "@/components/ReadingProgress";
import RelatedArticles from "@/components/RelatedArticles";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Neural Horizon",
    };
  }

  return {
    title: `${article.title} | Neural Horizon`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <ReadingProgress />

      {/* Hero */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-16 left-1/2 w-full max-w-5xl -translate-x-1/2 px-6">
          <div className="mb-4 text-blue-400">
            {article.category}
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            {article.title}
          </h1>

          <div className="mt-8 flex gap-6 text-gray-300">
            <span>{article.author}</span>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {article.tags.map((tag) => (
              <div
                key={tag}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-24">
        {article.content
          .trim()
          .split("\n\n")
          .map((paragraph, index) => (
            <p
              key={index}
              className="mb-10 text-xl leading-10 text-gray-300"
            >
              {paragraph}
            </p>
          ))}

        <RelatedArticles currentSlug={slug} />
      </div>
    </main>
  );
}