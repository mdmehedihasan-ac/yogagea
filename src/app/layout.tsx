import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import SiteShell from "@/components/SiteShell";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "YogaGea a.s.d. – Yoga e Benessere a Piacenza",
    template: "%s | YogaGea a.s.d.",
  },
  description:
    "YogaGea è un'associazione sportiva dilettantistica a Piacenza dedicata alla pratica dello yoga, pilates, meditazione e qi gong. Scopri i nostri corsi e i nostri insegnanti qualificati.",
  keywords: [
    "yoga piacenza",
    "yogagea",
    "pilates piacenza",
    "meditazione piacenza",
    "corsi yoga",
    "ashtanga yoga",
    "vinyasa yoga",
    "hatha yoga",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "YogaGea a.s.d.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
