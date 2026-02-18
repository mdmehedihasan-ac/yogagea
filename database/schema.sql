-- ================================================================
-- Schema MySQL per YogaGea
-- Esegui questo file nel tuo database MySQL prima di avviare il sito
-- ================================================================

CREATE DATABASE IF NOT EXISTS yogagea CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE yogagea;

-- ─── Tabella iscrizioni ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS iscrizioni (
  id               INT AUTO_INCREMENT PRIMARY KEY,
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
  is_maggiorenne   TINYINT(1) DEFAULT 1,
  tutore_nome      VARCHAR(100),
  tutore_cognome   VARCHAR(100),
  tutore_cf        VARCHAR(16),
  tutore_telefono  VARCHAR(30),
  tutore_email     VARCHAR(150),
  accetta_statuto  TINYINT(1) DEFAULT 0,
  accetta_asi      TINYINT(1) DEFAULT 0,
  autorizza_foto   TINYINT(1) DEFAULT 0,
  dichiara_safeguarding TINYINT(1) DEFAULT 0,
  accetta_privacy  TINYINT(1) DEFAULT 0,
  stato            ENUM('nuova','in_revisione','confermata','rifiutata') DEFAULT 'nuova',
  note_admin       TEXT,
  created_at       DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at       DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ─── Tabella orari ──────────────────────────────────────────────
-- Salva gli orari come JSON per flessibilità massima
CREATE TABLE IF NOT EXISTS orari (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  data       JSON NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  updated_by VARCHAR(100)
) ENGINE=InnoDB;
