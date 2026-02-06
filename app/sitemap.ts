import { MetadataRoute } from "next";
import { people } from "@/lib/people";

// Static export compatibility (output: 'export'): make sitemap explicitly static
export const dynamic = "force-static";


export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const staticRoutes = [
    "",
    "/people",
    "/topics",
    "/methodik",
    "/quellen",
    "/pricing",
    "/pro",
    "/support",
    "/kontakt",
    "/impressum",
    "/agb",
    "/datenschutz"
  ];

  return [
    ...staticRoutes.map((p) => ({
      url: `${base}${p}/`,
      lastModified: new Date("2026-02-06").toISOString()
    })),
    ...people.map((p) => ({
      url: `${base}/people/${p.slug}/`,
      lastModified: new Date("2026-02-06").toISOString()
    }))
  ];
}