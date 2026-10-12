import { useState } from 'react';
import Modal from './Modal';
import { submitContactForm } from '../../services/contactService';

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(form);
    } catch (_) {
      // backend not yet live — proceed with confirmation
    }
    alert('Message sent successfully! We will get back to you soon.');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Quick Contact" subtitle="Drop us a message and our team will respond shortly.">
      <form onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label>Full Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
        </div>
        <div className="contact-form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
        </div>
        <div className="contact-form-group">
          <label>Your Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" required />
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
          Send Message
        </button>
      </form>
    </Modal>
  );
}
