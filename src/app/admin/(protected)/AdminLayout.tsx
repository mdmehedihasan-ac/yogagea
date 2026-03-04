"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LayoutDashboard, Users, CalendarDays, LogOut, Menu, X, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/iscrizioni", label: "Iscrizioni", icon: Users },
  { href: "/admin/orari", label: "Orari", icon: CalendarDays },
];

function SidebarContent({ pathname, onClose }: { pathname: string; onClose?: () => void }) {
  return (
    <>
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
        <div className="relative h-9 w-9 shrink-0">
          <Image src="/loto.png" alt="YogaGea" fill className="object-contain" />
        </div>
        <div>
          <p className="font-heading text-base font-semibold tracking-wide">YOGAGEA</p>
          <p className="text-[10px] text-cream-dark/50 uppercase tracking-widest">Admin Panel</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="ml-auto text-cream-dark/60 hover:text-white transition-colors">
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all",
                active
                  ? "bg-terra text-white"
                  : "text-cream-dark/70 hover:text-white hover:bg-white/10"
              )}
            >
              <Icon size={17} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pb-6 space-y-1">
        <Link
          href="/"
          onClick={onClose}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-cream-dark/60 hover:text-white hover:bg-white/10 transition-all"
        >
          <Home size={17} />
          Torna al sito
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-cream-dark/60 hover:text-white hover:bg-white/10 transition-all"
        >
          <LogOut size={17} />
          Esci
        </button>
      </div>
    </>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar desktop */}
      <aside className="hidden lg:flex w-64 bg-charcoal text-white flex-col fixed inset-y-0 left-0 z-40">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar mobile drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-charcoal text-white flex flex-col transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent pathname={pathname} onClose={() => setMobileOpen(false)} />
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Mobile top bar */}
        <header className="lg:hidden sticky top-0 z-30 bg-charcoal text-white flex items-center gap-3 px-4 py-3 shadow-md">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Apri menu"
          >
            <Menu size={22} />
          </button>
          <div className="relative h-7 w-7 shrink-0">
            <Image src="/loto.png" alt="YogaGea" fill className="object-contain" />
          </div>
          <span className="font-heading text-base font-semibold tracking-wide flex-1">YOGAGEA Admin</span>
          <Link href="/" className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-cream-dark/70 hover:text-white" aria-label="Torna al sito">
            <Home size={20} />
          </Link>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
