import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{siteConfig.brand}</strong>
        <p>{siteConfig.description}</p>
      </div>
      <div className="footer-links">
        <Link href="/lessons">Lessons</Link>
        <Link href="/materials">Materials</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </div>
      <div className="copyright">© 2026 {siteConfig.brand}</div>
    </footer>
  );
}