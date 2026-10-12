import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFab from '../components/layout/WhatsAppFab';
import BookingModal from '../components/common/BookingModal';
import { getPoojaById, submitPoojaBooking } from '../services/poojaService';

export default function PoojaDetails() {
  const { id } = useParams();
  const [pooja, setPooja] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getPoojaById(id).then((p) => {
      setPooja(p);
      if (p) document.title = `${p.name} — Amrit Chaya Foundation`;
      else document.title = 'Pooja Not Found — Amrit Chaya Foundation';
    });
  }, [id]);

  return (
    <>
      <Navbar ctaLabel="Donate Now" ctaPath="/donate" />
      <div className="detail-hero">
        {pooja && <img src={pooja.image} className="detail-hero-img" alt="Background" />}
      </div>
      <div className="detail-container">
        {pooja ? (
          <div className="detail-card">
            <img src={pooja.image} className="detail-card-img" alt={pooja.name} />
            <div className="detail-card-content">
              <h1 className="detail-title">{pooja.name}</h1>
              <div className="detail-duration">{pooja.duration}</div>
              <div className="detail-tags">
                {pooja.tags.map((tag) => (
                  <span key={tag} className="detail-tag">{tag}</span>
                ))}
              </div>
              <div className="detail-price">{pooja.price} <span>onwards</span></div>
              <div className="detail-long-desc" dangerouslySetInnerHTML={{ __html: pooja.desc }} />
              <button className="btn-primary" style={{ padding: '1rem', width: '100%' }} onClick={() => setModalOpen(true)}>
                Book This Pooja
              </button>
            </div>
          </div>
        ) : (
          <div className="detail-card">
            <div className="detail-card-content">
              <h1 className="detail-title">Pooja Not Found</h1>
              <p>Please select a valid pooja from the <Link to="/pooja" style={{ color: 'var(--gold)' }}>Poojas page</Link>.</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <WhatsAppFab />
      {pooja && (
        <BookingModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          itemName={pooja.name}
          onSubmit={submitPoojaBooking}
          type="pooja"
        />
      )}
    </>
  );
}
