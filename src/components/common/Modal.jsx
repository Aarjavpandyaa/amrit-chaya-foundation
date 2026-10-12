import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, subtitle, children }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal"
      style={{ display: 'flex' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="contact-modal-content">
        <button className="close-modal-btn" onClick={onClose}>×</button>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: "'Cinzel', serif", color: 'var(--forest)', fontSize: '1.5rem' }}>{title}</h3>
          {subtitle && <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
