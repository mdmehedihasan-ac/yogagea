"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

    if (!result || result.error) {
      setError("Username o password non corretti.");
      setLoading(false);
    } else {
      window.location.href = "/admin";
    }
  };

  return (
    <main className="min-h-screen bg-[#2d2d2d] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="relative h-16 w-16 mb-4">
            <Image src="/loto.png" alt="YogaGea" width={64} height={64} className="object-contain" />
          </div>
          <h1 className="font-heading text-2xl text-white tracking-wide">YOGAGEA</h1>
          <p className="text-[#999] text-xs tracking-widest uppercase mt-1">Area Amministratori</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
          <div>
            <label className="block text-sm text-[#999] mb-1.5">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-violet-400/70 transition-colors text-sm"
              placeholder="admin"
            />
          </div>

          <div>
            <label className="block text-sm text-[#999] mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-violet-400/70 transition-colors text-sm"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center bg-red-400/10 rounded-lg py-2 px-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-violet-600 hover:bg-violet-700 disabled:opacity-60 text-white rounded-xl py-3 font-medium transition-all flex items-center justify-center gap-2"
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
