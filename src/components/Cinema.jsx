import '../styles/Cinema.css';

const images = [
  { src: 'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/DSCN0248.JPG', featured: true },
  { src: 'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/4-%20Mommy3.jpg' },
  { src: 'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/DSCN0231.JPG' },
  { src: 'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/5-Mommy3.jpg', solo: true },
  { src: 'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/DSCN0249.JPG', triple: true },
  { src: 'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/DSCN0251.JPG', triple: true },
  { src: 'https://2vqhqgtijcrk3off.public.blob.vercel-storage.com/DSCN0252.JPG', triple: true },
];

const description = 'Among a select group of sculptors, I contributed to the creation of scenic and set sculptures for The Mummy: Tomb of the Dragon Emperor. The visual language of the work was shaped by the demands of the film’s narrative — rooted in ancient Chinese myth and imperial grandeur.';

export default function Cinema() {
  return (
    <section className="cinema" id="cinema">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Cinema</span>
          <h2 className="section-title">Cinema</h2>
          <p className="cinema-description">{description}</p>
        </div>
        <div className="cinema-grid">
          {images.map((item, i) => (
            <div key={i} className={`cinema-item${item.featured ? ' featured' : ''}${item.solo ? ' solo' : ''}${item.triple ? ' triple' : ''}`}>
              <img src={item.src} alt={`Cinema — ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
