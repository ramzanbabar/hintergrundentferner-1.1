import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von Hintergrundentferner.online - DSGVO-konform und transparent",
};

export default function DatenschutzPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Datenschutzerklärung
            </h1>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                1. Datenschutz auf einen Blick
              </h2>

              <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950">
                <h3 className="mb-2 font-semibold text-emerald-700 dark:text-emerald-300">
                  Wichtig: Deine Bilder werden NICHT auf unsere Server hochgeladen!
                </h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  Die gesamte Bildverarbeitung erfolgt ausschließlich in deinem
                  Browser (Client-Side). Deine Bilder verlassen niemals dein
                  Gerät. Das ist unser wichtigstes Datenschutzversprechen.
                </p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                2. Verantwortlicher
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Der Verantwortliche im Sinne der Datenschutz-Grundverordnung
                (DSGVO) und anderer nationaler Datenschutzgesetze ist:
                <br />
                [Name und Kontaktdaten einfügen]
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                3. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                3.1 Bildverarbeitung
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bei der Nutzung unseres Hintergrundentfernungs-Tools werden die
                hochgeladenen Bilder ausschließlich lokal in deinem Browser
                verarbeitet. Es erfolgt KEINE Übertragung auf unsere Server oder
                eine Speicherung der Bilder. Die KI-Modelle laufen vollständig
                clientseitig mittels WebAssembly.
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                3.2 Server-Log-Dateien
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unser Webhosting-Anbieter erhebt und speichert automatisch
                Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
                automatisch an uns übermittelt. Dies sind: Browsertyp und -version,
                verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden
                Rechners, Uhrzeit der Serveranfrage.
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                3.3 Cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Wir verwenden Cookies für: Technisch notwendige Cookies
                (Einwilligungsauswahl) und optional Analyse-Cookies und
                Werbe-Cookies (nach Einwilligung).
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                4. Google AdSense und Google Analytics
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Diese Website verwendet Google AdSense und Google Analytics. Diese
                Dienste werden erst nach deiner ausdrücklichen Einwilligung
                aktiviert. Die Daten werden gemäß der Datenschutzrichtlinien von
                Google verarbeitet.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                5. Ihre Rechte
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Sie haben jederzeit das Recht auf: Auskunft (Art. 15 DSGVO),
                Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO),
                Einschränkung der Verarbeitung (Art. 18 DSGVO),
                Datenübertragbarkeit (Art. 20 DSGVO), Widerspruch (Art. 21 DSGVO).
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                6. Beschwerderecht
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren,
                wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
                personenbezogenen Daten gegen die DSGVO verstößt.
              </p>

              <p className="mt-8 text-sm text-gray-500">
                Stand: Januar 2026 - Diese Datenschutzerklärung wird regelmäßig
                aktualisiert.
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
