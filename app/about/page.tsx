import { siteConfig } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <div>
      <section className="page-hero split-page">
        <div>
          <p className="eyebrow">ABOUT JUNE</p>
          <h1>Hi, I'm June.</h1>
          <p>I'm a Mandarin teacher who believes Chinese should be practical, useful and enjoyable.</p>
        </div>
        <div className="portrait-placeholder">YOUR PHOTO</div>
      </section>

      <section className="section narrow">
        <SectionTitle eyebrow="MY TEACHING PHILOSOPHY" title="Learn it. Practice it. Use it." />
        <div className="philosophy-grid">
          <div><span>01</span><h3>Learn</h3><p>Useful vocabulary and expressions you can actually remember.</p></div>
          <div><span>02</span><h3>Practice</h3><p>Real conversations and practical tasks instead of memorizing isolated language.</p></div>
          <div><span>03</span><h3>Use</h3><p>Take what you learned into your next conversation in Chinese.</p></div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="narrow">
          <SectionTitle eyebrow="WHAT I BELIEVE" title="You don't need more Chinese. You need the right Chinese." />
          <p className="large-copy">My goal is to help you feel comfortable using Mandarin in the situations that matter to you — whether that's ordering hotpot, taking a taxi, chatting with a Chinese friend or understanding Chinese media.</p>
        </div>
      </section>

      <section className="final-cta">
        <h2>Ready to make Chinese practical?</h2>
        <a className="button button-light" href={siteConfig.calcom} target="_blank" rel="noreferrer">Book a lesson</a>
      </section>
    </div>
  );
}
