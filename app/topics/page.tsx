import Link from "next/link";
import { Container } from "@/components/Container";
import { Card, CardBody, CardHeader } from "@/components/Card";

export const metadata = {
  title: "Themen – Epstein Files Decoder"
};

const topics = [
  {
    title: "Redactions & Opferschutz",
    desc: "Warum Schwärzungen existieren, wo sie versagen, und wie man Opfer schützt, ohne Wahrheit zu begraben.",
    bullets: [
      "Redaction-Kategorien (Privatsphäre, laufende Ermittlungen, Privilegien)",
      "Kein Re-Upload von Rohmaterial mit identifizierenden Daten",
      "Public Corrections: Meldeweg für Redaction-Fehler"
    ],
    href: "/methodik/"
  },
  {
    title: "Datenqualität & Fake-Content",
    desc: "Das DOJ weist explizit darauf hin, dass auch gefälschte/falsch eingereichte Materialien enthalten sein können.",
    bullets: [
      "Hash-basierte Zitatverifikation",
      "Quellenranking: Primärquelle > seriöse Sekundärquelle > Social",
      "KI-Fake-Deduper: perceptual hashes + Reverse Image Search"
    ],
    href: "/quellen/"
  },
  {
    title: "Desinformation & Memetik",
    desc: "Wie Narrative entstehen und warum 'Name-Dropping' oft wie ein Virus funktioniert.",
    bullets: [
      "„Erwähnung ≠ Schuld“ als UI-Guardrail",
      "Faktencheck-Sektion pro viraler Behauptung",
      "Transparente Korrekturen & Änderungslog"
    ],
    href: "/quellen/"
  },
  {
    title: "Abo ohne Vertrauensverlust",
    desc: "Funding ist nötig – aber ohne Werbung, ohne Affiliate-Links und ohne Datenhandel.",
    bullets: [
      "Paywall als Produkt: klare Vorschau, klarer Preis, klare Kündigung",
      "Privacy-first Analytics (optional, nur nach Consent)",
      "Pro: Briefings, Alerts, Exporte, Saved Graphs"
    ],
    href: "/pricing/"
  }
];

export default function TopicsPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold">Themen</h1>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        Hier liegen die echten Dominanz-Hebel: nicht nur „mehr Daten“, sondern bessere <span className="text-white">Interpretation</span>, bessere <span className="text-white">Verifikation</span>,
        bessere <span className="text-white">UX-Guardrails</span>.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {topics.map(t => (
          <Card key={t.title}>
            <CardHeader>
              <div className="text-sm font-semibold">{t.title}</div>
              <div className="text-xs text-zinc-500 mt-1">{t.desc}</div>
            </CardHeader>
            <CardBody>
              <ul className="text-sm text-zinc-300 space-y-2">
                {t.bullets.map(b => <li key={b}>• {b}</li>)}
              </ul>
              <div className="mt-4">
                <Link href={t.href} className="no-underline inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2 text-sm hover:bg-zinc-900">
                  Weiterlesen →
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
        <div className="text-sm font-semibold">Roadmap (Dominanz-Modus)</div>
        <div className="mt-2 text-sm text-zinc-300 space-y-2">
          <p>1) Automatische Metadaten-Pipeline (Download → Dedup → OCR/Parsing → Victim-Redaction Guard).</p>
          <p>2) Suchindex (OpenSearch/Elastic) + „concept search“ (semantisch).</p>
          <p>3) Story Builder + Share Cards (virales Asset, aber mit Fakten-Overlay).</p>
          <p>4) Premium: Alerts, CSV/JSON Exporte, Saved Graphs, API Access.</p>
        </div>
        <div className="mt-4 text-sm text-zinc-400">
          Startpunkt dafür ist die <Link href="/quellen">Quellen-Seite</Link> (Primärhub + Update-Log).
        </div>
      </div>
    </Container>
  );
}
