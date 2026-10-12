const pillars = [
  { icon: '🕉️', title: 'Pooja Seva', text: 'Authentic Vedic rituals by trained pandits' },
  { icon: '🚐', title: 'Spiritual Yatra', text: 'Guided pilgrimages across sacred sites' },
  { icon: '🐄', title: 'Gau Seva', text: 'Protection and care of sacred cows' },
  { icon: '🌿', title: 'Annadan', text: 'Free food and meals for the needy' },
];

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-img-frame">
              <img src="/images/about_hero_bg.png" alt="Spiritual Shelter" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
              <div className="about-img-overlay" style={{ zIndex: 2 }}></div>
            </div>
            <div className="about-badge">
              <div className="about-badge-num">5+</div>
              <div className="about-badge-text">Years of<br />Divine Seva</div>
            </div>
          </div>
          <div>
            <div className="section-label">About the Foundation</div>
            <h2 className="section-title">A Spiritual Shelter for Every Soul</h2>
            <div className="gold-divider"></div>
            <p className="section-desc">
              Amrit Chaya Foundation was born in the sacred city of Ujjain — a spiritual shelter where devotion, seva, and divine experiences come together under one roof.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.9, marginTop: '1rem' }}>
              From authentic Vedic poojas at Mahakal to curated spiritual yatras and cow protection — we are a living ashram in the digital age, serving souls across Bharat.
            </p>
            <div className="about-pillars">
              {pillars.map((p) => (
                <div key={p.title} className="pillar">
                  <div className="pillar-icon">{p.icon}</div>
                  <div className="pillar-title">{p.title}</div>
                  <div className="pillar-text">{p.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
