"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Tool" },
  {
    href: "#",
    label: "Anwendungsfälle",
    children: [
      { href: "/passbild-hintergrund-entfernen", label: "Passbilder" },
      { href: "/produktfoto-hintergrund-entfernen", label: "Produktfotos" },
      { href: "/portraitfoto-hintergrund-entfernen", label: "Portraits" },
      { href: "/logo-hintergrund-entfernen", label: "Logos" },
      { href: "/batch-hintergrund-entfernen", label: "Stapelverarbeitung" },
    ],
  },
  { href: "/tipps", label: "Tipps" },
  { href: "/ueber-uns", label: "Über uns" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-gray-800 dark:bg-gray-950/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-xl font-bold text-transparent">
            Hintergrundentferner
          </span>
          <span className="text-xl font-normal text-gray-400 dark:text-gray-500">
            .online
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.children ? (
                <>
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute left-0 top-full w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#tool"
            className="hidden rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600 md:block"
          >
            Jetzt kostenlos nutzen
          </Link>
          {/* Mobile menu button */}
          <button
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <nav className="container mx-auto px-4 py-4">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <div className="py-2">
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {link.label}
                    </div>
                    <div className="ml-4 mt-2 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-1 text-gray-600 dark:text-gray-400"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 font-medium text-gray-900 dark:text-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/#tool"
              className="mt-4 block w-full rounded-lg bg-indigo-500 py-2 text-center font-medium text-white hover:bg-indigo-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Jetzt kostenlos nutzen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
