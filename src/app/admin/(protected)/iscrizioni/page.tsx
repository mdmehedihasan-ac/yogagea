"use client";

import { useEffect, useState, useCallback } from "react";
import { Search, Loader2, Trash2, ChevronDown, ChevronUp, Mail, Phone, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface Iscrizione {
  id: number;
  nome: string;
  cognome: string;
  codice_fiscale: string;
  data_nascita: string;
  telefono: string;
  email: string;
  stato: "nuova" | "in_revisione" | "confermata" | "rifiutata";
  created_at: string;
  note_admin: string | null;
}

const statoBadge: Record<string, { label: string; cls: string }> = {
  nuova:        { label: "Nuova",        cls: "bg-blue-100 text-blue-700" },
  in_revisione: { label: "In revisione", cls: "bg-yellow-100 text-yellow-700" },
  confermata:   { label: "Confermata",   cls: "bg-green-100 text-green-700" },
  rifiutata:    { label: "Rifiutata",    cls: "bg-red-100 text-red-700" },
};

export default function IscrizioniAdminPage() {
  const [iscrizioni, setIscrizioni] = useState<Iscrizione[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [saving, setSaving] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/iscrizioni");
      const json = await res.json();
      setIscrizioni(json.iscrizioni || []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const updateIscrizione = async (id: number, stato: string, noteAdmin: string) => {
    setSaving(id);
    await fetch(`/api/iscrizioni/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stato, noteAdmin }),
    });
    await load();
    setSaving(null);
  };

  const deleteIscrizione = async (id: number) => {
    if (!confirm("Eliminare questa iscrizione? L'azione non è reversibile.")) return;
    await fetch(`/api/iscrizioni/${id}`, { method: "DELETE" });
    setIscrizioni((prev) => prev.filter((i) => i.id !== id));
  };

  const filtered = iscrizioni.filter((i) => {
    const q = search.toLowerCase();
    return (
      i.nome.toLowerCase().includes(q) ||
      i.cognome.toLowerCase().includes(q) ||
      i.email.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-charcoal">Iscrizioni</h1>
          <p className="text-charcoal-light text-sm mt-1">
            {iscrizioni.length} iscrizioni totali
          </p>
        </div>
        <a
          href="/api/iscrizioni/export"
          className="flex items-center gap-2 bg-charcoal text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-charcoal-light transition-all"
        >
          <Download size={15} /> Esporta CSV
        </a>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light" />
        <input
          type="text"
          placeholder="Cerca per nome o email…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-terra/50"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-charcoal-light">
          <Loader2 size={24} className="animate-spin mr-2" /> Caricamento…
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-charcoal-light">
          {search ? "Nessun risultato per questa ricerca." : "Nessuna iscrizione ricevuta."}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((i) => (
            <IscrizioneRow
              key={i.id}
              iscrizione={i}
              expanded={expanded === i.id}
              onToggle={() => setExpanded(expanded === i.id ? null : i.id)}
              onUpdate={updateIscrizione}
              onDelete={deleteIscrizione}
              saving={saving === i.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function IscrizioneRow({
  iscrizione: i,
  expanded,
  onToggle,
  onUpdate,
  onDelete,
  saving,
}: {
  iscrizione: Iscrizione;
  expanded: boolean;
  onToggle: () => void;
  onUpdate: (id: number, stato: string, note: string) => void;
  onDelete: (id: number) => void;
  saving: boolean;
}) {
  const [stato, setStato] = useState(i.stato);
  const [note, setNote] = useState(i.note_admin || "");
  const badge = statoBadge[stato] || statoBadge.nuova;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="min-w-0">
            <p className="font-medium text-charcoal text-sm">
              {i.nome} {i.cognome}
            </p>
          </div>
          <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium shrink-0", badge.cls)}>
            {badge.label}
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0 ml-4">
          <span className="text-xs text-charcoal-light hidden sm:block">
            {new Date(i.created_at).toLocaleDateString("it-IT")}
          </span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info */}
          <div className="space-y-2 text-sm">
            <p className="text-charcoal-light">
              <span className="font-medium text-charcoal">C.F.:</span> {i.codice_fiscale}
            </p>
            <p className="text-charcoal-light">
              <span className="font-medium text-charcoal">Data nascita:</span>{" "}
              {i.data_nascita ? new Date(i.data_nascita).toLocaleDateString("it-IT") : "—"}
            </p>
            <a
              href={`tel:${i.telefono}`}
              className="flex items-center gap-1.5 text-terra hover:underline"
            >
              <Phone size={13} /> {i.telefono}
            </a>
            <a
              href={`mailto:${i.email}`}
              className="flex items-center gap-1.5 text-terra hover:underline truncate"
            >
              <Mail size={13} /> {i.email}
            </a>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-charcoal-light uppercase tracking-wide mb-1 block">
                Stato
              </label>
              <select
                value={stato}
                onChange={(e) => setStato(e.target.value as Iscrizione["stato"])}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-terra/50"
              >
                <option value="nuova">Nuova</option>
                <option value="in_revisione">In revisione</option>
                <option value="confermata">Confermata</option>
                <option value="rifiutata">Rifiutata</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-charcoal-light uppercase tracking-wide mb-1 block">
                Note admin
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-terra/50 resize-none"
                placeholder="Note interne…"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onUpdate(i.id, stato, note)}
                disabled={saving}
                className="flex-1 bg-terra text-white rounded-xl py-2 text-sm font-medium hover:bg-terra-dark disabled:opacity-60 transition-colors flex items-center justify-center gap-1"
              >
                {saving ? <Loader2 size={14} className="animate-spin" /> : null}
                Salva
              </button>
              <button
                onClick={() => onDelete(i.id)}
                className="px-3 py-2 border border-red-200 text-red-500 rounded-xl hover:bg-red-50 transition-colors"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
