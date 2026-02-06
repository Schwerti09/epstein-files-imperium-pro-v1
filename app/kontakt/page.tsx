import { Container } from "@/components/Container";
import { Card, CardBody, CardHeader } from "@/components/Card";

export const metadata = {
  title: "Kontakt – Epstein Files Decoder"
};

export default function KontaktPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold">Kontakt</h1>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        Hinweise auf Redaction-Fehler, sachliche Korrekturen oder technische Bugs? Schick uns die relevantesten Links + eine kurze Beschreibung.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">E-Mail</div>
            <div className="text-xs text-zinc-500">Für Korrekturen & rechtliche Hinweise</div>
          </CardHeader>
          <CardBody>
            <div className="text-sm text-zinc-300">
              <div className="text-zinc-400">Kontakt:</div>
              <div className="mt-1 font-mono text-zinc-200">rps-vertrieb@t-online.de</div>
            </div>
            <div className="mt-4 text-xs text-zinc-500">
              Bitte keine sensiblen personenbezogenen Daten senden. Wenn es um Opferschutz geht: nur Referenzen/Links, keine privaten Infos.
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-sm font-semibold">Transparenz</div>
            <div className="text-xs text-zinc-500">Wie wir mit Fehlern umgehen</div>
          </CardHeader>
          <CardBody>
            <ul className="text-sm text-zinc-300 space-y-2">
              <li>• Jede Korrektur landet im <span className="text-white">Update-Log</span>.</li>
              <li>• Opferschutz-Anliegen werden priorisiert.</li>
              <li>• Wir reagieren lieber schnell und sauber als defensiv und langsam.</li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}
