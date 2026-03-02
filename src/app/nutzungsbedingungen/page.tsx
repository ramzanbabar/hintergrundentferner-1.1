import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen",
  description: "Nutzungsbedingungen von Hintergrundentferner.online",
};

export default function NutzungsbedingungenPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Nutzungsbedingungen
            </h1>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                1. Geltungsbereich
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Diese Nutzungsbedingungen gelten für die Nutzung der Website
                hintergrundentferner.online und des dort angebotenen
                Hintergrundentfernungs-Tools.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                2. Leistungsbeschreibung
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Hintergrundentferner.online bietet ein kostenloses Online-Tool zur
                Entfernung von Bildhintergründen mittels künstlicher Intelligenz.
                Die Verarbeitung erfolgt vollständig im Browser des Nutzers
                (Client-Side). Die Bilder werden nicht auf Server übertragen oder
                gespeichert.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                3. Nutzungsrecht
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Die Nutzung des Tools ist kostenlos. Du erhältst ein
                nicht-exklusives, nicht übertragbares Recht zur Nutzung des Tools
                für private und kommerzielle Zwecke.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                4. Urheberrecht
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Das Urheberrecht an den hochgeladenen und bearbeiteten Bildern
                verbleibt beim Nutzer. Wir erheben keinerlei Ansprüche an den
                hochgeladenen oder bearbeiteten Bildern.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                5. Haftungsausschluss
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Die Nutzung des Tools erfolgt auf eigene Gefahr. Wir übernehmen
                keine Gewähr für die Qualität, Genauigkeit oder Verwendbarkeit der
                Ergebnisse. Die Haftung für Schäden jeglicher Art ist ausgeschlossen,
                soweit diese nicht auf Vorsatz oder grober Fahrlässigkeit beruhen.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                6. Verbotene Nutzung
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Es ist untersagt, das Tool für illegaler Zwecke zu nutzen,
                einschließlich aber nicht beschränkt auf: Verarbeitung von Bildern
                mit illegalen Inhalten, Verletzung von Urheberrechten Dritter,
                Verletzung von Persönlichkeitsrechten.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                7. Gerichtsstand
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Es gilt deutsches Recht. Gerichtsstand ist Deutschland.
              </p>

              <p className="mt-8 text-sm text-gray-500">Stand: Januar 2026</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <GdprBanner />
    </div>
  );
}
