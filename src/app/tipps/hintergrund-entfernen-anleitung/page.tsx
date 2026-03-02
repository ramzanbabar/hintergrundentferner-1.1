import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";

export const metadata: Metadata = {
  title: "Hintergrund entfernen: Die komplette Anleitung 2026",
  description:
    "Schritt-für-Schritt-Anleitung für die perfekte Hintergrundentfernung mit KI. Von der Bildauswahl bis zum fertigen Ergebnis.",
};

export default function AnleitungPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Hintergrund entfernen: Die komplette Anleitung 2026
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              In dieser ausführlichen Anleitung erfährst du alles, was du über das
              Entfernen von Bildhintergründen wissen musst. Von der richtigen
              Bildauswahl bis zum perfekten Ergebnis.
            </p>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                1. Das richtige Bild auswählen
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Nicht jedes Bild eignet sich gleich gut für die
                Hintergrundentfernung. Bilder mit klaren Konturen und gutem
                Kontrast zwischen Vorder- und Hintergrund liefern die besten
                Ergebnisse. Portraits vor einfarbigen Hintergründen sind ideal,
                aber auch komplexere Bilder können gut verarbeitet werden.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Achte auf eine ausreichende Auflösung – mindestens 1000 Pixel in
                der längsten Seite sollten es sein. Zu kleine Bilder verlieren
                Details, zu große verlängern die Verarbeitungszeit.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                2. Das Tool verwenden
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Die Bedienung von Hintergrundentferner.online ist bewusst einfach
                gehalten. Lade dein Bild per Drag & Drop hoch, nutze die
                Zwischenablage mit Strg+V oder wähle eine Datei über den Button
                aus.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Nach dem Upload analysiert die KI dein Bild und entfernt
                automatisch den Hintergrund. Dieser Prozess dauert je nach
                Bildgröße und Geräteleistung zwischen 5 und 30 Sekunden.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                3. Hintergrund ersetzen
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Nach der Hintergrundentfernung kannst du einen neuen Hintergrund
                wählen. Die Optionen umfassen: Transparent (PNG), einfarbige
                Farben, Farbverläufe oder einen Blur-Effekt für den ursprünglichen
                Hintergrund.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                4. Das Ergebnis herunterladen
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Lade dein Ergebnis als PNG, JPG oder WebP herunter. PNG ist die
                beste Wahl für transparente Hintergründe, da es echte Transparenz
                unterstützt. Für Bilder mit festem Hintergrund kannst du auch JPG
                oder WebP wählen.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                5. Tipps für beste Ergebnisse
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                <li>Nutze gut belichtete Bilder ohne starke Schatten</li>
                <li>Vermeide Bilder mit Haaren vor komplexen Hintergründen</li>
                <li>Bei Produkten: einfarbiger Hintergrund erleichtert die KI-Arbeit</li>
                <li>Nachbearbeitung in Canva oder Photoshop für Feinschliff</li>
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
