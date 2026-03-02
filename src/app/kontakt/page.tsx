import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktiere das Team von Hintergrundentferner.online",
};

export default function KontaktPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Kontakt
            </h1>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Hast du Fragen, Feedback oder Anregungen? Wir freuen uns auf deine
                Nachricht!
              </p>

              <form className="space-y-4" action="mailto:kontakt@hintergrundentferner.online" method="post" encType="text/plain">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                    placeholder="deine@email.de"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                    placeholder="Deine Nachricht..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-600"
                >
                  Nachricht senden
                </button>
              </form>

              <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Alternativ erreichst du uns per E-Mail:
                  <br />
                  <a
                    href="mailto:kontakt@hintergrundentferner.online"
                    className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                  >
                    kontakt@hintergrundentferner.online
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <GdprBanner />
    </div>
  );
}
