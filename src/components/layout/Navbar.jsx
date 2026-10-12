import { NavLink, useNavigate } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/pooja', label: 'Poojas' },
  { to: '/tours', label: 'Yatra' },
  { to: '/goshala', label: 'Goshala' },
  { to: '/about', label: 'Foundation' },
  { to: '/gallery', label: 'Gallery' },
];

export default function Navbar({ ctaLabel = 'Book Pooja', ctaPath = '/pooja' }) {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-logo">
        <img
          src="/images/logo.png"
          className="nav-logo-icon"
          alt="Amrit Chaya Logo"
          style={{ objectFit: 'contain', borderRadius: '50%' }}
        />
        <div>
          <div className="nav-logo-text">अमृत छाया</div>
          <span className="nav-logo-sub">Amrit Chaya Foundation</span>
        </div>
      </div>
      <ul className="nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              style={({ isActive }) => isActive ? { color: 'var(--gold)' } : undefined}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="nav-cta" onClick={() => navigate(ctaPath)}>
        {ctaLabel}
      </button>
    </nav>
  );
}
