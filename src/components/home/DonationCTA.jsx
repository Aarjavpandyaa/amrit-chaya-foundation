import { useNavigate } from 'react-router-dom';

const stats = [
  { num: '5,000+', label: 'Devotees Served' },
  { num: '200+', label: 'Poojas Performed' },
  { num: '50+', label: 'Cows Protected' },
  { num: '12+', label: 'Yatra Packages' },
];

const donationBtns = [
  { label: '🐄 Donate Gau Seva', primary: true },
  { label: '🍛 Annadan' },
  { label: '🛕 Temple Seva' },
  { label: '🌸 Foundation Support' },
];

export default function DonationCTA() {
  const navigate = useNavigate();
  return (
    <section className="donation-section">
      <div className="section-inner">
        <div className="section-label" style={{ justifyContent: 'center' }}>Join the Seva</div>
        <h2 className="section-title">Become Part of Divine Seva</h2>
        <p className="donation-desc">"Every rupee donated becomes a prayer. Every act of seva, a step closer to the divine."</p>
        <div className="donation-btns">
          {donationBtns.map((btn) => (
            <button
              key={btn.label}
              className={`btn-donate ${btn.primary ? 'btn-donate-primary' : 'btn-donate-outline'}`}
              onClick={() => navigate('/donate')}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="donation-stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
