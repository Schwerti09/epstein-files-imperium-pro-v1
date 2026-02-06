"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { buildGraph } from "@/lib/graph";

type D3Node = { slug: string; label: string; x?: number; y?: number };
type D3Link = { source: any; target: any };

export function ConnectionGraph({ focusSlug }: { focusSlug: string }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [size, setSize] = useState({ w: 900, h: 420 });

  const data = useMemo(() => buildGraph(focusSlug), [focusSlug]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parent = el.parentElement;
    if (!parent) return;

    const ro = new ResizeObserver(() => {
      const w = Math.max(320, parent.clientWidth);
      setSize({ w, h: 420 });
    });
    ro.observe(parent);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const svgEl = ref.current;
    if (!svgEl) return;

    // IMPORTANT: select a non-null element so TS doesn't widen to SVGSVGElement | null
    const svg = d3.select<SVGSVGElement, unknown>(svgEl);
    svg.selectAll("*").remove();

    const width = size.w;
    const height = size.h;

    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const g = svg.append("g");

    // Zoom/pan
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.6, 2.5])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom as any);

    const link = g
      .append("g")
      .attr("stroke", "rgba(161,161,170,0.25)")
      .attr("stroke-width", 1)
      .selectAll("line")
      .data(data.links as unknown as D3Link[])
      .enter()
      .append("line");

    const node = g
      .append("g")
      .selectAll("g")
      .data(data.nodes as unknown as D3Node[])
      .enter()
      .append("g")
      .style("cursor", "pointer");

    node
      .append("circle")
      .attr("r", (d) => (d.slug === focusSlug ? 16 : 10))
      .attr("fill", (d) =>
        d.slug === focusSlug ? "rgba(59,130,246,0.6)" : "rgba(39,39,42,0.9)"
      )
      .attr("stroke", "rgba(244,244,245,0.25)")
      .attr("stroke-width", 1.25);

    node
      .append("text")
      .text((d) => d.label)
      .attr("x", 14)
      .attr("y", 4)
      .attr("font-size", 11)
      .attr("fill", "rgba(244,244,245,0.8)");

    const sim = d3
      .forceSimulation(data.nodes as any)
      .force(
        "link",
        d3
          .forceLink(data.links as any)
          .id((d: any) => d.slug)
          .distance(120)
      )
      .force("charge", d3.forceManyBody().strength(-360))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(28));

    sim.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    return () => {
      sim.stop();
    };
  }, [data, size, focusSlug]);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold">Connection Graph</div>
          <div className="text-xs text-zinc-500">
            Zoom &amp; Pan: Trackpad/Mausrad • Fokus ist blau markiert
          </div>
        </div>
        <div className="text-xs text-zinc-400">
          Knoten: <span className="text-zinc-200">{data.nodes.length}</span> •
          Kanten: <span className="text-zinc-200">{data.links.length}</span>
        </div>
      </div>
      <div className="mt-3">
        <svg
          ref={ref}
          className="w-full h-[420px] rounded-xl border border-zinc-900 bg-zinc-950"
        />
      </div>
      <div className="mt-3 text-xs text-zinc-500">
        Hinweis: Der Graph zeigt{" "}
        <span className="text-zinc-300">Beziehungen/Erwähnungen</span> aus
        kuratierten Metadaten (MVP). Für Vollbetrieb: Indizierung offizieller
        Quellen + redaktionelle Verifikation.
      </div>
    </div>
  );
}
