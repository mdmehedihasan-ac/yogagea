import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getDb } from "@/lib/db";

export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }

  try {
    const sql = getDb();
    const rows = await sql`
      SELECT cognome, nome, codice_fiscale, data_nascita, luogo_nascita,
             email, indirizzo, cap, comune_residenza
      FROM iscrizioni
      ORDER BY created_at DESC` as Record<string, unknown>[];

    const headers = [
      "COGNOME", "NOME", "C.F.", "DATA DI NASCITA", "LUOGO DI NASCITA",
      "INDIRIZZO MAIL", "VIA DI RESIDENZA", "CAP", "COMUNE DI RESIDENZA",
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
          r.cognome, r.nome, r.codice_fiscale, r.data_nascita, r.luogo_nascita,
          r.email, r.indirizzo, r.cap, r.comune_residenza,
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
