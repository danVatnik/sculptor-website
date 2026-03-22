// Vercel serverless function — GET /api/blobs (list) and DELETE /api/blobs (delete)
import { list, del } from '@vercel/blob';

function checkAuth(req) {
  const required = process.env.ADMIN_TOKEN;
  if (!required) return true;
  return req.headers['x-admin-token'] === required;
}

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'GET') {
    try {
      const { cursor } = req.query;
      const result = await list({ cursor, limit: 100, token: process.env.first_READ_WRITE_TOKEN });
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { url } = req.body;
      if (!url) return res.status(400).json({ error: 'url required' });
      await del(url, { token: process.env.first_READ_WRITE_TOKEN });
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).end();
  }
}
