import { badRequest, json, serverError, stripePost } from "./_utils.mjs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return json(405, { error: "Method not allowed" });
    }

    const priceId = process.env.STRIPE_PRICE_ID;
    if (!priceId) return serverError("Missing STRIPE_PRICE_ID");

    let body = {};
    try {
      body = JSON.parse(event.body || "{}");
    } catch {
      return badRequest("Invalid JSON");
    }

    const email = String(body.email || "").trim();
    const origin = String(body.origin || "").trim();
    if (!EMAIL_RE.test(email)) return badRequest("Invalid email");
    if (!origin.startsWith("http")) return badRequest("Invalid origin");

    const success_url = `${origin}/success/?session_id={CHECKOUT_SESSION_ID}`;
    const cancel_url = `${origin}/pricing/`;

    const session = await stripePost("/checkout/sessions", {
      mode: "subscription",
      "line_items[0][price]": priceId,
      "line_items[0][quantity]": "1",
      success_url,
      cancel_url,
      customer_email: email,
      allow_promotion_codes: "true",
      billing_address_collection: "auto",
    });

    return json(200, { url: session.url });
  } catch (e) {
    return serverError(e?.message || "Unknown error");
  }
};
