import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { insegnanti } from "@/data/insegnanti";

export const metadata: Metadata = {
  title: "Insegnanti",
  description: "Conosci gli insegnanti qualificati di YogaGea a.s.d. a Piacenza: professionisti con anni di esperienza nello yoga, pilates e meditazione.",
};

export default function InsegnantiPage() {
  return (
    <>
      <PageHero
        title="I Nostri Insegnanti"
        subtitle={`${insegnanti.length} professionisti qualificati al tuo servizio`}
        image="/insegnanti-hero.jpg"
        imageClassName="object-center md:object-[center_35%]"
      />

      {/* Grid */}
      <section className="section-space bg-cream">
        <div className="site-container">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {insegnanti.map((ins, i) => (
              <ScrollReveal key={ins.slug} delay={i * 0.05}>
                <Link href={`/insegnanti/${ins.slug}`} className="h-full">
                  <div className="group h-full overflow-hidden rounded-2xl border border-terra/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl flex flex-col">
                    <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0 bg-cream-dark/35">
                      <Image
                        src={ins.fotoBio}
                        alt={ins.nome}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                      <h2 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal group-hover:text-terra transition-colors">
                        {ins.nome}
                      </h2>
                      {ins.qualifica && (
                        <p className="text-sm text-terra mt-1">{ins.qualifica}</p>
                      )}
                      <p className="mt-2 sm:mt-3 text-sm text-charcoal-light line-clamp-2 sm:line-clamp-3 leading-relaxed flex-grow">
                        {ins.bio}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-3 sm:mt-4 text-sm text-terra font-medium group-hover:gap-2 transition-all">
                        Leggi la bio <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
