export default async function handler(req, res) {
  // CORS — open to all (safe if you don't use cookies/credentials)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();

  // Generate code
  const rand = () => Math.random().toString(36).substring(2, 8).toUpperCase();
  const code = `BICA15-${rand()}`;
  const now = new Date();
  const expires = new Date(now.getTime() + 14*24*60*60*1000);

  res.status(200).json({ code, expiresAt: expires.toISOString() });
}
