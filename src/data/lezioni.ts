export interface Lezione {
  slug: string;
  nome: string;
  immagine: string;
  descrizione: string;
  categoria: "yoga" | "pilates" | "meditazione" | "qigong" | "mix";
  suPrenotazione?: boolean;
  telefonoPrenotazione?: string;
}

export const lezioni: Lezione[] = [
  {
    slug: "hatha-yoga",
    nome: "Hatha Yoga",
    immagine: "https://www.yogagea.com/wp-content/uploads/2023/03/funzionaleyintonic.jpeg",
    descrizione:
      "Hai bisogno di prenderti una pausa dalla frenesia settimanale? Questa lezione fa per te. Le classi hanno il focus sulle articolazioni, sui legamenti, tendini e tessuto miofasciale. Il ritmo è dolce e lento. Attraverso la pratica delle posture (asana) e la respirazione consapevole, riscopri l'equilibrio tra corpo e mente.",
    categoria: "yoga",
  },
  {
    slug: "vinyasa-krama",
    nome: "Vinyasa Krama",
    immagine: "https://www.yogagea.com/wp-content/uploads/2023/03/vinyasa.jpg",
    descrizione:
      "Vinyasa Krama, da kram che significa passo, prevede il sequenziamento progressivo degli Asana (posture), dal più semplice al più complesso. Pratica dinamica e intensa, il cui ritmo è dettato dal respiro. Affondando la mente nel corpo attraverso l'allineamento al respiro interiore, accediamo alla meditazione in cui le polarità si dissolvono. Il corpo è respiro; il respiro è corpo.",
    categoria: "yoga",
  },
  {
    slug: "yoga-schiena",
    nome: "Yoga Schiena",
    immagine: "https://www.yogagea.com/wp-content/uploads/2023/08/exotic-yoga_2.jpg",
    descrizione:
      "Quando la colonna vertebrale è flessibile ed elastica allora il corpo resta giovane. La nostra età dipende proprio dallo stato della colonna vertebrale. Durante la classe, grazie a movimenti lenti armonicamente abbinati alla corretta respirazione, l'insegnante ti permette di ritrovare la forza della schiena. Se soffri di mal di schiena è importante riattivare i muscoli che possono sostenerla.",
    categoria: "yoga",
  },
  {
    slug: "ashtanga",
    nome: "Ashtanga",
    immagine: "https://www.yogagea.com/wp-content/uploads/2024/08/ASHTANGA-980x549.png",
    descrizione:
      "Pratica dinamica e sostenuta, scandita da movimenti in sequenza ritmati dal respiro profondo e controllato (Ujjayi). Durante la lezione si utilizza una tecnica di respirazione altamente performante chiamata Ujjayi che aiuta l'allievo a mantenere l'azione corretta del diaframma e a ossigenare la muscolatura. Questa pratica, creata da Pattabhi Jois, è precisa e invariata e suddivisa in serie.",
    categoria: "yoga",
  },
  {
    slug: "yutori",
    nome: "Yutori",
    immagine: "https://www.yogagea.com/wp-content/uploads/2025/09/yutori-980x549.jpg",
    descrizione:
      "Yutori significa coltivare il silenzio. Ogni sabato mattina gli incontri di Mindfulness sono seguiti da Hatha Yoga Classico. Il secondo sabato del mese proponiamo Kundalini Yoga. Mindfulness e Kundalini sono gratuiti per i soci.",
    categoria: "meditazione",
  },
  {
    slug: "pilates",
    nome: "Pilates",
    immagine: "https://www.yogagea.com/wp-content/uploads/2023/03/pilates.jpg",
    descrizione:
      "Le lezioni di ginnastica si avvalgono della tecnica di Pilates sul mat. Paola Busconi è fisioterapista e porta il suo sapere e la sua esperienza nella pratica sul tappetino. Le sequenze studiate sono all'insegna dell'allenamento di varie fasce muscolari, addome e pavimento pelvico, in particolare ma anche braccia gambe e spalle.",
    categoria: "pilates",
    suPrenotazione: true,
    telefonoPrenotazione: "333 3333333",
  },
  {
    slug: "viveka-yoga",
    nome: "Viveka Yoga",
    immagine: "https://www.yogagea.com/wp-content/uploads/2023/08/yoga-uomo.jpg",
    descrizione:
      "In questa lezione di Hatha Yoga ci concentriamo su Asana, il terzo punto dell'ottuplice sentiero del maestro Patanjali, portando l'attenzione sul corpo attraverso la pratica delle posture per raggiungere la Meditazione finale. Lavoriamo sul corpo con una specifica preparazione atletica per acquisire gradualmente le posture, nel rispetto delle possibilità di ciascun praticante.",
    categoria: "yoga",
  },
  {
    slug: "katonah-inspired",
    nome: "Katonah Inspired",
    immagine: "https://www.yogagea.com/wp-content/uploads/2024/08/KATONAH-980x549.png",
    descrizione:
      "La lezione è ispirata al metodo Katonah, che unisce allo yoga le basi di Taoismo, Medicina Cinese e Geometria Sacra. Una pratica a tratti intensa, ma distensiva, che lavora sulla longevità del corpo. Agisce sulle articolazioni e sul tessuto connettivo, favorendo il buon funzionamento dei meridiani, secondo la medicina cinese.",
    categoria: "yoga",
  },
  {
    slug: "yin-yoga",
    nome: "Yin Yoga",
    immagine: "https://www.yogagea.com/wp-content/uploads/2024/08/RAJA-980x549.png",
    // TODO: testo in arrivo da Yogagea
    descrizione:
      "Lo Yin Yoga è una pratica lenta e meditativa in cui le posture vengono mantenute a lungo, dai 3 ai 5 minuti o più. Agisce in profondità sui tessuti connettivi, legamenti e fascia miofasciale, favorendo mobilità articolare e rilascio delle tensioni accumulate. Una pratica complementare a tutti gli stili dinamici, ideale per ritrovare silenzio e consapevolezza interiore.",
    categoria: "yoga",
  },

  {
    slug: "hatha-yoga-flow",
    nome: "Hatha Yoga Flow",
    immagine: "https://www.yogagea.com/wp-content/uploads/2024/08/FLOW-980x549.png",
    descrizione:
      "Ogni pratica è un viaggio alla scoperta del proprio corpo, della propria mente e delle loro possibilità. Lo studente è accompagnato a costruire, passo dopo passo, diverse pose apice che rappresentano il culmine della sequenza dinamica, per poi scivolare dolcemente verso il rilassamento finale. Le sequenze sono armoniosamente bilanciate. Le classi prevedono pranayama, meditazione e lettura di testi yogici.",
    categoria: "yoga",
  },
  {
    slug: "rocket-yoga-inspired",
    nome: "Rocket Yoga Inspired",
    immagine: "https://www.yogagea.com/wp-content/uploads/2025/09/ROCKET-YOGA-INSPIRED-980x549.jpg",
    descrizione:
      "Yoga Rocket Inspired è uno stile dinamico e creativo che combina elementi di Ashtanga e Vinyasa. Caratterizzato da sequenze veloci e movimenti fluidi, questo stile aiuta a migliorare la forza, la flessibilità e la concentrazione. Ideale per chi cerca una pratica energizzante e sfidante.",
    categoria: "yoga",
  },
  {
    slug: "qi-gong",
    nome: "Qi Gong",
    immagine: "https://www.yogagea.com/wp-content/uploads/2025/09/qi-980x549.jpg",
    descrizione:
      "Disciplina taoista millenaria adatta a qualsiasi età, che promuove il benessere, migliora flessibilità e vitalità. I movimenti lenti fluidi e meditativi aiutano a sbloccare le tensioni del corpo e della mente, a riequilibrare la propria energia vitale (QI). Lorenza struttura l'anno in moduli di 12 incontri.",
    categoria: "qigong",
  },
  {
    slug: "meditazione-vipassana",
    nome: "Meditazione Vipassana",
    immagine: "https://www.yogagea.com/wp-content/uploads/2025/09/meditazione-vipassana-980x549.jpg",
    descrizione:
      "L'incontro è strutturato in una parte di riscaldamento con movimenti semplici per sciogliere le tensioni della schiena, collo e spalle. Successivamente vengono insegnate tecniche di respirazione (pranayama). La meditazione è guidata e anticipata da una breve parte teorica. Lezione gratuita per tutti i soci.",
    categoria: "meditazione",
  },
  {
    slug: "mindfulness",
    nome: "Mindfulness",
    immagine: "https://www.yogagea.com/wp-content/uploads/2025/09/meditazione-vipassana-980x549.jpg",
    // TODO: testo in arrivo da Yogagea
    descrizione:
      "La Mindfulness è la pratica dell'attenzione consapevole al momento presente, senza giudizio. Gli incontri guidati da Robi Morisi, MBSR Trainer certificata, offrono strumenti pratici per ridurre lo stress, migliorare la chiarezza mentale e ritrovare equilibrio nella vita quotidiana.",
    categoria: "meditazione",
  },
];
