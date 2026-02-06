import { Container } from "@/components/Container";
import { Card, CardBody, CardHeader } from "@/components/Card";

export const metadata = {
  title: "Methodik & Ethik – Epstein Files Decoder"
};

export default function MethodikPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold">Methodik & Ethik</h1>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        Die Plattform gewinnt Autorität nicht durch Lautstärke, sondern durch <span className="text-white">prüfbare Regeln</span>.
        Unser Ziel ist ein Analyse-Tool, das Wahrheitsfindung fördert – ohne Opfer zu gefährden.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">1) Opferschutz</div>
            <div className="text-xs text-zinc-500">Nicht verhandelbar.</div>
          </CardHeader>
          <CardBody>
            <ul className="text-sm text-zinc-300 space-y-2">
              <li>• Keine ungeschwärzten Re-Uploads von Dokumenten/Bildern.</li>
              <li>• Keine Namen/Adressdaten von Betroffenen, Zeugen oder unbeteiligten Privatpersonen.</li>
              <li>• Jede neue Datenquelle durchläuft eine „Privacy Gate“-Prüfung.</li>
              <li>• Fehler-Meldeweg: Kontaktseite + schneller Korrektur-Log.</li>
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">2) Verifikation</div>
            <div className="text-xs text-zinc-500">Jede Aussage braucht ein Rückgrat.</div>
          </CardHeader>
          <CardBody>
            <ul className="text-sm text-zinc-300 space-y-2">
              <li>• Quellenhierarchie: Primärquelle &gt; seriöse Sekundärquelle &gt; Social.</li>
              <li>• Zitat-Regel: kurze Passage + Link + Kontext + Unsicherheiten.</li>
              <li>• Datenqualität: Duplikate, OCR-Fehler, Fake-Submissions sind erwartbar.</li>
              <li>• „Erwähnung ≠ Beweis“ wird im UI erzwungen (Labels/Badges).</li>
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">3) Redaktionelle Standards</div>
            <div className="text-xs text-zinc-500">E-A-T in der Praxis.</div>
          </CardHeader>
          <CardBody>
            <ul className="text-sm text-zinc-300 space-y-2">
              <li>• Jede Seite hat: Datum, Autor, Update-Historie, Quellenliste.</li>
              <li>• Korrekturen sind sichtbar (Changelog statt heimlicher Edits).</li>
              <li>• Keine reißerischen Bilder/Thumbnails – Daten statt Drama.</li>
              <li>• Trennung: „Fakt“, „Behauptung“, „Hypothese“, „offene Frage“.</li>
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">4) Monetarisierung & Transparenz</div>
            <div className="text-xs text-zinc-500">Vertrauen ist der Conversion-Motor.</div>
          </CardHeader>
          <CardBody>
            <ul className="text-sm text-zinc-300 space-y-2">
              <li>• Affiliate-Links sind als solche markiert.</li>
              <li>• Analytics nur Opt-in (datensparsam, DSGVO-freundlich).</li>
              <li>• Premium (optional): Alerts, Exporte, gespeicherte Graphen.</li>
              <li>• Keine Dark Patterns. Wir bauen Dominanz durch Integrität.</li>
            </ul>
          </CardBody>
        </Card>
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
        <div className="text-sm font-semibold">Praktische Pipeline (wenn ihr skaliert)</div>
        <div className="mt-2 text-sm text-zinc-300 space-y-2">
          <p>• Download offizieller Releases → Dedup (Hash) → Parsing/OCR → Entity Extraction → Privacy Gate → Index (Search).</p>
          <p>• Jede Extraktion landet erst in einer Review-Queue, bevor sie öffentlich wird.</p>
          <p>• Jede Seite bekommt automatisch JSON-LD (Schema) + Quellenliste + Update-Log.</p>
        </div>
      </div>
    </Container>
  );
}
