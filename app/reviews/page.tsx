import { siteConfig } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

export default function ReviewsPage() {
  return (
    <div>
      <section className="page-hero">
        <p className="eyebrow">STUDENT VOICES</p>
        <h1>Real learning. Real progress.</h1>
        <p>Here are a few words from students about their learning experience.</p>
      </section>

      <section className="section section-soft">
        <SectionTitle eyebrow="REVIEWS" title="What students say." />
        <div className="review-grid">
          {siteConfig.reviews.map((review) => (
            <blockquote className="review-card" key={review.quote}>
              <div className="stars">★★★★★</div>
              <p>“{review.quote}”</p>
              <cite>{review.label}</cite>
            </blockquote>
          ))}
        </div>
        <p className="note">Replace these placeholders with your real student reviews before publishing.</p>
      </section>
    </div>
  );
}