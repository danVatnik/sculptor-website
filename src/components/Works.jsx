import '../styles/Works.css';

const BASE = 'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com';

const works = [
  { id: 1,  image: `${BASE}/MK0_0734a.jpg`, title: 'Requiem',              year: 1995, material: 'Polished Bronze—Black',      dimensions: '29 × 45 × 25 cm',              category: 'Figure',       featured: true  },
  { id: 2,  image: `${BASE}/MK0_0727a.jpg`, title: 'Love',                  year: 1995, material: 'Polished Bronze—Green',      dimensions: '40 × 17 × 12 cm',              category: 'Figure',       featured: false },
  { id: 3,  image: `${BASE}/MK0_0735a.jpg`, title: 'Pietà',                 year: 1995, material: 'Tinted Bronze',                dimensions: '68 × 33 × 21 cm',              category: 'Figure',       featured: false },
  { id: 4,  image: `${BASE}/MK0_0749a.jpg`, title: 'Couple',                year: 1995, material: 'Polished Tinted Bronze',        dimensions: '42 × 18 × 9 cm',               category: 'Figure',       featured: false },
  { id: 5,  image: `${BASE}/MK0_0716a.jpg`, title: 'My Friends',           year: 1995, material: 'Bronze',                      dimensions: '62 × 23 × 12 cm',              category: 'Figure',       featured: false },
  { id: 6,  image: `${BASE}/MK0_0751a.jpg`, title: 'Romantic Bird',         year: 1995, material: 'Tinted Bronze',               dimensions: '17.5 × 8 × 4 cm',              category: 'Figure',       featured: false },
  { id: 7,  image: `${BASE}/MK0_0754a.jpg`, title: 'The Journey',           year: 1995, material: 'Tinted Bronze — Green',          dimensions: '14.5 × 14.5 × 4 cm',           category: 'Figure',       featured: false },
  { id: 8,  image: `${BASE}/MK0_0713a.jpg`, title: 'Queen Bird',           year: 1995, material: 'Plated Bronze — Gold',            dimensions: '18 × 11.5 × 5 cm',             category: 'Figure',       featured: false },
  { id: 9,  image: `${BASE}/MK0_0758a.jpg`, title: 'Genesis',              year: 1995, material: 'Polished Bronze—Gold',       dimensions: '30 × 26.5 × 6 cm',             category: 'Relief',       featured: false },
  { id: 11, image: `${BASE}/MK0_0740a.jpg`, title: 'Icarus',               year: 1995, material: 'Epoxy Resin, Marble',         dimensions: '44 × 70 × 19 cm',              category: 'Relief',       featured: false, featuredRight: true },
  { id: 10, image: `${BASE}/MK0_0770a.jpg`, title: 'Flutist',              year: 1995, material: 'Bronze, Granite',            dimensions: '33 × 28.5 × 7.5 cm',           category: 'Figure',       featured: false },
  { id: 12, image: `${BASE}/MK0_0739a.jpg`, title: 'The Dictator',         year: 1995, material: 'Bronze, Granite',             dimensions: '64 × 34.5 × 14 cm',             category: 'Figure',       featured: false },
  { id: 13, image: `${BASE}/MK0_0764a.jpg`, title: 'Jonah',                year: 1995, material: 'Polished Bronze, Granite',   dimensions: '40 × 36 × 8 cm',               category: 'Relief',       featured: false },
  { id: 15, image: `${BASE}/MK0_0762a.jpg`, title: 'Day and Night',        year: 1995, material: 'Bronze, Granite',            dimensions: '49 × 16 × 6 cm',               category: 'Figure',       featured: false },
  { id: 16, image: `${BASE}/MK0_0765a.jpg`, title: 'Dawn and Dusk',        year: 1995, material: 'Bronze, Granite',            dimensions: '49 × 36 × 8 cm',               category: 'Figure',       featured: false },
  { id: 17, image: `${BASE}/MK0_0757a.jpg`, title: 'Neptune',              year: 1995, material: 'Bronze',                      dimensions: '43 × 16.5 × 12 cm',            category: 'Figure',       featured: false },
  { id: 26, image: `${BASE}/MK0_0778a.jpg`, title: 'The Holocaust',        year: 1995, material: 'Epoxy Resin',                dimensions: '59 × 85.5 × 51 cm',            category: 'Figure',       featured: true  },
  { id: 20, image: `${BASE}/MK0_0744a.jpg`, title: 'Victims of Nazism',    year: 1995, material: 'Bronze, Granite',            dimensions: '34 × 21 × 15.5 cm',            category: 'Figure',       featured: false },
  { id: 21, image: `${BASE}/MK0_0748a.jpg`, title: 'Awakening',            year: 2022, material: 'Alabaster',                   dimensions: '60 × 26 × 22 cm',              category: 'Bust',         featured: false, imageZoom: 1.2, clipBottom: true },
  { id: 22, image: `${BASE}/MK0_0737a.jpg`, title: 'The Clown',            year: 1995, material: 'Bronze, Granite',            dimensions: '48 × 30.5 × 21 cm',            category: 'Figure',       featured: false },
  { id: 23, image: `${BASE}/MK0_0766a.jpg`, title: 'The Riders',           year: 1995, material: 'Bronze, Wood',               dimensions: '34 × 32 × 20.5 cm',            category: 'Figure',       featured: false },
  { id: 24, image: `${BASE}/MK0_0721a.jpg`, title: 'My Mother',             year: 1995, material: 'Tinted Epoxy Resin',            dimensions: '35 × 33 × 36 cm',              category: 'Figure',       featured: false },
  { id: 25, image: `${BASE}/MK0_0775a.jpg`, title: 'The Tunguska Meteorite', year: 1995, material: 'Aluminum, Steel, Wood',    dimensions: '160 × 58 × 28 cm',             category: 'Abstract',     featured: false },
  { id: 18, image: `${BASE}/MK0_0722a.jpg`, title: 'The Juggler',           year: 1995, material: 'Bronze, Granite',              dimensions: '89 × 36 × 18 cm',              category: 'Figure',       featured: false },
  { id: 19, image: `${BASE}/MK0_0752a.jpg`, title: 'Zenith',               year: 2024, material: 'White marble',                 dimensions: '115 × 36 × 30 cm',             category: 'Abstract',     featured: false },
];

import { useMemo } from 'react';

export default function Works() {

  const showIds = useMemo(
    () => new URLSearchParams(window.location.search).has('ids'),
    []
  );

  const filtered = works;

  return (
    <section className="works" id="works">
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">Selected Works</p>
          <h2 className="section-title">The Collection</h2>
        </header>

        <div className="works-grid">
          {filtered.map((work) => (
            <article key={work.id} className={`work-card ${work.featured ? 'featured' : ''} ${work.featuredRight ? 'featured-right' : ''}`}>
              <div className="work-image" style={work.clipBottom ? { aspectRatio: '3/4', overflow: 'hidden' } : undefined}>
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  style={{
                    ...(work.clipBottom ? { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' } : {}),
                    ...(work.imageZoom ? { transform: `scale(${work.imageZoom})`, transformOrigin: 'center center' } : {}),
                  }}
                />
                {showIds && (
                  <span className="work-id-badge">{work.id}</span>
                )}
                <div className="work-overlay">
                  <button className="work-view-btn">View Details</button>
                </div>
              </div>
              <div className="work-info">
                <div className="work-meta-top">
                  <span className="work-category">{work.category}</span>
                  <span className="work-year">{work.year}</span>
                </div>
                <h3 className="work-title">{work.title}</h3>
                <p className="work-material">{work.material}</p>
                <p className="work-dimensions">{work.dimensions}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
