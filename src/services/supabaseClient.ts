import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// Public anon credentials (safe for client-side browser usage)
const DEFAULT_SUPABASE_URL = 'https://oyzqwygwpqgaqecchrx.supabase.co';

const DEFAULT_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95enF3eWd3cHFnYXFlY2NocngiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc4NzY1NzQyOSwiZXhwIjoyMTAzMjMzNDI5fQ.gVJhrAjK3BFVIeWZsZQnz_1dzkVwxb6Jm4o3-eorbrM';

const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface LivePassStatusRecord {
  id?: string;
  pass_slug: string;
  status: 'OPEN' | 'CLOSED' | 'RESTRICTED' | 'CAUTION' | 'TEMPORARILY_CLOSED' | 'SEASONAL_CLOSURE';
  road_condition?: string | null;
  weather_condition?: string | null;
  temperature_f?: number | null;
  travel_advisory?: boolean;
  restriction_eastbound?: string | null;
  restriction_westbound?: string | null;
  source?: string;
  source_confidence?: string;
  official_updated_at?: string | null;
  scraped_at?: string;
}

/**
 * Fetch the latest status for all passes from Supabase.
 * Returns a map of pass_slug -> LivePassStatusRecord.
 */
export async function fetchLatestPassStatuses(): Promise<Map<string, LivePassStatusRecord>> {
  const statusMap = new Map<string, LivePassStatusRecord>();

  if (!supabase) {
    return statusMap;
  }

  try {
    // 1. Try querying latest_pass_status view first
    let { data, error } = await supabase
      .from('latest_pass_status')
      .select('*');

    // 2. If the view is unavailable or empty, query pass_status table directly ordered by scraped_at
    if (error || !data || data.length === 0) {
      const response = await supabase
        .from('pass_status')
        .select('*')
        .order('scraped_at', { ascending: false })
        .limit(100);

      data = response.data;
      error = response.error;
    }

    if (error) {
      console.warn('Supabase query warning:', error.message);
      return statusMap;
    }

    if (data && Array.isArray(data)) {
      data.forEach((row: any) => {
        if (row.pass_slug && !statusMap.has(row.pass_slug)) {
          // Normalize status
          let status = (row.status || 'OPEN').toUpperCase();
          if (status === 'MONITORED') status = 'OPEN';

          statusMap.set(row.pass_slug, {
            id: row.id,
            pass_slug: row.pass_slug,
            status: status as any,
            road_condition: row.road_condition,
            weather_condition: row.weather_condition,
            temperature_f: row.temperature_f,
            travel_advisory: row.travel_advisory,
            restriction_eastbound: row.restriction_eastbound,
            restriction_westbound: row.restriction_westbound,
            source: row.source,
            source_confidence: row.source_confidence,
            official_updated_at: row.official_updated_at,
            scraped_at: row.scraped_at
          });
        }
      });
    }
  } catch (err) {
    console.error('Failed to fetch pass statuses from Supabase:', err);
  }

  return statusMap;
}
