import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0F19] px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-300 bg-clip-text text-4xl font-bold text-transparent">
            Neural Horizon
          </h2>

          <p className="leading-8 text-gray-400">
            Exploring the future of artificial intelligence through insights,
            analysis, and technology news.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-white">
            Explore
          </h3>

          <div className="space-y-4 text-gray-400">
            <Link
              href="/articles"
              className="block transition hover:text-white"
            >
              Articles
            </Link>

            <Link
              href="/ai-tools"
              className="block transition hover:text-white"
            >
              AI Tools
            </Link>

            <Link
              href="/opinion"
              className="block transition hover:text-white"
            >
              Opinion
            </Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-white">
            Company
          </h3>

          <div className="space-y-4 text-gray-400">
            <Link
              href="/about"
              className="block transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/privacy"
              className="block transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="block transition hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              href="/contact"
              className="block transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-white">
            Connect
          </h3>

          <div className="space-y-4 text-gray-400">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              X (Twitter)
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              GitHub
            </a>

            <Link
              href="/contact"
              className="block transition hover:text-white"
            >
              Email
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
        © 2026 Neural Horizon · AI Explained. Future Decoded.
      </div>
    </footer>
  );
}