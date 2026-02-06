"use client";

import { useEffect, useMemo, useState } from "react";

const TOKEN_KEY = "efd_pro_token";

export function SuccessClient() {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState<string | null>(null);

  const sessionId = useMemo(() => {
    if (typeof window === "undefined") return null;
    const u = new URL(window.location.href);
    return u.searchParams.get("session_id");
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (!sessionId) {
        setState("error");
        setMsg("Kein session_id gefunden. Bitte kehre zu Pricing zurück und starte den Checkout erneut.");
        return;
      }
      setState("loading");
      setMsg(null);
      try {
        const url = new URL("/.netlify/functions/mint-token", window.location.origin);
        url.searchParams.set("session_id", sessionId);
        const res = await fetch(url.toString());
        const data = (await res.json()) as { token?: string; error?: string };
        if (!res.ok || !data.token) throw new Error(data.error || "Token konnte nicht erstellt werden.");
        localStorage.setItem(TOKEN_KEY, data.token);
        if (cancelled) return;
        setState("ok");
        setMsg("Pro ist aktiv. Weiterleitung…");
        setTimeout(() => {
          window.location.href = "/pro/";
        }, 800);
      } catch (e: any) {
        if (cancelled) return;
        setState("error");
        setMsg(e?.message || "Unbekannter Fehler.");
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
      <div className="text-sm font-semibold">
        {state === "loading" && "Freischalten läuft…"}
        {state === "ok" && "Freigeschaltet"}
        {state === "error" && "Uff. Das hat nicht geklappt."}
        {state === "idle" && "Bereit"}
      </div>
      <div className="mt-2 text-sm text-zinc-300">{msg ?? ""}</div>

      {state === "error" && (
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="/pricing/"
            className="no-underline rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900"
          >
            Zurück zu Pricing
          </a>
          <a
            href="/kontakt/"
            className="no-underline rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm"
          >
            Support kontaktieren
          </a>
        </div>
      )}
    </div>
  );
}
