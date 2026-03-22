import { useState } from 'react';
import UploadZone from '../components/UploadZone.jsx';
import BlobGrid from '../components/BlobGrid.jsx';
import '../styles/Admin.css';

export default function AdminPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="admin-header-inner">
          <div className="admin-brand">
            <span className="admin-brand-name">Studio Admin</span>
            <span className="admin-brand-sub">Leonid Vatnik</span>
          </div>
          <div className="admin-header-actions">
            <a href="/" className="admin-nav-link">← View Site</a>
          </div>
        </div>
      </header>

      <main className="admin-main">
        <section className="admin-section">
          <div className="admin-section-header">
            <h2 className="admin-section-title">Upload Images</h2>
            <p className="admin-section-desc">
              Files are stored on Vercel Blob and served via CDN. Copy the URL to use it anywhere in the site.
            </p>
          </div>
          <UploadZone
            token={null}
            onUploaded={() => setRefreshKey((k) => k + 1)}
            onUnauthorized={() => {}}
          />
        </section>

        <section className="admin-section">
          <div className="admin-section-header">
            <h2 className="admin-section-title">Image Library</h2>
            <p className="admin-section-desc">
              All uploaded images. Click a URL field to select it, or use Copy URL.
            </p>
          </div>
          <BlobGrid
            key={refreshKey}
            token={null}
            onUnauthorized={() => {}}
          />
        </section>
      </main>

      <footer className="admin-footer">
        <p>Vercel Blob Storage &mdash; Leonid Vatnik Studio</p>
      </footer>
    </div>
  );
}
