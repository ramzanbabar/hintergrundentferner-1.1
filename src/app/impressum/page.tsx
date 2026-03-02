import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Hintergrundentferner.online - Angaben gemäß §5 TMG",
};

export default function ImpressumPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Impressum
            </h1>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                [Vorname Nachname]
                <br />
                [Straße Hausnummer]
                <br />
                [PLZ Ort]
                <br />
                Deutschland
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Kontakt
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                E-Mail: [kontakt@hintergrundentferner.online]
                <br />
                Telefon: [+49 XXX XXXXXXX]
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                [Vorname Nachname]
                <br />
                [Adresse wie oben]
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Haftungsausschluss
              </h2>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Haftung für Inhalte
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich.
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Haftung für Links
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Urheberrecht
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>

              <p className="mt-8 text-sm text-gray-500">
                Hinweis: Die mit [Klammern] markierten Felder müssen durch deine
                echten Daten ersetzt werden.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <GdprBanner />
    </div>
  );
}
