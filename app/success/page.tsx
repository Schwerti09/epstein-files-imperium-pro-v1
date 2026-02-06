import { Container } from "@/components/Container";
import { SuccessClient } from "@/components/pro/SuccessClient";

export const metadata = {
  title: "Danke – Epstein Files Decoder",
};

export default function SuccessPage() {
  return (
    <Container className="py-10">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold">Zahlung erkannt</h1>
        <p className="mt-3 text-zinc-300">
          Wir schalten deinen Pro-Zugang frei. Das dauert meistens nur ein paar Sekunden.
        </p>
        <div className="mt-6">
          <SuccessClient />
        </div>
      </div>
    </Container>
  );
}
