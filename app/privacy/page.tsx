export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] px-6 py-32 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-400">
          Legal
        </div>

        <h1 className="mb-12 text-6xl font-bold">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-lg leading-9 text-gray-300">
          <p>
            At Neural Horizon, your privacy is important to us.
            We do not collect personally identifiable information unless you
            voluntarily provide it.
          </p>

          <p>
            Anonymous analytics, cookies, and third-party services may be used
            to improve user experience and understand website traffic.
          </p>

          <p>
            Third-party advertising partners, including Google AdSense, may use
            cookies to deliver relevant advertisements.
          </p>

          <p>
            By using this website, you agree to this Privacy Policy.
          </p>

          <p>
            This policy may be updated periodically as the website evolves.
          </p>
        </div>
      </div>
    </main>
  );
}