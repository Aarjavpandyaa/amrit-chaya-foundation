import { poojas } from '../../data/poojas';
import PoojaCard from '../pooja/PoojaCard';
import SectionHeader from '../common/SectionHeader';

export default function PoojaSection() {
  return (
    <section className="poojas-section">
      <div className="section-inner">
        <SectionHeader
          label="Sacred Rituals"
          title="Featured Poojas"
          desc="Book online or visit in person. Every pooja comes with WhatsApp confirmation, prasad delivery, and video recording."
        />
        <div className="poojas-grid">
          {poojas.slice(0, 7).map((pooja) => (
            <PoojaCard key={pooja.id} pooja={pooja} />
          ))}
        </div>
      </div>
    </section>
  );
}
