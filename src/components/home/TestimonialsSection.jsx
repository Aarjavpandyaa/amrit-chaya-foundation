import SectionHeader from '../common/SectionHeader';

const testimonials = [
  {
    text: 'Kaal Sarp Dosh pooja was performed with complete devotion. I could feel the energy shift. The WhatsApp confirmation and live video made it very trustworthy.',
    name: 'Rajesh Sharma',
    city: 'Indore, MP',
    initials: 'RS',
  },
  {
    text: 'The 84 Mahadev Yatra was a life-changing experience. Everything was organized perfectly — vehicle, food, pandit. Amrit Chaya made the impossible possible.',
    name: 'Priya Verma',
    city: 'Pune, Maharashtra',
    initials: 'PV',
  },
  {
    text: 'We adopted a cow from the goshala and receive weekly updates. It gives such peace of mind knowing our donation is directly serving Gau Mata with transparency.',
    name: 'Anil Gupta',
    city: 'Delhi, NCR',
    initials: 'AG',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="section-inner">
        <SectionHeader label="Divine Experiences" title="What Devotees Say" />
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-quote-mark">"</div>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-city">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
