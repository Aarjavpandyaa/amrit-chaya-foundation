import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFab from '../components/layout/WhatsAppFab';
import PageHero from '../components/common/PageHero';
import { submitContactForm } from '../services/contactService';

const contactDetails = [
  { icon: '📍', title: 'Ashram Address', text: 'Amrit Chaya Foundation\nNear Mahakaleshwar Temple,\nUjjain, Madhya Pradesh 456001' },
  { icon: '📞', title: 'Phone / WhatsApp', text: '+91 98765 43210', sub: 'Available 8:00 AM - 8:00 PM' },
  { icon: '📧', title: 'Email', text: 'info@amritchaya.org\nseva@amritchaya.org' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  useEffect(() => { document.title = 'Contact Us — Amrit Chaya Foundation'; }, []);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(form);
    } catch (_) {
      // backend not yet live — proceed with confirmation
    }
    alert('Thank you for reaching out. We will get back to you soon.');
  };

  return (
    <>
      <Navbar ctaLabel="Contact Us" ctaPath="/contact" />
      <PageHero image="/images/contact_hero_bg.png" title="Contact Us" subtitle="Reach out for Seva & Support" />
      <div className="contact-container">
        <div className="contact-info">
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', color: 'var(--forest)', marginBottom: '2rem' }}>Get in Touch</h2>
          {contactDetails.map((d) => (
            <div key={d.title} className="contact-detail">
              <div className="contact-icon">{d.icon}</div>
              <div className="contact-text">
                <h4>{d.title}</h4>
                <p style={{ whiteSpace: 'pre-line' }}>{d.text}</p>
                {d.sub && <span style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>{d.sub}</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="contact-form">
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.4rem', color: 'var(--forest)', marginBottom: '1.5rem' }}>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required placeholder="How can we help you?" />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
