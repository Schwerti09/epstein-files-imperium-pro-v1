import { Container } from "@/components/Container";
import { ProClient } from "@/components/pro/ProClient";

export const metadata = {
  title: "Pro – Epstein Files Decoder",
};

export default function ProPage() {
  return (
    <Container className="py-10">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold">Pro Command Center</h1>
        <p className="mt-3 text-zinc-300">
          Hier liegen die tieferen Briefings, Werkzeuge und Exporte. Alles quellenbasiert, mit Unsicherheiten markiert.
        </p>
        <div className="mt-6">
          <ProClient />
        </div>
      </div>
    </Container>
  );
}
