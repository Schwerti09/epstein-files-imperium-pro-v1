"use client";

import { useEffect, useState } from "react";

type Consent = {
  necessary: true;
  analytics: boolean;
  timestamp: string;
};

const KEY = "efd_consent_v1";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  function save(consent: Consent) {
    try {
      localStorage.setItem(KEY, JSON.stringify(consent));
    } catch {}
    setShow(false);
    // analytics scripts are only loaded when user opted in via NEXT_PUBLIC_ANALYTICS_PROVIDER
    // (see app/layout.tsx)
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm">
            <div className="font-semibold">Cookies & Datenschutz</div>
            <div className="text-zinc-400 text-sm mt-1">
              Wir nutzen technisch notwendige Cookies (immer) und optional datensparsame Analytics (nur mit Zustimmung).
              Details in <a className="text-zinc-200" href="/datenschutz/">Datenschutz</a>.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <label className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-xs">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              Anonymes Analytics zulassen
            </label>
            <button
              className="rounded-xl bg-white text-zinc-900 px-4 py-2 text-xs font-semibold"
              onClick={() =>
                save({ necessary: true, analytics, timestamp: new Date().toISOString() })
              }
            >
              Speichern
            </button>
            <button
              className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2 text-xs"
              onClick={() => save({ necessary: true, analytics: false, timestamp: new Date().toISOString() })}
            >
              Nur notwendig
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
