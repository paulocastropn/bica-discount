export default async function handler(req, res) {
  const rand = () => Math.random().toString(36).substring(2, 8).toUpperCase();
  const code = `BICA15-${rand()}`;

  const now = new Date();
  const expires = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000); // 14 days

  res.status(200).json({
    code,
    expiresAt: expires.toISOString(),
  });
}
