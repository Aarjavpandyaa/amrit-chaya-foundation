export default function GalleryGrid({ items, onOpen }) {
  return (
    <div className="gallery-grid" id="galleryGrid">
      {items.map((item, index) => (
        <div key={item.src} className="gallery-item" onClick={() => onOpen(index)}>
          <img src={item.src} className="gallery-img" alt={item.caption} />
          <div className="gallery-overlay">
            <span className="gallery-caption">{item.caption}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
