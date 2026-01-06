"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Clients Served", value: 100, suffix: "+" },
  { label: "Scripts Built", value: 400, suffix: "+" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue(0, value, 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const animateValue = (start: number, end: number, duration: number) => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for slot machine effect - fast start, slow end
      const easeOut = 1 - Math.pow(1 - progress, 3);

      // Add some "overshoot" randomness in the beginning like a slot machine
      let current: number;
      if (progress < 0.7) {
        // During spin: show random numbers cycling fast
        const randomOffset = Math.floor(Math.random() * 20) - 10;
        current = Math.floor(easeOut * end) + randomOffset;
        current = Math.max(0, Math.min(current, end + 50));
      } else {
        // Settling: approach final value
        current = Math.floor(easeOut * end);
      }

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(end);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold tabular-nums">
      {displayValue}{suffix}
    </div>
  );
}

export function AnimatedStats() {
  return (
    <div className="flex justify-center gap-8 md:gap-16 mb-12">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
