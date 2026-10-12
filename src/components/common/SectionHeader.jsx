export default function SectionHeader({ label, title, desc, centered = false }) {
  const style = centered ? { textAlign: 'center' } : {};
  const labelStyle = centered ? { justifyContent: 'center', ...style } : {};
  const dividerStyle = centered ? { margin: '1.5rem auto' } : {};
  const descStyle = centered ? { margin: '0 auto', maxWidth: '600px', ...style } : {};

  return (
    <>
      <div className="section-label" style={labelStyle}>{label}</div>
      <h2 className="section-title" style={style}>{title}</h2>
      <div className="gold-divider" style={dividerStyle}></div>
      {desc && <p className="section-desc" style={descStyle}>{desc}</p>}
    </>
  );
}
