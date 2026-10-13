"use client";

import { useLayoutEffect, useRef, type CSSProperties } from "react";

/** Lets a quotation surface word by word, as if being read aloud, the first time it is seen. */
export function QuoteReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;
    el.dataset.armed = "true";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-seen");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <p ref={ref} className={`${className} quote-reveal`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={i} className="quote-word" style={{ "--d": `${i * 0.045}s` } as CSSProperties}>
            {word}{" "}
          </span>
        ))}
      </span>
    </p>
  );
}
