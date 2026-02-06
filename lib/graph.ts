import { people } from "./people";

type Node = { slug: string; label: string };
type Link = { source: string; target: string };

export function buildGraph(focusSlug: string): { nodes: Node[]; links: Link[] } {
  const focus = people.find(p => p.slug === focusSlug);
  if (!focus) return { nodes: [], links: [] };

  const slugs = new Set<string>([focusSlug]);
  focus.connections.forEach(c => slugs.add(c.to));

  // pull neighbors-of-neighbors lightly (MVP)
  for (const s of Array.from(slugs)) {
    const p = people.find(x => x.slug === s);
    p?.connections.forEach(c => {
      if (c.to === focusSlug) slugs.add(c.to);
    });
  }

  const nodes: Node[] = Array.from(slugs).map(slug => {
    const p = people.find(x => x.slug === slug);
    return { slug, label: p?.name ?? slug };
  });

  const links: Link[] = [];
  for (const p of people) {
    for (const c of p.connections) {
      if (slugs.has(p.slug) && slugs.has(c.to)) {
        links.push({ source: p.slug, target: c.to });
      }
    }
  }

  return { nodes, links };
}
