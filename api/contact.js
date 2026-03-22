// Vercel serverless function — POST /api/contact
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, interest, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required.' });
  }

  // Basic email format check to avoid forwarding garbage
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

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

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
