import { Container } from "@/components/Container";
import { Card, CardBody, CardHeader } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { PricingCheckout } from "@/components/pro/PricingCheckout";

export const metadata = {
  title: "Abo – Epstein Files Decoder",
};

export default function PricingPage() {
  return (
    <Container className="py-10">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold">Pro-Zugang (4,99 € / Monat)</h1>
        <p className="mt-3 text-zinc-300">
          Kostenlos bekommst du Übersicht, Methodik, Quellen und ein solides Grundgerüst. Pro schaltet die tieferen Briefings
          und Werkzeuge frei – ohne Werbung, ohne Affiliate-Links, ohne Datenhandel.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge tone="ok">Werbefrei</Badge>
          <Badge>Quellenpflicht</Badge>
          <Badge tone="warn">Opferschutz zuerst</Badge>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">Was du bekommst</div>
            <div className="text-xs text-zinc-500">Substanz statt Sensations-Salat</div>
          </CardHeader>
          <CardBody>
            <ul className="text-sm text-zinc-300 space-y-2">
              <li>• Pro Briefings: kuratiert, quellenbasiert, mit Unsicherheiten markiert</li>
              <li>• Deep-Dive Tools: gespeicherte Suchen, Alerts, Export (CSV/JSON) – schrittweise aktiviert</li>
              <li>• „Vorhang“-Modus: Teaser bleibt öffentlich, die Details sind sauber hinter Pro</li>
              <li>• Fokus 2026+: Skalierbare Datenpipeline + Verifikations-Layer</li>
            </ul>

            <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 text-xs text-zinc-400">
              Kündigung jederzeit zum Ende der Laufzeit. Zahlung über Stripe. Kein Tracking ohne Consent.
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">Jetzt freischalten</div>
            <div className="text-xs text-zinc-500">1 Minute. Kein Konto. E-Mail reicht.</div>
          </CardHeader>
          <CardBody>
            <PricingCheckout />
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}
