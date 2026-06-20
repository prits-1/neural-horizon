import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Neural Horizon",
    template: "%s | Neural Horizon",
  },
  description:
    "Exploring the future of artificial intelligence through insights, analysis, and technology news.",
  keywords: [
    "Artificial Intelligence",
    "AI",
    "Machine Learning",
    "AI News",
    "Technology",
    "Future Tech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[#0b0f19] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}