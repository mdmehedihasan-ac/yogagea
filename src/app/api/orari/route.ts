import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getDb } from "@/lib/db";

// GET /api/orari  →  pubblico, restituisce gli orari (dal DB se presenti, altrimenti i dati di default)
export async function GET() {
  try {
    const db = getDb();
    const [rows] = await db.query(
      `SELECT data FROM orari ORDER BY id DESC LIMIT 1`
    ) as [Array<{ data: unknown }>, unknown];

    if (rows.length > 0) {
      return NextResponse.json({ data: rows[0].data });
    }
    // Se il DB è vuoto, il client usa i dati statici
    return NextResponse.json({ data: null });
  } catch (err) {
    console.error("DB error GET orari:", err);
    return NextResponse.json({ data: null });
  }
}

// POST /api/orari  →  solo admin, salva nuovi orari
export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const db = getDb();

    // Upsert: rimuovi tutte le versioni precedenti e inserisci la nuova
    await db.query(`DELETE FROM orari`);
    await db.query(
      `INSERT INTO orari (data, updated_by) VALUES (?, ?)`,
      [JSON.stringify(body.data), "admin"]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DB error POST orari:", err);
    return NextResponse.json({ error: "Errore salvataggio" }, { status: 500 });
  }
}
