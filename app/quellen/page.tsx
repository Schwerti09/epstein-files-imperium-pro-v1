import { Container } from "@/components/Container";
import { Card, CardBody, CardHeader } from "@/components/Card";

export const metadata = {
  title: "Quellen & Update-Log – Epstein Files Decoder"
};

const sources = [
  {
    name: "DOJ Press Release (30.01.2026)",
    url: "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files",
    note: "Offizielle Mitteilung: Umfang, Quellenkategorien, Redaktionslogik, Warnung vor Fake-Submissions."
  },
  {
    name: "DOJ Hub: justice.gov/epstein",
    url: "https://www.justice.gov/epstein",
    note: "Zentraler Zugriffspunkt für veröffentlichte Dateien (Primärhub)."
  },
  {
    name: "The Guardian (30.01.2026) – Kontextreporting",
    url: "https://www.theguardian.com/us-news/2026/jan/30/epstein-files-3-million-new-pages",
    note: "Sekundärquelle: Einordnung, Beispiele zu E-Mail-Kontexten, politische Dynamik."
  },
  {
    name: "Axios (04.01.2024) – Unsealed court documents",
    url: "https://www.axios.com/2024/01/04/jeffrey-epstein-ghislaine-maxwell-associates-list",
    note: "Sekundärquelle: Überblick über entsiegelte Dokumente aus einem Zivilverfahren."
  }
];

const updates = [
  { date: "2026-02-06", item: "MVP-Launch: statische Site + People/Graph + Quellenhub + DSGVO-Seiten." },
  { date: "2026-02-20", item: "Geplant: Daten-Pipeline v0 (Dedup + Metadaten-Index + Search)." },
  { date: "2026-03-15", item: "Geplant: Story Builder v1 + Share Cards (mit Fakten-Overlay)." }
];

export default function QuellenPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold">Quellen & Update-Log</h1>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        Autorität entsteht durch <span className="text-white">reproduzierbare Pfade</span>:
        Jeder Fakt muss auf eine Quelle zeigen. Jede Änderung muss sichtbar sein.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">Primär- & Sekundärquellen</div>
            <div className="text-xs text-zinc-500">Start hier: DOJ Hub + Press Release</div>
          </CardHeader>
          <CardBody className="space-y-4">
            {sources.map(s => (
              <div key={s.url} className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                <div className="text-sm font-semibold">{s.name}</div>
                <div className="text-xs text-zinc-500 mt-1">{s.note}</div>
                <div className="text-xs text-zinc-300 mt-2">
                  <a href={s.url} target="_blank" rel="noreferrer">{s.url}</a>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">Update-Log</div>
            <div className="text-xs text-zinc-500">Transparenz statt stiller Edits</div>
          </CardHeader>
          <CardBody className="space-y-3">
            {updates.map(u => (
              <div key={u.date} className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                <div className="text-xs font-mono text-zinc-400">{u.date}</div>
                <div className="text-sm text-zinc-200 mt-1">{u.item}</div>
              </div>
            ))}
            <div className="text-xs text-zinc-500">
              Tipp: Für jede Content-Seite (Person/Story) automatisch: „Erstellt“, „Zuletzt aktualisiert“, „Quellen“, „Korrekturen“.
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
        <div className="text-sm font-semibold">Technische SEO-Basics (bereits drin)</div>
        <div className="mt-2 text-sm text-zinc-300 space-y-2">
          <p>• JSON-LD (Schema) auf Startseite & Personenprofilen.</p>
          <p>• Static export + trailingSlash für saubere URLs auf Vercel/Netlify.</p>
          <p>• Robots + Sitemap (siehe <code className="font-mono text-zinc-200">/robots.txt</code> & <code className="font-mono text-zinc-200">/sitemap.xml</code>).</p>
        </div>
      </div>
    </Container>
  );
}
