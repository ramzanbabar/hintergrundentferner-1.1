import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hintergrundentferner.online"),
  title: {
    default: "Hintergrund entfernen – Kostenlos & Sofort | Hintergrundentferner.online",
    template: "%s | Hintergrundentferner.online",
  },
  description:
    "Hintergrund kostenlos entfernen mit KI. Kein Download, keine Anmeldung. Direkt im Browser. JPG, PNG, WebP. Sofort als transparentes PNG herunterladen.",
  keywords: [
    "hintergrund entfernen",
    "hintergrund entfernen kostenlos",
    "foto hintergrund entfernen",
    "hintergrund transparent machen",
    "ki hintergrund entfernen",
    "freistellen kostenlos",
  ],
  authors: [{ name: "Hintergrundentferner.online" }],
  creator: "Hintergrundentferner.online",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://hintergrundentferner.online",
    siteName: "Hintergrundentferner.online",
    title: "Hintergrund entfernen – Kostenlos & Sofort",
    description:
      "Hintergrund kostenlos entfernen mit KI. Kein Download, keine Anmeldung. Direkt im Browser.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hintergrundentferner.online - KI Hintergrundentfernung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hintergrund entfernen – Kostenlos & Sofort",
    description:
      "Hintergrund kostenlos entfernen mit KI. Kein Download, keine Anmeldung.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
