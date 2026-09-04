import { siteConfig } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

export default function LessonsPage() {
  return (
    <div>
      <section className="page-hero">
        <p className="eyebrow">1-ON-1 MANDARIN</p>
        <h1>Practical Chinese lessons built around you.</h1>
        <p>Personalized Mandarin lessons for real-life communication, travel, daily life and long-term speaking goals.</p>
        <a className="button button-dark" href={siteConfig.calendly} target="_blank" rel="noreferrer">Book a lesson</a>
      </section>

      <section className="section">
        <SectionTitle eyebrow="WHO IT'S FOR" title="Is this for you?" />
        <div className="check-grid">
          {["Beginners", "Travelers to China", "Expats living in China", "A2–B2 learners", "Students who want to improve speaking", "Learners who want more natural Chinese"].map((item) => (
            <div className="check-item" key={item}>✓ <span>{item}</span></div>
          ))}
        </div>
      </section>

      <section className="section section-burgundy">
        <SectionTitle light eyebrow="LEARNING PATHS" title="Choose what you want to improve." />
        <div className="lesson-grid">
          {siteConfig.lessons.map((lesson) => (
            <article className="lesson-card" key={lesson.title}>
              <p className="card-eyebrow">{lesson.eyebrow}</p>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
              <ul>{lesson.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href={siteConfig.calendly} target="_blank" rel="noreferrer">Book a lesson →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section narrow">
        <SectionTitle eyebrow="LESSON STYLE" title="No boring textbook conversations." />
        <div className="feature-list">
          <div><strong>Real situations</strong><p>Learn what to say when you actually need Chinese.</p></div>
          <div><strong>Useful language</strong><p>Focus on high-frequency vocabulary and natural expressions.</p></div>
          <div><strong>Personalized practice</strong><p>Your lesson changes with your level, goals and interests.</p></div>
        </div>
      </section>
    </div>
  );
}