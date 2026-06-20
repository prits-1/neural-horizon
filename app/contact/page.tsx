export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] px-6 py-32 text-white">
      <div className="mx-auto max-w-4xl">

        <div className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-400">
          Contact
        </div>

        <h1 className="mb-12 text-6xl font-bold">
          Get In Touch
        </h1>

        <div className="space-y-8 text-lg leading-9 text-gray-300">

          <p>
            Thank you for visiting Neural Horizon.
          </p>

          <p>
            For questions, feedback, collaborations, or business inquiries,
            please contact:
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-blue-400">
              Email
            </div>

            <div className="mt-3 text-2xl font-semibold">
              neuralhorizon1@email.com
            </div>
          </div>

          <p>
            We aim to respond to inquiries as soon as possible.
          </p>

        </div>
      </div>
    </main>
  );
}