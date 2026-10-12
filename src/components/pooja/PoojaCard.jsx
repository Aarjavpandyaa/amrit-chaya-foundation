import { useNavigate } from 'react-router-dom';

export default function PoojaCard({ pooja, onBook }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onBook) {
      onBook(pooja);
    } else {
      navigate(`/pooja/${pooja.id}`);
    }
  };

  return (
    <div className="pooja-card">
      {pooja.image && (
        <div className="pooja-img-container">
          <img src={pooja.image} className="pooja-img" alt={pooja.name} />
        </div>
      )}
      <div className="pooja-card-header">
        <div className="pooja-name">{pooja.name}</div>
        <div className="pooja-duration">{pooja.duration}</div>
      </div>
      <div className="pooja-card-body">
        <div className="pooja-price">{pooja.price} <span>onwards</span></div>
        <p className="pooja-benefit">{pooja.benefit}</p>
        <div className="pooja-tags">
          {pooja.tags.map((tag) => (
            <span key={tag} className="pooja-tag">{tag}</span>
          ))}
        </div>
        <button className="btn-book" onClick={handleClick}>
          {onBook ? 'Book Now' : 'View Details & Book'}
        </button>
      </div>
    </div>
  );
}
