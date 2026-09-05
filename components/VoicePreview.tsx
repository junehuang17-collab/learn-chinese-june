"use client";

import { useEffect, useState } from "react";

const sample = "你好！今天我们学一点真正能用的中文。比如，怎么点奶茶，怎么叫滴滴，还有怎么和中国人自然聊天。";

export default function VoicePreview() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, []);

  const toggle = () => {
    if (!window.speechSynthesis) return;

    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(sample);
    utterance.lang = "zh-CN";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    setPlaying(true);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button className="voice-preview" type="button" onClick={toggle} aria-label="Play Mandarin pronunciation sample">
      <span className="voice-play">{playing ? "Ⅱ" : "▶"}</span>
      <span className="voice-copy">
        <strong>{playing ? "Playing Mandarin sample" : "Hear Mandarin · 15s"}</strong>
        <small>Tap to hear a real-life Chinese sample</small>
      </span>
      <span className="voice-wave" aria-hidden="true"><i /><i /><i /><i /><i /></span>
    </button>
  );
}
