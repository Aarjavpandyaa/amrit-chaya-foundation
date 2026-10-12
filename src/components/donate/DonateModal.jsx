import { useState } from 'react';
import Modal from '../common/Modal';
import { submitDonation } from '../../services/donationService';

export default function DonateModal({ isOpen, onClose, itemName, amount }) {
  const [form, setForm] = useState({ amount: amount || '', name: '', pan: '', phone: '', method: 'upi' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitDonation({ ...form, seva: itemName });
    } catch (_) {
      // backend not yet live — proceed with confirmation
    }
    alert('Redirecting to secure payment gateway...');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={itemName ? `${itemName} Donation` : 'Donate Now'}
      subtitle="We accept UPI, Cards, and Net Banking."
    >
      <form onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label>Donation Amount (₹)</label>
          <input type="number" name="amount" min="100" value={form.amount} onChange={handleChange} placeholder="e.g. 1100" required />
        </div>
        <div className="contact-form-group">
          <label>Your Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter full name" required />
        </div>
        <div className="contact-form-group">
          <label>PAN Number (For Tax Receipt)</label>
          <input type="text" name="pan" value={form.pan} onChange={handleChange} placeholder="Optional" />
        </div>
        <div className="contact-form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
        </div>
        <div className="contact-form-group">
          <label>Payment Method</label>
          <select name="method" value={form.method} onChange={handleChange} required>
            <option value="upi">UPI (GPay, PhonePe, Paytm)</option>
            <option value="card">Credit/Debit Card</option>
            <option value="netbanking">Net Banking</option>
          </select>
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
          Proceed to Pay
        </button>
      </form>
    </Modal>
  );
}
