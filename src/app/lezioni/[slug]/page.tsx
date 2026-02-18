import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import { lezioni } from "@/data/lezioni";
import ScrollReveal from "@/components/ScrollReveal";

export function generateStaticParams() {
  return lezioni.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const lezione = lezioni.find((l) => l.slug === slug);
    if (!lezione) return { title: "Lezione non trovata" };
    return {
      title: lezione.nome,
      description: lezione.descrizione.slice(0, 160),
    };
  });
}

export default async function LezioneDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lezione = lezioni.find((l) => l.slug === slug);
  if (!lezione) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={lezione.immagine}
          alt={lezione.nome}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/30" />
        <div className="relative z-10 flex items-end justify-start h-full pb-12 px-4">
          <div className="mx-auto max-w-7xl w-full">
            <span className="text-cream-dark/80 text-sm tracking-widest uppercase">
              {lezione.categoria}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-semibold mt-2">
              {lezione.nome}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-space bg-cream">
        <div className="site-container max-w-4xl">
          <ScrollReveal>
            <Link
              href="/lezioni"
              className="inline-flex items-center gap-2 text-terra hover:text-terra-dark transition-colors mb-8"
            >
              <ArrowLeft size={18} /> Torna alle Lezioni
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
              {lezione.descrizione}
            </p>
          </ScrollReveal>

          {lezione.suPrenotazione && lezione.telefonoPrenotazione && (
            <ScrollReveal delay={0.15} className="mt-8">
              <div className="rounded-xl bg-sage/10 p-5 flex items-center gap-3">
                <Phone size={18} className="text-terra shrink-0" />
                <p className="text-charcoal-light">
                  <span className="font-semibold text-charcoal">Solo su prenotazione</span> — Chiama o scrivi al{" "}
                  <a href={`tel:${lezione.telefonoPrenotazione.replace(/\s/g, "")}`} className="text-terra font-medium hover:text-terra-dark underline underline-offset-2 transition-colors">
                    {lezione.telefonoPrenotazione}
                  </a>
                </p>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.2} className="mt-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/iscrizione"
                className="bg-terra text-white px-8 py-4 rounded-full font-medium hover:bg-terra-dark transition-all text-center"
              >
                Iscriviti a questo corso
              </Link>
              <Link
                href="/orari"
                className="border-2 border-terra/30 text-terra px-8 py-4 rounded-full font-medium hover:bg-terra/5 transition-all text-center"
              >
                Vedi Orari
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
