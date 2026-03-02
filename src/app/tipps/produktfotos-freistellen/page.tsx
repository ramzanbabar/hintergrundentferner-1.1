import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";

export const metadata: Metadata = {
  title: "Produktfotos freistellen: Anleitung für Amazon & eBay Verkäufer",
  description:
    "So erstellst du professionelle Produktfotos mit weißem Hintergrund für Amazon, eBay und deinen Online-Shop.",
};

export default function ProduktfotosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Produktfotos freistellen: Anleitung für Amazon & eBay Verkäufer
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Professionelle Produktfotos sind der Schlüssel zum Erfolg im
              E-Commerce. Diese Anleitung zeigt dir, wie du schnell und kostenlos
              Produktfotos mit weißem Hintergrund erstellst.
            </p>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Warum weißer Hintergrund?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Ein weißer Hintergrund lenkt nicht vom Produkt ab, wirkt
                professionell und erfüllt die Anforderungen der großen
                Marktplätze. Amazon verlangt sogar zwingend einen rein weißen
                Hintergrund (RGB 255, 255, 255) für Hauptproduktfotos.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Schritt 1: Das richtige Ausgangsfoto
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Ein gutes Ausgangsfoto ist die Basis für ein perfektes Ergebnis.
                Achte auf gleichmäßige Beleuchtung, das Produkt sollte scharf
                fokussiert sein und idealerweise etwa 85% der Bildfläche einnehmen.
                Ein neutraler Hintergrund erleichtert die KI-Arbeit.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Schritt 2: Hintergrund entfernen
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Lade dein Produktfoto bei Hintergrundentferner.online hoch. Die KI
                erkennt automatisch das Produkt und entfernt den Hintergrund.
                Wähle dann &quot;Weiß&quot; als neuen Hintergrund.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Schritt 3: Anforderungen prüfen
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                <li>Bildformat: JPG oder PNG</li>
                <li>Mindestgröße: 1000x1000 Pixel (für Zoom-Funktion)</li>
                <li>Hintergrund: Rein weiß (RGB 255, 255, 255)</li>
                <li>Produktfüllung: Mindestens 85% der Bildfläche</li>
                <li>Keine Wasserzeichen oder Texte</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Stapelverarbeitung nutzen
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Hast du viele Produktfotos? Nutze die Stapelverarbeitung, um bis
                zu 20 Bilder gleichzeitig zu bearbeiten. Das spart Zeit bei
                großen Produktkatalogen.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <GdprBanner />
    </div>
  );
}
