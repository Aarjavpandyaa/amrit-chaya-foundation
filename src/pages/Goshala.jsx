import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFab from '../components/layout/WhatsAppFab';
import PageHero from '../components/common/PageHero';
import DonateCard from '../components/donate/DonateCard';
import DonateModal from '../components/donate/DonateModal';
import { goshalaDonations } from '../data/donate';

const sevaItems = [
  { icon: '🌾', title: 'Daily Feeding', text: 'Fresh grass, fodder and grain for 50+ cows every day' },
  { icon: '🏥', title: 'Veterinary Care', text: 'Regular health check-ups and medical treatment' },
  { icon: '🐄', title: 'Rescue Activities', text: 'Rescuing abandoned and injured cows from streets' },
  { icon: '🧹', title: 'Shelter & Cleanliness', text: "Safe, clean environment for each cow's wellbeing" },
];

export default function Goshala() {
  const [modal, setModal] = useState({ open: false, item: null });
  useEffect(() => { document.title = 'Goshala Seva — Amrit Chaya Foundation'; }, []);

  return (
    <>
      <Navbar ctaLabel="Donate Now" ctaPath="/donate" />
      <PageHero image="/images/goshala_hero_bg.png" title="Goshala Seva" subtitle="Adopt & Protect Gau Mata" />
      <section className="goshala-section">
        <div className="section-inner">
          <div className="section-label">Gau Mata</div>
          <h2 className="section-title" style={{ color: 'var(--gold)' }}>Our Divine Goshala</h2>
          <div className="gold-divider" style={{ background: 'linear-gradient(to right, rgba(200,164,93,0.5), transparent)' }}></div>
          <div className="goshala-content">
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontStyle: 'italic', color: 'rgba(250,247,242,0.7)', lineHeight: 1.8, marginBottom: '2rem' }}>
                "Gau Mata is the foundation of dharma. Every act of seva towards her returns a thousandfold in divine grace."
              </p>
              <ul className="goshala-seva-list">
                {sevaItems.map((item) => (
                  <li key={item.title} className="goshala-seva-item">
                    <div className="seva-icon">{item.icon}</div>
                    <div className="seva-text"><strong>{item.title}</strong>{item.text}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.8rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  Choose Your Seva Amount
                </div>
                <div className="goshala-donate-cards">
                  {goshalaDonations.map((item) => (
                    <DonateCard key={item.label} item={item} onDonate={(i) => setModal({ open: true, item: i })} />
                  ))}
                </div>
              </div>
              <div style={{ background: 'rgba(200,164,93,0.06)', border: '1px solid rgba(200,164,93,0.15)', borderRadius: 4, padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '2rem' }}>📱</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.8rem', color: 'var(--gold)', marginBottom: '0.2rem' }}>Get Live Updates</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(250,247,242,0.5)' }}>Join our WhatsApp group for daily goshala photos &amp; updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFab />
      <DonateModal
        isOpen={modal.open}
        onClose={() => setModal({ open: false, item: null })}
        itemName={modal.item?.label}
        amount={modal.item?.amount}
      />
    </>
  );
}
