import type { Metadata } from "next";
import "./globals.css";
import { StatBar } from "@/components/StatBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Epstein Files Decoder – Ethical Analysis Platform",
  description:
    "Durchsuchbare, opferschützende Analyseplattform: Kontext, Quellen, Verifikation. Keine ungeschwärzten Re-Uploads.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Epstein Files Decoder",
    description: "Ethical decoding: Kontext, Quellen, Opferschutz.",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

function Analytics() {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  // For GDPR compliance, we load analytics only after consent.
  // This component is intentionally empty; analytics is loaded client-side via /support page instructions.
  // Keep the hook here as a future extension point.
  void provider;
  void plausibleDomain;
  return null;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <StatBar />
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
