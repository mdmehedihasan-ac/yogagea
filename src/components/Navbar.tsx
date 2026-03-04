"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Instagram, Youtube, Phone, Mail, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { contatti } from "@/data/siteData";
import { useSession } from "next-auth/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/lezioni", label: "Lezioni" },
  { href: "/insegnanti", label: "Insegnanti" },
  { href: "/orari", label: "Orari" },
  { href: "/iscrizione", label: "Iscrizione" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 hidden border-b border-white/10 bg-charcoal text-cream-dark lg:block">
        <div className="site-container flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <a href={`tel:${contatti.telefono}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={13} /> {contatti.telefonoDisplay}
            </a>
            <a href={`mailto:${contatti.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={13} /> {contatti.email}
            </a>
          </div>
          <p className="tracking-wide text-cream-dark/75">Pilates su prenotazione · <a href="tel:3333333333" className="hover:text-white transition-colors underline underline-offset-2">333 3333333</a></p>
        </div>
      </div>

      <nav
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500",
          "top-0 lg:top-10",
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : isHome
              ? "bg-charcoal/55 backdrop-blur-sm"
              : "bg-charcoal/80 backdrop-blur-md"
        )}
      >
        <div className="site-container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3 shrink-0">
              <div className="relative h-12 w-12 md:h-14 md:w-14">
                <Image
                  src="/loto.png"
                  alt="YogaGea"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={cn(
                    "font-heading text-2xl md:text-3xl font-semibold tracking-wide transition-colors",
                    isScrolled ? "text-terra group-hover:text-terra-dark" : "text-white group-hover:text-cream-dark"
                  )}
                >
                  YOGAGEA
                </span>
                <span
                  className={cn(
                    "text-[10px] md:text-xs tracking-widest uppercase transition-colors font-light",
                    isScrolled ? "text-charcoal-light/70" : "text-cream-dark/70"
                  )}
                >
                  yoga e pilates
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 rounded-full border border-charcoal/10 bg-white/55 p-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm tracking-wide transition-all duration-300",
                    isScrolled
                      ? pathname === link.href
                        ? "text-terra font-medium bg-terra/10"
                        : "text-charcoal-light hover:text-terra hover:bg-terra/10"
                      : pathname === link.href
                        ? "text-charcoal font-medium bg-white/30"
                        : "text-charcoal/85 hover:text-charcoal hover:bg-white/20"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Social + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a
                  href={contatti.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={cn("p-2 transition-colors", isScrolled ? "text-charcoal-light hover:text-terra" : "text-white/70 hover:text-white")}
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={contatti.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={cn("p-2 transition-colors", isScrolled ? "text-charcoal-light hover:text-terra" : "text-white/70 hover:text-white")}
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={contatti.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className={cn("p-2 transition-colors", isScrolled ? "text-charcoal-light hover:text-terra" : "text-white/70 hover:text-white")}
                >
                  <Youtube size={16} />
                </a>
              </div>
              <Link
                href={session ? "/admin" : "/admin/login"}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all border",
                  isScrolled
                    ? "border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white"
                    : "border-white/30 text-white hover:bg-white/20"
                )}
              >
                <LayoutDashboard size={13} /> {session ? "Admin" : "Staff"}
              </Link>
              <Link
                href="/iscrizione"
                className="bg-terra text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-terra-dark transition-all duration-300 hover:shadow-lg hover:shadow-terra/20"
              >
                Iscriviti
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn("lg:hidden p-2 transition-colors z-50", isScrolled ? "text-charcoal hover:text-terra" : "text-white hover:text-white/70")}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-2 px-6 py-16 min-h-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "block text-2xl font-heading tracking-wide py-3 px-6 rounded-xl transition-all",
                      pathname === link.href
                        ? "text-terra bg-terra/10"
                        : "text-charcoal hover:text-terra"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="flex gap-6 mt-8"
              >
                <a href={contatti.social.facebook} target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-terra transition-colors">
                  <Facebook size={22} />
                </a>
                <a href={contatti.social.instagram} target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-terra transition-colors">
                  <Instagram size={22} />
                </a>
                <a href={contatti.social.youtube} target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-terra transition-colors">
                  <Youtube size={22} />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 w-full max-w-sm flex flex-col gap-3"
              >
                <Link
                  href="/iscrizione"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center bg-terra text-white px-8 py-3 rounded-full font-medium hover:bg-terra-dark transition-all"
                >
                  Iscriviti Online
                </Link>
                <Link
                  href={session ? "/admin" : "/admin/login"}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2 border border-charcoal/20 text-charcoal px-8 py-3 rounded-full text-sm font-medium hover:bg-charcoal hover:text-white transition-all"
                >
                  <LayoutDashboard size={15} /> {session ? "Admin" : "Staff"}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
