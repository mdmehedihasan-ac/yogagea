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
  // ── 1 ──────────────────────────────────────────────────────────
  {
    slug: "hatha-yoga",
    nome: "Hatha Yoga",
    immagine: "https://www.yogagea.com/wp-content/uploads/2023/03/funzionaleyintonic.jpeg",
    descrizione:
      "Lo sai che tutto ciò che fai sul tappetino è Hatha Yoga? In questa lezione torniamo alla tradizione degli asana (posture) costruite nel rispetto dell'anatomia di ogni praticante. Le posizioni sono preparate anche con l'uso di props e hai tutto il tempo per aggiustare il tuo corpo e sentirti a tuo agio nella posizione. Hai bisogno di prenderti una pausa dalla frenesia settimanale? Questa lezione fa per te. Le classi hanno il focus sulle articolazioni, sui legamenti, tendini e tessuto miofasciale. Le insegnanti spiegano i significati delle varie posizioni, il loro valore e l'efficacia a livello fisico e mentale. Spesso ci sono rimandi alla tradizione yogica classica.",
    categoria: "yoga",
  },
  // ── 2 ──────────────────────────────────────────────────────────
  {
    slug: "pilates",
    nome: "Pilates",
    immagine: "https://www.yogagea.com/wp-content/uploads/2023/03/pilates.jpg",
    descrizione:
      "Le lezioni di ginnastica si avvalgono della tecnica di Pilates sul mat. Paola Busconi è fisioterapista e porta il suo sapere e la sua esperienza nella pratica sul tappetino. Le sequenze studiate sono all'insegna dell'allenamento di varie fasce muscolari, addome e pavimento pelvico, in particolare ma anche braccia gambe e spalle. Classi a numero limitato di praticanti. Prenotarsi è molto semplice: contattaci e ti spieghiamo come fare.",
    categoria: "pilates",
    suPrenotazione: true,
    telefonoPrenotazione: "+39 329 4291041",
  },
  // ── 3 ──────────────────────────────────────────────────────────
  {
    slug: "vinyasa-krama",
    nome: "Vinyasa Krama",
    immagine: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=980&q=80",
    descrizione:
      "Vinyasa Krama, da kram che significa passo, prevede il sequenziamento progressivo degli Asana (posture), dal più semplice al più complesso. Pratica dinamica e intensa, il cui ritmo è dettato dal respiro. Affondando la mente nel corpo attraverso l'allineamento al respiro interiore, accediamo alla meditazione in cui le polarità si dissolvono. Il corpo è respiro; il respiro è corpo.",
    categoria: "yoga",
  },
  // ── 4 ──────────────────────────────────────────────────────────
  {
    slug: "yoga-schiena",
    nome: "Yoga Schiena",
    immagine: "https://www.yogagea.com/wp-content/uploads/2023/08/exotic-yoga_2.jpg",
    descrizione:
      "Quando la colonna vertebrale è flessibile ed elastica allora il corpo resta giovane. La nostra età dipende proprio dallo stato della colonna vertebrale. Durante la classe, grazie a movimenti lenti armonicamente abbinati alla corretta respirazione, l'insegnante ti permette di ritrovare la forza della schiena. Se soffri di mal di schiena è importante riattivare i muscoli che possono sostenerla.",
    categoria: "yoga",
  },
  // ── 5 ──────────────────────────────────────────────────────────
  {
    slug: "rocket-yoga-inspired",
    nome: "Rocket Yoga Inspired",
    immagine: "https://www.yogagea.com/wp-content/uploads/2025/09/ROCKET-YOGA-INSPIRED-980x549.jpg",
    descrizione:
      "Yoga Rocket Inspired è uno stile dinamico e creativo che combina elementi di Ashtanga e Vinyasa. Caratterizzato da sequenze veloci e movimenti fluidi, questo stile aiuta a migliorare la forza, la flessibilità e la concentrazione. Ideale per chi cerca una pratica energizzante e sfidante.",
    categoria: "yoga",
  },
  // ── 6 ──────────────────────────────────────────────────────────
  {
    slug: "ashtanga",
    nome: "Ashtanga",
    immagine: "https://www.yogagea.com/wp-content/uploads/2024/08/ASHTANGA-980x549.png",
    descrizione:
      "Pratica dinamica e sostenuta, scandita da movimenti in sequenza ritmati dal respiro profondo e controllato (Ujjayi). Durante la lezione si utilizza una tecnica di respirazione altamente performante chiamata Ujjayi che aiuta l'allievo a mantenere l'azione corretta del diaframma e a ossigenare la muscolatura. Questa pratica, creata da Pattabhi Jois, è precisa e invariata e suddivisa in serie.",
    categoria: "yoga",
  },
  // ── 7 ──────────────────────────────────────────────────────────
  {
    slug: "viveka-yoga",
    nome: "Viveka Yoga",
    immagine: "https://www.yogagea.com/wp-content/uploads/2023/08/yoga-uomo.jpg",
    descrizione:
      "In questa lezione di Hatha Yoga ci concentriamo su Asana, il terzo punto dell'ottuplice sentiero del maestro Patanjali, portando l'attenzione sul corpo attraverso la pratica delle posture per raggiungere la Meditazione finale. Lavoriamo sul corpo con una specifica preparazione atletica per acquisire gradualmente le posture, nel rispetto delle possibilità di ciascun praticante.",
    categoria: "yoga",
  },
  // ── 8 ──────────────────────────────────────────────────────────
  {
    slug: "hatha-yoga-flow",
    nome: "Hatha Yoga Flow",
    immagine: "https://www.yogagea.com/wp-content/uploads/2024/08/FLOW-980x549.png",
    descrizione:
      "Ogni pratica è un viaggio alla scoperta del proprio corpo, della propria mente e delle loro possibilità. Lo studente è accompagnato a costruire, passo dopo passo, diverse pose apice che rappresentano il culmine della sequenza dinamica, per poi scivolare dolcemente verso il rilassamento finale. Le sequenze sono armoniosamente bilanciate. Le classi prevedono pranayama, meditazione e lettura di testi yogici.",
    categoria: "yoga",
  },
  // ── 9 ──────────────────────────────────────────────────────────
  {
    slug: "katonah-inspired",
    nome: "Katonah Inspired",
    immagine: "https://www.yogagea.com/wp-content/uploads/2024/08/KATONAH-980x549.png",
    descrizione:
      "La lezione è ispirata al metodo Katonah, che unisce allo yoga le basi di Taoismo, Medicina Cinese e Geometria Sacra. Una pratica a tratti intensa, ma distensiva, che lavora sulla longevità del corpo. Agisce sulle articolazioni e sul tessuto connettivo, favorendo il buon funzionamento dei meridiani, secondo la medicina cinese.",
    categoria: "yoga",
  },
  // ── 10 ─────────────────────────────────────────────────────────
  {
    slug: "yutori",
    nome: "Yutori",
    immagine: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=980&q=80", // TODO: foto dedicata in arrivo
    descrizione:
      "Yutori significa coltivare il silenzio. Ogni sabato mattina gli incontri di Mindfulness sono seguiti da Hatha Yoga. Il secondo sabato del mese proponiamo Kundalini Yoga. Mindfulness e Kundalini sono gratuiti per i soci.",
    categoria: "meditazione",
  },
  // ── 11 ─────────────────────────────────────────────────────────
  {
    slug: "qi-gong",
    nome: "Qi Gong",
    immagine: "https://www.yogagea.com/wp-content/uploads/2025/09/qi-980x549.jpg",
    descrizione:
      "Disciplina taoista millenaria adatta a qualsiasi età, che promuove il benessere, migliora flessibilità e vitalità. I movimenti lenti fluidi e meditativi aiutano a sbloccare le tensioni del corpo e della mente, a riequilibrare la propria energia vitale (QI). Lorenza struttura l'anno in moduli di 12 incontri.",
    categoria: "qigong",
  },
  // ── 12 ─────────────────────────────────────────────────────────
  {
    slug: "kundalini-yoga",
    nome: "Kundalini Yoga",
    immagine: "https://www.yogagea.com/wp-content/uploads/2024/08/FLOW-980x549.png", // TODO: foto dedicata da aggiungere
    descrizione:
      "La lezione prevede posture (asana), tecniche respiratorie (pranayama), mudra, mantra e meditazione. Il suo scopo principale è innalzare la tua energia vitale attraverso una pratica ogni volta diversa e profonda volta a preparare il corpo, la mente ed il sistema nervoso all'aumento dell'energia. La tradizione yogica chiama questa energia Kundalini e metaforicamente è descritta come assopita sotto forma di serpente alla base della colonna vertebrale. Se vuoi tornare alla tradizione questa lezione fa per te.",
    categoria: "yoga",
  },
  // ── 13 ─────────────────────────────────────────────────────────
  {
    slug: "meditazione-vipassana",
    nome: "Meditazione Vipassana",
    immagine: "https://www.yogagea.com/wp-content/uploads/2025/09/meditazione-vipassana-980x549.jpg",
    descrizione:
      "L'incontro è strutturato in una parte di riscaldamento con movimenti semplici per sciogliere le tensioni della schiena, collo e spalle. Successivamente vengono insegnate tecniche di respirazione (pranayama). La meditazione è guidata e anticipata da una breve parte teorica. Lezione gratuita per tutti i soci.",
    categoria: "meditazione",
  },
  // ── 14 ─────────────────────────────────────────────────────────
  {
    slug: "mindfulness",
    nome: "Mindfulness",
    immagine: "https://www.yogagea.com/wp-content/uploads/2025/09/meditazione-vipassana-980x549.jpg",
    descrizione:
      "Il sabato pratichiamo la Mindfulness e non ti facciamo pagare perché crediamo che tutto il lavoro che fai (sul tappetino o in palestra) sia solo l'anticamera del tuo benessere. La meditazione è guidata dall'insegnante e varia di volta in volta per farti imparare a stare con ciò che c'è senza rimanere impigliato nella tua reattività. Per partecipare serve solo la tessera associativa.",
    categoria: "meditazione",
  },
  // ── extra (posizione da definire) ──────────────────────────────
  {
    slug: "yin-yoga",
    nome: "Yin Yoga",
    immagine: "https://www.yogagea.com/wp-content/uploads/2024/08/RAJA-980x549.png",
    descrizione:
      "Lo yin yoga è uno stile che lavora specificamente sul tessuto connettivo: il tuo corpo si muove meglio se ti prendi cura della fascia (tessuto connettivo). La lezione molto rilassante prevede la tenuta di posizioni semplici e comode grazie all'utilizzo di props. Il ritmo è dolce e lento. Intanto che ti rilassi dentro di te avviene un 'massaggio' che aiuta articolazioni, legamenti e tendini così come tutto il sistema miofasciale. I muscoli si rilassano e la mente entra in uno stato di profonda pace. È una lezione decisamente consigliata a chi pratica sport e a chi segue lezioni intense e dinamiche. Dopo la lezione di Yin Yoga è sconsigliato fare attività fisica lo stesso giorno. Concediti un'ora di pace tutta dedicata al benessere: innaffia il tuo corpo da dentro e questo fiorisce.",
    categoria: "yoga",
  },
  {
    slug: "yoga-reset",
    nome: "Yoga Reset",
    immagine: "https://images.unsplash.com/photo-1599447421388-58f63d8a6e18?w=980&q=80", // TODO: foto dedicata da aggiungere
    descrizione:
      "Volete aiutarvi a migliorare la performance sportiva e a prevenire gli infortuni? Una pratica yoga con focus su respiro, mobilità, allungo e rinforzo, dedicata a runners, ciclisti, climbers, crossfitters, calciatori, pallavolisti, rugbisti… e sportivi di ogni tipo! Pratica di stretching.",
    categoria: "yoga",
  },
];
