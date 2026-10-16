import type { Metadata } from "next";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import "@fontsource/libertinus-serif-display/400.css";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://parag-patil-portfolio.lunarbread9.chatgpt.site"),
  title: "Parag Patil — Software Engineer",
  description:
    "Portfolio of Parag Patil, a computer engineering student building software, AI/ML systems, and dependable backend infrastructure.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
