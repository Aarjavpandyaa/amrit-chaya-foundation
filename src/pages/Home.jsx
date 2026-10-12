import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFab from '../components/layout/WhatsAppFab';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import PoojaSection from '../components/home/PoojaSection';
import ToursSection from '../components/home/ToursSection';
import GoshalaSection from '../components/home/GoshalaSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import DonationCTA from '../components/home/DonationCTA';
import ContactModal from '../components/common/ContactModal';
import { useState, useEffect } from 'react';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  useEffect(() => { document.title = 'Amrit Chaya Foundation — Sacred Poojas & Gau Seva'; }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PoojaSection />
      <ToursSection />
      <GoshalaSection />
      <TestimonialsSection />
      <DonationCTA />
      <Footer onOpenContact={() => setContactOpen(true)} />
      <WhatsAppFab />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
