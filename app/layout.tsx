import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mboa Pulse — Le Cameroun sort ici",
  description: "Concerts, festivals, soirées et expériences uniques : découvre les événements qui font vibrer le Cameroun avec Mboa Pulse.",
  applicationName: "Mboa Pulse",
  openGraph: {
    title: "Mboa Pulse — Le Cameroun sort ici",
    description: "Les événements qui font vibrer le Cameroun, au même endroit.",
    locale: "fr_CM",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#10152B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}><body className="min-h-full">{children}</body></html>;
}
