import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

const W = 1000;
const H = 4000;
const LEFT = W * 0.22;
const RIGHT = W * 0.78;

function buildPath() {
  const stops = [0.08, 0.2, 0.34, 0.48, 0.62, 0.76, 0.9];
  let d = `M ${LEFT} ${H * stops[0]}`;
  for (let i = 1; i < stops.length; i++) {
    const prevY = H * stops[i - 1];
    const y = H * stops[i];
    const x1 = i % 2 === 0 ? LEFT : RIGHT;
    const x2 = i % 2 === 0 ? RIGHT : LEFT;
    const cp = (prevY + y) / 2;
    d += ` C ${x1} ${cp}, ${x2} ${cp}, ${x2} ${y}`;
  }
  return d;
}

export function JourneyPath() {
  const ref = useRef<HTMLDivElement>(null);
  const d = useMemo(() => buildPath(), []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-0">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="journeyGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.86 0.16 75)" />
            <stop offset="50%" stopColor="oklch(0.78 0.17 60)" />
            <stop offset="100%" stopColor="oklch(0.68 0.16 25)" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={d}
          fill="none"
          stroke="oklch(1 0 0 / 0.06)"
          strokeWidth="3"
          strokeDasharray="4 14"
          strokeLinecap="round"
        />

        <motion.path
          d={d}
          fill="none"
          stroke="url(#journeyGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ pathLength }}
          filter="url(#softGlow)"
        />
      </svg>
    </div>
  );
}
