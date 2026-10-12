import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFab from '../components/layout/WhatsAppFab';
import PageHero from '../components/common/PageHero';

export default function About() {
  useEffect(() => { document.title = 'About Foundation — Amrit Chaya Foundation'; }, []);
  return (
    <>
      <Navbar ctaLabel="Support Us" ctaPath="/donate" />
      <PageHero image="/images/about_hero_bg.png" title="About the Foundation" subtitle="A Spiritual Shelter for Every Soul" />
      <section className="about-content-section">
        <div className="mission-vision-grid">
          <div className="mv-box">
            <div className="mv-icon">🌿</div>
            <h3 className="mv-title">Our Mission</h3>
            <p className="mv-text">
              To preserve and promote the ancient Vedic traditions of Bharat while providing accessible, authentic spiritual services to devotees worldwide. Through Gau Seva, Annadan, and sacred rituals, we aim to uplift society physically and spiritually.
            </p>
          </div>
          <div className="mv-box">
            <div className="mv-icon">👁️</div>
            <h3 className="mv-title">Our Vision</h3>
            <p className="mv-text">
              To establish Amrit Chaya as a global digital ashram — a trusted beacon of spirituality, charity, and divine knowledge rooted in the sacred energy of Ujjain and Lord Mahakaleshwar.
            </p>
          </div>
        </div>
        <div style={{ maxWidth: 800, margin: '5rem auto 0', textAlign: 'center' }}>
          <h2 className="section-title">Registration Details</h2>
          <div className="gold-divider" style={{ margin: '1.5rem auto' }}></div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Amrit Chaya Foundation is a registered non-profit charitable trust based in Ujjain, Madhya Pradesh.<br />
            <strong>Trust Registration No:</strong> XX/XXXX/XXXX<br />
            <strong>80G &amp; 12A Certified:</strong> All donations are tax-exempt under section 80G of the Income Tax Act.
          </p>
        </div>
      </section>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
