import { siteConfig } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

export default function MaterialsPage() {
  return (
    <div>
      <section className="page-hero">
        <p className="eyebrow">CHINA SURVIVAL CHINESE</p>
        <h1>Practical Chinese materials for real life.</h1>
        <p>Review useful vocabulary, phrases and conversations whenever you need them.</p>
      </section>

      <section className="section">
        <SectionTitle eyebrow="DIGITAL MATERIALS" title="Learn beyond the classroom." />
        <div className="material-grid wide">
          {siteConfig.materials.map((item) => (
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
      </section>

      <section className="final-cta">
        <p className="eyebrow">WANT TO PRACTICE WITH ME?</p>
        <h2>Turn useful Chinese into confident Chinese.</h2>
        <a className="button button-light" href={siteConfig.calendly} target="_blank" rel="noreferrer">Book a 1-on-1 lesson</a>
      </section>
    </div>
  );
}