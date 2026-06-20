import { MetadataRoute } from "next";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://neuralhorizon.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://neuralhorizon.vercel.app/articles",
      lastModified: new Date(),
    },

    ...articles.map((article) => ({
      url: `https://neuralhorizon.vercel.app/articles/${article.slug}`,
      lastModified: new Date(),
    })),
  ];
}