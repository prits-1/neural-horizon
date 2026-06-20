export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl">

        <div className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-400">
          About
        </div>

        <h1 className="mb-10 text-6xl font-bold">
          About Neural Horizon
        </h1>

        <div className="space-y-8 text-xl leading-10 text-gray-300">
          <p>
            Neural Horizon is a digital publication exploring the future of
            artificial intelligence, emerging technologies, and the changing
            world around us.
          </p>

          <p>
            Our mission is to make AI understandable and accessible through
            insights, analysis, and thoughtful articles.
          </p>

          <p>
            We cover AI tools, careers, future technologies, software,
            startups, and the impact of artificial intelligence on society.
          </p>
        </div>
      </div>
    </main>
  );
}