import Link from "next/link";
import "./hero.css";
import "./reviews.css";
import { siteConfig } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";
import Reviews from "@/components/Reviews";
import ReviewsAdditional from "@/components/ReviewsAdditional";

const booking = siteConfig.calcom;

const scenarioPills = [
  ["☕", "COFFEE SHOP", "少糖，谢谢。", "shǎo táng, xièxie", "Less sugar, please."],
  ["🚕", "TAKING A DIDI", "我在这里下车。", "wǒ zài zhèlǐ xià chē", "I'll get off here."],
  ["🛍", "SHOPPING", "可以便宜一点吗？", "kěyǐ piányi yìdiǎn ma?", "Could you make it a little cheaper?"],
  ["🍜", "RESTAURANT", "不要香菜，谢谢。", "bú yào xiāngcài, xièxie", "No cilantro, please."],
];

export default function Home() {
  return (
    <>
      <section className="hero hero-editorial hero-redesign">
        <div className="hero-copy">
          <p className="hero-badge">CTCSOL CERTIFIED · NATIVE MANDARIN</p>
          <h1><span>Chinese for the life</span><span>you actually live.</span></h1>
          <div className="hero-highlights">
            <div className="hero-highlight"><span className="hero-highlight-icon" aria-hidden="true">💬</span><p><strong>Natural Daily Speech</strong> — Order food, take DiDi, and chat without feeling like a textbook robot.</p></div>
            <div className="hero-highlight"><span className="hero-highlight-icon" aria-hidden="true">🎯</span><p><strong>From “Huh?” to “Aha!”</strong> — Complex tones &amp; grammar broken down into simple, memorable tricks.</p></div>
            <div className="hero-highlight"><span className="hero-highlight-icon" aria-hidden="true">🌏</span><p><strong>Real Culture, Not Scripted</strong> — Tailored lessons for travel, HSK, or daily life in modern China.</p></div>
          </div>
          <div className="button-row">
            <a className="button hero-primary" href={booking} target="_blank" rel="noreferrer">Book a 30-min Trial Lesson</a>
            <Link className="button hero-secondary" href="/materials">Get Free Starter Kit ↗</Link>
          </div>
          <p className="hero-trust">⭐ 5.0 Rating · 7,000+ Lessons Taught · Students from 20+ Countries</p>
        </div>
        <div className="hero-visual">
          <div className="hero-video-frame">
            <iframe className="hero-video" src="https://www.youtube.com/embed/vXsn0LZshmw" title="June's Mandarin teacher introduction" loading="eager" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      </section>

      <section className="section intro-strip">
        <div className="moments-layout">
          <div className="moments-heading"><p className="eyebrow">REAL-LIFE CHINESE</p><h2><span>Four phrases.</span><span>Four real moments.</span></h2><p className="intro-note">The Chinese you actually need — in cafés, cars, shops and restaurants.</p></div>
          <div className="moments-grid">{scenarioPills.map(([icon, scene, chinese, pinyin, english]) => (<article className="moment-card" key={scene}><div className="moment-card-header"><span className="moment-card-icon" aria-hidden="true">{icon}</span><span className="moment-card-scene">{scene}</span></div><div className="moment-card-main"><strong>{chinese}</strong><em>{pinyin}</em></div><div className="moment-card-translation">{english}</div></article>))}</div>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="REAL-LIFE CHINESE" title="Learn Chinese for moments like these." description="Skip the imaginary textbook conversations. Practice the words, phrases and reactions that make daily life in China easier." />
        <div className="scenario-grid">{[["01", "Call a DiDi", "Tell the driver where you are, ask them to wait, and handle the ride without panic."],["02", "Order Like a Local", "Hotpot, coffee, bubble tea — know what to say about size, toppings, spice and sugar."],["03", "Shop with Confidence", "Ask for another size, negotiate politely, compare prices and actually understand the answer."],["04", "Talk to Real People", "Go beyond “你好”. Make small talk, react naturally and keep a conversation going."]].map(([number, title, text]) => (<div className="scenario-card" key={title}><span className="scenario-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="scenario-arrow">↗</span></div>))}</div>
      </section>

      <section className="section section-soft">
        <SectionTitle eyebrow="HOW WE LEARN" title="Less memorizing. More actually speaking." description="Each lesson starts with something you want to do in Chinese — then we build the language you need to make it happen." />
        <div className="steps">{[["01", "Learn", "Useful vocabulary, natural expressions and the little details textbooks miss."],["02", "Practice", "Role-play real situations until the words stop feeling like a script."],["03", "Use", "Take it outside class — on your next trip, message, meal or conversation."]].map(([number, title, text]) => (<div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>))}</div>
      </section>

      <section className="section section-burgundy">
        <SectionTitle light eyebrow="1-ON-1 MANDARIN" title="Your life becomes the lesson plan." description="No generic course. We build your lessons around your level, goals, interests and the situations you actually need." />
        <div className="lesson-grid">{siteConfig.lessons.map((lesson) => (<article className="lesson-card" key={lesson.title}><p className="card-eyebrow">{lesson.eyebrow}</p><h3>{lesson.title}</h3><p>{lesson.description}</p><ul>{lesson.items.map((item) => <li key={item}>{item}</li>)}</ul><a href={booking} target="_blank" rel="noreferrer">Try a lesson →</a></article>))}</div>
      </section>

      <section className="section materials-feature">
        <SectionTitle eyebrow="PRACTICAL MATERIALS" title="Chinese you can take with you." description="Short, visual, scenario-based materials for the moments when you actually need Chinese — with useful phrases you can review and reuse." />
        <div className="materials-showcase"><div className="starter-mockup"><div className="mockup-cover"><span>JUNE'S</span><strong>CHINA<br />SURVIVAL<br />CHINESE</strong><small>100+ phrases for real life · with audio</small></div><div className="mockup-page"><span>01 · ORDERING FOOD</span><b>少辣，谢谢。</b><em>shǎo là, xièxie</em><small>Less spicy, please.</small></div></div><div className="materials-copy"><span className="free-badge">FREE STARTER PREVIEW</span><h3>Start with the Chinese you need first.</h3><p>Get a preview of my practical survival Chinese materials — real situations, natural phrases, pinyin and useful English explanations.</p><div className="material-pills"><span>🍜 Food</span><span>🚕 DiDi</span><span>🧋 Bubble tea</span><span>🛍️ Shopping</span></div><Link className="button button-dark" href="/materials">Get the Free Starter Kit →</Link></div></div>
        <div className="material-grid material-grid-home">{siteConfig.materials.slice(0, 3).map((item) => (<article className="material-card" key={item.title}><div className="material-art">{item.icon}</div><div className="material-content"><span className="level">{item.level}</span><h3>{item.title}</h3><p>{item.description}</p><a href={siteConfig.payhip} target="_blank" rel="noreferrer">Preview / get materials →</a></div></article>))}</div>
      </section>

      <section className="section section-soft reviews-editorial">
        <SectionTitle eyebrow="STUDENT VOICES" title="Real learners. Real progress." description="The goal isn't to sound perfect in a textbook. It's to feel comfortable using Chinese in real life." />
        <div className="review-summary"><div className="review-score"><strong>{siteConfig.reviewStats.rating}</strong><div className="stars">★★★★★</div><span>{siteConfig.reviewStats.reviews} reviews</span></div><div className="review-stat"><strong>{siteConfig.reviewStats.attendance}</strong><span>Attendance</span></div><div className="review-stat"><strong>{siteConfig.reviewStats.response}</strong><span>Response rate</span></div></div>
        <div className="review-tags">{siteConfig.reviewTags.map(([label, count]) => <span key={label}>{label} <b>· {count}</b></span>)}</div>
        <div className="review-grid review-masonry">
          <Reviews />
          <ReviewsAdditional />
        </div>
      </section>

      <section className="final-cta"><p className="eyebrow">READY TO USE CHINESE?</p><h2>Stop studying Chinese.<br />Start living in it.</h2><p>Book a low-pressure 20-minute trial lesson and tell me what you want to be able to do in Chinese. We'll take it from there.</p><div className="button-row center"><a className="button button-light" href={booking} target="_blank" rel="noreferrer">Book a 20-min Trial Lesson</a><Link className="button button-outline-light" href="/materials">Get Free Starter Kit</Link></div></section>
    </>
  );
}
