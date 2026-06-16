import { jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, animate, useInView, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { p as pEdu, a as pFood, b as pWomen, c as pEnv } from "./program-env-D76AvRgW.js";
function LandingReveal({ onDone }) {
  const [stage, setStage] = useState(0);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 350),
      // glitch text
      setTimeout(() => setStage(2), 1500),
      // mark draw
      setTimeout(() => setStage(3), 3200),
      // tagline
      setTimeout(() => setStage(4), 4600),
      // unveil
      setTimeout(() => setOpen(false), 5400),
      setTimeout(onDone, 5900)
    ];
    return () => timers.forEach(clearTimeout);
  }, [onDone]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[100] overflow-hidden",
      initial: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.5 } },
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-y-0 left-0 w-1/2 bg-[#05080a]",
            animate: stage >= 4 ? { x: "-100%" } : { x: 0 },
            transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-y-0 right-0 w-1/2 bg-[#05080a]",
            animate: stage >= 4 ? { x: "100%" } : { x: 0 },
            transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "absolute inset-0 z-10 flex flex-col items-center justify-center",
            animate: stage >= 4 ? { opacity: 0, scale: 1.06 } : { opacity: 1, scale: 1 },
            transition: { duration: 0.55, ease: "easeIn" },
            children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute h-[80vmin] w-[80vmin] rounded-full",
                  style: {
                    background: "radial-gradient(circle, color-mix(in oklab, var(--saffron) 38%, transparent), transparent 65%)",
                    filter: "blur(60px)"
                  },
                  initial: { opacity: 0, scale: 0.4 },
                  animate: {
                    opacity: stage >= 2 ? 0.95 : 0.2,
                    scale: stage >= 2 ? 1.1 : 0.6
                  },
                  transition: { duration: 1.6, ease: "easeOut" }
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay",
                  style: {
                    backgroundImage: "repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 3px)"
                  }
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { children: stage === 1 && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  transition: { duration: 0.4 },
                  className: "absolute font-mono text-[11px] tracking-[0.5em] text-saffron-glow",
                  children: /* @__PURE__ */ jsx(GlitchText, { text: "INITIALIZING_NAYEPANKH" })
                }
              ) }),
              stage >= 2 && /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                stage >= 2 && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -inset-32", children: Array.from({ length: 18 }).map((_, i) => /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    className: "absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-saffron-glow",
                    initial: {
                      opacity: 0,
                      x: Math.cos(i / 18 * Math.PI * 2) * 220,
                      y: Math.sin(i / 18 * Math.PI * 2) * 220,
                      scale: 0
                    },
                    animate: {
                      opacity: [0, 1, 0.4],
                      x: Math.cos(i / 18 * Math.PI * 2) * 80,
                      y: Math.sin(i / 18 * Math.PI * 2) * 80,
                      scale: [0, 1.2, 0.6]
                    },
                    transition: {
                      duration: 1.6,
                      delay: i * 0.04,
                      ease: "easeOut"
                    }
                  },
                  i
                )) }),
                /* @__PURE__ */ jsxs(
                  motion.svg,
                  {
                    viewBox: "0 0 220 220",
                    className: "h-48 w-48 sm:h-64 sm:w-64",
                    initial: { opacity: 0, scale: 0.85 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.6 },
                    children: [
                      /* @__PURE__ */ jsxs("defs", { children: [
                        /* @__PURE__ */ jsxs("linearGradient", { id: "markGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
                          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.92 0.14 80)" }),
                          /* @__PURE__ */ jsx("stop", { offset: "55%", stopColor: "oklch(0.78 0.17 60)" }),
                          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.62 0.18 28)" })
                        ] }),
                        /* @__PURE__ */ jsxs("filter", { id: "markGlow", children: [
                          /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "3", result: "b" }),
                          /* @__PURE__ */ jsxs("feMerge", { children: [
                            /* @__PURE__ */ jsx("feMergeNode", { in: "b" }),
                            /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(
                        motion.circle,
                        {
                          cx: "110",
                          cy: "110",
                          r: "98",
                          fill: "none",
                          stroke: "url(#markGrad)",
                          strokeWidth: "1.2",
                          initial: { pathLength: 0, opacity: 0 },
                          animate: { pathLength: 1, opacity: 0.7 },
                          transition: { duration: 1.2, ease: "easeOut" }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        motion.path,
                        {
                          d: "M50 170 C 50 70, 120 35, 185 50 C 175 125, 120 175, 50 170 Z",
                          fill: "none",
                          stroke: "url(#markGrad)",
                          strokeWidth: "2.2",
                          strokeLinejoin: "round",
                          strokeLinecap: "round",
                          filter: "url(#markGlow)",
                          initial: { pathLength: 0 },
                          animate: { pathLength: 1 },
                          transition: { duration: 1.6, ease: [0.65, 0, 0.35, 1] }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        motion.path,
                        {
                          d: "M50 170 L 160 78",
                          stroke: "url(#markGrad)",
                          strokeWidth: "2.2",
                          strokeLinecap: "round",
                          fill: "none",
                          initial: { pathLength: 0 },
                          animate: { pathLength: 1 },
                          transition: { duration: 1.2, delay: 0.4, ease: "easeOut" }
                        }
                      ),
                      [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx(
                        motion.path,
                        {
                          d: `M ${65 + i * 18} ${158 - i * 16} L ${135 + i * 12} ${88 - i * 14}`,
                          stroke: "url(#markGrad)",
                          strokeWidth: "1.4",
                          strokeLinecap: "round",
                          fill: "none",
                          initial: { pathLength: 0, opacity: 0 },
                          animate: { pathLength: 1, opacity: 0.85 },
                          transition: { duration: 0.9, delay: 1 + i * 0.08, ease: "easeOut" }
                        },
                        i
                      )),
                      /* @__PURE__ */ jsx(
                        motion.path,
                        {
                          d: "M50 170 C 50 70, 120 35, 185 50 C 175 125, 120 175, 50 170 Z",
                          fill: "url(#markGrad)",
                          initial: { opacity: 0 },
                          animate: { opacity: stage >= 3 ? 0.18 : 0 },
                          transition: { duration: 0.8 }
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(AnimatePresence, { children: stage >= 3 && /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 18 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, ease: "easeOut" },
                  className: "absolute bottom-[14%] flex flex-col items-center gap-4 px-6 text-center",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "flex items-baseline gap-[0.15em] font-display text-3xl text-ivory sm:text-5xl", children: "NayePankh".split("").map((c, i) => /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        initial: { opacity: 0, y: 18 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.2 + i * 0.04, duration: 0.5 },
                        children: c
                      },
                      i
                    )) }),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { width: 0 },
                        animate: { width: "10rem" },
                        transition: { delay: 0.6, duration: 0.6 },
                        className: "h-px bg-gradient-to-r from-transparent via-saffron to-transparent"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.p,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.9, duration: 0.6 },
                        className: "text-[11px] uppercase tracking-[0.5em] text-saffron-glow",
                        children: "Empowering Dreams · Creating Change"
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(CornerTick, { className: "left-6 top-6" }),
              /* @__PURE__ */ jsx(CornerTick, { className: "right-6 top-6 scale-x-[-1]" }),
              /* @__PURE__ */ jsx(CornerTick, { className: "left-6 bottom-6 scale-y-[-1]" }),
              /* @__PURE__ */ jsx(CornerTick, { className: "right-6 bottom-6 scale-x-[-1] scale-y-[-1]" })
            ]
          }
        )
      ]
    }
  ) });
}
function CornerTick({ className = "" }) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      className: `absolute h-6 w-6 text-saffron/60 ${className}`,
      viewBox: "0 0 24 24",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: 0.2, duration: 0.6 },
      children: /* @__PURE__ */ jsx("path", { d: "M2 8 V2 H8", fill: "none", stroke: "currentColor", strokeWidth: "1.2" })
    }
  );
}
function GlitchText({ text }) {
  return /* @__PURE__ */ jsxs("span", { className: "relative", children: [
    /* @__PURE__ */ jsx("span", { className: "relative", children: text }),
    /* @__PURE__ */ jsx(
      motion.span,
      {
        "aria-hidden": true,
        className: "absolute inset-0 text-rose mix-blend-screen",
        animate: { x: [0, -2, 1, 0], opacity: [0.6, 0.9, 0.6] },
        transition: { duration: 0.4, repeat: Infinity },
        children: text
      }
    )
  ] });
}
const STOPS = [
  { id: "about", label: "About", contentSide: "right" },
  { id: "impact", label: "Impact", contentSide: "left" },
  { id: "programs", label: "Programs", contentSide: "right" },
  { id: "gallery", label: "Gallery", contentSide: "left" },
  { id: "voices", label: "Voices", contentSide: "right" },
  { id: "join", label: "Join", contentSide: "left" },
  { id: "contact", label: "Contact", contentSide: "right" }
];
const W = 1e3;
const H = 4e3;
const MARKER_GAP_PX = 22;
function buildPathFromWaypoints(pts) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const cur = pts[i];
    const cp = (prev.y + cur.y) / 2;
    d += ` C ${prev.x} ${cp}, ${cur.x} ${cp}, ${cur.x} ${cur.y}`;
  }
  return d;
}
function pointOnPath(path, t) {
  const len = path.getTotalLength();
  const at = len * Math.max(0, Math.min(1, t));
  const pt = path.getPointAtLength(at);
  const ahead = path.getPointAtLength(Math.min(len, at + len * 5e-3));
  const angle = Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180 / Math.PI;
  return { x: pt.x, y: pt.y, angle };
}
function Waypoint({
  x,
  y,
  label,
  index,
  active,
  onClick
}) {
  return /* @__PURE__ */ jsxs(
    "g",
    {
      transform: `translate(${x}, ${y})`,
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      },
      style: { cursor: "pointer" },
      role: "button",
      "aria-label": `Go to ${label}`,
      children: [
        /* @__PURE__ */ jsx(
          motion.circle,
          {
            r: active ? 14 : 10,
            fill: "var(--teal-deep)",
            stroke: active ? "var(--saffron-glow)" : "oklch(1 0 0 / 0.18)",
            strokeWidth: active ? 2.5 : 1.5,
            animate: active ? { scale: [1, 1.08, 1] } : { scale: 1 },
            transition: { duration: 1.2, repeat: active ? Infinity : 0, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ jsx("circle", { r: 4, fill: active ? "var(--saffron)" : "oklch(1 0 0 / 0.35)" }),
        /* @__PURE__ */ jsx(
          "text",
          {
            y: 28,
            textAnchor: "middle",
            fill: active ? "var(--saffron-glow)" : "oklch(1 0 0 / 0.35)",
            fontSize: "11",
            fontFamily: "Inter, system-ui, sans-serif",
            letterSpacing: "0.2em",
            children: String(index + 1).padStart(2, "0")
          }
        )
      ]
    }
  );
}
function FlyingBird({
  birdX,
  birdY,
  birdAngle,
  moving
}) {
  return /* @__PURE__ */ jsxs(motion.g, { style: { x: birdX, y: birdY, rotate: birdAngle }, children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M-6 2 Q4 -10 18 -2 Q10 6 0 7 Q-6 6 -6 2 Z",
        fill: "var(--saffron)",
        stroke: "var(--saffron-glow)",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M-6 2 Q-14 1 -20 -6", fill: "none", stroke: "var(--saffron-glow)", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx(
      motion.g,
      {
        style: { transformOrigin: "4px 0px" },
        animate: moving ? { rotate: [-8, 8, -8] } : { rotate: 0 },
        transition: { duration: 0.6, repeat: moving ? Infinity : 0, ease: "easeInOut" },
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M4 1 Q-2 -8 10 -14 Q15 -6 11 -1",
            fill: "none",
            stroke: "var(--saffron-glow)",
            strokeWidth: "1.6",
            strokeLinecap: "round"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "-2", r: "1.2", fill: "oklch(0.14 0.045 210)" })
  ] });
}
function JourneyPath() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [waypoints, setWaypoints] = useState([]);
  const [pathD, setPathD] = useState("");
  const [tTargets, setTTargets] = useState([]);
  const tTargetsRef = useRef([]);
  useEffect(() => {
    tTargetsRef.current = tTargets;
  }, [tTargets]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [birdMoving, setBirdMoving] = useState(false);
  const birdT = useMotionValue(0);
  const birdX = useMotionValue(0);
  const birdY = useMotionValue(0);
  const birdAngle = useMotionValue(0);
  const birdAnimRef = useRef(null);
  useMotionValueEvent(birdT, "change", (v) => {
    const path = pathRef.current;
    if (!path) return;
    const { x, y, angle } = pointOnPath(path, v);
    birdX.set(x);
    birdY.set(y);
    birdAngle.set(angle);
  });
  useEffect(() => {
    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      if (containerRect.width < 10 || containerRect.height < 10) return;
      const pts = [];
      for (const stop of STOPS) {
        const section = document.getElementById(stop.id);
        if (!section) continue;
        const content = section.querySelector("[data-stop-content]");
        const rect = (content ?? section).getBoundingClientRect();
        const markerXpx = stop.contentSide === "left" ? rect.right + MARKER_GAP_PX : rect.left - MARKER_GAP_PX;
        const markerYpx = rect.top + rect.height * 0.5;
        const x = (markerXpx - containerRect.left) / containerRect.width * W;
        const y = (markerYpx - containerRect.top) / containerRect.height * H;
        pts.push({
          id: stop.id,
          label: stop.label,
          x: clamp(x, 40, W - 40),
          y: clamp(y, 40, H - 40)
        });
      }
      const d = buildPathFromWaypoints(pts.map((p) => ({ x: p.x, y: p.y })));
      setWaypoints(pts);
      setPathD(d);
      if (pts.length <= 1) {
        setTTargets([0]);
        return;
      }
      const segLens = [];
      for (let i = 1; i < pts.length; i++) {
        const prev = pts[i - 1];
        const cur = pts[i];
        const cp = (prev.y + cur.y) / 2;
        const segD = `M ${prev.x} ${prev.y} C ${prev.x} ${cp}, ${cur.x} ${cp}, ${cur.x} ${cur.y}`;
        const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
        p.setAttribute("d", segD);
        segLens.push(p.getTotalLength());
      }
      const total = segLens.reduce((a, b) => a + b, 0);
      let cum = 0;
      const ends = [0];
      for (let i = 1; i < pts.length; i++) {
        cum += segLens[i - 1] ?? 0;
        ends.push(total > 0 ? cum / total : 0);
      }
      setTTargets(ends);
    };
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, []);
  useEffect(() => {
    if (tTargets.length === 0) return;
    const idx = Math.min(activeIndex, tTargets.length - 1);
    birdT.set(tTargets[idx] ?? 0);
  }, [activeIndex, birdT, tTargets]);
  const flyToIndex = (idx) => {
    var _a, _b, _c;
    const t = tTargetsRef.current[idx];
    if (t == null) return;
    setActiveIndex(idx);
    setBirdMoving(true);
    (_b = (_a = birdAnimRef.current) == null ? void 0 : _a.stop) == null ? void 0 : _b.call(_a);
    birdAnimRef.current = animate(birdT, t, {
      duration: 2.35,
      ease: "easeInOut",
      onComplete: () => setBirdMoving(false)
    });
    const targetId = (_c = STOPS[idx]) == null ? void 0 : _c.id;
    if (targetId) {
      const el = document.getElementById(targetId);
      el == null ? void 0 : el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  useEffect(() => {
    const handler = (event) => {
      const detail = event.detail;
      const id = detail == null ? void 0 : detail.id;
      if (!id) return;
      const idx = STOPS.findIndex((s) => s.id === id);
      if (idx >= 0) flyToIndex(idx);
    };
    window.addEventListener("journey:goto", handler);
    return () => window.removeEventListener("journey:goto", handler);
  }, []);
  return /* @__PURE__ */ jsx("div", { ref: containerRef, className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: `0 0 ${W} ${H}`,
      preserveAspectRatio: "none",
      className: "absolute inset-0 h-full w-full",
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs("linearGradient", { id: "journeyGrad", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "var(--saffron-glow)" }),
            /* @__PURE__ */ jsx("stop", { offset: "45%", stopColor: "var(--saffron)" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "var(--rose)" })
          ] }),
          /* @__PURE__ */ jsxs("filter", { id: "softGlow", x: "-20%", y: "-20%", width: "140%", height: "140%", children: [
            /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "6", result: "b" }),
            /* @__PURE__ */ jsxs("feMerge", { children: [
              /* @__PURE__ */ jsx("feMergeNode", { in: "b" }),
              /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: pathD,
            fill: "none",
            stroke: "oklch(1 0 0 / 0.05)",
            strokeWidth: "3",
            strokeDasharray: "6 18",
            strokeLinecap: "round",
            style: { pointerEvents: "none" }
          }
        ),
        /* @__PURE__ */ jsx("path", { ref: pathRef, d: pathD, fill: "none", stroke: "none" }),
        /* @__PURE__ */ jsx(
          motion.path,
          {
            d: pathD,
            fill: "none",
            stroke: "url(#journeyGrad)",
            strokeWidth: "6",
            strokeLinecap: "round",
            filter: "url(#softGlow)",
            style: { pointerEvents: "none" }
          }
        ),
        waypoints.map((wp, i) => /* @__PURE__ */ jsx(
          Waypoint,
          {
            x: wp.x,
            y: wp.y,
            label: wp.label,
            index: i,
            active: i === activeIndex,
            onClick: () => flyToIndex(i)
          },
          wp.id
        )),
        waypoints.length > 0 && /* @__PURE__ */ jsx(FlyingBird, { birdX, birdY, birdAngle, moving: birdMoving })
      ]
    }
  ) });
}
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return /* @__PURE__ */ jsxs("span", { ref, className: "tabular-nums", children: [
    n.toLocaleString(),
    suffix
  ] });
}
function Lightbox({ images, index, onClose, onSelect }) {
  const open = index !== null;
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onSelect(((index ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft")
        onSelect(((index ?? 0) - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, images.length, onClose, onSelect]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && index !== null && /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-10",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 },
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 bg-black/85 backdrop-blur-2xl",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.img,
          {
            src: images[index].src,
            alt: "",
            layoutId: `gallery-${index}`,
            className: "relative z-10 max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]",
            style: {
              boxShadow: "0 50px 120px -20px rgba(0,0,0,0.9), 0 0 80px -20px color-mix(in oklab, var(--saffron) 35%, transparent)"
            },
            transition: { type: "spring", damping: 28, stiffness: 220 },
            onClick: (e) => e.stopPropagation()
          },
          images[index].src
        ),
        /* @__PURE__ */ jsx(
          motion.button,
          {
            onClick: onClose,
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.15 },
            className: "absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-ivory backdrop-blur-md hover:border-saffron hover:text-saffron",
            "aria-label": "Close",
            children: "✕"
          }
        ),
        /* @__PURE__ */ jsx(NavBtn, { side: "left", onClick: (e) => {
          e.stopPropagation();
          onSelect((index - 1 + images.length) % images.length);
        } }),
        /* @__PURE__ */ jsx(NavBtn, { side: "right", onClick: (e) => {
          e.stopPropagation();
          onSelect((index + 1) % images.length);
        } }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.2 },
            className: "absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-xs tracking-[0.3em] text-ivory/60 uppercase",
            children: [
              index + 1,
              " / ",
              images.length
            ]
          }
        )
      ]
    }
  ) });
}
function NavBtn({
  side,
  onClick
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: `absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-ivory backdrop-blur-md hover:border-saffron hover:text-saffron sm:grid ${side === "left" ? "left-5" : "right-5"}`,
      "aria-label": side === "left" ? "Previous" : "Next",
      children: side === "left" ? "‹" : "›"
    }
  );
}
const hero = "/assets/hero-DzegsPfe.jpg";
const g1 = "/assets/g1-C_fqyrGv.jpg";
const g2 = "/assets/g2-BeIFDR0c.jpg";
const g3 = "/assets/g3-BAfPuCCZ.jpg";
const g4 = "/assets/g4-CUf4Y9qi.jpg";
const g5 = "/assets/g5-B4JVgNT-.jpg";
const g6 = "/assets/g6-99YRVB56.jpg";
function Page() {
  const [revealed, setRevealed] = useState(false);
  return /* @__PURE__ */ jsxs("main", { className: "relative overflow-x-clip", children: [
    /* @__PURE__ */ jsx(LandingReveal, { onDone: () => setRevealed(true) }),
    /* @__PURE__ */ jsx(Nav, { visible: revealed }),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(JourneyPath, {}),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsx(About, {}),
        /* @__PURE__ */ jsx(Impact, {}),
        /* @__PURE__ */ jsx(Programs, {}),
        /* @__PURE__ */ jsx(Gallery, {}),
        /* @__PURE__ */ jsx(Voices, {}),
        /* @__PURE__ */ jsx(Volunteer, {}),
        /* @__PURE__ */ jsx(Contact, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Nav({
  visible
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const items = ["About", "Impact", "Programs", "Gallery", "Voices", "Join"];
  return /* @__PURE__ */ jsx(motion.header, { initial: {
    y: -40,
    opacity: 0
  }, animate: visible ? {
    y: 0,
    opacity: 1
  } : {
    y: -40,
    opacity: 0
  }, transition: {
    duration: 0.7,
    ease: "easeOut"
  }, className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-white/5 bg-[var(--teal-deep)]/80 backdrop-blur-xl" : "bg-transparent"}`, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4", children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-saffron-glow to-rose text-[var(--teal-deep)]", children: /* @__PURE__ */ jsx(FeatherIcon, {}) }),
      /* @__PURE__ */ jsxs("span", { className: "font-display text-lg text-ivory", children: [
        "Naye",
        /* @__PURE__ */ jsx("em", { className: "not-italic text-saffron", children: "Pankh" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-7 text-sm text-ivory/80 md:flex", children: items.map((i) => /* @__PURE__ */ jsx("a", { href: `#${i.toLowerCase()}`, className: "transition hover:text-saffron", onClick: (e) => {
      var _a;
      e.preventDefault();
      const id = i.toLowerCase();
      (_a = document.getElementById(id)) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      window.dispatchEvent(new CustomEvent("journey:goto", {
        detail: {
          id
        }
      }));
      window.history.replaceState({}, "", `#${id}`);
    }, children: i }, i)) }),
    /* @__PURE__ */ jsx("a", { href: "#join", className: "rounded-full bg-saffron px-4 py-2 text-sm font-medium text-[var(--teal-deep)] transition hover:bg-saffron-glow", onClick: (e) => {
      var _a;
      e.preventDefault();
      const id = "join";
      (_a = document.getElementById(id)) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      window.dispatchEvent(new CustomEvent("journey:goto", {
        detail: {
          id
        }
      }));
      window.history.replaceState({}, "", `#${id}`);
    }, children: "Donate" })
  ] }) });
}
function FeatherIcon() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "h-5 w-5", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }),
    /* @__PURE__ */ jsx("line", { x1: "16", y1: "8", x2: "2", y2: "22" }),
    /* @__PURE__ */ jsx("line", { x1: "17.5", y1: "15", x2: "9", y2: "15" })
  ] });
}
function Hero() {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return /* @__PURE__ */ jsxs("section", { id: "top", ref, className: "relative isolate min-h-[100svh] overflow-hidden", children: [
    /* @__PURE__ */ jsxs(motion.div, { style: {
      scale,
      y
    }, className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx("img", { src: hero, alt: "", className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[var(--teal-deep)]/60 via-[var(--teal-deep)]/65 to-[var(--teal-deep)]" })
    ] }),
    /* @__PURE__ */ jsx(motion.div, { style: {
      opacity: fade
    }, className: "mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-32", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 24
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: 0.2,
      duration: 0.9,
      ease: "easeOut"
    }, className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-saffron-glow", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse-glow rounded-full bg-saffron" }),
        "Begin the journey"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-display text-5xl leading-[1.02] text-ivory text-balance sm:text-7xl md:text-[88px]", children: [
        "Changing lives through",
        " ",
        /* @__PURE__ */ jsx("em", { className: "not-italic text-saffron-glow", children: "collective action." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base text-ivory/75 sm:text-lg", children: "NayePankh Foundation walks alongside communities — building access to education, dignity, and opportunity. Every scroll is a step on the journey." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap items-center gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "#about", className: "group inline-flex items-center gap-3 rounded-full bg-saffron px-6 py-3 text-sm font-medium text-[var(--teal-deep)] transition hover:bg-saffron-glow", onClick: (e) => {
          var _a;
          e.preventDefault();
          const id = "about";
          (_a = document.getElementById(id)) == null ? void 0 : _a.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          window.dispatchEvent(new CustomEvent("journey:goto", {
            detail: {
              id
            }
          }));
          window.history.replaceState({}, "", `#${id}`);
        }, children: [
          "Explore the journey",
          /* @__PURE__ */ jsx("span", { className: "transition group-hover:translate-x-1", children: "→" })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#join", className: "inline-flex items-center gap-3 rounded-full border border-ivory/20 px-6 py-3 text-sm font-medium text-ivory transition hover:border-saffron hover:text-saffron", onClick: (e) => {
          var _a;
          e.preventDefault();
          const id = "join";
          (_a = document.getElementById(id)) == null ? void 0 : _a.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          window.dispatchEvent(new CustomEvent("journey:goto", {
            detail: {
              id
            }
          }));
          window.history.replaceState({}, "", `#${id}`);
        }, children: "Become a volunteer" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/40", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em]", children: [
      "Scroll",
      /* @__PURE__ */ jsx("span", { className: "h-10 w-px animate-drift bg-gradient-to-b from-saffron to-transparent" })
    ] }) })
  ] });
}
function Stop({
  id,
  index,
  side,
  eyebrow,
  children
}) {
  const ref = useRef(null);
  return /* @__PURE__ */ jsx("section", { id, ref, className: `relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-28 ${side === "left" ? "justify-start" : "justify-end"}`, children: /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    y: 60
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    amount: 0.25
  }, transition: {
    duration: 0.9,
    ease: "easeOut"
  }, className: "relative w-full max-w-2xl", "data-stop-content": true, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-saffron", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-7 w-7 place-items-center rounded-full border border-saffron/40 text-saffron-glow", children: index }),
      eyebrow
    ] }),
    children
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsxs(Stop, { id: "about", index: "01", side: "right", eyebrow: "The Origin", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-ivory text-balance sm:text-6xl", children: "A small feather, a long flight." }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed text-ivory/75", children: 'NayePankh — meaning "new wings" — began with a simple belief: every life deserves the chance to rise. We work with grassroots networks across India to turn empathy into infrastructure, and intent into measurable change.' }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-3", children: [{
      k: "Mission",
      v: "Give every child a fair chance at education and dignity."
    }, {
      k: "Vision",
      v: "Communities that lift themselves through collective hands."
    }, {
      k: "Values",
      v: "Empathy. Transparency. Persistence. Joy."
    }].map((b) => /* @__PURE__ */ jsxs(motion.div, { whileHover: {
      y: -4
    }, className: "rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-xl text-saffron-glow", children: b.k }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-ivory/70", children: b.v })
    ] }, b.k)) })
  ] });
}
function Impact() {
  const stats = [{
    n: 500,
    s: "+",
    label: "Volunteers on ground"
  }, {
    n: 1e4,
    s: "+",
    label: "Lives directly impacted"
  }, {
    n: 150,
    s: "+",
    label: "Campaigns delivered"
  }, {
    n: 50,
    s: "+",
    label: "Communities reached"
  }];
  return /* @__PURE__ */ jsxs(Stop, { id: "impact", index: "02", side: "left", eyebrow: "The Measure", children: [
    /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl text-ivory text-balance sm:text-6xl", children: [
      "Numbers we earn,",
      " ",
      /* @__PURE__ */ jsx("em", { className: "not-italic text-saffron-glow", children: "one story at a time." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-ivory/70", children: "Behind every figure is a face, a meal, a classroom that wasn't there yesterday." }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-[var(--teal-deep)] p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-4xl text-saffron-glow sm:text-5xl", children: /* @__PURE__ */ jsx(Counter, { to: s.n, suffix: s.s }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.2em] text-ivory/60", children: s.label })
    ] }, s.label)) })
  ] });
}
const PROGRAMS = [{
  t: "Education",
  img: pEdu,
  d: "Classrooms, scholarships, and books for first-generation learners."
}, {
  t: "Food Security",
  img: pFood,
  d: "Hot meals and ration kits during crisis and beyond."
}, {
  t: "Women Empowerment",
  img: pWomen,
  d: "Skills, livelihoods, and safe spaces to grow."
}, {
  t: "Environment",
  img: pEnv,
  d: "Tree drives, clean-ups and climate education."
}];
function Programs() {
  return /* @__PURE__ */ jsxs(Stop, { id: "programs", index: "03", side: "right", eyebrow: "The Work", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-ivory text-balance sm:text-6xl", children: "Four roots, one canopy." }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-ivory/70", children: "Our programs intertwine — feed a family and a child returns to school; train a mother and a village shifts." }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2", children: PROGRAMS.map((p) => /* @__PURE__ */ jsxs(motion.article, { whileHover: "hover", className: "group relative aspect-[5/6] overflow-hidden rounded-3xl border border-white/10", children: [
      /* @__PURE__ */ jsx(motion.img, { src: p.img, alt: p.t, loading: "lazy", variants: {
        hover: {
          scale: 1.08
        }
      }, transition: {
        duration: 0.8,
        ease: "easeOut"
      }, className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx(motion.div, { variants: {
        hover: {
          opacity: 1
        }
      }, initial: {
        opacity: 0.4
      }, className: "absolute inset-0 bg-gradient-to-t from-[var(--teal-deep)] via-[var(--teal-deep)]/30 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-2xl text-ivory", children: p.t }),
        /* @__PURE__ */ jsx(motion.p, { variants: {
          hover: {
            opacity: 1,
            y: 0
          }
        }, initial: {
          opacity: 0,
          y: 10
        }, transition: {
          duration: 0.4
        }, className: "mt-2 max-w-sm text-sm text-ivory/80", children: p.d }),
        /* @__PURE__ */ jsx(motion.div, { variants: {
          hover: {
            opacity: 1,
            y: 0
          }
        }, initial: {
          opacity: 0,
          y: 10
        }, transition: {
          duration: 0.4,
          delay: 0.05
        }, className: "mt-4", children: /* @__PURE__ */ jsx("a", { href: "/programs", className: "inline-flex items-center gap-2 rounded-full bg-saffron px-4 py-1.5 text-xs font-medium text-[var(--teal-deep)] hover:bg-saffron-glow", children: "Learn more →" }) })
      ] })
    ] }, p.t)) })
  ] });
}
const GALLERY = [{
  src: g1,
  h: "row-span-2"
}, {
  src: g2,
  h: ""
}, {
  src: g3,
  h: ""
}, {
  src: g4,
  h: "row-span-2"
}, {
  src: g5,
  h: ""
}, {
  src: g6,
  h: "row-span-2"
}];
function Gallery() {
  const [active, setActive] = useState(null);
  return /* @__PURE__ */ jsxs(Stop, { id: "gallery", index: "04", side: "left", eyebrow: "The Field", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-ivory text-balance sm:text-6xl", children: "Moments from the road." }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-ivory/70", children: "Photos from camps, classrooms, kitchens and quiet corners where change happens. Tap any frame to step inside." }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3", children: GALLERY.map((g, i) => /* @__PURE__ */ jsxs(motion.button, { onClick: () => setActive(i), whileHover: {
      y: -4
    }, animate: {
      filter: active !== null && active !== i ? "blur(6px) brightness(0.4)" : "blur(0px) brightness(1)",
      scale: active !== null && active !== i ? 0.97 : 1
    }, transition: {
      duration: 0.4,
      ease: "easeOut"
    }, className: `group relative overflow-hidden rounded-2xl border border-white/10 ${g.h}`, children: [
      /* @__PURE__ */ jsx(motion.img, { layoutId: `gallery-${i}`, src: g.src, alt: "", loading: "lazy", className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-3 left-3 translate-y-2 text-xs uppercase tracking-[0.3em] text-ivory opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100", children: "View ↗" })
    ] }, i)) }),
    /* @__PURE__ */ jsx(Lightbox, { images: GALLERY, index: active, onClose: () => setActive(null), onSelect: setActive })
  ] });
}
const VOICES = [{
  q: "I joined a literacy camp for a weekend. I left with a year-long commitment and a second family.",
  a: "Ananya, Volunteer"
}, {
  q: "My daughter is the first in our family to finish school. NayePankh stood by her every term.",
  a: "Sushila, Parent"
}, {
  q: "The women's collective bought our first sewing machine. Today there are twelve of us.",
  a: "Priya, Founder member"
}];
function Voices() {
  return /* @__PURE__ */ jsxs(Stop, { id: "voices", index: "05", side: "right", eyebrow: "The People", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-ivory text-balance sm:text-6xl", children: "Voices from the path." }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-3", children: VOICES.map((v, i) => /* @__PURE__ */ jsxs(motion.figure, { initial: {
      opacity: 0,
      y: 24
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.1,
      duration: 0.7
    }, className: "rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-3xl text-saffron", children: '"' }),
      /* @__PURE__ */ jsx("blockquote", { className: "text-ivory/85", children: v.q }),
      /* @__PURE__ */ jsxs("figcaption", { className: "mt-5 text-xs uppercase tracking-[0.25em] text-ivory/50", children: [
        "— ",
        v.a
      ] })
    ] }, i)) })
  ] });
}
function Volunteer() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsxs(Stop, { id: "join", index: "06", side: "left", eyebrow: "Your Step", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-ivory text-balance sm:text-6xl", children: "Walk a stretch of the journey with us." }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-ivory/70", children: "Volunteer a weekend, sponsor a child, or run a drive in your city. Every wing counts." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      setSent(true);
    }, className: "mt-10 grid gap-4 rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur sm:grid-cols-2", children: [
      /* @__PURE__ */ jsx("input", { required: true, placeholder: "Your name", className: "rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory placeholder:text-ivory/40 outline-none focus:border-saffron" }),
      /* @__PURE__ */ jsx("input", { required: true, type: "email", placeholder: "Email address", className: "rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory placeholder:text-ivory/40 outline-none focus:border-saffron" }),
      /* @__PURE__ */ jsx("input", { placeholder: "City", className: "rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory placeholder:text-ivory/40 outline-none focus:border-saffron" }),
      /* @__PURE__ */ jsxs("select", { className: "rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory outline-none focus:border-saffron", children: [
        /* @__PURE__ */ jsx("option", { className: "bg-[var(--teal-deep)]", children: "I want to volunteer" }),
        /* @__PURE__ */ jsx("option", { className: "bg-[var(--teal-deep)]", children: "I want to donate" }),
        /* @__PURE__ */ jsx("option", { className: "bg-[var(--teal-deep)]", children: "I want to partner" })
      ] }),
      /* @__PURE__ */ jsx("textarea", { placeholder: "Tell us a little about you", rows: 3, className: "sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory placeholder:text-ivory/40 outline-none focus:border-saffron" }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-3 font-medium text-[var(--teal-deep)] transition hover:bg-saffron-glow", children: sent ? "Thank you — we'll be in touch ✓" : "Count me in" })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxs(Stop, { id: "contact", index: "07", side: "right", eyebrow: "The Destination", children: [
    /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl text-ivory text-balance sm:text-6xl", children: [
      "End of the path,",
      " ",
      /* @__PURE__ */ jsx("em", { className: "not-italic text-saffron-glow", children: "start of something." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-white/10 bg-card/60 p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-saffron", children: "Write to us" }),
        /* @__PURE__ */ jsx("a", { href: "mailto:hello@nayepankh.org", className: "mt-2 block font-display text-2xl text-ivory hover:text-saffron", children: "hello@nayepankh.org" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-ivory/60", children: "We respond to every email — usually within two working days." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-white/10 bg-card/60 p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-saffron", children: "Find us" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-2xl text-ivory", children: "Varanasi · Lucknow · Delhi NCR" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-4 text-sm text-ivory/70", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-saffron", children: "Instagram" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-saffron", children: "LinkedIn" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-saffron", children: "YouTube" })
        ] })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative border-t border-white/10 bg-[var(--teal-deep)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-10 text-center text-sm text-ivory/50", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-display text-ivory", children: [
      /* @__PURE__ */ jsx(FeatherIcon, {}),
      " NayePankh Foundation"
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " NayePankh Foundation. All wings reserved."
    ] })
  ] }) });
}
export {
  Page as component
};
