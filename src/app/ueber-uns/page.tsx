import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Über Hintergrundentferner.online - Professionelle Hintergrundentfernung kostenlos für alle",
};

export default function UeberUnsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Über uns
            </h1>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Unsere Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Professionelle Hintergrundentfernung kostenlos für alle. Wir
                glauben, dass jeder Zugang zu hochwertigen Bildbearbeitungstools
                haben sollte – ohne teure Abos, ohne Registrierungszwang und mit
                maximalem Datenschutz.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Datenschutz-First
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Unser wichtigstes Versprechen: Deine Bilder verlassen niemals dein
                Gerät. Die gesamte Verarbeitung erfolgt clientseitig in deinem
                Browser mittels moderner WebAssembly-Technologie. Das ist nicht
                nur schnell, sondern auch DSGVO-konform "by Design".
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Technologie
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Wir nutzen die Open-Source-Bibliothek @imgly/background-removal,
                die auf ONNX-Modellen (ISNet und U2Net) basiert. Diese Modelle
                wurden speziell für die präzise Segmentierung von Vorder- und
                Hintergrund trainiert und laufen effizient im Browser.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Unsere Werte
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                <li>
                  <strong>Datenschutz:</strong> Deine Daten gehören dir. Punkt.
                </li>
                <li>
                  <strong>Qualität:</strong> Modernste KI für professionelle
                  Ergebnisse.
                </li>
                <li>
                  <strong>Zugänglichkeit:</strong> Kostenlos, keine Anmeldung,
                  barrierefrei.
                </li>
                <li>
                  <strong>Transparenz:</strong> Open-Source-Technologie, klare
                  Geschäftsbedingungen.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Finanzierung
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Der Service wird durch Werbung (Google AdSense) und Affiliate-Links
                finanziert. Es gibt keine versteckten Kosten oder
                Premium-Funktionen – alle Features sind für alle Nutzer kostenlos
                verfügbar.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Kontakt
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fragen, Feedback oder Anregungen? Besuche unsere{" "}
                <a
                  href="/kontakt"
                  className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                >
                  Kontaktseite
                </a>
                .
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
