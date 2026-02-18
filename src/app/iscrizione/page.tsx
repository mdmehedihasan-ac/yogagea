'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, FileText, ExternalLink, Loader2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

/* ─── types ─── */
interface FormData {
  nome: string;
  cognome: string;
  codiceFiscale: string;
  dataNascita: string;
  luogoNascita: string;
  comuneResidenza: string;
  provinciaResidenza: string;
  capResidenza: string;
  indirizzoResidenza: string;
  telefono: string;
  email: string;
  accettaStatuto: boolean;
  accettaASI: boolean;
  autorizzaFotoVideo: boolean;
  dichiaraSafeguarding: boolean;
  accettaPrivacy: boolean;
  isMaggiorenne: boolean;
  tutoreNome: string;
  tutoreCognome: string;
  tutoreCodiceFiscale: string;
  tutoreTelefono: string;
  tutoreEmail: string;
}

const initialFormData: FormData = {
  nome: '',
  cognome: '',
  codiceFiscale: '',
  dataNascita: '',
  luogoNascita: '',
  comuneResidenza: '',
  provinciaResidenza: '',
  capResidenza: '',
  indirizzoResidenza: '',
  telefono: '',
  email: '',
  accettaStatuto: false,
  accettaASI: false,
  autorizzaFotoVideo: false,
  dichiaraSafeguarding: false,
  accettaPrivacy: false,
  isMaggiorenne: true,
  tutoreNome: '',
  tutoreCognome: '',
  tutoreCodiceFiscale: '',
  tutoreTelefono: '',
  tutoreEmail: '',
};

const steps = [
  { number: 1, label: 'Dati personali' },
  { number: 2, label: 'Adesione YogaGea ASD' },
  { number: 3, label: 'Tesseramento ASI' },
  { number: 4, label: 'Autorizzazioni' },
  { number: 5, label: 'Privacy e Invio' },
];

/* ─── Step indicator ─── */
function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-12">
      {steps.map((s, i) => (
        <div key={s.number} className="flex items-center gap-2">
          <motion.div
            className={`
              flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-colors
              ${current === s.number
                ? 'bg-terra text-white'
                : current > s.number
                  ? 'bg-sage text-white'
                  : 'bg-cream-dark text-charcoal-light'}
            `}
            animate={current === s.number ? { scale: [1, 1.12, 1] } : {}}
            transition={{ duration: 0.4 }}
          >
            {current > s.number ? <Check className="w-4 h-4" /> : s.number}
          </motion.div>
          {i < steps.length - 1 && (
            <div className={`hidden sm:block w-8 h-0.5 ${current > s.number ? 'bg-sage' : 'bg-cream-dark'}`} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── shared input classes ─── */
const inputClass =
  'w-full px-4 py-3 bg-white border border-cream-dark rounded-lg outline-none transition-all focus:border-terra focus:ring-2 focus:ring-terra/20 text-charcoal placeholder:text-charcoal-light/50';

const labelClass = 'block text-sm font-medium text-charcoal mb-1.5';

const checkboxLabelClass =
  'flex items-start gap-3 cursor-pointer group text-sm leading-relaxed text-charcoal';

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

/* ─── Page component ─── */
export default function IscrizionePage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setData((d) => ({ ...d, [key]: e.target.value }));

  const toggle = (key: keyof FormData) => () =>
    setData((d) => ({ ...d, [key]: !d[key] }));

  /* simple per-step validation */
  const canProceed = () => {
    switch (step) {
      case 1:
        return (
          data.nome.trim() &&
          data.cognome.trim() &&
          data.codiceFiscale.trim() &&
          data.dataNascita &&
          data.telefono.trim() &&
          data.email.trim()
        );
      case 2:
        return data.accettaStatuto;
      case 3:
        return data.accettaASI;
      case 4:
        return true; // foto/video and safeguarding are optional
      case 5:
        return data.accettaPrivacy;
      default:
        return false;
    }
  };

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canProceed()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/iscrizioni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Errore invio");
      setSubmitted(true);
    } catch {
      alert("Si è verificato un errore durante l'invio. Riprova o contattaci direttamente.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ─── slide animation ─── */
  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const [direction, setDirection] = useState(1);

  const goNext = () => {
    setDirection(1);
    next();
  };
  const goPrev = () => {
    setDirection(-1);
    prev();
  };

  /* ─── Success screen ─── */
  if (submitted) {
    return (
      <main className="min-h-screen bg-cream pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="w-24 h-24 mx-auto bg-sage/20 rounded-full flex items-center justify-center mb-8"
          >
            <Check className="w-12 h-12 text-sage" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-4xl md:text-5xl text-charcoal mb-4"
          >
            Iscrizione Inviata!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-charcoal-light text-lg mb-8"
          >
            Grazie {data.nome}! La tua richiesta di iscrizione è stata inviata con successo.
            Ti contatteremo al più presto per confermare la tua iscrizione.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-terra text-white rounded-full hover:bg-terra-dark transition-colors"
          >
            Torna alla Home
          </motion.a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-6xl mb-4">
              Modulo di Iscrizione
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Compila il modulo per iscriverti ai corsi di YogaGea ASD.
              Tutti i campi contrassegnati con * sono obbligatori.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <StepIndicator current={step} />

          {/* step label */}
          <div className="text-center mb-8">
            <span className="text-sm uppercase tracking-widest text-terra font-medium">
              Passo {step} di 5
            </span>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mt-1">
              {steps[step - 1].label}
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl shadow-sm border border-cream-dark/60 p-6 md:p-10 min-h-[400px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  {/* ──────── STEP 1: Dati personali ──────── */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Nome" required>
                          <input
                            className={inputClass}
                            placeholder="Mario"
                            value={data.nome}
                            onChange={set('nome')}
                          />
                        </Field>
                        <Field label="Cognome" required>
                          <input
                            className={inputClass}
                            placeholder="Rossi"
                            value={data.cognome}
                            onChange={set('cognome')}
                          />
                        </Field>
                      </div>

                      <Field label="Codice Fiscale" required>
                        <input
                          className={inputClass}
                          placeholder="RSSMRA80A01F205X"
                          value={data.codiceFiscale}
                          onChange={set('codiceFiscale')}
                          maxLength={16}
                          style={{ textTransform: 'uppercase' }}
                        />
                      </Field>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Data di nascita" required>
                          <input
                            type="date"
                            className={inputClass}
                            value={data.dataNascita}
                            onChange={set('dataNascita')}
                          />
                        </Field>
                        <Field label="Luogo di nascita">
                          <input
                            className={inputClass}
                            placeholder="Piacenza"
                            value={data.luogoNascita}
                            onChange={set('luogoNascita')}
                          />
                        </Field>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <Field label="Comune di residenza">
                          <input
                            className={inputClass}
                            placeholder="Piacenza"
                            value={data.comuneResidenza}
                            onChange={set('comuneResidenza')}
                          />
                        </Field>
                        <Field label="Provincia">
                          <input
                            className={inputClass}
                            placeholder="PC"
                            value={data.provinciaResidenza}
                            onChange={set('provinciaResidenza')}
                            maxLength={2}
                            style={{ textTransform: 'uppercase' }}
                          />
                        </Field>
                        <Field label="CAP">
                          <input
                            className={inputClass}
                            placeholder="29121"
                            value={data.capResidenza}
                            onChange={set('capResidenza')}
                            maxLength={5}
                          />
                        </Field>
                      </div>

                      <Field label="Indirizzo">
                        <input
                          className={inputClass}
                          placeholder="Via Roma 1"
                          value={data.indirizzoResidenza}
                          onChange={set('indirizzoResidenza')}
                        />
                      </Field>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Telefono" required>
                          <input
                            type="tel"
                            className={inputClass}
                            placeholder="+39 333 1234567"
                            value={data.telefono}
                            onChange={set('telefono')}
                          />
                        </Field>
                        <Field label="Email" required>
                          <input
                            type="email"
                            className={inputClass}
                            placeholder="mario@email.com"
                            value={data.email}
                            onChange={set('email')}
                          />
                        </Field>
                      </div>

                      {/* Maggiorenne toggle */}
                      <div className="pt-4 border-t border-cream-dark/40">
                        <label className={checkboxLabelClass}>
                          <input
                            type="checkbox"
                            checked={!data.isMaggiorenne}
                            onChange={() =>
                              setData((d) => ({ ...d, isMaggiorenne: !d.isMaggiorenne }))
                            }
                            className="mt-1 accent-terra w-4 h-4"
                          />
                          <span>L&apos;iscritto è minorenne (compila i dati del tutore legale)</span>
                        </label>
                      </div>

                      {!data.isMaggiorenne && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="space-y-5 pt-4 border-t border-cream-dark/40"
                        >
                          <p className="text-sm text-charcoal-light font-medium">
                            Dati del genitore / tutore legale
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Field label="Nome tutore">
                              <input
                                className={inputClass}
                                value={data.tutoreNome}
                                onChange={set('tutoreNome')}
                              />
                            </Field>
                            <Field label="Cognome tutore">
                              <input
                                className={inputClass}
                                value={data.tutoreCognome}
                                onChange={set('tutoreCognome')}
                              />
                            </Field>
                          </div>
                          <Field label="C.F. tutore">
                            <input
                              className={inputClass}
                              value={data.tutoreCodiceFiscale}
                              onChange={set('tutoreCodiceFiscale')}
                              maxLength={16}
                              style={{ textTransform: 'uppercase' }}
                            />
                          </Field>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Field label="Telefono tutore">
                              <input
                                type="tel"
                                className={inputClass}
                                value={data.tutoreTelefono}
                                onChange={set('tutoreTelefono')}
                              />
                            </Field>
                            <Field label="Email tutore">
                              <input
                                type="email"
                                className={inputClass}
                                value={data.tutoreEmail}
                                onChange={set('tutoreEmail')}
                              />
                            </Field>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* ──────── STEP 2: Adesione YogaGea ASD ──────── */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="bg-cream/60 rounded-xl p-6">
                        <h3 className="font-heading text-xl text-charcoal mb-3">
                          Adesione all&apos;Associazione YogaGea ASD
                        </h3>
                        <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                          Per partecipare alle attività di YogaGea è necessario essere
                          soci dell&apos;associazione. L&apos;adesione comporta l&apos;accettazione
                          dello statuto e dei regolamenti interni dell&apos;associazione.
                        </p>
                        <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                          La quota associativa annuale è separata dalla quota di
                          frequenza ai corsi. L&apos;anno associativo decorre dal 1° settembre
                          al 31 agosto dell&apos;anno successivo.
                        </p>
                        <a
                          href="https://www.yogagea.com/wp-content/uploads/2024/11/statuto-2023.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-terra hover:text-terra-dark transition-colors text-sm font-medium"
                        >
                          <FileText className="w-4 h-4" />
                          Scarica lo Statuto dell&apos;Associazione (PDF)
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="bg-cream/60 rounded-xl p-6">
                        <h3 className="font-heading text-xl text-charcoal mb-3">
                          Dichiarazione del socio
                        </h3>
                        <div className="text-sm text-charcoal-light leading-relaxed space-y-2 mb-4">
                          <p>Il/La sottoscritto/a dichiara:</p>
                          <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>
                              Di aver preso visione dello Statuto e dei regolamenti
                              dell&apos;associazione YogaGea ASD
                            </li>
                            <li>
                              Di accettare integralmente le norme statutarie e
                              regolamentari dell&apos;associazione
                            </li>
                            <li>
                              Di essere a conoscenza che l&apos;attività svolta
                              dall&apos;associazione ha carattere dilettantistico
                            </li>
                            <li>
                              Di impegnarsi a versare la quota associativa annuale
                            </li>
                            <li>
                              Di essere in possesso di certificato medico valido per
                              attività sportiva non agonistica, come richiesto dalla
                              normativa vigente
                            </li>
                          </ul>
                        </div>
                      </div>

                      <label className={checkboxLabelClass}>
                        <input
                          type="checkbox"
                          checked={data.accettaStatuto}
                          onChange={toggle('accettaStatuto')}
                          className="mt-1 accent-terra w-4 h-4 flex-shrink-0"
                        />
                        <span>
                          Dichiaro di aver letto e di accettare integralmente lo{' '}
                          <a
                            href="https://www.yogagea.com/wp-content/uploads/2024/11/statuto-2023.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-terra underline"
                          >
                            Statuto dell&apos;Associazione YogaGea ASD
                          </a>{' '}
                          e di voler aderire in qualità di socio. *
                        </span>
                      </label>
                    </div>
                  )}

                  {/* ──────── STEP 3: Tesseramento ASI ──────── */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="bg-cream/60 rounded-xl p-6">
                        <h3 className="font-heading text-xl text-charcoal mb-3">
                          Tesseramento ASI – Associazioni Sportive e Sociali Italiane
                        </h3>
                        <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                          YogaGea ASD è affiliata all&apos;Ente di Promozione Sportiva ASI
                          (Associazioni Sportive e Sociali Italiane), riconosciuto dal CONI.
                          Il tesseramento ASI è obbligatorio per tutti i soci e include
                          la copertura assicurativa per la pratica sportiva.
                        </p>
                        <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                          Il tesseramento include:
                        </p>
                        <ul className="text-sm text-charcoal-light list-disc list-inside space-y-1 ml-2 mb-4">
                          <li>Copertura assicurativa infortuni durante l&apos;attività sportiva</li>
                          <li>Copertura RC verso terzi</li>
                          <li>Tutela sanitaria</li>
                          <li>Accesso alle attività e manifestazioni dell&apos;ente</li>
                        </ul>
                        <a
                          href="https://www.asinazionale.it/documenti/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-terra hover:text-terra-dark transition-colors text-sm font-medium"
                        >
                          <FileText className="w-4 h-4" />
                          Documentazione ASI Nazionale
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="bg-cream/60 rounded-xl p-6">
                        <p className="text-sm text-charcoal-light leading-relaxed">
                          Il/La sottoscritto/a prende atto che il tesseramento ASI comporta
                          il trattamento dei dati personali da parte dell&apos;Ente ASI ai fini
                          del tesseramento sportivo, della copertura assicurativa e degli
                          adempimenti previsti dalla normativa sportiva vigente.
                        </p>
                      </div>

                      <label className={checkboxLabelClass}>
                        <input
                          type="checkbox"
                          checked={data.accettaASI}
                          onChange={toggle('accettaASI')}
                          className="mt-1 accent-terra w-4 h-4 flex-shrink-0"
                        />
                        <span>
                          Acconsento al tesseramento ASI e alla relativa copertura
                          assicurativa, prendendo atto che i miei dati personali saranno
                          trasmessi all&apos;Ente ASI per le finalità connesse al tesseramento
                          sportivo. *
                        </span>
                      </label>
                    </div>
                  )}

                  {/* ──────── STEP 4: Autorizzazioni ──────── */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div className="bg-cream/60 rounded-xl p-6">
                        <h3 className="font-heading text-xl text-charcoal mb-3">
                          Autorizzazione utilizzo immagini
                        </h3>
                        <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                          Durante le attività dell&apos;associazione potrebbero essere
                          effettuate riprese fotografiche e video a scopo promozionale,
                          informativo e di documentazione delle attività stesse.
                          Le immagini potranno essere utilizzate sul sito web, sui social
                          media (Facebook, Instagram, YouTube) e su materiale promozionale
                          dell&apos;associazione.
                        </p>
                      </div>

                      <label className={checkboxLabelClass}>
                        <input
                          type="checkbox"
                          checked={data.autorizzaFotoVideo}
                          onChange={toggle('autorizzaFotoVideo')}
                          className="mt-1 accent-terra w-4 h-4 flex-shrink-0"
                        />
                        <span>
                          Autorizzo YogaGea ASD all&apos;utilizzo delle mie immagini
                          (foto e video) realizzate durante le attività dell&apos;associazione,
                          per finalità promozionali e informative, sui propri canali di
                          comunicazione.{' '}
                          <span className="text-charcoal-light/70">(Facoltativo)</span>
                        </span>
                      </label>

                      <div className="bg-cream/60 rounded-xl p-6 mt-6">
                        <h3 className="font-heading text-xl text-charcoal mb-3">
                          Safeguarding – Tutela dei minori e dei soggetti vulnerabili
                        </h3>
                        <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                          In conformità alle disposizioni in materia di safeguarding nello sport,
                          YogaGea ASD si impegna a garantire un ambiente sicuro e rispettoso
                          per tutti i propri soci, con particolare attenzione ai minori e ai
                          soggetti vulnerabili.
                        </p>
                        <p className="text-sm text-charcoal-light leading-relaxed">
                          L&apos;associazione ha adottato un Modello organizzativo e di controllo
                          dell&apos;attività sportiva ai sensi del D.Lgs. 36/2021 e delle linee
                          guida emanate dagli organismi sportivi competenti.
                        </p>
                      </div>

                      <label className={checkboxLabelClass}>
                        <input
                          type="checkbox"
                          checked={data.dichiaraSafeguarding}
                          onChange={toggle('dichiaraSafeguarding')}
                          className="mt-1 accent-terra w-4 h-4 flex-shrink-0"
                        />
                        <span>
                          Dichiaro di aver preso visione della policy di safeguarding
                          adottata dall&apos;associazione e mi impegno a rispettarne i principi
                          e le disposizioni.{' '}
                          <span className="text-charcoal-light/70">(Facoltativo)</span>
                        </span>
                      </label>
                    </div>
                  )}

                  {/* ──────── STEP 5: Privacy e Invio ──────── */}
                  {step === 5 && (
                    <div className="space-y-6">
                      <div className="bg-cream/60 rounded-xl p-6">
                        <h3 className="font-heading text-xl text-charcoal mb-3">
                          Informativa sulla Privacy
                        </h3>
                        <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                          Ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR),
                          informiamo che i dati personali forniti saranno trattati da
                          YogaGea ASD in qualità di Titolare del trattamento, per le
                          seguenti finalità:
                        </p>
                        <ul className="text-sm text-charcoal-light list-disc list-inside space-y-1 ml-2 mb-3">
                          <li>Gestione dell&apos;adesione e del tesseramento</li>
                          <li>Organizzazione e svolgimento delle attività sportive</li>
                          <li>Adempimento degli obblighi di legge e regolamentari</li>
                          <li>Comunicazione di informazioni relative alle attività dell&apos;associazione</li>
                        </ul>
                        <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                          I dati saranno conservati per il tempo necessario al perseguimento
                          delle finalità sopra indicate e comunque non oltre i termini
                          previsti dalla normativa vigente. I dati potranno essere comunicati
                          all&apos;Ente ASI, agli enti sportivi competenti e alle autorità
                          previste dalla legge.
                        </p>
                        <p className="text-sm text-charcoal-light leading-relaxed">
                          L&apos;interessato potrà esercitare i diritti previsti dagli artt.
                          15-22 del GDPR (accesso, rettifica, cancellazione, limitazione,
                          portabilità, opposizione) scrivendo a{' '}
                          <a
                            href="mailto:robi.morisi@gmail.com"
                            className="text-terra underline"
                          >
                            robi.morisi@gmail.com
                          </a>
                          .
                        </p>
                      </div>

                      <a
                        href="/privacy-policy"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-terra hover:text-terra-dark transition-colors text-sm font-medium"
                      >
                        <FileText className="w-4 h-4" />
                        Leggi l&apos;informativa completa sulla privacy
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <label className={checkboxLabelClass}>
                        <input
                          type="checkbox"
                          checked={data.accettaPrivacy}
                          onChange={toggle('accettaPrivacy')}
                          className="mt-1 accent-terra w-4 h-4 flex-shrink-0"
                        />
                        <span>
                          Dichiaro di aver letto e compreso l&apos;informativa sulla privacy
                          e acconsento al trattamento dei miei dati personali per le
                          finalità indicate. *
                        </span>
                      </label>

                      {/* Riepilogo */}
                      <div className="bg-cream/60 rounded-xl p-6 mt-4">
                        <h3 className="font-heading text-xl text-charcoal mb-4">
                          Riepilogo iscrizione
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-charcoal-light">Nome:</span>{' '}
                            <span className="text-charcoal font-medium">{data.nome} {data.cognome}</span>
                          </div>
                          <div>
                            <span className="text-charcoal-light">C.F.:</span>{' '}
                            <span className="text-charcoal font-medium uppercase">{data.codiceFiscale}</span>
                          </div>
                          <div>
                            <span className="text-charcoal-light">Email:</span>{' '}
                            <span className="text-charcoal font-medium">{data.email}</span>
                          </div>
                          <div>
                            <span className="text-charcoal-light">Telefono:</span>{' '}
                            <span className="text-charcoal font-medium">{data.telefono}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                type="button"
                onClick={goPrev}
                disabled={step === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all
                  ${step === 1
                    ? 'text-charcoal-light/40 cursor-not-allowed'
                    : 'text-charcoal hover:bg-cream-dark'
                  }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Indietro
              </button>

              {step < 5 ? (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all
                    ${canProceed()
                      ? 'bg-terra text-white hover:bg-terra-dark shadow-lg shadow-terra/20'
                      : 'bg-cream-dark text-charcoal-light/50 cursor-not-allowed'
                    }`}
                >
                  Avanti
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canProceed() || submitting}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all
                    ${canProceed() && !submitting
                      ? 'bg-sage text-white hover:bg-sage/90 shadow-lg shadow-sage/20'
                      : 'bg-cream-dark text-charcoal-light/50 cursor-not-allowed'
                    }`}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      Invia Iscrizione
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
