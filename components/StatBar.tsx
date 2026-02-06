import { Container } from "./Container";

export function StatBar() {
  return (
    <div className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 sticky top-0 z-50">
      <Container className="py-2">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-zinc-300">DATA INTEGRITY</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-200">≈3,5 Mio. Seiten veröffentlicht</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-200">2.000+ Videos</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-200">180.000+ Bilder</span>
          </div>
          <div className="text-zinc-400">
            Stand: <span className="text-zinc-200">30.01.2026</span> • Quelle:{" "}
            <a href="https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files" target="_blank" rel="noreferrer">
              DOJ Press Release
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
