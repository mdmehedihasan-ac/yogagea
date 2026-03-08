"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Plus, Trash2, Save, Loader2, ChevronDown, ChevronUp,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────── */
interface Classe {
  orario: string;
  nome: string;
  insegnante: string;
  nota?: string;
}
interface Giorno {
  giorno: string;
  classi: Classe[];
}
interface Sede {
  id: string;
  label: string;
  indirizzo: string;
  giorni: Giorno[];
}

/* ─── Opzioni dropdown ──────────────────────────────────────── */
const ORARI_OPZIONI = [
  "07.00 - 07.45",
  "08.30 - 09.15",
  "09.30 - 10.15",
  "09.30 - 10.30",
  "10.30 - 11.30",
  "10.30 - 12.00",
  "12.30 - 13.15",
  "13.30 - 14.15",
  "13.30 - 14.20",
  "13.30 - 14.30",
  "17.00 - 18.00",
  "17.30 - 18.30",
  "18.00 - 19.00",
  "18.00 - 19.20",
  "18.15 - 19.15",
  "18.30 - 19.30",
  "18.35 - 19.35",
  "18.40 - 19.40",
  "19.30 - 20.20",
  "19.30 - 20.30",
  "19.40 - 20.40",
  "19.45 - 20.30",
];

const CORSI_OPZIONI = [
  "ASHTANGA",
  "HATHA FLOW",
  "HATHA YOGA",
  "KATONAH YOGA",
  "KUNDALINI YOGA",
  "YOGA RESET",
  "MEDITAZIONE",
  "MINDFULNESS",
  "PILATES",
  "PILATES pers",
  "QI GONG",
  "ROCKET YOGA insp.",
  "VINYASA KRAMA",
  "VIVEKA YOGA",
  "YOGA DINAMICO",
  "HATHA YOGA FLOW",
  "YOGA & PILATES",
  "YOGA RESET",
  "YOGA SCHIENA",
  "YIN YOGA",
  "YUTORI",
];

const INSEGNANTI_OPZIONI = [
  "Azzurra",
  "Barbara",
  "Fede",
  "Franci",
  "Grazia",
  "Lore",
  "Lorenza",
  "Marta",
  "Paola",
  "Roberto",
  "Robi",
  "Stefania",
  "Stefano",
  "Walt",
  // combinazioni comuni
  "Lore + Robi",
  "Stefano + Robi",
  "gruppo Paola",
];

const GIORNI_OPZIONI = [
  "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica",
];

/* ─── Dati di default ───────────────────────────────────────── */
const DEFAULT_SEDI: Sede[] = [
  {
    id: "molineria",
    label: "Molineria San Giovanni 13",
    indirizzo: "Molineria San Giovanni 13",
    giorni: [
      { giorno: "Lunedì", classi: [
        { orario: "13.30 - 14.15", nome: "PILATES pers", insegnante: "gruppo Paola" },
        { orario: "17.00 - 18.00", nome: "HATHA YOGA", insegnante: "Lore + Robi" },
        { orario: "18.30 - 19.30", nome: "ROCKET YOGA insp.", insegnante: "Azzurra" },
        { orario: "19.40 - 20.40", nome: "VINYASA KRAMA", insegnante: "Franci" },
      ]},
      { giorno: "Martedì", classi: [
        { orario: "09.30 - 10.30", nome: "QI GONG", insegnante: "Lorenza" },
        { orario: "12.30 - 13.15", nome: "PILATES", insegnante: "Paola" },
        { orario: "13.30 - 14.15", nome: "PILATES", insegnante: "Paola" },
        { orario: "17.30 - 18.30", nome: "HATHA FLOW", insegnante: "Marta" },
        { orario: "18.35 - 19.35", nome: "YIN YOGA", insegnante: "Franci" },
        { orario: "19.45 - 20.30", nome: "PILATES", insegnante: "Paola" },
      ]},
      { giorno: "Mercoledì", classi: [
        { orario: "07.00 - 07.45", nome: "PILATES", insegnante: "Paola" },
        { orario: "08.30 - 09.15", nome: "PILATES", insegnante: "Paola" },
        { orario: "17.00 - 18.00", nome: "YOGA SCHIENA", insegnante: "Robi" },
        { orario: "18.15 - 19.15", nome: "HATHA YOGA", insegnante: "Franci" },
        { orario: "19.30 - 20.30", nome: "VIVEKA YOGA", insegnante: "Stefano" },
        { orario: "19.30 - 20.30", nome: "HATHA YOGA FLOW", insegnante: "Barbara" },
      ]},
      { giorno: "Giovedì", classi: [
        { orario: "12.30 - 13.15", nome: "PILATES", insegnante: "Paola" },
        { orario: "13.30 - 14.20", nome: "PILATES", insegnante: "Paola" },
        { orario: "18.00 - 19.20", nome: "ASHTANGA", insegnante: "Walt" },
        { orario: "19.30 - 20.20", nome: "MEDITAZIONE", insegnante: "Stefano + Robi" },
      ]},
      { giorno: "Venerdì", classi: [
        { orario: "17.30 - 18.30", nome: "KATONAH YOGA", insegnante: "Fede" },
        { orario: "18.40 - 19.40", nome: "VINYASA KRAMA", insegnante: "Franci" },
      ]},
      { giorno: "Sabato", classi: [
        { orario: "09.30 - 10.15", nome: "MINDFULNESS", insegnante: "Roberto" },
        { orario: "10.30 - 12.00", nome: "KUNDALINI YOGA", insegnante: "Grazia", nota: "Secondo sabato del mese" },
        { orario: "10.30 - 11.30", nome: "HATHA YOGA", insegnante: "Stefania" },
      ]},
    ],
  },
  {
    id: "chiostri",
    label: "Via Chiostri del Duomo",
    indirizzo: "Via Chiostri del Duomo",
    giorni: [
      { giorno: "Lunedì", classi: [{ orario: "13.30 - 14.30", nome: "YOGA DINAMICO", insegnante: "Marta" }] },
      { giorno: "Mercoledì", classi: [{ orario: "13.30 - 14.20", nome: "PILATES", insegnante: "Paola" }] },
    ],
  },
  {
    id: "too",
    label: "TOO - Via 24 Maggio 51",
    indirizzo: "TOO - Via 24 Maggio 51",
    giorni: [
      { giorno: "Lunedì", classi: [
        { orario: "18.15 - 19.15", nome: "VINYASA KRAMA", insegnante: "Franci" },
        { orario: "19.30 - 20.30", nome: "YOGA RESET", insegnante: "Marta" },
      ]},
      { giorno: "Giovedì", classi: [{ orario: "18.30 - 19.30", nome: "VINYASA KRAMA", insegnante: "Franci" }] },
    ],
  },
];

/* ─── Componente Select con opzione libera ──────────────────── */
const selectCls =
  "border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:border-terra/60 bg-white w-full";

function ComboSelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  const isCustom = value !== "" && !options.includes(value);
  const [showCustom, setShowCustom] = useState(isCustom);

  return (
    <div className="flex flex-col gap-1">
      <select
        className={selectCls}
        value={showCustom ? "__custom__" : value}
        onChange={(e) => {
          if (e.target.value === "__custom__") {
            setShowCustom(true);
            onChange("");
          } else {
            setShowCustom(false);
            onChange(e.target.value);
          }
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
        <option value="__custom__">✏️ Valore personalizzato…</option>
      </select>
      {showCustom && (
        <input
          autoFocus
          className={selectCls}
          placeholder="Scrivi il valore…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => { if (!value) setShowCustom(false); }}
        />
      )}
    </div>
  );
}

/* ─── Row Classe ─────────────────────────────────────────────── */
function ClasseRow({
  classe,
  onChange,
  onDelete,
}: {
  classe: Classe;
  onChange: (c: Classe) => void;
  onDelete: () => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 bg-gray-50 rounded-xl p-3 group relative">
      {/* Orario */}
      <div>
        <label className="text-[10px] font-semibold text-charcoal-light uppercase tracking-wide mb-1 block">Orario</label>
        <ComboSelect
          value={classe.orario}
          onChange={(v) => onChange({ ...classe, orario: v })}
          options={ORARI_OPZIONI}
          placeholder="Seleziona…"
        />
      </div>
      {/* Corso */}
      <div>
        <label className="text-[10px] font-semibold text-charcoal-light uppercase tracking-wide mb-1 block">Corso</label>
        <ComboSelect
          value={classe.nome}
          onChange={(v) => onChange({ ...classe, nome: v })}
          options={CORSI_OPZIONI}
          placeholder="Seleziona…"
        />
      </div>
      {/* Insegnante */}
      <div>
        <label className="text-[10px] font-semibold text-charcoal-light uppercase tracking-wide mb-1 block">Insegnante</label>
        <ComboSelect
          value={classe.insegnante}
          onChange={(v) => onChange({ ...classe, insegnante: v })}
          options={INSEGNANTI_OPZIONI}
          placeholder="Seleziona…"
        />
      </div>
      {/* Nota */}
      <div>
        <label className="text-[10px] font-semibold text-charcoal-light uppercase tracking-wide mb-1 block">Nota <span className="font-normal">(opz.)</span></label>
        <div className="flex gap-1">
          <input
            className={selectCls}
            placeholder="es. Secondo sabato del mese"
            value={classe.nota || ""}
            onChange={(e) => onChange({ ...classe, nota: e.target.value || undefined })}
          />
          <button
            onClick={onDelete}
            className="shrink-0 text-red-400 hover:text-red-600 transition-colors px-1.5 rounded-lg hover:bg-red-50"
            title="Elimina classe"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Giorno editor ──────────────────────────────────────────── */
function GiornoEditor({
  giorno,
  onChange,
  onDelete,
}: {
  giorno: Giorno;
  onChange: (g: Giorno) => void;
  onDelete: () => void;
}) {
  const [open, setOpen] = useState(true);

  const updateClasse = (idx: number, c: Classe) => {
    const classi = [...giorno.classi];
    classi[idx] = c;
    onChange({ ...giorno, classi });
  };

  const deleteClasse = (idx: number) => {
    onChange({ ...giorno, classi: giorno.classi.filter((_, i) => i !== idx) });
  };

  const addClasse = () => {
    onChange({
      ...giorno,
      classi: [...giorno.classi, { orario: "", nome: "", insegnante: "" }],
    });
  };

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 font-semibold text-charcoal text-sm flex-1 text-left"
        >
          {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          <select
            className="bg-transparent font-semibold text-charcoal text-sm focus:outline-none"
            value={giorno.giorno}
            onChange={(e) => onChange({ ...giorno, giorno: e.target.value })}
            onClick={(e) => e.stopPropagation()}
          >
            {GIORNI_OPZIONI.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          <span className="text-xs text-charcoal-light font-normal">
            ({giorno.classi.length} {giorno.classi.length === 1 ? "classe" : "classi"})
          </span>
        </button>
        <div className="flex gap-2">
          <button
            onClick={addClasse}
            className="text-xs flex items-center gap-1 text-terra hover:text-terra-dark px-2 py-1 rounded-lg hover:bg-terra/5 transition-colors"
          >
            <Plus size={12} /> Aggiungi classe
          </button>
          <button
            onClick={onDelete}
            className="text-xs text-red-400 hover:text-red-600 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
          >
            Rimuovi
          </button>
        </div>
      </div>

      {open && (
        <div className="px-4 pb-4 pt-2 space-y-2 bg-white border-t border-gray-100">
          {giorno.classi.map((c, idx) => (
            <ClasseRow
              key={idx}
              classe={c}
              onChange={(updated) => updateClasse(idx, updated)}
              onDelete={() => deleteClasse(idx)}
            />
          ))}
          {giorno.classi.length === 0 && (
            <p className="text-sm text-charcoal-light text-center py-4">
              Nessuna classe — premi &ldquo;Aggiungi classe&rdquo; per iniziare.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Sede editor ────────────────────────────────────────────── */
function SedeEditor({
  sede,
  onChange,
  onDelete,
}: {
  sede: Sede;
  onChange: (s: Sede) => void;
  onDelete: () => void;
}) {
  const [open, setOpen] = useState(true);

  const updateGiorno = (idx: number, g: Giorno) => {
    const giorni = [...sede.giorni];
    giorni[idx] = g;
    onChange({ ...sede, giorni });
  };

  const deleteGiorno = (idx: number) => {
    onChange({ ...sede, giorni: sede.giorni.filter((_, i) => i !== idx) });
  };

  const addGiorno = () => {
    onChange({
      ...sede,
      giorni: [...sede.giorni, { giorno: "Lunedì", classi: [] }],
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 flex-1 text-left"
        >
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          <div className="flex-1 min-w-0">
            <input
              className="font-semibold text-charcoal text-base bg-transparent focus:outline-none border-b border-transparent focus:border-terra/50 w-full"
              value={sede.label}
              onChange={(e) => onChange({ ...sede, label: e.target.value })}
              onClick={(e) => e.stopPropagation()}
              placeholder="Nome sede"
            />
            <input
              className="text-xs text-charcoal-light bg-transparent focus:outline-none border-b border-transparent focus:border-terra/50 w-full mt-0.5"
              value={sede.indirizzo}
              onChange={(e) => onChange({ ...sede, indirizzo: e.target.value })}
              onClick={(e) => e.stopPropagation()}
              placeholder="Indirizzo sede"
            />
          </div>
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="ml-3 text-red-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
          title="Elimina sede"
        >
          <Trash2 size={16} />
        </button>
      </div>

      {open && (
        <div className="p-5 space-y-4">
          {sede.giorni.map((g, idx) => (
            <GiornoEditor
              key={idx}
              giorno={g}
              onChange={(updated) => updateGiorno(idx, updated)}
              onDelete={() => deleteGiorno(idx)}
            />
          ))}
          <button
            type="button"
            onClick={addGiorno}
            className="w-full border border-dashed border-gray-300 rounded-xl py-2.5 text-sm text-charcoal-light hover:border-terra/50 hover:text-terra transition-colors flex items-center justify-center gap-1"
          >
            <Plus size={14} /> Aggiungi giorno
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────────── */
export default function OrariAdminPage() {
  const [sedi, setSedi] = useState<Sede[]>(DEFAULT_SEDI);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/orari");
      const json = await res.json();
      if (json.data && Array.isArray(json.data)) setSedi(json.data);
    } catch {
      // usa dati di default
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const save = async () => {
    setSaving(true);
    try {
      await fetch("/api/orari", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: sedi }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  const updateSede = (idx: number, s: Sede) => {
    const updated = [...sedi];
    updated[idx] = s;
    setSedi(updated);
  };

  const deleteSede = (idx: number) => setSedi(sedi.filter((_, i) => i !== idx));

  const addSede = () => {
    setSedi([
      ...sedi,
      { id: `sede-${Date.now()}`, label: "Nuova Sede", indirizzo: "", giorni: [] },
    ]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-charcoal-light">
        <Loader2 size={24} className="animate-spin mr-2" /> Caricamento orari…
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-charcoal">Modifica Orari</h1>
          <p className="text-charcoal-light text-sm mt-1">
            Le modifiche vengono replicate sul sito appena salvi.
          </p>
        </div>
        <button
          onClick={save}
          disabled={saving}
          className="flex items-center gap-2 bg-terra text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-terra-dark disabled:opacity-60 transition-all"
        >
          {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
          {saved ? "Salvato ✓" : "Salva modifiche"}
        </button>
      </div>

      <div className="space-y-5">
        {sedi.map((sede, idx) => (
          <SedeEditor
            key={sede.id}
            sede={sede}
            onChange={(s) => updateSede(idx, s)}
            onDelete={() => deleteSede(idx)}
          />
        ))}

        <button
          type="button"
          onClick={addSede}
          className="w-full border border-dashed border-gray-300 rounded-2xl py-4 text-sm text-charcoal-light hover:border-terra/50 hover:text-terra transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={16} /> Aggiungi sede
        </button>
      </div>
    </div>
  );
}
