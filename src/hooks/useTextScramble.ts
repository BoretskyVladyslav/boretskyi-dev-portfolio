"use client";

import { useState, useEffect } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#_";

function randomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export function useTextScramble(finalText: string, duration = 800): string {
  const [displayText, setDisplayText] = useState(finalText);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.floor(duration / 30);
    let raf: number;

    const tick = () => {
      frame++;
      const progress = frame / totalFrames;

      const next = finalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          // Each character resolves at a staggered time based on its index
          const revealAt = i / finalText.length;
          if (progress > revealAt) return char;
          return randomChar();
        })
        .join("");

      setDisplayText(next);

      if (frame < totalFrames) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplayText(finalText);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [finalText, duration]);

  return displayText;
}
