import { badRequest, json, serverError, stripeGet, verifyToken } from "./_utils.mjs";

function pickAuth(event) {
  const h = event.headers || {};
  const auth = h.authorization || h.Authorization || "";
  const m = String(auth).match(/^Bearer\s+(.+)$/i);
  return m ? m[1] : null;
}

const ALLOWED_STATUSES = new Set(["active", "trialing"]);

export const handler = async (event) => {
  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) return serverError("Missing JWT_SECRET");

    const token = pickAuth(event);
    if (!token) return json(401, { error: "Missing Authorization" });

    const payload = verifyToken(token, jwtSecret);
    const subscriptionId = payload?.sid;
    if (!subscriptionId) return json(401, { error: "Invalid token" });

    // Validate against Stripe on each call.
    const sub = await stripeGet(`/subscriptions/${subscriptionId}`);
    if (!ALLOWED_STATUSES.has(sub.status)) {
      return json(402, { error: "No active subscription" });
    }

    const kind = event.queryStringParameters?.kind || "briefings";
    if (kind !== "briefings") return badRequest("Unknown kind");

    // NOTE: Keep Pro content server-side so it is not shipped in the static bundle.
    const items = [
      {
        id: "briefing-001",
        title: "Briefing 001: Wie wir Fakten von Gerüchten trennen",
        summary:
          "Ein kurzer Fahrplan, wie du in einem chaotischen Dokumentenkorpus belastbare Aussagen findest, ohne Opfer zu gefährden.",
        bullets: [
          "Primärquelle zuerst: Original-Zitat + Kontext + Redaction-Hinweis.",
          "Erwähnung ≠ Beweis: Jede Nennung bekommt eine Evidenzstufe.",
          "Opferschutz: Keine Identifikationsdaten, keine Re-Uploads ungeschwärzter Dateien.",
          "Prozess: Behauptung → Quelle → Gegencheck → Versionierung.",
        ],
        updatedAt: "2026-02-06",
      },
      {
        id: "briefing-002",
        title: "Briefing 002: Connection-Graph ohne Halluzination",
        summary:
          "Wie du Netzwerkgraphen baust, ohne aus Korrelationen Geschichten zu erfinden – inkl. Anti-KI-Fake Checkliste.",
        bullets: [
          "Kanten sind Beziehungen, keine Schuldzuweisung.",
          "Jede Kante braucht: Quelle, Datum, Dokumenttyp.",
          "Fake-Filter: Reverse Image Search + Metadaten + Quelle der Quelle.",
          "Transparenz: Unklarheiten bleiben sichtbar, nicht wegpoliert.",
        ],
        updatedAt: "2026-02-06",
      },
    ];

    return json(200, { items });
  } catch (e) {
    return serverError(e?.message || "Unknown error");
  }
};
