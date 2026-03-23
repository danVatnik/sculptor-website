import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-name">Leonid Vatnik</span>
          <span className="footer-tagline">Sculptor &mdash; Montreal</span>
        </div>
        <nav className="footer-nav">
          <a href="#works">Works</a>
          <a href="#commissions">Commissions</a>
          <a href="#cinema">Cinema</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Leonid Vatnik. All rights reserved.</p>
      </div>
    </footer>
  );
}
