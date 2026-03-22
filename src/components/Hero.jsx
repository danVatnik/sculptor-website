import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img
          className="hero-bg-img"
          src="https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/MK0_0751a.jpg"
          alt=""
          aria-hidden="true"
          draggable="false"
        />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Contemporary Sculpture</p>
        <h1 className="hero-title">
          Form Found<br />
          <em>in Stone &amp; Bronze</em>
        </h1>
        <p className="hero-desc">
          Exploring the tension between mass and lightness, permanence and motion.
          Works held in private collections across Europe and North America.
        </p>
        <div className="hero-actions">
          <a href="#works" className="btn btn-primary">View Works</a>
          <a href="#about" className="btn btn-ghost">About the Artist</a>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
