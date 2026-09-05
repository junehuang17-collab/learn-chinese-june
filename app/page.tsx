import Link from "next/link";
import { siteConfig } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

const booking = siteConfig.calcom;

export default function Home() {
  return (
    <>
      <section className="hero hero-editorial">
        <div className="hero-copy">
          <p className="eyebrow">PRACTICAL MANDARIN · REAL LIFE IN CHINA</p>
          <h1>{siteConfig.tagline}</h1>
          <p className="hero-subtitle">{siteConfig.description}</p>
          <div className="button-row">
            <a className="button button-dark" href={booking} target="_blank" rel="noreferrer">Book a lesson</a>
            <Link className="button button-light" href="/materials">Explore materials</Link>
          </div>
          <p className="micro-copy">1-on-1 · Real situations · Personalized lessons</p>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src="/june.jpg" alt="June - Mandarin teacher" className="hero-photo" />
          </div>
          <div className="floating-card">
            <span>中</span>
            <div>
              <strong>Chinese you can actually use.</strong>
              <small>Learn it · Practice it · Use it</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft intro-strip">
        <div className="intro-strip-inner">
          <p className="eyebrow">NOT JUST TEXTBOOK CHINESE</p>
          <p className="intro-statement">From ordering hotpot to making Chinese friends, learn the language you need for the life you actually want to live.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="REAL-LIFE CHINESE" title="Chinese for the moments that matter." description="Forget textbook conversations. Learn the words, phrases and situations you are most likely to meet in everyday life." />
        <div className="scenario-grid">
          {[
            ["01", "Take a Taxi", "Use Chinese when taking a taxi or using DiDi."],
            ["02", "Order Food", "Order confidently at Chinese restaurants and cafés."],
            ["03", "Go Shopping", "Ask about sizes, prices, colors and trying things on."],
            ["04", "Make Chinese Friends", "Build confidence in real conversations and social situations."]
          ].map(([number, title, text]) => (
            <div className="scenario-card" key={title}>
              <span className="scenario-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="scenario-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <SectionTitle eyebrow="MY APPROACH" title="Learn it. Practice it. Use it." description="Every lesson is designed around a practical goal, so you leave class knowing what to say — and when to say it." />
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
        <SectionTitle light eyebrow="1-ON-1 MANDARIN" title="A lesson built around your life." description="Personalized lessons built around your level, goals and real-life needs." />
        <div className="lesson-grid">
          {siteConfig.lessons.map((lesson) => (
            <article className="lesson-card" key={lesson.title}>
              <p className="card-eyebrow">{lesson.eyebrow}</p>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
              <ul>{lesson.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href={booking} target="_blank" rel="noreferrer">Book a lesson →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="LEARNING MATERIALS" title="Keep learning between lessons." description="Practical Chinese materials designed for review, practice and real-life use." />
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

      <section className="section section-soft reviews-editorial">
        <SectionTitle eyebrow="STUDENT VOICES" title="Real learners. Real progress." description="A few words from students who have learned to use Chinese with more confidence." />
        <div className="review-grid">
          {siteConfig.reviews.map((review) => (
            <blockquote className="review-card" key={review.quote}>
              <div className="stars">★★★★★</div>
              <p>“{review.quote}”</p>
              <cite>{review.label}</cite>
            </blockquote>
          ))}
        </div>
        <div className="review-source">
          <span>More student feedback</span>
          <a href="https://www.italki.com/teacher/1610231" target="_blank" rel="noreferrer">View June on italki ↗</a>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">READY TO START?</p>
        <h2>Let's make Chinese part of your real life.</h2>
        <p>Whether you are preparing for China or simply want to speak more confidently, let's make Chinese useful, natural and enjoyable.</p>
        <div className="button-row center">
          <a className="button button-light" href={booking} target="_blank" rel="noreferrer">Book your lesson</a>
          <Link className="button button-outline-light" href="/materials">Browse materials</Link>
        </div>
      </section>
    </>
  );
}
