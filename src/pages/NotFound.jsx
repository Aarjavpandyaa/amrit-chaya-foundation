import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFab from '../components/layout/WhatsAppFab';

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => { document.title = 'Page Not Found \u2014 Amrit Chaya Foundation'; }, []);

  return (
    <>
      <Navbar />
      <section className="page-hero" style={{ minHeight: '70vh' }}>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '6rem', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>
            404
          </div>
          <h1 className="page-hero-title" style={{ marginTop: '1rem' }}>Page Not Found</h1>
          <p className="page-hero-subtitle" style={{ marginTop: '0.5rem' }}>
            The page you are looking for does not exist.
          </p>
          <button
            className="btn-primary"
            style={{ marginTop: '2.5rem' }}
            onClick={() => navigate('/')}
          >
            Return to Home
          </button>
        </div>
      </section>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
