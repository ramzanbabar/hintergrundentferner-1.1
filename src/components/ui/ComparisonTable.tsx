import { Check, X } from "lucide-react";

interface ComparisonFeature {
  name: string;
  us: boolean;
  removeBg: boolean;
  adobe: boolean;
}

const FEATURES: ComparisonFeature[] = [
  { name: "Kostenlos", us: true, removeBg: false, adobe: false },
  { name: "Kein Account nötig", us: true, removeBg: false, adobe: false },
  { name: "Datenschutz (lokal)", us: true, removeBg: false, adobe: false },
  { name: "Hintergrund ersetzen", us: true, removeBg: false, adobe: true },
  { name: "Stapelverarbeitung", us: true, removeBg: false, adobe: true },
  { name: "Deutsche Sprache", us: true, removeBg: false, adobe: false },
  { name: "Dark Mode", us: true, removeBg: false, adobe: false },
];

export function ComparisonTable() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl">
          Warum wir?
        </h2>

        <div className="mx-auto max-w-4xl overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="p-4 text-left font-medium text-gray-600 dark:text-gray-400">
                  Funktion
                </th>
                <th className="p-4 text-center font-medium text-indigo-600 dark:text-indigo-400">
                  Hintergrundentferner
                </th>
                <th className="p-4 text-center font-medium text-gray-600 dark:text-gray-400">
                  remove.bg
                </th>
                <th className="p-4 text-center font-medium text-gray-600 dark:text-gray-400">
                  Adobe Express
                </th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feature, index) => (
                <tr
                  key={feature.name}
                  className="border-b border-gray-100 dark:border-gray-800"
                >
                  <td className="p-4 text-gray-700 dark:text-gray-300">
                    {feature.name}
                  </td>
                  <td className="p-4 text-center">
                    {feature.us ? (
                      <Check className="mx-auto h-5 w-5 text-emerald-500" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.removeBg ? (
                      <Check className="mx-auto h-5 w-5 text-emerald-500" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.adobe ? (
                      <Check className="mx-auto h-5 w-5 text-emerald-500" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Stand: Januar 2026
        </p>
      </div>
    </section>
  );
}
