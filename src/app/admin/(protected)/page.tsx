import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Users, CalendarDays, ArrowRight } from "lucide-react";

export default async function AdminDashboardPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-charcoal">Dashboard</h1>
        <p className="text-charcoal-light text-sm mt-1">
          Benvenuto nell&apos;area amministrativa di YogaGea
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link
          href="/admin/iscrizioni"
          className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-terra/40 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-terra/10 flex items-center justify-center">
              <Users size={20} className="text-terra" />
            </div>
            <ArrowRight
              size={18}
              className="text-charcoal-light group-hover:text-terra transition-colors"
            />
          </div>
          <h2 className="font-semibold text-charcoal text-lg">Iscrizioni</h2>
          <p className="text-sm text-charcoal-light mt-1">
            Visualizza e gestisci tutte le richieste di iscrizione
          </p>
        </Link>

        <Link
          href="/admin/orari"
          className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-terra/40 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-terra/10 flex items-center justify-center">
              <CalendarDays size={20} className="text-terra" />
            </div>
            <ArrowRight
              size={18}
              className="text-charcoal-light group-hover:text-terra transition-colors"
            />
          </div>
          <h2 className="font-semibold text-charcoal text-lg">Orari</h2>
          <p className="text-sm text-charcoal-light mt-1">
            Modifica le classi, gli orari e le sedi
          </p>
        </Link>
      </div>
    </div>
  );
}
