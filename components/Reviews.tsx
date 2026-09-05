const anatoliiAvatar = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABgAGADASIAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAAAAQFBgcBAgMI/8QAMhAAAgEDAwIFAgUDBQAAAAAAAQIDAAQRBQYSITEHE0FRYRQiCBUycZEjQoFiobHB0f/EABkBAAMBAQEAAAAAAAAAAAAAAAACAwQBBf/EAB8RAAMAAwACAwEAAAAAAAAAAAABAgMRIRIxBCJRE//aAAwDAQACEQMRAD8A9O0UUU5wKKKKACiiuVzd29mnO5njhX3dgM1wDrRTDc730a3fgszSt7KvT+aadR8UdOsIhILKebrghXUEfzS+c/o/86/CaUVAz4waPEivc2d1CD17hsfxTxoviNtjXsC01ONHPThOPLOfYZ70TkmvTOOKXtEkooBDAMCCCMgj1opxQooooAK1lljgiaWV1jjQcmZjgAViaaO2heaZ1jijUs7scBQPWqX3Z4hSbpuXs7Fium8uKgdDLj+4/HsKlmyrHO2Pjxu3oWeI/jJc2enzwbV4GYZU3Mi5/wAoP+6gu1r/AFbWLOa9vLu5utQkzlpmySc0g3A9lDfWyQAkocyZOQakOlXdvbACN06jJ4jtWLLmfjtm/BjnfBtXRtVtr4anf3ZSJDlk+KcbDQY5bufVILs3EIUExmnHUbuO8tDB+ssO3vXLR7uXT7adpohHbxrkjA6081taRS1wj+5ZvMjPFeDHpj2FMllK1tGML0PrSJ97W+49SkjKeSiyMoz64OKcZcM5AI446YpXDlGSa2yRbS33rW3p8Wl281vnJtpTyQ/+Grk2V4k6TvLlbIfpdQjH320h6n5U+orzimorpU2CobNII7u4iuhf2kzwTK3JHQ4ZT8GtOOtIncpnsqiikuq6jDpGmXWozkCK2iaVs+wGa0ECrPGbeLNdQbWs5DxbEl2yHuPRP+c/4qvNOCxQ3M0ziJEGEFR7UNwTavuSW+d/68shkZz179qUXdvPHAWnkLGQ5GOgrz8r866aYXjJH9xap+WwyXHIs7E8a5+GGuz3up3drezZeVfsz6Vx31YSQ2VveSSLwclePtUe2nMtlrkVyJQqqc596q8KrGcx5XNItq9uNTsWYw/dxPTpTPre59Vt9CuVuplTzhxVcdTUju9asPy/6v6qIEDJU+tVBujcba3ekg8YUP2j3pfjYmq+xfPlTn6iC2uXhYcAQWJOasHbN99RaIJW5nt+1Vh57deAI+TT/o+55dIZBJHyhNa807nhhitMmWvIkU68TkmkbXBEfbAHatvrINVKzRyBj3xXC6iLHCnGKzLhbez23UB8btS+i2LPAH4vdyJEPkZ6j+Kn1VL+IuZ4tvaSqd2un/2Q";
const stefaniaAvatar = "data:image/jpeg;base64,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";

type AvatarTone = "burgundy" | "rose" | "sand" | "ivory";

type Review = {
  name: string;
  lessons: number;
  date: string;
  quote: string;
  flag: string;
  avatar?: string;
  initial?: string;
  avatarTone?: AvatarTone;
};

const reviews: Review[] = [
  {
    name: "Anatolii (涛利)", lessons: 224, date: "2025-04-27",
    quote: "I've been learning Chinese with June for almost a year now, and it's been a wonderful experience. Her lessons are always lively and engaging - she brings a lot of energy and enthusiasm into each class. June carefully prepares her own materials, tailoring them to my level and goals, and she helps me understand even the subtle nuances of the language. She also shares a lot about Chinese culture, which makes learning even more interesting and enriching. I especially appreciate that she is very flexible and always ready to adjust the lessons according to my needs. I'm really happy with my progress and definitely plan to keep learning with her!",
    flag: "🇺🇸", avatar: anatoliiAvatar
  },
  {
    name: "Paige", lessons: 200, date: "2025-02-11",
    quote: "June tailors our classes to fit my needs exactly. She perfectly blends a good amount of reading, speaking, and listening into our lessons on day to day and deep conversational topics. I have been seeing June regularly for the past few years (albeit not as often as I should) and I am so happy with my progress. I can now read essentially basic Chinese (menus, text messages, books with my daughter), my listening comprehension has improved greatly, and I am able to converse and express myself. She is an amazing teacher, I highly recommend her.",
    flag: "🇺🇸", initial: "P", avatarTone: "rose"
  },
  {
    name: "Stefania Sharp", lessons: 262, date: "2021-12-27",
    quote: "I've been learning with June for 7 months now and I am still amazed when I can read a passage. I had zero knowledge when we started. Her patience and flexibility ensure the lesson is unique to me and my goals.",
    flag: "🇺🇸", avatar: stefaniaAvatar
  },
  {
    name: "Dianna Smith", lessons: 6, date: "2026-09-05",
    quote: "June is a great teacher that makes every lesson fun and engaging. I feel much more comfortable speaking Chinese and asking questions for words I don't know. Even though I have just started my learning journey with her, I feel confident I will continue to learn a lot.",
    flag: "🇺🇸", initial: "DS", avatarTone: "sand"
  },
  {
    name: "George", lessons: 28, date: "2026-08-24",
    quote: "Another great lesson.",
    flag: "🇺🇸", initial: "G", avatarTone: "burgundy"
  }
];

export default function Reviews() {
  return (
    <div className="review-grid review-masonry">
      {reviews.map((review) => (
        <article className="review-card" key={`${review.name}-${review.date}`}>
          <div className="review-avatar-wrap">
            {review.avatar ? (
              <img className="review-avatar review-avatar-photo" src={review.avatar} alt={`${review.name} profile`} />
            ) : (
              <span className={`review-avatar review-avatar-initial review-avatar-${review.avatarTone ?? "burgundy"}`} aria-hidden="true">
                {review.initial || review.name.slice(0, 1).toUpperCase()}
              </span>
            )}
            <span className="review-flag" aria-hidden="true">{review.flag}</span>
          </div>

          <blockquote className="review-quote">“{review.quote}”</blockquote>

          <footer className="review-footer">
            <div className="review-student-meta">
              <strong>{review.name} · {review.lessons} Chinese lessons</strong>
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
            </div>
            <time dateTime={review.date}>{new Date(review.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
          </footer>
        </article>
      ))}
    </div>
  );
}
