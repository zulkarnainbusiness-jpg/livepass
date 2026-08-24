interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const db = context.env.DB;
  const slug = context.params.slug;

  if (!db) {
    return new Response(
      JSON.stringify({ success: false, error: 'Database binding DB not found.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (!slug || Array.isArray(slug)) {
    return new Response(
      JSON.stringify({ success: false, error: 'Slug parameter is invalid or missing.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Fetch pass matching ID or ID with -pass suffix
    const pass = await db
      .prepare('SELECT * FROM passes WHERE id = ? OR id = ?')
      .bind(slug, `${slug}-pass`)
      .first();

    if (!pass) {
      return new Response(
        JSON.stringify({ success: false, error: `Pass with slug "${slug}" not found.` }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Fetch history
    const { results: history } = await db
      .prepare('SELECT * FROM status_history WHERE pass_id = ? ORDER BY timestamp DESC LIMIT 30')
      .bind(pass.id)
      .all();

    return new Response(
      JSON.stringify({
        success: true,
        pass,
        history: history || []
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
      JSON.stringify({ success: false, error: error.message || 'Failed to fetch pass detail' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
