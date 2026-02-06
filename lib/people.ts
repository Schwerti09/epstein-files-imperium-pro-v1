export type PersonType = "primär" | "erwähnt";

export type Person = {
  slug: string;
  name: string;
  type: PersonType;
  short: string;
  tags: string[];
  keyPoints: { label: string; detail: string; source?: string }[];
  connections: { to: string; label: string; source?: string }[];
};

export const people: Person[] = [
  {
    slug: "jeffrey-epstein",
    name: "Jeffrey Epstein",
    type: "primär",
    short: "Zentrale Person der Ermittlungen. In offiziellen Quellen als verurteilter Sexualstraftäter bezeichnet.",
    tags: ["Primärperson", "Ermittlungen", "DOJ", "Akten"],
    keyPoints: [
      {
        label: "Großveröffentlichung (Act)",
        detail: "Das DOJ veröffentlichte am 30.01.2026 zusätzliche >3 Mio. Seiten; Gesamtproduktion ~3,5 Mio. Seiten.",
        source: "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files"
      },
      {
        label: "Datenumfang (öffentlich)",
        detail: "Mehr als 2.000 Videos und 180.000 Bilder sind in der Veröffentlichung enthalten (stark redigiert).",
        source: "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files"
      },
      {
        label: "Hinweis zur Datenqualität",
        detail: "Das DOJ weist darauf hin, dass in der Produktion auch gefälschte/falsch eingereichte Materialien enthalten sein können.",
        source: "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files"
      }
    ],
    connections: [
      {
        to: "ghislaine-maxwell",
        label: "Verfahrens-/Fallbezug (NY-Fall Maxwell als Quelle im DOJ-Scope)",
        source: "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files"
      }
    ]
  },
  {
    slug: "ghislaine-maxwell",
    name: "Ghislaine Maxwell",
    type: "primär",
    short: "Maxwell ist als eigener New-York-Fall explizit Teil der vom DOJ beschriebenen Aktenquellen.",
    tags: ["Primärperson", "NY Case", "DOJ Scope"],
    keyPoints: [
      {
        label: "Aktenquelle",
        detail: "Das DOJ nennt den New-York-Fall gegen Maxwell als eine der primären Quellen der veröffentlichten Materialien.",
        source: "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files"
      }
    ],
    connections: [
      { to: "jeffrey-epstein", label: "Fall-/Ermittlungsbezug", source: "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files" }
    ]
  },
  {
    slug: "elon-musk",
    name: "Elon Musk",
    type: "erwähnt",
    short: "In Medienanalysen zur Veröffentlichung 2026 werden E-Mail-Kontexte erwähnt. Erwähnung ≠ Schuld.",
    tags: ["Erwähnung", "E-Mails", "Kontextpflicht"],
    keyPoints: [
      {
        label: "Erwähnung in Release-Berichterstattung",
        detail: "The Guardian berichtet über eine veröffentlichte E-Mail-Kette zwischen Epstein und Musk (2012).",
        source: "https://www.theguardian.com/us-news/2026/jan/30/epstein-files-3-million-new-pages"
      }
    ],
    connections: [
      { to: "jeffrey-epstein", label: "E-Mail-Erwähnung (Medienbericht)", source: "https://www.theguardian.com/us-news/2026/jan/30/epstein-files-3-million-new-pages" }
    ]
  },
  {
    slug: "howard-lutnick",
    name: "Howard Lutnick",
    type: "erwähnt",
    short: "In Berichten über die 2026er Veröffentlichung taucht Lutnick im Kontext von E-Mails/Planungen auf. Erwähnung ≠ Schuld.",
    tags: ["Erwähnung", "E-Mails", "Kontextpflicht"],
    keyPoints: [
      {
        label: "Erwähnung in Release-Berichterstattung",
        detail: "The Guardian beschreibt E-Mails zu einem geplanten Insel-Besuch (2012) in den veröffentlichten Materialien.",
        source: "https://www.theguardian.com/us-news/2026/jan/30/epstein-files-3-million-new-pages"
      }
    ],
    connections: [
      { to: "jeffrey-epstein", label: "E-Mail-/Planungs-Erwähnung (Medienbericht)", source: "https://www.theguardian.com/us-news/2026/jan/30/epstein-files-3-million-new-pages" }
    ]
  },
  {
    slug: "prince-andrew",
    name: "Prinz Andrew",
    type: "erwähnt",
    short: "In Kontexten rund um Epstein taucht Prinz Andrew in Dokumenten/Ermittlungsversuchen auf. Erwähnung ≠ Schuld.",
    tags: ["Erwähnung", "UK", "Kontextpflicht"],
    keyPoints: [
      {
        label: "Erwähnung in Medienanalyse",
        detail: "The Guardian erwähnt E-Mails/Dokumente, die Prinz Andrew in einem Dinner-Kontext aufführen.",
        source: "https://www.theguardian.com/us-news/2026/jan/30/epstein-files-3-million-new-pages"
      }
    ],
    connections: [
      { to: "jeffrey-epstein", label: "Erwähnung/Bezug (Medienbericht)", source: "https://www.theguardian.com/us-news/2026/jan/30/epstein-files-3-million-new-pages" }
    ]
  }
];
