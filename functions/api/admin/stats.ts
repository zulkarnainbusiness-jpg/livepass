interface Env {
  DB: D1Database;
  ADMIN_SECRET?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
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
    // 1. Fetch all passes to calculate stats
    const { results: passList } = await db
      .prepare('SELECT id, pass_name, status, verification_status, last_checked_at, official_source_url, official_authority, confidence FROM passes')
      .all();
    const list = passList || [];

    const stats = {
      total: list.length,
      open: list.filter((p: any) => p.status === 'OPEN').length,
      closed: list.filter((p: any) => p.status === 'CLOSED').length,
      restricted: list.filter((p: any) => p.status === 'RESTRICTED').length,
      seasonalClosure: list.filter((p: any) => p.status === 'SEASONAL_CLOSURE').length,
      temporarilyClosed: list.filter((p: any) => p.status === 'TEMPORARILY_CLOSED').length,
      unknown: list.filter((p: any) => p.status === 'UNKNOWN').length,
      needsVerification: list.filter((p: any) => p.status === 'NEEDS_VERIFICATION' || p.verification_status === 'NEEDS_VERIFICATION').length,
      failedChecks: list.filter((p: any) => p.verification_status === 'FAILED_CHECK').length,
      conflictingSources: list.filter((p: any) => p.verification_status === 'CONFLICTING_SOURCES').length,
      notCheckedRecently: list.filter((p: any) => {
        if (!p.last_checked_at) return true;
        const lastChecked = new Date(p.last_checked_at).getTime();
        return Date.now() - lastChecked > 24 * 60 * 60 * 1000;
      }).length
    };

    // 2. Recent status changes history
    const { results: recentHistory } = await db
      .prepare('SELECT * FROM status_history ORDER BY timestamp DESC LIMIT 15')
      .all();

    // 3. Recent manual overrides
    const { results: recentOverrides } = await db
      .prepare('SELECT * FROM manual_overrides ORDER BY timestamp DESC LIMIT 15')
      .all();

    return new Response(
      JSON.stringify({
        success: true,
        stats,
        passes: list,
        history: recentHistory || [],
        overrides: recentOverrides || []
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
      JSON.stringify({ success: false, error: error.message || 'Failed to fetch dashboard stats' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
