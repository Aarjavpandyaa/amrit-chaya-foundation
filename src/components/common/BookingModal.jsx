import { useState } from 'react';
import Modal from './Modal';

export default function BookingModal({ isOpen, onClose, itemName, onSubmit, type = 'pooja' }) {
  const [form, setForm] = useState({ name: '', gotra: '', phone: '', date: '', mode: type === 'pooja' ? 'online' : '', travelers: 1 });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({ ...form, item: itemName });
    } catch (_) {
      // backend not yet live — proceed with confirmation
    }
    alert(type === 'pooja'
      ? 'Booking requested! Our pandit will contact you on WhatsApp shortly.'
      : 'Booking requested! Our team will contact you shortly.');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={itemName ? `Booking: ${itemName}` : 'Book Now'}
      subtitle="Fill out your details to receive WhatsApp confirmation."
    >
      <form onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label>{type === 'pooja' ? 'Your Name / Sankalp Name' : 'Your Name'}</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter full name" required />
        </div>
        {type === 'pooja' && (
          <div className="contact-form-group">
            <label>Gotra (Optional)</label>
            <input type="text" name="gotra" value={form.gotra} onChange={handleChange} placeholder="Enter your Gotra" />
          </div>
        )}
        {type === 'tour' && (
          <div className="contact-form-group">
            <label>Number of Travelers</label>
            <input type="number" name="travelers" min="1" value={form.travelers} onChange={handleChange} required />
          </div>
        )}
        <div className="contact-form-group">
          <label>WhatsApp Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
        </div>
        <div className="contact-form-group">
          <label>{type === 'pooja' ? 'Preferred Date' : 'Preferred Travel Date'}</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </div>
        {type === 'pooja' && (
          <div className="contact-form-group">
            <label>Mode</label>
            <select name="mode" value={form.mode} onChange={handleChange} required>
              <option value="online">Online (Video Call)</option>
              <option value="offline">Offline (In Ujjain)</option>
            </select>
          </div>
        )}
        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
          {type === 'pooja' ? 'Confirm & Pay via WhatsApp' : 'Confirm Request'}
        </button>
      </form>
    </Modal>
  );
}
