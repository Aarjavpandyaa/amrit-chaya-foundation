import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFab from '../components/layout/WhatsAppFab';
import PageHero from '../components/common/PageHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import Lightbox from '../components/gallery/Lightbox';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  useEffect(() => { document.title = 'Divine Gallery — Amrit Chaya Foundation'; }, []);

  return (
    <>
      <Navbar ctaLabel="Donate Now" ctaPath="/donate" />
      <PageHero image="/images/gallery_hero_bg.png" title="Divine Gallery" subtitle="Glimpses of our Seva & Poojas" />
      <GalleryGrid items={galleryItems} onOpen={(index) => setLightbox({ open: true, index })} />
      <Footer />
      <WhatsAppFab />
      {lightbox.open && (
        <Lightbox
          items={galleryItems}
          startIndex={lightbox.index}
          onClose={() => setLightbox({ open: false, index: 0 })}
        />
      )}
    </>
  );
}
