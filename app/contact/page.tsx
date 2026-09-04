import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <div>
      <section className="page-hero">
        <p className="eyebrow">LET'S CONNECT</p>
        <h1>Have a question?</h1>
        <p>Whether you have a question about lessons or learning materials, feel free to get in touch.</p>
        <div className="contact-actions">
          <a className="button button-dark" href={`mailto:${siteConfig.email}`}>Email June</a>
          <a className="button button-light" href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </section>
    </div>
  );
}