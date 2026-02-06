import { Badge } from "./Badge";

export function DisclaimerBanner() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold">Wichtiger Hinweis zur Interpretation</div>
          <p className="mt-1 text-sm text-zinc-400">
            Eine Erwähnung in Akten, E-Mails oder Ermittlungsunterlagen ist <span className="text-zinc-200">kein Beweis</span> für strafbares Handeln.
            Unsere Profile unterscheiden strikt zwischen <span className="text-zinc-200">primären, juristisch festgestellten Fakten</span> und
            <span className="text-zinc-200"> bloßen Erwähnungen</span>. Opferschutz hat Vorrang: keine sensiblen Identifikationsdaten, keine ungeschwärzten Re-Uploads.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge tone="ok">Fakten {'>'} Spekulation</Badge>
          <Badge tone="warn">Opferschutz zuerst</Badge>
          <Badge>Quellenpflicht</Badge>
        </div>
      </div>
    </div>
  );
}
