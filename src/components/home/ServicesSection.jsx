import { useNavigate } from 'react-router-dom';

const services = [
  { icon: '🪔', name: 'Pooja Services', desc: 'Online & offline Vedic poojas performed by qualified pandits at Mahakal temple', path: '/pooja' },
  { icon: '🛕', name: 'Spiritual Tours', desc: 'Curated yatra packages to Ujjain, Omkareshwar, 84 Mahadev & all Jyotirlingas', path: '/tours' },
  { icon: '🐄', name: 'Goshala Seva', desc: 'Adopt, donate, and participate in the daily care of our sacred cows', path: '/goshala' },
  { icon: '🌸', name: 'Foundation', desc: 'Annadan, charity, events and social work rooted in dharma and seva', path: '/about' },
];

export default function ServicesSection() {
  const navigate = useNavigate();
  return (
    <section className="services-section">
      <div className="section-inner">
        <div className="section-label">What We Offer</div>
        <h2 className="section-title">Our Divine Services</h2>
        <p className="section-desc">Everything you need for a complete spiritual experience — from rituals to journeys to seva.</p>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.name} className="service-card" onClick={() => navigate(s.path)}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <a
                href="#"
                className="service-link"
                onClick={(e) => { e.preventDefault(); navigate(s.path); }}
              >
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
