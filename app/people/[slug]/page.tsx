import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { people } from "@/lib/people";
import { Card, CardBody, CardHeader } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { ConnectionGraph } from "@/components/ConnectionGraph";
import { JsonLd } from "@/components/JsonLd";
import { Curtain } from "@/components/pro/Curtain";

/**
 * Next.js 15 app routes: Netlify's typecheck may generate "params" as Promise.
 * Runtime passes an object; `await` works for both (Promise and non-Promise).
 */
type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = people.find((p) => p.slug === slug);
  if (!person) return {};
  return {
    title: `${person.name} – Profil | Epstein Files Decoder`,
    description: person.short,
    alternates: { canonical: `/people/${person.slug}/` },
  };
}

export default async function PersonPage({ params }: PageProps) {
  const { slug } = await params;

  const person = people.find((p) => p.slug === slug);
  if (!person) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    description: person.short,
  };

  return (
    <Container className="py-10">
      <JsonLd data={jsonLd} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{person.name}</h1>
          <p className="mt-2 text-zinc-300 max-w-3xl">{person.short}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge tone={person.type === "primär" ? "ok" : "neutral"}>
              {person.type === "primär" ? "Primärperson" : "Erwähnte Person"}
            </Badge>
            {person.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] rounded-full border border-zinc-800 px-3 py-1 text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href="/people"
            className="no-underline rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2 text-sm hover:bg-zinc-900"
          >
            ← People
          </Link>
          <Link
            href="/quellen"
            className="no-underline rounded-xl bg-white text-zinc-900 px-4 py-2 text-sm font-semibold"
          >
            Quellen →
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-6">
          <Card>
            <CardHeader>
              <div className="text-sm font-semibold">
                Key Points (nur mit Quellenlink)
              </div>
              <div className="text-xs text-zinc-500">
                Wir führen keine unbelegten Behauptungen – Kontext schlägt Drama.
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              {person.keyPoints.slice(0, 1).map((k) => (
                <div
                  key={k.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4"
                >
                  <div className="text-sm font-semibold">{k.label}</div>
                  <div className="text-sm text-zinc-300 mt-1">{k.detail}</div>
                  {k.source && (
                    <div className="text-xs text-zinc-400 mt-2">
                      Quelle:{" "}
                      <a href={k.source} target="_blank" rel="noreferrer">
                        {k.source}
                      </a>
                    </div>
                  )}
                </div>
              ))}

              {person.keyPoints.length > 1 && (
                <Curtain
                  title="Pro-Insight: weitere Key Points + Quellen-Kontext"
                  subtitle="Im Pro Command Center bekommst du zusätzliche Briefings, Filter, Exporte und mehr Kontext pro Erwähnung.
                  4,99€/Monat – jederzeit kündbar."
                />
              )}
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-sm font-semibold">Verbindungen (MVP)</div>
              <div className="text-xs text-zinc-500">
                Label zeigt nur Beziehungstyp; Details gehören in Deep-Dives.
              </div>
            </CardHeader>
            <CardBody className="space-y-3">
              {person.connections.length === 0 && (
                <div className="text-sm text-zinc-400">
                  Noch keine kuratierten Verbindungen. Ausbau: automatisierte
                  Indizierung + redaktionelle Freigabe.
                </div>
              )}
              {person.connections.slice(0, 1).map((c, idx) => {
                const target = people.find((p) => p.slug === c.to);
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold">
                          <Link href={`/people/${c.to}/`}>
                            {target?.name ?? c.to}
                          </Link>
                        </div>
                        <div className="text-xs text-zinc-500 mt-1">
                          {c.label}
                        </div>
                      </div>
                      {c.source && (
                        <a
                          className="text-xs text-zinc-300"
                          href={c.source}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Quelle →
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}

              {person.connections.length > 1 && (
                <Curtain
                  title="Pro-Insight: mehr Verbindungen + Evidenzstufen"
                  subtitle="Pro zeigt zusätzliche Kanten mit Evidenzstufe, Datierung und Dokumenttyp – ohne Spekulations-Bullshit."
                />
              )}
            </CardBody>
          </Card>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <ConnectionGraph focusSlug={person.slug} />

          <Card>
            <CardHeader>
              <div className="text-sm font-semibold">Interpretationsregeln</div>
              <div className="text-xs text-zinc-500">
                Damit die Plattform nicht zur Gerüchte-Maschine wird.
              </div>
            </CardHeader>
            <CardBody>
              <ul className="text-sm text-zinc-300 space-y-2">
                <li>• Erwähnung ≠ Beweis. Kontext & Primärquelle sind Pflicht.</li>
                <li>
                  • Keine Opferidentifikation, keine privaten Daten, keine Re-Uploads.
                </li>
                <li>
                  • Jede „Story“ braucht: Quelle → Zitat → Einordnung → Unsicherheiten.
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  );
}
