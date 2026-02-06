"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { allSearchItems } from "@/lib/search";

export function SearchBox() {
  const [q, setQ] = useState("");

  const fuse = useMemo(() => {
    return new Fuse(allSearchItems, {
      includeScore: true,
      threshold: 0.35,
      keys: ["title", "subtitle", "tags"]
    });
  }, []);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    return fuse.search(q).slice(0, 8).map(r => r.item);
  }, [q, fuse]);

  return (
    <div className="w-full">
      <label className="text-xs text-zinc-400">Suchen (Person, Thema, Quelle)</label>
      <div className="mt-2 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder='Beispiel: "Maxwell", "Transparenzgesetz", "Redactions"'
          className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-600"
        />
      </div>

      {results.length > 0 && (
        <div className="mt-3 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-2">
          <div className="text-xs text-zinc-500 px-2 pt-1">Top Treffer</div>
          <ul className="mt-1">
            {results.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="no-underline block rounded-xl px-3 py-2 hover:bg-zinc-900">
                  <div className="text-sm text-zinc-200">{r.title}</div>
                  <div className="text-xs text-zinc-500">{r.subtitle}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
