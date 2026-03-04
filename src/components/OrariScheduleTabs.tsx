"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

type Classe = {
  orario: string;
  nome: string;
  insegnante: string;
  nota?: string;
};

type Giorno = {
  giorno: string;
  classi: Classe[];
};

type Sede = {
  id: "molineria" | "chiostri" | "too";
  label: string;
  indirizzo: string;
  giorni: Giorno[];
};

const corsoSlugMap: Record<string, string> = {
  "PILATES pers": "pilates",
  PILATES: "pilates",
  "HATHA YOGA": "hatha-yoga",
  "HATHA FLOW": "hatha-yoga-flow",
  "HATHA YOGA FLOW": "hatha-yoga-flow",
  "ROCKET YOGA insp.": "rocket-yoga-inspired",
  "VINYASA KRAMA": "vinyasa-krama",
  "QI GONG": "qi-gong",
  "VIVEKA YOGA": "viveka-yoga",
  ASHTANGA: "ashtanga",
  MEDITAZIONE: "meditazione-vipassana",
  "KATONAH YOGA": "katonah-inspired",
  "RAJA YOGA": "yin-yoga",
  "YIN YOGA": "yin-yoga",
  MINDFULNESS: "mindfulness",
  YUTORI: "yutori",
  "KUNDALINI YOGA": "kundalini-yoga",
  "YOGA RESET": "yoga-reset",
  "YOGA SCHIENA": "yoga-schiena",
};

const insegnanteSlugMap: Record<string, string> = {
  Robi: "robi-morisi",
  Roberto: "robi-morisi",
  Lore: "lorenza-boni",
  Lorenza: "lorenza-boni",
  Paola: "paola-busconi",
  Franci: "francesca-luppini",
  Azzurra: "azzurra-corradini",
  Marta: "marta-vegezzi",
  Stefano: "stefano-molinari",
  Barbara: "barbara-alberici",
  Walt: "valter-chiusa",
  Fede: "federica-burzoni",
  Stefania: "stefania-casella",
  Grazia: "grazia-alicanti",
};

function renderCorsoLink(nomeCorso: string) {
  const slug = corsoSlugMap[nomeCorso];
  if (!slug) {
    return <p className="mt-2 text-base font-semibold text-charcoal">{nomeCorso}</p>;
  }

  return (
    <p className="mt-2 text-base font-semibold text-charcoal">
      <Link href={`/lezioni/${slug}`} className="text-terra hover:underline">
        {nomeCorso}
      </Link>
    </p>
  );
}

function renderInsegnanteLinks(rawInsegnante: string) {
  const parts = rawInsegnante.split("+").map((part) => part.trim());

  return parts.map((part, index) => {
    let prefix = "";
    let lookupName = part;

    if (part.toLowerCase().startsWith("gruppo ")) {
      prefix = "gruppo ";
      lookupName = part.slice(7).trim();
    }

    const slug = insegnanteSlugMap[lookupName];

    return (
      <span key={`${rawInsegnante}-${part}-${index}`}>
        {index > 0 && <span className="mx-1">+</span>}
        {prefix}
        {slug ? (
          <Link href={`/insegnanti/${slug}`} className="text-terra hover:underline">
            {lookupName}
          </Link>
        ) : (
          lookupName
        )}
      </span>
    );
  });
}

const sedi: Sede[] = [
  {
    id: "molineria",
    label: "Molineria San Giovanni 13",
    indirizzo: "📍 Sede: Molineria San Giovanni 13",
    giorni: [
      {
        giorno: "Lunedì",
        classi: [
          { orario: "13.30 - 14.15", nome: "PILATES pers", insegnante: "gruppo Paola" },
          { orario: "17.00 - 18.00", nome: "HATHA YOGA", insegnante: "Lore + Robi" },
          { orario: "18.30 - 19.30", nome: "ROCKET YOGA insp.", insegnante: "Azzurra" },
          { orario: "19.40 - 20.40", nome: "VINYASA KRAMA", insegnante: "Franci" },
        ],
      },
      {
        giorno: "Martedì",
        classi: [
          { orario: "09.30 - 10.30", nome: "QI GONG", insegnante: "Lorenza" },
          { orario: "12.30 - 13.15", nome: "PILATES", insegnante: "Paola" },
          { orario: "13.30 - 14.15", nome: "PILATES", insegnante: "Paola" },
          { orario: "17.30 - 18.30", nome: "HATHA FLOW", insegnante: "Marta" },
          { orario: "18.35 - 19.35", nome: "YIN YOGA", insegnante: "Franci" },
          { orario: "19.45 - 20.30", nome: "PILATES", insegnante: "Paola" },
        ],
      },
      {
        giorno: "Mercoledì",
        classi: [
          { orario: "07.00 - 07.45", nome: "PILATES", insegnante: "Paola" },
          { orario: "08.30 - 09.15", nome: "PILATES", insegnante: "Paola" },
          { orario: "17.00 - 18.00", nome: "YOGA SCHIENA", insegnante: "Robi" },
          { orario: "18.15 - 19.15", nome: "HATHA YOGA", insegnante: "Franci" },
          { orario: "19.30 - 20.30", nome: "VIVEKA YOGA", insegnante: "Stefano" },
          { orario: "19.30 - 20.30", nome: "HATHA YOGA FLOW", insegnante: "Barbara" },
        ],
      },
      {
        giorno: "Giovedì",
        classi: [
          { orario: "12.30 - 13.15", nome: "PILATES", insegnante: "Paola" },
          { orario: "13.30 - 14.20", nome: "PILATES", insegnante: "Paola" },
          { orario: "18.00 - 19.20", nome: "ASHTANGA", insegnante: "Walt" },
          { orario: "19.30 - 20.20", nome: "MEDITAZIONE", insegnante: "Stefano + Robi" },
        ],
      },
      {
        giorno: "Venerdì",
        classi: [
          { orario: "17.30 - 18.30", nome: "KATONAH YOGA", insegnante: "Fede" },
          { orario: "18.40 - 19.40", nome: "VINYASA KRAMA", insegnante: "Franci" },
        ],
      },
      {
        giorno: "Sabato",
        classi: [
          { orario: "09.30 - 10.15", nome: "MINDFULNESS", insegnante: "Roberto" },
          {
            orario: "10.30 - 12.00",
            nome: "KUNDALINI YOGA",
            insegnante: "Grazia",
            nota: "Secondo sabato del mese",
          },
          { orario: "10.30 - 11.30", nome: "HATHA YOGA", insegnante: "Stefania" },
        ],
      },
    ],
  },
  {
    id: "chiostri",
    label: "Via Chiostri del Duomo",
    indirizzo: "📍 Sede: Via Chiostri del Duomo",
    giorni: [
      {
        giorno: "Lunedì",
        classi: [{ orario: "13.30 - 14.30", nome: "YOGA DINAMICO", insegnante: "Marta" }],
      },
      {
        giorno: "Mercoledì",
        classi: [{ orario: "13.30 - 14.20", nome: "PILATES", insegnante: "Paola" }],
      },
    ],
  },
  {
    id: "too",
    label: "TOO - Via 24 Maggio 51",
    indirizzo: "📍 Sede: TOO - Via 24 Maggio 51",
    giorni: [
      {
        giorno: "Lunedì",
        classi: [
          { orario: "18.15 - 19.15", nome: "VINYASA KRAMA", insegnante: "Franci" },
          { orario: "19.30 - 20.30", nome: "YOGA RESET", insegnante: "Marta" },
        ],
      },
      {
        giorno: "Giovedì",
        classi: [{ orario: "18.30 - 19.30", nome: "VINYASA KRAMA", insegnante: "Franci" }],
      },
    ],
  },
];

export default function OrariScheduleTabs() {
  const [sediData, setSediData] = useState(sedi);
  const [activeSede, setActiveSede] = useState<Sede["id"]>("molineria");

  useEffect(() => {
    fetch("/api/orari")
      .then((r) => r.json())
      .then((json) => {
        if (json.data && Array.isArray(json.data)) {
          setSediData(json.data);
        }
      })
      .catch(() => {/* usa i dati statici */});
  }, []);

  const selectedSede = sediData.find((s) => s.id === activeSede) ?? sediData[0];

  return (
    <section className="section-space bg-cream-dark/40">
      <div className="site-container">
        <SectionHeading title="Orari Settimanali" subtitle="Seleziona la sede e consulta gli orari giorno per giorno" />

        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {sediData.map((sede) => (
            <button
              key={sede.id}
              type="button"
              onClick={() => setActiveSede(sede.id)}
              className={[
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
                activeSede === sede.id
                  ? "border-terra bg-terra text-white"
                  : "border-terra/20 bg-white text-terra hover:bg-terra/8",
              ].join(" ")}
            >
              {sede.label}
            </button>
          ))}
        </div>

        <ScrollReveal>
          <div className="mb-6 rounded-2xl border border-terra/20 bg-white/75 p-4 text-center text-sm text-charcoal">
            {selectedSede.indirizzo}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {selectedSede.giorni.map((giorno, index) => (
            <ScrollReveal key={`${selectedSede.id}-${giorno.giorno}`} delay={index * 0.04}>
              <article className="card-soft overflow-hidden h-full">
                <div className="border-b border-terra/15 bg-terra/8 px-5 py-4">
                  <h3 className="font-heading text-3xl text-charcoal">{giorno.giorno}</h3>
                </div>

                <div className="space-y-3 p-5">
                  {giorno.classi.map((classe) => (
                    <div
                      key={`${giorno.giorno}-${classe.orario}-${classe.nome}`}
                      className="rounded-xl border border-terra/12 bg-white/85 p-4"
                    >
                      <span className="inline-flex rounded-full bg-terra/12 px-3 py-1 text-xs font-semibold text-terra-dark">
                        {classe.orario}
                      </span>
                      {renderCorsoLink(classe.nome)}
                      <p className="mt-1 text-xs uppercase tracking-wide text-charcoal-light">
                        {renderInsegnanteLinks(classe.insegnante)}
                      </p>
                      {classe.nota && <p className="mt-2 text-xs text-terra-dark">{classe.nota}</p>}
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}