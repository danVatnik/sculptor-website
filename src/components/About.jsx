import '../styles/About.css';

const ARTIST_IMAGE = 'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/MK0_2022aa.jpg';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-inner about-inner">
        <div className="about-image-col">
          <div className="about-portrait-wrap">
            <img src={ARTIST_IMAGE} alt="Leonid Vatnik" />
          </div>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-value">18+</span>
              <span className="stat-label">Years of Practice</span>
            </div>
            <div className="stat">
              <span className="stat-value">60+</span>
              <span className="stat-label">Works Created</span>
            </div>
            <div className="stat">
              <span className="stat-value">12</span>
              <span className="stat-label">Exhibitions</span>
            </div>
          </div>
        </div>

        <div className="about-text-col">
          <p className="section-label">About the Artist</p>
          <h2 className="section-title">Leonid Vatnik</h2>
          <div className="about-bio">
            <p>
              Born in Munich in 1979, Leonid Vatnik trained at the Academy of Fine Arts Vienna
              before establishing her studio in the hills outside Florence. Her practice centres
              on the act of removal — the idea that sculpture exists inside the stone already,
              and the artist's role is to reveal it.
            </p>
            <p>
              Working primarily in Carrara marble, alabaster, and cast bronze, Leonid explores
              themes of human presence and absence, the weight of memory, and the paradox of
              capturing motion in static material. Her large-scale works have been commissioned
              for public plazas, museum gardens, and private estates.
            </p>
            <p>
              Recent solo exhibitions include <em>Mass &amp; Void</em> at the Museum Kunstpalast
              Düsseldorf (2024) and <em>The Waiting Room</em> at the Hauser &amp; Wirth Somerset
              gallery (2023).
            </p>
          </div>
          <div className="about-links">
            <a href="#works" className="btn btn-primary">See the Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
