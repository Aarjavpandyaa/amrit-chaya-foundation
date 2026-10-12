import { useState, useEffect } from 'react';
import { poojas } from '../data/poojas';
import { submitPoojaBooking } from '../services/poojaService';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFab from '../components/layout/WhatsAppFab';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import PoojaCard from '../components/pooja/PoojaCard';
import BookingFlowSteps from '../components/pooja/BookingFlowSteps';
import BookingModal from '../components/common/BookingModal';

export default function Pooja() {
  const [modal, setModal] = useState({ open: false, pooja: null });
  useEffect(() => { document.title = 'Pooja Services — Amrit Chaya Foundation'; }, []);

  return (
    <>
      <Navbar ctaLabel="Book Pooja" ctaPath="/pooja" />
      <PageHero image="/images/pooja_hero_bg.png" title="Pooja Services" subtitle="Authentic Vedic Rituals at Mahakal" />
      <section className="poojas-section" style={{ paddingTop: '4rem' }}>
        <div className="section-inner">
          <SectionHeader
            label="Vedic Poojas"
            title="Sacred Rituals at Mahakal"
            desc="Select from our authentic Vedic poojas performed by highly qualified pandits in Ujjain. Available both online (via video call) and offline."
            centered
          />
          <div className="poojas-grid">
            {poojas.map((pooja) => (
              <PoojaCard key={pooja.id} pooja={pooja} onBook={(p) => setModal({ open: true, pooja: p })} />
            ))}
          </div>
          <BookingFlowSteps />
        </div>
      </section>
      <Footer />
      <WhatsAppFab />
      <BookingModal
        isOpen={modal.open}
        onClose={() => setModal({ open: false, pooja: null })}
        itemName={modal.pooja?.name}
        onSubmit={submitPoojaBooking}
        type="pooja"
      />
    </>
  );
}
