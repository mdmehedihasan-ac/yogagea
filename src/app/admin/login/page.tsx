import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  // If already logged in, redirect to admin
  const session = await auth();
  if (session) redirect("/admin");

  const params = await searchParams;
  const callbackUrl = params.callbackUrl || "/admin";
  const error = params.error;

  return (
    <main className="min-h-screen bg-[#2d2d2d] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative h-16 w-16 mb-4">
            <Image src="/loto.png" alt="YogaGea" width={64} height={64} className="object-contain" />
          </div>
          <h1 className="text-2xl text-white tracking-wide" style={{ fontFamily: "var(--font-cormorant)" }}>
            YOGAGEA
          </h1>
          <p className="text-gray-400 text-xs tracking-widest uppercase mt-1">
            Area Amministratori
          </p>
        </div>

        {/* Native HTML form posting directly to NextAuth */}
        <form
          method="post"
          action="/api/auth/callback/credentials"
          className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
        >
          <input type="hidden" name="callbackUrl" value={callbackUrl} />

          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Username</label>
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
            <label className="block text-sm text-gray-400 mb-1.5">Password</label>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-orange-400/70 transition-colors text-sm"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center bg-red-400/10 rounded-lg py-2 px-3">
              Username o password non corretti.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-3 font-medium transition-all"
          >
            Accedi
          </button>
        </form>
      </div>
    </main>
  );
}
