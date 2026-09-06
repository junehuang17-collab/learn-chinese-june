"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
import { gsap } from "gsap";
import { siteConfig } from "@/data/site";

const VIDEO_SRC = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4";

export default function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const media = mediaRef.current;
    if (!video || !media) return;

    let frame = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (event: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = ((event.clientX - cx) / cx) * 18;
      targetY = ((event.clientY - cy) / cy) * 12;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      gsap.set(media, { x: currentX, y: currentY });
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const handleMetadata = () => {
    if (videoRef.current) videoRef.current.playbackRate = 1.12;
  };

  return (
    <section className="cinematic-hero" aria-label="Learn Chinese with June">
      <div ref={mediaRef} className="cinematic-media">
        <video ref={videoRef} src={VIDEO_SRC} autoPlay muted loop playsInline onLoadedMetadata={handleMetadata} className="cinematic-video" aria-hidden="true" />
      </div>
      <div className="cinematic-overlay" />
      <div className="cinematic-grain" />
      <div className="cinematic-copy">
        <p className="cinematic-kicker">PRACTICAL MANDARIN · REAL-LIFE CHINESE</p>
        <h1><span>Chinese for the life</span><span className="muted-line">you actually live.</span></h1>
        <p className="cinematic-lead">Learn natural Mandarin through the situations that matter — traveling, eating, shopping, getting around China, and having real conversations.</p>
        <div className="cinematic-actions">
          <a className="cinematic-button primary" href={siteConfig.calcom} target="_blank" rel="noreferrer">Book a trial lesson</a>
          <Link className="cinematic-button glass" href="/materials">Explore free resources</Link>
        </div>
        <div className="cinematic-proof"><span>1-on-1</span><i /><span>CTCSOL certified</span><i /><span>Native Mandarin</span></div>
      </div>
      <div className="cinematic-bottom">
        <div><strong>Learn it. Practice it. Use it.</strong><span>Teacher-made lessons built around your real life.</span></div>
        <div className="cinematic-secure"><Lock size={13} strokeWidth={1.5} /><span>PERSONALIZED · PRACTICAL · SPEAKING-FOCUSED</span></div>
      </div>
    </section>
  );
}
