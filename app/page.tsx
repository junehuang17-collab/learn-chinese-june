import Link from "next/link";
import { siteConfig } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">PRACTICAL MANDARIN · REAL LIFE IN CHINA</p>
          <h1>{siteConfig.tagline}</h1>
          <p className="hero-subtitle">{siteConfig.description}</p>
          <div className="button-row">
            <a className="button button-dark" href={siteConfig.calendly} target="_blank" rel="noreferrer">Book a lesson</a>
            <Link className="button button-light" href="/materials">Explore materials</Link>
          </div>
          <p className="micro-copy">1-on-1 lessons · Practical situations · Personalized learning</p>
        </div>
       <div className="hero-visual">
  <img
    src="/june.jpg"
    alt="June - Mandarin teacher"
    className="hero-photo"
  />

  <div className="floating-card">
    <span>🇨🇳</span>
    <div>
      <strong>Chinese you can actually use.</strong>
      <small>Learn it · Practice it · Use it</small>
    </div>
  </div>
</div>
      </section>

      <section className="section section-soft">
        <SectionTitle eyebrow="REAL-LIFE CHINESE" title="Chinese you can actually use." description="Forget textbook conversations. Learn the words, phrases and situations you are most likely to meet in everyday life." />
        <div className="scenario-grid">
          {[
            ["🚕", "Take a Taxi", "Use Chinese when taking a taxi or using DiDi."],
            ["🍜", "Order Food", "Order confidently at Chinese restaurants and cafés."],
            ["🛍️", "Go Shopping", "Ask about sizes, prices, colors and trying things on."],
            ["💬", "Make Chinese Friends", "Build confidence in real conversations and social situations."]
          ].map(([icon, title, text]) => (
            <div className="scenario-card" key={title}>
              <span className="scenario-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="MY APPROACH" title="Learn through real-life situations." />
        <div className="steps">
          {[
            ["01", "Learn", "Useful vocabulary and expressions you can actually remember."],
            ["02", "Practice", "Real conversations and practical tasks instead of endless drills."],
            ["03", "Use", "Take what you learned into your next conversation in Chinese."]
          ].map(([number, title, text]) => (
            <div className="step" key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-burgundy">
        <SectionTitle light eyebrow="1-ON-1 MANDARIN" title="Choose your learning path." description="Personalized lessons built around your level, goals and real-life needs." />
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

      <section className="section">
        <SectionTitle eyebrow="LEARNING MATERIALS" title="Learn beyond the classroom." description="Practical Chinese materials designed for review, practice and real-life use." />
        <div className="material-grid">
          {siteConfig.materials.slice(0, 3).map((item) => (
            <article className="material-card" key={item.title}>
              <div className="material-art">{item.icon}</div>
              <div className="material-content">
                <span className="level">{item.level}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={siteConfig.payhip} target="_blank" rel="noreferrer">Get the materials →</a>
              </div>
            </article>
          ))}
        </div>
        <div className="center-link"><Link href="/materials">View all materials →</Link></div>
      </section>

      <section className="section section-soft">
        <SectionTitle eyebrow="STUDENT VOICES" title="What my students say." />
        <div className="review-grid">
          {siteConfig.reviews.map((review) => (
            <blockquote className="review-card" key={review.quote}>
              <div className="stars">★★★★★</div>
              <p>“{review.quote}”</p>
              <cite>{review.label}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">READY TO START?</p>
        <h2>Make Chinese practical.</h2>
        <p>Whether you are preparing for China or simply want to speak more confidently, let's make Chinese useful, natural and enjoyable.</p>
        <div className="button-row center">
          <a className="button button-light" href={siteConfig.calendly} target="_blank" rel="noreferrer">Book your lesson</a>
          <Link className="button button-outline-light" href="/materials">Browse materials</Link>
        </div>
      </section>
    </>
  );
}
