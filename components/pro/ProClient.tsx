"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const TOKEN_KEY = "efd_pro_token";

type Briefing = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  updatedAt: string;
};

export function ProClient() {
  const token = useMemo(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(TOKEN_KEY);
  }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [briefings, setBriefings] = useState<Briefing[]>([]);

  const [hasToken, setHasToken] = useState<boolean>(!!token);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setHasToken(!!localStorage.getItem(TOKEN_KEY));
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setError(null);
      const t = typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;
      if (!t) {
        setBriefings([]);
        setHasToken(false);
        return;
      }
      setHasToken(true);
      try {
        setLoading(true);
        const url = new URL("/.netlify/functions/pro-content", window.location.origin);
        url.searchParams.set("kind", "briefings");
        const res = await fetch(url.toString(), {
          headers: { authorization: `Bearer ${t}` },
        });
        const data = (await res.json()) as { items?: Briefing[]; error?: string };
        if (!res.ok) throw new Error(data.error || "Pro-Content konnte nicht geladen werden.");
        if (!cancelled) setBriefings(data.items ?? []);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Unbekannter Fehler.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  function logout() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(TOKEN_KEY);
    setBriefings([]);
    setHasToken(false);
  }

  async function manageSubscription() {
    try {
      const t = typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;
      if (!t) throw new Error("Kein Token gefunden.");
      setError(null);
      const res = await fetch("/.netlify/functions/portal", {
        headers: { Authorization: `Bearer ${t}` },
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok) throw new Error(data.error || "Portal konnte nicht geöffnet werden.");
      if (data.url) window.location.href = data.url;
    } catch (e: any) {
      setError(e?.message || "Unbekannter Fehler.");
    }
  }

  if (!hasToken) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
        <div className="text-sm font-semibold">🔒 Pro ist gesperrt</div>
        <p className="mt-2 text-sm text-zinc-300 max-w-2xl">
          Du siehst hier nur den Teaser. Pro schaltet Briefings, Tools und Exporte frei.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/pricing"
            className="no-underline rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900"
          >
            Upgrade 4,99€
          </Link>
          <Link
            href="/methodik"
            className="no-underline rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm"
          >
            Methodik lesen
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs text-zinc-400">
          Token aktiv • Wenn du kündigst, wird der Zugriff automatisch enden.
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={manageSubscription}
            className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-zinc-900"
          >
            Abo verwalten
          </button>
          <button
            onClick={logout}
            className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-xs hover:bg-zinc-900"
          >
            Logout
          </button>
        </div>
      </div>

      {loading && (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 text-sm text-zinc-300">
          Laden…
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-red-900/60 bg-red-950/40 p-4 text-sm text-red-200">
          {error}
          <div className="mt-3 text-xs text-red-200/80">
            Tipp: Wenn du gerade gekündigt hast, kann Stripe den Status aktualisiert haben.
          </div>
        </div>
      )}

      {!loading && !error && briefings.length === 0 && (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 text-sm text-zinc-300">
          Noch keine Briefings hinterlegt. (Das ist okay – jetzt hast du das Paywall-Framework.)
        </div>
      )}

      {!loading && !error && briefings.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {briefings.map((b) => (
            <article key={b.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
              <div className="text-xs text-zinc-500">Updated: {b.updatedAt}</div>
              <h2 className="mt-2 text-base font-semibold">{b.title}</h2>
              <p className="mt-2 text-sm text-zinc-300">{b.summary}</p>
              <ul className="mt-3 text-sm text-zinc-300 space-y-2">
                {b.bullets.map((x, idx) => (
                  <li key={idx}>• {x}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
