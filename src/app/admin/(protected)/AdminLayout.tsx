"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LayoutDashboard, Users, CalendarDays, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/iscrizioni", label: "Iscrizioni", icon: Users },
  { href: "/admin/orari", label: "Orari", icon: CalendarDays },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-charcoal text-white flex flex-col fixed inset-y-0 left-0 z-40">
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <div className="relative h-9 w-9">
            <Image src="/loto.png" alt="YogaGea" fill className="object-contain" />
          </div>
          <div>
            <p className="font-heading text-base font-semibold tracking-wide">YOGAGEA</p>
            <p className="text-[10px] text-cream-dark/50 uppercase tracking-widest">
              Admin Panel
            </p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                  active
                    ? "bg-terra text-white"
                    : "text-cream-dark/70 hover:text-white hover:bg-white/8"
                )}
              >
                <Icon size={17} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 pb-6">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-cream-dark/60 hover:text-white hover:bg-white/8 transition-all"
          >
            <LogOut size={17} />
            Esci
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 p-8">{children}</main>
    </div>
  );
}
