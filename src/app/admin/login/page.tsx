"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Lock, User, Eye, EyeOff, Loader2 } from "lucide-react";

function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    setLoading(false);

    if (!result || result.error) {
      setError("Username o password non corretti.");
    } else {
      window.location.href = callbackUrl;
    }
  };

  return (
    <main className="min-h-screen bg-charcoal flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative h-16 w-16 mb-4">
            <Image src="/loto.png" alt="YogaGea" fill className="object-contain" />
          </div>
          <h1 className="font-heading text-2xl text-white tracking-wide">YOGAGEA</h1>
          <p className="text-cream-dark/60 text-xs tracking-widest uppercase mt-1">
            Area Amministratori
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
        >
          <div>
            <label className="block text-sm text-cream-dark/70 mb-1.5">Username</label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-cream-dark/40"
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                className="w-full bg-white/8 border border-white/15 rounded-xl pl-9 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-terra/70 transition-colors text-sm"
                placeholder="admin"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-cream-dark/70 mb-1.5">Password</label>
            <div className="relative">
              <Lock
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-cream-dark/40"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full bg-white/8 border border-white/15 rounded-xl pl-9 pr-10 py-3 text-white placeholder-white/30 focus:outline-none focus:border-terra/70 transition-colors text-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-cream-dark/40 hover:text-cream-dark/70 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center bg-red-400/10 rounded-lg py-2 px-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-terra hover:bg-terra-dark disabled:opacity-60 text-white rounded-xl py-3 font-medium transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
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

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
