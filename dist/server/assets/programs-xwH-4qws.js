import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { p as pEdu, a as pFood, b as pWomen, c as pEnv } from "./program-env-D76AvRgW.js";
const PROGRAM_BLOCKS = [{
  key: "education",
  title: "Education",
  image: pEdu,
  stat: "1,500+ learners",
  blurb: "Community classrooms, scholarships, and after-school support so first-generation learners don’t have to drop out.",
  bullets: ["Bridge classes for children out of school", "Scholarships for secondary and college education", "Mentoring circles with volunteers and alumni"]
}, {
  key: "food",
  title: "Food Security",
  image: pFood,
  stat: "250,000+ meals",
  blurb: "From crisis relief to everyday nutrition, our kitchens and ration drives keep families from slipping into hunger.",
  bullets: ["Hot meal camps around construction sites and slums", "Monthly ration kits for high‑risk households", "Nutrition awareness sessions with mothers"]
}, {
  key: "women",
  title: "Women Empowerment",
  image: pWomen,
  stat: "600+ women",
  blurb: "Skills, livelihoods and safe peer spaces so women can earn, lead, and shape decisions at home and in the community.",
  bullets: ["Self‑help groups and savings circles", "Tailoring, crafts and digital literacy trainings", "Legal and financial awareness sessions"]
}, {
  key: "environment",
  title: "Environment",
  image: pEnv,
  stat: "40+ neighbourhoods",
  blurb: "Climate education, clean‑up drives and tree plantations that put children and youth at the heart of local action.",
  bullets: ["Tree drives with schools and RWAs", "Lake & street clean‑ups with volunteers", "Workshops on waste segregation and climate"]
}];
function ProgramsPage() {
  return /* @__PURE__ */ jsx("main", { className: "min-h-[100svh] bg-[var(--teal-deep)]/60 pb-20 pt-24 text-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col gap-10 px-6", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-saffron-glow", children: "The Work in Detail" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-3 font-display text-4xl leading-tight sm:text-5xl", children: [
          "Programs that move",
          " ",
          /* @__PURE__ */ jsxs("span", { className: "text-saffron-glow", children: [
            "from relief",
            /* @__PURE__ */ jsx("span", { className: "text-rose", children: " to resilience." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-sm text-ivory/75 sm:text-base", children: "Each program is a wing of the same bird — supporting children, families and neighbourhoods at different points of their journey. Together, they turn short‑term help into long‑term change." })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-full border border-ivory/25 px-4 py-2 text-xs font-medium text-ivory/80 transition hover:border-saffron hover:text-saffron", children: "← Back to journey" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid gap-6 md:grid-cols-[1.4fr,1fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 rounded-3xl border border-white/10 bg-card/70 p-6 backdrop-blur", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-saffron-glow", children: "How we choose where to work" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-ivory/75", children: "We prioritise communities with low public investment, high school drop‑out rates, and limited safety nets. Our teams work with local leaders, schools and volunteers before we launch any program." }),
        /* @__PURE__ */ jsxs("ul", { className: "grid gap-3 text-sm text-ivory/80 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "rounded-2xl border border-white/10 bg-white/5 p-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-ivory/50", children: "Listen" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1", children: "Door‑to‑door conversations, mapping existing support, and understanding what people say they need." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "rounded-2xl border border-white/10 bg-white/5 p-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-ivory/50", children: "Co‑design" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1", children: "Programs are designed with community volunteers so they can run even when teams move on." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "rounded-2xl border border-white/10 bg-white/5 p-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-ivory/50", children: "Measure" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1", children: "Simple but strong tracking — attendance, learning, income, and stories — to keep us honest." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "rounded-2xl border border-white/10 bg-white/5 p-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-ivory/50", children: "Share back" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1", children: "Regular reports to donors and communities so everyone knows what changed and what didn't." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-3xl border border-saffron/25 bg-gradient-to-b from-saffron/15 via-rose/10 to-transparent p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-saffron-glow", children: "At a glance" }),
        /* @__PURE__ */ jsxs("dl", { className: "mt-2 space-y-3 text-sm text-ivory/85", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-4", children: [
            /* @__PURE__ */ jsx("dt", { children: "Communities we serve" }),
            /* @__PURE__ */ jsx("dd", { className: "font-display text-lg text-saffron-glow", children: "Urban slums & peri‑urban pockets" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-4", children: [
            /* @__PURE__ */ jsx("dt", { children: "Primary focus" }),
            /* @__PURE__ */ jsx("dd", { className: "font-display text-lg text-saffron-glow", children: "Children, women & youth" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-4", children: [
            /* @__PURE__ */ jsx("dt", { children: "Approach" }),
            /* @__PURE__ */ jsx("dd", { className: "font-display text-lg text-saffron-glow", children: "Relief → Rehabilitation → Leadership" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-ivory/70", children: "You can support a single program or back our entire ecosystem — either way, your contribution strengthens the same communities." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mt-4 space-y-8", children: PROGRAM_BLOCKS.map((p, idx) => /* @__PURE__ */ jsxs(motion.article, { initial: {
      opacity: 0,
      y: 24
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      amount: 0.25
    }, transition: {
      duration: 0.7,
      delay: idx * 0.05
    }, className: "grid gap-6 rounded-3xl border border-white/10 bg-card/70 p-6 backdrop-blur md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl", children: [
        /* @__PURE__ */ jsx(motion.img, { src: p.image, alt: p.title, loading: "lazy", className: "h-full w-full object-cover", whileHover: {
          scale: 1.04
        }, transition: {
          duration: 0.7,
          ease: "easeOut"
        } }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-ivory/80 backdrop-blur", children: p.stat })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("header", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-ivory", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-ivory/80", children: p.blurb })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-ivory/80", children: p.bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-[5px] h-1.5 w-1.5 rounded-full bg-saffron" }),
          /* @__PURE__ */ jsx("span", { children: b })
        ] }, b)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "#join", className: "inline-flex items-center gap-2 rounded-full bg-saffron px-4 py-2 text-xs font-medium text-[var(--teal-deep)] shadow-sm transition hover:bg-saffron-glow", children: "I want to support this" }),
          /* @__PURE__ */ jsx("a", { href: "#top", className: "inline-flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-2 text-xs font-medium text-ivory/75 transition hover:border-saffron hover:text-saffron", children: "Read stories from the journey" })
        ] })
      ] })
    ] }, p.key)) })
  ] }) });
}
export {
  ProgramsPage as component
};
