import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "../app/globals.css";
import Providers from "./Providers";
import { SITE_URL, organizationJsonLd } from "@/lib/company";
import { getDictionary, type Locale } from "@/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export function rootMetadata(lang: Locale): Metadata {
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}

// Shared <html> shell for the Ukrainian and English root layouts.
export default function RootDocument({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html lang={lang} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Providers lang={lang} dictionary={getDictionary(lang)}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
