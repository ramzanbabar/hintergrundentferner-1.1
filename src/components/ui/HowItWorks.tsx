import { Upload, Wand2, Download } from "lucide-react";

const STEPS = [
  {
    icon: Upload,
    title: "Bild hochladen",
    description:
      "Ziehe dein JPG, PNG oder WebP ins Feld oder nutze Strg+V zum Einfügen aus der Zwischenablage.",
  },
  {
    icon: Wand2,
    title: "KI verarbeitet",
    description:
      "Unsere KI erkennt automatisch Vorder- und Hintergrund und entfernt diesen in Sekunden.",
  },
  {
    icon: Download,
    title: "Herunterladen",
    description:
      "Lade dein freigestelltes Bild als transparentes PNG herunter – kostenlos und ohne Anmeldung.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl">
          So funktioniert&apos;s
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Step number */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                {index + 1}
              </div>

              {/* Connector line (not on last item) */}
              {index < STEPS.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-indigo-200 md:block dark:bg-indigo-800" />
              )}

              <step.icon className="mx-auto mb-3 h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
