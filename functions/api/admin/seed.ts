interface Env {
  DB: D1Database;
  ADMIN_SECRET?: string;
}

interface SeedPass {
  id: string;
  name: string;
  country: string;
  state: string;
  lat: number;
  lng: number;
  official_authority: string;
  official_source_url: string;
}

const TEST_PASSES: SeedPass[] = [
  {
    id: 'snoqualmie-pass',
    name: 'Snoqualmie Pass',
    country: 'United States',
    state: 'Washington',
    lat: 47.4243,
    lng: -121.4137,
    official_authority: 'WSDOT',
    official_source_url: 'https://wsdot.wa.gov/travel/real-time/mountainpasses'
  },
  {
    id: 'stevens-pass',
    name: 'Stevens Pass',
    country: 'United States',
    state: 'Washington',
    lat: 47.7461,
    lng: -121.0858,
    official_authority: 'WSDOT',
    official_source_url: 'https://wsdot.wa.gov/travel/real-time/mountainpasses'
  },
  {
    id: 'blewett-pass',
    name: 'Blewett Pass',
    country: 'United States',
    state: 'Washington',
    lat: 47.3358,
    lng: -120.5786,
    official_authority: 'WSDOT',
    official_source_url: 'https://wsdot.wa.gov/travel/real-time/mountainpasses'
  },
  {
    id: 'loup-loup-pass',
    name: 'Loup Loup Pass',
    country: 'United States',
    state: 'Washington',
    lat: 48.3792,
    lng: -119.9142,
    official_authority: 'WSDOT',
    official_source_url: 'https://wsdot.wa.gov/travel/real-time/mountainpasses'
  },
  {
    id: 'status-pass',
    name: 'Status Pass',
    country: 'United States',
    state: 'Washington',
    lat: 45.9847,
    lng: -120.6536,
    official_authority: 'WSDOT',
    official_source_url: 'https://wsdot.wa.gov/travel/real-time/mountainpasses'
  }
];

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const secret = url.searchParams.get('secret') || context.request.headers.get('Authorization')?.replace('Bearer ', '');
  const adminSecret = context.env.ADMIN_SECRET || 'admin123';

  if (secret !== adminSecret) {
    return new Response(
      JSON.stringify({ success: false, error: 'Unauthorized' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const db = context.env.DB;
  if (!db) {
    return new Response(
      JSON.stringify({ success: false, error: 'Database binding DB not found.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const insertedIds: string[] = [];
    const timestamp = new Date().toISOString();

    for (const p of TEST_PASSES) {
      // Check if pass already exists
      const existing = await db
        .prepare('SELECT id FROM passes WHERE id = ?')
        .bind(p.id)
        .first();

      if (!existing) {
        await db
          .prepare(
            `INSERT INTO passes (
              id, pass_name, country, state_or_region, latitude, longitude,
              official_authority, official_source_url, status, status_reason,
              restrictions, last_checked_at, last_status_change_at, verification_status,
              confidence, next_check_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'UNKNOWN', 'Not checked yet', 'None', ?, ?, 'NEEDS_VERIFICATION', 'LOW', ?)`
          )
          .bind(
            p.id,
            p.name,
            p.country,
            p.state,
            p.lat,
            p.lng,
            p.official_authority,
            p.official_source_url,
            timestamp,
            timestamp,
            timestamp
          )
          .run();
        
        insertedIds.push(p.id);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Database seeded successfully. Inserted: ${insertedIds.join(', ')}`,
        seededCount: insertedIds.length
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Seeding failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// Also support GET request for easy browser/manual execution if auth token is in query
export const onRequestGet = onRequestPost;
