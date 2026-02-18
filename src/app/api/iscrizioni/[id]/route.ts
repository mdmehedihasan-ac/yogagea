import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getDb } from "@/lib/db";

// PATCH /api/iscrizioni/[id]  →  aggiorna stato/note iscrizione
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  try {
    const db = getDb();
    await db.query(
      `UPDATE iscrizioni SET stato = ?, note_admin = ? WHERE id = ?`,
      [body.stato, body.noteAdmin || null, id]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: "Errore database" }, { status: 500 });
  }
}

// DELETE /api/iscrizioni/[id]  →  elimina iscrizione
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const db = getDb();
    await db.query(`DELETE FROM iscrizioni WHERE id = ?`, [id]);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: "Errore database" }, { status: 500 });
  }
}
