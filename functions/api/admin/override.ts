interface Env {
  DB: D1Database;
  ADMIN_SECRET?: string;
}

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
    const body: any = await context.request.json();
    const { passId, operator, newStatus, reason } = body;

    if (!passId || !operator || !newStatus || !reason) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required parameters (passId, operator, newStatus, reason).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 1. Fetch old status
    const pass = await db
      .prepare('SELECT status, pass_name, last_status_change_at FROM passes WHERE id = ?')
      .bind(passId)
      .first<any>();

    if (!pass) {
      return new Response(
        JSON.stringify({ success: false, error: `Pass with ID "${passId}" not found.` }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const oldStatus = pass.status;
    const timestamp = new Date().toISOString();
    const statusChanged = oldStatus !== newStatus;
    const lastStatusChangeAt = statusChanged ? timestamp : pass.last_status_change_at;

    // 2. Update pass table
    const formattedReason = `Manual override by ${operator}: ${reason}`;
    await db
      .prepare(
        `UPDATE passes SET
          status = ?,
          status_reason = ?,
          verification_status = 'VERIFIED',
          confidence = 'HIGH',
          last_checked_at = ?,
          last_status_change_at = ?
        WHERE id = ?`
      )
      .bind(
        newStatus,
        formattedReason,
        timestamp,
        lastStatusChangeAt,
        passId
      )
      .run();

    // 3. Log into manual overrides table
    await db
      .prepare(
        `INSERT INTO manual_overrides (
          pass_id, operator, old_status, new_status, reason, timestamp
        ) VALUES (?, ?, ?, ?, ?, ?)`
      )
      .bind(passId, operator, oldStatus, newStatus, reason, timestamp)
      .run();

    // 4. If status changed, log to history
    if (statusChanged) {
      await db
        .prepare(
          `INSERT INTO status_history (
            pass_id, timestamp, status, reason, source, source_url
          ) VALUES (?, ?, ?, ?, ?, ?)`
        )
        .bind(
          passId,
          timestamp,
          newStatus,
          formattedReason,
          `Manual Override (${operator})`,
          '/admin'
        )
        .run();
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Status of ${pass.pass_name} successfully overridden to ${newStatus}.`
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
      JSON.stringify({ success: false, error: error.message || 'Failed to apply manual override' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
