"use client";

import { useMemo, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function PricingCheckout() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => EMAIL_RE.test(email.trim()) && !loading, [email, loading]);

  async function onCheckout() {
    setError(null);
    if (!canSubmit) return;
    try {
      setLoading(true);
      const origin = window.location.origin;
      const res = await fetch("/.netlify/functions/create-checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: email.trim(), origin }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout konnte nicht gestartet werden.");
      }
      window.location.href = data.url;
    } catch (e: any) {
      setError(e?.message || "Unbekannter Fehler.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs text-zinc-400">E-Mail (für Stripe Checkout)</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-600"
          inputMode="email"
          autoComplete="email"
        />
        <div className="mt-2 text-xs text-zinc-500">
          Wir speichern hier nichts lokal außer deinem Pro-Token nach erfolgreicher Zahlung.
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-900/60 bg-red-950/40 p-3 text-xs text-red-200">
          {error}
        </div>
      )}

      <button
        onClick={onCheckout}
        disabled={!canSubmit}
        className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900 disabled:opacity-50"
      >
        {loading ? "Weiterleiten…" : "Pro freischalten (4,99 €)"}
      </button>

      <div className="text-xs text-zinc-500">
        Transparenz: Stripe verarbeitet die Zahlung. Kündigung jederzeit zum Ende der Laufzeit.
      </div>
    </div>
  );
}
