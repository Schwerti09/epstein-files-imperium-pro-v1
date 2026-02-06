import { MetadataRoute } from "next";

// Static export compatibility (output: 'export'): make robots explicitly static
export const dynamic = "force-static";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://example.com/sitemap.xml"
  };
}