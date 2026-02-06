import crypto from "crypto";

export function json(statusCode, body, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...extraHeaders,
    },
    body: JSON.stringify(body),
  };
}

export function badRequest(msg) {
  return json(400, { error: msg });
}

export function serverError(msg) {
  return json(500, { error: msg });
}

export function base64url(input) {
  const buf = Buffer.isBuffer(input) ? input : Buffer.from(String(input));
  return buf
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

export function unbase64url(b64urlStr) {
  let s = b64urlStr.replace(/-/g, "+").replace(/_/g, "/");
  const pad = s.length % 4;
  if (pad) s += "=".repeat(4 - pad);
  return Buffer.from(s, "base64");
}

export function signToken(payload, secret) {
  const p = base64url(JSON.stringify(payload));
  const sig = crypto.createHmac("sha256", secret).update(p).digest();
  return `${p}.${base64url(sig)}`;
}

export function verifyToken(token, secret) {
  const parts = String(token || "").split(".");
  if (parts.length !== 2) throw new Error("Invalid token");
  const [p, sig] = parts;
  const expected = crypto.createHmac("sha256", secret).update(p).digest();
  const got = unbase64url(sig);
  if (got.length !== expected.length || !crypto.timingSafeEqual(got, expected)) {
    throw new Error("Invalid token");
  }
  const payload = JSON.parse(unbase64url(p).toString("utf8"));
  if (payload?.exp && Date.now() / 1000 > payload.exp) throw new Error("Token expired");
  return payload;
}

function assertStripeSecret() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("Missing STRIPE_SECRET_KEY");
  return key;
}

export async function stripePost(path, params) {
  const key = assertStripeSecret();
  const res = await fetch(`https://api.stripe.com/v1${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(params).toString(),
  });
  const data = await res.json();
  if (!res.ok) {
    const msg = data?.error?.message || "Stripe error";
    const err = new Error(msg);
    err.statusCode = res.status;
    err.stripe = data;
    throw err;
  }
  return data;
}

export async function stripeGet(path, queryParams = {}) {
  const key = assertStripeSecret();
  const qs = new URLSearchParams(queryParams).toString();
  const url = `https://api.stripe.com/v1${path}${qs ? `?${qs}` : ""}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    const msg = data?.error?.message || "Stripe error";
    const err = new Error(msg);
    err.statusCode = res.status;
    err.stripe = data;
    throw err;
  }
  return data;
}
