-- ================================================================
-- Schema PostgreSQL per YogaGea (Neon)
-- Esegui questo SQL nella console del tuo database Neon
-- ================================================================

-- ─── Tabella iscrizioni ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS iscrizioni (
  id               SERIAL PRIMARY KEY,
  nome             VARCHAR(100) NOT NULL,
  cognome          VARCHAR(100) NOT NULL,
  codice_fiscale   VARCHAR(16)  NOT NULL,
  data_nascita     DATE,
  luogo_nascita    VARCHAR(100),
  comune_residenza VARCHAR(100),
  provincia        VARCHAR(2),
  cap              VARCHAR(5),
  indirizzo        VARCHAR(200),
  telefono         VARCHAR(30)  NOT NULL,
  email            VARCHAR(150) NOT NULL,
  corso_scelto     VARCHAR(100) NOT NULL,
  is_maggiorenne   BOOLEAN DEFAULT TRUE,
  tutore_nome      VARCHAR(100),
  tutore_cognome   VARCHAR(100),
  tutore_cf        VARCHAR(16),
  tutore_telefono  VARCHAR(30),
  tutore_email     VARCHAR(150),
  accetta_statuto  BOOLEAN DEFAULT FALSE,
  accetta_asi      BOOLEAN DEFAULT FALSE,
  autorizza_foto   BOOLEAN DEFAULT FALSE,
  dichiara_safeguarding BOOLEAN DEFAULT FALSE,
  accetta_privacy  BOOLEAN DEFAULT FALSE,
  stato            VARCHAR(20) DEFAULT 'nuova',
  note_admin       TEXT,
  created_at       TIMESTAMPTZ DEFAULT NOW(),
  updated_at       TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Tabella orari ──────────────────────────────────────────────
-- Salva gli orari come JSONB per flessibilità massima
CREATE TABLE IF NOT EXISTS orari (
  id         SERIAL PRIMARY KEY,
  data       JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  updated_by VARCHAR(100)
);
