import { useState } from 'react';
import '../styles/Commissions.css';

const commissions = [
  {
    id: 1,
    client: 'Alexander Pushkin',
    location: 'Macedonia',
    year: null,
    description: 'Commissioned by the International Federation of Russian-Speaking Writers, this bronze bust honours Alexander Pushkin — celebrated Russian poet, playwright, and novelist.',
    images: [
      'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/Pushkin%20Macedonia.jpg',
      'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/Pushkin%20-%20Panama_crop.jpg',
      'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/pushkin%20bronze.jpg',
      'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/%D0%BF%D1%83%D1%88%D0%BA%D0%B8%D0%BD%2C%20%D0%BC%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2.JPG',
      'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/3%20-Pushkin%20Hungaryjpg.jpg',
    ],
  },
  {
    id: 2,
    client: 'Dawn',
    location: null,
    year: null,
    description: 'Commissioned by the VANDART Gallery as a gift to the Municipality of Montreal from the Russian immigrant community, this composition symbolises the breaking of a new day — and, for those who have made a new home, the beginning of a new life.',
    imageScale: 1.0,
    layout: 'side-by-side',
    images: [
      'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/Sunrise%20%20original%20copy.jpg',
      'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/crop%2033.jpg',
    ],
  },
  {
    id: 3,
    client: 'Babino',
    location: null,
    year: null,
    description: 'Situated on a peninsula at the confluence of the Lachine Canal and the St. Lawrence River, René Lévesque Park is home to a collection of sculptures spanning a range of styles. Among them is this life-size realistic portrait of Babino, a Golden Retriever — a faithful likeness of a cherished companion.',
    images: [
      'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/P6210018%282%29.JPG',
    ],
  },
  {
    id: 4,
    client: 'Robert M. Sohoning',
    location: null,
    year: null,
    description: 'This portrait bust was commissioned to mark a businessman\'s jubilee and presented by his colleagues as a surprise. Under the terms of the commission, I was permitted to observe the subject only once, unbeknownst to him, and completed the work solely from photographs — a constraint that did not prevent an accurate and faithful likeness.',
    imageScale: 0.7,
    images: [
      'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/13%2B-%2BBust%2Bprivate%2Bcontrct.webp',
    ],
  },
  // {
  //   id: 5,
  //   client: 'Fire Horse',
  //   location: null,
  //   year: null,
  //   description: 'The Fire Horse is a sign of the Chinese Zodiac — rare, vivid, and untamed. The client, born under this sign, commissioned a bas-relief for the interior of her private residence, granting complete creative freedom. The result is a phantasmagoric composition of comets, stars, and planets: a personal cosmology rendered in relief.',
  //   imageScale: 0.8,
  //   images: [
  //     'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/crop%2B14.webp',
  //   ],
  // },
];

export default function Commissions() {
  const [activeImages, setActiveImages] = useState(
    Object.fromEntries(commissions.map((c) => [c.id, c.images[0]]))
  );

  return (
    <section className="commissions" id="commissions">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Commissions</span>
          <h2 className="section-title">Commissioned Works</h2>
        </div>

        <div className="commissions-list">
          {commissions.map((commission, index) => {
            const activeImg = activeImages[commission.id];
            const thumbnails = commission.images;
            return (
            <article key={commission.id} className="commission-card">
              <div className="commission-visuals" style={commission.imageScale ? { '--image-scale': commission.imageScale } : undefined}>
                {commission.layout === 'side-by-side' ? (
                  <div className="commission-side-by-side">
                    {commission.images.map((src, i) => (
                      <div key={i} className="commission-primary-image">
                        <img src={src} alt={`${commission.client} — view ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="commission-primary-image">
                      <img src={activeImg} alt={commission.client} />
                    </div>
                    {thumbnails.length > 1 && (
                      <div className="commission-secondary-images">
                        {thumbnails.map((src, i) => (
                          <button
                            key={i}
                            className={`commission-thumb${src === activeImg ? ' active' : ''}`}
                            onClick={() => setActiveImages((prev) => ({ ...prev, [commission.id]: src }))}
                            aria-label={`View ${commission.client} — image ${i + 1}`}
                          >
                            <img src={src} alt={`${commission.client} — view ${i + 1}`} />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="commission-content">
                <span className="commission-number">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="commission-client">{commission.client}</h3>
                {commission.location && (
                  <p className="commission-location">{commission.location}</p>
                )}
                {commission.year && (
                  <p className="commission-year">{commission.year}</p>
                )}
                {commission.description && (
                  <p className="commission-description">{commission.description}</p>
                )}
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
