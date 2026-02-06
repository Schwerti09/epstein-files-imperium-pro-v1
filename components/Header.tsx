import Link from "next/link";
import { Container } from "./Container";

const nav = [
  { href: "/people", label: "People & Connections" },
  { href: "/topics", label: "Themen" },
  { href: "/methodik", label: "Methodik & Ethik" },
  { href: "/quellen", label: "Quellen" },
  { href: "/pricing", label: "Abo" },
  { href: "/pro", label: "Pro" },
];

export function Header() {
  return (
    <header className="border-b border-zinc-800">
      <Container className="py-5 flex items-center justify-between gap-4">
        <Link href="/" className="no-underline">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500/30 via-zinc-900 to-emerald-500/20 border border-zinc-800" />
            <div>
              <div className="text-sm font-semibold tracking-wide">Epstein Files Decoder</div>
              <div className="text-xs text-zinc-400">Ethical, verifizierbar, opferschützend</div>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-sm">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="no-underline text-zinc-200 hover:text-white">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/pricing" className="no-underline rounded-xl bg-white text-zinc-900 px-3 py-2 text-xs font-semibold">
            Upgrade 4,99€
          </Link>
          <Link href="/kontakt" className="no-underline rounded-xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-xs hover:bg-zinc-900">
            Kontakt
          </Link>
        </div>
      </Container>

      <Container className="pb-4 lg:hidden">
        <div className="grid grid-cols-2 gap-2 text-xs">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="no-underline rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 hover:bg-zinc-900">
              {i.label}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
}
