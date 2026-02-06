import Link from "next/link";
import { Container } from "@/components/Container";
import { Card, CardBody, CardHeader } from "@/components/Card";
import { SearchBox } from "@/components/SearchBox";
import { Timeline } from "@/components/Timeline";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { JsonLd } from "@/components/JsonLd";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Epstein Files Decoder",
    "description": "Ethical decoding and analysis platform for publicly released Epstein-related materials.",
    "inLanguage": "de",
    "url": "https://example.com/"
  };

  return (
    <Container className="py-10">
      <JsonLd data={jsonLd} />

      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Das Investigative Command Center – <span className="text-zinc-400">ohne Clickbait, ohne Opfer-Leaks.</span>
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Diese Plattform ist gebaut für <span className="text-white">Klarheit</span> in einem Datensturm:
            Wir verlinken auf Primärquellen, erklären Redaktionen/Schwärzungen, markieren Unsicherheiten,
            und trennen strikt zwischen <span className="text-white">Fakten</span> und <span className="text-white">Erwähnungen</span>.
          </p>

          <div className="mt-6">
            <DisclaimerBanner />
          </div>

          <div className="mt-6">
            <SearchBox />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="text-sm font-semibold">Sofort-Nutzen</div>
                <div className="text-xs text-zinc-500">In 30 Sekunden zum Kontext</div>
              </CardHeader>
              <CardBody>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li>• People-Index mit klaren Labels („primär“ vs „erwähnt“).</li>
                  <li>• Connection Graph für schnelle Überblicks-Modelle.</li>
                  <li>• Quellenlogik: Jede Behauptung braucht einen Link.</li>
                </ul>
                <div className="mt-3">
                  <Link href="/people" className="no-underline inline-flex items-center gap-2 rounded-xl bg-white text-zinc-900 px-4 py-2 text-sm font-semibold">
                    People & Connections →
                  </Link>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-sm font-semibold">Ethik-by-Design</div>
                <div className="text-xs text-zinc-500">Opferschutz ist Feature #1</div>
              </CardHeader>
              <CardBody>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li>• Keine ungeschwärzten Re-Uploads von Rohmaterial.</li>
                  <li>• Keine Identifikationsdaten von Betroffenen.</li>
                  <li>• Werbefrei: Finanzierung über ein günstiges Abo.</li>
                </ul>
                <div className="mt-3">
                  <Link href="/methodik" className="no-underline inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2 text-sm hover:bg-zinc-900">
                    Methodik & Ethik →
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="space-y-4">
            <Timeline />
            <Card>
              <CardHeader>
                <div className="text-sm font-semibold">Startpunkte</div>
                <div className="text-xs text-zinc-500">Was du als Nächstes klicken solltest</div>
              </CardHeader>
              <CardBody className="space-y-3">
                <Link href="/quellen" className="no-underline block rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 hover:bg-zinc-900">
                  <div className="text-sm font-semibold">1) Primärquellen öffnen</div>
                  <div className="text-xs text-zinc-500 mt-1">DOJ Hub, Letter to Congress, Update-Log</div>
                </Link>
                <Link href="/topics" className="no-underline block rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 hover:bg-zinc-900">
                  <div className="text-sm font-semibold">2) Themen-Deep-Dives</div>
                  <div className="text-xs text-zinc-500 mt-1">Redactions, Datenqualität, Desinfo-Abwehr</div>
                </Link>
                <Link href="/pricing" className="no-underline block rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 hover:bg-zinc-900">
                  <div className="text-sm font-semibold">3) Pro freischalten</div>
                  <div className="text-xs text-zinc-500 mt-1">Briefings, Tools, Exporte (4,99€/Monat)</div>
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}
