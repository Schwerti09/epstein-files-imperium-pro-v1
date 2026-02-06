import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-16">
      <Container className="py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold">Epstein Files Decoder</div>
          <p className="mt-2 text-sm text-zinc-400">
            Wir hosten keine ungeschwärzten Originaldokumente und keine sensiblen Opferdaten. Wir verlinken auf Primärquellen und
            erklären Kontext, Unsicherheiten und Methodik.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Rechtliches</div>
          <ul className="mt-2 space-y-2 text-zinc-300">
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
            <li><Link href="/agb">AGB</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Transparenz</div>
          <ul className="mt-2 space-y-2 text-zinc-300">
            <li><Link href="/methodik">Methodik & Opferschutz</Link></li>
            <li><Link href="/quellen">Quellen & Updates</Link></li>
            <li><Link href="/pricing">Abo & Finanzierung</Link></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Wissens-Bank • Build: static export (Vercel/Netlify)
      </div>
    </footer>
  );
}
