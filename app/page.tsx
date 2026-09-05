import Link from "next/link";
import "./hero.css";
import "./reviews.css";
import "./home-redesign.css";
import { siteConfig } from "@/data/site";

const booking = siteConfig.calcom;

const moments = [
  ["☕", "COFFEE SHOP", "少糖，谢谢。", "shǎo táng, xièxie", "Less sugar, please."],
  ["🚕", "TAKING A DIDI", "我在这里下车。", "wǒ zài zhèlǐ xià chē", "I'll get off here."],
  ["🛍", "SHOPPING", "可以便宜一点吗？", "kěyǐ piányi yìdiǎn ma?", "Could you make it a little cheaper?"],
  ["🍜", "RESTAURANT", "不要香菜，谢谢。", "bú yào xiāngcài, xièxie", "No cilantro, please."],
];

const whyJune = [
  ["01", "Real-life Chinese", "Learn the phrases you actually need — not imaginary textbook conversations."],
  ["02", "Personalized lessons", "Your level, goals, interests and real-life situations shape the lesson."],
  ["03", "Speaking-focused", "Learn it, practice it, then use it in realistic conversations and tasks."],
  ["04", "Teacher-made materials", "Visual, scenario-based materials created to make useful Chinese stick."],
];

const freeResources = ["DiDi & Taxi Survival Chinese", "Ordering at a Chinese Restaurant", "Bubble Tea Chinese", "Shopping Survival Phrases"];

export default function Home() {
  return (
    <main className="home-redesign">
      <section className="home-hero">
        <div>
          <p className="hero-kicker">PRACTICAL MANDARIN · REAL-LIFE CHINESE</p>
          <h1 className="hero-title">Learn Chinese for <em>real life.</em></h1>
          <p className="hero-lead"><strong>Hi, I'm June.</strong> I'm a Mandarin teacher helping learners speak Chinese naturally in everyday situations — from ordering hotpot and taking DiDi to making Chinese friends.</p>
          <div className="hero-meta"><span>1-on-1 lessons</span><span>CTCSOL certified</span><span>Native Mandarin</span></div>
          <div className="hero-actions">
            <a className="button" href={booking} target="_blank" rel="noreferrer">Book a 30-min Trial Lesson →</a>
            <Link className="button" href="/materials">Start with free resources</Link>
          </div>
          <p className="hero-proof">Learn it. Practice it. Use it.</p>
        </div>
        <div className="hero-photo-wrap">
          <img className="hero-photo" src="/june.jpg" alt="June, Mandarin teacher" />
          <div className="photo-note"><strong>Chinese you can actually use.</strong><span>Real situations · Natural speech · Personalized practice</span></div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="trust-item"><strong>5.0</strong><span>Student rating</span></div>
        <div className="trust-item"><strong>970</strong><span>Reviews</span></div>
        <div className="trust-item"><strong>7,000+</strong><span>Lessons taught</span></div>
      </div>

      <section className="section moments">
        <div className="section-inner">
          <p className="section-kicker">REAL-LIFE CHINESE</p>
          <h2 className="section-heading">Chinese for the moments <em>you actually live.</em></h2>
          <p className="section-intro">Skip the imaginary conversations. Learn what to say when you are ordering food, getting around China, shopping, or talking to real people.</p>
          <div className="moment-grid">{moments.map(([icon, label, chinese, pinyin, english]) => (
            <article className="moment" key={label}><div className="moment-icon">{icon}</div><p className="moment-label">{label}</p><p className="moment-chinese">{chinese}</p><p className="moment-pinyin">{pinyin}</p><p className="moment-english">{english}</p></article>
          ))}</div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner about-grid">
          <div><img className="about-photo" src="/june.jpg" alt="June teaching Mandarin" /></div>
          <div className="about-copy">
            <p className="section-kicker">MEET JUNE</p>
            <h2 className="section-heading">Your teacher, not just another textbook.</h2>
            <p>I'm June, a CTCSOL-certified native Mandarin teacher. I believe Chinese becomes much easier when you learn it through situations that actually matter to you.</p>
            <p>Instead of spending the whole lesson memorizing isolated vocabulary, we'll build the language you need, practice it together, and turn it into something you can use outside class.</p>
            <div className="about-quote">“I don't want you to memorize more Chinese. I want you to be able to use it.”</div>
            <Link className="text-link" href="/about">More about June →</Link>
          </div>
        </div>
      </section>

      <section className="section" id="why-june">
        <div className="section-inner">
          <p className="section-kicker">WHY JUNE</p>
          <h2 className="section-heading">A lesson should feel <em>useful.</em></h2>
          <div className="why-grid">{whyJune.map(([number, title, text]) => (
            <article className="why-card" key={number}><span className="why-number">{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}</div>
        </div>
      </section>

      <section className="section paths" id="lessons">
        <div className="section-inner">
          <p className="section-kicker">1-ON-1 MANDARIN</p>
          <h2 className="section-heading">Find the Chinese lesson <em>you need.</em></h2>
          <div className="path-grid">{siteConfig.lessons.map((lesson, index) => (
            <article className={`path-card ${index === 0 ? "featured" : ""}`} key={lesson.title}>
              <p className="path-eyebrow">{lesson.eyebrow}</p>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
              <ul>{lesson.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href={booking} target="_blank" rel="noreferrer">Start with a lesson →</a>
            </article>
          ))}</div>
        </div>
      </section>

      <section className="section" id="resources">
        <div className="section-inner">
          <p className="section-kicker">LEARN AT YOUR OWN PACE</p>
          <h2 className="section-heading">Free to start. <em>More when you're ready.</em></h2>
          <p className="section-intro">Try practical Chinese for free, then go deeper with ready-to-use materials built around real situations in China.</p>
          <div className="resource-shell">
            <article className="resource-panel">
              <span className="resource-badge">FREE RESOURCES</span>
              <h3>Learn something useful today.</h3>
              <p>Short, practical mini-lessons with Chinese, pinyin, English and real-life examples.</p>
              <div className="resource-list">{freeResources.map((item) => <Link href="/materials" key={item}>{item} ↗</Link>)}</div>
              <Link className="button button-dark" href="/materials">Explore free resources →</Link>
            </article>
            <article className="resource-panel paid">
              <span className="resource-badge">PAID MATERIALS</span>
              <h3>Build your own Chinese toolkit.</h3>
              <p>Visual, scenario-based materials you can review, reuse and take with you before your next trip or conversation.</p>
              <div className="resource-list">{siteConfig.materials.slice(0,4).map((item) => <a href={siteConfig.payhip} target="_blank" rel="noreferrer" key={item.title}>{item.icon} {item.title} ↗</a>)}</div>
              <a className="button button-light" href={siteConfig.payhip} target="_blank" rel="noreferrer">Browse paid materials →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-inner">
          <div className="review-intro">
            <div><p className="section-kicker">STUDENT VOICES</p><h2 className="section-heading">Real learners. <em>Real progress.</em></h2></div>
            <div className="review-score-box"><strong>{siteConfig.reviewStats.rating}</strong><span>★★★★★ · {siteConfig.reviewStats.reviews} reviews</span></div>
          </div>
          <div className="review-cards">{siteConfig.reviews.slice(0,3).map((review) => (
            <article className="review-card-home" key={review.label}><div className="review-stars">★★★★★</div><blockquote>“{review.quote}”</blockquote><footer>{review.label}</footer></article>
          ))}</div>
          <div style={{marginTop:28}}><Link className="text-link" href="/reviews">Read more student reviews →</Link></div>
        </div>
      </section>

      <section className="final">
        <p className="section-kicker">READY TO USE CHINESE?</p>
        <h2>Your next conversation starts here.</h2>
        <p>Tell me what you want to be able to do in Chinese. We'll build the lesson around your real life.</p>
        <div className="final-actions"><a className="button" href={booking} target="_blank" rel="noreferrer">Book a Trial Lesson →</a><Link className="button" href="/materials">Start with free resources</Link></div>
      </section>
    </main>
  );
}
