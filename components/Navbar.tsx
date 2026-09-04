import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="brand">
        <span className="brand-mark">J</span>
        <span>{siteConfig.brand}</span>
      </Link>
      <nav>
        <Link href="/lessons">Lessons</Link>
        <Link href="/materials">Materials</Link>
        <Link href="/about">About</Link>
        <Link href="/reviews">Reviews</Link>
        <a className="nav-cta" href={siteConfig.calendly} target="_blank" rel="noreferrer">Book a lesson</a>
      </nav>
    </header>
  );
}