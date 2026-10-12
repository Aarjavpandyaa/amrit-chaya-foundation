import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFab from '../components/layout/WhatsAppFab';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import DonateModal from '../components/donate/DonateModal';
import { donationTypes } from '../data/donate';

export default function Donate() {
  const [modal, setModal] = useState({ open: false, name: '' });
  useEffect(() => { document.title = 'Donate — Amrit Chaya Foundation'; }, []);

  return (
    <>
      <Navbar ctaLabel="Donate Now" ctaPath="/donate" />
      <PageHero image="/images/donate_hero_bg.png" title="Make a Donation" subtitle="Become Part of Divine Seva" />
      <section className="donation-section" style={{ background: 'var(--beige)', paddingTop: '4rem' }}>
        <div className="section-inner">
          <SectionHeader
            label="Join the Seva"
            title="Choose Your Seva"
            desc='"Every rupee donated becomes a prayer. Every act of seva, a step closer to the divine."'
            centered
          />
          <div className="donate-types-grid">
            {donationTypes.map((type) => (
              <div key={type.name} className="donate-type-card" onClick={() => setModal({ open: true, name: type.name })}>
                <div className="type-icon">{type.icon}</div>
                <div className="type-name">{type.name}</div>
                <p className="type-desc">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFab />
      <DonateModal
        isOpen={modal.open}
        onClose={() => setModal({ open: false, name: '' })}
        itemName={modal.name}
      />
    </>
  );
}
