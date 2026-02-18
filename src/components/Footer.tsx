import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { contatti, legal, sedi } from "@/data/siteData";

const footerLinks = [
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/lezioni", label: "Lezioni" },
  { href: "/insegnanti", label: "Insegnanti" },
  { href: "/orari", label: "Orari" },
  { href: "/iscrizione", label: "Iscrizione Online" },
  { href: "/contatti", label: "Contatti" },
  { href: "/privacy-policy", label: "Privacy & Cookie Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-dark">
      {/* Main Footer */}
      <div className="site-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-heading text-3xl font-semibold text-white mb-4">
              YOGAGEA
            </h3>
            <p className="text-sm text-cream-dark/70 leading-relaxed mb-6">
              Un corpo flessibile + una mente flessibile = benessere.
              <br />
              Corsi di yoga, pilates e meditazione a Piacenza.
            </p>
            <div className="flex gap-3">
              <a
                href={contatti.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terra transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={contatti.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terra transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={contatti.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terra transition-colors"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="font-heading text-xl text-white mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-dark/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sedi */}
          <div>
            <h4 className="font-heading text-xl text-white mb-4">Le Nostre Sedi</h4>
            <ul className="space-y-4">
              {sedi.map((sede) => (
                <li key={sede.nome} className="flex gap-2">
                  <MapPin size={16} className="text-terra mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">{sede.nome}</p>
                    <p className="text-xs text-cream-dark/70">{sede.indirizzo}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contatti */}
          <div>
            <h4 className="font-heading text-xl text-white mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contatti.telefono}`}
                  className="flex items-center gap-2 text-sm text-cream-dark/70 hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-terra" />
                  {contatti.telefonoDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contatti.email}`}
                  className="flex items-center gap-2 text-sm text-cream-dark/70 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-terra" />
                  {contatti.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-cream-dark/50 mb-2 tracking-wider">COMMUNITY WHATSAPP</p>
              <p className="text-xs text-cream-dark/70 leading-relaxed">
                Per iscriverti alla community WhatsApp ed essere aggiornato sugli eventi e i corsi di yogagea scrivi a{" "}
                <a href={`mailto:${contatti.email}`} className="text-terra hover:text-terra-light transition-colors">
                  {contatti.email}
                </a>
              </p>
              <p className="text-[10px] text-cream-dark/40 mt-2">
                *i dati sono trattati nel rispetto della normativa vigente in materia di privacy come da Reg UE 679/2016 in vigore dal 25 Maggio 2018*
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="site-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream-dark/50 text-center md:text-left">
              {legal.copyright} – {legal.asi} – {legal.coni} – {legal.cf} – {legal.piva}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/iscrizione"
                className="text-xs text-cream-dark/60 hover:text-white transition-colors"
              >
                Iscrizione Online
              </Link>
              <Link
                href="/privacy-policy"
                className="text-xs text-cream-dark/60 hover:text-white transition-colors"
              >
                Privacy & Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
