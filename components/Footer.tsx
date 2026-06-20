export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-20">

      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-4">

        <div>
          <h2 className="mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent">
            Neural Horizon
          </h2>

          <p className="leading-8 text-gray-400">
            Exploring the future of artificial intelligence.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold">
            Explore
          </h3>

          <div className="space-y-4 text-gray-400">
            <div>Articles</div>
            <div>AI News</div>
            <div>Future Tech</div>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold">
            Resources
          </h3>

          <div className="space-y-4 text-gray-400">
            <div>Newsletter</div>
            <div>Privacy</div>
            <div>Terms</div>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold">
            Connect
          </h3>

          <div className="space-y-4 text-gray-400">
            <div>X</div>
            <div>LinkedIn</div>
            <div>GitHub</div>
          </div>
        </div>

      </div>

      <div className="mt-20 text-center text-gray-500">
        © 2026 Neural Horizon · AI Explained. Future Decoded.
      </div>

    </footer>
  );
}