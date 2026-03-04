"use client";

import { useActionState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { authenticate } from "./actions";

export default function AdminLoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <main className="min-h-screen bg-[#2d2d2d] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative h-16 w-16 mb-4">
            <Image src="/loto.png" alt="YogaGea" width={64} height={64} className="object-contain" />
          </div>
          <h1 className="font-heading text-2xl text-white tracking-wide">YOGAGEA</h1>
          <p className="text-[#999] text-xs tracking-widest uppercase mt-1">
            Area Amministratori
          </p>
        </div>

        {/* Form */}
        <form
          action={formAction}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
        >
          <input type="hidden" name="redirectTo" value="/admin" />

          <div>
            <label className="block text-sm text-[#999] mb-1.5">Username</label>
            <input
              type="text"
              name="username"
              required
              autoComplete="username"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-orange-400/70 transition-colors text-sm"
              placeholder="admin"
            />
          </div>

          <div>
            <label className="block text-sm text-[#999] mb-1.5">Password</label>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-orange-400/70 transition-colors text-sm"
              placeholder="••••••••"
            />
          </div>

          {errorMessage && (
            <p className="text-red-400 text-sm text-center bg-red-400/10 rounded-lg py-2 px-3">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-60 text-white rounded-xl py-3 font-medium transition-all flex items-center justify-center gap-2"
          >
            {isPending ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Accesso in corso…
              </>
            ) : (
              "Accedi"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
