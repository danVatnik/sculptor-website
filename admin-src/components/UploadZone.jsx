import { useState, useRef } from 'react';
import { upload } from '@vercel/blob/client';

const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'];

function formatSize(bytes) {
  if (!bytes) return '';
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function UploadZone({ token, onUploaded, onUnauthorized }) {
  const [dragging, setDragging] = useState(false);
  const [uploads, setUploads] = useState([]);
  const inputRef = useRef();

  function updateUpload(id, patch) {
    setUploads((prev) => prev.map((u) => (u.id === id ? { ...u, ...patch } : u)));
  }

  async function uploadFile(file) {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      alert(`Unsupported file type: ${file.type}`);
      return;
    }

    const id = crypto.randomUUID();
    setUploads((prev) => [
      { id, name: file.name, size: file.size, status: 'uploading', url: null, error: null },
      ...prev,
    ]);

    try {
      const blob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      });
      updateUpload(id, { status: 'done', url: blob.url });
      onUploaded(blob);
    } catch (err) {
      updateUpload(id, { status: 'error', error: err.message });
    }
  }

  function handleFiles(files) {
    Array.from(files).forEach(uploadFile);
  }

  function onDrop(e) {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  }

  function dismissUpload(id) {
    setUploads((prev) => prev.filter((u) => u.id !== id));
  }

  function copyUrl(url) {
    navigator.clipboard.writeText(url);
  }

  return (
    <div className="upload-zone-wrap">
      <div
        className={`upload-zone ${dragging ? 'dragging' : ''}`}
        onDrop={onDrop}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => inputRef.current.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && inputRef.current.click()}
        aria-label="Upload images"
      >
        <svg className="upload-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path
            d="M24 32V16M16 24l8-8 8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 38h32"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
        <p className="upload-label">Drop images here</p>
        <p className="upload-hint">or click to browse &mdash; JPG, PNG, WEBP, GIF, AVIF</p>
        <p className="upload-hint">Multiple files supported</p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPTED_TYPES.join(',')}
          style={{ display: 'none' }}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {uploads.length > 0 && (
        <ul className="upload-list" aria-label="Upload progress">
          {uploads.map((u) => (
            <li key={u.id} className={`upload-item upload-item--${u.status}`}>
              <div className="upload-item-left">
                <span className="upload-item-name" title={u.name}>{u.name}</span>
                <span className="upload-item-size">{formatSize(u.size)}</span>
              </div>
              <div className="upload-item-right">
                {u.status === 'uploading' && (
                  <span className="upload-item-status uploading">Uploading…</span>
                )}
                {u.status === 'done' && (
                  <>
                    <span className="upload-item-status done">Done</span>
                    <button
                      className="upload-copy-btn"
                      onClick={(e) => { e.stopPropagation(); copyUrl(u.url); }}
                    >
                      Copy URL
                    </button>
                  </>
                )}
                {u.status === 'error' && (
                  <span className="upload-item-status error" title={u.error}>Failed</span>
                )}
                {u.status !== 'uploading' && (
                  <button
                    className="upload-dismiss-btn"
                    onClick={(e) => { e.stopPropagation(); dismissUpload(u.id); }}
                    aria-label="Dismiss"
                  >
                    &times;
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
