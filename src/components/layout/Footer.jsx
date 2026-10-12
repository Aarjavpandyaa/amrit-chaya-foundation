import { Link } from 'react-router-dom';

export default function Footer({ onOpenContact }) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '1.4rem', color: 'var(--gold)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              अमृत छाया
            </div>
            <p className="footer-tagline">
              "Spiritual Foundation for Seva, Darshan &amp; Divine Experiences"<br />
              Ujjain, Madhya Pradesh
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              {['📘', '📸', '📱'].map((icon) => (
                <div key={icon} style={{ width: 36, height: 36, background: 'rgba(200,164,93,0.1)', border: '1px solid rgba(200,164,93,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1rem' }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-heading">Services</div>
            <ul className="footer-links">
              <li><Link to="/pooja">Pooja Booking</Link></li>
              <li><Link to="/tours">Spiritual Tours</Link></li>
              <li><Link to="/goshala">Goshala Seva</Link></li>
              <li><Link to="/donate">Donation</Link></li>
              <li><Link to="/donate">Annadan Seva</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Foundation</div>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Mission &amp; Vision</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/about">Events</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Contact</div>
            <ul className="footer-links" style={{ gap: '0.75rem' }}>
              <li style={{ fontSize: '0.8rem', color: 'rgba(250,247,242,0.4)' }}>📍 Ujjain, Madhya Pradesh</li>
              <li style={{ fontSize: '0.8rem', color: 'rgba(250,247,242,0.4)' }}>📱 +91 XXXXX XXXXX</li>
              <li style={{ fontSize: '0.8rem', color: 'rgba(250,247,242,0.4)' }}>📧 info@amritchaya.org</li>
              <li><a href="#" style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>💬 WhatsApp Us</a></li>
              {onOpenContact && (
                <li>
                  <a
                    href="#"
                    style={{ color: 'var(--gold)', fontSize: '0.8rem', marginTop: '0.5rem', display: 'inline-block' }}
                    onClick={(e) => { e.preventDefault(); onOpenContact(); }}
                  >
                    ✉️ Quick Contact Form
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2024 Amrit Chaya Foundation. All rights reserved. Designed with 🙏 in Ujjain.</span>
          <span style={{ fontSize: '0.72rem' }}>Privacy Policy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
