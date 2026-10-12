import { useNavigate } from 'react-router-dom';

export default function TourCard({ tour, onBook }) {
  const navigate = useNavigate();

  return (
    <div className="tour-card">
      <div className="tour-img" style={{ background: `url('${tour.image}') center/cover` }}>
        <span className="tour-days-badge">{tour.days}</span>
      </div>
      <div className="tour-info">
        <div className="tour-name">{tour.name}</div>
        <p className="tour-desc">{tour.desc}</p>
        <div className="tour-meta">
          {tour.meta.map((item) => (
            <div key={item.text} className="tour-meta-item">
              <span className="tour-meta-icon">{item.icon}</span> {item.text}
            </div>
          ))}
        </div>
        <div className="tour-price">{tour.price} <small>per person</small></div>
        <button
          className="btn-book"
          style={{ width: 'auto', padding: '0.6rem 1.5rem' }}
          onClick={() => onBook ? onBook(tour) : navigate('/tours')}
        >
          Book Package
        </button>
      </div>
    </div>
  );
}
