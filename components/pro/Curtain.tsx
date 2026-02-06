import Link from "next/link";

export function Curtain({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/70 to-zinc-950" />
        <div className="absolute -inset-8 blur-2xl opacity-50 bg-[radial-gradient(circle_at_top,#2a5c8b,transparent_60%)]" />
      </div>

      <div className="relative">
        <div className="text-xs text-zinc-400">🔒 Pro-Abschnitt</div>
        <div className="mt-1 text-sm font-semibold">{title}</div>
        <p className="mt-2 text-sm text-zinc-300 max-w-2xl">{subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/pricing"
            className="no-underline rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900"
          >
            Vorhang auf: 4,99€
          </Link>
          <Link
            href="/methodik"
            className="no-underline rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm"
          >
            Erst Methodik prüfen
          </Link>
        </div>

        <div className="mt-4 grid gap-2 text-xs text-zinc-400 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-2">Briefings & Updates</div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-2">Saved Graphs & Alerts</div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-2">CSV/JSON Exporte</div>
        </div>
      </div>
    </div>
  );
}
