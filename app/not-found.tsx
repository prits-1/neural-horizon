import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0B0F19] px-6 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-bold">404</h1>

        <h2 className="mb-6 text-4xl font-bold">
          Page Not Found
        </h2>

        <p className="mb-10 text-lg text-gray-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}