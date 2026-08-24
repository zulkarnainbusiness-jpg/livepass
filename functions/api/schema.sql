-- D1 Database Schema for LivePassWatch

-- Passes table
CREATE TABLE IF NOT EXISTS passes (
  id TEXT PRIMARY KEY, -- slug-safe ID (e.g. 'snoqualmie-pass')
  pass_name TEXT NOT NULL,
  country TEXT NOT NULL,
  state_or_region TEXT NOT NULL,
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  official_authority TEXT NOT NULL,
  official_source_url TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('OPEN', 'CLOSED', 'RESTRICTED', 'SEASONAL_CLOSURE', 'TEMPORARILY_CLOSED', 'UNKNOWN', 'NEEDS_VERIFICATION')),
  status_reason TEXT,
  restrictions TEXT,
  last_checked_at TEXT,
  last_status_change_at TEXT,
  source_published_at TEXT,
  source_evidence TEXT,
  source_url TEXT,
  verification_status TEXT NOT NULL DEFAULT 'NEEDS_VERIFICATION',
  confidence TEXT NOT NULL DEFAULT 'LOW',
  next_check_at TEXT
);

-- Status history table
CREATE TABLE IF NOT EXISTS status_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  pass_id TEXT NOT NULL,
  timestamp TEXT NOT NULL,
  status TEXT NOT NULL,
  reason TEXT,
  source TEXT,
  source_url TEXT,
  FOREIGN KEY(pass_id) REFERENCES passes(id)
);

-- Manual overrides logs table
CREATE TABLE IF NOT EXISTS manual_overrides (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  pass_id TEXT NOT NULL,
  operator TEXT NOT NULL,
  old_status TEXT NOT NULL,
  new_status TEXT NOT NULL,
  reason TEXT NOT NULL,
  timestamp TEXT NOT NULL,
  FOREIGN KEY(pass_id) REFERENCES passes(id)
);
