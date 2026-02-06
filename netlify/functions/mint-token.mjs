import { badRequest, json, serverError, signToken, stripeGet } from "./_utils.mjs";

export const handler = async (event) => {
  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) return serverError("Missing JWT_SECRET");

    const sessionId = event.queryStringParameters?.session_id;
    if (!sessionId) return badRequest("Missing session_id");

    // Expand subscription so we can read its id.
    const session = await stripeGet(`/checkout/sessions/${sessionId}`, {
      "expand[]": "subscription",
    });

    const subscription = session.subscription;
    const subscriptionId = typeof subscription === "string" ? subscription : subscription?.id;
    const customerId = session.customer;
    const email = session.customer_details?.email || session.customer_email || null;

    if (!subscriptionId || !customerId) {
      return serverError("Missing subscription/customer on session");
    }

    // Token is validated against live Stripe status on each Pro request.
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      v: 1,
      cid: customerId,
      sid: subscriptionId,
      email,
      iat: now,
      exp: now + 90 * 24 * 60 * 60, // 90 days
    };

    const token = signToken(payload, jwtSecret);
    return json(200, { token });
  } catch (e) {
    return serverError(e?.message || "Unknown error");
  }
};
