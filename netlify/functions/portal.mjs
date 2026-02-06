import { json, serverError, stripePost, verifyToken } from "./_utils.mjs";

function pickAuth(event) {
  const h = event.headers || {};
  const auth = h.authorization || h.Authorization || "";
  const m = String(auth).match(/^Bearer\s+(.+)$/i);
  return m ? m[1] : null;
}

export const handler = async (event) => {
  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) return serverError("Missing JWT_SECRET");

    const token = pickAuth(event);
    if (!token) return json(401, { error: "Missing Authorization" });

    const payload = verifyToken(token, jwtSecret);
    const customerId = payload?.cid;
    if (!customerId) return json(401, { error: "Invalid token" });

    const origin = event.headers?.origin || event.headers?.Origin || "";
    const return_url = origin?.startsWith("http") ? `${origin}/pro/` : "https://example.com/pro/";

    const session = await stripePost("/billing_portal/sessions", {
      customer: customerId,
      return_url,
    });

    return json(200, { url: session.url });
  } catch (e) {
    return serverError(e?.message || "Unknown error");
  }
};
