export interface Sede {
  nome: string;
  indirizzo: string;
  mapQuery: string;
}

export const sedi: Sede[] = [
  {
    nome: "YOGAGEA a.s.d.",
    indirizzo: "Via Molineria S. Giovanni, 13 – 29121 Piacenza",
    mapQuery: "Via+Molineria+S.+Giovanni+13+29121+Piacenza+PC",
  },
  {
    nome: "YOGAGEA CHIOSTRI DUOMO",
    indirizzo: "Via Chiostri del Duomo – Piacenza",
    mapQuery: "Via+Chiostri+del+Duomo+Piacenza",
  },
  {
    nome: "YOGAGEA TOO",
    indirizzo: "Via 24 Maggio, 51 – Piacenza",
    mapQuery: "Via+24+Maggio+51+Piacenza",
  },
];

export const contatti = {
  telefono: "+39 347 1554344",
  telefonoDisplay: "347 1554344",
  email: "yogagea@gmail.com",
  social: {
    facebook: "https://www.facebook.com/yogapiacenza/",
    instagram: "https://www.instagram.com/yogagea_asd/",
    instagramRobi: "https://www.instagram.com/robimorisi/",
    youtube: "https://www.youtube.com/@yogageaasd5802",
  },
  mindfulness: "https://www.robimorisi.it/",
};

export const legal = {
  copyright: "Copyright © yogagea a.s.d. 2019",
  asi: "ASI n. EMI-PC0176",
  coni: "CONI n. 277215",
  cf: "C.F. 91103580337",
  piva: "P.IVA 01765650336",
  sede: "via Nova 38, 29121 Piacenza (PC)",
  codeConi: "S2210: ginnastica – attività sportiva ginnastica finalizzata alla salute ed al fitness (Cod. CONI BI001) elenco discipline ammesse e riconosciute dal CONI n.110-n.114",
  statutoYogagea: "https://www.yogagea.com/wp-content/uploads/2024/11/statuto-2023.pdf",
  statutoAsi: "https://www.asinazionale.it/documenti/?_doc_filters=documenti-normativi-asi",
};

export const orariImages = [
  "https://www.yogagea.com/wp-content/uploads/2026/01/c0a22186-f758-4271-9fb7-1123133f0f7d-980x1225.png",
  "https://www.yogagea.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-09-at-13.05.57-980x1225.jpeg",
  "https://www.yogagea.com/wp-content/uploads/2025/09/2025-26-orari.zip-3-980x1225.png",
];
