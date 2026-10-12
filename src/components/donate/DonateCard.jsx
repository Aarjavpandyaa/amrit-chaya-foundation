export default function DonateCard({ item, onDonate }) {
  return (
    <div
      className="donate-card"
      style={item.featured ? { borderColor: 'var(--gold)', background: 'rgba(200,164,93,0.1)' } : {}}
      onClick={() => onDonate && onDonate(item)}
    >
      <div className="donate-amount">₹{item.amount.toLocaleString('en-IN')}</div>
      <div className="donate-label">{item.label}</div>
      <div className="donate-impact">{item.impact}</div>
    </div>
  );
}
