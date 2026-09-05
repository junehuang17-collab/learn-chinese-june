const additionalReviews = [
  {
    name: "Samuel Greeley",
    lessons: 32,
    date: "2026年1月23日",
    quote: "June is awesome. She has great energy and is very patient. I really enjoy the lessons. She has a prepared lesson plan but is flexible to stop and work on problem areas. Recommended.",
    flag: "🇺🇸",
    initial: "S",
    tone: "#f9c63d",
  },
  {
    name: "Kevin Foreiter",
    lessons: 41,
    date: "2026年1月16日",
    quote: "Best Chinese teacher ever! Always looking forward to the next lesson and improving my Chinese.",
    flag: "🇺🇸",
    initial: "K",
    tone: "#4bb2bf",
  },
];

export default function ReviewsAdditional() {
  return (
    <>
      {additionalReviews.map((review) => (
        <blockquote className="review-card review-card-additional" key={`${review.name}-${review.date}`}>
          <div className="review-profile">
            <div className="review-avatar-wrap">
              <span
                className="review-avatar review-avatar-initial"
                style={{ backgroundColor: review.tone }}
                aria-hidden="true"
              >
                {review.initial}
              </span>
              <span className="review-flag" aria-hidden="true">{review.flag}</span>
            </div>
            <div className="review-student-meta">
              <strong>{review.name}</strong>
              <span>{review.lessons} Chinese lessons</span>
            </div>
            <span className="review-pin" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 4 5 5" />
                <path d="M14 5 5 14l5 5 9-9" />
                <path d="m5 19-3 3" />
                <path d="m14 10 4 4" />
              </svg>
            </span>
          </div>
          <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p>“{review.quote}”</p>
          <footer className="review-date">
            <time>{review.date}</time>
          </footer>
        </blockquote>
      ))}
    </>
  );
}
