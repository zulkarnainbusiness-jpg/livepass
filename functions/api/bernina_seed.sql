INSERT OR REPLACE INTO passes (
  id,
  pass_name,
  country,
  state_or_region,
  latitude,
  longitude,
  official_authority,
  official_source_url,
  status,
  status_reason,
  restrictions,
  last_checked_at,
  last_status_change_at,
  source_published_at,
  source_evidence,
  source_url,
  verification_status,
  confidence,
  next_check_at
) VALUES (
  'bernina-pass',
  'Bernina Pass (Passo del Bernina)',
  'Switzerland',
  'Graubünden',
  46.4108,
  10.0267,
  'Tiefbauamt des Kantons Graubünden & Swiss TCS',
  'https://strassen.gr.ch/',
  'OPEN',
  'Pass road (Hauptstrasse 29) is OPEN to all vehicular and bicycle traffic between Pontresina and Poschiavo. Normal high-alpine summer driving conditions.',
  'None',
  '2026-08-24T10:00:00.000Z',
  '2026-08-24T10:00:00.000Z',
  '2026-08-24T10:00:00.000Z',
  'Strassenbericht Graubünden: H29 Berninapass offen / befahrbar',
  'https://strassen.gr.ch/',
  'VERIFIED',
  'HIGH',
  '2026-08-24T16:00:00.000Z'
);

INSERT INTO status_history (pass_id, timestamp, status, reason, source, source_url)
VALUES (
  'bernina-pass',
  '2026-08-24T10:00:00.000Z',
  'OPEN',
  'Pass road (Hauptstrasse 29) open and clear across 2,328m summit',
  'Tiefbauamt Graubünden',
  'https://strassen.gr.ch/'
);
