import { verifyPass, PassRow } from '../services/verifier';

interface Env {
  DB: D1Database;
  WSDOT_API_ACCESS_CODE?: string;
  GEMINI_API_KEY?: string;
  AI?: any;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const db = context.env.DB;
  if (!db) {
    return new Response(
      JSON.stringify({ success: false, error: 'Database binding DB not found.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const url = new URL(context.request.url);
  const force = url.searchParams.get('force') === 'true';

  try {
    const now = new Date().toISOString();
    let query = 'SELECT * FROM passes';
    const bindings: any[] = [];

    if (!force) {
      query += ' WHERE next_check_at <= ? OR next_check_at IS NULL';
      bindings.push(now);
    }

    const { results } = await db.prepare(query).bind(...bindings).all<PassRow>();
    const passesToVerify = results || [];

    const stats = {
      totalFound: passesToVerify.length,
      verifiedCount: 0,
      changedCount: 0,
      failedCount: 0,
      details: [] as any[]
    };

    for (const pass of passesToVerify) {
      try {
        const result = await verifyPass(db, pass, context.env);
        if (result.success) {
          stats.verifiedCount++;
        } else {
          stats.failedCount++;
        }
        if (result.statusChanged) {
          stats.changedCount++;
        }
        stats.details.push({
          id: pass.id,
          name: pass.pass_name,
          success: result.success,
          statusChanged: result.statusChanged,
          newStatus: result.newStatus
        });
      } catch (err: any) {
        stats.failedCount++;
        stats.details.push({
          id: pass.id,
          name: pass.pass_name,
          success: false,
          error: err.message || err
        });
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Processed ${passesToVerify.length} passes.`,
        stats
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
      JSON.stringify({ success: false, error: error.message || 'Verification job failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const onRequestPost = onRequestGet;
