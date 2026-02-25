import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getDb } from "@/lib/db";

export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }

  try {
    const db = getDb();
    const [rows] = await db.query(
            `SELECT id, nome, cognome, codice_fiscale, data_nascita, luogo_nascita,
              comune_residenza, provincia, cap, indirizzo, telefono, email,
              is_maggiorenne,
              tutore_nome, tutore_cognome, tutore_cf, tutore_telefono, tutore_email,
              accetta_statuto, accetta_asi, autorizza_foto, dichiara_safeguarding, accetta_privacy,
              stato, note_admin, created_at
       FROM iscrizioni
       ORDER BY created_at DESC`
    ) as [Record<string, unknown>[], unknown];

    const headers = [
      "ID", "Nome", "Cognome", "Codice Fiscale", "Data Nascita", "Luogo Nascita",
      "Comune Residenza", "Provincia", "CAP", "Indirizzo", "Telefono", "Email",
      "Maggiorenne",
      "Tutore Nome", "Tutore Cognome", "Tutore CF", "Tutore Telefono", "Tutore Email",
      "Accetta Statuto", "Accetta ASI", "Autorizza Foto/Video", "Safeguarding", "Accetta Privacy",
      "Stato", "Note Admin", "Data Iscrizione",
    ];

    const escCsv = (val: unknown): string => {
      if (val === null || val === undefined) return "";
      const s = String(val);
      if (s.includes(",") || s.includes('"') || s.includes("\n")) {
        return `"${s.replace(/"/g, '""')}"`;
      }
      return s;
    };

    const csvRows = [
      headers.join(","),
      ...(rows as Record<string, unknown>[]).map((r) =>
        [
          r.id, r.nome, r.cognome, r.codice_fiscale, r.data_nascita, r.luogo_nascita,
          r.comune_residenza, r.provincia, r.cap, r.indirizzo, r.telefono, r.email,
          r.is_maggiorenne ? "Sì" : "No",
          r.tutore_nome, r.tutore_cognome, r.tutore_cf, r.tutore_telefono, r.tutore_email,
          r.accetta_statuto ? "Sì" : "No",
          r.accetta_asi ? "Sì" : "No",
          r.autorizza_foto ? "Sì" : "No",
          r.dichiara_safeguarding ? "Sì" : "No",
          r.accetta_privacy ? "Sì" : "No",
          r.stato, r.note_admin, r.created_at,
        ]
          .map(escCsv)
          .join(",")
      ),
    ];

    const csv = "\uFEFF" + csvRows.join("\n"); // BOM per Excel

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="iscrizioni_yogagea_${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch (err) {
    console.error("Export error:", err);
    return NextResponse.json({ error: "Errore export" }, { status: 500 });
  }
}
