export default function PageHero({ image, title, subtitle }) {
  return (
    <section className="page-hero">
      <img src={image} className="hero-img-bg" alt={title} />
      <div>
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-subtitle">{subtitle}</p>
      </div>
    </section>
  );
}
