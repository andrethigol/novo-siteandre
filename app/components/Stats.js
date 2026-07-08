"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

function CountUp({ value }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value.replace(/[0-9.]/g, (c) => (c === "." ? "." : "0")));
  const hasRun = useRef(false);

  useEffect(() => {
    const match = value.match(/([\d.]+)/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const numeric = parseFloat(match[1]);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index + match[1].length);
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;

    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const duration = 1400;
            const start = performance.now();
            function tick(now) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = (numeric * eased).toFixed(decimals);
              setDisplay(`${prefix}${current}${suffix}`);
              if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <b ref={ref}>{display}</b>;
}

export default function Stats() {
  return (
    <div className="stats-grid reveal">
      {site.stats.map((s) => (
        <div className="stat-box" key={s.label}>
          <CountUp value={s.value} />
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
