import Link from "next/link";
import { Shield } from "lucide-react";

const FOOTER_LINKS = {
  tool: [
    { href: "/", label: "Hintergrund entfernen" },
    { href: "/batch-hintergrund-entfernen", label: "Stapelverarbeitung" },
    { href: "/hintergrundfarbe-aendern", label: "Hintergrundfarbe ändern" },
    { href: "/hintergrund-unscharf-machen", label: "Hintergrund unscharf" },
  ],
  anwendungsfaelle: [
    { href: "/passbild-hintergrund-entfernen", label: "Passbilder" },
    { href: "/produktfoto-hintergrund-entfernen", label: "Produktfotos" },
    { href: "/portraitfoto-hintergrund-entfernen", label: "Portraits" },
    { href: "/logo-hintergrund-entfernen", label: "Logos" },
  ],
  rechtliches: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/nutzungsbedingungen", label: "Nutzungsbedingungen" },
    { href: "/kontakt", label: "Kontakt" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-1">
              <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-lg font-bold text-transparent">
                Hintergrundentferner
              </span>
              <span className="text-lg font-normal text-gray-400 dark:text-gray-500">
                .online
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Kostenloser KI-Hintergrundentferner für alle. Keine Anmeldung, keine
              Uploads – läuft direkt im Browser.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span>Dein Bild verlässt nie deinen Browser</span>
            </div>
          </div>

          {/* Tool */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100">
              Tool
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.tool.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Anwendungsfälle */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100">
              Anwendungsfälle
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.anwendungsfaelle.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.rechtliches.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2026 Hintergrundentferner.online — Kostenloser KI Hintergrundentferner.
              Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Powered by{" "}
              <a
                href="https://github.com/imgly/background-removal-js"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500"
              >
                @imgly/background-removal
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
