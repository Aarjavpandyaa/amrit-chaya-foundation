import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="hero-bg"></div>
      <div className="hero-pattern"></div>
      <svg className="hero-mandala" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(350,350)">
          <circle r="300" fill="none" stroke="#C8A45D" strokeWidth="1" />
          <circle r="250" fill="none" stroke="#C8A45D" strokeWidth="0.5" />
          <circle r="200" fill="none" stroke="#C8A45D" strokeWidth="1" />
          <circle r="150" fill="none" stroke="#C8A45D" strokeWidth="0.5" />
          <circle r="100" fill="none" stroke="#C8A45D" strokeWidth="1" />
          <circle r="50" fill="none" stroke="#C8A45D" strokeWidth="0.5" />
          <g id="petal">
            <ellipse rx="20" ry="80" fill="none" stroke="#C8A45D" strokeWidth="0.8" transform="translate(0,-120)" />
          </g>
          {[30,60,90,120,150,180,210,240,270,300,330].map((deg) => (
            <use key={deg} href="#petal" transform={`rotate(${deg})`} />
          ))}
        </g>
      </svg>
      <div className="hero-content">
        <div className="hero-eyebrow">॥ Ujjain — City of Mahakal ॥</div>
        <h1 className="hero-title">
          <span className="hero-title-gold">अमृत</span> छाया<br />Foundation
        </h1>
        <p className="hero-subtitle">Experience Divine Ujjain — Sacred Poojas &amp; Gau Seva</p>
        <p className="hero-tagline">"Where Devotion Meets Divine Experience"</p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => navigate('/pooja')}>Book Pooja</button>
          <button className="btn-outline" onClick={() => navigate('/tours')}>Explore Yatra</button>
          <button className="btn-outline" onClick={() => navigate('/donate')}>Donate Now</button>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
