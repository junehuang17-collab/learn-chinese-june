import Reviews from "@/components/Reviews";

export default function ReviewsPage() {
  return (
    <main className="reviews-editorial">
      <section className="page-hero reviews-heading">
        <p className="reviews-eyebrow">STUDENT VOICES</p>
        <h1>
          <span>Real learners.</span>
          <span>Real progress.</span>
        </h1>
        <p className="reviews-intro">
          Honest words from learners who are building confidence, fluency,
          and real-world Chinese with June.
        </p>
      </section>

      <section className="section section-soft" aria-label="Student reviews">
        <Reviews />
      </section>
    </main>
  );
}
