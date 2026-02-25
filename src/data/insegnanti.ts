export interface Insegnante {
  slug: string;
  nome: string;
  foto: string;
  fotoBio: string;
  bio: string;
  qualifica?: string;
  instagram?: string[];
  sito?: string;
}

export const insegnanti: Insegnante[] = [
  {
    slug: "robi-morisi",
    nome: "Robi Morisi",
    foto: "https://www.yogagea.com/wp-content/uploads/2023/04/rob1-1-small.jpg",
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2023/08/Robi_Morisi_bio-980x1250.jpg",
    qualifica: "SOCIA YANI − ERYT 500",
    bio: `Ho iniziato a praticare yoga nel 1992 seguendo uno yogacharya keralese. L'esperienza diretta con lo yoga puramente indiano è durata 17 anni e le tracce particolari che colorano il mio modo di insegnare yoga provengono proprio da lì. Mi sono laureata in Architettura presso il Politecnico di Milano specializzandomi successivamente con un master europeo in edilizia tutelata. La passione per lo studio ha seguito per decenni tre binari paralleli: l'architettura, lo yoga la meditazione vipassana. Mi sono formata come Yoga Teacher negli anni seguendo insegnanti di grande esperienza (fra cui Andrea Boni, Alessandra di Prampero, Alexandra van Oosterum, Piero Vivarelli, Dhugal Meachem) per poter spaziare nei diversi stili di hatha yoga (Anusara, Vinyasa, Yin Yoga). Approfondisco puntualmente la pratica personale di assist con Karina Gusalova presso il centro Jivamukti Yoga di Barcellona. L'incontro con Corrado Pensa nel 2002 ha spalancato la porta alla meditazione e al Dharma secondo gli insegnamenti del buddhismo Theravada. Sono praticante di Vipassana e seguo costantemente gli insegnamenti di Neva Papachristou e Corrado Pensa. Ho fondato e dirigo la scuola Yogagea asd a Piacenza. Scrivo articoli sulla pratica della vipassana per la rivista Sati dell'A.Me.Co. Ho pubblicato due libri sullo yoga: "Yoga Semplicemente" assieme ad Alexandra van Oosterum e "Ganesha chi? Il mito nello Yoga". Conduco seminari e ritiri di Yoga, Mindfulness e Vipassana. Sono Mindfulness Base Instructor con master in "Neuroscienze, mindfulness e pratiche contemplative" presso dell'Università di Pisa. Iscritta all'Albo Nazionale Mindfulness come MBSR Trainer e Mindfulness Professional Trainer. Il mio training di Dharma è seguito da Neva Papachristou.`,
    instagram: ["https://www.instagram.com/robimorisi/"],
    sito: "https://www.robimorisi.it/",
  },
  {
    slug: "valter-chiusa",
    nome: "Valter Chiusa",
    foto: "https://www.yogagea.com/wp-content/uploads/2023/04/valter-1-small.jpg", // TODO: foto da aggiornare
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2023/03/1valter.png", // TODO: foto da aggiornare
    bio: `Ho una lunga esperienza di pratica e studio della ginnastica. Ho iniziato a praticare Yoga nel 1969. Mi sono diplomato insegnante presso la scuola di formazione di Alexandra van Oosterum e presso di lei ho continuato lo studio e l'aggiornamento teorico e pratico. La mia pratica personale è caratterizzata dall'attenzione anatomica e dall'approfondimento delle posture in modo attento e dettagliato. Utilizzo la metodologia dell'Ashtanga Yoga che per me è ginnastica integrata al respiro utile a tutti. Nel 2012 ho seguito stages condotti da Ana Forrest a Milano e workshops di Andrea Boni e Piero Vivarelli. Nel 2014 ho completato le Immertions I-II-III di Anusara® Yoga con maestri italiani e stranieri. Nel 2015 ho concluso il Teacher Training di Anusara® Yoga a Milano. Assieme a Robi Morisi sono socio fondatore di Yogagea a.s.d.`,
  },
  {
    slug: "francesca-luppini",
    nome: "Francesca Luppini",
    foto: "https://www.yogagea.com/wp-content/uploads/2023/04/franc1-1-small.jpg",
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2023/08/Francesca_Luppini_bio-980x1250.jpg",
    bio: `La passione per la natura e la filosofia è ciò che dà inizio alla mia ricerca personale e all'incontro con lo yoga, che risuona appieno con la mia sensibilità. Ho iniziato a praticare da giovanissima seguendo i testi classici dello yoga e del Buddhismo. La vita ordinaria è il mio campo di esplorazione e la mia pratica un terreno fertile per intuizioni profonde che mi hanno portato ad abbracciare l'insegnamento come scelta di vita, abbandonando la carriera nel mondo dell'arte. Trasmetto un insegnamento che è intessuto della mia esperienza personale, incoraggio ad esplorare direttamente la realtà, con l'intenzione di non lasciarsi accecare da pensieri limitanti. Insieme al dj e polistrumentista Kevin Rizzo ho creato il progetto Nataraja, in cui il potere trasformativo dello yoga si unisce alla dimensione catartica della musica elettronica. Sempre grata ai grandi maestri ed insegnanti che hanno illuminato il suo cammino: Virginia Wood con cui approfondisce la pratica di Hatha; Simona Tarabini e Belinda Sutan per la formazione di Vinyasa; Giovanna De Paulis, Alessandra Martin e Marcello Villirillo, per la formazione di in Vinyasa Krama; infine Thich Nhat Hanh e Tirumalai Krishnamacharya, eterna fonte di ispirazione. Sono laureata in Storia dell'Arte.`,
    instagram: [
      "https://instagram.com/nataraja.yoga.djset",
      "https://instagram.com/francescaluppini",
    ],
  },
  {
    slug: "paola-busconi",
    nome: "Paola Busconi",
    foto: "https://www.yogagea.com/wp-content/uploads/2023/03/paola-small.jpeg",
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2023/08/Paola_Busconi_bio-980x1250.jpg",
    bio: `Sono fisioterapista laureata all'Università San Raffaele a Milano con master sulle patologie vertebrali. Ho deciso di diventare insegnante di Pilates nel 2019, dopo averlo praticato, assieme allo yoga, per diversi anni. Il fine è poter dare ai miei pazienti la possibilità di essere seguiti nel loro percorso post riabilitativo per recuperare al meglio il movimento. Mi piace costruire lezioni che siano stimolanti sia mentalmente che fisicamente per l'intera classe di allievi. Adatto le sequenze di pilates posturale puntualmente alle esigenze del singolo, proponendo varianti atte a rispettare la personale possibilità di esecuzione. Amo gli sport outdoor e in particolare le pratiche sportive in montagna.`,
  },
  {
    slug: "stefano-molinari",
    nome: "Stefano Molinari",
    foto: "https://www.yogagea.com/wp-content/uploads/2023/04/stef-1-small.jpg", // TODO: foto da aggiornare
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2025/09/thumbnail_IMG_7866-980x1058.jpg", // TODO: foto da aggiornare
    bio: `Incontro lo Yoga nel 2010: è l'inizio di un cammino di trasformazione. Nel 2016 completo la formazione in Hatha Yoga. Attraverso diverse esperienze di meditazione, dallo Zen alla Vipassanā, ricerco lo stare nel corpo, nel respiro, nel momento. Nel tempo la pratica si è evoluta con me, diventando un percorso di consapevolezza, libertà e presenza. Fuori dalla shala lavoro come biologo in ospedale, guido bagni di bosco, amo perdermi nella natura, camminare tra gli alberi, osservare il cielo, ascoltare i ruscelli. Ricercare un corpo che sente è la mia forma di gentilezza verso il mondo.`,
  },
  {
    slug: "barbara-alberici",
    nome: "Barbara Alberici",
    foto: "https://www.yogagea.com/wp-content/uploads/2023/04/babi-1-small.jpg",
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2023/08/Barbara_Alberici_bio-980x1250.jpg",
    bio: `Mi sono avvicinata allo Yoga nel 2014 per ricominciare a respirare e ascoltarmi. Il mio percorso è caratterizzato da intensità e gentilezza, qualità che mi hanno permesso di immergermi nella pratica costante e quotidiana, fatta di asana, letture e silenzio. Nell'aprile 2017 ho concluso il Teacher Training condotto da Nico Luce, Suzanne Faith e Andrea Boni. La mia formazione è focalizzata sullo studio dell'anatomia e degli allineamenti, oltre che sulle sacre scritture e sulla filosofia yogica. Mi piace adattare le classi ai praticanti ed ai loro umori, proponendo di volta in volta lezioni accoglienti e gentili che permettano una sana attività sportiva fisica per il benessere psicofisico dell'individuo. Sono laureata presso DAMS di Bologna alla Facoltà di Lettere e Filosofia.`,
  },
  {
    slug: "marta-vegezzi",
    nome: "Marta Vegezzi",
    foto: "https://www.yogagea.com/wp-content/uploads/2025/09/MARTA-VEGEZZI.jpg",
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2023/08/Marta_Vegezzi_bio-980x1250.jpg",
    bio: `Sono Marta, pratico yoga da 8 anni. La passione per la pratica fisica mi ha portata a scegliere di affrontare il mio primo teacher training per poter essere guidata nel conoscere e approfondire le tematiche filosofiche ed energetiche su cui si fonda la pratica. Durante questi mesi di formazione ho scoperto di amare profondamente lo yoga in tutti i suoi livelli e stratificazioni di significati, da qui nasce l'intento e una vera e propria necessità di divulgare al meglio delle mie possibilità gli insegnamenti ricevuti. Sono laureata all'Università degli Studi di Milano-Bicocca in Scienze Pedagogiche.`,
  },
  {
    slug: "federica-burzoni",
    nome: "Federica Burzoni",
    foto: "https://www.yogagea.com/wp-content/uploads/2023/08/Federica-Burzoni.jpg",
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2023/08/Federica_Burzoni_bio-980x1250.jpg",
    bio: `Sono un'insegnante certificata di Yoga Tradizionale (scuola Sivananda) e Vinyasa Yoga con approfondimento nello Yin Yoga e nel Taoismo. Vengo dal mondo della danza, che ho studiato per più di 12 anni e che mi ha lasciato basi importanti per il mio percorso yogico. Sono abilitata all'insegnamento dello yoga ai bambini. Sto proseguendo la mia formazione con lo stile Katonah Yoga, sotto l'insegnamento di Katonah Yoga Center. La mia formazione universitaria è umanistica, incentrata soprattutto sulla storia dell'arte, che ho studiato a Milano e New York e mi ha permesso di fondere le mie due grandi passioni: lo yoga e l'arte. Da qui nasce il mio approccio spirituale all'arte, tradotto nel movimento Artventurers, e la mia visione artistica dello yoga. Sono sempre alla ricerca di risposte, che trovo sul tappetino o in un museo. L'arte è la mia pratica e lo yoga la mia arte. Sono un'avventuriera insaziabile. Ho una grande empatia e sensibilità, che mi permettono di sintonizzarmi sulle persone che ho davanti e rispondere ai loro bisogni, senza tralasciare precisione, disciplina e una forte capacità di analisi. Il mio scopo è aiutare le persone a riconnettersi con il loro bambino interiore e ritrovare la comodità in loro stesse, scoprendosi ogni giorno. Sono laureata in Storia dell'Arte presso Università Cattolica di Milano e diplomata SIA a New York.`,
  },
  {
    slug: "loredana-zilioli",
    nome: "Loredana Zilioli",
    foto: "https://www.yogagea.com/wp-content/uploads/2024/08/LOREDANA_ZIOLI_HOME.jpg",
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2024/08/thumbnail_PHOTO-2024-08-15-13-16-32.jpg",
    bio: `Studio e pratico discipline olistiche dal 2003. Mi sono diplomata operatore shiatsu preso la scuola ShiatsuXin di Franco Bottalo nel 2004. Ho concluso la formazione in naturopatia nel 2010. Studio e pratico tarologia dal 2008. Amo osservare studiare e imparare, da qualsiasi cosa. La vita è una continua sorpresa. Ho incontrato lo yoga molto presto, ma l'amore è sbocciato tardi, e qui mi sono finalmente trovata a casa. Ho concluso il teacher training in Hatha Yoga con Virginia Tucci a Milano e sto completando la formazione in Yin Yoga con Dhugal Meachem. Lo yoga per me è gioia e impegno insieme, e ho scoperto di potermi divertire sul tappetino pur facendo un buon lavoro su tutti i livelli: fisico, mentale, emotivo e spirituale. Insegnare yoga per me significa poter restituire, a chi pratica, qualcosa di quanto ho generosamente ricevuto da tutti i miei insegnanti. Con gratitudine.`,
  },
  {
    slug: "stefania-casella",
    nome: "Stefania Casella",
    foto: "https://www.yogagea.com/wp-content/uploads/2025/03/Stefania-Casella.jpg",
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2025/09/IMG-20250915-WA0000-1-980x1309.jpg",
    bio: `Affascinata sin da bambina dalla cultura orientale, ho scoperto lo yoga in modo spontaneo, ancor prima di conoscerlo consapevolmente. Il mio primo incontro con questa disciplina è avvenuto verso i 30 anni ed ha acceso in me una passione che negli anni mi ha portata a esplorare diversi stili. Nel 2019 ho frequentato il mio primo seminario con Gabriella Cella, un'esperienza che ha segnato profondamente il mio percorso. Da quel momento, Gabriella è diventata il mio punto di riferimento, guidandomi alla scoperta di una disciplina con radici profonde, capace di trasformare corpo e mente. La mia formazione mi ha portata ad approfondire l'arte di adattare la pratica alle esigenze del corpo attraverso il Vinyasa Krama Sequencing, studiato con le maestre Giovanna De Paulis e Alessandra Tisato. Ho ampliato le mie conoscenze dedicandomi allo Yoga Nidra, allo Yoga per il femminile e allo yoga ratna integrando cosi nella mia pratica la dimensione simbolica e archetipica dello yoga. La mia passione per la mitologia induista mi ha spinta ad esplorare lo studio (con Sonia Pippinato e Claudia Cane) per la creazione di sequenze come Shakti Flow, Shakti Restorative, Mythic Yoga Flow, che uniscono movimento, narrazione e connessione interiore. Ho avuto il privilegio di partecipare a corsi, masterclass e seminari con maestri di grande esperienza, tra cui Marco Passavanti, Karina Gusalova, Carla Nataloni, Giovanna De Paulis, Paola Mattei, Michela Maltoni, Ameriga Giannone e Anna Inferrera, ognuno dei quali ha arricchito la mia visione dello yoga e stimolato il desiderio di formazione ed evoluzione continua.`,
  },
  {
    slug: "azzurra-corradini",
    nome: "Azzurra Corradini",
    foto: "https://www.yogagea.com/wp-content/uploads/2025/09/AZZURRA-CORRADINI.jpg",
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2025/09/AZZURRA-CORRADINI_P-980x1239.jpg",
    bio: `Ho iniziato a praticare yoga nel 2019, concentrandomi principalmente sullo stile dinamico e Ashtanga. Questa pratica mi ha aiutato a migliorare la mia forza, flessibilità e concentrazione. Nel 2024, ho deciso di approfondire la mia passione per lo yoga e ho ottenuto la certificazione di Yoga Teacher. Attraverso lo yoga, ho imparato l'importanza di rispettare il mio corpo, i suoi tempi e limiti e sono entusiasta di condividere questa conoscenza con gli altri.`,
  },
  {
    slug: "lorenza-boni",
    nome: "Lorenza Boni",
    foto: "https://www.yogagea.com/wp-content/uploads/2025/09/LORENZA-BONI.jpg", // TODO: foto da aggiornare
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2025/09/LORENZA-BONI_P-980x1239.jpg", // TODO: foto da aggiornare
    bio: `Sono istruttore di QiGong salutistico secondo gli insegnamenti del maestro Li Xiaoming. Propongo pratiche adatte a tutte le età fatte di movimenti fluidi atti a rendere il corpo flessibile ed elastico, liberare la mente e potenziare il proprio Qi, ovvero la propria energia vitale.`,
  },
  {
    slug: "grazia-alicanti",
    nome: "Grazia Alicanti",
    foto: "https://www.yogagea.com/wp-content/uploads/2023/04/rob1-1-small.jpg", // TODO: sostituire con foto di Grazia Alicanti
    fotoBio: "https://www.yogagea.com/wp-content/uploads/2023/08/Robi_Morisi_bio-980x1250.jpg", // TODO: sostituire con foto bio di Grazia Alicanti
    bio: `TODO: testo in arrivo da Yogagea.`,
  },
];
