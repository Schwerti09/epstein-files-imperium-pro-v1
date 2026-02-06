import Link from "next/link";
import { Container } from "@/components/Container";
import { people } from "@/lib/people";
import { Card, CardBody, CardHeader } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";

export const metadata = {
  title: "People & Connections – Epstein Files Decoder"
};

export default function PeoplePage() {
  const primary = people.filter(p => p.type === "primär");
  const mentioned = people.filter(p => p.type === "erwähnt");

  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold">People & Connections</h1>
      <p className="mt-3 text-zinc-300">
        Diese Übersicht ist <span className="text-white">nicht</span> als „Schuldliste“ gedacht, sondern als Navigationshilfe:
        Primärpersonen (juristischer Kern) vs. erwähnte Personen (Erwähnung ≠ Beweis).
      </p>

      <div className="mt-6">
        <DisclaimerBanner />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">Primärpersonen</div>
                <div className="text-xs text-zinc-500">Kern der offiziellen Fälle/Ermittlungen</div>
              </div>
              <Badge tone="ok">{primary.length}</Badge>
            </div>
          </CardHeader>
          <CardBody className="space-y-3">
            {primary.map(p => (
              <Link key={p.slug} href={`/people/${p.slug}/`} className="no-underline block rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 hover:bg-zinc-900">
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-zinc-500 mt-1">{p.short}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.slice(0,4).map(t => (
                    <span key={t} className="text-[11px] rounded-full border border-zinc-800 px-3 py-1 text-zinc-300">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">Erwähnte Personen</div>
                <div className="text-xs text-zinc-500">Erwähnung in Kontexten/Metadaten • kein Beweis</div>
              </div>
              <Badge>{mentioned.length}</Badge>
            </div>
          </CardHeader>
          <CardBody className="space-y-3">
            {mentioned.map(p => (
              <Link key={p.slug} href={`/people/${p.slug}/`} className="no-underline block rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 hover:bg-zinc-900">
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-zinc-500 mt-1">{p.short}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.slice(0,4).map(t => (
                    <span key={t} className="text-[11px] rounded-full border border-zinc-800 px-3 py-1 text-zinc-300">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </CardBody>
        </Card>
      </div>

      <div className="mt-8 text-sm text-zinc-400">
        Ausbaupfad: Automatische Indizierung offizieller Quellen, dedizierte Redaktions-Queue, Hash-basierte Zitatverifikation, und
        „Desinfo-Scanner“ für KI-Fakes (siehe <Link href="/topics">Themen</Link>).
      </div>
    </Container>
  );
}
