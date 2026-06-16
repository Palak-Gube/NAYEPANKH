import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Technex-style staged reveal:
 *  Stage 0  black + faint ember
 *  Stage 1  scanlines + glitch text "INITIALIZING"
 *  Stage 2  curtain split + mark draws (stroke) + particles
 *  Stage 3  tagline types in, mark settles
 *  Stage 4  whole overlay sweeps up and unveils the hero
 */
export function LandingReveal({ onDone }: { onDone: () => void }) {
  const [stage, setStage] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 350),   // glitch text
      setTimeout(() => setStage(2), 1500),  // mark draw
      setTimeout(() => setStage(3), 3200),  // tagline
      setTimeout(() => setStage(4), 4600),  // unveil
      setTimeout(() => setOpen(false), 5400),
      setTimeout(onDone, 5900),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* TWO CURTAINS that split apart at stage 4 */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#05080a]"
            animate={stage >= 4 ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#05080a]"
            animate={stage >= 4 ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* CONTENT (above curtains, fades before split) */}
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center"
            animate={stage >= 4 ? { opacity: 0, scale: 1.06 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeIn" }}
          >
            {/* ambient ember */}
            <motion.div
              className="absolute h-[80vmin] w-[80vmin] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--saffron) 38%, transparent), transparent 65%)",
                filter: "blur(60px)",
              }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{
                opacity: stage >= 2 ? 0.95 : 0.2,
                scale: stage >= 2 ? 1.1 : 0.6,
              }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />

            {/* scanlines */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 3px)",
              }}
            />

            {/* STAGE 1 — glitch boot text */}
            <AnimatePresence>
              {stage === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute font-mono text-[11px] tracking-[0.5em] text-saffron-glow"
                >
                  <GlitchText text="INITIALIZING_NAYEPANKH" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* STAGE 2+ — the mark */}
            {stage >= 2 && (
              <div className="relative">
                {/* orbiting particles */}
                {stage >= 2 && (
                  <div className="pointer-events-none absolute -inset-32">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <motion.span
                        key={i}
                        className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-saffron-glow"
                        initial={{
                          opacity: 0,
                          x: Math.cos((i / 18) * Math.PI * 2) * 220,
                          y: Math.sin((i / 18) * Math.PI * 2) * 220,
                          scale: 0,
                        }}
                        animate={{
                          opacity: [0, 1, 0.4],
                          x: Math.cos((i / 18) * Math.PI * 2) * 80,
                          y: Math.sin((i / 18) * Math.PI * 2) * 80,
                          scale: [0, 1.2, 0.6],
                        }}
                        transition={{
                          duration: 1.6,
                          delay: i * 0.04,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                )}

                <motion.svg
                  viewBox="0 0 220 220"
                  className="h-48 w-48 sm:h-64 sm:w-64"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <defs>
                    <linearGradient id="markGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="oklch(0.92 0.14 80)" />
                      <stop offset="55%" stopColor="oklch(0.78 0.17 60)" />
                      <stop offset="100%" stopColor="oklch(0.62 0.18 28)" />
                    </linearGradient>
                    <filter id="markGlow">
                      <feGaussianBlur stdDeviation="3" result="b" />
                      <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* outer ring */}
                  <motion.circle
                    cx="110" cy="110" r="98"
                    fill="none"
                    stroke="url(#markGrad)"
                    strokeWidth="1.2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />

                  {/* feather body */}
                  <motion.path
                    d="M50 170 C 50 70, 120 35, 185 50 C 175 125, 120 175, 50 170 Z"
                    fill="none"
                    stroke="url(#markGrad)"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    filter="url(#markGlow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
                  />
                  {/* spine */}
                  <motion.path
                    d="M50 170 L 160 78"
                    stroke="url(#markGrad)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                  />
                  {/* barbs */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.path
                      key={i}
                      d={`M ${65 + i * 18} ${158 - i * 16} L ${135 + i * 12} ${88 - i * 14}`}
                      stroke="url(#markGrad)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.85 }}
                      transition={{ duration: 0.9, delay: 1 + i * 0.08, ease: "easeOut" }}
                    />
                  ))}

                  {/* fill flash */}
                  <motion.path
                    d="M50 170 C 50 70, 120 35, 185 50 C 175 125, 120 175, 50 170 Z"
                    fill="url(#markGrad)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: stage >= 3 ? 0.18 : 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.svg>
              </div>
            )}

            {/* STAGE 3 — wordmark + tagline */}
            <AnimatePresence>
              {stage >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute bottom-[14%] flex flex-col items-center gap-4 px-6 text-center"
                >
                  <div className="flex items-baseline gap-[0.15em] font-display text-3xl text-ivory sm:text-5xl">
                    {"NayePankh".split("").map((c, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.04, duration: 0.5 }}
                      >
                        {c}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "10rem" }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent"
                  />
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="text-[11px] uppercase tracking-[0.5em] text-saffron-glow"
                  >
                    Empowering Dreams · Creating Change
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* corner ticks */}
            <CornerTick className="left-6 top-6" />
            <CornerTick className="right-6 top-6 scale-x-[-1]" />
            <CornerTick className="left-6 bottom-6 scale-y-[-1]" />
            <CornerTick className="right-6 bottom-6 scale-x-[-1] scale-y-[-1]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CornerTick({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={`absolute h-6 w-6 text-saffron/60 ${className}`}
      viewBox="0 0 24 24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <path d="M2 8 V2 H8" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </motion.svg>
  );
}

function GlitchText({ text }: { text: string }) {
  return (
    <span className="relative">
      <span className="relative">{text}</span>
      <motion.span
        aria-hidden
        className="absolute inset-0 text-rose mix-blend-screen"
        animate={{ x: [0, -2, 1, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 0.4, repeat: Infinity }}
      >
        {text}
      </motion.span>
    </span>
  );
}
