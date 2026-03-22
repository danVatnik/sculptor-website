import { useState } from 'react';
import '../styles/Header.css';

const navLinks = [
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="header-logo">
          <span className="logo-name">Leonid Vatnik</span>
          <span className="logo-subtitle">Sculptor</span>
        </a>
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Inquire
          </a>
        </nav>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
