import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getDb } from "@/lib/db";

// GET /api/orari  →  pubblico, restituisce gli orari (dal DB se presenti, altrimenti i dati di default)
export async function GET() {
  try {
    const sql = getDb();
    const rows = await sql`SELECT data FROM orari ORDER BY id DESC LIMIT 1`;

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
    const sql = getDb();
    const jsonData = JSON.stringify(body.data);

    // Upsert: rimuovi tutte le versioni precedenti e inserisci la nuova
    await sql`DELETE FROM orari`;
    await sql`INSERT INTO orari (data, updated_by) VALUES (${jsonData}::jsonb, ${'admin'})`;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DB error POST orari:", err);
    return NextResponse.json({ error: "Errore salvataggio" }, { status: 500 });
  }
}
