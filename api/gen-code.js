// api/gen-code.js
export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', 'https://YOUR_WORDPRESS_DOMAIN'); // or '*'
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  // generate code
  const rand = () => Math.random().toString(36).substring(2, 8).toUpperCase();
  const code = `BICA15-${rand()}`;
  const now = new Date();
  const expires = new Date(now.getTime() + 14*24*60*60*1000);

  // optional: read contact from body
  let contact = '';
  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    contact = data.contact || '';
  } catch {}

  // TODO: log to Sheet/Airtable if you want (see step 4)

  res.status(200).json({ code, expiresAt: expires.toISOString(), contact });
}
