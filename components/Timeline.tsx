import { timeline } from "@/lib/timeline";

export function Timeline() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
      <div className="text-sm font-semibold">Timeline (kuratierte Meilensteine)</div>
      <div className="mt-3 overflow-x-auto">
        <div className="min-w-[760px] grid grid-cols-5 gap-3">
          {timeline.map((t) => (
            <div key={t.date} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-3">
              <div className="text-xs font-mono text-zinc-400">{t.date}</div>
              <div className="mt-1 text-sm text-zinc-200">{t.title}</div>
              <div className="mt-1 text-xs text-zinc-500">{t.detail}</div>
              {t.source && (
                <div className="mt-2 text-xs text-zinc-400">
                  <a href={t.source} target="_blank" rel="noreferrer">Quelle</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
