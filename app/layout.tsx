import type { Metadata } from "next";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import "@fontsource/libertinus-serif-display/400.css";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mrparag.tech"),

  title: "Parag Patil — Software Engineer",
  description:
    "Explore Parag Patil's portfolio featuring software engineering, AI/ML projects, backend development, research, publications, and technical experience.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },

  openGraph: {
    type: "website",
    url: "https://mrparag.tech/",
    siteName: "Parag Patil Portfolio",
    title: "Parag Patil — Software Engineer",
    description:
      "Software engineering, AI/ML projects, backend development, research, and publications by Parag Patil.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Parag Patil — Software Engineer",
    description:
      "Explore Parag Patil's software engineering projects, AI/ML research, backend development, and publications.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
