import { Container } from "@/components/Container";

export const metadata = {
  title: "Impressum – Epstein Files Decoder"
};

export default function ImpressumPage() {
  return (
    <Container className="py-10 prose prose-invert max-w-3xl">
      <h1>Impressum</h1>

      <p><strong>Wissens-Bank</strong><br/>
      Rolf Schwertfechter<br/>
      Karklandsweg 1<br/>
      26553 Dornum</p>

      <p><strong>Kontakt</strong><br/>
      E-Mail: rps-vertrieb@t-online.de</p>

      <p><strong>Steuerangaben</strong><br/>
      Steuerangaben auf Anfrage.</p>

      <hr/>

      <h2>Haftungshinweis</h2>
      <p>
        Wir verlinken auf externe Inhalte (Primärquellen/Medien). Für deren Inhalte sind ausschließlich deren Betreiber verantwortlich.
        Diese Website bietet Kontext und Analyse, keine Rechtsberatung.
      </p>

      <h2>Opferschutz</h2>
      <p>
        Wir hosten keine ungeschwärzten Originaldokumente und veröffentlichen keine sensiblen Identifikationsdaten von Betroffenen.
        Wenn dir dennoch ein Problem auffällt, kontaktiere uns bitte umgehend.
      </p>
    </Container>
  );
}
