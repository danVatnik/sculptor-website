// Vercel serverless function — POST /api/upload
// Handles client-side upload token handshake for @vercel/blob/client uploads.
import { handleUpload } from '@vercel/blob/client';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const jsonResponse = await handleUpload({
      body: req.body,
      request: req,
      token: process.env.first_READ_WRITE_TOKEN,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'],
        maximumSizeInBytes: 50 * 1024 * 1024,
      }),
    });
    return res.json(jsonResponse);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}
