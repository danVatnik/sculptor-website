// Local development API server — proxied by Vite on /api/*
// Production uses the /api Vercel serverless functions instead.
// Run via: npm run dev (concurrently starts both this and vite)

import express from 'express';
import cors from 'cors';
import { handleUpload } from '@vercel/blob/client';
import { list, del } from '@vercel/blob';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 6001;

app.use(cors());
app.use(express.json());

// Simple token auth — skip if ADMIN_TOKEN is not set (local dev default)
function checkAuth(req, res, next) {
  const required = process.env.ADMIN_TOKEN;
  if (!required) return next();
  if (req.headers['x-admin-token'] !== required) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// POST /api/upload — client-side upload token handshake
app.post('/api/upload', checkAuth, async (req, res) => {
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
    res.json(jsonResponse);
  } catch (err) {
    console.error('Upload error:', err);
    res.status(400).json({ error: err.message });
  }
});

// GET /api/blobs — list all blobs
app.get('/api/blobs', checkAuth, async (req, res) => {
  try {
    const { cursor } = req.query;
    const result = await list({ cursor, limit: 100, token: process.env.first_READ_WRITE_TOKEN });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/blobs — delete a blob by URL
app.delete('/api/blobs', checkAuth, async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'url required' });
    await del(url, { token: process.env.first_READ_WRITE_TOKEN });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// POST /api/contact — send contact form email via Resend
app.post('/api/contact', async (req, res) => {
  const { name, email, interest, message } = req.body ?? {};
  if (!name || !email || !message)
    return res.status(400).json({ error: 'name, email, and message are required.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return res.status(400).json({ error: 'Invalid email address.' });

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: 'Studio Contact <onboarding@resend.dev>',
      to: 'dan.vatnik@gmail.com',
      reply_to: email,
      subject: `New inquiry from ${name}${interest && interest !== 'general' ? ` — ${interest}` : ''}`,
      html: `
        <p><strong>Name:</strong> ${escHtml(name)}</p>
        <p><strong>Email:</strong> ${escHtml(email)}</p>
        <p><strong>Interest:</strong> ${escHtml(interest ?? 'general')}</p>
        <hr />
        <p>${escHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
