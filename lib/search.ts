import { people } from "./people";

export type SearchItem = {
  title: string;
  subtitle: string;
  href: string;
  tags: string[];
};

const staticItems: SearchItem[] = [
  { title: "Methodik & Ethik", subtitle: "Opferschutz, Redaktionen, Verifikationsregeln", href: "/methodik/", tags: ["ethik","methodik","redactions"] },
  { title: "Quellen", subtitle: "Primärquellen + Update-Log", href: "/quellen/", tags: ["doj","primärquelle","act"] },
  { title: "Abo", subtitle: "Pro-Zugang (Briefings, Tools) – 4,99€/Monat", href: "/pricing/", tags: ["abo","pro","stripe"] },
  { title: "Pro", subtitle: "Command Center (freigeschaltet)", href: "/pro/", tags: ["pro","briefings","tools"] },
  { title: "Support", subtitle: "Funding, Newsletter, Transparenz", href: "/support/", tags: ["support","newsletter"] }
];

export const allSearchItems: SearchItem[] = [
  ...people.map(p => ({
    title: p.name,
    subtitle: p.type === "primär" ? "Primärperson (juristischer Kern)" : "Erwähnte Person (Erwähnung ≠ Beweis)",
    href: `/people/${p.slug}/`,
    tags: p.tags
  })),
  ...staticItems
];
