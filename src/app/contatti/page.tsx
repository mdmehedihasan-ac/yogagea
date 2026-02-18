import type { Metadata } from "next";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import { contatti, sedi } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatta YogaGea a.s.d. a Piacenza. Telefono, email, indirizzi delle nostre sedi e modulo di contatto.",
};

export default function ContattiPage() {
  return (
    <>
      <PageHero
        title="Contatti"
        subtitle="Siamo a disposizione per informazioni su corsi, orari e iscrizioni."
        image="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=1920&q=80"
        compact
      />

      {/* Dove Siamo */}
      <section className="section-space bg-cream">
        <div className="site-container">
          <SectionHeading title="Dove Siamo" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {sedi.map((sede, i) => (
              <ScrollReveal key={sede.nome} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow h-full">
                  <MapPin className="text-terra mx-auto mb-4" size={32} />
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                    {sede.nome}
                  </h3>
                  <p className="text-charcoal-light text-sm">{sede.indirizzo}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Maps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sedi.map((sede, i) => (
              <ScrollReveal key={`${sede.nome}-map`} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                  <div className="px-5 py-4 border-b border-cream-dark/60">
                    <h4 className="font-heading text-lg font-semibold text-charcoal">{sede.nome}</h4>
                    <p className="text-xs text-charcoal-light mt-1">{sede.indirizzo}</p>
                  </div>
                  <div className="h-[320px]">
                    <iframe
                      src={`https://maps.google.com/maps?q=${sede.mapQuery}&z=16&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mappa ${sede.nome}`}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Per Info + Form */}
      <section className="section-space bg-cream-dark/70">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <ScrollReveal>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-8">
                  Per Info
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <a
                    href={`tel:${contatti.telefono}`}
                    className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-terra/10 flex items-center justify-center group-hover:bg-terra transition-colors">
                      <Phone size={20} className="text-terra group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-light uppercase tracking-wide">Telefono</p>
                      <p className="font-medium text-charcoal">{contatti.telefonoDisplay}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${contatti.email}`}
                    className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-terra/10 flex items-center justify-center group-hover:bg-terra transition-colors">
                      <Mail size={20} className="text-terra group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-light uppercase tracking-wide">Email</p>
                      <p className="font-medium text-charcoal">{contatti.email}</p>
                    </div>
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="mt-10">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                  Seguici sui Social
                </h3>
                <div className="flex gap-4">
                  <a href={contatti.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-terra hover:text-white text-charcoal-light transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href={contatti.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-terra hover:text-white text-charcoal-light transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href={contatti.social.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-terra hover:text-white text-charcoal-light transition-all">
                    <Youtube size={20} />
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} className="mt-10">
                <div className="bg-sage/10 rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Community WhatsApp</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    Per iscriverti alla community WhatsApp ed essere aggiornato sugli eventi e i corsi di
                    yogagea scrivi a{" "}
                    <a href={`mailto:${contatti.email}`} className="text-terra hover:underline">{contatti.email}</a>
                  </p>
                  <p className="text-[10px] text-charcoal-light/60 mt-2">
                    *i dati sono trattati nel rispetto della normativa vigente in materia di privacy come da Reg UE 679/2016 in vigore dal 25 Maggio 2018*
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-fit sticky top-28">
                <h2 className="font-heading text-3xl font-semibold text-charcoal mb-2">
                  Scrivici
                </h2>
                <p className="text-sm text-charcoal-light mb-8">
                  Oppure usa il seguente modulo
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
