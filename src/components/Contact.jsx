import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', interest: 'general', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="section-inner contact-inner">
        <div className="contact-info-col">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Commissions &amp; Inquiries</h2>
          <p className="contact-intro">
            Eleanor welcomes commissions for private collectors, public spaces, and institutional
            projects. Each commission begins with a personal consultation.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="detail-label">Studio</span>
              <span className="detail-value">Via delle Terme, Florence, Italy</span>
            </div>
            <div className="contact-detail">
              <span className="detail-label">Representation</span>
              <span className="detail-value">Galerie Nordwest, Berlin</span>
            </div>
            <div className="contact-detail">
              <span className="detail-label">Press</span>
              <span className="detail-value">press@vossstudio.com</span>
            </div>
          </div>

          <div className="contact-social">
            <a href="#" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                <rect x="2" y="2" width="20" height="20" rx="3" />
                <line x1="8" y1="10" x2="8" y2="17" />
                <line x1="8" y1="7" x2="8" y2="7.5" strokeWidth="2.5" />
                <path d="M12 10v7m0-5c0-1.5 4-2 4 1v4" />
              </svg>
            </a>
          </div>
        </div>

        <div className="contact-form-col">
          {submitted ? (
            <div className="form-success">
              <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                <circle cx="24" cy="24" r="22" stroke="var(--accent)" strokeWidth="2" />
                <path d="M14 24l7 7 13-14" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>Message received</h3>
              <p>Thank you. Eleanor or her studio will be in contact within 3–5 business days.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="interest">Subject</label>
                <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
                  <option value="general">General Inquiry</option>
                  <option value="commission">Commission Request</option>
                  <option value="purchase">Existing Work Purchase</option>
                  <option value="press">Press / Media</option>
                  <option value="exhibition">Exhibition Proposal</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project or inquiry..."
                  required
                />
              </div>
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
