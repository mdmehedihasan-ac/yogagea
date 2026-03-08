"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { lezioni } from "@/data/lezioni";
import { insegnanti } from "@/data/insegnanti";
import { contatti, sedi } from "@/data/siteData";

const benefits = [
  {
    title: "Classi per ogni livello",
    description: "Percorsi pensati per principianti, praticanti intermedi e avanzati.",
    icon: Users,
  },
  {
    title: "Insegnanti qualificati",
    description: "Team con formazione certificata e approccio attento alla persona.",
    icon: HeartHandshake,
  },
  {
    title: "Benessere completo",
    description: "Yoga, pilates, meditazione e qi gong in un unico spazio di crescita.",
    icon: Sparkles,
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Scegli la disciplina",
    text: "Esplora le lezioni e trova il percorso più adatto a te.",
    href: "/lezioni",
  },
  {
    step: "02",
    title: "Consulta gli orari",
    text: "Verifica sedi e fasce orarie per organizzare la tua settimana.",
    href: "/orari",
  },
  {
    step: "03",
    title: "Iscriviti online",
    text: "Compila il modulo in pochi minuti e inizia la pratica.",
    href: "/iscrizione",
  },
];

const faqs = [
  {
    q: "Posso iniziare anche se non ho mai praticato?",
    a: "Sì. Abbiamo classi adatte a chi parte da zero e insegnanti che guidano in modo progressivo.",
  },
  {
    q: "Serve il certificato medico?",
    a: "Per le attività in sala è richiesto il certificato medico non agonistico con ECG a riposo.",
  },
  {
    q: "Posso seguire più di una disciplina?",
    a: "Certo. Molti soci combinano yoga, pilates e meditazione durante la settimana.",
  },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&q=80"
            alt="Yoga pratica"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/50 to-charcoal/80" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex min-h-screen items-center pt-24 pb-12"
        >
          <div className="site-container grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="pill-label !bg-white/10 !text-cream-dark"
              >
                Yogagea <span className="text-[10px] align-middle opacity-80">a.s.d.</span> • Piacenza
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-5 max-w-3xl font-heading text-5xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl"
              >
                Una pratica moderna,
                <span className="text-sage-light"> radicata</span> nella tradizione.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 max-w-2xl text-lg text-cream-dark/85 md:text-xl"
              >
                Yoga, pilates, meditazione e qi gong per ritrovare equilibrio, energia e benessere
                nella vita quotidiana.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="relative z-20 mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/iscrizione"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-terra px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-terra-dark hover:shadow-xl hover:shadow-terra/25"
                >
                  Iscriviti ora <ArrowRight size={18} />
                </Link>
                <Link
                  href="/lezioni"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-white/10"
                >
                  Scopri le lezioni
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="lg:col-span-5"
            >
              <div className="card-glass rounded-3xl p-6 text-white md:p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-cream-dark/80">Prossimi passi</p>
                <div className="mt-5 space-y-4">
                  {howItWorks.map((item) => (
                    <Link key={item.step} href={item.href} className="block rounded-2xl border border-white/20 bg-white/5 p-4 transition-all hover:bg-white/15 hover:border-white/35">
                      <p className="text-xs font-semibold tracking-[0.2em] text-sage-light">{item.step}</p>
                      <h3 className="mt-1 font-heading text-2xl leading-tight">{item.title}</h3>
                      <p className="mt-1 text-sm text-cream-dark/80">{item.text}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <article className="card-soft h-full p-7">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-terra/12 text-terra">
                    <item.icon size={20} />
                  </div>
                  <h3 className="mt-5 font-heading text-3xl leading-tight text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-light">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-cream-dark/65">
        <div className="site-container">
          <SectionHeading title="Lezioni" subtitle="Un palinsesto completo per ogni obiettivo" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lezioni.slice(0, 6).map((lezione, i) => (
              <ScrollReveal key={lezione.slug} delay={i * 0.05}>
                <Link href={`/lezioni/${lezione.slug}`}>
                  <article className="group card-soft overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={lezione.immagine}
                        alt={lezione.nome}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 to-transparent" />
                      <span className="absolute bottom-3 left-4 rounded-full bg-terra/85 px-3 py-1 text-xs uppercase tracking-widest text-white">
                        {lezione.categoria}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-2xl font-semibold text-charcoal transition-colors group-hover:text-terra">
                        {lezione.nome}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-charcoal-light">
                        {lezione.descrizione}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-terra transition-all group-hover:gap-2">
                        Approfondisci <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12 text-center">
            <Link
              href="/lezioni"
              className="inline-flex items-center gap-2 rounded-full border border-terra/25 px-8 py-3 font-medium text-terra transition-all hover:bg-terra/10"
            >
              Vedi tutte le lezioni <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionHeading title="Insegnanti" subtitle="Un team multidisciplinare con esperienza" />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {insegnanti.map((ins, i) => (
              <ScrollReveal key={ins.slug} delay={i * 0.05}>
                <Link href={`/insegnanti/${ins.slug}`}>
                  <article className="group text-center">
                    <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-transparent transition-all duration-500 group-hover:ring-terra md:h-32 md:w-32">
                      <Image
                        src={ins.foto}
                        alt={ins.nome}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="mt-4 font-heading text-xl text-charcoal transition-colors group-hover:text-terra">
                      {ins.nome}
                    </h3>
                    {ins.qualifica && <p className="mt-1 text-xs text-charcoal-light">{ins.qualifica}</p>}
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-cream-dark/60">
        <div className="site-container grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading title="Orari" subtitle="Programmazione aggiornata stagione 2025/2026" align="left" />
            <ScrollReveal>
              <div className="card-soft p-7 md:p-8">
                <p className="text-charcoal-light leading-relaxed">
                  Consulta gli orari completi per sede e giorno direttamente nella pagina dedicata.
                  Trovi anche il mini menu con le tre sedi e la suddivisione ottimizzata per fascia oraria.
                </p>
                <div className="mt-6">
                  <Link href="/orari" className="inline-flex items-center gap-2 rounded-full bg-terra px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-terra-dark">
                    <CalendarDays size={16} /> Vai agli orari
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} className="lg:col-span-5">
            <div className="card-soft p-7 md:p-8">
              <h3 className="font-heading text-4xl text-charcoal">Domande frequenti</h3>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="rounded-xl border border-terra/12 bg-white/75 p-4">
                    <p className="font-medium text-charcoal">{faq.q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{faq.a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/orari" className="inline-flex items-center gap-2 rounded-full bg-terra px-5 py-2.5 text-sm text-white hover:bg-terra-dark transition-colors">
                  <CalendarDays size={16} /> Orari completi
                </Link>
                <Link href="/contatti" className="inline-flex items-center gap-2 rounded-full border border-terra/20 px-5 py-2.5 text-sm text-terra hover:bg-terra/10 transition-colors">
                  <Mail size={16} /> Contattaci
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionHeading title="Contatti" subtitle="Ti aiutiamo a scegliere il percorso giusto" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="card-soft p-8">
                <h3 className="font-heading text-3xl text-charcoal">Dove siamo</h3>
                <div className="mt-6 space-y-4">
                  {sedi.map((sede) => (
                    <a
                      key={sede.nome}
                      href={`https://www.google.com/maps/search/?api=1&query=${sede.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 rounded-xl border border-terra/12 bg-white p-4 transition-all hover:shadow-md hover:border-terra/30"
                    >
                      <MapPin className="mt-0.5 shrink-0 text-terra" size={18} />
                      <div>
                        <p className="font-medium text-charcoal">{sede.nome}</p>
                        <p className="text-sm text-charcoal-light">{sede.indirizzo}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="card-soft p-8">
                <h3 className="font-heading text-3xl text-charcoal">Parla con noi</h3>
                <p className="mt-3 text-sm text-charcoal-light">
                  Rispondiamo rapidamente su telefono, email e social.
                </p>

                <div className="mt-6 space-y-3">
                  <a href={`tel:${contatti.telefono}`} className="inline-flex items-center gap-2 text-charcoal-light hover:text-terra transition-colors">
                    <Phone size={17} /> {contatti.telefonoDisplay}
                  </a>
                  <a href={`mailto:${contatti.email}`} className="block text-charcoal-light hover:text-terra transition-colors">
                    <span className="inline-flex items-center gap-2"><Mail size={17} /> {contatti.email}</span>
                  </a>
                  <a href={contatti.mindfulness} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-charcoal-light hover:text-terra transition-colors">
                    <ExternalLink size={17} /> Area mindfulness
                  </a>
                </div>

                <div className="mt-8 rounded-xl bg-sage/10 p-4 text-sm text-charcoal-light">
                  <p className="inline-flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 text-sage" size={16} />
                    Certificato medico non agonistico con ECG a riposo obbligatorio.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contatti" className="rounded-full bg-terra px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-terra-dark">
                    Vai ai contatti
                  </Link>
                  <Link href="/iscrizione" className="rounded-full border border-terra/20 px-6 py-3 text-sm font-medium text-terra transition-colors hover:bg-terra/10">
                    Inizia iscrizione
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
