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
          {siteConfig.reviews.map((review) => {
            const name = review.label.split(" · ")[0].trim();
            const initials = name
              .split(/\s+/)
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0]?.toUpperCase())
              .join("");

            return (
              <blockquote className="review-card" key={review.quote}>
                <div className="stars">★★★★★</div>
                <p>“{review.quote}”</p>
                <cite>
                  <span className="review-avatar" aria-hidden="true">
                    {initials || "S"}
                  </span>
                  <span>{review.label}</span>
                </cite>
              </blockquote>
            );
          })}
        </div>
      </section>
    </div>
  );
}
