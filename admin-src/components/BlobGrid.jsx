import { useState, useEffect, useCallback } from 'react';

function formatSize(bytes) {
  if (!bytes) return '—';
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  );
}

export default function BlobGrid({ token, onUnauthorized }) {
  const [blobs, setBlobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(new Set());
  const [bulkCopied, setBulkCopied] = useState(false);

  const headers = useCallback(
    (extra = {}) => ({ ...(token ? { 'x-admin-token': token } : {}), ...extra }),
    [token]
  );

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/blobs', { headers: headers() });
        if (res.status === 401) { onUnauthorized(); return; }
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        setBlobs(data.blobs ?? []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function deleteBlob(url, pathname) {
    if (!window.confirm(`Delete "${pathname}"?\nThis cannot be undone.`)) return;
    setDeleting(url);
    try {
      const res = await fetch('/api/blobs', {
        method: 'DELETE',
        headers: headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({ url }),
      });
      if (res.status === 401) { onUnauthorized(); return; }
      if (!res.ok) throw new Error(await res.text());
      setBlobs((prev) => prev.filter((b) => b.url !== url));
      setSelected((prev) => { const next = new Set(prev); next.delete(url); return next; });
    } catch (err) {
      alert(`Delete failed: ${err.message}`);
    } finally {
      setDeleting(null);
    }
  }

  function toggleSelect(url) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(url)) next.delete(url);
      else next.add(url);
      return next;
    });
  }

  function selectAll() {
    setSelected(new Set(filtered.map((b) => b.url)));
  }

  function clearSelection() {
    setSelected(new Set());
  }

  function copySelected() {
    const urls = filtered.filter((b) => selected.has(b.url)).map((b) => b.url).join('\n');
    navigator.clipboard.writeText(urls);
    setBulkCopied(true);
    setTimeout(() => setBulkCopied(false), 2000);
  }

  function copyUrl(url) {
    navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  }

  const filtered = blobs.filter((b) =>
    b.pathname?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="blob-state">
        <div className="blob-spinner" aria-label="Loading" />
        <p>Loading image library…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blob-state blob-state--error">
        <p>Could not load images: {error}</p>
        <p className="blob-state-hint">Make sure your first_READ_WRITE_TOKEN is set and the API server is running.</p>
      </div>
    );
  }

  return (
    <div className="blob-library">
      <div className="blob-library-toolbar">
        <p className="blob-count">{blobs.length} image{blobs.length !== 1 ? 's' : ''}</p>
        <div className="blob-toolbar-right">
          {filtered.length > 0 && (
            selected.size === 0 ? (
              <button className="blob-btn blob-btn--select-all" onClick={selectAll}>
                Select All
              </button>
            ) : (
              <div className="blob-bulk-actions">
                <span className="blob-selected-count">{selected.size} selected</span>
                <button
                  className={`blob-btn blob-btn--bulk-copy ${bulkCopied ? 'copied' : ''}`}
                  onClick={copySelected}
                >
                  <CopyIcon />
                  {bulkCopied ? 'Copied!' : `Copy ${selected.size} URL${selected.size !== 1 ? 's' : ''}`}
                </button>
                <button className="blob-btn blob-btn--clear-sel" onClick={clearSelection}>
                  Deselect All
                </button>
              </div>
            )
          )}
          {blobs.length > 6 && (
            <input
              className="blob-search"
              type="search"
              placeholder="Filter by name…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
        </div>
      </div>

      {filtered.length === 0 && blobs.length === 0 && (
        <div className="blob-state">
          <p>No images yet. Upload some above.</p>
        </div>
      )}

      {filtered.length === 0 && blobs.length > 0 && (
        <div className="blob-state">
          <p>No images match &ldquo;{search}&rdquo;</p>
        </div>
      )}

      <div className="blob-grid">
        {filtered.map((blob) => (
          <article
            key={blob.url}
            className={`blob-card ${selected.has(blob.url) ? 'blob-card--selected' : ''}`}
          >
            <div className="blob-thumb" onClick={() => toggleSelect(blob.url)}>
              <img src={blob.url} alt={blob.pathname} loading="lazy" />
              <label className="blob-card-checkbox" onClick={(e) => e.stopPropagation()}>
                <input
                  type="checkbox"
                  checked={selected.has(blob.url)}
                  onChange={() => toggleSelect(blob.url)}
                  aria-label={`Select ${blob.pathname}`}
                />
                <span className="blob-checkbox-visual" />
              </label>
            </div>

            <div className="blob-card-body">
              <p className="blob-name" title={blob.pathname}>
                {blob.pathname?.split('/').pop()}
              </p>
              <p className="blob-meta">
                {formatSize(blob.size)}
                {blob.uploadedAt && (
                  <> &middot; {new Date(blob.uploadedAt).toLocaleDateString()}</>
                )}
              </p>

              <div className="blob-url-row">
                <input
                  className="blob-url-input"
                  readOnly
                  value={blob.url}
                  onClick={(e) => e.target.select()}
                  title={blob.url}
                />
              </div>

              <div className="blob-card-actions">
                <button
                  className={`blob-btn blob-btn--copy ${copied === blob.url ? 'copied' : ''}`}
                  onClick={() => copyUrl(blob.url)}
                >
                  <CopyIcon />
                  {copied === blob.url ? 'Copied!' : 'Copy URL'}
                </button>
                <button
                  className="blob-btn blob-btn--delete"
                  onClick={() => deleteBlob(blob.url, blob.pathname)}
                  disabled={deleting === blob.url}
                >
                  <TrashIcon />
                  {deleting === blob.url ? 'Deleting…' : 'Delete'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
