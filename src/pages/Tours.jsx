import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFab from '../components/layout/WhatsAppFab';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import BookingModal from '../components/common/BookingModal';
import TourCard from '../components/tours/TourCard';
import { tours } from '../data/tours';
import { submitTourBooking } from '../services/tourService';

export default function Tours() {
  const [modal, setModal] = useState({ open: false, tour: null });
  useEffect(() => { document.title = 'Spiritual Tours — Amrit Chaya Foundation'; }, []);

  return (
    <>
      <Navbar ctaLabel="Book Yatra" ctaPath="/tours" />
      <PageHero image="/images/tours_hero_bg.png" title="Spiritual Tours" subtitle="Curated Yatra Packages" />
      <section className="tours-section" style={{ paddingTop: '4rem' }}>
        <div className="section-inner">
          <SectionHeader
            label="Yatra"
            title="Spiritual Tours & Packages"
            desc="Embark on a divine journey with Amrit Chaya Foundation. We handle all logistics including hotels, meals, transport, and special pandit-guided darshan."
            centered
          />
          <div className="tours-grid">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} onBook={(t) => setModal({ open: true, tour: t })} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFab />
      <BookingModal
        isOpen={modal.open}
        onClose={() => setModal({ open: false, tour: null })}
        itemName={modal.tour?.name}
        onSubmit={submitTourBooking}
        type="tour"
      />
    </>
  );
}
