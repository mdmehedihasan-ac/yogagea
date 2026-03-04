import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getDb } from "@/lib/db";

// GET /api/iscrizioni  →  solo admin
export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }

  try {
    const sql = getDb();
    const rows = await sql`
      SELECT id, nome, cognome, codice_fiscale, data_nascita, telefono, email,
             corso_scelto, stato, created_at, note_admin
      FROM iscrizioni
      ORDER BY created_at DESC`;
    return NextResponse.json({ iscrizioni: rows });
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: "Errore database" }, { status: 500 });
  }
}

// POST /api/iscrizioni  →  pubblico (form iscrizione)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const sql = getDb();
    await sql`
      INSERT INTO iscrizioni
        (nome, cognome, codice_fiscale, data_nascita, luogo_nascita,
         comune_residenza, provincia, cap, indirizzo, telefono, email,
         corso_scelto, is_maggiorenne,
         tutore_nome, tutore_cognome, tutore_cf, tutore_telefono, tutore_email,
         accetta_statuto, accetta_asi, autorizza_foto, dichiara_safeguarding, accetta_privacy)
      VALUES (
        ${body.nome}, ${body.cognome}, ${body.codiceFiscale?.toUpperCase() || null},
        ${body.dataNascita || null}, ${body.luogoNascita || null},
        ${body.comuneResidenza || null}, ${body.provinciaResidenza?.toUpperCase() || null},
        ${body.capResidenza || null}, ${body.indirizzoResidenza || null},
        ${body.telefono}, ${body.email}, ${body.corsoScelto || "Non specificato"},
        ${!!body.isMaggiorenne},
        ${body.tutoreNome || null}, ${body.tutoreCognome || null},
        ${body.tutoreCodiceFiscale?.toUpperCase() || null},
        ${body.tutoreTelefono || null}, ${body.tutoreEmail || null},
        ${!!body.accettaStatuto}, ${!!body.accettaASI},
        ${!!body.autorizzaFotoVideo}, ${!!body.dichiaraSafeguarding},
        ${!!body.accettaPrivacy}
      )`;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: "Errore durante il salvataggio" }, { status: 500 });
  }
}
