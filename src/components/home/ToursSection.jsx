import { tours } from '../../data/tours';
import TourCard from '../tours/TourCard';
import SectionHeader from '../common/SectionHeader';

export default function ToursSection() {
  return (
    <section className="tours-section">
      <div className="section-inner">
        <SectionHeader
          label="Sacred Journeys"
          title="Spiritual Tour Packages"
          desc="All-inclusive yatra packages with transport, accommodation, meals, and personal pandit guide."
        />
        <div className="tours-grid">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
