import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";

export const metadata: Metadata = {
  title: "PNG oder JPG? Das beste Format für transparente Hintergründe",
  description:
    "Welches Bildformat ist das richtige? Ein Vergleich von PNG, JPG und WebP für Hintergrundentfernung.",
};

export default function FormatPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
              PNG oder JPG? Das beste Format für transparente Hintergründe
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Die Wahl des richtigen Dateiformats ist entscheidend für die Qualität
              und Verwendbarkeit deiner Bilder. Hier erfährst du, wann welches
              Format die beste Wahl ist.
            </p>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                PNG – Der Standard für Transparenz
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                PNG (Portable Network Graphics) ist das einzige gängige Format,
                das echte Transparenz unterstützt. Es nutzt einen Alpha-Kanal,
                der für jeden Pixel eine eigene Transparenzstufe speichern kann.
                Das macht PNG zur ersten Wahl für: Logos, Grafiken mit
                transparentem Hintergrund, Screenshots und Web-Grafiken.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Der Nachteil: PNG-Dateien sind größer als JPG bei Fotos, da die
                Komprimierung verlustfrei arbeitet.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                JPG/JPEG – Ideal für Fotos
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                JPG ist perfekt für Fotos mit vielen Farben und Details. Die
                verlustbehaftete Komprimierung sorgt für kleine Dateigrößen,
                unterstützt aber keine Transparenz. Der Hintergrund wird immer
                durch eine Farbe (meist Weiß) ersetzt.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                WebP – Der moderne Allrounder
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                WebP vereint die Vorteile von PNG und JPG: Es unterstützt
                Transparenz und bietet gleichzeitig kleinere Dateigrößen durch
                moderne Komprimierung. Die Browserunterstützung ist mittlerweile
                sehr gut, aber einige ältere Programme können WebP noch nicht
                öffnen.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Empfehlung
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                <li>
                  <strong>Transparenter Hintergrund:</strong> PNG oder WebP
                </li>
                <li>
                  <strong>Weißer Hintergrund:</strong> JPG oder WebP
                </li>
                <li>
                  <strong>Webnutzung:</strong> WebP für beste Performance
                </li>
                <li>
                  <strong>Print:</strong> PNG in hoher Auflösung
                </li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <GdprBanner />
    </div>
  );
}
