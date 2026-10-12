import { useEffect, useState } from 'react';

export default function Lightbox({ items, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    setCurrent(startIndex);
  }, [startIndex]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % items.length);
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKey);
    };
  }, [items.length, onClose]);

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  return (
    <div className="lightbox" style={{ display: 'flex' }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <button className="lightbox-close" onClick={onClose}>×</button>
      <button className="lightbox-btn lightbox-prev" onClick={prev}>&#10094;</button>
      <div className="lightbox-img-wrapper">
        <div>
          <img className="lightbox-img" src={items[current].src} alt={items[current].caption} />
          <div className="lightbox-caption">{items[current].caption}</div>
        </div>
      </div>
      <button className="lightbox-btn lightbox-next" onClick={next}>&#10095;</button>
    </div>
  );
}
