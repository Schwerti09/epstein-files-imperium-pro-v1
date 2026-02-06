import Link from "next/link";
import { Container } from "@/components/Container";
import { Card, CardBody, CardHeader } from "@/components/Card";

export const metadata = {
  title: "Support – Epstein Files Decoder"
};

export default function SupportPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold">Support & Finanzierung</h1>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        Dieses Projekt bleibt bewusst <span className="text-white">werbefrei</span> und ohne Affiliate-Links.
        Finanzierung läuft über ein günstiges Abo – damit wir Recherche, Indexing, Betrieb und Opferschutz sauber tragen können.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">Newsletter (Intel Briefing)</div>
            <div className="text-xs text-zinc-500">1× pro Woche: neue Analysen, Korrekturen, Faktenchecks</div>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-zinc-300">
              MVP ohne Drittanbieter: Anmeldung per E-Mail (Double-Opt-In via Antwortmail).
              Später kannst du auf Ghost/ConvertKit/Mailchimp umstellen.
            </p>

            <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
              <div className="text-xs text-zinc-500">Anmelden (funktional)</div>
              <a
                className="mt-2 inline-flex no-underline items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900"
                href="mailto:rps-vertrieb@t-online.de?subject=Intel%20Briefing%20Anmeldung&body=Bitte%20tragt%20mich%20in%20den%20w%C3%B6chentlichen%20Intel%20Briefing-Newsletter%20ein.%0A%0AQuelle%3A%20Epstein%20Files%20Decoder%20Website"
              >
                Intel Briefing per E-Mail erhalten →
              </a>
              <div className="mt-3 text-xs text-zinc-500">
                Datenschutz: Wir nutzen deine E-Mail nur für das Briefing. Abmeldung jederzeit per Reply „STOP“.
              </div>
            </div>

            <div className="mt-4 text-xs text-zinc-500">
              Abo & Features: <Link href="/pricing">Pricing</Link>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">Analytics (DSGVO)</div>
            <div className="text-xs text-zinc-500">Nur mit Zustimmung, am besten privacy-first</div>
          </CardHeader>
          <CardBody>
            <ul className="text-sm text-zinc-300 space-y-2">
              <li>• Option A: Fathom oder Plausible (privacy-first).</li>
              <li>• Option B: Self-hosted Analytics (wenn du volle Kontrolle willst).</li>
              <li>• GA/Hotjar nur mit sauberem Consent-Flow + AV-Verträgen (und nur, wenn wirklich nötig).</li>
            </ul>
            <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 text-xs text-zinc-300">
              <div className="font-semibold">Setup-Hinweis</div>
              <div className="mt-2 text-zinc-400">
                Dieses Repo lädt Analytics nicht automatisch. Du kannst nach Consent client-side laden (z.B. via Script im Layout),
                sobald du deinen Anbieter festgelegt hast.
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
        <div className="text-sm font-semibold">Abo: Was du bekommst</div>
        <div className="mt-2 text-sm text-zinc-300 space-y-2">
          <p>• Pro Briefings (kuratiert, quellenbasiert, opferschützend)</p>
          <p>• Deep-Dive-Tools: Saved Searches, Alerts, Export (CSV/JSON)</p>
          <p>• Fokus: maximale Klarheit statt Gerüchte – mit nachvollziehbarer Methodik.</p>
        </div>
        <div className="mt-4 text-sm text-zinc-400">
          Siehe: <Link href="/pricing">Pricing</Link> • <Link href="/methodik">Methodik</Link>
        </div>
      </div>
    </Container>
  );
}
