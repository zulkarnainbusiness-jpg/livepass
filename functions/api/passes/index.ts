interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const db = context.env.DB;
  if (!db) {
    return new Response(
      JSON.stringify({ success: false, error: 'Database binding DB not found.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { results } = await db.prepare('SELECT * FROM passes').all();
    return new Response(
      JSON.stringify({ success: true, passes: results }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Failed to fetch passes' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
