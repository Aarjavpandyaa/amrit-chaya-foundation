const steps = [
  { icon: '📝', title: '1. Select & Sankalp', desc: 'Choose your pooja, provide your name, Gotra, and preferred date for the Sankalp.' },
  { icon: '💳', title: '2. Payment & Confirmation', desc: 'Complete payment online. Receive instant confirmation and pandit details on WhatsApp.' },
  { icon: '🎥', title: '3. Live Darshan', desc: 'Join the pooja live via video call or receive a recorded video of your personalized Sankalp.' },
  { icon: '📦', title: '4. Prasad Delivery', desc: 'Sacred ash, thread, and Mahakal prasad is carefully packed and shipped to your home.' },
];

export default function BookingFlowSteps() {
  return (
    <div className="booking-flow">
      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', color: 'var(--forest)', textAlign: 'center', marginBottom: '0.5rem' }}>
        Simple Booking Flow
      </h3>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        Experience divine rituals transparently, no matter where you are.
      </p>
      <div className="flow-steps">
        {steps.map((step) => (
          <div key={step.title} className="flow-step">
            <div className="flow-icon">{step.icon}</div>
            <div className="flow-title">{step.title}</div>
            <div className="flow-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
