import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-gray-300 dark:text-gray-700">
            404
          </h1>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Seite nicht gefunden
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Die gesuchte Seite existiert leider nicht.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white hover:bg-indigo-600"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
